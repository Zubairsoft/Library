
function lange(){
    let lang=document.getElementsByTagName('link')[0];
    if(lang.getAttribute('href')=='css/ARB.CSS'){
        lang.setAttribute('href','css/ENG.css');
    }
 else if (lang.getAttribute('href')=='css/ENG.css'){
        lang.setAttribute('href','css/ARB.CSS');
    }

   
}
// slaide adv
var slaider=document.querySelector(".head-imges");
var imag=['adv.jpg','bag.jpg','mobile.jpg','mobile2.jpg'];
var ind=0 ;// current image index
var dot=document.getElementsByClassName('dot');
function Pv(){
    

    if (ind<=0) ind=imag.length;

    ind--;
    for(let a=0;a<dot.length;a++){

        dot[a].classList.remove("active");
    }
    dot[ind].classList.add("active");
    return SetImg();
}
function Nt(){
    

    if(ind>=imag.length-1) ind= -1;
    
    ind++;
    for(let a=0;a<dot.length;a++){

        dot[a].classList.remove("active");
    }
    dot[ind].classList.add("active");
    return SetImg();
}
function SetImg(){
    return slaider.setAttribute('src','img/'+ imag[ind]);
    
    
}



// search
const search=document.getElementById('search');
const book_search=document.querySelectorAll('.slider-container-item');
search.addEventListener('keyup',function(e){
    book_search.forEach(element =>{
        if(element.textContent.includes(search.value)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    } )
});
//counter 
var counter=0;
var card=document.getElementsByClassName('fa-cart-plus');
var bask=document.getElementById('counter');

for(let b=0 ;b<card.length;b++){
card[b].addEventListener('click',(e)=>{
    e.preventDefault();
    bask.style.display="flex";
    counter++;
    bask.innerHTML=counter;
    
}

)
}
// slider.index
// const booksize = document.querySelector('.slider-container-item .books-container').clientWidth;
const buttonRight = document.querySelectorAll('.slideRight');
const buttonLeft = document.querySelectorAll('.slideLeft');

buttonRight.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    element.parentElement.scrollLeft += 200;
  });
});

buttonLeft.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    element.parentElement.scrollLeft -= 200;
  });
});


