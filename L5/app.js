//event object argument
//info about triggered event
//event.type, event.currentTarget, this keyword, preventDefault()
// const heading = document.querySelector('h1')
// const btn = document.querySelector('.btn')
// const link = document.getElementById('link')
// heading.addEventListener('click',function(event){
//     event.currentTarget.classList.add('blue')
//     console.log(event.type);
//     console.log(event.currentTarget);
//     console.log(this);
// });
// btn.addEventListener('click',function(event){
//     event.currentTarget.classList.add('blue');
// });
// function someFunc(e){
//     e.preventDefault();
// }
// link.addEventListener('click',someFunc);

//currentTarget - always refers to the elment to which the event handler has been attached to
//target - identifies the element on which the event occured
// const btns = document.querySelectorAll('.btn');
// console.log(btns)
// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e){
//         // console.log(e.currentTarget)
//         // e.currentTarget.style.color = 'green';
//         console.log('target', e.target);
//         e.target.style.color = 'green';
//     });
// })

//allows select dynamic elements
//event propogation - order the events are fired
//event bubbling - clicked element first then bubbles up --default
//event capturing - fires at the root and fires until reaches target
// const container = document.querySelector('.container')
// const list = document.querySelector('.list-items')
// function showBubbling(e){
//     console.log('current target',e.currentTarget);
    // console.log('target',e.target);
    // if(e.target.classList.contains('link')){
    //     console.log('you clicked on the link')
    // }
// }
// function stopPropagation(e){

//     e.stopPropagation();
// }

// list.addEventListener('click',showBubbling,{capture: true})
// list.addEventListener('click',stopPropagation)
// list.addEventListener('click',showBubbling)
// container.addEventListener('click',showBubbling)

//select dynmaic elements
//event propagation
//event bubbling
// const container = document.querySelector('.container')
// const btn = document.querySelector('.btn')
// const heading = document.querySelector('.heading')
// function func(){
//     console.log('hello')
// }
// btn.addEventListener('click', function(){
//     const element = document.createElement('h1');
//     element.classList.add('heading')
//     element.textContent = `i'm inside the container`
//     container.appendChild(element)
// })
// container.addEventListener('click', function(){
//     if(event.target.classList.contains('heading')){
//         console.log('hello there')
//     }
// })
// heading.addEventListener('click', func)

//Form
//submit event listener
//prevent default, how to get a value
// const form = document.getElementById('form')
// const name = document.getElementById('name')
// const pwd = document.getElementById('password')

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log('form submitted')
//     console.log(name.value)
//     console.log(pwd.value)
// })

//WEB storage API
//session storage, local storage
//setItem, getItem, removeItem, clear

// localStorage.setItem('name','john')
// sessionStorage.setItem('name','john')
// localStorage.setItem('name','jony')
// const name = localStorage.getItem('name')
// localStorage.removeItem('name')

//JSON.stringify(), JSON.parse()
const friends = ['john','peter','bob']
localStorage.setItem('friend',JSON.stringify(friends))

const values = JSON.parse(localStorage.getItem('friend'))
console.log(values[2])
