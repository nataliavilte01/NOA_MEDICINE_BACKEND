import mongoose from 'mongoose'
const options = {
    discriminatorKey: 'role'
}
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [8, 'Username needs at least 8 characters'],
        unique: [true, 'Username exists. Try enter other username']
    },
    password: {
        type: String,
        required: [ true, 'Password is required'],
        minlength: [8, 'Password needs at least 8 characters']
    },
    email: {
        type: String,
        required: [ true, 'Email is required'],
        minlength: [8, 'Email needs at least 8 characters'],
        unique: [true, 'Email already exists. Try enter other'],
        validate: {
            validator: function(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) },
            message: 'Is not a valid format email '
        },
    },
    name: {
        type: String,
        required: [ true, 'Name is required'],
        minlength: [3, 'Name needs at least 3 characters']
    },
    surname: {
        type: String,
        required: [true, 'Surname is required'],
        minlength: [3, 'Surname needs at least 3 characters']
    },
    identification_dni: {
        type: String,
        required: [true, 'DNI is required'],
        unique: [true, 'DNI already exists. Enter other DNI']
    },
    birth_date: {
        type: Date
    },
    telephone: {
        type: String
    },
    address: {
        type: String
    }
}, options)
export default mongoose.models.User || mongoose.model('User', UserSchema);
