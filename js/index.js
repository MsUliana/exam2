$('.header-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    fade: true,
    arrows: false
});

$(".scroll-icon").click(function () {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top
    },
        'slow');
});

function openModalMenu() {
    let x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



function lll() {
    console.log('hello');
}
// function scrollIcon() {
//     concole.log('je');
//     $('html,body').animate({
//         scrollTop: $(".projects").offset().top
//     },
//         'slow');
// }



$('.news-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slickArrow slickPrev d-flex justify-content-center align-items-center"><i class="fas fa-angle-left"></i></div>',
    nextArrow: '<div class="slickArrow slickNext d-flex justify-content-center align-items-center"><i class="fas fa-angle-right"></i></div>',
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});


$('.jump-link').click(function (event) {
    event.stopPropagation();
    event.preventDefault();
    let targetID = this.getAttribute('href');
    let targetElement = document.getElementById(targetID);
    $('html,body').animate({
        scrollTop: $(targetElement).offset().top
    },
        'slow');
    $(this).find('.small-circle').css("background-color", "white")
})

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navigation').addClass('bgcolorChange')
        }
        if ($(this).scrollTop() < 50) {
            $('.navigation').removeClass('bgcolorChange')
        }
    });
});



let centerX = 40.668071;
let centerY = -73.901376;

let markerX = 40.679687;
let markerY = -73.901376;


let zoom = 13;

let mymap = L.map('mapid').setView([centerX, centerY], zoom);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidWxpYW5hZHpvYmEiLCJhIjoiY2szb3FlYmhsMDFlMzNjcDBmdTB5OXI2YSJ9.P92WdjvZ1PxlMdk6iWDWlw', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidWxpYW5hZHpvYmEiLCJhIjoiY2szb3FlYmhsMDFlMzNjcDBmdTB5OXI2YSJ9.P92WdjvZ1PxlMdk6iWDWlw'
}).addTo(mymap);

let markerIcon = L.icon({
    iconUrl: './img/Pin.png',
    iconSize: [60, 60],
})

L.marker([markerX, markerY], { icon: markerIcon }).addTo(mymap)
    .bindPopup(`<div class="markerPopup"> Monticello International Group</div>`)
    .openPopup();
