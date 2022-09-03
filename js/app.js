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

/*Define Global Variables*/


const sections = document.querySelectorAll('section');
const navBar = document.querySelector('#navbar-list');
/*I create a new document fragment to store the navigation menu array*/
const newNavbar = document.createDocumentFragment();
/* I create an array of the menu elements assigning them to each section */
const menu = ["Home", "Showcase", "Experience", "Projects", "Testimonials", "Contact"];
const navLinks = document.querySelectorAll('.menu-link');
const navMenu = document.querySelector('.navbar-menu');
/**
 * End Global Variables
 

/* Start Helper Functions*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navBuilder () {
    for (let i = 0; i < sections.length; i++) {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.textContent = menu[i];
        navLink.setAttribute('class', 'menu-link ');
        navLink.setAttribute('href', `#${sections[i].id}`);
        navItem.appendChild(navLink);
        newNavbar.appendChild(navItem);
    }
    navBar.appendChild(newNavbar);
}



/*make navbar disappear when not scrolling*/

function hiddenNav() {
    let timer;
    window.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            navMenu.classList.add('display-nav');
        }, 2000);
        console.log("nav is not hidden");
    });
    window.addEventListener('scroll', function () {
        navMenu.classList.remove('display-nav')

    });
}



/*Add class 'active' to section when near top of viewport using getBoundingClientRect*/

// sections.forEach(section => {
//     window.addEventListener('scroll', function () {
//         const sectionTop = section.getBoundingClientRect().top;
//         const sectionHeight = section.getBoundingClientRect().height;
//         if (sectionTop < sectionHeight / 2 && sectionTop >= -sectionHeight / 2 && section.classList.contains('active') === false) {
//             section.classList.add('active');
//         } else {
//             section.classList.remove('active');
//         }
//     });
// });

function addActive() {
    sections.forEach(section => {
        window.addEventListener('scroll', function () {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`[href="#${sectionId}"]`);
            
            if (sectionTop < sectionHeight / 2 && sectionTop >= -sectionHeight / 2 && section.classList.contains('active') === false) {
                const navLink = document.querySelector(`[href="#${sectionId}"]`);
                navLink.classList.add('active-link');
                section.classList.add('active')

            } else {
                section.classList.remove('active'); 
                navLink.classList.remove('active-link');
            }
        }
        );
    }
    );
}


/*Scroll to anchor ID using scrollTO event and smooth scrolling*/

function scrollAnchor() {
    navBar.addEventListener('click', (event) => {
        event.preventDefault();
        
        const target = event.target;
        const sectionHighlight = document.querySelector(target.getAttribute('href'));
        sectionHighlight.scrollIntoView({behavior: "smooth"});
        console.log(sectionHighlight + " " + target);
        console.log("clicked");
        console.log(target.textContent);
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navBuilder();


// Scroll to section on link click

scrollAnchor();

// Set sections as active
addActive();
hiddenNav();


