import { createPool, PoolOptions } from 'mysql2'
import { config } from 'dotenv'
config()

const POOL_CONFIG: PoolOptions = {
  host: process.env.DATABASE_HOST || 'enfercuidarte_db',
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'enfercuidarte1164*',
  database: process.env.DATABASE_NAME || 'enfercuidartedb'
}

export const pool = createPool(POOL_CONFIG).promise()
