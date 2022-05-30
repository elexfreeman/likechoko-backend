/* eslint-disable */
declare let global: any;
import * as mocha from 'mocha';
import {assert} from 'chai';
import axios from 'axios';

/* инициализирует фронтовые штуки */

/* *********************************************** */
/* *********************************************** */
/* *********************************************** */

import * as R from '../src/Module/Login/LoginR';
import {ApiResponseI} from 'lc-common/lib/Interfaces/ApiResponseI';
import MainConfig from '../src/Config/MainConfig';

/* запускатор теста для async-await */
async function run() {
  //++++++++++++++++++++++++++++++++++++
  mocha.it('Test register', async () => {
    let sUrl = R.LoginR.register.route;

    let resp: ApiResponseI<R.LoginR.register.ResponseI> = (
      await axios.post(
        `http://localhost:${MainConfig.common.port}${sUrl}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            token: '12345',
          },
        },
      )
    ).data;

    assert.ok(resp.data.token.length > 0);
  }); //it ****
}

run();
