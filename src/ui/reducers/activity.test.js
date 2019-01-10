import activityReducer from './activity';
import * as types from '../constants/ActionsTypes';

const dispatch = (type, payload) => activityReducer(undefined, { type, payload });

describe('test activity reducer', () => {
  test('Reducers > activity > initial state', () => {
    const initialState = dispatch(null);
    expect(initialState.isActive).toEqual(false);
  });

  test('Reducers > activity > SET_IS_ACTIVE', () => {
    const state = dispatch(types.SET_IS_ACTIVE, true);
    expect(state.isActive).toEqual(true);
  });
});
