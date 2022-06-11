import navbar from "../components/navbar.js";

import "../styles/style.css";

import axios from "axios";

let navbar_div = document.getElementById('navbar');

navbar_div.innerHTML = navbar();

async function fetchData(){
    let data = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    console.log(data.data.categories);
    append(data.data.categories);
}
fetchData();

let append = (data) =>{

    // data.forEach((ele)=>{
    
    data.forEach(({strCategory, strCategoryThumb, strCategoryDescription}) => {

        let container = document.getElementById('container');

        let box = document.createElement("div");
    
        let p = document.createElement("h2");
        p.innerText = strCategory;
    
        let img = document.createElement("img");
        img.src = strCategoryThumb;
    
        let detail = document.createElement("p");
        detail.innerText = strCategoryDescription;
    
        box.append(img, p, detail);
        container.append(box);
        })
    }