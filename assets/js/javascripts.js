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

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// let container = document.querySelector("body");

// let height;
// function setHeight() {
//   height = container.scrollHeight; // Use scrollHeight instead of clientHeight
//   document.body.style.height = height + "px";
// }
// ScrollTrigger.addEventListener("refreshInit", setHeight);

// smooth scrolling container
// gsap.to(container, {
//   y: () => -(height - document.documentElement.clientHeight),
//   ease: "none",
//   scrollTrigger: {
//     trigger: document.body,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: 1,
//     invalidateOnRefresh: true
//   }
// });


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
      pin: true,
      // pin: ".main-card-scroll", // پین کردن سکشن کارت‌ها
      start: "top top", // شروع پین از ابتدای سکشن
      end: "+=100%", // مدت زمان پین (به درصد ارتفاع سکشن)
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
      y: 0,
      margin: 5,
      scale: 1, // تغییر اندازه
    })

    // انیمیشن برای کارت دوم
    .to(".card:nth-child(2)", {
      x: 0,
      y: 0,
      margin: 5,
      scale: 1, // تغییر اندازه    
    })

    // انیمیشن برای کارت چهارم (در مرکز قرار بگیرد)
    .to(".card:nth-child(4)", {
      x: 0,
      y: 0,
      margin: 5,
      scale: 1, // تغییر اندازه 
    })
    // انیمیشن برای کارت پنجم (در مرکز قرار بگیرد)
    .to(".card:nth-child(5)", {
      x: 0,
      y: 0,
      margin: 5,
      scale: 1, // تغییر اندازه 
    });
});

let ResponsiveSectionThree = gsap.matchMedia();
ResponsiveSectionThree.add("(min-width: 769px)", () => {
  const SectionThree = gsap.timeline({
    scrollTrigger: {
      trigger: ".Third-section",
      pin: true,
      start: "top top",
      end: "+=100%",
      // end: 'bootom bottom',
      scrub: 1, // Reduced scrub value for smoother scrolling
      stagger: 0.5,
      markers: true,
      // pinSpacing: false, // Ensure the section stays pinned until the animation ends
    },
    defaults: {
      duration: 5, // Reduced duration for smoother animations
      ease: "slow(1,1,false)", // Changed ease for smoother effect
    },
  });
  SectionThree
    .to(".to-right", {
      x: 0,
    })
    .to(".to-left", {
      x: 0,
    })
    .to(".to-right-2", {
      x: 0,
    })
    .to(".to-left-2", {
      x: 0,
    })
    .to(".to-right-3", {
      x: 0,
    })
    .to(".to-left-3", {
      x: 0,
    });
});

let ResponsiveSectionFour = gsap.matchMedia();
ResponsiveSectionFour.add("(min-width: 769px)", () => {
  const SectionFour = gsap.timeline({
    scrollTrigger: {
      trigger: ".Fourth-section",
      pin: true,
      start: "top top",
      end: "+=100%",
      scrub: 1,
      stagger: 0.5,
      markers: true,
    },
    defaults: {
      duration: 1,
      ease: "power1.out",
    },
  });
  SectionFour
    .to(".advantage-section", {
      x: 0,
    });
});

// دریافت تمامی چایلد ها به صورت یکچا با عث کاهش میزان کد می شود
// document.querySelectorAll(".Second-section .child").forEach((child, index) => {
//   SectionTwo.to(child, {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     delay: index * 0.2, // تاخیر برای هر چایلد
//   });
// });
// });


// const horizontalSections = gsap.utils.toArray('section.horizontal')

// horizontalSections.forEach(function (sec, i) {

//   var thisPinWrap = sec.querySelector('.pin-wrap');
//   var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

//   var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

//   gsap.fromTo(thisAnimWrap, {
//     x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
//   }, {
//     x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
//     ease: "none",
//     scrollTrigger: {
//       trigger: sec,
//       start: "top top",
//       end: () => "+=100%" + (thisAnimWrap.scrollWidth - window.innerWidth),
//       pin: thisPinWrap,
//       invalidateOnRefresh: true,
//       //anticipatePin: 1,
//       scrub: true,
//       //markers: true,
//     }
//   });

// });


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
document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.drop-toggle');

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (event) {
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