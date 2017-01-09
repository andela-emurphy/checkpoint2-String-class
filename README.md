[![Coverage Status](https://coveralls.io/repos/github/andela-emurphy/checkpoint2-String-class/badge.svg?branch=develop)](https://coveralls.io/github/andela-emurphy/checkpoint2-String-class?branch=develop) [![Build Status](https://travis-ci.org/andela-emurphy/checkpoint2-String-class.svg?branch=develop)](https://travis-ci.org/andela-emurphy/checkpoint2-String-class) <a href="https://codeclimate.com/github/andela-emurphy/checkpoint2-String-class"><img src="https://codeclimate.com/github/andela-emurphy/checkpoint2-String-class/badges/gpa.svg" /></a>

# Checkpoint 2 String Class

## About String Class


String class is an Andela checkpoint project that improves the native javascript String Object.

This Project is meant to add additional features to the String Object by extending it's prototype.

### List Of New Methods Added.
------------------------------
* hasVowels - Check to see if a string contains vowels

* toUpper - Converts the string into uppercase

* toLower - Converts the string into lowercase

* ucFirst - Converts the first character of a string into uppercase

* isQuestion - Check to see if a string is a question (ending with '?')

* words - Return all words in a string as an array

* wordCount - Counts and return the number of words in a string

* toCurrency - Converts a string such as '11111` to currency format (11,111)

* fromCurrency - Converts a string in currency format into a number e.g (11,111 -> 11111)

* inverseCase - Return the string inverting the cases of its characters e.g ('AbC' -> 'aBc')

* alternatingCase - Alternates cases of string characters starting with lowercase e.g ('hello' -> 'hElLo')

* getMiddle - Return the middle character(s) in a string e.g ('ABCD' -> 'BC')

* numberWords - Returns the numbers in a string in words e.g ('112' -> 'one one two')

* isDigit - Returns true if a string is a single digit

* doubleCheck - Returns true if a string contains double characters such as 'pp' in 'pappa'



### How to install
-----------
* Clone this repository:: - `git clone git@github.com:andela-emurphy/checkpoint2-String-class.git`

* Change directory: - `cd checkpoint2-String-class/test`

* Run - `npm install`

* Run - `bower install`

* Test - `run npm test`


### Alternative Use
-------------------
* Add to your HTML script tag
* Call the methods from your frontend web app

### Technologies Used
----------------------
* Javascript (ES6)
* Jasmine
* Karma
* Node.js

### How to Contribute
----------------------
* Fork or clone the repo to your folder.
* Change directory: cd checkpoint2-String-class
* Run npm install
* Create a feature branch and work on it.
* Push to the remote branch.
* Open a Pull Request to develop branch.


### Limitations
---------------------------------------------
The program does not run on all web browsers.