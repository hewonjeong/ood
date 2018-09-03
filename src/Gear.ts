/*
class Gear
  attr_reader :chainring, :cog
  def initialize(chainring, cog)
    @chainring = chainring
    @cog       = cog
  end

  def ratio
    chainring / cog.to_f
  end
end
*/
export default class Gear {
  chainring: number;
  cog: number;

  constructor(chainring: number, cog: number) {
    this.chainring = chainring;
    this.cog = cog;
  }

  public getRatio() {
    return this.chainring / this.cog;
  }
}
