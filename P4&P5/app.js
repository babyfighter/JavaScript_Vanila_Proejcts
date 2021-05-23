// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // }
    // else{
    //     links.classList.add('show-links')
    // }
    links.classList.toggle('show-links')
});

const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
});

closeBtn.addEventListener('click', () => {
    sidebar.remove('show-sidebar');
})
