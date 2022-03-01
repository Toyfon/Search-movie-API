import appSlice, { setAppError, setAppStatus, StatusType } from '../bll/appSlice';

describe('APP status and error test', () => {
  const startState = {
    error: null as string | null,
    status: 'idle' as StatusType,
  };
  test('correct status should be set', () => {
    const endState = appSlice(startState, setAppStatus('loading'));
    expect(endState.status).toBe('loading');
  });
  test('correct error name should be set', () => {
    const endState = appSlice(startState, setAppError('some error'));
    expect(endState.error).toBe('some error');
  });
});
