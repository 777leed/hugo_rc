document.addEventListener("DOMContentLoaded", () => {
  let t = document.querySelectorAll(".category"),
    e = document.querySelectorAll(".project-card");
  t.forEach((a) => {
    a.addEventListener("click", function () {
      t.forEach((t) => t.classList.remove("active-category")),
        this.classList.add("active-category");
      let a = this.getAttribute("data-category");
      e.forEach((t) => {
        "all" === a
          ? (t.style.display = "block")
          : "true" === t.getAttribute(`data-${a}`)
          ? (t.style.display = "block")
          : (t.style.display = "none");
      });
    });
  });
});
