let CompB =(props)=>{

    return<div>
            <h1>Component-B</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h2>Employee ID:{props.Id}</h2>
            <h2>Employee Name:{props.Name}</h2>
            <h2>Employee Sal:{props.Remuneration}</h2>
    </div>
}
export default CompB