document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelectorAll("#card-container .card"),
    d = document.getElementById("see-all-button");
  e.forEach((e, d) => {
    d >= 8 && e.classList.add("hidden");
  }),
    d.addEventListener("click", function () {
      e.forEach((e) => {
        e.classList.remove("hidden");
      }),
        d.classList.add("hidden");
    });
});
