require("dotenv").config()
const express = require("express")
const massive = require("massive")
const app = express()
const{getProducts,updateProduct,newProduct,removeProduct} = require("./controller")

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
    console.log("Connected")
})
.catch((error => console.log(error)))

app.use(express.json())


app.get("/api/products", getProducts)
app.put("/api/products/:id", updateProduct)
app.post("/api/products", newProduct)
app.delete("/api/products/:id", removeProduct)

app.listen(process.env.SERVER_PORT, () => console.log(`${process.env.SERVER_PORT} is Listening`))