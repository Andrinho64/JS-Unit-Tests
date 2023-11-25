/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Deve retornar true quando o array contém apenas números', () => {
    const result = numbers([1, 2, 3, 4, 5]);
    expect(result).toBe(true);
  });

  it('Deve retornar false quando o array contém um número como string', () => {
    const result = numbers([1, 2, '3', 4, 5]);
    expect(result).toBe(false);
  });

  it('Deve retornar false quando o array contém pelo menos uma entrada não numérica', () => {
    const result = numbers([1, 'a', 3]);
    expect(result).toBe(false);
  });

  it('Deve retornar true para um array vazio', () => {
    const result = numbers([]);
    expect(result).toBe(true);
  });
});
