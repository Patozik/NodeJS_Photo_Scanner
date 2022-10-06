import axios from "axios";
import { getImages } from "../services/images-service.js";

const showHome =(req, res) => {
    res.render('home');
}

const scanImage = async (req, res) => {
    const { url } = req.body;

    const response = await axios.get(url);
    const images = getImages(response.data);

    res.render('images',{
        images: images
    });
}

export {
    showHome,
    scanImage
}