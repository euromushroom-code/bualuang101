/* =========================================================
   BUALUANG 101
   INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


  /* =======================================================
     LOADER
  ======================================================= */

  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {

    setTimeout(() => {
      loader.classList.add("hidden");
    }, 700);

  });


  /* =======================================================
     HEADER SCROLL
  ======================================================= */

  const header = document.getElementById("siteHeader");

  const updateHeader = () => {

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  };

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const menuToggle =
    document.getElementById("menuToggle");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const mobileLinks =
    mobileMenu.querySelectorAll("a");


  const openMenu = () => {

    menuToggle.classList.add("open");

    mobileMenu.classList.add("open");

    document.body.classList.add("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

  };


  const closeMenu = () => {

    menuToggle.classList.remove("open");

    mobileMenu.classList.remove("open");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  };


  menuToggle.addEventListener("click", () => {

    if (
      mobileMenu.classList.contains("open")
    ) {
      closeMenu();
    } else {
      openMenu();
    }

  });


  mobileLinks.forEach(link => {

    link.addEventListener("click", () => {
      closeMenu();
    });

  });


  /* =======================================================
     REVEAL ON SCROLL
  ======================================================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal, .reveal-text"
    );


  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
      }
    );


  revealElements.forEach(element => {

    revealObserver.observe(element);

  });


  /* =======================================================
     STAGGER TIMELINE
  ======================================================= */

  const timelineItems =
    document.querySelectorAll(
      ".timeline-item"
    );


  timelineItems.forEach(
    (item, index) => {

      item.style.transitionDelay =
        `${index * 80}ms`;

    }
  );


  /* =======================================================
     ACTIVE NAV
  ======================================================= */

  const sections =
    document.querySelectorAll(
      "section[id]"
    );

  const navLinks =
    document.querySelectorAll(
      ".desktop-nav a"
    );


  const navObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }

          const id =
            entry.target.getAttribute("id");


          navLinks.forEach(link => {

            link.classList.remove(
              "active"
            );

            if (
              link.dataset.nav === id
            ) {

              link.classList.add(
                "active"
              );

            }

          });

        });

      },
      {
        threshold: 0.25,
        rootMargin: "-20% 0px -55% 0px"
      }
    );


  sections.forEach(section => {

    navObserver.observe(section);

  });


  /* =======================================================
     CUSTOM CURSOR
  ======================================================= */

  const cursorDot =
    document.querySelector(".cursor-dot");

  const cursorRing =
    document.querySelector(".cursor-ring");


  if (
    cursorDot &&
    cursorRing &&
    window.innerWidth > 900
  ) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    window.addEventListener(
      "mousemove",
      event => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursorDot.style.left =
          `${mouseX}px`;

        cursorDot.style.top =
          `${mouseY}px`;

      }
    );


    const animateCursor = () => {

      ringX +=
        (mouseX - ringX) * 0.15;

      ringY +=
        (mouseY - ringY) * 0.15;


      cursorRing.style.left =
        `${ringX}px`;

      cursorRing.style.top =
        `${ringY}px`;


      requestAnimationFrame(
        animateCursor
      );

    };


    animateCursor();


    const interactive =
      document.querySelectorAll(
        "a, button, .activity-card, .person-card, .news-item"
      );


    interactive.forEach(element => {

      element.addEventListener(
        "mouseenter",
        () => {
          cursorRing.classList.add(
            "active"
          );
        }
      );


      element.addEventListener(
        "mouseleave",
        () => {
          cursorRing.classList.remove(
            "active"
          );
        }
      );

    });

  }


  /* =======================================================
     PARALLAX HERO
  ======================================================= */

  const heroNumber =
    document.querySelector(
      ".hero-number"
    );


  window.addEventListener(
    "scroll",
    () => {

      if (!heroNumber) {
        return;
      }

      const scroll =
        window.scrollY;

      if (scroll < window.innerHeight) {

        heroNumber.style.transform =
          `translateY(${scroll * 0.08}px)`;

      }

    },
    { passive: true }
  );


  /* =======================================================
     SMOOTH INTERNAL LINKS
  ======================================================= */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetID =
            link.getAttribute("href");

          if (
            !targetID ||
            targetID === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetID
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          const headerOffset = 70;

          const targetPosition =
            target.getBoundingClientRect()
              .top
            +
            window.scrollY
            -
            headerOffset;


          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });

        }
      );

    });


  /* =======================================================
     IMAGE LOAD EFFECT
  ======================================================= */

  const images =
    document.querySelectorAll("img");


  images.forEach(image => {

    image.addEventListener(
      "load",
      () => {

        image.classList.add(
          "loaded"
        );

      }
    );

  });


  /* =======================================================
     KEYBOARD ESCAPE
  ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        mobileMenu.classList.contains("open")
      ) {

        closeMenu();

      }

    }
  );


});
