const hasVowels = `(typeof Boolean): Returns true if the string contains 
vowels. This method must implement Regular Expression.`;

const toUpper  = `(typeof String): Returns the String in question but with all 
characters in upper cases as applicable. This method should be implemented 
without the use of the toUpperCase internal methods.`;

const toLower = `(typeof String): Returns the String in question but with 
all characters in their lower cases as applicable. This method should 
be implemented without the use of the toLowerCase internal methods.`;

const ucFirst = `(typeof String): Returns the String in question but changes 
the First Character to an Upper case. Make use of your toUpper method above 
to implement this method or a one-liner.`;

const isQuestion = `(typeof Boolean): Return true if the string is a question 
(ending with a question mark). This method must implement Regular 
Expression.`;

const words = `(typeof Object, instanceof Array): Returns a list of the words 
in the string, as an Array. This method must implement Regular Expression.`;

const wordCount = `(typeof Number): Returns the number of words in the string. 
It must make use of the words method above.`;

const toCurrency = `(typeof String): Returns a currency representation of the 
String e.g 11111.11 should be represented as 11,111.11.`;

const fromCurrency = `(typeof Number): Returns a number representation of the 
Currency String e.g 11,111.11 should return 11111.11`;

const inverseCase = `(typeof String): Returns each letter in the string as an 
inverse of its current case e.g Mr. Ben should return mR. bEN.`;

const alternatingCase = `(typeof String): Returns the letters in alternating 
cases. It must start with a lower case e.g Onomatopoeia should return 
oNoMaToPoEiA.`;

const getMiddle = `(typeof String): Returns the character(s) in the middle of 
the string e.g read should return ea and reads should return a.`;

const numberWords = `(typeof String): Returns the numbers in words 
e.g 325 should return three two five.`;

const isDigit = `(typeof Boolean): Returns true if the string is a 
digit(one number) e.g 3 should return true and 34 should return false. 
This method must implement Regular Expression.`;

const doubleCheck = `(typeof Boolean): Returns true if a string contains double 
characters(including whitespace character) e.g aa, !!, should return true.`;

module.exports =  {
  hasVowels,
  toUpper,
  toLower,
  ucFirst,
  isQuestion,
  words,
  wordCount,
  toCurrency,
  fromCurrency,
  inverseCase,
  alternatingCase,
  getMiddle,
  numberWords,
  isDigit,
  doubleCheck
};