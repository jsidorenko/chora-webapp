import contract from 'truffle-contract'
import Account from '../contracts/Account.json'
import Organization from '../contracts/Organization.json'

// set contract(s)
const accountContract = contract(Account)
const organizationContract = contract(Organization)

// set provider for contract(s)
accountContract.setProvider(web3.currentProvider)
organizationContract.setProvider(web3.currentProvider)

// set instance for contract(s)
const account = accountContract.deployed()
const organization = organizationContract.deployed()

// export contract instance(s)
export { account, organization }
