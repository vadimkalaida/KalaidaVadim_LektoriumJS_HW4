Array.prototype.myForeach = function(callback, i) {
  if(i !== undefined) {
    for(; i < this.length; i++) {
      callback(this[i]);
    }
  } else {
    for(let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  }
};

Array.prototype.myMap = function (callback, i) {
  let resultArr = [];
  if(i !== undefined) {
    for(; i < this.length; i++) {
      resultArr.push(callback(this[i], i, this));
    }
  } else {
    for(let i = 0; i < this.length; i++) {
      resultArr.push(callback(this[i], i, this));
    }
  }
  return resultArr;
};

Array.prototype.mySort = function(compareFunc) {
  if(compareFunc !== undefined) {
    return compareFunc();
  } else {
    for(let i = 0; i < this.length; i++) {

      for(let j = i + 1; j < this.length; j++) {

        if(this[i] > this[j]) {
          let swap = this[i];
          this[i] = this[j];
          this[j] = swap;
        }

      }
    }
    return this;
  }

};

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
console.log('\'arr.myForeach(*callback function, index)\' - foreach');
console.log('\'arr.myMap(*callback(val, index, array), index)\' - map');
console.log('\'arr.mySort(compareFunc)\' - sort');
console.log('\'arr.myPush(Value)\' - push');
console.log('\'task(R, C, r0, c0)\' - push');