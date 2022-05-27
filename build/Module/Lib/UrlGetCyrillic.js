"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fGetIdFromUrl = exports.fGetUrl = exports.UrlGetCyrillic = void 0;
/*Клас для генерации кирилистического урла в лат*/
class UrlGetCyrillic {
    static translit(text) {
        // Символ, на который будут заменяться все спецсимволы
        let space = '-';
        // Берем значение из нужного поля и переводим в нижний регистр
        text = text.toLowerCase();
        let transl;
        // Массив для транслитерации
        transl = {
            а: 'a',
            б: 'b',
            в: 'v',
            г: 'g',
            д: 'd',
            е: 'e',
            ё: 'e',
            ж: 'zh',
            з: 'z',
            и: 'i',
            й: 'j',
            к: 'k',
            л: 'l',
            м: 'm',
            н: 'n',
            о: 'o',
            п: 'p',
            р: 'r',
            с: 's',
            т: 't',
            у: 'u',
            ф: 'f',
            х: 'h',
            ц: 'c',
            ч: 'ch',
            ш: 'sh',
            щ: 'sh',
            ъ: space,
            ы: 'y',
            ь: space,
            э: 'e',
            ю: 'yu',
            я: 'ya',
            ' ': space,
            _: space,
            '`': space,
            '~': space,
            '!': space,
            '@': space,
            '#': space,
            $: space,
            '%': space,
            '^': space,
            '&': space,
            '*': space,
            '(': space,
            ')': space,
            '-': space,
            '=': space,
            '+': space,
            '[': space,
            ']': space,
            '\\': space,
            '|': space,
            '/': space,
            '.': space,
            ',': space,
            '{': space,
            '}': space,
            "'": space,
            '"': space,
            ';': space,
            ':': space,
            '?': space,
            '<': space,
            '>': space,
            '№': space,
        };
        let result = '';
        let curent_sim = '';
        for (let i = 0; i < text.length; i++) {
            // Если символ найден в массиве то меняем его
            if (transl[text[i]] != undefined) {
                if (curent_sim != transl[text[i]] || curent_sim != space) {
                    result += transl[text[i]];
                    curent_sim = transl[text[i]];
                }
            }
            // Если нет, то оставляем так как есть
            else {
                result += text[i];
                curent_sim = text[i];
            }
        }
        result = result.replace(/^-/, '');
        result = result.replace(/-$/, '');
        return result;
    }
}
exports.UrlGetCyrillic = UrlGetCyrillic;
const fGetUrl = (id) => (sCaption) => id + '-' + UrlGetCyrillic.translit(sCaption);
exports.fGetUrl = fGetUrl;
/**
 * Выдает id из урла
 * @param sUrl
 */
const fGetIdFromUrl = (sUrl) => {
    let resp = 0;
    try {
        const aUrl = sUrl.split('-');
        resp = Number(aUrl[0]);
        // eslint-disable-next-line
    }
    catch (_a) { }
    return resp;
};
exports.fGetIdFromUrl = fGetIdFromUrl;
//# sourceMappingURL=UrlGetCyrillic.js.map