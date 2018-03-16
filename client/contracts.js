import contract from 'truffle-contract'
import Organizations from '../build/contracts/Organizations.json'
import Organization from '../build/contracts/Organization.json'

// set contract(s)
const organizations = contract(Organizations)
const organization = contract(Organization)

// set provider for contract(s)
organizations.setProvider(web3.currentProvider)
organization.setProvider(web3.currentProvider)

// set contract defaults(s)
organization.defaults({ gas: 3000000 })
organizations.defaults({ gas: 3000000 })

// export contract instance(s)
export { organizations, organization }
