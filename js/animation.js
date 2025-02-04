$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });

    const next = document.querySelector(".slick-next");
    const prev = document.querySelector(".slick-prev");

    // console.log(next);
    next.innerHTML = "";
    prev.innerHTML = "";
    const next_img = document.createElement("img");
    const prev_img = document.createElement("img");
    console.log(next_img);
    next_img.setAttribute("src", "./img/next.png");
    next_img.setAttribute("alt", "Next");
    prev_img.setAttribute("src", "./img/prev.png");
    prev_img.setAttribute("alt", "Next");

    next.appendChild(next_img);
    prev.appendChild(prev_img);
  });