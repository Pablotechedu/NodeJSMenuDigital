const express = require("express");
const logger = require("../src/middleware/logger");
const menuRoutes = require("../src/routes/routes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.json({
    mensaje: "¡Bienvenido a la API del Restaurante Guatemalteco! 🇬🇹",
    descripcion: "Sabores auténticos de Guatemala",
    rutas_disponibles: {
      "Rutas básicas": [
        "http://localhost:3000/entradas - Antojitos guatemaltecos",
        "http://localhost:3000/platos-fuertes - Platillos tradicionales",
        "http://localhost:3000/postres - Dulces típicos",
        "http://localhost:3000/bebidas - Bebidas tradicionales y modernas",
      ],
      "Rutas dinámicas": [
        "GET /menu/:categoria (ej: /menu/entradas)",
        "GET /item/:id (ej: /item/1)",
      ],
    },
  });
});

// Usar las rutas del menú
app.use("/", menuRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
  console.log(` ¡Restaurante Guatemalteco listo para servir!`);
});
