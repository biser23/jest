let productos = [];
let idContador = 0;

function resetProducts() {
  productos = [];
  idContador = 0;
}

function addProducto(nombre, precio) {
  const producto = { id: ++idContador, nombre, precio };
  productos.push(producto);
}

function removeProducto(idProducto) {
  productos = productos.filter(producto => producto.id !== idProducto);
}

function getProducts() {
  return productos;
}

function getProduct(idProducto) {
  return productos.find(producto => producto.id === idProducto);
}

function updateProduct(idProducto, nuevoNombre, nuevoPrecio) {
  const indiceProducto = productos.findIndex(producto => producto.id === idProducto);
  if (indiceProducto !== -1) {
    productos[indiceProducto].nombre = nuevoNombre;
    productos[indiceProducto].precio = nuevoPrecio;
  }
}

module.exports = {
  resetProducts,
  addProducto,
  removeProducto,
  getProducts,
  getProduct,
  updateProduct,
  productos,
  id: idContador,
};