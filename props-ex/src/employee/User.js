import React from 'react'
import Employee from './Employee'
class User extends React.Component{
    uid=101;
    uname= 'Allu Arjun'
    usal= 4500000000
    udetails= 'Allu Studios'
    uloc= 'Hyderabad'
    render(){
        return <div>
            <h1>Cinee Industries</h1>
            < Employee Id={this.uid} Name={this.uname} Details={this.udetails} Location={this.uloc}/>
        </div>
    }
} export default User