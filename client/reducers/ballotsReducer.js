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
          description: action.payload[0],
          name: action.payload[2],
          owner: action.payload[3],
        }],
      }

    default:
      return state

  }
}

export default ballotsReducer
