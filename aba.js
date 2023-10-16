const properties = document.querySelectorAll('.property');

properties.forEach(property => {
  const decrementButton = property.querySelector('.robu');
  const incrementButton = property.querySelector('.geral');
  const valueElement = property.querySelector('.value');

  let valor = 0;

  decrementButton.addEventListener('click', () => {
    if (valor > 0) {
      valor--;
      valueElement.textContent = valor;
    }
  });

  incrementButton.addEventListener('click', () => {
    if (valor < 10) {
      valor++;
      valueElement.textContent = valor;
    }
  });
});