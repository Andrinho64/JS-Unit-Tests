/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  let sum = 0;
  let count = 0;

  // Itera sobre os elementos do array
  for (let i = 0; i < array.length; i += 1) {
    // Verifica se o elemento é numérico
    if (typeof array[i] !== 'number') {
      return undefined;
    }
    // Soma os valores e incrementa o contador
    sum += array[i];
    count += 1;
  }

  const avg = Math.round(sum / count);
  return avg;
};

module.exports = average;
