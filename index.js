import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import './db.js'
import applicantRoutes from './src/routes/ApplicantRoutes.js'
import memberRoutes from './src/routes/MemberRoutes.js'
import loginRoutes from './src/routes/LoginRoutes.js'

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

let corsOptions = {
    origin : process.env.ORIGIN_URI,
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers']
 }

app.use(cors(corsOptions));

app.use('/applicants', applicantRoutes);
app.use('/members', memberRoutes);
app.use('/login', loginRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Polar Backend'
    });
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
