function loadSite () 

{
    
    const content = document.getElementById("content");

    let navBar = navigation();

    content.appendChild(navBar);

    let left = leftSection();
    
    content.appendChild(left);
    
    let right = rightSection();
    
    content.appendChild(right);

    

}

function navigation() 
{
// nav bar
const navBar = document.createElement("nav");
navBar.id = "nav-bar";

const homePage = document.createElement("li");
homePage.id = "home";
const homeClick = document.createElement("a");
homeClick.id = "home-click";

const menuPage = document.createElement("li");
menuPage.id = "menu";
const menuClick = document.createElement("a");
menuClick.id = "menu-click";

const contactPage = document.createElement("li");
contactPage.id = "contact";
const contactClick = document.createElement("a");
contactClick.id = "menu-click";


// assign text content
homeClick.textContent = "Home";
menuClick.textContent = "Menu";
contactClick.textContent = "Contact";

// assign attributes
homeClick.setAttribute("href", "#home");
menuClick.setAttribute("href", "#menu");
contactClick.setAttribute("href", "#contact");

homePage.appendChild(homeClick);
menuPage.appendChild(menuClick);
contactPage.appendChild(contactClick);



navBar.appendChild(contactPage);
navBar.appendChild(menuPage);
navBar.appendChild(homePage);
return navBar;


}

function leftSection ()
{
    const leftWindow = document.createElement("div");
    leftWindow.id = "left-window-title";
    leftWindow.textContent = "Dine at home ..";
    
    return leftWindow;
}

function rightSection ()
{
    const rightWindow = document.createElement("div");
    rightWindow.id = "right-window"; 
    const pizza = document.createElement("img");
    pizza.id = "pizza";
    pizza.setAttribute("src", "https://i.imgur.com/d36stwa.png");
    pizza.setAttribute("alt", "pizza-photo");

    rightWindow.appendChild(pizza);

    return rightWindow;
}




export default loadSite;