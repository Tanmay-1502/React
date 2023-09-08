import React from 'react'
//import { ReactDOM } from 'react-dom/client'

class Greet extends React.Component{
    render(){
        return <h3 color='green'>Hello t john {this.props.name} and salary {this.props.salary}</h3>
    }
}

export default Greet