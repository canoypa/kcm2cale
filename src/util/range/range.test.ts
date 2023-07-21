import { range } from '.'

it('Util: Range', () => {
  expect(range(0)).toEqual([])

  expect(range(4)).toEqual([0, 1, 2, 3])
  expect(range(-4)).toEqual([0, -1, -2, -3])

  expect(range(4, 8)).toEqual([4, 5, 6, 7])
  expect(range(-4, -8)).toEqual([-4, -5, -6, -7])

  expect(range(8, 4)).toEqual([8, 7, 6, 5])
  expect(range(-8, -4)).toEqual([-8, -7, -6, -5])

  expect(range(0, 8, 1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7])
  expect(range(0, 8, 2)).toEqual([0, 2, 4, 6])
  expect(range(0, -8, -2)).toEqual([0, -2, -4, -6])
  expect(range(-8, 0, 2)).toEqual([-8, -6, -4, -2])
})
