const Sequelize = require('sequelize');
const db = require('../config/db');
const Situation = require('./ProductStatus');

const Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    situationId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Product.belongsTo(Situation, { foreignKey: 'situationId', allowNull: false });

//Criar a tabela
Product.sync();
//Verificar se há alguma diferença na tabela e realiza a alteração
//User.sync({ alter: true });

module.exports = Product;