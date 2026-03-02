import { addChildren, createElement } from "./utils";
import homeImage from "../../asset/resource/home.jpg"

const content_div = document.querySelector(".content");

function renderHomeDOM()
{
    const title_h1 = createElement("h1", "The starving Student Sanctuary", "title");
    const tagline_p = createElement("p", "No microwave required. No dishes or cutlery to wash.", "tagline");

    const titleImg_img = createElement("img", null, "title-img");
    titleImg_img.src = homeImage;
    titleImg_img.setAttribute("alt", "image not loaded..");

    const description1_p = createElement("p", "You've entered the final week of the semester. Your pantry is a wasteland. Your fridge contains a single lemon and a jar of pickles from 2022. You are not okay. But you will be.", "description");
    const description2_p = createElement("p", "The Starving Student Sanctuary is a safe house for the academically battered and the financially bruised. We are a non-judgmental zone where we serve the \"struggle meals\" of yesteryear with a side of compassion. Think of us as a soup kitchen, but with more irony and fewer nuns.", "description");

    const homeContainer_div = createElement("div", null, "home-container");
    addChildren(homeContainer_div, title_h1, tagline_p, titleImg_img, description1_p, description2_p);
    
    content_div.append(homeContainer_div);

}

export {renderHomeDOM};