import ObscuringReferences from '../src/ObscuringReferences';

describe('getDiameters()', () => {
  test('0 is rim, 1 is tire', () => {
    const data = [[622, 20], [622, 23], [559, 30], [559, 40]];
    const obsRef = new ObscuringReferences(data);
    expect(obsRef.getDiameters()).toEqual([662, 668, 619, 639]);
  });
});
