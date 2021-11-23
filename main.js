const btn = document.querySelectorAll(".displaybtn");
const display = document.querySelector(".display")
const equal = document.querySelector(".equal");
const allclear = document.querySelector(".allclear")
const clear = document.querySelector(".clear");


btn.forEach(function(item){
    item.addEventListener("click" , clickfunction)
});
function clickfunction(event){ 
    let number = event.target.innerText;
    if (display.innerText === "result"){
        display.innerText = event.target.innerText;
    }else {
        display.innerText = `${display.innerText}${number}`
    }
   
};

equal.addEventListener("click" , equalfunction);
function equalfunction(){
    let result = eval(display.innerText);
    display.innerText = result ;
}

allclear.addEventListener("click" , allclearfunction);
function allclearfunction (){
display.innerText = "result"
};

clear.addEventListener("click" , clearfunction);
function clearfunction (){
 let text = display.innerText;
 if(text.length === 1){
     display.innerText ="result"
 }else{
     display.innerText = text.substring( 0 , text.length-1);
 }
}
