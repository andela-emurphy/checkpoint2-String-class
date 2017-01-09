describe('String Class', () =>  {

  describe('Prototype hasVowels', () => {
    it('should return true if a vowel is found', () => {
      const word = 'andela';
      const wordTwo = 'AvErAgE';
      expect(word.hasVowels()).toBeTruthy();
      expect(wordTwo.hasVowels()).toBeTruthy();
    });

    it('should return false if vowel is not found', () => {
      const word = 'rythm';
      const wordTwo = 'Dr';
      expect(word.hasVowels()).toBeFalsy();
      expect(wordTwo.hasVowels()).toBeFalsy();
    });
  });

  describe('Prototype toUpper', () => {
    it('should not call toUpperCase method', () => {
      const sentence = 'Andela is awesome';
      spyOn(String.prototype, 'toUpperCase');
      sentence.toUpper();
      expect(sentence.toUpperCase)
        .not
        .toHaveBeenCalled();
    });

    it('should convert all lowercase character to uppercase', () => {
      const sentence = 'Andela is awesome';
      const sentenceTwo = 'I am limitLESS';
      const convertedSentenceTwo = 'I AM LIMITLESS';
      const convertedSentence = 'ANDELA IS AWESOME';
      expect(sentence.toUpper()).toBe(convertedSentence);
      expect(sentenceTwo.toUpper()).toBe(convertedSentenceTwo);
    });
  });

  describe('Prototype toLower', () => {
    it('should not call toLowerCase method', () => {
      const sentence = 'ANDELA IS awesome';
      spyOn(String.prototype, 'toLowerCase');
      sentence.toLower();
      expect(sentence.toLowerCase)
        .not
        .toHaveBeenCalled();
    });

    it('should convert all uppercase character to lowercase', () => {
      const sentence = 'ANDELA IS awesome';
      const convertedSentence = 'andela is awesome';
      const sentenceTwo = 'I am A WINNER';
      const convertedSentenceTwo = 'i am a winner';
      expect(sentence.toLower()).toBe(convertedSentence);
      expect(sentenceTwo.toLower()).toBe(convertedSentenceTwo);
    });
  });

  describe('Prototype ucFirst', () => {
    it('should convert first character of a string to uppercase', () => {
      const word = 'programming';
      const wordTwo = 'Murphy';
      const sentence = 'goD is good';
      expect(word.ucFirst()).toEqual('Programming');
      expect(sentence.ucFirst()).toEqual('GoD is good');
      expect(wordTwo.ucFirst()).toEqual('Murphy');
    });

    it('should  call toUpper method', () => {
      const word = 'programming';
      spyOn(String.prototype, 'toUpper');
      word.ucFirst();
      expect(word.toUpper).toHaveBeenCalled();
    });
  });

  describe('Prototype isQuestion', () => {
    it('should return true if a string is a question', () => {
      const sentence = 'ANDELA IS awesome?';
      const sentenceTwo = 'Today is hot? ';
      const sentenceThree = '%#&*# yo?'; // 
      expect(sentence.isQuestion()).toBeTruthy();
      expect(sentenceTwo.isQuestion()).toBeTruthy();
      expect(sentenceThree.isQuestion()).toBeTruthy();
    });

    it('should return false if a string is not a question', () => {
      const sentence = 'ANDELA IS awesome';
      const sentencetwo = '%^^&***?';
      expect(sentence.isQuestion()).toBeFalsy();
      expect(sentencetwo.isQuestion()).toBeFalsy();
    });

    it('should call a regex method', () => {
      const sentence = 'ANDELA IS awesome?';
      spyOn(RegExp.prototype, 'test');
      sentence.isQuestion();
      expect(RegExp.prototype.test).toHaveBeenCalled();
    });
  });

  describe('Prototype words', () => {
    it('should return an array of words in a string', () => {
      const sentence = 'Welcome to my world';
      const sentenceTwo = '123 are the first three numbers';
      const sentenceResult = ['Welcome', 'to', 'my', 'world'];
      const sentenceTwoResult = [
        '123',
        'are',
        'the',
        'first',
        'three',
        'numbers'
      ];
      expect(sentence.words()).toEqual(sentenceResult);
      expect(sentenceTwo.words()).toEqual(sentenceTwoResult);
    });

    it('should return an array ', () => {
      const sentence = 'Welcome to my world'; 
      expect(Array.isArray(sentence.words())).toBeTruthy();
    });

    it('should call a regex method', () => {
      const sentence = 'welcome to my world';
      spyOn(String.prototype, 'replace')
        .and
        .callThrough();
      spyOn(String.prototype, 'split')
        .and
        .callThrough();
      sentence.words();
      expect(sentence.replace).toHaveBeenCalled();
      expect(sentence.split).toHaveBeenCalled();
    });
  });

  describe('Prototype wordCount', () => {
    it('should return a type number', () => {
      const sentence = 'welcome to my world';
      const valueReturned = sentence.wordCount();
      expect(typeof valueReturned === 'number').toBeTruthy();
    });

    it('should return number of words in a string', () => {
      const sentence = 'welcome to my world';
      const word = 'sentence';
      expect(sentence.wordCount()).toEqual(4);
      expect(word.wordCount()).toEqual(1);
    });

    it('should call words method', () => {
      const sentence = 'welcome to my world';
      spyOn(String.prototype, 'words')
        .and
        .callThrough();
      sentence.wordCount();
      expect(sentence.words).toHaveBeenCalled();
    });
  });

  describe('Prototype toCurrency', () => {
    it('should return currency representation of a string', () => {
      const currency = '56878746.00';
      const currencyTwo = '123747.2222';
      const currencyThree = '111111.2';
      const currencyFour = '111111';
      expect(currency.toCurrency()).toEqual('56,878,746.00');
      expect(currencyTwo.toCurrency()).toEqual('123,747.22');
      expect(currencyThree.toCurrency()).toEqual('111,111.20');
      expect(currencyFour.toCurrency()).toEqual('111,111.00');
    });

    it('should throw an error for invalid input', () => {
      const currency = '1111Andela';
      const currencyTwo = 'moleye';
      expect(() => currency.toCurrency() )
        .toThrowError(TypeError, 'Invalid input');
      expect(() =>  currencyTwo.toCurrency() )
        .toThrowError(TypeError, 'Invalid input');
    });
  });

  describe('Prototype fromCurrency', () => {
    it('should return a type number', () => {
      const currency = '56,878,746.00';
      const returnedValue = currency.fromCurrency();
      expect(typeof returnedValue === 'number').toBeTruthy();
    });

    it('should return number representation of currency string', () => {
      const currency = '56,878,746.00';
      const currencyTwo = '11,111,111.11';
      expect(currency.fromCurrency()).toEqual(56878746.00);
      expect(currencyTwo.fromCurrency()).toEqual(11111111.11);
    });

    it('should throw a type error for invalid characters', () => {
      const currency = 'Andela';
      expect(() => { currency.fromCurrency(); })
        .toThrowError(TypeError, 'Invalid input');
    });
  });

  describe('Prototype inverseCase', () => {
    it('should return letters in inverse case', () => {
      const word = 'Mr. Ben';
      const wordTwo = 'despicable ME';
      expect(word.inverseCase()).toEqual('mR. bEN');
      expect(wordTwo.inverseCase()).toEqual('DESPICABLE me');
    });
  });

  describe('Prototype alternatingCase', () => {
    it('should return letters in alternating case', () => {
      const word = 'Onomatopoeia';
      const wordTwo = 'Groovy';
      expect(word.alternatingCase()).toEqual('oNoMaToPoEiA');
      expect(wordTwo.alternatingCase()).toEqual('gRoOvY');
    });

    it('should start with a lower case', () => {
      const word = 'Mr. Ben';
      const inversedWord = word.alternatingCase();
      expect(inversedWord[0] === 'm').toBeTruthy();
    });
  });

  describe('Prototype getMiddle', () => {
    it('should return the middle of the string', () => {
      const firstWord = 'read';
      const sencondWord = 'reads';
      expect(firstWord.getMiddle()).toEqual('ea');
      expect(sencondWord.getMiddle()).toEqual('a');
    });
  });

  describe('Prototype numberWords', () => {
    it('should return numbers in words', () => {
      const number = '325';
      const numberResult = 'three two five';
      const numberTwo = '87202';
      const numberTwoResult = 'eight seven two zero two';
      expect(number.numberWords()).toBe(numberResult);
      expect(numberTwo.numberWords()).toBe(numberTwoResult);
    });
  });

  describe('Prototype isDigit', () => {
    it('should return true if the string is a digit(one number)', () => {
      const firstNnumber = '3';
      const secondNumber = '9';
      expect(firstNnumber.isDigit()).toBeTruthy();
      expect(secondNumber.isDigit()).toBeTruthy();
    });
    it('should return false if the string is not a digit', () => {
      const firstNnumber = 'Andela';
      const secondNumber = '34';
      expect(firstNnumber.isDigit()).toBeFalsy();
      expect(secondNumber.isDigit()).toBeFalsy();
    });

  });

  describe('Prototype doubleCheck', () => {
    it('should return true for a string contains double characters', () => {
      const sentence = 'aa bb cc';
      const sentenceTwo = 'hy guys!!';
      const sentenceThree = 'Hy  guys!'; //check for double space
      expect(sentence.doubleCheck()).toBeTruthy();
      expect(sentenceTwo.doubleCheck()).toBeTruthy();
    });

    it('should return false if double characters not found', () => {
      const sentence = 'This is bad';
      const sentenceTwo = 'Hy guys!';
      expect(sentence.doubleCheck()).toBeFalsy();
      expect(sentenceTwo.doubleCheck()).toBeFalsy();
    });

    it('should call a regex method', () => {
      const sentence = 'welcome to my world';
      spyOn(RegExp.prototype, 'test');
      sentence.doubleCheck();
      expect(RegExp.prototype.test).toHaveBeenCalled();
    });
  });
});
