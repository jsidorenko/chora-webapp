import contract from 'truffle-contract'
import Account from '../build/contracts/Account.json'
import Factory from '../build/contracts/Factory.json'
import Organization from '../build/contracts/Organization.json'

// set contract(s)
const accountContract = contract(Account)
const factoryContract = contract(Factory)
const organizationContract = contract(Organization)

// set provider for contract(s)
accountContract.setProvider(web3.currentProvider)
factoryContract.setProvider(web3.currentProvider)
organizationContract.setProvider(web3.currentProvider)

// set instance for contract(s)
const account = accountContract.deployed()
const factory = factoryContract.deployed()
const organization = organizationContract

// export contract instance(s)
export { account, factory, organization }
