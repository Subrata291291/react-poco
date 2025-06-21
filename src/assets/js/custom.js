 // Product slider js
 $(".banner_slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: false,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay:false,
        slidesToScroll: 1
      }
    }
  ]
});

   // Class slider js
 $(".popular_slider").slick({
  dots: false,
  infinite: true,
  centerMode: false,
  // centerPadding: '0px',
  arrows: false,
  autoplay: true,
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        dots: false,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
});

   // Class slider js
   $(".gallery_slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    // centerMode: true,
    fade: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1399,
        settings: {
          dots: true,
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: false,
          slidesToScroll: 1
        }
      }
    ]
  });

 // Product tab area
  $(document).ready(function() {
    $('.tabs li').click(function() {
      var tab_id = $(this).attr('data-tab');
      $('.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })
  });


  // Modal tab area
  $(document).ready(function() {
    $('.modal-tabs li').click(function() {
      var tab_id = $(this).attr('data-tab');
      $('.modal-tabs li').removeClass('current');
      $('.modal-tab-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })
  });

 //Shrink header 
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 270) {
        $(".header-area").addClass("shrink")
      } else {
        $(".header-area").removeClass("shrink")
      }
    });
  });

// Password Show 
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });


  // Header js

  // $(function(){
  //   $(".navbar-nav li").addClass("nav-item position-relative");
  //   $(".navbar-nav li a").addClass("nav-link");
  //   $(".menu-item-has-children a").addClass("dropdown-toggle");
  //   $(".nav-item ul").addClass("dropdown-menu");
  //   $(".nav-item ul li").removeClass("nav-item dropdown");
  //   $(".sub-menu li a").removeClass("nav-link dropdown-toggle dropdown-item");
  //   $(".shop_mega_menu a").addClass("nav-link");
  //   $(".mega_menu ul").addClass("dropdown-menu shadow");
  //   $(".dropdown-menu li a").addClass("dropdown-item");

  //   $(".navbar-nav-mb li").addClass("nav-item");
  //   $(".navbar-nav-mb li a").addClass("nav-link");
  //   $(".navbar-nav-mb .menu-item-has-children").addClass("dropdown");
  //   $(".navbar-nav-mb .menu-item-has-children ul").addClass("dropdown-menu");
  //   $(".navbar-nav-mb .menu-item-has-children").removeClass("nav-item");
  //   // $(".navbar-nav-mb .menu-item-has-children a").attr({"data-bs-toggle": "dropdown","aria-expanded": "false"});
  //   $(".navbar-nav-mb .menu-item-has-children a").addClass("nav-link mega-menu position-relative dropdown-toggle");
  //   $(".navbar-nav-mb .dropdown ul li a").removeClass("nav-link mega-menu position-relative dropdown-toggle");
  //   $(".sub-menu li a").removeAttr("data-bs-toggle aria-expanded");
  //  });

  //  $(document).ready(function () {
  //   $(".navbar-nav-mb .menu-item-has-children a").after('<span data-bs-toggle="dropdown" aria-expanded="true"></span>');
  //       $(".navbar-nav-mb .menu-item-has-children a span").addClass("dropdown-menu-icon");
  // });

  $(document).ready(function () {
    // Insert span after each <li>
    $(".navbar-nav-mb .menu-item-has-children a").after('<span data-bs-toggle="dropdown" aria-expanded="false"></span>');

    // Listen for clicks on the span
    $("span[data-bs-toggle='dropdown']").on("click", function () {
        // Toggle aria-expanded attribute
        let isExpanded = $(this).attr("aria-expanded") === "true";
        $(this).attr("aria-expanded", isExpanded ? "false" : "true");

    });
});

$(document).ready(function () {
  $("span").on("click", function () {

    $("a.mega-menu").css({
      "background-color": "",
      "color": ""
  });
      let parentDiv = $(this).closest(".dropdown"); // Find the closest div containing the clicked span
      let link = parentDiv.find("a.mega-menu"); // Find the <a> tag inside the same div
      
      // Toggle a class on the span
      if ($(this).hasClass("show")) {
          // Apply styles when span is active
          link.css({
              "background-color": "#2BBA5E",
              "color": "white"
          });
      } else {
          // Remove styles when span is inactive
          link.css({
              "background-color": "",
              "color": ""
          });
      }
  });
});


// document.querySelector('.banner-area').addEventListener('mousemove', function(event) {
//   const box = this;
//   const img = box.querySelector('img');
  
//   const boxRect = box.getBoundingClientRect();
//   const offsetX = event.clientX - boxRect.left; // Mouse X relative to box
//   const offsetY = event.clientY - boxRect.top; // Mouse Y relative to box
  
//   const moveX = (offsetX / boxRect.width - 0.5) * -30; // Opposite direction
//   const moveY = (offsetY / boxRect.height - 0.5) * -30; // Opposite direction
  
//   img.style.transform = `translate(${moveX}px, ${moveY}px)`;
// });

// document.querySelector('.banner-area').addEventListener('mouseleave', function() {
//   this.querySelector('img').style.transform = 'translate(0, 0)'; // Reset on leave
// });

document.querySelector('.banner-area').addEventListener('mousemove', function(event) {
  const box = this;
  const boxRect = box.getBoundingClientRect();
  const offsetX = event.clientX - boxRect.left; // Mouse X relative to box
  const offsetY = event.clientY - boxRect.top; // Mouse Y relative to box
  
  const moveX = (offsetX / boxRect.width - 0.5) * -30; // Opposite movement
  const moveY = (offsetY / boxRect.height - 0.5) * -30; // Opposite movement

  box.style.setProperty('--move-x', `${moveX}px`);
  box.style.setProperty('--move-y', `${moveY}px`);

  box.style.setProperty('--before-transform', `translate(${moveX}px, ${moveY}px)`);
  box.querySelector('style')?.remove(); // Remove previous styles

  const style = document.createElement('style');
  style.innerHTML = `
      .banner-area::before {
          transform: var(--before-transform);
      }
  `;
  document.head.appendChild(style);
});

document.querySelector('.banner-area').addEventListener('mouseleave', function() {
  this.style.setProperty('--before-transform', 'translate(0, 0)');
});