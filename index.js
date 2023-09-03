import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import './db.js'
import applicantRoutes from './routes/ApplicantRoutes.js'
import loginRoutes from './routes/LoginRoutes.js'


const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.use('/applicants', applicantRoutes)
app.use('/login', loginRoutes)

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Polar Backend'
    })
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))