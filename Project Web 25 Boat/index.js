var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    autoplayspeed: 1000,
    speed: 1000,
    loop: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

var swiper = new Swiper(".mySwiper1", {
    autoplay: true,
    autoplayspeed: 1000,
    speed: 1000,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
})    

jQuery(document).ready(function () {
    var mySwiper = new Swiper('.mySwiper1', {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
            '480': {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '1024': {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            '1280': {
                slidesPerView: 4.5,
                spaceBetween: 40,
            },
        },
        
        freeMode: true,
        loop: false,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })

});


var countDownDate = new Date("Aug 10, 2024 24:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var day = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);



    document.getElementById("days").innerHTML = day
    document.getElementById("hours").innerHTML = hour
    document.getElementById("minutes").innerHTML = minute
    document.getElementById("seconds").innerHTML = second

    if (distance < 0) {
        clearInterval(x)

        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML = "00"
        document.getElementById("minutes").innerHTML = "00"
        document.getElementById("seconds").innerHTML = "00"
    }
}, 1000)

document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("item_data").style.display = "block"
})

document.getElementById("closes").addEventListener("click", function () {
    document.getElementById("item_data").style.display = "none"
})

document.getElementById("change").addEventListener("click", function () {

    document.getElementById("change1").style.border = "0px solid #f3c734"
    document.getElementById("change").style.border = "3px solid #f3c734"

    const newImage = document.getElementById('img1');
    if (newImage.src.includes('Asset/Image/2.avif')) {
        newImage.src = 'Asset/Image/1.avif';
    }
    const newText = document.getElementById("span1").innerText = "Ivory White"

})


document.getElementById("change1").addEventListener("click", function () {

    document.getElementById("change1").style.border = "3px solid #f3c734"
    document.getElementById("change").style.border = "0px solid #f3c734"
    const newImage = document.getElementById('img1');
    if (newImage.src.includes('Asset/Image/1.avif')) {
        newImage.src = 'Asset/Image/2.avif';
    }
    const newText = document.getElementById("span1").innerText = "Charcoal Black"

})



document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("item_data1").style.display = "block"
})

document.getElementById("closes1").addEventListener("click", function () {
    document.getElementById("item_data1").style.display = "none"
})



document.getElementById("change2").addEventListener("click", function () {
    document.getElementById("change3").style.border = "0px solid #f3c734"
    document.getElementById("change2").style.border = "3px solid #f3c734"
    document.getElementById("change4").style.border = "0px solid #f3c734"
    const newImage1 = document.getElementById('img2');
    newImage1.src = 'Asset/Image/32011675-2ad8-4b99-9787-895caf201d28_228x.avif';
    const newText = rutuldocument.getElementById("span2").innerText = "Light Pink"
})

document.getElementById("change3").addEventListener("click", function () {
    document.getElementById("change3").style.border = "3px solid #f3c734"
    document.getElementById("change2").style.border = "0px solid #f3c734"
    document.getElementById("change4").style.border = "0px solid #f3c734"
    document.getElementById("change5").style.border = "0px solid #f3c734"
    document.getElementById("change6").style.border = "0px solid #f3c734"
    const newImage1 = document.getElementById('img2');
    newImage1.src = 'Asset/Image/c2386af9-4349-432f-8ba5-2b6aa06025c8_228x.avif';
    const newText = document.getElementById("span2").innerText = "Charcoal Black"
})

document.getElementById("change4").addEventListener("click", function () {
    document.getElementById("change4").style.border = "3px solid #f3c734"
    document.getElementById("change3").style.border = "0px solid #f3c734"
    document.getElementById("change2").style.border = "0px solid #f3c734"
    document.getElementById("change5").style.border = "0px solid #f3c734"
    document.getElementById("change6").style.border = "0px solid #f3c734"
    const newImage1 = document.getElementById('img2');
    newImage1.src = 'Asset/Image/ivory-white_228x.avif';
    const newText = document.getElementById("span2").innerText = "Ivory White"
})

document.getElementById("change5").addEventListener("click", function () {
    document.getElementById("change4").style.border = "0px solid #f3c734"
    document.getElementById("change3").style.border = "0px solid #f3c734"
    document.getElementById("change2").style.border = "0px solid #f3c734"
    document.getElementById("change5").style.border = "3px solid #f3c734"
    document.getElementById("change6").style.border = "0px solid #f3c734"
    const newImage1 = document.getElementById('img2');
    newImage1.src = 'Asset/Image/cream_228x.avif';
    const newText = document.getElementById("span2").innerText = "Crimson Cream"
})

