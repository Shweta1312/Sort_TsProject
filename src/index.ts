// import { CharactersCollection } from './CharactersCollection';
// import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

// const numbersCollection = new NumbersCollection([10, 4, 2, -5, 30, 8]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('XaaaLg');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(-3);
linkedList.add(98);
linkedList.add(5);
linkedList.add(22);
const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();