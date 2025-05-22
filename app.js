import express, {json} from 'express';
import cors from 'cors';
import multer from 'multer';
import routes from './routes/index.js';
import { renameSync } from 'node:fs';

const app = express();
const upload = multer ({dest: 'uploads/'})

//middlewards
app.use(json());
//conexion con el frontend
app.use(cors({origin: 'http://localhost:4200'}))

app.use('/api', routes);

//codigo para guardar imagen en servidor
// app.post('/api/specialty/', upload.single('imagenPerfil'), (req, res)=>{
//     console.log(req.file)
//     saveImage(req.file)
//     res.send('Termino la ejecucion')
// })

// function saveImage (file){
//     const newPath = `./uploads/${file.originalname}`
//     renameSync(file.path, newPath)
//     return newPath
// }
export default app;