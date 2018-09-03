import RevealingReferences from '../src/RevealingReferences';

describe('getDiameters()', () => {
  test('0 is rim, 1 is tire', () => {
    const data = [[622, 20], [622, 23], [559, 30], [559, 40]];
    const revRef = new RevealingReferences(data);
    expect(revRef.getDiameters()).toEqual([662, 668, 619, 639]);
  });
});
