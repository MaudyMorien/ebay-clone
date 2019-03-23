import React, { Component } from 'react'

export default class AddForm extends Component {

    render() {
        return <form onSubmit={this.props.onSubmit}>
            <label>
                Title:
        <input
                    type="text"
                    name="title"
                    value={this.props.values.title}
                    onChange={this.props.onChange} />
            </label>
            <label>
                URL picture:
        <input
                    type="text"
                    name="picture"
                    value={this.props.values.picture}
                    onChange={this.props.onChange} />
            </label>
            <label>
                Price:
        <input
                    type="text"
                    name="price"
                    value={this.props.values.price}
                    onChange={this.props.onChange} />
            </label>
            <label>
                Email:
        <input
                    type="text"
                    name="email"
                    value={this.props.values.email}
                    onChange={this.props.onChange} />
            </label>
            <label>
                phone number:
        <input
                    type="text"
                    name="phoneNumber"
                    value={this.props.values.phoneNumber}
                    onChange={this.props.onChange} />
            </label>
            <input
                type="submit"
                value="Submit" />
        </form>
    }
}