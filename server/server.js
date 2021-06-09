// Imports
import express from 'express'
import dotenv from 'dotenv'

// Routes
import routes from './routes/router.js'

// server setup
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
dotenv.config()

app.use('/api', routes)

app.listen(PORT, () => console.log('Server is running on port ', PORT))
