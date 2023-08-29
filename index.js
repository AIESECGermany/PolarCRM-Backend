require('dotenv').config()
require('./db')
const applicantRoutes = require('./routes/ApplicantRoutes')

const PORT = process.env.PORT
const express = require('express')

const app = express()
app.use(express.json())

app.use('/applicants', applicantRoutes)

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Polar Backend'
    })
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))