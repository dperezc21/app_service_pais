'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const pais = sequelize.define('pais',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    favorito: DataTypes.BOOLEAN,
    fronteras: DataTypes.STRING
  });
  return pais;
};