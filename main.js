const swiper = new Swiper(".swiper", {
  effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,

    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const tabItem = document.querySelector('.tabs__btn-item');
  const tabContent = document.querySelector('.tabs__content-item');

  tabItem.array.forEach(function (element){
    element.addEventListener('click', open);
  });