const patientCtrl  = require ('./patient.controller');
const express = require ('express');
const router = express.Router();

router.post ('/', patientCtrl.createPatient)
router.get('/', patientCtrl.getAllPatients)
router.get('/:id', patientCtrl.getPatientById)
router.put('/', patientCtrl.updatePatient)
router.delete('/:id', patientCtrl.deletePatient)


module.exports = router