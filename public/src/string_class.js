/**
 * Prototype object
 */
const StringPrototype = {

  /**
   * Checks if string contains vowel.
   * @return {Boolean} Returns true or false.
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
   * Converts all characters in string to upper case.
   * @return {String} Returns all characters in uppercase.
   */
  toUpper() {
    return this.replace(/[a-z]/g, char => 
      String.fromCharCode(char.charCodeAt() - 32));
  },

  /**
   * Converts all characters in string to lower case.
   * @return {String} Returns first character in lowercase.
   */
  toLower() {
    return this.replace(/[A-Z]/g, char => 
      String.fromCharCode(char.charCodeAt() + 32));
  },

  /**
   * Converts first Character of a string to an Upper case.
   * @return {String} Returns first character as string.
   */
  ucFirst() {
    return `${this[0].toUpper()}${this.slice(1)}`;
  },

  /**
   * Checks if a string is a question.
   * @return {Boolean} Returns true or false.
   */
  isQuestion() {
    return /[a-z\d](?=\?)/i.test(this.trim());
  },

  /**
   * Creates a list of the words in the string.
   * @return {Array} Returns a list of words.
   */
  words() {
    return this.replace(/[^a-z\d\s]/ig, '')
      .split(/\s+/);
  },

  /**
   * Returns the number of words in the string.
   * @return {Number} Returns the count of words in string.
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * Creates a currency representation of the String.
   * @return {String} Returns string a currency.
   */
  toCurrency() {
    const newString = Number(this).toFixed(2);
    if (isNaN(newString)) {
      throw new TypeError('Invalid input');
    }
    return newString.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  },

  /**
   * Returns a number representation of the Currency String.
   * @return {Number} Number - converted currency.
   */
  fromCurrency() {
    const number = parseFloat(this.replace(/,/g, ''));
    if(isNaN(number)) {
      throw new TypeError('Invalid input');
    }
    return number;
  },

  /**
   * Converts each letter in a string to its inverse.
   * @return {String} Returns inverse of string.
   */
  inverseCase() {
    return this.replace(/[a-z]/gi, char => 
      char === char.toUpper() ? char.toLower() : char.toUpper());
  },


  /**
   * Converts each letters in a string to its alternating cases.
   * @return {String} Returns a string of alternate characters
   */
  alternatingCase() {
    return this.replace(/[a-z]/gi, (char, index) => 
    index % 2 === 0 ? char.toLower() : char.toUpper());
  },

  /**
   * Returns the character(s) in the middle of the string
   * @return {String}  String - center character.
   */
  getMiddle() {
    const middle = Math.round(this.length / 2);
    return this.length % 2 ?
      this[middle - 1] : this.slice(middle - 1, middle + 1);
  },

  /**
   * Converts numbers to words.
   * @return {String} Returns a string of words.
   */
  numberWords() {
    const numbers = ['zero', 'one', 'two', 'three', 'four',
      'five', 'six', 'seven', 'eight', 'nine'
    ];
    return this.replace(/\d/g, num => `${numbers[num]} `)
      .trim();
  },

  /**
   * Checks if a string is a digit(one number).
   * @return {Boolean} Returns true or false.
   */
  isDigit() {
    return /^\d$/.test(this);
  },

  /**
   * Checks if a string contains double characters.
   * @returns {Boolean} Returns true or false.
   */
  doubleCheck() {
    return /(.)\1/.test(this);
  }
};

Object.assign(String.prototype, StringPrototype);
