import * as actions from '../constants/actions'

const initialState = {

  // account
  account: null,
  accountError: null,
  accountLoading: true,

  // contributors
  contributors: null,
  contributorsError: null,
  contributorsLoading: true,

  // createBounty
  createBountyError: null,
  createBountyLoading: true,
  createBountySuccess: false,

  // deleteBounty
  deleteBountyError: null,
  deleteBountyLoading: true,
  deleteBountySuccess: false,

  // organization
  organization: null,
  organizationError: null,
  organizationLoading: true,

  // transactions
  transactions: null,
  transactionsError: null,
  transactionsLoading: true,

}

const organizationReducer = (state = initialState, action) => {
  switch (action.type) {

    // createBounty

    case actions.ORGANIZATION_CREATE_BOUNTY:
      return {
        ...state,
        createBountyError: null,
        createBountyLoading: true,
        createBountySuccess: false,
      }

    case actions.ORGANIZATION_CREATE_BOUNTY_ERROR:
      return {
        ...state,
        createBountyError: action.payload,
        createBountyLoading: false,
      }

    case actions.ORGANIZATION_CREATE_BOUNTY_SUCCESS:
      return {
        ...state,
        createBountyLoading: false,
        createBountySuccess: action.payload,
      }

    // deleteBounty

    case actions.ORGANIZATION_DELETE_BOUNTY:
      return {
        ...state,
        deleteBountyError: null,
        deleteBountyLoading: true,
        deleteBountySuccess: false,
      }

    case actions.ORGANIZATION_DELETE_BOUNTY_ERROR:
      return {
        ...state,
        deleteBountyError: action.payload,
        deleteBountyLoading: false,
      }

    case actions.ORGANIZATION_DELETE_BOUNTY_SUCCESS:
      return {
        ...state,
        deleteBountyLoading: false,
        deleteBountySuccess: action.payload,
      }

    // getAccount

    case actions.ORGANIZATION_GET_ACCOUNT:
      return {
        ...state,
        accountError: null,
        accountLoading: true,
      }

    case actions.ORGANIZATION_GET_ACCOUNT_ERROR:
      return {
        ...state,
        accountError: action.payload,
        accountLoading: false,
      }

    case actions.ORGANIZATION_GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: {
          bounties: action.payload[0],
          tokens: action.payload[1].c[0],
        },
        accountLoading: false,
      }

    // getContributor

    case actions.ORGANIZATION_GET_CONTRIBUTOR:
      return {
        ...state,
        contributors: [],
        contributorsError: null,
        contributorsLoading: true,
      }

    case actions.ORGANIZATION_GET_CONTRIBUTOR_ERROR:
      return {
        ...state,
        contributorsError: action.payload,
        contributorsLoading: false,
      }

    case actions.ORGANIZATION_GET_CONTRIBUTOR_SUCCESS:
      return {
        ...state,
        contributors: [...state.contributors, {
          bounties: action.payload[0],
          tokens: action.payload[1].c[0],
        }],
        contributorsLoading: state.organization.contributors.length !== state.contributors.length + 1,
      }

    // getOrganization

    case actions.ORGANIZATION_GET_ORGANIZATION:
      return {
        ...state,
        organizationError: null,
        organizationLoading: true,
      }

    case actions.ORGANIZATION_GET_ORGANIZATION_ERROR:
      return {
        ...state,
        organizationError: action.payload,
        organizationLoading: false,
      }

    case actions.ORGANIZATION_GET_ORGANIZATION_SUCCESS:
      return {
        ...state,
        organization: {
          bounties: action.payload[0],
          contributors: action.payload[1],
          name: action.payload[2],
          owner: action.payload[3],
          tokens: action.payload[4].c[0],
        },
        organizationLoading: false,
      }

    // getTransactions

    case actions.ORGANIZATION_GET_TRANSACTIONS:
      return {
        ...state,
        transactions: [],
        transactionsError: null,
        transactionsLoading: true,
      }

    case actions.ORGANIZATION_GET_TRANSACTIONS_ERROR:
      return {
        ...state,
        transactionsError: action.payload,
        transactionsLoading: false,
      }

    case actions.ORGANIZATION_GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: [...state.transactions, ...action.payload],
        transactionsLoading: false,
      }

    // resetOrganization

    case actions.ORGANIZATION_RESET_ORGANIZATION:
      return {
        ...state,
        organization: null,
        organizationError: null,
        organizationLoading: true,
      }

    default:
      return state

  }
}

export default organizationReducer
