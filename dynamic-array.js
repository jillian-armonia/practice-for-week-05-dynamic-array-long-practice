class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);

  }

  read(index) {
    return this.data[index]
  }

  push(val) {
    this.length++;
    this.data[this.length - 1] = val;

    if (this.length > this.capacity){
      this.resize();
    }
  }


  pop() {
    let popped = this.data[this.length - 1]
    this.data[this.length - 1] = undefined;
    if (this.length > 0){
      this.length--;
    }

    return popped;
  }

  shift() {
    let shifted = this.data[0];

    for (let i = 0; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1];
    }

    this.data[this.length - 1] = undefined;

    if (this.length > 0){
      this.length--;
    }

    return shifted;

  }

  unshift(val) {
    if (this.length === 0){
      this.data[0] = val;
      this.length++;
    } else {
      for (let i = this.length - 1; i >= 0; i--){
        let original = this.data[i];
        this.data[i + 1] = original;
      }

      this.data[0] = val;
      this.length++;

      if (this.length === this.capacity){
        this.resize();
      }
    }
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++){
      if (val === this.data[i]) return i
    }

    return -1;
  }

  resize() {
    this.capacity *= 2;
    let newArray = new Array(this.capacity);

    for (let i = 0; i < this.length; i++){
      newArray[i] = this.data[i];
    }

    this.data = newArray;
  }

}


module.exports = DynamicArray;
