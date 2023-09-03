// import { getItem, listItems, editItem, addItem, deleteItem } from '../models/applicants.models.js'
import Applicant from "../models/Applicant.js"

export const listApplicants = (req, res) => {
    // try {
    //     const resp = getItem(parseInt(req.params.id))
    //     res.status(200).json(resp)

    // } catch (err) {
    //     res.status(500).send(err)
    // }
    res.send('Applicant Routes are working')
}

export const newApplicant = async (req, res) => {
        const { 
            firstName,
            familyName,
            lc,
            email,
            telephone,
            occupation,
            german,
            channel,
            motivation
        } = req.body
        const applicant = new Applicant({
            firstName,
            familyName,
            lc,
            email,
            telephone,
            occupation,
            german,
            channel,
            motivation
        })
        await applicant.save()
        res.status(201).send({ applicant, message: "Application was recorded!" })

}