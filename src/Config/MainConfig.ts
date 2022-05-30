import * as System from '@a-a-game-studio/aa-core/lib/Namespace/System';
import nconf from 'nconf';
import { join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

nconf.argv().env().file(join(__dirname, 'config.json'));

export const register_secret = nconf.get('register_secret');

const config: System.ConfI = {
  mysql: {
    // Knex mysql
    client: nconf.get('mysql_client'),
    connection: {
      host: nconf.get('mysql_host'),
      user: nconf.get('mysql_user'),
      password: nconf.get('mysql_password'),
      database: nconf.get('mysql_database'),
    },
    pool: { min: 0, max: 7 },
    migrations: {
      tableName: 'knex_migrations_aa_core',
      directory: './src/Migrations',
    },
    acquireConnectionTimeout: 60000,
  },
  common: {
    env: nconf.get('common_env'),
    port: Number(nconf.get('common_port')),
  },

  redis: {
    // Конфигруация редиса
    url: nconf.get('redis_url'),
  },

  /**
  Конфиг подклчения RabbitMQ
  Для запуска на локальной машине
  docker run -d --hostname 0.0.0.0 --network host rabbitmq:3
  Документация
  https://docs.docker.com/samples/library/rabbitmq/
  https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html
  */

  rabbit: {
    // Список очередей которые будут подняты
    queryList: {
      // Список очередей
      query1: 'query1', // Очередь для картинок каталога
    },
    // Соединение с кроликом
    connection: 'amqp://localhost:5672',
  },
};

export default config;
