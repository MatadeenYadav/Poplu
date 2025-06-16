const cover = document.getElementById("cover");
const book = document.getElementById("book");
const pages = document.querySelectorAll(".page");

let currentPage = -1;

cover.addEventListener("click", () => {
  cover.style.display = "none";
  showNextPage();
});

function showNextPage() {
  if (currentPage >= 0 && currentPage < pages.length) {
    pages[currentPage].classList.remove("active");
  }
  currentPage++;
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");
  }
}

book.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    showNextPage();
  }
});
