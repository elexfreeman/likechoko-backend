'use strict';

/**
 * Маршруты
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.IngredientR =
  exports.ReceiptR =
  exports.BlogPageR =
  exports.BlogMainR =
  exports.ProductR =
  exports.PoliticR =
  exports.CartR =
  exports.IndexR =
    void 0;

/**
 * Главная
 */
exports.IndexR = {
  sUrl: '/',
  sTpl: 'index',
};

/**
 * Корзина
 */
exports.CartR = {
  sUrl: '/cart',
  sTpl: 'cart',
};

/**
 * Политика
 */
exports.PoliticR = {
  sUrl: '/politic',
  sTpl: 'politic',
};

/**
 * Товар
 */
exports.ProductR = {
  sUrl: '/:url',
  sTpl: 'product_page',
};

/**
 * Блог главная
 */
exports.BlogMainR = {
  sUrl: '/blog',
  sTpl: 'blog/blog_main',
};

/**
 * Блог стр
 */
exports.BlogPageR = {
  sUrl: '/blog/:url',
  sTpl: 'blog/blog_page',
};

/**
 * Блог стр
 */
exports.ReceiptR = {
  sUrl: '/receipt',
  sTpl: 'receipt/index',
};

/**
 * Товар
 */
exports.IngredientR = {
  sUrl: 'ingredient/:url',
  sTpl: 'ingredient',
};
//# sourceMappingURL=Router.js.map
