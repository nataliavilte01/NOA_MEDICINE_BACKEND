require('dotenv').config('/.env')
const bcrypt = require ('bcrypt')
const password ={}
password.encriptar = async (inputPassword)=>{
    const regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (!regex.test(inputPassword))
        throw new Error ('Password format is incorrect. It must contain at least 8 characters including uppercase letters, lowercase letters and numbers')

    const salt_rounds= parseInt(process.env.SALT_ROUNDS) || 8;
    try{
        const encrypted_password = await bcrypt.hash(inputPassword, salt_rounds)
        return encrypted_password
    }catch(error){
        throw error;
    }
}
module.exports= password