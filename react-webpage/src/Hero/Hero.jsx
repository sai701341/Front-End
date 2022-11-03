import React from 'react'
class Hero extends React.Component{
    actor={
        name:'Allu Arjun',
        Remuneration:12500000000,
        Age:40
    }
    render(){
        return <div>
            <h1>Hero Name:{this.actor.name}</h1>
            <h1>Hero Remuneration:{this.actor.Remuneration}</h1>
            <h1>Hero Name:{this.actor.Age}</h1>
        </div>
    }
}
export default Hero