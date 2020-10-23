import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

// const numbersCollection = new NumbersCollection([10, 4, 2, -5, 30, 8]);
// const sorter = new Sorter(numbersCollection);

// sorter.sort();

// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XaaaLg');
const sorter = new Sorter(charactersCollection);

sorter.sort();
console.log(charactersCollection.data);
