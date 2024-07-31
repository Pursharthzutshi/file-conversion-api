import express, { Request, Response } from "express";
import ffmpeg from 'fluent-ffmpeg';
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
// const createClient = require("redis");
// const client = createClient();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// await client.connect();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/Images"); 
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({ storage });

app.post('/send', upload.single('file'), async (req, res) => {
    const { selectFormat } = req.body;
    const filename  = req.file; 
    const pathToAudio = `./public/Images/${filename}`; 

    
  

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
