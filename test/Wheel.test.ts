import Wheel from '../src/Wheel';

describe('getDiameter()', () => {
  test('diameter = rim + (tire * 2)', () => {
    const w = new Wheel(26, 1.5);
    expect(w.getDiameter()).toEqual(29);
  });
});

describe('getCircumference()', () => {
  test('circumference = diameter * PI', () => {
    const w = new Wheel(26, 1.5);
    expect(w.getCircumference()).toEqual(91.106186954104);
  });
});
