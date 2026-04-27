const images = document.querySelectorAll(".portfolio-item img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  popup.style.display = "none";
};

popup.onclick = () => {
  popup.style.display = "none";
};
