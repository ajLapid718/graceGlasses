const db = require('../db.js');
const Sequelize = require('sequelize');

const Glasses = db.define('glasses', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://static.zennioptical.com/marketing/campaign/premium-sunglasses/Premium-Sunglasses-Men/premium-sunglasses-plp-men-md.jpg',
  },
  upc: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  shape: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.ENUM('Men', 'Women', 'Kids')
  }
});

Glasses.addHook('afterSave', glasses => {
  let unformattedPrice = glasses.getDataValue('price');
  let formattedPrice = Math.round(unformattedPrice * 100) / 100;
  glasses.price = formattedPrice;
});

Glasses.updateCartInfo = function(arrayOfItemIDs) {
  return Promise.all(
    arrayOfItemIDs.map(id => {
      return Glasses.findById(id);
    })
  )
    .then(items => {
      return items;
    })
    .catch(err => console.error(err));
};

module.exports = Glasses;
