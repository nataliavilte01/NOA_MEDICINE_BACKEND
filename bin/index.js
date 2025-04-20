require ('dotenv').config('../.env');
const app= require ('../app.js')
const {mongoose} = require ('./database.js');
console.log(process.env.PORT)

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=> {
    console.log (`server running on port: ${app.get('port')}`);
})