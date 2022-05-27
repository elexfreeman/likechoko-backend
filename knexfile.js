// Update with your config settings.

// Конфиг для настройки миграций в старой MySQL базе данных

const conf = require('./build/backend/src/Config/MainConfig.js');
module.exports = {
  ...conf.default.mysql,
};
