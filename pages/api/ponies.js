import { prisma } from '../../server/db/client'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const ponies = await prisma.pony.findMany()
    res.status(200).json(ponies)
    return
  }

  res.status(405).json({ message: 'Method not allowed' })
}