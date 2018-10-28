const _ = {
    clamp(number, lower, upper) {
     lowerClampedValue = Math.max(number, lower);
     clampedValue = Math.min(lowerClampedValue, upper);
     return clampedValue;
    },
    inRange(number, start, end) {
         if (end === undefined) {
         end = start;
         start = 0;
           }node
           if (start > end) {
         var temp = end;
         end = start;
         start = temp;
       }
            if (start <= number && number < end) {
         var isInRange = true;
         return isInRange;
       } else { return false; }
   },
     words(string) {
       let words = string.split(' ');
       return words;
     },
     pad(string, length) {
       if (length <= string.length) {
         return string;
       }
       let startPaddingLength = Math.floor((length - string.length) / 2);
       let endPaddingLength = (length - string.length - startPaddingLength);
       let paddedString = (' ').repeat(startPaddingLength) + string + (' ').repeat(endPaddingLength);
       return paddedString;
     },
     has(object, key) {
       let hasValue = (key in object);
       return hasValue; 
     },
     invert(object) {
       let invertedObject = {};
       for (var key in object) {
        let originalValue = object[key];
        invertedObject[originalValue] = key;
       }
       return invertedObject; 
     },
     findKey(object, predicate) {
         for (var key in object) {
     let value = object[key];
     let predicateReturnValue = predicate(object[key]);
     if (predicateReturnValue === true) {
     return key;
   }
   return undefined;
   }
   },
     drop(array, n){
          if (n == null || n < 0) {
         n = 1;
       }
       let droppedArray = array.slice(n);
       return droppedArray;
     },
     dropWhile(array, predicate) {
       //let droppedArray = [];
       let dropNumber = array.findIndex(
         function(element, index) {
           //for (let i = 0; i < array.length; i++) {
                   //if (!predicate(array[i], i, array)) {
                 //droppedArray = array.slice(0, i - 1);
         return !predicate(element, index, array);
           //droppedArray = this.drop([dropNumber]);
         });
       let droppedArray = this.drop(array, [dropNumber]);
       return droppedArray;
     },
     chunk(array, size) {
       if (size === null || size < 0) {
         size = 1;
       }
       let arrayChunks = [];
       for (let i = 0; i < array.length;) {
         let arrayChunk = array.slice(i, i + size);
         arrayChunks.push(arrayChunk);
         i += size;
       }
         return arrayChunks;
     }
   }
   
   
   // Do not write or modify code below this line.
   module.exports = _;




// Do not write or modify code below this line.
module.exports = _;