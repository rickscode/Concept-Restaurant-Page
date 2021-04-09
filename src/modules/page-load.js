function loadSite () 

{
    console.log("heellllo");
    const content = document.getElementById("content");
    //const nav = createNav();
    
    let left = leftSection();
    
    content.appendChild(left);
    
    let right = rightSection();
    
    content.appendChild(right);

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