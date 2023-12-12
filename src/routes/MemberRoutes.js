import { listCurrentMembers,
         previewCurrentMembers,
         newMember,
         getMemberDetails,
         countMembers,
         previewAllMembers,
         updateMember
        } from '../controllers/members.controllers.js'
import express from 'express'

const router = express.Router()

router.get('/', listCurrentMembers)
router.get('/preview/current', previewCurrentMembers)
router.get('/preview/all', previewAllMembers)
router.post('/new', newMember)
router.put('/update', updateMember)
router.get('/detail/:id', getMemberDetails)
router.get('/count', countMembers)

export default router