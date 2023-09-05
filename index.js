import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import './db.js'
import applicantRoutes from './src/routes/ApplicantRoutes.js'
import loginRoutes from './src/routes/LoginRoutes.js'


const PORT = process.env.PORT
// const options = {
//     origin: ['https://localhost:4200']
// }

const app = express()
app.use(express.json())
// app.use(cors(options))
app.use(cors())

app.use('/applicants', applicantRoutes)
app.use('/login', loginRoutes)

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Polar Backend'
    })
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))