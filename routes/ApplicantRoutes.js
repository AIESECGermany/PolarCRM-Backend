import { listApplicants, newApplicant } from '../controllers/applicants.controllers.js'
import express from 'express'

const router = express.Router()

router.get('/', listApplicants)
router.post('/new', newApplicant)

export default router