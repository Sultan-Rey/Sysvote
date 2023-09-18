$(".info-item .btn").click(function(){
  $(".container").toggleClass("log-in");
  $("#header").hide();
});
$(".info-item #catch").click(function(){
  $("#header").show();
});
$(".container-form .btn").click(function(){
  $(".container").addClass("active");
  $("#header").hide;
  document.getElementById("header").style.display="none";
});