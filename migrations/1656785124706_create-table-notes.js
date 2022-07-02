/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('notes', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      notNULL: true,
    },
    body: {
      type: 'TEXT',
      notNULL: true,
    },
    tags: {
      type: 'TEXT[]',
      notNull: true,
    },
    created_at: {
      type: 'TEXT',
      notNULL: true,
    },
    updated_at: {
      type: 'TEXT',
      notNULL: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('notes');
};
