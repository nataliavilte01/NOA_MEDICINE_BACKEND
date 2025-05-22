import dotenv from 'dotenv'
dotenv.config('../')
import mongoose from 'mongoose';
const URI= process.env.URI_DB
mongoose.connect(URI)
        .then (db=> console.log('DB is connected'))
        .catch( error => console.error(error));

export default mongoose;