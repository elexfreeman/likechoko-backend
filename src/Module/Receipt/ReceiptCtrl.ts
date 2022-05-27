import * as express from 'express';
import { ReceiptR as R } from '../../Pages/Router';
import { faResponseStatic } from '@a-a-game-studio/aa-core/lib/System/ResponseSys';
import { TError, MainRequest } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
//import {ReceiptSQL} from './ReceiptSQL';

const router = express.Router();

/**
 * Страница списка рецептов
 */
router.get(
  R.sUrl,
  // eslint-disable-next-line
  faResponseStatic(R.sTpl, TError.PageNotFound, async (req: MainRequest, res: any, error: any) => {
    return {};
  }),
);

export { router as ReceiptCtrl };
