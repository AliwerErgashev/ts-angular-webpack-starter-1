exports.up = (pgm) => {
  return pgm.createTable('accessTokens', {
    id: 'text',
    userId: {
      type: 'text',
      references: 'users'
    }
  });
};

exports.down = (pgm) => {
  return pgm.dropTable('accessTokens');
};
