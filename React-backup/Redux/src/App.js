import React from 'react'
import { Provider } from 'react-redux'
import { store } from "./redux/store"
import Product from "./product/Product"
let App = () => {

    return <div>
        <h1>App Component</h1>

        <Provider store={store}>

        </Provider>
        <Product />

    </div>
}

export default App 