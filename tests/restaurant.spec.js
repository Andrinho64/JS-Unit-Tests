const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Testa se a função createMenu retorna um objeto que possui a chave fetchMenu', () => {
    const menuObject = createMenu({});
    expect(menuObject).toHaveProperty('fetchMenu');
  });

  it('Testa se o valor da chave fetchMenu do objeto retornado pela função createMenu é uma função', () => {
    const menuObject = createMenu({});
    expect(typeof menuObject.fetchMenu).toBe('function');
  });

  it('Testa se o objeto retornado pela função createMenu().fetchMenu() possui as chaves food e drinks', () => {
    const menuObject = createMenu({ food: {}, drinks: {} });
    const fetchedMenu = menuObject.fetchMenu();
    expect(fetchedMenu).toHaveProperty('food');
    expect(fetchedMenu).toHaveProperty('drinks');
  });

  it('Testa se o menu passado para createMenu é idêntico ao menu recuperado por fetchMenu', () => {
    const menuData = { food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } };
    const menuObject = createMenu(menuData);
    const fetchedMenu = menuObject.fetchMenu();
    expect(fetchedMenu).toEqual(menuData);
  });

  it('Testa se a propriedade consumption do objeto retornado por createMenu retorna um array vazio', () => {
    const menuObject = createMenu({ food: {}, drinks: {} });
    expect(menuObject.consumption).toEqual([]);
  });

  it('Testa se order exibe "Item indisponível" e não altera consumption para um item não existente no menu', () => {
    const menuData = { food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } };
    const menuObject = createMenu(menuData);
    
    const initialConsumption = menuObject.consumption.slice();
    const result = menuObject.order('picanha');
    
    expect(result).toBe('Item indisponível');
    expect(menuObject.consumption).toEqual(initialConsumption);
  });

  it('Testa se order adiciona itens ao consumption', () => {
    const menuData = { food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } };
    const menuObject = createMenu(menuData);

    menuObject.order('coxinha');
    menuObject.order('sanduiche');
    menuObject.order('cerveja');

    expect(menuObject.consumption).toEqual(['coxinha', 'sanduiche', 'cerveja']);
  });

  it('Testa se order aceita pedidos repetidos', () => {
    const menuData = { food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } };
    const menuObject = createMenu(menuData);

    menuObject.order('coxinha');
    menuObject.order('coxinha');
    menuObject.order('coxinha');

    expect(menuObject.consumption).toEqual(['coxinha', 'coxinha', 'coxinha']);
  });

  it('Testa se a função pay retorna a soma dos preços com 10% de acréscimo', () => {
    const menuData = { food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } };
    const menuObject = createMenu(menuData);

    menuObject.order('coxinha');
    menuObject.order('sanduiche');
    menuObject.order('cerveja');

    const totalPrice = menuObject.pay();
    const expectedPrice = 3.90 + 9.90 + 6.90;
    const expectedTotalPrice = expectedPrice + expectedPrice * 0.1;

    expect(totalPrice).toBe(expectedTotalPrice);
  });
});

