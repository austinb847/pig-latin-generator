var toPigLatin = function(sentence) {
  var letters = /^[A-Za-z]+$/;
  var noSpaceSentence = sentence.replace(/ /g, '');
  
  if (noSpaceSentence.match(letters)) {
    var words = sentence.split(' ');
    var generatedPigLatin = []; 
    var consonents = /^[bcdfghjklmnpqrstvwxyz].*/i;
    var vowels = /^[aeiou].*/i;
    words.forEach(function(word) {
      if (word.match(vowels)) {
        generatedPigLatin.push(word + "ay");
      } else if (word.match(consonents)) {
        var consChars = [];
        for(i = 0; i < word.length; i++) {
          if(word[i].match(consonents)) {
            consChars.push(word[i]);
          } else {
            break
          }
        }
        var consStr = consChars.join("");
        var newWord = word.substring(consChars.length) + consStr + "ay";
        generatedPigLatin.push(newWord);
        /* var newWord = word.substring(1) + word.substring(0,1) + "ay";
        generatedPigLatin.push(newWord); */
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


