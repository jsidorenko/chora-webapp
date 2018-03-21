import * as actions from '../constants/actions'

const initialState = {

  // ballots
  ballots: null,
  ballotsError: null,

}

const ballotsReducer = (state = initialState, action) => {
  switch (action.type) {

    // getBallot

    case actions.BALLOTS_GET_BALLOT:
      return {
        ...state,
        ballots: [],
        ballotsError: null,
      }

    case actions.BALLOTS_GET_BALLOT_ERROR:
      return {
        ...state,
        ballotsError: action.payload,
      }

    case actions.BALLOTS_GET_BALLOT_SUCCESS:
      return {
        ...state,
        ballots: [...state.ballots, {
          name: action.payload[0],
          owner: action.payload[1],
        }],
      }

    default:
      return state

  }
}

export default ballotsReducer
