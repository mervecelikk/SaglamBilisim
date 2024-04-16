// YORUMLAR 
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 2
        },
        1440: {
            items: 3
        }
    }

})



// Scroll to anchor and open accordion panel 
document.querySelectorAll
    ('a[data-bs-toggle="collapse"]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let target =
                document.querySelector(this.getAttribute('href'));
            let accordion =
                document.querySelector(this.getAttribute('data-bs-target'));

            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800);

            $(accordion).collapse('show');
        });
    });



// GERİ SAYIM VE SAYFAYA YÖNLENDİRME

// Buraya kaç saniyelik bir geri sayım yapmak istediğinizi yazıyorsunuz //
var zaman = 7
function gerisayim() {
    if (zaman != 0) {
        zaman -= 1
        document.getElementById('sayac').innerHTML = zaman
    }
    else {
        // Süre bittiğinde gerçekleşecek işlemler //
        window.location.href = "index.html"; // Buraya adres gelecek örn. http://www.saglamkredi.com veya /anasayfa.html gibi //

        return
    }
    setTimeout("gerisayim()", 1000)
}
gerisayim()



// Menu-item active

const pages = document.querySelectorAll(".menu-item");

pages.forEach((item) => {
    item.addEventListener('click', active_item);
})

function active_item() {
    pages.forEach((item) => {
        item.classList.remove('is-active');
    });
    this.classList.add('is-active');
}




