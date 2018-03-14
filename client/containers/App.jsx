import React, { Component } from 'react'
import { drizzleConnect } from 'drizzle-react'
import App from '../components/App'
import Loading from '../components/Loading'

class AppContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    // console.log('accounts:', this.props.accounts)
    // console.log('contracts:', this.props.contracts)
    // console.log('drizzleStatus:', this.props.drizzleStatus)
    // console.log('transactionStack:', this.props.transactionStack)
    // console.log('transactions:', this.props.transactions)
    // console.log('web3:', this.props.web3)
  }

  render() {
    if (!this.props.drizzleStatus.initialized && this.props.web3.status !== 'initialized') {
      return <Loading />
    }
    return (
      <App
        accountAddress={this.props.accounts[0]}
      />
    )
  }

}

const mapStateToProps = state => ({
  accounts: state.accounts,
  // contracts: state.contracts,
  drizzleStatus: state.drizzleStatus,
  // transactionStack: state.transactionStack,
  // transactions: state.transactions,
  web3: state.web3,
})

export default drizzleConnect(AppContainer, mapStateToProps)
