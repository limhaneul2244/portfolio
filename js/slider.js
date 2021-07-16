
// 사진 슬라이드
$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });
});

//MY WORK, STUDY slide
// $(document).ready(function () {
//     var owl = $('.owl-carousel1');
//     owl.owlCarousel({
//         items:3,
//         loop:true,
//         margin:15,
//         autoplay:true,
//         // autoplayTimeout:1500, //자동스크롤 시간 간격
//         autoplayHoverPause:true //마우스 hover시 자동 스크롤 일시 정지
//     });
//     $('.play').on('click',function(){
//         owl.trigger('play.owl.autoplay')
//     })
//     $('.stop').on('click',function(){
//         owl.trigger('stop.owl.autoplay')
//     })
// });