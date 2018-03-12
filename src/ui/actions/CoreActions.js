/* eslint-disable import/prefer-default-export */
import * as types from '../constants/ActionsTypes';

/**
 * Request play to rx player
 */
export function requestPlay(play) {
  return {
    type: types.REQUEST_PLAY,
    payload: play,
  };
}

/**
 * Request play to rx player
 */
export function setPlayerState(state) {
  return {
    type: types.SET_PLAYER_STATE,
    payload: state,
  };
}
