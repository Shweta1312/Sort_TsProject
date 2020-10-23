// interface DataCollection {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort() {
    //Object destructuring
    const { length } = this;

    // //Bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }

    //New changes
    //Bad approach

    // for (let i = 0; i < length; i++) {
    //   for (let j = 0; j < length - i - 1; j++) {

    //     //Only number array
    //     if (this.collection instanceof Array){
    //       if (this.collection[j] > this.collection[j + 1]) {
    //         const leftHand = this.collection[j];
    //         this.collection[j] = this.collection[j + 1];
    //         this.collection[j + 1] = leftHand;
    //       }
    //     }

    //     //Only string
    //     if (typeof this.collection === 'string'){
    //       //Code for sorting string
    //     }
    //   }
    // }
  }
}
