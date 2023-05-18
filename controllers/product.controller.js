const Product = require("./../schemas/product.schema")

const getAllProducts = (req,res) => {
    
    Product.find().then(function(productos){
        
        res.status(200).send({
            msg:`Productos solicitados correctamente`,
            productos: productos
        });    
    }).catch((error)=> {
        console.log(error)
    })
}

function addProduct(req, res) {
    console.log(req.body)
    const product = new Product(req.body);

    product.save()
                .then(function(product) {
                    // if(!product) {
                    //     console.log(`No espero`)
                    //     return res.status(200).send(`Algo va a fallar`)
                    // }

                    // console.log(`Termino el guardado del producto`)
                    return res.status(200).send({
                        msg:`Producto guardado correctamente`,
                        product
                    })

        // res.status(200).send(`Añadir producto`)

                })
                .catch(error => {
                    console.log(error);
                    res.status(500).send(`El producto no se pudo guardar`)
    })
    // console.log(product)
    console.log(`Algo`)
    
}
//? return--para cada vez que quiera hacer una respuesta para cortar el flujo


function deleteProduct(req,res) {
    const id = req.params.id;

    Product.findByIdAndDelete(id)
        .then((deleted) => {    
            if(!deleted) {
                return res.status(404).send({
                    msg:`No se encontro el porducto a borrar`
                })
            }
            return res.status(200).send({
                msg: `Producto borrado correctamente`,
                deleted
            })
        })
        .catch(error => {
            console.log(error);
            return res.status(500).send({
                msg: `Error al borrar el producto`
            })
        })


    // console.log(req.params)//agregar parametro para leer mejor la direccion del servidor x ej para borrar producto con el id
    
    //*SERVIDOR APARECE=
    // {
    //     nombreDeParam: '64663eec71a4616cf94362bb',
    //     segundoParam: 'otroParamExtra'
    //   }


    // res.status(200).send (`Producto borrado correctamente!!!`)
}

//! Transporto las funciones a las rutas
module.exports = {
    getAllProducts,
    deleteProduct,
    addProduct 
}