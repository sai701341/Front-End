import React from "react"
import Product from "./product/Product"
import {Provider}from "react-redux"
import {store} from "./redux/store"

let App=()=>{
    return <div>
        
        <Provider store={store}>
        <h1>App Component</h1>
        <Product/>
           
        </Provider>
        
    </div>
}
export default App