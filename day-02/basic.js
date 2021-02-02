console.log('Let start!')
// data types: 
//  number string boolean undefined null object 
let alpha = "alpha";
let gamma;
// Construct : 
// switch case, if else, for, function, while, try catch finally  
// arguments & this implicitely define here.
function printMe(a,b,c) {
    // .....
    let circle = "123"
    console.log(circle);
    console.log(this);
}

let printMeArrow = (a,d,e) => {

}


let circle = {
    radius: 10,
    printRadius: function () {
        console.log(this)
        console.log(this.radius)
    },
    printRadiusArr: () => {
        console.log(this)
        console.log(this.radius)
    }
}

// what is closure 
// let counter = 1;
// up() counter ++
// down() counter --

// outer function 
/// outer variable : increase scope
/// inner function 
// outer inner function 
// return inner funcito


function createCounter() {
    let count = 0;
    function upCounter() {
        return ++count
    }
    function downCounter() {
        return --count
    }

    return {
        up: upCounter,
        down: downCounter
    }
}

let counter = createCounter()

// ES6 version 2015
// let 
// const 
// spread  ...
// rest  ... 
// destructuring
/* const [name, id] = ["sam", 10] */
/*  const {name, id} = {name: "sam", id: 10} */

// template String
/* 
const {name, id} = {name: "sam", id: 10}
function greet(name, id) {
    console.log(`welcome ${name} - ${id}`);
}
greet(name, id); 
*/
// class
// arrow function
/* (para, par)=> res.uppercase*/

// Array 
// map forEach filter some reduce every find findIndex 

let userList = [
    {name: "sam",marks: 10},
    {name: "john",marks: 100},
    {name: "sita",marks: 1000},
    {name: "gita",marks: 232},
    {name: "ram",marks: 490},
    {name: "pintu",marks: 502},
]

// userList.forEach((item) => {
//     console.log(item.name);
// })

// let AllMarks = userList.map((item) => item.marks)
// console.log(AllMarks)

// let userAbove500 = userList.filter((item) => item.marks < 500)
// console.log(userAbove500);

// let isUserWithMarks1000 = userList.some((item) => item.marks > 1000)
// console.log(isUserWithMarks1000);

// let isAllUserAbove50 = userList.every((item) => item.marks > 50)
// console.log(isAllUserAbove50);

// let userWithMark10 = userList.find((item) => item.marks === 10)
// console.log(userWithMark10);

// let marksTotal = userList.reduce((sum,user) => {
//     return sum + user.marks
// },0)
// console.log(marksTotal);
// Array.isArray to check wether it's an array

/// TODO: 
/*
   write function to flattern the array
   input: [1,2,[3,[4,[5,6,[7,8]]]]]];
   output:  [1,2,3,4,5,6,7,8]

   input: [[1,[2]],[3,[4,[5,6,]]]];
   output:  [1,2,3,4,5,6,7,8]

   function flattern(input) {
     // write code here to solve issue
   }
   flattern() /// output
*/

// asynchronous : 
// which is going to be executed but don't know the exact time
/**
 * callback
 * events
 * promise
 *      // .then use to read success success
 *      // .catch use to read error
 * async await 
 * observables : angulars 
 *  */
/* console.log('define promise')
let p = new Promise((res,rej) => {
    let value = 1 + 3;
    setTimeout(() => {
        console.log('check condition')
        if(value === 2) {
            console.log('resolving with success')
            res('Success!')
        } else {
            console.log('rejecting promise with error')
            rej('failed')
        }
    },4000)
})

console.log('listening to promise')
p.then(res => console.log(res))
    .catch(err => {console.log(err); throw new Error('Filaed!')});
 */
let p1 = new Promise((res,rej) => {
    res('Message 1')
})
let p2 = new Promise((res,rej) => {
    res('Message 2')
})
let p3 = new Promise((res,rej) => {
    res('Message 3')
})
let p4 = new Promise((res,rej) => {
    res('Message 4')
})
// Promise.all
// Promise.all([p1,p2,p3,p4])
//     .then((messages) => console.log(messages))

// // Promise.race 
// Promise.race([p1,p2,p3,p4]).then((message) => console.log(message))

async function callP1() {
    try {
        const resP1 = await p1;
        const resP2 = await p2;
        const resP3 = await p3;
        console.log(resP1);
        console.log(resP2);
        console.log(resP3);
    } catch(e) {
        console.log('Failed with exception',e);
    }
}