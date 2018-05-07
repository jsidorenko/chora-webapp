import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrganizationsContributor, getOrganizationsOwner } from '../actions/organizationsActions'
import Dashboard from '../components/Dashboard'
import PageLoader from '../components/PageLoader'

class DashboardContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.organizationsContributor) {
      this.props.getOrganizationsContributor(this.props.accountAddress)
    }
    if (!this.props.organizationsOwner) {
      this.props.getOrganizationsOwner(this.props.accountAddress)
    }
  }

  render() {
    if (this.props.organizationsContributorLoading || this.props.organizationsOwnerLoading) {
      return <PageLoader />
    }
    return (
      <Dashboard
        accountAddress={this.props.accountAddress}
        organizationsContributor={this.props.organizationsContributor}
        organizationsOwner={this.props.organizationsOwner}
      />
    )
  }

}

const mapStateToProps = state => ({
  organizationsContributor: state.organizations.organizationsContributor,
  organizationsContributorError: state.organizations.organizationsContributorError,
  organizationsContributorLoading: state.organizations.organizationsContributorLoading,
  organizationsOwner: state.organizations.organizationsOwner,
  organizationsOwnerError: state.organizations.organizationsOwnerError,
  organizationsOwnerLoading: state.organizations.organizationsOwnerLoading,
})

const mapDispatchToProps = dispatch => ({
  getOrganizationsContributor(account) {
    dispatch(getOrganizationsContributor(account))
  },
  getOrganizationsOwner(account) {
    dispatch(getOrganizationsOwner(account))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
