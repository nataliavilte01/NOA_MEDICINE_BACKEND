require('dotenv').config('../.env');
const mongoose = require ('mongoose');
const URI= process.env.URI_DB
mongoose.connect(URI)
        .then (db=> console.log('DB is connected'))
        .catch( error => console.error(error));

module.exports = mongoose;