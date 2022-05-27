'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.faResponseStaticL = void 0;
const ResponseSys_1 = require('@a-a-game-studio/aa-core/lib/System/ResponseSys');

/**
 * Функция рендера страницы
 * @param faCallback - функция контролера
 * @param tpl - путь к шаблону hbs
 */
const faResponseStaticL = (tpl, tError, faCallback) => {
  return async (req, res, next) => {
    try {
      const out = (0, ResponseSys_1.fResponse)(req, await faCallback(req));

      /* добавляем свою переменную */
      out.sApiVer = '1';
      out.Site = '';
      out.apiUrl = '/';
      console.log(out);
      res.render(tpl, out);
    } catch (error) {
      req.errorType = tError;
      next(error);
    }
  };
};
exports.faResponseStaticL = faResponseStaticL;
//# sourceMappingURL=ResponseSys.js.map
