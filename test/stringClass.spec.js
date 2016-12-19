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

  describe('Prototype toCurrency', function() {
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

  describe('Prototype fromCurrency', function() {
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

  describe('Prototype alternatingCase', function() {
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

  describe('Prototype getMiddle', function() {
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

  describe('Prototype numberWords', function() {
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

  describe('Prototype isDigit', function() {
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

  describe('Prototype doubleCheck', function() {
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
});