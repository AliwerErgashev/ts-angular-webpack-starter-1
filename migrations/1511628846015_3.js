exports.up = (pgm) => {
  return pgm.createTable('sessions', {
    id: {
      type: 'text',
      primaryKey: true,
    },
    accessTokenId: {
      type: 'text',
      references: '"accessTokens"'
    }
  });
};

exports.down = (pgm) => {
  return pgm.dropTable('sessions');
};
