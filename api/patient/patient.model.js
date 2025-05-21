const mongoose = require ('mongoose')
const User = require ('../user/user.model.js')
const options= {
    discriminatorKey: 'role'
}
const PatientSchema = new mongoose.Schema({
    medical_insurance: {
        type: Boolean,
        required: [true, 'Medical insurance is required']
    }
}, options);
module.exports = mongoose.models.Patient || User.discriminator ('Patient', PatientSchema)