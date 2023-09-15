import { listCurrentMembers, previewCurrentMembers, newMember, memberDetails, countMembers } from '../controllers/members.controllers.js'
import express from 'express'

const router = express.Router()

router.get('/', listCurrentMembers)
router.get('/preview', previewCurrentMembers)
router.post('/new', newMember)
router.get('/detail/:id', memberDetails)
router.get('/count', countMembers)

export default router