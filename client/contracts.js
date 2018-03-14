import contract from 'truffle-contract'
import Account from '../build/contracts/Account.json'
import Organizations from '../build/contracts/Organizations.json'
import Organization from '../build/contracts/Organization.json'

// set contract(s)
const account = contract(Account)
const organizations = contract(Organizations)
const organization = contract(Organization)

// set provider for contract(s)
account.setProvider(web3.currentProvider)
organizations.setProvider(web3.currentProvider)
organization.setProvider(web3.currentProvider)

// export contract instance(s)
export { account, organizations, organization }
