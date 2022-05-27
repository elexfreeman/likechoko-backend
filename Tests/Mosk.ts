declare let global: any;

/* москирует все включения */
const jsdom = require('jsdom');

/* **************************** */

export default function initMosk() {
  global['window'] = {};
  const { JSDOM } = jsdom;
  //  const { window } = new JSDOM();
  const { document } = new JSDOM('').window;
  global['document'] = document;

  /* **************************** */
  /* localStorage */
  global['store'] = {};
  global['localStorage'] = {
    getItem: (key: string): string => {
      return key in global['store'] ? global['store'][key] : null;
    },
    setItem: (key: string, value: string) => {
      global['store'][key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete global['store'][key];
    },
    clear: () => {
      global['store'] = {};
    },
  };

  global['window'].apiUrl = 'http://localhost:3005';
}
