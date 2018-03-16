import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrganizationsOwner, getAccountOrganizations } from '../actions/accountActions'
import Dashboard from '../components/Dashboard'
import Loading from '../components/Loading'

class DashboardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOrganizationsOwner: null,
    }
    this.selectOrganiztion = this.selectOrganiztion.bind(this)
    this.setOrganizationsOwner = this.setOrganizationsOwner.bind(this)
  }

  componentDidMount() {
    if (!this.props.organizations) {
      this.props.getAccountOrganizations(this.props.accountAddress)
    }
    if (!this.props.organizationsOwner) {
      this.props.getOrganizationsOwner()
    }
    if (this.state.isOrganizationsOwner === null && !this.props.organizationsOwnerLoading && this.props.organizationsOwner) {
      this.setOrganizationsOwner()
    }
  }

  componentDidUpdate() {
    if (this.state.isOrganizationsOwner === null && !this.props.organizationsOwnerLoading && this.props.organizationsOwner) {
      this.setOrganizationsOwner()
    }
  }

  selectOrganiztion(address) {
    this.props.getOrganization(address)
  }

  setOrganizationsOwner() {
    const account = this.props.accountAddress.toLowerCase()
    const owner = this.props.organizationsOwner.toLowerCase()
    this.setState({
      isOrganizationsOwner: account === owner,
    })
  }

  render() {
    if (this.props.accountOrganizationsLoading || this.props.organizationsOwnerLoading) {
      return <Loading />
    }
    return (
      <Dashboard
        accountAddress={this.props.accountAddress}
        accountOrganizations={this.props.accountOrganizations}
        isOrganizationsOwner={this.state.isOrganizationsOwner}
        organization={this.props.organization}
        selectOrganiztion={this.selectOrganiztion}
      />
    )
  }

}

const mapStateToProps = state => ({
  accountOrganizations: state.account.accountOrganizations,
  accountOrganizationsError: state.account.accountOrganizationsError,
  accountOrganizationsLoading: state.account.accountOrganizationsLoading,
  organization: state.organization.organization,
  organizationError: state.organization.organizationError,
  organizationLoading: state.organization.organizationLoading,
  organizationsOwner: state.account.organizationsOwner,
  organizationsOwnerError: state.account.organizationsOwnerError,
  organizationsOwnerLoading: state.account.organizationsOwnerLoading,
})

const mapDispatchToProps = dispatch => ({
  getAccountOrganizations(account) {
    dispatch(getAccountOrganizations(account))
  },
  getOrganizationsOwner() {
    dispatch(getOrganizationsOwner())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
