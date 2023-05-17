const express = require("express");
const router = express.Router();
const productController = require("./../controllers/product.controller");

//Obtener todos los productos
router.get("/products", productController.getAllProducts)

// Obtener todos los productos por cateogria 
// Obtener un específico
// Añadir un producto
// Eliminar producto
router.delete("/products", productController.deleteProduct)
// Modificar


module.exports = router;