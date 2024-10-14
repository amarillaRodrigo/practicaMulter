import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import productRoutes from "./routes/product.routes.js";
import path from "node:path";

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.static(path.join(path.resolve(), "src", "uploads")));

//  Routes
app.use("/products", productRoutes);

//
app.listen(4000, () => {
  console.log("Server on port 4000");
});
