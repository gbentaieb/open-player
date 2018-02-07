import configReducer from './config';
import * as types from '../constants/ActionsTypes';

const dispatch = (type, payload) => configReducer(undefined, { type, payload });

test('Reducers > config > initial state', () => {
  const initialState = dispatch(null);
  expect(initialState.url).toEqual('');
});

test('Reducers > config > MERGE_CONFIG', () => {
  const config = {
    url: 'https://www.test.com/test.mp4',
  };
  const state = dispatch(types.MERGE_CONFIG, config);
  expect(state).toEqual(config);
});
