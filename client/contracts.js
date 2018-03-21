import contract from 'truffle-contract'
import Ballot from '../build/contracts/Ballot.json'
import Bounty from '../build/contracts/Bounty.json'
import Organizations from '../build/contracts/Organizations.json'
import Organization from '../build/contracts/Organization.json'
import Project from '../build/contracts/Project.json'

// set contract(s)
const ballot = contract(Ballot)
const bounty = contract(Bounty)
const organizations = contract(Organizations)
const organization = contract(Organization)
const project = contract(Project)

// set provider for contract(s)
ballot.setProvider(web3.currentProvider)
bounty.setProvider(web3.currentProvider)
organizations.setProvider(web3.currentProvider)
organization.setProvider(web3.currentProvider)
project.setProvider(web3.currentProvider)

// set contract defaults(s)
ballot.defaults({ gas: 4000000 })
bounty.defaults({ gas: 4000000 })
organization.defaults({ gas: 4000000 })
organizations.defaults({ gas: 4000000 })
project.defaults({ gas: 4000000 })

// export contract instance(s)
export {
  ballot,
  bounty,
  organizations,
  organization,
  project,
}
