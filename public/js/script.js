const form = document.getElementsByTagName('form')[0];


form.addEventListener('submit', (event) => {
  console.log('form submited');
  event.preventDefault();
});