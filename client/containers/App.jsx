import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAccount } from '../actions/userActions'
import { getInstance } from '../actions/appActions'
import App from '../components/App'

class AppContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAccount()
    this.props.getInstance()
  }

  render() {
    if (this.props.loading) {
      return <p>Loading...</p>
    }
    if (!this.props.account) {
      return <p>You are not connected.</p>
    }
    if (!this.props.instance) {
      return <p>This application is not deployed on the connected network.</p>
    }
    return <App />
  }

}

const mapStateToProps = state => ({
  account: state.user.account,
  instance: state.app.instance,
  loading: state.user.accountLoading || state.app.instanceLoading,
})

const mapDispatchToProps = dispatch => ({
  getAccount() {
    dispatch(getAccount())
  },
  getInstance() {
    dispatch(getInstance())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
