
function lange(){
    let lang=document.getElementsByTagName('link')[0];
    if(lang.getAttribute('href')=='css/ARB.CSS'){
        lang.setAttribute('href','css/ENG.css');
    }
 else if (lang.getAttribute('href')=='css/ENG.css'){
        lang.setAttribute('href','css/ARB.CSS');
    }

   
}
var slaider=document.querySelector(".head-imges");
var imag=['adv.jpg','bag.jpg','mobile.jpg','bags.jpg','mobile2.jpg'];
var ind=0 ;// current image index
function Pv(){

    if (ind<=0) ind=imag.length;
    ind--;
    return SetImg();
}
function Nt(){

    if(ind>=imag.length-1) ind= -1;
    ind++;
    return SetImg();
}
function SetImg(){
    return slaider.setAttribute('src','img/'+ imag[ind]);
}