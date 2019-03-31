import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

export default class AdsList extends Component{
    render() {
        if (this.props.ads) {
            return <ul> 
                {this.props.ads.map((ad, index) => {
                    return <Link to={`/ads/${ad.id}`} key={index}>
                        <li>{ad.title}{` $${ad.price}`}
                        </li>
                </Link>})}
            </ul>
        } else {
            return <h1>Loading...</h1>
        }
    }
}
