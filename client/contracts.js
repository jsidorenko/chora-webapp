import contract from 'truffle-contract'
import Account from '../contracts/Account.json'

// set contract(s)
const accountContract = contract(Account)

// set provider for contract(s)
accountContract.setProvider(web3.currentProvider)

// set instance for contract(s)
const account = accountContract.deployed()

// export contract instance(s)
export { account }
