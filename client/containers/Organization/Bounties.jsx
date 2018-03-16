import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBounty } from '../../actions/bountiesActions'
import { createBounty, deleteBounty } from '../../actions/organizationActions'
import Bounties from '../../components/Organization/Bounties'
import Loading from '../../components/Loading'

class BountiesContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bountyEther: 0,
      bountyDescription: '',
      bountyName: '',
      loading: true,
    }
    this.createBounty = this.createBounty.bind(this)
    this.deleteBounty = this.deleteBounty.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    if (this.state.loading && this.props.organization.bounties.length === this.props.bounties.length) {
      this.setState({
        loading: false,
      })
    }
  }

  createBounty() {
    this.props.createBounty(this.state.bountyDescription, this.state.bountyEther, this.state.bountyName, this.props.accountAddress)
  }

  deleteBounty(bountyAddress) {
    const index = this.props.organization.bounties.indexOf(bountyAddress)
    const bounty = this.props.bounties[index]
    this.props.deleteBounty(bountyAddress, bounty.owner, this.props.accountAddress)
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'ether':
      this.setState({
        bountyEther: event.target.value,
      })
      break
      case 'description':
      this.setState({
        bountyDescription: event.target.value,
      })
      break
      case 'name':
      this.setState({
        bountyName: event.target.value,
      })
      break
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <Bounties
        addresses={this.props.organization.bounties}
        bounties={this.props.bounties}
        bountyEther={this.state.bountyEther}
        bountyDescription={this.state.bountyDescription}
        bountyName={this.state.bountyName}
        createBounty={this.createBounty}
        deleteBounty={this.deleteBounty}
        handleChange={this.handleChange}
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
  createBounty(description, ether, bounty, sender) {
    dispatch(createBounty(description, ether, bounty, sender))
  },
  deleteBounty(bountyAddress, bountyOwner, sender) {
    dispatch(deleteBounty(bountyAddress, bountyOwner, sender))
  },
  getBounty(address) {
    dispatch(getBounty(address))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BountiesContainer)
