import { Router } from "express";
import { uploadImage } from "../middlewares/upload.middlewares.js";

const productRoutes = Router();

productRoutes.post("/", uploadImage("avatar"), (req, res) => {
  console.log(req.body);
  res.status(201).json({
    msg: "http://localhost:4000/uploads" + req.body.avatar,
  });
});

export default productRoutes;
