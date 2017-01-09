/**
 * Displays information about the method been called.
 * @param {String} id - id of method to display
 * @returns {void}
 */
const showMethodDetail = (id) => {
  $('.details pre div').map((index, domElement) => {
    domElement.style.display = 'none';
    if (id) {
      const attr = domElement.getAttribute('id');
      if (id === attr) {
        domElement.style.display = 'block';
      }
    }
  });
};

/**
 * Runs the method selected.
 * @returns {void}
 */
const runMethod = () => {
  let result = null;
  const methodCalled = $('#string-method').val();
  let value = $('#string-value').val();
  if (methodCalled in String.prototype && value.length > 0) {
    $('.details').css('display', 'block');
    try {
      result = value[methodCalled]();
    } catch (e) {
      result = e.message;
    }
    if (Array.isArray(result)) {
      result = JSON.stringify(result);
    }
    displayResult(result);
  }
};

/**
 * Displays the result of string manipulation.
 * @param {string} result - result to display.
 * @returns {void}
 */
const displayResult = (result) => {
  $('#string-result').text(result);
};

// Shows method about string class
$('#about-link').on('click', () => {
  $('.details').fadeOut();
  $('.about').fadeToggle();
});

// Runs string method base on current value selected
$('#string-method').on('change', (event) => {
  const methodCalled = event.target.value;
  runMethod();
  $('.details').fadeIn();
  $('.about').hide();
  showMethodDetail(methodCalled);
});

// Runs string method when form is submitted
$('form').on('submit', (event) => {
  runMethod();
  event.preventDefault();
});
