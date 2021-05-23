// statements - sets of instructions
// comments

//console statement
// console.log('hello world')
// console.log('hello world');

//variables - declare assignment operator, assign value

// let address, zip, state;
// address = " main street"
// zip = "53242"
// state = "CA"
// let name = "fish burrito"
// console.log(address, zip, state, name)

//Variable Naming
//contain digits, letters, underscore, $
// must start with letter, $ or _
// case sensitive
//camelCase or underscore
// let $full_name = "random"

//"" or ''
//String concatenation "+""
//`` backticks (template string)
// numers Loosely Typed - dont declare type
//  +=, -=, /=, *=, ++, --, %

//Implicit Type Conversion
// const randomNumber = 13;
// document.querySelector('.form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     let value = document.getElementById('amount').value;
//     // value = parseInt(value); //change type to int
//     console.log('Input Value Type');
//     console.log(value);
//     console.log('sum of two')
//     console.log(randomNumber + value) //string
// });

//Data Types
//Primitive - String, Number, BOolean, Null, Undefined, Symbol(ES6)
//Object - Array, Function, Objects
// const text = 'some text';
// let name;//undefined
// console.log(text)

//Arrays
// const arr = ['asd','asdasd',12,null,undefined];
// //function - declare, invoke
// function hello(){
//     console.log('hello');
// }

//params - when declare/defin
//placeholders, local vars
//arguments - when invoke/call/run
//use vars/values, multiple params, undefined
// function hello(name,age){
//     console.log('hello'+ name + age + "years old");
// }
//function expression
// function addValues(num1, num2){
//     return num1 + num2;
// }
//anonymous function
// const add = function(num1,num2){
//     return num1 + num2;
// }
// const add1 = (num1, num2) => num1+num2;

//Objects 
//dot notation
// const person = {
//     name: "john",
//     age: 40,
//     education: false,
//     greeting() {
//       console.log('hello');
//     }
// };
// console.log(person.name)
// person.greeting();

//Conditional Statements
// >, <, ==, ===, !=, !===
// == checks only value
// === checks value&type

// `` Interpolation ${} - insert expression(value)
// const name = 'john'
// const age = 25
// const sentence = `hi this is ${name} and he is ${age} years old`
// console.log(sentence)

//String Method
//trim toLowerCase charAt indexOf startsWith

//Array method
//length, concat, reverse, shift(remove first item), unshift(add from left), 
//push, pop, splic - mutates original array, 
// const allNames = ['john','apple','peter']
// allNames.shift();
// allNames.shift();
// allNames.unshift('susa');
// allNames.unshift('adas');
// console.log(allNames)
// const specificName = allNames.splice(0,2);
// console.log(specificName)

//assigning primitive data value to a variable, any changes are made to that value
//when assigning non-primitive data to a variable is done by reference

//Higher Order funciton - accepts another function as an argument or returns another function as a result
//Callback function - passed to another function as an argument and executed inside that function

// Array Methods
// forEach map filter find reduce
// const numbers = [0,1,2,3,4]
//show all number
// for(let i =0; i< numbers.length; i++){
//     console.log(numbers[i]);
// }
// numbers.forEach((item) => {
//     console.log(item)
// })

//map
//return a new array does't change size of original array
// const people = [
//     {name: 'bob', age:20, position: 'developer'},
//     {name: 'peter', age:22, position: 'designer'},
//     {name: 'susy', age:44, position: 'boss'}
// ];
// const ages = people.map((person)=>{
//     return person.age;
// })
// const newPeople = people.map((person)=>{
//     return {
//         firstName: person.name.toUpperCase(),
//         oldAge: person.age + 20
//     }
// })
// const allNames = people.map((person)=>{
//     return `<h1>${person.name}</h1>`;
// })
// document.body.innerHTML = allNames.join('');

// console.log(ages);
// console.log(newPeople);
// console.log(allNames);

//filter
//return a new array can manipulate the size of new array
//return base on condition
// const people = [
//     {name: 'bob', age:20, position: 'developer'},
//     {name: 'peter', age:22, position: 'designer'},
//     {name: 'susy', age:44, position: 'boss'},
//     {name: 'anna', age:48, position: 'vp'}
// ];
// const youngPeople = people.filter((person)=>{
//     return person.age<=25
// })
// console.log(youngPeople)

//find
//return single instance, returns first match, if no match undefined
// const people = [
//     {name: 'bob', age:20, position: 'developer'},
//     {name: 'peter', age:22, position: 'designer'},
//     {name: 'susy', age:44, position: 'boss'},
//     {name: 'anna', age:48, position: 'vp'}
// ];
// const youngPeople = people.find((person)=>{
//     return person.age === 22
// })
// console.log(youngPeople);

//reduce
//reduces to a single value - number, array, obejct
//1st parameter - total of all calculations
//2ed parameter - current iteration/value
// const people = [
//     {name: 'bob', age:20, position: 'developer'},
//     {name: 'peter', age:22, position: 'designer'},
//     {name: 'susy', age:44, position: 'boss'},
//     {name: 'anna', age:48, position: 'vp'}
// ];
// const total = people.reduce((acc,cur)=>{
//     console.log(`total ${acc}`)
//     console.log(`current money : ${cur.age}`);
//     acc += cur.age;
//     return acc;
// },100);//initial value
// console.log(total)

//Math
//floor, ceil, sqrt, max, min, random

//Date
// const months = [
// 'jan','feb','mar','apr','may','jun','jul','aug','sep','oc','nov','dec'
// ]
// const date = new Date();
// const month = date.getMonth();
// console.log(months[month].toUpperCase())
