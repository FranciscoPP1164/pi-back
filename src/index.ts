import express = require('express')
import { Express } from 'express'
import { config } from 'dotenv'
import validateEmptyBody from './middlewares/EmptyBodyValidation'
import indexRoutes from './routes/index.routes'
import clientsRoutes from './routes/clients.routes'
import patientsRoutes from './routes/patients.routes'
import medicalConditions from './routes/medicalConditions.routes'
import nursesRoutes from './routes/nurses.routes'
import sqlError from './middlewares/sqlError'
import serverError from './middlewares/serverError'
config()

const app: Express = express()
const PORT = process.env.APLICATION_PORT || 3050

app.use(express.json())
app.use(validateEmptyBody)
app.use(indexRoutes)
app.use('/clients', clientsRoutes)
app.use('/patients', patientsRoutes)
app.use('/medical-conditions', medicalConditions)
app.use('/nurses', nursesRoutes)
app.use(serverError)
app.use(sqlError)

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})