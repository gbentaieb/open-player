import coreReducer from './core';
import * as types from '../constants/ActionsTypes';
import * as coreStates from '../constants/CoreStates';

const dispatch = (type, payload) => coreReducer(undefined, { type, payload });

describe('test config reducer', () => {
  test('Reducers > core > initial state', () => {
    const initialState = dispatch(null);
    expect(initialState.playRequested).toEqual(true);
  });

  test('Reducers > core > REQUEST_PLAY', () => {
    const playRequested = false;
    const state = dispatch(types.REQUEST_PLAY, playRequested);
    expect(state.playRequested).toEqual(playRequested);
  });

  test('Reducers > core > SET_PLAYER_STATE', () => {
    const coreState = coreStates.PAUSED;
    const state = dispatch(types.SET_PLAYER_STATE, coreState);
    expect(state.playerState).toEqual(coreState);
  });
});
