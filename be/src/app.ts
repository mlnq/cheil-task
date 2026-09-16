import express, { Request, Response } from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
