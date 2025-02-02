'use strict';
this.default_tr = this.default_tr || {};
(function (_) {
  var window = this;
  try {
    _.ma('sy1');

    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Rg, Sg;
    Rg = function () {
      return _.t('Firefox') || _.t('FxiOS');
    };
    Sg = function () {
      return ((_.t('Chrome') || _.t('CriOS')) && !_.t('Edge')) || _.t('Silk');
    };
    _.Tg = function () {
      return (
        _.t('Safari') &&
        !(
          Sg() ||
          _.t('Coast') ||
          _.t('Opera') ||
          _.t('Edge') ||
          _.t('Edg/') ||
          _.t('OPR') ||
          Rg() ||
          _.t('Silk') ||
          _.t('Android')
        )
      );
    };
    _.Ug = function () {
      return _.t('Android') && !(Sg() || Rg() || _.t('Opera') || _.t('Silk'));
    };
    _.Vg = Rg();
    _.Wg = _.Ca() || _.t('iPod');
    _.Xg = _.t('iPad');
    _.Yg = _.Ug();
    _.Zg = Sg();
    _.$g = _.Tg() && !_.Da();

    _.oa();
  } catch (e) {
    _._DumpException(e);
  }
  try {
    _.ma('sy0');

    var ch, dh, ih, lh;
    _.bh = function (a) {
      Object.isFrozen(a) ||
        (_.ah
          ? (a[_.ah] |= 1)
          : void 0 !== a.g
          ? (a.g |= 1)
          : Object.defineProperties(a, {
              g: { value: 1, configurable: !0, writable: !0, enumerable: !1 },
            }));
      return a;
    };
    ch = {};
    dh = {};
    _.eh = function (a, b) {
      this.g = (a === ch && b) || '';
      this.h = dh;
    };
    _.eh.prototype.qb = !0;
    _.eh.prototype.Wa = function () {
      return this.g;
    };
    _.fh = function (a) {
      return new _.eh(ch, a);
    };
    _.gh = function (a, b) {
      return _.gd(a.U, b);
    };
    _.hh = function (a) {
      return a instanceof _.eh && a.constructor === _.eh && a.h === dh
        ? a.g
        : 'type_error:Const';
    };
    ih = /^[\w+/_-]+[=]{0,2}$/;
    _.jh = function (a, b) {
      b = (b || _.p).document;
      return b.querySelector
        ? (a = b.querySelector(a)) &&
          (a = a.nonce || a.getAttribute('nonce')) &&
          ih.test(a)
          ? a
          : ''
        : '';
    };
    _.kh = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    };
    lh = function (a) {
      return a.replace(RegExp('(^|[\\s]+)([a-z])', 'g'), function (b, c, d) {
        return c + d.toUpperCase();
      });
    };
    _.mh = function (a) {
      if (a instanceof _.pe) return a;
      var b = new _.pe(_.v);
      _.oe(b, 2, a);
      return b;
    };
    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.nh = _.C || _.D || (!_.$g && !_.B && 'function' == typeof _.p.atob);
    _.oh = 'function' === typeof Uint8Array;
    _.ah =
      'function' === typeof Symbol && 'symbol' === typeof Symbol()
        ? Symbol(void 0)
        : void 0;
    _.ph = Object.freeze(_.bh([]));
    var rh;
    _.L = function (a, b, c) {
      if ('string' === typeof b) (b = _.qh(a, b)) && (a.style[b] = c);
      else
        for (var d in b) {
          c = a;
          var e = b[d],
            f = _.qh(c, d);
          f && (c.style[f] = e);
        }
    };
    rh = {};
    _.qh = function (a, b) {
      var c = rh[b];
      if (!c) {
        var d = _.kh(b);
        c = d;
        void 0 === a.style[d] &&
          ((d = (_.D ? 'Webkit' : _.C ? 'Moz' : _.B ? 'ms' : null) + lh(d)),
          void 0 !== a.style[d] && (c = d));
        rh[b] = c;
      }
      return c;
    };
    _.sh = _.C ? 'MozUserSelect' : _.D || _.ec ? 'WebkitUserSelect' : null;

    _.oa();
  } catch (e) {
    _._DumpException(e);
  }
  try {
    _.ma('sy3');

    var yh;
    _.th = function (a) {
      if (null !== a && void 0 !== a.tagName) {
        if ('script' === a.tagName.toLowerCase()) throw Error('K');
        if ('style' === a.tagName.toLowerCase()) throw Error('L');
      }
    };
    _.uh = {};
    _.vh = function (a) {
      return a instanceof _.Dc && a.constructor === _.Dc
        ? a.g
        : 'type_error:SafeUrl';
    };
    _.wh = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.xh = function (a) {
      if (a instanceof _.Dc) return a;
      a = 'object' == typeof a && a.qb ? a.Wa() : String(a);
      _.wh.test(a) || (a = 'about:invalid#zClosurez');
      return _.Fc(a);
    };
    yh = {};
    _.zh = function (a, b) {
      this.g = b === yh ? a : '';
      this.qb = !0;
    };
    _.zh.prototype.Wa = function () {
      return this.g;
    };
    _.zh.prototype.toString = function () {
      return this.g.toString();
    };
    _.Ah = {};
    _.Kf = function () {
      throw Error('I');
    };
    _.Kf.prototype.Md = null;
    _.Kf.prototype.wa = function () {
      return this.g;
    };
    _.Kf.prototype.toString = function () {
      return this.g;
    };
    var Bh = function () {
      _.Kf.call(this);
    };
    _.x(Bh, _.Kf);
    Bh.prototype.Fb = _.Ah;
    var Ch = function () {
      _.Kf.call(this);
    };
    _.x(Ch, _.Kf);
    Ch.prototype.Fb = _.uh;
    Ch.prototype.Md = 1;
    Ch.prototype.h = function () {
      return new _.zh(this.toString(), yh);
    };
    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    _.Dh = (function (a) {
      function b(c) {
        this.g = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.Md = d);
        return c;
      };
    })(Bh);
    _.Eh = (function (a) {
      function b(c) {
        this.g = c;
      }
      b.prototype = a.prototype;
      return function (c) {
        return new b(String(c));
      };
    })(Ch);

    _.oa();
  } catch (e) {
    _._DumpException(e);
  }
  try {
    _.ma('sy2');

    var Fh,
      Gh,
      Hh,
      Ih,
      Kh,
      Mh,
      Oh,
      Rh,
      Yh,
      $h,
      Zh,
      ci,
      ei,
      di,
      fi,
      ii,
      li,
      mi,
      ri,
      N,
      si,
      ui,
      vi,
      xi,
      yi,
      zi,
      Ai,
      Bi,
      Qh,
      Ci,
      Di,
      Ei,
      Fi,
      Gi,
      Hi,
      Ii,
      Ji,
      Ki,
      Li,
      Nh,
      Ph,
      Th,
      Ni,
      Oi,
      Qi,
      Si,
      Ui,
      Vi,
      Wi,
      Xi,
      Yi,
      $i,
      aj,
      bj,
      dj,
      ej,
      fj,
      gj,
      hj,
      ij,
      kj,
      lj,
      mj,
      nj,
      oj,
      qj,
      rj,
      sj,
      tj,
      uj,
      wj,
      xj,
      yj,
      zj,
      Aj,
      Bj,
      Cj,
      Dj,
      Ej,
      Fj,
      Gj,
      Hj,
      Ij,
      Jj,
      Yj,
      Zj,
      ak,
      bk,
      ck,
      Vh,
      fk,
      bi,
      hk,
      ik,
      jk,
      ki,
      lk,
      kk,
      mk,
      nk,
      qk,
      rk,
      sk,
      uk,
      vk,
      wk,
      xk,
      yk,
      zk,
      Bk,
      Ck,
      Dk,
      Fk,
      Gk,
      Hk,
      Ik,
      Jk,
      Kk,
      Lk,
      Ok,
      Qk,
      Rk,
      Sk,
      Tk,
      Uk,
      Wk,
      Xk,
      Yk,
      $k,
      bl,
      cl,
      dl,
      fl;
    Fh = function (a) {
      return Array.prototype.concat.apply([], arguments);
    };
    Gh = function (a, b, c) {
      return 2 >= arguments.length
        ? Array.prototype.slice.call(a, b)
        : Array.prototype.slice.call(a, b, c);
    };
    Hh = function (a, b, c, d) {
      Array.prototype.splice.apply(a, Gh(arguments, 1));
    };
    Ih = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    };
    Kh = function () {
      var a = Jh,
        b;
      for (b in a) return !1;
      return !0;
    };
    _.Lh = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    };
    Mh = function (a) {
      for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (']' == e) {
          if (b) return !1;
          b = !0;
        } else if ('[' == e) {
          if (!b) return !1;
          b = !1;
        } else if (!b && !c.test(e)) return !1;
      }
      return b;
    };
    Oh = function (a) {
      return a.replace(_.Lc, function (b, c, d, e) {
        var f = '';
        d = d.replace(/^(['"])(.*)\1$/, function (h, k, l) {
          f = k;
          return l;
        });
        b = (Nh(d) || _.Gc).Wa();
        return c + f + b + f + e;
      });
    };
    Rh = function (a) {
      if (a instanceof _.Dc)
        return (
          'url("' +
          _.vh(a).replace(/</g, '%3c').replace(/[\\"]/g, '\\$&') +
          '")'
        );
      if (a instanceof _.eh) a = _.hh(a);
      else {
        a = String(a);
        var b = a.replace(_.Mc, '$1').replace(_.Mc, '$1').replace(_.Lc, 'url');
        if (_.Kc.test(b)) {
          if ((b = !Ph.test(a))) {
            for (var c = (b = !0), d = 0; d < a.length; d++) {
              var e = a.charAt(d);
              "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
            }
            b = b && c && Mh(a);
          }
          a = b ? Oh(a) : 'zClosurez';
        } else a = 'zClosurez';
      }
      if (/[{;}]/.test(a))
        throw new Qh('Value does not allow [{;}], got: %s.', [a]);
      return a;
    };
    _.Uh = function (a) {
      return _.ya(a)
        ? a instanceof _.Kf
          ? _.Sh(a)
          : Th('zSoyz')
        : Th(String(a));
    };
    _.Xh = function (a, b) {
      b = a(b || Vh, void 0);
      a = _.gh(_.F(), 'DIV');
      b = _.Uh(b);
      _.Wh(a, b);
      1 == a.childNodes.length &&
        ((b = a.firstChild), 1 == b.nodeType && (a = b));
      return a;
    };
    Yh = function (a) {
      return null !== a && 'object' === typeof a && a.constructor === Object;
    };
    $h = function (a, b) {
      if (null != a) return Array.isArray(a) || Yh(a) ? Zh(a, b) : b(a);
    };
    Zh = function (a, b) {
      if (Array.isArray(a)) {
        for (var c = Array(a.length), d = 0; d < a.length; d++)
          c[d] = $h(a[d], b);
        if ((b = Array.isArray(a))) {
          var e;
          _.ah ? (e = a[_.ah]) : (e = a.g);
          b = (null == e ? 0 : e) & 1;
        }
        b && _.bh(c);
        return c;
      }
      e = {};
      for (c in a) e[c] = $h(a[c], b);
      return e;
    };
    ci = function (a) {
      a: switch (typeof a) {
        case 'number':
          a = isFinite(a) ? a : String(a);
          break a;
        case 'object':
          if (_.oh && null != a && a instanceof Uint8Array) {
            var b;
            void 0 === b && (b = 0);
            _.ai();
            b = bi[b];
            for (
              var c = Array(Math.floor(a.length / 3)),
                d = b[64] || '',
                e = 0,
                f = 0;
              e < a.length - 2;
              e += 3
            ) {
              var h = a[e],
                k = a[e + 1],
                l = a[e + 2],
                m = b[h >> 2];
              h = b[((h & 3) << 4) | (k >> 4)];
              k = b[((k & 15) << 2) | (l >> 6)];
              l = b[l & 63];
              c[f++] = m + h + k + l;
            }
            m = 0;
            l = d;
            switch (a.length - e) {
              case 2:
                (m = a[e + 1]), (l = b[(m & 15) << 2] || d);
              case 1:
                (a = a[e]),
                  (c[f] = b[a >> 2] + b[((a & 3) << 4) | (m >> 4)] + l + d);
            }
            a = c.join('');
          }
      }
      return Array.isArray(a) ? Zh(a, ci) : a;
    };
    ei = function (a, b) {
      var c = a[b - 1];
      if (null == c || di(c)) (a = a[a.length - 1]), di(a) && (c = a[b]);
      return c;
    };
    di = function (a) {
      return _.ya(a) && !_.da(a);
    };
    fi = function (a, b, c, d) {
      for (var e = 0; 0 < b; --b, ++a)
        null != c[a] && ((d[a + 1] = c[a]), delete c[a], e++);
      return e;
    };
    ii = function (a, b, c) {
      var d = Array.prototype.slice.call(arguments);
      d.splice(0, 2);
      d =
        'l' +
        a.toString(16) +
        'i' +
        b.toString(16) +
        (d.length ? '-' + d.join('_') : '');
      _.gi ? _.gi.push(d) : _.hi(d);
    };
    li = function () {
      var a = new ji([
        null,
        null,
        null,
        null,
        null,
        '(function(){/*\n\n Copyright The Closure Library Authors.\n SPDX-License-Identifier: Apache-2.0\n*/\nvar d="function"==typeof Object.create?Object.create:function(a){var c=function(){};c.prototype=a;return new c},e;if("function"==typeof Object.setPrototypeOf)e=Object.setPrototypeOf;else{var f;a:{var g={a:!0},l={};try{l.__proto__=g;f=l.a;break a}catch(a){}f=!1}e=f?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var m=e;/*\n\n SPDX-License-Identifier: Apache-2.0\n*/\nvar n={};function p(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}var q;function r(){var a,c;if(void 0===q)try{q=null!==(c=null===(a=p())||void 0===a?void 0:a.createPolicy("google#safe",{createHTML:function(b){return b},createScript:function(b){return b},createScriptURL:function(b){return b}}))&&void 0!==c?c:null}catch(b){q=null}return q};var t=function(a,c){if(c!==n)throw Error("Bad secret");this.g=a},u=function(){};t.prototype=d(u.prototype);t.prototype.constructor=t;if(m)m(t,u);else for(var v in u)if("prototype"!=v)if(Object.defineProperties){var w=Object.getOwnPropertyDescriptor(u,v);w&&Object.defineProperty(t,v,w)}else t[v]=u[v];t.prototype.toString=function(){return this.g.toString()};function x(a){var c,b=null===(c=r())||void 0===c?void 0:c.createScriptURL(a);return new t(null!==b&&void 0!==b?b:a,n)};if(!function(){if(self.origin)return"null"===self.origin;if(""!==location.host)return!1;try{return window.parent.escape(""),!1}catch(a){return!0}}())throw Error("sandboxing error");\nwindow.addEventListener("message",function(a){var c=a.ports[0];a=a.data;var b=a.callbackName.split("."),h=window;"window"===b[0]&&b.unshift();for(var k=0;k<b.length-1;k++)h[b[k]]={},h=h[b[k]];h[b[b.length-1]]=function(y){c.postMessage(JSON.stringify(y))};b=document.createElement("script");a=x(a.url);if(a instanceof t)a=a.g;else throw Error("Unexpected type when unwrapping TrustedResourceUrl");b.src=a;document.body.appendChild(b)},!0);}).call(this);\n',
      ]);
      if (!a) return null;
      a = ki(a, 6);
      var b;
      null === a || void 0 === a ? (b = null) : (b = _.Oa(a));
      return b;
    };
    mi = function (a) {
      _.M.call(this);
      a = a || {};
      this.id = a.id || this.ib();
      this.vf = a.vf || '';
      this.ee = a.ee || null;
      this.fe = a.fe || null;
      this.Id = a.Id || !1;
      this.className = a.className || null;
      this.B = null;
    };
    _.qi = function () {
      for (var a in Object.prototype) {
        _.Bc = function (d, e, f) {
          for (var h in d)
            d[h] !== Object.prototype[h] && e.call(f, d[h], h, d);
        };
        break;
      }
      var b = _.ub(),
        c = ni(oi);
      c &&
        'function' == typeof c &&
        (1 == _.pi
          ? c()
          : (function e() {
              var f = document.readyState;
              'undefined' == _.ob(f) ||
              'complete' == f ||
              'interactive' == f ||
              2e4 <= _.ub() - b
                ? c()
                : window.setTimeout(e, 500);
            })());
    };
    ri = function (a, b) {
      a.gb ? b() : (a.ta || (a.ta = []), a.ta.push(b));
    };
    N = function (a, b) {
      this.x = void 0 !== a ? a : 0;
      this.y = void 0 !== b ? b : 0;
    };
    N.prototype.ceil = function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    };
    N.prototype.floor = function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    };
    N.prototype.round = function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    };
    N.prototype.translate = function (a, b) {
      a instanceof N
        ? ((this.x += a.x), (this.y += a.y))
        : ((this.x += Number(a)), 'number' === typeof b && (this.y += b));
      return this;
    };
    si = function (a) {
      return new N(a.x, a.y);
    };
    _.ti = function (a, b, c, d) {
      a = d || a;
      b = b && '*' != b ? String(b).toUpperCase() : '';
      if (a.querySelectorAll && a.querySelector && (b || c))
        return a.querySelectorAll(b + (c ? '.' + c : ''));
      if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
          d = {};
          for (var e = 0, f = 0, h; (h = a[f]); f++)
            b == h.nodeName && (d[e++] = h);
          d.length = e;
          return d;
        }
        return a;
      }
      a = a.getElementsByTagName(b || '*');
      if (c) {
        d = {};
        for (f = e = 0; (h = a[f]); f++)
          (b = h.className),
            'function' == typeof b.split &&
              _.ta(b.split(/\s+/), c) &&
              (d[e++] = h);
        d.length = e;
        return d;
      }
      return a;
    };
    ui = function (a, b) {
      var c = b || document;
      if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
      else {
        c = document;
        var d = b || c;
        a =
          d.querySelectorAll && d.querySelector && a
            ? d.querySelector(a ? '.' + a : '')
            : _.ti(c, '*', a, b)[0] || null;
      }
      return a || null;
    };
    vi = function (a) {
      return a.scrollingElement
        ? a.scrollingElement
        : !_.D && _.dd(a)
        ? a.documentElement
        : a.body || a.documentElement;
    };
    _.wi = function (a) {
      var b = vi(a);
      a = a.parentWindow || a.defaultView;
      return _.B && _.wc('10') && a.pageYOffset != b.scrollTop
        ? new N(b.scrollLeft, b.scrollTop)
        : new N(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    };
    xi = function (a) {
      a.h = {};
      a.g.length = 0;
      a.size = 0;
      a.j = 0;
    };
    yi = function (a) {
      if (a.jb && 'function' == typeof a.jb) return a.jb();
      if (
        ('undefined' !== typeof Map && a instanceof Map) ||
        ('undefined' !== typeof Set && a instanceof Set)
      )
        return Array.from(a.values());
      if ('string' === typeof a) return a.split('');
      if (_.da(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return _.Fa(a);
    };
    zi = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    _.Sh = function (a) {
      if (a.Fb !== _.Ah) throw Error('J');
      return _.Qc(a.toString(), a.Md || null);
    };
    Ai = function (a) {
      a.kc = void 0;
      a.ea = function () {
        return a.kc ? a.kc : (a.kc = new a());
      };
    };
    Bi = {};
    Qh = function (a, b) {
      a = a.split('%s');
      for (var c = '', d = a.length - 1, e = 0; e < d; e++)
        c += a[e] + (e < b.length ? b[e] : '%s');
      _.aa.call(this, c + a[d]);
    };
    _.x(Qh, _.aa);
    Qh.prototype.name = 'AssertionError';
    Ci = function (a) {
      var b = _.Bb();
      a = b ? b.createScript(a) : a;
      return new _.Db(a, _.Cb);
    };
    Di = /&/g;
    Ei = /</g;
    Fi = />/g;
    Gi = /"/g;
    Hi = /'/g;
    Ii = /\x00/g;
    Ji = /[\x00&<>"']/;
    Ki = function (a, b) {
      if (b)
        a = a
          .replace(Di, '&amp;')
          .replace(Ei, '&lt;')
          .replace(Fi, '&gt;')
          .replace(Gi, '&quot;')
          .replace(Hi, '&#39;')
          .replace(Ii, '&#0;');
      else {
        if (!Ji.test(a)) return a;
        -1 != a.indexOf('&') && (a = a.replace(Di, '&amp;'));
        -1 != a.indexOf('<') && (a = a.replace(Ei, '&lt;'));
        -1 != a.indexOf('>') && (a = a.replace(Fi, '&gt;'));
        -1 != a.indexOf('"') && (a = a.replace(Gi, '&quot;'));
        -1 != a.indexOf("'") && (a = a.replace(Hi, '&#39;'));
        -1 != a.indexOf('\x00') && (a = a.replace(Ii, '&#0;'));
      }
      return a;
    };
    Li = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      command: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    };
    Nh = function (a) {
      if (a instanceof _.Dc) return a;
      a = 'object' == typeof a && a.qb ? a.Wa() : String(a);
      if (_.wh.test(a)) a = _.Fc(a);
      else {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, '');
        var b = a.match(zi);
        a = b && _.Ec.test(b[1]) ? _.Fc(a) : null;
      }
      return a;
    };
    _.Mi = function (a) {
      return a instanceof _.Ic && a.constructor === _.Ic
        ? a.g
        : 'type_error:SafeStyle';
    };
    Ph = /\/\*/;
    Th = function (a) {
      if (a instanceof _.Oc) return a;
      var b = 'object' == typeof a,
        c = null;
      b && a.qf && (c = a.$b());
      return _.Qc(Ki(b && a.qb ? a.Wa() : String(a)), c);
    };
    Ni = /^[a-zA-Z0-9-]+$/;
    Oi = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0,
    };
    _.Pi = function (a) {
      if (!Ni.test(a)) throw Error('t');
      if (a.toUpperCase() in Oi) throw Error('t');
    };
    Qi = function (a) {
      var b = Th(_.Sc),
        c = b.$b(),
        d = [],
        e = function (f) {
          Array.isArray(f)
            ? f.forEach(e)
            : ((f = Th(f)),
              d.push(_.Pc(f).toString()),
              (f = f.$b()),
              0 == c ? (c = f) : 0 != f && c != f && (c = null));
        };
      a.forEach(e);
      return _.Qc(d.join(_.Pc(b).toString()), c);
    };
    _.Ri = function (a) {
      return Qi(Array.prototype.slice.call(arguments));
    };
    Si = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    };
    _.Ti = function (a) {
      var b = '';
      if (a)
        for (var c in a)
          if (Object.prototype.hasOwnProperty.call(a, c)) {
            if (!Ni.test(c)) throw Error('t');
            var d = a[c];
            if (null != d) {
              var e = c;
              if (d instanceof _.eh) d = _.hh(d);
              else if ('style' == e.toLowerCase()) {
                var f = d;
                if (!_.ya(f)) throw Error('t');
                if (!(f instanceof _.Ic)) {
                  d = void 0;
                  var h = '';
                  for (d in f)
                    if (Object.prototype.hasOwnProperty.call(f, d)) {
                      if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error('s`' + d);
                      var k = f[d];
                      null != k &&
                        ((k = Array.isArray(k) ? k.map(Rh).join(' ') : Rh(k)),
                        (h += d + ':' + k + ';'));
                    }
                  f = h ? new _.Ic(h, _.Hc) : _.Jc;
                }
                d = _.Mi(f);
              } else {
                if (/^on/i.test(e)) throw Error('t');
                if (e.toLowerCase() in Si)
                  if (d instanceof _.Gb) d = _.Sa(d).toString();
                  else if (d instanceof _.Dc) d = _.vh(d);
                  else if ('string' === typeof d) d = (Nh(d) || _.Gc).Wa();
                  else throw Error('t');
              }
              d.qb && (d = d.Wa());
              e = e + '="' + Ki(String(d)) + '"';
              b += ' ' + e;
            }
          }
      return b;
    };
    Ui = function (a, b, c) {
      var d = null;
      var e = '<' + a + _.Ti(b);
      null == c ? (c = []) : Array.isArray(c) || (c = [c]);
      !0 === Li[a.toLowerCase()]
        ? (e += '>')
        : ((d = _.Ri(c)),
          (e += '>' + _.Pc(d).toString() + '</' + a + '>'),
          (d = d.$b()));
      (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (d = 0) : (d = null));
      return _.Qc(e, d);
    };
    Vi = function (a) {
      var b = { nonce: _.jh('script[nonce]', void 0) };
      for (d in b)
        if (Object.prototype.hasOwnProperty.call(b, d)) {
          var c = d.toLowerCase();
          if ('language' == c || 'src' == c || 'text' == c || 'type' == c)
            throw Error('t');
        }
      var d = '';
      a = Fh(a);
      for (c = 0; c < a.length; c++) d += _.Qa(a[c]).toString();
      a = _.Qc(d, 0);
      return Ui('script', b, a);
    };
    Wi = function (a, b, c) {
      _.Pi(String(a));
      return Ui(String(a), b, c);
    };
    _.Wh = function (a, b) {
      if ((0, _.Uc)()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = _.Pc(b);
    };
    Xi = function (a, b) {
      b = b instanceof _.Dc ? b : _.xh(b);
      a.action = _.vh(b);
    };
    Yi = function (a, b) {
      return new N(a.x - b.x, a.y - b.y);
    };
    _.Zi = function (a) {
      return a.replace(/\xa0|[ \t]+/g, ' ');
    };
    $i = function (a) {
      return a
        .replace(/[\t\r\n ]+/g, ' ')
        .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, '');
    };
    aj = function (a) {
      return a.replace(/^[\s\xa0]+/, '');
    };
    bj = function (a) {
      return a.replace(/[\s\xa0]+$/, '');
    };
    _.cj = function (a) {
      return (a = Ki(a, void 0));
    };
    dj = function (a) {
      return a.replace(/&([^;]+);/g, function (b, c) {
        switch (c) {
          case 'amp':
            return '&';
          case 'lt':
            return '<';
          case 'gt':
            return '>';
          case 'quot':
            return '"';
          default:
            return '#' != c.charAt(0) ||
              ((c = Number('0' + c.substr(1))), isNaN(c))
              ? b
              : String.fromCharCode(c);
        }
      });
    };
    ej = /&([^;\s<&]+);?/g;
    fj = function (a) {
      var b = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"' };
      var c = _.p.document.createElement('div');
      return a.replace(ej, function (d, e) {
        var f = b[d];
        if (f) return f;
        '#' == e.charAt(0) &&
          ((e = Number('0' + e.substr(1))),
          isNaN(e) || (f = String.fromCharCode(e)));
        f ||
          ((f = _.Qc(d + ' ', null)),
          _.Wh(c, f),
          (f = c.firstChild.nodeValue.slice(0, -1)));
        return (b[d] = f);
      });
    };
    gj = function (a) {
      return -1 != a.indexOf('&') ? ('document' in _.p ? fj(a) : dj(a)) : a;
    };
    hj = function (a, b) {
      return (b || document).getElementsByTagName(String(a));
    };
    ij = function () {
      var a = document;
      return a.querySelectorAll && a.querySelector
        ? a.querySelectorAll('.alt-edited')
        : _.ti(document, '*', 'alt-edited', void 0);
    };
    _.jj = function (a, b, c) {
      return _.id(document, arguments);
    };
    kj = function () {
      var a = Wi('WBR'),
        b = document;
      var c = _.gd(b, 'DIV');
      _.B
        ? ((a = _.Ri(_.Tc, a)), _.Wh(c, a), c.removeChild(c.firstChild))
        : _.Wh(c, a);
      if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
      else {
        for (b = b.createDocumentFragment(); c.firstChild; )
          b.appendChild(c.firstChild);
        c = b;
      }
      return c;
    };
    lj = function (a) {
      if (1 != a.nodeType) return !1;
      switch (a.tagName) {
        case 'APPLET':
        case 'AREA':
        case 'BASE':
        case 'BR':
        case 'COL':
        case 'COMMAND':
        case 'EMBED':
        case 'FRAME':
        case 'HR':
        case 'IMG':
        case 'INPUT':
        case 'IFRAME':
        case 'ISINDEX':
        case 'KEYGEN':
        case 'LINK':
        case 'NOFRAMES':
        case 'NOSCRIPT':
        case 'META':
        case 'OBJECT':
        case 'PARAM':
        case 'SCRIPT':
        case 'SOURCE':
        case 'STYLE':
        case 'TRACK':
        case 'WBR':
          return !1;
      }
      return !0;
    };
    mj = function (a, b) {
      _.hd(_.E(a), a, arguments, 1);
    };
    nj = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b);
    };
    oj = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
    };
    _.pj = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    };
    qj = function (a) {
      return _.ya(a) && 1 == a.nodeType;
    };
    rj = function (a, b) {
      for (; (b = b.previousSibling); ) if (b == a) return -1;
      return 1;
    };
    sj = function (a, b) {
      var c = a.parentNode;
      if (c == b) return -1;
      for (; b.parentNode != c; ) b = b.parentNode;
      return rj(b, a);
    };
    tj = function (a, b) {
      if (a == b) return 0;
      if (a.compareDocumentPosition)
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
      if (_.B && !(9 <= Number(_.zc))) {
        if (9 == a.nodeType) return -1;
        if (9 == b.nodeType) return 1;
      }
      if (
        'sourceIndex' in a ||
        (a.parentNode && 'sourceIndex' in a.parentNode)
      ) {
        var c = 1 == a.nodeType,
          d = 1 == b.nodeType;
        if (c && d) return a.sourceIndex - b.sourceIndex;
        var e = a.parentNode,
          f = b.parentNode;
        return e == f
          ? rj(a, b)
          : !c && _.nd(e, b)
          ? -1 * sj(a, b)
          : !d && _.nd(f, a)
          ? sj(b, a)
          : (c ? a.sourceIndex : e.sourceIndex) -
            (d ? b.sourceIndex : f.sourceIndex);
      }
      d = _.E(a);
      c = d.createRange();
      c.selectNode(a);
      c.collapse(!0);
      a = d.createRange();
      a.selectNode(b);
      a.collapse(!0);
      return c.compareBoundaryPoints(_.p.Range.START_TO_END, a);
    };
    uj = function (a) {
      var b,
        c = arguments.length;
      if (!c) return null;
      if (1 == c) return arguments[0];
      var d = [],
        e = Infinity;
      for (b = 0; b < c; b++) {
        for (var f = [], h = arguments[b]; h; )
          f.unshift(h), (h = h.parentNode);
        d.push(f);
        e = Math.min(e, f.length);
      }
      f = null;
      for (b = 0; b < e; b++) {
        h = d[0][b];
        for (var k = 1; k < c; k++) if (h != d[k][b]) return f;
        f = h;
      }
      return f;
    };
    _.vj = function (a) {
      return a.contentDocument || a.contentWindow.document;
    };
    wj = function (a) {
      return a.hasAttribute('tabindex');
    };
    xj = function (a) {
      a = a.tabIndex;
      return 'number' === typeof a && 0 <= a && 32768 > a;
    };
    yj = function (a, b) {
      b ? (a.tabIndex = 0) : ((a.tabIndex = -1), a.removeAttribute('tabIndex'));
    };
    zj = function (a) {
      var b = [];
      _.rd(a, b, !1);
      return b.join('');
    };
    Aj = {
      rc: 'mousedown',
      sc: 'mouseup',
      Sc: 'mousecancel',
      Ok: 'mousemove',
      Qk: 'mouseover',
      Pk: 'mouseout',
      Mk: 'mouseenter',
      Nk: 'mouseleave',
    };
    Bj = function (a, b) {
      if (!a) return 0;
      if (_.Bd(a)) return a.hb ? _.Id(a.hb, b) : 0;
      a = _.Pd(a);
      if (!a) return 0;
      var c = 0;
      b = b && b.toString();
      for (var d in a.g)
        if (!b || d == b)
          for (var e = a.g[d].concat(), f = 0; f < e.length; ++f)
            _.Ud(e[f]) && ++c;
      return c;
    };
    Cj = function (a, b, c) {
      this.promise = a;
      this.resolve = b;
      this.reject = c;
    };
    Dj = function () {
      var a,
        b,
        c = new _.pe(function (d, e) {
          a = d;
          b = e;
        });
      return new Cj(c, a, b);
    };
    Ej = function (a) {
      if (a instanceof _.gf) return a;
      if ('function' == typeof a.Ha) return a.Ha(!1);
      if (_.da(a)) {
        var b = 0,
          c = new _.gf();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return _.jf;
            if (b in a) return _.kf(a[b++]);
            b++;
          }
        };
        var d = c.next;
        c.Ka = function () {
          return _.lf(d.call(c));
        };
        return c;
      }
      throw Error('C');
    };
    Fj = function (a, b, c) {
      for (a = Ej(a); ; ) {
        var d = void 0;
        try {
          d = a.Ka();
        } catch (e) {
          if (e === _.ff) break;
          throw e;
        }
        try {
          if (!b.call(c, d, void 0, a)) break;
        } catch (e) {
          if (e === _.ff) throw Error('B');
          throw e;
        }
      }
    };
    Gj = function (a) {
      if (a.Ub && 'function' == typeof a.Ub) return a.Ub();
      if (!a.jb || 'function' != typeof a.jb) {
        if ('undefined' !== typeof Map && a instanceof Map)
          return Array.from(a.keys());
        if (!('undefined' !== typeof Set && a instanceof Set)) {
          if (_.da(a) || 'string' === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return Ih(a);
        }
      }
    };
    Hj = function (a, b, c) {
      if (a.forEach && 'function' == typeof a.forEach) a.forEach(b, c);
      else if (_.da(a) || 'string' === typeof a)
        Array.prototype.forEach.call(a, b, c);
      else
        for (var d = Gj(a), e = yi(a), f = e.length, h = 0; h < f; h++)
          b.call(c, e[h], d && d[h], a);
    };
    Ij = function (a, b) {
      this.h = this.g = null;
      this.j = a || null;
      this.l = !!b;
    };
    Jj = function (a) {
      a.g ||
        ((a.g = new Map()),
        (a.h = 0),
        a.j &&
          _.Gf(a.j, function (b, c) {
            a.add(_.Yc(b), c);
          }));
    };
    Ij.prototype.add = function (a, b) {
      Jj(this);
      this.j = null;
      a = Kj(this, a);
      var c = this.g.get(a);
      c || this.g.set(a, (c = []));
      c.push(b);
      this.h += 1;
      return this;
    };
    Ij.prototype.remove = function (a) {
      Jj(this);
      a = Kj(this, a);
      return this.g.has(a)
        ? ((this.j = null), (this.h -= this.g.get(a).length), this.g.delete(a))
        : !1;
    };
    var Lj = function (a, b) {
      Jj(a);
      b = Kj(a, b);
      return a.g.has(b);
    };
    _.g = Ij.prototype;
    _.g.forEach = function (a, b) {
      Jj(this);
      this.g.forEach(function (c, d) {
        c.forEach(function (e) {
          a.call(b, e, d, this);
        }, this);
      }, this);
    };
    _.g.Ub = function () {
      Jj(this);
      for (
        var a = Array.from(this.g.values()),
          b = Array.from(this.g.keys()),
          c = [],
          d = 0;
        d < b.length;
        d++
      )
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
      return c;
    };
    _.g.jb = function (a) {
      Jj(this);
      var b = [];
      if ('string' === typeof a)
        Lj(this, a) && (b = b.concat(this.g.get(Kj(this, a))));
      else {
        a = Array.from(this.g.values());
        for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
      }
      return b;
    };
    _.g.set = function (a, b) {
      Jj(this);
      this.j = null;
      a = Kj(this, a);
      Lj(this, a) && (this.h -= this.g.get(a).length);
      this.g.set(a, [b]);
      this.h += 1;
      return this;
    };
    _.g.get = function (a, b) {
      if (!a) return b;
      a = this.jb(a);
      return 0 < a.length ? String(a[0]) : b;
    };
    var Mj = function (a, b, c) {
      a.remove(b);
      0 < c.length &&
        ((a.j = null), a.g.set(Kj(a, b), _.wa(c)), (a.h += c.length));
    };
    Ij.prototype.toString = function () {
      if (this.j) return this.j;
      if (!this.g) return '';
      for (
        var a = [], b = Array.from(this.g.keys()), c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c],
          e = _.Xc(d);
        d = this.jb(d);
        for (var f = 0; f < d.length; f++) {
          var h = e;
          '' !== d[f] && (h += '=' + _.Xc(d[f]));
          a.push(h);
        }
      }
      return (this.j = a.join('&'));
    };
    var Nj = function (a) {
        var b = new Ij();
        b.j = a.j;
        a.g && ((b.g = new Map(a.g)), (b.h = a.h));
        return b;
      },
      Kj = function (a, b) {
        b = String(b);
        a.l && (b = b.toLowerCase());
        return b;
      },
      Oj = function (a, b) {
        b &&
          !a.l &&
          (Jj(a),
          (a.j = null),
          a.g.forEach(function (c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d), Mj(this, e, c));
          }, a));
        a.l = b;
      };
    Ij.prototype.o = function (a) {
      for (var b = 0; b < arguments.length; b++)
        Hj(
          arguments[b],
          function (c, d) {
            this.add(d, c);
          },
          this,
        );
    };
    var Pj = /[#\/\?@]/g,
      Qj = /[#\?]/g,
      Rj = /[#\?:]/g,
      Sj = /#/g,
      Tj = function (a, b) {
        return a
          ? b
            ? decodeURI(a.replace(/%25/g, '%2525'))
            : decodeURIComponent(a)
          : '';
      },
      Uj = /[#\?@]/g,
      Vj = function (a) {
        a = a.charCodeAt(0);
        return '%' + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
      },
      Wj = function (a, b, c) {
        return 'string' === typeof a
          ? ((a = encodeURI(a).replace(b, Vj)),
            c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
            a)
          : null;
      },
      Xj = function (a) {
        this.j = this.C = this.l = '';
        this.B = null;
        this.s = this.h = '';
        this.o = !1;
        var b;
        a instanceof Xj
          ? ((this.o = a.o),
            Yj(this, a.l),
            (this.C = a.C),
            (this.j = a.j),
            Zj(this, a.B),
            (this.h = a.h),
            ak(this, Nj(a.g)),
            (this.s = a.s))
          : a && (b = String(a).match(_.Ef))
          ? ((this.o = !1),
            Yj(this, b[1] || '', !0),
            (this.C = Tj(b[2] || '')),
            (this.j = Tj(b[3] || '', !0)),
            Zj(this, b[4]),
            (this.h = Tj(b[5] || '', !0)),
            ak(this, b[6] || '', !0),
            (this.s = Tj(b[7] || '')))
          : ((this.o = !1), (this.g = new Ij(null, this.o)));
      };
    Xj.prototype.toString = function () {
      var a = [],
        b = this.l;
      b && a.push(Wj(b, Pj, !0), ':');
      var c = this.j;
      if (c || 'file' == b)
        a.push('//'),
          (b = this.C) && a.push(Wj(b, Pj, !0), '@'),
          a.push(_.Xc(c).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
          (c = this.B),
          null != c && a.push(':', String(c));
      if ((c = this.h))
        this.j && '/' != c.charAt(0) && a.push('/'),
          a.push(Wj(c, '/' == c.charAt(0) ? Qj : Rj, !0));
      (c = this.g.toString()) && a.push('?', c);
      (c = this.s) && a.push('#', Wj(c, Sj));
      return a.join('');
    };
    Xj.prototype.resolve = function (a) {
      var b = new Xj(this),
        c = !!a.l;
      c ? Yj(b, a.l) : (c = !!a.C);
      c ? (b.C = a.C) : (c = !!a.j);
      c ? (b.j = a.j) : (c = null != a.B);
      var d = a.h;
      if (c) Zj(b, a.B);
      else if ((c = !!a.h)) {
        if ('/' != d.charAt(0))
          if (this.j && !this.h) d = '/' + d;
          else {
            var e = b.h.lastIndexOf('/');
            -1 != e && (d = b.h.substr(0, e + 1) + d);
          }
        e = d;
        if ('..' == e || '.' == e) d = '';
        else if (-1 != e.indexOf('./') || -1 != e.indexOf('/.')) {
          d = 0 == e.lastIndexOf('/', 0);
          e = e.split('/');
          for (var f = [], h = 0; h < e.length; ) {
            var k = e[h++];
            '.' == k
              ? d && h == e.length && f.push('')
              : '..' == k
              ? ((1 < f.length || (1 == f.length && '' != f[0])) && f.pop(),
                d && h == e.length && f.push(''))
              : (f.push(k), (d = !0));
          }
          d = f.join('/');
        } else d = e;
      }
      c ? (b.h = d) : (c = '' !== a.g.toString());
      c ? ak(b, Nj(a.g)) : (c = !!a.s);
      c && (b.s = a.s);
      return b;
    };
    Yj = function (a, b, c) {
      a.l = c ? Tj(b, !0) : b;
      a.l && (a.l = a.l.replace(/:$/, ''));
    };
    Zj = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error('F`' + b);
        a.B = b;
      } else a.B = null;
    };
    ak = function (a, b, c) {
      b instanceof Ij
        ? ((a.g = b), Oj(a.g, a.o))
        : (c || (b = Wj(b, Uj)), (a.g = new Ij(b, a.o)));
    };
    bk = function (a) {
      var b = Gj(a);
      if ('undefined' == typeof b) throw Error('H');
      var c = new Ij(null, void 0);
      a = yi(a);
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a[d];
        Array.isArray(f) ? Mj(c, e, f) : c.add(e, f);
      }
      return c;
    };
    ck = {};
    _.dk = {};
    Vh = {};
    _.ek = function (a) {
      (0, _.ag)();
      return _.Qc(a, null);
    };
    fk = function (a, b, c, d, e) {
      var f = new _.mg();
      _.pg.push(f);
      b && f.D('complete', b);
      f.Vb('ready', f.aa);
      e && (f.s = Math.max(0, e));
      f.send(a, c, d, void 0);
    };
    bi = {};
    _.gk = null;
    _.ai = function () {
      if (!_.gk) {
        _.gk = {};
        for (
          var a =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                '',
              ),
            b = ['+/=', '+/', '-_=', '-_.', '-_'],
            c = 0;
          5 > c;
          c++
        ) {
          var d = a.concat(b[c].split(''));
          bi[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === _.gk[f] && (_.gk[f] = e);
          }
        }
      }
    };
    ik = function (a) {
      var b = a.l + a.j;
      a.kb[b] || (a.g = a.kb[b] = {});
    };
    jk = function (a, b, c) {
      var d = hk;
      hk = null;
      a || (a = d);
      d = this.constructor.Al;
      a || (a = d ? [d] : []);
      this.j = (d ? 0 : -1) - (this.constructor.yl || 0);
      this.h = null;
      this.kb = a;
      a: {
        d = this.kb.length;
        a = d - 1;
        if (d && ((d = this.kb[a]), Yh(d))) {
          this.l = a - this.j;
          this.g = d;
          break a;
        }
        void 0 !== b && -1 < b
          ? ((this.l = Math.max(b, a + 1 - this.j)), (this.g = null))
          : (this.l = Number.MAX_VALUE);
      }
      if (c)
        for (b = 0; b < c.length; b++)
          (a = c[b]),
            a < this.l
              ? ((a += this.j),
                (d = this.kb[a])
                  ? Array.isArray(d) && _.bh(d)
                  : (this.kb[a] = _.ph))
              : (ik(this),
                (d = this.g[a])
                  ? Array.isArray(d) && _.bh(d)
                  : (this.g[a] = _.ph));
    };
    ki = function (a, b, c) {
      return -1 === b
        ? null
        : b >= a.l
        ? a.g
          ? a.g[b]
          : void 0
        : (void 0 === c ? 0 : c) && a.g && a.g[b]
        ? a.g[b]
        : a.kb[b + a.j];
    };
    lk = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      var d = ki(a, b, c);
      null == d && (d = _.ph);
      d === _.ph && ((d = _.bh(d.slice())), kk(a, b, d, c));
      return d;
    };
    kk = function (a, b, c, d) {
      (void 0 === d ? 0 : d) || b >= a.l
        ? (ik(a), (a.g[b] = c))
        : (a.kb[b + a.j] = c);
      return a;
    };
    mk = function (a, b, c) {
      var d;
      a.h || (a.h = {});
      var e = c ? c.kb : c;
      a.h[b] = c;
      kk(a, b, e, void 0 === d ? !1 : d);
    };
    nk = function (a, b, c) {
      a.h || (a.h = {});
      var d = a.h[b];
      if (!d) {
        var e = lk(a, b, !1);
        d = [];
        for (var f = 0; f < e.length; f++) d[f] = new c(e[f]);
        a.h[b] = d;
      }
      c = new c();
      a = lk(a, b);
      d.push(c);
      a.push(c.kb);
      return c;
    };
    jk.prototype.toJSON = function () {
      return Zh(this.kb, ci);
    };
    jk.prototype.toString = function () {
      return this.kb.toString();
    };
    var ok = function (a, b, c, d) {
      this.top = a;
      this.right = b;
      this.bottom = c;
      this.left = d;
    };
    _.g = ok.prototype;
    _.g.contains = function (a) {
      return this && a
        ? a instanceof ok
          ? a.left >= this.left &&
            a.right <= this.right &&
            a.top >= this.top &&
            a.bottom <= this.bottom
          : a.x >= this.left &&
            a.x <= this.right &&
            a.y >= this.top &&
            a.y <= this.bottom
        : !1;
    };
    _.g.ceil = function () {
      this.top = Math.ceil(this.top);
      this.right = Math.ceil(this.right);
      this.bottom = Math.ceil(this.bottom);
      this.left = Math.ceil(this.left);
      return this;
    };
    _.g.floor = function () {
      this.top = Math.floor(this.top);
      this.right = Math.floor(this.right);
      this.bottom = Math.floor(this.bottom);
      this.left = Math.floor(this.left);
      return this;
    };
    _.g.round = function () {
      this.top = Math.round(this.top);
      this.right = Math.round(this.right);
      this.bottom = Math.round(this.bottom);
      this.left = Math.round(this.left);
      return this;
    };
    _.g.translate = function (a, b) {
      a instanceof N
        ? ((this.left += a.x),
          (this.right += a.x),
          (this.top += a.y),
          (this.bottom += a.y))
        : ((this.left += a),
          (this.right += a),
          'number' === typeof b && ((this.top += b), (this.bottom += b)));
      return this;
    };
    var pk = function (a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d;
    };
    _.g = pk.prototype;
    _.g.contains = function (a) {
      return a instanceof N
        ? a.x >= this.left &&
            a.x <= this.left + this.width &&
            a.y >= this.top &&
            a.y <= this.top + this.height
        : this.left <= a.left &&
            this.left + this.width >= a.left + a.width &&
            this.top <= a.top &&
            this.top + this.height >= a.top + a.height;
    };
    _.g.ceil = function () {
      this.left = Math.ceil(this.left);
      this.top = Math.ceil(this.top);
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this;
    };
    _.g.floor = function () {
      this.left = Math.floor(this.left);
      this.top = Math.floor(this.top);
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this;
    };
    _.g.round = function () {
      this.left = Math.round(this.left);
      this.top = Math.round(this.top);
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this;
    };
    _.g.translate = function (a, b) {
      a instanceof N
        ? ((this.left += a.x), (this.top += a.y))
        : ((this.left += a), 'number' === typeof b && (this.top += b));
      return this;
    };
    qk = function (a, b) {
      var c = _.E(a);
      return c.defaultView &&
        c.defaultView.getComputedStyle &&
        (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ''
        : '';
    };
    rk = function (a, b) {
      return (
        qk(a, b) ||
        (a.currentStyle ? a.currentStyle[b] : null) ||
        (a.style && a.style[b])
      );
    };
    sk = function (a) {
      'number' == typeof a && (a += 'px');
      return a;
    };
    _.tk = function (a, b, c) {
      if (b instanceof N) {
        var d = b.x;
        b = b.y;
      } else (d = b), (b = c);
      a.style.left = sk(d);
      a.style.top = sk(b);
    };
    uk = function (a) {
      a = a ? _.E(a) : document;
      return !_.B || 9 <= Number(_.zc) || _.dd(_.F(a).U)
        ? a.documentElement
        : a.body;
    };
    vk = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
    };
    wk = function (a) {
      if (_.B && !(8 <= Number(_.zc))) return a.offsetParent;
      var b = _.E(a),
        c = rk(a, 'position'),
        d = 'fixed' == c || 'absolute' == c;
      for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (
          (11 == a.nodeType && a.host && (a = a.host),
          (c = rk(a, 'position')),
          (d = d && 'static' == c && a != b.documentElement && a != b.body),
          !d &&
            (a.scrollWidth > a.clientWidth ||
              a.scrollHeight > a.clientHeight ||
              'fixed' == c ||
              'absolute' == c ||
              'relative' == c))
        )
          return a;
      return null;
    };
    xk = function (a) {
      var b = _.E(a),
        c = new N(0, 0),
        d = uk(b);
      if (a == d) return c;
      a = vk(a);
      b = _.wi(_.F(b).U);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    };
    yk = function (a) {
      for (
        var b = new ok(0, Infinity, Infinity, 0),
          c = _.F(a),
          d = c.U.body,
          e = c.U.documentElement,
          f = vi(c.U);
        (a = wk(a));

      )
        if (
          !(
            (_.B && 0 == a.clientWidth) ||
            (_.D && 0 == a.clientHeight && a == d)
          ) &&
          a != d &&
          a != e &&
          'visible' != rk(a, 'overflow')
        ) {
          var h = xk(a),
            k = new N(a.clientLeft, a.clientTop);
          h.x += k.x;
          h.y += k.y;
          b.top = Math.max(b.top, h.y);
          b.right = Math.min(b.right, h.x + a.clientWidth);
          b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
          b.left = Math.max(b.left, h.x);
        }
      d = f.scrollLeft;
      f = f.scrollTop;
      b.left = Math.max(b.left, d);
      b.top = Math.max(b.top, f);
      c = _.ed(_.ud(c) || window);
      b.right = Math.min(b.right, d + c.width);
      b.bottom = Math.min(b.bottom, f + c.height);
      return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left
        ? b
        : null;
    };
    zk = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = _.D && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect
        ? ((a = vk(a)), new _.Vc(a.right - a.left, a.bottom - a.top))
        : new _.Vc(b, c);
    };
    _.Ak = function (a, b) {
      var c = new N(0, 0),
        d = _.fd(_.E(a));
      if (!_.ac(d, 'parent')) return c;
      do {
        if (d == b) var e = xk(a);
        else (e = vk(a)), (e = new N(e.left, e.top));
        c.x += e.x;
        c.y += e.y;
      } while (
        d &&
        d != b &&
        d != d.parent &&
        (a = d.frameElement) &&
        (d = d.parent)
      );
      return c;
    };
    Bk = function (a) {
      if ('none' != rk(a, 'display')) return zk(a);
      var b = a.style,
        c = b.display,
        d = b.visibility,
        e = b.position;
      b.visibility = 'hidden';
      b.position = 'absolute';
      b.display = 'inline';
      a = zk(a);
      b.display = c;
      b.position = e;
      b.visibility = d;
      return a;
    };
    _.O = function (a, b) {
      a.style.display = b ? '' : 'none';
    };
    Ck = function (a) {
      return 'rtl' == rk(a, 'direction');
    };
    Dk = function (a, b, c) {
      c = c ? null : a.getElementsByTagName('*');
      if (_.sh) {
        if (((b = b ? 'none' : ''), a.style && (a.style[_.sh] = b), c)) {
          a = 0;
          for (var d; (d = c[a]); a++) d.style && (d.style[_.sh] = b);
        }
      } else if (
        _.B &&
        ((b = b ? 'on' : ''), a.setAttribute('unselectable', b), c)
      )
        for (a = 0; (d = c[a]); a++) d.setAttribute('unselectable', b);
    };
    _.Ek = function (a) {
      return new _.Vc(a.offsetWidth, a.offsetHeight);
    };
    Fk = function (a, b, c) {
      a = a.style;
      _.C
        ? (a.MozBoxSizing = c)
        : _.D
        ? (a.WebkitBoxSizing = c)
        : (a.boxSizing = c);
      a.width = Math.max(b.width, 0) + 'px';
      a.height = Math.max(b.height, 0) + 'px';
    };
    Gk = function (a, b, c, d) {
      if (/^\d+px?$/.test(b)) return parseInt(b, 10);
      var e = a.style[c],
        f = a.runtimeStyle[c];
      a.runtimeStyle[c] = a.currentStyle[c];
      a.style[c] = b;
      b = a.style[d];
      a.style[c] = e;
      a.runtimeStyle[c] = f;
      return +b;
    };
    Hk = function (a, b) {
      return (b = a.currentStyle ? a.currentStyle[b] : null)
        ? Gk(a, b, 'left', 'pixelLeft')
        : 0;
    };
    Ik = function (a) {
      if (_.B) {
        var b = Hk(a, 'paddingLeft'),
          c = Hk(a, 'paddingRight'),
          d = Hk(a, 'paddingTop');
        a = Hk(a, 'paddingBottom');
        return new ok(d, c, a, b);
      }
      b = qk(a, 'paddingLeft');
      c = qk(a, 'paddingRight');
      d = qk(a, 'paddingTop');
      a = qk(a, 'paddingBottom');
      return new ok(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
    };
    Jk = { thin: 2, medium: 4, thick: 6 };
    Kk = function (a, b) {
      if ('none' == (a.currentStyle ? a.currentStyle[b + 'Style'] : null))
        return 0;
      b = a.currentStyle ? a.currentStyle[b + 'Width'] : null;
      return b in Jk ? Jk[b] : Gk(a, b, 'left', 'pixelLeft');
    };
    Lk = function (a) {
      if (_.B && !(9 <= Number(_.zc))) {
        var b = Kk(a, 'borderLeft'),
          c = Kk(a, 'borderRight'),
          d = Kk(a, 'borderTop');
        a = Kk(a, 'borderBottom');
        return new ok(d, c, a, b);
      }
      b = qk(a, 'borderLeftWidth');
      c = qk(a, 'borderRightWidth');
      d = qk(a, 'borderTopWidth');
      a = qk(a, 'borderBottomWidth');
      return new ok(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
    };
    _.Mk = function (a, b) {
      var c = _.dd(_.F(_.E(a)).U);
      if (!_.B || _.wc('10') || c) Fk(a, b, 'content-box');
      else {
        var d = a.style;
        c
          ? ((d.pixelWidth = b.width), (d.pixelHeight = b.height))
          : ((c = Ik(a)),
            (a = Lk(a)),
            (d.pixelWidth = b.width + a.left + c.left + c.right + a.right),
            (d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom));
      }
    };
    _.Nk = function (a, b) {
      return null != a && a.Fb === b;
    };
    Ok = function (a) {
      if (null != a)
        switch (a.Md) {
          case 1:
            return 1;
          case -1:
            return -1;
          case 0:
            return 0;
        }
      return null;
    };
    _.Pk = function (a, b) {
      return a && b && a.ij && b.ij
        ? a.Fb !== b.Fb
          ? !1
          : a.toString() === b.toString()
        : a instanceof _.Kf && b instanceof _.Kf
        ? a.Fb != b.Fb
          ? !1
          : a.toString() == b.toString()
        : a == b;
    };
    Qk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
    Rk = /</g;
    Sk = {
      '\x00': '&#0;',
      '\t': '&#9;',
      '\n': '&#10;',
      '\x0B': '&#11;',
      '\f': '&#12;',
      '\r': '&#13;',
      ' ': '&#32;',
      '"': '&quot;',
      '&': '&amp;',
      "'": '&#39;',
      '-': '&#45;',
      '/': '&#47;',
      '<': '&lt;',
      '=': '&#61;',
      '>': '&gt;',
      '`': '&#96;',
      '\u0085': '&#133;',
      '\u00a0': '&#160;',
      '\u2028': '&#8232;',
      '\u2029': '&#8233;',
    };
    Tk = function (a) {
      return Sk[a];
    };
    Uk = {
      '\x00': '\\0 ',
      '\b': '\\8 ',
      '\t': '\\9 ',
      '\n': '\\a ',
      '\x0B': '\\b ',
      '\f': '\\c ',
      '\r': '\\d ',
      '"': '\\22 ',
      '&': '\\26 ',
      "'": '\\27 ',
      '(': '\\28 ',
      ')': '\\29 ',
      '*': '\\2a ',
      '/': '\\2f ',
      ':': '\\3a ',
      ';': '\\3b ',
      '<': '\\3c ',
      '=': '\\3d ',
      '>': '\\3e ',
      '@': '\\40 ',
      '\\': '\\5c ',
      '{': '\\7b ',
      '}': '\\7d ',
      '\u0085': '\\85 ',
      '\u00a0': '\\a0 ',
      '\u2028': '\\2028 ',
      '\u2029': '\\2029 ',
    };
    _.Vk = function (a) {
      return Uk[a];
    };
    Wk = {
      '\x00': '%00',
      '\u0001': '%01',
      '\u0002': '%02',
      '\u0003': '%03',
      '\u0004': '%04',
      '\u0005': '%05',
      '\u0006': '%06',
      '\u0007': '%07',
      '\b': '%08',
      '\t': '%09',
      '\n': '%0A',
      '\x0B': '%0B',
      '\f': '%0C',
      '\r': '%0D',
      '\u000e': '%0E',
      '\u000f': '%0F',
      '\u0010': '%10',
      '\u0011': '%11',
      '\u0012': '%12',
      '\u0013': '%13',
      '\u0014': '%14',
      '\u0015': '%15',
      '\u0016': '%16',
      '\u0017': '%17',
      '\u0018': '%18',
      '\u0019': '%19',
      '\u001a': '%1A',
      '\u001b': '%1B',
      '\u001c': '%1C',
      '\u001d': '%1D',
      '\u001e': '%1E',
      '\u001f': '%1F',
      ' ': '%20',
      '"': '%22',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '<': '%3C',
      '>': '%3E',
      '\\': '%5C',
      '{': '%7B',
      '}': '%7D',
      '\u007f': '%7F',
      '\u0085': '%C2%85',
      '\u00a0': '%C2%A0',
      '\u2028': '%E2%80%A8',
      '\u2029': '%E2%80%A9',
      '\uff01': '%EF%BC%81',
      '\uff03': '%EF%BC%83',
      '\uff04': '%EF%BC%84',
      '\uff06': '%EF%BC%86',
      '\uff07': '%EF%BC%87',
      '\uff08': '%EF%BC%88',
      '\uff09': '%EF%BC%89',
      '\uff0a': '%EF%BC%8A',
      '\uff0b': '%EF%BC%8B',
      '\uff0c': '%EF%BC%8C',
      '\uff0f': '%EF%BC%8F',
      '\uff1a': '%EF%BC%9A',
      '\uff1b': '%EF%BC%9B',
      '\uff1d': '%EF%BC%9D',
      '\uff1f': '%EF%BC%9F',
      '\uff20': '%EF%BC%A0',
      '\uff3b': '%EF%BC%BB',
      '\uff3d': '%EF%BC%BD',
    };
    Xk = function (a) {
      return Wk[a];
    };
    Yk = /[\x00\x22\x26\x27\x3c\x3e]/g;
    _.Zk = function (a) {
      return _.Nk(a, _.Ah)
        ? a
        : a instanceof _.Oc
        ? (0, _.Dh)(_.Pc(a).toString(), a.$b())
        : (0, _.Dh)(String(String(a)).replace(Yk, Tk), Ok(a));
    };
    $k = /[\x00\x22\x27\x3c\x3e]/g;
    _.P = function (a) {
      if (_.Nk(a, _.Ah)) {
        var b = String;
        a = String(a.wa()).replace(Qk, '').replace(Rk, '&lt;');
        b = b(a).replace($k, Tk);
      } else b = String(a).replace(Yk, Tk);
      return b;
    };
    _.al =
      /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;
    bl =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
    cl = function (a) {
      return String(a).replace(bl, Xk);
    };
    dl = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
    _.el = function (a) {
      _.Nk(a, ck) || _.Nk(a, _.dk)
        ? (a = cl(a))
        : a instanceof _.Dc
        ? (a = cl(_.vh(a)))
        : a instanceof _.Gb
        ? (a = cl(_.Sa(a).toString()))
        : ((a = String(a)),
          (a = dl.test(a) ? a.replace(bl, Xk) : 'about:invalid#zSoyz'));
      return a;
    };
    fl =
      /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
    _.gl = function (a) {
      _.Nk(a, ck) || _.Nk(a, _.dk)
        ? (a = cl(a))
        : a instanceof _.Dc
        ? (a = cl(_.vh(a)))
        : a instanceof _.Gb
        ? (a = cl(_.Sa(a).toString()))
        : ((a = String(a)),
          (a = fl.test(a) ? a.replace(bl, Xk) : 'about:invalid#zSoyz'));
      return a;
    };
    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var hl, il, jl, kl, ll, nl;
    hl = function (a) {
      return 'string' == typeof a.className
        ? a.className
        : (a.getAttribute && a.getAttribute('class')) || '';
    };
    il = function (a) {
      return a.classList ? a.classList : hl(a).match(/\S+/g) || [];
    };
    jl = function (a, b) {
      'string' == typeof a.className
        ? (a.className = b)
        : a.setAttribute && a.setAttribute('class', b);
    };
    kl = function (a, b) {
      return a.classList ? a.classList.contains(b) : _.ta(il(a), b);
    };
    _.Q = function (a, b) {
      if (a.classList) a.classList.add(b);
      else if (!kl(a, b)) {
        var c = hl(a);
        jl(a, c + (0 < c.length ? ' ' + b : b));
      }
    };
    ll = function (a, b) {
      if (a.classList)
        Array.prototype.forEach.call(b, function (e) {
          _.Q(a, e);
        });
      else {
        var c = {};
        Array.prototype.forEach.call(il(a), function (e) {
          c[e] = !0;
        });
        Array.prototype.forEach.call(b, function (e) {
          c[e] = !0;
        });
        b = '';
        for (var d in c) b += 0 < b.length ? ' ' + d : d;
        jl(a, b);
      }
    };
    _.ml = function (a, b) {
      a.classList
        ? a.classList.remove(b)
        : kl(a, b) &&
          jl(
            a,
            Array.prototype.filter
              .call(il(a), function (c) {
                return c != b;
              })
              .join(' '),
          );
    };
    nl = function (a, b) {
      a.classList
        ? Array.prototype.forEach.call(b, function (c) {
            _.ml(a, c);
          })
        : jl(
            a,
            Array.prototype.filter
              .call(il(a), function (c) {
                return !_.ta(b, c);
              })
              .join(' '),
          );
    };
    var ol = function () {};
    ol.prototype.h = function () {};
    var pl = (function () {
      if (_.ic) {
        var a = /Windows NT ([0-9.]+)/;
        return (a = a.exec(_.Ba())) ? a[1] : '0';
      }
      return _.hc
        ? ((a = /1[0|1][_.][0-9_.]+/),
          (a = a.exec(_.Ba())) ? a[0].replace(/_/g, '.') : '10')
        : _.jc
        ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(_.Ba())) ? a[1] : '')
        : _.kc || _.lc || _.nc
        ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/),
          (a = a.exec(_.Ba())) ? a[1].replace(/_/g, '.') : '')
        : '';
    })();
    var ql = function (a) {
        return (a = a.exec(_.Ba())) ? a[1] : '';
      },
      rl = (function () {
        if (_.Vg) return ql(/Firefox\/([0-9.]+)/);
        if (_.B || _.ec || _.dc) return _.uc;
        if (_.Zg) {
          if (_.Da() || _.t('Macintosh')) {
            var a = ql(/CriOS\/([0-9.]+)/);
            if (a) return a;
          }
          return ql(/Chrome\/([0-9.]+)/);
        }
        if (_.$g && !_.Da()) return ql(/Version\/([0-9.]+)/);
        if (_.Wg || _.Xg) {
          if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.Ba())))
            return a[1] + '.' + a[2];
        } else if (_.Yg)
          return (a = ql(/Android\s+([0-9.]+)/)) ? a : ql(/Version\/([0-9.]+)/);
        return '';
      })();
    var vl = function (a, b, c, d, e, f, h, k, l) {
        var m = sl(c);
        var n = xk(a);
        var q = Bk(a);
        n = new pk(n.x, n.y, q.width, q.height);
        if ((q = yk(a))) {
          var r = new pk(q.left, q.top, q.right - q.left, q.bottom - q.top);
          q = Math.max(n.left, r.left);
          var z = Math.min(n.left + n.width, r.left + r.width);
          if (q <= z) {
            var G = Math.max(n.top, r.top);
            r = Math.min(n.top + n.height, r.top + r.height);
            G <= r &&
              ((n.left = q),
              (n.top = G),
              (n.width = z - q),
              (n.height = r - G));
          }
        }
        q = _.F(a);
        G = _.F(c);
        q.U != G.U &&
          ((z = q.U.body),
          (G = _.Ak(z, _.ud(G))),
          (G = Yi(G, xk(z))),
          !_.B || 9 <= Number(_.zc) || _.dd(q.U) || (G = Yi(G, _.wi(q.U))),
          (n.left += G.x),
          (n.top += G.y));
        a = tl(a, b);
        b = n.left;
        a & 4 ? (b += n.width) : a & 2 && (b += n.width / 2);
        b = new N(b, n.top + (a & 1 ? n.height : 0));
        b = Yi(b, m);
        e && ((b.x += (a & 4 ? -1 : 1) * e.x), (b.y += (a & 1 ? -1 : 1) * e.y));
        if (h)
          if (l) var R = l;
          else if ((R = yk(c)))
            (R.top -= m.y),
              (R.right -= m.x),
              (R.bottom -= m.y),
              (R.left -= m.x);
        return ul(b, c, d, f, R, h, k);
      },
      sl = function (a) {
        if ((a = a.offsetParent)) {
          var b = 'HTML' == a.tagName || 'BODY' == a.tagName;
          if (!b || 'static' != rk(a, 'position')) {
            var c = xk(a);
            if (!b) {
              b = Ck(a);
              var d;
              if ((d = b)) {
                d = _.$g && 0 <= _.Zb(rl, 10);
                var e;
                if ((e = _.oc)) e = 0 <= _.Zb(pl, 10);
                var f = _.Zg && 0 <= _.Zb(rl, 85);
                d = _.C || d || e || f;
              }
              b = d
                ? -a.scrollLeft
                : b && !_.fc && 'visible' != rk(a, 'overflowX')
                ? a.scrollWidth - a.clientWidth - a.scrollLeft
                : a.scrollLeft;
              c = Yi(c, new N(b, a.scrollTop));
            }
          }
        }
        return c || new N();
      },
      ul = function (a, b, c, d, e, f, h) {
        a = si(a);
        var k = tl(b, c);
        c = Bk(b);
        h = h ? new _.Vc(h.width, h.height) : new _.Vc(c.width, c.height);
        a = si(a);
        h = new _.Vc(h.width, h.height);
        var l = 0;
        if (d || 0 != k)
          k & 4
            ? (a.x -= h.width + (d ? d.right : 0))
            : k & 2
            ? (a.x -= h.width / 2)
            : d && (a.x += d.left),
            k & 1
              ? (a.y -= h.height + (d ? d.bottom : 0))
              : d && (a.y += d.top);
        if (f) {
          if (e) {
            d = a;
            k = h;
            l = 0;
            65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
            132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
            d.x < e.left && f & 1 && ((d.x = e.left), (l |= 1));
            if (f & 16) {
              var m = d.x;
              d.x < e.left && ((d.x = e.left), (l |= 4));
              d.x + k.width > e.right &&
                ((k.width = Math.min(e.right - d.x, m + k.width - e.left)),
                (k.width = Math.max(k.width, 0)),
                (l |= 4));
            }
            d.x + k.width > e.right &&
              f & 1 &&
              ((d.x = Math.max(e.right - k.width, e.left)), (l |= 1));
            f & 2 &&
              (l |=
                (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
            d.y < e.top && f & 4 && ((d.y = e.top), (l |= 2));
            f & 32 &&
              ((m = d.y),
              d.y < e.top && ((d.y = e.top), (l |= 8)),
              d.y + k.height > e.bottom &&
                ((k.height = Math.min(e.bottom - d.y, m + k.height - e.top)),
                (k.height = Math.max(k.height, 0)),
                (l |= 8)));
            d.y + k.height > e.bottom &&
              f & 4 &&
              ((d.y = Math.max(e.bottom - k.height, e.top)), (l |= 2));
            f & 8 &&
              (l |=
                (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
            e = l;
          } else e = 256;
          l = e;
        }
        f = new pk(0, 0, 0, 0);
        f.left = a.x;
        f.top = a.y;
        f.width = h.width;
        f.height = h.height;
        e = l;
        if (e & 496) return e;
        _.tk(b, new N(f.left, f.top));
        h = new _.Vc(f.width, f.height);
        _.Wc(c, h) ||
          ((c = h),
          (a = _.dd(_.F(_.E(b)).U)),
          !_.B || _.wc('10') || a
            ? Fk(b, c, 'border-box')
            : ((h = b.style),
              a
                ? ((a = Ik(b)),
                  (b = Lk(b)),
                  (h.pixelWidth =
                    c.width - b.left - a.left - a.right - b.right),
                  (h.pixelHeight =
                    c.height - b.top - a.top - a.bottom - b.bottom))
                : ((h.pixelWidth = c.width), (h.pixelHeight = c.height))));
        return e;
      },
      tl = function (a, b) {
        return (b & 8 && Ck(a) ? b ^ 4 : b) & -9;
      };
    var wl;
    var xl = function (a, b) {
        b ? a.setAttribute('role', b) : a.removeAttribute('role');
      },
      yl = function (a, b, c) {
        Array.isArray(c) && (c = c.join(' '));
        var d = 'aria-' + b;
        '' === c || void 0 == c
          ? (wl ||
              (wl = {
                atomic: !1,
                autocomplete: 'none',
                dropeffect: 'none',
                haspopup: !1,
                live: 'off',
                multiline: !1,
                multiselectable: !1,
                orientation: 'vertical',
                readonly: !1,
                relevant: 'additions text',
                required: !1,
                sort: 'none',
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: 'false',
              }),
            (c = wl),
            b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
          : a.setAttribute(d, c);
      };
    var zl = function (a, b, c) {
      _.y.call(this);
      this.h = a;
      this.l = b || 0;
      this.j = c;
      this.g = (0, _.w)(this.Mh, this);
    };
    _.x(zl, _.y);
    _.g = zl.prototype;
    _.g.nc = 0;
    _.g.L = function () {
      zl.G.L.call(this);
      this.stop();
      delete this.h;
      delete this.j;
    };
    _.g.start = function (a) {
      this.stop();
      this.nc = _.kg(this.g, void 0 !== a ? a : this.l);
    };
    _.g.stop = function () {
      0 != this.nc && _.lg(this.nc);
      this.nc = 0;
    };
    _.g.Mh = function () {
      this.nc = 0;
      this.h && this.h.call(this.j);
    };
    var Al = function (a) {
      var b = 'kc';
      if (a.kc && a.hasOwnProperty(b)) return a.kc;
      b = new a();
      return (a.kc = b);
    };
    var Cl = function (a) {
        if (
          (a.altKey && !a.ctrlKey) ||
          a.metaKey ||
          (112 <= a.keyCode && 123 >= a.keyCode)
        )
          return !1;
        if (Bl(a.keyCode)) return !0;
        switch (a.keyCode) {
          case 18:
          case 20:
          case 93:
          case 17:
          case 40:
          case 35:
          case 27:
          case 36:
          case 45:
          case 37:
          case 224:
          case 91:
          case 144:
          case 12:
          case 34:
          case 33:
          case 19:
          case 255:
          case 44:
          case 39:
          case 145:
          case 16:
          case 38:
          case 252:
          case 224:
          case 92:
            return !1;
          case 0:
            return !_.C;
          default:
            return 166 > a.keyCode || 183 < a.keyCode;
        }
      },
      El = function (a, b, c, d, e, f) {
        if (_.hc && e) return Bl(a);
        if (e && !d) return !1;
        if (!_.C) {
          'number' === typeof b && (b = Dl(b));
          var h = 17 == b || 18 == b || (_.hc && 91 == b);
          if (((!c || _.hc) && h) || (_.hc && 16 == b && (d || f))) return !1;
        }
        if ((_.D || _.ec) && d && c)
          switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
              return !1;
          }
        if (_.B && d && b == a) return !1;
        switch (a) {
          case 13:
            return _.C ? (f || e ? !1 : !(c && d)) : !0;
          case 27:
            return !(_.D || _.ec || _.C);
        }
        return _.C && (d || e || f) ? !1 : Bl(a);
      },
      Bl = function (a) {
        if (
          (48 <= a && 57 >= a) ||
          (96 <= a && 106 >= a) ||
          (65 <= a && 90 >= a) ||
          ((_.D || _.ec) && 0 == a)
        )
          return !0;
        switch (a) {
          case 32:
          case 43:
          case 63:
          case 64:
          case 107:
          case 109:
          case 110:
          case 111:
          case 186:
          case 59:
          case 189:
          case 187:
          case 61:
          case 188:
          case 190:
          case 191:
          case 192:
          case 222:
          case 219:
          case 220:
          case 221:
          case 163:
          case 58:
            return !0;
          case 173:
            return _.C;
          default:
            return !1;
        }
      },
      Dl = function (a) {
        if (_.C) a = Fl(a);
        else if (_.hc && _.D)
          switch (a) {
            case 93:
              a = 91;
          }
        return a;
      },
      Fl = function (a) {
        switch (a) {
          case 61:
            return 187;
          case 59:
            return 186;
          case 173:
            return 189;
          case 224:
            return 91;
          case 0:
            return 224;
          default:
            return a;
        }
      };
    var Gl = function (a, b, c, d) {
      _.zd.call(this, d);
      this.type = 'key';
      this.keyCode = a;
      this.charCode = b;
      this.repeat = c;
    };
    _.x(Gl, _.zd);
    var Hl = function (a, b) {
      _.I.call(this);
      a && this.attach(a, b);
    };
    _.x(Hl, _.I);
    _.g = Hl.prototype;
    _.g.I = null;
    _.g.ce = null;
    _.g.tf = null;
    _.g.de = null;
    _.g.Ya = -1;
    _.g.Ib = -1;
    _.g.Ne = !1;
    var Il = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45,
      },
      Jl = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        'U+007F': 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45,
      },
      Kl = _.hc && _.C;
    _.g = Hl.prototype;
    _.g.Oi = function (a) {
      if (_.D || _.ec)
        if (
          (17 == this.Ya && !a.ctrlKey) ||
          (18 == this.Ya && !a.altKey) ||
          (_.hc && 91 == this.Ya && !a.metaKey)
        )
          this.Ib = this.Ya = -1;
      -1 == this.Ya &&
        (a.ctrlKey && 17 != a.keyCode
          ? (this.Ya = 17)
          : a.altKey && 18 != a.keyCode
          ? (this.Ya = 18)
          : a.metaKey && 91 != a.keyCode && (this.Ya = 91));
      El(a.keyCode, this.Ya, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
        ? ((this.Ib = Dl(a.keyCode)), Kl && (this.Ne = a.altKey))
        : this.handleEvent(a);
    };
    _.g.Pi = function (a) {
      this.Ib = this.Ya = -1;
      this.Ne = a.altKey;
    };
    _.g.handleEvent = function (a) {
      var b = a.g,
        c = b.altKey;
      if (_.B && 'keypress' == a.type) {
        var d = this.Ib;
        var e = 13 != d && 27 != d ? b.keyCode : 0;
      } else
        (_.D || _.ec) && 'keypress' == a.type
          ? ((d = this.Ib),
            (e =
              0 <= b.charCode && 63232 > b.charCode && Bl(d) ? b.charCode : 0))
          : ('keypress' == a.type
              ? (Kl && (c = this.Ne),
                b.keyCode == b.charCode
                  ? 32 > b.keyCode
                    ? ((d = b.keyCode), (e = 0))
                    : ((d = this.Ib), (e = b.charCode))
                  : ((d = b.keyCode || this.Ib), (e = b.charCode || 0)))
              : ((d = b.keyCode || this.Ib), (e = b.charCode || 0)),
            _.hc && 63 == e && 224 == d && (d = 191));
      var f = (d = Dl(d));
      d
        ? 63232 <= d && d in Il
          ? (f = Il[d])
          : 25 == d && a.shiftKey && (f = 9)
        : b.keyIdentifier && b.keyIdentifier in Jl && (f = Jl[b.keyIdentifier]);
      if (
        !_.C ||
        'keypress' != a.type ||
        El(f, this.Ya, a.shiftKey, a.ctrlKey, c, a.metaKey)
      )
        (a = f == this.Ya),
          (this.Ya = f),
          (b = new Gl(f, e, a, b)),
          (b.altKey = c),
          this.dispatchEvent(b);
    };
    _.g.A = function () {
      return this.I;
    };
    _.g.attach = function (a, b) {
      this.de && Ll(this);
      this.I = a;
      this.ce = _.H(this.I, 'keypress', this, b);
      this.tf = _.H(this.I, 'keydown', this.Oi, b, this);
      this.de = _.H(this.I, 'keyup', this.Pi, b, this);
    };
    var Ll = function (a) {
      a.ce &&
        (_.Ud(a.ce),
        _.Ud(a.tf),
        _.Ud(a.de),
        (a.ce = null),
        (a.tf = null),
        (a.de = null));
      a.I = null;
      a.Ya = -1;
      a.Ib = -1;
    };
    Hl.prototype.L = function () {
      Hl.G.L.call(this);
      Ll(this);
    };
    var Ml = function () {};
    Ai(Ml);
    Ml.prototype.g = 0;
    var Ul;
    _.M = function (a) {
      _.I.call(this);
      this.g = a || _.F();
      this.Na = Nl;
      this.Z = null;
      this.ia = !1;
      this.I = null;
      this.W = void 0;
      this.M = this.C = this.K = this.ob = null;
      this.Sb = !1;
    };
    _.x(_.M, _.I);
    _.M.prototype.uc = Ml.ea();
    var Nl = null,
      Ol = function (a, b) {
        switch (a) {
          case 1:
            return b ? 'disable' : 'enable';
          case 2:
            return b ? 'highlight' : 'unhighlight';
          case 4:
            return b ? 'activate' : 'deactivate';
          case 8:
            return b ? 'select' : 'unselect';
          case 16:
            return b ? 'check' : 'uncheck';
          case 32:
            return b ? 'focus' : 'blur';
          case 64:
            return b ? 'open' : 'close';
        }
        throw Error('aa');
      };
    _.M.prototype.ib = function () {
      return this.Z || (this.Z = ':' + (this.uc.g++).toString(36));
    };
    var Pl = function (a, b) {
      if (a.K && a.K.M) {
        var c = a.K.M,
          d = a.Z;
        d in c && delete c[d];
        c = a.K.M;
        if (null !== c && b in c) throw Error('q`' + b);
        c[b] = a;
      }
      a.Z = b;
    };
    _.M.prototype.A = function () {
      return this.I;
    };
    var Ql = function (a, b) {
        return a.I ? ui(b, a.I || a.g.U) : null;
      },
      S = function (a) {
        a.W || (a.W = new _.J(a));
        return a.W;
      },
      Sl = function (a, b) {
        if (a == b) throw Error('ba');
        if (b && a.K && a.Z && Rl(a.K, a.Z) && a.K != b) throw Error('ba');
        a.K = b;
        _.M.G.me.call(a, b);
      };
    _.M.prototype.T = function () {
      return this.K;
    };
    _.M.prototype.me = function (a) {
      if (this.K && this.K != a) throw Error('ca');
      _.M.G.me.call(this, a);
    };
    _.M.prototype.N = function () {
      this.I = _.gh(this.g, 'DIV');
    };
    _.M.prototype.ja = function (a) {
      _.Tl(this, a);
    };
    _.Tl = function (a, b, c) {
      if (a.ia) throw Error('da');
      a.I || a.N();
      b ? b.insertBefore(a.I, c || null) : a.g.U.body.appendChild(a.I);
      (a.K && !a.K.ia) || a.Y();
    };
    Ul = function (a, b) {
      if (a.ia) throw Error('da');
      if (b && a.ve(b)) {
        a.Sb = !0;
        var c = _.E(b);
        (a.g && a.g.U == c) || (a.g = _.F(b));
        a.da(b);
        a.Y();
      } else throw Error('ea');
    };
    _.g = _.M.prototype;
    _.g.ve = function () {
      return !0;
    };
    _.g.da = function (a) {
      this.I = a;
    };
    _.g.Y = function () {
      this.ia = !0;
      Vl(this, function (a) {
        !a.ia && a.A() && a.Y();
      });
    };
    _.g.ca = function () {
      Vl(this, function (a) {
        a.ia && a.ca();
      });
      this.W && _.$f(this.W);
      this.ia = !1;
    };
    _.g.L = function () {
      this.ia && this.ca();
      this.W && (this.W.R(), delete this.W);
      Vl(this, function (a) {
        a.R();
      });
      !this.Sb && this.I && _.pj(this.I);
      this.K = this.ob = this.I = this.M = this.C = null;
      _.M.G.L.call(this);
    };
    _.T = function (a, b) {
      return a.ib() + '.' + b;
    };
    _.M.prototype.Uc = function (a, b) {
      this.Ke(a, Wl(this), b);
    };
    _.M.prototype.Ke = function (a, b, c) {
      if (a.ia && (c || !this.ia)) throw Error('da');
      if (0 > b || b > Wl(this)) throw Error('fa');
      (this.M && this.C) || ((this.M = {}), (this.C = []));
      if (a.T() == this) {
        var d = a.ib();
        this.M[d] = a;
        _.va(this.C, a);
      } else {
        d = this.M;
        var e = a.ib();
        if (null !== d && e in d) throw Error('q`' + e);
        d[e] = a;
      }
      Sl(a, this);
      Hh(this.C, b, 0, a);
      a.ia && this.ia && a.T() == this
        ? ((c = this.rd()),
          (c.childNodes[b] || null) != a.A() &&
            (a.A().parentElement == c && c.removeChild(a.A()),
            (b = c.childNodes[b] || null),
            c.insertBefore(a.A(), b)))
        : c
        ? (this.I || this.N(),
          (b = Xl(this, b + 1)),
          _.Tl(a, this.rd(), b ? b.I : null))
        : this.ia &&
          !a.ia &&
          a.I &&
          a.I.parentNode &&
          1 == a.I.parentNode.nodeType &&
          a.Y();
    };
    _.M.prototype.rd = function () {
      return this.I;
    };
    var Yl = function (a) {
        null == a.Na && (a.Na = Ck(a.ia ? a.I : a.g.U.body));
        return a.Na;
      },
      Wl = function (a) {
        return a.C ? a.C.length : 0;
      },
      Rl = function (a, b) {
        a.M && b
          ? ((a = a.M), (b = (null !== a && b in a ? a[b] : void 0) || null))
          : (b = null);
        return b;
      },
      Xl = function (a, b) {
        return a.C ? a.C[b] || null : null;
      },
      Vl = function (a, b, c) {
        a.C && a.C.forEach(b, c);
      },
      Zl = function (a, b) {
        return a.C && b ? a.C.indexOf(b) : -1;
      };
    _.M.prototype.we = function (a, b) {
      if (a) {
        var c = 'string' === typeof a ? a : a.ib();
        a = Rl(this, c);
        if (c && a) {
          var d = this.M;
          c in d && delete d[c];
          _.va(this.C, a);
          b && (a.ca(), a.I && _.pj(a.I));
          Sl(a, null);
        }
      }
      if (!a) throw Error('ga');
      return a;
    };
    _.M.prototype.ld = function (a) {
      for (var b = []; this.C && 0 != this.C.length; ) {
        var c = b,
          d = c.push;
        var e = this.we(Xl(this, 0), a);
        d.call(c, e);
      }
      return b;
    };
    var $l = function () {},
      am;
    Ai($l);
    var bm = {
      button: 'pressed',
      checkbox: 'checked',
      menuitem: 'selected',
      menuitemcheckbox: 'checked',
      menuitemradio: 'checked',
      radio: 'checked',
      tab: 'selected',
      treeitem: 'selected',
    };
    _.g = $l.prototype;
    _.g.oc = function () {};
    _.g.N = function (a) {
      return a.g.N('DIV', cm(this, a).join(' '), a.wa());
    };
    _.g.Pb = function (a) {
      return a;
    };
    _.g.sd = function () {
      return !0;
    };
    _.g.cb = function (a, b) {
      b.id && Pl(a, b.id);
      var c = this.Pb(b);
      c && c.firstChild
        ? dm(a, c.firstChild.nextSibling ? _.wa(c.childNodes) : c.firstChild)
        : (a.ac = null);
      var d = 0,
        e = this.ua(),
        f = this.ua(),
        h = !1,
        k = !1,
        l = _.wa(il(b));
      l.forEach(function (m) {
        h || m != e
          ? k || m != f
            ? (d |= this.j(m))
            : (k = !0)
          : ((h = !0), f == e && (k = !0));
        1 == this.j(m) && wj(c) && xj(c) && yj(c, !1);
      }, this);
      a.ka = d;
      h || (l.push(e), f == e && (k = !0));
      k || l.push(f);
      (a = a.$e) && l.push.apply(l, a);
      (h && k && !a) || jl(b, l.join(' '));
      return b;
    };
    _.g.hg = function (a) {
      Yl(a) && this.ye(a.A(), !0);
      a.isEnabled() && this.pc(a, a.isVisible());
    };
    var em = function (a, b, c) {
        if ((a = c || a.oc()))
          (c = b.getAttribute('role') || null), a != c && xl(b, a);
      },
      fm = function (a, b, c) {
        b.isVisible() || yl(c, 'hidden', !b.isVisible());
        b.isEnabled() || a.sb(c, 1, !b.isEnabled());
        b.ra & 8 && a.sb(c, 8, !!(b.ka & 8));
        b.ra & 16 && a.sb(c, 16, !!(b.ka & 16));
        b.ra & 64 && a.sb(c, 64, !!(b.ka & 64));
      };
    _.g = $l.prototype;
    _.g.td = function (a, b) {
      Dk(a, !b, !_.B);
    };
    _.g.ye = function (a, b) {
      var c = this.ua() + '-SIsrTd';
      (a = a.A ? a.A() : a) && (b ? ll : nl)(a, [c]);
    };
    _.g.xe = function (a) {
      var b;
      return a.ra & 32 && (b = a.A()) ? wj(b) && xj(b) : !1;
    };
    _.g.pc = function (a, b) {
      var c;
      if (a.ra & 32 && (c = a.A())) {
        if (!b && a.ka & 32) {
          try {
            c.blur();
          } catch (d) {}
          a.ka & 32 && a.ig(null);
        }
        (wj(c) && xj(c)) != b && yj(c, b);
      }
    };
    _.g.S = function (a, b) {
      _.O(a, b);
      a && yl(a, 'hidden', !b);
    };
    _.g.Nc = function (a, b, c) {
      var d = a.A();
      if (d) {
        var e = this.g(b);
        e && (a = a.A ? a.A() : a) && (c ? ll : nl)(a, [e]);
        this.sb(d, b, c);
      }
    };
    _.g.sb = function (a, b, c) {
      am ||
        (am = { 1: 'disabled', 8: 'selected', 16: 'checked', 64: 'expanded' });
      b = am[b];
      var d = a.getAttribute('role') || null;
      d && ((d = bm[d] || b), (b = 'checked' == b || 'selected' == b ? d : b));
      b && yl(a, b, c);
    };
    _.g.Mc = function (a, b) {
      var c = this.Pb(a);
      c &&
        (_.jd(c),
        b &&
          ('string' === typeof b
            ? _.od(c, b)
            : ((a = function (d) {
                if (d) {
                  var e = _.E(c);
                  c.appendChild(
                    'string' === typeof d ? e.createTextNode(d) : d,
                  );
                }
              }),
              Array.isArray(b)
                ? b.forEach(a)
                : !_.da(b) || 'nodeType' in b
                ? a(b)
                : _.wa(b).forEach(a))));
    };
    _.g.ua = function () {
      return 'VIpgJd-bMcfAe';
    };
    var cm = function (a, b) {
      var c = a.ua(),
        d = [c],
        e = a.ua();
      e != c && d.push(e);
      c = b.ka;
      for (e = []; c; ) {
        var f = c & -c;
        e.push(a.g(f));
        c &= ~f;
      }
      d.push.apply(d, e);
      (a = b.$e) && d.push.apply(d, a);
      return d;
    };
    $l.prototype.g = function (a) {
      this.h || gm(this);
      return this.h[a];
    };
    $l.prototype.j = function (a) {
      if (!this.o) {
        this.h || gm(this);
        var b = this.h,
          c = {},
          d;
        for (d in b) c[b[d]] = d;
        this.o = c;
      }
      a = parseInt(this.o[a], 10);
      return isNaN(a) ? 0 : a;
    };
    var gm = function (a) {
      var b = a.ua();
      a.h = {
        1: b + '-OWB6Me',
        2: b + '-ZmdkE',
        4: b + '-auswjd',
        8: b + '-gk6SMd',
        16: b + '-barxie',
        32: b + '-XpnDCe',
        64: b + '-FNFY6c',
      };
    };
    var hm = function () {};
    _.x(hm, $l);
    Ai(hm);
    _.g = hm.prototype;
    _.g.oc = function () {
      return 'button';
    };
    _.g.sb = function (a, b, c) {
      switch (b) {
        case 8:
        case 16:
          yl(a, 'pressed', c);
          break;
        default:
        case 64:
        case 1:
          hm.G.sb.call(this, a, b, c);
      }
    };
    _.g.N = function (a) {
      var b = hm.G.N.call(this, a);
      this.ne(b, a.ma());
      var c = a.Qa();
      c && this.Ma(b, c);
      a.ra & 16 && this.sb(b, 16, !!(a.ka & 16));
      return b;
    };
    _.g.cb = function (a, b) {
      b = hm.G.cb.call(this, a, b);
      var c = this.Qa(b);
      a.l = c;
      a.X = this.ma(b);
      a.ra & 16 && this.sb(b, 16, !!(a.ka & 16));
      return b;
    };
    _.g.Qa = _.v;
    _.g.Ma = _.v;
    _.g.ma = function (a) {
      return a.title;
    };
    _.g.ne = function (a, b) {
      a && (b ? (a.title = b) : a.removeAttribute('title'));
    };
    _.g.ua = function () {
      return 'VIpgJd-LgbsSe';
    };
    var jm = function (a, b) {
        if (!a) throw Error('ha`' + a);
        if ('function' !== typeof b) throw Error('ia`' + b);
        im[a] = b;
      },
      km = {},
      im = {};
    var U = function (a, b, c) {
      _.M.call(this, c);
      if (!b) {
        for (b = this.constructor; b; ) {
          var d = _.za(b);
          if ((d = km[d])) break;
          b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
        }
        b = d ? ('function' === typeof d.ea ? d.ea() : new d()) : null;
      }
      this.h = b;
      this.ac = void 0 !== a ? a : null;
    };
    _.x(U, _.M);
    _.g = U.prototype;
    _.g.ac = null;
    _.g.ka = 0;
    _.g.ra = 39;
    _.g.Qe = 255;
    _.g.qd = 0;
    _.g.za = !0;
    _.g.$e = null;
    _.g.mf = !0;
    _.g.Fd = !1;
    var mm = function (a, b) {
      a.ia && b != a.mf && lm(a, b);
      a.mf = b;
    };
    _.g = U.prototype;
    _.g.N = function () {
      var a = this.h.N(this);
      this.I = a;
      em(this.h, a, this.gd());
      this.Fd || this.h.td(a, !1);
      this.isVisible() || this.h.S(a, !1);
    };
    _.g.gd = function () {
      return null;
    };
    _.g.rd = function () {
      return this.h.Pb(this.A());
    };
    _.g.ve = function (a) {
      return this.h.sd(a);
    };
    _.g.da = function (a) {
      this.I = a = this.h.cb(this, a);
      em(this.h, a, this.gd());
      this.Fd || this.h.td(a, !1);
      this.za = 'none' != a.style.display;
    };
    _.g.Y = function () {
      U.G.Y.call(this);
      fm(this.h, this, this.I);
      this.h.hg(this);
      if (this.ra & -2 && (this.mf && lm(this, !0), this.ra & 32)) {
        var a = this.A();
        if (a) {
          var b = this.s || (this.s = new Hl());
          b.attach(a);
          S(this)
            .D(b, 'key', this.ab)
            .D(a, 'focus', this.Nh)
            .D(a, 'blur', this.ig);
        }
      }
    };
    var lm = function (a, b) {
      var c = S(a),
        d = a.A();
      b
        ? (c
            .D(d, Aj.rc, a.Pc)
            .D(d, [Aj.sc, Aj.Sc], a.Cc)
            .D(d, 'mouseover', a.V)
            .D(d, 'mouseout', a.ba),
          a.B != _.v && c.D(d, 'contextmenu', a.B),
          _.B &&
            (_.wc(9) || c.D(d, 'dblclick', a.Mg),
            a.J || ((a.J = new nm(a)), ri(a, _.tb(_.ca, a.J)))))
        : (c
            .sa(d, Aj.rc, a.Pc)
            .sa(d, [Aj.sc, Aj.Sc], a.Cc)
            .sa(d, 'mouseover', a.V)
            .sa(d, 'mouseout', a.ba),
          a.B != _.v && c.sa(d, 'contextmenu', a.B),
          _.B &&
            (_.wc(9) || c.sa(d, 'dblclick', a.Mg), _.ca(a.J), (a.J = null)));
    };
    U.prototype.ca = function () {
      U.G.ca.call(this);
      this.s && Ll(this.s);
      this.isVisible() && this.isEnabled() && this.h.pc(this, !1);
    };
    U.prototype.L = function () {
      U.G.L.call(this);
      this.s && (this.s.R(), delete this.s);
      delete this.h;
      this.J = this.$e = this.ac = null;
    };
    U.prototype.wa = function () {
      return this.ac;
    };
    U.prototype.j = function (a) {
      this.h.Mc(this.A(), a);
      this.ac = a;
    };
    var dm = function (a, b) {
      a.ac = b;
    };
    _.g = U.prototype;
    _.g.xb = function () {
      var a = this.wa();
      if (!a) return '';
      a =
        'string' === typeof a
          ? a
          : Array.isArray(a)
          ? a.map(zj).join('')
          : _.td(a);
      return $i(a);
    };
    _.g.wh = function (a) {
      this.j(a);
    };
    _.g.isVisible = function () {
      return this.za;
    };
    _.g.S = function (a, b) {
      return b || (this.za != a && this.dispatchEvent(a ? 'show' : 'hide'))
        ? ((b = this.A()) && this.h.S(b, a),
          this.isEnabled() && this.h.pc(this, a),
          (this.za = a),
          !0)
        : !1;
    };
    _.g.isEnabled = function () {
      return !(this.ka & 1);
    };
    _.g.qa = function (a) {
      var b = this.T();
      (b && 'function' == typeof b.isEnabled && !b.isEnabled()) ||
        !om(this, 1, !a) ||
        (a || (pm(this, !1), qm(this, !1)),
        this.isVisible() && this.h.pc(this, a),
        rm(this, 1, !a, !0));
    };
    var qm = function (a, b) {
        om(a, 2, b) && rm(a, 2, b);
      },
      pm = function (a, b) {
        om(a, 4, b) && rm(a, 4, b);
      },
      sm = function (a, b) {
        om(a, 64, b) && rm(a, 64, b);
      },
      rm = function (a, b, c, d) {
        d || 1 != b
          ? a.ra & b &&
            c != !!(a.ka & b) &&
            (a.h.Nc(a, b, c), (a.ka = c ? a.ka | b : a.ka & ~b))
          : a.qa(!c);
      };
    U.prototype.Ga = function (a, b) {
      if (this.ia && this.ka & a && !b) throw Error('da');
      !b && this.ka & a && rm(this, a, !1);
      this.ra = b ? this.ra | a : this.ra & ~a;
    };
    var tm = function (a, b) {
        return !!(a.Qe & b) && !!(a.ra & b);
      },
      um = function (a) {
        a.Qe &= -256;
      },
      om = function (a, b, c) {
        return (
          !!(a.ra & b) &&
          !!(a.ka & b) != c &&
          (!(a.qd & b) || a.dispatchEvent(Ol(b, c))) &&
          !a.Db()
        );
      };
    U.prototype.V = function (a) {
      !vm(a, this.A()) &&
        this.dispatchEvent('enter') &&
        this.isEnabled() &&
        tm(this, 2) &&
        qm(this, !0);
    };
    U.prototype.ba = function (a) {
      !vm(a, this.A()) &&
        this.dispatchEvent('leave') &&
        (tm(this, 4) && pm(this, !1), tm(this, 2) && qm(this, !1));
    };
    U.prototype.B = _.v;
    var vm = function (a, b) {
      return !!a.relatedTarget && _.nd(b, a.relatedTarget);
    };
    _.g = U.prototype;
    _.g.Pc = function (a) {
      this.isEnabled() &&
        (tm(this, 2) && qm(this, !0),
        0 != a.g.button ||
          (_.hc && a.ctrlKey) ||
          (tm(this, 4) && pm(this, !0),
          this.h && this.h.xe(this) && this.A().focus()));
      this.Fd || 0 != a.g.button || (_.hc && a.ctrlKey) || a.preventDefault();
    };
    _.g.Cc = function (a) {
      this.isEnabled() &&
        (tm(this, 2) && qm(this, !0),
        this.ka & 4 && this.Ic(a) && tm(this, 4) && pm(this, !1));
    };
    _.g.Mg = function (a) {
      this.isEnabled() && this.Ic(a);
    };
    _.g.Ic = function (a) {
      if (tm(this, 16)) {
        var b = !(this.ka & 16);
        om(this, 16, b) && rm(this, 16, b);
      }
      tm(this, 8) && om(this, 8, !0) && rm(this, 8, !0);
      tm(this, 64) && sm(this, !(this.ka & 64));
      b = new _.wd('action', this);
      a &&
        ((b.altKey = a.altKey),
        (b.ctrlKey = a.ctrlKey),
        (b.metaKey = a.metaKey),
        (b.shiftKey = a.shiftKey),
        (b.j = a.j));
      return this.dispatchEvent(b);
    };
    _.g.Nh = function () {
      tm(this, 32) && om(this, 32, !0) && rm(this, 32, !0);
    };
    _.g.ig = function () {
      tm(this, 4) && pm(this, !1);
      tm(this, 32) && om(this, 32, !1) && rm(this, 32, !1);
    };
    _.g.ab = function (a) {
      return this.isVisible() && this.isEnabled() && this.Oc(a)
        ? (a.preventDefault(), a.stopPropagation(), !0)
        : !1;
    };
    _.g.Oc = function (a) {
      return 13 == a.keyCode && this.Ic(a);
    };
    if ('function' !== typeof U) throw Error('ja`' + U);
    if ('function' !== typeof $l) throw Error('ka`' + $l);
    var wm = _.za(U);
    km[wm] = $l;
    jm('VIpgJd-bMcfAe', function () {
      return new U(null);
    });
    var nm = function (a) {
      _.y.call(this);
      this.h = a;
      this.g = !1;
      this.j = new _.J(this);
      ri(this, _.tb(_.ca, this.j));
      a = this.h.I;
      this.j.D(a, Aj.rc, this.o).D(a, Aj.sc, this.s).D(a, 'click', this.l);
    };
    _.x(nm, _.y);
    var xm = !_.B || 9 <= Number(_.zc);
    nm.prototype.o = function () {
      this.g = !1;
    };
    nm.prototype.s = function () {
      this.g = !0;
    };
    var ym = function (a, b) {
      if (!xm) return (a.button = 0), (a.type = b), a;
      var c = document.createEvent('MouseEvents');
      c.initMouseEvent(
        b,
        a.bubbles,
        a.cancelable,
        a.view || null,
        a.detail,
        a.screenX,
        a.screenY,
        a.clientX,
        a.clientY,
        a.ctrlKey,
        a.altKey,
        a.shiftKey,
        a.metaKey,
        0,
        a.relatedTarget || null,
      );
      return c;
    };
    nm.prototype.l = function (a) {
      if (this.g) this.g = !1;
      else {
        var b = a.g,
          c = b.button,
          d = b.type,
          e = ym(b, 'mousedown');
        this.h.Pc(new _.zd(e, a.currentTarget));
        e = ym(b, 'mouseup');
        this.h.Cc(new _.zd(e, a.currentTarget));
        xm || ((b.button = c), (b.type = d));
      }
    };
    nm.prototype.L = function () {
      this.h = null;
      nm.G.L.call(this);
    };
    var zm = function () {};
    _.x(zm, hm);
    Ai(zm);
    _.g = zm.prototype;
    _.g.oc = function () {};
    _.g.N = function (a) {
      mm(a, !1);
      um(a);
      a.Ga(32, !1);
      return a.g.N(
        'BUTTON',
        {
          class: cm(this, a).join(' '),
          disabled: !a.isEnabled(),
          title: a.ma() || '',
          value: a.Qa() || '',
        },
        a.xb() || '',
      );
    };
    _.g.sd = function (a) {
      return (
        'BUTTON' == a.tagName ||
        ('INPUT' == a.tagName &&
          ('button' == a.type || 'submit' == a.type || 'reset' == a.type))
      );
    };
    _.g.cb = function (a, b) {
      mm(a, !1);
      um(a);
      a.Ga(32, !1);
      if (b.disabled) {
        var c = this.g(1);
        _.Q(b, c);
      }
      return zm.G.cb.call(this, a, b);
    };
    _.g.hg = function (a) {
      S(a).D(a.A(), 'click', a.Ic);
    };
    _.g.td = _.v;
    _.g.ye = _.v;
    _.g.xe = function (a) {
      return a.isEnabled();
    };
    _.g.pc = _.v;
    _.g.Nc = function (a, b, c) {
      zm.G.Nc.call(this, a, b, c);
      (a = a.A()) && 1 == b && (a.disabled = c);
    };
    _.g.Qa = function (a) {
      return a.value;
    };
    _.g.Ma = function (a, b) {
      a && (a.value = b);
    };
    _.g.sb = _.v;
    var Am = function (a, b, c) {
      U.call(this, a, b || zm.ea(), c);
    };
    _.x(Am, U);
    _.g = Am.prototype;
    _.g.Qa = function () {
      return this.l;
    };
    _.g.Ma = function (a) {
      this.l = a;
      this.h.Ma(this.A(), a);
    };
    _.g.ma = function () {
      return this.X;
    };
    _.g.ne = function (a) {
      this.X = a;
      this.h.ne(this.A(), a);
    };
    _.g.L = function () {
      Am.G.L.call(this);
      delete this.l;
      delete this.X;
    };
    _.g.Y = function () {
      Am.G.Y.call(this);
      if (this.ra & 32) {
        var a = this.A();
        a && S(this).D(a, 'keyup', this.Oc);
      }
    };
    _.g.Oc = function (a) {
      return (13 == a.keyCode && 'key' == a.type) ||
        (32 == a.keyCode && 'keyup' == a.type)
        ? this.Ic(a)
        : 32 == a.keyCode;
    };
    jm('VIpgJd-LgbsSe', function () {
      return new Am(null);
    });
    var Bm = function () {};
    _.x(Bm, hm);
    Ai(Bm);
    Bm.prototype.N = function (a) {
      var b = cm(this, a);
      b = a.g.N(
        'DIV',
        'VIpgJd-TzA9Ye-eEGnhe ' + b.join(' '),
        Cm(this, a.wa(), a.g),
      );
      this.ne(b, a.ma());
      return b;
    };
    Bm.prototype.oc = function () {
      return 'button';
    };
    Bm.prototype.Pb = function (a) {
      return a && a.firstChild && a.firstChild.firstChild;
    };
    var Cm = function (a, b, c) {
      return c.N(
        'DIV',
        'VIpgJd-TzA9Ye-eEGnhe ' + (a.ua() + '-n0tgWb-Q4BLdf'),
        c.N('DIV', 'VIpgJd-TzA9Ye-eEGnhe ' + (a.ua() + '-SmKAyb-Q4BLdf'), b),
      );
    };
    Bm.prototype.sd = function (a) {
      return 'DIV' == a.tagName;
    };
    Bm.prototype.cb = function (a, b) {
      Dm(b, !0);
      Dm(b, !1);
      a: {
        var c = a.g.Ig(b);
        var d = this.ua() + '-n0tgWb-Q4BLdf';
        if (
          c &&
          kl(c, d) &&
          ((c = a.g.Ig(c)), (d = this.ua() + '-SmKAyb-Q4BLdf'), c && kl(c, d))
        ) {
          c = !0;
          break a;
        }
        c = !1;
      }
      c || b.appendChild(Cm(this, b.childNodes, a.g));
      ll(b, ['VIpgJd-TzA9Ye-eEGnhe', this.ua()]);
      return Bm.G.cb.call(this, a, b);
    };
    Bm.prototype.ua = function () {
      return 'goog-custom-button';
    };
    var Dm = function (a, b) {
      if (a)
        for (
          var c = b ? a.firstChild : a.lastChild, d;
          c && c.parentNode == a;

        ) {
          d = b ? c.nextSibling : c.previousSibling;
          if (3 == c.nodeType) {
            var e = c.nodeValue;
            if ('' == (0, _.Xb)(e)) a.removeChild(c);
            else {
              c.nodeValue = b ? aj(e) : bj(e);
              break;
            }
          } else break;
          c = d;
        }
    };
    var Em = function (a, b, c) {
      Am.call(this, a, b || Bm.ea(), c);
      this.Ga(16, !0);
    };
    _.x(Em, Am);
    jm('VIpgJd-ornU0b-LgbsSe', function () {
      return new Em(null);
    });
    var Fm = function () {};
    Fm.ea = function () {
      return Al(Fm);
    };
    var Gm = function () {
        this.h = [];
        this.g = {};
        this.l = !1;
        this.M = 1;
        this.s = {};
        this.j = null;
        this.o = '';
        _.H(window, 'beforeunload', this.K, !1, this);
      },
      Hm = function (a, b, c) {
        if (null == b) return '1';
        switch (_.ob(b)) {
          case 'string':
            return (
              (a = b),
              64 < a.length && (null == c || !c) && (a = a.substr(0, 64)),
              _.Xc(a)
            );
          case 'number':
            return '' + b;
          case 'boolean':
            return b ? '1' : '0';
          case 'array':
            var d = [],
              e;
            for (e in b) d.push(Hm(a, b[e], c));
            return d.join(',');
          case 'object':
            d = [];
            for (e in b) d.push(Im(a, e, b[e], c));
            return d.join(',');
          default:
            return '';
        }
      },
      Im = function (a, b, c, d) {
        return [_.Xc(b), Hm(a, c, d || 'smtalt' == b)].join('=');
      };
    Gm.prototype.log = function (a, b) {
      this.h.push([a, b]);
      this.l || ((this.l = !0), _.kg(this.C, 0, this));
    };
    Gm.prototype.C = function () {
      for (var a = 0; a < this.h.length; a++) {
        var b = this.h[a];
        Jm(this, b[0], b[1]);
      }
      this.h = [];
      this.l = !1;
    };
    var Jm = function (a, b, c) {
        Km(
          a,
          a.o +
            '/gen204?' +
            (a.j ? ['client=', a.j, '&'].join('') : '') +
            Im(a, b, c),
        );
      },
      Km = function (a, b) {
        var c = new Image(),
          d = a.M++;
        a.s[d] = c;
        c.onload = c.onerror = function () {
          delete Gm.ea().s[d];
        };
        c.src = b;
        c = null;
      },
      Mm = function (a, b) {
        var c = 0,
          d = null;
        b in a.g && ((d = a.g[b]), (c = d[0]), (d = d[1]));
        if ('object' == _.ob(1)) {
          'object' != _.ob(d) && (d = {});
          for (var e in 1) d[e] = Lm(e in d ? d[e] : null, (1)[e]);
        } else d = Lm(d, 1);
        a.g[b] = [c, d];
        _.lg(a.g[b][0]);
        c = _.kg((0, _.w)(a.B, a, b), 2e3);
        a.g[b][0] = c;
      };
    Gm.prototype.B = function (a) {
      Jm(this, a, this.g[a][1]);
      a in this.g && (_.lg(this.g[a][0]), delete this.g[a]);
    };
    var Lm = function (a, b) {
      null == b && (b = 1);
      isNaN(a) && (a = parseInt(a, 10));
      isNaN(b) && (b = parseInt(b, 10));
      return a + b;
    };
    Gm.prototype.K = function () {
      this.C();
      for (var a in this.g) 0 != this.g[a] && this.B(a);
    };
    Gm.ea = function () {
      return Al(Gm);
    };
    var Nm = function (a) {
      jk.call(this, a);
    };
    _.u(Nm, jk);
    var Pm = function (a) {
      jk.call(this, a, -1, Om);
    };
    _.u(Pm, jk);
    var Om = [5, 3, 4];
    var Rm = function (a) {
      jk.call(this, a, -1, Qm);
    };
    _.u(Rm, jk);
    Rm.prototype.ef = function () {
      return ki(this, 1);
    };
    var Qm = [3];
    var Tm = function (a) {
      jk.call(this, a, -1, Sm);
    };
    _.u(Tm, jk);
    var Sm = [2];
    var Vm = function (a) {
      jk.call(this, a, -1, Um);
    };
    _.u(Vm, jk);
    _.g = Vm.prototype;
    _.g.Va = function () {
      return ki(this, 16);
    };
    _.g.Lb = function (a) {
      kk(this, 16, a);
    };
    _.g.ga = function () {
      return ki(this, 1);
    };
    _.g.oa = function (a) {
      kk(this, 1, a);
    };
    _.g.ef = function () {
      return ki(this, 53);
    };
    var Um = [26, 80];
    var Wm = function () {
      this.P = this.h = '';
      Fm.ea();
    };
    Wm.prototype.Lb = function (a) {
      this.h = a;
    };
    Wm.prototype.oa = function (a) {
      this.P = a;
    };
    Wm.prototype.store = function (a) {
      kk(a, 65, 0);
      a.Lb(this.h);
      kk(a, 14, '');
      a.oa(this.P);
      kk(a, 50, '');
      kk(a, 52, '');
      kk(a, 32, 0);
    };
    Wm.ea = function () {
      return Al(Wm);
    };
    var Ym = function (a, b) {
        return a === b
          ? !0
          : _.Vb(a, function (c, d) {
              if (di(c)) {
                d = c;
                for (var e in d) if (((c = d[e]), !Xm(c, ei(b, +e)))) return !1;
                return !0;
              }
              return Xm(c, ei(b, d + 1));
            }) &&
              _.Vb(b, function (c, d) {
                if (di(c)) {
                  for (var e in c) if (null == ei(a, +e)) return !1;
                  return !0;
                }
                return (null == c) == (null == ei(a, d + 1));
              });
      },
      Xm = function (a, b) {
        return a === b ||
          (null == a && null == b) ||
          !((!0 !== a && 1 !== a) || (!0 !== b && 1 !== b)) ||
          !((!1 !== a && 0 !== a) || (!1 !== b && 0 !== b))
          ? !0
          : Array.isArray(a) && Array.isArray(b)
          ? Ym(a, b)
          : !1;
      };
    var Zm = function () {};
    Zm.prototype.initialize = function (a, b, c, d) {
      this.g = a = a || [];
      if (a.length) {
        c = a.length - 1;
        var e = di(a[c]);
        c = e ? a[c] : {};
        e && a.length--;
        e = 0;
        for (var f in c) {
          var h = +f;
          h <= b ? ((a[h - 1] = c[f]), delete c[f]) : e++;
        }
        for (h = f = 0; d && h < d.length; ) {
          f += d[h++];
          var k = d[h++];
          e += fi(f, k, a, c);
          f += k;
        }
        a.length > b && ((e += fi(b, a.length - b, a, c)), (a.length = b));
        e && (a[b] = c);
      }
    };
    var $m = function (a, b, c) {
        a = a.g[b];
        return null != a ? a : c;
      },
      an = function (a, b) {
        return !!$m(a, b, void 0);
      },
      bn = function (a, b) {
        return +$m(a, b, 0);
      },
      cn = function (a, b) {
        return $m(a, b, '');
      },
      dn = function (a, b, c) {
        a = a.g;
        a[b] || (a[b] = []);
        return a[b][c];
      },
      V = function (a, b) {
        return (a = a.g[b]) ? a.length : 0;
      };
    new Uint8Array(0);
    var en = function () {
      _.y.call(this);
      this.g = Wm.ea();
    };
    _.u(en, _.y);
    en.prototype.h = function () {
      fn(this, 25);
    };
    var fn = function (a, b) {
      var c = new Vm();
      a.g.store(c);
      kk(c, 31, b);
      return c;
    };
    en.ea = function () {
      return Al(en);
    };
    _.hn = function (a, b, c, d, e) {
      this.C = !!b;
      this.node = null;
      this.g = 0;
      this.se = !1;
      this.B = !c;
      a && gn(this, a, d);
      this.depth = void 0 != e ? e : this.g || 0;
      this.C && (this.depth *= -1);
    };
    _.x(_.hn, _.gf);
    var gn = function (a, b, c, d) {
      if ((a.node = b))
        a.g =
          'number' === typeof c ? c : 1 != a.node.nodeType ? 0 : a.C ? -1 : 1;
      'number' === typeof d && (a.depth = d);
    };
    _.hn.prototype.Mb = function () {
      var a = this.C ? -1 : 1;
      this.g == a &&
        ((this.g = -1 * a), (this.depth += this.g * (this.C ? -1 : 1)));
    };
    _.hn.prototype.next = function () {
      if (this.se) {
        if (!this.node || (this.B && 0 == this.depth)) return _.jf;
        var a = this.node;
        var b = this.C ? -1 : 1;
        if (this.g == b) {
          var c = this.C ? a.lastChild : a.firstChild;
          c ? gn(this, c) : gn(this, a, -1 * b);
        } else
          (c = this.C ? a.previousSibling : a.nextSibling)
            ? gn(this, c)
            : gn(this, a.parentNode, -1 * b);
        this.depth += this.g * (this.C ? -1 : 1);
      } else this.se = !0;
      return (a = this.node) ? _.kf(a) : _.jf;
    };
    _.hn.prototype.Ka = function () {
      return _.lf(_.hn.prototype.next.call(this));
    };
    var jn = function () {},
      kn = function (a) {
        for (var b = [], c = 0, d = a.hd(); c < d; c++) b.push(a.Ac(c));
        return b;
      },
      ln = function (a) {
        return a.sf() ? a.eb() : a.ub();
      };
    jn.prototype.sf = function () {
      return !1;
    };
    var mn = function (a, b) {
      _.hn.call(this, a, b, !0);
    };
    _.x(mn, _.hn);
    var nn = function (a, b, c, d, e) {
      this.j = this.h = null;
      this.o = this.s = 0;
      this.l = !!e;
      if (a) {
        this.h = a;
        this.s = b;
        this.j = c;
        this.o = d;
        if (1 == a.nodeType && 'BR' != a.tagName)
          if (((a = a.childNodes), (b = a[b]))) (this.h = b), (this.s = 0);
          else {
            a.length && (this.h = _.ra(a));
            var f = !0;
          }
        1 == c.nodeType &&
          ((this.j = c.childNodes[d]) ? (this.o = 0) : (this.j = c));
      }
      _.hn.call(this, this.l ? this.j : this.h, this.l, !0);
      if (f)
        try {
          this.Ka();
        } catch (h) {
          if (h != _.ff) throw h;
        }
    };
    _.x(nn, mn);
    _.g = nn.prototype;
    _.g.Wg = !1;
    _.g.xd = function () {
      return this.h;
    };
    _.g.kd = function () {
      return (
        this.se &&
        (this.node != (this.l ? this.h : this.j)
          ? !1
          : this.l
          ? this.s
            ? -1 != this.g
            : 1 == this.g
          : !this.o || 1 != this.g)
      );
    };
    _.g.next = function () {
      if (this.kd() || this.Wg) return _.jf;
      try {
        return _.kf(nn.G.Ka.call(this));
      } catch (a) {
        if (a === _.ff) return _.jf;
        throw a;
      }
    };
    _.g.Ka = function () {
      return _.lf(nn.prototype.next.call(this));
    };
    _.g.Mb = function () {
      nn.G.Mb.apply(this);
      _.nd(this.node, this.l ? this.h : this.j) && (this.Wg = !0);
    };
    var on = function () {};
    on.prototype.Ha = function () {
      return new nn(
        this.g.startContainer,
        this.g.startOffset,
        this.g.endContainer,
        this.g.endOffset,
      );
    };
    var pn = function (a) {
      this.g = a;
    };
    _.x(pn, on);
    var qn = function (a) {
        var b = _.E(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
        else if (lj(a) || 3 == a.nodeType) {
          for (var c, d = a; (c = d.firstChild) && (lj(c) || 3 == c.nodeType); )
            d = c;
          b.setStart(d, 0);
          for (d = a; (c = d.lastChild) && (lj(c) || 3 == c.nodeType); ) d = c;
          b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length);
        } else
          (c = a.parentNode),
            (a = Array.prototype.indexOf.call(c.childNodes, a)),
            b.setStart(c, a),
            b.setEnd(c, a + 1);
        return b;
      },
      rn = function (a, b, c, d) {
        var e = _.E(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e;
      };
    pn.prototype.select = function (a) {
      this.h(_.fd(_.E(this.g.startContainer)).getSelection(), a);
    };
    pn.prototype.h = function (a) {
      a.removeAllRanges();
      a.addRange(this.g);
    };
    var sn = function (a) {
      this.g = a;
    };
    _.x(sn, pn);
    sn.prototype.h = function (a, b) {
      !b || this.g.collapsed
        ? sn.G.h.call(this, a, b)
        : (a.collapse(this.g.endContainer, this.g.endOffset),
          a.extend(this.g.startContainer, this.g.startOffset));
    };
    var tn = function (a) {
      this.g = a;
    };
    _.x(tn, pn);
    tn.prototype.h = function (a, b) {
      b
        ? a.setBaseAndExtent(
            this.g.endContainer,
            this.g.endOffset,
            this.g.startContainer,
            this.g.startOffset,
          )
        : a.setBaseAndExtent(
            this.g.startContainer,
            this.g.startOffset,
            this.g.endContainer,
            this.g.endOffset,
          );
    };
    var un = function (a) {
        return _.D ? new tn(a) : _.C ? new sn(a) : new pn(a);
      },
      vn = function (a) {
        return _.D ? new tn(qn(a)) : _.C ? new sn(qn(a)) : new pn(qn(a));
      };
    var wn = function () {
      this.o = this.j = this.s = this.h = this.g = null;
      this.l = !1;
    };
    _.x(wn, jn);
    var xn = function (a, b) {
      var c = new wn();
      c.g = a;
      c.l = !!b;
      return c;
    };
    wn.prototype.bf = function () {
      return yn(this).g;
    };
    wn.prototype.hd = function () {
      return 1;
    };
    wn.prototype.Ac = function () {
      return this;
    };
    var yn = function (a) {
      var b;
      if (!(b = a.g)) {
        b = a.eb();
        var c = a.fb(),
          d = a.ub(),
          e = a.vb();
        b = _.D
          ? new tn(rn(b, c, d, e))
          : _.C
          ? new sn(rn(b, c, d, e))
          : new pn(rn(b, c, d, e));
        b = a.g = b;
      }
      return b;
    };
    _.g = wn.prototype;
    _.g.ud = function () {
      return yn(this).g.commonAncestorContainer;
    };
    _.g.eb = function () {
      return this.h || (this.h = yn(this).g.startContainer);
    };
    _.g.fb = function () {
      return null != this.s ? this.s : (this.s = yn(this).g.startOffset);
    };
    _.g.ub = function () {
      return this.j || (this.j = yn(this).g.endContainer);
    };
    _.g.vb = function () {
      return null != this.o ? this.o : (this.o = yn(this).g.endOffset);
    };
    _.g.sf = function () {
      return this.l;
    };
    _.g.wd = function () {
      return yn(this).g.collapsed;
    };
    _.g.vd = function () {
      return yn(this).g.toString();
    };
    _.g.Ha = function () {
      return new nn(this.eb(), this.fb(), this.ub(), this.vb());
    };
    _.g.select = function () {
      yn(this).select(this.l);
    };
    var zn = function () {};
    _.x(zn, jn);
    var An = function () {
      this.j = this.h = this.g = null;
    };
    _.x(An, zn);
    _.g = An.prototype;
    _.g.bf = function () {
      return this.g || document.body.createControlRange();
    };
    _.g.hd = function () {
      return this.g ? this.g.length : 0;
    };
    _.g.Ac = function (a) {
      a = this.g.item(a);
      return xn(vn(a), void 0);
    };
    _.g.ud = function () {
      return uj.apply(null, this.df());
    };
    _.g.eb = function () {
      return Bn(this)[0];
    };
    _.g.fb = function () {
      return 0;
    };
    _.g.ub = function () {
      var a = Bn(this),
        b = _.ra(a);
      return a.find(function (c) {
        return _.nd(c, b);
      });
    };
    _.g.vb = function () {
      return this.ub().childNodes.length;
    };
    _.g.df = function () {
      if (!this.h && ((this.h = []), this.g))
        for (var a = 0; a < this.g.length; a++) this.h.push(this.g.item(a));
      return this.h;
    };
    var Bn = function (a) {
      a.j ||
        ((a.j = a.df().concat()),
        a.j.sort(function (b, c) {
          return b.sourceIndex - c.sourceIndex;
        }));
      return a.j;
    };
    An.prototype.wd = function () {
      return !this.g || !this.g.length;
    };
    An.prototype.vd = function () {
      return '';
    };
    An.prototype.Ha = function () {
      return new Cn(this);
    };
    An.prototype.select = function () {
      this.g && this.g.select();
    };
    var Cn = function (a) {
      this.l = this.j = this.h = null;
      a &&
        ((this.l = Bn(a)),
        (this.h = this.l.shift()),
        (this.j = _.ra(this.l) || this.h));
      _.hn.call(this, this.h, !1, !0);
    };
    _.x(Cn, mn);
    Cn.prototype.xd = function () {
      return this.h;
    };
    Cn.prototype.kd = function () {
      return !this.depth && !this.l.length;
    };
    Cn.prototype.next = function () {
      if (this.kd()) return _.jf;
      if (!this.depth) {
        var a = this.l.shift();
        gn(this, a, 1, 1);
        return _.kf(a);
      }
      return Cn.G.next.call(this);
    };
    Cn.prototype.Ka = function () {
      return _.lf(Cn.prototype.next.call(this));
    };
    var Dn = function () {
      this.g = [];
      this.l = [];
      this.j = this.h = null;
    };
    _.x(Dn, zn);
    Dn.prototype.bf = function () {
      return this.g[0];
    };
    Dn.prototype.hd = function () {
      return this.g.length;
    };
    Dn.prototype.Ac = function (a) {
      this.l[a] || (this.l[a] = xn(un(this.g[a]), void 0));
      return this.l[a];
    };
    Dn.prototype.ud = function () {
      if (!this.j) {
        for (var a = [], b = 0, c = this.hd(); b < c; b++)
          a.push(this.Ac(b).ud());
        this.j = uj.apply(null, a);
      }
      return this.j;
    };
    var Fn = function (a) {
      a.h ||
        ((a.h = kn(a)),
        a.h.sort(function (b, c) {
          var d = b.eb();
          b = b.fb();
          var e = c.eb();
          c = c.fb();
          return d == e && b == c ? 0 : En(d, b, e, c) ? 1 : -1;
        }));
      return a.h;
    };
    _.g = Dn.prototype;
    _.g.eb = function () {
      return Fn(this)[0].eb();
    };
    _.g.fb = function () {
      return Fn(this)[0].fb();
    };
    _.g.ub = function () {
      return _.ra(Fn(this)).ub();
    };
    _.g.vb = function () {
      return _.ra(Fn(this)).vb();
    };
    _.g.wd = function () {
      return 0 == this.g.length || (1 == this.g.length && this.Ac(0).wd());
    };
    _.g.vd = function () {
      return kn(this)
        .map(function (a) {
          return a.vd();
        })
        .join('');
    };
    _.g.Ha = function () {
      return new Gn(this);
    };
    _.g.select = function () {
      var a = _.fd(_.E(_.B ? this.ud() : this.eb())).getSelection();
      a.removeAllRanges();
      for (var b = 0, c = this.hd(); b < c; b++) a.addRange(this.Ac(b).bf());
    };
    var Gn = function (a) {
      this.h = null;
      this.j = 0;
      a &&
        (this.h = Fn(a).map(function (b) {
          return Ej(b);
        }));
      _.hn.call(this, a ? this.xd() : null, !1, !0);
    };
    _.x(Gn, mn);
    Gn.prototype.xd = function () {
      return this.h[0].xd();
    };
    Gn.prototype.kd = function () {
      return this.h[this.j].kd();
    };
    Gn.prototype.next = function () {
      try {
        var a = this.h[this.j],
          b = a.Ka();
        gn(this, a.node, a.g, a.depth);
        return _.kf(b);
      } catch (c) {
        if (c !== _.ff || this.h.length - 1 == this.j) throw c;
        this.j++;
        return this.next();
      }
    };
    Gn.prototype.Ka = function () {
      return _.lf(Gn.prototype.next.call(this));
    };
    var In = function () {
        var a = window.getSelection();
        return a && Hn(a);
      },
      Hn = function (a) {
        var b = !1;
        if (a.createRange)
          try {
            var c = a.createRange();
          } catch (e) {
            return null;
          }
        else if (a.rangeCount) {
          if (1 < a.rangeCount) {
            b = new Dn();
            c = 0;
            for (var d = a.rangeCount; c < d; c++) b.g.push(a.getRangeAt(c));
            return b;
          }
          c = a.getRangeAt(0);
          b = En(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset);
        } else return null;
        (a = c) && a.addElement
          ? ((b = new An()), (b.g = a), (a = b))
          : (a = xn(un(a), b));
        return a;
      },
      En = function (a, b, c, d) {
        if (a == c) return d < b;
        var e;
        if (1 == a.nodeType && b)
          if ((e = a.childNodes[b])) (a = e), (b = 0);
          else if (_.nd(a, c)) return !0;
        if (1 == c.nodeType && d)
          if ((e = c.childNodes[d])) (c = e), (d = 0);
          else if (_.nd(c, a)) return !1;
        return 0 < (tj(a, c) || b - d);
      };
    var Jn = function () {
      var a = In();
      return null != a && !a.wd() && 0 < a.vd().length;
    };
    var Kn = function (a) {
        return function () {
          return a;
        };
      },
      Ln = function (a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
          var d = b.charAt(c + 2);
          d = 'a' <= d ? d.charCodeAt(0) - 87 : Number(d);
          d = '+' == b.charAt(c + 1) ? a >>> d : a << d;
          a = '+' == b.charAt(c) ? (a + d) & 4294967295 : a ^ d;
        }
        return a;
      },
      Mn = function (a, b) {
        var c = b.split('.');
        b = Number(c[0]) || 0;
        for (var d = [], e = 0, f = 0; f < a.length; f++) {
          var h = a.charCodeAt(f);
          128 > h
            ? (d[e++] = h)
            : (2048 > h
                ? (d[e++] = (h >> 6) | 192)
                : (55296 == (h & 64512) &&
                  f + 1 < a.length &&
                  56320 == (a.charCodeAt(f + 1) & 64512)
                    ? ((h =
                        65536 +
                        ((h & 1023) << 10) +
                        (a.charCodeAt(++f) & 1023)),
                      (d[e++] = (h >> 18) | 240),
                      (d[e++] = ((h >> 12) & 63) | 128))
                    : (d[e++] = (h >> 12) | 224),
                  (d[e++] = ((h >> 6) & 63) | 128)),
              (d[e++] = (h & 63) | 128));
        }
        a = b;
        for (e = 0; e < d.length; e++) (a += d[e]), (a = Ln(a, '+-a^+6'));
        a = Ln(a, '+-3^+b+-f');
        a ^= Number(c[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        c = a % 1e6;
        return c.toString() + '.' + (c ^ b);
      },
      Nn = null,
      On = function () {
        var a = Kn(String.fromCharCode(116)),
          b = Kn(String.fromCharCode(107));
        a = [a(), a()];
        a[1] = b();
        return a.join('');
      };
    var Pn = function (a) {
      this.initialize(a, 6);
    };
    _.x(Pn, Zm);
    var Qn = function (a) {
      this.initialize(a, 2);
    };
    _.x(Qn, Zm);
    var Rn = function (a) {
      this.initialize(a, 8);
    };
    _.x(Rn, Zm);
    var Sn = function (a, b) {
      return new Pn(dn(a, 2, b));
    };
    var Tn = function (a) {
      this.initialize(a, 9);
    };
    _.x(Tn, Zm);
    var Un = function (a) {
      this.initialize(a, 21);
    };
    _.x(Un, Zm);
    var Vn = function (a, b) {
      return new Rn(dn(a, 5, b));
    };
    var Wn = function () {
        this.g = 0;
        this.h = en.ea();
      },
      Xn = function (a) {
        a = a.jb('q').join('');
        if (null !== Nn) var b = Nn;
        else {
          var c = Kn(String.fromCharCode(84));
          b = Kn(String.fromCharCode(75));
          c = [c(), c()];
          c[1] = b();
          b = (Nn = window[c.join(b())] || '') || '';
        }
        return '&' + On() + '=' + Mn(a, b);
      },
      Yn = function (a, b, c, d, e) {
        c = c.toString();
        c += Xn(d);
        d = d.toString();
        var f = 'POST';
        b += '?' + c;
        2e3 > b.length + d.length && ((f = 'GET'), (b += '&' + d), (d = ''));
        ++a.g;
        fk(
          b,
          function (h) {
            --a.g;
            e(h);
          },
          f,
          d,
          void 0,
        );
      };
    Wn.prototype.j = function (a, b, c) {
      c = c.target;
      !_.xg(c) || ('[' != _.yg(c)[0] && '{' != _.yg(c)[0])
        ? (Zn(this, c), b && b(_.wg(c)))
        : ((b = $n(c, 'handleSingleResult_')),
          Array.isArray(b) && (b = new Un(b)),
          a(b));
    };
    Wn.prototype.l = function (a, b, c) {
      c = c.target;
      if (_.xg(c)) {
        c = $n(c, 'handleTextResult_');
        var d = [];
        if (a) d.push(Array.isArray(c) ? c[0] : c);
        else if (Array.isArray(c))
          for (a = 0; a < c.length; ++a)
            d.push(Array.isArray(c[a]) ? c[a][0] : c[a]);
        b(d);
      } else Zn(this, c), b(null, c.j);
    };
    var $n = function (a, b) {
        var c = _.yg(a);
        a = { class: 'trans.common.TranslationAPI', func: b, url: String(a.o) };
        try {
          var d = JSON.parse(c);
        } catch (e) {
          throw (
            ((d = Gm.ea()),
            (a.js = c),
            (a.error = e.message),
            d.log('jsonParseErr', a),
            e)
          );
        }
        return d;
      },
      Zn = function (a, b) {
        var c = b.j;
        c = c in ao ? ao[c] : 0;
        a = fn(a.h, 148);
        var d = new Nm();
        d = kk(d, 1, 156);
        c && kk(d, 5, c);
        mk(a, 63, d);
        c = Gm.ea();
        a = String(b.o);
        b = _.yg(b);
        c.log('invalidResponse', {
          q: a.substring(0, 500),
          ql: a.length,
          r: b.substring(0, 500),
          rl: b.length,
        });
      },
      bo = {},
      ao =
        ((bo[1] = 15),
        (bo[2] = 16),
        (bo[3] = 17),
        (bo[4] = 18),
        (bo[5] = 19),
        (bo[6] = 20),
        (bo[7] = 21),
        (bo[8] = 22),
        (bo[9] = 23),
        bo);
    var co = function (a) {
      switch (a) {
        case 0:
          return 1;
        case 1:
          return 2;
        case 2:
          return 3;
        case 10:
          return 4;
        case 3:
          return 5;
        case 4:
          return 6;
        case 11:
          return 7;
        case 5:
          return 8;
        case 6:
          return 9;
        case 7:
          return 10;
        case 8:
          return 11;
        default:
          return 0;
      }
    };
    var eo = window.google && google.translate && google.translate._const,
      fo,
      oi,
      ko,
      lo,
      po,
      to;
    eo ||
      (eo = {
        _cac: '',
        _cam: '',
        _cest: new Date(),
        _cjlc: '',
        _cl: '',
        _cuc: '',
        _cnad: !1,
        _cnal: {},
        ml: '',
        _pah: '',
        _pas: '',
        _pbi: '',
        _pci: '',
        _phf: '',
        _pli: '',
        _plla: '',
        _pmi: '',
        _ps: '',
        _pta: '',
        _puh: '',
      });
    fo =
      (window.google && window.google.translate && window.google.translate.v) ||
      '';
    _.W = eo._cl || 'en';
    oi = eo._cuc;
    _.go = eo._cnad;
    _.ho = eo._cest;
    _.io = eo._cnal || {};
    _.pi = 'lib' == eo._cam ? 1 : 0;
    _.jo = (eo._cac || 'te') + (1 == _.pi ? '_lib' : '');
    ko = (function () {
      function a(d) {
        return function () {
          return d;
        };
      }
      var b = String.fromCharCode(107),
        c = a(String.fromCharCode(116));
      b = a(b);
      c = [c(), c()];
      c[1] = b();
      return eo['_c' + c.join(b())] || '';
    })();
    lo = eo._pah || '';
    _.mo = eo._pas || 'https://';
    _.no = eo._pbi || '';
    _.oo = eo._pci || '';
    po = eo._plla || '';
    _.qo = eo._pli || '';
    _.ro = eo._pmi || '';
    _.so = eo._ps || '';
    to = eo._puh || '';
    _.uo = '//' + to + '/translate_suggestion?client=' + _.jo;
    _.vo =
      'https://www.google.com/support/translate' +
      ('en' == _.W ? '' : '#googtrans/en/' + _.W);
    var yo, Fo, Go, Ho, Io;
    _.wo = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
      return b;
    };
    _.xo = function (a) {
      this.h = a ? [a] : [];
      this.g = [0];
      this.j = !1;
    };
    _.xo.prototype.register = function (a) {
      if (this.j) return a || _.v;
      this.g.push(0);
      var b = this.g.length - 1;
      return (0, _.w)(function () {
        this.g[b]++;
        a && a.apply(null, arguments);
        yo(this);
      }, this);
    };
    _.xo.prototype.delay = function (a) {
      return this.j
        ? a
        : (0, _.w)(function () {
            if (this.j) a.apply(null, arguments);
            else {
              var b = arguments;
              this.h.push(function () {
                a.apply(null, b);
              });
            }
          }, this);
    };
    _.xo.prototype.finish = function () {
      this.g[0] = 1;
      yo(this);
    };
    yo = function (a) {
      for (var b = 0; b < a.g.length; ++b) if (0 == a.g[b]) return;
      a.j = !0;
      for (b = 0; b < a.h.length; ++b) {
        var c = a.h[b];
        a.h[b] = null;
        c.call();
      }
      a.h = [];
      a.g = [];
    };
    _.zo = function (a) {
      this.j = a;
      this.h = this.g = !1;
    };
    _.Ao = function (a, b) {
      return (0, _.w)(function () {
        b && b.apply(null, arguments);
        this.h ? this.g || (this.j.call(), (this.g = !0)) : (this.g = !0);
      }, a);
    };
    _.zo.prototype.finish = function () {
      this.h || ((this.h = !0), this.g && this.j.call());
    };
    var Bo = function (a, b, c) {
        this.g = b;
        this.C = a;
        this.s = c || 0;
        this.j = this.h = !1;
      },
      Co = function (a) {
        a.h || a.o();
      };
    Bo.prototype.o = function () {
      (this.h = (this.j = !!this.C.call()) || 0 >= --this.s)
        ? (this.g.call(null, this.j), (this.l = 0))
        : (this.l = window.setTimeout((0, _.w)(this.o, this), 30));
    };
    Bo.prototype.cancel = function () {
      this.l && window.clearTimeout(this.l);
      this.h = !0;
      this.g.call(null, this.j);
    };
    _.Do = function (a, b) {
      return function () {
        a.dispatchEvent(b);
      };
    };
    _.Eo = function (a) {
      a = (0, _.Xb)(a).toLowerCase().replace('_', '-');
      if ('zh-cn' == a) return 'zh-CN';
      if ('zh-tw' == a) return 'zh-TW';
      var b = a.indexOf('-');
      a = 0 <= b ? a.substring(0, b) : a;
      return 'zh' == a ? 'zh-CN' : a;
    };
    Fo = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a[c] !== Object.prototype[c]) {
          var d = _.Xc(c);
          if ('array' == _.ob(a[c]))
            for (var e = 0; e < a[c].length; ++e)
              b.push(d + '=' + _.Xc(a[c][e]));
          else b.push(d + '=' + _.Xc(a[c]));
        }
      return b.join('&');
    };
    _.hi = function (a, b) {
      b = b || {};
      b.nca = a;
      b.client = _.jo;
      fo && (b.logld = 'v' + fo);
      var c = new Image();
      c.src = '//' + to + '/gen204?' + Fo(b);
      c.onload = function () {
        c.onload = null;
      };
    };
    Go = function () {
      var a = {};
      try {
        for (var b in Object.prototype) {
          var c = Object.prototype[b];
          delete Object.prototype[b];
          a[b] = c;
        }
      } catch (d) {
        return {};
      }
      return a;
    };
    Ho = function (a) {
      for (var b in a) Object.prototype[b] = a[b];
    };
    Io = function (a) {
      for (var b in a) if (a[b] !== Object.prototype[b]) return !1;
      return !0;
    };
    var Jo;
    _.gi = null;
    Jo = function () {};
    Jo.prototype.attach = function (a, b, c) {
      for (var d in c)
        c[d] !== Object.prototype[d] &&
          (b[d] =
            'function' === typeof c[d] ? c[d] : _.tb(ii, a, Number(c[d])));
    };
    _.Ko = new Jo();
    var ji = function (a) {
      jk.call(this, a);
    };
    _.u(ji, jk);
    /*
    
     SPDX-License-Identifier: Apache-2.0
    */
    var Lo = function (a) {
        this.url = a;
        this.timeout = -1;
        this.j = this.h = 'callback';
        this.g = this.fc = null;
      },
      Po = function (a, b) {
        b = void 0 === b ? {} : b;
        a.g = Dj();
        var c = new Xj(a.url),
          d = new Map();
        a.j && d.set(a.j, a.h);
        c.g.o(bk(b), d);
        Mo(a)
          .then(function () {
            No(a, c.toString());
          })
          .then(function () {
            return a.g.promise;
          })
          .then(
            function () {
              Oo(a);
            },
            function () {
              Oo(a);
            },
          );
        0 < a.timeout &&
          (a.l = setTimeout(function () {
            a.g.reject('Timeout!');
          }, a.timeout));
        return a.g.promise;
      },
      No = function (a, b) {
        var c = new MessageChannel();
        a.fc.contentWindow.postMessage({ url: b, callbackName: a.h }, '*', [
          c.port2,
        ]);
        c.port1.onmessage = function (d) {
          var e = {};
          void 0 !== a.l && (clearTimeout(a.l), (a.l = void 0));
          void 0 === d.data &&
            a.g.reject('Callback called, but no data received');
          'string' !== typeof d.data &&
            a.g.reject('Exploitation attempt! Data is not a string!');
          try {
            e = JSON.parse(d.data);
          } catch (f) {
            a.g.reject('Invalid Data received: ' + f.message);
          }
          a.g.resolve(e);
        };
      },
      Mo = function (a) {
        var b = Dj(),
          c = _.gd(document, 'IFRAME');
        if (!c.sandbox) throw Error('la');
        c.sandbox.value = 'allow-scripts';
        c.style.display = 'none';
        a.fc = c;
        a = li();
        a = _.Ri(_.Rc, Wi('body', {}, Vi(Ci(_.Ra(a).toString()))));
        c.srcdoc = _.Pc(a);
        a = _.Ib(
          'data:text/html;charset=UTF-8;base64,' + btoa(_.Pc(a).toString()),
        );
        c.src = _.Sa(a).toString();
        c.addEventListener(
          'load',
          function () {
            return b.resolve(c);
          },
          !1,
        );
        c.addEventListener(
          'error',
          function (d) {
            b.reject(d);
          },
          !1,
        );
        document.documentElement.appendChild(c);
        return b.promise;
      },
      Oo = function (a) {
        null !== a.fc &&
          (document.documentElement.removeChild(a.fc), (a.fc = null));
      };
    var Qo = function (a, b) {
      _.y.call(this);
      this.g = new Xj(a);
      if (b)
        for (var c in b) b[c] !== Object.prototype[c] && this.g.g.set(c, b[c]);
    };
    _.u(Qo, _.y);
    Qo.prototype.j = function () {
      return !0;
    };
    Qo.prototype.Ja = function () {
      return this.j();
    };
    Qo.prototype.send = function () {
      return null;
    };
    Qo.prototype.cancel = function () {};
    var Ro = function (a, b, c, d) {
      Qo.call(this, a, b);
      this.l = null == d || !!d;
      a = this.h = new Lo(this.g);
      a.h = 'callback';
      a.j = void 0 === c ? 'callback' : c;
    };
    _.u(Ro, Qo);
    Ro.prototype.j = function () {
      return this.l;
    };
    Ro.prototype.send = function (a, b) {
      a = Po(this.h, a);
      a.then(b);
      return a;
    };
    Ro.prototype.cancel = function (a) {
      a.cancel();
    };
    var So = function (a, b) {
      Qo.call(this, a, b);
      this.l = {};
      this.h = this.o = 0;
      window.XMLHttpRequest &&
        'withCredentials' in new XMLHttpRequest() &&
        (this.h = 1);
      !this.h &&
        window.XDomainRequest &&
        'file:' != window.location.protocol &&
        ((this.h = 2), this.g.g.set('u', window.location.href));
    };
    _.u(So, Qo);
    So.prototype.j = function () {
      return !!this.h;
    };
    So.prototype.send = function (a, b) {
      var c = Go(),
        d = ++this.o,
        e = {},
        f = {};
      'q' in a && ((f.q = a.q), delete a.q);
      a.mode = this.h;
      1 == this.h
        ? ((e.Nb = new _.mg()),
          _.H(
            e.Nb,
            'complete',
            (0, _.w)(function () {
              e.Wc ||
                (_.xg(e.Nb)
                  ? b(_.yg(e.Nb))
                  : (this.eh(), b(null, _.yg(e.Nb) || null)),
                To(this, d));
            }, this),
          ),
          _.H(
            e.Nb,
            'timeout',
            (0, _.w)(function () {
              e.Wc || (this.fh(), To(this, d));
            }, this),
          ),
          e.Nb.send(this.g.toString() + '&' + Fo(a), 'POST', Fo(f), {
            'Content-Type': 'application/x-www-form-urlencoded',
          }))
        : ((e.tb = new XDomainRequest()),
          (e.tb.timeout = 2e4),
          (e.tb.onload = (0, _.w)(function () {
            e.Wc || (b(e.tb.responseText), To(this, d));
          }, this)),
          (e.tb.onerror = (0, _.w)(function () {
            e.Wc || (this.eh(), b(null), To(this, d));
          }, this)),
          (e.tb.ontimeout = (0, _.w)(function () {
            e.Wc || (this.fh(), b(null), To(this, d));
          }, this)),
          e.tb.open('POST', this.g.toString() + '&' + Fo(a)),
          e.tb.send(Fo(f)));
      this.l[d] = e;
      Ho(c);
      return d;
    };
    So.prototype.cancel = function (a) {
      var b = this.l[a];
      b && ((b.Wc = !0), b.tb && b.tb.abort(), To(this, a));
    };
    var To = function (a, b) {
      var c = a.l[b];
      c &&
        (c.Nb ? (c.Nb.R(), (c.Nb = null)) : c.tb && (c.tb = null),
        delete a.l[b]);
    };
    So.prototype.L = function () {
      Qo.prototype.L.call(this);
      for (var a in this.l) this.cancel(a);
    };
    _.Ko.attach(17170, So.prototype, { fh: 1, eh: 2 });
    var Uo = function (a, b, c) {
      Qo.call(this, a, c);
      this.l = b.proxyIsSupported;
      this.o = b.proxySend;
      this.h = b.proxyCancel;
    };
    _.u(Uo, Qo);
    Uo.prototype.j = function () {
      return this.l();
    };
    Uo.prototype.send = function (a, b) {
      return this.o(this.g.toString(), a, b);
    };
    Uo.prototype.cancel = function (a) {
      this.h(a);
    };
    _.Vo = function (a, b) {
      b && (a.hl = b);
      return a;
    };
    _.Wo = function () {
      return !0;
    };
    _.Xo = function (a) {
      return a;
    };
    var Yo = function (a, b) {
      _.y.call(this);
      this.j = !0;
      this.h = a;
      this.g = b ? b : null;
    };
    _.u(Yo, _.y);
    var Zo = function (a, b) {
      if (!a.j) return b;
      if ('array' != _.ob(b)) a = [[b, 200]];
      else if (2 == b.length && 'array' != _.ob(b[0]) && 'array' != _.ob(b[1]))
        a = [
          [b[0], 200, b[1]],
          [b[1], 200, b[1]],
        ];
      else {
        a = [];
        for (var c = 0; c < b.length; ++c)
          a[c] = 'array' != _.ob(b[c]) ? [b[c], 200] : [b[c][0], 200, b[c][1]];
      }
      return a;
    };
    Yo.prototype.o = function (a) {
      var b = this;
      return function (c) {
        if (c)
          try {
            var d = c.indexOf('\x00');
            0 <= d && (c = c.substr(0, d));
            var e = JSON.parse(c);
          } catch (f) {
            (e = null), b.nj();
          }
        e ? a(Zo(b, e), 200) : a([], 500);
      };
    };
    Yo.prototype.l = function (a) {
      var b = this;
      return function (c) {
        c ? a(Zo(b, c), 200) : a([], 500);
      };
    };
    Yo.prototype.L = function () {
      _.y.prototype.L.call(this);
    };
    _.Ko.attach(47504, Yo.prototype, {
      nj: function () {
        _.hi('te_afbr');
      },
    });
    _.$o = {
      0: 'NO_ERROR',
      1: 'UNKNOWN_ERROR',
      2: 'JWT_TOKEN_CANNOT_PARSE',
      3: 'JWT_TOKEN_MISS_PARAM',
      4: 'JWT_TOKEN_INVALID_ISS',
      5: 'JWT_TOKEN_INVALID',
      6: 'INTERNAL_SERVER_ERROR',
      7: 'OUT_OF_QUOTA',
      8: 'INTERNAL_SERVER_ERROR',
    };
    _.bp = function (a, b, c, d, e, f) {
      _.y.call(this);
      var h;
      b
        ? (h = { client: b })
        : (h = { anno: 3, client: _.jo, format: 'html', v: '1.0' });
      c && (h.sp = c);
      h.key = a;
      fo && (h.logld = 'v' + fo);
      this.s = d || null;
      this.mc = e || null;
      this.g = null;
      this.j = { Xc: (0, _.w)(this.K, this), zf: 300 };
      a = this.o = new Yo(h, f);
      b = _.mo + po;
      this.l = a.g
        ? new Uo(b, a.g, { client: _.jo })
        : new Ro(b, { client: _.jo }, _.Wo() ? 'cb' : void 0);
      a = this.o;
      if (a.g) {
        if (!a.g) throw Error('ma');
        a = [
          {
            Da: new Uo(_.mo + lo + '/translate_a/t', a.g, a.h),
            Xc: (0, _.w)(a.l, a),
            he: 1900,
            Af: 4294967295,
            yf: -1,
            Rf: 0,
            Qd: !1,
          },
        ];
      } else
        (b = _.mo + lo),
          (a = [
            {
              Da: new So(b + '/translate_a/t', a.h),
              Xc: (0, _.w)(a.o, a),
              he: 30720,
              Af: 4294967295,
              yf: -1,
              Rf: 0,
              Qd: !1,
            },
            {
              Da: new Ro(b + '/translate_a/t', a.h, 'cb', _.B && 7 >= _.uc),
              Xc: (0, _.w)(a.l, a),
              he: 1900,
              Af: 4294967295,
              yf: -1,
              Rf: 3,
              Qd: !0,
            },
          ]);
      this.C = new ap(a);
      this.h = !1;
      for (b = 0; b < a.length; ++b) this.h = this.h || a[b].Da.j();
      this.h || this.oj();
    };
    _.u(_.bp, _.y);
    _.bp.prototype.K = function (a) {
      return function (b) {
        if (b)
          try {
            var c = JSON.parse(b);
          } catch (d) {
            c = null;
          }
        a((c && c[1]) || void 0);
      };
    };
    _.bp.prototype.initialize = function (a) {
      this.B ||
        ((this.B = !0),
        this.C.start(
          (0, _.w)(function (b) {
            b && ((this.g = b), (this.j.Da = b.Da));
            a();
          }, this),
        ));
    };
    _.bp.prototype.Ja = function () {
      return null !== this.g && null !== this.g.Da && this.g.Da.Ja();
    };
    _.cp = function (a, b, c) {
      b = a.j.Xc(b);
      a.j.Da.send({ q: c.substring(0, a.j.zf), sl: 'auto', tl: 'en' }, b);
    };
    _.bp.prototype.translate = function (a, b, c, d, e, f, h, k) {
      var l = this,
        m = this.g.Xc(a),
        n = { q: b, sl: c, tl: d };
      n.tc = e;
      f && (n.ctt = 1);
      h && (n.dom = 1);
      k && (n.sr = 1);
      n[On()] = Mn(b.join(''), ko);
      return this.s
        ? this.s.h().then(
            function (q) {
              null != q && ((n.jwtt = q), (n.rurl = location.hostname));
              return l.g.Da.send(n, (0, _.w)(dp(m), l));
            },
            function (q) {
              q && l.mc && l.mc(q);
            },
          )
        : this.g.Da.send(n, m);
    };
    var dp = function (a) {
        return function (b, c) {
          if (c && this.mc) {
            try {
              var d = JSON.parse(c).error_code;
            } catch (e) {
              d = null;
            }
            c = _.$o[1];
            this.mc(null == d ? c : _.$o[d] || c);
          }
          a(b);
        };
      },
      ep = function (a, b) {
        b instanceof _.pe
          ? b.then(function (c) {
              a.g.Da.cancel(c);
            })
          : a.g.Da.cancel(b);
      };
    _.bp.prototype.L = function () {
      _.y.prototype.L.call(this);
      this.g && (this.g.Da.R(), (this.g.Da = null));
      this.j.Da = null;
      this.l.R();
      this.l = null;
    };
    _.Ko.attach(7361, _.bp.prototype, {
      oj: function () {
        _.hi('te_au');
      },
    });
    var ap = function (a) {
      this.h = a;
    };
    ap.prototype.start = function (a) {
      this.g = a;
      this.j = 0;
      fp(this);
    };
    var fp = function (a) {
      if (a.j >= a.h.length) a.g(null);
      else {
        var b = a.h[a.j++];
        b.Mj
          ? Co(
              new Bo(
                (0, _.w)(b.Da.Ja, b.Da),
                (0, _.w)(function (c) {
                  c ? this.g(b) : fp(this);
                }, a),
                b.Mj,
              ),
            )
          : b.Da.Ja()
          ? a.g(b)
          : fp(a);
      }
    };
    var gp = function () {
      this.g = [];
    };
    gp.prototype.add = function (a) {
      this.g.push(a);
    };
    var hp = function () {
      this.g = [];
    };
    _.u(hp, gp);
    hp.prototype.add = function (a) {
      if (a) for (; a(); );
    };
    hp.ea = function () {
      return Al(hp);
    };
    _.jp = function (a) {
      this.g = [];
      this.h = 0.5;
      ip(this, a);
      this.l = 0;
      this.j = !0;
      this.o = (0, _.w)(this.s, this);
    };
    _.u(_.jp, gp);
    var ip = function (a, b) {
      1 < b ? (a.h = 1) : 0.001 > b ? (a.h = 0.001) : b && (a.h = b);
    };
    _.jp.prototype.add = function (a) {
      gp.prototype.add.call(this, a);
      this.j && kp(this);
    };
    var kp = function (a) {
      a.j = !1;
      window.setTimeout(a.o, Math.min(a.l, 5e3));
    };
    _.jp.prototype.s = function () {
      var a = new Date().getTime();
      do {
        this.g.length && ((this.g[0] && this.g[0]()) || this.g.shift());
        var b = !!this.g.length;
        var c = 95 * this.h + 5;
        var d = new Date().getTime() - a;
      } while (b && d < c);
      this.l = Math.ceil(d * (1 / this.h - 1)) + 1;
      b ? kp(this) : (this.j = !0);
    };
    var lp = _.wo(
        'A ABBR ACRONYM B BASEFONT BDO BIG CITE DFN EM FONT I INPUT NOBR LABEL Q S SMALL SPAN STRIKE STRONG SUB SUP TEXTAREA TT U VAR'.split(
          ' ',
        ),
      ),
      mp = _.wo(
        'APPLET AREA BASE FRAME FRAMESET HR LINK META NOFRAMES NOSCRIPT INPUT TEXTAREA TITLE'.split(
          ' ',
        ),
      ),
      np = _.wo(
        'BR CODE IMG KBD MAP OBJECT PARAM SCRIPT STYLE WBR svg'.split(' '),
      ),
      op = _.wo(['submit', 'button']);
    var qp = function (a, b) {
        this.j = _.B ? [] : null;
        this.h = [];
        this.done = !1;
        for (
          this.g = new _.hn(a, !1, b, 3 === a.nodeType ? 0 : 1, 1);
          (a = a.parentNode);

        )
          pp(this, a, !0);
        this.h.push(!1);
        this.h.reverse();
        for (a = 1; a < this.h.length; ++a)
          null == this.h[a] && (this.h[a] = this.h[a - 1]);
      },
      pp = function (a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = ((b.style && b.style.whiteSpace) || '').substring(0, 3);
        'pre' === d || (!d && 'PRE' === b.tagName)
          ? a.h.push(!0)
          : d && 'pre' !== d
          ? a.h.push(!1)
          : c
          ? a.h.push(null)
          : a.h.push(a.h[a.h.length - 1]);
      },
      rp = function (a) {
        return !!a.h[a.h.length - 1];
      };
    qp.prototype.node = function () {
      return this.g.node;
    };
    qp.prototype.depth = function () {
      return this.g.depth;
    };
    qp.prototype.next = function () {
      try {
        this.j && 0 < this.j.length && -1 === this.g.g && this.j.length--,
          -1 === this.g.g && this.h.length--,
          this.j &&
          0 < this.j.length &&
          1 !== this.g.g &&
          !this.g.node.nextSibling
            ? gn(this.g, this.j[this.j.length - 1], -1, this.g.depth - 1)
            : (this.g.Ka(),
              this.j && 1 === this.g.g && this.j.push(this.g.node)),
          1 === this.g.g && this.g.se && pp(this, this.g.node);
      } catch (a) {
        a !== _.ff && this.uj(a), (this.done = !0);
      }
    };
    _.Ko.attach(52754, qp.prototype, { uj: 1 });
    var sp;
    sp = function () {
      return '[msg_undefined]';
    };
    _.X = {};
    (function () {
      var a = function (b) {
        return function () {
          return b;
        };
      };
      _.X = {
        Ie: a(0),
        ue: a(1),
        cg: a(2),
        Sk: a(3),
        fi: a(4),
        dg: a(5),
        Yh: a(45),
        Zh: a(6),
        ng: a(7),
        Tc: a(8),
        hi: a(9),
        gl: a(10),
        li: a(11),
        og: a(12),
        dl: a(13),
        di: a(14),
        cl: a(15),
        pg: a(16),
        jl: a(17),
        ii: a(18),
        lk: a(19),
        Rk: a(20),
        Kh: a(21),
        ei: a(22),
        Yk: a(23),
        Xk: a(24),
        bi: a(25),
        il: a(26),
        gi: a(27),
        ci: a(28),
        $h: a(29),
        ji: a(30),
        kk: a(32),
        jk: a(33),
        ki: a(34),
        zk: a(35),
        rk: a(36),
        yk: a(37),
        qg: a(38),
        Jk: a(39),
        bg: a(40),
        ai: a(41),
        mg: a(46),
      };
    })();
    _.tp = function () {
      var a = ni('google.translate.m');
      if (a)
        for (var b in _.X)
          if (_.X[b] !== Object.prototype[_.X[b]] && _.X[b]) {
            var c = _.X[b]();
            _.X[b] = a[c] ? a[c] : sp;
          }
    };
    var up = function () {
      _.I.call(this);
      this.g = 0;
      this.endTime = this.startTime = null;
    };
    _.x(up, _.I);
    up.prototype.j = function () {
      this.h('begin');
    };
    up.prototype.l = function () {
      this.h('end');
    };
    up.prototype.Wb = function () {
      this.h('stop');
    };
    up.prototype.h = function (a) {
      this.dispatchEvent(a);
    };
    var vp = function (a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function (c) {
          return 'string' === typeof c
            ? c
            : c.Bl + ' ' + c.duration + 's ' + c.timing + ' ' + c.delay + 's';
        });
        _.L(a, 'transition', b.join(','));
      },
      wp = _.zb(function () {
        if (_.B) return _.wc('10.0');
        var a = _.gd(document, 'DIV'),
          b = _.D ? '-webkit' : _.C ? '-moz' : _.B ? '-ms' : null,
          c = { transition: 'opacity 1s linear' };
        b && (c[b + '-transition'] = 'opacity 1s linear');
        b = Wi('div', { style: c });
        _.Wh(a, b);
        a = a.firstChild;
        b = a.style[_.kh('transition')];
        return (
          '' !=
          ('undefined' !== typeof b ? b : a.style[_.qh(a, 'transition')] || '')
        );
      });
    var xp = function (a, b, c, d, e) {
      up.call(this);
      this.I = a;
      this.C = b;
      this.B = c;
      this.o = d;
      this.K = Array.isArray(e) ? e : [e];
    };
    _.x(xp, up);
    _.g = xp.prototype;
    _.g.play = function () {
      if (1 == this.g) return !1;
      this.j();
      this.h('play');
      this.startTime = _.ub();
      this.g = 1;
      if (wp())
        return _.L(this.I, this.B), (this.s = _.kg(this.Lj, void 0, this)), !0;
      this.ze(!1);
      return !1;
    };
    _.g.Lj = function () {
      Bk(this.I);
      vp(this.I, this.K);
      _.L(this.I, this.o);
      this.s = _.kg((0, _.w)(this.ze, this, !1), 1e3 * this.C);
    };
    _.g.stop = function () {
      1 == this.g && this.ze(!0);
    };
    _.g.ze = function (a) {
      _.L(this.I, 'transition', '');
      _.lg(this.s);
      _.L(this.I, this.o);
      this.endTime = _.ub();
      this.g = 0;
      a ? this.Wb() : this.h('finish');
      this.l();
    };
    _.g.L = function () {
      this.stop();
      xp.G.L.call(this);
    };
    var yp = function (a, b) {
      _.I.call(this);
      this.o = new _.J(this);
      this.qc(a || null);
      b && (this.Lc = b);
    };
    _.x(yp, _.I);
    _.g = yp.prototype;
    _.g.I = null;
    _.g.Vc = !0;
    _.g.tg = null;
    _.g.bc = !1;
    _.g.uf = -1;
    _.g.Lc = 'toggle_display';
    _.g.A = function () {
      return this.I;
    };
    _.g.qc = function (a) {
      if (this.bc) throw Error('na');
      this.I = a;
    };
    _.g.nd = function (a) {
      if (this.bc) throw Error('na');
      this.Vc = a;
    };
    _.g.isVisible = function () {
      return this.bc;
    };
    _.g.S = function (a) {
      this.xa && this.xa.stop();
      this.la && this.la.stop();
      if (a) {
        if (!this.bc && this.Ae()) {
          if (!this.I) throw Error('oa');
          this.Ab();
          a = _.E(this.I);
          if (this.Vc)
            if ((this.o.D(a, 'mousedown', this.Ef, !0), _.B)) {
              try {
                var b = a.activeElement;
              } catch (d) {}
              for (; b && 'IFRAME' == b.nodeName; ) {
                try {
                  var c = _.vj(b);
                } catch (d) {
                  break;
                }
                a = c;
                b = a.activeElement;
              }
              this.o.D(a, 'mousedown', this.Ef, !0);
              this.o.D(a, 'deactivate', this.lh);
            } else this.o.D(a, 'blur', this.lh);
          'toggle_display' == this.Lc
            ? ((this.I.style.visibility = 'visible'), _.O(this.I, !0))
            : 'move_offscreen' == this.Lc && this.Ab();
          this.bc = !0;
          this.uf = Date.now();
          this.xa
            ? (_.Md(this.xa, 'end', this.mh, !1, this), this.xa.play())
            : this.mh();
        }
      } else zp(this);
    };
    _.g.Ab = _.v;
    var zp = function (a, b) {
      a.bc &&
        a.dispatchEvent({ type: 'beforehide', target: b }) &&
        (a.o && _.$f(a.o),
        (a.bc = !1),
        a.la
          ? (_.Md(a.la, 'end', _.tb(a.wg, b), !1, a), a.la.play())
          : a.wg(b));
    };
    _.g = yp.prototype;
    _.g.wg = function (a) {
      'toggle_display' == this.Lc
        ? this.gj()
        : 'move_offscreen' == this.Lc && (this.I.style.top = '-10000px');
      this.Gf(a);
    };
    _.g.gj = function () {
      this.I.style.visibility = 'hidden';
      _.O(this.I, !1);
    };
    _.g.Ae = function () {
      return this.dispatchEvent('beforeshow');
    };
    _.g.mh = function () {
      this.dispatchEvent('show');
    };
    _.g.Gf = function (a) {
      this.dispatchEvent({ type: 'hide', target: a });
    };
    _.g.Ef = function (a) {
      a = a.target;
      _.nd(this.I, a) ||
        Ap(this, a) ||
        150 > Date.now() - this.uf ||
        zp(this, a);
    };
    _.g.lh = function (a) {
      var b = _.E(this.I);
      if ('undefined' != typeof document.activeElement) {
        if (
          ((a = b.activeElement),
          !a || _.nd(this.I, a) || 'BODY' == a.tagName || Ap(this, a))
        )
          return;
      } else if (a.target != b) return;
      150 > Date.now() - this.uf || zp(this);
    };
    var Ap = function (a, b) {
      return _.Ub(a.tg || [], function (c) {
        return b === c || _.nd(c, b);
      });
    };
    yp.prototype.L = function () {
      yp.G.L.call(this);
      this.o.R();
      _.ca(this.xa);
      _.ca(this.la);
      delete this.I;
      delete this.o;
      delete this.tg;
    };
    var Bp = function (a, b) {
      this.s = b || void 0;
      yp.call(this, a);
    };
    _.x(Bp, yp);
    Bp.prototype.Ab = function () {
      if (this.s) {
        var a = !this.isVisible() && 'move_offscreen' != this.Lc,
          b = this.A();
        a && ((b.style.visibility = 'hidden'), _.O(b, !0));
        this.s.h(b, 8, this.xf);
        a && _.O(b, !1);
      }
    };
    var Cp = function (a, b) {
      Bp.call(this, a);
      this.j = b;
      this.g = 0;
      this.h = null;
      this.l = 0;
      this.S(!0);
      this.S(!1);
      _.Q(this.A(), 'round-trip-popup');
      _.Q(this.j, 'round-trip-content');
    };
    _.u(Cp, Bp);
    Cp.prototype.K = function () {
      _.lg(this.l);
      1 == this.g
        ? _.Md(this.h, 'finish', (0, _.w)(this.K, this))
        : 0 == this.g && (this.l = _.kg((0, _.w)(this.B, this, -1), 200));
    };
    Cp.prototype.B = function (a) {
      if (
        this.g != a &&
        (0 != this.g ||
          !((this.isVisible() && 1 == a) || (!this.isVisible() && -1 == a)))
      ) {
        var b = this.isVisible();
        this.S(!0);
        var c = -Math.ceil(Bk(this.j).width);
        Ck(this.A()) && (c = -c);
        var d = 1 == a ? c : 0;
        c = 1 == a ? 0 : c;
        this.S(b);
        if (wp()) {
          b = 0.2;
          if (0 != this.g) {
            var e = parseInt(qk(this.j, 'left'), 10);
            this.C();
            b *= (c - e) / (c - d);
            d = e;
          }
          this.g = a;
          this.h = new xp(
            this.j,
            b,
            { left: d + 'px' },
            { left: c + 'px' },
            'left ' + b + 's',
          );
          this.h.play();
          _.Md(this.h, 'finish', (0, _.w)(this.C, this));
          -1 == a
            ? _.Md(this.h, 'finish', (0, _.w)(this.S, this, !1))
            : this.S(!0);
        } else _.L(this.j, 'left', c + 'px'), this.S(1 == a ? !0 : !1);
      }
    };
    Cp.prototype.C = function () {
      0 != this.g &&
        (this.h.stop(),
        _.kg((0, _.w)(Bj, this, this.h)),
        (this.g = 0),
        (this.h = null));
    };
    var Ep = function () {
      this.I = null;
      this.g = _.jj('DIV', 'gt-hl-layer', document.createTextNode(''));
      this.h = null;
      this.I && (nj(this.g, this.I), Dp(this));
    };
    Ep.prototype.attach = function (a) {
      this.h = a;
    };
    var Gp = function (a, b, c, d, e) {
        var f = d || 'gt-hl-text';
        d = a.I && (a.I.value || _.td(a.I));
        Dp(a);
        _.jd(a.g);
        if (b != c || e) {
          if (0 < b) {
            var h = d.substring(0, b);
            Fp(a.g, h, 0, e);
          }
          b < c &&
            ((h = d.substring(b, c)),
            (f = _.jj('SPAN', f)),
            Fp(f, h, b, e),
            a.g.appendChild(f));
          c < d.length && ((h = d.substring(c)), Fp(a.g, h, c, e));
        }
      },
      Dp = function (a) {
        var b = a.I;
        var c = _.E(b),
          d = _.B && b.currentStyle;
        d &&
        _.dd(_.F(c).U) &&
        'auto' != d.width &&
        'auto' != d.height &&
        !d.boxSizing
          ? ((c = Gk(b, d.width, 'width', 'pixelWidth')),
            (b = Gk(b, d.height, 'height', 'pixelHeight')),
            (b = new _.Vc(c, b)))
          : ((d = _.Ek(b)),
            (c = Ik(b)),
            (b = Lk(b)),
            (b = new _.Vc(
              d.width - b.left - c.left - c.right - b.right,
              d.height - b.top - c.top - c.bottom - b.bottom,
            )));
        _.Mk(a.g, b);
        c = xk(a.I);
        b = a.g;
        d = c.x;
        c = c.y;
        var e = xk(b);
        d instanceof N && ((c = d.y), (d = d.x));
        _.tk(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
        b = Ik(a.I);
        _.L(a.g, 'paddingLeft', b.left + 'px');
        _.L(a.g, 'paddingRight', b.right + 'px');
        a.g.dir = a.I.dir;
      },
      Fp = function (a, b, c, d) {
        d = d || [];
        for (var e = 0, f; (f = d[e]); e++)
          if (!(0 > f.cd - c)) {
            if (f.cd - c >= b.length) break;
            if (0 < f.cd - c) {
              var h = b.substring(0, f.cd - c);
              Hp(a, h);
            }
            var k = f.className || 'gt-hl-text';
            h = b.substring(f.cd - c, f.Zf - c);
            var l = _.jj('SPAN');
            jl(l, k);
            Hp(l, h);
            a.appendChild(l);
            b = b.substring(f.Zf - c);
            c = f.Zf;
          }
        b && Hp(a, b);
      },
      Hp = function (a, b) {
        b = b.replace(/(\r\n|\r|\n)/g, '\n').split('\n');
        for (var c = 0, d = b.length; c < d; c++) {
          if (0 < c) {
            var e = _.jj('BR');
            a.appendChild(e);
          }
          a.appendChild(document.createTextNode(String(b[c])));
        }
      };
    var Ip = function (a) {
      _.I.call(this);
      this.I = a;
      a = _.B ? 'focusout' : 'blur';
      this.g = _.H(this.I, _.B ? 'focusin' : 'focus', this, !_.B);
      this.h = _.H(this.I, a, this, !_.B);
    };
    _.x(Ip, _.I);
    Ip.prototype.handleEvent = function (a) {
      var b = new _.zd(a.g);
      b.type =
        'focusin' == a.type || 'focus' == a.type ? 'focusin' : 'focusout';
      this.dispatchEvent(b);
    };
    Ip.prototype.L = function () {
      Ip.G.L.call(this);
      _.Ud(this.g);
      _.Ud(this.h);
      delete this.I;
    };
    var Jp = function (a, b, c) {
      this.element = a;
      this.j = b;
      this.C = c;
    };
    _.x(Jp, ol);
    Jp.prototype.h = function (a, b, c) {
      vl(this.element, this.j, a, b, void 0, c, this.C);
    };
    var Kp = function (a, b) {
      this.g = a instanceof N ? a : new N(a, b);
    };
    _.x(Kp, ol);
    Kp.prototype.h = function (a, b, c) {
      vl(uk(a), 0, a, b, this.g, c, null, void 0);
    };
    var Y = function (a, b, c) {
      this.V = c || (a ? _.F(_.ad(document, a)) : _.F());
      Bp.call(
        this,
        this.V.N('DIV', { style: 'position:absolute;display:none;' }),
      );
      this.Sb = new N(1, 1);
      this.C = new _.vf();
      this.K = null;
      a && this.attach(a);
      null != b && this.mb(b);
    };
    _.x(Y, Bp);
    var Lp = [];
    _.g = Y.prototype;
    _.g.Oa = null;
    _.g.className = 'VIpgJd-suEOdc';
    _.g.zh = 500;
    _.g.Xg = 0;
    _.g.attach = function (a) {
      a = _.ad(document, a);
      this.C.add(a);
      _.H(a, 'mouseover', this.Be, !1, this);
      _.H(a, 'mouseout', this.Bc, !1, this);
      _.H(a, 'mousemove', this.zg, !1, this);
      _.H(a, 'focus', this.uc, !1, this);
      _.H(a, 'blur', this.Bc, !1, this);
    };
    var Np = function (a, b) {
        if (b) (b = _.ad(document, b)), Mp(a, b), a.C.remove(b);
        else {
          for (var c = a.C.jb(), d = 0; (b = c[d]); d++) Mp(a, b);
          a = a.C;
          xi(a.g);
          a.size = 0;
        }
      },
      Mp = function (a, b) {
        _.Td(b, 'mouseover', a.Be, !1, a);
        _.Td(b, 'mouseout', a.Bc, !1, a);
        _.Td(b, 'mousemove', a.zg, !1, a);
        _.Td(b, 'focus', a.uc, !1, a);
        _.Td(b, 'blur', a.Bc, !1, a);
      };
    Y.prototype.mb = function (a) {
      _.od(this.A(), a);
    };
    Y.prototype.qc = function (a) {
      var b = this.A();
      b && _.pj(b);
      Y.G.qc.call(this, a);
      a
        ? ((b = this.V.U.body),
          b.insertBefore(a, b.lastChild),
          _.ca(this.K),
          (this.K = new Ip(this.A())),
          ri(this, _.tb(_.ca, this.K)),
          _.H(this.K, 'focusin', this.O, void 0, this),
          _.H(this.K, 'focusout', this.Ta, void 0, this))
        : (_.ca(this.K), (this.K = null));
    };
    Y.prototype.Qc = function () {
      return _.td(this.A());
    };
    var Op = function (a) {
      return a.W ? (a.isVisible() ? 4 : 1) : a.ba ? 3 : a.isVisible() ? 2 : 0;
    };
    _.g = Y.prototype;
    _.g.Ae = function () {
      if (!yp.prototype.Ae.call(this)) return !1;
      if (this.g)
        for (var a, b = 0; (a = Lp[b]); b++) _.nd(a.A(), this.g) || a.S(!1);
      _.ua(Lp, this);
      a = this.A();
      a.className = this.className;
      this.O();
      _.H(a, 'mouseover', this.Zd, !1, this);
      _.H(a, 'mouseout', this.Yd, !1, this);
      Pp(this);
      return !0;
    };
    _.g.Gf = function () {
      _.va(Lp, this);
      for (var a = this.A(), b, c = 0; (b = Lp[c]); c++)
        b.g && _.nd(a, b.g) && b.S(!1);
      this.Dg && this.Dg.Ta();
      _.Td(a, 'mouseover', this.Zd, !1, this);
      _.Td(a, 'mouseout', this.Yd, !1, this);
      this.g = void 0;
      0 == Op(this) && (this.Sa = !1);
      yp.prototype.Gf.call(this);
    };
    _.g.Bf = function (a, b) {
      this.g == a &&
        this.C.contains(this.g) &&
        (this.Sa || !this.vl
          ? (this.S(!1),
            this.isVisible() ||
              ((this.g = a),
              (this.s = b || new Qp(si(this.Sb))),
              this.isVisible() && this.Ab(),
              this.S(!0)))
          : (this.g = void 0));
      this.W = void 0;
    };
    _.g.df = function () {
      return this.C;
    };
    _.g.xj = function (a) {
      this.ba = void 0;
      if (a == this.g) {
        a = this.V;
        var b = a.U;
        try {
          var c = b && b.activeElement;
          var d = c && c.nodeName ? c : null;
        } catch (e) {
          d = null;
        }
        d = d && this.A() && a.contains(this.A(), d);
        (null != this.Oa &&
          (this.Oa == this.A() || this.C.contains(this.Oa))) ||
          d ||
          (this.xc && this.xc.Oa) ||
          this.S(!1);
      }
    };
    var Rp = function (a, b) {
      var c = _.wi(a.V.U);
      a.Sb.x = b.clientX + c.x;
      a.Sb.y = b.clientY + c.y;
    };
    Y.prototype.Be = function (a) {
      var b = Sp(this, a.target);
      this.Oa = b;
      this.O();
      b != this.g && ((this.g = b), Tp(this, b), Up(this), Rp(this, a));
    };
    var Sp = function (a, b) {
      try {
        for (; b && !a.C.contains(b); ) b = b.parentNode;
        return b;
      } catch (c) {
        return null;
      }
    };
    Y.prototype.zg = function (a) {
      Rp(this, a);
      this.Sa = !0;
    };
    Y.prototype.uc = function (a) {
      this.Oa = a = Sp(this, a.target);
      this.Sa = !0;
      if (this.g != a) {
        this.g = a;
        var b = new Vp(this.Oa);
        this.O();
        Tp(this, a, b);
        Up(this);
      }
    };
    var Up = function (a) {
      if (a.g)
        for (var b, c = 0; (b = Lp[c]); c++)
          _.nd(b.A(), a.g) && ((b.xc = a), (a.Dg = b));
    };
    Y.prototype.Bc = function (a) {
      var b = Sp(this, a.target),
        c = Sp(this, a.relatedTarget);
      b != c &&
        (b == this.Oa && (this.Oa = null),
        Pp(this),
        (this.Sa = !1),
        !this.isVisible() ||
        (a.relatedTarget && _.nd(this.A(), a.relatedTarget))
          ? (this.g = void 0)
          : this.Ta());
    };
    Y.prototype.Zd = function () {
      var a = this.A();
      this.Oa != a && (this.O(), (this.Oa = a));
    };
    Y.prototype.Yd = function (a) {
      var b = this.A();
      this.Oa != b ||
        (a.relatedTarget && _.nd(b, a.relatedTarget)) ||
        ((this.Oa = null), this.Ta());
    };
    var Tp = function (a, b, c) {
        a.W || (a.W = _.kg((0, _.w)(a.Bf, a, b, c), a.zh));
      },
      Pp = function (a) {
        a.W && (_.lg(a.W), (a.W = void 0));
      };
    Y.prototype.Ta = function () {
      2 == Op(this) &&
        (this.ba = _.kg((0, _.w)(this.xj, this, this.g), this.Xg));
    };
    Y.prototype.O = function () {
      this.ba && (_.lg(this.ba), (this.ba = void 0));
    };
    Y.prototype.L = function () {
      this.S(!1);
      Pp(this);
      Np(this);
      this.A() && _.pj(this.A());
      this.Oa = null;
      delete this.V;
      Y.G.L.call(this);
    };
    var Qp = function (a, b) {
      Kp.call(this, a, b);
    };
    _.x(Qp, Kp);
    Qp.prototype.h = function (a, b, c) {
      b = uk(a);
      b = yk(b);
      c = c
        ? new ok(c.top + 10, c.right, c.bottom, c.left + 10)
        : new ok(10, 0, 0, 10);
      ul(this.g, a, 8, c, b, 9) & 496 && ul(this.g, a, 8, c, b, 5);
    };
    var Vp = function (a) {
      Jp.call(this, a, 5);
    };
    _.x(Vp, Jp);
    Vp.prototype.h = function (a, b, c) {
      var d = new N(10, 0);
      vl(this.element, this.j, a, b, d, c, 9) & 496 &&
        vl(this.element, 4, a, 1, d, c, 5);
    };
    var Wp = function () {
      this.l = [];
    };
    _.x(Wp, $l);
    Ai(Wp);
    var Xp = function (a, b) {
      var c = a.l[b];
      if (!c) {
        switch (b) {
          case 0:
            c = a.ua() + '-sn54Q';
            break;
          case 1:
            c = a.ua() + '-MPu53c';
            break;
          case 2:
            c = a.ua() + '-bN97Pc';
        }
        a.l[b] = c;
      }
      return c;
    };
    _.g = Wp.prototype;
    _.g.oc = function () {
      return 'menuitem';
    };
    _.g.N = function (a) {
      var b = a.g.N('DIV', cm(this, a).join(' '), Yp(this, a.wa(), a.g));
      Zp(this, a, b, !!(a.ra & 8) || !!(a.ra & 16));
      return b;
    };
    _.g.Pb = function (a) {
      return a && a.firstChild;
    };
    _.g.cb = function (a, b) {
      var c = _.md(b),
        d = Xp(this, 2);
      (c && kl(c, d)) || b.appendChild(Yp(this, b.childNodes, a.g));
      kl(b, 'VIpgJd-wQNmvb') && (a.le(!0), this.le(a, b, !0));
      return Wp.G.cb.call(this, a, b);
    };
    _.g.Mc = function (a, b) {
      var c = this.Pb(a),
        d = $p(this, a) ? c.firstChild : null;
      Wp.G.Mc.call(this, a, b);
      d && !$p(this, a) && c.insertBefore(d, c.firstChild || null);
    };
    var Yp = function (a, b, c) {
      a = Xp(a, 2);
      return c.N('DIV', a, b);
    };
    Wp.prototype.yh = function (a, b, c) {
      a && b && Zp(this, a, b, c);
    };
    Wp.prototype.le = function (a, b, c) {
      a && b && Zp(this, a, b, c);
    };
    var $p = function (a, b) {
        return (b = a.Pb(b))
          ? ((b = b.firstChild), (a = Xp(a, 1)), !!b && qj(b) && kl(b, a))
          : !1;
      },
      Zp = function (a, b, c, d) {
        em(a, c, b.gd());
        fm(a, b, c);
        d != $p(a, c) &&
          (d ? _.Q(c, 'VIpgJd-wQNmvb') : _.ml(c, 'VIpgJd-wQNmvb'),
          (c = a.Pb(c)),
          d
            ? ((a = Xp(a, 1)),
              c.insertBefore(b.g.N('DIV', a), c.firstChild || null))
            : c.removeChild(c.firstChild));
      };
    Wp.prototype.g = function (a) {
      switch (a) {
        case 2:
          return Xp(this, 0);
        case 16:
        case 8:
          return 'VIpgJd-wQNmvb-gk6SMd';
        default:
          return Wp.G.g.call(this, a);
      }
    };
    Wp.prototype.j = function (a) {
      var b = Xp(this, 0);
      switch (a) {
        case 'VIpgJd-wQNmvb-gk6SMd':
          return 16;
        case b:
          return 2;
        default:
          return Wp.G.j.call(this, a);
      }
    };
    Wp.prototype.ua = function () {
      return 'VIpgJd-j7LFlb';
    };
    var aq = function (a, b, c, d) {
      U.call(this, a, d || Wp.ea(), c);
      this.Ma(b);
    };
    _.x(aq, U);
    _.g = aq.prototype;
    _.g.Qa = function () {
      var a = this.ob;
      return null != a ? a : this.xb();
    };
    _.g.Ma = function (a) {
      this.ob = a;
    };
    _.g.Ga = function (a, b) {
      aq.G.Ga.call(this, a, b);
      switch (a) {
        case 8:
          this.ka & 16 && !b && om(this, 16, !1) && rm(this, 16, !1);
          (a = this.A()) && this.h.yh(this, a, b);
          break;
        case 16:
          (a = this.A()) && this.h.le(this, a, b);
      }
    };
    _.g.yh = function (a) {
      this.Ga(8, a);
    };
    _.g.le = function (a) {
      this.Ga(16, a);
    };
    _.g.xb = function () {
      var a = this.wa();
      return Array.isArray(a)
        ? ((a = _.Sb(a, function (b) {
            return qj(b) &&
              (kl(b, 'VIpgJd-j7LFlb-x29Bmf') ||
                kl(b, 'VIpgJd-j7LFlb-PQTlnb-hgDUwe'))
              ? ''
              : zj(b);
          }).join('')),
          $i(a))
        : aq.G.xb.call(this);
    };
    _.g.Cc = function (a) {
      var b = this.T();
      if (b) {
        var c = b.la;
        b.la = null;
        if ((b = c && 'number' === typeof a.clientX))
          (b = new N(a.clientX, a.clientY)),
            (b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1);
        if (b) return;
      }
      aq.G.Cc.call(this, a);
    };
    _.g.Oc = function (a) {
      return a.keyCode == this.ih && this.Ic(a) ? !0 : aq.G.Oc.call(this, a);
    };
    _.g.Bi = function () {
      return this.ih;
    };
    jm('VIpgJd-j7LFlb', function () {
      return new aq(null);
    });
    aq.prototype.gd = function () {
      return this.ra & 16
        ? 'menuitemcheckbox'
        : this.ra & 8
        ? 'menuitemradio'
        : aq.G.gd.call(this);
    };
    aq.prototype.T = function () {
      return U.prototype.T.call(this);
    };
    aq.prototype.Sd = function () {
      return U.prototype.Sd.call(this);
    };
    var bq = function (a) {
      this.g = a;
    };
    Ai(bq);
    var cq = function (a, b) {
      a && (a.tabIndex = b ? 0 : -1);
    };
    bq.prototype.N = function (a) {
      var b = a.g,
        c = b.N,
        d = this.yd(),
        e = [d, 'horizontal' == a.Xb ? d + '-DKlKme' : d + '-BvBYQ'];
      a.isEnabled() || e.push(d + '-OWB6Me');
      return c.call(b, 'DIV', e.join(' '));
    };
    bq.prototype.Ce = function (a) {
      return 'DIV' == a.tagName;
    };
    var eq = function (a, b, c) {
        c.id && Pl(b, c.id);
        var d = a.yd(),
          e = !1,
          f = il(c);
        f &&
          Array.prototype.forEach.call(
            f,
            function (h) {
              if (h == d) e = !0;
              else if (h)
                if (h == d + '-OWB6Me') b.qa(!1);
                else if (h == d + '-DKlKme') {
                  if (b.A()) throw Error('da');
                  b.Xb = 'horizontal';
                } else if (h == d + '-BvBYQ') {
                  if (b.A()) throw Error('da');
                  b.Xb = 'vertical';
                }
            },
            a,
          );
        e || _.Q(c, d);
        dq(a, b, c);
        return c;
      },
      dq = function (a, b, c) {
        if (c)
          for (var d = c.firstChild, e; d && d.parentNode == c; ) {
            e = d.nextSibling;
            if (1 == d.nodeType) {
              var f = a.cf(d);
              f && ((f.I = d), b.isEnabled() || f.qa(!1), b.Uc(f), Ul(f, d));
            } else
              (d.nodeValue && '' != (0, _.Xb)(d.nodeValue)) || c.removeChild(d);
            d = e;
          }
      };
    bq.prototype.cf = function (a) {
      a: {
        a = il(a);
        for (var b = 0, c = a.length; b < c; b++) {
          var d = a[b];
          if ((d = d in im ? im[d]() : null)) {
            a = d;
            break a;
          }
        }
        a = null;
      }
      return a;
    };
    bq.prototype.De = function (a) {
      a = a.A();
      Dk(a, !0, _.C);
      _.B && (a.hideFocus = !0);
      var b = this.g;
      b && xl(a, b);
    };
    bq.prototype.yd = function () {
      return 'VIpgJd-haAclf';
    };
    var fq = function () {};
    _.x(fq, $l);
    Ai(fq);
    fq.prototype.N = function (a) {
      return a.g.N('DIV', this.ua());
    };
    fq.prototype.cb = function (a, b) {
      b.id && Pl(a, b.id);
      if ('HR' == b.tagName) {
        var c = b;
        b = this.N(a);
        nj(b, c);
        _.pj(c);
      } else _.Q(b, this.ua());
      return b;
    };
    fq.prototype.Mc = function () {};
    fq.prototype.ua = function () {
      return 'VIpgJd-gqMrKb';
    };
    var gq = function (a, b) {
      U.call(this, null, a || fq.ea(), b);
      this.Ga(1, !1);
      this.Ga(2, !1);
      this.Ga(4, !1);
      this.Ga(32, !1);
      this.ka = 1;
    };
    _.x(gq, U);
    gq.prototype.Y = function () {
      gq.G.Y.call(this);
      var a = this.A();
      xl(a, 'separator');
    };
    jm('VIpgJd-gqMrKb', function () {
      return new gq();
    });
    var hq = function (a) {
      this.g = a || 'menu';
    };
    _.x(hq, bq);
    Ai(hq);
    _.g = hq.prototype;
    _.g.Ce = function (a) {
      return 'UL' == a.tagName || hq.G.Ce.call(this, a);
    };
    _.g.cf = function (a) {
      return 'HR' == a.tagName ? new gq() : hq.G.cf.call(this, a);
    };
    _.g.Yc = function (a, b) {
      return _.nd(a.A(), b);
    };
    _.g.yd = function () {
      return 'VIpgJd-xl07Ob';
    };
    _.g.De = function (a) {
      hq.G.De.call(this, a);
      a = a.A();
      yl(a, 'haspopup', 'true');
    };
    var iq = function (a, b, c, d) {
      Jp.call(this, a, b);
      this.s = c ? 5 : 0;
      this.l = d || void 0;
    };
    _.x(iq, Jp);
    iq.prototype.o = function (a) {
      this.s = a;
    };
    iq.prototype.h = function (a, b, c) {
      var d = vl(this.element, this.j, a, b, null, c, 10, void 0, this.l);
      if (d & 496) {
        var e = jq(d, this.j);
        b = jq(d, b);
        d = vl(this.element, e, a, b, null, c, 10, void 0, this.l);
        d & 496 &&
          ((e = jq(d, e)),
          (b = jq(d, b)),
          vl(this.element, e, a, b, null, c, this.s, void 0, this.l));
      }
    };
    var jq = function (a, b) {
      a & 48 && (b ^= 4);
      a & 192 && (b ^= 1);
      return b;
    };
    var kq = function (a, b) {
      this.g = a instanceof N ? a : new N(a, b);
    };
    _.x(kq, ol);
    kq.prototype.h = function (a, b, c) {
      var d = _.E(a);
      var e = d.body;
      d = d.documentElement;
      d = new N(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
      e = this.g.x + d.x;
      d = this.g.y + d.y;
      var f = sl(a);
      e -= f.x;
      d -= f.y;
      ul(new N(e, d), a, b, c, null, null, void 0);
    };
    var lq = function (a, b) {
      kq.call(this, a, b);
    };
    _.x(lq, kq);
    lq.prototype.j = 0;
    lq.prototype.o = function (a) {
      this.j = a;
    };
    lq.prototype.h = function (a, b, c) {
      var d = uk(a);
      d = yk(d);
      var e = vi(_.F(a).U);
      e = new N(this.g.x + e.scrollLeft, this.g.y + e.scrollTop);
      var f = b,
        h = ul(e, a, f, c, d, 10, void 0);
      if (0 != (h & 496)) {
        if (h & 16 || h & 32) f ^= 4;
        if (h & 64 || h & 128) f ^= 1;
        h = ul(e, a, f, c, d, 10, void 0);
        0 != (h & 496) && ul(e, a, b, c, d, this.j, void 0);
      }
    };
    var mq = function (a, b, c) {
      _.M.call(this, c);
      this.Rb = b || bq.ea();
      this.Xb = a || 'vertical';
    };
    _.x(mq, _.M);
    _.g = mq.prototype;
    _.g.Fc = null;
    _.g.Rc = null;
    _.g.Rb = null;
    _.g.Xb = null;
    _.g.za = !0;
    _.g.Qb = !0;
    _.g.ec = !0;
    _.g.Aa = -1;
    _.g.Fa = null;
    _.g.Gc = !1;
    _.g.Eb = null;
    var nq = function (a) {
        return a.Fc || a.A();
      },
      qq = function (a, b) {
        if (a.ec) {
          var c = nq(a),
            d = a.ia;
          a.Fc = b;
          var e = nq(a);
          d && ((a.Fc = c), oq(a, !1), (a.Fc = b), pq(a).attach(e), oq(a, !0));
        } else throw Error('pa');
      },
      pq = function (a) {
        return a.Rc || (a.Rc = new Hl(nq(a)));
      };
    _.g = mq.prototype;
    _.g.N = function () {
      this.I = this.Rb.N(this);
    };
    _.g.rd = function () {
      return this.A();
    };
    _.g.ve = function (a) {
      return this.Rb.Ce(a);
    };
    _.g.da = function (a) {
      this.I = eq(this.Rb, this, a);
      'none' == a.style.display && (this.za = !1);
    };
    _.g.Y = function () {
      mq.G.Y.call(this);
      Vl(
        this,
        function (b) {
          b.ia && rq(this, b);
        },
        this,
      );
      var a = this.A();
      this.Rb.De(this);
      this.S(this.za, !0);
      S(this)
        .D(this, 'enter', this.hf)
        .D(this, 'highlight', this.jd)
        .D(this, 'unhighlight', this.nf)
        .D(this, 'open', this.Si)
        .D(this, 'close', this.Ji)
        .D(a, Aj.rc, this.Oh)
        .D(_.E(a), [Aj.sc, Aj.Sc], this.Ki)
        .D(
          a,
          [Aj.rc, Aj.sc, Aj.Sc, 'mouseover', 'mouseout', 'contextmenu'],
          this.Hi,
        );
      this.ec && oq(this, !0);
    };
    var oq = function (a, b) {
      var c = S(a),
        d = nq(a);
      b
        ? c.D(d, 'focus', a.jg).D(d, 'blur', a.zd).D(pq(a), 'key', a.ab)
        : c.sa(d, 'focus', a.jg).sa(d, 'blur', a.zd).sa(pq(a), 'key', a.ab);
    };
    _.g = mq.prototype;
    _.g.ca = function () {
      this.Yb(-1);
      this.Fa && sm(this.Fa, !1);
      this.Gc = !1;
      mq.G.ca.call(this);
    };
    _.g.L = function () {
      mq.G.L.call(this);
      this.Rc && (this.Rc.R(), (this.Rc = null));
      this.Rb = this.Fa = this.Eb = this.Fc = null;
    };
    _.g.hf = function () {
      return !0;
    };
    _.g.jd = function (a) {
      var b = Zl(this, a.target);
      if (-1 < b && b != this.Aa) {
        var c = sq(this);
        c && qm(c, !1);
        this.Aa = b;
        c = sq(this);
        this.Gc && pm(c, !0);
        this.Fa && c != this.Fa && (c.ra & 64 ? sm(c, !0) : sm(this.Fa, !1));
      }
      b = this.A();
      null != a.target.A() && yl(b, 'activedescendant', a.target.A().id);
    };
    _.g.nf = function (a) {
      a.target == sq(this) && (this.Aa = -1);
      this.A().removeAttribute('aria-activedescendant');
    };
    _.g.Si = function (a) {
      (a = a.target) &&
        a != this.Fa &&
        a.T() == this &&
        (this.Fa && sm(this.Fa, !1), (this.Fa = a));
    };
    _.g.Ji = function (a) {
      a.target == this.Fa && (this.Fa = null);
      var b = this.A(),
        c = a.target.A();
      b &&
        a.target.ka & 2 &&
        c &&
        ((a = ''), c && (a = c.id), yl(b, 'activedescendant', a));
    };
    _.g.Oh = function (a) {
      this.Qb && (this.Gc = !0);
      var b = nq(this);
      b && wj(b) && xj(b) ? b.focus() : a.preventDefault();
    };
    _.g.Ki = function () {
      this.Gc = !1;
    };
    _.g.Hi = function (a) {
      a: {
        var b = a.target;
        if (this.Eb)
          for (var c = this.A(); b && b !== c; ) {
            var d = b.id;
            if (d in this.Eb) {
              b = this.Eb[d];
              break a;
            }
            b = b.parentNode;
          }
        b = null;
      }
      if (b)
        switch (a.type) {
          case Aj.rc:
            b.Pc(a);
            break;
          case Aj.sc:
          case Aj.Sc:
            b.Cc(a);
            break;
          case 'mouseover':
            b.V(a);
            break;
          case 'mouseout':
            b.ba(a);
            break;
          case 'contextmenu':
            b.B(a);
        }
    };
    _.g.jg = function () {};
    _.g.zd = function () {
      this.Yb(-1);
      this.Gc = !1;
      this.Fa && sm(this.Fa, !1);
    };
    _.g.ab = function (a) {
      return this.isEnabled() &&
        this.isVisible() &&
        (0 != Wl(this) || this.Fc) &&
        this.Ee(a)
        ? (a.preventDefault(), a.stopPropagation(), !0)
        : !1;
    };
    _.g.Ee = function (a) {
      var b = sq(this);
      if (
        (b && 'function' == typeof b.ab && b.ab(a)) ||
        (this.Fa &&
          this.Fa != b &&
          'function' == typeof this.Fa.ab &&
          this.Fa.ab(a))
      )
        return !0;
      if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
      switch (a.keyCode) {
        case 27:
          if (this.ec) nq(this).blur();
          else return !1;
          break;
        case 36:
          tq(this);
          break;
        case 35:
          uq(this);
          break;
        case 38:
          if ('vertical' == this.Xb) vq(this);
          else return !1;
          break;
        case 37:
          if ('horizontal' == this.Xb) Yl(this) ? wq(this) : vq(this);
          else return !1;
          break;
        case 40:
          if ('vertical' == this.Xb) wq(this);
          else return !1;
          break;
        case 39:
          if ('horizontal' == this.Xb) Yl(this) ? vq(this) : wq(this);
          else return !1;
          break;
        default:
          return !1;
      }
      return !0;
    };
    var rq = function (a, b) {
      var c = b.A();
      c = c.id || (c.id = b.ib());
      a.Eb || (a.Eb = {});
      a.Eb[c] = b;
    };
    _.g = mq.prototype;
    _.g.Uc = function (a, b) {
      mq.G.Uc.call(this, a, b);
    };
    _.g.Ke = function (a, b, c) {
      a.qd |= 2;
      a.qd |= 64;
      a.Ga(32, !1);
      mm(a, !1);
      var d = a.T() == this ? Zl(this, a) : -1;
      mq.G.Ke.call(this, a, b, c);
      a.ia && this.ia && rq(this, a);
      a = d;
      -1 == a && (a = Wl(this));
      a == this.Aa
        ? (this.Aa = Math.min(Wl(this) - 1, b))
        : a > this.Aa && b <= this.Aa
        ? this.Aa++
        : a < this.Aa && b > this.Aa && this.Aa--;
    };
    _.g.we = function (a, b) {
      if ((a = 'string' === typeof a ? Rl(this, a) : a)) {
        var c = Zl(this, a);
        -1 != c &&
          (c == this.Aa
            ? (qm(a, !1), (this.Aa = -1))
            : c < this.Aa && this.Aa--);
        var d = a.A();
        d &&
          d.id &&
          this.Eb &&
          ((c = this.Eb), (d = d.id), d in c && delete c[d]);
      }
      a = mq.G.we.call(this, a, b);
      mm(a, !0);
      return a;
    };
    _.g.isVisible = function () {
      return this.za;
    };
    _.g.S = function (a, b) {
      if (b || (this.za != a && this.dispatchEvent(a ? 'show' : 'hide'))) {
        this.za = a;
        var c = this.A();
        c &&
          (_.O(c, a),
          this.ec && cq(nq(this), this.Qb && this.za),
          b || this.dispatchEvent(this.za ? 'aftershow' : 'afterhide'));
        return !0;
      }
      return !1;
    };
    _.g.isEnabled = function () {
      return this.Qb;
    };
    _.g.qa = function (a) {
      this.Qb != a &&
        this.dispatchEvent(a ? 'enable' : 'disable') &&
        (a
          ? ((this.Qb = !0),
            Vl(this, function (b) {
              b.Jh ? delete b.Jh : b.qa(!0);
            }))
          : (Vl(this, function (b) {
              b.isEnabled() ? b.qa(!1) : (b.Jh = !0);
            }),
            (this.Gc = this.Qb = !1)),
        this.ec && cq(nq(this), a && this.za));
    };
    var xq = function (a, b) {
      b != a.ec && a.ia && oq(a, b);
      a.ec = b;
      a.Qb && a.za && cq(nq(a), b);
    };
    mq.prototype.Yb = function (a) {
      (a = Xl(this, a)) ? qm(a, !0) : -1 < this.Aa && qm(sq(this), !1);
    };
    var sq = function (a) {
        return Xl(a, a.Aa);
      },
      tq = function (a) {
        yq(
          a,
          function (b, c) {
            return (b + 1) % c;
          },
          Wl(a) - 1,
        );
      },
      uq = function (a) {
        yq(
          a,
          function (b, c) {
            b--;
            return 0 > b ? c - 1 : b;
          },
          0,
        );
      },
      wq = function (a) {
        yq(
          a,
          function (b, c) {
            return (b + 1) % c;
          },
          a.Aa,
        );
      },
      vq = function (a) {
        yq(
          a,
          function (b, c) {
            b--;
            return 0 > b ? c - 1 : b;
          },
          a.Aa,
        );
      },
      yq = function (a, b, c) {
        c = 0 > c ? Zl(a, a.Fa) : c;
        var d = Wl(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d; ) {
          var f = Xl(a, c);
          if (f && a.ug(f)) {
            a.Yb(c);
            break;
          }
          e++;
          c = b.call(a, c, d);
        }
      };
    mq.prototype.ug = function (a) {
      return a.isVisible() && a.isEnabled() && !!(a.ra & 2);
    };
    var zq = function () {};
    _.x(zq, $l);
    Ai(zq);
    zq.prototype.ua = function () {
      return 'VIpgJd-wckcKc';
    };
    var Aq = function (a, b, c) {
      U.call(this, a, c || zq.ea(), b);
      this.Ga(1, !1);
      this.Ga(2, !1);
      this.Ga(4, !1);
      this.Ga(32, !1);
      this.ka = 1;
    };
    _.x(Aq, U);
    jm('VIpgJd-wckcKc', function () {
      return new Aq(null);
    });
    jm('VIpgJd-gqMrKb', function () {
      return new gq();
    });
    var Bq = function (a, b) {
      mq.call(this, 'vertical', b || hq.ea(), a);
      xq(this, !1);
    };
    _.x(Bq, mq);
    _.g = Bq.prototype;
    _.g.Le = !0;
    _.g.Yc = function (a) {
      if (this.Rb.Yc(this, a)) return !0;
      for (var b = 0, c = Wl(this); b < c; b++) {
        var d = Xl(this, b);
        if ('function' == typeof d.Yc && d.Yc(a)) return !0;
      }
      return !1;
    };
    _.g.S = function (a, b, c) {
      (b = Bq.G.S.call(this, a, b)) &&
        a &&
        this.ia &&
        this.Le &&
        nq(this).focus();
      a && c && 'number' === typeof c.clientX
        ? (this.la = new N(c.clientX, c.clientY))
        : (this.la = null);
      return b;
    };
    _.g.hf = function (a) {
      this.Le && nq(this).focus();
      return Bq.G.hf.call(this, a);
    };
    _.g.ug = function (a) {
      return a.isEnabled() && a.isVisible() && !!(a.ra & 2);
    };
    _.g.da = function (a) {
      for (
        var b = this.Rb,
          c = _.ti(this.g.U, 'DIV', b.yd() + '-bN97Pc', a),
          d = c.length,
          e = 0;
        e < d;
        e++
      )
        dq(b, this, c[e]);
      Bq.G.da.call(this, a);
    };
    _.g.Ee = function (a) {
      var b = Bq.G.Ee.call(this, a);
      b ||
        Vl(
          this,
          function (c) {
            !b &&
              c.Bi &&
              c.ih == a.keyCode &&
              (this.isEnabled() && this.Yb(Zl(this, c)), (b = c.ab(a)));
          },
          this,
        );
      return b;
    };
    _.g.Yb = function (a) {
      Bq.G.Yb.call(this, a);
      if ((a = Xl(this, a))) {
        var b = a.A();
        a = this.A() || vi(document);
        var c = a || vi(document);
        var d = xk(b),
          e = xk(c),
          f = Lk(c);
        if (c == vi(document)) {
          var h = d.x - c.scrollLeft;
          d = d.y - c.scrollTop;
          !_.B || 10 <= Number(_.zc) || ((h += f.left), (d += f.top));
        } else (h = d.x - e.x - f.left), (d = d.y - e.y - f.top);
        b = zk(b);
        f = c.clientHeight - b.height;
        e = c.scrollLeft;
        var k = c.scrollTop;
        e += Math.min(h, Math.max(h - (c.clientWidth - b.width), 0));
        k += Math.min(d, Math.max(d - f, 0));
        c = new N(e, k);
        a.scrollLeft = c.x;
        a.scrollTop = c.y;
      }
    };
    var Cq = function (a, b) {
      Bq.call(this, a, b);
      this.Le = !0;
      xq(this, !0);
      this.S(!1, !0);
      this.h = new _.rf();
    };
    _.x(Cq, Bq);
    _.g = Cq.prototype;
    _.g.Hh = !1;
    _.g.bh = 0;
    _.g.Ua = null;
    _.g.da = function (a) {
      Cq.G.da.call(this, a);
      (a = a.getAttribute('for') || a.htmlFor) && this.attach(this.g.A(a), 1);
    };
    _.g.Y = function () {
      Cq.G.Y.call(this);
      this.h.forEach(this.Gd, this);
      var a = S(this);
      a.D(this, 'action', this.Df);
      a.D(this.g.U, 'mousedown', this.wb, !0);
    };
    _.g.attach = function (a, b, c, d, e) {
      (a && _.tf(this.h, _.za(a))) ||
        ((b = this.Te(a, b, c, d, e)),
        this.ia && this.Gd(b),
        (a = _.tb(this.Bj, a)),
        this.A() && S(this).D(this.A(), 'keydown', a));
    };
    _.g.Bj = function (a, b) {
      if (27 == b.keyCode) a.focus();
      else if ((a = Xl(this, this.Aa))) {
        var c = a.A();
        a = new _.zd(b.g, c);
        a.target = c;
        if (32 == b.keyCode || 13 == b.keyCode)
          if (_.Bd(c)) _.Xd(c, 'keydown', !1, a);
          else if ((c = _.Pd(c)))
            if ((c = c.g['keydown'.toString()])) {
              c = c.concat();
              for (var d = 0; d < c.length; d++) {
                var e = c[d];
                e && 0 == e.capture && !e.Kc && _.Vd(e, a);
              }
            }
        32 == b.keyCode && this.Bb();
      }
    };
    _.g.Te = function (a, b, c, d, e) {
      if (!a) return null;
      b = { I: a, Eh: b, yj: c, bd: d ? 'contextmenu' : 'mousedown', xf: e };
      this.h.set(_.za(a), b);
      return b;
    };
    _.g.Gd = function (a) {
      S(this).D(a.I, a.bd, this.ke);
      'contextmenu' != a.bd && S(this).D(a.I, 'keydown', this.Dj);
    };
    _.g.Pd = function () {
      if (this.ia)
        for (var a = this.h.Ub(), b = 0; b < a.length; b++)
          this.We(this.h.get(a[b]));
      xi(this.h);
    };
    _.g.We = function (a) {
      S(this).sa(a.I, a.bd, this.ke);
    };
    _.g.Ad = function (a, b, c) {
      b = void 0 !== a.Eh ? new iq(a.I, a.Eh, !0) : new lq(b, c);
      b.o && b.o(5);
      var d = a.yj;
      c = a.xf;
      var e = a.I;
      a = this.isVisible();
      (this.isVisible() || 150 > Date.now() - this.bh) && this.Hh
        ? this.Bb()
        : ((this.Ua = e || null),
          this.dispatchEvent('beforeshow') &&
            ((d = 'undefined' != typeof d ? d : 8),
            a || (this.A().style.visibility = 'hidden'),
            _.O(this.A(), !0),
            b.h(this.A(), d, c),
            a || (this.A().style.visibility = 'visible'),
            this.Yb(-1),
            this.S(!0)));
    };
    _.g.Bb = function () {
      this.isVisible() &&
        (this.S(!1),
        this.isVisible() || ((this.bh = Date.now()), (this.Ua = null)));
    };
    _.g.Df = function () {
      this.Bb();
    };
    _.g.ke = function (a) {
      Dq(this, a);
    };
    _.g.Dj = function (a) {
      (32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode) || Dq(this, a);
      40 == a.keyCode && tq(this);
    };
    var Dq = function (a, b) {
      for (var c = a.h.Ub(), d = 0; d < c.length; d++) {
        var e = a.h.get(c[d]);
        if (e.I == b.currentTarget) {
          a.Ad(e, b.clientX, b.clientY);
          b.preventDefault();
          b.stopPropagation();
          break;
        }
      }
    };
    Cq.prototype.wb = function (a) {
      this.isVisible() && !this.Yc(a.target) && this.Bb();
    };
    Cq.prototype.zd = function (a) {
      Cq.G.zd.call(this, a);
      this.Bb();
    };
    Cq.prototype.L = function () {
      Cq.G.L.call(this);
      this.h && (xi(this.h), delete this.h);
    };
    var Z = function (a, b, c) {
      Cq.call(this, b, c);
      this.s = new _.rf();
      this.l = a || 5;
      this.B = null;
      this.J = !1;
      this.o = Array(this.l);
      this.aa = Array(this.l);
      this.O = Gm.ea();
      this.V = en.ea();
      this.ba = null;
      this.Hh = !0;
    };
    _.x(Z, Cq);
    var Eq = '';
    Z.prototype.N = function () {
      Z.G.N.call(this);
      for (var a = 0; a < this.l; ++a) this.Uc(new aq(''), !0);
    };
    Z.prototype.ja = function (a) {
      Z.G.ja.call(this, a);
      _.Q(this.A(), 'alt-menu');
    };
    Z.prototype.Vf = function (a) {
      a = this.s.get(_.za(a));
      for (var b = 0; b < V(a, 2) && b < this.l; ++b) {
        var c = Xl(this, b);
        c.j(cn(Sn(a, b), 0));
        c.Ma(b);
        c.S(!0, !0);
      }
      for (; b < this.l; ++b) Xl(this, b).S(!1);
    };
    var Fq = function (a, b, c) {
      a.s.set(_.za(b), c);
      a.attach(b, 9, 8, !1, new ok(-2, 1, -2, 1));
    };
    _.g = Z.prototype;
    _.g.Pd = function () {
      Z.G.Pd.call(this);
      xi(this.s);
    };
    _.g.S = function (a, b) {
      var c = this.Ua;
      this.ba = c;
      a && null != c
        ? (Gq(this, c), Mm(this.O, 'altshow'), fn(this.V, 207))
        : null != this.B && Gp(this.B, 0, 0);
      null != c && (a ? this.Ue(c) : this.Re(c));
      b = Z.G.S.call(this, a, b);
      a && null != this.A() && Dk(this.A(), !1);
      return b;
    };
    _.g.xb = function () {
      if (null != this.ba) {
        var a = _.td(this.ba);
        if (null != a) return a;
      }
      return '';
    };
    _.g.Bb = function () {
      Z.G.Bb.call(this);
      if (this.J)
        for (var a = 0; a < this.o.length; a++) {
          var b = this.o[a];
          _.lg(b.l);
          b.C();
          b.B(-1);
          b.C();
          b.S(!1);
        }
    };
    _.g.Ue = function (a) {
      _.Q(a, 'trans-target');
      a.title = '';
    };
    _.g.Re = function (a) {
      _.ml(a, 'trans-target');
      a.title = Eq;
    };
    _.g.ab = function (a) {
      if (
        a.shiftKey ||
        a.ctrlKey ||
        a.altKey ||
        36 == a.keyCode ||
        35 == a.keyCode
      )
        return !1;
      var b = Z.G.ab.call(this, a);
      if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
        var c = Ck(this.Ua.parentNode.parentNode),
          d = null;
        if ((!c && 37 == a.keyCode) || (c && 39 == a.keyCode)) d = !1;
        if ((!c && 39 == a.keyCode) || (c && 37 == a.keyCode)) d = !0;
        if (
          this.Me(d) &&
          ((c = this.Ua),
          (c = d
            ? void 0 !== c.nextElementSibling
              ? c.nextElementSibling
              : _.ld(c.nextSibling, !0)
            : void 0 !== c.previousElementSibling
            ? c.previousElementSibling
            : _.ld(c.previousSibling, !1)) && c != this.Ua)
        )
          return (
            this.Bb(),
            this.xh(d),
            this.Ad(c ? this.h.get(_.za(c)) : null, 0, 0),
            Hq(this),
            a.preventDefault(),
            a.stopPropagation(),
            !0
          );
      }
      return b;
    };
    _.g.Ad = function (a, b, c) {
      Ck((a.I || this.Ua).parentNode.parentNode)
        ? _.L(this.A(), 'direction', 'rtl')
        : _.L(this.A(), 'direction', '');
      if (this.J)
        for (var d = 0; d < this.o.length; d++)
          Iq(this, d), _.od(this.o[d].j, '...');
      this.Vf(a.I);
      Z.G.Ad.call(this, a, b, c);
    };
    var Jq = function (a, b, c) {
        !a.J || b >= a.l || '' == c || (_.od(a.o[b].j, c), Iq(a, b));
      },
      Iq = function (a, b) {
        var c = a.o[b];
        vl(Xl(a, b).A(), 12, c.A(), 8, new N(1, 0));
      };
    _.g = Z.prototype;
    _.g.jd = function (a) {
      Z.G.jd.call(this, a);
      var b = this.Ua;
      null != b &&
        (Mm(this.O, 'altmenuhl'),
        fn(this.V, 209),
        Gq(this, b),
        (a = this.Td(a.target)),
        -1 != a &&
          a != this.l &&
          (_.lg(this.aa[a]),
          (this.aa[a] = _.kg(this.wj, 300, this)),
          this.J &&
            ((b = this.o[a]),
            Ck(this.Ua.parentNode.parentNode)
              ? (_.Q(b.A(), 'rtl'), _.L(b.A(), 'direction', 'rtl'))
              : (_.ml(b.A(), 'rtl'), _.L(b.A(), 'direction', '')),
            Iq(this, a),
            _.lg(b.l),
            0 == b.g ? (b.l = _.kg((0, _.w)(b.B, b, 1), 300)) : b.B(1))));
    };
    _.g.wj = function () {
      Mm(this.O, 'altmenuhold');
      fn(this.V, 208);
    };
    _.g.nf = function (a) {
      Z.G.nf.call(this, a);
      a = this.Td(a.target);
      -1 != a && a != this.l && (_.lg(this.aa[a]), this.J && this.o[a].K());
    };
    _.g.Td = function (a) {
      return Zl(this, a);
    };
    _.g.Me = function () {
      return !0;
    };
    _.g.xh = function () {};
    _.g.Te = function (a, b, c, d, e) {
      (a = Z.G.Te.call(this, a, b, c, d, e)) &&
        'mousedown' == a.bd &&
        (a.bd = 'click');
      return a;
    };
    _.g.Gd = function (a) {
      Z.G.Gd.call(this, a);
      S(this).D(a.I, 'mouseover', this.$a);
      S(this).D(a.I, 'mouseout', this.X);
      S(this).D(a.I, 'contextmenu', this.Sa);
      S(this).D(a.I, 'mousemove', this.Ta);
    };
    _.g.We = function (a) {
      Z.G.We.call(this, a);
      S(this).sa(a.I, 'mouseover', this.$a);
      S(this).sa(a.I, 'mouseout', this.X);
      S(this).sa(a.I, 'contextmenu', this.Sa);
      S(this).sa(a.I, 'mousemove', this.Ta);
    };
    var Gq = function (a, b) {
        if (null != a.B && (b = a.s.get(_.za(b))) && ((a = a.B), a.h))
          for (
            var c = a.I && (a.I.value || _.td(a.I)),
              d = -1,
              e = -1,
              f = !1,
              h = 0;
            h < V(a.h, 5);
            h++
          ) {
            var k = Vn(a.h, h);
            if (
              0 != V(k, 2) &&
              (0 == bn(k, 5) &&
                ((f = c.indexOf(cn(k, 4), e + 1)),
                0 <= f
                  ? ((d = f), (e = d + cn(k, 4).length), (f = !0))
                  : (f = !1)),
              Vn(a.h, h).g == b.g)
            ) {
              if (f) {
                c = [];
                for (e = 0; e < V(b, 3); ++e)
                  c.push({
                    cd: d + bn(new Qn(dn(b, 3, e)), 0),
                    Zf: d + bn(new Qn(dn(b, 3, e)), 1),
                  });
                Gp(a, 0, 0, void 0, c);
              } else
                (d = c.indexOf(cn(b, 0))),
                  0 <= d && Gp(a, d, d + cn(b, 0).length);
              break;
            }
          }
      },
      Kq = function (a, b) {
        b
          ? Fj(
              a.h.Ha(!1),
              function (c) {
                '' == this.g.fg(c.I) &&
                  (_.Q(c.I, 'trans-target-empty'), this.g.nb(c.I, '_'));
                return !0;
              },
              a,
            )
          : Fj(
              a.h.Ha(!1),
              function (c) {
                kl(c.I, 'trans-target-empty') &&
                  (_.ml(c.I, 'trans-target-empty'), this.g.nb(c.I, ''));
                return !0;
              },
              a,
            );
      };
    Z.prototype.$a = function (a) {
      !Jn() &&
        this.isEnabled() &&
        (_.Q(a.target, 'trans-target-highlight'),
        Gq(this, a.target),
        Kq(this, !0),
        Mm(this.O, 'althighlight'),
        fn(this.V, 206));
    };
    Z.prototype.X = function (a) {
      _.ml(a.target, 'trans-target-highlight');
      null == this.B || this.isVisible() || Gp(this.B, 0, 0);
      Kq(this, !1);
    };
    Z.prototype.Ta = function (a) {
      Jn() && this.X(a);
    };
    Z.prototype.Sa = function (a) {
      Jn() || (this.X(a), xn(vn(a.target), void 0).select());
    };
    var Hq = function (a) {
      Fj(
        a.h.Ha(!1),
        function (b) {
          _.ml(b.I, 'trans-target-highlight');
          return !0;
        },
        a,
      );
    };
    Z.prototype.Df = function (a) {
      a && a.currentTarget && a.currentTarget.Ua && (a.l = a.currentTarget.Ua);
      Z.G.Df.call(this, a);
    };
    Z.prototype.ke = function (a) {
      Jn() ? Hq(this) : this.Qb && Z.G.ke.call(this, a);
    };
    var Lq = function (a, b, c) {
      this.xa = this.j = null;
      Z.call(this, a, b, c);
    };
    _.x(Lq, Z);
    _.g = Lq.prototype;
    _.g.xh = function (a) {
      this.j = a;
    };
    _.g.S = function (a, b) {
      b = Lq.G.S.call(this, a, b);
      this.j = null;
      a
        ? (this.xa = this.xb())
        : null != this.xa &&
          this.xa != this.xb() &&
          this.dispatchEvent(new _.wd('action', this));
      return b;
    };
    _.g.Ue = function (a) {
      Lq.G.Ue.call(this, a);
      _.Q(a, 'trans-edit');
      a.contentEditable = !0;
      qq(this, a);
      nq(this).focus();
      yj(nq(this), !0);
      S(this).D(a, 'keydown', this.Ng);
      S(this).D(a, 'mouseout', this.Xd);
      S(this).D(a, 'mouseover', this.Xd);
      if (null != this.j) {
        a = xn(vn(a), void 0);
        var b = this.j ? a.fb() : a.vb(),
          c = ln(a);
        a = c;
        var d = b,
          e = new wn();
        e.l = En(a, d, c, b);
        if (qj(a) && !lj(a)) {
          var f = a.parentNode;
          d = Array.prototype.indexOf.call(f.childNodes, a);
          a = f;
        }
        qj(c) &&
          !lj(c) &&
          ((f = c.parentNode),
          (b = Array.prototype.indexOf.call(f.childNodes, c)),
          (c = f));
        e.l
          ? ((e.h = c), (e.s = b), (e.j = a), (e.o = d))
          : ((e.h = a), (e.s = d), (e.j = c), (e.o = b));
        e.select();
      }
    };
    _.g.Re = function (a) {
      Lq.G.Re.call(this, a);
      _.ml(a, 'trans-edit');
      a.contentEditable = !1;
      nq(this) && yj(nq(this), !1);
      S(this).sa(a, 'keydown', this.Ng);
      S(this).sa(a, 'mouseout', this.Xd);
      S(this).sa(a, 'mouseover', this.Xd);
    };
    _.g.Xd = function () {
      var a = In();
      null == a ||
        (a.eb() == a.ub() && a.fb() == a.vb()) ||
        this.S(a.eb() == a.ub());
    };
    _.g.Ng = function (a) {
      for (var b = 0; b < this.l; ++b) Xl(this, b).S(!1);
      if (13 == a.keyCode || 3 == a.keyCode)
        return null === sq(this)
          ? (this.Bb(), a.stopPropagation(), a.preventDefault(), !0)
          : !1;
      null === sq(this) ||
        (!Cl(a) && 37 != a.keyCode && 39 != a.keyCode) ||
        (this.Ua.focus(), this.Yb(Zl(this, null)));
      return !1;
    };
    _.g.Me = function (a) {
      var b = In();
      if (b.eb() == b.ub() && b.fb() == b.vb()) {
        var c = b.sf() ? b.fb() : b.vb();
        b = xn(vn(ln(b)), void 0);
        if ((!a && c == b.fb()) || (a && c == b.vb())) return !0;
      }
      return !1;
    };
    var Mq = function (a, b, c) {
      Z.call(this, a, b, c);
      this.j = null;
    };
    _.u(Mq, Z);
    _.g = Mq.prototype;
    _.g.ja = function (a) {
      Z.prototype.ja.call(this, a);
      this.j = new Nq('');
      this.Uc(this.j, !0);
    };
    _.g.Vf = function (a) {
      Z.prototype.Vf.call(this, a);
      this.j.Gb().value = this.g.fg(a);
    };
    _.g.S = function (a, b) {
      b = Z.prototype.S.call(this, a, b);
      a &&
        null != this.A() &&
        (nq(this) == this.j.Gb() || nq(this) == this.j.dd()) &&
        qm(this.j, !0);
      return b;
    };
    _.g.jd = function (a) {
      Z.prototype.jd.call(this, a);
      a.target == this.j ? qq(this, this.j.Gb()) : qq(this, this.A());
      nq(this).focus();
      nq(this).tabIndex = 0;
    };
    _.g.Td = function (a) {
      return a == this.j ? -1 : Z.prototype.Td.call(this, a);
    };
    _.g.ab = function (a) {
      return 9 == a.keyCode
        ? (this.j.ka & 2
            ? (nq(this) == this.j.Gb()
                ? qq(this, this.j.dd())
                : qq(this, this.j.Gb()),
              nq(this).focus(),
              (nq(this).tabIndex = 0))
            : qm(this.j, !0),
          a.preventDefault(),
          a.stopPropagation(),
          !0)
        : Z.prototype.ab.call(this, a);
    };
    _.g.Me = function () {
      return null === sq(this) || !(sq(this) instanceof Nq);
    };
    var Nq = function (a, b, c) {
      U.call(this, a, c || Oq.ea(), b);
      this.Ga(4, !1);
    };
    _.u(Nq, U);
    _.g = Nq.prototype;
    _.g.Pc = function (a) {
      a.target == this.dd() && this.dispatchEvent('action');
    };
    _.g.Y = function () {
      U.prototype.Y.call(this);
      S(this).D(this.Gb(), 'keydown', function (a) {
        32 == a.keyCode && a.stopPropagation();
      });
    };
    _.g.Gb = function () {
      return this.h.Gb(this.A());
    };
    _.g.dd = function () {
      return this.h.dd(this.A());
    };
    _.g.xb = function () {
      return this.Gb().value;
    };
    var Oq = function () {};
    _.u(Oq, $l);
    Oq.prototype.N = function (a) {
      var b = a.g.N('INPUT', {
          value: a.wa(),
          id: 'alt-input-text',
          type: 'text',
        }),
        c = a.g.N('INPUT', {
          value: Pq,
          id: 'alt-input-submit',
          class: Qq,
          type: 'button',
        });
      return a.g.N('DIV', { id: 'alt-input' }, b, c);
    };
    Oq.prototype.Gb = function (a) {
      return a.firstChild;
    };
    Oq.prototype.dd = function (a) {
      return a.firstChild.nextSibling;
    };
    Oq.ea = function () {
      return Al(Oq);
    };
    var Pq = '',
      Qq = '';
    var Rq = function () {};
    _.x(Rq, $l);
    Ai(Rq);
    _.g = Rq.prototype;
    _.g.oc = function () {};
    _.g.cb = function (a, b) {
      mm(a, !1);
      um(a);
      a.Ga(32, !1);
      Rq.G.cb.call(this, a, b);
      a.j(b.value);
      return b;
    };
    _.g.N = function (a) {
      mm(a, !1);
      um(a);
      a.Ga(32, !1);
      return a.g.N(
        'TEXTAREA',
        { class: cm(this, a).join(' '), disabled: !a.isEnabled() },
        a.wa() || '',
      );
    };
    _.g.sd = function (a) {
      return 'TEXTAREA' == a.tagName;
    };
    _.g.ye = _.v;
    _.g.xe = function (a) {
      return a.isEnabled();
    };
    _.g.pc = _.v;
    _.g.Nc = function (a, b, c) {
      Rq.G.Nc.call(this, a, b, c);
      (a = a.A()) && 1 == b && (a.disabled = c);
    };
    _.g.sb = _.v;
    _.g.Mc = function (a, b) {
      a && (a.value = b);
    };
    _.g.ua = function () {
      return 'VIpgJd-B7I4Od';
    };
    var Sq = function (a, b, c) {
      U.call(this, a, b || Rq.ea(), c);
      mm(this, !1);
      this.Fd = !0;
      (b = this.A()) && this.h.td(b, !0);
      this.Dc = '' != a;
      a || (this.ac = '');
    };
    _.x(Sq, U);
    var Tq = !(_.B && !(11 <= Number(_.zc)));
    _.g = Sq.prototype;
    _.g.Ec = !1;
    _.g.ae = !1;
    _.g.Dc = !1;
    _.g.Hb = 0;
    _.g.hh = 0;
    _.g.Cf = 0;
    _.g.Vg = !1;
    _.g.ie = !1;
    _.g.Qf = !1;
    _.g.Pf = !1;
    _.g.Jc = '';
    var Uq = function (a) {
        return a.o.top + a.o.bottom + a.aa.top + a.aa.bottom;
      },
      Vq = function (a) {
        var b = a.Cf,
          c = a.A();
        b && c && a.ie && (b -= Uq(a));
        return b;
      },
      Xq = function (a) {
        a.Cf = 50;
        Wq(a);
      },
      Yq = function (a) {
        a.hh = 50;
        Wq(a);
      };
    Sq.prototype.Ma = function (a) {
      this.j(String(a));
    };
    Sq.prototype.Qa = function () {
      return this.A().value != this.Jc || Zq(this) || this.Dc
        ? this.A().value
        : '';
    };
    Sq.prototype.j = function (a) {
      Sq.G.j.call(this, a);
      this.Dc = '' != a;
      Wq(this);
    };
    Sq.prototype.qa = function (a) {
      Sq.G.qa.call(this, a);
      this.A().disabled = !a;
    };
    var Wq = function (a) {
        a.A() && a.O();
      },
      Zq = function (a) {
        return 'placeholder' in a.A();
      },
      $q = function (a) {
        a.Jc &&
          (Zq(a)
            ? (a.A().placeholder = a.Jc)
            : !a.A() ||
              a.Dc ||
              a.ae ||
              (_.Q(a.A(), 'B7I4Od-LwH6nd-YPqjbf'), (a.A().value = a.Jc)));
      };
    Sq.prototype.Y = function () {
      Sq.G.Y.call(this);
      var a = this.A();
      _.L(a, {
        overflowY: 'hidden',
        overflowX: 'auto',
        boxSizing: 'border-box',
        MsBoxSizing: 'border-box',
        WebkitBoxSizing: 'border-box',
        MozBoxSizing: 'border-box',
      });
      this.o = Ik(a);
      this.aa = Lk(a);
      S(this)
        .D(a, 'scroll', this.O)
        .D(a, 'focus', this.O)
        .D(a, 'keyup', this.O)
        .D(a, 'mouseup', this.xa)
        .D(a, 'blur', this.la);
      $q(this);
      Wq(this);
    };
    var ar = function (a) {
        if (!a.Vg) {
          var b = a.A().cloneNode(!1);
          _.L(b, {
            position: 'absolute',
            height: 'auto',
            top: '-9999px',
            margin: '0',
            padding: '1px',
            border: '1px solid #000',
            overflow: 'hidden',
          });
          a.g.U.body.appendChild(b);
          var c = b.scrollHeight;
          b.style.padding = '10px';
          var d = b.scrollHeight;
          a.Qf = d > c;
          b.style.borderWidth = '10px';
          a.Pf = b.scrollHeight > d;
          b.style.height = '100px';
          100 != b.offsetHeight && (a.ie = !0);
          _.pj(b);
          a.Vg = !0;
        }
        b = a.A();
        isNaN(a.o.top) && ((a.o = Ik(b)), (a.aa = Lk(b)));
        c = a.A().scrollHeight;
        var e = a.A();
        d = e.offsetHeight - e.clientHeight;
        if (!a.Qf) {
          var f = a.o;
          d -= f.top + f.bottom;
        }
        a.Pf || ((e = Lk(e)), (d -= e.top + e.bottom));
        c += 0 < d ? d : 0;
        a.ie
          ? (c -= Uq(a))
          : (a.Qf || ((d = a.o), (c += d.top + d.bottom)),
            a.Pf || ((a = Lk(b)), (c += a.top + a.bottom)));
        return c;
      },
      br = function (a, b) {
        a.Hb != b && ((a.Hb = b), (a.A().style.height = b + 'px'));
      },
      cr = function (a) {
        var b = a.A();
        b.style.height = 'auto';
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.Hb = 0;
      };
    Sq.prototype.la = function () {
      Zq(this) ||
        ((this.ae = !1), '' == this.A().value && ((this.Dc = !1), $q(this)));
    };
    Sq.prototype.O = function (a) {
      if (!this.Ec) {
        var b = this.A();
        !Zq(this) &&
          a &&
          'focus' == a.type &&
          (b.value == this.Jc &&
            this.Jc &&
            !this.ae &&
            (_.ml(b, 'B7I4Od-LwH6nd-YPqjbf'), (b.value = '')),
          (this.ae = !0),
          (this.Dc = '' != b.value));
        var c = !1;
        this.Ec = !0;
        a = this.Hb;
        if (b.scrollHeight) {
          var d = !1,
            e = !1,
            f = ar(this),
            h = b.offsetHeight,
            k = Vq(this);
          var l = this.hh;
          var m = this.A();
          l && m && this.ie && (l -= Uq(this));
          k && f < k
            ? (br(this, k), (d = !0))
            : l && f > l
            ? (br(this, l), (b.style.overflowY = ''), (e = !0))
            : h != f
            ? br(this, f)
            : this.Hb || (this.Hb = f);
          d || e || !Tq || (c = !0);
        } else cr(this);
        this.Ec = !1;
        c &&
          ((b = this.A()),
          this.Ec ||
            ((this.Ec = !0),
            (e = b.scrollHeight)
              ? ((f = ar(this)),
                (c = Vq(this)),
                (c && f <= c) ||
                  ((d = this.o),
                  (b.style.paddingTop = d.top + 1 + 'px'),
                  ar(this) == f &&
                    ((b.style.paddingTop = d.top + e + 'px'),
                    (b.scrollTop = 0),
                    (e = ar(this) - e),
                    e >= c ? br(this, e) : br(this, c)),
                  (b.style.paddingTop = d.top + 'px')))
              : cr(this),
            (this.Ec = !1)));
        a != this.Hb && this.dispatchEvent('resize');
      }
    };
    Sq.prototype.xa = function () {
      var a = this.A(),
        b = a.offsetHeight;
      a.filters &&
        a.filters.length &&
        (a = a.filters.item('DXImageTransform.Microsoft.DropShadow')) &&
        (b -= a.offX);
      b != this.Hb && (this.Hb = this.Cf = b);
    };
    var dr = function (a, b) {
        this.h = b;
        for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
          var f = a[e] | 0;
          (d && f == b) || ((c[e] = f), (d = !1));
        }
        this.g = c;
      },
      er = {},
      fr = function (a) {
        return -128 <= a && 128 > a
          ? _.cc(er, a, function (b) {
              return new dr([b | 0], 0 > b ? -1 : 0);
            })
          : new dr([a | 0], 0 > a ? -1 : 0);
      },
      ir = function (a) {
        if (isNaN(a) || !isFinite(a)) return gr;
        if (0 > a) return hr(ir(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++)
          (b[d] = (a / c) | 0), (c *= 4294967296);
        return new dr(b, 0);
      },
      gr = fr(0),
      jr = fr(1),
      kr = fr(16777216),
      mr = function (a) {
        if (lr(a)) return -mr(hr(a));
        for (var b = 0, c = 1, d = 0; d < a.g.length; d++) {
          var e = nr(a, d);
          b += (0 <= e ? e : 4294967296 + e) * c;
          c *= 4294967296;
        }
        return b;
      };
    dr.prototype.toString = function (a) {
      a = a || 10;
      if (2 > a || 36 < a) throw Error('qa`' + a);
      if (or(this)) return '0';
      if (lr(this)) return '-' + hr(this).toString(a);
      for (var b = ir(Math.pow(a, 6)), c = this, d = ''; ; ) {
        var e = pr(c, b).g;
        c = qr(c, rr(e, b));
        var f = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(a);
        c = e;
        if (or(c)) return f + d;
        for (; 6 > f.length; ) f = '0' + f;
        d = f + d;
      }
    };
    var nr = function (a, b) {
        return 0 > b ? 0 : b < a.g.length ? a.g[b] : a.h;
      },
      or = function (a) {
        if (0 != a.h) return !1;
        for (var b = 0; b < a.g.length; b++) if (0 != a.g[b]) return !1;
        return !0;
      },
      lr = function (a) {
        return -1 == a.h;
      },
      sr = function (a, b) {
        a = qr(a, b);
        return lr(a) ? -1 : or(a) ? 0 : 1;
      },
      hr = function (a) {
        for (var b = a.g.length, c = [], d = 0; d < b; d++) c[d] = ~a.g[d];
        return new dr(c, ~a.h).add(jr);
      };
    dr.prototype.abs = function () {
      return lr(this) ? hr(this) : this;
    };
    dr.prototype.add = function (a) {
      for (
        var b = Math.max(this.g.length, a.g.length), c = [], d = 0, e = 0;
        e <= b;
        e++
      ) {
        var f = d + (nr(this, e) & 65535) + (nr(a, e) & 65535),
          h = (f >>> 16) + (nr(this, e) >>> 16) + (nr(a, e) >>> 16);
        d = h >>> 16;
        f &= 65535;
        h &= 65535;
        c[e] = (h << 16) | f;
      }
      return new dr(c, c[c.length - 1] & -2147483648 ? -1 : 0);
    };
    var qr = function (a, b) {
        return a.add(hr(b));
      },
      rr = function (a, b) {
        if (or(a) || or(b)) return gr;
        if (lr(a)) return lr(b) ? rr(hr(a), hr(b)) : hr(rr(hr(a), b));
        if (lr(b)) return hr(rr(a, hr(b)));
        if (0 > sr(a, kr) && 0 > sr(b, kr)) return ir(mr(a) * mr(b));
        for (var c = a.g.length + b.g.length, d = [], e = 0; e < 2 * c; e++)
          d[e] = 0;
        for (e = 0; e < a.g.length; e++)
          for (var f = 0; f < b.g.length; f++) {
            var h = nr(a, e) >>> 16,
              k = nr(a, e) & 65535,
              l = nr(b, f) >>> 16,
              m = nr(b, f) & 65535;
            d[2 * e + 2 * f] += k * m;
            tr(d, 2 * e + 2 * f);
            d[2 * e + 2 * f + 1] += h * m;
            tr(d, 2 * e + 2 * f + 1);
            d[2 * e + 2 * f + 1] += k * l;
            tr(d, 2 * e + 2 * f + 1);
            d[2 * e + 2 * f + 2] += h * l;
            tr(d, 2 * e + 2 * f + 2);
          }
        for (e = 0; e < c; e++) d[e] = (d[2 * e + 1] << 16) | d[2 * e];
        for (e = c; e < 2 * c; e++) d[e] = 0;
        return new dr(d, 0);
      },
      tr = function (a, b) {
        for (; (a[b] & 65535) != a[b]; )
          (a[b + 1] += a[b] >>> 16), (a[b] &= 65535), b++;
      },
      ur = function (a, b) {
        this.g = a;
        this.h = b;
      },
      pr = function (a, b) {
        if (or(b)) throw Error('sa');
        if (or(a)) return new ur(gr, gr);
        if (lr(a)) return (b = pr(hr(a), b)), new ur(hr(b.g), hr(b.h));
        if (lr(b)) return (b = pr(a, hr(b))), new ur(hr(b.g), b.h);
        if (30 < a.g.length) {
          if (lr(a) || lr(b)) throw Error('ra');
          for (var c = jr, d = b; 0 >= sr(d, a); )
            (c = c.shiftLeft(1)), (d = d.shiftLeft(1));
          var e = vr(c, 1),
            f = vr(d, 1);
          d = vr(d, 2);
          for (c = vr(c, 2); !or(d); ) {
            var h = f.add(d);
            0 >= sr(h, a) && ((e = e.add(c)), (f = h));
            d = vr(d, 1);
            c = vr(c, 1);
          }
          b = qr(a, rr(e, b));
          return new ur(e, b);
        }
        for (e = gr; 0 <= sr(a, b); ) {
          c = Math.max(1, Math.floor(mr(a) / mr(b)));
          d = Math.ceil(Math.log(c) / Math.LN2);
          d = 48 >= d ? 1 : Math.pow(2, d - 48);
          f = ir(c);
          for (h = rr(f, b); lr(h) || 0 < sr(h, a); )
            (c -= d), (f = ir(c)), (h = rr(f, b));
          or(f) && (f = jr);
          e = e.add(f);
          a = qr(a, h);
        }
        return new ur(e, a);
      };
    dr.prototype.and = function (a) {
      for (
        var b = Math.max(this.g.length, a.g.length), c = [], d = 0;
        d < b;
        d++
      )
        c[d] = nr(this, d) & nr(a, d);
      return new dr(c, this.h & a.h);
    };
    dr.prototype.or = function (a) {
      for (
        var b = Math.max(this.g.length, a.g.length), c = [], d = 0;
        d < b;
        d++
      )
        c[d] = nr(this, d) | nr(a, d);
      return new dr(c, this.h | a.h);
    };
    dr.prototype.xor = function (a) {
      for (
        var b = Math.max(this.g.length, a.g.length), c = [], d = 0;
        d < b;
        d++
      )
        c[d] = nr(this, d) ^ nr(a, d);
      return new dr(c, this.h ^ a.h);
    };
    dr.prototype.shiftLeft = function (a) {
      var b = a >> 5;
      a %= 32;
      for (
        var c = this.g.length + b + (0 < a ? 1 : 0), d = [], e = 0;
        e < c;
        e++
      )
        d[e] =
          0 < a
            ? (nr(this, e - b) << a) | (nr(this, e - b - 1) >>> (32 - a))
            : nr(this, e - b);
      return new dr(d, this.h);
    };
    var vr = function (a, b) {
      var c = b >> 5;
      b %= 32;
      for (var d = a.g.length - c, e = [], f = 0; f < d; f++)
        e[f] =
          0 < b
            ? (nr(a, f + c) >>> b) | (nr(a, f + c + 1) << (32 - b))
            : nr(a, f + c);
      return new dr(e, a.h);
    };
    qr(jr.shiftLeft(32), jr);
    qr(jr.shiftLeft(128), jr);
    var wr = _.B || _.D || _.ec || !1;
    var xr = function (a, b, c, d, e, f, h, k, l) {
      _.M.call(this, a);
      this.j = h || null;
      null != this.j && this.j.C((0, _.w)(this.Li, this));
      this.s = null;
      this.h = 'auto';
      this.Sa = this.P = '';
      this.Ob = new Wn();
      this.xc = !!b && wr && !_.B;
      this.aa = null != e ? e : 0;
      this.l = this.xc ? new Lq() : new Mq();
      l && this.l.qa(!1);
      if (0 < this.aa)
        for (a = this.l, a.J = !0, b = 0; b < a.l; b++)
          (h = _.jj('DIV', 'goog-menu', '')),
            (e = _.jj('DIV', null, h)),
            (h = new Cp(e, h)),
            (a.o[b] = h),
            document.body.appendChild(e);
      this.l.ja(c);
      this.o = k || null;
      this.wb = null != d ? d : -1;
      this.X = Gm.ea();
      this.J = new _.rf();
      this.V = null;
      this.$a = 't';
      this.ba = this.la = null;
      this.B = f || null;
      this.Ta = !1;
      null != this.B &&
        (this.B.l((0, _.w)(this.wc, this)), this.B.j((0, _.w)(this.Ii, this)));
      this.xa = null;
      this.O = en.ea();
    };
    _.u(xr, _.M);
    var yr = function (a, b) {
        a.xa = b;
        a.l.B = b;
      },
      zr = function (a) {
        a.V = 'https://translate.google.com';
        a.l.O.o = a.V || '';
      },
      Br = function (a) {
        var b = Ar;
        a.X.j = b;
        a.$a = b;
      },
      Kr = function (a, b) {
        null != a.B && a.B.h();
        b && ((a.s = new Un(b)), (a.ba = null));
        Cr(a) && (a.j.h(), null != a.o && a.o.g(!1));
        if (a.s) {
          b = 0 != ij().length;
          a.g.ld(a.A());
          a.l.Pd();
          a.xa && a.xa.attach(a.s);
          for (var c = '', d = 0, e = 0; e < V(a.s, 5); e++)
            Dr(a.s, e) && (c += ' '),
              (c += Er(a.s, e)),
              (d += V(Vn(a.s, e), 2));
          if (0 != d) {
            c = [];
            d = !1;
            e = a.s;
            for (var f = '', h = 0; h < V(e, 5); h++) {
              var k = Vn(e, h);
              null != k.g[4] && 0 < cn(k, 4).length
                ? (f = cn(k, 4))
                : (new Rn(k.g).g[4] = f);
            }
            for (e = 0; e < V(a.s, 5); e++) {
              f = Vn(a.s, e);
              h = Sn(f, 0);
              if (Dr(a.s, e)) a.g.appendChild(a.A(), a.g.U.createTextNode(' '));
              else if ('km' == a.P || 'lo' == a.P) {
                k = a.g;
                var l = k.appendChild,
                  m = a.A();
                var n = _.D
                  ? kj()
                  : _.dc
                  ? document.createTextNode('&shy;')
                  : _.B
                  ? document.createTextNode('&#8203;')
                  : kj();
                l.call(k, m, n);
              }
              null != f.g[4] &&
                0 < cn(f, 4).length &&
                0 == bn(f, 5) &&
                c.push(cn(f, 4));
              var q;
              k = Er(a.s, e);
              /^[\s\xa0]*$/.test(k)
                ? 0 == k.length || (q = Fr(k))
                : ((q = a.g.N('SPAN', null, k)),
                  (h = bn(h, 1)),
                  0 <= a.wb && h < a.wb && _.Q(q, 'alt-low-conf'),
                  a.J.has(a.h + '.' + a.P + '.' + cn(f, 0)) &&
                    ((h = a.J.get(a.h + '.' + a.P + '.' + cn(f, 0))),
                    h != Gr(f, 0) &&
                      (a.g.nb(q, h),
                      _.Q(q, 'alt-edited'),
                      (d = !0),
                      Hr(a, !0))),
                  (q.title = Eq),
                  Fq(a.l, q, f));
              q && a.g.appendChild(a.A(), q);
            }
            if (null != a.j) {
              q = a.h + '.' + a.P;
              for (e = 0; e < c.length; ++e) q += '.' + c[e];
              a.J.has(q) &&
                (Ir(a, !1),
                (d = !0),
                Jr(a, a.J.get(q)),
                null != a.o && a.o.g(!1),
                Hr(a, !0));
            }
            d || (Hr(a, !1), Ir(a, !1));
            (d || b) && a.dispatchEvent('action');
          }
        } else Hr(a, !1), Ir(a, !1);
      },
      Fr = function (a) {
        a = _.cj(a)
          .replace(/(\r\n|\r|\n)/g, '<br>')
          .split('<br>');
        var b = document.createDocumentFragment(),
          c = 0;
        _.Rb(a, function (d) {
          0 != c && b.appendChild(_.jj('BR'));
          c++;
          '' != d && b.appendChild(document.createTextNode(String(gj(d))));
        });
        return b;
      },
      Lr = function (a, b) {
        if (Cr(a)) return a.j.g();
        var c = [];
        if (a.A() && a.A().childNodes)
          for (var d = 0; d < a.A().childNodes.length; ++d) {
            var e = a.A().childNodes[d];
            c[d] = b && 'BR' == e.tagName ? '\n' : _.td(e);
          }
        return c.join('');
      },
      Nr = function (a, b, c) {
        if (a)
          for (var d = 0; d < V(a, 5); d++) {
            var e = Vn(a, d);
            if ((e = e && e) && Ym(b.g, e.g)) {
              e = -1;
              b = V(a, 5);
              for (var f = d; 0 <= f; f--)
                if (0 == bn(Vn(a, f), 5)) {
                  e = f;
                  break;
                }
              for (f = d + 1; f <= V(a, 5); f++)
                if (0 == bn(Vn(a, f), 5)) {
                  b = f;
                  break;
                }
              if (c) d = Mr(a, e, b);
              else if (((c = a), (a = e), c)) {
                e = d + 1;
                f = d;
                for (d = Er(c, d).length; 64 > d && (e != b || f != a); )
                  e < b && (d += Er(c, e++).length + 1),
                    64 > d && f > a && (d += Er(c, --f).length + 1);
                d = Mr(c, f, e);
              } else d = '';
              return d;
            }
          }
        return '';
      },
      Mr = function (a, b, c) {
        var d = [];
        d.push(Er(a, b));
        for (b += 1; b < c; b++) Dr(a, b) && d.push(' '), d.push(Er(a, b));
        return d.join('');
      },
      Dr = function (a, b) {
        if (0 == b) return !1;
        var c = Vn(a, b),
          d = Vn(a, b - 1);
        return an(Sn(c, 0), 2) && !an(Sn(d, 0), 3) && !_.Wb(Er(a, b - 1), '\n');
      };
    _.g = xr.prototype;
    _.g.Va = function () {
      return this.h;
    };
    _.g.ga = function () {
      return this.P;
    };
    _.g.N = function () {
      this.da(_.gh(this.g, 'span'));
    };
    _.g.da = function (a) {
      _.M.prototype.da.call(this, a);
      Kr(this);
    };
    _.g.Y = function () {
      _.M.prototype.Y.call(this);
      S(this).D(this.l, 'action', this.Vi);
      null != this.o &&
        null != this.o.h &&
        (S(this).D(this.o.h, 'click', this.bj),
        _.Yf(S(this), this.o.h, 'click', this.O.h, this.O));
      S(this).D(this.l, 'show', this.Ui);
      this.A() &&
        S(this).D(
          this.A(),
          'keydown',
          function (a) {
            32 == a.keyCode && a.stopPropagation();
          },
          !0,
        );
    };
    _.g.L = function () {
      _.M.prototype.L.call(this);
      this.l.R();
    };
    _.g.Li = function () {
      this.B.qa(this.j.j());
      Hr(this, this.j.j());
    };
    _.g.Vi = function (a) {
      if ('hide' != a.type || a.target == this.l)
        if (null == a.target && null != this.j)
          this.X.log('editpopupclk'),
            fn(this.O, 233),
            null != this.o && this.o.g(!0),
            this.j.l(Lr(this)),
            (this.Ta = 'none' != this.B.A().style.display),
            this.B.reset(),
            null != this.o
              ? this.B.qa('none' != this.o.h.style.display)
              : this.B.qa(!1),
            Hr(this, !1);
        else {
          var b = a.l;
          null == b && null != a.currentTarget && (b = a.currentTarget.Ua);
          var c = a.target.xb();
          if (null != b && null != a.target) {
            var d = b,
              e = this.l.s.get(_.za(d));
            this.g.nb(d, c);
            c == Gr(e, 0)
              ? (_.ml(d, 'alt-edited'),
                0 == ij().length && (Hr(this, !1), Ir(this, !1)))
              : (_.Q(d, 'alt-edited'), Hr(this, !0), Ir(this, !0));
            null != this.J &&
              this.J.set(this.h + '.' + this.P + '.' + cn(e, 0), c);
            e = this.l.s.get(_.za(b));
            null != this.J &&
              this.J.set(this.h + '.' + this.P + '.' + cn(e, 0), c);
            d = Gr(e, 0);
            b = Zl(this.l, a.target);
            d = {
              sl: this.h,
              tl: this.P,
              utrans: c,
              gtrans: d,
              index: b,
              ophrase: cn(e, 0),
              osentence: cn(e, 4),
              tsentence: Nr(this.s, e),
            };
            0 < V(e, 2) && (d.confidence = bn(Sn(e, 0), 1));
            if (a.target instanceof Nq || -1 == b)
              (d.manual = 1), fn(this.O, 240);
            else {
              a = fn(this.O, 239);
              e = new Tm();
              var f = nk(nk(e, 2, Rm), 3, Pm);
              kk(f, 1, b);
              mk(a, 27, e);
            }
            for (var h in d)
              'string' === typeof d[h] &&
                64 < d[h].length &&
                ((d.tr = 1), (d[h] = d[h].substr(0, 64)));
            this.X.log('usealt', d, this.V);
            h = new _.wd('usealt');
            h.text = c;
            this.dispatchEvent(h);
            this.dispatchEvent('action');
          }
        }
    };
    var Jr = function (a, b) {
      if (a.A()) {
        null == a.la && (a.ba = _.wa(a.g.Ai(a.A())));
        a.la = b;
        var c;
        if ((c = a.A().childNodes && 0 < a.A().childNodes.length))
          c = (c = a.A().childNodes[0]) ? _.tf(a.l.h, _.za(c)) : !1;
        if (c)
          a.g.ld(a.A()),
            a.l.Pd(),
            (b = a.g.N('SPAN', 'alt-edited', a.la)),
            a.g.appendChild(a.A(), b),
            Fq(a.l, b, new Rn());
        else {
          _.jd(a.A());
          a = a.A();
          c = _.cj(b);
          b = _.jj('DIV');
          c = c.replace(/(\r\n|\r|\n)/g, '<br>').split('<br>');
          for (var d = 0; d < c.length; ++d) {
            var e = c[d];
            e.length && ((e = _.jj('SPAN', 'alt-edited', e)), b.appendChild(e));
            d != c.length - 1 && ((e = _.jj('BR')), b.appendChild(e));
          }
          a.appendChild(b);
        }
      }
    };
    _.g = xr.prototype;
    _.g.bj = function () {
      null != this.j && Cr(this) ? this.j.s() : Or(this);
      this.X.log('clkundo', void 0, this.V);
    };
    _.g.Ii = function () {
      Cr(this) &&
        (this.j.j() && (Jr(this, this.j.g()), (this.Ta = !0)),
        this.j.h(),
        null != this.o && this.o.g(!1),
        this.j.j() && Hr(this, !0),
        this.B.qa(!0),
        _.O(this.B.A(), this.Ta),
        this.dispatchEvent('action'));
      fn(this.O, 215);
      this.X.log('clkcancel', void 0, this.V);
    };
    _.g.Ui = function () {
      var a = this.l.s.get(_.za(this.l.Ua));
      if (a) {
        if (0 < this.aa) {
          var b = new Ij('source=baf');
          if (1 == this.aa) {
            for (var c = [], d = 0, e = V(a, 2); d < e; d++) c.push(Gr(a, d));
            d = this.Ob;
            var f = this.P,
              h = this.h,
              k = Pr(this),
              l = (0, _.w)(this.Vj, this);
            e = new Ij();
            var m = new Ij();
            e.set('client', 'mt');
            e.set('sl', f);
            e.set('tl', h);
            e.set('hl', k);
            e.set('v', '1.0');
            b && e.o(b);
            (b = !Array.isArray(c) || (Array.isArray(c) && 1 == c.length))
              ? m.set('q', c)
              : Mj(m, 'q', c);
            b = (0, _.w)(d.l, d, b, l);
            Yn(d, '/translate_a/t', e, m, b);
          } else
            for (d = 0, e = V(a, 2); d < e; d++) {
              h = Gr(a, d);
              c = this.Ob;
              m = this.P;
              l = this.h;
              f = Pr(this);
              k = (0, _.w)(this.Wj, this, d);
              var n = b,
                q = new Ij(),
                r = new Ij();
              q.set('client', 'mt');
              q.set('sl', m);
              q.set('tl', l);
              q.set('hl', f);
              Mj(q, 'dt', ['at', 't']);
              n && q.o(n);
              r.set('q', h);
              Yn(c, '/translate_a/single', q, r, (0, _.w)(c.j, c, k, void 0));
            }
        }
        b = new _.wd('click');
        b.text = this.l.xb();
        b.o = V(this.s, 5);
        this.dispatchEvent(b);
        b = {};
        b.confidence = bn(Sn(a, 0), 1);
        this.h &&
          this.P &&
          this.Sa &&
          ((b.segments = V(this.s, 5)),
          (b.sl = this.h),
          (b.tl = this.P),
          (b.hl = this.Sa));
        fn(this.O, 238);
        this.X.log('phrsclk', b, this.V);
      }
    };
    _.g.Wj = function (a, b) {
      if (1 == this.aa || 1 < V(b, 5)) {
        var c = cn(new Tn(dn(b, 0, 0)), 0);
        var d = 1;
        for (var e = V(b, 0); d < e; d++) c += ' ' + cn(new Tn(dn(b, 0, d)), 0);
        d = c;
      } else if (1 == V(b, 5)) {
        c = [];
        b = Vn(b, 0);
        d = 0;
        for (e = Math.min(this.aa, V(b, 2)); d < e; d++) c.push(Gr(b, d));
        d = c.join(', ');
      } else d = '...';
      Jq(this.l, a, d);
    };
    _.g.Vj = function (a) {
      for (var b = 0; b < a.length; b++) Jq(this.l, b, a[b]);
    };
    var Or = function (a) {
        Cr(a) && (null != a.o && a.o.g(!1), a.j.h());
        xi(a.J);
        a.la = null;
        Kr(a);
        a.dispatchEvent('action');
      },
      Hr = function (a, b) {
        null != a.o && null != a.o.h && _.O(a.o.h, b);
      },
      Ir = function (a, b) {
        null != a.B && (b && a.B.reset(), _.O(a.B.A(), b));
      };
    xr.prototype.wc = function () {
      fn(this.O, 374);
      var a = [],
        b;
      null != this.ba ? (b = this.ba) : (b = _.kd(this.A()));
      for (var c = { segment: [] }, d = null, e = 0, f = 0; f < b.length; f++) {
        var h = Vn(this.s, f);
        if (null != h) {
          var k = _.td(b[f]);
          a: {
            var l = k;
            var m = h;
            if (0 == V(m, 2)) l = 0;
            else {
              for (var n = 0; n < V(m, 2); ++n)
                if (l == Gr(m, n)) {
                  l = n;
                  break a;
                }
              l = -1;
            }
          }
          m = (0, _.Xb)(cn(h, 4));
          n = Nr(this.s, h, !0);
          if (0 != m.length) {
            if (0 == a.length || m != a[a.length - 1])
              a.push(m),
                (e = a.length - 1),
                (d = null),
                e < V(this.s, 0) && (d = $m(new Tn(dn(this.s, 0, e)), 4, 0)),
                (d = co(d)),
                (e = 0),
                (d = {
                  source: m,
                  original_target: n,
                  segment_source: d,
                  phrase_correction: [],
                }),
                c.segment.push(d);
            if (0 != l)
              for (
                m = Gr(h, 0).length,
                  l = {
                    alternative_index: l,
                    edited_phrase: k,
                    source_span: [],
                    target_span: [{ start: e, end: e + m }],
                  },
                  d.phrase_correction.push(l),
                  m = 0;
                m < V(h, 3);
                ++m
              )
                (n = new Qn(dn(h, 3, m))),
                  l.source_span.push({ start: bn(n, 0), end: bn(n, 1) });
            e += k.length;
            an(Sn(h, 0), 2) && e++;
          }
        }
      }
      if (Cr(this)) {
        this.dispatchEvent('action');
        this.j.h();
        null != this.o && this.o.g(!1);
        Hr(this, !0);
        this.j.g() != Lr(this) && Jr(this, this.j.g());
        b = this.h + '.' + this.P;
        for (f = 0; f < a.length; ++f) b += '.' + a[f];
        a = this.j.g();
        this.J.set(b, a);
        c.contains_full_edit = !0;
      }
      c.edited_target = Lr(this, !0);
      a = new Ij();
      a.set('ue', JSON.stringify(c));
      a.set('sl', this.h);
      a.set('tl', this.P);
      fk(
        '/translate_suggestion?client=' + this.$a,
        void 0,
        'POST',
        a.toString(),
        1e4,
      );
    };
    var Cr = function (a) {
        return null != a.j && a.j.o();
      },
      Er = function (a, b) {
        a = Vn(a, b);
        return 0 == V(a, 2) ? cn(a, 0) : Gr(a, 0);
      },
      Gr = function (a, b) {
        return cn(Sn(a, b), 0);
      },
      Pr = function (a) {
        a = a.Sa;
        0 === a.length &&
          null != _.ad(document, 'hl') &&
          (a = _.ad(document, 'hl').value);
        return a;
      };
    var Rr, Sr, Tr, Ur;
    _.Qr = function (a) {
      var b = a.ge,
        c = a.gh;
      a.Zg
        ? (b =
            '<span style="display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src=\'' +
            String(b).replace(_.al, _.Vk) +
            "',sizingMethod='scale');\"></span>")
        : ((a = _.X.Tc),
          (b =
            '<img src="' +
            _.P(_.gl(b)) +
            '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' +
            _.P(a) +
            '">'));
      a = _.X.Tc;
      return (0, _.Dh)(
        '<span style="white-space:nowrap"><a class="goog-logo-link" href="' +
          _.P(_.el(c)) +
          '" target="_blank">' +
          b +
          _.Zk(a) +
          '</a></span>',
      );
    };
    Rr = function (a) {
      var b = a.ge,
        c = _.X.Tc,
        d = _.X.ai;
      return (0, _.Dh)(
        '<div id="goog-gt-tt" class="skiptranslate" dir="' +
          _.P(a.dir) +
          '"><div style="padding: 8px;"><div><div class="logo"><img src="' +
          _.P(_.gl(b)) +
          '" width="20" height="20" alt="Google ' +
          _.P(c) +
          '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' +
          _.Zk(d) +
          '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>',
      );
    };
    Sr = function (a) {
      var b = a.method,
        c = a.yi,
        d = a.dir,
        e = _.X.ei,
        f = _.X.ue;
      a =
        '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' +
        _.P(_.el(a.mi)) +
        '" method="' +
        _.P(b) +
        '"><div class="form-buttons" style="text-align:' +
        (_.Pk(d, 'rtl') ? 'right' : 'left') +
        '"><input class="activity-submit" type="button" value="' +
        _.P(e) +
        '"><input class="activity-cancel" type="button" value="' +
        _.P(f) +
        '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
      b = c.length;
      for (d = 0; d < b; d++)
        a += '<input type="hidden" name="' + _.P(c[d]) + '"/>';
      return (0, _.Dh)(a + '</div></form></div>');
    };
    Tr = function () {
      return (0, _.Dh)(
        '<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>',
      );
    };
    Ur = function (a) {
      return (0, _.Dh)(
        '<div><span class="alt-translated-text"></span><div class="alt-helper-text">' +
          _.Zk(a.fj) +
          '</div><div class="activity-form-container"></div></div>',
      );
    };
    _.x(mi, _.M);
    _.g = mi.prototype;
    _.g.Hc = function (a) {
      this.B = a;
    };
    _.g.cc = function () {
      if (!this.ia) throw Error('ta');
      if (!this.B) throw Error('ua');
    };
    _.g.Wb = function () {};
    _.g.R = function () {
      this.Db() || (mi.G.R.call(this), delete this.fe);
    };
    _.g.ma = function () {
      return this.B;
    };
    var Xr = function () {
        _.I.call(this);
        this.l = 'closure_frame' + Vr++;
        this.j = [];
        Wr[this.l] = this;
      },
      Yr;
    _.x(Xr, _.I);
    var Wr = {},
      Vr = 0,
      Zr = function (a, b) {
        var c = _.F(a);
        Hj(b, function (d, e) {
          Array.isArray(d) || (d = [d]);
          _.Rb(d, function (f) {
            f = c.N('INPUT', { type: 'hidden', name: e, value: f });
            a.appendChild(f);
          });
        });
      };
    _.g = Xr.prototype;
    _.g.na = null;
    _.g.Ea = null;
    _.g.ic = null;
    _.g.Aj = 0;
    _.g.Cb = !1;
    _.g.hc = null;
    _.g.send = function (a, b, c, d) {
      if (this.Cb) throw Error('va');
      a = new Xj(a);
      b = b ? b.toUpperCase() : 'GET';
      c && ((c = _.Zc()), a.g.set('zx', c));
      Yr ||
        ((Yr = _.jj('FORM')),
        (Yr.acceptCharset = 'utf-8'),
        (c = Yr.style),
        (c.position = 'absolute'),
        (c.visibility = 'hidden'),
        (c.top = c.left = '-10px'),
        (c.width = c.height = '10px'),
        (c.overflow = 'hidden'),
        document.body.appendChild(Yr));
      this.na = Yr;
      'GET' == b && Zr(this.na, a.g);
      d && Zr(this.na, d);
      d = this.na;
      a = a.toString();
      (0, _.ag)();
      Xi(d, _.Fc(a));
      this.na.method = b;
      $r(this);
      as(this);
    };
    var bs = function (a, b) {
      if (a.Cb) throw Error('va');
      var c = new Xj(b.action);
      a.na = b;
      Xi(a.na, c.toString());
      $r(a);
    };
    Xr.prototype.abort = function () {
      if (this.Cb) {
        var a = cs(this);
        Bj(a);
        this.Cb = !1;
        this.dispatchEvent('abort');
        ds(this);
      }
    };
    Xr.prototype.L = function () {
      this.Cb && this.abort();
      Xr.G.L.call(this);
      this.Ea && es(this);
      as(this);
      delete this.C;
      this.na = null;
      delete Wr[this.l];
    };
    var $r = function (a) {
      a.Cb = !0;
      a.ic = a.l + '_' + (a.Aj++).toString(36);
      a.Ea = _.F(a.na).N('IFRAME', { name: a.ic, id: a.ic });
      _.B && 7 > Number(_.uc) && Xi(a.Ea, _.Fc(_.hh(_.fh('javascript:""'))));
      var b = a.Ea.style;
      b.visibility = 'hidden';
      b.width = b.height = '10px';
      b.display = 'none';
      _.D
        ? (b.marginTop = b.marginLeft = '-10px')
        : ((b.position = 'absolute'), (b.top = b.left = '-10px'));
      if (_.B && !_.wc('11')) {
        a.na.target = a.ic || '';
        _.F(a.na).U.body.appendChild(a.Ea);
        _.H(a.Ea, 'readystatechange', a.o, !1, a);
        try {
          (a.h = !1), a.na.submit();
        } catch (r) {
          _.Td(a.Ea, 'readystatechange', a.o, !1, a), fs(a);
        }
      } else {
        _.F(a.na).U.body.appendChild(a.Ea);
        b = a.ic + '_inner';
        var c = _.vj(a.Ea);
        if (document.baseURI) {
          var d = _.cj(b);
          d =
            '<head><base href="' +
            _.cj(document.baseURI) +
            '"></head><body><iframe id="' +
            d +
            '" name="' +
            d +
            '"></iframe>';
          d = _.Qc(d, null);
        } else
          (d = _.cj(b)),
            (d = _.Qc(
              '<body><iframe id="' + d + '" name="' + d + '"></iframe>',
              null,
            ));
        c.write(_.Pc(d));
        _.H(c.getElementById(b), 'load', a.g, !1, a);
        d = hj('TEXTAREA', a.na);
        for (var e = 0, f = d.length; e < f; e++) {
          var h = d[e].value;
          zj(d[e]) != h && (_.od(d[e], h), (d[e].value = h));
        }
        d = c.importNode(a.na, !0);
        d.target = b;
        d.action = a.na.action;
        c.body.appendChild(d);
        e = hj('SELECT', a.na);
        f = hj('SELECT', d);
        h = 0;
        for (var k = e.length; h < k; h++)
          for (
            var l = hj('OPTION', e[h]),
              m = hj('OPTION', f[h]),
              n = 0,
              q = l.length;
            n < q;
            n++
          )
            m[n].selected = l[n].selected;
        e = hj('INPUT', a.na);
        f = hj('INPUT', d);
        h = 0;
        for (k = e.length; h < k; h++)
          if ('file' == e[h].type && e[h].value != f[h].value) {
            a.na.target = b;
            d = a.na;
            break;
          }
        try {
          (a.h = !1), d.submit(), c.close(), _.C && _.kg(a.B, 250, a);
        } catch (r) {
          _.Td(c.getElementById(b), 'load', a.g, !1, a), c.close(), fs(a);
        }
      }
    };
    Xr.prototype.o = function () {
      if ('complete' == this.Ea.readyState) {
        _.Td(this.Ea, 'readystatechange', this.o, !1, this);
        try {
          var a = _.vj(this.Ea);
          if (_.B && 'about:blank' == a.location && !navigator.onLine) {
            fs(this);
            return;
          }
        } catch (b) {
          fs(this);
          return;
        }
        gs(this, a);
      }
    };
    Xr.prototype.g = function () {
      _.Td(cs(this), 'load', this.g, !1, this);
      try {
        gs(this, this.Ea ? _.vj(cs(this)) : null);
      } catch (a) {
        fs(this);
      }
    };
    var gs = function (a, b) {
        a.Cb = !1;
        var c;
        c || 'function' != typeof a.C || ((b = a.C(b)) && (c = 4));
        c
          ? fs(a)
          : (a.dispatchEvent('complete'), a.dispatchEvent('success'), ds(a));
      },
      fs = function (a) {
        a.h ||
          ((a.Cb = !1),
          a.dispatchEvent('complete'),
          a.dispatchEvent('error'),
          ds(a),
          (a.h = !0));
      },
      ds = function (a) {
        es(a);
        as(a);
        a.na = null;
        a.dispatchEvent('ready');
      },
      es = function (a) {
        var b = a.Ea;
        b &&
          ((b.onreadystatechange = null),
          (b.onload = null),
          (b.onerror = null),
          a.j.push(b));
        a.hc && (_.lg(a.hc), (a.hc = null));
        _.C ? (a.hc = _.kg(a.s, 2e3, a)) : a.s();
        a.Ea = null;
        a.ic = null;
      };
    Xr.prototype.s = function () {
      this.hc && (_.lg(this.hc), (this.hc = null));
      for (; 0 != this.j.length; ) {
        var a = this.j.pop();
        _.pj(a);
      }
    };
    var as = function (a) {
        a.na && a.na == Yr && _.jd(a.na);
      },
      cs = function (a) {
        return a.Ea
          ? _.B && !_.wc('11')
            ? a.Ea
            : _.vj(a.Ea).getElementById(a.ic + '_inner')
          : null;
      };
    Xr.prototype.B = function () {
      if (this.Cb) {
        var a = this.Ea ? _.vj(cs(this)) : null;
        a && !_.ac(a, 'documentUri')
          ? (_.Td(cs(this), 'load', this.g, !1, this), fs(this))
          : _.kg(this.B, 250, this);
      }
    };
    var hs = function (a, b) {
      _.M.call(this);
      this.B = a || '';
      this.j = null;
      this.o = [];
      this.h = null;
      this.J = b || 'GET';
      this.l = this.s = null;
    };
    _.u(hs, _.M);
    hs.prototype.N = function () {
      var a = {
        mi: this.B,
        method: this.J,
        yi: this.o,
        dir: _.Eb.test(_.W) ? 'rtl' : 'ltr',
      };
      this.da(_.Xh(Sr, a));
    };
    hs.prototype.da = function (a) {
      this.I = a;
      this.h = Ql(this, 'activity-form');
      a = Ql(this, 'activity-submit');
      this.l = new Am('');
      Ul(this.l, a);
      a = Ql(this, 'activity-cancel');
      this.j = new Am('');
      Ul(this.j, a);
    };
    hs.prototype.Y = function () {
      var a = S(this);
      a.D(this.l, 'action', (0, _.w)(this.O, this));
      a.D(this.j, 'action', this.dispatchEvent.bind(this, 'cancelled'));
    };
    hs.prototype.O = function () {
      var a = !0;
      this.s && (a = this.s());
      a &&
        ((a = new Xr()),
        _.H(a, 'success', function () {
          this.dispatchEvent('successful');
        }),
        _.H(a, 'error', function () {
          this.dispatchEvent('failed');
        }),
        bs(a, this.h));
      this.dispatchEvent('submitted');
    };
    var is = function (a, b) {
        for (var c in b) a.h[c] && (a.h[c].value = b[c]);
      },
      js = function (a, b) {
        return a.h[b] ? a.h[b].value : '';
      };
    hs.prototype.L = function () {
      this.l = this.h = this.j = null;
      _.M.prototype.L.call(this);
    };
    var ks = function (a, b) {
      a.s = b;
    };
    var ls = function (a, b) {
      mi.call(this, a);
      this.j = null;
      this.J = b || {};
      this.o = new Ep();
      this.s = this.h = null;
      this.l = new _.bp((a || {}).apiKey || '', Ar);
      this.l.o.j = !1;
    };
    _.u(ls, mi);
    _.g = ls.prototype;
    _.g.Hc = function (a) {
      mi.prototype.Hc.call(this, a);
      this.l.initialize((0, _.w)(this.cc, this));
    };
    _.g.cc = function () {
      mi.prototype.cc.call(this);
      var a = this.ma().Z,
        b = this.ma().B;
      if (a && b) {
        _.od(this.s, a);
        var c = this.o;
        c.I = b;
        nj(c.g, c.I);
        Dp(c);
        _.O(this.o.g, !0);
        b = this.ma().Va();
        c = this.ma().ga();
        if (this.l.Ja() && b && c) {
          var d = this.ma().Qc(),
            e = (0, _.w)(this.Cj, this);
          this.l && this.l.translate(e, [d], b, c, 0, !1);
          is(this.h, {
            gtrans: a,
            text: this.ma().Qc(),
            hl: _.W,
            langpair: b + '|' + c,
          });
          is(this.h, this.J);
          is(this.h, { client: Ar });
        }
        this.dispatchEvent('ready');
      }
    };
    _.g.N = function () {
      this.da(_.Xh(Ur, { fj: _.X.bg }));
    };
    _.g.da = function (a) {
      this.I = a;
      this.s = Ql(this, 'alt-translated-text');
      var b = Ql(this, 'activity-form-container');
      this.h = new hs(_.uo, 'POST');
      this.h.o = Ih(this.J);
      ks(
        this.h,
        (0, _.w)(function () {
          is(this.h, { utrans: Lr(this.j) });
          return js(this.h, 'utrans') != js(this.h, 'gtrans');
        }, this),
      );
      this.h.ja(b);
      Pq = _.X.ki;
      Eq = _.X.bg;
      this.j = new xr(void 0, !0, a);
      yr(this.j, this.o);
      zr(this.j);
      Br(this.j);
      Ul(this.j, this.s);
    };
    _.g.Y = function () {
      mi.prototype.Y.call(this);
      var a = S(this);
      a.D(
        this.h,
        'cancelled',
        (0, _.w)(function () {
          Or(this.j);
          this.dispatchEvent('cancelled');
        }, this),
      );
      a.D(
        this.h,
        'submitted',
        (0, _.w)(function () {
          var b = Lr(this.j);
          this.ma().Z = b && (0, _.Xb)(b);
          this.dispatchEvent('submitted');
          b = _.X.qg;
          _.od(this.ma().l.A(), b);
        }, this),
      );
    };
    _.g.Cj = function (a) {
      a && Kr(this.j, a);
    };
    _.g.Wb = function () {
      _.O(this.o.g, !1);
    };
    _.g.L = function () {
      this.j && this.j.R();
      this.s = this.o = this.j = null;
      this.l && this.l.R();
      this.l = null;
      this.h && this.h.R();
      this.h = null;
      mi.prototype.L.call(this);
    };
    var Ar = _.jo.replace('_', '-') + '-alt';
    var ms = function (a, b) {
      mi.call(this, a);
      this.o = !1;
      this.l = b || {};
      this.j = null;
    };
    _.u(ms, mi);
    _.g = ms.prototype;
    _.g.Hc = function (a) {
      mi.prototype.Hc.call(this, a);
      S(this).D(this.j.A(), 'keydown', (0, _.w)(this.ma().nd, this.ma(), !1));
      this.o = this.ma().Vc;
      this.cc();
    };
    _.g.cc = function () {
      mi.prototype.cc.call(this);
      this.j.j(this.ma().Z);
      var a = this.ma().Va(),
        b = this.ma().ga();
      a &&
        b &&
        (is(this.h, {
          gtrans: this.ma().Z,
          text: this.ma().Qc(),
          hl: _.W,
          langpair: a + '|' + b,
        }),
        is(this.h, this.l));
      this.dispatchEvent('ready');
      this.j.A().focus();
    };
    _.g.Wb = function () {
      this.ma().nd(this.o);
    };
    _.g.N = function () {
      this.da(_.Xh(Tr));
    };
    _.g.da = function (a) {
      this.I = a;
      a = Ql(this, 'contribute-original-text');
      this.j = new Sq('');
      Ul(this.j, a);
      Yq(this.j);
      Xq(this.j);
      a = Ql(this, 'activity-form-container');
      this.h = new hs(_.uo, 'POST');
      this.h.o = Ih(this.l);
      ks(
        this.h,
        (0, _.w)(function () {
          is(this.h, { utrans: (0, _.Xb)(this.j.Qa()) });
          return js(this.h, 'utrans') != js(this.h, 'gtrans');
        }, this),
      );
      this.h.ja(a);
    };
    _.g.Y = function () {
      mi.prototype.Y.call(this);
      var a = S(this);
      a.D(
        this.h,
        'cancelled',
        (0, _.w)(function () {
          this.dispatchEvent('cancelled');
        }, this),
      );
      a.D(
        this.h,
        'submitted',
        (0, _.w)(function () {
          var b = this.j.Qa();
          this.ma().Z = b && (0, _.Xb)(b);
          this.dispatchEvent('submitted');
          b = _.X.qg;
          _.od(this.ma().l.A(), b);
        }, this),
      );
    };
    _.g.L = function () {
      this.j && this.j.R();
      this.j = null;
      this.h && this.h.R();
      this.h = null;
      mi.prototype.L.call(this);
    };
    var ns = function (a) {
      _.I.call(this);
      this.ya = a;
      this.j = {};
      this.H = new _.J(this);
      this.h = null;
    };
    _.u(ns, _.I);
    ns.prototype.attach = function () {};
    ns.prototype.kg = function () {};
    ns.prototype.L = function () {
      this.H.R();
      this.H = null;
    };
    var os = function (a, b, c) {
      if ((b = a.ya.h[b])) {
        c = c || 'undefined' == typeof c;
        for (var d = 0; d < b.Ra.length; ++d) b.Ra[d] && a.Yg(b.Ra[d], c);
      }
    };
    ns.prototype.Yg = function (a, b) {
      _.L(a, 'backgroundColor', b ? '#E6ECF9' : '');
      _.L(a, 'color', b ? '#000' : '');
    };
    var Jh = {},
      ps = null,
      qs = function (a) {
        a = _.za(a);
        delete Jh[a];
        Kh() && ps && ps.stop();
      },
      ss = function () {
        ps ||
          (ps = new zl(function () {
            rs();
          }, 20));
        var a = ps;
        0 != a.nc || a.start();
      },
      rs = function () {
        var a = _.ub();
        _.Bc(Jh, function (b) {
          ts(b, a);
        });
        Kh() || ss();
      };
    var us = function (a, b, c, d) {
      up.call(this);
      if (!Array.isArray(a) || !Array.isArray(b)) throw Error('wa');
      if (a.length != b.length) throw Error('xa');
      this.o = a;
      this.M = b;
      this.duration = c;
      this.K = d;
      this.coords = [];
      this.progress = 0;
    };
    _.x(us, up);
    us.prototype.play = function (a) {
      if (a || 0 == this.g) (this.progress = 0), (this.coords = this.o);
      else if (1 == this.g) return !1;
      qs(this);
      this.startTime = a = _.ub();
      -1 == this.g && (this.startTime -= this.duration * this.progress);
      this.endTime = this.startTime + this.duration;
      this.progress || this.j();
      this.h('play');
      -1 == this.g && this.h('resume');
      this.g = 1;
      var b = _.za(this);
      b in Jh || (Jh[b] = this);
      ss();
      ts(this, a);
      return !0;
    };
    us.prototype.stop = function (a) {
      qs(this);
      this.g = 0;
      a && (this.progress = 1);
      vs(this, this.progress);
      this.Wb();
      this.l();
    };
    us.prototype.Uf = function (a) {
      this.progress = a;
      1 == this.g &&
        ((this.startTime = _.ub() - this.duration * this.progress),
        (this.endTime = this.startTime + this.duration));
    };
    us.prototype.L = function () {
      0 == this.g || this.stop(!1);
      this.h('destroy');
      us.G.L.call(this);
    };
    var ts = function (a, b) {
        b < a.startTime &&
          ((a.endTime = b + a.endTime - a.startTime), (a.startTime = b));
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        vs(a, a.progress);
        1 == a.progress
          ? ((a.g = 0), qs(a), a.h('finish'), a.l())
          : 1 == a.g && a.B();
      },
      vs = function (a, b) {
        'function' === typeof a.K && (b = a.K(b));
        a.coords = Array(a.o.length);
        for (var c = 0; c < a.o.length; c++)
          a.coords[c] = (a.M[c] - a.o[c]) * b + a.o[c];
      };
    us.prototype.B = function () {
      this.h('animate');
    };
    us.prototype.h = function (a) {
      this.dispatchEvent(new ws(a, this));
    };
    var ws = function (a, b) {
      _.wd.call(this, a);
      this.coords = b.coords;
      this.x = b.coords[0];
      this.y = b.coords[1];
      this.z = b.coords[2];
      this.duration = b.duration;
      this.progress = b.progress;
      this.state = b.g;
    };
    _.x(ws, _.wd);
    var xs = function (a, b, c, d, e) {
      us.call(this, b, c, d, e);
      this.element = a;
    };
    _.x(xs, us);
    xs.prototype.C = _.v;
    xs.prototype.B = function () {
      this.C();
      xs.G.B.call(this);
    };
    xs.prototype.l = function () {
      this.C();
      xs.G.l.call(this);
    };
    xs.prototype.j = function () {
      this.C();
      xs.G.j.call(this);
    };
    var ys = function (a, b, c, d, e) {
      'number' === typeof b && (b = [b]);
      'number' === typeof c && (c = [c]);
      xs.call(this, a, b, c, d, e);
      if (1 != b.length || 1 != c.length) throw Error('ya');
      this.s = -1;
    };
    _.x(ys, xs);
    var zs = 1 / 1024;
    ys.prototype.C = function () {
      var a = this.coords[0];
      if (Math.abs(a - this.s) >= zs) {
        var b = this.element.style;
        'opacity' in b
          ? (b.opacity = a)
          : 'MozOpacity' in b
          ? (b.MozOpacity = a)
          : 'filter' in b &&
            (b.filter =
              '' === a ? '' : 'alpha(opacity=' + 100 * Number(a) + ')');
        this.s = a;
      }
    };
    ys.prototype.j = function () {
      this.s = -1;
      ys.G.j.call(this);
    };
    ys.prototype.l = function () {
      this.s = -1;
      ys.G.l.call(this);
    };
    var As = function (a, b, c) {
      ys.call(this, a, 1, 0, b, c);
    };
    _.x(As, ys);
    As.prototype.j = function () {
      this.element.style.display = '';
      As.G.j.call(this);
    };
    As.prototype.l = function () {
      this.element.style.display = 'none';
      As.G.l.call(this);
    };
    var Bs = function (a, b, c) {
      ys.call(this, a, 0, 1, b, c);
    };
    _.x(Bs, ys);
    Bs.prototype.j = function () {
      this.element.style.display = '';
      Bs.G.j.call(this);
    };
    var Cs = function () {
      _.M.call(this);
      this.h = null;
    };
    _.u(Cs, _.M);
    Cs.prototype.N = function () {
      this.da(this.g.N('DIV', { class: 'status-message' }));
    };
    Cs.prototype.da = function (a) {
      this.I = a;
      a.style.display = 'none';
    };
    var Es = function (a) {
        var b = c;
        var c = (0, _.w)(function () {
          _.od(this.A(), '');
          b && b();
        }, a);
        c = (0, _.w)(a.j, a, 750, c);
        Ds(a, c);
      },
      Fs = function (a) {
        a.h && (a.h.stop(!0), (a.h = null));
        _.od(a.A(), '');
        a.S(!1);
      },
      Ds = function (a, b) {
        a.h = new Bs(a.A(), 750);
        S(a).Vb(
          a.h,
          'begin',
          (0, _.w)(function () {
            this.A().style.display = 'block';
          }, a),
        );
        S(a).Vb(
          a.h,
          'finish',
          (0, _.w)(function () {
            this.h = null;
            window.setTimeout(b, 2e3);
          }, a),
        );
        a.h.play();
      };
    Cs.prototype.j = function (a, b) {
      this.isVisible() &&
        ((this.h = new As(this.A(), a)),
        S(this).Vb(
          this.h,
          'finish',
          (0, _.w)(function () {
            b && b();
          }, this),
        ),
        this.h.play());
    };
    Cs.prototype.S = function (a) {
      this.A().style.display = a ? 'block' : 'none';
      this.A().style.opacity = a ? '1' : '0';
    };
    Cs.prototype.isVisible = function () {
      return (
        'none' !== this.A().style.display && '0' !== this.A().style.opacity
      );
    };
    var Gs = function () {
      Y.call(this);
      this.X = {};
      this.wb = {};
      this.J = null;
      this.wc = !1;
      this.Ob = this.j = this.T = null;
      this.aa = {};
      this.H = new _.J(this);
      this.B = this.P = this.l = this.ob = this.h = this.Z = this.Na = null;
      this.M = !0;
      this.$a = [];
    };
    _.u(Gs, Y);
    _.g = Gs.prototype;
    _.g.ja = function () {
      this.M = !1;
      var a = _.Eb.test(_.W) ? 'rtl' : 'ltr';
      this.qc(
        _.Xh(Rr, {
          ge: 'https://www.gstatic.com/images/branding/product/1x/translate_24dp.png',
          pl: 'https://www.google.com/images/cleardot.gif',
          xl: _.oo,
          dir: a,
        }),
      );
      this.className += ' skiptranslate';
      this.A() &&
        this.J &&
        this.ob &&
        this.l.A() &&
        this.T &&
        this.B &&
        (this.H.D(window, 'resize', (0, _.w)(this.Ab, this)),
        this.H.D(this, 'hide', (0, _.w)(this.Fj, this)),
        this.$a.length && (this.Je.apply(this, this.$a), (this.$a = [])));
    };
    _.g.Je = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        var d = arguments[c];
        if (d)
          if (this.J || d.fe) {
            var e = d;
            var f = _.jj('SPAN', { class: e.className || 'activity-link' });
            _.od(f, e.vf || '');
            e = f;
            b.push(e);
            mj(d.fe || this.J, e);
            d.Hc &&
              d.Wb &&
              ((f = (0, _.w)(this.Ci, this, d)),
              this.H.D(e, 'click', f),
              d.ee && this.H.D(this.T, d.ee, f));
            d.id = d.id || d.ib();
            this.X[d.id] && this.th(d);
            this.X[d.id] = d;
            this.wb[d.id] = e;
          } else this.$a.push(d);
      }
      return b;
    };
    _.g.th = function (a) {
      for (var b = 0; b < arguments.length; ++b) {
        var c =
            'string' === typeof arguments[b] || arguments[b] instanceof String
              ? arguments[b]
              : arguments[b].id,
          d = this.X[c],
          e = this.wb[c];
        d &&
          e &&
          (this.j && this.j.id === c && this.Se(),
          this.H.sa(d, ['submitted', 'cancelled']),
          d.R(),
          this.aa[c] && delete this.aa[c],
          delete this.X[c],
          delete this.wb[c],
          _.pj(e));
      }
    };
    _.g.Ci = function (a) {
      if (this.T) {
        a != this.j &&
          this.j &&
          (Fs(this.l),
          this.j.Wb.call(this.j),
          this.j.A() && (this.j.A().style.display = 'none'),
          Hs(this, !1),
          (this.j = null));
        Hs(this, !0);
        Fs(this.l);
        this.j = a;
        if (this.aa[a.id]) {
          var b = this.aa[a.id];
          var c = a.cc;
        } else
          a.ja(),
            (b = a.A()),
            (c = a.Hc),
            this.H.D(a, ['submitted', 'cancelled'], (0, _.w)(this.Se, this)),
            a.Id && (this.aa[a.id] = b);
        mj(this.T, b);
        c.call(a, this);
        a = new Bs(b, 100);
        this.H.Vb(a, 'finish', (0, _.w)(this.Ab, this, !0, !0));
        a.play();
      }
    };
    _.g.Se = function () {
      if (this.j)
        if ((Fs(this.l), this.j.Wb.call(this.j), this.j.A())) {
          var a = new As(this.j.A(), 100);
          this.H.Vb(
            a,
            'finish',
            (0, _.w)(function () {
              _.pj(this.j.A());
              this.j = null;
              Hs(this, !1);
              _.td(this.l.A()) && (Es(this.l), this.Ab(!0, !0));
            }, this),
          );
          a.play();
        } else Hs(this, !1), (this.j = null);
    };
    _.g.Bf = function (a, b) {
      this.Ob = a;
      Y.prototype.Bf.call(this, a, b);
      this.A().style.display = 'block';
    };
    _.g.Be = function (a) {
      if (!this.M) {
        var b = Sp(this, a.target);
        this.Oa = b;
        this.O();
        b != this.g
          ? ((this.g = b), Tp(this, b), Up(this), Rp(this, a))
          : Tp(this, b);
      }
    };
    _.g.Fj = function () {
      Fs(this.l);
      this.wc && this.Se();
    };
    _.g.L = function () {
      for (var a in this.X) this.th(a);
      this.H && this.H.R();
      this.H = null;
      this.l && this.l.R();
      this.B = this.ob = this.Ob = this.T = this.J = this.l = null;
      Y.prototype.L.call(this);
    };
    var Hs = function (a, b) {
      a.wc = b;
      a.M = b;
      if (a.M) {
        var c = a.A();
        a.Na = new N(c.offsetLeft, c.offsetTop);
      } else
        a.Na &&
          (null != (a.s || null) && ((a.s || null).g = a.Na),
          _.tk(a.A(), a.Na),
          (a.Na = null));
      a.J.style.display = b ? 'none' : 'inline-block';
      a.ob.style.display = b ? 'inline-block' : 'none';
    };
    _.g = Gs.prototype;
    _.g.nd = function (a) {
      if (this.isVisible()) {
        a = (this.Vc = a) ? this.o.D : this.o.sa;
        var b = _.E(this.A());
        a.call(this.o, b, 'mousedown', this.Ef, !0);
      } else Y.prototype.nd.call(this, a);
    };
    _.g.qc = function (a) {
      Y.prototype.qc.call(this, a);
      if (a) {
        this.J = ui('activity-links', a);
        var b = ui('status-message', a);
        b && ((this.l = new Cs()), Ul(this.l, b));
        this.ob = ui('started-activity-container', a);
        this.T = ui('activity-root', a);
        this.B = ui('original-text', a);
      }
    };
    _.g.Ab = function (a, b) {
      var c = xk(document.body).y;
      if (this.s) {
        (this.s || null).g.y += c;
        Y.prototype.Ab.call(this);
        var d = parseInt(this.A().style.left, 10);
        a = parseInt(this.A().style.top, 10) - (a ? 0 : c);
        b && ((b = this.xf || {}), (a -= b.top || 10), (d -= b.left || 10));
        a -= c;
        (this.s || null).g.y = a;
        (this.s || null).g.x = d;
        c = new N(d, a);
        _.tk(this.A(), c);
      }
    };
    _.g.S = function (a) {
      Y.prototype.S.call(this, a);
    };
    _.g.Lb = function (a) {
      this.h = a;
    };
    _.g.oa = function (a) {
      this.P = a;
    };
    _.g.mb = function (a) {
      a = a ? (0, _.Xb)(a) : '';
      this.B ? _.od(this.B, a) : Y.prototype.mb.call(this, a);
    };
    _.g.Va = function () {
      return this.h;
    };
    _.g.ga = function () {
      return this.P;
    };
    _.g.Qc = function () {
      return this.B ? _.td(this.B) : Y.prototype.Qc.call(this);
    };
    _.g.Bc = function (a) {
      this.M || Y.prototype.Bc.call(this, a);
    };
    _.g.Zd = function (a) {
      this.M || Y.prototype.Zd.call(this, a);
    };
    _.g.Yd = function (a) {
      this.M || Y.prototype.Yd.call(this, a);
    };
    var Is = {
      set: function (a, b) {
        a.className = b;
      },
      get: function (a) {
        a = a.className;
        return ('string' === typeof a && a.match(/\S+/g)) || [];
      },
      add: function (a, b) {
        var c = Is.get(a),
          d = Array.prototype.slice.call(arguments, 1),
          e = c.length + d.length;
        Is.rg(c, d);
        Is.set(a, c.join(' '));
        return c.length == e;
      },
      remove: function (a, b) {
        var c = Is.get(a),
          d = Array.prototype.slice.call(arguments, 1),
          e = Is.Hg(c, d);
        Is.set(a, e.join(' '));
        return e.length == c.length - d.length;
      },
      rg: function (a, b) {
        for (var c = 0; c < b.length; c++) _.ta(a, b[c]) || a.push(b[c]);
      },
      Hg: function (a, b) {
        return a.filter(function (c) {
          return !_.ta(b, c);
        });
      },
      Fl: function (a, b, c) {
        for (var d = Is.get(a), e = !1, f = 0; f < d.length; f++)
          d[f] == b && (d.splice(f--, 1), (e = !0));
        e && (d.push(c), Is.set(a, d.join(' ')));
        return e;
      },
      nl: function (a, b, c) {
        var d = Is.get(a);
        'string' === typeof b
          ? _.va(d, b)
          : Array.isArray(b) && (d = Is.Hg(d, b));
        'string' !== typeof c || _.ta(d, c)
          ? Array.isArray(c) && Is.rg(d, c)
          : d.push(c);
        Is.set(a, d.join(' '));
      },
      has: function (a, b) {
        return _.ta(Is.get(a), b);
      },
      enable: function (a, b, c) {
        c ? Is.add(a, b) : Is.remove(a, b);
      },
      toggle: function (a, b) {
        var c = !Is.has(a, b);
        Is.enable(a, b, c);
        return c;
      },
    };
    var Js = function (a, b) {
      ns.call(this, a);
      b = b || {};
      this.F = { apiKey: b.apiKey || '', Tb: b.Tb || 1 };
      this.g = null;
    };
    _.u(Js, ns);
    _.g = Js.prototype;
    _.g.attach = function (a, b) {
      b && ((b.g = a), this.g.attach(b));
    };
    _.g.kg = function (a) {
      a && Np(this.g, a);
    };
    _.g.Qh = function () {
      var a = this.g.Ob;
      if (a && void 0 !== a.g) {
        var b = a.g;
        a = this.ya.h[b];
        os(this, this.h, !1);
        this.h = b;
        os(this, b);
        this.g.Lb(a.ak);
        this.g.oa(a.dk);
        b = a.ha;
        this.g.Z = b && (0, _.Xb)(b);
        this.g.mb(a.text);
      }
    };
    _.g.Ph = function () {
      os(this, this.h, !1);
    };
    _.g.nh = function () {
      this.ya.h[this.h].wi.dispatchEvent('updating');
    };
    _.g.L = function () {
      this.g.R();
      this.g = null;
      ns.prototype.L.call(this);
    };
    _.g.Yg = function (a, b) {
      Is[b ? 'add' : 'remove'](a, 'goog-text-highlight');
    };
    /*
    
    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var Ks =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
        '',
      );
    var Ls = function (a) {
      this.s = a;
      this.l = this.h = this.o = this.j = -1;
      this.g = !1;
      this.B = 0;
      this.K = '';
      this.M = 0;
    };
    Ls.prototype.start = function () {
      if (!this.g) {
        this.g = !0;
        var a = [],
          b;
        var c = 62;
        for (b = 0; 15 > b; b++) a[b] = Ks[0 | (Math.random() * c)];
        this.K = a.join('');
        this.B = 0;
        this.l = this.h = this.o = this.j = -1;
        this.M = _.ub();
        _.kg(this.C, 1e4, this);
      }
    };
    Ls.prototype.stop = function () {
      this.g && ((this.g = !1), Ms(this));
    };
    Ls.prototype.C = function () {
      this.g && (Ms(this), _.kg(this.C, 1e3, this));
    };
    var Ms = function (a) {
      var b = a.s.l,
        c = a.s.s,
        d = a.s.j,
        e = a.s.o;
      if (a.j != b || a.o != c || a.h != d || a.l != e) {
        var f = {};
        f.ct = b;
        f.cv = c;
        f.cts = d;
        f.cvs = e;
        f.sid = a.K;
        f.seq = a.B++;
        f.tat = _.ub() - a.M;
        if (0 <= a.j || 0 <= a.o || 0 <= a.h || 0 <= a.l)
          (f.pt = a.j), (f.pv = a.o), (f.pts = a.h), (f.pvs = a.l);
        _.hi('te_v', f);
        a.j = b;
        a.o = c;
        a.h = d;
        a.l = e;
      }
    };
    var Ns = function () {
      this.o = this.j = this.s = this.l = 0;
      this.g = [];
      this.h =
        null != _.p.IntersectionObserver
          ? new IntersectionObserver((0, _.w)(this.C, this))
          : null;
    };
    Ns.prototype.attach = function (a, b) {
      this.j += b;
      var c = this.g.length;
      this.g.push(b);
      for (b = 0; b < a.length; ++b) {
        var d = a[b];
        qj(d)
          ? ((d[Os] = c),
            (this.l += _.td(d).length),
            this.h && this.h.observe(d))
          : this.dh(d.nodeType);
      }
    };
    Ns.prototype.reset = function () {
      this.o = this.j = this.s = this.l = 0;
      this.g = [];
    };
    Ns.prototype.C = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (0 < c.intersectionRatio && null != c.target[Os]) {
          this.s += _.td(c.target).length;
          var d = c.target[Os];
          this.o += this.g[d];
          this.g[d] = 0;
          c.target[Os] = void 0;
        }
      }
    };
    _.Ko.attach(36546, Ns.prototype, { dh: 1 });
    var Os = '_gt_' + Math.random().toString(36).substr(2);
    _.Ps = function (a, b) {
      _.y.call(this);
      a = a || {};
      this.F = _.Lh(a);
      this.F.Tb = a.Tb;
      this.F.pe = !!a.pe;
      this.F.ri = parseInt(a.ri, 10) || 300;
      this.F.Nj = a.Nj;
      this.F.trackVisibility = a.trackVisibility || !1;
      this.o = 0;
      this.h = {};
      this.H = new _.J(this);
      this.j = new Js(this, this.F);
      b && (this.j.j = b || {});
      a = this.j;
      a.g = new Gs({ Zj: a.F.Zj });
      a.g.Xg = 300;
      a.g.zh = 1e3;
      a.g.nd(!0);
      a.H.D(a.g, 'show', (0, _.w)(a.Qh, a));
      a.H.D(a.g, 'hide', (0, _.w)(a.Ph, a));
      b = new ls(
        { apiKey: a.F.apiKey, id: 'alternate', vf: _.X.Kh, Id: !0 },
        a.j,
      );
      a.g.Je(b);
      a.H.D(b, 'submitted', (0, _.w)(a.nh, a));
      a.F.Tb &&
        ((b = new ms({ id: 'contribute', ee: 'dblclick', Id: !0 }, a.j)),
        a.g.Je(b),
        a.H.D(b, 'submitted', (0, _.w)(a.nh, a)));
      a.g.ja();
      this.l = this.g = null;
      this.F.trackVisibility &&
        null != _.p.IntersectionObserver &&
        ((this.g = new Ns()), (this.l = new Ls(this.g)));
    };
    _.u(_.Ps, _.y);
    var Qs = function (a) {
      a.l && a.l.stop();
      for (var b in a.h) {
        var c = a,
          d = b,
          e = c.h[d];
        if (e) {
          if (c.g)
            for (var f = c.g, h = e.Ra, k = 0; k < h.length; ++k) {
              var l = f,
                m = h[k];
              qj(m)
                ? ((m[Os] = void 0), l.h && l.h.unobserve(m))
                : l.dh(m.nodeType);
            }
          for (f = 0; f < e.Ra.length; ++f) e.Ra[f] && c.j.kg(e.Ra[f]);
          delete c.h[d];
        }
      }
      a.g && a.g.reset();
    };
    _.Ps.prototype.L = function () {
      Qs(this);
      this.H.R();
      this.H = null;
      this.j.R();
      this.j = null;
    };
    var Rs = function (a) {
        for (var b = 0; b < a.length; ++b)
          if (a[b] && a[b].node) return a[b].node;
        return null;
      },
      Vs = function (a) {
        var b = Rs(a);
        if (!b) return null;
        var c = [],
          d = [],
          e = [];
        b = new qp(b, !0);
        var f = a[a.length - 1].node,
          h = 0,
          k = !1;
        do {
          b.next();
          var l = b.node();
          if (!l) break;
          var m = b.g.g,
            n = b.depth();
          for (1 == m && --n; h < a.length && !a[h].node; ) ++h;
          l == a[h].node ||
          (!k &&
            1 == m &&
            (null != l && null == l.previousSibling ? 0 : !Ss(Ts(l))))
            ? ((m = Us(l)),
              d.push({ node: m, mb: function () {} }),
              (e[d.length - 1] = n),
              nj(m, l),
              l == a[h].node && ((c[h++] = d.length - 1), (k = !0)))
            : (k = !1);
        } while (l != f);
        return { ag: e, Jj: c, hj: d };
      },
      Ss = function (a) {
        return null != a && np[a.tagName];
      },
      Ts = function (a) {
        if (null == a) return null;
        for (
          a = a.previousSibling;
          null != a && null != a && 3 == a.nodeType && '' == (0, _.Xb)(_.td(a));

        )
          a = a.previousSibling;
        return a;
      },
      Ys = function (a, b, c, d, e, f, h) {
        _.I.call(this);
        this.g = [];
        for (var k = 0; k < a.length; ++k)
          this.g.push('nodeType' in a[k] ? Ws(a[k]) : a[k]), Xs(a[k].node);
        this.j = b;
        this.M = d || 0;
        this.Z = e || 0;
        this.C = c;
        this.ya = f || null;
        this.vc = h || 'transparent';
        this.T = this.K = this.O = !1;
        this.o = [];
        this.s = [];
        this.h = [];
        this.W = [];
        this.H = new _.J(this);
        this.l = this.J = !1;
      },
      Ws,
      Xs,
      ft,
      dt,
      Us;
    _.u(Ys, _.I);
    var at = function (a) {
        if (!a) return !1;
        if (3 != a.nodeType || !_.B) return Zs in a && !!a[Zs];
        if (!a.parentNode) return !0;
        if (!($s in a.parentNode)) return !1;
        var b = a.parentNode[$s];
        if (!b || !b[a.nodeValue]) return !1;
        b = b[a.nodeValue];
        for (var c = 0; c < b.length; ++c) if (b[c] == a) return !0;
        return !1;
      },
      bt = function (a, b) {
        if (!a) return '';
        if ('TITLE' == a.tagName) return String(document.title);
        3 == a.nodeType ? (b = 'nodeValue') : b || (b = 'value');
        return a.getAttribute && a.getAttribute(b)
          ? String(a.getAttribute(b))
          : 'string' === typeof a[b]
          ? String(a[b])
          : '';
      };
    Ys.prototype.wa = function () {
      return this.j;
    };
    var ct = function (a, b, c) {
        b = { oh: b, Hf: c, pa: [] };
        a.h.push(b);
        return b;
      },
      et = function (a) {
        if (!a.l && a.O && !a.K && !a.T) {
          a.K = !0;
          var b;
          if ((b = dt(a.g))) {
            b = a.g;
            var c = a.h;
            if (1 == b.length && b[0] && b[0].$f) {
              for (var d = [], e = 0; e < c.length; ++e)
                for (var f = 0; f < c[e].pa.length; ++f) d.push(c[e].pa[f].ha);
              b[0].mb(d.join(' '), b[0].node);
              b = !0;
            } else b = !1;
            b = !b;
          }
          if (b && (b = Vs(a.g))) {
            a.s = b.Jj;
            a.o = b.hj;
            d = a.g;
            e = a.s;
            f = a.o;
            var h = b.ag;
            c = [];
            for (var k = 0; k < d.length; ++k)
              if (((c[k] = []), d[k].node && void 0 !== e[k]))
                for (var l = 0; l < f.length; ++l)
                  if (!(h[l] > h[e[k]])) {
                    if (h[l] == h[e[k]]) {
                      if (f[l].node.parentNode != f[e[k]].node.parentNode)
                        continue;
                    } else {
                      for (
                        var m = h[e[k]] - h[l], n = f[e[k]].node.parentNode;
                        m-- && n && n != f[l].node.parentNode;

                      )
                        n = n.parentNode;
                      if (n != f[l].node.parentNode) continue;
                    }
                    c[k].push(l);
                  }
            d = a.g;
            e = a.h;
            f = -1;
            for (h = e.length - 1; 0 <= h; --h)
              for (k = e[h], l = k.pa.length - 1; 0 <= l; --l)
                if (((m = k.pa[l]), !(0 > m.fa) && d[m.fa] && d[m.fa].node))
                  if (0 > f)
                    (m.be = _.wo(c[m.fa])), (f = c[m.fa][c[m.fa].length - 1]);
                  else
                    for (n = c[m.fa].length - 1; 0 <= n; --n)
                      if (c[m.fa][n] <= f) {
                        m.be = _.wo(c[m.fa].slice(0, n + 1));
                        f = c[m.fa][n];
                        break;
                      }
            for (c = e = 0; c < a.h.length; ++c) {
              d = a.h[c];
              f = a.g;
              h = d;
              k = b.ag;
              l = a.s;
              m = '';
              for (n = 0; n < h.pa.length; ++n) {
                var q = h.pa[n];
                m += q.ha;
                if (0 > q.fa) {
                  var r = -1,
                    z = -1,
                    G = l[h.pa[n - 1].fa];
                  void 0 !== G && (r = k[G]);
                  n < h.pa.length - 1 &&
                    ((G = l[h.pa[n + 1].fa]), void 0 !== G && (z = k[G]));
                  if (0 <= r || 0 <= z)
                    a: if (
                      ((z = (0 > r || z < r) && n < h.pa.length - 1),
                      (r = h.pa[z ? n + 1 : n - 1]),
                      !(r.fa >= f.length || null == f[r.fa].node))
                    ) {
                      G = q.ha;
                      q.ha = '';
                      if (
                        /^ +$/.test(G) &&
                        ((q = z
                          ? r.ha.charCodeAt(0)
                          : r.ha.charCodeAt(r.ha.length - 1)),
                        (3584 <= q && 3711 >= q) ||
                          (12288 <= q && 12351 >= q) ||
                          (12352 <= q && 12543 >= q) ||
                          (12784 <= q && 12799 >= q) ||
                          (19968 <= q && 40959 >= q) ||
                          (65280 <= q && 65519 >= q))
                      )
                        break a;
                      r.ha = z ? G + r.ha : r.ha + G;
                    }
                }
              }
              f = m;
              h = a.g;
              k = d;
              l = a.o;
              m = b.ag;
              n = a.s;
              q = [];
              for (r = 0; r < k.pa.length && !(e >= l.length); ++r)
                if (
                  ((z = k.pa[r]), z.be && !(0 > z.fa) && h[z.fa].node && z.ha)
                )
                  if (
                    e == n[z.fa] ||
                    (e in z.be && (!(e + 1 in z.be) || e + 1 != n[z.fa]))
                  ) {
                    if (l[e] && l[e].node) {
                      G = Us(l[e].node);
                      q.push(G);
                      for (
                        var R = l[e].node,
                          sd = m[n[z.fa]] - m[e],
                          mc = G,
                          bc = h[z.fa].node.parentNode,
                          hf = mc;
                        bc && sd--;

                      )
                        (hf = bc.cloneNode(!1)),
                          hf.appendChild(mc),
                          (bc = bc.parentNode),
                          (mc = hf);
                      R.appendChild(hf);
                      R = h[z.fa].node;
                      h[z.fa].te
                        ? h[z.fa].$g || G.appendChild(R)
                        : ((R = h[z.fa].node.cloneNode(!1)),
                          R.id && (R.id = ''),
                          G.appendChild(R));
                      h[z.fa].mb(z.ha, R);
                    }
                  } else ++e, --r;
              h = q;
              q = a.g;
              k = a.C;
              if (d.oh) k = d.oh;
              else {
                l = q.length;
                m = -1;
                for (n = 0; n < d.pa.length; ++n)
                  (r = d.pa[n].fa),
                    0 <= r &&
                      q[r] &&
                      q[r].node &&
                      ((m = Math.max(m, r)), (l = Math.min(l, r)));
                q = '';
                for (n = l; n <= m; ++n) k[n] && (q += k[n]);
                k = q;
              }
              m = h;
              n = k;
              if (a.ya) {
                if (3 != a.ya.F.Tb) {
                  h = a.W;
                  k = h.push;
                  l = a.ya;
                  d = d.Hf;
                  q = a;
                  d = l.h[++l.o] = {
                    id: l.o.toString(),
                    wi: q,
                    text: n,
                    El: d || n,
                    ha: f,
                    ak: l.s,
                    dk: l.C,
                    Ra: m,
                  };
                  for (f = 0; f < m.length; ++f) m[f] && l.j.attach(d.id, m[f]);
                  l.g && l.g.attach(m, n.length);
                  l.l && l.l.start();
                  k.call(h, d.id);
                }
              } else for (d = 0; d < m.length; ++d) m[d].title = n;
            }
            b = a.g;
            for (c = 0; c < b.length; ++c)
              b[c].node && !b[c].te && _.pj(b[c].node);
            b = a.g;
            c = a.o;
            a = a.s;
            for (e = d = 0; e < c.length; ++e)
              if ((f = c[e].node)) {
                for (; d < b.length && e > a[d]; ) d++;
                (d >= b.length || e != a[d]) &&
                  !f.firstChild &&
                  (_.pj(f), (c[e].node = null));
              }
          }
        }
      };
    Ys.prototype.restore = function () {
      if (this.K)
        if (
          ((this.K = !1),
          this.ya && Qs(this.ya),
          (this.W = []),
          dt(this.o),
          1 == this.g.length && this.g[0].$f)
        )
          this.g[0].mb(this.C[0], this.g[0].node);
        else {
          for (var a = 0, b = 0; b < this.o.length; ++b) {
            var c = this.o[b].node;
            if (c) {
              for (; a < this.g.length && b > this.s[a]; ) {
                var d = a++;
                this.g[d].node && (ft(this.g[d].node), (this.g[d].node = null));
              }
              if (a < this.g.length && b == this.s[a] && this.g[a].node) {
                this.g[a].$g || (_.jd(c), c.appendChild(this.g[a].node));
                this.g[a].mb(this.C[a], this.g[a].node);
                a++;
                d = c;
                var e = d.parentNode;
                if (e && 11 != e.nodeType)
                  if (d.removeNode) d.removeNode(!1);
                  else {
                    for (; (c = d.firstChild); ) e.insertBefore(c, d);
                    _.pj(d);
                  }
              } else _.pj(c);
            }
          }
          this.o = [];
        }
    };
    Ys.prototype.L = function () {
      _.I.prototype.L.call(this);
      this.restore();
      for (var a = 0; a < this.g.length; ++a)
        this.g[a].node && ft(this.g[a].node);
      this.g = null;
    };
    Xs = function (a) {
      if (a)
        if (3 == a.nodeType && _.B) {
          ($s in a.parentNode && a.parentNode[$s]) || (a.parentNode[$s] = {});
          var b = a.parentNode[$s];
          b[a.nodeValue] || (b[a.nodeValue] = []);
          b = b[a.nodeValue];
          for (var c = 0; c < b.length; ++c) if (b[c] == a) return;
          b.push(a);
        } else a[Zs] = 1;
    };
    ft = function (a) {
      if (!a || (3 == a.nodeType && _.B)) {
        var b = a.parentNode;
        if (b && $s in b) {
          var c = b[$s];
          if (c && a && c[a.nodeValue]) {
            var d = c[a.nodeValue];
            if (d)
              for (var e = 0; e < d.length; ++e)
                if (d[e] == a) {
                  d.splice(e, 1);
                  break;
                }
            0 == d.length && delete c[a.nodeValue];
          }
          if (c && Io(c))
            try {
              delete b[$s];
            } catch (f) {
              b[$s] = '';
            }
        }
      } else if (Zs in a)
        try {
          delete a[Zs];
        } catch (f) {
          a[Zs] = '';
        }
    };
    dt = function (a) {
      for (var b = 0; b < a.length; ++b)
        try {
          a[b].node && !a[b].node.parentNode && (a[b].node = null);
        } catch (c) {
          a[b].node = null;
        }
      for (b = a.length - 1; 0 <= b && !a[b].node; --b);
      a.length = b + 1;
      return a.length;
    };
    Us = function (a) {
      a = a.ownerDocument
        ? a.ownerDocument.createElement('font')
        : _.gd(document, 'font');
      Xs(a);
      a.style.verticalAlign = 'inherit';
      return a;
    };
    _.gt = function () {
      this.h = {};
      this.g = {};
    };
    _.gt.prototype.has = function (a, b) {
      return (
        null != this.h[a] ||
        null != this.g[a] ||
        (b && (a in this.h || a in this.g))
      );
    };
    _.gt.prototype.write = function (a, b) {
      this.g[a] = b;
    };
    _.gt.prototype.remove = function (a) {
      delete this.g[a];
      delete this.h[a];
    };
    var Zs = '_gt_' + Math.random().toString(36).substr(2),
      $s = '_gtn_' + Math.random().toString(36).substr(2);
    (function () {
      function a(c) {
        document.title = c;
      }
      var b = {};
      Ws = function (c, d) {
        if ('TITLE' == c.tagName)
          return { node: c, mb: a, te: !0, $g: !0, $f: !0 };
        if (3 == c.nodeType)
          return {
            node: c,
            mb: function (e, f) {
              _.od(f, e);
            },
          };
        d || (d = 'value');
        b[d] ||
          (b[d] = function (e, f) {
            f.setAttribute && f.setAttribute(d, e);
            'string' === typeof e && (f[d] = e);
          });
        c = { node: c, mb: b[d], te: !0 };
        'value' != d && (c.$f = !0);
        return c;
      };
    })();
    var ht = function (a, b, c, d) {
        d =
          d.firstChild && 3 == d.firstChild.nodeType
            ? d.firstChild.nodeValue
            : _.td(d);
        d = { fa: c, ha: gj(d) };
        a.push(d);
        b[c] ? (b[c].end = d) : (b[c] = { start: d, end: d });
        return d;
      },
      it = function (a) {
        for (var b, c = a.firstChild; c; c = b)
          (b = c.nextSibling),
            3 != c.nodeType && (c == a.firstChild ? nj(c, a) : oj(c, a), it(c));
      };
    var jt = function (a, b) {
        this.K = a || null;
        this.T = b || hp.ea();
        this.C = this.s = this.J = null;
        this.l = this.j = !1;
        this.o = null;
        this.g = [];
        this.h = 0;
      },
      kt = function (a, b) {
        a.j || (a.J = b);
      },
      lt = function (a, b, c) {
        a.s = c ? (0, _.w)(b, c) : b;
      },
      mt = function (a, b, c) {
        a.C = c ? (0, _.w)(b, c) : b;
      },
      nt = function (a, b) {
        a.j || ((a.j = !0), (a.M = b), a.h++, (a.o = a.J), a.B());
      };
    jt.prototype.stop = function () {
      this.h++;
      this.j = !1;
      this.g = [];
    };
    var ot = function (a) {
        if (!a.j) return null;
        for (var b = !1, c = 0; c < a.g.length; ++c)
          if (a.g[c].target === a) {
            a.g[c].ready = !1;
            a.g[c].Ih = a.h + 1;
            b = !0;
            break;
          }
        b || a.g.push({ target: a, ready: !1, Ih: a.h + 1 });
        return (0, _.w)(a.B, a, a, a.h + 1);
      },
      pt = function (a) {
        if (!a.j) return !0;
        for (var b = 0; b < a.g.length; ++b)
          if (a.g[b].target === a && a.g[b].Ih == a.h) return a.g[b].ready;
        return !0;
      };
    jt.prototype.B = function (a, b) {
      if (this.j) {
        if (a)
          for (var c = 0; c < this.g.length; ++c)
            if (this.g[c].target === a) {
              this.g[c].ready = !0;
              break;
            }
        this.l || this.T.add((0, _.w)(this.O, this, b || this.h));
      }
    };
    jt.prototype.O = function (a) {
      if (this.h != a) return !1;
      a = this.o;
      if (a == qt)
        return this.stop(), this.s && this.s.call(this.K, this, this.M), !1;
      this.l = !0;
      try {
        var b = a.call(this.K, this, this.M);
        if (!b) throw Error();
      } catch (c) {
        this.stop();
        a = c;
        if (this.C) this.C.call(this.K, a, this, this.M);
        else throw a;
        return !1;
      } finally {
        this.l = !1;
      }
      b != rt && ((this.o = b), this.h++, this.B());
      return !1;
    };
    var rt = function () {},
      qt = function () {};
    var tt = function (a, b, c, d, e) {
        b = b || {};
        this.O = e || [];
        this.s = [];
        this.M = [];
        st(this, a || document.documentElement, void 0 === b.uh || !!b.uh);
        this.B = c || Ys;
        this.K = b.mj;
        this.j = this.g = this.o = this.ad = null;
        this.C = !!b.hk;
        this.ta = !!b.gk;
        this.W = this.C ? 27 : 13;
        this.T = !0;
        this.J = [];
        this.l = new jt(this, d);
      },
      ut = function (a, b, c, d) {
        a.l.j ||
          ((b = {
            Gh: b,
            Ah: c,
            Ra: [],
            ph: [],
            dc: [],
            textLength: 0,
            size: 0,
            continuous: !0,
          }),
          (a.ad = null),
          kt(a.l, a.h),
          lt(a.l, d),
          mt(
            a.l,
            (0, _.w)(function (e) {
              this.tj(e);
              d();
            }, a),
          ),
          nt(a.l, b));
      },
      vt = function (a, b) {
        return 0 < a.Ra.length
          ? new b(a.Ra, a.dc.join(''), a.ph, a.textLength, a.size)
          : null;
      },
      wt = function (a, b) {
        if (!a.j) return (a.ad = vt(b, a.B)), !0;
        if (!b.continuous && 0 < b.Ra.length) return (a.ad = vt(b, a.B)), !0;
        b.continuous = a.j.kh;
        a: {
          var c = a.j;
          var d = a.W;
          if (b.size > b.Ah || b.textLength > b.Gh) c = !1;
          else {
            var e = c.size,
              f = c.text.length;
            if (
              0 != b.Ra.length &&
              ((e += 1 == b.Ra.length ? b.size + d + d : b.size + d),
              (f += b.textLength),
              e > b.Ah || f > b.Gh)
            ) {
              c = !1;
              break a;
            }
            b.size = e;
            b.textLength = f;
            b.Ra.push(c.node);
            b.ph.push(c.text);
            d = b.Ra.length - 1;
            0 == d
              ? b.dc.push(c.Ze)
              : (1 == d && (b.dc[0] = '<a i=0>' + b.dc[0] + '</a>'),
                b.dc.push('<a i=' + d + '>'),
                b.dc.push(c.Ze),
                b.dc.push('</a>'));
            c = !0;
          }
        }
        if (c) return (a.j = null), !1;
        a.ad = vt(b, a.B);
        return !0;
      },
      xt = function (a, b, c) {
        var d = bt(b, c);
        d && (0, _.Xb)(_.Zi(d)) && a.J.push({ node: b, oi: c, text: d });
      },
      Ft,
      Ct,
      zt,
      Bt,
      st,
      Dt,
      At,
      yt;
    tt.prototype.h = function (a, b) {
      var c = this;
      if (this.j && wt(this, b)) return qt;
      if (!this.g) {
        this.T = !!this.s.length;
        if (!this.s.length && (a = this.J.shift()))
          return (
            (this.j = {
              kh: !1,
              node: Ws(a.node, a.oi),
              text: a.text,
              Ze: _.cj(a.text),
              size: this.C ? _.Xc(a.text).length : a.text.length,
            }),
            (b.continuous = !1),
            wt(this, b),
            qt
          );
        a = this.s.shift() || this.M.shift();
        if (!a) return (this.j = null), wt(this, b), qt;
        this.o = [a.fk];
        this.g = new qp(a.root);
      }
      this.g.next();
      if (this.g.done) return (this.g = null), (b.continuous = !1), this.h;
      a = this.g.node();
      var d = this.g.g.g;
      if (-1 == d) return yt(this), zt(a) || (b.continuous = !1), this.h;
      At(this, a);
      d = 1 == d;
      var e = Bt(a);
      if ((e || d) && this.T && !Ct(a))
        return st(this, a, Dt(this), !0), this.g.g.Mb(), yt(this), this.h;
      if (
        d &&
        Dt(this) &&
        (this.ta && xt(this, a, 'title'),
        xt(this, a, 'alt'),
        xt(this, a, 'placeholder'),
        xt(this, a, 'aria-label'),
        xt(this, a, 'aria-placeholder'),
        xt(this, a, 'aria-roledescription'),
        xt(this, a, 'aria-valuetext'),
        rp(this.g))
      )
        for (var f = a.firstChild; f; ) {
          if (3 == f.nodeType) {
            var h = f.nodeValue.split('\n');
            if (
              2 < h.length ||
              (2 == h.length && '' != (0, _.Xb)(h[0]) && '' != (0, _.Xb)(h[1]))
            ) {
              f.nodeValue = h[0];
              for (var k = 1; k < h.length; ++k) {
                var l = _.E(a).createElement('font');
                this.O.push(l);
                oj(l, f);
                f = l;
                oj(_.E(a).createTextNode('\n' + h[k]), f);
                f = f.nextSibling;
              }
            }
          }
          f = f.nextSibling;
        }
      a.shadowRoot &&
        Array.from(a.shadowRoot.childNodes).forEach(function (n) {
          st(c, n, Dt(c));
        });
      if (e) {
        this.g.g.Mb();
        if (Dt(this)) {
          var m = bt(a);
          if (
            (0, _.Xb)(_.Zi(m)) &&
            ((this.j = {
              kh: !0,
              node: Ws(a),
              text: m,
              Ze: _.cj(m),
              size: this.C ? _.Xc(m).length : m.length,
            }),
            wt(this, b))
          )
            return yt(this), qt;
        }
        yt(this);
        return this.h;
      }
      if (d) {
        if (_.Et(a) || (!a.firstChild && 'IFRAME' != a.tagName))
          return (
            (b.continuous = b.continuous && !!np[a.tagName]),
            this.g.g.Mb(),
            yt(this),
            this.h
          );
        if ('IFRAME' == a.tagName) {
          try {
            (a.src.match(/https?:\/\//) &&
              _.Ff(a.src.match(_.Ef)[3] || null) != window.location.hostname) ||
              ((m = _.vj(a).documentElement) && st(this, m, Dt(this)));
          } catch (n) {}
          b.continuous = !1;
          this.g.g.Mb();
          yt(this);
          return this.h;
        }
        Dt(this) && zt(a)
          ? this.K && 'A' == a.tagName && a.href && this.K(a)
          : (b.continuous = !1);
        return this.h;
      }
      this.g.g.Mb();
      yt(this);
      return this.h;
    };
    _.Et = function (a) {
      return (
        at(a) ||
        (3 != a.nodeType &&
          (!a.tagName ||
            mp[a.tagName] ||
            np[a.tagName] ||
            kl(a, 'skiptranslate')))
      );
    };
    Ft = function (a) {
      var b = _.E(a);
      return b.defaultView && b.defaultView.getComputedStyle
        ? b.defaultView.getComputedStyle(a, null)
        : a.currentStyle;
    };
    Ct = function (a) {
      return 3 == a.nodeType
        ? !0
        : 1 != a.nodeType
        ? !1
        : a.offsetWidth && a.offsetHeight
        ? !0
        : ((a = Ft(a)), !!a && 'none' != a.display && 'hidden' != a.visibility);
    };
    zt = function (a) {
      if (3 == a.nodeType) return !0;
      if (1 != a.nodeType) return !1;
      var b = Ft(a);
      return !!lp[a.tagName] && (!b || !b.display || 'inline' == b.display);
    };
    Bt = function (a) {
      return (
        !!a &&
        ((3 == a.nodeType && 'string' === typeof a.nodeValue) ||
          ('TITLE' == a.tagName && 'string' === typeof a.value) ||
          ('TEXTAREA' == a.tagName && kl(a, 'translate')) ||
          ('INPUT' == a.tagName && (op[a.type] || kl(a, 'translate'))))
      );
    };
    st = function (a, b, c, d) {
      (d ? a.M : a.s).push({ root: b, fk: void 0 === c || c });
    };
    Dt = function (a) {
      return a.o[a.o.length - 1];
    };
    At = function (a, b) {
      b =
        !at(b) &&
        ((b.nodeType == Bi && Dt(a)) ||
          (!(
            kl(b, 'notranslate') ||
            (b.attributes &&
              b.attributes.translate &&
              'no' == b.attributes.translate.value)
          ) &&
            (kl(b, 'translate') ||
              (!!b.attributes &&
                !!b.attributes.translate &&
                'yes' == b.attributes.translate.value) ||
              Dt(a))));
      a.o.push(b);
    };
    yt = function (a) {
      a.o.pop();
    };
    _.Ko.attach(5762, tt.prototype, { tj: 1 });
    var Gt = function () {
      _.y.call(this);
      this.g = [];
    };
    _.u(Gt, _.y);
    Gt.prototype.restore = function () {
      _.kg(this.h, 0, this);
    };
    Gt.prototype.h = function () {
      for (var a = 0; a < this.g.length; ++a) _.pj(this.g[a]);
      this.g = [];
    };
    Gt.prototype.L = function () {
      _.y.prototype.L.call(this);
      this.restore();
    };
    var Ht = function (a) {
      var b = new _.vf();
      Hj(a, function (c) {
        if (qj(c)) b.add(c);
        else {
          a: {
            var d;
            if (
              _.Ac &&
              !(
                _.B &&
                _.wc('9') &&
                !_.wc('10') &&
                _.p.SVGElement &&
                c instanceof _.p.SVGElement
              ) &&
              (d = c.parentElement)
            ) {
              c = d;
              break a;
            }
            d = c.parentNode;
            c = qj(d) ? d : null;
          }
          null != c && b.add(c);
        }
      });
      return b;
    };
    var It = function (a) {
      this.h = !0;
      this.l = a;
      this.j = !1;
      this.g = [];
    };
    It.prototype.wa = function () {
      return this.g.join('');
    };
    var Jt = function (a, b) {
        this.o = a;
        this.l = !0;
        this.j = b;
        this.g = null;
        this.h = 0;
      },
      Kt = function (a, b) {
        return a.l ? (b((0, _.w)(a.s, a), a.o, a.j ? 'en' : ''), !0) : !1;
      };
    Jt.prototype.s = function (a, b, c) {
      this.g = b;
      this.h = c;
      a();
    };
    var Lt = function (a, b) {
        this.l = a;
        this.K = !!b;
        this.g = this.B = 0;
        this.o = this.j = -1;
        this.s = this.C = this.h = 0;
      },
      Ot = function (a, b, c) {
        a.K && (b -= 9);
        for (var d = '', e = 0, f = a.B; f < a.l.length; ++f) {
          var h = a.l.charAt(f),
            k = h.charCodeAt(0);
          e++;
          a.h += a.K
            ? 127 >= k
              ? 32 >= k || Mt[k]
                ? 3
                : 1
              : 2047 >= k ||
                (55296 <= k && 56319 >= k) ||
                (56320 <= k && 57343 >= k)
              ? 6
              : 9
            : 1;
          k = a.h >= b;
          Nt[h]
            ? ((a.o = f), (a.C = a.h), (k = k || e > c))
            : ' ' == h && ((a.j = f), (a.s = a.h), (k = k || e > c));
          if (k)
            return (
              0 <= a.o
                ? ((d = a.l.substring(a.g, a.o + 1)),
                  (a.h -= a.C),
                  (a.g = a.o + 1),
                  a.o >= a.j ? ((a.j = -1), (a.s = 0)) : (a.s -= a.C),
                  (a.o = -1),
                  (a.C = 0))
                : 0 <= a.j
                ? ((d = a.l.substring(a.g, a.j + 1)),
                  (a.h -= a.s),
                  (a.g = a.j + 1),
                  (a.j = -1),
                  (a.s = 0))
                : ((d = a.l.substring(a.g, f + 1)),
                  (a.h = 0),
                  (a.g = f + 1),
                  (a.o = a.j = -1),
                  (a.s = a.C = 0)),
              (a.B = f + 1),
              d
            );
        }
        a.g < a.l.length && ((d = a.l.substring(a.g)), (a.g = a.l.length));
        return d;
      },
      Nt = _.wo('. , ; : \\? !'.split(' ')),
      Mt = _.wo([
        34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93,
        94, 96, 123, 124, 125, 127,
      ]);
    var Pt = function (a, b, c, d, e, f) {
        this.C = d || _.v;
        this.Db = f || _.v;
        this.W = !!e;
        this.j = a.g.Af;
        this.l = 0;
        this.T = _.v;
        this.K = c;
        this.M = this.h = this.o = 0;
        this.g = null;
        this.O = 0;
        this.ba = !1;
        this.aa = a.g.yf;
        this.ta = [];
        this.X = 0;
        this.s = (this.Z = a.g.Qd)
          ? a.g.he - new Xj(a.g.Da.g).toString().length
          : a.g.he;
        this.Na = this.W ? 1 : 6;
        this.xa = a.g.Rf;
        this.V = b;
        this.B = [];
        this.gb = a;
      },
      Qt = function (a, b) {
        var c = 0;
        a.T = (0, _.w)(function () {
          ++c == this.B.length && b();
        }, a);
      },
      Rt = function (a, b, c) {
        if (0 == a.h && ((a.h = b ? 860 : a.s), !c || c <= a.s)) {
          a.o = a.h;
          return;
        }
        do (b = a.h), a.h < a.s && ((a.h *= a.Na), a.h > a.s && (a.h = a.s));
        while (b != a.h && c && a.h < c);
        a.o = a.h;
      },
      St = function (a, b) {
        var c = null != b,
          d = !c && !a.ba;
        (d || c) && a.C(100, d, b);
      },
      Tt = function (a) {
        return a.Z ? a.g.Z : a.g.wa().length;
      },
      Ut = function (a, b, c, d, e) {
        return new tt(
          a.V.shift(),
          { hk: a.Z, mj: b, uh: !0, gk: !!c },
          function () {
            var f = Array.prototype.slice.call(arguments);
            return new Ys(
              f.shift(),
              f.shift(),
              f.shift(),
              f.shift(),
              f.shift(),
              c,
              d,
            );
          },
          a.K,
          e,
        );
      },
      Xt = function (a, b, c) {
        if (0 < a.aa && Vt(b) >= a.aa) return !0;
        if (Tt(a) > a.h) {
          if (0 < Vt(b)) return !0;
          Rt(a, c, Tt(a));
          for (var d = a.g.wa(), e = new Lt(d, a.Z), f; (f = Ot(e, a.h, a.j)); )
            if (
              (b.l.push(new Jt([f], !1)),
              (a.l += f.length),
              (a.j -= f.length),
              0 >= a.j)
            ) {
              b.K = d.substring(e.g);
              break;
            } else Rt(a, c);
          Wt(b, a.g, !0);
          a.g = null;
          return !0;
        }
        if (Tt(a) > a.o) return !0;
        Wt(b, a.g, !0);
        a.o -= Tt(a) + a.xa;
        a.l += a.g.M;
        a.j -= a.g.M;
        a.g = null;
        return !1;
      };
    var Yt = function (a, b) {
      _.y.call(this);
      this.l = b;
      this.j = { rootMargin: a };
      this.g = new IntersectionObserver((0, _.w)(this.h, this), this.j);
    };
    _.u(Yt, _.y);
    Yt.prototype.L = function () {
      _.y.prototype.L.call(this);
      this.g = null;
    };
    Yt.prototype.h = function (a) {
      for (var b = 0; b < a.length; b++)
        if (0 < a[b].intersectionRatio) {
          this.l();
          break;
        }
    };
    var Zt = function (a, b, c, d, e, f, h, k) {
        this.l = a;
        this.g = b;
        this.C = [];
        this.K = null;
        this.j = c;
        this.h = d;
        this.P = e;
        this.O = f;
        this.W = h;
        this.B = this.o = null;
        this.s = k || null;
        this.T = this.J = !1;
        this.M = {};
      },
      $t = function (a) {
        for (var b = new _.vf(), c = 0; c < a.length; c++) {
          for (var d = a[c], e = new _.vf(), f = 0; f < d.g.length; f++) {
            var h = d.g[f].node;
            null != h && e.add(h);
          }
          d = b;
          e = yi(e);
          f = e.length;
          for (h = 0; h < f; h++) d.add(e[h]);
          d.size = d.g.size;
        }
        return b;
      };
    Zt.prototype.trackVisibility = function (a) {
      a = this.o = new Yt('200px', (0, _.w)(this.Z, this, a));
      var b = Ht($t([].concat(this.g, this.C)));
      Hj(b, (0, _.w)(a.g.observe, a.g));
      a = this.B = new Yt('0px', (0, _.w)(this.V, this));
      b = Ht($t([].concat(this.g, this.C)));
      Hj(b, (0, _.w)(a.g.observe, a.g));
    };
    Zt.prototype.Z = function (a) {
      this.o && (this.o.g.disconnect(), (this.o = null));
      a();
    };
    Zt.prototype.V = function () {
      this.J = !0;
      au(this);
      !this.T && this.s && this.s.l();
    };
    var au = function (a) {
      a.B && (a.B.g.disconnect(), (a.B = null));
    };
    Zt.prototype.ta = function () {
      this.J && !this.T && this.s && this.s.j();
      this.o && (this.o.g.disconnect(), (this.o = null));
      au(this);
    };
    var Wt = function (a, b, c) {
        c ? (a.g.push(b), (a.M[b.wa()] = !0)) : a.C.push(b);
      },
      Vt = function (a) {
        return a.g.length + a.C.length;
      },
      bu = function (a) {
        if (0 == a.l.length) {
          for (var b = [], c = 0; c < a.g.length; ++c) b.push(a.g[c].wa());
          a.l.push(new Jt(b, !1));
        }
      };
    Zt.prototype.translate = function (a) {
      function b() {
        d++;
        d == c && e();
      }
      bu(this);
      for (
        var c = 0,
          d = 0,
          e = _.v,
          f = this.j,
          h = this.h,
          k = this.P,
          l = this.O,
          m = this.W,
          n = 0;
        n < this.l.length;
        ++n
      )
        Kt(this.l[n], function (q, r, z) {
          q = f.gb.translate(_.tb(q, b), r, z || h, k, ++f.X, l, m, f.W);
          f.ta.push(q);
          return q;
        }) && c++;
      0 != c && (e = ot(a));
      return c;
    };
    var cu = function (a, b) {
      _.y.call(this);
      this.g = [];
      this.j = [];
      this.h = a;
      this.P = b;
    };
    _.u(cu, _.y);
    cu.prototype.l = function (a) {
      var b = (0, _.Xb)(a.href);
      0 == b.indexOf('javascript:') ||
        0 <= b.indexOf('#') ||
        (this.j.push(a.href),
        this.g.push(a),
        (a.href = b + '#googtrans/' + this.h + '/' + this.P));
    };
    cu.prototype.L = function () {
      _.y.prototype.L.call(this);
      this.restore();
    };
    cu.prototype.restore = function () {
      if (this.g.length) {
        for (var a = 0; a < this.g.length; ++a) this.g[a].href = this.j[a];
        this.g = [];
        this.j = [];
      }
    };
    var du = function (a, b) {
      _.y.call(this);
      this.g = a;
      this.h = _.Eb.test(b) ? 'translated-rtl' : 'translated-ltr';
      a = [].concat(this.g);
      for (b = 0; b < a.length; ++b) qj(a[b]) && _.Q(a[b], this.h);
    };
    _.u(du, _.y);
    du.prototype.L = function () {
      _.y.prototype.L.call(this);
      this.restore();
    };
    du.prototype.restore = function () {
      for (var a = [].concat(this.g), b = 0; b < a.length; ++b)
        qj(a[b]) && _.ml(a[b], this.h);
    };
    _.eu = function (a, b, c, d, e, f, h, k, l, m) {
      _.y.call(this);
      this.C = a;
      this.wb = b;
      this.ya = c || null;
      this.aa = m || null;
      this.J = null;
      this.Sa = !!d;
      this.Sb = e || 'transparent';
      this.Ob = !!f;
      this.K = [];
      this.ba = this.M = this.g = !1;
      this.j = k || new _.gt();
      this.xc = !k;
      this.X = h || hp.ea();
      this.Ta = new Gt();
      this.Na = this.la = this.T = !1;
      this.ob = this.l = 0.5;
      this.$a = 0.01;
      this.B = new _.jp(this.l);
      this.Z = (this.s = this.V = !!l)
        ? new MutationObserver((0, _.w)(this.Ri, this))
        : null;
      this.P = this.h = null;
      _.H(window, 'blur', this.Tg, !0, this);
      _.H(window, 'focus', this.Ug, !0, this);
    };
    _.u(_.eu, _.y);
    _.g = _.eu.prototype;
    _.g.Va = function () {
      return this.h ? this.h : '';
    };
    _.g.ga = function () {
      return this.P ? this.P : '';
    };
    _.g.ti = function (a) {
      this.pj.apply(this, arguments);
      this.o && this.o(0, !1, 1);
    };
    _.g.Cg = function (a) {
      this.qj.apply(this, arguments);
      this.o && this.o(0, !1, 1);
    };
    _.g.ui = function (a) {
      this.rj.apply(this, arguments);
      this.o && this.o(0, !1, 1);
    };
    _.g.vi = function (a) {
      this.sj.apply(this, arguments);
      this.o && this.o(0, !1, 1);
    };
    _.g.translate = function (a, b, c, d, e) {
      if (d || a != this.h || b != this.P)
        fu(this), this.xc && (this.j = new _.gt());
      else if (this.g) return;
      this.o = c;
      this.uc = e;
      this.s = this.V;
      this.Z &&
        this.Z.observe(document.body, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0,
        });
      this.g = !0;
      this.h = a;
      this.P = b;
      this.Sa && (this.J = new cu(a, b));
      this.Na = 'auto' == this.h;
      this.ya && ((c = this.ya), a && (c.s = a), b && (c.C = b));
      this.xa = new du(this.C, this.P);
      this.O = gu(this);
      (a = this.C instanceof Node ? this.C : null) && hu(a, this.P);
    };
    var gu = function (a) {
      var b = new jt(a, a.X);
      kt(b, a.Sg);
      mt(b, (0, _.w)(a.ti, a));
      nt(b, new Pt(a.wb, [].concat(a.C), a.X, a.o, a.s, a.uc));
      return b;
    };
    _.eu.prototype.restore = function () {
      fu(this);
      this.Ta.restore();
      var a = this.C instanceof Node ? this.C : null;
      a && hu(a, this.Va());
    };
    _.eu.prototype.L = function () {
      _.y.prototype.L.call(this);
      this.restore();
      _.Td(window, 'blur', this.Tg, !0, this);
      _.Td(window, 'focus', this.Ug, !0, this);
    };
    var iu = function (a, b, c, d) {
      var e = Io(a.j.h),
        f = new jt(a, b.K);
      b.B.push(f);
      lt(f, b.T);
      Rt(b, e);
      kt(f, d || a.Og);
      b = c || new Zt([], [], b, a.Va(), a.ga(), a.ba, a.M, a.aa);
      mt(f, a.$i, a);
      a.s && lt(f, b.ta, b);
      nt(f, b);
    };
    _.g = _.eu.prototype;
    _.g.$i = function (a, b, c) {
      c.ta();
      this.M ? this.vi(a) : this.ui(a);
      c.j.T();
    };
    _.g.Ug = function () {
      this.T = !1;
      this.W = 0;
      ip(this.B, this.l);
    };
    _.g.Tg = function (a) {
      a.target == window && ((this.T = !0), (this.W = 0), ip(this.B, 0.01));
    };
    _.g.Ri = function (a) {
      if (this.g && this.s) {
        for (var b = 0; b < a.length; b++)
          if (
            a[b].target &&
            a[b].target.className &&
            'string' === typeof a[b].target.className &&
            (0 <= a[b].target.className.indexOf('translate') ||
              0 == a[b].target.className.indexOf('goog-'))
          )
            return;
        this.X.add((0, _.w)(this.Qj, this));
      }
    };
    _.g.Qj = function () {
      this.M = !0;
      this.O.stop();
      this.O = gu(this);
      return !1;
    };
    _.g.Sg = function (a, b) {
      Qt(b, ot(a));
      iu(this, b);
      return this.dj;
    };
    _.g.dj = function (a, b) {
      if (!this.g) return qt;
      if (!pt(a)) return rt;
      if (!this.s)
        for (a = 0; a < this.K.length; ++a) {
          var c = (0, _.w)(this.sg, this, b, this.K[a]);
          b.K.add(c);
        }
      return this.cj;
    };
    _.g.Lg = function (a, b) {
      if (this.W && !this.T) {
        a = new Date().getTime() - this.W;
        var c = this.l;
        900 > a && 0.01 < c
          ? (c = Math.max(0.9 * c, 0.01))
          : 1100 < a && 0.5 > c && (c = Math.min(1.5 * c, 0.5));
        this.l = c;
        this.la ? (this.$a = 0.01) : (this.ob = this.l);
      }
      this.M = this.g = !0;
      this.W = new Date().getTime();
      this.wc !=
      (a =
        document.body.innerText ||
        document.body.textContent ||
        document.body.innerHTML)
        ? ((this.wc = a), (a = !0))
        : (a = !1);
      a
        ? ((this.la = !1),
          (this.l = this.ob),
          this.T || ip(this.B, this.l),
          (a = [].concat(this.C)),
          (c = this.B),
          (b.C = _.v),
          (b.V = a),
          (b.g = null),
          (b.X = 0),
          (b.B = []),
          (b.T = _.v),
          (b.K = c),
          (a = new jt(this, this.B)),
          kt(a, this.Sg),
          mt(a, (0, _.w)(this.Cg, this)),
          nt(a, b),
          (this.O = a))
        : ((this.la = !0),
          (this.l = this.$a),
          this.T || ip(this.B, this.l),
          (a = new jt(this, this.B)),
          kt(a, this.Lg),
          mt(a, (0, _.w)(this.Cg, this)),
          nt(a, b),
          (this.O = a));
      return qt;
    };
    _.g.cj = function (a, b) {
      if (!this.g) return qt;
      this.M = this.g = !1;
      this.Na ? St(b, !0) : (St(b), b.Db(b.l));
      if (this.Ob) return this.Lg;
      for (a = 0; a < b.B.length; ++a) b.B[a].stop();
      for (a = 0; a < b.ta.length; ++a) ep(b.gb, b.ta[a]);
      return qt;
    };
    var ju = function (a, b, c) {
      a: {
        var d = a.Sa ? (0, _.w)(a.J.l, a.J) : _.v,
          e = a.ya,
          f = a.Sb,
          h = a.Ta.g;
        b = ot(b);
        if (!c.J) {
          if (0 == c.V.length) {
            0 == c.l && 0 == c.X && c.C(0, !0);
            c = !1;
            break a;
          }
          c.J = Ut(c, d, e, f, h);
        }
        c.la = !0;
        ut(c.J, c.j, c.h, b);
        c = !0;
      }
      return c ? a.Og : a.Wd;
    };
    _.g = _.eu.prototype;
    _.g.Og = function (a, b) {
      if (!this.g) return qt;
      var c = b.j;
      if (null == c.g) {
        if (!c.la) return ju(this, a, b.j);
        if (!pt(a)) return rt;
        c.la = !1;
        c.g = c.J.ad || null;
        var d = c.g ? c.g : (c.J = null);
        if (!d) return ju(this, a, b.j);
        this.K.push(d);
        var e = d.wa();
        if (this.j.has(e, !this.s) || (null != b.M[e] && b.M[e]))
          return (
            (e = c.g.M),
            (c.l += e),
            (c.j -= e),
            (c.g = null),
            this.s && Wt(b, d, !1),
            ju(this, a, b.j)
          );
        this.j.g[d.wa()] = null;
      }
      0 < Vt(b) && ip(this.B, 0.5);
      return Xt(c, b, Io(this.j.h)) ? this.Wd : ju(this, a, b.j);
    };
    _.g.Wd = function (a, b) {
      if (!this.g || 0 == Vt(b)) return qt;
      iu(this, b.j);
      return this.s
        ? (b.trackVisibility(ot(a)), this.ej)
        : 0 == b.translate(a)
        ? qt
        : this.Qg;
    };
    _.g.ej = function (a, b) {
      return this.g ? (pt(a) ? (0 == b.translate(a) ? qt : this.Qg) : rt) : qt;
    };
    _.g.sg = function (a, b) {
      b.l && this.j.remove(b.j);
      if (!this.g) return !1;
      if (this.j.has(b.wa(), !1)) {
        var c = this.j;
        if (c.has(b.j, !1)) {
          var d = b.j,
            e = c.g[d];
          e || ((e = c.h[d]), (c.g[d] = e));
          b.h = e;
          b.O = !0;
        } else c.remove(b.j), (b.l = !0);
        et(b);
      } else if (((c = this.j), b.l)) c.remove(b.j);
      else if (b.B) {
        d = b.B.replace(/<a /g, '<span ').replace(/\/a>/g, '/span>');
        b.O = !0;
        delete b.B;
        b.B = null;
        b.h = [];
        e = _.gd(document, 'div');
        _.O(e, !1);
        d = _.ek(0 <= d.indexOf('<i>') ? d : '<b>' + d + '</b>');
        _.th(e);
        e.innerHTML = _.Pc(d);
        document.body.appendChild(e);
        d = [];
        var f;
        for (f = e.firstChild; f; f = f.nextSibling)
          if ('I' == f.tagName) var h = ct(b, _.td(f), f.innerHTML);
          else if ('B' == f.tagName) {
            h || (h = ct(b, '', ''));
            if (1 == b.g.length) ht(h.pa, d, 0, f);
            else {
              var k = d;
              var l = f;
              var m = b.g;
              h = h.pa;
              for (var n = [], q = l.firstChild; q; q = r) {
                var r = q.nextSibling;
                it(q);
              }
              for (r = l.firstChild; r; r = r.nextSibling)
                r.attributes && r.attributes.i
                  ? ((l = parseInt(r.attributes.i.nodeValue, 10)),
                    !isNaN(l) &&
                      0 <= l &&
                      l < m.length &&
                      (m[l].te && n[l]
                        ? (n[l].ha +=
                            r.firstChild && 3 == r.firstChild.nodeType
                              ? r.firstChild.nodeValue
                              : _.td(r))
                        : (n[l] = ht(h, k, l, r))))
                  : 3 == r.nodeType && h.push({ fa: -1, ha: gj(r.nodeValue) });
              null != h &&
                0 < h.length &&
                -1 == h[0].fa &&
                (1 == h.length
                  ? (h[0].fa = 0)
                  : ((h[1].ha = h[0].ha + h[1].ha), h.shift()));
            }
            h = void 0;
          }
        f = b.h;
        for (k = 0; k < f.length - 1; ++k)
          (m = f[k]),
            (h = bj(m.pa[m.pa.length - 1].ha)),
            (h = h.charCodeAt(h.length - 1)),
            (12288 <= h && 12351 >= h) ||
              (65280 <= h && 65519 >= h) ||
              (m.pa[m.pa.length - 1].ha += ' ');
        _.pj(e);
        for (e = 0; e < b.g.length; ++e)
          e < d.length &&
            e < b.C.length &&
            null != d[e] &&
            ((f = b.C[e]),
            (k = d[e].start),
            null != k &&
              ((m = f.substring(0, f.length - aj(f).length)),
              ' ' == m && (m = ''),
              m && (k.ha = m + aj(k.ha))),
            (k = d[e].end),
            null != k &&
              ((f = f.substring(bj(f).length)),
              ' ' == f && (f = ''),
              f && (k.ha = bj(k.ha) + f)));
        1 != b.h.length || b.h[0].Hf || (b.h[0].Hf = b.j);
        c.write(b.j, b.h);
        et(b);
      }
      b.J || (this.Na = !1);
      c = b.l ? !0 : void 0;
      a.O += b.M;
      null != c && (a.ba = !0);
      b = Math.min(Math.floor((100 * a.O) / a.l), 100);
      if (a.M != b || c)
        (a.M = b), a.W ? (a.C(a.M, !0, c), a.Db(a.O)) : a.C(a.M, !1, c);
      return !1;
    };
    _.g.Qg = function (a, b) {
      if (!this.g) return qt;
      if (!pt(a)) return rt;
      if (1 < Vt(b)) {
        a = b.l[0];
        var c = b.g;
        if (a.j || 0 == c.length || null == a.g || 0 == a.g.length) a = null;
        else {
          for (var d = [], e = [], f = 0; f < a.g.length && f < c.length; ++f) {
            var h = a.g[f];
            (h && h[0] && 200 == h[1]) || (e.push(c[f]), d.push(a.o[f]));
          }
          a = 0 < e.length ? { Rj: new Jt(d, !0), Sj: e } : null;
        }
        a = a ? new Zt([a.Rj], a.Sj, b.j, b.h, b.P, b.O, b.W, b.s) : null;
        null != a && iu(this, b.j, a, this.Wd);
      } else {
        a = !1;
        for (c = 0; c < b.l.length; ++c)
          (d = b.l[c]),
            d.j || (200 == d.h && d.g && d.g[0])
              ? (d = d.l = !1)
              : ((d.j = !0), (d = d.l = !0)),
            (a = d || a);
        if (a) return this.Wd;
      }
      d = this.Va();
      a = this.ga();
      if (1 < b.g.length)
        if (((c = b.l[0]), (e = 'auto' == d), (d = b.g), 200 == c.h))
          for (f = 0; f < c.g.length && f < d.length; ++f)
            if ((h = c.g[f]) && 200 == h[1]) {
              var k = h[2],
                l = d[f],
                m = l,
                n = null != k && k == a;
              m.B = h[0];
              void 0 !== n && (m.T = n);
              l.J = e && null == k;
            } else d[f].l = !0;
        else for (a = 0; a < d.length; ++a) d[a].l = !0;
      else {
        c = new It('auto' == d);
        for (d = 0; d < b.l.length; ++d)
          (h = b.l[d]),
            (e = a),
            (f = c),
            200 == h.h && h.g && h.g[0]
              ? ((h = h.g[0]),
                f.g.push(h[0]),
                (h = h[2]),
                (f.h = f.h && null != h && h == e),
                null != h && (f.l = !1))
              : 500 != h.h && (f.j = !0);
        null != b.K && (c.g.push(b.K), (b.K = null));
        if ((a = b.g[0]))
          (d = c.h),
            (a.B = c.wa()),
            void 0 !== d && (a.T = d),
            (a.J = c.l),
            (a.l = c.j);
      }
      if (this.s) {
        a = (0, _.w)(this.sg, this);
        for (c = 0; c < b.g.length; c++) a(b.j, b.g[c]);
        for (c = 0; c < b.C.length; c++) a(b.j, b.C[c]);
        au(b);
        b.T = !0;
        b.J && b.s && b.s.j();
      }
      return qt;
    };
    var fu = function (a) {
        a.Z && a.Z.disconnect();
        a.aa && a.aa.reset();
        a.g && (a.O.stop(), (a.g = !1), (a.M = !1));
        if (a.K.length) {
          for (var b = 0; b < a.K.length; ++b) a.K[b].R();
          a.K = [];
        }
        null != a.J && (a.J.restore(), (a.J = null));
        null != a.xa && (a.xa.restore(), (a.xa = null));
      },
      hu = function (a, b) {
        a.getAttribute('xml:lang') && a.setAttribute('xml:lang', b);
        a.getAttribute('lang') && a.setAttribute('lang', b);
      };
    _.Ko.attach(3046, _.eu.prototype, { pj: 1, rj: 2, qj: 3, sj: 4 });
    var ni = function (a) {
      if (a && ((a = String(a)), (a = a.split('.')), a.length)) {
        for (var b = window, c = 0; c < a.length; ++c) {
          var d = a[c];
          if (!(d && d in b)) return;
          b = b[d];
        }
        return b;
      }
    };

    var ku = function (a) {
      var b = {};
      a = _.$a(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = c.value), (b[c.language] = c.name);
      return b;
    };
    _.Vo = function (a, b) {
      return {
        display_language: b,
        key: 'AIzaSyBwiZMnpJaVvcWHlTAcFdNmtrJb_P4aLXc',
      };
    };
    _.Wo = function () {
      return !1;
    };
    _.Xo = function (a) {
      var b = a.targetLanguages || [];
      return { sl: ku(a.sourceLanguages || []), tl: ku(b) };
    };

    _.oa();
  } catch (e) {
    _._DumpException(e);
  }
  try {
    _.ma('el_main');

    var lu = function (a) {
        return _.Pc(a);
      },
      mu = function (a) {
        a.write.apply(a, _.ab(_.hb.apply(1, arguments).map(lu)));
      },
      nu = function (a, b) {
        function c(l) {
          for (; d < a.length; ) {
            var m = a.charAt(d++),
              n = _.gk[m];
            if (null != n) return n;
            if (!/^[\s\xa0]*$/.test(m)) throw Error('X`' + m);
          }
          return l;
        }
        _.ai();
        for (var d = 0; ; ) {
          var e = c(-1),
            f = c(0),
            h = c(64),
            k = c(64);
          if (64 === k && -1 === e) break;
          b((e << 2) | (f >> 4));
          64 != h &&
            (b(((f << 4) & 240) | (h >> 2)),
            64 != k && b(((h << 6) & 192) | k));
        }
      },
      ou = null,
      pu = function () {
        ou && (_.Ud(ou), (ou = null));
        _.gi && _.gi.length && _.hi(_.gi.join(''));
        _.gi = null;
      },
      qu = function () {
        _.gi && pu();
        _.gi = [];
        ou = _.H(window, 'pagehide', function () {
          pu();
        });
      },
      su = function (a, b) {
        b = ru(b || {}, a.j ? a.j.g() : {});
        a.h(null, b.Fb);
        return b.h();
      },
      tu = function (a) {
        return a instanceof _.zh && a.constructor === _.zh
          ? a.g
          : 'type_error:SafeStyleSheet';
      },
      uu = function (a) {
        try {
          return (
            a.contentWindow ||
            (a.contentDocument ? _.fd(a.contentDocument) : null)
          );
        } catch (b) {}
        return null;
      },
      vu = function () {
        var a = _.$o[5];
        return new _.pe(function (b, c) {
          c(a);
        });
      },
      wu = function (a) {
        if (_.nh) return _.p.atob(a);
        var b = '';
        nu(a, function (c) {
          b += String.fromCharCode(c);
        });
        return b;
      },
      xu = function (a, b) {
        b = tu(b);
        _.B && void 0 !== a.cssText
          ? (a.cssText = b)
          : _.p.trustedTypes
          ? _.od(a, b)
          : (a.innerHTML = b);
      },
      yu = function (a, b) {
        b = _.F(b);
        var c = b.U;
        if (_.B && c.createStyleSheet) (b = c.createStyleSheet()), xu(b, a);
        else {
          c = _.ti(b.U, 'HEAD', void 0, void 0)[0];
          if (!c) {
            var d = _.ti(b.U, 'BODY', void 0, void 0)[0];
            c = b.N('HEAD');
            d.parentNode.insertBefore(c, d);
          }
          d = b.N('STYLE');
          var e;
          (e = _.jh('style[nonce],link[rel="stylesheet"][nonce]', void 0)) &&
            d.setAttribute('nonce', e);
          xu(d, a);
          b.appendChild(c, d);
        }
      },
      zu = function (a) {
        return a instanceof _.Kf ? !!a.wa() : !!a;
      },
      Au = function (a) {
        return a.replace(/<\//g, '<\\/').replace(/\]\]>/g, ']]\\>');
      },
      Bu = function (a) {
        return _.Nk(a, _.dk)
          ? a.wa()
          : a instanceof _.Gb
          ? _.Sa(a).toString()
          : 'about:invalid#zSoyz';
      },
      Cu =
        /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
      Du = function (a) {
        _.Nk(a, _.uh)
          ? (a = Au(a.wa()))
          : null == a
          ? (a = '')
          : a instanceof _.Ic
          ? (a = Au(_.Mi(a)))
          : a instanceof _.zh
          ? (a = Au(tu(a)))
          : ((a = String(a)), (a = Cu.test(a) ? a : 'zSoyz'));
        return a;
      },
      Eu,
      Fu = function (a, b) {
        if ((_.B || _.dc) && window.location.hostname != document.domain) {
          Eu = Eu ? Eu + 1 : 1;
          var c = 'f' + Eu + '_' + _.ub().toString(36);
          window[c] = function () {
            window[c] = void 0;
            a.src = 'javascript:void(0)';
            b &&
              window.setTimeout(function () {
                b();
              }, 0);
          };
          a.src =
            'javascript:void(document.write("<script>document.domain=\'' +
            document.domain +
            "';parent['" +
            c +
            '\']();\x3c/script>"))';
        } else b && b();
      },
      Gu = function (a, b) {
        return 'auto' != a && 'zh-CN' != a && a == b;
      },
      Hu = function () {};
    Hu.prototype.h = function () {};
    var Iu = function (a) {
        a = a.split('.');
        if (3 !== a.length) return !1;
        a = JSON.parse(wu(a[1]));
        return null == a || !a.exp || 1e3 * a.exp < _.ub() ? !1 : !0;
      },
      Ju = function (a) {
        this.g = a;
      };
    _.u(Ju, Hu);
    Ju.prototype.h = function () {
      return Iu(this.g) ? _.mh(this.g) : vu();
    };
    var Ku = function (a) {
      this.g = null;
      this.j = a;
    };
    _.u(Ku, Hu);
    Ku.prototype.h = function () {
      if (null != this.g && Iu(this.g)) return _.mh(this.g);
      this.g = null;
      return new _.pe(function (a, b) {
        var c = this;
        this.j(function (d) {
          c.g = d;
          Iu(c.g) ? a(d) : b(_.$o[5]);
        }, b);
      }, this);
    };
    var Lu = function (a) {
        return (0, _.Dh)('<span id="' + _.P(a.id) + '"></span>');
      },
      Mu = function (a) {
        var b = a.id,
          c = a.qh;
        return (0, _.Dh)(
          _.Zk(a.rh) + '<div id="' + _.P(b) + '"></div>' + _.Zk(c),
        );
      },
      ru = function (a) {
        var b = a.id,
          c = a.top,
          d = a.left,
          e = a.bottom,
          f = a.right;
        return (0, _.Eh)(
          '.' +
            Du(a.className) +
            ' {z-index:9999999; overflow:visible; position:fixed; _position:absolute;' +
            (zu(c) || _.Pk(c, 0)
              ? 'top:' +
                Du(c) +
                'px; _top:expression((' +
                Du(c) +
                "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');"
              : 'top:auto;') +
            (zu(d) || _.Pk(d, 0)
              ? 'left:' +
                Du(d) +
                'px; _left:expression((' +
                Du(d) +
                "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');"
              : 'left:auto;') +
            (zu(e) || _.Pk(e, 0)
              ? 'bottom:' +
                Du(e) +
                'px; _top:expression((-' +
                Du(e) +
                "-document.getElementById('" +
                String(b).replace(_.al, _.Vk) +
                "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');"
              : 'bottom:auto;') +
            (zu(f) || _.Pk(f, 0)
              ? 'right:' +
                Du(f) +
                'px; _left:expression((-' +
                Du(f) +
                "-document.getElementById('" +
                String(b).replace(_.al, _.Vk) +
                "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');"
              : 'right:auto;') +
            '}',
        );
      },
      Nu = function () {
        return (0, _.Dh)(
          '<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>',
        );
      },
      Ou = function () {
        _.M.call(this);
      };
    _.u(Ou, _.M);
    Ou.prototype.N = function () {
      this.da(_.Xh(Nu));
    };
    Ou.prototype.da = function (a) {
      this.I = a;
    };
    var Pu = function (a) {
        _.ml(a.A(), 'goog-te-spinner-pos-show');
        _.ml(a.A().firstChild, 'goog-te-spinner-animation-show');
      },
      Qu = function () {
        this.g = new Ou();
        this.g.N();
        this.g.ja();
        this.h = 0;
      };
    Qu.prototype.reset = function () {
      this.h = 0;
      Pu(this.g);
    };
    Qu.prototype.l = function () {
      if (0 == this.h++) {
        var a = this.g;
        _.Q(a.A(), 'goog-te-spinner-pos-show');
        _.Q(a.A().firstChild, 'goog-te-spinner-animation-show');
      }
    };
    Qu.prototype.j = function () {
      0 == --this.h && Pu(this.g);
    };
    var Ru = function (a, b, c, d, e, f, h, k, l, m, n) {
      _.y.call(this);
      this.ya = b || null;
      this.T = !!c;
      this.vc = d || 'transparent';
      this.K = f || '';
      b = h || { fetchStart: 0, ul: 0 };
      a = b.fetchStart || 0;
      b = b.fetchEnd || 0;
      this.M = a && b ? b - a : 0;
      this.O = Date.now() - _.ho;
      this.o = !1;
      this.g = new _.bp(e || '', void 0, f, l, m, n);
      this.J = new _.jp(1);
      this.s = new _.gt();
      this.j = null;
      this.C = !0;
      this.l = null != _.p.IntersectionObserver;
      this.B = k || null;
      this.H = new _.J(this);
      e = new _.xo();
      f = new _.zo((0, _.w)(this.g.initialize, this.g, e.register()));
      this.Cd = _.Ao(f, e.delay((0, _.w)(this.Cd, this)));
      this.Bd = _.Ao(f, e.delay((0, _.w)(this.Bd, this)));
      this.Dd = _.Ao(f, e.delay((0, _.w)(this.Dd, this)));
      this.restore = _.Ao(f, e.delay((0, _.w)(this.restore, this)));
      f.finish();
      e.finish();
    };
    _.x(Ru, _.y);
    _.Ko.attach(14097, Ru.prototype, {
      wf: function () {
        _.hi(this.g.h ? 'te_afas' : 'te_afau');
      },
    });
    _.g = Ru.prototype;
    _.g.Uj = function (a) {
      this.l = a;
    };
    _.g.Ja = function () {
      return this.g.h;
    };
    _.g.Cd = function (a, b) {
      if (this.g.Ja()) {
        var c = this.g,
          d = { alpha: !0 };
        d = _.Vo(d, b);
        c.l.send(d, a);
      } else this.wf(), a(null);
    };
    _.g.Bd = function (a) {
      var b = document.documentElement.lang;
      if (b) a(b);
      else if (this.g.Ja()) {
        b = new _.hn(document.body, !1, !1, 1, 1);
        var c = [];
        try {
          for (var d = 0, e = this.g.j.zf; c.length + d < e; ) {
            var f = b.Ka();
            if (1 == b.g && _.Et(f)) b.Mb();
            else if (3 == f.nodeType) {
              var h = (0, _.Xb)(_.Zi(f.nodeValue));
              h && (c.push(h), (d += h.length));
            }
          }
        } catch (k) {
          if (k != _.ff) throw k;
        }
        _.cp(this.g, a, c.join(' '));
      } else this.wf(), a(null, !0);
    };
    _.g.Dd = function (a, b, c, d, e) {
      var f = Date.now();
      qu();
      if (!a || Gu(a, b)) a = 'auto';
      if (e || a != this.h || b != this.P) this.s = new _.gt();
      this.h = a;
      this.P = b;
      this.g.Ja()
        ? ((d = d || document.documentElement),
          this.j && this.j.R(),
          this.B.reset(),
          (this.j = new _.eu(
            d,
            this.g,
            this.ya,
            this.T,
            this.vc,
            !0,
            this.J,
            this.s,
            this.l,
            this.B,
          )),
          (this.j.ba = this.o),
          (this.C = !0),
          this.j.translate(a, b, c, e, (0, _.w)(this.vj, this, f, a, b)))
        : (this.wf(), c(0, !1, !0));
    };
    _.g.Rh = function () {
      return !!this.j && this.j.g;
    };
    _.g.lg = function (a) {
      this.o = a;
    };
    _.g.restore = function () {
      qu();
      this.g.Ja() && this.j && this.j.restore();
    };
    _.g.L = function () {
      pu();
      Ru.G.L.call(this);
      this.g.R();
      this.j = this.g = null;
      this.s = new _.gt();
    };
    _.g.vj = function (a, b, c, d) {
      this.C &&
        ((this.C = !1),
        (b = { sl: b, tl: c, textlen: d }),
        this.o && (b.ctt = '1'),
        '' != this.K && (b.sp = this.K),
        (b.ttt = Date.now() - a),
        (b.ttl = this.O),
        this.M && (b.ttf = this.M),
        this.l && (b.sr = 1),
        _.hi('te_time', b));
    };
    var Su = function (a) {
      _.M.call(this, a);
      this.H = new _.J(this);
    };
    _.u(Su, _.M);
    Su.prototype.N = function () {
      var a = _.gh(this.g, 'select');
      a.className = 'goog-te-combo';
      a.setAttribute('aria-label', _.X.mg);
      this.da(a);
    };
    Su.prototype.Y = function () {
      _.M.prototype.Y.call(this);
      this.Ag();
    };
    Su.prototype.Ag = function () {
      _.H(this.A(), 'change', _.Do(this, 'change'));
      this.dispatchEvent('load');
    };
    Su.prototype.ca = function () {
      _.M.prototype.ca.call(this);
      this.H.R();
      this.H = null;
    };
    var Tu = function (a, b) {
      a.A().parentNode != b &&
        (a.A().parentNode.removeChild(a.A()), b.appendChild(a.A()));
    };
    _.g = Su.prototype;
    _.g.od = function (a) {
      this.g.ld(this.A());
      for (var b in a)
        if (a[b] !== Object.prototype[b]) {
          var c = this.g.N('OPTION', { value: b });
          this.g.nb(c, a[b]);
          this.A().appendChild(c);
        }
      this.A().selectedIndex = 0;
    };
    _.g.Qa = function () {
      return this.A().value;
    };
    _.g.Ma = function (a) {
      if (this.A().value != a)
        for (var b = 0, c; (c = this.A().options.item(b)); ++b)
          if (c.value == a) {
            this.A().selectedIndex = b;
            break;
          }
    };
    _.g.Ed = function (a) {
      if ('undefined' == _.ob(a))
        return this.A().options.item(this.A().selectedIndex).text;
      for (var b = 0, c; (c = this.A().options.item(b)); ++b)
        if (c.value == a) return c.text;
    };
    _.g.qa = function (a) {
      this.A().disabled = !a;
    };
    var Uu = function (a) {
      Su.call(this, a);
    };
    _.u(Uu, Su);
    Uu.prototype.pd = function (a) {
      this.od.call(this, a);
    };
    var Vu = function (a, b) {
      Su.call(this, b);
      this.F = (a && _.Lh(a)) || {};
      this.F.Of = this.F.Of || 11;
      this.F.qe = 0 != this.F.qe;
      this.F.rb || (this.F.rb = _.so);
    };
    _.u(Vu, Su);
    _.g = Vu.prototype;
    _.g.Od = function () {
      throw Error('za');
    };
    _.g.N = function () {
      this.Od();
      this.s = this.A();
      this.j = _.jj('IFRAME', {
        frameBorder: 0,
        class: 'goog-te-menu-frame skiptranslate',
        title: _.X.mg,
      });
      this.j.style.visibility = 'visible';
      _.O(this.j, !1);
      document.body.appendChild(this.j);
    };
    _.g.Ag = function () {
      var a = _.Eb.test(_.W) ? 'rtl' : 'ltr',
        b = _.bg(this.F.rb),
        c = _.T(this, 'menuBody');
      this.H.D(this.j, 'load', this.Sh);
      Fu(
        this.j,
        (0, _.w)(function () {
          var d = _.vj(this.j);
          var e = (0, _.Dh)(
            '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
              _.P(Bu(b)) +
              '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' +
              _.P(a) +
              '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' +
              _.P(c) +
              '" class="goog-te-menu"></div></body>',
          );
          mu(d, _.Sh(e));
          d.close();
        }, this),
      );
    };
    _.g.Sh = function () {
      this.h = new _.$c(_.vj(this.j));
      this.O = this.h.A(_.T(this, 'menuBody'));
      this.H.D(this.s, 'click', this.jf);
      _.B
        ? this.H.D(this.j, 'blur', this.Vd)
        : this.H.D(uu(this.j), 'blur', this.Vd);
      this.dispatchEvent('load');
    };
    _.g.ca = function () {
      Su.prototype.ca.call(this);
      _.pj(this.j);
      this.s = this.X = this.o = this.O = this.h = this.j = null;
    };
    _.g.Pg = function (a) {
      this.l != a.currentTarget.value &&
        (this.Ma(a.currentTarget.value), this.dispatchEvent('change'));
      this.Vd();
    };
    _.g.jf = function () {
      Wu(this);
      uu(this.j).focus();
      this.aa = !0;
    };
    _.g.Vd = function () {
      this.aa && ((this.aa = !1), Wu(this, !1), _.fd(_.E(this.s)).focus());
    };
    _.g.Lf = function () {};
    _.g.Mf = function () {};
    var Wu = function (a, b) {
      if ('undefined' == typeof b || b) {
        a.Mf();
        b = _.Ak(a.s, window);
        var c = b.y + a.s.offsetHeight,
          d = b.y - a.B.height,
          e = b.x,
          f = b.x + a.s.offsetWidth - a.B.width;
        if (_.B && !_.wc('7.0')) {
          var h = document.body;
          c -= h.offsetTop;
          d -= h.offsetTop;
          e -= h.offsetLeft;
          f -= h.offsetLeft;
        } else
          (h = _.wi(document)), (c -= h.y), (d -= h.y), (e -= h.x), (f -= h.x);
        h = _.ed(window);
        b.y = b.y <= h.height - a.B.height ? c : d;
        b.y > h.height - a.B.height && (b.y = h.height - a.B.height);
        0 > b.y && (b.y = 0);
        _.Eb.test(_.W)
          ? (b.x = 0 <= f ? f : e)
          : (b.x = e <= h.width - a.B.width ? e : f);
        b.x > h.width - a.B.width && (b.x = h.width - a.B.width);
        0 > b.x && (b.x = 0);
        _.tk(a.j, b);
        _.O(a.j, !0);
        Xu(a);
      } else a.Lf(), _.O(a.j, !1);
    };
    _.g = Vu.prototype;
    _.g.Qa = function () {
      return this.l;
    };
    _.g.od = function (a) {
      this.h.ld(this.O);
      _.O(this.j, !0);
      this.ba = a;
      this.o = [];
      for (var b in a)
        if (a[b] !== Object.prototype[b])
          if ('---' == a[b]) {
            var c = {
              link: this.h.N('DIV', {
                className: 'goog-te-menu2-separator',
                value: b,
              }),
              jj: !0,
            };
            this.o.push(c);
          } else {
            c = {
              link: this.h.N('A', {
                className: 'goog-te-menu2-item-selected',
                href: 'javascript:void(0)',
                value: b,
              }),
            };
            this.o.push(c);
            var d = this.h.N('DIV', { style: 'white-space:nowrap' });
            this.h.appendChild(c.link, d);
            this.F.qe &&
              this.h.appendChild(
                d,
                this.h.N('SPAN', { className: 'indicator' }, '\u203a'),
              );
            this.h.appendChild(
              d,
              this.h.N('SPAN', { className: 'text' }, a[b]),
            );
            this.H.D(c.link, 'click', this.Pg);
          }
      a = this.o.length - 1;
      a = Math.round((a - (a % this.F.Of)) / this.F.Of) + 1;
      this.X = this.h.N('TABLE', { cellspacing: 0, cellpadding: 0, border: 0 });
      c = this.h.N('TBODY');
      b = this.h.N('TR', { valign: 'top' });
      this.O.className = 'goog-te-menu2';
      this.h.appendChild(this.O, this.X);
      this.h.appendChild(this.X, c);
      this.h.appendChild(c, b);
      for (d = c = 0; c < a; ++c) {
        var e = this.h.N('TD');
        this.h.appendChild(b, e);
        for (var f = 0; 11 > f && d < this.o.length; ++f, ++d)
          this.h.appendChild(e, this.o[d].link);
        c != a - 1 &&
          ((e = this.h.N('TD', { class: 'goog-te-menu2-colpad' }, '\u00a0')),
          this.h.appendChild(b, e));
      }
      this.l = null;
      this.Ma(this.o[0].link.value);
      Xu(this);
      _.O(this.j, !1);
    };
    _.g.Ed = function (a) {
      return this.ba['undefined' == _.ob(a) ? this.l : a];
    };
    _.g.Nf = function () {};
    _.g.Ma = function (a) {
      if (this.l != a) {
        this.Ed(a) && ((this.l = a), this.Nf());
        for (var b = 0; b < this.o.length; ++b) {
          var c = this.o[b];
          c.jj ||
            (c.link.className =
              c.link.value == a && this.F.qe
                ? 'goog-te-menu2-item-selected'
                : 'goog-te-menu2-item');
        }
      }
    };
    var Xu = function (a) {
        _.Mk(a.O, _.Ek(a.X));
        _.Mk(a.j, _.Ek(a.O));
        a.B = _.Ek(a.j);
      },
      Yu = function (a, b) {
        Vu.call(this, a, b);
      };
    _.u(Yu, Vu);
    _.g = Yu.prototype;
    _.g.Od = function () {
      var a = this.g.N('a', { 'aria-haspopup': 'true' });
      a.className = 'goog-te-menu-value';
      a.href = 'javascript:void(0)';
      this.J = this.g.N('SPAN');
      a.appendChild(this.J);
      this.V = this.g.N('IMG', {
        src: 'https://www.google.com/images/cleardot.gif',
        alt: '',
        style:
          'background-image:url(' +
          _.oo +
          ');background-position:-14px 0px;border:none',
        width: 14,
        height: 14,
      });
      a.appendChild(this.V);
      this.da(a);
    };
    _.g.Lf = function () {
      _.L(this.V, 'backgroundPosition', '-14px 0px');
    };
    _.g.Mf = function () {
      _.L(this.V, 'backgroundPosition', '0px 0px');
    };
    _.g.ca = function () {
      Vu.prototype.ca.call(this);
      this.V = this.J = null;
    };
    _.g.Nf = function () {
      this.g.nb(this.J, this.Ed(this.l) || '');
    };
    _.g.pd = function (a) {
      this.od.call(this, a);
    };
    var Zu = function (a, b) {
      Vu.call(this, a, b);
    };
    _.u(Zu, Vu);
    _.g = Zu.prototype;
    _.g.Od = function () {
      var a = this.g.N('a', { 'aria-haspopup': 'true' });
      a.className = 'goog-te-menu-value';
      a.href = 'javascript:void(0)';
      this.J = this.g.N('SPAN');
      a.appendChild(this.J);
      a.appendChild(
        this.g.N('IMG', {
          src: 'https://www.google.com/images/cleardot.gif',
          alt: '',
          width: 1,
          height: 1,
        }),
      );
      a.appendChild(
        this.g.N('SPAN', { style: 'border-left:1px solid #bbb' }, '\u200b'),
      );
      a.appendChild(
        this.g.N('IMG', {
          src: 'https://www.google.com/images/cleardot.gif',
          alt: '',
          width: 1,
          height: 1,
        }),
      );
      this.V = this.g.N(
        'span',
        { style: 'color:#767676', 'aria-hidden': 'true' },
        '\u25bc',
      );
      a.appendChild(this.V);
      this.da(a);
    };
    _.g.Lf = function () {
      _.L(this.V, 'color', '#9b9b9b');
    };
    _.g.Mf = function () {
      _.L(this.V, 'color', '#d5d5d5');
    };
    _.g.ca = function () {
      Vu.prototype.ca.call(this);
      this.V = this.J = null;
    };
    _.g.Nf = function () {
      this.g.nb(this.J, this.Ed(this.l) || '');
    };
    _.g.pd = function (a) {
      this.od.call(this, a);
    };
    var $u = function (a, b) {
      Vu.call(this, a, b);
      this.F.qe = !1;
    };
    _.u($u, Vu);
    $u.prototype.Od = function () {
      var a = _.gh(this.g, 'div');
      a.className = 'goog-te-button';
      var b = this.g.N('DIV', {
        style: 'background: url(' + _.no + ') repeat-x 0 -39px',
      });
      a.appendChild(b);
      this.J = _.gh(this.g, 'button');
      b.appendChild(this.J);
      this.da(a);
    };
    $u.prototype.wh = function (a) {
      _.jd(this.J);
      this.J.appendChild(this.g.U.createTextNode(String(a + '\u00a0\u25bc')));
    };
    $u.prototype.ca = function () {
      Vu.prototype.ca.call(this);
      this.J = null;
    };
    $u.prototype.Pg = function (a) {
      this.Ma(a.currentTarget.value);
      this.dispatchEvent('change');
      this.Vd();
    };
    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var av = function () {
      this.h = {};
      this.g = 0;
    };
    av.prototype.j = function (a, b) {
      a = this.h[b];
      if (!a) return b;
      b = '';
      a.Yf && (b += '<' + a.Yf + a.attributes + '>');
      a.pf && (b += a.pf);
      a.Ye && (b += '</' + a.Ye + '>');
      return b;
    };
    av.prototype.Yf = function (a, b) {
      _.Pi(a);
      return bv(this, { Yf: a, attributes: _.Ti(b) });
    };
    av.prototype.Ye = function (a) {
      _.Pi(a);
      return bv(this, { Ye: a });
    };
    av.prototype.text = function (a) {
      return bv(this, { pf: _.cj(a) });
    };
    var bv = function (a, b) {
      a.g++;
      var c = '{SafeHtmlFormatter:' + a.g + '_' + _.Zc() + '}';
      a.h[_.cj(c)] = b;
      return c;
    };
    var cv = function (a, b) {
      _.M.call(this, b);
      this.F = (a && _.Lh(a)) || {};
      this.H = new _.J(this);
    };
    _.x(cv, _.M);
    var dv = { kl: 0, Gk: 1, $k: 2 };
    _.g = cv.prototype;
    _.g.N = function () {
      var a = _.gh(this.g, 'div');
      _.Q(a, 'skiptranslate');
      _.Q(a, 'goog-te-gadget');
      a.dir = _.Eb.test(_.W) ? 'rtl' : 'ltr';
      _.O(a, !1);
      if (2 == this.F.lc) {
        var b = Mu({ id: _.T(this, 'targetLanguage'), rh: '', qh: '' });
        _.Wh(a, _.Uh(b));
      } else {
        b = new av();
        var c = _.Qr({
            Zg: _.B && !_.wc('7.0'),
            ge: 'https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png',
            gh: 'https://translate.google.com',
          }),
          d = _.X,
          e = d.ng;
        c = _.Sh(c);
        c = bv(b, { pf: _.Pc(c).toString() });
        d = e.call(d, c);
        e = _.cj('SafeHtmlFormatter:');
        b = _.cj(d).replace(
          new RegExp('\\{' + e + '[\\w&#;]+\\}', 'g'),
          (0, _.w)(b.j, b, []),
        );
        b = _.Qc(b, null);
        b = Mu({
          id: _.T(this, 'targetLanguage'),
          rh: '',
          qh: 1 == this.F.lc ? _.Ri('\u00a0', '\u00a0', b) : b,
        });
        _.Wh(a, _.Uh(b));
      }
      this.da(a);
    };
    _.g.Y = function () {
      cv.G.Y.call(this);
      this.j = 2 == this.F.lc ? new Zu(null, this.g) : new Uu(this.g);
      this.H.D(this.j, 'change', _.Do(this, 'chg_tgt_lang'));
      this.H.D(this.j, 'load', this.Th);
      var a = this.g.A(_.T(this, 'targetLanguage'));
      if (2 == this.F.lc) {
        var b = this.g.N('IMG', {
          src: 'https://www.google.com/images/cleardot.gif',
          class: 'goog-te-gadget-icon',
          alt: '',
        });
        b.style.backgroundImage = 'url(' + _.oo + ')';
        b.style.backgroundPosition = '-65px 0px';
        var c = this.g.N('SPAN', { style: 'vertical-align: middle' });
        a.appendChild(b);
        a.appendChild(c);
        this.j.ja(c);
        a.style.whiteSpace = 'nowrap';
        a.className = 'goog-te-gadget-simple';
      } else this.j.ja(a), 1 == this.F.lc && (a.style.display = 'inline');
    };
    _.g.Th = function () {
      if (2 == this.F.lc) {
        var a = this.j,
          b = this.g.A(_.T(this, 'targetLanguage'));
        a.H.sa(a.s, 'click', a.jf);
        a.s = b;
        a.H.D(a.s, 'click', a.jf);
      }
      this.dispatchEvent('load');
    };
    _.g.ca = function () {
      cv.G.ca.call(this);
      this.H.R();
      this.H = null;
      this.j.R();
      this.j = null;
    };
    _.g.ga = function () {
      return this.j.Qa();
    };
    _.g.zb = function (a) {
      this.j.pd(a);
    };
    _.g.oa = function (a) {
      '' == a ? this.J && this.zb(this.J) : this.B && this.zb(this.B);
      this.j.Ma(a);
    };
    _.g.S = function (a) {
      _.O(this.A(), a);
    };
    _.g.qa = function (a) {
      this.j.qa(a);
    };
    _.g.Wf = function (a, b) {
      this.J = a;
      this.B = b;
    };
    var ev = function (a, b) {
      _.M.call(this, b);
      this.F = (a && _.Lh(a)) || {};
      this.F.rb || (this.F.rb = _.so);
      this.H = new _.J(this);
    };
    _.x(ev, _.M);
    var fv = { el: 1, fl: 2, pk: 3, nk: 4 };
    _.g = ev.prototype;
    _.g.N = function () {
      var a = _.gh(this.g, 'div');
      this.za = !1;
      _.O(a, !1);
      var b = _.T(this, 'container');
      b = (0, _.Dh)(
        '<iframe id="' +
          _.P(b) +
          '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>',
      );
      _.Wh(a, _.Uh(b));
      this.da(a);
    };
    _.g.Y = function () {
      ev.G.Y.call(this);
      var a = _.Eb.test(_.W) ? 'rtl' : 'ltr',
        b = _.bg(this.F.rb),
        c = _.T(this, 'translate');
      this.A().id = _.T(this, 'floatContainer');
      var d = { id: this.A().id, className: 'goog-te-ftab-float' };
      this.A().className += ' goog-te-ftab-float';
      switch (this.F.Rd) {
        case 2:
          var e = 'goog-float-top';
          d.top = 0;
          d.right = 20;
          break;
        case 3:
          e = 'goog-float-bottom';
          d.bottom = 0;
          d.right = 20;
          break;
        case 4:
          e = 'goog-float-bottom';
          d.bottom = 0;
          d.left = 20;
          break;
        default:
          (e = 'goog-float-top'), (d.top = 0), (d.left = 20);
      }
      yu(su(new _.Jf(), d), this.A());
      this.o = this.g.A(_.T(this, 'container'));
      this.H.D(this.o, 'load', this.Uh);
      Fu(
        this.o,
        (0, _.w)(function () {
          var f = _.vj(this.o);
          var h = e;
          var k = _.X.Ie;
          h = (0, _.Dh)(
            '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
              _.P(Bu(b)) +
              '"></head><body class="goog-te-ftab ' +
              _.P(h) +
              '" scroll="no" style="overflow:hidden" dir="' +
              _.P(a) +
              '"><a id="' +
              _.P(c) +
              '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' +
              _.P(_.gl('https://www.google.com/images/cleardot.gif')) +
              '" style="background-image:url(' +
              _.P(_.gl(_.oo)) +
              ');background-position:-65px 0px"><span>' +
              _.Zk(k) +
              '</span></a></body>',
          );
          mu(f, _.Sh(h));
          f.close();
        }, this),
      );
    };
    _.g.Uh = function () {
      this.h = new _.$c(_.vj(this.o)).A(_.T(this, 'translate'));
      this.H.D(this.h, 'click', _.Do(this, 'clk_trans'));
      _.O(this.A(), !0);
      var a = _.Ek(this.h);
      _.O(this.A(), !1);
      _.Mk(this.o, a);
      _.Mk(this.A(), a);
      this.dispatchEvent('load');
    };
    _.g.ca = function () {
      ev.G.ca.call(this);
      this.H.R();
      this.H = null;
      _.pj(this.o);
      this.h = this.o = null;
    };
    _.g.isVisible = function () {
      return this.za;
    };
    _.g.S = function (a) {
      this.za = a;
      _.O(this.A(), a);
    };
    var gv = function (a, b) {
      _.M.call(this, b);
      this.H = new _.J(this);
      this.F = (a && _.Lh(a)) || {};
      this.F.rb || (this.F.rb = _.so);
      this.F.Xf = !1;
      _.L(this.g.U.body, 'position', 'relative');
      _.Yg || _.L(this.g.U.body, 'minHeight', '100%');
      _.L(this.g.U.documentElement, 'height', '100%');
      _.L(this.g.U.body, 'top', '0px');
      _.B &&
        ((window._bannerquirkfixleft = -parseInt(
          '0' + this.g.U.body.leftMargin,
          10,
        )),
        (window._bannerquirkfixtop =
          -parseInt('0' + this.g.U.body.topMargin, 10) - 40));
    };
    _.x(gv, _.M);
    _.g = gv.prototype;
    _.g.ja = function () {
      var a = this.g.U.body.firstChild;
      _.Tl(this, a.parentNode, a);
    };
    _.g.N = function () {
      var a = _.gh(this.g, 'div');
      this.za = !1;
      _.O(a, !1);
      _.Q(a, 'skiptranslate');
      var b = _.T(this, 'container');
      b = (0, _.Dh)(
        '<iframe id="' +
          _.P(b) +
          '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>',
      );
      _.Wh(a, _.Uh(b));
      this.da(a);
    };
    _.g.Y = function () {
      gv.G.Y.call(this);
      var a = _.Eb.test(_.W) ? 'rtl' : 'ltr',
        b = _.bg(this.F.rb),
        c = _.T(this, 'promptSection'),
        d = _.T(this, 'confirm'),
        e = _.T(this, 'progressSection'),
        f = _.T(this, 'progressValue'),
        h = _.T(this, 'cancel'),
        k = _.T(this, 'finishSection'),
        l = _.T(this, 'restore'),
        m = _.T(this, 'errorSection'),
        n = _.T(this, 'errorContent'),
        q = _.T(this, 'close'),
        r = _.T(this, 'noAutoPopup'),
        z,
        G = [];
      this.F.Xf && G.push(Lu({ id: _.T(this, 'promptSourceLang') }));
      G.push(Lu({ id: _.T(this, 'promptTargetLang') }));
      var R = _.ek(_.X.li.apply(null, G));
      G = [];
      this.F.Xf && G.push(Lu({ id: _.T(this, 'finishSourceLang') }));
      G.push(Lu({ id: _.T(this, 'finishTargetLang') }));
      var sd = _.ek(_.X.fi.apply(null, G));
      this.F.Dh && (z = this.F.Dh);
      this.o = this.g.A(_.T(this, 'container'));
      this.H.D(this.o, 'load', this.Vh);
      Fu(
        this.o,
        (0, _.w)(function () {
          var mc = _.vj(this.o);
          var bc = z;
          var hf = _.X.Tc,
            ow = _.X.Ie,
            pw = _.X.hi,
            qw = _.X.ue,
            rw = _.X.og,
            sw = _.X.cg,
            tw = _.X.cg;
          bc = (0, _.Dh)(
            '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
              _.P(Bu(b)) +
              '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' +
              _.P(a) +
              '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' +
              _.P(_.el('https://translate.google.com')) +
              '" class="goog-logo-link" target="_blank"><img src="' +
              _.P(
                _.gl(
                  'https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png',
                ),
              ) +
              '" alt="Google ' +
              _.P(hf) +
              '"></a></td>' +
              (bc
                ? '<td width=1><img src="' +
                  _.P(_.gl('https://www.google.com/images/cleardot.gif')) +
                  '" width="9" height="15" title="' +
                  _.P(bc) +
                  '" alt="' +
                  _.P(bc) +
                  '" style="background-image:url(' +
                  _.P(_.gl(_.oo)) +
                  ');background-position:-56px 0px;margin:0 4px"></td>'
                : '') +
              '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' +
              _.P(c) +
              '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' +
              _.Zk(R) +
              '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.P(d) +
              '"><b>' +
              _.Zk(ow) +
              '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.P(r) +
              '"></button></div></div></td></tr><tr id="' +
              _.P(e) +
              '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' +
              _.Zk(pw) +
              '&nbsp;<span dir="ltr">(<b id="' +
              _.P(f) +
              '"></b>%)</span>&nbsp;<img src="' +
              _.P(_.gl(_.qo)) +
              '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.P(h) +
              '">' +
              _.Zk(qw) +
              '</button></div></div></td></tr><tr id="' +
              _.P(k) +
              '" style="display:none"><td><span class="goog-te-banner-content">' +
              _.Zk(sd) +
              '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.P(l) +
              '">' +
              _.Zk(rw) +
              '</button></div></div></td></tr><tr id="' +
              _.P(m) +
              '" style="display:none" valign=middle><td><span id="' +
              _.P(n) +
              '" class="goog-te-banner-content"></span></td></tr></table></td><td class="goog-te-banner-margin"></td><td width=1 id="options"></td><td width=1><a id="' +
              _.P(q) +
              '" class="goog-close-link" href="javascript:void(0)" title="' +
              _.P(sw) +
              '"><img src="' +
              _.P(_.gl('https://www.google.com/images/cleardot.gif')) +
              '" width="15" height="15" alt="' +
              _.P(tw) +
              '" style="background-image:url(' +
              _.P(_.gl(_.oo)) +
              ');background-position:-28px 0px"></a></td></tr></table></body>',
          );
          mu(mc, _.Sh(bc));
          mc.close();
        }, this),
      );
    };
    _.g.Vh = function () {
      this.h = new _.$c(_.vj(this.o));
      hv(this, _.X.dg);
      if (this.F.rb == _.so) {
        var a = 'url(' + _.no + ')';
        _.L(this.h.U.body, 'backgroundImage', a);
        for (
          var b = this.h.U.getElementsByTagName('button'), c = 0;
          c < b.length;
          ++c
        ) {
          var d = b[c].parentNode;
          _.L(d, 'backgroundImage', a);
          _.L(d, 'backgroundRepeat', 'repeat-x');
          _.L(d, 'backgroundPosition', '0 -39px');
        }
      }
      this.F.Xf && (this.l = new Yu(this.F, this.h));
      this.j = new Yu(this.F, this.h);
      this.s = new $u(this.F, this.h);
      this.H.D(
        this.h.A(_.T(this, 'confirm')),
        'click',
        _.Do(this, 'clk_confirm'),
      );
      this.H.D(
        this.h.A(_.T(this, 'cancel')),
        'click',
        _.Do(this, 'clk_cancel'),
      );
      this.H.D(
        this.h.A(_.T(this, 'restore')),
        'click',
        _.Do(this, 'clk_restore'),
      );
      this.H.D(this.h.A(_.T(this, 'close')), 'click', _.Do(this, 'clk_close'));
      this.O = this.h.A(_.T(this, 'noAutoPopup'));
      this.H.D(this.O, 'click', _.Do(this, 'clk_no_ap'));
      this.l && this.H.D(this.l, 'change', _.Do(this, 'chg_src_lang'));
      this.H.D(this.j, 'change', _.Do(this, 'chg_tgt_lang'));
      this.H.D(this.s, 'change', this.Ti);
      a = new _.xo((0, _.w)(this.Wh, this));
      this.l && this.H.D(this.l, 'load', a.register());
      this.H.D(this.j, 'load', a.register());
      this.H.D(this.s, 'load', a.register());
      a.finish();
      this.l && this.l.ja(this.h.A(_.T(this, 'promptSourceLang')));
      this.j.ja(this.h.A(_.T(this, 'promptTargetLang')));
      this.s.ja(this.h.A('options'));
    };
    _.g.Wh = function () {
      this.s.wh(_.X.$h);
      this.s.od({ turn_off_site: _.X.ji, s1: '---', learn_more: _.X.Zh });
      this.dispatchEvent('load');
    };
    _.g.Ti = function () {
      switch (this.s.Qa()) {
        case 'learn_more':
          window.open(_.vo, '_blank');
          break;
        case 'turn_off_site':
          this.dispatchEvent('clk_no_ap_site');
      }
    };
    _.g.ca = function () {
      this.S(!1);
      gv.G.ca.call(this);
      this.H.R();
      this.H = null;
      this.l && (this.l.R(), (this.l = null));
      this.j.R();
      this.j = null;
      this.s.R();
      this.s = null;
      _.pj(this.o);
      this.$c = this.h = null;
    };
    _.g.Va = function () {
      return this.l ? this.l.Qa() : '';
    };
    _.g.ga = function () {
      return this.j.Qa();
    };
    _.g.zb = function (a) {
      this.j.pd(a);
    };
    _.g.Lb = function (a) {
      this.l && this.l.Ma(a);
      this.V && this.V[a] && this.h.nb(this.O, _.X.ii(this.V[a]));
    };
    _.g.oa = function (a) {
      this.j.Ma(a);
    };
    var iv = function (a, b, c, d) {
      if (a.$c != b) {
        a.$c = b;
        if (0 == b) {
          a.l && Tu(a.l, a.h.A(_.T(a, 'promptSourceLang')));
          if (a.J) {
            var e = a.ga();
            a.zb(a.J);
            a.oa(e);
          }
          Tu(a.j, a.h.A(_.T(a, 'promptTargetLang')));
        } else
          2 == b &&
            (a.l && Tu(a.l, a.h.A(_.T(a, 'finishSourceLang'))),
            a.B && ((e = a.ga()), a.zb(a.B), a.oa(e)),
            Tu(a.j, a.h.A(_.T(a, 'finishTargetLang'))));
        e = {};
        e[-1] = a.h.A(_.T(a, 'errorSection'));
        e[0] = a.h.A(_.T(a, 'promptSection'));
        e[1] = a.h.A(_.T(a, 'progressSection'));
        e[2] = a.h.A(_.T(a, 'finishSection'));
        for (var f in e) e[f] !== Object.prototype[f] && _.O(e[f], f == b);
      }
      c && a.S(!0);
      a.O.parentNode.parentNode.style.display = d ? 'block' : 'none';
    };
    gv.prototype.isVisible = function () {
      return this.za;
    };
    gv.prototype.S = function (a) {
      if (this.za != a) {
        this.za = a;
        if (_.B)
          var b = parseInt('0' + this.g.U.body.leftMargin, 10),
            c = parseInt('0' + this.g.U.body.topMargin, 10);
        var d = 'BackCompat' == this.g.U.compatMode;
        a
          ? (_.L(this.g.U.body, 'top', '0px'),
            _.O(this.A(), !0),
            _.B &&
              (_.wc('7.0')
                ? ((window._bannerquirkfixleft = window._bannerquirkfixtop = 0),
                  d && (this.g.U.body.topMargin = c + 40))
                : d
                ? ((this.g.U.body.topMargin = c + 40),
                  (window._bannerquirkfixleft = window._bannerquirkfixtop = 0))
                : ((window._bannerquirkfixleft = -b),
                  (window._bannerquirkfixtop = -c - 40))))
          : (_.L(this.g.U.body, 'top', '0px'),
            _.O(this.A(), !1),
            d && 40 <= c && (this.g.U.body.topMargin = c - 40));
      }
    };
    gv.prototype.Uf = function (a) {
      this.h.nb(this.h.A(_.T(this, 'progressValue')), a);
    };
    var hv = function (a, b) {
      a.h.nb(a.h.A(_.T(a, 'errorContent')), b);
    };
    gv.prototype.Wf = function (a, b) {
      this.J = a;
      this.B = b;
      this.zb(a);
    };
    var jv = function (a, b) {
      _.y.call(this);
      'string' == _.ob(a) && ((b = a), (a = {}));
      'string' == _.ob(b) && (b = _.ad(document, String(b)));
      this.M = b;
      this.H = new _.J(this);
      this.mc = this.J = void 0;
      this.Jf(Object(a));
      this.ya = new _.Ps(
        { apiKey: this.F.apiKey, Tb: 1, pe: !0, ck: _.uo },
        { client: _.jo, u: window.location.href },
      );
      this.Ca = new Ru(
        void 0,
        this.ya,
        void 0,
        void 0,
        this.F.apiKey,
        void 0,
        void 0,
        new Qu(),
        this.J,
        this.mc,
      );
      this.o = !1;
      this.H.D(window, 'pagehide', this.R);
      this.rf();
    };
    _.u(jv, _.y);
    jv.prototype.Jf = function (a) {
      this.$ = 'auto';
      var b;
      !(b = window.parent != window) &&
        (b =
          (!window.external ||
            !window.external.googleToolbarVersion ||
            6.2 > parseFloat(window.external.googleToolbarVersion)) &&
          (!window.gtbExternal ||
            !window.gtbExternal.isTranslateEnabled ||
            !window.gtbExternal.isTranslateEnabled())) &&
        ((b =
          navigator.appVersion &&
          navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/)),
        (b = !(
          b &&
          b[2] &&
          b[3] &&
          4001 <= 1e3 * Number(b[2]) + Number(b[3])
        )));
      this.F = {
        Oe: b,
        Eg: !1,
        Pe: null,
        Hd: null,
        jc: [],
        yc: [],
        Xe: !1,
        Jb: !1,
        apiKey: '',
        Fg: !1,
        af: '',
        lc: 0,
        xg: !1,
      };
      this.T = { rb: _.so, Dh: 'https://' == _.mo ? _.X.di : null };
      this.K = { rb: _.so, Rd: null };
      a &&
        ('autoDisplay' in a && (this.F.Oe = this.F.Oe && !!a.autoDisplay),
        'multilanguagePage' in a && (this.F.Jb = !!a.multilanguagePage),
        'gaTrack' in a && (this.F.Fg = !!a.gaTrack),
        'layout' in a && (this.F.lc = a.layout),
        a.pageLanguage && (this.F.yb = _.Eo(a.pageLanguage)),
        a.includedLanguages && (this.F.jc = a.includedLanguages.split(',')),
        a.excludedLanguages && (this.F.yc = a.excludedLanguages.split(',')),
        this.F.yb && (this.$ = this.F.yb),
        a.key && (this.F.apiKey = a.key),
        a.gaId && (this.F.af = a.gaId),
        (this.K.Rd = Number(a.floatPosition) || this.K.Rd),
        'disableAutoTranslation' in a &&
          (this.F.xg = !!a.disableAutoTranslation),
        a.jwtToken && (this.J = new Ju(a.jwtToken)),
        a.jwtTokenProvider && (this.J = new Ku(a.jwtTokenProvider)),
        a.translateErrorHandler && (this.mc = a.translateErrorHandler));
      !this.F.xg && kv(this) && (this.F.Eg = !0);
      this.l = {};
      if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2])
        for (this.l = {}, a = _.Yc(a[2]).split('|'), b = 0; b < a.length; ++b) {
          var c = a[b].split('=');
          c[0] && (this.l[c[0]] = c[1]);
        }
    };
    var kv = function (a) {
        function b(f, h) {
          if (
            (f = _.Yc(f).match(
              '^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)',
            ))
          ) {
            if (f[3]) return (h.F.Pe = f[2]), (h.F.Hd = f[3]), !0;
            if (f[6]) return (h.F.Pe = f[5]), (h.F.Hd = f[6]), !0;
          }
          return !1;
        }
        var c = {
            url: function () {
              var f = window.location.href.match(/#.*googtrans(.*)/);
              return f && f[1];
            },
            cookie: function () {
              var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
              return f && f[2];
            },
          },
          d;
        for (d in c)
          if (c[d] !== Object.prototype[d]) {
            var e = c[d]();
            if (e && b(e, a)) return d;
          }
        return '';
      },
      lv = function (a, b) {
        for (var c = window.location.hostname.split('.'); 2 < c.length; )
          c.shift();
        c = ';domain=' + c.join('.');
        null != b
          ? (a = a + '=' + b)
          : ((b = new Date()),
            b.setTime(b.getTime() - 1),
            (a = a + '=none;expires=' + b.toGMTString()));
        a += ';path=/';
        document.cookie = a;
        try {
          document.cookie = a + c;
        } catch (d) {}
      },
      mv = function (a, b) {
        var c = null;
        void 0 !== b && (c = void 0 !== a ? '/' + a + '/' + b : '/' + b);
        lv('googtrans', c);
      };
    _.g = jv.prototype;
    _.g.kf = function (a) {
      this.P = _.Eo(_.W);
      this.lb = _.Xo(a || {});
      this.Ba = {};
      this.B = {};
      a = !this.F.jc.length;
      var b = _.wo(this.F.jc),
        c = _.wo(this.F.yc);
      this.Ba[_.W] = '';
      this.B[_.W] = '';
      for (var d in this.lb.tl)
        this.lb.tl[d] === Object.prototype[d] ||
          !(a || d in b) ||
          d in c ||
          ((this.B[d] = this.lb.tl[d]), d == this.F.yb && !this.F.Jb) ||
          (this.Ba[d] = this.lb.tl[d]);
      this.Ba[_.W] || delete this.Ba[_.W];
      this.B[_.W] || delete this.B[_.W];
      this.re = _.Lh(this.lb.sl);
    };
    _.g.gf = function (a) {
      a && (this.$ = _.Eo(a));
    };
    _.g.lf = function () {
      delete this.Xa;
      if (this.lb) {
        this.$ = this.$ || this.F.Pe;
        this.P = this.F.Hd || this.P;
        var a =
          this.F.Eg ||
          (this.F.Oe &&
            this.$ != this.P &&
            !(this.$ in _.io) &&
            '1' != this.l.os &&
            '1' != this.l['o' + this.$]);
        'zh-TW' == this.$ && (this.$ = 'zh-CN');
        this.re[this.$] || ((a = !1), (this.$ = 'auto'));
        if (!this.Ba[this.P])
          if (((a = !1), this.Ba.en)) this.P = 'en';
          else
            for (var b in this.Ba)
              if (this.Ba[b] !== Object.prototype[b]) {
                this.P = b;
                break;
              }
        if (this.h) {
          var c = this.Ba,
            d = { '': _.X.pg };
          for (b in c) c[b] !== Object.prototype[b] && (d[b] = c[b]);
          this.h.Wf(d, this.B);
          this.h.oa('');
        }
        !_.go && a
          ? this.F.Hd
            ? _.Ao(this.C, this.s.delay((0, _.w)(this.oe, this, !0, !0))).call()
            : ((this.o = !0),
              _.Ao(this.C, this.s.delay((0, _.w)(this.oe, this))).call(),
              _.hi('te_ap', { sl: this.$ }))
          : (this.j && this.j.S(!0), this.h && this.h.S(!0));
        window.google.translate.TranslateService && this.qa(!1);
        this.C.finish();
      }
    };
    _.g.rf = function () {
      this.Xa = new _.xo((0, _.w)(this.lf, this));
      this.s = new _.xo((0, _.w)(this.Qi, this));
      this.C = new _.zo((0, _.w)(this.lj, this));
      this.g = new gv(this.T);
      this.Ca.Cd(this.Xa.register((0, _.w)(this.kf, this)), _.W);
      this.M
        ? ((this.h = new cv(this.F)),
          this.H.D(this.h, 'load', this.Xa.register()),
          this.H.D(
            this.h,
            'chg_tgt_lang',
            _.Ao(this.C, this.s.delay((0, _.w)(this.Ni, this))),
          ),
          this.h.ja(this.M))
        : this.K.Rd &&
          ((this.j = new ev(this.K)),
          this.H.D(this.j, 'load', this.Xa.register()),
          this.H.D(
            this.j,
            'clk_trans',
            _.Ao(this.C, this.s.delay((0, _.w)(this.Mi, this))),
          ),
          this.j.ja());
      !this.F.yb &&
        this.F.Xe &&
        this.Ca.Bd(this.Xa.register((0, _.w)(this.gf, this)));
      this.Xa.finish();
    };
    _.g.Qi = function () {
      var a = this.g,
        b = this.re;
      a.l && a.l.pd(b);
      a.V = b;
      this.g.Wf(this.Ba, this.B);
      this.g.Lb(this.$);
      this.g.oa(this.P);
      this.H.D(this.g, 'clk_confirm', this.Ei);
      this.H.D(this.g, 'clk_cancel', this.Di);
      this.H.D(this.g, 'clk_restore', this.ff);
      this.H.D(this.g, 'clk_close', this.Ud);
      this.H.D(this.g, 'clk_no_ap', this.Fi);
      this.H.D(this.g, 'clk_no_ap_site', this.Gi);
      this.H.D(this.g, 'chg_src_lang', this.Kg);
      this.H.D(this.g, 'chg_tgt_lang', this.Kg);
      this.h && this.h.S(!0);
    };
    _.g.lj = function () {
      this.H.D(this.g, 'load', this.s.register());
      this.g.ja();
      this.s.finish();
    };
    _.g.L = function () {
      this.Ca.restore();
      _.y.prototype.L.call(this);
      this.Ca.R();
      this.H.R();
      this.H = null;
      this.g && this.g.R();
      this.g = null;
      this.j && this.j.R();
      this.j = null;
      this.h && this.h.R();
      this.M = this.h = null;
    };
    _.g.Ei = function () {
      !this.g.isVisible() ||
        (!this.F.Jb && Gu(this.$, this.g.ga())) ||
        (this.o && _.hi('te_apt', { sl: this.$ }),
        nv(this, !1),
        this.h && this.h.oa(this.g.ga()));
    };
    _.g.Di = function () {
      this.g.isVisible() && (ov(this), iv(this.g, 0), this.h && this.h.oa(''));
    };
    _.g.ff = function () {
      this.g.isVisible() && (ov(this), iv(this.g, 0));
      this.h && this.h.oa('');
    };
    _.g.Ud = function () {
      this.g.isVisible() &&
        (this.o && ((this.o = !1), _.hi('te_apc', { sl: this.$ })),
        ov(this),
        this.g.S(!1),
        this.h && this.h.oa(''),
        this.j && this.j.S(!0));
    };
    _.g.Fi = function () {
      this.g.isVisible() &&
        ((this.l['o' + this.$] = '1'),
        _.hi('te_apr', { sl: this.$ }),
        (this.o = !1),
        this.Ud());
    };
    _.g.Gi = function () {
      if (this.g.isVisible()) {
        this.o = !1;
        this.l.os = '1';
        var a = null;
        if (this.l) {
          a = [];
          for (var b in this.l)
            this.l[b] !== Object.prototype[b] && a.push(b + '=' + this.l[b]);
          a = a.join('|');
        }
        lv('googtransopt', a);
        this.Ud();
      }
    };
    _.g.Kg = function () {
      this.g.isVisible() &&
        (!this.F.Jb && Gu(this.$, this.g.ga())
          ? this.ff()
          : ((this.$ = this.g.Va() || this.$),
            (this.P = this.g.ga()),
            2 == this.g.$c && (this.h && this.h.oa(this.g.ga()), nv(this))));
    };
    _.g.oe = function (a, b) {
      this.g.isVisible() ||
        (this.j && this.j.S(!1), a ? nv(this, b) : iv(this.g, 0, !0, this.o));
    };
    _.g.Xj = function (a, b) {
      _.Ao(this.C, this.s.delay((0, _.w)(this.oe, this, a, b))).call();
    };
    _.g.Mi = function () {
      this.oe(2 == this.g.$c);
    };
    _.g.Ni = function () {
      this.h.ga()
        ? !this.F.Jb && Gu(this.$, this.g.ga())
          ? this.ff()
          : ((this.P = this.h.ga()), this.g.oa(this.P), nv(this))
        : this.h.oa(this.P);
    };
    var nv = function (a, b) {
      if (window.google.translate.TranslateService)
        try {
          window.google.translate.TranslateService.getInstance().restore();
        } catch (c) {}
      mv(a.$, a.P);
      a.o = !1;
      !b && a.$ in _.io && _.hi('te_ape', { sl: a.$ });
      a.g.Uf(0);
      iv(a.g, 1, !0);
      a.Ca.lg(!!b);
      window.setTimeout(
        (0, _.w)(
          a.Ca.Dd,
          a.Ca,
          a.F.Jb ? 'auto' : a.$,
          a.P,
          (0, _.w)(a.O, a),
          void 0,
          void 0,
        ),
        0,
      );
      if (a.F.Fg && window._gaq && window._gat)
        try {
          a.F.af
            ? window._gat
                ._getTracker(a.F.af)
                ._trackEvent('Google Website Translator', 'Translate', a.P)
            : window._gat
                ._getTrackerByName()
                ._trackEvent('Google Website Translator', 'Translate', a.P);
        } catch (c) {}
    };
    jv.prototype.O = function (a, b, c) {
      'function' == typeof this.W && this.W();
      this.g.isVisible() &&
        1 == this.g.$c &&
        (c
          ? (ov(this),
            iv(this.g, -1, !0),
            2 == c ? hv(this.g, _.X.Yh) : hv(this.g, _.X.dg))
          : (this.g.Uf(a),
            b &&
              (this.h && this.h.oa(this.P), this.g.Lb(this.$), iv(this.g, 2))));
    };
    var ov = function (a) {
      mv();
      window.setTimeout((0, _.w)(a.Ca.restore, a.Ca, null), 0);
    };
    jv.prototype.qa = function (a) {
      a || this.Ud();
      this.h && this.h.qa(a);
      this.j && this.j.S(a);
    };
    _.tp();
    if (1 == _.pi) {
      var pv = null,
        qv = function (a) {
          if (!pv) {
            var b, c, d, e;
            a &&
              ('key' in a && (b = a.key),
              'serverParams' in a && (c = a.serverParams),
              'timeInfo' in a && (d = a.timeInfo),
              'remoteApiProxyHandlers' in a && (e = a.remoteApiProxyHandlers),
              (a =
                (a = window.location.hash.match(
                  /google\.translate\.element\.sp=([^&]+)/,
                )) && a[1]
                  ? a[1]
                  : null) && (c = a));
            a = 0;
            if ('te_lib' == _.jo || _.gc) a = 3;
            pv = new Ru(
              void 0,
              new _.Ps({
                apiKey: b,
                Tb: a,
                pe: !0,
                trackVisibility: 'tvis' == c,
              }),
              void 0,
              void 0,
              b,
              c,
              d,
              new Qu(),
              void 0,
              void 0,
              e,
            );
            pv.constructor = _.v;
            pv.isAvailable = pv.Ja;
            pv.getSupportedLanguages = pv.Cd;
            pv.getPageLanguage = pv.Bd;
            pv.setClickThrough = pv.lg;
            pv.translatePage = pv.Dd;
            pv.restore = pv.restore;
            pv.isTranslating = pv.Rh;
            pv.setCheckVisibility = pv.Uj;
          }
          return pv;
        };
      qv.getInstance = function () {
        return pv;
      };
      _.vb('google.translate.TranslateService', qv);
      _.hi('te_li');
    } else {
      var rv = null,
        sv = function (a, b) {
          rv || ((rv = new jv(a, b)), (rv.constructor = _.v));
          return rv;
        };
      sv.getInstance = function () {
        return rv;
      };
      _.vb('google.translate.TranslateElement', sv);
      jv.prototype.dispose = jv.prototype.R;
      jv.prototype.showBanner = jv.prototype.Xj;
      jv.prototype.setEnabled = jv.prototype.qa;
      _.vb('google.translate.TranslateElement.FloatPosition', fv);
      fv.TOP_LEFT = 1;
      fv.TOP_RIGHT = 2;
      fv.BOTTOM_RIGHT = 3;
      fv.BOTTOM_LEFT = 4;
      _.vb('google.translate.TranslateElement.InlineLayout', dv);
      dv.VERTICAL = 0;
      dv.HORIZONTAL = 1;
      dv.SIMPLE = 2;
    }
    _.qi();

    _.oa();
  } catch (e) {
    _._DumpException(e);
  }
}.call(this, this.default_tr));
// Google Inc.
