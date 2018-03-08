import coreReducer from './core';
import * as types from '../constants/ActionsTypes';

const dispatch = (type, payload) => coreReducer(undefined, { type, payload });

describe('test config reducer', () => {
  test('Reducers > core > initial state', () => {
    const initialState = dispatch(null);
    expect(initialState.requestPlay).toEqual(true);
  });

  test('Reducers > core > REQUEST_PLAY', () => {
    const requestPlay = false;
    const state = dispatch(types.REQUEST_PLAY, requestPlay);
    expect(state.requestPlay).toEqual(requestPlay);
  });
});
