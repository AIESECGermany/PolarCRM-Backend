import mongoose from "mongoose"

const applicantSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    familyName: { type: String, required: true },
    lc: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: Number, required: true },
    occupation: { type: String, required: true },
    german: { type: String, required: true },
    mktChannel: { type: String, required: true },
    motivation: { type: Array }
})

const Applicant =  mongoose.model('Applicant', applicantSchema)

export default Applicant