import mongoose from "mongoose"

const changelogSchema = new mongoose.Schema(
    {
        changedAt: { type: Date, required: true, immutable: true, default: Date.now },
        newStatus: { type: String, required: true, immutable: true }
    }
)
const applicantSchema = new mongoose.Schema({
    _id: { type: Number, required: true, immutable: true },
    lc: { type: String, required: true, immutable: true },
    firstName: { type: String, required: true, immutable: true, trim: true },
    familyName: { type: String, required: true, immutable: true, trim: true },
    email: { type: String, required: true, immutable: true, trim: true, lowercase: true },
    telephone: { type: Number, required: true, immutable: true },
    occupation: { type: String, required: true, immutable: true, trim: true, lowercase: true },
    german: { type: String, required: true, immutable: true },
    motivation: { type: Array, immutable: true },
    dataSecurity: { type: Boolean, immutable: true },
    contactAllowed: { type: Boolean, immutable: true},
    linkedin: { type: String, immutable: true, trim: true, lowercase: true },
    files: { type: Buffer, immutable: true},
    mktChannel: { type: String, required: true, immutable: true },
    createdAt: { type: Date, required: true, immutable: true, default: Date.now },
    status: { type: String, required: true, lowercase: true, default: "open" },
    changelog: { type: [changelogSchema], default: [] },
    chatbox: { type: [String], default: [] },
    archived: { type: Boolean, required: true, default: false }
})

const Applicant =  mongoose.model('Applicant', applicantSchema)

export default Applicant