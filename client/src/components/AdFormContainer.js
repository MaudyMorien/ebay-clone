import React from 'react'
import { connect } from 'react-redux'
import { createAd } from '../actions/ads'
import AdForm from './AdForm'

class AdFormContainer extends React.Component {
    state = {
        title: '',
        picture: '',
        price: '',
        email: '',
        phoneNumber: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    onSubmit = (ad) => {
        ad.preventDefault()
        this.props.createAd(this.state)
        this.setState({
            title: '',
            picture: '',
            price: '',
            email: '',
            phoneNumber: ''
        })
    }

    render() {
        return (<AdForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            />)
    }
}

export default connect(null, {createAd})(AdFormContainer)