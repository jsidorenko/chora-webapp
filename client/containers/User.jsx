import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getAccount } from '../actions/userActions'
import User from '../components/User'

class UserContainer extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getAccount()
  }

  handleClick() {
    if (this.props.account) {
      this.props.history.push('/account')
    } else {
      this.props.history.push('/connect')
    }
  }

  render() {
    return (
      <User
        account={this.props.account}
        handleClick={this.handleClick}
        loading={this.props.loading}
      />
    )
  }

}

const mapStateToProps = state => ({
  account: state.user.account,
  loading: state.user.accountLoading,
})

const mapDispatchToProps = dispatch => ({
  getAccount() {
    dispatch(getAccount())
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserContainer))
