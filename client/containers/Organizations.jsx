import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrganizationsOwner } from '../actions/accountActions'
import { createOrganization, deleteOrganization, getOrganizations } from '../actions/organizationsActions'
import Organizations from '../components/Organizations'
import Loading from '../components/Loading'

class OrganizationsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      organizationName: '',
      isOrganizationsOwner: null,
    }
    this.createOrganization = this.createOrganization.bind(this)
    this.deleteOrganization = this.deleteOrganization.bind(this)
    this.handleOrganizationName = this.handleOrganizationName.bind(this)
    this.setOrganizationsOwner = this.setOrganizationsOwner.bind(this)
  }

  componentDidMount() {
    if (!this.props.organizations) {
      this.props.getOrganizations()
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

  createOrganization() {
    this.props.createOrganization(this.state.organizationName, this.props.accountAddress)
  }

  deleteOrganization(address) {
    this.props.deleteOrganization(address, this.props.accountAddress)
  }

  handleOrganizationName(event) {
    this.setState({
      organizationName: event.target.value
    })
  }

  setOrganizationsOwner() {
    const account = this.props.accountAddress.toLowerCase()
    const owner = this.props.organizationsOwner.toLowerCase()
    this.setState({
      isOrganizationsOwner: account === owner,
    })
  }

  render() {
    if (this.props.organizationsLoading || this.props.organizationsOwnerLoading) {
      return <Loading />
    }
    return (
      <Organizations
        createOrganization={this.createOrganization}
        deleteOrganization={this.deleteOrganization}
        handleOrganizationName={this.handleOrganizationName}
        isOrganizationsOwner={this.state.isOrganizationsOwner}
        organizationName={this.state.organizationName}
        organizations={this.props.organizations}
        selectOrganiztion={this.props.selectOrganiztion}
      />
    )
  }

}

const mapStateToProps = state => ({
  organizations: state.organizations.organizations,
  organizationsError: state.organizations.organizationsError,
  organizationsLoading: state.organizations.organizationsLoading,
  organizationsOwner: state.account.organizationsOwner,
  organizationsOwnerError: state.account.organizationsOwnerError,
  organizationsOwnerLoading: state.account.organizationsOwnerLoading,
})


const mapDispatchToProps = dispatch => ({
  createOrganization(organizationName, sender) {
    dispatch(createOrganization(organizationName, sender))
  },
  deleteOrganization(organizationAddress, sender) {
    dispatch(deleteOrganization(organizationAddress, sender))
  },
  getOrganizations() {
    dispatch(getOrganizations())
  },
  getOrganizationsOwner() {
    dispatch(getOrganizationsOwner())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationsContainer)
