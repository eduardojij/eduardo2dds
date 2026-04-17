function verificarAprovacao(nota1, nota2, frequencia) {
  // Calcula a média aritmética das duas notas
  const media = (nota1 + nota2) / 2;
  
  // Verifica se o aluno atende aos critérios de aprovação
  if (media >= 7 && frequencia >= 75) {
    return {
      aprovado: true,
      media: media,
      frequencia: frequencia,
      mensagem: "Aluno aprovado!"
    };
  } else {
    return {
      aprovado: false,
      media: media,
      frequencia: frequencia,
      mensagem: "Aluno reprovado."
    };
  }
}

// Exemplo de uso:
console.log(verificarAprovacao(8, 9, 80));
console.log(verificarAprovacao(6, 7, 75));
console.log(verificarAprovacao(8, 8, 70));
