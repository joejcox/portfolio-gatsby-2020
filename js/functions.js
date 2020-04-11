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

export function loadIndividualProject(page) {
  $.ajax({
    type: "POST",
    url: `https://www.coejox.com/${page}.html`,
    datatype: "html",
    success: function (data, status) {
      console.log(data);
      console.log(status);
      $(".page").html($(data));
    },
    error: function () {
      console.info("Error");
    },
    done: function () {
      console.info("DONE");
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
