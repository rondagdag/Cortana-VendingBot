var Promise = require('bluebird');

const catalogItems = [
    {
        id: 'bc861179-46a5-4645-a249-7eba2a4d9846',
        name: 'Jelly Beans',
        description: 'Oh So Yummy Candy Treats',
        price: 0.25,
        currency: 'USD',
        imageUrl: 'https://raw.githubusercontent.com/rondagdag/Cortana-VendingBot/master/images/candyman.jpg'
    }
];

const catalog = {

    getItemById: (id) => Promise.resolve(
        catalogItems.find((e) => e.id.toLowerCase() === id.toLowerCase())),

    getPromotedItem: () => Promise.resolve(
        catalogItems[0])

};

module.exports = catalog;