import React from 'react'
import CompB from './CompB'
let CompA=()=>{
    let eid=101;
    let ename= "Allu Arjun"
    let  salary=1000000000
    return   <div>
        <h1>Component A</h1>
        <hr/>
        < CompB Id={eid} Name={ename} Remuneration={salary} /> 
     

    </div>

}
export default CompA