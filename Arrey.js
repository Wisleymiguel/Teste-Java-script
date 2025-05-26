class Arrey {
  constructor() {
    this.length = 0;
  }

  push(item) {
    this[this.length] = item;
    this.length++;
    return this.length;         
  }

  pop() {
    if (this.length === 0) return undefined;
    const lastIndex = this.length - 1;
    const lastItem  = this[lastIndex];
    delete this[lastIndex];
    this.length--;
    return lastItem;
  }
}

module.exports = Arrey;          
