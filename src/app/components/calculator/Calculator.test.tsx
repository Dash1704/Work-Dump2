import Calculator from "./Calculator"

describe('Calculator Component', () => {
  test('it should calculate the earnings correctly based on number input', () => {
    expect(Calculator(30000, 35, 5)).toEqual("1.37")
  })

  test('it should calculate the earnings correctly based on string input', () => {
    expect(Calculator("30000", "35", "5")).toEqual("1.37")
  })

  test('it should calculate the earnings correctly based on string input', () => {
    expect(Calculator("30000555", "40", "4.6")).toEqual("1105.78")
  })
});