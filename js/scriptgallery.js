document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll(".galerie img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  const logo = document.getElementById("logoBtn");
  if (logo) logo.addEventListener("click", () => window.location.href = "index.html");

  let currentIndex = 0;

  function showImage(index) {
    lightboxImg.src = images[index].src;
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      lightbox.style.display = "flex";
      showImage(currentIndex);
    });
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  // Fermer en cliquant autour
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Navigation clavier
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {

      if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      }

      if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      }

      if (e.key === "Escape") {
        lightbox.style.display = "none";
      }
    }
  });

});

