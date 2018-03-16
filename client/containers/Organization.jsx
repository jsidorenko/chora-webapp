import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getOrganization, resetOrganization } from '../actions/organizationActions'
import Organization from '../components/Organization'
import Loading from '../components/Loading'

class OrganizationContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: 'Overview',
      isContributor: null,
      isOwner: null,
    }
    this.setCurrentView = this.setCurrentView.bind(this)
    this.setContributor = this.setContributor.bind(this)
    this.setOwner = this.setOwner.bind(this)
  }

  componentDidMount() {
    this.props.getOrganization(this.props.match.params.address)
  }

  componentDidUpdate() {
    if (this.state.isContributor === null && !this.props.organizationLoading && this.props.organization) {
      this.setContributor()
    }
    if (this.state.isOwner === null && !this.props.organizationLoading && this.props.organization) {
      this.setOwner()
    }
  }

  componentWillUnmount() {
    this.props.resetOrganization()
  }

  setCurrentView(view) {
    this.setState({
      currentView: view,
    })
  }

  setContributor() {
    const account = this.props.accountAddress.toLowerCase()
    const contributors = this.props.organization.contributors.map(contributor => contributor.toLowerCase())
    this.setState({
      isContributor: contributors.includes(account),
    })
  }

  setOwner() {
    const account = this.props.accountAddress.toLowerCase()
    const owner = this.props.organization.owner.toLowerCase()
    this.setState({
      isOwner: account === owner,
    })
  }

  render() {
    if (this.props.organizationLoading) {
      return <Loading />
    }
    return (
      <Organization
        address={this.props.match.params.address}
        currentView={this.state.currentView}
        isContributor={this.state.isContributor}
        isOwner={this.state.isOwner}
        organization={this.props.organization}
        setCurrentView={this.setCurrentView}
      />
    )
  }

}

const mapStateToProps = state => ({
  organization: state.organization.organization,
  organizationError: state.organization.organizationError,
  organizationLoading: state.organization.organizationLoading,
})

const mapDispatchToProps = dispatch => ({
  getOrganization(address) {
    dispatch(getOrganization(address))
  },
  resetOrganization() {
    dispatch(resetOrganization())
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrganizationContainer))
