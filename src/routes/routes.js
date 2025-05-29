const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menucontrollers");

// PARTE 1: Rutas básicas (GET)
router.get("/entradas", menuController.getEntradas);
router.get("/platos-fuertes", menuController.getPlatosFuertes);
router.get("/postres", menuController.getPostres);
router.get("/bebidas", menuController.getBebidas);

// PARTE 2: Rutas dinámicas (GET con parámetros)
router.get("/menu/:categoria", menuController.getByCategory);
router.get("/item/:id", menuController.getById);

module.exports = router;
