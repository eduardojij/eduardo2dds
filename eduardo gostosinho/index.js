alert('Olá, seja bem-vindo ao curso de JavaScript!');

let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:'); // Aqui ela nasce como String

num1 = parseFloat(num1); // Aqui você "atualiza" ela para Number (sem o let)
num2 = parseFloat(num2); // Aqui você "atualiza" ela para Number (sem o let)

if (isNaN(num1) || isNaN(num2)) {
    alert('Por favor, digite apenas números válidos.');
    // Recarregar a página ou algo, mas para simplicidade, definir como 0
    num1 = 0;
    num2 = 0;
}

let num3 = parseFloat(prompt('Digite o terceiro número:'));
let num4 = parseFloat(prompt('Digite o quarto número:'));

if (isNaN(num3) || isNaN(num4)) {
    alert('Por favor, digite apenas números válidos.');
    num3 = 0;
    num4 = 0;
}

let num5 = +prompt('Digite o quinto número:');
let num6 = +prompt('Digite o sexto número:');

if (isNaN(num5) || isNaN(num6)) {
    alert('Por favor, digite apenas números válidos.');
    num5 = 0;
    num6 = 0;
}

let resultado = num1 + num2;
let resultado2 = num3 + num4;
let resultado3 = num5 + num6;

alert('O resultado da primeira soma  é: ' + resultado);
alert('O resultado da segunda soma é: ' + resultado2);
alert('O resultado da terceira soma é: ' + resultado3);

// Selecionamos o "buraco" que criamos no HTML
let elementoHTML = document.getElementById('meus-resultados');

// Inserimos o conteúdo lá dentro usando crases (template strings) para ficar organizado
elementoHTML.innerHTML = `
    <p>O resultado da primeira soma é: <strong>${resultado}</strong></p>
    <p>O resultado da segunda soma é: <strong>${resultado2}</strong></p>
    <p>O resultado da terceira soma é: <strong>${resultado3}</strong></p>
`;