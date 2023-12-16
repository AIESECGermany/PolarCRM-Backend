import Member from "../models/Member.js"

export const countMembers = async (req, res) => {
    
    try {
        const countMembers = await Member.countDocuments({});
        res.status(201).send([countMembers]);
    }catch(err){
        res.status(500).send(err);
    }
}

export const listCurrentMembers = async (req, res) => {
    try {
        const currentMembers = await Member.find({});
        res.status(201).send(currentMembers);
    }catch(err){
        res.status(500).send(err);
    }
}

export const previewCurrentMembers = async (req, res) => {
    try {
        const previewCurrentMembers = await Member.find({})
        .select('_id firstName familyName lc currentRole membershipVerified')
        .where('currentRole.stage').nin(['dropped', 'terminated', 'advanced', 'alumni']);
        res.status(201).send(previewCurrentMembers);
    }catch(err){
        res.status(500).send(err);
    }
}

export const previewAllMembers = async (req, res) => {
    try {
        const previewAllMembers = await Member.find({}).select('_id firstName familyName lc currentRole membershipVerified');
        res.status(201).send(previewAllMembers);
    }catch(err){
        res.status(500).send(err);
    }
}

export const getMemberDetails = async (req, res) => {
    try {
        const memberDetails = await Member.findById(req.params.id);
        res.status(201).send(memberDetails);
    }catch(err){
        res.status(500).send(err);
    }
}

export const newMember = async (req, res) => {
    try{
        const { 
            lc,
            firstName,
            familyName,
            email,
            telephone,
        } = req.body

        let _id = await Member.countDocuments({});
        _id++;
        const member = new Member({
            _id,
            lc,
            firstName,
            familyName,
            email,
            telephone
        })
        await member.save()
        res.status(201).send(member);

    }catch(err){
        res.status(500).send(err)
    }
}

export const updateMember = async (req, res) => {
    try {
        const {
            _id,
            currentRole,
            comments
        } = req.body;
        let updatedMember = await Member.findById(_id);
        updatedMember.currentRole.stage = currentRole.stage;
        updatedMember.comments = comments;
        await updatedMember.save();
        res.status(201).send(updatedMember);
    }catch(err){
        res.status(500).send(err);
    }
}

export const addNewMemberRole = async (req, res) => {
    try {
        const {
            _id,
            currentRole,
            comments
        } = req.body;
        let updatedMember = await Member.findById(_id);
        updatedMember.currentRole.role = currentRole.role;
        updatedMember.currentRole.function = currentRole.function;
        updatedMember.currentRole.jobDescription = currentRole.jobDescription;
        updatedMember.currentRole.stage = 'accepted';
        updatedMember.currentRole.endOfTerm = currentRole.endOfTerm;
        updatedMember.comments = comments;
        await updatedMember.save();
        res.status(201).send(updatedMember);
    }catch(err){
        res.status(500).send(err);
    }
}