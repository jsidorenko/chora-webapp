import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createOrganization, getOrganizations } from '../actions/organizationsActions'
import Organizations from '../components/Organizations'
import PageLoader from '../components/PageLoader'

class OrganizationsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      organizationName: '',
    }
    this.createOrganization = this.createOrganization.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  componentDidMount() {
    if (!this.props.organizations) {
      this.props.getOrganizations()
    }
  }

  createOrganization() {
    this.props.createOrganization(this.state.organizationName, this.props.accountAddress)
    this.setState({
      organizationName: '',
    })
  }

  handleChangeName(event) {
    this.setState({
      organizationName: event.target.value,
    })
  }

  render() {
    if (this.props.organizationsLoading || this.props.organizationsOwnerLoading) {
      return <PageLoader />
    }
    return (
      <Organizations
        createOrganization={this.createOrganization}
        handleChangeName={this.handleChangeName}
        organizationName={this.state.organizationName}
        organizations={this.props.organizations}
      />
    )
  }

}

const mapStateToProps = state => ({
  organizations: state.organizations.organizations,
  organizationsError: state.organizations.organizationsError,
  organizationsLoading: state.organizations.organizationsLoading,
  organizationsOwner: state.organizations.organizationsOwner,
  organizationsOwnerError: state.organizations.organizationsOwnerError,
  organizationsOwnerLoading: state.organizations.organizationsOwnerLoading,
})


const mapDispatchToProps = dispatch => ({
  createOrganization(organizationName, sender) {
    dispatch(createOrganization(organizationName, sender))
  },
  getOrganizations() {
    dispatch(getOrganizations())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationsContainer)
