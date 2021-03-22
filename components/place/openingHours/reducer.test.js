import reducer from './reducer'

export const fixture = {
  days: {
    tuesday: [{ start: '11:30', end: '15:00', type: 'OPEN' }, { start: '18:30', end: '00:00', type: 'OPEN' }],
    wednesday: [{ start: '11:30', end: '15:00', type: 'OPEN' }, { start: '18:30', end: '00:00', type: 'OPEN' }],
    thursday: [{ start: '11:30', end: '15:00', type: 'OPEN' }, { start: '18:30', end: '00:00', type: 'OPEN' }],
    friday: [{ start: '18:00', end: '00:00', type: 'OPEN' }],
    saturday: [{ start: '18:00', end: '00:00', type: 'OPEN' }],
    sunday: [{ start: '11:30', end: '15:00', type: 'OPEN' }]
  }
}

export const expectedResult = [
  { from: 'monday', to: undefined, hours: ['closed'] },
  { from: 'tuesday', to: 'thursday', hours: [{ start: '11:30', end: '15:00', type: 'OPEN' }, { start: '18:30', end: '00:00', type: 'OPEN' }] },
  { from: 'friday', to: 'saturday', hours: [{ start: '18:00', end: '00:00', type: 'OPEN' }] },
  { from: 'sunday', to: undefined, hours: [{ start: '11:30', end: '15:00', type: 'OPEN' }] }
]

describe('reducer', () => {
  it('makes days grouped by openingHourRange', () => {
    const days = reducer(fixture.days)
    expect(days).toStrictEqual(expectedResult)
  })
})
