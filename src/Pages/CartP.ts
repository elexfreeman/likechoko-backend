import * as express from 'express';
import { CartR as R } from './Router';
import { MainRequest } from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { TError } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
import { faResponseStaticL } from '../Module/Sys/ResponseSys';

const router = express.Router();

router.get(
  R.sUrl,
  // eslint-disable-next-line
  faResponseStaticL(R.sTpl, TError.PageNotFound, async (req: MainRequest, res: any, error: any) => {
    return {};
  }),
);

export { router as CartController };
