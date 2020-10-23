"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CharactersCollection } from './CharactersCollection';
// import { NumbersCollection } from './NumbersCollection';
var LinkedList_1 = require("./LinkedList");
var Sorter_1 = require("./Sorter");
// const numbersCollection = new NumbersCollection([10, 4, 2, -5, 30, 8]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('XaaaLg');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(10);
linkedList.add(-3);
linkedList.add(98);
linkedList.add(5);
linkedList.add(22);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
