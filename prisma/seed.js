const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.pony.upsert({
    where: { federalRegistryNumber: 1 },
    update: {},
    create: {
      name: 'Alice',
      color: 'RED',
      federalRegistryNumber: 1,
      breed: "Welsh Corgi",
    },
  })

  const bob = await prisma.pony.upsert({
    where: { federalRegistryNumber: 2 },
    update: {},
    create: {
      federalRegistryNumber: 2, 
      name: 'Bob',
      color: 'BLUE',
      breed: 'Poodle',
    },
  })
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })