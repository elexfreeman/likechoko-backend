import * as express from 'express';
import { PoliticR as R } from './Router';
import { faResponseStatic } from '@a-a-game-studio/aa-core/lib/System/ResponseSys';
import { MainRequest } from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { TError } from '@a-a-game-studio/aa-core/lib/System/MainRequest';

const router = express.Router();

router.get(
  R.sUrl,
  // eslint-disable-next-line
  faResponseStatic(R.sTpl, TError.PageNotFound, async (req: MainRequest, res: any, error: any) => {
    return {};
  }),
);

export { router as PoliticController };
