$(document).ready(function(){
// hides the tweet button and character counter
   //setting in the css file are set to "display: none;"
//increases the size of the text input box when the user clicks in the box and displays the tweet controls.
   $(".tweet-compose").on("click", function(){
      $(".tweet-compose").css("height", "5em");
      $("#tweet-controls").css("display", "block")
   })

   //Counts the characters entered into the tweet box and disables the twat button if charcter count exceeds the maximum allowed of 140

   $(".tweet-compose").on("keyup", function(){
      var keyCount = 140 - $(this).val().length;
      var maxChar = $("#char-count");
      maxChar.text(keyCount);

         if(keyCount <= 10){
            $('#char-count').css("color", "red");
            $(".charText").css("color", "red");
         }
         if(keyCount > 10){
            $('#char-count').css("color", "#999");
         }

         if(keyCount <= 0){
            $("#tweet-submit").prop("disabled",true);
         }
         if(keyCount > 0){
            $("#tweet-submit").prop("disabled",false);
         }
   })


   $("#tweet-submit").on("click", function(){
//submit twat when user clicks submit button
//using ".prepend" method
      var tweet = $(".tweet-compose").val();
      var content = $("#profile-summary");
      //var twat = $("#tweet-content");

///////////////posts tweet to stream/wall
      // $("#stream").prepend(content);
      $("#stream").prepend(tweet);
         $("#stream").prepend(content);


      // $("#dashboard").prepend(content);

      // $("#stream").prepend(fullname);
      // $("#stream").prepend(avatar);
//////////resets the twat text box back to original state
      $(".tweet-compose").css("height", "2.5em");
      $("#tweet-controls").css("display", "none");
///////////resets placeholder
      // $(".tweet-compose").val('Compse new Twat...')
   })
   $(".tweet-actions").hover(function(){
       $('.tweet-actions ul').show();
   },function(){
       $('.tweet-actions ul').hide();
   });
});
