import React from 'react'
import { connect } from 'react-redux'
import { createAdd } from '../actions/adds'
import AddForm from './AddForm'

class AddFormContainer extends React.Component {
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

    onSubmit = (add) => {
        add.preventDefault()
        this.props.createAdd(this.state)
        this.setState({
            title: '',
            picture: '',
            price: '',
            email: '',
            phoneNumber: ''
        })
    }

    render() {
        return (<AddForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            />)
    }
}

export default connect(null, {createAdd})(AddFormContainer)