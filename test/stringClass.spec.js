'use strict';

describe('String Class', function() {
  
  describe('Prototype hasVowels', function() {
    
    it('should return true if volew if found', function() {
      expect(String.hasVowels('Andela')).toBeTruthy;
    })
     
    it('should return false if volwes are not found', function() {
      expect(String.hasVowels('rythm')).toBeFalsy;
    })
  })

  describe('Prototype toUpper', function() {
    it('should not call the toUpperCase method', function() {
      var sentence = 'Andela is awesome';
      spyOn(String.prototype, 'toUpperCase');
      expect(String.toUpper(sentence)).not.toHaveBeenCalled();
    })

    it('should convert all lowercase character to uppercase', function() {
      var sentence = 'Andela is awesome';
      var convertedSentence = 'ANDELA IS AWESOME';
      expect(String.toUpper(sentence)).toEqual(convertedSentence);
    })
  })

  describe('Prototype toLower', function() {
    it('should not call the toUpperCase method', function() {
      var sentence = 'ANDELA IS awesome';
      spyOn(String.prototype, 'toLowerCase');
      expect(String.toUpper(sentence)).not.toHaveBeenCalled();
    })

    it('should convert all uppercase character to lowercase', function() {
      var sentence = 'ANDELA IS awesome';
      var convertedSentence = 'andela is awesome';
      expect(String.toUpper(sentence)).toEqual(convertedSentence);
    })
  })

  describe('Prototype ucFirst', function() {
    it('should convert first character of a {String} to uppercase', function() {
      expect(String.toUpper('programming')).toEqual('Programming');
    })

    it('should not call the toUpperCase method', function() {
      spyOn(String.prototype, 'toUpper');
      expect(String.toUpper('programming')).toHaveBeenCalled();
    })
  })

  describe('Prototype isQuestion', function() {
    it('should return true if a string is a question', function() {
      var sentence = 'ANDELA IS awesome?';
      expect(String.isQuestion(sentence)).toBeTruthy;
    })

    it('should call a regex method', function() {
      var sentence = 'ANDELA IS awesome?';
      spyOn(String.prototype, 'match')
      expect(String.isQuestion(sentence)).toHaveBeenCalled()
    })

    it('should return false if a string is not a question', function() {
      var sentence = 'ANDELA IS awesome';
      expect(String.isQuestion(sentence)).toBeFalsy;
    })
  })

  describe('Prototype words', function() {
    it('should return true if a string is a question', function() {
      var sentence = 'welcome to my world';
      expect(String.words(sentence)).toEqual(['welcome', 'to', 'my', 'world']);
    })

    it('should call a regex method', function() {
      var sentence = 'welcome to my world';
      spyOn(String.prototype, 'match')
      expect(String.isQuestion(sentence)).toHaveBeenCalled()
    });
  })

  describe('Prototype wordCount', function() {
    it('should return tnumber of words in a string', function() {
      var sentence = 'welcome to my world';
      expect(String.wordCount(sentence)).toEqual(4);
    })

    it('should call words method', function() {
      var sentence = 'welcome to my world';
      spyOn(String.prototype, 'word')
      expect(String.wordCount(sentence)).toHaveBeenCalled()
    });
  })

  describe('Prototype toCurrency', function() {
    it('should return currency representation of a string', function() {
      var currency = '56878746.00';
      expect(String.toCurrency(currency)).toEqual('56,878,746.00');
    })
  })

  describe('Prototype fromCurrency', function() {
    it('should return number representation of currency string', function() {
      var currency = '56,878,746.00';
      expect(String.fromCurrency(currency)).toEqual('56878746.00');
    })
  })

  describe('Prototype inversecase', function() {
    it('should return letters in alternating cases', function() {
      var word = 'Mr. Ben';
      expect(String.inverseCase(word)).toEqual('mR. bEN');
    })
  })

  describe('Prototype alternatingCase', function() {
    it('should return true if a string is a question', function() {
      var word = 'Onomatopoeia';
      expect(String.alternatingCase(word)).toEqual('oNoMaToPoEiA');
    })

    it('should start with a lower case', function() {
      var word = 'Mr. Ben';
      var inversedWord = String.inverseCase(word)
      expect(inversedWord[0] === 'm').toBeTruthy()
    });
  })

  describe('Prototype getMiddle', function() {
    it('should return the middle of the string', function() {
      var firstWord = 'read';
      var sencondWord = 'reads'
      expect(String.getMiddle(firstWord)).toEqual('ea');
      expect(String.getMiddle(secondWand)).toEqual('a');
    })
  })

  describe('Prototype numberWords', function() {
    it('should return numbers in words', function() {
      var number = 325;
      expect(String.numberWords(num)).toEqual('three two five');
    })
  })

  describe('Prototype isDigit', function() {
    it('should return true if the string is a digit(one number)', function() {
      var firstNnumber = 3;
      var secondNumber = 34
      expect(String.isDigit(firstNnumber)).toBeTruthy();
      expect(String.isDigit(secondNumber)).toBeFalsy()
    })
  })

  describe('Prototype doubleCheck', function() {
    it('should return true f a string contains double characters', function() {
      var sentence = 'welcome to my world';
      expect(String.doubleCheck(sentence)).toEqual(['welcome', 'to', 'my', 'world']);
    })
  })
});