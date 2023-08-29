const express = require('express')
const Applicant = require('../models/Applicant')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Applicant Routes are working')
})

router.post('/new', (req, res) => {
    
    try {
        const { name, email } = req.body
        const applicant = new Applicant({ name, email })
        //await applicant.save()
        res.status(201).send({ applicant, message: "Application was recorded!" })
    } catch(err) {
        res.status(400).send({ error: err})
    }
})

module.exports = router