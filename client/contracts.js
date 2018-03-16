import contract from 'truffle-contract'
import Bounty from '../build/contracts/Bounty.json'
import Organizations from '../build/contracts/Organizations.json'
import Organization from '../build/contracts/Organization.json'

// set contract(s)
const bounty = contract(Bounty)
const organizations = contract(Organizations)
const organization = contract(Organization)

// set provider for contract(s)
bounty.setProvider(web3.currentProvider)
organizations.setProvider(web3.currentProvider)
organization.setProvider(web3.currentProvider)

// set contract defaults(s)
bounty.defaults({ gas: 3000000 })
organization.defaults({ gas: 3000000 })
organizations.defaults({ gas: 3000000 })

// export contract instance(s)
export { bounty, organizations, organization }
