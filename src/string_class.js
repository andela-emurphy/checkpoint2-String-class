/**
 * @class
 */
const StringProtoype  = {

  /**
   * Checks if string contains vowels.
   * @return {Boolean}
   */
  hasVowels() {
    return /[aeiou]/ig.test(this);
  },

  /**
   * Converts all characters in string to upper case.
   * @return {String}
   */
  toUpper() {
    return this.replace(/[a-z]/g, function(char) {
      return String.fromCharCode(char.charCodeAt() - 32);
    });
  },

  /**
   * Converts first Character of a string to an Upper case.
   * @return {String}
   */
  toLower() {
    return this.replace(/[A-Z]/g, function(char) {
      return String.fromCharCode(char.charCodeAt() + 32);
    });
  },

  /**
   * Converts all characters in string to lower case.
   * @return {String}
   */
  ucFirst() {
    return this[0].toUpper() + this.slice(1);
  },

  /**
   * Checks if a string is a question.
   * @return {Boolean}
   */
  isQuestion() {
    return /\?$/.test(this);
  },

  /**
   * Creates a list of the words in the string, as an Array.
   * @return {Array}
   */
  words() {
    return this.replace(/[^a-z]+\s/gi, '').split(/\s/);
  },
  
  /**
   * Returns the number of words in the string.
   * @return {Integer}
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * Returns a currency representation of the String.
   * @return {String}
   */
  toCurrency() {
    return this.replace(/./g, function(char, index, arr) {
      return index && char !== "." && 
        ((arr.length - index) % 3 === 0) ? ',' + char : char;
    });
  },

  /**
   * Returns a number representation of the Currency String.
   * @return {String}
   */
  fromCurrency() {
    return this.replace(/,/g, '');
  },

  /**
   * Returns each letter in the string as an inverse.
   * @return {String}
   */
  inverseCase() {
    return this.replace(/[a-z]/gi, function(char) {
      return char === char.toUpper()? char.toLower() : char.toUpper();
    });
  },


  /**
   * Returns the letters in alternating cases.
   * @return {String}
   */
  alternatingCase() {
    return this.replace(/[a-z]/gi, function(char, index) {
      return index % 2 === 0 ? char.toLower() : char.toUpper();
    });
  },

  /**
   *  Returns the character(s) in the middle of the string
   * 
   */
  getMiddle() {
    const middle = Math.round(this.length / 2);
    return this.length % 2? 
      this[middle - 1] : this.slice(middle -1, middle +1 );

  },

  /**
   * Returns the numbers in words.
   */
  numberWords() {
     const numbers = ['zero','one', 'two', 'three', 'four', 
      'five', 'six', 'seven', 'eight', 'nine'];
      return this.replace(/[\d]/g, function(num) {
        return numbers[num] + " ";
      }).trim();
  },

  /**
   * Returns true if the string is a digit(one number).
   */
  isDigit() {
    return /^\d$/.test(this);
  },

  /**
   * Returns true if a string contains double characters.
   */
  doubleCheck() {
    return /(.)\1/.test(this);
  }
};

Object.assign(String.prototype, StringProtoype);
