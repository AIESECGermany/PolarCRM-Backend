import { listCurrentMembers,
         previewCurrentMembers,
         newMember,
         getMemberDetails,
         countMembers,
         previewAllMembers
        } from '../controllers/members.controllers.js'
import express from 'express'

const router = express.Router()

router.get('/', listCurrentMembers)
router.get('/preview/current', previewCurrentMembers)
router.get('/preview/all', previewAllMembers)
router.post('/new', newMember)
router.get('/detail/:id', getMemberDetails)
router.get('/count', countMembers)

export default router