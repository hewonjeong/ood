/*
class Wheel
  attr_reader :rim, :tire

  def initialize(rim, tire)
    @rim       = rim
    @tire      = tire
  end

  def diameter
    rim + (tire * 2)
  end

  def circumference
    diameter * Math::PI
  end
end
*/

export default class Wheel {
  private _rim: number;
  private _tire: number;

  constructor(rim: number, tire: number) {
    this._rim = rim;
    this._tire = tire;
  }

  get rim(): number {
    return this._rim;
  }
  get tire(): number {
    return this._tire;
  }
  set rim(rim: number) {
    this._rim = rim;
  }
  set tire(tire: number) {
    this._tire = tire;
  }

  public getDiameter() {
    return this.rim + this.tire * 2;
  }

  public getCircumference() {
    return this.getDiameter() * Math.PI;
  }
}
