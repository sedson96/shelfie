function newProduct(request,response) {
    let db =request.app.get('db')
    db.new_product([request.body.name,request.body.price,request.body.img_url])
    .then(result => response.json(result))
    .catch(error => {
        response.status(500).json("There was an error")
        console.log(error)
        })
}

function updateProduct(request,response) {
    let db =request.app.get('db')
    db.update_product([request.body.name,request.body.price,request.body.img_url,request.params.id])
    .then(result => response.json(result))
    .catch(error => {
        response.status(500).json("There was an error")
        console.log(error)
        })
}

function removeProduct(request,response) {
    let db =request.app.get('db')
    db.remove_product(request.params.id)
    .then(result => response.json(result))
    .catch(error => {
        response.status(500).json("There was an error")
        console.log(error)
        })
}

function getProducts(request,response) {
    let db =request.app.get('db')
    db.get_products()
    .then(result => response.json(result))
    .catch(error => {
        response.status(500).json("There was an error")
        console.log(error)
        })
}


module.exports = {
    newProduct,
    updateProduct,
    removeProduct,
    getProducts
}