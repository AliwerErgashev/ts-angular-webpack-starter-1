exports.up = (pgm) => {
  return pgm.createTable('users', {
    id: 'id',
    username: 'text',
    password: 'text'
  });
};

exports.down = (pgm) => {
  return pgm.dropTable('users');
};
