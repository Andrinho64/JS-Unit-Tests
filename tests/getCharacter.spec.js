/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro    |      Nome       |    Classe   |              Frases
 da função    |                 |             |
----------------------------------------------------------------------------------
"Arya"        |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
"Brienne"     |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
"Melissandre" |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna `undefined`.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

- OBS.: O parâmetro não é CASE SENSITIVE, ou seja, não faz diferenças entre maiúsculas e minúsculas. Portanto Arya, ArYa e ARYA têm o mesmo resultado.

Escreva pelo menos seis testes para essa função garantindo que a implementação de getCharacter está correta.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    const result = getCharacter();
    expect(result).toBeUndefined();
  });

  it('Testa se a função `getCharacter` retorna o objeto correto para o parâmetro "Arya".', () => {
    const result = getCharacter('Arya');
    const expected = {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.']
    };
    expect(result).toEqual(expected);
  });

  it('Testa se a função `getCharacter` retorna o objeto correto para o parâmetro "Brienne".', () => {
    const result = getCharacter('Brienne');
    const expected = {
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']
    };
    expect(result).toEqual(expected);
  });

  it('Testa se a função `getCharacter` retorna o objeto correto para o parâmetro "Melissandre".', () => {
    const result = getCharacter('Melissandre');
    const expected = {
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']
    };
    expect(result).toEqual(expected);
  });

  it('Testa se o parâmetro é case insensitive (letras maiúsculas ou minúsculas não fazem diferença).', () => {
    const resultUpper = getCharacter('ARYA');
    const resultMixed = getCharacter('ArYa');
    const resultLower = getCharacter('arya');

    const expected = {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.']
    };

    expect(resultUpper).toEqual(expected);
    expect(resultMixed).toEqual(expected);
    expect(resultLower).toEqual(expected);
  });

  it('Testa se ao passar um nome que não está na tabela, a função retorna undefined.', () => {
    const result = getCharacter('Tyrion');
    expect(result).toBeUndefined();
  });
});
