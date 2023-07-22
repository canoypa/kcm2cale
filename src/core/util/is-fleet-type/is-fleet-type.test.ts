import { isFleetType } from '.'
import { FleetType } from '../../../models/fleet'

test('isFleetType', () => {
  expect(isFleetType(FleetType.Normal)).toBe(true)
  expect(isFleetType(FleetType.Striking)).toBe(true)
  expect(isFleetType(FleetType.Carrier)).toBe(true)
  expect(isFleetType(FleetType.Surface)).toBe(true)
  expect(isFleetType(FleetType.Transport)).toBe(true)

  expect(isFleetType('')).toBe(false)
  expect(isFleetType('NORMAL')).toBe(false)
  expect(isFleetType('Normal')).toBe(false)
})
