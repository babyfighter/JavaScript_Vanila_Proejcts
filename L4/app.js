//Document Object Model (DOM)
//similar to css

// document.body.style.backgroundColor = 'blue';
// const element = document.getElementById('element')
// document.querySelector('element')
// //window object
// //console.log(window)
// //node Object
// const btn = document.getElementById('btn')
// const name = btn.nodeName;
// const css = btn.style;
// console.log(btn);
// console.log(name);
// console.log(css)

//window object = browser api
//console.dir
// console.log(document)
// console.dir(document)

// const headings = document.getElementsByTagName('h2');
// headings[0].style.color = 'red';
// headings[0].style.color = 'red';
// console.log(headings.length)

// const items = document.getElementsByTagName('li')
// // items.forEach((item) => {
// //     console.log(item);
// // });
// items[2].style.color = 'orange'
// const betterItems = [...items];
// betterItems.forEach(function (item) {
// });
// console.log(items);//node list
// console.log(betterItems);//array

//select group or ID
// document.querySelector('#ID')
// document.querySelectorAll('.CLASSNAME')

//select the element or group of elements
//childNodes - returns all childNodes includ whitespace which treated as a text node
//children
// const result = document.querySelector('#result');
// const allChildren = result.childNodes;
// const children = result.children;
// console.log(children)

//parentElement
// const heading = document.querySelector('h2')
// console.log(heading.parentElement)

//previousSibling nextSibling return whitespace
// const first = document.querySelector('.first')
// const second = first.nextSibling.nextSibling;
// console.log(second)

//nodeValue
//textContent
// const item = document.getElementById('special')
// const value = item.nodeValue
// console.log(item.firstChild.nodeValue)
// const first = document.querySelector('.first')
// const classV = first.getAttribute('class')
// const classV2 = first.getAttribute('id')
// console.log(classV)
// console.log(classV2)

// const link = document.getElementById('link')
// const last = link.nextElementSibling;
// last.setAttribute('class','first');
// last.textContent = ' i also have a class of first'
// console.log(last)

// const links = document.querySelectorAll('.first')
// console.log(links)

//className classList
// const first = document.getElementById('first')
// // const classV = first.className
// // console.log(classV)
// first.classList.add('colors', 'text)
// first.classList.remove('colors', 'text)
// const classV = first.classList
// console.log(classV)

//createELement
//appendChild(childElement)
//createTextNode('text Content)
//replaceChild('new','old')
// const result = document.querySelector('#result')
// const bodyDiv = document.createElement('div');
// //create text node
// const text = document.createTextNode('simple body div')
// bodyDiv.appendChild(text)
// document.body.appendChild(bodyDiv)
// document.body.insertBefore(bodyDiv,result)
// //result element
// const heading = document.createElement('h2')
// const headingText = document.createTextNode("dynamic heading2")
// heading.appendChild(headingText)
// heading.classList.add('blue')
// //insertBefore('element,'location')
// result.insertBefore(heading,first)

// const smallHeading = document.createElement('h6')
// const smallText = document.createTextNode('small heading')
// smallHeading.classList.add('red')
// smallHeading.appendChild(smallText)
// document.body.replaceChild(smallHeading, bodyDiv)

//prepend
//innerText
// const heading = document.createElement('h2')
// heading.innerText = `i am a dynamic heading`
// document.body.prepend(heading);

//remove
//removeChild
// const result = document.querySelector('#result')
// // result.remove()
// const heading = result.querySelector('h1')
// result.removeChild(heading)

//innerHTML textContent
// const list = document.getElementById('first')
// const div = document.getElementById('second')
// const item = document.querySelector('.item')

// console.log(div.textContent)
// console.log(list.innerHTML)

// const ul = document.createElement('ul')
// const randomVar = 'random value'
// ul.innerHTML = `<li class="item">list item</li>
//         <li>list item</li><li>${randomVar}</li>`
// document.body.appendChild(ul)

//CSS
// const random = document.querySelector('.item')
// random.style.backgroundColor = 'yellow'
// random.classList.add('blue')

//event
//select element  addEventListener()
// const btn = document.querySelector('.btn')
// const heading = document.querySelector('h2')
// function changeColors(){
//     const hasClass = heading.classList.contains('red');
//     if(hasClass){
//         heading.classList.remove('red')
//     }
//     else{
//         heading.classList.add('red')
//     }
// }
// btn.addEventListener('click',changeColors)

//click event 
//mousedown mouseup mouseenter mouseleave
// const heading = document.querySelector('h1')
// const btn = document.querySelector('.btn')
// heading.addEventListener('mouseenter', function() {
//     heading.classList.add('blue')
// })
// heading.addEventListener('mouseleave', function() {
//     heading.classList.remove('blue')
// })

//key events
//keydown keyup keypressed
// const nameInput = document.getElementById('name')
// // nameInput.addEventListener('keypress',function(){
// //     console.log('pressed')
// // })
// nameInput.addEventListener('keydown',function(){
//     console.log('pressed')
// })


