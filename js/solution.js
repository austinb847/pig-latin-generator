// Business Logic
function translate(sentence) {
  var wordArray = sentence.split(" ");
  var endArray = wordArray.map(function(word) {
    return word.match(/[aeiou]/gi) ? atinlay(word) : word;
  });
  return endArray.join(" ");
}

// only runs if contains vowels
function atinlay(word) {
  var done = false;
  var vowels = ["a","e","i","o","u"];
  while (!done) {
    if (vowels.includes(word[0])) {
      if (word[word.length - 1] == "q" && word[0] == "u") {
        word = shiftLetters(word);
      } else {
        word = word.length == 1 ? word + "way" : word + "ay";
        done = true;
      }
    } else {
      word = shiftLetters(word);
    }
  }
  return word;
}

function shiftLetters(word) {
  var letterArray = word.split('');
  var letter = letterArray.shift();
  return letterArray.join('') + letter;
}

// UI Logic

$(document).ready(function() {
  $("#myForm").submit(function(e) {
    e.preventDefault();
    var sentence = $("#sentence").val();
    var entencesay = translate(sentence);
    $("#output").text(entencesay);
  });
});