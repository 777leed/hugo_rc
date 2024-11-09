document.addEventListener("DOMContentLoaded", () => {
  var t = document.getElementById("blur-overlay"),
    e = document.getElementById("team-content");
  function a(e) {
    t.style.display = "flex";
    var a = document.createElement("div");
    (a.innerHTML = `
  <div class="bg-white flex flex-col justify-between m-auto rounded-lg lg:flex-row">
  <div class="w-full h-auto cursor-pointer lg:w-1/4">
    <div class="bg-gray-50">
      <div class="bg-[#6F9B7A] overflow-hidden aspect-w-1 aspect-h-1 w-fit">
          <div class="p-2">
            <div class="flex justify-between items-baseline gap-4">
              <span class="text-base font-semibold block">
                ${e.getAttribute("data-name")}
              </span>
              <a href=${e.getAttribute(
                "data-linkedin"
              )} target="_blank">                    <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 hover:text-slate-800 text-gray-200"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg></a>

            </div>
            <span class="text-sm text-gray-200">
                ${e.getAttribute("data-position")}
            </span>
          </div>
          <img loading="lazy" class="w-full h-full object-cover grayscale hover:grayscale-0" src="${e.getAttribute(
            "data-pic"
          )}" alt="">
      </div>
  
    </div>
  </div>
  <div class="w-full p-2 text-left rtl:text-right">
    <span class="text-gray-600">
      ${e.getAttribute("data-desc")}        
    </span>
  </div>
  
  </div>
  `),
      (a.style.position = "fixed"),
      (a.style.width = "fit"),
      (a.style.height = "50%"),
      (a.style.top = "50%"),
      (a.style.left = "50%"),
      (a.style.transform = "translate(-50%, -50%)"),
      (a.style.zIndex = "1111"),
      (a.style.overflowY = "auto"),
      a.classList.add("popup"),
      document.body.appendChild(a),
      t.addEventListener(
        "click",
        (t) => {
          a.contains(t.target) || l(a);
        },
        { once: !0 }
      );
  }
  function l(e) {
    (t.style.display = "none"), document.body.removeChild(e);
  }
  document.querySelectorAll(".teamcard").forEach((t) => {
    t.addEventListener("click", () => {
      a(t);
    });
  });
});
