 let products = [

 ]

 export const viewInicio = (req,res) =>{
   res.status(200).render('inicio',{products:products})
 }

  export const view = async (req,res)=>{
    res.status(200).render('productos',{productos:products})
  }

  export const create = async (req,res)=>{
    let product = req.body
    product.id = Math.floor(Math.random()*500000)
    product.img = product.name + product.id + ".png" 
    const EDFile = req.files.img
    EDFile.mv(`./public/img/products/${product.img}`,err => {
      if(err) return res.status(500).send({ message : err })
      return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      })
    products.push(req.body)
    console.log(products)
    res.status(200).redirect('/productos')
  }

  export const del = async (req,res) =>{
    products = products.filter(element => element.id != req.body.id)
    res.status(200).redirect('/productos')
  }

  export const update = (req,res) => {
    let product = products.find(element => element.id == req.body.id)
    if(req.body.name) product.name = req.body.name
    if(req.body.price) product.price = req.body.price
    if(req.body.stock) product.stock = req.body.stock
    if(req.files) {
        const EDFile = req.files.img
        EDFile.mv(`./public/img/products/${product.img}`,err => {
          if(err) return res.status(500).send({ message : err })
          return res.status(200).render("nofound",{message:"no se encontro el Producto"})
        })
      }
    res.status(200).redirect('/productos')
  }