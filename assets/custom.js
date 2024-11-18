/*
 * Broadcast Theme
 *
 * Use this file to add custom Javascript to Broadcast.  Keeping your custom
 * Javascript in this fill will make it easier to update Broadcast. In order
 * to use this file you will need to open layout/theme.liquid and uncomment
 * the custom.js script import line near the bottom of the file.
 */

(function () {
  // Add custom code below this line
  // ^^ Keep your scripts inside this IIFE function call to
  // avoid leaking your variables into the global scope.
})();

document.querySelectorAll(".acc-content-block").forEach(function (block) {
  block.addEventListener("click", function () {
    document
      .querySelectorAll(".acc-content-block")
      .forEach(function (otherBlock) {
        otherBlock.classList.remove("tab-active");
      });
    document.querySelectorAll(".acc-content").forEach(function (content) {
      content.classList.remove("active");
    });
    if (this.classList.contains("tab-active")) {
      this.classList.remove("tab-active");
    } else {
      this.classList.add("tab-active");
    }
    const content = this.querySelector(".acc-content");
    if (content) {
      if (content.classList.contains("active")) {
        content.classList.remove("active");
      } else {
        content.classList.add("active");
      }
    }
  });
});

/*var coffee_mySwiper = new Swiper(".coffee-section .coffee-section-swiper-container", {
  spaceBetween: 20,
  slidesPerView: 3.2,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  navigation: {
    nextEl: ".coffee-section .swiper-button-next",
    prevEl: ".coffee-section .swiper-button-prev"
  },
  breakpoints: {
    1280: {
      slidesPerView: 3.2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    780: {
      slidesPerView: 2.4,
      spaceBetween: 20,
      centeredSlides: false,
    },
    525: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
  }
});*/

var new_slider_image_text = new Swiper(".content-image-slider", {
  slidesPerView: 1,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".content-button-next",
    prevEl: ".content-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.3,
      spaceBetween: 0,
    },
  },
});

// How Bright Mind Works
var bright_mySwiper = new Swiper(".bright-slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  centeredSlides: false,
  roundLengths: true,
  loop: true,
  navigation: {
    nextEl: ".bright-section .swiper-button-next",
    prevEl: ".bright-section .swiper-button-prev",
  },
  pagination: {
    el: ".slider-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 2.8,
      spaceBetween: 46,
    },
    1300: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
  },
});

const main_slider = new Swiper(".main-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".slider-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1028: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
  },
});

window.addEventListener("resize", function () {
  main_slider.update();
});

/* scrolling wise line scroll */

/*var items = document.querySelectorAll(".progressblock");
var timelineHeight = document.querySelector(".progress_container").offsetHeight;
var lineToDraw = document.querySelector(".draw-line");
var win_size = window.innerWidth;

if (lineToDraw) {
  window.addEventListener("scroll", function () {
    var redLineHeight = lineToDraw.offsetHeight;
    var windowDistance = window.pageYOffset;
    var windowHeight = window.innerHeight / 2;
    var timelineDistance = document.querySelector(".process-progress-box").offsetTop;

    items.forEach(function (item) {
      item.classList.remove("in-view");
    });

    if (windowDistance >= timelineDistance - windowHeight) {
      var line = windowDistance - timelineDistance + windowHeight;
      var mob_line = windowDistance - timelineDistance - windowHeight / 2.7;
      if (win_size <= 767) {
        lineToDraw.style.height = mob_line + "px";
      } else {
        lineToDraw.style.height = line + "px";
      }
      var bottom = lineToDraw.offsetTop + lineToDraw.offsetHeight;
      items.forEach(function (item) {
        if (win_size <= 767) {
          var circlePosition = item.offsetTop + 30;
          if (mob_line >= circlePosition) {
            item.classList.add("in-view");
          } else {
            item.classList.remove("in-view");
          }
        } else {
          var circlePosition = item.offsetTop + 15;
          if (line >= circlePosition) {
            item.classList.add("in-view");
          } else {
            item.classList.remove("in-view");
          }
        }
      });

      if (win_size <= 767) {
        if (mob_line <= 0) {
          items.forEach(function (item) {
            item.classList.remove("in-view");
          });
        }
      } else {
        if (line <= 0) {
          items.forEach(function (item) {
            item.classList.remove("in-view");
          });
        }
      }
    }
  });
}*/

