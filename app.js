let btn=document.querySelector(".btn");
let nav= document.querySelector(".navigation");
let line=document.querySelectorAll(".line");
let c=document.querySelector(".c");


btn.addEventListener("click",()=>{
nav.classList.toggle("n_tg");
line.forEach(item=>{
item.classList.toggle("line_hide");
});
c.classList.toggle("d");
});










// slider carusel

let nxt=document.querySelector(".nxt");
let prw=document.querySelector(".prw");
let sd=document.querySelectorAll(".sd");
let feed=document.querySelector(".feed");


let index=0;

function slide(){
let sd=document.querySelectorAll(".sd");
let feed=document.querySelector(".feed");
if(index<0){
    index=sd.length-1;
}
if(index>sd.length-1){
    index=0;
}

feed.style.transform=`translateX(${-index*750}px)`

}



function effect(){
    sd[index].style.opacity="1";
    console.log(sd[index]);

}

function sm(){
    sd[index-1].style.opacity="0.2";
}

effect();


nxt.addEventListener("click",()=>{
    index++;
    slide();
    index-1;
    console.log(index);
    effect();
    sm();
});

prw.addEventListener("click",()=>{
    index--;
    slide();
    index-1;
    console.log(index);
    effect();
    sm();
});

// desktop navbar menu

let navbar=document.querySelector(".navbar");
let link=document.querySelectorAll('a');
let cont1=document.querySelector(".container");
let cont2=document.querySelector(".container2");

window.addEventListener("scroll",()=>{
let size=Math.round(window.scrollY);

if(size>10){
    navbar.style.background="rgba(255, 255, 255, 0.548)";
    link.forEach(txt=>{
        txt.style.color="black";
    })
}else{
    navbar.style.background="transparent";
    link.forEach(txt=>{
        txt.style.color="white";
    })
}

if(size>20){
cont1.style.backgroundImage="url(./person-g5d78e786f_1920.jpg)";
}else{
cont1.style.backgroundImage="url(./fisherman-6479663_1920.jpg)";
}

if(size>320){
    cont2.style.background="teal";
}else{
    cont2.style.background="black";
}

});




