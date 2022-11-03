
/*import React from "react"
import CompA from "./componets/CompA"
let App=()=>{
        return <div>
            <h1>App Component</h1>
            <CompA/>
        </div>
    }

export default App*/

import React from "react";
import User from "./employee/User";
class App extends React.Component{
    render(){
        return <>
        <User />
        </>
    }
}
export default App