function mudarCor(cor) {
  let quadrado = document.querySelector('.quadrado');
  let fonte = document.querySelector('.font');
  switch(cor) {
    case 'azul':
      quadrado.style.backgroundColor = '#0000FF';
      fonte.style.color = '#0000FF';
      break;
    case 'vermelho':
      quadrado.style.backgroundColor = '#FF0000';
      fonte.style.color = '#FF0000';
      break;
    case 'verde':
      quadrado.style.backgroundColor = '#00FF00';
      fonte.style.color = '#00FF00';
      break;
    case 'amarelo':
      quadrado.style.backgroundColor = '#f2f208';
      fonte.style.color = '#f2f208';
      break; 
  }
}