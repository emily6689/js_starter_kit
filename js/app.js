//Get user input for the phrase
var statement = prompt("Enter the phrase you want to translate");

var VOWELS = ['a', 'e', 'i', 'o', 'u'];

function translate(word){

	var wordArray = word.split("");

	if (VOWELS.indexOf(wordArray[0]) >= 0){
		return wordArray.concat("way").join("");
	}
	else{
		firstVowelIndex = findFirstVowel(wordArray);
		wordArray = wordArray.concat(wordArray.splice(0,firstVowelIndex));
		wordArray = wordArray.concat("ay")
		return wordArray.join("");
	};
	
};

function findFirstVowel(word){
	for (var i=0; i < word.length; i++){
		if(VOWELS.indexOf(word[i]) >= 0){
			return i;
		};
	};
};



//Alert the translated message
alert(translate(statement));
