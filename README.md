Verificar que el servidor funciona
http://localhost:3000/

1. Probar rutas básicas
http://localhost:3000/entradas
http://localhost:3000/platos-fuertes
http://localhost:3000/postres
http://localhost:3000/bebidas

2. Probar rutas dinámicas - por categoría
http://localhost:3000/menu/entradas
http://localhost:3000/menu/platos-fuertes
http://localhost:3000/menu/postres
http://localhost:3000/menu/bebidas

3. Probar rutas dinámicas - por ID
http://localhost:3000/item/1
http://localhost:3000/item/5
http://localhost:3000/item/11
http://localhost:3000/item/16
http://localhost:3000/item/20

4. Probar manejo de errores 404
Categoría inexistente:
http://localhost:3000/menu/sopas
http://localhost:3000/menu/comida-china

ID inexistente:
http://localhost:3000/item/999
http://localhost:3000/item/100
http://localhost:3000/item/abc
