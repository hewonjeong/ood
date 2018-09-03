import Gear from '../src/Gear';

describe('getRatio()', () => {
  test('ratio = chainring / cog ', () => {
    const g1 = new Gear(52, 11, -1, -1);
    const g2 = new Gear(30, 27, -1, -1);
    expect(g1.getRatio()).toEqual(4.7272727272727275);
    expect(g2.getRatio()).toEqual(1.1111111111111112);
  });
});

describe('getGearInches()', () => {
  test('gear inches = ratio * (rim + (tire * 2))', () => {
    const g1 = new Gear(52, 11, 26, 1.5);
    const g2 = new Gear(52, 11, 24, 1.25);
    expect(g1.getGearInches()).toEqual(137.0909090909091);
    expect(g2.getGearInches()).toEqual(125.27272727272728);
  });
});
