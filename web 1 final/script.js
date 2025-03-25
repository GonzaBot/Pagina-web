function showCategories() {
  const navLinks = document.querySelectorAll("nav");
  navLinks.forEach((link) => {
    link.style.display = "block";
    link.style.marginTop = "4rem";
  });
}

function hideCategories() {
  const navLinks = document.querySelectorAll("nav");
  navLinks.forEach((link) => {
    link.style.display = "none";
  });
}

const hideFooter = () => {
  const footers = document.querySelectorAll(`footer`);

  footers.forEach((footer) => {
    footer.style.display = "none";
  });

  console.log("Footers hidden.");
};

// Agendar a execução da função após 3 segundos
setTimeout(hideFooter, 10000);
let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
