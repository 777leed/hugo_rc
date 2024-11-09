document.addEventListener("DOMContentLoaded", () => {
  let e = [],
    t = () => {
      e.forEach((e) => e.destroy()), (e.length = 0);
      let t = document.querySelectorAll(".blaze-slider");
      t.forEach((t) => {
        let l = new BlazeSlider(t, {
          all: { slidesToShow: 1, transitionDuration: 300, loop: !0 },
          "(min-width: 600px)": { slidesToShow: 1 },
          "(min-width: 800px)": { slidesToShow: 3.7 },
        });
        e.push(l);
      });
    };
  t(), window.addEventListener("resize", t);
  var l = document.getElementById("blur-overlay");
  function a(e) {
    l.style.display = "flex";
    var t = document.createElement("div");
    (t.innerHTML = `
  <div class="bg-white flex flex-col justify-between m-auto rounded-lg lg:flex-row p-4 w-full max-w-4xl h-96">
      <div class="w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 h-full">
          <img loading="lazy" class="w-full h-full object-cover rounded-lg" src="${
            e.querySelector("img").src
          }" alt="Thumbnail">
      </div>
      <div class="w-full lg:w-2/3 lg:pl-4 h-full overflow-y-auto">
          <h2 class="text-gray-800 text-xl font-semibold mb-2">
              ${e.getAttribute("data-title")}
          </h2>
          <span class="text-gray-600 block mb-4">
              ${e.getAttribute("data-description")}
          </span>
          <a href="${e.getAttribute(
            "data-docurl"
          )}" download class="text-blue-500 hover:underline flex items-center mt-4">
              <img loading="lazy" src="/notassets/file.png" class="w-5 h-auto mr-2" alt="">
              Participant's Manual
          </a>
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
      l.addEventListener(
        "click",
        (e) => {
          t.contains(e.target) || s(t);
        },
        { once: !0 }
      );
  }
  function s(e) {
    (l.style.display = "none"), document.body.removeChild(e);
  }
  document.querySelectorAll(".blaze-slide > div").forEach((e) => {
    "yes" === e.getAttribute("data-train") &&
      e.addEventListener("click", () => {
        a(e);
      });
  });
});
