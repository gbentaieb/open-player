import coreReducer from './core';
import * as types from '../constants/ActionsTypes';
import * as coreStates from '../constants/CoreStates';

const dispatch = (type, payload) => coreReducer(undefined, { type, payload });

describe('test config reducer', () => {
  test('Reducers > core > initial state', () => {
    const initialState = dispatch(null);
    expect(initialState).toEqual({
      playerState: 'STOPPED',
      playRequested: true,
      currentTime: 0,
      startTime: 0,
      endTime: Infinity,
      seekingTime: 0,
      forcedMuted: false,
    });
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

  test('Reducers > core > SEEK_TO', () => {
    const seekingTime = 12;
    const state = dispatch(types.SEEK_TO, seekingTime);
    expect(state.seekingTime).toEqual(seekingTime);
  });

  test('Reducers > core > SET_PLAYER_TIMES', () => {
    const times = {
      startTime: 0,
      endTime: 20,
      currentTime: 12,
    };
    const state = dispatch(types.SET_PLAYER_TIMES, times);
    expect(state.startTime).toEqual(times.startTime);
    expect(state.endTime).toEqual(times.endTime);
    expect(state.currentTime).toEqual(times.currentTime);
  });

  test('Reducers > core > SET_FORCED_MUTED', () => {
    const forcedMuted = true;
    const state = dispatch(types.SET_FORCED_MUTED, forcedMuted);
    expect(state.forcedMuted).toEqual(forcedMuted);
  });
});
