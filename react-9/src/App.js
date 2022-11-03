import React from 'react'
//import Navbar from './Navbar/Navbar'
//import Component from './Comp/Component'
import Home from './Singlepage/Home'
import About from './Singlepage/About'

import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <div>
            <Router>

                <Navbar />
                <Switch>
                    <Route path="/About" component={About} />


                    <Route path="/Home" component={Home} />



                </Switch>
            </Router>

        </div>
    }
}
export default App