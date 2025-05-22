import dotenv from 'dotenv'
dotenv.config('../')
import app from '../app.js'
import mongoose from './database.js'
console.log(process.env.PORT)

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=> {
    console.log (`server running on port: ${app.get('port')}`);
})