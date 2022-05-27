-- --------------------------------------------------------
-- Хост:                         localhost
-- Версия сервера:               8.0.29 - MySQL Community Server - GPL
-- Операционная система:         Linux
-- HeidiSQL Версия:              12.0.0.6468
-- --------------------------------------------------------

-- Экспортируемые данные не выделены.


-- Экспортируемые данные не выделены.

-- Дамп структуры для таблица likechocko.client
CREATE TABLE IF NOT EXISTS `client` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `surname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `patronymic` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(1024) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- Экспортируемые данные не выделены.

-- Дамп структуры для таблица likechocko.inventory
CREATE TABLE IF NOT EXISTS `inventory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `checkout` tinyint DEFAULT NULL,
  `deleted` tinyint DEFAULT '0',
  `user_id` int DEFAULT NULL,
  `storehouse_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `storehouse_id` (`storehouse_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- Экспортируемые данные не выделены.

-- Дамп структуры для таблица likechocko.inventory_doc_row
CREATE TABLE IF NOT EXISTS `inventory_doc_row` (
  `id` int NOT NULL AUTO_INCREMENT,
  `inventory_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `price` decimal(20,6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `inventory_id_product_id` (`inventory_id`,`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- Экспортируемые данные не выделены.

-- Дамп структуры для таблица likechocko.knex_migrations_aa_core
CREATE TABLE IF NOT EXISTS `knex_migrations_aa_core` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- Экспортируемые данные не выделены.

-- Дамп структуры для таблица likechocko.knex_migrations_aa_core_lock
CREATE TABLE IF NOT EXISTS `knex_migrations_aa_core_lock` (
  `index` int unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- Экспортируемые данные не выделены.

-- Дамп структуры для таблица likechocko.order
CREATE TABLE IF NOT EXISTS `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `caption` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `delivery_address` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  `comment` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `delivery_time_comment` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- Экспортируемые данные не выделены.

-- Дамп структуры для таблица likechocko.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `caption` varchar(1024) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(1024) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `category_id` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- Экспортируемые данные не выделены.

-- Дамп структуры для таблица likechocko.product_category
CREATE TABLE IF NOT EXISTS `product_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `caption` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- Экспортируемые данные не выделены.

-- Дамп структуры для таблица likechocko.product_category_var
CREATE TABLE IF NOT EXISTS `product_category_var` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_category_id` int DEFAULT NULL,
  `caption` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_category_id` (`product_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- Экспортируемые данные не выделены.

-- Дамп структуры для таблица likechocko.product_tag
CREATE TABLE IF NOT EXISTS `product_tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `caption` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- Экспортируемые данные не выделены.

-- Дамп структуры для таблица likechocko.storehouse
CREATE TABLE IF NOT EXISTS `storehouse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `caption` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT '0',
  `description` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- Экспортируемые данные не выделены.

