const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Verifica se o retorno da função é um array', () => {
    const result = productDetails('Produto1', 'Produto2');
    expect(Array.isArray(result)).toBe(true);
  });

  it('Verifica se o array retornado pela função contém dois itens', () => {
    const result = productDetails('Produto1', 'Produto2');
    expect(result.length).toBe(2);
  });

  it('Verifica se os dois itens dentro do array são objetos', () => {
    const result = productDetails('Produto1', 'Produto2');
    expect(typeof result[0]).toBe('object');
    expect(typeof result[1]).toBe('object');
  });

  it('Verifica se os objetos são diferentes entre si', () => {
    const result = productDetails('Produto1', 'Produto2');
    expect(result[0]).not.toBe(result[1]);
  });

  it('Verifica se os productIds terminam com 123', () => {
    const result = productDetails('Produto1', 'Produto2');
    expect(result[0].details.productId.endsWith('123')).toBe(true);
    expect(result[1].details.productId.endsWith('123')).toBe(true);
  });
});
