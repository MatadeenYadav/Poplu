document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("cover");
  const book = document.getElementById("book");
  const pages = book.querySelectorAll(".page");
  let currentPage = 0;

  // Background music setup
  const audio = document.getElementById("bg-music");

  function playMusic() {
    audio.play().catch(() => {});
    document.body.removeEventListener("click", playMusic);
  }

  // Try autoplay, else wait for click
  audio.play().catch(() => {
    document.body.addEventListener("click", playMusic, { once: true });
  });

  // Open book on cover click
  cover.addEventListener("click", () => {
    cover.style.display = "none";
    book.style.display = "block";
    pages[currentPage].style.display = "block";
  });

  // Turn pages on click
  book.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      pages[currentPage].style.display = "none";
      currentPage++;
      pages[currentPage].style.display = "block";
    }
  });

  // Initially hide all pages
  pages.forEach(page => page.style.display = "none");
  book.style.display = "none";
});
