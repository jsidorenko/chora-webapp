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
    this.props.getAccountOrganizations(this.props.accountAddress)
    if (!this.props.organizationsOwner) {
      this.props.getOrganizationsOwner()
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
    if (this.props.accountLoading || this.props.organizationsOwnerLoading) {
      return <Loading />
    }
    return (
      <Dashboard
        account={this.props.account}
        accountAddress={this.props.accountAddress}
        isOrganizationsOwner={this.state.isOrganizationsOwner}
        organization={this.props.organization}
        selectOrganiztion={this.selectOrganiztion}
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
