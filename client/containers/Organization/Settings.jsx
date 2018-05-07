import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { deleteOrganization } from '../../actions/organizationsActions'
import PageLoader from '../../components/PageLoader'
import Settings from '../../components/Organization/Settings'

class SettingsContainer extends Component {

  constructor(props) {
    super(props)
    this.deleteOrganization = this.deleteOrganization.bind(this)
  }

  deleteOrganization() {
    this.props.deleteOrganization(this.props.match.params.address, this.props.organization.owner, this.props.accountAddress)
  }

  render() {
    if (this.props.transactionsLoading) {
      return <PageLoader />
    }
    return (
      <Settings
        deleteOrganization={this.deleteOrganization}
      />
    )
  }

}

const mapDispatchToProps = dispatch => ({
  deleteOrganization(organizationAddress, organizationOwner, sender) {
    dispatch(deleteOrganization(organizationAddress, organizationOwner, sender))
  },
})

export default connect(null, mapDispatchToProps)(withRouter(SettingsContainer))
