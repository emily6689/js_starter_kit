Write a program that takes a string and translates it to Pig Latin.
 
Per the Wikipedia article, here are the rules to follow when performing the translation:
 
For words that begin with consonant sounds, the initial consonant or consonant cluster is moved to the end of the word, and "ay" is added, as in the following examples:
 
"happy" → "appyhay"
"duck" → "uckday"
"glove" → "oveglay"
For words that begin with vowels, "way" is added at the end of the word. Examples are:
 
"egg" → "eggway"
"inbox" → "inboxway"
"eight" → "eightway"
Create a test suite to help you with the implementation of a PigLatinTranslation class. Ensure it has the following test cases:
 
It should translate words that begin with a consonant
It should translate words that begin with a cluster of consonants
It should translate words that begin with vowels
Your tests should pass only when the set of criteria mentioned above are successfully met.