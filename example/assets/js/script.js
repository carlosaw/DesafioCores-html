function mudarCor(cor) {
    let quadrado = document.querySelector('.quadrado');
    switch (cor) {
        case 'azul':
            quadrado.style.backgroundColor = "#3498db";
            break;
        case 'verde':
            quadrado.style.backgroundColor = "#1f8c1f";
            break;
        case 'vermelho':
            quadrado.style.backgroundColor = "#ed0c0c";
            break;
        case 'amarelo':
            quadrado.style.backgroundColor = "#f2f208";
            break;
    }
}