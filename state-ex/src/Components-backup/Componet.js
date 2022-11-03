import React from "react";
export class Component extends React.Component{
    state={
        msg:1
    }
    incrHandler=()=>{
       this.setState({msg:this.state.msg+1})
    }
    decrHandler=()=>{
          this.setState({msg:this.state.msg-1})
    }
    render(){
        return( <div>
            <h1>Message value:{this.state.msg}</h1>
           <button onClick={this.incrHandler}>+</button>
           <button onClick={this.decrHandler}>-</button>

        </div>)
    }
}
export default Component