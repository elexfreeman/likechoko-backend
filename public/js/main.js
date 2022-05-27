!(function (e) {
  let t = {};
  function n(r) {
    if (t[r]) {
      return t[r].exports;
    }
    let o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) {
        return e;
      }
      if (4 & t && 'object' == typeof e && e && e.__esModule) {
        return e;
      }
      let r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e)) {
        for (let o in e) {
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o),
          );
        }
      }
      return r;
    }),
    (n.n = function (e) {
      let t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = './src/frontend/scss/style.scss'));
})({
  './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/frontend/scss/style.scss':
    function (e, t, n) {},
  './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js': function (e, t, n) {
    'use strict';
    let r,
      o = function () {
        return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
      },
      s = (function () {
        let e = {};
        return function (t) {
          if (void 0 === e[t]) {
            let n = document.querySelector(t);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) {
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      i = [];
    function a(e) {
      for (var t = -1, n = 0; n < i.length; n++) {
        if (i[n].identifier === e) {
          t = n;
          break;
        }
      }
      return t;
    }
    function c(e, t) {
      for (var n = {}, r = [], o = 0; o < e.length; o++) {
        let s = e[o],
          c = t.base ? s[0] + t.base : s[0],
          l = n[c] || 0,
          d = ''.concat(c, ' ').concat(l);
        n[c] = l + 1;
        let u = a(d),
          f = { css: s[1], media: s[2], sourceMap: s[3] };
        -1 !== u ? (i[u].references++, i[u].updater(f)) : i.push({ identifier: d, updater: y(f, t), references: 1 }),
          r.push(d);
      }
      return r;
    }
    function l(e) {
      let t = document.createElement('style'),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        let o = n.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        'function' == typeof e.insert)
      ) {
        e.insert(t);
      } else {
        let i = s(e.insert || 'head');
        if (!i) {
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        }
        i.appendChild(t);
      }
      return t;
    }
    let d,
      u =
        ((d = []),
        function (e, t) {
          return (d[e] = t), d.filter(Boolean).join('\n');
        });
    function f(e, t, n, r) {
      let o = n ? '' : r.media ? '@media '.concat(r.media, ' {').concat(r.css, '}') : r.css;
      if (e.styleSheet) {
        e.styleSheet.cssText = u(t, o);
      } else {
        let s = document.createTextNode(o),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(s, i[t]) : e.appendChild(s);
      }
    }
    function p(e, t, n) {
      let r = n.css,
        o = n.media,
        s = n.sourceMap;
      if (
        (o ? e.setAttribute('media', o) : e.removeAttribute('media'),
        s &&
          btoa &&
          (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
            ' */',
          )),
        e.styleSheet)
      ) {
        e.styleSheet.cssText = r;
      } else {
        for (; e.firstChild; ) {
          e.removeChild(e.firstChild);
        }
        e.appendChild(document.createTextNode(r));
      }
    }
    let m = null,
      v = 0;
    function y(e, t) {
      let n, r, o;
      if (t.singleton) {
        let s = v++;
        (n = m || (m = l(t))), (r = f.bind(null, n, s, !1)), (o = f.bind(null, n, s, !0));
      } else {
        (n = l(t)),
          (r = p.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) {
                return !1;
              }
              e.parentNode.removeChild(e);
            })(n);
          });
      }
      return (
        r(e),
        function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) {
              return;
            }
            r((e = t));
          } else {
            o();
          }
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton || 'boolean' == typeof t.singleton || (t.singleton = o());
      let n = c((e = e || []), t);
      return function (e) {
        if (((e = e || []), '[object Array]' === Object.prototype.toString.call(e))) {
          for (let r = 0; r < n.length; r++) {
            let o = a(n[r]);
            i[o].references--;
          }
          for (var s = c(e, t), l = 0; l < n.length; l++) {
            let d = a(n[l]);
            0 === i[d].references && (i[d].updater(), i.splice(d, 1));
          }
          n = s;
        }
      };
    };
  },
  './src/frontend/scss/style.scss': function (e, t, n) {
    let r = n('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
      o = n(
        './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/frontend/scss/style.scss',
      );
    'string' == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, '']]);
    let s = { insert: 'head', singleton: !1 },
      i = (r(o, s), o.locals ? o.locals : {});
    e.exports = i;
  },
});
