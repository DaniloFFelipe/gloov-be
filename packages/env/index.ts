import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    // Node
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),

    // Server
    PORT: z.coerce.number().default(3333),

    // Database
    DATABASE_URL: z.string(),

    // Redis
    REDIS_URL: z.string().url(),

    //Broker
    BROKER_URL: z.string().url(),

    // URLs
    // API_URL: z.string().url(),
    WEB_URL: z.string().url().default('http://localhost:3000/'),

    // Auth
    JWT_SECRET: z.string().default('secret'),
    STREAM_SECRET: z.string().default('stream_secret'),

    // Utils
    OTP_EXPIRATION_TIME_S: z.coerce.number().default(15 * 60), // 15 minutes
    API_PREFIX: z.string().default('api'),

    TEMP_STORAGE_VOLUME_PATH: z.string().default('tmp'),
    CDN_ENDPOINT: z.string().url(),

    // AWS
    S3_REGION: z.string().default('us-east-1'),
    S3_ENDPOINT: z.string(),
    S3_BUCKET_NAME: z.string(),
    S3_ACCESS_KEY_ID: z.string(),
    S3_SECRET_ACCESS_KEY: z.string(),

    // Payments
    // PAYMENT_API_KEY: z.string(),
    // PAYMENT_API_URL: z.string().url(),

    // SMTP
    SMTP_HOST: z.string().optional(),
    SMTP_PORT: z.coerce.number().optional(),
  },
  client: {},
  shared: {},
  runtimeEnv: process.env as any,
  emptyStringAsUndefined: true,
})
