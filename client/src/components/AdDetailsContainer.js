import React from 'react'
import { connect } from 'react-redux'
import AdDetails from './AdDetails'
import { loadSingleAd, updateAd, deleteAd } from '../actions/ads'

class AdDetailsContainer extends React.Component {
  state = {
    editMode: false,
    formValues: {
      title: "",
      picture: "",
      price: "",
      email: "",
      phoneNumber: "",
    }
  }

  componentDidMount() {
    console.log('this.props',this.props)
    this.props.loadSingleAd(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deleteAd(Number(this.props.ad.id))
    this.props.history.push('/')
  }

  onEdit = () => {
    const newEditMode = !this.state.editMode
    this.setState({
      editMode: newEditMode,
      formValues: {
        title: this.props.ad.title,
        picture: this.props.ad.picture,
        price: this.props.ad.price,
        email: this.props.ad.email,
        phoneNumber: this.props.ad.phoneNumber
      }
    })
  }

  onChange = (ad) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [ad.target.name]: ad.target.value
      }
    })
  }

  onSubmit = (ad) => {
    ad.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateAd(this.props.ad.id, this.state.formValues)
  }

  render() {
    return (<AdDetails
      onDelete={this.onDelete}
      ad={this.props.ad}
      onEdit={this.onEdit}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      state={this.state}
    />)
  }
}

const mapStateToProps = state => ({
  ad: state.ad
})

export default connect(mapStateToProps, { loadSingleAd, updateAd, deleteAd })(AdDetailsContainer)