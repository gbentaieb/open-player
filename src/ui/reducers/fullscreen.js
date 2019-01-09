import * as types from '../constants/ActionsTypes';

const initialState = {
  isFullscreen: false,
  container: null,
};

export default function fullscreen(state = initialState, action) {
  switch (action.type) {
    case types.SET_IS_FULLSCREEN:
      return {
        ...state,
        isFullscreen: action.payload,
      };

    case types.SET_FULLSCREEN_CONTAINER:
      return {
        ...state,
        container: action.payload,
      };
    default:
      return state;
  }
}
