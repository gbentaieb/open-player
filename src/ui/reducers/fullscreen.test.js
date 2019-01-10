import fullscreenReducer from './fullscreen';
import * as types from '../constants/ActionsTypes';

const dispatch = (type, payload) => fullscreenReducer(undefined, { type, payload });

describe('test fullscreen reducer', () => {
  test('Reducers > fullscreen > initial state', () => {
    const initialState = dispatch(null);
    expect(initialState).toEqual({
      isFullscreen: false,
      container: null,
    });
  });

  test('Reducers > fullscreen > SET_IS_FULLSCREEN', () => {
    const state = dispatch(types.SET_IS_FULLSCREEN, true);
    expect(state.isFullscreen).toEqual(true);
  });

  test('Reducers > fullscreen > SET_FULLSCREEN_CONTAINER', () => {
    const element = document.createElement('div');
    const state = dispatch(types.SET_FULLSCREEN_CONTAINER, element);
    expect(state.container).toBe(element);
  });
});
