import {
  insertProjectInfo,
  clearProject,
  playSound,
  stopSound,
  playSoundClick,
  hideProjects,
  loadProjects,
} from "./functions";
$(document).ready(function () {
  var items = [
    {
      title: "Noita",
      description: "Noita is a video game",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
      img:
        "https://cdn.vox-cdn.com/thumbor/u934XKA55y3AYAcyITr7dQCq5GU=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/59121631/noita2.0.jpg",
      link: "http://www.coejox.com/portfolio/noita",
      github: "http://www.github.com",
      type: "Bootstrap Vanillajs",
      data: "noita",
    },
    {
      title: "LoL Champion Rotation",
      description: "League of Legends latest champion rotation information",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
      img: "https://cdn.mos.cms.futurecdn.net/G2VQ2CL9j4w6Jv5z3QwjuN.jpg",
      link: "http://lol-champion-rotation.herokuapp.com",
      github: "http://github.com",
      type: "Bulma React API SPA",
      data: "lolchampionrotation",
    },
    {
      title: "Weathered",
      description: "A weather app",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
      img:
        "https://www.industryforum.co.uk/wp-content/uploads/sites/6/2018/10/Industial-Components.jpg",
      link: "http://www.coejox.com/weathered",
      type: "App API",
      data: "weathered",
    },
    {
      title: "RGB Slider",
      description: "A weather app",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
      img: "https://miro.medium.com/max/1600/1*v7w3v2gsZbSUc7eQFZ_H4g.jpeg",
      link: "http://www.coejox.com/rgb",
      github: "http://github.com",
      type: "Vanillajs",
      data: "rgb",
    },
    {
      title: "React Calculator",
      description: "A weather app",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
      img:
        "https://cdn1.vectorstock.com/i/1000x1000/49/35/maths-seamless-pattern-eps-8-vector-1204935.jpg",
      link: "#",
      github: "http://github.com",
      type: "React",
      data: "calculator",
    },
    {
      title: "Estate Agents",
      description: "Estate Agent Site",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
      img:
        "https://dwkujuq9vpuly.cloudfront.net/news/wp-content/uploads/2017/02/Estate-agent-investigation.jpg",
      link: "#",
      github: "http://github.com",
      type: "API",
      data: "estateagents",
    },
  ];

  const projects = $.map(items, function (item) {
    return `
    <div class="column is-2 ${item.type}">
    <div class="column-wrapper">
        <figure class="image">
            <img src="${item.img}" alt="placeholder" />
        </figure>
        <a class="overlay-link" href="#" data-page="${item.data}"><div class="card-content is-overlay">
        <p class="button is-primary view-project">${item.title}</p>
        </div>
        </a>
        </div>
    </div>`;
  });

  $(".projects").html(projects);

  $(".projects .column").mouseover(function () {
    playSound();
  });

  $(".projects .column").mouseout(function () {
    stopSound();
  });

  $(".overlay-link").click(function (e) {
    e.preventDefault();
    playSoundClick();
    hideProjects();
    var data = $(this).data("page");

    setTimeout(function () {
      $(".page").addClass("show");
      const project = $.map(items, function (item) {
        if (item.data === data) {
          return insertProjectInfo(
            item.img,
            item.title,
            item.information,
            item.description,
            item.link,
            item.github
          );
        }
      });
      $(".page").html(project);
    }, 600);
  });

  $(document).on("click", ".project-back-btn", function () {
    clearProject();
    loadProjects();
  });

  $(".disabled").click(function (e) {
    console.log("clicked");
    e.preventDefault();
  });
});
