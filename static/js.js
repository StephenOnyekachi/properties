

let bar = document.querySelector(".bar")
let menu = document.querySelector(".profile-left-menu")
bar.addEventListener('click', e =>{
    if(menu.classList == ('profile-left-menu')){
        menu.classList.add("profile-left-menu-active")
        console.log("click active")
    }else{
        menu.classList.remove("profile-left-menu-active")
        console.log("click not active")
    }
});

window.addEventListener('scroll', slide);
function slide(){
    var reavels = document.querySelectorAll('.slide');
    
    for(var i = 0; i < reavels.length; i++){

        var windowheight = window.innerHeight;
        var reaveltop = reavels[i].getBoundingClientRect().top;
        var reavelpoint = 60;

        if(reaveltop < windowheight - reavelpoint){
            reavels[i].classList.add('active');
        }
        else{
            reavels[i].classList.remove('active');
        }
    }
}


window.addEventListener('scroll', leftslide);
function leftslide(){
    var reavels = document.querySelectorAll('.leftslide');
    
    for(var i = 0; i < reavels.length; i++){

        var windowheight = window.innerHeight;
        var reaveltop = reavels[i].getBoundingClientRect().top;
        var reavelpoint = 60;

        if(reaveltop < windowheight - reavelpoint){
            reavels[i].classList.add('active');
        }
        else{
            reavels[i].classList.remove('active');
        }
    }
}


