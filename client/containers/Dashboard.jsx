import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrganizationsContributor, getOrganizationsOwner, getOwner } from '../actions/organizationsActions'
import Dashboard from '../components/Dashboard'
import PageLoader from '../components/PageLoader'

class DashboardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOwner: null,
    }
  }

  componentDidMount() {
    if (!this.props.organizationsContributor) {
      this.props.getOrganizationsContributor(this.props.accountAddress)
    }
    if (!this.props.organizationsOwner) {
      this.props.getOrganizationsOwner(this.props.accountAddress)
    }
    if (!this.props.organizationsOwner) {
      this.props.getOwner()
    }
    if (this.state.isOwner === null && !this.props.ownerLoading && this.props.owner) {
      this.setOwner()
    }
  }

  componentDidUpdate() {
    if (this.state.isOwner === null && !this.props.ownerLoading && this.props.owner) {
      this.setOwner()
    }
  }

  setOwner() {
    const account = this.props.accountAddress.toLowerCase()
    const owner = this.props.owner.toLowerCase()
    this.setState({
      isOwner: account === owner,
    })
  }

  render() {
    if (this.props.organizationsContributorLoading || this.props.organizationsOwnerLoading || this.props.ownerLoading) {
      return <PageLoader />
    }
    return (
      <Dashboard
        accountAddress={this.props.accountAddress}
        organizationsContributor={this.props.organizationsContributor}
        organizationsOwner={this.props.organizationsOwner}
        isOwner={this.state.isOwner}
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
  owner: state.organizations.owner,
  ownerError: state.organizations.ownerError,
  ownerLoading: state.organizations.ownerLoading,
})

const mapDispatchToProps = dispatch => ({
  getOrganizationsContributor(account) {
    dispatch(getOrganizationsContributor(account))
  },
  getOrganizationsOwner(account) {
    dispatch(getOrganizationsOwner(account))
  },
  getOwner() {
    dispatch(getOwner())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
