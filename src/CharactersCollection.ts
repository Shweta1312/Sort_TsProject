export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characterCollection = this.data.split('');

    const leftHand = characterCollection[leftIndex];
    characterCollection[leftIndex] = characterCollection[rightIndex];
    characterCollection[rightIndex] = leftHand;

    this.data = characterCollection.join('');
  }
}
