import loadSite from './page-load';
import loadNav from './load-nav';
import loadMenuPage from './load-menu';
import loadContactPage from './load-contact';

function pageController()

{
    loadHome()
    loadMenu();
    loadContact();
    
}

function loadHome()

{
    const home = document.getElementById("home-click");
    home.addEventListener("click", function()
    
    {   
        console.log("homepage");
        clear();
        loadNav();
        loadSite();
        pageController();
    });
    
}
  
function loadMenu()

{
    const menu = document.getElementById("menu-click");
    menu.addEventListener("click", function()
    
    {
        console.log("menupage");
        clear();
        loadNav();
        loadMenuPage();
        pageController();
    });
}

function loadContact()

{
    const contact = document.getElementById("contact-click");
    contact.addEventListener("click", function()
    
    {
        console.log("contactpage");
        clear();
        loadNav();
        loadContactPage(); 
        pageController();
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