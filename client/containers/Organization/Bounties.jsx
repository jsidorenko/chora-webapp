import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { claimBounty, getBounty, submitWork } from '../../actions/bountiesActions'
import { createBounty, deleteBounty } from '../../actions/organizationActions'
import Bounties from '../../components/Organization/Bounties'
import Loading from '../../components/Loading'

class BountiesContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: 'List',
      loading: true,
      newBounty: {
        ether: 0,
        description: '',
        name: '',
      }
    }
    this.claimBounty = this.claimBounty.bind(this)
    this.createBounty = this.createBounty.bind(this)
    this.deleteBounty = this.deleteBounty.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setView = this.setView.bind(this)
    this.submitWork = this.submitWork.bind(this)
  }

  componentDidMount() {
    if (this.props.organization.bounties.length) {
      this.props.organization.bounties.map(address => this.props.getBounty(address))
    } else {
      this.setState({
        loading: false,
      })
    }
  }

  componentDidUpdate() {
    if (this.state.loading && this.props.bounties && this.props.organization.bounties.length === this.props.bounties.length) {
      this.setState({
        loading: false,
      })
    }
  }

  claimBounty(bountyAddress) {
    this.props.claimBounty(bountyAddress)
  }

  createBounty() {
    this.props.createBounty(this.props.match.params.address, this.state.newBounty, this.props.accountAddress)
  }

  deleteBounty(address) {
    const index = this.props.organization.bounties.indexOf(address)
    const bounty = this.props.bounties[index]
    this.props.deleteBounty(this.props.match.params.address, address, bounty.owner, this.props.accountAddress)
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'ether':
      this.setState({
        newBounty: {
          ...this.state.newBounty,
          ether: event.target.value,
        },
      })
      break
      case 'description':
      this.setState({
        newBounty: {
          ...this.state.newBounty,
          description: event.target.value,
        },
      })
      break
      case 'name':
      this.setState({
        newBounty: {
          ...this.state.newBounty,
          name: event.target.value,
        },
      })
      break
    }
  }

  setView(view) {
    this.setState({
      currentView: view,
    })
  }

  submitWork(bountyAddress) {
    this.props.submitWork(bountyAddress)
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <Bounties
        accountAddress={this.props.accountAddress}
        addresses={this.props.organization.bounties}
        bounties={this.props.bounties}
        claimBounty={this.claimBounty}
        createBounty={this.createBounty}
        currentView={this.state.currentView}
        deleteBounty={this.deleteBounty}
        newBounty={this.state.newBounty}
        handleChange={this.handleChange}
        setView={this.setView}
        submitWork={this.submitWork}
      />
    )
  }

}

const mapStateToProps = state => ({
  bounties: state.bounties.bounties,
  bountiesError: state.bounties.bountiesError,
  bountiesLoading: state.bounties.bountiesLoading,
})


const mapDispatchToProps = dispatch => ({
  claimBounty(address) {
    dispatch(claimBounty(address))
  },
  createBounty(organizationAddress, newBounty, sender) {
    dispatch(createBounty(organizationAddress, newBounty, sender))
  },
  deleteBounty(organizationAddress, address, sender) {
    dispatch(deleteBounty(organizationAddress, address, sender))
  },
  getBounty(address) {
    dispatch(getBounty(address))
  },
  submitWork(address) {
    dispatch(submitWork(address))
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BountiesContainer))
