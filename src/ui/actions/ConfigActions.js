/* eslint-disable import/prefer-default-export */
import * as types from '../constants/ActionsTypes';

/**
 * Merge new data informations
 */
export function setConfig(config) {
  return {
    type: types.MERGE_CONFIG,
    payload: config,
  };
}
