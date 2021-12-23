module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn(
      'users',
      'permission',
      {
        type: Sequelize.DataTypes.INTEGER,
      }
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.removeColumn('users', 'permission'),
}
