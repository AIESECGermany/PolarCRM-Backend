import { listCurrentApplicants, newApplicant } from '../controllers/applicants.controllers.js'
import express from 'express'

const router = express.Router()

router.get('/', listCurrentApplicants)
router.post('/new', newApplicant)

export default router