import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  countProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/count", countProducts);

export default router;