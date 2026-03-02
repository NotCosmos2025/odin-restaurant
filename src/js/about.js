import { createElement, addChildren } from "./utils"; 

function renderAboutDOM()
{
    const content = document.querySelector(".content");
    const title = createElement("h1", "About Us", "title");
    const aboutContainer_div = createElement("div", null, "about-container");
    const description_p = createElement("p", "Just fellow uni students trying to earn just a little bit of side cash whilst studying and avoiding unemployment.", "description");
    addChildren(aboutContainer_div, description_p);

    const contactContainer_div = createElement("div", null, "contact-container");
    const contactAt_p = createElement("p", "Contact us at: ", "contact-at");
    const contact_a = createElement("a", "tss@realmail.com", "contact");
    contact_a.setAttribute("href", "/");
    addChildren(contactContainer_div, contactAt_p, contact_a);
    addChildren(aboutContainer_div, contactContainer_div);
    addChildren(content, title, aboutContainer_div);
}

export {renderAboutDOM};