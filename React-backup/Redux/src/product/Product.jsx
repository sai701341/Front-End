import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrAction, incrAction } from '../redux/Product/product.action'

let Product = () => {
    let dispatch = useDispatch()
    let product = useSelector((state) => {
        return state

    })
    let incrHandler = () => {
        dispatch(incrAction())
    }
    let decrHandler = () => {
        dispatch(decrAction())

    }
    return <div className='container'>
        <div className="row">
            <div className="col-md-6">
                <table className='table table-hover '>
                    <thead className='bg-success text-white'>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.product_Name}</td>
                            <td>{product.price}</td>
                            <td><i className='fa fa-minus-circle' onClick={decrHandler}></i>{product.qty}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
}
export default Product