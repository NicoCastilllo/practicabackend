let cart = [

]

export const viewCart = (req,res) =>{
    res.status(200).render('carrito',{cart:cart})
  }

export const createCart = (req,res) =>{
    cart.push(req.body)
    res.status(200).redirect('/carrito')
    console.log(cart)
}

export const delCart = (req,res) => {
    cart = cart.filter(element => element.id != req.body.id)
    res.status(200).redirect('/carrito')
}