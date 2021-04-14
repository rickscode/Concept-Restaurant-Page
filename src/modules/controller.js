// clear page and load new elements 
// will need to import elements here



// main function to bind everything together to export and import in index


const content = document.getElementById("content");
const rightWindow = document.getElementById("right-window");

// clear page function 

  
function clear(){
    
    const menu = document.getElementById("menu-click");
    menu.addEventListener("click", function()

    // remove all child nodes from content
    {
        let nodeList = Array.from(content.childNodes);
        nodeList.forEach((element) => {
        content.removeChild(element);
        });
    })

}


// event listener for menu
// clear page and load menu page

// event listener for contact

export default clear;