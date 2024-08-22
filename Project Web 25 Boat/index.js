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
    slidesPerView: 4.5,
    spaceBetween: 30,
})

jQuery(document).ready(function () {
    var mySwiper = new Swiper('.mySwiper1', {
        slidesPerView: 1,
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



// top picks for you

document.querySelectorAll('.toggleDiv').forEach(item => {
    item.addEventListener('click', function () {
        // Hide all content divs
        document.querySelectorAll('.contentDiv').forEach(div => {
            div.style.display = 'none';
        });

        // Show the targeted content div
        let targetDiv = document.getElementById(this.getAttribute('data-target'));
        if (targetDiv) {
            targetDiv.style.display = 'block';
        }
    });
});

const toggleDivs = document.querySelectorAll('.toggleDiv');

toggleDivs.forEach(function (toggleDiv) {
    toggleDiv.addEventListener('click', function () {
        toggleDivs.forEach(function (div) {
            div.classList.remove('active');
        });
        this.classList.add('active');
    });
});

window.addEventListener("DOMContentLoaded", () => {
    loadCartItems();
    updateTotalAmount();

    document.querySelectorAll(".addToCartButton").forEach(button => {
        button.addEventListener("click", function () {
            const productDiv = button.closest('.products1');
            const productImage = productDiv.querySelector('img').src;
            const productName = productDiv.querySelector('p.font-bold').innerText;
            const productPrice = parseFloat(productDiv.querySelector('.price').innerText.replace('₹', '').replace(',', ''));

            addToCart(productImage, productName, productPrice);
            saveCartItem(productImage, productName, productPrice);
            updateTotalAmount();
        });
    });
});

function addToCart(image, name, price) {
    const itemDiv = document.getElementById("addToCart");    

    const cartItemDiv = document.createElement("div");
    cartItemDiv.style.marginBottom = "10px";
    cartItemDiv.className = "cardItemDiv";

    const cardImageDiv = document.createElement("div");
    cardImageDiv.className = "cardimageDiv";

    const productImage = document.createElement("img");
    productImage.src = image;
    productImage.className = "productImage";
    cardImageDiv.append(productImage);

    const productName = document.createElement("p");
    productName.className = "productName";
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.className = "productPrice";
    productPrice.innerText = `₹${price.toLocaleString()}`;

    const cardTextDiv = document.createElement("div");
    cardTextDiv.className = "cardtextDiv";
    cardTextDiv.append(productName, productPrice);

    const productRemoveDiv = document.createElement("div");
    productRemoveDiv.className = "productRemoveDiv";
    const removeButton = document.createElement("i");
    removeButton.classList = "fa-regular fa-trash-can";
    productRemoveDiv.append(removeButton);

    cartItemDiv.append(cardImageDiv, cardTextDiv, productRemoveDiv);
    itemDiv.append(cartItemDiv);

    removeButton.addEventListener("click", function () {
        cartItemDiv.remove();
        removeCartItemFromStorage(name, price);
        updateTotalAmount();
    });
}

function removeCartItemFromStorage(name, price) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const index = cartItems.findIndex(item => item.name === name && item.price === price);
    if (index !== -1) cartItems.splice(index, 1); // Remove only the specific item
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function saveCartItem(image, name, price) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ image, name, price });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.forEach(item => {
        addToCart(item.image, item.name, item.price);
    });
}

function updateTotalAmount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalAmount = 0;
    cartItems.forEach(item => {
        totalAmount += item.price;
    });
    document.getElementById("totalAmount").innerText = `Total: ₹${totalAmount.toLocaleString()}`;
}


// order place

document.getElementById("confirom_button").addEventListener("click" , function(){
    
    const confirom_div = document.createElement("div")

})