import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrganization, resetOrganization } from '../actions/organizationActions'
import { deleteOrganization, getOrganizationsOwner, getAccountOrganizations } from '../actions/organizationsActions'
import Dashboard from '../components/Dashboard'
import Loading from '../components/Loading'

class DashboardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      organizationAddress: null,
      isOrganizationsOwner: null,
    }
    this.deleteOrganization = this.deleteOrganization.bind(this)
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
    if (this.state.organizationAddress && this.props.organization) {
      this.props.deleteOrganization(this.state.organizationAddress, this.props.organization.owner, this.props.accountAddress)
      this.props.resetOrganization()
    }
  }

  deleteOrganization(address) {
    this.props.getOrganization(address)
    this.setState({
      organizationAddress: address,
    })
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
        deleteOrganization={this.deleteOrganization}
        isOrganizationsOwner={this.state.isOrganizationsOwner}
        organization={this.props.organization}
        selectOrganiztion={this.selectOrganiztion}
      />
    )
  }

}

const mapStateToProps = state => ({
  accountOrganizations: state.organizations.accountOrganizations,
  accountOrganizationsError: state.organizations.accountOrganizationsError,
  accountOrganizationsLoading: state.organizations.accountOrganizationsLoading,
  organization: state.organization.organization,
  organizationError: state.organization.organizationError,
  organizationLoading: state.organization.organizationLoading,
  organizationsOwner: state.organizations.organizationsOwner,
  organizationsOwnerError: state.organizations.organizationsOwnerError,
  organizationsOwnerLoading: state.organizations.organizationsOwnerLoading,
})

const mapDispatchToProps = dispatch => ({
  deleteOrganization(organizationAddress, organizationOwner, sender) {
    dispatch(deleteOrganization(organizationAddress, organizationOwner, sender))
  },
  getAccountOrganizations(account) {
    dispatch(getAccountOrganizations(account))
  },
  getOrganization(address) {
    dispatch(getOrganization(address))
  },
  getOrganizationsOwner() {
    dispatch(getOrganizationsOwner())
  },
  resetOrganization() {
    dispatch(resetOrganization())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
