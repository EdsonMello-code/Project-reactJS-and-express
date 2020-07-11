import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import './styles.css'

import api from '../../services/api';


// details of product
export default function Product() {

    const [details, setDetails] = useState([]) 


    const loadDetails = useCallback(async () => {
      

    }
    )

    const { ID } = useParams()
    console.log(ID)
    useEffect(() => {
      api.get(`/products/${ID}`)
        .then(user => setDetails(user.data))
    
    }, [ID])

   return (
    <div id='details'>
      <h1 className='items'>{details.title}</h1>
      <strong className='items'>{details.description}</strong>
      <a href={details.url} className='items'>Saber mais</a>
    </div>
  )  
}