import * as types from '../constants/ActionsTypes';

const initialState = {
  playerState: 'STOPPED',
  playRequested: true,
  currentTime: 0,
  startTime: 0,
  endTime: Infinity,
  seekingTime: 0,
  forcedMuted: false,
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

    case types.SEEK_TO:
      return {
        ...state,
        seekingTime: action.payload,
      };

    case types.SET_PLAYER_TIMES:
      return {
        ...state,
        currentTime: action.payload.currentTime,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime,
      };

    case types.SET_FORCED_MUTED:
      return {
        ...state,
        forcedMuted: action.payload,
      };

    default:
      return state;
  }
}
