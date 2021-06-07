import express from 'express'
const router = express.Router()

// Controllers
import { getItem, newItem, mail } from '../controllers/routeController.js'

router.get('/', (req, res) => res.json({ title: 'Welcome to MERN!!' }))
router.get('/items', getItem)
router.post('/items/newitem', newItem)
router.get('/email', mail)

export default router
