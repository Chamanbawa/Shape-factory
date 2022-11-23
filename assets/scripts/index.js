
const Availcolors = {
    Blue: '#09f',
    Green: '#33ab4e',
    Orange: '#f90',
    Pink: '#f09',
    Purple: '#90f'
};

import { onEvent, getElement, select, print } from "./utils.js";
import Shape from "./Shape.js";



const shape = select('.shape');
const color = select('.color');
const create = select('.create');
const middle = select('.middle');
const info = select('.info');
const index = [];

onEvent('click', create, function () {

    if ( shape.value === "" || color.value === "") {
        info.innerText = "Please Select Both Input!";
    }
    else{
    if (index.length < 20) {
        info.innerText = "";
        let newIndex = new Shape(shape.value, color.value);
        index.push(newIndex);
        
        const elementOne = document.createElement("div");
        
        middle.appendChild(elementOne);
        elementOne.classList.add(shape.value);
        elementOne.style.backgroundColor = Availcolors[color.value];
        
        onEvent('click', elementOne, function () {

            let indices = index.indexOf(newIndex) + 1;
            info.innerText = `Unit:${indices} color: ${newIndex.getInfo()}`;

        });    
    } else {
        info.innerText = 'Storage is Full!';
    }  
}  
});    




