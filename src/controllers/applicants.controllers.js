// import { getItem, listItems, editItem, addItem, deleteItem } from '../models/applicants.models.js'
import Applicant from "../models/Applicant.js"

export const listCurrentApplicants = async (req, res) => {
    try {
        const currentApplicants = await Applicant.find({})
        res.status(201).send(currentApplicants)
    }catch(err){
        res.status(500).send(err)
    }
}

export const newApplicant = async (req, res) => {
    // console.log('New Applicant received')

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
        const applicant = new Applicant({
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

    }catch(err){
        //res.status
        console.log(err)
    }
        
    console.log('Sending back response...')
    res.status(201).send({message: req.body})
}