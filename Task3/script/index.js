let myArr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8];

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
}

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

function myCallback() {
  console.log('Hi');
}


console.log('\'*\' - required');
console.log('\'myForeach(*callback function, i)\' - foreach');
console.log('\'myMap(*callback(val, index, array), index)\' - map');