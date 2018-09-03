/* 
class ObscuringReferences
attr_reader :data
def initialize(data)
  @data = data
end

def diameters
  # 0 is rim, 1 is tire
  data.collect {|cell|
    cell[0] + (cell[1] * 2)}
end
# ... many other methods that index into the array
end */

export default class ObscuringReferences {
  private data: number[][];

  constructor(data: number[][]) {
    this.data = data;
  }

  /* diameters 구하는 함수에 데이터 구조([0]에 rim, [1]에 tie)가 들어있다?🤔 */
  getDiameters() {
    return this.data.map((d: number[]) => d[0] + d[1] * 2);
  }
}
