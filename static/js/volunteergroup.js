document.addEventListener("DOMContentLoaded", () => {
  let e = document.getElementById("container"),
    t = document.getElementById("submit-button"),
    i = document.getElementById("next-btn"),
    n = document.getElementById("prev-btn"),
    d = document.getElementById("cart-container"),
    s = document.getElementById("start-itinerary"),
    a = 1,
    l = document.querySelectorAll(".section").length;
  function o() {
    1 === a
      ? (n.classList.add("hidden"),
        i.classList.add("hidden"),
        d.classList.add("hidden"))
      : (n.classList.remove("hidden"),
        i.classList.remove("hidden"),
        d.classList.remove("hidden")),
      a === l && i.classList.add("hidden");
  }
  i.classList.add("hidden"),
    n.classList.add("hidden"),
    d.classList.add("hidden"),
    t.addEventListener("click", () => {
      document.getElementById("section-4").classList.add("blur");
    }),
    i.addEventListener("click", () => {
      (a = Math.min(a + 1, l)),
        document
          .getElementById(`section-${a}`)
          .scrollIntoView({ behavior: "smooth" }),
        o();
    }),
    s.addEventListener("click", () => {
      (a = Math.min(a + 1, l)),
        document
          .getElementById(`section-${a}`)
          .scrollIntoView({ behavior: "smooth" }),
        o();
    }),
    n.addEventListener("click", () => {
      (a = Math.max(a - 1, 1)),
        document
          .getElementById(`section-${a}`)
          .scrollIntoView({ behavior: "smooth" }),
        o();
    }),
    e.addEventListener("scroll", () => {
      let t = e.scrollTop + e.offsetHeight / 2,
        s = a;
      document.querySelectorAll(".section").forEach((e, i) => {
        t >= e.offsetTop && (s = i + 1);
      }),
        s !== a && ((a = s), o()),
        e.scrollTop > document.querySelector(".section").offsetHeight / 2 &&
          (i.classList.remove("hidden"),
          n.classList.remove("hidden"),
          d.classList.remove("hidden"));
    }),
    o();
  var c = [];
  function r() {
    let e = document.getElementById("date").value,
      t = parseInt(document.getElementById("numberOfPeople").value, 10),
      i = parseInt(e, 10),
      n = c.reduce((e, t) => e + parseInt(t.cost, 10), 0);
    document.getElementById("estimated-cost").innerText = `${n * i * t}$`;
  }
  function m(e) {
    e.classList.add("animate-bounce"),
      setTimeout(() => e.classList.remove("animate-bounce"), 1e3);
  }
  function u() {
    new BlazeSlider(document.querySelector(".blaze-slider"), {
      all: { slidesToShow: 1, transitionDuration: 300, loop: !1 },
      "(min-width: 600px)": { slidesToShow: 1.5 },
      "(min-width: 800px)": { slidesToShow: 2.5 },
      "(min-width: 1024px)": { slidesToShow: 3 },
    });
  }
  document.querySelectorAll(".activity-clicked").forEach(function (e) {
    e.addEventListener("click", function () {
      let t = document.getElementById("cart"),
        i = document.getElementById("counter"),
        n = parseInt(i.textContent),
        d = {
          name: e.getAttribute("data-activity"),
          cost: e.getAttribute("data-pricetag"),
        };
      if ("added" === e.getAttribute("data-add")) {
        (e.innerHTML = '<i class="fa-solid fa-circle-plus"></i>'),
          e.setAttribute("data-add", "addednot"),
          (n -= 1);
        let s = c.findIndex((e) => e.name === d.name && e.cost === d.cost);
        s > -1 && c.splice(s, 1), (i.textContent = n), m(t);
      } else (e.innerHTML = '<i class="fa-solid fa-circle-check"></i>'), e.setAttribute("data-add", "added"), (n += 1), c.push(d), (i.textContent = n), m(t);
      r();
    });
  }),
    document.getElementById("date").addEventListener("change", r),
    document.getElementById("numberOfPeople").addEventListener("input", r),
    document
      .getElementById("itinerary-form")
      .addEventListener("submit", function (e) {
        var t = document.getElementById("estimated-cost").innerText;
        (document.getElementById("activities").value = JSON.stringify(c)),
          (document.getElementById("hidden-estimated-cost").value = t);
      }),
    u(),
    window.addEventListener("resize", u),
    document.querySelectorAll(".blaze-slide").forEach((e) => {
      e.addEventListener("click", function () {
        let e = this.getAttribute("data-activity"),
          t = this.getAttribute("data-description"),
          i = this.getAttribute("data-region");
        this.getAttribute("data-backgroundImage"),
          (document.getElementById("activity-name").textContent = e),
          (document.getElementById("activity-description").textContent = t),
          (document.getElementById("region-name").textContent = i);
      });
    });
});
