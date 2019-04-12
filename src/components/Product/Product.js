import React, {Component} from "react"

class Product extends Component {
    render() {
        let {name,price,img_url,id} = this.props
        return (
        <article className="product">
            <img src={img_url} />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button onClick={() => this.props.removeProduct(id)}>Delete</button>
            <button onClick={() => this.props.selectProduct({name,price,img_url,id})}>Edit</button>
        </article >
        )
    }
}

export default Product;