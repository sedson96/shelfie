import React, {Component} from "react"
import axios from 'axios';


class Form extends Component {
    constructor() {
        super() 
        this.state = {
            name: "",
            price: 0,
            img_url: "https://via.placeholder.com/150"
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitClick = this.submitClick.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }
    submitClick(event) {
        event.preventDefault()
        this.props.addProduct(this.state)
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
        return (
        
        <article className="form">
            <form>
                <img src={this.state.img_url} />
                <label>Image URL:</label>
                <input onChange={this.handleChange} name="img_url"/>
                <label>Product Name:</label>
                <input onChange={this.handleChange} name="name"/>
                <label>Price:</label>
                <input onChange={this.handleChange} type="number" name="price"/>
                <div>
                    <button>Cancel</button>
                    <button onClick={this.addProduct}>Add to Inventory</button>
                </div>
            </form>
        </article>
        )
    }
}

export default Form;