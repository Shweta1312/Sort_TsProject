"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        //Object destructuring
        var length = this.collection.length;
        // //Bubble sort
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
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
    };
    return Sorter;
}());
exports.Sorter = Sorter;
