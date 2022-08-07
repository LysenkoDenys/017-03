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
