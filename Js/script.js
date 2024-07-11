// dropdown
$(document).ready(function () {
  var $currentDropdown = null;

  function toggleDropdown($dropdown, action) {
    var $dropdownMenu = $dropdown.find(".dropdown-menu").first();

    if (action === "show") {
      $dropdownMenu.addClass("show");
      $dropdown.addClass("show");
      $dropdown.find(".dropdown-toggle").attr("aria-expanded", "true");
      $dropdownMenu.attr("data-bs-popper", "static");

      if ($currentDropdown && !$dropdown.is($currentDropdown)) {
        $currentDropdown.find(".dropdown-menu").removeClass("show");
        $currentDropdown.removeClass("show");
        $currentDropdown
          .find(".dropdown-toggle")
          .attr("aria-expanded", "false");
        $currentDropdown.find(".dropdown-menu").attr("data-bs-popper", "");
      }

      $currentDropdown = $dropdown;
    } else {
      $dropdownMenu.removeClass("show");
      $dropdown.removeClass("show");
      $dropdown.find(".dropdown-toggle").attr("aria-expanded", "false");
      $dropdownMenu.attr("data-bs-popper", "");

      $currentDropdown = null;
    }
  }

  $(".navbar .dropdown").hover(function () {
    toggleDropdown($(this), "show");
  });

  $(".navbar .dropdown-menu").hover(function () {
    if ($currentDropdown) {
      toggleDropdown($currentDropdown, "show");
    }
  });
});

// textChange
$(document).ready(function () {
  const changableText = $(".textTwo");

  const changeTextWithFade = (newText, delay) => {
    setTimeout(() => {
      changableText.removeClass("fade-in").addClass("fade-out");
      setTimeout(() => {
        changableText.text(newText);
        changableText.removeClass("fade-out").addClass("fade-in");
      }, 1000);
    }, delay);
  };

  const textChange = () => {
    changeTextWithFade("designers 🎨", 2000);
    changeTextWithFade("bloggers ✍🏻", 4000);
    changeTextWithFade("developers 👨🏻‍💻", 6000);
    changeTextWithFade("shops 🛍️", 8000);
    changeTextWithFade("creatives 👨🏻‍🎨", 10000);
    changeTextWithFade("vampires 🧛🏻", 12000);
  };

  textChange();
  setInterval(textChange, 12000);
});

//animateCounter
$(document).ready(function () {
  function animateCounter($element, end, duration) {
    $element.prop("Counter", 0).animate(
      {
        Counter: end,
      },
      {
        duration: duration,
        easing: "swing",
        step: function (now) {
          $element.text(Math.ceil(now));
        },
        complete: function () {
          $element.text(end);
        },
      }
    );
  }

  $("#number3").each(function () {
    animateCounter($(this), 10, 2000);
  });

  $("#number2").each(function () {
    animateCounter($(this), 1, 2000);
  });

  $("#number1").each(function () {
    animateCounter($(this), 5000, 2000);
  });

  $("#number").each(function () {
    animateCounter($(this), 170, 2000);
  });
});

// imgScroolEffect
$(document).ready(function () {
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    var diff = st - lastScrollTop;
    var translate1 = diff > 0 ? -Math.abs(diff) : Math.abs(diff);
    var translate2 = diff > 0 ? -Math.abs(diff * 1.5) : Math.abs(diff * 1.5);
    var translate3 = diff > 0 ? Math.abs(diff * 5.5) : -Math.abs(diff * 5.5);

    var translate4 = diff > 0 ? Math.abs(diff * 2.5) : -Math.abs(diff * 2.5);
    var translate5 = diff > 0 ? Math.abs(diff * 3.5) : -Math.abs(diff * 3.5);
    var translate6 = diff > 0 ? Math.abs(diff * 5.5) : -Math.abs(diff * 10.5);
    var translate7 = diff > 0 ? Math.abs(diff * 2.5) : -Math.abs(diff * 8.5);

    $(".motion-img1").css("transform", "translateY(" + translate2 + "px)");
    $(".motion-img2").css("transform", "translateY(" + translate1 + "px)");
    $(".motion-img3").css("transform", "translateY(" + translate3 + "px)");

    $(".motion-img4").css("transform", "translateY(" + translate4 + "px)");
    $(".motion-img5").css("transform", "translateY(" + translate5 + "px)");
    $(".motion-img6").css("transform", "translateY(" + translate6 + "px)");
    $(".motion-img7").css("transform", "translateY(" + translate7 + "px)");

    lastScrollTop = st;
  });
});

// 3dText
$(document).ready(function () {
  $(".text-3d").mousemove(function (event) {
    const $this = $(this);
    const width = $this.width();
    const height = $this.height();
    const mouseX = event.pageX - $this.offset().left;
    const mouseY = event.pageY - $this.offset().top;

    const rotateY = ((mouseX - width / 2) / width) * 10;
    const rotateX = (-(mouseY - height / 2) / height) * 10;

    $this.css("transform", `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`);
  });

  $(".text-3d").mouseleave(function () {
    $(this).css("transform", "rotateY(0) rotateX(0)");
  });
});

// Initialize the carousel
let common = {
  items: 4,
  autoplay: true,
  autoplayTimeout: 800,
  nav: false,
  controlsPosition: "bottom",
  axis: "vertical",
  autoplayHoverPause: true,
  swipeAngle: false,
  speed: 200,
  controls: false,
};

let slider1 = tns({
  ...common,
  container: ".sliderUp",
  autoplayDirection: "backward",
  responsive: {
    576: {
      autoplayDirection: "forward",
    },
  },
});
let slider2 = tns({
  ...common,
  container: ".sliderDown",
  autoplayDirection: "forward",
  responsive: {
    576: {
      autoplayDirection: "backward",
    },
  },
});
let slider3 = tns({
  ...common,
  container: ".sliderUp1",
  autoplayDirection: "backward",
  responsive: {
    576: {
      autoplayDirection: "forward",
    },
  },
});
let slider4 = tns({
  ...common,
  container: ".sliderDown1",
  autoplayDirection: "forward",
  responsive: {
    576: {
      autoplayDirection: "backward",
    },
  },
});
