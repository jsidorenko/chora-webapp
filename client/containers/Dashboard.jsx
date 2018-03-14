import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrganization, setOrganization } from '../actions/organizationActions'
import Dashboard from '../components/Dashboard'
import Loading from '../components/Loading'

class DashboardContainer extends Component {

  constructor(props) {
    super(props)
    this.selectOrganiztion = this.selectOrganiztion.bind(this)
  }

  selectOrganiztion(address) {
    this.props.setOrganization(address)
    this.props.getOrganization(address)
  }

  render() {
    if (this.props.accountLoading) {
      return <Loading />
    }
    return (
      <Dashboard
        account={this.props.account}
        accountAddress={this.props.accountAddress}
        organization={this.props.organization}
        selectOrganiztion={this.selectOrganiztion}
        selectedOrganization={this.props.selectedOrganization}
      />
    )
  }

}

const mapStateToProps = state => ({
  account: state.user.account,
  accountError: state.user.accountError,
  accountLoading: state.user.accountLoading,
  organization: state.organization.organization,
  organizationError: state.organization.organizationError,
  organizationLoading: state.organization.organizationLoading,
  selectedOrganization: state.organization.selectedOrganization,
})


const mapDispatchToProps = dispatch => ({
  getOrganization(address) {
    dispatch(getOrganization(address))
  },
  setOrganization(address) {
    dispatch(setOrganization(address))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
