import React, { Component } from "react"
    import AdForm from './AdForm'

export default class AdDetails extends Component {
    render() {
        console.log('this.props', this.props)

        const { ad } = this.props
        if (ad) {
            if (this.props.state.editMode) {
                return <AdForm onSubmit={this.props.onSubmit}
                    onChange={this.props.onChange}
                    values={this.props.state.formValues} />
            }

            return <div>
                <h1>{ad.title}</h1>
                <i>{ad.picture}</i>
                <p>price: {ad.price}</p>
                <p>email: {ad.email}</p>
                <p>phone: {ad.phoneNumber}</p>
                <button onClick={this.props.onDelete}>Delete</button>
                <button onClick={this.props.onEdit}>Edit</button>
            </div>
        }

        return <h1>Loading...</h1>
    }
}  

