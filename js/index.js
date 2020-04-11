import "./functions";
import "./projects";
import "./header";
$(document).ready(function () {
  $(".overlay").addClass("hide");
  setTimeout(function () {
    $(".socials").addClass("show");
  }, 200);

  setTimeout(function () {
    $(".title").addClass("show");
  }, 300);

  setTimeout(function () {
    $(".subtitle").addClass("show");
  }, 500);

  setTimeout(function () {
    $(".ctas .button:first-child").addClass("show");
  }, 700);

  setTimeout(function () {
    $(".ctas .button:last-child").addClass("show");
  }, 800);
});
