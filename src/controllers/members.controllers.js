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
        .select('_id firstName familyName lc status roleCurrent membershipVerified')
        .where('archived').equals(false);
        res.status(201).send(previewCurrentMembers);
    }catch(err){
        res.status(500).send(err);
    }
}

export const previewAllMembers = async (req, res) => {
    try {
        const previewAllMembers = await Member.find({}).select('_id firstName familyName lc status roleCurrent membershipVerified');
        res.status(201).send(previewAllMembers);
    }catch(err){
        res.status(500).send(err);
    }
}

export const memberDetails = async (req, res) => {
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

        const _id = await Member.countDocuments({});
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
        console.log(err)
        res.status(500).send("Error saving new member to database")
    }
}