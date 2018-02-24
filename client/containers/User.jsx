import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAccount } from '../actions/userActions'
import User from '../components/User'

class UserContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAccount()
  }

  render() {
    return (
      <User
        account={this.props.account}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
