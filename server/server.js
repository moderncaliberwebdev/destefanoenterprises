// Imports
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import expresshttp from 'express-http-to-https'

// Routes
import routes from './routes/router.js'
import expressNakedRedirect from 'express-naked-redirect'

// server setup
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
dotenv.config()

// URL Settings - redirect non-www to www and http to https
app.use(expressNakedRedirect())

const redirectToHTTPS = expresshttp.redirectToHTTPS
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301))

app.use('/api', routes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/dist')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  )
}

app.listen(PORT, () => console.log('Server is running on port ', PORT))
