import * as actions from '../constants/actions'

const initialState = {

  // bounties
  bounties: null,
  bountiesError: null,

}

const bountiesReducer = (state = initialState, action) => {
  switch (action.type) {

    // getBounty

    case actions.BOUNTY_GET_BOUNTY:
      return {
        ...state,
        bounties: null,
        bountiesError: null,
      }

    case actions.BOUNTY_GET_BOUNTY_ERROR:
      return {
        ...state,
        bountiesError: action.payload,
      }

    case actions.BOUNTY_GET_BOUNTY_SUCCESS:
      return {
        ...state,
        bounties: [...state.bounties, {
          description: action.payload[0],
          ether: action.payload[1].c[0],
          name: action.payload[2],
          owner: action.payload[3],
          tokens: action.payload[4].c[0],
        }],
      }

    default:
      return state

  }
}

export default bountiesReducer
