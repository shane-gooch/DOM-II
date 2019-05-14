// Your code goes here

const navItems = document.querySelectorAll('.nav-link');

navItems.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        event.target.focus()
    })
    element.addEventListener('mouseleave', (event) => {
        event.target.blur()
    })
    element.addEventListener('click', (event) => {
        event.target.preventDefault()
    })
})

const h2 = document.querySelectorAll('h2')

h2.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.textDecoration = 'underline overline'
    })
    element.addEventListener('mouseleave', (event) => {
        event.target.style.textDecoration = 'none'
    })
})

const top_img = document.querySelector('.top-img')
const text_content = document.querySelector('.inner-p')
console.log(top_img)
text_content.style.visibility = 'hidden' 

top_img.addEventListener('mouseover', (event) => {
    text_content.style.visibility = 'visible'
})

const h4 = document.querySelectorAll('.destination h4')

h4.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.textDecoration = 'underline'
    })
    element.addEventListener('mouseleave', (event) => {
        event.target.style.textDecoration = 'none'
    })
})

// top_img.forEach((element) => {
//     element.addEventListener('mouseover', (event) => {
//         event.text_content.style.visibility = 'hidden'
//     })
// })


const mid_img = document.querySelector('.img-fluid')
const mid_text_content = document.querySelector('.inner-p2')

mid_text_content.style.visibility = 'hidden' 

mid_img.addEventListener('mouseover', (event) => {
    mid_text_content.style.visibility = 'visible'
})




//Drag and Drop
// const drag_btn = document.querySelector('#drag-btn');
// const holders = document.querySelectorAll('.holder');

// holders.forEach((element) => {
//     element.addEventListener('dragstart', function(event) {
//     event.dataTransfer.setData('text/plain', event.target.id);
// })});

// holders.forEach((element) => {
//     element.addEventListener("dragover", function(event) {
//     event.preventDefault();
//   })})

// holders.forEach((element) => {
//     element.addEventListener("drop", function(event) {
//     event.preventDefault();
//     let data = event.dataTransfer.getData(
//         'text.plain')
//         event.target.appendChild(document.querySelector('text/plain'))
//     })});

// let btn = document.querySelector('body');

// function draggingStarts(e) {
    
// }
// btn.addEventListener('dragstart', draggingStarts,false)
