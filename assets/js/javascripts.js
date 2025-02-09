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
      // markers: true, // نمایش مارکر برای تست
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
      end: "+=800%", // افزایش مقدار برای نگه داشتن بیشتر در این سکشن
      scrub: 1, // همگام‌سازی بهتر اسکرول و انیمیشن
      pinSpacing: true, // جلوگیری از نمایش زودهنگام سکشن بعدی
      anticipatePin: 1, // بهینه‌سازی حرکت پین‌شدن
    },
    defaults: {
      duration: 2,
      ease: "power3.out", // بهبود روان بودن حرکت
    },
  });

  SectionThree
    .to(".to-right", { x: 0 }, "-=1.3")
    .to(".to-left", { x: 0 }, "-=1")
    .to(".to-right-2", { x: 0 }, "-=1.2")
    .to(".to-left-2", { x: 0 }, "-=1.5")
    .to(".to-right-3", { x: 0 }, "-=1.4")
    .to(".to-left-3", { x: 0 }, "-=2");

});


let ResponsiveSectionFour = gsap.matchMedia();
ResponsiveSectionFour.add("(min-width: 769px)", () => {
  const SectionFour = gsap.timeline({
    scrollTrigger: {
      trigger: ".Fourth-section",
      pin: true,
      pinSpacing: true, // جلوگیری از نمایش زودهنگام سکشن بعدی
      anticipatePin: 1, // بهینه‌سازی حرکت پین‌شدن
      start: "top top",
      end: "+=800%",
      scrub: 1,
      // markers: true,
    },
    defaults: {
      duration: 2,
      ease: "power1.out",
    },
  });
  SectionFour
    .to(".advantage-section", {
      x: 0,
    }, "-=1.3");
});

// const BlogCard = document.querySelector(".Blog-card");
let ResponsiveSectionFive = gsap.matchMedia();
ResponsiveSectionFive.add("(min-width : 769px)", () => {
  const SectionFive = gsap.timeline({
    scrollTrigger: {
      trigger: ".Fifth-section",
      pin: true,
      pinSpacing: true, // جلوگیری از نمایش زودهنگام سکشن بعدی
      anticipatePin: 1, // بهینه‌سازی حرکت پین‌شدن
      start: "top top", // Start the animation when the top of the element is 80% from the top of the viewport
      end: "+=250%", // End the animation when the bottom of the element reaches the top of the viewport
      scrub: 1, // Smooth scrubbing
    },
    defaults: {
      duration: 2,
      ease: "power1.out",
    }
  });
  SectionFive.from(".Blog-card", {
    y: -50,
    opacity: 0,
    stagger: 0.5,
  });
});


// نمایش خدمات به صورت استیکی
// gsap.registerPlugin(ScrollTrigger);

// // انیمیشن تصاویر
// gsap.utils.toArray('.services-card-img').forEach((image, index) => {
//   gsap.from(image, {
//     opacity: 0,
//     x: 100, // حرکت به سمت راست
//     scrollTrigger: {
//       trigger: image,
//       start: "top 75%", // وقتی بالای تصویر به 75% از صفحه رسید
//       end: "bottom top", // وقتی پایین تصویر به بالای صفحه رسید
//       scrub: 1, // اسکرول به آرامی انیمیشن را به جلو و عقب می‌برد
//       toggleActions: "play none none none"
//     }
//   });
// });

// // انیمیشن متن‌ها
// gsap.utils.toArray('.services-card-body').forEach((textBlock, index) => {
//   gsap.from(textBlock, {
//     opacity: 0,
//     y: 50, // حرکت از پایین
//     scrollTrigger: {
//       trigger: textBlock,
//       start: "top 80%", // شروع انیمیشن وقتی که بالا به 80% صفحه رسید
//       end: "bottom top",
//       scrub: 1, // اسکرول باعث حرکت انیمیشن می‌شود
//       toggleActions: "play none none none"
//     }
//   });
// });
// نمایش خدمات به صورت استیکی


// gsap.registerPlugin(ScrollTrigger);

// const images = document.querySelectorAll(".image");
// const texts = document.querySelectorAll(".text-block");
// const stickySection = document.querySelector(".sticky-section");

// // ایجاد تایم‌لاین برای پین کردن بخش
// gsap.timeline({
//   scrollTrigger: {
//     trigger: stickySection,
//     start: "top top",
//     end: "bottom bottom",
//     pin: true,
//     scrub: true,
//   },
//   defaults: {
//     duration: 1,
//     ease: "power1.out",
//   },
// });

// // برای هر متن و تصویر که باید فعال بشه
// texts.forEach((text, index) => {
//   ScrollTrigger.create({
//     trigger: stickySection,
//     start: `top+=${index * 100} bottom`, // تغییر برای هر تصویر به صورت جداگانه
//     end: `top+=${(index + 1) * 100} bottom`,
//     onEnter: () => {
//       // حذف کلاس‌های فعال از تمام تصاویر و متن‌ها
//       images.forEach(img => img.classList.remove("active"));
//       texts.forEach(txt => txt.classList.remove("active"));

//       // افزودن کلاس فعال به تصویر و متن فعلی
//       images[index].classList.add("active");
//       text.classList.add("active");
//     },
//     onEnterBack: () => {
//       // انجام عملیات مشابه در هنگام برگشت به عقب
//       images.forEach(img => img.classList.remove("active"));
//       texts.forEach(txt => txt.classList.remove("active"));

//       images[index].classList.add("active");
//       text.classList.add("active");
//     }
//   });
// });


// ScrollTrigger.create({
//   trigger: stickySection,
//   start: "top top",
//   end: "bottom bottom",
//   pin: true,
//   scrub: true,
// });

// texts.forEach((text, index) => {
//   ScrollTrigger.create({
//     trigger: stickySection,
//     start: "top top",
//     end: "bottom bottom",
//     onEnter: () => {
//       images.forEach(img => img.classList.remove("active"));
//       texts.forEach(txt => txt.classList.remove("active"));

//       images[index].classList.add("active");
//       text.classList.add("active");
//     },
//     onEnterBack: () => {
//       images.forEach(img => img.classList.remove("active"));
//       texts.forEach(txt => txt.classList.remove("active"));

//       images[index].classList.add("active");
//       text.classList.add("active");
//     }
//   });
// });

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