import { listCurrentApplicants, previewCurrentApplicants, newApplicant, applicantDetails, openCount, updateApplicantStatus } from '../controllers/applicants.controllers.js'
import express from 'express'

const router = express.Router()

router.get('/', listCurrentApplicants)
router.get('/preview', previewCurrentApplicants)
router.post('/new', newApplicant)
router.put('/update-status', updateApplicantStatus)
router.get('/detail/:id', applicantDetails)
router.get('/open-count', openCount)

export default router