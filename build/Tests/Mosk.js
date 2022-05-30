"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* москирует все включения */
const jsdom = require('jsdom');
/* **************************** */
function initMosk() {
    global['window'] = {};
    const { JSDOM } = jsdom;
    //  const { window } = new JSDOM();
    const { document } = new JSDOM('').window;
    global['document'] = document;
    /* **************************** */
    /* localStorage */
    global['store'] = {};
    global['localStorage'] = {
        getItem: (key) => {
            return key in global['store'] ? global['store'][key] : null;
        },
        setItem: (key, value) => {
            global['store'][key] = `${value}`;
        },
        removeItem: (key) => {
            delete global['store'][key];
        },
        clear: () => {
            global['store'] = {};
        },
    };
    global['window'].apiUrl = 'http://localhost:3005';
}
exports.default = initMosk;
//# sourceMappingURL=Mosk.js.map