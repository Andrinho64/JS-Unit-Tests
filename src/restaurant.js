/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menuData) => {
    const menu = {
      fetchMenu: () => menuData,
      consumption: [],
      order: (item) => {
        if (menuData.food && menuData.food[item]) {
          menu.consumption.push(item);
        } else if (menuData.drinks && menuData.drinks[item]) {
          menu.consumption.push(item);
        } else {
          return 'Item indisponível';
        }
      },
      pay: () => {
        const total = menu.consumption.reduce((acc, item) => {
          const price = menuData.food[item] || menuData.drinks[item];
          return acc + price;
        }, 0);
        return total + total * 0.1;
      },
    };
  
    return menu;
  };
  
  module.exports = createMenu;  
