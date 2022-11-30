const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");

openBtn.addEventListener("click", () => {
  modal.style.visibility = "visible";
  modal.style.width = "500px";
  modal.style.height = "590px";
  modal.showModal();
});

closeBtn.addEventListener("click", () => {
  modal.style.visibility = "hidden";
  modal.style.width = "0";
  modal.style.height = "0";
  modal.close();
});
