import * as actions from '../constants/actions'

const initialState = {

  // bounty
  bountyError: null,
  bountyLoading: false,
  bountySuccess: false,

  // bounties
  bounties: null,
  bountiesError: null,

}

const bountiesReducer = (state = initialState, action) => {
  switch (action.type) {

    // claimBounty

    case actions.BOUNTIES_CLAIM_BOUNTY:
      return {
        ...state,
        bountyError: null,
        bountySuccess: false,
      }

    case actions.BOUNTIES_CLAIM_BOUNTY_ERROR:
      return {
        ...state,
        bountyError: action.payload,
        bountyLoading: false,
      }

    case actions.BOUNTIES_CLAIM_BOUNTY_SUCCESS:
      return {
        ...state,
        bountyLoading: false,
        bountySuccess: true,
      }

    // getBounty

    case actions.BOUNTIES_GET_BOUNTY:
      return {
        ...state,
        bounties: [],
        bountiesError: null,
      }

    case actions.BOUNTIES_GET_BOUNTY_ERROR:
      return {
        ...state,
        bountiesError: action.payload,
      }

    case actions.BOUNTIES_GET_BOUNTY_SUCCESS:
      return {
        ...state,
        bounties: [...state.bounties, {
          description: action.payload[0],
          ether: action.payload[1].c[0],
          name: action.payload[2],
          owner: action.payload[3],
          pursuer: action.payload[4],
          tokens: action.payload[5].c[0],
        }],
      }

    // submitWork

    case actions.BOUNTIES_SUBMIT_WORK:
      return {
        ...state,
        bountyError: null,
        bountySuccess: false,
      }

    case actions.BOUNTIES_SUBMIT_WORK_ERROR:
      return {
        ...state,
        bountyError: action.payload,
        bountyLoading: false,
      }

    case actions.BOUNTIES_SUBMIT_WORK_SUCCESS:
      return {
        ...state,
        bountyLoading: false,
        bountySuccess: true,
      }

    default:
      return state

  }
}

export default bountiesReducer
