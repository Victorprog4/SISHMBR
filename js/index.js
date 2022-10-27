var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const pre_carremento = document.querySelector(".pre-carregamento");

function preCarregamento(){
    pre_carremento.style.opacity = "0";

    setTimeout(() => {
        pre_carremento.style.display = "none";
    }, 500);
}