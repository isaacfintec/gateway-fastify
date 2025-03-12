import { FastifyInstance } from 'fastify'
import usersRoutes from './users'
import healthCheck from '../../interface/controllers/healthCheck'

export default async function apiRoutes(fastify: FastifyInstance) {
  fastify.register(usersRoutes, { prefix: '/users' })

  fastify.get('/healthcheck', async (request, reply) => {
    const response = await healthCheck(request.query)
    reply.status(200).send(response)
  })
}
