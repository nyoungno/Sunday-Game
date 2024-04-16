"use strict";
const content = "@nyoung no studio."
const actionMessage = document.querySelector(".action-message")
let index = 0;

 function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay);
    }

function typing(){
    actionMessage.textContent += content[index++];
    if(index > content.length){
        actionMessage.textContent = ""
        index = 0;
        sleep(3000);
    }
}
setInterval(typing, 200)