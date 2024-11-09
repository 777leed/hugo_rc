var blurOverlay = document.getElementById("blur-overlay");
function openPopup(e) {
  blurOverlay.style.display = "flex";
  var t = document.createElement("div");
  var notice =
    "To request access to the workshop materials, please contact us at ejohnson@resilientcommunitiesngo.org.";
  if (document.documentElement.lang === "ar") {
    notice =
      "للطلب الوصول إلى مواد الورشة، يرجى الاتصال بنا على ejohnson@resilientcommunitiesngo.org.";
  }
  (t.innerHTML = `
  <div class="bg-white flex gap-4 flex-col justify-between m-auto rounded-lg lg:flex-row p-4 w-full max-w-4xl h-96">
      <div class="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 h-full">
          <img loading="lazy" class="w-full h-full object-cover rounded-lg" src="${e.getAttribute(
            "data-img"
          )}" alt="Thumbnail">
      </div>
      <div class="w-full lg:w-2/3 lg:pl-4 h-full overflow-y-auto">
          <h2 class="text-gray-800 text-xl font-semibold mb-2">
              ${e.getAttribute("data-title")}
          </h2>
          <span class="text-gray-600 block mb-4">
              ${e.getAttribute("data-description")}
          </span>
          <p class = "text-gray-600 text-sm flex items-center gap-4">
            <span class="material-symbols-outlined">info</span>
            ${notice}
          </p>
      </div>
  </div>
`),
    (t.style.position = "fixed"),
    (t.style.width = "90%"),
    (t.style.height = "auto"),
    (t.style.top = "50%"),
    (t.style.left = "50%"),
    (t.style.transform = "translate(-50%, -50%)"),
    (t.style.zIndex = "1111"),
    (t.style.overflowY = "auto"),
    t.classList.add("popup"),
    document.body.appendChild(t),
    blurOverlay.addEventListener(
      "click",
      (e) => {
        t.contains(e.target) || closePopup(t);
      },
      { once: !0 }
    );
}
function closePopup(e) {
  (blurOverlay.style.display = "none"), document.body.removeChild(e);
}
Array.from(document.getElementsByClassName("project-card")).forEach((e) => {
  e.addEventListener("click", () => {
    openPopup(e);
  });
}),
  document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelectorAll(".category"),
      t = document.querySelectorAll(".workshop-card"),
      l = document.getElementById("left-side-filters"),
      a,
      s,
      o = document.createElement("div");
    e.forEach((n) => {
      n.addEventListener("click", function () {
        e.forEach((e) => e.classList.remove("active-category")),
          this.classList.add("active-category"),
          (s = this.querySelector(".material-symbols-outlined").textContent),
          "Sustainable Development" !=
            (a = this.getAttribute("data-category")) &&
          "Professional Development" != a &&
          "all" != a
            ? ((o.innerHTML = `
        <span
        class="active-category cursor-pointer border rounded p-2 flex items-center gap-1 text-sm font-semibold text-gray-900 category"
        >
        <span class="material-symbols-outlined">${s}</span>
        <span class="lg:block">${a}</span>
      </span>
        `),
              l.appendChild(o))
            : null != o && o.remove(),
          t.forEach((e) => {
            "all" === a
              ? (e.style.display = "block")
              : a == e.getAttribute("data-category")
              ? (e.style.display = "block")
              : (e.style.display = "none");
          });
      });
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelectorAll("#card-container .workshop-card"),
      t = document.getElementById("see-all-button");
    e.forEach((e, t) => {
      t >= 12 && e.classList.add("hidden");
    }),
      t.addEventListener("click", function () {
        e.forEach((e) => {
          e.classList.remove("hidden");
        }),
          t.classList.add("hidden");
      });
  });
