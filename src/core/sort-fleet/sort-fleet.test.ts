import { sortFleet } from '.'
import { FleetShip } from '../../models/ship'

const fleetData: FleetShip[] = [
  { fleetNo: 0, turnNo: 0, no: '0', equipments: [] },
  { fleetNo: 0, turnNo: 1, no: '1', equipments: [] },
  { fleetNo: 0, turnNo: 2, no: '2', equipments: [] },
]

describe('SortFleet', () => {
  test('Single Move', () => {
    const expected = expect.arrayContaining([
      expect.objectContaining({ turnNo: 0, no: '1' }),
      expect.objectContaining({ turnNo: 1, no: '0' }),
    ])

    expect(sortFleet(fleetData, 0, 0, 1)).toEqual(expected)
  })

  test('Reversed Single Move', () => {
    const expected = expect.arrayContaining([
      expect.objectContaining({ turnNo: 1, no: '0' }),
      expect.objectContaining({ turnNo: 0, no: '1' }),
    ])

    expect(sortFleet(fleetData, 0, 1, 0)).toEqual(expected)
  })

  test('Multi Move', () => {
    const expected = expect.arrayContaining([
      expect.objectContaining({ turnNo: 0, no: '1' }),
      expect.objectContaining({ turnNo: 1, no: '2' }),
      expect.objectContaining({ turnNo: 2, no: '0' }),
    ])

    expect(sortFleet(fleetData, 0, 0, 2)).toEqual(expected)
  })

  test('Reversed Multi Move', () => {
    const expected = expect.arrayContaining([
      expect.objectContaining({ turnNo: 0, no: '2' }),
      expect.objectContaining({ turnNo: 1, no: '0' }),
      expect.objectContaining({ turnNo: 2, no: '1' }),
    ])

    expect(sortFleet(fleetData, 0, 2, 0)).toEqual(expected)
  })
})
