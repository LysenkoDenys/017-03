// MAINBLOCK background picture  for supporting IE (full screen)
$(window).resize(function (event) {
  mainblock();
});
function mainblock() {
  var h = $(window).outerHeight();
  $(".mainblock").css("min-height", h);
}
mainblock();

// ZOOM
if ($(".gallery").lenth > 0) {
  baguettebox.run(".gallery", {
    // custom options
  });
}

// FILTER
$(".filter__item").click(function (event) {
  var i = $(this).data("filter");
  if (i == 1) {
    $(".portfolio__column").show();
  } else {
    $(".portfolio__column").hide();
    $(".portfolio__column.f_" + i).show();
  }
  $(".filter__item").removeClass("active");
  $(this).addClass("active");
  return false;
});

// SCROLL (PARALLAX EFFECT)
$(window).scroll(function (event) {
  var s = $(this).scrollTop() / 3;
  $(".mainblock__image").css("transform", "translate3d(0, " + s + "px, 0)");
});
