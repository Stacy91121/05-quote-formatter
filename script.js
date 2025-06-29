// Get references to the form and result elements. We use const because these variables won't be reassigned.
const form = document.getElementById('form'); // form element
const result = document.getElementById('result'); // result paragraph

// Add an event listener to the form for the submit event
form.addEventListener('submit', function(event) {
  // Prevent the page from reloading when the form is submitted
  event.preventDefault();

  // Get the values from the input fields
  var noun = document.getElementById('noun').value;
  var verb = document.getElementById('verb').value;
  var adjective = document.getElementById('adjective').value;

  // Create the sentence using template literals for streamlined formatting
  var sentence = `${verb}ing ${adjective} ${noun} is the real test of character. #LifeRules`;

  // Capitalize the first letter of the sentence
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  // Display the sentence in the result paragraph
  result.textContent = sentence;

  // Clear the input fields
  document.getElementById('noun').value = "";
  document.getElementById('verb').value = "";
  document.getElementById('adjective').value = "";
});
