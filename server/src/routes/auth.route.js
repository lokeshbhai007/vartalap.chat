import express from 'express'
import { signin } from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.get('/signin', signin)

export default authRouter