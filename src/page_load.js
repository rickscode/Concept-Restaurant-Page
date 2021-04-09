function loadSite () 
{

    console.log("heellllo");
    const content = document.getElementById("content");
    //const nav = createNav();
    const leftWindow = document.createElement("div");
    const rightWindow = document.createElement("div");
    content.appendChild(leftWindow);
    content.appendChild(rightWindow);



}

export {loadSite}

