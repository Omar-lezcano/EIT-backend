const express = require("express");
const router = express.Router();
const productController = require("./../controllers/product.controller");

//Obtener todos los productos
router.get("/products", productController.getAllProducts)

// Obtener todos los productos por cateogria 
// Obtener un específico
// Añadir un producto
router.post("/product", productController.addProduct)


// Eliminar producto
router.delete("/product/:id", productController.deleteProduct)
// Modificar producto


module.exports = router;