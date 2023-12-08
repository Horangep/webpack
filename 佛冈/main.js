
window = global;
let fg;
!function (e) {
    function c(a) {
        if (f[a])
            return f[a].exports;
        var d = f[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        // console.log(a)
            return e[a].call(d.exports, d, d.exports, c),
            d.l = !0,
            d.exports
    }

    var a = window.webpackJsonp;
    window.webpackJsonp = function (f, b, n) {
        for (var t, r, o, i = 0, u = []; i < f.length; i++)
            r = f[i],
            d[r] && u.push(d[r][0]),
                d[r] = 0;
        for (t in b)
            Object.prototype.hasOwnProperty.call(b, t) && (e[t] = b[t]);
        for (a && a(f, b, n); u.length;)
            u.shift()();
        if (n)
            for (i = 0; i < n.length; i++)
                o = c(c.s = n[i]);
        return o
    }
    ;
    var f = {}
        , d = {
        142: 0
    };
    c.e = function (e) {
        function a() {
            t.onerror = t.onload = null,
                clearTimeout(r);
            var c = d[e];
            0 !== c && (c && c[1](new Error("Loading chunk " + e + " failed.")),
                d[e] = void 0)
        }

        var f = d[e];
        if (0 === f)
            return new Promise(function (e) {
                    e()
                }
            );
        if (f)
            return f[2];
        var b = new Promise(function (c, a) {
                f = d[e] = [c, a]
            }
        );
        f[2] = b;
        var n = document.getElementsByTagName("head")[0]
            , t = document.createElement("script");
        t.type = "text/javascript",
            t.charset = "utf-8",
            t.async = !0,
            t.timeout = 12e4,
            t.crossOrigin = "anonymous",
        c.nc && t.setAttribute("nonce", c.nc),
            t.src = c.p + "js/" + e + "." + {
                0: "1663eb0e9272ed31276f",
                1: "bd357623c27dd4217352",
                2: "c38623de8cc7c41fcd42",
                3: "a6aa5a720def7e8cff82",
                4: "0db26bc7a096136385ff",
                5: "f783f14d28a57008f086",
                6: "694c01e1c9b2e9071b1e",
                7: "b690bd9c18dec3e2e498",
                8: "209508ca184458ddee63",
                9: "6d0a807639c67c0040ce",
                10: "5f8ed593b6889f271b6d",
                11: "2acb73d2cd3596d1aa64",
                12: "126647c14dcfaf56e8e3",
                13: "e30a6d95d8ecd26a598c",
                14: "82ed6ab3b136ce3cb0b9",
                15: "4573e876101c5654bda7",
                16: "01102ae605db6cfe192e",
                17: "c864f6b26c5b7adceea0",
                18: "12c03937530642dc8c71",
                19: "4207b3c1a2e1e12844cb",
                20: "4862ccf65ebc81a4786d",
                21: "ac3584feecf0fb1f5176",
                22: "6fb806ebd97f7373f45f",
                23: "8f96ba99b076ec3a0608",
                24: "5cf2b3365854cc6d41fd",
                25: "e55fdf888f853240a83f",
                26: "ffd5710431b5ff243bdb",
                27: "11b7f8171498d171cb1b",
                28: "e350a8ca2dc164e343cc",
                29: "30897f2b3dea351a412e",
                30: "fd4e792e3106aceddddb",
                31: "3beb95a91d0ee117f46f",
                32: "4be404beb73972eb463c",
                33: "d947e00986a0bd05b8e1",
                34: "c3e5a7a4c795f490acfb",
                35: "a7b32915bd7899ee3a3e",
                36: "6d76e4e8b69bd6f73da4",
                37: "46237db27fbd37ac92a1",
                38: "0522c81a1d2dfcff4f57",
                39: "8dad7c281898702385b2",
                40: "775237dbc70192d1c159",
                41: "f207ad4593ddff2ba9d3",
                42: "0f9f8de94a0559ff7f9a",
                43: "6420995a72809f9a2f1a",
                44: "b4a4254624c391815e39",
                45: "0feb3628612bc7159b80",
                46: "091ede5be9ad150f9fa8",
                47: "948056b13f3710df3bb4",
                48: "0294f62d8ca5bb339f05",
                49: "7a0410865d7aac5d2858",
                50: "641fe0ad1a47ffc72930",
                51: "51fb15f1470da8951887",
                52: "5de81b58b822f2ffe1b1",
                53: "3a29942abbb162dd7a38",
                54: "10e8533df5b631eed237",
                55: "abf13c5739ea3391f5a1",
                56: "1d2277a6cc71f9c459c6",
                57: "86c397c4988b0d71a2ec",
                58: "e61694534f4aa62bc7f0",
                59: "1285513a54a1bb6f135a",
                60: "853728aac919187914d7",
                61: "edc4a2d3eacabc777a8a",
                62: "24da5626bfa2a5587a4d",
                63: "5902543dd4094f757aa0",
                64: "92290167de89319bddc7",
                65: "5c4f4e89ce95b171a9c7",
                66: "0bfcc749b7a6a9b0d742",
                67: "f0eb557ca8a0a6fb5b12",
                68: "f01b410d16879febf64d",
                69: "d0473276645261045121",
                70: "c4dbc6a749355fb2e4ec",
                71: "ea68178323884a43fb53",
                72: "605138d5a65edce14e40",
                73: "fbd00047c0510249f873",
                74: "1831f6eea2feb83a0da0",
                75: "63c4541d603e2885df2e",
                76: "630cf7572d908ae33450",
                77: "87895afb769a8400111c",
                78: "866adb44c25ff51e4ef4",
                79: "48a5b4a95f608f32e1ae",
                80: "31dd06dbd6ea28be8fd1",
                81: "185c71d4ae1b041cd7e2",
                82: "acbe8344048f2d870e61",
                83: "3e53864ff4bfed065533",
                84: "c479fe2a60beba4e1792",
                85: "99f2c8e437ee785b8b85",
                86: "dfa454b15c54d7153807",
                87: "fca8de0888438c694e54",
                88: "0eef8546f07e82b28baf",
                89: "622dcf39e5b468bcbc61",
                90: "0b58e1bbeb164b24abeb",
                91: "0794b22d273be7afcff7",
                92: "e768b89925a0a930b08c",
                93: "9027f2c6ee1c23626a94",
                94: "cb6160df9608ece75bce",
                95: "f12ddabdf816db71cdbf",
                96: "960c808512d8d86ed016",
                97: "10a4aed6c78197b786b8",
                98: "fc983eecbfa6e7d6a2be",
                99: "52d57649a51977f7c3db",
                100: "ec7c4a12b1affb12a66f",
                101: "8c2523faec7cd4b9c64d",
                102: "d8d38304c3c43147229b",
                103: "00ab7582f477d436e15e",
                104: "73e91f7d45aa25b86467",
                105: "831f5be4b6a2dfd54fc9",
                106: "29c81bb90f8aad3727e4",
                107: "b1656e98512a68046b14",
                108: "4f8b9553b7d2a9fee2ed",
                109: "59dc9fc623c0e0ad7996",
                110: "be41a5477336ca474e6e",
                111: "92870dd49654c6ce1520",
                112: "82f974b397964ee136cb",
                113: "a5d40c4f1211d48244cc",
                114: "c3b12fc2ee6a3af325e1",
                115: "9c401ff915cde5d092a7",
                116: "36df62ccadf16071e700",
                117: "e16d6c2b5a03790254d9",
                118: "cdc1d9e32312aeed4028",
                119: "c0c1526b12c8c1567761",
                120: "a23fdc9bd161103a4713",
                121: "ce2004428ba74fcc2488",
                122: "8a07fff9bdc66a83ee19",
                123: "80273f46eb5d2130f2b1",
                124: "e700aae460d8b923191d",
                125: "b0aa1980b594050084b0",
                126: "c5ae09f84ece2b5f2cef",
                127: "72cd74075f6f8fe40ef3",
                128: "cb71e8a2d16f8280fab5",
                129: "5930677f664786ab600c",
                130: "73c4c16b1cbb2883563a",
                131: "1c4032cc983601425893",
                132: "97e779dc7388ddc1250a",
                133: "a1339cf68d06046cf3d4",
                134: "35ad4c1a9fc906d38ea1",
                135: "df3d8c329bac477cc1f6",
                136: "eb6b2b220ae154cbe69a",
                137: "e084e24d2a0f95816296",
                138: "49f5c436937a9bcf5f48",
                139: "e1ff384125b326a30e7e",
                140: "2f2ca076406da1b0d4ad"
            }[e] + ".js";
        var r = setTimeout(a, 12e4);
        return t.onerror = t.onload = a,
            n.appendChild(t),
            b
    }
        ,
        c.m = e,
        c.c = f,
        c.d = function (e, a, f) {
            c.o(e, a) || Object.defineProperty(e, a, {
                configurable: !1,
                enumerable: !0,
                get: f
            })
        }
        ,
        c.n = function (e) {
            var a = e && e.__esModule ? function () {
                    return e.default
                }
                : function () {
                    return e
                }
            ;
            return c.d(a, "a", a),
                a
        }
        ,
        c.o = function (e, c) {
            return Object.prototype.hasOwnProperty.call(e, c)
        }
        ,
        c.p = "https://sitecdn.itouchtv.cn/sitecdn/m-mj/prod/",
        c.oe = function (e) {
            throw e
        }
    fg = c;

}({
    17: function (t, e, n) {
        !function (n, r) {
            t.exports = e = r()
        }(0, function () {
            var t = t || function (t, e) {
                var n = Object.create || function () {
                    function t() {
                    }

                    return function (e) {
                        var n;
                        return t.prototype = e,
                            n = new t,
                            t.prototype = null,
                            n
                    }
                }()
                    , r = {}
                    , i = r.lib = {}
                    , a = i.Base = function () {
                    return {
                        extend: function (t) {
                            var e = n(this);
                            return t && e.mixIn(t),
                            e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () {
                                    e.$super.init.apply(this, arguments)
                                }
                            ),
                                e.init.prototype = e,
                                e.$super = this,
                                e
                        },
                        create: function () {
                            var t = this.extend();
                            return t.init.apply(t, arguments),
                                t
                        },
                        init: function () {
                        },
                        mixIn: function (t) {
                            for (var e in t)
                                t.hasOwnProperty(e) && (this[e] = t[e]);
                            t.hasOwnProperty("toString") && (this.toString = t.toString)
                        },
                        clone: function () {
                            return this.init.prototype.extend(this)
                        }
                    }
                }()
                    , o = i.WordArray = a.extend({
                    init: function (t, e) {
                        t = this.words = t || [],
                            this.sigBytes = void 0 != e ? e : 4 * t.length
                    },
                    toString: function (t) {
                        return (t || u).stringify(this)
                    },
                    concat: function (t) {
                        var e = this.words
                            , n = t.words
                            , r = this.sigBytes
                            , i = t.sigBytes;
                        if (this.clamp(),
                        r % 4)
                            for (var a = 0; a < i; a++) {
                                var o = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                                e[r + a >>> 2] |= o << 24 - (r + a) % 4 * 8
                            }
                        else
                            for (var a = 0; a < i; a += 4)
                                e[r + a >>> 2] = n[a >>> 2];
                        return this.sigBytes += i,
                            this
                    },
                    clamp: function () {
                        var e = this.words
                            , n = this.sigBytes;
                        e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                            e.length = t.ceil(n / 4)
                    },
                    clone: function () {
                        var t = a.clone.call(this);
                        return t.words = this.words.slice(0),
                            t
                    },
                    random: function (e) {
                        for (var n, r = [], i = 0; i < e; i += 4) {
                            var a = function (e) {
                                var e = e
                                    , n = 987654321
                                    , r = 4294967295;
                                return function () {
                                    n = 36969 * (65535 & n) + (n >> 16) & r,
                                        e = 18e3 * (65535 & e) + (e >> 16) & r;
                                    var i = (n << 16) + e & r;
                                    return i /= 4294967296,
                                    (i += .5) * (t.random() > .5 ? 1 : -1)
                                }
                            }(4294967296 * (n || t.random()));
                            n = 987654071 * a(),
                                r.push(4294967296 * a() | 0)
                        }
                        return new o.init(r, e)
                    }
                })
                    , s = r.enc = {}
                    , u = s.Hex = {
                    stringify: function (t) {
                        for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                            var a = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push((a >>> 4).toString(16)),
                                r.push((15 & a).toString(16))
                        }
                        return r.join("")
                    },
                    parse: function (t) {
                        for (var e = t.length, n = [], r = 0; r < e; r += 2)
                            n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new o.init(n, e / 2)
                    }
                }
                    , c = s.Latin1 = {
                    stringify: function (t) {
                        for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                            var a = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push(String.fromCharCode(a))
                        }
                        return r.join("")
                    },
                    parse: function (t) {
                        for (var e = t.length, n = [], r = 0; r < e; r++)
                            n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new o.init(n, e)
                    }
                }
                    , l = s.Utf8 = {
                    stringify: function (t) {
                        try {
                            return decodeURIComponent(escape(c.stringify(t)))
                        } catch (t) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function (t) {
                        return c.parse(unescape(encodeURIComponent(t)))
                    }
                }
                    , f = i.BufferedBlockAlgorithm = a.extend({
                    reset: function () {
                        this._data = new o.init,
                            this._nDataBytes = 0
                    },
                    _append: function (t) {
                        "string" == typeof t && (t = l.parse(t)),
                            this._data.concat(t),
                            this._nDataBytes += t.sigBytes
                    },
                    _process: function (e) {
                        var n = this._data
                            , r = n.words
                            , i = n.sigBytes
                            , a = this.blockSize
                            , s = 4 * a
                            , u = i / s;
                        u = e ? t.ceil(u) : t.max((0 | u) - this._minBufferSize, 0);
                        var c = u * a
                            , l = t.min(4 * c, i);
                        if (c) {
                            for (var f = 0; f < c; f += a)
                                this._doProcessBlock(r, f);
                            var d = r.splice(0, c);
                            n.sigBytes -= l
                        }
                        return new o.init(d, l)
                    },
                    clone: function () {
                        var t = a.clone.call(this);
                        return t._data = this._data.clone(),
                            t
                    },
                    _minBufferSize: 0
                })
                    , d = (i.Hasher = f.extend({
                    cfg: a.extend(),
                    init: function (t) {
                        this.cfg = this.cfg.extend(t),
                            this.reset()
                    },
                    reset: function () {
                        f.reset.call(this),
                            this._doReset()
                    },
                    update: function (t) {
                        return this._append(t),
                            this._process(),
                            this
                    },
                    finalize: function (t) {
                        return t && this._append(t),
                            this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function (t) {
                        return function (e, n) {
                            return new t.init(n).finalize(e)
                        }
                    },
                    _createHmacHelper: function (t) {
                        return function (e, n) {
                            return new d.HMAC.init(t, n).finalize(e)
                        }
                    }
                }),
                    r.algo = {});
                return r
            }(Math);
            return t
        })
    },
    130: function (t, e, n) {
        !function (r, i) {
            t.exports = e = i(n(17))
        }(0, function (t) {
            return function (e) {
                function n(t, e, n, r, i, a, o) {
                    var s = t + (e & n | ~e & r) + i + o;
                    return (s << a | s >>> 32 - a) + e
                }

                function r(t, e, n, r, i, a, o) {
                    var s = t + (e & r | n & ~r) + i + o;
                    return (s << a | s >>> 32 - a) + e
                }

                function i(t, e, n, r, i, a, o) {
                    var s = t + (e ^ n ^ r) + i + o;
                    return (s << a | s >>> 32 - a) + e
                }

                function a(t, e, n, r, i, a, o) {
                    var s = t + (n ^ (e | ~r)) + i + o;
                    return (s << a | s >>> 32 - a) + e
                }

                var o = t
                    , s = o.lib
                    , u = s.WordArray
                    , c = s.Hasher
                    , l = o.algo
                    , f = [];
                !function () {
                    for (var t = 0; t < 64; t++)
                        f[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
                }();
                var d = l.MD5 = c.extend({
                    _doReset: function () {
                        this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function (t, e) {
                        for (var o = 0; o < 16; o++) {
                            var s = e + o
                                , u = t[s];
                            t[s] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                        }
                        var c = this._hash.words
                            , l = t[e + 0]
                            , d = t[e + 1]
                            , p = t[e + 2]
                            , h = t[e + 3]
                            , v = t[e + 4]
                            , m = t[e + 5]
                            , g = t[e + 6]
                            , y = t[e + 7]
                            , b = t[e + 8]
                            , _ = t[e + 9]
                            , w = t[e + 10]
                            , x = t[e + 11]
                            , S = t[e + 12]
                            , O = t[e + 13]
                            , E = t[e + 14]
                            , T = t[e + 15]
                            , C = c[0]
                            , j = c[1]
                            , k = c[2]
                            , A = c[3];
                        C = n(C, j, k, A, l, 7, f[0]),
                            A = n(A, C, j, k, d, 12, f[1]),
                            k = n(k, A, C, j, p, 17, f[2]),
                            j = n(j, k, A, C, h, 22, f[3]),
                            C = n(C, j, k, A, v, 7, f[4]),
                            A = n(A, C, j, k, m, 12, f[5]),
                            k = n(k, A, C, j, g, 17, f[6]),
                            j = n(j, k, A, C, y, 22, f[7]),
                            C = n(C, j, k, A, b, 7, f[8]),
                            A = n(A, C, j, k, _, 12, f[9]),
                            k = n(k, A, C, j, w, 17, f[10]),
                            j = n(j, k, A, C, x, 22, f[11]),
                            C = n(C, j, k, A, S, 7, f[12]),
                            A = n(A, C, j, k, O, 12, f[13]),
                            k = n(k, A, C, j, E, 17, f[14]),
                            j = n(j, k, A, C, T, 22, f[15]),
                            C = r(C, j, k, A, d, 5, f[16]),
                            A = r(A, C, j, k, g, 9, f[17]),
                            k = r(k, A, C, j, x, 14, f[18]),
                            j = r(j, k, A, C, l, 20, f[19]),
                            C = r(C, j, k, A, m, 5, f[20]),
                            A = r(A, C, j, k, w, 9, f[21]),
                            k = r(k, A, C, j, T, 14, f[22]),
                            j = r(j, k, A, C, v, 20, f[23]),
                            C = r(C, j, k, A, _, 5, f[24]),
                            A = r(A, C, j, k, E, 9, f[25]),
                            k = r(k, A, C, j, h, 14, f[26]),
                            j = r(j, k, A, C, b, 20, f[27]),
                            C = r(C, j, k, A, O, 5, f[28]),
                            A = r(A, C, j, k, p, 9, f[29]),
                            k = r(k, A, C, j, y, 14, f[30]),
                            j = r(j, k, A, C, S, 20, f[31]),
                            C = i(C, j, k, A, m, 4, f[32]),
                            A = i(A, C, j, k, b, 11, f[33]),
                            k = i(k, A, C, j, x, 16, f[34]),
                            j = i(j, k, A, C, E, 23, f[35]),
                            C = i(C, j, k, A, d, 4, f[36]),
                            A = i(A, C, j, k, v, 11, f[37]),
                            k = i(k, A, C, j, y, 16, f[38]),
                            j = i(j, k, A, C, w, 23, f[39]),
                            C = i(C, j, k, A, O, 4, f[40]),
                            A = i(A, C, j, k, l, 11, f[41]),
                            k = i(k, A, C, j, h, 16, f[42]),
                            j = i(j, k, A, C, g, 23, f[43]),
                            C = i(C, j, k, A, _, 4, f[44]),
                            A = i(A, C, j, k, S, 11, f[45]),
                            k = i(k, A, C, j, T, 16, f[46]),
                            j = i(j, k, A, C, p, 23, f[47]),
                            C = a(C, j, k, A, l, 6, f[48]),
                            A = a(A, C, j, k, y, 10, f[49]),
                            k = a(k, A, C, j, E, 15, f[50]),
                            j = a(j, k, A, C, m, 21, f[51]),
                            C = a(C, j, k, A, S, 6, f[52]),
                            A = a(A, C, j, k, h, 10, f[53]),
                            k = a(k, A, C, j, w, 15, f[54]),
                            j = a(j, k, A, C, d, 21, f[55]),
                            C = a(C, j, k, A, b, 6, f[56]),
                            A = a(A, C, j, k, T, 10, f[57]),
                            k = a(k, A, C, j, g, 15, f[58]),
                            j = a(j, k, A, C, O, 21, f[59]),
                            C = a(C, j, k, A, v, 6, f[60]),
                            A = a(A, C, j, k, x, 10, f[61]),
                            k = a(k, A, C, j, p, 15, f[62]),
                            j = a(j, k, A, C, _, 21, f[63]),
                            c[0] = c[0] + C | 0,
                            c[1] = c[1] + j | 0,
                            c[2] = c[2] + k | 0,
                            c[3] = c[3] + A | 0
                    },
                    _doFinalize: function () {
                        var t = this._data
                            , n = t.words
                            , r = 8 * this._nDataBytes
                            , i = 8 * t.sigBytes;
                        n[i >>> 5] |= 128 << 24 - i % 32;
                        var a = e.floor(r / 4294967296)
                            , o = r;
                        n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                            n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                            t.sigBytes = 4 * (n.length + 1),
                            this._process();
                        for (var s = this._hash, u = s.words, c = 0; c < 4; c++) {
                            var l = u[c];
                            u[c] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                        }
                        return s
                    },
                    clone: function () {
                        var t = c.clone.call(this);
                        return t._hash = this._hash.clone(),
                            t
                    }
                });
                o.MD5 = c._createHelper(d),
                    o.HmacMD5 = c._createHmacHelper(d)
            }(Math),
                t.MD5
        })
    },
    189: function (t, e, n) {
        !function (r, i) {
            t.exports = e = i(n(17))
        }(0, function (t) {
            return function () {
                function e(t, e, n) {
                    for (var r = [], a = 0, o = 0; o < e; o++)
                        if (o % 4) {
                            var s = n[t.charCodeAt(o - 1)] << o % 4 * 2
                                , u = n[t.charCodeAt(o)] >>> 6 - o % 4 * 2;
                            r[a >>> 2] |= (s | u) << 24 - a % 4 * 8,
                                a++
                        }
                    return i.create(r, a)
                }

                var n = t
                    , r = n.lib
                    , i = r.WordArray
                    , a = n.enc;
                a.Base64 = {
                    stringify: function (t) {
                        var e = t.words
                            , n = t.sigBytes
                            , r = this._map;
                        t.clamp();
                        for (var i = [], a = 0; a < n; a += 3)
                            for (var o = e[a >>> 2] >>> 24 - a % 4 * 8 & 255, s = e[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255, u = e[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, c = o << 16 | s << 8 | u, l = 0; l < 4 && a + .75 * l < n; l++)
                                i.push(r.charAt(c >>> 6 * (3 - l) & 63));
                        var f = r.charAt(64);
                        if (f)
                            for (; i.length % 4;)
                                i.push(f);
                        return i.join("")
                    },
                    parse: function (t) {
                        var n = t.length
                            , r = this._map
                            , i = this._reverseMap;
                        if (!i) {
                            i = this._reverseMap = [];
                            for (var a = 0; a < r.length; a++)
                                i[r.charCodeAt(a)] = a
                        }
                        var o = r.charAt(64);
                        if (o) {
                            var s = t.indexOf(o);
                            -1 !== s && (n = s)
                        }
                        return e(t, n, i)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
            }(),
                t.enc.Base64
        })
    },
    414: function (t, e, n) {
        !function (r, i, a) {
            t.exports = e = i(n(17), n(415), n(190))
        }(0, function (t) {
            return t.HmacSHA256
        })
    },
    415: function (t, e, n) {
        !function (r, i) {
            t.exports = e = i(n(17))
        }(0, function (t) {
            return function (e) {
                var n = t
                    , r = n.lib
                    , i = r.WordArray
                    , a = r.Hasher
                    , o = n.algo
                    , s = []
                    , u = [];
                !function () {
                    function t(t) {
                        return 4294967296 * (t - (0 | t)) | 0
                    }

                    for (var n = 2, r = 0; r < 64;)
                        (function (t) {
                                for (var n = e.sqrt(t), r = 2; r <= n; r++)
                                    if (!(t % r))
                                        return !1;
                                return !0
                            }
                        )(n) && (r < 8 && (s[r] = t(e.pow(n, .5))),
                            u[r] = t(e.pow(n, 1 / 3)),
                            r++),
                            n++
                }();
                var c = []
                    , l = o.SHA256 = a.extend({
                    _doReset: function () {
                        this._hash = new i.init(s.slice(0))
                    },
                    _doProcessBlock: function (t, e) {
                        for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], l = n[5], f = n[6], d = n[7], p = 0; p < 64; p++) {
                            if (p < 16)
                                c[p] = 0 | t[e + p];
                            else {
                                var h = c[p - 15]
                                    , v = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3
                                    , m = c[p - 2]
                                    , g = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                                c[p] = v + c[p - 7] + g + c[p - 16]
                            }
                            var y = s & l ^ ~s & f
                                , b = r & i ^ r & a ^ i & a
                                , _ = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22)
                                , w = (s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)
                                , x = d + w + y + u[p] + c[p]
                                , S = _ + b;
                            d = f,
                                f = l,
                                l = s,
                                s = o + x | 0,
                                o = a,
                                a = i,
                                i = r,
                                r = x + S | 0
                        }
                        n[0] = n[0] + r | 0,
                            n[1] = n[1] + i | 0,
                            n[2] = n[2] + a | 0,
                            n[3] = n[3] + o | 0,
                            n[4] = n[4] + s | 0,
                            n[5] = n[5] + l | 0,
                            n[6] = n[6] + f | 0,
                            n[7] = n[7] + d | 0
                    },
                    _doFinalize: function () {
                        var t = this._data
                            , n = t.words
                            , r = 8 * this._nDataBytes
                            , i = 8 * t.sigBytes;
                        return n[i >>> 5] |= 128 << 24 - i % 32,
                            n[14 + (i + 64 >>> 9 << 4)] = e.floor(r / 4294967296),
                            n[15 + (i + 64 >>> 9 << 4)] = r,
                            t.sigBytes = 4 * n.length,
                            this._process(),
                            this._hash
                    },
                    clone: function () {
                        var t = a.clone.call(this);
                        return t._hash = this._hash.clone(),
                            t
                    }
                });
                n.SHA256 = a._createHelper(l),
                    n.HmacSHA256 = a._createHmacHelper(l)
            }(Math),
                t.SHA256
        })
    },
    190: function (t, e, n) {
        !function (r, i) {
            t.exports = e = i(n(17))
        }(0, function (t) {
            !function () {
                var e = t
                    , n = e.lib
                    , r = n.Base
                    , i = e.enc
                    , a = i.Utf8
                    , o = e.algo;
                o.HMAC = r.extend({
                    init: function (t, e) {
                        t = this._hasher = new t.init,
                        "string" == typeof e && (e = a.parse(e));
                        var n = t.blockSize
                            , r = 4 * n;
                        e.sigBytes > r && (e = t.finalize(e)),
                            e.clamp();
                        for (var i = this._oKey = e.clone(), o = this._iKey = e.clone(), s = i.words, u = o.words, c = 0; c < n; c++)
                            s[c] ^= 1549556828,
                                u[c] ^= 909522486;
                        i.sigBytes = o.sigBytes = r,
                            this.reset()
                    },
                    reset: function () {
                        var t = this._hasher;
                        t.reset(),
                            t.update(this._iKey)
                    },
                    update: function (t) {
                        return this._hasher.update(t),
                            this
                    },
                    finalize: function (t) {
                        var e = this._hasher
                            , n = e.finalize(t);
                        return e.reset(),
                            e.finalize(this._oKey.clone().concat(n))
                    }
                })
            }()
        })
    }
});
function i(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}


    // c = fg(418)
o = fg(130)
, r = i(o)
, s = fg(189)
, u = i(s)
, c = fg(414)
 , l = i(c)
 // p = fg(530)
function get_h(n,i){
    var a = "ITOUCHTV_WEB_M"
        , o = (new Date).getTime()
        , s = ""
        , c = "";
    i && (s = (0,
        r.default)(i),
        c = u.default.stringify(s));
    var d = 'GET' + "\n" + n + "\n" + o + "\n" + c;
    var headers = {
    //#固定
        "Content-Type": "application/json",
        'X-ITOUCHTV-CLIENT': a,
    'X-ITOUCHTV-Ca-Timestamp': o.toString(),
    'X-ITOUCHTV-Ca-Signature': u.default.stringify((0,
            l.default)(d, "HGXimfS2hcAeWbsCW19JQ7PDasYOgg1lY2UWUDVX8nNmwr6aSaFznnPzKrZ84VY1")),
        'X-ITOUCHTV-Ca-Key': '28778826534697375418351580924221',
    // 'x-itouchtv-device-id': "WEBM_" + p(),
        }

    return headers
}
console.log(get_h('https://api.itouchtv.cn/newsservice/v1/appBranchH5ShareConfig?fromSource=share&domain=fogang-m.itouchtv.cn',''))