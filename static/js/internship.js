!(function () {
  var e = "rtl" === document.documentElement.getAttribute("dir"),
    t = document.querySelectorAll("[data-tabs]");
  t.forEach(function (t, i) {
    var r = document.createElement("div"),
      a = t.querySelector("li:first-child [data-tab-target]").cloneNode();
    (a.innerHTML = "-"),
      a.classList.remove("bg-inherit", "text-slate-700"),
      a.classList.add("bg-white", "text-white"),
      (a.style.animation = ".2s ease"),
      r.classList.add(
        "z-10",
        "absolute",
        "text-slate-700",
        "rounded-lg",
        "bg-inherit",
        "flex-auto",
        "text-center",
        "bg-none",
        "border-0",
        "block",
        "shadow"
      ),
      r.setAttribute("moving-tab", ""),
      r.setAttribute("data-tab-target", ""),
      r.appendChild(a),
      t.appendChild(r),
      t.getElementsByTagName("li").length,
      (r.style.padding = "0px"),
      (r.style.width = t.querySelector("li:nth-child(1)").offsetWidth + "px"),
      (r.style.transform = "translate3d(0px, 0px, 0px)"),
      (r.style.transition = ".5s ease"),
      (t.onmouseover = function (i) {
        var a,
          l = ((a = (a = i) || window.event).target || a.srcElement).closest(
            "li"
          );
        if (l) {
          var n = Array.from(l.closest("ul").children),
            s = n.indexOf(l) + 1;
          t.querySelector("li:nth-child(" + s + ") [data-tab-target]").onclick =
            function () {
              t.querySelectorAll("li").forEach(function (e) {
                e.firstElementChild.removeAttribute("active"),
                  e.firstElementChild.setAttribute("aria-selected", "false");
              }),
                l.firstElementChild.setAttribute("active", ""),
                l.firstElementChild.setAttribute("aria-selected", "true"),
                (r = t.querySelector("[moving-tab]"));
              var i = 0;
              if (t.classList.contains("flex-col")) {
                for (var a = 1; a <= n.indexOf(l); a++)
                  i += t.querySelector("li:nth-child(" + a + ")").offsetHeight;
                (r.style.transform = "translate3d(0px," + i + "px, 0px)"),
                  (r.style.height = t.querySelector(
                    "li:nth-child(" + a + ")"
                  ).offsetHeight);
              } else {
                for (var a = 1; a <= n.indexOf(l); a++)
                  i += t.querySelector("li:nth-child(" + a + ")").offsetWidth;
                var o = e ? -i + "px" : i + "px";
                (r.style.transform = "translate3d(" + o + ", 0px, 0px)"),
                  (r.style.width =
                    t.querySelector("li:nth-child(" + s + ")").offsetWidth +
                    "px");
              }
            };
        }
      });
  }),
    window.addEventListener("resize", function (i) {
      t.forEach(function (t, i) {
        (t = t.parentElement.firstElementChild)
          .querySelector("[moving-tab]")
          .remove();
        var r = document.createElement("div"),
          a = t
            .querySelector("[data-tab-target][aria-selected='true']")
            .cloneNode();
        (a.innerHTML = "-"),
          a.classList.remove("bg-inherit"),
          a.classList.add("bg-white", "text-white"),
          (a.style.animation = ".2s ease"),
          r.classList.add(
            "z-10",
            "absolute",
            "text-slate-700",
            "rounded-lg",
            "bg-inherit",
            "flex-auto",
            "text-center",
            "bg-none",
            "border-0",
            "block",
            "shadow"
          ),
          r.setAttribute("moving-tab", ""),
          r.setAttribute("data-tab-target", ""),
          r.appendChild(a),
          t.appendChild(r),
          (r.style.padding = "0px"),
          (r.style.transition = ".5s ease");
        var l = t.querySelector(
          "[data-tab-target][aria-selected='true']"
        ).parentElement;
        if (l) {
          var n = Array.from(l.closest("ul").children),
            s = n.indexOf(l) + 1,
            o = 0;
          if (t.classList.contains("flex-col")) {
            for (var c = 1; c <= n.indexOf(l); c++)
              o += t.querySelector("li:nth-child(" + c + ")").offsetHeight;
            (r.style.transform = "translate3d(0px," + o + "px, 0px)"),
              (r.style.width =
                t.querySelector("li:nth-child(" + s + ")").offsetWidth + "px"),
              (r.style.height = t.querySelector(
                "li:nth-child(" + c + ")"
              ).offsetHeight);
          } else {
            for (var c = 1; c <= n.indexOf(l); c++)
              o += t.querySelector("li:nth-child(" + c + ")").offsetWidth;
            var d = e ? -o + "px" : o + "px";
            (r.style.transform = "translate3d(" + d + ", 0px, 0px)"),
              (r.style.width =
                t.querySelector("li:nth-child(" + s + ")").offsetWidth + "px");
          }
        }
      }),
        window.innerWidth < 991
          ? t.forEach(function (e, t) {
              e.classList.contains("flex-col") ||
                e.classList.add("flex-col", "on-resize");
            })
          : t.forEach(function (e, t) {
              e.classList.contains("on-resize") &&
                e.classList.remove("flex-col", "on-resize");
            });
    });
  var t = document.querySelectorAll("[data-tab-content]");
  t[0] &&
    t.forEach(function (e) {
      e.parentElement
        .querySelectorAll("li a[data-tab-target]")
        .forEach(function (e) {
          e.addEventListener("click", function () {
            var t = document.querySelector(
              "#" + e.getAttribute("aria-controls")
            );
            if (!t.classList.contains("block", "opacity-100")) {
              var i = t
                  .closest("[data-tab-content]")
                  .parentElement.querySelector(
                    "li a[data-tab-target][aria-selected='true']"
                  ),
                r = document.querySelector(
                  "#" + i.getAttribute("aria-controls")
                );
              r.classList.remove("block", "opacity-100"),
                r.classList.add("hidden", "opacity-0"),
                t.classList.add("block", "opacity-100"),
                t.classList.remove("hidden", "opacity-0");
            }
          });
        });
    });
})(),
  (function () {
    var e = document.querySelectorAll("[data-collapse-target]"),
      t = document.querySelectorAll("[data-collapse]");
    e &&
      t &&
      Array.from(e).forEach(function (e) {
        return Array.from(t).forEach(function (t) {
          e.dataset.collapseTarget === t.dataset.collapse &&
            e.addEventListener("click", function () {
              t.style.height && "0px" !== t.style.height
                ? ((t.style.height = 0),
                  (t.style.overflow = "hidden"),
                  e.removeAttribute("open"))
                : ((t.style.height = "".concat(
                    t.children[0].clientHeight,
                    "px"
                  )),
                  (t.style.overflow = "visible"),
                  e.setAttribute("open", ""));
            });
        });
      });
  })(),
  document.addEventListener("DOMContentLoaded", function () {
    function e() {
      var e = {
        "In-Person Internship (IPI)": "IPI",
        "Special Project Internship (SPI)": "SPI",
        "Phase-Based Internship (PBI)": "PBI",
      };
      document.querySelectorAll("span.phase-change").forEach(function (t) {
        var i = t.innerText.trim();
        if (window.innerWidth < 768 && e[i]) t.innerText = e[i];
        else if (window.innerWidth >= 768 && Object.values(e).includes(i))
          for (var r in e) e[r] === i && (t.innerText = r);
      });
    }
    document.querySelectorAll("i.fa-chevron-down").forEach(function (e) {
      var t = e.closest("[dir]");
      t && "rtl" === t.getAttribute("dir")
        ? (e.classList.remove("right-0"), e.classList.add("left-0"))
        : (e.classList.remove("left-0"), e.classList.add("right-0"));
    }),
      e(),
      window.addEventListener("resize", e);
  });
