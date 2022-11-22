function onEvent(event, selector, callback) {

    return selector.addEventListener(event, callback);

}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);

}


function print(arg) {
    console.log(arg);
}

const morebtn = select('.more-btn');
const main = select('.main-box');



// main.innerTEXT = "<div class='column two'></div>";

onEvent('click', morebtn, function() {
    console.log('hello');
    

});



