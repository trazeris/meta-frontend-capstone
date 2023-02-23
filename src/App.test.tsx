import { updateTimes } from './App';

test('updateTimes updates the state', () => {
  const newState = updateTimes([], { type: 'UPDATE_FOR_DATE', payload: '' });
  expect(newState).toEqual(['18:00', '19:00', '22:00']);
});
