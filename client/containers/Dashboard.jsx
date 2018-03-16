import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrganizationsOwner, getAccountOrganizations } from '../actions/accountActions'
import Dashboard from '../components/Dashboard'
import Loading from '../components/Loading'

class DashboardContainer extends Component {

  constructor(props) {
    super(props)
    this.selectOrganiztion = this.selectOrganiztion.bind(this)
  }

  componentDidMount() {
    this.props.getAccountOrganizations(this.props.accountAddress)
    if (!this.props.organizationsOwner) {
      this.props.getOrganizationsOwner()
    }
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
  account: state.account.account,
  accountError: state.account.accountError,
  accountLoading: state.account.accountLoading,
  organization: state.organization.organization,
  organizationError: state.organization.organizationError,
  organizationLoading: state.organization.organizationLoading,
  organizationsOwner: state.account.organizationsOwner,
  organizationsOwnerError: state.account.organizationsOwnerError,
  organizationsOwnerLoading: state.account.organizationsOwnerLoading,
  selectedOrganization: state.organization.selectedOrganization,
})

const mapDispatchToProps = dispatch => ({
  getOrganizationsOwner() {
    dispatch(getOrganizationsOwner())
  },
  getAccountOrganizations(account) {
    dispatch(getAccountOrganizations(account))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
