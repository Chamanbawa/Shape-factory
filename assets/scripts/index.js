
const Availcolors = {
    Blue: '#09f',
    Green: '#9f0',
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
const index  =[];
const newIndex = new Shape (index, color.value);

onEvent('click', create, function () {
    if(index.length > 19){
        return;
    }
    const elementOne = document.createElement("div");
    middle.appendChild(elementOne);
    elementOne.classList.add(shape.value);
    elementOne.style.backgroundColor = Availcolors[color.value];
    


    index.push(elementOne);
    print(index);

    onEvent('click', elementOne, function(){
    
        // info.innerText = `${newIndex}`;
        print(newIndex);
        // info.innerText = `Index:${index.indexOf(elementOne) + 1}`;

    });
});


