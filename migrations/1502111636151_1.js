exports.up = (pgm) => {
  return pgm.createTable('users', {
    id: 'text',
    username: 'text',
    password: 'text'
  });
};

exports.down = (pgm) => {
  return pgm.dropTable('users');
};
