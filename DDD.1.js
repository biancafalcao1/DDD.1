const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para determinar a cidade pelo DDD
function getCidade(ddd) {
  switch (ddd) {
    case 61:
      return 'Brasília';
    case 71:
      return 'Salvador';
    case 11:
      return 'São Paulo';
    case 21:
      return 'Rio de Janeiro';
    case 32:
      return 'Juiz de Fora';
    case 19:
      return 'Campinas';
    case 27:
      return 'Vitória';
    case 31:
      return 'Belo Horizonte';
    default:
      return 'DDD não cadastrado';
  }
}

rl.question('Digite o número do DDD: ', (answer) => {
  const ddd = parseInt(answer);

  // Verifica se a entrada é um número
  if (isNaN(ddd)) {
    console.log('Por favor, insira um número válido para o DDD.');
    rl.close();
    return;
  }

  // Obtém a cidade correspondente ao DDD
  const cidade = getCidade(ddd);

  // Exibe o resultado
  console.log(cidade);

  rl.close();
});
