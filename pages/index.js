import { useEffect, useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'

const Pony = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export default function Home() {

  const [ponies, setPonies] = useState([])

  useEffect(() => {
    // will always run on client
    // browser

    axios.get('/api/ponies')
      .then(res => {
        setPonies(res.data)
      })

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('/api/ponies', {
      name: e.target.name.value,
      federalRegistryNumber: e.target.federalRegistryNumber.value,
      breed: e.target.breed.value,
      color: e.target.color.value,
    })
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="federalRegistryNumber" />
        <input type="text" name="breed" />
        <input type="text" name="color" />
        <button type="submit">Submit</button>
      </form>
      
      
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
