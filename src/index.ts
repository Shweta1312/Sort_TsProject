import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 4, 2, -5, 30, 8]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XaaaLg');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(-3);
linkedList.add(98);
linkedList.add(5);
linkedList.add(22);
linkedList.sort();
linkedList.print();
