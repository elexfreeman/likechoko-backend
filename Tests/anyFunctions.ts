/* eslint-disable */
let fs = require('fs');
const iconv = require('iconv-lite');

/**
 * обертка для чтения файла
 * @param file - путь к файлу
 */
export function readFile(file: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function (err: any, data: any) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

/**
 * перекодировка Win --> Utf8
 */
export function winToUtf8(buf: any): string {
  return iconv.decode(Buffer.from(buf, 'binary'), 'cp1251').toString();
}

export function getRandomInt(min: any, max: any): number {
  return Math.floor(Math.random() * (max - min)) + min;
}
