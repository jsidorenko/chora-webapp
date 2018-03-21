import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { claimBallot, getBallot } from '../../actions/ballotsActions'
import { createBallot, deleteBallot } from '../../actions/organizationActions'
import Ballots from '../../components/Organization/Ballots'
import Loading from '../../components/Loading'

class BallotsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: 'List',
      loading: true,
      newBallot: {
        name: '',
      }
    }
    this.createBallot = this.createBallot.bind(this)
    this.deleteBallot = this.deleteBallot.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setView = this.setView.bind(this)
  }

  componentDidMount() {
    if (this.props.addresses.length) {
      this.props.addresses.map(address => this.props.getBallot(address))
    } else {
      this.setState({
        loading: false,
      })
    }
  }

  componentDidUpdate() {
    if (this.state.loading && this.props.ballots && this.props.addresses.length === this.props.ballots.length) {
      this.setState({
        loading: false,
      })
    }
  }

  createBallot() {
    this.props.createBallot(this.props.match.params.address, this.state.newBallot, this.props.accountAddress)
  }

  deleteBallot(address) {
    const index = this.props.addresses.indexOf(address)
    const ballot = this.props.ballots[index]
    this.props.deleteBallot(this.props.match.params.address, address, ballot.owner, this.props.accountAddress)
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'name':
      this.setState({
        newBallot: {
          ...this.state.newBallot,
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

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <Ballots
        accountAddress={this.props.accountAddress}
        addresses={this.props.addresses}
        ballots={this.props.ballots}
        createBallot={this.createBallot}
        currentView={this.state.currentView}
        deleteBallot={this.deleteBallot}
        newBallot={this.state.newBallot}
        handleChange={this.handleChange}
        setView={this.setView}
      />
    )
  }

}

const mapStateToProps = state => ({
  ballots: state.ballots.ballots,
  ballotsError: state.ballots.ballotsError,
  ballotsLoading: state.ballots.ballotsLoading,
})


const mapDispatchToProps = dispatch => ({
  createBallot(organizationAddress, newBallot, sender) {
    dispatch(createBallot(organizationAddress, newBallot, sender))
  },
  deleteBallot(organizationAddress, address, sender) {
    dispatch(deleteBallot(organizationAddress, address, sender))
  },
  getBallot(address) {
    dispatch(getBallot(address))
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BallotsContainer))
