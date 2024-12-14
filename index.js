// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topElMenu = document.querySelector("#top-menu");

const subMenuEl = document.querySelector('#sub-menu')


// Helper function to build the submenu dynamically
function buildSubMenu(subLinks){
    subMenuEl.innerHTML = '';


    subLinks.forEach(link => {
        const aEl = document.createElement('a');
        aEl.setAttribute('href', link.href);
        aEl.textContent = link.text;
        subMenuEl.appendChild(aEl)
    });
}


//Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function(event){
    event.preventDefault();

    if(event.target.tagName !== 'A'){
        return;
    }

    console.log(event.target.textContent);

    subMenuEl.style.top = '0';

    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
    if(event.target.textContent.toLowerCase() === 'about'){
        mainEl.innerHTML = '<h1>About</h1>'
    }
})


//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuEl = document.querySelector("#sub-menu")


menuLinks.forEach(link => {
    // Create an <a> element.
     const aEl = document.createElement('a');

     //On the new element, add an href attribute with its value set to the href property of the "link" object.
     aEl.setAttribute('href', link.href)

     //Set the new element's content to the value of the text property of the "link" object.
     aEl.textContent = link.text;

     //Append the new element to the topMenuEl element.
     topElMenu.appendChild(aEl);

 })

//Attach a delegated 'click' event listener to topMenuEl.
topElMenu.addEventListener('click', function(event){
    event.preventDefault()

    if(event.target.tagName !== 'A'){
        return;
    }

    // Find the link object based on the clicked link text
    const clickedLink = menuLinks.find(link => link.text === event.target.textContent);

    // Remove the "active" class from all links in the top menu
    const topMenuLinks = document.querySelectorAll('#top-menu a');
    topMenuLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Toggle the "active" class on the clicked link
    const isActive = event.target.classList.toggle('active');

    // If the clicked link has subLinks, build and show the submenu
    if (isActive && clickedLink.subLinks) {
        buildSubMenu(clickedLink.subLinks);  // Build the submenu dynamically
        subMenuEl.style.top = '100%';  // Show the submenu
    } else {
        subMenuEl.style.top = '0';  // Hide the submenu if it's not active or has no subLinks
    }
})


document.addEventListener('DOMContentLoaded', () => {
    subMenuEl.style.height = '100%';
    subMenuEl.style.backgroundColor = '#3da4ab';
    subMenuEl.classList.add('flex-around');
    console.log(subMenuEl);
})

const topMenuLinks = document.querySelectorAll('#top-menu a')
console.log(topMenuLinks)



const mainEl = document.querySelector("main");


mainEl.style.backgroundColor = "#4a4e4d"

mainEl.innerHTML = '<h1>DOM Manipulation</h1>'

mainEl.classList.add('flex-ctr')

console.log(mainEl)


document.addEventListener('DOMContentLoaded', () => {
    topElMenu.style.height = '100%';
    topElMenu.style.backgroundColor = '#0e9aa7';
    topElMenu.classList.add('flex-around');

    topElMenu.addEventListener('click', function(event){
        event.preventDefault();

        if(event.target.tagName !== 'A'){
            return;
        }

        const clickedLink = menuLinks.find(link => link.text === event.target.textContent)


        topMenuLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Toggle the "active" class on the clicked link.
        const isActive = event.target.classList.toggle('active');

        // If the clicked link is not active, we will toggle the submenu visibility.
        if(!isActive && clickedLink.subLinks){
            subMenuEl.style.top = '0';
        } else if(isActive && clickedLink.subLinks){
            subMenuEl.style.top = '100%';
        }

    })

})
console.log(topElMenu);



//Part 2

//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.


//Set the height subMenuEl element to be "100%".

//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.

//Add the class of flex-around to the subMenuEl element.
