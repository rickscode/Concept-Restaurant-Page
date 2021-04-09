// clean up this code and distribute into different functions

function loadSite () 

{
    console.log("heellllo");
    const content = document.getElementById("content");
    //const nav = createNav();
    const leftWindow = document.createElement("div");
    leftWindow.id = "left-window-title";
    leftWindow.textContent = "Dine at home ..";
    
    
    const rightWindow = document.createElement("div");
    rightWindow.id = "right-window";

    const pizza = document.createElement("img");
    pizza.id = "pizza";
    pizza.setAttribute("src", "https://i.imgur.com/d36stwa.png");
    pizza.setAttribute("alt", "pizza-photo");

    
    rightWindow.appendChild(pizza);
    content.appendChild(leftWindow);
    content.appendChild(rightWindow);
}



function leftSection ()
{
    const leftWindow = document.createElement("div");
    leftWindow.id = "left-window-title";
    leftWindow.textContent = "Dine at home ..";
}


export default loadSite;