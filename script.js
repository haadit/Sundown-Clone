const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Anim(){
    var elemC = document.querySelector("#elem-container");
var fimg = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter",function(){
    fimg.style.display = "block";
})

elemC.addEventListener("mouseleave",function(){
    fimg.style.display = "none";
})

var elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-img");
        fimg.style.backgroundImage = `url(${image})`
    })
})
}

page4Anim();

function swiperAnim(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}

swiperAnim();

function menuAnime(){
    var menu = document.querySelector("#nav1 h3");
var fscr = document.querySelector("#full-scr");
var navimg = document.querySelector("#nav1 img");
var fh3 = document.querySelector("#full-div1 h3");
var flag=0;
menu.addEventListener("click",function(){
    if(flag==0){
        fscr.style.top = 0;
        navimg.style.opacity = 0;
        flag=1;
    }
    else{
        fscr.style.top = "-100%";
        navimg.style.opacity = 1;
        flag=0;
    }
})
}

menuAnime();

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

loaderAnimation();