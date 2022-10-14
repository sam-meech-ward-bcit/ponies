import styled from 'styled-components'
import { prisma } from '../server/db/client'



const Pony = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export default function Home( { ponies } ) {
  return (
    <div>
      
      {ponies.map(pony => (
        <Pony key={pony.id}>
          <h1>{pony.name}</h1>
          <p>{pony.federalRegistryNumber}</p>
          <p>{pony.breed}</p>
          <p>{pony.color}</p>
        </Pony>
      ))}
      
    </div>
  )
}

export async function getStaticProps() {
  const ponies = await prisma.pony.findMany()

  // invalidate cache after 60 seconds

  return {
    revalidate: 60,
    props: {
      ponies: JSON.parse(JSON.stringify(ponies)),
    },
  }
}
