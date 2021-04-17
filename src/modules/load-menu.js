function loadMenuPage()

{
    const content = document.getElementById("content");
    const menu = document.createElement("div");
    const pizzaMenu = document.createElement("img");
    pizzaMenu.setAttribute("src", "pizzamenu.png");
    menu.id = "menu-page";
    

    menu.appendChild(pizzaMenu);
    content.appendChild(menu);
}

export default loadMenuPage;

