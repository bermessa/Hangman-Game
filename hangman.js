var words = ["broomstick", "cemetery", "bones", "ghost", "skeleton"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var wins = 0;
var guesses = 0;
var guessedLetters = [];


//current word
for (var i = 0; i < words.length; i++) {
    $("currentWord").text(words[i]);
}

//letters guessed
document.onkeyup = function(event) {
    var userGuess = event.key;
    guessedLetters.append(userGuess);
    $("lettersGuessed").text(userGuess);

};
