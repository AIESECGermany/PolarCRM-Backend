const express = require('express')
const Applicant = require('../models/Applicant')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Applicant Routes are working')
})

router.post('/new', (req, res) => {
    
    try {
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
        applicant.save()
        res.status(201).send({ applicant, message: "Application was recorded!" })
    } catch(err) {
        res.status(400).send({ error: err})
    }
})

module.exports = router