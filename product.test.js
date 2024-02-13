const { resetProducts,  addProducto, removeProducto, getProducts, getProduct, updateProduct} = require('./product')

describe('product', () => {
    beforeEach(() => {
      resetProducts();
    });
    test('addProducto should add a product to the list', () => {
        addProducto('Producto A', 10);
        expect(productos.length).toBe(1);
        expect(productos[0].nombre).toBe('Producto A');
        expect(productos[0].precio).toBe(10);
      });});