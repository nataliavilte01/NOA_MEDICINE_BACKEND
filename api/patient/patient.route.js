import patientCtrl from './patient.controller.js';
import express from 'express';
const router = express.Router();

router.post ('/', patientCtrl.createPatient)
router.get('/', patientCtrl.getAllPatients)
router.get('/:id', patientCtrl.getPatientById)
router.put('/', patientCtrl.updatePatient)
router.delete('/:id', patientCtrl.deletePatient)


export default router;