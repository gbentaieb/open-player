import * as types from '../constants/ActionsTypes';

const initialState = {
  playerState: 'STOPPED',
  requestPlay: true,
};

export default function core(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_PLAY:
      return {
        ...state,
        requestPlay: action.payload,
      };
    default:
      return state;
  }
}
