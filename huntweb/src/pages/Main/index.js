import React, { Component } from 'react' // For to import React and { Component } of react to use JSX and to create component
import api from '../../services/api' // It´s an api comes from the backend
import { Link } from 'react-router-dom' // Is a paging feature

import './style.css' // Style CSS of component Main

// Exporting of component Main
export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1, 
  }

  // Method of cycle life 
  componentDidMount() {
    this.loadProducts()
  }

  // Method for load the page
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`)

    const { docs, ...productInfo } = response.data

    this.setState({ products: docs, productInfo, page })
  } 

  // Method for load next page
  nextPage = () => {
    const { page, productInfo } = this.state
    if (page === productInfo.pages) return;
    const pageNumber = page + 1
    this.loadProducts(pageNumber)
  }

  // Method for load page previous
  prevPage = () => {
    const { page } = this.state
    if (page === 1) return
    const pageNumber = page - 1
    this.loadProducts(pageNumber)
  }
  
  // Method of reactJS for to render the JSX
  render() {
  const { products } = this.state
  return (
    <div className="product-list">
      {products.map( product => (
        <article key={product._id}>
          <strong>{product.title}</strong>
          <p>{product.description}</p>
          <Link to={`/products/${product._id}`} id="link">Acessar</Link>
          </article>
          )
          )}
        <div className="button">  
          <button onClick={this.prevPage}>Anterior</button>
          <button onClick={this.nextPage}>Próximo</button>
        </div> 
    </div>
  )
  
  }
}