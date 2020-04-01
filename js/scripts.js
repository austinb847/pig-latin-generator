var toPigLatin = function(sentence) {
  var letters = /^[A-Za-z]+$/;
  if (sentence.match(letters)) {
    return true;
  } else {
    return sentence;
  }
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