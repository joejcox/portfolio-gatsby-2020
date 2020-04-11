import { loadProjects, hideProjects } from "./functions";
$(document).ready(function () {
  $("#view-work").click(function () {
    $("main").addClass("show");
    loadProjects();
  });
  $(".back-btn").click(function () {
    hideProjects();
    setTimeout(function () {
      $("main").removeClass("show");
    }, 1000);
  });
});
