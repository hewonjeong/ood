import Gear from '../src/Gear';

describe('getRatio()', () => {
  test('ratio = chainring / cog ', () => {
    const g1 = new Gear(52, 11);
    const g2 = new Gear(30, 27);
    expect(g1.getRatio()).toEqual(4.7272727272727275);
    expect(g2.getRatio()).toEqual(1.1111111111111112);
    // expect(index(1, 2)).toBe(3);
  });
});
