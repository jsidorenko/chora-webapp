import React, { Component } from 'react'
import { connect } from 'react-redux'
import Organization from '../components/Organization'
import Loading from '../components/Loading'

class OrganizationContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Organization
        organization={this.props.organization}
      />
    )
  }

}

const mapStateToProps = state => ({
  organization: state.organization.organization,
  organizationError: state.organization.organizationError,
  organizationLoading: state.organization.organizationLoading,
})

export default connect(mapStateToProps, null)(OrganizationContainer)
