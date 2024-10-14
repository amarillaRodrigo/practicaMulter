import { Router } from "express";
import { uploadImage } from "../middlewares/upload.middlewares.js";

const productRoutes = Router();

productRoutes.post("/", uploadImage, (req, res) => {
  res.status(201).json({
    image: "http://localhost:4000/" + req.body.image,
  });
});

export default productRoutes;
