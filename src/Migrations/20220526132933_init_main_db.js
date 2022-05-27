const { exec } = require('node:child_process');
const conf = require('../../build/backend/src/Config/MainConfig.js');

const wait = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
};

exports.up = async function (knex) {
  console.log('Feel base table schema');
  const user = conf.default.mysql.connection.user;
  const host = conf.default.mysql.connection.host;
  const password = conf.default.mysql.connection.password;
  const db = conf.default.mysql.connection.database;
  const sql = `./src/Config/init.sql`;

  const cmd = `mysql -u${user} -h${host} -p${password} ${db} < ${sql} && echo '1'`;

  const controller = new AbortController();
  const { signal } = controller;
  const child = exec(cmd, { signal }, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
    }
    console.log('>>>>', stdout);
  });

  await wait();
  console.log('DONE. Feel base table schema');
  return knex.schema;
};

exports.down = function (knex) {};
