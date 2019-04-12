import React, {Component} from "react"

class Form extends Component {
    constructor() {
        super() 
        this.state = {
            name: "",
            price: 0,
            img_url: "https://via.placeholder.com/150"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        this.setState(this.props.selectProduct)
    }
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
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
                    <button>Save Changes</button>
                </div>
            </form>
        </article>
        )
    }
}

export default Form;