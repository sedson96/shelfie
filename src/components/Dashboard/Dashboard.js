import React, {Component} from "react"
import Product from "../Product/Product"
import axios from 'axios';
import Form from "../Form/Form"
import EditForm from "../Form/EditForm"

class Dashboard extends Component {
    constructor() {
        super()
    this.removeProduct = this.removeProduct.bind(this)
    this.updateProduct= this.updateProduct.bind(this)
    this.addProduct = this.addProduct.bind(this)
    }
    removeProduct(id) {
        axios
        .delete(`api/products/${id}`)
        .then(response => this.props.getProducts())
        .catch(error => console.log(error))
      }
    updateProduct(id,something) {
        axios
        .put(`api/products/${id}`,{})
        .catch(error => console.log(error))


        }
    addProduct(event){
    event.preventDefault()
    axios
    .post(`api/products`,this.state)
    .then(response => this.props.getProducts())
    .catch(error => console.log(error))
    }
    render() {
        let products =this.props.products.map((product,index) => {
            return(
            <Product name={product.name}
            price={product.price}
            img_url={product.img_url} 
            id={product.id}
            key={index}
            removeProduct={this.removeProduct}
            selectProduct={this.props.selectProduct} />
            )
        })
        return (
            <main>
                {products}
                {!this.props.edit ?
                <Form 
                getProducts={this.props.getProducts}
                /> :
                <EditForm selectProduct={this.props.selectProduct}/>
            }
                
            </main>
        )
    }
}

export default Dashboard;