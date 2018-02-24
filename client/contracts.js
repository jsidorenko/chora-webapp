import contract from 'truffle-contract'
import ChoraTech from '../build/contracts/ChoraTech.json'

// set contract(s)
const choraTechContract = contract(ChoraTech)

// set provider for contract(s)
choraTechContract.setProvider(web3.currentProvider)

// set defaults for contract(s)
choraTechContract.defaults({ from: web3.eth.accounts[0] })

// set instance for contract(s)
const choraTech = choraTechContract.deployed()

// export contract instance(s)
export { choraTech }
