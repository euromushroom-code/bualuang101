document.addEventListener("DOMContentLoaded", () => {

  /* LOADER */

  const loader = document.getElementById("loader");

  setTimeout(() => {

    if (loader) {

      loader.classList.add("hide");

    }

  }, 800);


  /* MUSIC */

  const music =
    document.getElementById("backgroundMusic");

  const musicButton =
    document.getElementById("musicButton");


  let playing = false;


  if (music && musicButton) {

    musicButton.addEventListener("click", () => {

      if (!playing) {

        music.play()
          .then(() => {

            playing = true;

            musicButton.textContent = "Ⅱ";

          })
          .catch(error => {

            console.log(
              "Music could not start:",
              error
            );

          });

      } else {

        music.pause();

        playing = false;

        musicButton.textContent = "♫";

      }

    });

  }


  /* PAGE FADE */

  document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", event => {

      const href = link.getAttribute("href");

      if (
        href &&
        !href.startsWith("#") &&
        !href.startsWith("http") &&
        !href.startsWith("mailto:")
      ) {

        event.preventDefault();

        document.body.style.opacity = "0";

        setTimeout(() => {

          window.location.href = href;

        }, 250);

      }

    });

  });

});
