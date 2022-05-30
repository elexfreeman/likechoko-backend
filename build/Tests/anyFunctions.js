"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = exports.winToUtf8 = exports.readFile = void 0;
/* eslint-disable */
let fs = require('fs');
const iconv = require('iconv-lite');
/**
 * обертка для чтения файла
 * @param file - путь к файлу
 */
function readFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}
exports.readFile = readFile;
/**
 * перекодировка Win --> Utf8
 */
function winToUtf8(buf) {
    return iconv.decode(Buffer.from(buf, 'binary'), 'cp1251').toString();
}
exports.winToUtf8 = winToUtf8;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomInt = getRandomInt;
//# sourceMappingURL=anyFunctions.js.map