import { loadAds } from '../actions/ads'
import { connect } from 'react-redux'
import AdsList from './AdsList'
import React from 'react'

class AdsListContainer extends React.Component {
    componentDidMount() {
        this.props.loadAds()
    }

    render() {
        return <AdsList ads={this.props.ads} />
    }
}

const mapStateToProps = state => ({
    ads: state.ads
})

export default connect(mapStateToProps, {loadAds})(AdsListContainer)