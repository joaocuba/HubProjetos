const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const matchesCategory =
        selectedCategory === "Todos" || card.dataset.category === selectedCategory;

      card.classList.toggle("hidden", !matchesCategory);
    });
  });
});
