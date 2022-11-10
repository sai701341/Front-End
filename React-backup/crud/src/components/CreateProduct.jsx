import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const CreateProduct = () => {
    let [products, setProducts] = useState({
        name:"",
        price:"",
        qty:"",
        image:"",
        info: ""
    })
    let [submitted, setSubmitted] = useState(false)
   

    let getInput = (event)=>{
        setProducts({...products, [event.target.name]:event.target.value})
    }


   let changeImage = async(event)=>{
    let imageFile=event.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(imageFile)
    reader.addEventListener('load', ()=>{
        if(reader.result){
            setProducts({...products, image:reader.result})
        }
        else{
            alert('Error')
        }
    })
   }

 let submitProduct = (event)=>{
    console.log("Test Case");
event.preventDefault();
let url="http://127.0.0.1:5000/api/products"
Axios.post(url, products).then((response)=>{
    console.log("TEst")
    setSubmitted(true)
    console.log(response.data);

}).catch(()=>{})
}


  return <>
  <div className="container mt-5">
    <pre>{JSON.stringify(products)}</pre>
    <pre>{JSON.stringify(submitted)}</pre>
    <div className="row">
        <div className="col-5">
            <div className="card">
                <div className="card-header bg-success text-white "> 
                    <h2>Create Product</h2>
                </div>
                <div className="card-body">

                <form onSubmit={submitProduct}>

                <div className='form-group'>
                <input type="text" className='form-control'  name="name" onChange={getInput} placeholder="ProductName"/>
                </div>

                <div className='form-group'>
                <input type="number" className='form-control' name="price" onChange={getInput} placeholder="Price"/>
                </div>

                <div className='form-group'>
                <input type="number" className='form-control' name="qty" onChange={getInput} placeholder="QTY"/>
                </div>

                <div className='form-group'>
                <input type="file" name="image" className='form-control-file' onChange={changeImage}placeholder="Image"/>
                </div>

                <div className='form-group' >
                <input type="text" className='form-control' name="info" onChange={getInput} placeholder="Info"/>
                </div>

                <input type="submit" className='btn btn-primary' onChange={getInput} value='Create Product' />
            </form>
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default CreateProduct
