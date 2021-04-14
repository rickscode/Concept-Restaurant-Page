// clear page and load new elements 
// will need to import create page functions here
// main function to bind everything together to export and import in index $
// clear page function $
// clear page and load menu page 
// event listener for contact $

// event listener will need to call a function that calls clear 
// then loads page

function pageController()

{
    loadHome()
    loadMenu();
    loadContact();
}

function loadHome()

{
    const menu = document.getElementById("home-click");
    menu.addEventListener("click", clear);
}
  

function loadMenu()

{
    const menu = document.getElementById("menu-click");
    menu.addEventListener("click", clear);
}

function loadContact()

{
    const menu = document.getElementById("contact-click");
    menu.addEventListener("click", clear);
}

function clear()

{
    let nodeList = Array.from(content.childNodes);
        nodeList.forEach((element) => {
        content.removeChild(element);
        });
}







export default pageController;