import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

export default class AddsList extends Component{
    render() {
        if (this.props.adds) {
            return <ul> 
                {this.props.adds.map((add, index) => {
                    return <Link to={`/${add.id}`} key={index}>
                        <li>{add.title}{` $${add.price}`}
                        </li>
                </Link>})}
            </ul>
        } else {
            return <h1>Loading...</h1>
        }
    }
}
