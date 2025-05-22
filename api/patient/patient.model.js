import mongoose from 'mongoose'
import User from '../user/user.model.js'
const options= {
    discriminatorKey: 'role'
}
const PatientSchema = new mongoose.Schema({
    medical_insurance: {
        type: Boolean,
        required: [true, 'Medical insurance is required']
    }
}, options);
export default mongoose.models.Patient || User.discriminator ('Patient', PatientSchema)