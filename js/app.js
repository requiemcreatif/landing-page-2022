/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Mobile Navigation



/*const navBtn = document.querySelector('.mobile-nav-btn');
const navLink = document.querySelector('.navbar-mobile-link');

navBtn.addEventListener('click', () => {
    navLink.classList.toggle('hide');
} );*/




// build the nav

// const menu = ["Home", "Showcase", "How we do it", "Our projrcts", "Testimonials", Subscribe]

const sections = document.querySelectorAll('section');
const navBar = document.querySelector('#navbar-list');
// const navBarContent = '';
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < sections.length; i++)
{   
    let sectionId = sections[i].id;    
    const navLink = document.createElement('li');
    navLink.innerHTML = `<a href="#${sectionId}" class="menu-link active">${sectionId}</a>`;
    navBar.appendChild(navLink);

}
} );











// Add class 'active' to section when near top of viewport

// const navLink = document.querySelectorAll('.menu-link');
// navLink.forEach(link => {
//     link.addEventListener('click', () => {
//         navLink.forEach(link => {
//             link.classList.remove('active');
//         });
//         link.classList.add('active');
//     });
// });


// Scroll to anchor ID using scrollTO event

// const navLink = scrollTo.querySelectorAll('.menu-link');
// navLink.forEach(link => {
//     link.addEventListener('click', () => {
//         navLink.forEach(link => {
//             link.classList.remove('active');
//         } );

//         link.classList.add('active');
//         const sectionId = link.getAttribute('href');
//         const section = document.querySelector(sectionId);
//         section.scrollIntoView({behavior: 'smooth'});
//     } );
// } );



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Scroll to section on link click

// Set sections as active


