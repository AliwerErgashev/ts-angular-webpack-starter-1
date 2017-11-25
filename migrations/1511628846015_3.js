exports.up = (pgm) => {
  return pgm.createTable('sessions', {
    id: {
      type: 'text',
      primaryKey: true,
    },
    authTokenId: {
      type: 'text',
      references: 'authTokens'
    }
  });
};

exports.down = (pgm) => {
  return pgm.dropTable('sessions');
};
