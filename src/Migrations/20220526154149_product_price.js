exports.up = async function (knex) {
  const table_name = 'product_price';

  await knex.schema.createTable(table_name, (table) => {
    table.increments('id').primary();

    table.integer('id_product').index('id_product').comment('ID товара');

    table
      .dateTime('created_at')
      .index('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .comment('Время создания записи');

    table.float('price').defaultTo(0).comment('Текущая цена');

    table.comment('Цена товара в виде лога берется последнее занчение');
    table.collate('utf8_bin');
  });

  return knex.schema;
};

exports.down = function (knex) {};
