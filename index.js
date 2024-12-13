// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topElMenu = document.querySelector("#top-menu");

//Iterate over the entire menuLinks array and for each "link" object:
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

//Select and cache the <main> element

const mainEl = document.querySelector("main");

// function mainElCol() {
//     mainEl.style.color = "#4a4e4d";

//     mainEl.textContent = "<h1>DOM Manipulation</h1>"

// }
// console.log(mainEl);

mainEl.style.backgroundColor = "#4a4e4d"

mainEl.innerHTML = '<h1>DOM Manipulation</h1>'

mainEl.classList.add('flex-ctr')

console.log(mainEl)



document.addEventListener('DOMContentLoaded', () => {
    topElMenu.style.height = '100%';
    topElMenu.style.backgroundColor = '#0e9aa7';
    topElMenu.classList.add('flex-around');
})
console.log(topElMenu);

// //Set the height of the topMenuEl element to be 100%.
// topElMenu.style.height = '100%';

// //Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

// topElMenu.style.backgroundColor = "#0e9aa7";

// //Add a class of flex-around to topMenuEl.
// topElMenu.classList.add("flex-around");
