document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     CURRENT YEAR
  ----------------------------- */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* -----------------------------
     MOBILE MENU
  ----------------------------- */

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".main-nav a");

  if (menuToggle && header) {

    menuToggle.addEventListener("click", () => {

      const isOpen = header.classList.toggle("menu-open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });

  }


  navLinks.forEach(link => {

    link.addEventListener("click", () => {

      if (!header) return;

      header.classList.remove("menu-open");

      if (menuToggle) {
        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    });

  });


  /* -----------------------------
     SCROLL REVEAL
  ----------------------------- */

  const revealElements =
    document.querySelectorAll(".reveal");

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "reveal-visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* -----------------------------
     SMOOTH ANCHOR LINKS
  ----------------------------- */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }

          const target =
            document.querySelector(targetId);

          if (!target) {
            return;
          }

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });


  /* -----------------------------
     SIMPLE PARALLAX DETAIL
  ----------------------------- */

  const visual =
    document.querySelector(".hero-visual");

  if (visual && window.matchMedia(
    "(min-width: 951px)"
  ).matches) {

    window.addEventListener(
      "mousemove",
      event => {

        const x =
          (event.clientX /
            window.innerWidth - 0.5) * 10;

        const y =
          (event.clientY /
            window.innerHeight - 0.5) * 10;

        visual.style.transform =
          `translate(${x}px, ${y}px)`;

      }
    );

  }

});
