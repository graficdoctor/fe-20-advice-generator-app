const adviceBtn = document.getElementById('advice-button');
const adviceId = document.getElementById('advice-id');
const adviceQuote = document.getElementById('advice-quote');

generateQuote();

adviceBtn.addEventListener('click', function () {
  generateQuote();
});

function generateQuote() {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      adviceId.innerText = data.slip.id;
      adviceQuote.innerText = data.slip.advice;
    });
}
