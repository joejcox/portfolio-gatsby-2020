export function loadProjects() {
  $(".column").each(function (i, el) {
    setTimeout(function () {
      $(el).addClass("show");
    }, i * 100);
  });
  playSoundClick();
}

export function hideProjects() {
  $($(".column").get().reverse()).each(function (i, el) {
    setTimeout(function () {
      $(el).removeClass("show");
    }, i * 100);
  });
  playSoundClick();
}

// const cors = "https://cors-anywhere.herokuapp.com/";

// export function loadIndividualProject(page) {
//   $.ajax({
//     type: "POST",
//     url: `https://www.coejox.com/${page}.html`,
//     datatype: "html",
//     success: function (data, status) {
//       console.log(data);
//       console.log(status);
//       $(".page").html($(data));
//     },
//     error: function () {
//       console.info("Error");
//     },
//     done: function () {
//       console.info("DONE");
//     },
//   });
// }

export function insertProjectInfo(
  image,
  title,
  information,
  description,
  link,
  github
) {
  return `
  <section class="section">
  <div class="container">
    <div class="level">
      <div class="level-left">
        <div class="pageinfo">
          <h2 class="title is-1">${title}</h2>
        </div>
      </div>
      <div class="level-right">
        <div class="buttons is-grouped">
          <button class="button is-primary orange project-back-btn">
            <i class="fa fa-chevron-left"></i>
          </button>

          <a
            class="button is-warning has-text-white"
            href="mailto:joecoxwebdev@outlook.co.uk"
          >
            <i class="fa fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class="container project-container">
    <div class="columns">
      <div class="column is-half">
        <figure class="image">
          <img
            src="${image}"
            alt="${description}"
          />
        </figure>
      </div>
      <div class="column is-half">
        <div class="buttons project-buttons">
          <a
            href="${link}"
            class="button is-primary orange"
            target="_blank"
            >View Site</a
          >
          <a href="${github}" class="button is-primary" target="_blank"
            ><i class="fab fa-github"></i>View on Github</a
          >
        </div>

        <div class="tags are-small">
          <span class="tag is-dark">Website</span>
          <span class="tag is-dark">jQuery</span>
          <span class="tag is-dark">Bootstrap</span>
        </div>
        <p class="content is-large">
          ${information}
        </p>
      </div>
    </div>
  </div>
</section>

  `;
}

export function clearProject() {
  $(".page").removeClass("show");
  setTimeout(function () {
    $(".page").html("");
  }, 400);

  playSoundClick();
}

export function playSound() {
  $("#sound").get(0).play();
}

export function stopSound() {
  $("#sound").get(0).pause();
  $("#sound").get(0).currentTime = 0;
}

export function playSoundClick() {
  $("#soundclick").get(0).play();
}
