import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10,4,2,-5,3,8]);
const sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(numbersCollection.data);
