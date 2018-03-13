import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAccount } from '../actions/userActions'
import Header from '../components/Header'

class HeaderContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAccount()
  }

  render() {
    return (
      <Header
        account={this.props.account}
        accountError={this.props.accountError}
        accountLoading={this.props.accountLoading}
      />
    )
  }

}

const mapDispatchToProps = dispatch => ({
  getAccount() {
    dispatch(getAccount())
  },
})

const mapStateToProps = state => ({
  account: state.user.account,
  accountError: state.user.accountError,
  accountLoading: state.user.accountLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
