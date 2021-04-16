function loadMenuPage()

{
    const content = document.getElementById("content");
    const menu = document.createElement("div");
    const pizzaMenu = document.createElement("img");
    pizzaMenu.setAttribute("src", "https://i.imgur.com/d36stwa.png");
    menu.id = "menu-page";
    menu.textContent = 'PIZZA :)';
    content.appendChild(menu);
}

export default loadMenuPage;

