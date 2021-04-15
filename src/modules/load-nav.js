function loadNav()

{
    const content = document.getElementById("content");

    let navBar = navigation();

    content.appendChild(navBar);
}

function navigation()

{

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
contactClick.id = "contact-click";

homeClick.textContent = "Home";
menuClick.textContent = "Menu";
contactClick.textContent = "Contact";

homeClick.setAttribute("href", "#home");
menuClick.setAttribute("href", "#menu");
contactClick.setAttribute("href", "#contact");

homePage.appendChild(homeClick);
menuPage.appendChild(menuClick);
contactPage.appendChild(contactClick);

navBar.appendChild(homePage);
navBar.appendChild(menuPage);
navBar.appendChild(contactPage);

return navBar;

}

export default loadNav;