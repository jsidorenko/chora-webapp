import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrganizationsOwner } from '../actions/accountActions'
import { createOrganization, getOrganizations } from '../actions/organizationsActions'
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
    this.handleOrganizationName = this.handleOrganizationName.bind(this)
    this.setOrganizationsOwner = this.setOrganizationsOwner.bind(this)
  }

  componentDidMount() {
    this.props.getOrganizations()
    if (!this.props.organizationsOwner) {
      this.props.getOrganizationsOwner()
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
  getOrganizationsOwner() {
    dispatch(getOrganizationsOwner())
  },
  createOrganization(name, owner) {
    dispatch(createOrganization(name, owner))
  },
  getOrganizations() {
    dispatch(getOrganizations())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationsContainer)
