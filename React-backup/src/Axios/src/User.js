/* import React from "react";
import Axios from "axios"
class User extends React.Component{
    state={
        new_products:{}
    }
    componentDidMount=()=>{
        Axios.get('https://dummyjson.com/products').then((response)=>{
        this.setState({new_products:response.data})
         })
         .catch(()=>{

         })
    }

   
    
    render(){
       
        return <div className="container">
            <h1>User Component</h1>
               <pre>{JSON.stringify(this.state)}</pre>
                 <div className="row">
                      <div className="col-md-6">
                         <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Gmail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(this.state.new_products).length>0?<>
                                    {
                                    this.state.new_products.products.map((products)=>{
                                    return (
                                        <tr>
                                            <td>{products.id}</td>
                                            <td>{products.price}</td>
                                            <td>{products.title}</td>
                                        </tr>
                                    )
                                })
                                }
                                    </>:null
                                }
                            </tbody>
                         </table>
                      </div>
                  </div>
               </div>
        
    }
}
export default User */


import React from "react";
import Axios from "axios"
class User extends React.Component{
    state={
        new_products:[]
    }
    componentDidMount=()=>{
        Axios.get('http://jsonplaceholder.typicode.com/users').then((response)=>{
        this.setState({new_products:response.data})
         })
         .catch((err)=>{

         })
    }

   
    
    render(){
       
        return <div className="container">
            <h1>User Component</h1>
               <pre>{JSON.stringify(this.state)}</pre>
                 <div className="row">
                      <div className="col-md-6">
                         <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Gmail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.new_products.length>0?<>
                                    {
                                    this.state.new_products.map((products)=>{
                                    return (
                                        <tr>
                                            <td>{products.id}</td>
                                            <td>{products.name}</td>
                                            <td>{products.email}</td>
                                        </tr>
                                    )
                                })
                                }
                                    </>:null
                                }
                            </tbody>
                         </table>
                      </div>
                  </div>
               </div>
        
    }
}
export default User