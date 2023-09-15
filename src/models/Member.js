import mongoose from "mongoose"

const changelogSchema = new mongoose.Schema({
    changedAt: { type: Date, required: true, immutable: true, default: Date.now },
    newStatus: { type: String, required: true, immutable: true }    
})

const memberRoleSchema = new mongoose.Schema({
    role: { type: String, required: true },
    function: { type: String, required: true },
    jobDescription: { type: String },
    firstDateInRole: { type: Date, required: true, default: Date.now },
    lastDateInRole: { type: Date }
})

const memberSchema = new mongoose.Schema({
    _id: { type: Number, required: true, immutable: true },
    expaId: { type: Number, default: 0 },
    lc: { type: String, required: true, immutable: true },
    firstName: { type: String, required: true, immutable: true, trim: true },
    familyName: { type: String, required: true, immutable: true, trim: true },
    email: { type: String, required: true, immutable: true, trim: true, lowercase: true },
    telephone: { type: Number, required: true, immutable: true },
    aiesecEmail: { type: String, trim: true, lowercase: true, default: "" },
    membershipVerified: { type: Boolean, required: true, default: false },
    files: { type: Buffer, immutable: true },
    createdAt: { type: Date, required: true, immutable: true, default: Date.now },
    status: { type: String, required: true, lowercase: true, default: "accepted" },
    roleCurrent: { type: memberRoleSchema, required: true, default: { role: "Newbie", function: "TM" }},
    rolePast: { type: [memberRoleSchema], default: [] },
    changelog: { type: [changelogSchema], default: [] },
    chatbox: { type: [String], default: [] },
    archived: { type: Boolean, required: true, default: false }
})

// memberSchema.virtual('domain').get(function() {
//     return this.email.slice(this.email.indexOf('@') + 1);
// });

const Member =  mongoose.model('Member', memberSchema)

export default Member