document.getElementById("change6").addEventListener("click", function () {
    document.getElementById("change4").style.border = "0px solid #f3c734"
    document.getElementById("change3").style.border = "0px solid #f3c734"
    document.getElementById("change2").style.border = "0px solid #f3c734"
    document.getElementById("change5").style.border = "0px solid #f3c734"
    document.getElementById("change6").style.border = "3px solid #f3c734"
    const newImage1 = document.getElementById('img2');
    newImage1.src = 'Asset/Image/viper-green_228x.avif';
    const newText = document.getElementById("span2").innerText = "Viper Green"
})

document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("item_data2").style.display = "block"
})

document.getElementById("closes2").addEventListener("click", function () {
    document.getElementById("item_data2").style.display = "none"
})



document.getElementById("change7").addEventListener("click", function () {
    document.getElementById("change8").style.border = "0px solid #f3c734"
    document.getElementById("change7").style.border = "3px solid #f3c734"
    document.getElementById("change9").style.border = "0px solid #f3c734"
    document.getElementById("change10").style.border = "0px solid #f3c734"
    document.getElementById("change11").style.border = "0px solid #f3c734"
    const newImage1 = document.getElementById('img3');
    newImage1.src = 'Asset/Image/main_black_fa1c6ec3-93b7-443e-ae82-d5eeb34258f8_228x.avif';
    const newText = rutuldocument.getElementById("span3").innerText = "Pebble Black"
})

document.getElementById("change8").addEventListener("click", function () {
    document.getElementById("change8").style.border = "3px solid #f3c734"
    document.getElementById("change7").style.border = "0px solid #f3c734"
    document.getElementById("change9").style.border = "0px solid #f3c734"
    document.getElementById("change10").style.border = "0px solid #f3c734"
    document.getElementById("change11").style.border = "0px solid #f3c734"
    const newImage1 = document.getElementById('img3');
    newImage1.src = 'Asset/Image/A161PP.386_228x.avif';
    const newText = document.getElementById("span3").innerText = "Thunder Blue"
})

document.getElementById("change9").addEventListener("click", function () {
    document.getElementById("change9").style.border = "3px solid #f3c734"
    document.getElementById("change8").style.border = "0px solid #f3c734"
    document.getElementById("change7").style.border = "0px solid #f3c734"
    document.getElementById("change10").style.border = "0px solid #f3c734"
    document.getElementById("change11").style.border = "0px solid #f3c734"
    const newImage1 = document.getElementById('img3');
    newImage1.src = 'Asset/Image/main_white_228x.avif';
    const newText = document.getElementById("span3").innerText = "Pearl White"
})

document.getElementById("change10").addEventListener("click", function () {
    document.getElementById("change9").style.border = "0px solid #f3c734"
    document.getElementById("change8").style.border = "0px solid #f3c734"
    document.getElementById("change7").style.border = "0px solid #f3c734"
    document.getElementById("change10").style.border = "3px solid #f3c734"
    document.getElementById("change11").style.border = "0px solid #f3c734"
    const newImage1 = document.getElementById('img3');
    newImage1.src = 'Asset/Image/161Greenmainimage_228x.avif';
    const newText = document.getElementById("span3").innerText = "Olive Green"
})

document.getElementById("change11").addEventListener("click", function () {
    document.getElementById("change9").style.border = "0px solid #f3c734"
    document.getElementById("change8").style.border = "0px solid #f3c734"
    document.getElementById("change7").style.border = "0px solid #f3c734"
    document.getElementById("change10").style.border = "0px solid #f3c734"
    document.getElementById("change11").style.border = "3px solid #f3c734"
    const newImage1 = document.getElementById('img3');
    newImage1.src = 'Asset/Image/main_blue_a80b6882-1247-439d-a17b-1c87ed4fa7c8_228x.avif';
    const newText = document.getElementById("span3").innerText = "Cool Sapphire"
})


const hoverVideos = document.querySelectorAll('.hover-video');

hoverVideos.forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
    });
});
