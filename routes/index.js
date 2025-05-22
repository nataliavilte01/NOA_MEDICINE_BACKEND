import express from 'express'
import cors from 'cors'
import patient_routes from '../api/patient/patient.route.js'
const router = express.Router();
router.use(cors());

router.use ('/patient', patient_routes);

export default router