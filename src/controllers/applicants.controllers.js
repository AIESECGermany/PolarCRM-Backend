import Applicant from "../models/Applicant.js"

export const listCurrentApplicants = async (req, res) => {
    try {
        const currentApplicants = await Applicant.find({});
        res.status(201).send(currentApplicants);
    }catch(err){
        res.status(500).send(err);
    }
}

export const previewCurrentApplicants = async (req, res) => {
    try {
        const previewCurrentApplicants = await Applicant.find({}).select('_id firstName familyName lc status');
        res.status(201).send(previewCurrentApplicants);
    }catch(err){
        res.status(500).send(err);
    }
}

export const applicantDetails = async (req, res) => {
    try {
        const applicantDetails = await Applicant.findById(req.params.id);
        res.status(201).send(applicantDetails);
    }catch(err){
        res.status(500).send(err);
    }
}

export const newApplicant = async (req, res) => {
    console.table(req.body)
    try{
        const { 
            lc,
            firstName,
            familyName,
            email,
            telephone,
            occupation,
            german,
            motivation,
            dataSecurity,
            contactAllowed,
            linkedin,
            files,
            mktChannel
        } = req.body
        const _id = await Applicant.countDocuments();
        const applicant = new Applicant({
            _id,
            lc,
            firstName,
            familyName,
            email,
            telephone,
            occupation,
            german,
            motivation,
            dataSecurity,
            contactAllowed,
            linkedin,
            files,
            mktChannel
        })
        await applicant.save()
        console.log("Applicant has been saved to database")
        res.status(201).send({ message: applicant })

    }catch(err){
        console.log(err)
        res.status(500).send("Error saving new applicant data to database")
    }
}