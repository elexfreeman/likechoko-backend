/* eslint-disable */
declare let global: any;
import * as mocha from 'mocha';
import { assert } from 'chai';
import axios from 'axios';

/* инициализирует фронтовые штуки */
import initMosk from './mosk';
initMosk();

/* *********************************************** */
/* *********************************************** */
/* *********************************************** */

import { getRandomInt } from './anyFunctions';
import { ProductR as R } from '../../Entity/Routes/ProductR';
import { SearchS } from '../../Entity/Service/SearchS';
import { ApiResponseI } from '../../Entity/Interfaces/ApiResponseI';
import { ProductI } from '../../Entity/Interfaces/ProductI';

/* запускатор теста для async-await */
async function run() {
  //++++++++++++++++++++++++++++++++++++
  mocha.it('Product list', async () => {
    let sUrl = R.list.route;

    let resp: ApiResponseI<R.list.ResponseI> = (
      await axios.post(
        global['window'].apiUrl + sUrl,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            token: '12345',
          },
        },
      )
    ).data;
    console.log(resp.data);

    assert.ok(resp.data.list.length > 0);
  }); //it ****

  mocha.it('Product insert-get', async () => {
    let sUrl = R.insert.route;
    const data: ProductI = {
      caption: 'test product',
      price: 300,
      category_id: 1,
    };

    let resp: ApiResponseI<R.insert.ResponseI> = (
      await axios.post(global['window'].apiUrl + sUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          token: '12345',
        },
      })
    ).data;

    assert.ok(resp.data.id > 0);

    const id = resp.data.id;

    sUrl = R.getById.route;
    let respGet: ApiResponseI<R.getById.ResponseI> = (
      await axios.post(
        global['window'].apiUrl + sUrl,
        { id: id },
        {
          headers: {
            'Content-Type': 'application/json',
            token: '12345',
          },
        },
      )
    ).data;

    assert.ok(respGet.data.id == id);
  }); //it ****

  mocha.it('Product insert-update-get', async () => {
    let sUrl = R.insert.route;
    const data: ProductI = {
      caption: 'test product',
      price: 300,
      category_id: 1,
    };

    let resp: ApiResponseI<R.insert.ResponseI> = (
      await axios.post(global['window'].apiUrl + sUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          token: '12345',
        },
      })
    ).data;

    assert.ok(resp.data.id > 0);

    const id = resp.data.id;

    sUrl = R.update.route;
    let newCaption = 'new caption';
    let respUpdate: ApiResponseI<R.update.ResponseI> = (
      await axios.post(
        global['window'].apiUrl + sUrl,
        {
          id: id,
          caption: newCaption,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            token: '12345',
          },
        },
      )
    ).data;

    sUrl = R.getById.route;
    let respGet: ApiResponseI<R.getById.ResponseI> = (
      await axios.post(
        global['window'].apiUrl + sUrl,
        { id: id },
        {
          headers: {
            'Content-Type': 'application/json',
            token: '12345',
          },
        },
      )
    ).data;

    assert.ok(respGet.data.id == id);
    assert.ok((respGet.data.caption = newCaption));
  }); //it ****
}

run();
