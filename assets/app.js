const open = document.querySelector(".mobile-open");
const wrapper = document.querySelector(".mobile-wrapper");

open.addEventListener("click",() => {
    // wrapper.style.display = 'block';
    if (wrapper.style.display === "none") {
        wrapper.style.display = "block";
      } else {
        wrapper.style.display = "none";
      }
});

