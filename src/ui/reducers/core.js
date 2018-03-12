import * as types from '../constants/ActionsTypes';

const initialState = {
  playerState: 'STOPPED',
  playRequested: true,
};

export default function core(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_PLAY:
      return {
        ...state,
        playRequested: action.payload,
      };

    case types.SET_PLAYER_STATE:
      return {
        ...state,
        playerState: action.payload,
      };

    default:
      return state;
  }
}
