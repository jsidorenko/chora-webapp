import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getOrganization } from '../actions/organizationActions'
import Organization from '../components/Organization'
import Loading from '../components/Loading'

class OrganizationContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: 'overview',
    }
    this.setCurrentView = this.setCurrentView.bind(this)
  }

  componentDidMount() {
    this.props.getOrganization(this.props.match.params.address)
  }

  setCurrentView(view) {
    this.setState({
      currentView: view,
    })
  }

  render() {
    if (this.props.organizationLoading) {
      return <Loading />
    }
    return (
      <Organization
        address={this.props.match.params.address}
        currentView={this.state.currentView}
        organization={this.props.organization}
        setCurrentView={this.setCurrentView}
      />
    )
  }

}

const mapStateToProps = state => ({
  organization: state.organization.organization,
  organizationError: state.organization.organizationError,
  organizationLoading: state.organization.organizationLoading,
})

const mapDispatchToProps = dispatch => ({
  getOrganization(address) {
    dispatch(getOrganization(address))
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrganizationContainer))
