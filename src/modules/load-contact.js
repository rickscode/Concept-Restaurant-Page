function loadContactPage()

{
    const content = document.getElementById("content");
    const number = document.createElement("div");
    number.id = "contact-page";
    number.textContent = '002183947';
    content.appendChild(number);
}

export default loadContactPage;