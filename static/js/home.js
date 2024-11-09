document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("contact-btn")
    .addEventListener("click", function (e) {
      e.preventDefault(),
        document
          .getElementById("footerr")
          .scrollIntoView({ behavior: "smooth" });
      let t = document.getElementById("email-span");
      t.classList.add("highlight"),
        setTimeout(function () {
          t.classList.remove("highlight");
        }, 2e3);
    });
});
