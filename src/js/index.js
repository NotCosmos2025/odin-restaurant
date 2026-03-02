//css
import "../css/about.css"
import "../css/home.css"
import "../css/menu.css"
import "../css/style.css"

//js 
import { renderHomeDOM } from "./home.js"
import { renderMenuDOM } from "./menu.js"
import { renderAboutDOM } from "./about.js"

function clearContent()
{
    const content_div = document.querySelector(".content");
    while(content_div.firstChild)
    {
        content_div.removeChild(content_div.firstChild);
    }
}

function handleSwitchingNav()
{
    const navItemList = document.querySelectorAll(".nav-item");
    navItemList.forEach(nav => 
    {
        nav.addEventListener("click", (e) =>
        {
            clearContent();
            if (e.target.id === "home") 
            {
                renderHomeDOM();
            }
            else if (e.target.id === "menu")
            {
                renderMenuDOM();
            }
            else if (e.target.id === "about")
            {
                renderAboutDOM();
            }
        });
    })        
}

function init()
{
    handleSwitchingNav();
    renderHomeDOM();
}

init();