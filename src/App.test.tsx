import { updateTimes } from './App';

test('updateTimes updates the state', () => {
  const newState = updateTimes(
    { availableTimes: [] },
    { type: 'UPDATE_FOR_DATE', payload: '2023-02-23' }
  );
  expect(newState).toEqual({
    availableTimes: [
      '17:00',
      '17:30',
      '19:00',
      '19:30',
      '21:30',
      '22:00',
      '23:30',
    ],
  });
});
