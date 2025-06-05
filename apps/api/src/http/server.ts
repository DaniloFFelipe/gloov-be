import { fastifyCors } from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  isResponseSerializationError,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from '@gloov/env'
import { routes } from './routes/index.ts'
import { auth } from './auth.ts'
import { gbToBytes } from '@gloov/core'
import { HttpException } from '@gloov/core'
import { dependencies } from '../plugins/dependencies.ts'
import { brokerPlugin } from '../broker/index.ts'

const app = fastify()
app.register(fastifyCors, {
  origin: '*',
})
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Api',
      description: 'Api Docs',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  transform: jsonSchemaTransform,
})
app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})

app.setErrorHandler((err, req, reply) => {
  console.error(err.code, err.message, err.statusCode, err)

  if (err instanceof HttpException) {
    return reply.status(err.statusCode).send({
      status: err.statusCode,
      success: false,
      error: {
        ...(env.NODE_ENV !== 'production'
          ? {
              name: err.name,
              stack: err.stack,
              cause: err.cause,
            }
          : {}),
        message: err.message,
      },
    })
  }

  if (err.code === 'FST_ERR_VALIDATION') {
    return reply.status(err.statusCode || 400).send({
      status: 400,
      success: false,
      error: {
        ...(env.NODE_ENV !== 'production'
          ? {
              name: err.name,
              stack: err.stack,
              cause: err.cause,
            }
          : {}),
        message: err.message,
        validation: err.validation,
      },
    })
  }

  if (isResponseSerializationError(err)) {
    return reply.code(500).send({
      error: 'Internal Server Error',
      message: "Response doesn't match the schema",
      statusCode: 500,
      details: {
        issues: err.cause.issues,
        method: err.method,
        url: err.url,
      },
    })
  }
})

await app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

await app.register(multipart, {
  // attachFieldsToBody: true,
  limits: {
    fileSize: gbToBytes(30), // 30gb limit
  },
})

await app.register(dependencies)
await app.register(brokerPlugin)
await app.register(auth)

await app.register(routes)

console.log('Server is starting...', env.PORT)
const server = await app.listen({
  port: env.PORT,
  host: '0.0.0.0',
})

console.log('Server is running on: ', server.replace('127.0.0.1', 'localhost'))
