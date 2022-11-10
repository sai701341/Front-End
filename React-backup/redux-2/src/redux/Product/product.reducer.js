import {INCR,DECR } from "./product.action"

let initialState={
    productName:'ASUS ROG5',
    price:650000,
    qty:1,
    img:"https://www.saasna.com/4296-large_default/asus-rog-5s-pro-phantom-black-512-gb-18-gb-ram.jpg"
}
let productReducer=(state = initialState, action)=>{
    switch (action.type){
        case INCR:{
            return {
                ...state,qty:state.qty+1
            }
        }
        case DECR:{
            return{
                ...state,qty:state.qty-1
            }
        }
        default:return state
    }
}
export {productReducer}