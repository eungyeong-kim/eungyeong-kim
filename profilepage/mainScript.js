$(document).ready(function() {
    // fullpage.js 초기화
    $('#fullpage').fullpage({
        autoScrolling: true,  // fullpage.js 옵션 설정
        //navigation: true,
        afterRender: function() {
            var textWrapper = $('.TitleAni');
            if (textWrapper.length > 0) {
                textWrapper.html(textWrapper.text().replace(/\S/g, "<span class='TitleAnimation'>$&</span>"));

                anime.timeline({loop: true})
                    .add({
                        targets: '.TitleAnimation',
                        scale: [0.3, 1],
                        opacity: [0, 1],
                        translateZ: 0,
                        easing: "easeOutExpo",
                        duration: 500,
                        delay: (el, i) => 70 * (i + 1)
                    }).add({
                        targets: '.TitleAnimation',
                        opacity: 0,
                        duration: 700,
                        easing: "easeOutExpo",
                        delay: 700
                    });
            } else {
                console.error("Element with class 'TitleAni' not found.");
            }
        infiniteAnimation();                    
        }
    });
});

function infiniteAnimation(){
    anime({
        targets: ".infinite",
        translateX: 250,
        duration: 1000,
        easing: 'easeInOutQuad',
        loop: true
    })
}
