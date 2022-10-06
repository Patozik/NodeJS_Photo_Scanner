import express from "express";
import path from "path";
import { showHome, scanImage } from "./controllers/image-controller.js";

const app = express();
app.set('view engine', 'ejs');

const _dirname = path.resolve();
app.set('views', path.join(_dirname, '/views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', showHome);

app.post('/skanuj', scanImage);

app.listen(3000, () => console.log('Serwer uruchomiony'));