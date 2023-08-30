const mongoose = require('mongoose')

const applicantSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    familyName: { type: String, required: true },
    lc: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telephone: { type: Number, required: true, unique: true },
    occupation: { type: String, required: true },
    german: { type: String, required: true },
    channel: { type: String, required: true },
    motivation: { type: String, required: true }
})

const Applicant =  mongoose.model('Applicant', applicantSchema)
module.exports = Applicant