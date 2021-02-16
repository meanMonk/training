/**
 * 1. Diff between normal function and arrow function ?
 * 2. Closure means ? why ?
 * 3. Interfaces & Clases ?
 * 4. How create pipe ?
 * 5.
 *
*/

/**
 * 1. Diff between normal function and arrow function ?
 * 
 *  A. Regular function 
 *      - can be invoked with new
 *      - more lines code like brackets and return keyword    
 *      - arguments is available
 *      - this is available
 *  A. Arrow function
 *      - can not invoke with new as don't have constructor
 *      - easy to write incase of call back function 
 *      - no property called arguments is available
 *      - no this keyword is available
 * 
*/

/** 
 * 2. Closure
 *  - Closure design pattern in javascript which help us to increase the life variable.
 *  - sum()();
 * 
*/

function multiplyBy2(input) {
    var outerVar = input;
    return function innerFn(a) {
        return a * outerVar;
    }
}
