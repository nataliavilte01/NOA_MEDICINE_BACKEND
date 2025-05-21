const express = require('express');
const cors = require ('cors')
const router = express.Router();

router.use(cors());

router.use ('/patient', require ('../api/patient/patient.route.js'));
module.exports= router;