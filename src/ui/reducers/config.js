import * as types from '../constants/ActionsTypes';

const initialState = {
  url: null,
  mainColor: '00BCD4',
};

export default function core(state = initialState, action) {
  switch (action.type) {
    case types.MERGE_CONFIG:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
