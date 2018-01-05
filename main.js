$("document").ready(function() {
   var audio1 = $(".woo-hoo")[0];
   var audio2 = $(".ooh")[0];

   $(".mario-container-2").hide();

   $(".mario-container-1").on("click", function() {
      audio1.play();
      $(".mario-container-1").hide();
      $(".mario-container-2").show();
   });

   $(".mario-container-2").on("click", function() {
      audio2.play();
      $(".mario-container-2").hide();
      $(".mario-container-1").show();
   });

});