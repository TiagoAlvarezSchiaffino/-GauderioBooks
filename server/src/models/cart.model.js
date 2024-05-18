import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  title: { 
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
});
cartSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});

export const Cart = model("Cart", cartSchema);