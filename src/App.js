import React, { Component } from 'react';
import './App.css';
import {HashRouter} from "react-router-dom"
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import axios from 'axios';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      products: [],
      selectProduct:{},
      edit: false
    }
this.getProducts = this.getProducts.bind(this)
this.selectProduct = this.selectProduct.bind(this)
  }
  componentDidMount() {
    this.getProducts()
  }
  getProducts() {
    axios
    .get("/api/products")
    .then(response => this.setState({products: response.data}))
    .catch(error => console.log(error));
  }
  selectProduct(product) {
    this.setState({selectProduct: product})
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Header/>
            <Dashboard
            products={this.state.products}
            selectProduct={this.selectProduct}
            getProducts={this.getProducts}
            edit={this.state.edit}
            />
        </div>
      </HashRouter>
    );
  }
}

export default App;
