import React, { useEffect, useState } from 'react'
import Axios from "axios"

const ProductList = () => {
    let [products,setProducts]=useState([])
    useEffect(()=>{
        let url="http://127.0.0.1:5000/api/products"
         Axios.get(url).then((response)=>{
          setProducts(response.data)
         }).catch(()=>{

         })

    })
  return (
    <div>
        <h1>Productlist</h1>
        <div className="container">
            <div className="row">
                {
                    products.length>0?<>
                   {
                    products.map((product)=>{
                        return <div className="col">
                        <div className="card">
                            <div className="card-header">
                            
                               <img src={product.image} alt="" />
    
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>{product.name}</li>
                                    <li>{product.price}</li>
                                    <li>{product.qty}</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    })
                   }
                    </>:<h1>no products</h1>
                }
            </div>
        </div>

    </div>
  )
}

export default ProductList