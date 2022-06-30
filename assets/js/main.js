$(document).ready(function() {
    $('.logo-carousel').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});
$(function () {
$(document).scroll(function () {
var $nav = $(".nav-wrapper");
$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
});

function toggleTesti(bol){
    var items=document.querySelectorAll('.testi-item');
    var currentIndex=0;
    var itemLength=items.length-1;
    var indices=[]
    for (var i = 0; i < items.length; i++) {
        if(items[i].classList.contains('current')){
            currentIndex=i;
        }
        items[i].classList.remove('current');
        items[i].classList.remove('next');
        items[i].classList.remove('previous');
    }
    if(bol==1){
        indices=findNextIndex(itemLength,currentIndex);
    }else{
        indices=findPrvIndex(itemLength,currentIndex);
    }
    items[indices[0]].classList.add('previous');
    items[indices[1]].classList.add('current');
    items[indices[2]].classList.add('next');
}
function findNextIndex(length,currentIndex){
    if(currentIndex==length){
        return [length,0,1]
    }else if(currentIndex+1==length){
        return [length-1,length,0]
    }else if(currentIndex==0){
        return [0,1,2]
    }else{
        return [currentIndex,currentIndex+1,currentIndex+2]
    }
}
function findPrvIndex(length,currentIndex){
    if(currentIndex==length){
        return [currentIndex-2,currentIndex-1,currentIndex]
    }else if(currentIndex==0){
        return [length-1,length,0]
    }else if(currentIndex==1){
        return [length,0,1]
    }else{
        return [currentIndex-2,currentIndex-1,currentIndex]
    }
}

new WOW().init();