import fastify from 'fastify'
import { petRoutes } from './http/controllers/pet/routes'
import { orgRoutes } from './http/controllers/org/routes'

export const app = fastify()

app.register(petRoutes)
app.register(orgRoutes)