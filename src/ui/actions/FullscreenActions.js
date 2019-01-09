/* eslint-disable import/prefer-default-export */
import * as types from '../constants/ActionsTypes';

/**
 * Set if player is fullscreen
 */
export function setIsFullscreen(bool) {
  return {
    type: types.SET_IS_FULLSCREEN,
    payload: bool,
  };
}

/**
 * Set the fullscreenable container
 */
export function setFullscreenContainer(container) {
  return {
    type: types.SET_FULLSCREEN_CONTAINER,
    payload: container,
  };
}
