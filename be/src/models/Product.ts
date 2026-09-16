import { Schema, model, Document } from "mongoose";
import { IProduct } from "../interfaces/product.js";

const productSchema = new Schema<IProduct>({
  image: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  color: { type: String, required: true },
  capacity: { type: Number, enum: [8, 9, 10.5], required: true },
  dimensions: { type: String, required: true },
  features: {
    type: [String],
    enum: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    required: true,
  },
  energyClass: { type: String, enum: ["A", "B", "C"], required: true },
  price: {
    value: { type: Number, required: true },
    currency: { type: String, required: true },
    installment: {
      value: { type: Number, required: true },
      period: { type: Number, required: true },
    },
    validFrom: { type: Date, required: true },
    validTo: { type: Date, required: true },
  },
});

export const Product = model<IProduct>("Product", productSchema);
