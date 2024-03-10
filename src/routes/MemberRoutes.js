import express from 'express';
import {
    addMemberInfo,
    addNewMemberRole,
    countMembers,
    getMemberDetails,
    newMember,
    previewAllMembers,
    previewCurrentMembers,
    updateMember,
    verifyMembership
} from '../controllers/members.controllers.js';

const router = express.Router();

router.get('/preview/current', previewCurrentMembers);
router.get('/preview/all', previewAllMembers);
router.post('/new', newMember);
router.put('/update', updateMember);
router.get('/detail/:id', getMemberDetails);
router.get('/count', countMembers);
router.put('/add-new-role', addNewMemberRole);
router.put('/add-member-info', addMemberInfo);
router.put('/verify-membership', verifyMembership);

export default router;
