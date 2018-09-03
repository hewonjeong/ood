/* class RevealingReferences
  attr_reader :wheels
  def initialize(data)
    @wheels = wheelify(data)
  end

  def diameters
    wheels.collect {|wheel|
      wheel.rim + (wheel.tire * 2)}
  end

  # now everyone can send rim/tire to wheel
  Wheel = Struct.new(:rim, :tire)
  def wheelify(data)
    data.collect {|cell|
      Wheel.new(cell[0], cell[1])}
  end
end */

interface IWheel {
  rim: number;
  tire: number;
}

export default class RevealingReferences {
  private wheels: IWheel[];

  constructor(data: number[][]) {
    this.wheels = RevealingReferences.wheelify(data);
  }

  getDiameters() {
    return this.wheels.map(d => d.rim + d.tire * 2);
  }

  /* data가 [rim, tire] 형태인건 이 함수만 알고 있으면 됨👏🏻 */
  static wheelify(data: number[][]): IWheel[] {
    return data.map(d => ({ rim: d[0], tire: d[1] }));
  }
}
