import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getContributor } from '../../actions/organizationActions'
import Contributors from '../../components/Organization/Contributors'
import PageLoader from '../../components/PageLoader'

class ContributorsContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.organization.contributors.length) {
      this.props.organization.contributors.map(address => this.props.getContributor(this.props.match.params.address, address))
    }
  }

  render() {
    if (this.props.contributorsLoading) {
      return <PageLoader />
    }
    return (
      <Contributors
        accountAddress={this.props.accountAddress}
        contributorAddresses={this.props.organization.contributors}
        contributors={this.props.contributors}
      />
    )
  }

}

const mapStateToProps = state => ({
  contributors: state.organization.contributors,
  contributorsError: state.organization.contributorsError,
  contributorsLoading: state.organization.contributorsLoading,
})


const mapDispatchToProps = dispatch => ({
  getContributor(organizationAddress, address) {
    dispatch(getContributor(organizationAddress, address))
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContributorsContainer))
