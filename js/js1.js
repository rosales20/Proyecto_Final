const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnIzq = document.querySelector("#btn_izquerda");
const btnDer = document.querySelector("#btn_derecha");

slider.insertAdjacentElement("afterbegin",sliderSectionLast);

function siguiente (){
    let sliderSelectorFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement("beforeend",sliderSelectorFirst);
        slider.style.marginLeft="-100%";
        
    },500);
}   

function atras (){
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement("afterbegin",sliderSectionLast);
        slider.style.marginLeft="-100%";
        
    } ,500);
}   

btnDer.addEventListener('click', function(){
    siguiente();
});
btnIzq.addEventListener('click', function(){
    atras();
});

setInterval(function(){
    siguiente();
},5000);