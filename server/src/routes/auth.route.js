//two

import express from 'express'
import { signin, signup } from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post('/signup', signup)  //db te save korar jonno post krchi
authRouter.get('/signin', signin)

export default authRouter