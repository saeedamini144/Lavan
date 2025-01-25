

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

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let container = document.querySelector("body");

let height;
function setHeight() {
  height = container.clientHeight;
  document.body.style.height = height + "px";
}
ScrollTrigger.addEventListener("refreshInit", setHeight);

// smooth scrolling container
gsap.to(container, {
  y: () => -(height - document.documentElement.clientHeight),
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    invalidateOnRefresh: true
  }
});


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

let ResponsiveSectionOne = gsap.matchMedia();

ResponsiveSectionOne.add("(min-width: 769px)", () => {
  const SectionOne = gsap.timeline({
    scrollTrigger: {
      trigger: ".First-section",
      pin: ".main-card-scroll", // پین کردن سکشن کارت‌ها
      start: "middle middle", // شروع پین از ابتدای سکشن
      end: "bottom bottom", // مدت زمان پین (به درصد ارتفاع سکشن)
      scrub: 1.5, // حرکت نرم با اسکرول
      stagger: 0.5, 
      markers: true, // نمایش مارکر برای تست
    },
    defaults: {
      duration: 1,
      ease: "power1.out",
    },
  });
  // انیمیشن برای کارت اول
  SectionOne
  // .to(".main-card-scroll" , {
  //   paddingTop:200,
  // })
  .to(".card:nth-child(1)", {
    x: 0, // جابجایی در محور X
    y:0,
    margin:5,
    scale: 1, // تغییر اندازه
  })

  // انیمیشن برای کارت دوم
.to(".card:nth-child(2)", {
    x: 0,
    y:0,
    margin:5,
    scale: 1, // تغییر اندازه    
  })

  // انیمیشن برای کارت چهارم (در مرکز قرار بگیرد)
  .to(".card:nth-child(4)", {
    x: 0,
    y:0,
    margin:5,
    scale: 1, // تغییر اندازه 
     })
   // انیمیشن برای کارت پنجم (در مرکز قرار بگیرد)
   .to(".card:nth-child(5)", {
    x: 0,
    y:0,
    margin:5,
    scale: 1, // تغییر اندازه 
    });
});



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