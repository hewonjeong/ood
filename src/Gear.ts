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
      # tire goes around rim twice for diameter
    ratio * (rim + (tire * 2))
  end
end
*/
export default class Gear {
  private _chainring: number;
  private _cog: number;
  private _rim: number;
  private _tire: number;

  constructor(chainring: number, cog: number, rim: number, tire: number) {
    this._chainring = chainring;
    this._cog = cog;
    this._rim = rim;
    this._tire = tire;
  }

  get chainring(): number {
    return this._chainring;
  }
  get cog(): number {
    return this._cog;
  }
  get rim(): number {
    return this._rim;
  }
  get tire(): number {
    return this._tire;
  }
  set chainring(chainring: number) {
    this._chainring = chainring;
  }
  set cog(cog: number) {
    this._cog = cog;
  }
  set rim(rim: number) {
    this._rim = rim;
  }
  set tire(tire: number) {
    this._tire = tire;
  }

  public getRatio() {
    return this.chainring / this.cog;
  }

  public getGearInches() {
    return this.getRatio() * (this.rim + this.tire * 2);
  }
}
