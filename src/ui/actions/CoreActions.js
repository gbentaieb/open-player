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

/**
 * Seek with rx player
 */
export function seekTo(time) {
  return {
    type: types.SEEK_TO,
    payload: time,
  };
}

/**
 * Set times from rx player
 */
export function setPlayerTimes(times) {
  return {
    type: types.SET_PLAYER_TIMES,
    payload: times,
  };
}

/**
 * Set if player forced muted
 */
export function setForcedMuted(bool) {
  return {
    type: types.SET_FORCED_MUTED,
    payload: bool,
  };
}
