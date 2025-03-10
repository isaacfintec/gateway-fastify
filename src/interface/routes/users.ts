import { FastifyInstanceExt } from '../../domain/types/fastify'
import usersController from '../../interface/controllers/users'

export default async function identityValidation(fastify: FastifyInstanceExt) {
  fastify.post(
    '/:env/getCurp',
    { schema: { body: { $ref: 'getCURPInput#' } } },
    usersController.getCURP
  )
}
