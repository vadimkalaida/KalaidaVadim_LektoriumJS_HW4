let myArr = ['bibu', 'aet', 2, 1, 5, 9, 3, 4, 7, 2, 3, 1, 8];

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


console.log('\'*\' - required');
console.log('\'myForeach(*callback function, index)\' - foreach');
console.log('\'myMap(*callback(val, index, array), index)\' - map');
console.log('\'mySort(compareFunc)\' - sort');