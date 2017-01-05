describe('String Class', () => {

  describe('Prototype hasVowels', () => {
    it('should return true if vowel is found', () => {
      expect('andela'.hasVowels()).toBeTruthy();
      expect('AvErAgE'.hasVowels()).toBeTruthy();
    });

    it('should return false if vowel is not found', () => {
      expect('rythm'.hasVowels()).toBeFalsy();
      expect('Dr'.hasVowels()).toBeFalsy();
    });
  });

  describe('Prototype toUpper', () => {
    it('should not call toUpperCase method', () => {
      const sentence = 'Andela is awesome';
      spyOn(String.prototype, 'toUpperCase');
      sentence.toUpper();
      expect(sentence.toUpperCase).not.toHaveBeenCalled();
    });

    it('should convert all lowercase character to uppercase', () => {
      const sentence = 'Andela is awesome';
      const convertedSentence = 'ANDELA IS AWESOME';
      expect(sentence.toUpper()).toBe(convertedSentence);
      expect('enaho murphy'.toUpper()).toBe('ENAHO MURPHY');
    });
  });

  describe('Prototype toLower', () => {
    it('should not call the toLowerCase method', () => {
      const sentence = 'ANDELA IS awesome';
      spyOn(String.prototype, 'toLowerCase');
      sentence.toLower();
      expect(sentence.toLowerCase).not.toHaveBeenCalled();
    });

    it('should convert all uppercase character to lowercase', () => {
      const sentence = 'ANDELA IS awesome';
      const convertedSentence = 'andela is awesome';
      expect(sentence.toLower()).toBe(convertedSentence);
    });
  });

  describe('Prototype ucFirst', () => {
    it('should convert first character of a {String} to uppercase', () => {
      expect('programming'.ucFirst()).toEqual('Programming');
    });

    it('should  call  toUpper method', () => {
      const word = 'programming';
      spyOn(String.prototype, 'toUpper');
      word.ucFirst();
      expect(word.toUpper).toHaveBeenCalled();
    });
  });

  describe('Prototype isQuestion', () => {
    it('should return true if a string is a question', () => {
      const sentence = 'ANDELA IS awesome?';
      expect(sentence.isQuestion()).toBeTruthy();
    });

    it('should return false if a string is not a question', () => {
      const sentence = 'ANDELA IS awesome';
      expect(sentence.isQuestion()).toBeFalsy();
    });

    it('should call a regex method', () => {
      const sentence = 'ANDELA IS awesome?';
      spyOn(RegExp.prototype, 'test');
      sentence.isQuestion();
      expect(RegExp.prototype.test).toHaveBeenCalled();
    });
  });

  describe('Prototype words', () => {
    it('should return true if a string is a question', () => {
      const sentence = 'welcome to my world';
      expect(sentence.words()).toEqual(['welcome', 'to', 'my', 'world']);
    });

    it('should call a regex method', () => {
      const sentence = 'welcome to my world';
      spyOn(String.prototype, 'replace').and.callThrough();
      spyOn(String.prototype, 'split').and.callThrough();
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
      expect(sentence.wordCount()).toEqual(4);
      expect('sentence'.wordCount()).toEqual(1);
    });

    it('should call words method', () => {
      const sentence = 'welcome to my world';
      spyOn(String.prototype, 'words').and.callThrough();
      sentence.wordCount();
      expect(sentence.words).toHaveBeenCalled();
    });
  });

  describe('Prototype toCurrency', () => {
    it('should return currency representation of a string', () => {
      const currency = '56878746.00';
      expect(currency.toCurrency()).toEqual('56,878,746.00');
      expect('123747.2222'.toCurrency()).toEqual('123,747.22');
      expect('111111.2'.toCurrency()).toEqual('111,111.20');
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
      expect(currency.fromCurrency()).toEqual(56878746.00);
    });
  });

  describe('Prototype inversecase', () => {
    it('should return letters in alternating cases', () => {
      const word = 'Mr. Ben';
      const wordTwo = 'despicable ME'
      expect(word.inverseCase()).toEqual('mR. bEN');
      expect(wordTwo.inverseCase()).toEqual('DESPICABLE me');
    });
  });

  describe('Prototype alternatingCase', () => {
    it('should return true if a string is a question', () => {
      const word = 'Onomatopoeia';
      expect(word.alternatingCase()).toEqual('oNoMaToPoEiA');
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
      expect(number.numberWords()).toBe('three two five');
    });
  });

  describe('Prototype isDigit', () => {
    it('should return true if the string is a digit(one number)', () => {
      const firstNnumber = "3";
      const secondNumber = "34";
      expect(firstNnumber.isDigit()).toBeTruthy();
      expect(secondNumber.isDigit()).toBeFalsy();
    });
  });

  describe('Prototype doubleCheck', () => {
    it('should return true f a string contains double characters', () => {
      const sentence = 'aa bb cc';
      expect(sentence.doubleCheck()).toBeTruthy();
    });

    it('should call a regex method', () => {
      const sentence = 'welcome to my world';
      spyOn(RegExp.prototype, 'test');
      sentence.doubleCheck();
      expect(RegExp.prototype.test).toHaveBeenCalled();
    });
  });
});