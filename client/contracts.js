import contract from 'truffle-contract'
import Account from '../build/contracts/Account.json'
import Factory from '../build/contracts/Factory.json'
import Organization from '../build/contracts/Organization.json'

// set contract(s)
const account = contract(Account)
const factory = contract(Factory)
const organization = contract(Organization)

// set provider for contract(s)
account.setProvider(web3.currentProvider)
factory.setProvider(web3.currentProvider)
organization.setProvider(web3.currentProvider)

// export contract instance(s)
export { account, factory, organization }
