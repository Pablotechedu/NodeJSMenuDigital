const Menu = require("../models/menu");

const menuController = {
  // PARTE 1: Rutas básicas (GET)

  getEntradas(req, res) {
    const entradas = Menu.getByCategory("entradas");
    res.json({
      categoria: "Entradas",
      items: entradas,
      total: entradas.length,
    });
  },

  getPlatosFuertes(req, res) {
    const platos = Menu.getByCategory("platos-fuertes");
    res.json({
      categoria: "Platos Fuertes",
      items: platos,
      total: platos.length,
    });
  },

  getPostres(req, res) {
    const postres = Menu.getByCategory("postres");
    res.json({
      categoria: "Postres",
      items: postres,
      total: postres.length,
    });
  },

  getBebidas(req, res) {
    const bebidas = Menu.getByCategory("bebidas");
    res.json({
      categoria: "Bebidas",
      items: bebidas,
      total: bebidas.length,
    });
  },

  // PARTE 2: Rutas dinámicas (GET con parámetros)

  getByCategory(req, res) {
    const { categoria } = req.params;
    const items = Menu.getByCategory(categoria);
// Validar si la categoría existe
    if (!items) {
      return res.status(404).json({
        error: "Categoría no encontrada",
        mensaje: `La categoría '${categoria}' no existe`,
        categorias_disponibles: Menu.getCategories(),
      });
    }

    res.json({
      categoria: categoria,
      items: items,
      total: items.length,
    });
  },

  getById(req, res) {
    const { id } = req.params;
    const item = Menu.getById(id);

    if (!item) {
      const allItems = Menu.getAllItems();
      return res.status(404).json({
        error: "Item no encontrado",
        mensaje: `No existe un item con ID ${id}`,
        ids_disponibles: allItems.map((item) => item.id),
      });
    }

    // Encontrar la categoría del item
    let categoriaDelItem = "";
    const categories = Menu.getCategories();
    for (let categoria of categories) {
      const itemsCategoria = Menu.getByCategory(categoria);
      if (itemsCategoria.find((menuItem) => menuItem.id === parseInt(id))) {
        categoriaDelItem = categoria;
        break;
      }
    }

    res.json({
      item: item,
      categoria: categoriaDelItem,
    });
  },
};

module.exports = menuController;
