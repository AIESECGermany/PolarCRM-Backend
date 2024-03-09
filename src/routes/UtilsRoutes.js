import express from 'express';
import {
    upload
} from '../controllers/utils.controllers.js';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        try {
            cb(null, __dirname + '../../../uploads/');
        } catch (err) {
            console.log(err);
        }
    },
    filename: (req, file, cb) => {
        try {
            const lc = req.params.lc;
            cb(null, lc + '-' + Date.now() + '-' + file.originalname);
        } catch (err) {
            console.log(err);
        }
    }
});

const uploads = multer({ storage });

const router = express.Router();

router.post('/upload', uploads.single('dseUpload'), upload);

export default router;