// Match height
function matchHeights(selector) {
  const elements = document.querySelectorAll(selector);
  let maxHeight = 0;

  elements.forEach(element => {
    const height = element.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  elements.forEach(element => {
    element.style.minHeight = maxHeight + "px";
  });
}

// Match height
function matchHeights(selector) {
  const elements = document.querySelectorAll(selector);
  let maxHeight = 0;

  elements.forEach(element => {
    const height = element.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  elements.forEach(element => {
    element.style.minHeight = maxHeight + "px";
  });
}

// Match heights for various sections
setTimeout(() => {
  matchHeights(".icon-block");
  // matchHeights(".work-content");
  matchHeights(".selling_slider .scientifically_image img");
  matchHeights(".review_content");
  matchHeights(".design_content");
}, 100);

// Optionally, you can add an event listener for window resize
window.addEventListener('resize', () => {
  setTimeout(() => {
    matchHeights(".icon-block");
    // matchHeights(".work-content");
    matchHeights(".selling_slider .scientifically_image img");
    matchHeights(".review_content");
    matchHeights(".design_content");
  }, 100);
});

/*
// Match heights for various sections
matchHeights(".icon-block");
matchHeights(".work-content");
matchHeights(".selling_slider .scientifically_image img");
setTimeout(() => {
  matchHeights(".review_content");
  matchHeights(".design_content");
}, 100);

// Optionally, you can add an event listener for window resize
window.addEventListener('resize', () => {
  matchHeights(".icon-block");
  matchHeights(".work-content");
  matchHeights(".selling_slider .scientifically_image img");
  setTimeout(() => {
    matchHeights(".review_content");
    matchHeights(".design_content");
  }, 100);
});
*/

var items = document.querySelectorAll(".progressblock");
var timelineHeight = document.querySelector(".progress_container").offsetHeight;
var lineToDraw = document.querySelector(".draw-line");
var win_size = window.innerWidth;

if (lineToDraw) {
  window.addEventListener("scroll", function () {
    var redLineHeight = lineToDraw.offsetHeight;
    var windowDistance = window.pageYOffset;
    var windowHeight = window.innerHeight / 2;
    var timelineDistance = document.querySelector(
      ".process-progress-box"
    ).offsetTop;

    // Remove 'in-view' class from all items
    items.forEach(function (item) {
      item.classList.remove("in-view");
    });

    if (windowDistance >= timelineDistance - windowHeight) {
      var line = windowDistance - timelineDistance + windowHeight;
      var mob_line = windowDistance - timelineDistance - windowHeight / 2.7;

      if (win_size <= 767) {
        lineToDraw.style.height = mob_line + "px";
      } else {
        lineToDraw.style.height = line + "px";
      }

      var bottom = lineToDraw.offsetTop + lineToDraw.offsetHeight;

      items.forEach(function (item) {
        var circlePosition = item.offsetTop + (win_size <= 767 ? 30 : 15);

        if (
          (win_size <= 767 && mob_line >= circlePosition) ||
          (win_size > 767 && line >= circlePosition)
        ) {
          item.classList.add("in-view");

          // Remove 'in-view' class from siblings
          Array.from(item.parentNode.children).forEach(function (sibling) {
            if (sibling !== item) {
              sibling.classList.remove("in-view");
            }
          });
        } else {
          item.classList.remove("in-view");
        }
      });

      // Additional check for when the line goes below zero
      if ((win_size <= 767 && mob_line <= 0) || (win_size > 767 && line <= 0)) {
        items.forEach(function (item) {
          item.classList.remove("in-view");
        });
      }
    }
  });
}

/* Product Page Accordion js */
const accSingleTriggers = document.querySelectorAll(".js-acc-single-trigger");
accSingleTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleAccordion)
);

function toggleAccordion() {
  const items = document.querySelectorAll(".js-acc-item");
  const thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("is-open");
      return;
    }
    item.classList.remove("is-open");
  });
}


const sellingslider = new Swiper('.selling_slider', {
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  },
  autoplay: {
   delay: 2500,
   disableOnInteraction: false,
 },
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
});




$(document).ready(function () {
  var prev_slide =
    '<button class="swiper-button-prev"><svg width="34" height="9" viewBox="0 0 34 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.341759 4.82817C0.146496 4.6329 0.146496 4.31632 0.341759 4.12106L3.52374 0.939078C3.719 0.743816 4.03558 0.743816 4.23085 0.939078C4.42611 1.13434 4.42611 1.45092 4.23085 1.64618L1.40242 4.47461L4.23085 7.30304C4.42611 7.4983 4.42611 7.81488 4.23085 8.01015C4.03558 8.20541 3.719 8.20541 3.52374 8.01015L0.341759 4.82817ZM33.6953 4.97461L0.695313 4.97461L0.695312 3.97461L33.6953 3.97461L33.6953 4.97461Z" fill="#161616"/></svg></button>';
  var next_slide =
    '<button class="swiper-button-next"><svg width="35" height="9" viewBox="0 0 35 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.0489 4.82817C34.2441 4.6329 34.2441 4.31632 34.0489 4.12106L30.8669 0.939078C30.6716 0.743816 30.355 0.743816 30.1598 0.939078C29.9645 1.13434 29.9645 1.45092 30.1598 1.64618L32.9882 4.47461L30.1598 7.30304C29.9645 7.4983 29.9645 7.81488 30.1598 8.01015C30.355 8.20541 30.6716 8.20541 30.8669 8.01015L34.0489 4.82817ZM0.695312 4.97461L33.6953 4.97461L33.6953 3.97461L0.695313 3.97461L0.695312 4.97461Z" fill="#161616"/></svg></button>';
  $(".coffee-section-swiper-container").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: "105px",
    prevArrow: prev_slide,
    nextArrow: next_slide,
    infinite: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  });
});
