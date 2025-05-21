const { response } = require('express');
const StatusResponse = require('../../utils/status_response');
const patientService = require ('./patient.service')
const patientCtrl={};
const statusResponse = new StatusResponse();

//Funciona bien
patientCtrl.createPatient =async (req, res)=>{
    try{
        responsePatientService = await patientService.createPatient(req)
        statusResponse.sendResponse(res, 201, 1, 'Patient was created succesfully', responsePatientService)
    } catch(error){
        statusResponse.sendResponse(res, 400, 0, 'Error creating patient', error.message);
    }
}
//funciona bien
patientCtrl.getPatientById = async (req, res)=>{
    try{
        const patient= await patientService.getPatientById(req.params.id)
        statusResponse.sendResponse(res, 201, 1, 'Patient was found successfully', patient)
    }catch(error){
        statusResponse.sendResponse(res, 400, 0, 'Error ocurred during get Patient by id', error.message)
    }
}
patientCtrl.getAllPatients= async (req, res)=>{
    try{
        patients = await patientService.getAllPatients()
        statusResponse.sendResponse(res, 201, 1 , 'Successful to get Patients',  patients)
    }catch(error){
        statusResponse.sendResponse(res, 400, 0, 'Error getting patients', error.message)
    }
}
//ciudado con los cambios
patientCtrl.updatePatient = async (req, res)=>{
    try{
        //falta analizar cambio de contrasenia
        const patient_updated = await patientService.updatePatient(req)
        statusResponse.sendResponse(res, 201, 1, 'Patient was found un updated successfully', patient_updated)
    }catch(error ){
        statusResponse.sendResponse(res, 400, 0, 'Error ocurred during update Patient', error.message);
    }
}
patientCtrl.deletePatient = async (req, res)=>{
    try{
        const patient_deleted=  await patientService.deletePatient (req)
        statusResponse.sendResponse(res, 201, 1, 'Patient was found and deleted successfully', patient_deleted._id)
    }catch(error){
        statusResponse.sendResponse(res, 400, 0, 'Error ocurred during update Patient', error.message);
    }
}

module.exports = patientCtrl;