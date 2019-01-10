import * as actions from './FullscreenActions';
import * as types from '../constants/ActionsTypes';

describe('Fullscreen Actions', () => {
  test('Fullscreen Actions > setIsFullscreen', () => {
    const payload = true;
    const result = actions.setIsFullscreen(payload);

    expect(result.type).toBe(types.SET_IS_FULLSCREEN);
    expect(result.payload).toBe(payload);
  });

  test('Fullscreen Actions > setFullscreenContainer', () => {
    const payload = document.createElement('div');
    const result = actions.setFullscreenContainer(payload);

    expect(result.type).toBe(types.SET_FULLSCREEN_CONTAINER);
    expect(result.payload).toBe(payload);
  });
});
