import React from "react";
export class Message extends React.Component{
    state={
        msg:"hello"
    }
    gMHandler=()=>{
       this.setState({msg:"hello good morning"})
    }
    gNHandler=()=>{
          this.setState({msg:"hello good night"})
    }
    render(){
        return( <div>
            <h1>Message value:{this.state.msg}</h1>
           <button onClick={this.gMHandler}>Gm</button>
           <button onClick={this.gNHandler}>Gn</button>

        </div>)
    }
}
export default Message