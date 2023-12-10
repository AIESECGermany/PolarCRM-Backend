import { listCurrentApplicants, previewCurrentApplicants, newApplicant, getApplicantDetails, openCount, updateApplicantStage, previewAllApplicants } from '../controllers/applicants.controllers.js'
import express from 'express'

const router = express.Router()

router.get('/', listCurrentApplicants)
router.get('/preview/current', previewCurrentApplicants)
router.get('/preview/all', previewAllApplicants)
router.post('/new', newApplicant)
router.put('/update-stage', updateApplicantStage)
router.get('/detail/:id', getApplicantDetails)
router.get('/open-count', openCount)

export default router