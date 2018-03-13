import contract from 'truffle-contract'
import Account from '../contracts/Account.json'

// set contract(s)
const accountContract = contract(Account)

// set provider for contract(s)
accountContract.setProvider(web3.currentProvider)

// set instance for contract(s)
const account = accountContract.at('0xc54519acd0f8335f1e3ecb2d38261f662155ad78') // rinkeby deployment

// export contract instance(s)
export { account }
