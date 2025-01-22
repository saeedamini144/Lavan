

// off canvas button
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const offcanvasMenu = document.querySelector(".offcanvas-menu");
  const dropdowns = document.querySelectorAll(".dropdown, .drop-submenu");

  // نمایش و پنهان‌سازی منو
  burgerMenu.addEventListener("click", () => {
    offcanvasMenu.style.right =
      offcanvasMenu.style.right === "0px" ? "-100%" : "0px";
  });

  // بستن اف کانواس وقتی خارج از آن کلیک شد
  document.addEventListener("click", (event) => {
    if (!offcanvasMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
      offcanvasMenu.style.right = "-100%";
    }
  });

  // باز کردن زیر منوها
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".menu-link, .drop-item");
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      dropdown.classList.toggle("open");
    });
  });
});
//animation gsap
const CircleImage = document.querySelectorAll('.circleimg');
if (typeof gsap !== 'undefined') {
  CircleImage.forEach((img) => {
    const animation = gsap.to(img, {
      opacity: 0.5,
      duration: 0.4,
      rotate: -25,
      paused: true,
    });

    img.addEventListener('mouseover', () => animation.play());
    img.addEventListener('mouseout', () => animation.reverse());
  });
}




// saerch button
  $('.search').click(function () {
    $('.search-box').css('width', '100%');
    $('.search-box').css('opacity', '1');
    $('.search-box input').focus();
})
$('.search-box .close').click(function () {
    $('.search-box').css('width', '0');
    $('.search-box').css('opacity', '0');
})
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
  document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.drop-toggle');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();
            var submenu = this.nextElementSibling;
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
});