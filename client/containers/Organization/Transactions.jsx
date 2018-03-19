import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTransactions } from '../../actions/organizationActions'
import Transactions from '../../components/Organization/Transactions'
import Loading from '../../components/Loading'

class TransactionsContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getTransactions(this.props.match.params.address)
  }

  render() {
    if (this.props.transactionsLoading) {
      return <Loading />
    }
    return (
      <Transactions
        accountAddress={this.props.accountAddress}
        transactions={this.props.transactions}
      />
    )
  }

}

const mapStateToProps = state => ({
  transactions: state.organization.transactions,
  transactionsError: state.organization.transactionsError,
  transactionsLoading: state.organization.transactionsLoading,
})


const mapDispatchToProps = dispatch => ({
  getTransactions(address) {
    dispatch(getTransactions(address))
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer))
