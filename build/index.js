"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        //Object destructuring
        var length = this.collection.length;
        // //Bubble sort
        // for (let i = 0; i < length; i++) {
        //   for (let j = 0; j < length - i - 1; j++) {
        //     if (this.collection[j] > this.collection[j + 1]) {
        //       const leftHand = this.collection[j];
        //       this.collection[j] = this.collection[j + 1];
        //       this.collection[j + 1] = leftHand;
        //     }
        //   }
        // }
        //New changes
        //Bad approach
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                //Only number array
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                //Only string
                if (typeof this.collection === 'string') {
                    //Code for sorting string 
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, -2, 4, 1, 7]);
sorter.sort();
console.log(sorter.collection);
