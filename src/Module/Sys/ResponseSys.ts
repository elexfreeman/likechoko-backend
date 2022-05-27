import { fResponse } from '@a-a-game-studio/aa-core/lib/System/ResponseSys';
import { MainRequest } from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { TError } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
import * as express from 'express';

/**
 * Функция рендера страницы
 * @param faCallback - функция контролера
 * @param tpl - путь к шаблону hbs
 */
export const faResponseStaticL = (tpl: string, tError: TError, faCallback: Function) => {
  return async (req: MainRequest, res: express.Response, next: any) => {
    try {
      const out: any = fResponse(req, await faCallback(req));

      /* добавляем свою переменную */
      out.sApiVer = '1';
      out.Site = '';
      out.apiUrl = '/';

      res.render(tpl, out);
    } catch (error) {
      req.errorType = tError;
      next(error);
    }
  };
};
