import { MainRequest } from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { TError } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
import * as express from 'express';

/**
 * Функция рендера страницы
 * @param faCallback - функция контролера
 * @param tpl - путь к шаблону hbs
 */
export declare const faResponseStaticL: (
  tpl: string,
  tError: TError,
  faCallback: Function,
) => (req: MainRequest, res: express.Response, next: any) => Promise<void>;
