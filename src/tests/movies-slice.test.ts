import { store } from 'bll/store';

jest.mock('axios');

test('Movies redux state test', () => {
  it('Should initially set movies to an empty object', () => {
    const state = store.getState().movies;
    expect(state.movies).toEqual([]);
  });
});
