exports.up = (pgm) => {
  return pgm.createTable('accessTokens', {
    id: 'id',
    userId: {
      type: 'integer',
      references: 'users'
    }
  });
};

exports.down = (pgm) => {
  return pgm.dropTable('accessTokens');
};
