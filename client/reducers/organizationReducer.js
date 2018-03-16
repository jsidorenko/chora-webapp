import * as actions from '../constants/actions'

const initialState = {

  // bounty
  bountyError: null,
  bountyLoading: true,
  bountySuccess: false,

  // organization
  organization: null,
  organizationError: null,
  organizationLoading: true,

}

const organizationReducer = (state = initialState, action) => {
  switch (action.type) {

    // createBounty

    case actions.ORGANIZATION_CREATE_BOUNTY:
      return {
        ...state,
        bountyError: null,
        bountyLoading: true,
        bountySuccess: false,
      }

    case actions.ORGANIZATION_CREATE_BOUNTY_ERROR:
      return {
        ...state,
        bountyError: action.payload,
        bountyLoading: false,
      }

    case actions.ORGANIZATION_CREATE_BOUNTY_SUCCESS:
      return {
        ...state,
        bountyLoading: false,
        bountySuccess: action.payload,
      }

    // deleteBounty

    case actions.ORGANIZATION_DELETE_BOUNTY:
      return {
        ...state,
        bountyError: null,
        bountyLoading: true,
        bountySuccess: false,
      }

    case actions.ORGANIZATION_DELETE_BOUNTY_ERROR:
      return {
        ...state,
        bountyError: action.payload,
        bountyLoading: false,
      }

    case actions.ORGANIZATION_DELETE_BOUNTY_SUCCESS:
      return {
        ...state,
        bountyLoading: false,
        bountySuccess: action.payload,
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
          accountBounties: action.payload[0],
          accountTokens: action.payload[1].c[0],
          bounties: action.payload[2],
          contributors: action.payload[3],
          name: action.payload[4],
          owner: action.payload[5],
          tokens: action.payload[6].c[0],
        },
        organizationLoading: false,
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
