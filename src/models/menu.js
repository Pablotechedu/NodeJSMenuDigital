// Datos hardcodeados del menú guatemalteco
const menuData = {
  entradas: [
    {
      id: 1,
      nombre: "Chiles Rellenos",
      precio: 25.0,
      descripcion:
        "Chiles pimiento rellenos de verduras y carne molida envueltos en huevo",
    },
    {
      id: 2,
      nombre: "Tostadas de Guacamole",
      precio: 18.0,
      descripcion: "Tostadas de maiz con guacamole fresco y tomate",
    },
    {
      id: 3,
      nombre: "Elotes Locos",
      precio: 15.0,
      descripcion:
        "Elotes hervidos con mayonesa, ketchup, mostaza y queso duro",
    },
    {
      id: 4,
      nombre: "Pan con Frijol",
      precio: 12.0,
      descripcion: "Pan pirujo relleno de frijol negro y queso",
    },
  ],
  "platos-fuertes": [
    {
      id: 5,
      nombre: "Pepián de Pollo",
      precio: 65.0,
      descripcion: "Pollo en salsa de pepián con verduras y arroz",
    },
    {
      id: 6,
      nombre: "Kaq'ik de Pavo",
      precio: 70.0,
      descripcion: "Sopa tradicional de pavo con chile cobanero y especias",
    },
    {
      id: 7,
      nombre: "Hilachas",
      precio: 55.0,
      descripcion: "Carne deshebrada en salsa de tomate con verduras",
    },
    {
      id: 8,
      nombre: "Churrasco Chapín",
      precio: 85.0,
      descripcion:
        "Carne asada con chimichurri, frijoles volteados y tortillas",
    },
    {
      id: 9,
      nombre: "Jocón",
      precio: 60.0,
      descripcion: "Pollo en salsa verde de cilantro con arroz blanco",
    },
    {
      id: 10,
      nombre: "Revolcado",
      precio: 58.0,
      descripcion: "Cerdo en salsa de tomate con especias guatemaltecas",
    },
  ],
  postres: [
    {
      id: 11,
      nombre: "Tres Leches Chapín",
      precio: 22.0,
      descripcion: "Pastel de tres leches con canela y ron Botran",
    },
    {
      id: 12,
      nombre: "Molletes de Yema",
      precio: 18.0,
      descripcion: "Pan dulce tradicional relleno de yema de huevo",
    },
    {
      id: 13,
      nombre: "Buñuelos con Miel",
      precio: 20.0,
      descripcion: "Buñuelos crujientes bañados en miel de abeja",
    },
    {
      id: 14,
      nombre: "Rellenitos de Plátano",
      precio: 16.0,
      descripcion: "Plátano maduro relleno de frijol negro y azúcar",
    },
    {
      id: 15,
      nombre: "Flan de Coco",
      precio: 24.0,
      descripcion: "Flan casero con leche de coco y caramelo",
    },
  ],
  bebidas: [
    {
      id: 16,
      nombre: "Atol de Elote",
      precio: 12.0,
      descripcion: "Bebida caliente tradicional de maíz tierno",
    },
    {
      id: 17,
      nombre: "Horchata",
      precio: 15.0,
      descripcion: "Bebida refrescante de arroz con canela",
    },
    {
      id: 18,
      nombre: "Rosa de Jamaica",
      precio: 10.0,
      descripcion: "Agua fresca de flor de jamaica natural",
    },
    {
      id: 19,
      nombre: "Café de Antigua",
      precio: 18.0,
      descripcion: "Café premium de Antigua Guatemala",
    },
    {
      id: 20,
      nombre: "Licuado de Papaya",
      precio: 20.0,
      descripcion: "Licuado de papaya",
    },
    {
      id: 21,
      nombre: "Gallo Cerveza",
      precio: 14.0,
      descripcion: "Cerveza nacional guatemalteca 355ml",
    },
    {
      id: 22,
      nombre: "Ron Botran Añejo",
      precio: 45.0,
      descripcion: "Ron guatemalteco premium por copa",
    },
  ],
};

// Funciones para manejar los datos
const Menu = {
  // Obtener items por categoría
  getByCategory(category) {
    return menuData[category] || null;
  },

  // Obtener todos los items
  getAllItems() {
    let allItems = [];
    for (let category in menuData) {
      allItems = allItems.concat(menuData[category]);
    }
    return allItems;
  },

  // Obtener item por ID
  getById(id) {
    const allItems = this.getAllItems();
    return allItems.find((item) => item.id === parseInt(id)) || null;
  },

  // Obtener todas las categorías disponibles
  getCategories() {
    return Object.keys(menuData);
  },

  // Obtener todo el menú
  getFullMenu() {
    return menuData;
  },
};

module.exports = Menu;
