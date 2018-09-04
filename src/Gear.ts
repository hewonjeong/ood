import Wheel from './Wheel';

/*
class Gear
  attr_reader :chainring, :cog, :rim, :tire
  def initialize(chainring, cog, rim, tire)
    @chainring = chainring
    @cog       = cog
    @rim       = rim
    @tire      = tire
  end

  def ratio
    chainring / cog.to_f
  end

  def gear_inches
    ratio * diameter
  end

  def diameter
    rim + (tire * 2)
  end
end
*/
export default class Gear {
  private _chainring: number;
  private _cog: number;
  private _wheel: Wheel;

  constructor(chainring: number, cog: number, wheel: Wheel) {
    this._chainring = chainring;
    this._cog = cog;
    this._wheel = wheel;
  }

  get chainring(): number {
    return this._chainring;
  }
  get cog(): number {
    return this._cog;
  }
  get wheel(): Wheel {
    return this._wheel;
  }

  set chainring(chainring: number) {
    this._chainring = chainring;
  }
  set cog(cog: number) {
    this._cog = cog;
  }
  set wheel(wheel: Wheel) {
    this._wheel = wheel;
  }

  public getRatio() {
    return this.chainring / this.cog;
  }

  public getGearInches() {
    return this.getRatio() * this.wheel.getDiameter();
  }
}
