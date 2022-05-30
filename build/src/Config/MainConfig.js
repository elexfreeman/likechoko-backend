"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register_secret = void 0;
const nconf_1 = __importDefault(require("nconf"));
const path_1 = require("path");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
nconf_1.default.argv().env().file((0, path_1.join)(__dirname, 'config.json'));
exports.register_secret = nconf_1.default.get('register_secret');
const config = {
    mysql: {
        // Knex mysql
        client: nconf_1.default.get('mysql_client'),
        connection: {
            host: nconf_1.default.get('mysql_host'),
            user: nconf_1.default.get('mysql_user'),
            password: nconf_1.default.get('mysql_password'),
            database: nconf_1.default.get('mysql_database'),
        },
        pool: { min: 0, max: 7 },
        migrations: {
            tableName: 'knex_migrations_aa_core',
            directory: './src/Migrations',
        },
        acquireConnectionTimeout: 60000,
    },
    common: {
        env: nconf_1.default.get('common_env'),
        port: Number(nconf_1.default.get('common_port')),
    },
    redis: {
        // Конфигруация редиса
        url: nconf_1.default.get('redis_url'),
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
exports.default = config;
//# sourceMappingURL=MainConfig.js.map