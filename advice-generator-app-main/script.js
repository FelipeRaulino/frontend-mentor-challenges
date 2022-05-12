const adviceNumber = document.querySelector('.advice__number');
const adviceQuote = document.querySelector('.advice__quote');
const iconDice = document.querySelector('.icon-dice');

const preenchendoCampos = (dados) => {
  adviceNumber.innerHTML = "#"+dados.slip.id;
  adviceQuote.innerHTML = dados.slip.advice;
};

const atualizandoConselho = () => {
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => preenchendoCampos(data));
}

iconDice.addEventListener('click', atualizandoConselho);  

