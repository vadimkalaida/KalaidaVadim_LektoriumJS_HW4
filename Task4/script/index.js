Array.prototype.myPush = function(val) {
  this[this.length] = val;
  return this;
};

function task(R, C, r0, c0) {
  let resultArr = [],
    d = 0,
    dirMoves = 1,
    moves = 0,
    directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  while(resultArr.length < R * C) {
    if(c0 < C && r0 < R && r0 >= 0 && c0 >= 0) {
      resultArr.myPush([r0, c0]);
    }

    r0 += directions[d][0];
    c0 += directions[d][1];
    moves++;

    if(moves === (dirMoves * 2)) {
      dirMoves++;
      moves = 0;
    }

    if((moves % dirMoves) === 0) {
      d = ++d % 4;
    }
  }

  return resultArr;

}


console.log('\'*\' - required');
console.log('\'arr.myPush(*Value)\' - push');
console.log('\'task(*R, *C, *r0, *c0)\' - push');