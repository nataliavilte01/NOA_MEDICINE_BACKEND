const Patient = require ('./patient.model.js')
const encryptedPassword = require ('../../utils/encrypted_password.js')
const patientService = {}
patientService.createPatient = async (req)=>{
    const password = req.body.password;
    try{
        req.body.password= await encryptedPassword.encriptar(password);
        const patient = new Patient (req.body);
        const patient_created= await patient.save();
        return patient_created
    }
    catch(error){
        throw error;
    }
}
patientService.getPatientById = async(id)=>{
    try{
        const patient_found = await Patient.findById(id);
        if(patient_found==null){
            throw new Error ('Patient was not found')
        }
        return patient_found;
    }catch(error){
        throw error;
    }
}
patientService.getAllPatients = async ()=>{
    try{
        const patients= await Patient.find();
        if(patients.length==0) {
            throw new Error('Patient List is empty')
        }
        return patients;
    }catch(error){
        throw error;
    }
}
patientService.updatePatient = async(req)=>{
    try{
        //obtengo informacion para comparar contraseñas (solucion temporal)
        if(!req.body._id){
            throw new Error('You must to enter ID')
        }

        const patient_information= await patientService.getPatientById(req.body._id);
        if(req.body.password){
            if(patient_information.password!== req.body.password){
            throw new Error('Is not allowed change password')
            }
        }
        const patient_updated = await Patient.findByIdAndUpdate(req.body._id, req.body, {runValidators: true, new:true})
        console.log(patient_updated)
        return patient_updated;
    }catch(error){
        throw error;
    }
}
patientService.deletePatient = async (req)=>{
    try{
        const patient_deleted = await Patient.findByIdAndDelete(req.params.id);
        if(!patient_deleted){
            throw new Error ('No patient found with the entered ID')
        }
        return patient_deleted;
    }catch(error){
        throw error;
    }
}
module.exports = patientService;