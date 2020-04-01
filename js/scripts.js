var toPigLatin = function(sentence) {
  return false;
};


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userSentence = $("#userSentence").val();
    var result = toPigLatin(userSentence);

    $(".originalSentence").text(userSentence);
    $(".generatedSentence").text(result);

    $("#result").show();
  });
});