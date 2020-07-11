import React, { useEffect, useState } from 'react' // For to import React and { Component } of react to use JSX and to create component
import api from '../../services/api' // It´s an api comes from the backend
import { Link } from 'react-router-dom' // Is a paging feature

import './style.css' // Style CSS of component Main

// Exporting of component Main
export default function Main() {
  // state = {
  //   products: [],
  //   productInfo: {},
  //   page: 1, 
  //   userId: ''
  // }

  const [ products, setProducts ] = useState([])
  const [ productInfo, setProductInfo ] = useState({})
  const [ page, setPage ] = useState(1)
  const [ userId, setUserId ] = useState()
  


  // Method of cycle life 
  useEffect(() => {
    loadProducts()
  }, [])

  // Method for load the page
  const loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`)

    const { docs, ...productInfo } = response.data

    setProducts(docs)
    setProductInfo(productInfo)
    setPage(page)
    // this.setState({ products: docs, productInfo, page })
  } 

  // Method for load next page
  const nextPage = () => {
    if (page === productInfo.pages) return;
    const pageNumber = page + 1
    loadProducts(pageNumber)
  }


  // Method for load page previous
  const prevPage = () => {
    if (page === 1) return
    const pageNumber = page - 1
    loadProducts(pageNumber)
  }
  const getId = event => {
    const { href } = event.target
    const link = `${href}`
    const array = link.split('/')

    const id = array[4]

    const teste = () => {
      setUserId(id)
    }

    teste()
    console.log(userId)
  }
  console.log(userId)






  // Method of reactJS for to render the JSX
  return (
    <div className="product-list">
      {products.map( product => (
        <article key={product._id}>
          <strong>{product.title}</strong>
          <p>{product.description}</p>
          <Link to={`/products/${product._id}`} onClick={getId} id="link">Acessar</Link>
          </article>
          )
          )}
        <div className="button">  
          <button onClick={prevPage}>Anterior</button>
          <button onClick={nextPage}>Próximo</button>
        </div> 
    </div>
  )
  
}