import * as controllerCart from '../controllers/controllerCart.js'

const routesCart = (app) => {
    app.get('/carrito',controllerCart.viewCart)
    app.post('/carrito',controllerCart.createCart)
    app.delete('/carrito',controllerCart.delCart)
}

export default routesCart