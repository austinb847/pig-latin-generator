var toPigLatin = function(sentence) {
  var letters = /^[A-Za-z]+$/;
  var noSpaceSentence = sentence.replace(/ /g, '');
  
  if (noSpaceSentence.match(letters)) {
    var words = sentence.split(' ');
    var generatedPigLatin = []; 
    var consonents = /^[bcdfghjklmnpqrstvwxyz].*/i;
    words.forEach(function(word) {
      if (word.match(/^[aeiou].*/i)) {
        generatedPigLatin.push(word + "ay");
      } else if (word.match(consonents)) {
        var newWord = word.substring(1) + word.substring(0,1) + "ay";
        generatedPigLatin.push(newWord);
      } 
    })
    return generatedPigLatin.join(" "); 

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