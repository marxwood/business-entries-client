import reducer from './reducer'

const fixture = {
  days: {
    tuesday: [{ start: '11:30', end: '15:00', type: 'OPEN' }, { start: '18:30', end: '00:00', type: 'OPEN' }],
    wednesday: [{ start: '11:30', end: '15:00', type: 'OPEN' }, { start: '18:30', end: '00:00', type: 'OPEN' }],
    thursday: [{ start: '11:30', end: '15:00', type: 'OPEN' }, { start: '18:30', end: '00:00', type: 'OPEN' }],
    friday: [{ start: '18:00', end: '00:00', type: 'OPEN' }],
    saturday: [{ start: '18:00', end: '00:00', type: 'OPEN' }],
    sunday: [{ start: '11:30', end: '15:00', type: 'OPEN' }]
  }
}

const expectedResult = [
  { from: 'monday', to: undefined, ranges: ['closed'] },
  { from: 'tuesday', to: 'thursday', ranges: [{ start: '11:30', end: '15:00', type: 'OPEN' }, { start: '18:30', end: '00:00', type: 'OPEN' }] },
  { from: 'friday', to: 'saturday', ranges: [{ start: '18:00', end: '00:00', type: 'OPEN' }] },
  { from: 'sunday', to: undefined, ranges: [{ start: '11:30', end: '15:00', type: 'OPEN' }] }
]

describe('reducer', () => {
  it('makes days grouped by openingHourRange', () => {
    const days = reducer(fixture.days)
    expect(days).toStrictEqual(expectedResult)
  })
})
