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

export function loadIndividualProject(page) {
  $.ajax({
    async: true,
    type: "POST",
    url: `http://127.0.0.1:5500/pages/${page}.html`,
    type: "GET",
    contentType: "text/html",
    success: function (data) {
      $(".page").html($(data));
    },
  });
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
