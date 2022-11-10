
import React, { useState } from 'react'
import Axios from "axios"
const CreateProduct = () => {
    let [submitted,setSubmitted]=useState(false)
    let [products,setProducts]=useState({
           name:"",
           image:"",
           price:"",
           qty:"",
           info:""
    })
    let inputProducts=(event)=>{
        setProducts({...products,[event.target.name]:event.target.value})
    }
       let submitProducts=(event)=>{
        event.preventDefault()
        let url="http://127.0.0.1:5000/api/products"
        Axios.post(url,products).then((response)=>{
       setSubmitted(true)
        }).catch(()=>{

        })
       }

       let imageChangeHandler = async (event) => {
        let imageFile = event.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.addEventListener("load", () => {
          if (reader.result) {
            setProducts({ ...products, image: reader.result })
          } else {
            alert("error")
          }
        })
      }
    
  return (
    <div>
        <h1>Createproduct</h1>
        <div className="container">
            <pre>{JSON.stringify(products)}</pre>
            <pre>{JSON.stringify(submitted)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-success text-white">Crud App</div>
                        <div className="card-body">
                        <form onSubmit={submitProducts}>
                            <div className="form-group">
                                <input type="text" name='name' onChange={inputProducts} className='form-control' placeholder='Name'/>
                            </div>
                            <div className="form-group">
                              <input type="number" name='price' onChange={inputProducts} className='form-control' placeholder='Price'/>
                            </div>
                            <div className="form-group">
                              <input type="number" name='qty' onChange={inputProducts} className='form-control' placeholder='Qty'/>
                            </div>
                            <div className="form-group">
                              <input type="file" name='image' onChange={imageChangeHandler} className='form-control'/>
                            </div>
                                
                            <div className="form-group">
                                <input type="text" name='info' onChange={inputProducts} className='form-control' placeholder='info'/>
                            </div>
                            <div className="form-group">
                              <input type="submit" onChange={inputProducts}  value="createproduct" className=' btn btn-primary'/>
                           
                            </div> 
                           
                            </form>
                             </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateProduct