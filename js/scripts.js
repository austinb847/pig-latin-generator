var toPigLatin = function(sentence) {
  var letters = /^[A-Za-z]+$/;
  var noSpaceSentence = sentence.replace(/ /g, '');
  
  if (noSpaceSentence.match(letters)) {
    var words = sentence.split(' ');
    words.forEach(function(word) {
      if (word.match(/^[aeiou].*/i)) {
        console.log(word + "ay");
      }
    })

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