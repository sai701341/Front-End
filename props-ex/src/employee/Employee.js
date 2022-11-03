import React from "react";
class Employee extends React.Component{
    render(){
        return <div>
            <h1>Tollywood ka Baap</h1>
            <hr/>
          <pre>{JSON.stringify(this.props)}</pre>
            <h2>{this.props.Id}</h2>
            <h2>{this.props.Name}</h2>
            <h2>{this.props.Details}</h2>
            <h2>{this.props.Location}</h2>
        </div>
    }

}
export default Employee