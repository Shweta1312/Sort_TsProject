class Sorter {
  constructor(public collection: number[]) {}

  sort() {
    //Object destructuring
    const { length } = this.collection;    

    //Bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }

    

  }
}





const sorter = new Sorter([10, -2, 4, 1, 7]);

sorter.sort();

console.log(sorter.collection);
