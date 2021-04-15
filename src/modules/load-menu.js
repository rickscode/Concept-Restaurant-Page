function loadMenuPage()

{
    const content = document.getElementById("content");
    const menu = document.createElement("div");
    menu.id = "menu-page";
    menu.textContent = 'PIZZA :)';
    content.appendChild(menu);
}

export default loadMenuPage;

