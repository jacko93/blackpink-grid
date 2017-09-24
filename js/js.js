$(".resize").on("click", function() {
  $(this).css({
    "width": "34vw"
  });
  $(".resize").not($(this)).css({
    "width": "22vw"
  });
});

$(".mask").on("click", function() {
  $(this).css({
    "background": "none"
  });
  $(".mask").not($(this)).css({
    "background-color": "rgba(0, 0, 0, 0.8)"
  });
});
