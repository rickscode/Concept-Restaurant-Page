import loadSite from './page-load';
import loadNav from './load-nav';
import loadMenuPage from './load-menu';


function pageController()

{
    loadHome()
    loadMenu();
    loadContact();
    
}

function loadHome()

{
    const menu = document.getElementById("home-click");
    menu.addEventListener("click", function()
    
    {
        clear();
        loadNav();
        loadSite();
    });
    
}
  

function loadMenu()

{
    const menu = document.getElementById("menu-click");
    menu.addEventListener("click", function()
    
    {
        clear();
        loadNav();
        loadMenuPage(); // needs to be a load menu function
    });
}

function loadContact()

{
    const menu = document.getElementById("contact-click");
    menu.addEventListener("click", function()
    
    {
        clear();
        loadNav();
        loadSite(); // needs to be a load contact function
    });

}

function clear()

{
    let nodeList = Array.from(content.childNodes);
        nodeList.forEach((element) => {
        content.removeChild(element);
        });
}







export default pageController;