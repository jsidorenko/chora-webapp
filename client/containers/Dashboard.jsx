import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrganizationsOwner, getAccountOrganizations } from '../actions/organizationsActions'
import Dashboard from '../components/Dashboard'
import PageLoader from '../components/PageLoader'

class DashboardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOrganizationsOwner: null,
    }
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

  setOrganizationsOwner() {
    const account = this.props.accountAddress.toLowerCase()
    const owner = this.props.organizationsOwner.toLowerCase()
    this.setState({
      isOrganizationsOwner: account === owner,
    })
  }

  render() {
    if (this.props.accountOrganizationsLoading || this.props.organizationsOwnerLoading) {
      return <PageLoader />
    }
    return (
      <Dashboard
        accountAddress={this.props.accountAddress}
        accountOrganizations={this.props.accountOrganizations}
        isOrganizationsOwner={this.state.isOrganizationsOwner}
      />
    )
  }

}

const mapStateToProps = state => ({
  accountOrganizations: state.organizations.accountOrganizations,
  accountOrganizationsError: state.organizations.accountOrganizationsError,
  accountOrganizationsLoading: state.organizations.accountOrganizationsLoading,
  organizationsOwner: state.organizations.organizationsOwner,
  organizationsOwnerError: state.organizations.organizationsOwnerError,
  organizationsOwnerLoading: state.organizations.organizationsOwnerLoading,
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
