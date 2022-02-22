// PUSH //
Array.prototype.myPush = function(...args) {  // Use rest parameter to accept any number of input arguments
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
};

// TEST //
// Test myPush against the native Push to ensure that myPush works as the same as Push
let myArray = [1,2,3,4,5];   // Array called by the function
console.log("myPush:");
console.log(myArray.myPush(6,7,8));   // Output returned array length
console.log(myArray);   // Output [1,2,3,4,5,6,7,8]

myArray = [1,2,3,4,5];   // Array called by the function
console.log("Push:");
console.log(myArray.push(6,7,8));   // Output returned array length
console.log(myArray);   // Output [1,2,3,4,5,6,7,8]