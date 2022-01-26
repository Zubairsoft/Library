function login(){
    document.getElementById("model2").style.display="none";
    document.getElementById("model").style.display="block";

}
function s_login(){
    document.getElementById("model").style.display="none";
    document.getElementById("model2").style.display="block";

}

var out=document.getElementById("out");

out.addEventListener('click',function(){

    
    document.getElementById("model").style.display="none";
    document.getElementById("model2").style.display="none";
});
// slaider code 
var slaider_img=document.querySelector(".slaidr-img");
var images=['book1.jpg','book2.jpg','book3.jpg','book4.jpg','book5.jpg','book7.jpg'];
var i=0 ;// current image index
function Prev(){

    if (i<=0) i=images.length;
    i--;
    return setImg();
}
function Next(){

    if(i>=images.length-1) i= -1;
    i++;
    return setImg();
}
function setImg(){
    return slaider_img.setAttribute('src','img/'+ images[i]);
}

// display slidebar
var display_slide=document.getElementById("display-slide");

display_slide.addEventListener('click',function(){

    document.getElementById('model-s').style.display="block";
})
var display_slide=document.getElementById("display-Slide");
display_slide.addEventListener('click',function(){

    document.getElementById('model-s').style.display="block";
})

// hidden models
let hidden=document.getElementById("display-h");
hidden.addEventListener("dblclick",function(){
    document.getElementById("model").style.display="none";
    document.getElementById("model2").style.display="none";
    document.getElementById('model-s').style.display="none";

})
