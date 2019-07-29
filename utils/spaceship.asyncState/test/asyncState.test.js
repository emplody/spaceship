import asyncState, { PENDING, SUCCESS, FAILURE } from '../index';

test('asyncState return pending true', () => {
  const { pending, success, failure } = asyncState(PENDING);
  expect(pending).toBeTruthy();
  expect(success).toBeFalsy();
  expect(failure).toBeFalsy();
});

test('asyncState return success true', () => {
  const { pending, success, failure } = asyncState(SUCCESS);
  expect(pending).toBeFalsy();
  expect(success).toBeTruthy();
  expect(failure).toBeFalsy();
});

test('asyncState return pending true', () => {
  const { pending, success, failure } = asyncState(FAILURE);
  expect(pending).toBeFalsy();
  expect(success).toBeFalsy();
  expect(failure).toBeTruthy();
});

test('if accept unexpected arguments, will return all state false.', () => {
  expect(asyncState('some parameter')).toMatchSnapshot();
});
