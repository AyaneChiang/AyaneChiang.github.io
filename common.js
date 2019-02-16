$(document).on("click", ".image-modal", function(event) {
  $("#Modal").show();
  $("#ModalContent").attr("src", $(this).attr("src"));
});

$(document).on("click", "#Close", function(event) {
  $("#Modal").hide();
});