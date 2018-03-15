import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getOrganization } from '../actions/organizationActions'
import Organization from '../components/Organization'
import Loading from '../components/Loading'

class OrganizationContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: 'overview',
      isMember: null,
      isOwner: null,
    }
    this.setCurrentView = this.setCurrentView.bind(this)
    this.setMembership = this.setMembership.bind(this)
    this.setOwnership = this.setOwnership.bind(this)
  }

  componentDidMount() {
    this.props.getOrganization(this.props.match.params.address)
  }

  componentDidUpdate() {
    if (this.state.isMember === null && !this.props.organizationLoading && this.props.organization) {
      this.setMembership()
    }
    if (this.state.isOwner === null && !this.props.organizationLoading && this.props.organization) {
      this.setOwnership()
    }
  }

  setCurrentView(view) {
    this.setState({
      currentView: view,
    })
  }

  setMembership() {
    const account = this.props.accountAddress.toLowerCase()
    const members = this.props.organization.members.map(member => member.toLowerCase())
    this.setState({
      isMember: members.includes(account),
    })
  }

  setOwnership() {
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
        isMember={this.state.isMember}
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
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrganizationContainer))
