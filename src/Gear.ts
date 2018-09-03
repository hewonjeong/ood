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
  chainring: number;
  cog: number;
  rim: number;
  tire: number;

  constructor(chainring: number, cog: number, rim: number, tire: number) {
    this.chainring = chainring;
    this.cog = cog;
    this.rim = rim;
    this.tire = tire;
  }

  public getRatio() {
    return this.chainring / this.cog;
  }

  public getGearInches() {
    return this.getRatio() * (this.rim + this.tire * 2);
  }
}
