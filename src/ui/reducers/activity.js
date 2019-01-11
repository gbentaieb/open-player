import * as types from '../constants/ActionsTypes';

const initialState = {
  isActive: false,
};

export default function core(state = initialState, action) {
  switch (action.type) {
    case types.SET_IS_ACTIVE:
      return {
        ...state,
        isActive: action.payload,
      };
    default:
      return state;
  }
}
