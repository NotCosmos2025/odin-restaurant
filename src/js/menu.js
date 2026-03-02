import cucumberImg from "../../asset/resource/cucumber.jpg";
import foodWrapImg from "../../asset/resource/hell.jpg";
import noodleImg from "../../asset/resource/noodle.jpg";

import { createElement, createElement4, addChildren } from "./utils.js";

//read only
const TAG_LIST = ["budget", "popular", "vegan", "new", "protein", "set"];

function renderMenuDOM()
{
    const title = createElement("h1", "Menu", "title");
    const content = document.querySelector(".content");
    const menuContainer = createElement("div", null, "menu-container");
    const cucumberCard = createCardDiv("Water But Solid", "Almost 0 calories but at least it feels filling (for awhile).", "$0.49", cucumberImg, "budget", "popular", "vegan");
    const poorMansWrapCard = createCardDiv("Poor Man's Wrap", "Bare minimum nutrients to thrive.", "$1.99", foodWrapImg, "new", "protein");
    const womboComboSetCard = createCardDiv("Wombo Combo Set", "Mix of survival and taste.", "$2.99", noodleImg, "new", "popular", "set");
    addChildren(menuContainer, cucumberCard, poorMansWrapCard, womboComboSetCard);
    addChildren(content, title, menuContainer);
}

function createCardDiv(foodName, description, price, imgSrc, ...tagList)
{
    const card_div = createElement("div", null, "card");

    const cardInfoContainer_div = createElement("div", null, "card-info-container");
    const cardInfoTopContainer_div = createElement("div", null, "card-info-top-container");

    const foodName_p = createElement("p", foodName, "food-name");
    const description_p = createElement("p", description, "description");
    const price_p = createElement("p", price, "price");

    addChildren(cardInfoTopContainer_div, foodName_p, description_p, price_p);

    const menuImg_img = createElement("img", null, "menu-img");
    menuImg_img.src = imgSrc;

    const tagsContainer_div = createElement("div", null, "tags-container");

    for (const tag of tagList)
    {
        const tag_div = createElement4("div", tag, "tag", tag + "-tag");
        tagsContainer_div.appendChild(tag_div);
    }

    addChildren(cardInfoContainer_div, cardInfoTopContainer_div, tagsContainer_div);

    addChildren(card_div, cardInfoContainer_div, menuImg_img);
    
    return card_div;
}

export {renderMenuDOM};