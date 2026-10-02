/* =========================
   MOBILE MENU
========================= */

const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

  });


  document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

      link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

      });

    });

}


/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
  document.querySelector(".cursor");

const cursorRing =
  document.querySelector(".cursor-ring");


if (cursor && cursorRing && window.innerWidth > 900) {

  let mouseX = 0;
  let mouseY = 0;

  let ringX = 0;
  let ringY = 0;


  document.addEventListener("mousemove", event => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

  });


  function animateCursor() {

    ringX += (mouseX - ringX) * .12;
    ringY += (mouseY - ringY) * .12;

    cursorRing.style.left =
      ringX + "px";

    cursorRing.style.top =
      ringY + "px";

    requestAnimationFrame(
      animateCursor
    );

  }

  animateCursor();


  document
    .querySelectorAll("a, button")
    .forEach(element => {

      element.addEventListener(
        "mouseenter",
        () => {

          cursorRing.style.width = "55px";
          cursorRing.style.height = "55px";

        }
      );


      element.addEventListener(
        "mouseleave",
        () => {

          cursorRing.style.width = "35px";
          cursorRing.style.height = "35px";

        }
      );

    });

}


/* =========================
   MUSIC
========================= */

const music =
  document.getElementById(
    "backgroundMusic"
  );

const musicButton =
  document.getElementById(
    "musicButton"
  );

const musicText =
  document.getElementById(
    "musicText"
  );


let playing = false;


if (
  music &&
  musicButton
) {

  musicButton.addEventListener(
    "click",
    async () => {

      try {

        if (!playing) {

          await music.play();

          playing = true;

          musicText.textContent =
            "PAUSE MUSIC";

        } else {

          music.pause();

          playing = false;

          musicText.textContent =
            "PLAY MUSIC";

        }

      } catch (error) {

        console.log(
          "Music error:",
          error
        );

      }

    }
  );

}


/* =========================
   SCROLL REVEAL
========================= */

const revealItems =
  document.querySelectorAll(
    ".section, .person-card, .news-main, .news-side a"
  );


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: .12
    }
  );


revealItems.forEach(item => {

  item.classList.add("reveal");

  observer.observe(item);

});


/* =========================
   PAGE TRANSITION
========================= */

document
  .querySelectorAll("a")
  .forEach(link => {

    const href =
      link.getAttribute("href");


    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      href.startsWith("mailto:")
    ) {

      return;

    }


    link.addEventListener(
      "click",
      event => {

        event.preventDefault();

        document.body.classList.add(
          "page-transition"
        );


        setTimeout(() => {

          window.location.href =
            href;

        }, 250);

      }
    );

  });
