(self.webpackChunkagoda_webpack_clientside_webpack5 = self.webpackChunkagoda_webpack_clientside_webpack5 || []).push([[8293], {
    35776: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /*
* Braze Web SDK v2.7.0
* (c) Braze, Inc. 2020 - http://braze.com
* License available at https://github.com/Appboy/appboy-web-sdk/blob/master/LICENSE
* Compiled on 2020-07-15
*/
        (function() {
            "undefined" != typeof self && self,
            __WEBPACK_AMD_DEFINE_ARRAY__ = [],
            __WEBPACK_AMD_DEFINE_FACTORY__ = function() {
                var e, t = {};
                function a(e) {
                    var t = 0;
                    return function() {
                        return t < e.length ? {
                            done: !1,
                            value: e[t++]
                        } : {
                            done: !0
                        }
                    }
                }
                function n(e) {
                    var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
                    return t ? t.call(e) : {
                        next: a(e)
                    }
                }
                var i = "function" == typeof Object.create ? Object.create : function(e) {
                    function t() {}
                    return t.prototype = e,
                    new t
                }
                  , o = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, a) {
                    return e == Array.prototype || e == Object.prototype || (e[t] = a.value),
                    e
                }
                ;
                function r(e) {
                    e = ["object" == typeof globalThis && globalThis, e, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof __webpack_require__.g && __webpack_require__.g];
                    for (var t = 0; t < e.length; ++t) {
                        var a = e[t];
                        if (a && a.Math == Math)
                            return a
                    }
                    throw Error("Cannot find global object")
                }
                var s, l = r(this);
                function c(e, t) {
                    if (t)
                        e: {
                            var a = l;
                            e = e.split(".");
                            for (var n = 0; n < e.length - 1; n++) {
                                var i = e[n];
                                if (!(i in a))
                                    break e;
                                a = a[i]
                            }
                            (t = t(n = a[e = e[e.length - 1]])) != n && null != t && o(a, e, {
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                }
                if ("function" == typeof Object.setPrototypeOf)
                    s = Object.setPrototypeOf;
                else {
                    var b;
                    e: {
                        var p = {
                            $f: !0
                        }
                          , u = {};
                        try {
                            u.__proto__ = p,
                            b = u.$f;
                            break e
                        } catch (e) {}
                        b = !1
                    }
                    s = b ? function(e, t) {
                        if (e.__proto__ = t,
                        e.__proto__ !== t)
                            throw new TypeError(e + " is not extensible");
                        return e
                    }
                    : null
                }
                var d = s;
                function h(e, t) {
                    if (e.prototype = i(t.prototype),
                    e.prototype.constructor = e,
                    d)
                        d(e, t);
                    else
                        for (var a in t)
                            if ("prototype" != a)
                                if (Object.defineProperties) {
                                    var n = Object.getOwnPropertyDescriptor(t, a);
                                    n && Object.defineProperty(e, a, n)
                                } else
                                    e[a] = t[a];
                    e.jh = t.prototype
                }
                c("String.prototype.repeat", (function(e) {
                    return e || function(e) {
                        if (null == this)
                            throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");
                        var t = this + "";
                        if (0 > e || 1342177279 < e)
                            throw new RangeError("Invalid count value");
                        e |= 0;
                        for (var a = ""; e; )
                            1 & e && (a += t),
                            (e >>>= 1) && (t += t);
                        return a
                    }
                }
                )),
                c("Promise", (function(e) {
                    function t(e) {
                        this.Lb = 0,
                        this.Dd = void 0,
                        this.qb = [];
                        var t = this.md();
                        try {
                            e(t.resolve, t.reject)
                        } catch (e) {
                            t.reject(e)
                        }
                    }
                    function a() {
                        this.Ha = null
                    }
                    function i(e) {
                        return e instanceof t ? e : new t((function(t) {
                            t(e)
                        }
                        ))
                    }
                    if (e)
                        return e;
                    a.prototype.xe = function(e) {
                        if (null == this.Ha) {
                            this.Ha = [];
                            var t = this;
                            this.ye((function() {
                                t.lg()
                            }
                            ))
                        }
                        this.Ha.push(e)
                    }
                    ;
                    var o = l.setTimeout;
                    a.prototype.ye = function(e) {
                        o(e, 0)
                    }
                    ,
                    a.prototype.lg = function() {
                        for (; this.Ha && this.Ha.length; ) {
                            var e = this.Ha;
                            this.Ha = [];
                            for (var t = 0; t < e.length; ++t) {
                                var a = e[t];
                                e[t] = null;
                                try {
                                    a()
                                } catch (e) {
                                    this.cg(e)
                                }
                            }
                        }
                        this.Ha = null
                    }
                    ,
                    a.prototype.cg = function(e) {
                        this.ye((function() {
                            throw e
                        }
                        ))
                    }
                    ,
                    t.prototype.md = function() {
                        function e(e) {
                            return function(n) {
                                a || (a = !0,
                                e.call(t, n))
                            }
                        }
                        var t = this
                          , a = !1;
                        return {
                            resolve: e(this.yg),
                            reject: e(this.Cd)
                        }
                    }
                    ,
                    t.prototype.yg = function(e) {
                        if (e === this)
                            this.Cd(new TypeError("A Promise cannot resolve to itself"));
                        else if (e instanceof t)
                            this.Ng(e);
                        else {
                            e: switch (typeof e) {
                            case "object":
                                var a = null != e;
                                break e;
                            case "function":
                                a = !0;
                                break e;
                            default:
                                a = !1
                            }
                            a ? this.xg(e) : this.Je(e)
                        }
                    }
                    ,
                    t.prototype.xg = function(e) {
                        var t = void 0;
                        try {
                            t = e.then
                        } catch (e) {
                            return void this.Cd(e)
                        }
                        "function" == typeof t ? this.Og(t, e) : this.Je(e)
                    }
                    ,
                    t.prototype.Cd = function(e) {
                        this.Se(2, e)
                    }
                    ,
                    t.prototype.Je = function(e) {
                        this.Se(1, e)
                    }
                    ,
                    t.prototype.Se = function(e, t) {
                        if (0 != this.Lb)
                            throw Error("Cannot settle(" + e + ", " + t + "): Promise already settled in state" + this.Lb);
                        this.Lb = e,
                        this.Dd = t,
                        this.mg()
                    }
                    ,
                    t.prototype.mg = function() {
                        if (null != this.qb) {
                            for (var e = 0; e < this.qb.length; ++e)
                                r.xe(this.qb[e]);
                            this.qb = null
                        }
                    }
                    ;
                    var r = new a;
                    return t.prototype.Ng = function(e) {
                        var t = this.md();
                        e.rc(t.resolve, t.reject)
                    }
                    ,
                    t.prototype.Og = function(e, t) {
                        var a = this.md();
                        try {
                            e.call(t, a.resolve, a.reject)
                        } catch (e) {
                            a.reject(e)
                        }
                    }
                    ,
                    t.prototype.then = function(e, a) {
                        function n(e, t) {
                            return "function" == typeof e ? function(t) {
                                try {
                                    i(e(t))
                                } catch (e) {
                                    o(e)
                                }
                            }
                            : t
                        }
                        var i, o, r = new t((function(e, t) {
                            i = e,
                            o = t
                        }
                        ));
                        return this.rc(n(e, i), n(a, o)),
                        r
                    }
                    ,
                    t.prototype.catch = function(e) {
                        return this.then(void 0, e)
                    }
                    ,
                    t.prototype.rc = function(e, t) {
                        function a() {
                            switch (n.Lb) {
                            case 1:
                                e(n.Dd);
                                break;
                            case 2:
                                t(n.Dd);
                                break;
                            default:
                                throw Error("Unexpected state: " + n.Lb)
                            }
                        }
                        var n = this;
                        null == this.qb ? r.xe(a) : this.qb.push(a)
                    }
                    ,
                    t.resolve = i,
                    t.reject = function(e) {
                        return new t((function(t, a) {
                            a(e)
                        }
                        ))
                    }
                    ,
                    t.race = function(e) {
                        return new t((function(t, a) {
                            for (var o = n(e), r = o.next(); !r.done; r = o.next())
                                i(r.value).rc(t, a)
                        }
                        ))
                    }
                    ,
                    t.all = function(e) {
                        var a = n(e)
                          , o = a.next();
                        return o.done ? i([]) : new t((function(e, t) {
                            function n(t) {
                                return function(a) {
                                    r[t] = a,
                                    0 == --s && e(r)
                                }
                            }
                            var r = []
                              , s = 0;
                            do {
                                r.push(void 0),
                                s++,
                                i(o.value).rc(n(r.length - 1), t),
                                o = a.next()
                            } while (!o.done)
                        }
                        ))
                    }
                    ,
                    t
                }
                ));
                var f = {
                    Yg: function(e) {
                        var t = "=".repeat((4 - e.length % 4) % 4);
                        e = (e + t).replace(/\-/g, "+").replace(/_/g, "/"),
                        e = atob(e),
                        t = new Uint8Array(e.length);
                        for (var a = 0; a < e.length; ++a)
                            t[a] = e.charCodeAt(a);
                        return t
                    }
                }
                  , g = {
                    bb: function() {
                        function e(e) {
                            var t = (Math.random().toString(16) + "000000000").substr(2, 8);
                            return e ? "-" + t.substr(0, 4) + "-" + t.substr(4, 4) : t
                        }
                        return e() + e(!0) + e(!0) + e()
                    }
                };
                function m(e) {
                    var t = N;
                    this.pe = "undefined" == typeof window ? self : window,
                    this.o = e,
                    this.A = t
                }
                function v(e) {
                    if ("indexedDB"in e.pe)
                        return e.pe.indexedDB
                }
                function w(e) {
                    try {
                        if (null == v(e))
                            return !1;
                        if (v(e).open("Braze IndexedDB Support Test"),
                        "undefined" != typeof window) {
                            var t = window.fh || window.Wa || window.hh;
                            if (t && t.Ag && t.Ag.id)
                                return e.A.info("Not using IndexedDB for storage because we are running inside an extension"),
                                !1
                        }
                        return !0
                    } catch (t) {
                        return e.A.info("Not using IndexedDB for storage due to following error: " + t),
                        !1
                    }
                }
                function x(e, t, a) {
                    var n = v(e).open(e.o.G, e.o.VERSION);
                    return null == n ? ("function" == typeof a && a(),
                    !1) : (n.onupgradeneeded = function(t) {
                        for (var a in e.A.info("Upgrading indexedDB " + e.o.G + " to v" + e.o.VERSION + "..."),
                        t = t.target.result,
                        e.o.O)
                            e.o.O.hasOwnProperty(a) && !t.objectStoreNames.contains(e.o.O[a]) && t.createObjectStore(e.o.O[a])
                    }
                    ,
                    n.onsuccess = function(n) {
                        e.A.debug("Opened indexedDB " + e.o.G + " v" + e.o.VERSION);
                        var i = n.target.result;
                        i.onversionchange = function() {
                            i.close(),
                            "function" == typeof a && a(),
                            e.A.error("Needed to close the database unexpectedly because of an upgrade in another tab")
                        }
                        ,
                        t(i)
                    }
                    ,
                    n.onerror = function(t) {
                        return e.A.info("Could not open indexedDB " + e.o.G + " v" + e.o.VERSION + ": " + t.target.errorCode),
                        "function" == typeof a && a(),
                        !0
                    }
                    ,
                    !0)
                }
                function y(e, t, a, n) {
                    w(e) ? x(e, (function(i) {
                        i.objectStoreNames.contains(t) ? ((i = i.transaction([t], "readonly").objectStore(t).openCursor(null, "prev")).onerror = function() {
                            e.A.error("Could not open cursor for " + t + " on indexedDB " + e.o.G),
                            "function" == typeof n && n()
                        }
                        ,
                        i.onsuccess = function(i) {
                            null != (i = i.target.result) && null != i.value && null != i.key ? (e.A.debug("Retrieved last record " + i.key + " in " + t + " on indexedDB " + e.o.G),
                            a(i.key, i.value)) : "function" == typeof n && n()
                        }
                        ) : (e.A.error("Could not retrieve last record from " + t + " on indexedDB " + e.o.G + " - " + t + " is not a valid objectStore"),
                        "function" == typeof n && n())
                    }
                    ), n) : "function" == typeof n && n()
                }
                function k(e, t, a) {
                    w(e) && x(e, (function(n) {
                        n.objectStoreNames.contains(t) ? ((n = n.transaction([t], "readwrite").objectStore(t).delete(a)).onerror = function() {
                            e.A.error("Could not delete record " + a + " from " + t + " on indexedDB " + e.o.G)
                        }
                        ,
                        n.onsuccess = function() {
                            e.A.debug("Deleted record " + a + " from " + t + " on indexedDB " + e.o.G)
                        }
                        ) : e.A.error("Could not delete record " + a + " from " + t + " on indexedDB " + e.o.G + " - " + t + " is not a valid objectStore")
                    }
                    ))
                }
                function E(e, t, a) {
                    w(e) && x(e, (function(n) {
                        if (n.objectStoreNames.contains(t)) {
                            var i = n.transaction([t], "readwrite").objectStore(t);
                            n = i.openCursor();
                            var o = [];
                            n.onerror = function() {
                                0 < o.length ? (e.A.info("Cursor closed midway through for " + t + " on indexedDB " + e.o.G),
                                a(o)) : e.A.error("Could not open cursor for " + t + " on indexedDB " + e.o.G)
                            }
                            ,
                            n.onsuccess = function(e) {
                                var t = e.target.result;
                                null != t ? (null != t.value && null != t.key && (i.delete(t.key).onsuccess = function() {
                                    o.push(t.value)
                                }
                                ),
                                t.continue()) : 0 < o.length && a(o)
                            }
                        } else
                            e.A.error("Could not retrieve objects from " + t + " on indexedDB " + e.o.G + " - " + t + " is not a valid objectStore")
                    }
                    ))
                }
                m.prototype.setItem = function(e, t, a, n, i) {
                    if (!w(this))
                        return "function" == typeof i && i(),
                        !1;
                    var o = this;
                    return x(this, (function(r) {
                        r.objectStoreNames.contains(e) ? ((r = r.transaction([e], "readwrite").objectStore(e).put(a, t)).onerror = function() {
                            o.A.error("Could not store object " + t + " in " + e + " on indexedDB " + o.o.G),
                            "function" == typeof i && i()
                        }
                        ,
                        r.onsuccess = function() {
                            o.A.debug("Stored object " + t + " in " + e + " on indexedDB " + o.o.G),
                            "function" == typeof n && n()
                        }
                        ) : (o.A.error("Could not store object " + t + " in " + e + " on indexedDB " + o.o.G + " - " + e + " is not a valid objectStore"),
                        "function" == typeof i && i())
                    }
                    ), i)
                }
                ,
                m.prototype.getItem = function(e, t, a) {
                    if (!w(this))
                        return !1;
                    var n = this;
                    return x(this, (function(i) {
                        i.objectStoreNames.contains(e) ? ((i = i.transaction([e], "readonly").objectStore(e).get(t)).onerror = function() {
                            n.A.error("Could not retrieve object " + t + " in " + e + " on indexedDB " + n.o.G)
                        }
                        ,
                        i.onsuccess = function(i) {
                            n.A.debug("Retrieved object " + t + " in " + e + " on indexedDB " + n.o.G),
                            null != (i = i.target.result) && a(i)
                        }
                        ) : n.A.error("Could not retrieve object " + t + " in " + e + " on indexedDB " + n.o.G + " - " + e + " is not a valid objectStore")
                    }
                    ))
                }
                ,
                m.prototype.clearData = function() {
                    if (!w(this))
                        return !1;
                    var e, t = [];
                    for (e in this.o.O)
                        this.o.O.hasOwnProperty(e) && this.o.O[e] !== this.o.O.Rc && t.push(this.o.O[e]);
                    var a = this;
                    return x(this, (function(e) {
                        e = e.transaction(t, "readwrite");
                        for (var n = 0; n < t.length; n++) {
                            var i = e.objectStore(t[n]).clear();
                            i.onsuccess = function() {
                                a.A.debug("Cleared " + this.source.name + " on indexedDB " + a.o.G)
                            }
                            ,
                            i.onerror = function() {
                                a.A.error("Could not clear " + this.source.name + " on indexedDB " + a.o.G)
                            }
                        }
                        e.oncomplete = function() {
                            a.A.debug("Cleared all object stores on indexedDB " + a.o.G)
                        }
                        ,
                        e.onerror = function() {
                            a.A.error("Could not clear object stores on indexedDB " + a.o.G)
                        }
                    }
                    ))
                }
                ;
                var A = {
                    sd: function(e) {
                        void 0 === e && void 0 !== A.Ea || (A.Ea = !!e),
                        A.le || (A.le = !0)
                    },
                    Cb: function() {
                        A.le = !1,
                        A.Ea = void 0,
                        A.A = void 0
                    },
                    Fd: function(e) {
                        "function" != typeof e ? A.info("Ignoring setLogger call since logger is not a function") : (A.sd(),
                        A.A = e)
                    },
                    Jd: function() {
                        A.sd(),
                        A.Ea ? (console.log("Disabling Appboy logging"),
                        A.Ea = !1) : (console.log("Enabled Appboy logging"),
                        A.Ea = !0)
                    },
                    debug: function(e) {
                        A.Ea && null != A.A && A.A("Appboy: " + e)
                    },
                    info: function(e) {
                        A.Ea && (e = "Appboy: " + e,
                        null != A.A ? A.A(e) : console.log(e))
                    },
                    error: function(e) {
                        A.Ea && (e = "Appboy SDK Error: " + e + " (v2.7.0)",
                        null != A.A ? A.A(e) : console.error(e))
                    }
                }
                  , S = {
                    CustomEvent: "ce",
                    Bf: "p",
                    Kf: "pc",
                    dh: "ca",
                    Cf: "i",
                    Kc: "ie",
                    jf: "cci",
                    lf: "ccic",
                    gf: "ccc",
                    hf: "ccd",
                    $d: "ss",
                    Mf: "se",
                    Af: "si",
                    Sd: "sc",
                    Rd: "sbc",
                    zf: "sfe",
                    mf: "iec",
                    If: "lr",
                    cf: "uae",
                    ff: "ci",
                    ef: "cc",
                    Gf: "lcaa",
                    Hf: "lcar",
                    qf: "inc",
                    nf: "add",
                    rf: "rem",
                    sf: "set"
                }
                  , _ = {
                    yf: "feed_displayed",
                    kf: "content_cards_displayed"
                }
                  , C = {
                    Ra: {
                        G: "AppboyServiceWorkerAsyncStorage",
                        VERSION: 5,
                        O: {
                            tf: "data",
                            Wd: "pushClicks",
                            Tc: "pushSubscribed",
                            ah: "fallbackDevice",
                            df: "cardUpdates",
                            Rc: "optOut"
                        },
                        cc: 1
                    }
                }
                  , N = A;
                function D(e, t, a, n) {
                    return -1 !== (e = z(e)).indexOf(t) || (N.error(a + " Valid values from " + n + ' are "' + e.join('"/"') + '".'),
                    !1)
                }
                function T(e) {
                    return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
                }
                function O(e) {
                    return "[object Date]" === Object.prototype.toString.call(e)
                }
                function I(e) {
                    null == e && (e = []);
                    for (var t = [], a = arguments.length, n = 0, i = e.length; n < i; n++) {
                        var o = e[n];
                        if (-1 === t.indexOf(o)) {
                            var r;
                            for (r = 1; r < a && -1 !== arguments[r].indexOf(o); r++)
                                ;
                            r === a && t.push(o)
                        }
                    }
                    return t
                }
                function M(e) {
                    var t, a = [];
                    for (t in e)
                        e.hasOwnProperty(t) && a.push(t);
                    return a
                }
                function z(e) {
                    var t, a = [];
                    for (t in e)
                        e.hasOwnProperty(t) && void 0 !== e[t] && a.push(e[t]);
                    return a
                }
                function P(e, t) {
                    if (e === t)
                        return 0 !== e || 1 / e == 1 / t;
                    if (null == e || null == t)
                        return e === t;
                    var a = e.toString();
                    if (a !== t.toString())
                        return !1;
                    switch (a) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + e == "" + t;
                    case "[object Number]":
                        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +t
                    }
                    if (!(a = "[object Array]" === a)) {
                        if ("object" != typeof e || "object" != typeof t)
                            return !1;
                        var n = e.constructor
                          , i = t.constructor;
                        if (n !== i && !("function" == typeof n && n instanceof n && "function" == typeof i && i instanceof i) && "constructor"in e && "constructor"in t)
                            return !1
                    }
                    i = [];
                    for (var o = (n = []).length; o--; )
                        if (n[o] === e)
                            return i[o] === t;
                    if (n.push(e),
                    i.push(t),
                    a) {
                        if ((o = e.length) !== t.length)
                            return !1;
                        for (; o--; )
                            if (!P(e[o], t[o]))
                                return !1
                    } else {
                        if (o = (a = M(e)).length,
                        M(t).length !== o)
                            return !1;
                        for (; o--; ) {
                            var r = a[o];
                            if (!t.hasOwnProperty(r) || !P(e[r], t[r]))
                                return !1
                        }
                    }
                    return n.pop(),
                    i.pop(),
                    !0
                }
                function R(e, t) {
                    return e /= 1e3,
                    t && (e = Math.floor(e)),
                    e
                }
                function U(e) {
                    var t = parseInt(e);
                    return null == e || isNaN(t) ? null : new Date(1e3 * t)
                }
                function B(e) {
                    return null != e && O(e) ? e.toISOString().replace(/\.[0-9]{3}Z$/, "") : e
                }
                function L(e) {
                    return null == e || "" === e ? null : new Date(e)
                }
                function F(e, t, a, n, i) {
                    this.Nb = e,
                    this.type = t,
                    this.time = null == a || "" === a ? (new Date).valueOf() : a,
                    this.sessionId = n,
                    this.data = i
                }
                function j(e) {
                    return null != e && "[object Object]" === Object.prototype.toString.call(e) && null != e.t && "" !== e.t
                }
                function G(e) {
                    return new F(e.u,e.t,e.ts,e.s,e.d)
                }
                function H(e, t, a) {
                    null == e && (e = g.bb()),
                    a = parseInt(a),
                    (isNaN(a) || 0 === a) && (a = (new Date).valueOf()),
                    this.ga = e,
                    this.Bb = a,
                    this.wc = (new Date).valueOf(),
                    this.nd = t
                }
                function W(e) {
                    if (null == e || null == e.g)
                        return null;
                    var t = new H(e.g,e.e,e.c);
                    return t.wc = e.l,
                    t
                }
                function K(e, t, a, n) {
                    return (n = "string" == typeof e || null === e && n) || N.error("Cannot " + t + " because " + a + ' "' + e + '" is invalid.'),
                    n
                }
                function X(e, t, a) {
                    var n = null != e && "string" == typeof e && ("" === e || e.match(q));
                    return n || N.error("Cannot " + t + " because " + a + ' "' + e + '" is invalid.'),
                    n
                }
                F.prototype.qc = function() {
                    var e = {
                        name: this.type,
                        time: R(this.time),
                        data: this.data || {},
                        session_id: this.sessionId
                    };
                    return null != this.Nb && (e.user_id = this.Nb),
                    e
                }
                ,
                F.prototype.C = function() {
                    return {
                        u: this.Nb,
                        t: this.type,
                        ts: this.time,
                        s: this.sessionId,
                        d: this.data
                    }
                }
                ,
                H.prototype.C = function() {
                    return {
                        g: this.ga,
                        e: this.nd,
                        c: this.Bb,
                        l: this.wc
                    }
                }
                ;
                var q = /^[^\x00-\x1F\x22]+$/
                  , Y = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                  , V = {};
                function J(e, t) {
                    this.f = e,
                    this.J = t
                }
                (e = J.prototype).B = function(e) {
                    null == e && N.error("getUserId must be supplied with a callback. e.g., appboy.getUser().getUserId(function(userId) {console.log('the user id is ' + userId)})"),
                    "function" == typeof e && e(this.f.B())
                }
                ,
                e.ag = function(e, t) {
                    if (!K(e, "add alias", "the alias", !1) || 0 >= e.length)
                        return N.error("addAlias requires a non-empty alias"),
                        !1;
                    if (!K(t, "add alias", "the label", !1) || 0 >= t.length)
                        return N.error("addAlias requires a non-empty label"),
                        !1;
                    var a = this.J
                      , n = new ya
                      , i = ni(a.F)
                      , o = S.cf;
                    return n.j.push(new F(a.f.B(),o,(new Date).valueOf(),i,{
                        a: e,
                        l: t
                    })),
                    n.h = ue(a.b, n.j),
                    n.h
                }
                ,
                e.Hg = function(e) {
                    return !!K(e, "set first name", "the firstName", !0) && this.f.H("first_name", e)
                }
                ,
                e.Lg = function(e) {
                    return !!K(e, "set last name", "the lastName", !0) && this.f.H("last_name", e)
                }
                ,
                e.Fg = function(e) {
                    return null === e || "string" == typeof e && null != e.toLowerCase().match(Y) ? this.f.H("email", e) : (N.error('Cannot set email address - "' + e + '" did not pass RFC-5322 validation.'),
                    !1)
                }
                ,
                e.Ig = function(e) {
                    return "string" == typeof e && (e = e.toLowerCase()),
                    !(null !== e && !D($, e, 'Gender "' + e + '" is not a valid gender.', "User.Genders")) && this.f.H("gender", e)
                }
                ,
                e.Eg = function(e, t, a) {
                    return null === e && null === t && null === a ? this.f.H("dob", null) : (e = parseInt(e),
                    t = parseInt(t),
                    a = parseInt(a),
                    isNaN(e) || isNaN(t) || isNaN(a) || 12 < t || 1 > t || 31 < a || 1 > a ? (N.error("Cannot set date of birth - parameters should comprise a valid date e.g. setDateOfBirth(1776, 7, 4);"),
                    !1) : this.f.H("dob", e + "-" + t + "-" + a))
                }
                ,
                e.Cg = function(e) {
                    return !!K(e, "set country", "the country", !0) && this.f.H("country", e)
                }
                ,
                e.Jg = function(e) {
                    return !!K(e, "set home city", "the homeCity", !0) && this.f.H("home_city", e)
                }
                ,
                e.Kg = function(e) {
                    return !!K(e, "set language", "the language", !0) && this.f.H("language", e)
                }
                ,
                e.Gg = function(e) {
                    return !!D(Q, e, 'Email notification setting "' + e + '" is not a valid subscription type.', "User.NotificationSubscriptionTypes") && this.f.H("email_subscribe", e)
                }
                ,
                e.Gd = function(e) {
                    return !!D(Q, e, 'Push notification setting "' + e + '" is not a valid subscription type.', "User.NotificationSubscriptionTypes") && this.f.H("push_subscribe", e)
                }
                ,
                e.Mg = function(e) {
                    return !!K(e, "set phone number", "the phoneNumber", !0) && (null === e || e.match(Z) ? this.f.H("phone", e) : (N.error('Cannot set phone number - "' + e + '" did not pass validation.'),
                    !1))
                }
                ,
                e.Bg = function(e) {
                    return this.f.H("image_url", e)
                }
                ,
                e.Ec = function(e, t, a, n, i) {
                    return null == e || null == t ? (N.error("Cannot set last-known location - latitude and longitude are required."),
                    !1) : (e = parseFloat(e),
                    t = parseFloat(t),
                    null != a && (a = parseFloat(a)),
                    null != n && (n = parseFloat(n)),
                    null != i && (i = parseFloat(i)),
                    isNaN(e) || isNaN(t) || null != a && isNaN(a) || null != n && isNaN(n) || null != i && isNaN(i) ? (N.error("Cannot set last-known location - all supplied parameters must be numeric."),
                    !1) : 90 < e || -90 > e || 180 < t || -180 > t ? (N.error("Cannot set last-known location - latitude and longitude are bounded by ±90 and ±180 respectively."),
                    !1) : null != a && 0 > a || null != i && 0 > i ? (N.error("Cannot set last-known location - accuracy and altitudeAccuracy may not be negative."),
                    !1) : this.J.Ec(this.f.B(), e, t, n, a, i).h)
                }
                ,
                e.Ed = function(e, t) {
                    if (!X(e, "set custom user attribute", "the given key"))
                        return !1;
                    var a = typeof t
                      , n = O(t)
                      , i = T(t);
                    if ("number" !== a && "boolean" !== a && !n && !i && null !== t && !X(t, 'set custom user attribute "' + e + '"', "the given value"))
                        return !1;
                    if (n && (t = B(t)),
                    i) {
                        for (a = 0; a < t.length; a++)
                            if (!X(t[a], 'set custom user attribute "' + e + '"', "the element in the given array"))
                                return !1;
                        return Nn(this.J, S.sf, e, t).h
                    }
                    return this.f.Ed(e, t)
                }
                ,
                e.bg = function(e, t) {
                    return !(!X(e, "add to custom user attribute array", "the given key") || null != t && !X(t, "add to custom user attribute array", "the given value")) && Nn(this.J, S.nf, e, t).h
                }
                ,
                e.wg = function(e, t) {
                    return !(!X(e, "remove from custom user attribute array", "the given key") || null != t && !X(t, "remove from custom user attribute array", "the given value")) && Nn(this.J, S.rf, e, t).h
                }
                ,
                e.rg = function(e, t) {
                    if (!X(e, "increment custom user attribute", "the given key"))
                        return !1;
                    null == t && (t = 1);
                    var a = parseInt(t);
                    return isNaN(a) || a !== parseFloat(t) ? (N.error('Cannot increment custom user attribute because the given incrementValue "' + t + '" is not an integer.'),
                    !1) : Nn(this.J, S.qf, e, a).h
                }
                ,
                e.Bd = function(e, t, a, n, i) {
                    this.f.Bd(e, t, a, n, i),
                    On(this.J)
                }
                ,
                e.Jb = function(e) {
                    this.f.Jb(e)
                }
                ,
                e.Dg = function(e, t, a) {
                    if (!X(e, "set custom location attribute", "the given key"))
                        return !1;
                    if ((null !== t || null !== a) && (t = parseFloat(t),
                    a = parseFloat(a),
                    isNaN(t) || 90 < t || -90 > t || isNaN(a) || 180 < a || -180 > a))
                        return N.error("Received invalid values for latitude and/or longitude. Latitude and longitude are bounded by ±90 and ±180 respectively, or must both be null for removal."),
                        !1;
                    var n = this.J
                      , i = a;
                    if (a = new ya,
                    Qn(n.K, e))
                        N.info('Custom Attribute "' + e + '" is blacklisted, ignoring.'),
                        a.h = !1;
                    else {
                        var o = ni(n.F);
                        if (null === t && null === i) {
                            var r = S.Hf;
                            e = {
                                key: e
                            }
                        } else
                            r = S.Gf,
                            e = {
                                key: e,
                                latitude: t,
                                longitude: i
                            };
                        a.j.push(new F(n.f.B(),r,(new Date).valueOf(),o,e)),
                        a.h = ue(n.b, a.j)
                    }
                    return a.h
                }
                ;
                var Z = /^[0-9 .\\(\\)\\+\\-]+$/
                  , $ = {
                    MALE: "m",
                    FEMALE: "f",
                    OTHER: "o",
                    UNKNOWN: "u",
                    NOT_APPLICABLE: "n",
                    PREFER_NOT_TO_SAY: "p"
                }
                  , Q = {
                    OPTED_IN: "opted_in",
                    SUBSCRIBED: "subscribed",
                    UNSUBSCRIBED: "unsubscribed"
                };
                function ee() {}
                function te(e, t) {
                    if (e && t)
                        if (e = e.toLowerCase(),
                        T(t.S)) {
                            for (var a = 0; a < t.S.length; a++)
                                if (-1 !== e.indexOf(t.S[a].toLowerCase()))
                                    return t.U
                        } else if (-1 !== e.indexOf(t.S.toLowerCase()))
                            return t.U
                }
                V.User = J,
                V.User.Genders = $,
                V.User.NotificationSubscriptionTypes = Q,
                V.User.prototype.getUserId = J.prototype.B,
                V.User.prototype.setFirstName = J.prototype.Hg,
                V.User.prototype.setLastName = J.prototype.Lg,
                V.User.prototype.setEmail = J.prototype.Fg,
                V.User.prototype.setGender = J.prototype.Ig,
                V.User.prototype.setDateOfBirth = J.prototype.Eg,
                V.User.prototype.setCountry = J.prototype.Cg,
                V.User.prototype.setHomeCity = J.prototype.Jg,
                V.User.prototype.setLanguage = J.prototype.Kg,
                V.User.prototype.setEmailNotificationSubscriptionType = J.prototype.Gg,
                V.User.prototype.setPushNotificationSubscriptionType = J.prototype.Gd,
                V.User.prototype.setPhoneNumber = J.prototype.Mg,
                V.User.prototype.setAvatarImageUrl = J.prototype.Bg,
                V.User.prototype.setLastKnownLocation = J.prototype.Ec,
                V.User.prototype.setUserAttribute = J.prototype.H,
                V.User.prototype.setCustomUserAttribute = J.prototype.Ed,
                V.User.prototype.addToCustomAttributeArray = J.prototype.bg,
                V.User.prototype.removeFromCustomAttributeArray = J.prototype.wg,
                V.User.prototype.incrementCustomUserAttribute = J.prototype.rg,
                V.User.prototype.addAlias = J.prototype.ag,
                V.User.prototype.setCustomLocationAttribute = J.prototype.Dg,
                ee.prototype.pd = function() {}
                ,
                ee.prototype.rd = function() {}
                ,
                ee.prototype.ob = function() {}
                ;
                var ae = {
                    Md: "Chrome",
                    Ic: "Edge",
                    Vb: "Internet Explorer",
                    Ud: "Opera",
                    Yd: "Safari",
                    bh: "Firefox"
                };
                function ne() {
                    if (this.userAgentData = navigator.userAgentData) {
                        var e = this.userAgentData.brands;
                        if (e && e.length)
                            for (var t = (e = n(e)).next(); !t.done; t = e.next()) {
                                t = t.value;
                                var a = void 0
                                  , i = [];
                                for (a in ae)
                                    ae[a] !== ae.Vb && i.push(ae[a]);
                                if ((a = t.brand.match(new RegExp("(" + i.join("|") + ")","i"))) && 0 < a.length) {
                                    var o = a[0]
                                      , r = t.version;
                                    break
                                }
                            }
                        this.Wa = o || "Unknown Browser",
                        this.version = r || "Unknown Version"
                    }
                }
                function ie() {
                    this.Ae = oe()
                }
                function oe() {
                    var e = navigator.userAgent || ""
                      , t = e.match(/(samsungbrowser|tizen|roku|konqueror|icab|crios|opera|ucbrowser|chrome|safari|firefox|camino|msie|trident(?=\/))\/?\s*(\.?\d+(\.\d+)*)/i) || [];
                    if (/trident/i.test(t[1])) {
                        var a = /\brv[ :]+(\.?\d+(\.\d+)*)/g.exec(e) || [];
                        return [ae.Vb, a[1] || ""]
                    }
                    return -1 !== e.indexOf("(Web0S; Linux/SmartTV)") ? ["LG Smart TV", null] : -1 !== e.indexOf("CrKey") ? ["Chromecast", null] : -1 !== e.indexOf("BRAVIA") || -1 !== e.indexOf("SonyCEBrowser") || -1 !== e.indexOf("SonyDTV") ? ["Sony Smart TV", null] : -1 !== e.indexOf("PhilipsTV") ? ["Philips Smart TV", null] : e.match(/\b(Roku)\b/) ? ["Roku", null] : e.match(/\bAFTM\b/) ? ["Amazon Fire Stick", null] : t[1] === ae.Md && null != (a = e.match(/\b(OPR|Edge|EdgA|Edg|UCBrowser)\/(\.?\d+(\.\d+)*)/)) ? ((a = a.slice(1))[0] = a[0].replace("OPR", ae.Ud),
                    a[0] = a[0].replace("EdgA", ae.Ic),
                    "Edg" === a[0] && (a[0] = ae.Ic),
                    [a[0], a[1]]) : t[1] === ae.Yd && null != (a = e.match(/\b(EdgiOS)\/(\.?\d+(\.\d+)*)/)) ? ((a = a.slice(1))[0] = a[0].replace("EdgiOS", ae.Ic),
                    [a[0], a[1]]) : (t = t[2] ? [t[1], t[2]] : [null, null],
                    null != (a = e.match(/version\/(\.?\d+(\.\d+)*)/i)) && t.splice(1, 1, a[1]),
                    null != (a = e.match(/\b(UCBrowser)\/(\.?\d+(\.\d+)*)/)) && t.splice(1, 1, a[2]),
                    t[0] === ae.Ud && null != (a = e.match(/mini\/(\.?\d+(\.\d+)*)/i)) ? ["Opera Mini", a[1] || ""] : (t[0] && ("msie" === (e = t[0].toLowerCase()) && (t[0] = ae.Vb),
                    "crios" === e && (t[0] = ae.Md),
                    "tizen" === e && (t[0] = "Samsung Smart TV",
                    t[1] = null),
                    "samsungbrowser" === e && (t[0] = "Samsung Browser")),
                    t))
                }
                function re() {
                    var e = this;
                    this.yd = new (navigator.userAgentData ? ne : ie),
                    this.userAgent = navigator.userAgent,
                    this.Wa = this.yd.pd(),
                    this.version = this.yd.rd(),
                    this.ob().then((function(t) {
                        return e.ya = t
                    }
                    )),
                    this.language = (navigator.lh || navigator.language || navigator.browserLanguage || navigator.kh || "").toLowerCase(),
                    this.sg = se(this.userAgent)
                }
                function se(e) {
                    e = e.toLowerCase();
                    for (var t = "googlebot bingbot slurp duckduckbot baiduspider yandex facebookexternalhit sogou ia_archiver https://github.com/prerender/prerender aolbuild bingpreview msnbot adsbot mediapartners-google teoma".split(" "), a = 0; a < t.length; a++)
                        if (-1 !== e.indexOf(t[a]))
                            return !0;
                    return !1
                }
                h(ne, ee),
                ne.prototype.pd = function() {
                    return this.Wa
                }
                ,
                ne.prototype.rd = function() {
                    return this.version
                }
                ,
                ne.prototype.ob = function(e) {
                    var t = this;
                    return this.ya ? Promise.resolve(this.ya) : (this.userAgentData.getHighEntropyValues ? this.userAgentData.getHighEntropyValues(["platform"]) : Promise.reject()).then((function(a) {
                        a = a.platform;
                        for (var n = 0; n < e.length; n++) {
                            var i = te(a, e[n]);
                            if (i)
                                return t.ya = i,
                                t.ya
                        }
                        return a
                    }
                    )).catch((function() {
                        return navigator.platform
                    }
                    ))
                }
                ,
                h(ie, ee),
                ie.prototype.pd = function() {
                    return this.Ae[0] || "Unknown Browser"
                }
                ,
                ie.prototype.rd = function() {
                    return this.Ae[1] || "Unknown Version"
                }
                ,
                ie.prototype.ob = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var a = te(e[t].W, e[t]);
                        if (a)
                            return Promise.resolve(a)
                    }
                    return Promise.resolve(navigator.platform)
                }
                ,
                re.prototype.ob = function() {
                    var e = this;
                    return this.ya ? Promise.resolve(this.ya) : this.yd.ob(le).then((function(t) {
                        return e.ya = t
                    }
                    ))
                }
                ;
                var le = [{
                    W: navigator.platform,
                    S: "Win",
                    U: "Windows"
                }, {
                    W: navigator.platform,
                    S: "Mac",
                    U: "Mac"
                }, {
                    W: navigator.platform,
                    S: "BlackBerry",
                    U: "BlackBerry"
                }, {
                    W: navigator.platform,
                    S: "FreeBSD",
                    U: "FreeBSD"
                }, {
                    W: navigator.platform,
                    S: "OpenBSD",
                    U: "OpenBSD"
                }, {
                    W: navigator.platform,
                    S: "Nintendo",
                    U: "Nintendo"
                }, {
                    W: navigator.platform,
                    S: "SunOS",
                    U: "SunOS"
                }, {
                    W: navigator.platform,
                    S: "PlayStation",
                    U: "PlayStation"
                }, {
                    W: navigator.platform,
                    S: "X11",
                    U: "X11"
                }, {
                    W: navigator.userAgent,
                    S: ["iPhone", "iPad", "iPod"],
                    U: "iOS"
                }, {
                    W: navigator.platform,
                    S: "Pike v",
                    U: "iOS"
                }, {
                    W: navigator.userAgent,
                    S: ["Web0S"],
                    U: "WebOS"
                }, {
                    W: navigator.platform,
                    S: ["Linux armv7l", "Android"],
                    U: "Android"
                }, {
                    W: navigator.userAgent,
                    S: ["Android"],
                    U: "Android"
                }, {
                    W: navigator.platform,
                    S: "Linux",
                    U: "Linux"
                }]
                  , ce = new re;
                function be(e, t) {
                    this.la = e,
                    this.T = t
                }
                function pe(e, t, a) {
                    var n = a;
                    null != a && a instanceof H && (n = a.C()),
                    e.la.store(t, n)
                }
                function ue(e, t) {
                    if (null == t || 0 === t.length)
                        return !1;
                    T(t) || (t = [t]);
                    var a = e.T.R(ye.Ob);
                    null != a && T(a) || (a = []);
                    for (var n = 0; n < t.length; n++)
                        a.push(t[n].C());
                    return e.T.store(ye.Ob, a)
                }
                function de(e) {
                    var t = e.T.R(ye.Ob);
                    e.T.remove(ye.Ob),
                    null == t && (t = []),
                    e = [];
                    var a = !1
                      , n = null;
                    if (T(t))
                        for (var i = 0; i < t.length; i++)
                            j(t[i]) ? e.push(G(t[i])) : n = i;
                    else
                        a = !0;
                    return (a || null != n) && (i = "Stored events could not be deserialized as Events",
                    a && (i += ", was " + Object.prototype.toString.call(t) + " not an array"),
                    null != n && (i += ", value at index " + n + " does not look like an event"),
                    i += ", serialized values were of type " + typeof t + ": " + JSON.stringify(t),
                    e.push(new F(null,S.Kc,(new Date).valueOf(),null,{
                        e: i
                    }))),
                    e
                }
                function he(e, t, a) {
                    D(ye, t, "StorageManager cannot store object.", "StorageManager.KEYS.OBJECTS") && e.T.store(t, a)
                }
                function fe(e, t) {
                    return !!D(ye, t, "StorageManager cannot retrieve object.", "StorageManager.KEYS.OBJECTS") && e.T.R(t)
                }
                function ge(e, t) {
                    D(ye, t, "StorageManager cannot remove object.", "StorageManager.KEYS.OBJECTS") && e.T.remove(t)
                }
                function me(e, t) {
                    var a = e.T.R(ye.Oa);
                    null == a && (a = {});
                    var n, i = t.user_id || ye.Kd;
                    for (n in t)
                        "user_id" === n || null != a[i] && null != a[i][n] || ve(e, t.user_id, n, t[n])
                }
                function ve(e, t, a, n) {
                    var i = e.T.R(ye.Oa);
                    null == i && (i = {});
                    var o = t || ye.Kd
                      , r = i[o];
                    if (null == r && (r = {},
                    null != t && (r.user_id = t)),
                    "custom" === a)
                        for (var s in null == r[a] && (r[a] = {}),
                        n)
                            r[a][s] = n[s];
                    else
                        r[a] = n;
                    return i[o] = r,
                    e.T.store(ye.Oa, i)
                }
                function we(e) {
                    var t = e.T.R(ye.Oa);
                    for (var a in e.T.remove(ye.Oa),
                    e = [],
                    t)
                        null != t[a] && e.push(t[a]);
                    return e
                }
                be.prototype.clearData = function() {
                    for (var e = M(xe), t = M(ye), a = 0; a < e.length; a++)
                        this.la.remove(xe[e[a]]);
                    for (e = 0; e < t.length; e++)
                        this.T.remove(ye[t[e]])
                }
                ;
                var xe = {
                    Xc: "ab.storage.userId",
                    Od: "ab.storage.deviceId",
                    Sa: "ab.storage.sessionId"
                }
                  , ye = {
                    Uc: "ab.test",
                    Ob: "ab.storage.events",
                    Oa: "ab.storage.attributes",
                    Hc: "ab.storage.device",
                    bc: "ab.storage.pushToken",
                    Pc: "ab.storage.newsFeed",
                    Nc: "ab.storage.lastNewsFeedRefresh",
                    rb: "ab.storage.cardImpressions",
                    Zd: "ab.storage.serverConfig",
                    Vc: "ab.storage.triggers",
                    Wc: "ab.storage.triggers.ts",
                    Ef: "ab.storage.lastTriggeredTime",
                    Df: "ab.storage.lastTriggeredTimesById",
                    Ff: "ab.storage.lastTriggerEventDataById",
                    Yb: "ab.storage.messagingSessionStart",
                    sb: "ab.storage.cc",
                    Tb: "ab.storage.ccLastFullSync",
                    Sb: "ab.storage.ccLastCardUpdated",
                    hb: "ab.storage.ccClicks",
                    ib: "ab.storage.ccImpressions",
                    ta: "ab.storage.ccDismissals",
                    Xb: "ab.storage.lastDisplayedTriggerTimesById",
                    Mc: "ab.storage.lastDisplayedTriggerTime",
                    ub: "ab.storage.triggerFireInstancesById"
                };
                function ke(e) {
                    this.aa = e,
                    this.Ie = ce.Wa === ae.Yd ? 3 : 10
                }
                function Ee(e, t) {
                    this.aa = e,
                    e = 0;
                    for (var a = document.domain, n = a.split("."), i = "ab._gd" + (new Date).valueOf(); e < n.length - 1 && -1 === document.cookie.indexOf(i + "=" + i); )
                        e++,
                        a = "." + n.slice(-1 - e).join("."),
                        document.cookie = i + "=" + i + ";domain=" + a + ";";
                    document.cookie = i + "=;expires=" + new Date(0).toGMTString() + ";domain=" + a + ";",
                    this.qe = a,
                    this.ie = 525949,
                    this.ue = !!t
                }
                function Ae(e) {
                    var t = new Date;
                    return t.setTime(t.getTime() + 6e4 * e.ie),
                    t.getFullYear()
                }
                function Se(e, t) {
                    t = t + "=;expires=" + new Date(0).toGMTString(),
                    document.cookie = t,
                    document.cookie = t + ";path=/",
                    document.cookie = t + ";path=" + document.location.pathname,
                    e = t + ";domain=" + e.qe,
                    document.cookie = e,
                    document.cookie = e + ";path=/",
                    document.cookie = e + ";path=" + document.location.pathname
                }
                function _e() {
                    this.dd = {},
                    this.oe = 5242880,
                    this.Ie = 3
                }
                function Ce(e, t, a) {
                    this.ka = [],
                    t && this.ka.push(new Ee(e)),
                    a && this.ka.push(new ke(e)),
                    this.ka.push(new _e)
                }
                function Ne() {
                    this.yb = {}
                }
                function De(e, t) {
                    if ("function" != typeof t)
                        return null;
                    var a = g.bb();
                    return e.yb[a] = t,
                    a
                }
                function Te(e, t) {
                    var a, n = [];
                    for (a in e.yb)
                        n.push(e.yb[a](t))
                }
                function Oe() {
                    var e = this;
                    if (null == this.ed) {
                        this.ed = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function() {
                                    e.ed = !0
                                }
                            });
                            window.addEventListener("testPassive", null, t),
                            window.removeEventListener("testPassive", null, t)
                        } catch (e) {}
                    }
                    return this.ed
                }
                function Ie(e, t, a) {
                    e.addEventListener(t, a, !!Oe() && {
                        passive: !0
                    })
                }
                function Me(e, t, a, n) {
                    return null != e && (t = t || !1,
                    a = a || !1,
                    null != (e = e.getBoundingClientRect()) && (0 <= e.top && e.top <= (window.innerHeight || document.documentElement.clientHeight) || !t) && (0 <= e.left || !n) && (0 <= e.bottom && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) || !a) && (e.right <= (window.innerWidth || document.documentElement.clientWidth) || !n))
                }
                function ze(e) {
                    if (e.onclick) {
                        var t = document.createEvent("MouseEvents");
                        t.initEvent("click", !0, !0),
                        e.onclick.apply(e, [t])
                    }
                }
                function Pe(e, t, a) {
                    var n = null
                      , i = null;
                    Ie(e, "touchstart", (function(e) {
                        n = e.touches[0].clientX,
                        i = e.touches[0].clientY
                    }
                    )),
                    Ie(e, "touchmove", (function(o) {
                        if (null != n && null != i) {
                            var r = n - o.touches[0].clientX
                              , s = i - o.touches[0].clientY;
                            Math.abs(r) > Math.abs(s) && 25 <= Math.abs(r) ? ((0 < r && t === Le || 0 > r && t === Fe) && a(o),
                            i = n = null) : 25 <= Math.abs(s) && ((0 < s && t === Ue && e.scrollTop === e.scrollHeight - e.offsetHeight || 0 > s && t === Be && 0 === e.scrollTop) && a(o),
                            i = n = null)
                        }
                    }
                    ))
                }
                function Re(e, t, a) {
                    var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    return n.setAttribute("viewBox", e),
                    n.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                    (e = document.createElementNS("http://www.w3.org/2000/svg", "path")).setAttribute("d", t),
                    null != a && e.setAttribute("fill", a),
                    n.appendChild(e),
                    n
                }
                ke.prototype.Va = function(e) {
                    return e + "." + this.aa
                }
                ,
                ke.prototype.store = function(e, t) {
                    t = {
                        v: t
                    };
                    try {
                        return localStorage.setItem(this.Va(e), JSON.stringify(t)),
                        !0
                    } catch (e) {
                        return N.info("Storage failure: " + e.message),
                        !1
                    }
                }
                ,
                ke.prototype.R = function(e) {
                    try {
                        var t = JSON.parse(localStorage.getItem(this.Va(e)));
                        return null == t ? null : t.v
                    } catch (e) {
                        return N.info("Storage retrieval failure: " + e.message),
                        null
                    }
                }
                ,
                ke.prototype.remove = function(e) {
                    try {
                        localStorage.removeItem(this.Va(e))
                    } catch (e) {
                        return N.info("Storage removal failure: " + e.message),
                        !1
                    }
                }
                ,
                Ee.prototype.Va = function(e) {
                    return null != this.aa ? e + "." + this.aa : e
                }
                ,
                Ee.prototype.store = function(e, t) {
                    for (var a = z(xe), n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                        for (var o = n[i]; " " === o.charAt(0); )
                            o = o.substring(1);
                        for (var r = !1, s = 0; s < a.length; s++)
                            if (0 === o.indexOf(a[s])) {
                                r = !0;
                                break
                            }
                        r && -1 === (o = o.split("=")[0]).indexOf("." + this.aa) && Se(this, o)
                    }
                    return (a = new Date).setTime(a.getTime() + 6e4 * this.ie),
                    a = "expires=" + a.toUTCString(),
                    n = "domain=" + this.qe,
                    t = this.ue ? t : encodeURIComponent(JSON.stringify(t)),
                    4093 <= (e = this.Va(e) + "=" + t + ";" + a + ";" + n + ";path=/").length ? (N.info("Storage failure: string is " + e.length + " chars which is too large to store as a cookie."),
                    !1) : (document.cookie = e,
                    !0)
                }
                ,
                Ee.prototype.R = function(e) {
                    for (var t = [], a = this.Va(e) + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                        for (var o = n[i]; " " === o.charAt(0); )
                            o = o.substring(1);
                        if (0 === o.indexOf(a))
                            try {
                                var r = void 0;
                                r = this.ue ? o.substring(a.length, o.length) : JSON.parse(decodeURIComponent(o.substring(a.length, o.length))),
                                t.push(r)
                            } catch (t) {
                                return N.info("Storage retrieval failure: " + t.message),
                                this.remove(e),
                                null
                            }
                    }
                    return 0 < t.length ? t[t.length - 1] : null
                }
                ,
                Ee.prototype.remove = function(e) {
                    Se(this, this.Va(e))
                }
                ,
                _e.prototype.store = function(e, t) {
                    var a = {
                        value: t
                    }
                      , n = [];
                    t = [t];
                    for (var i = 0; t.length; ) {
                        var o = t.pop();
                        if ("boolean" == typeof o)
                            i += 4;
                        else if ("string" == typeof o)
                            i += 2 * o.length;
                        else if ("number" == typeof o)
                            i += 8;
                        else if ("object" == typeof o && -1 === n.indexOf(o))
                            for (var r in n.push(o),
                            o)
                                t.push(o[r])
                    }
                    return (n = i) > this.oe ? (N.info("Storage failure: object is ≈" + n + " bytes which is greater than the max of " + this.oe),
                    !1) : (this.dd[e] = a,
                    !0)
                }
                ,
                _e.prototype.R = function(e) {
                    return null == (e = this.dd[e]) ? null : e.value
                }
                ,
                _e.prototype.remove = function(e) {
                    this.dd[e] = null
                }
                ,
                Ce.prototype.store = function(e, t) {
                    for (var a = !0, n = 0; n < this.ka.length; n++)
                        a = this.ka[n].store(e, t) && a;
                    return a
                }
                ,
                Ce.prototype.R = function(e) {
                    for (var t = 0; t < this.ka.length; t++) {
                        var a = this.ka[t].R(e);
                        if (null != a)
                            return a
                    }
                    return null
                }
                ,
                Ce.prototype.remove = function(e) {
                    for (var t = 0; t < this.ka.length; t++)
                        this.ka[t].remove(e)
                }
                ,
                Ne.prototype.P = function(e) {
                    delete this.yb[e]
                }
                ,
                Ne.prototype.N = function() {
                    this.yb = {}
                }
                ;
                var Ue = "up"
                  , Be = "down"
                  , Le = "left"
                  , Fe = "right";
                function je(e, t, a) {
                    var n = document.createElement("button");
                    return n.setAttribute("aria-label", e),
                    n.setAttribute("tabindex", "0"),
                    n.setAttribute("role", "button"),
                    Ie(n, "touchstart", (function() {}
                    )),
                    n.className = "ab-close-button",
                    e = Re("0 0 15 15", "M15 1.5L13.5 0l-6 6-6-6L0 1.5l6 6-6 6L1.5 15l6-6 6 6 1.5-1.5-6-6 6-6z", t),
                    n.appendChild(e),
                    n.addEventListener("keydown", (function(e) {
                        32 !== e.keyCode && 13 !== e.keyCode || (a(),
                        e.stopPropagation())
                    }
                    )),
                    n.onclick = function(e) {
                        a(),
                        e.stopPropagation()
                    }
                    ,
                    n
                }
                var Ge = {
                    tg: function() {
                        return 600 >= screen.width
                    },
                    og: function() {
                        if ("orientation"in window)
                            return 90 === Math.abs(window.orientation) || 270 === window.orientation ? Ge.Qa.Lc : Ge.Qa.ac;
                        if ("screen"in window) {
                            var e = window.screen.orientation || screen.gh || screen.ih;
                            if (null != e && "object" == typeof e && (e = e.type),
                            "landscape-primary" === e || "landscape-secondary" === e)
                                return Ge.Qa.Lc
                        }
                        return Ge.Qa.ac
                    },
                    ug: function(e, t, a) {
                        a || null != t && t.metaKey ? window.open(e) : window.location = e
                    },
                    Qa: {
                        ac: 0,
                        Lc: 1
                    }
                };
                function He(e, t, a, n, i, o, r, s, l, c, b, p, u, d, h, f) {
                    this.id = e,
                    this.viewed = t || !1,
                    this.title = a || "",
                    this.imageUrl = n,
                    this.description = i || "",
                    this.created = o || null,
                    this.updated = r || null,
                    this.categories = s || [],
                    this.expiresAt = l || null,
                    this.url = c,
                    this.linkText = b,
                    p = parseFloat(p),
                    this.aspectRatio = isNaN(p) ? null : p,
                    this.extras = u,
                    this.pinned = d || !1,
                    this.dismissible = h || !1,
                    this.dismissed = !1,
                    this.clicked = f || !1,
                    this.test = !1,
                    this.$c = this.Y = null
                }
                function We(e) {
                    return null == e.Y && (e.Y = new Ne),
                    e.Y
                }
                function Ke(e) {
                    return null == e.$c && (e.$c = new Ne),
                    e.$c
                }
                function Xe(e, t) {
                    if (null == t || t[$e.va] !== e.id)
                        return !0;
                    if (t[$e.Xd])
                        return !1;
                    if (null != t[$e.ca] && null != e.updated && t[$e.ca] < R(e.updated.valueOf()))
                        return !0;
                    if (t[$e.za] && !e.viewed && (e.viewed = !0),
                    t[$e.sa] && !e.clicked && (e.clicked = t[$e.sa]),
                    null != t[$e.Ta] && (e.title = t[$e.Ta]),
                    null != t[$e.wa] && (e.imageUrl = t[$e.wa]),
                    null != t[$e.Pa] && (e.description = t[$e.Pa]),
                    null != t[$e.ca]) {
                        var a = U(t[$e.ca]);
                        null != a && (e.updated = a)
                    }
                    return null != t[$e.ba] && (e.expiresAt = t[$e.ba] === Je ? null : U(t[$e.ba])),
                    null != t[$e.URL] && (e.url = t[$e.URL]),
                    null != t[$e.xa] && (e.linkText = t[$e.xa]),
                    null != t[$e.ra] && (a = parseFloat(t[$e.ra]),
                    e.aspectRatio = isNaN(a) ? null : a),
                    null != t[$e.ha] && (e.extras = t[$e.ha]),
                    null != t[$e.ia] && (e.pinned = t[$e.ia]),
                    null != t[$e.ua] && (e.dismissible = t[$e.ua]),
                    null != t[$e.X] && (e.test = t[$e.X]),
                    !0
                }
                function qe(e) {
                    if (e[$e.Xd])
                        return null;
                    var t = e[$e.va]
                      , a = e[$e.TYPE]
                      , n = e[$e.za]
                      , i = e[$e.Ta]
                      , o = e[$e.wa]
                      , r = e[$e.Pa]
                      , s = U(e[$e.ca])
                      , l = e[$e.ba] === Je ? null : U(e[$e.ba])
                      , c = e[$e.URL]
                      , b = e[$e.xa]
                      , p = e[$e.ra]
                      , u = e[$e.ha]
                      , d = e[$e.ia]
                      , h = e[$e.ua]
                      , f = e[$e.sa];
                    if (e = e[$e.X] || !1,
                    a === Ze.be || a === Ze.$b)
                        t = new nt(t,n,i,o,r,null,s,null,l,c,b,p,u,d,h,f);
                    else if (a === Ze.Qb)
                        t = new at(t,n,i,o,r,null,s,null,l,c,b,p,u,d,h,f);
                    else if (a === Ze.Pb)
                        t = new tt(t,n,o,null,s,null,l,c,b,p,u,d,h,f);
                    else {
                        if (a !== Ze.Fc)
                            return N.error("Ignoring card with unknown type " + a),
                            null;
                        t = new it(t,n,s,l,u,d)
                    }
                    return t.test = e,
                    t
                }
                function Ye(e) {
                    var t = e[Qe.va]
                      , a = e[Qe.TYPE]
                      , n = e[Qe.za]
                      , i = e[Qe.Ta]
                      , o = e[Qe.wa]
                      , r = e[Qe.Pa]
                      , s = L(e[Qe.Ub])
                      , l = L(e[Qe.ca])
                      , c = e[Qe.Rb]
                      , b = L(e[Qe.ba])
                      , p = e[Qe.URL]
                      , u = e[Qe.xa]
                      , d = e[Qe.ra]
                      , h = e[Qe.ha]
                      , f = e[Qe.ia]
                      , g = e[Qe.ua]
                      , m = e[Qe.sa];
                    if (e = e[Qe.X] || !1,
                    a === Ze.$b)
                        t = new nt(t,n,i,o,r,s,l,c,b,p,u,d,h,f,g,m);
                    else if (a === Ze.Qb)
                        t = new at(t,n,i,o,r,s,l,c,b,p,u,d,h,f,g,m);
                    else if (a === Ze.Pb)
                        t = new tt(t,n,o,s,l,c,b,p,u,d,h,f,g,m);
                    else {
                        if (a !== Ze.Fc)
                            return;
                        t = new it(t,n,l,b,h,f)
                    }
                    return t.test = e,
                    t
                }
                function Ve(e) {
                    null != e && null != (e = e.querySelectorAll(".ab-unread-indicator")[0]) && (e.className += " read")
                }
                V.WindowUtils = Ge,
                V.WindowUtils.openUri = Ge.ug,
                (e = He.prototype).Mb = function(e) {
                    return De(We(this), e)
                }
                ,
                e.Id = function(e) {
                    return De(Ke(this), e)
                }
                ,
                e.P = function(e) {
                    We(this).P(e),
                    Ke(this).P(e)
                }
                ,
                e.N = function() {
                    We(this).N(),
                    Ke(this).N()
                }
                ,
                e.Ad = function() {
                    this.viewed = !0
                }
                ,
                e.gb = function() {
                    this.clicked = this.viewed = !0,
                    Te(We(this))
                }
                ,
                e.zd = function() {
                    return !(!this.dismissible || this.dismissed || (this.dismissed = !0,
                    Te(Ke(this)),
                    0))
                }
                ,
                e.$ = function(e, t, a) {
                    function n(t) {
                        return Ve(o),
                        r && (e(i),
                        Ge.openUri(i.url, t, a)),
                        !1
                    }
                    var i = this
                      , o = document.createElement("div");
                    o.className = "ab-card ab-effect-card " + this.sc,
                    o.setAttribute("data-ab-card-id", this.id),
                    o.setAttribute("role", "article"),
                    o.setAttribute("tabindex", "0");
                    var r = this.url && "" !== this.url;
                    if (this.pinned) {
                        var s = document.createElement("div");
                        s.className = "ab-pinned-indicator";
                        var l = document.createElement("i");
                        l.className = "fa fa-star",
                        s.appendChild(l),
                        o.appendChild(s)
                    }
                    if (this.imageUrl && "" !== this.imageUrl && ((s = document.createElement("div")).className = "ab-image-area",
                    (l = document.createElement("img")).setAttribute("src", this.imageUrl),
                    s.appendChild(l),
                    o.className += " with-image",
                    r && !this.vc ? ((l = document.createElement("a")).setAttribute("href", this.url),
                    l.onclick = n,
                    l.appendChild(s),
                    o.appendChild(l)) : o.appendChild(s)),
                    (s = document.createElement("div")).className = "ab-card-body",
                    this.dismissible) {
                        this.ne = t;
                        var c = je("Dismiss Card", void 0, this.Ge.bind(this));
                        o.appendChild(c),
                        Pe(s, Le, (function(e) {
                            o.className += " ab-swiped-left",
                            c.onclick(e)
                        }
                        )),
                        Pe(s, Fe, (function(e) {
                            o.className += " ab-swiped-right",
                            c.onclick(e)
                        }
                        ))
                    }
                    if (t = this.title && "" !== this.title) {
                        if ((l = document.createElement("h1")).className = "ab-title",
                        l.id = g.bb(),
                        o.setAttribute("aria-labelledby", l.id),
                        r) {
                            var b = document.createElement("a");
                            b.setAttribute("href", this.url),
                            b.onclick = n,
                            b.appendChild(document.createTextNode(this.title)),
                            l.appendChild(b)
                        } else
                            l.appendChild(document.createTextNode(this.title));
                        s.appendChild(l)
                    }
                    return (l = document.createElement("div")).className = t ? "ab-description" : "ab-description ab-no-title",
                    l.id = g.bb(),
                    o.setAttribute("aria-describedby", l.id),
                    l.appendChild(document.createTextNode(this.description)),
                    r && ((t = document.createElement("div")).className = "ab-url-area",
                    (b = document.createElement("a")).setAttribute("href", this.url),
                    b.appendChild(document.createTextNode(this.linkText)),
                    b.onclick = n,
                    t.appendChild(b),
                    l.appendChild(t)),
                    s.appendChild(l),
                    o.appendChild(s),
                    (s = document.createElement("div")).className = "ab-unread-indicator",
                    this.viewed && (s.className += " read"),
                    o.appendChild(s),
                    this.Sf = o
                }
                ,
                e.Ge = function() {
                    if (this.dismissible && !this.dismissed) {
                        this.ne && this.ne(this);
                        var e = this.Sf;
                        e && (e.style.height = e.offsetHeight + "px",
                        e.className += " ab-hide",
                        setTimeout((function() {
                            e && e.parentNode && (e.style.height = "0",
                            e.style.margin = "0",
                            setTimeout((function() {
                                e && e.parentNode && e.parentNode.removeChild(e)
                            }
                            ), et))
                        }
                        ), ga))
                    }
                }
                ;
                var Je = -1
                  , Ze = {
                    Qb: "captioned_image",
                    be: "text_announcement",
                    $b: "short_news",
                    Pb: "banner_image",
                    Fc: "control"
                }
                  , $e = {
                    va: "id",
                    za: "v",
                    ua: "db",
                    Xd: "r",
                    ca: "ca",
                    ia: "p",
                    ba: "ea",
                    ha: "e",
                    TYPE: "tp",
                    wa: "i",
                    Ta: "tt",
                    Pa: "ds",
                    URL: "u",
                    xa: "dm",
                    ra: "ar",
                    sa: "cl",
                    X: "t"
                }
                  , Qe = {
                    va: "id",
                    za: "v",
                    ua: "db",
                    Ub: "cr",
                    ca: "ca",
                    ia: "p",
                    Rb: "t",
                    ba: "ea",
                    ha: "e",
                    TYPE: "tp",
                    wa: "i",
                    Ta: "tt",
                    Pa: "ds",
                    URL: "u",
                    xa: "dm",
                    ra: "ar",
                    sa: "cl",
                    X: "s"
                }
                  , et = 400;
                function tt(e, t, a, n, i, o, r, s, l, c, b, p, u, d) {
                    He.call(this, e, t, null, a, null, n, i, o, r, s, l, c, b, p, u, d),
                    this.sc = "ab-banner",
                    this.vc = !1
                }
                function at(e, t, a, n, i, o, r, s, l, c, b, p, u, d, h, f) {
                    He.call(this, e, t, a, n, i, o, r, s, l, c, b, p, u, d, h, f),
                    this.sc = "ab-captioned-image",
                    this.vc = !0
                }
                function nt(e, t, a, n, i, o, r, s, l, c, b, p, u, d, h, f) {
                    He.call(this, e, t, a, n, i, o, r, s, l, c, b, p, u, d, h, f),
                    this.sc = "ab-classic-card",
                    this.vc = !0
                }
                function it(e, t, a, n, i, o) {
                    He.call(this, e, t, null, null, null, null, a, null, n, null, null, null, i, o, null),
                    this.sc = "ab-control-card",
                    this.vc = !1
                }
                function ot(e) {
                    return e = parseInt(e),
                    !isNaN(e) && 0 == (4278190080 & e) >>> 24
                }
                function rt(e) {
                    if (e = parseInt(e),
                    isNaN(e))
                        return "";
                    var t = parseFloat(t);
                    isNaN(t) && (t = 1);
                    var a = 255 & (e >>>= 0)
                      , n = (65280 & e) >>> 8
                      , i = (16711680 & e) >>> 16;
                    return ce.Wa !== ae.Vb || 8 < ce.version ? "rgba(" + [i, n, a, ((4278190080 & e) >>> 24) / 255 * t].join() + ")" : "rgb(" + [i, n, a].join() + ")"
                }
                function st(e, t, a, n, i, o, r, s, l, c, b, p, u, d, h, f, g, m, v, w, x, y, k, E, A, S, _, C, N, D, T) {
                    this.message = e,
                    this.messageAlignment = t || Mt,
                    this.duration = p || 5e3,
                    this.slideFrom = a || mt,
                    this.extras = n || [],
                    this.campaignId = i,
                    this.cardId = o,
                    this.triggerId = r,
                    this.clickAction = s || yt,
                    this.uri = l,
                    this.openTarget = c || St,
                    this.dismissType = b || Et,
                    this.icon = u,
                    this.imageUrl = d,
                    this.imageStyle = h || Nt,
                    this.iconColor = f || ft.Yc,
                    this.iconBackgroundColor = g || ft.Ld,
                    this.backgroundColor = m || ft.Yc,
                    this.textColor = v || ft.Nd,
                    this.closeButtonColor = w || ft.uf,
                    this.animateIn = x,
                    null == this.animateIn && (this.animateIn = !0),
                    this.animateOut = y,
                    null == this.animateOut && (this.animateOut = !0),
                    this.header = k,
                    this.headerAlignment = E || Mt,
                    this.headerTextColor = A || ft.Nd,
                    this.frameColor = S || ft.Lf,
                    this.buttons = _ || [],
                    this.cropType = C || Rt,
                    this.orientation = N,
                    this.htmlId = D,
                    this.css = T,
                    this.je = this.Ua = this.ke = !1,
                    this.Y = new Ne,
                    this.ec = new Ne
                }
                function lt(e) {
                    return null != e.htmlId && 4 < e.htmlId.length
                }
                function ct(e) {
                    return lt(e) && null != e.css && 0 < e.css.length
                }
                function bt(e) {
                    if (lt(e) && ct(e))
                        return e.htmlId + "-css"
                }
                function pt(e) {
                    if (e.is_control)
                        return new Jt(e.trigger_id);
                    var t = e.type;
                    null != t && (t = t.toUpperCase());
                    var a = e.message
                      , n = e.text_align_message
                      , i = e.slide_from
                      , o = e.extras
                      , r = e.campaign_id
                      , s = e.card_id
                      , l = e.trigger_id
                      , c = e.click_action
                      , b = e.uri
                      , p = e.open_target
                      , u = e.message_close
                      , d = e.duration
                      , h = e.icon
                      , f = e.image_url
                      , g = e.image_style
                      , m = e.icon_color
                      , v = e.icon_bg_color
                      , w = e.bg_color
                      , x = e.text_color
                      , y = e.close_btn_color
                      , k = e.header
                      , E = e.text_align_header
                      , A = e.header_text_color
                      , S = e.frame_color
                      , _ = []
                      , C = e.btns;
                    null == C && (C = []);
                    for (var D = 0; D < C.length; D++) {
                        var T = C[D];
                        _.push(new Yt(T.text,T.bg_color,T.text_color,T.border_color,T.click_action,T.uri,T.id))
                    }
                    C = e.crop_type,
                    D = e.orientation,
                    T = e.animate_in;
                    var O = e.animate_out
                      , I = e.html_id
                      , M = e.css;
                    if (null != I && "" !== I && null != M && "" !== M || (M = I = void 0),
                    t === Lt || t === Ft)
                        a = new sa(a,n,o,r,s,l,c,b,p,u,d,h,f,g,m,v,w,x,y,T,O,k,E,A,S,_,C,I,M);
                    else if (t === jt)
                        a = new ea(a,n,o,r,s,l,c,b,p,u,d,h,f,g,m,v,w,x,y,T,O,k,E,A,S,_,C,D,I,M);
                    else if (t === Bt)
                        a = new la(a,n,i,o,r,s,l,c,b,p,u,d,h,f,m,v,w,x,y,T,O,I,M);
                    else {
                        if (t !== Gt && t !== Ht)
                            return void N.error("Ignoring message with unknown type " + t);
                        (a = new ra(a,o,r,s,l,u,d,T,O,S,I,M,e.message_fields)).Wg = e.trusted || !1
                    }
                    return a.Re = t,
                    a
                }
                function ut(e, t) {
                    if (t && t.parentNode) {
                        var a = t.closest(".ab-iam-root");
                        null == a && (a = t),
                        e.cb() && null != a.parentNode && ((t = a.parentNode.classList) && t.contains(qt) && t.remove(qt),
                        document.body.removeEventListener("touchmove", ht)),
                        a.className = a.className.replace(Kt, Xt)
                    }
                    return e.animateOut
                }
                function dt(e, t, a) {
                    if (null != t) {
                        e.jc = null;
                        var n = -1 === t.className.indexOf("ab-in-app-message") ? t.getElementsByClassName("ab-in-app-message")[0] : t
                          , i = !1;
                        n && (i = ut(e, n));
                        var o = document.body;
                        if (null != o)
                            var r = o.scrollTop;
                        n = function() {
                            if (t && t.parentNode) {
                                var n = t.closest(".ab-iam-root");
                                null == n && (n = t),
                                n.parentNode && n.parentNode.removeChild(n)
                            }
                            null != bt(e) && (n = document.getElementById(bt(e))) && n.parentNode && n.parentNode.removeChild(n),
                            null != o && "Safari" === ce.Wa && (o.scrollTop = r),
                            a ? a() : e.zd()
                        }
                        ,
                        i ? setTimeout(n, Wt) : n(),
                        e.kc && e.kc.focus()
                    }
                }
                function ht(e) {
                    e.targetTouches && 1 < e.targetTouches.length || e.target.classList && e.target.classList.contains("ab-message-text") && e.target.scrollHeight > e.target.clientHeight || e.preventDefault()
                }
                V.Card = He,
                V.Card.prototype.dismissCard = He.prototype.Ge,
                V.Card.prototype.subscribeToClickedEvent = He.prototype.Mb,
                V.Card.prototype.subscribeToDismissedEvent = He.prototype.Id,
                V.Card.prototype.removeSubscription = He.prototype.P,
                V.Card.prototype.removeAllSubscriptions = He.prototype.N,
                h(tt, He),
                tt.prototype.C = function() {
                    var e = {};
                    return e[Qe.TYPE] = Ze.Pb,
                    e[Qe.va] = this.id,
                    e[Qe.za] = this.viewed,
                    e[Qe.wa] = this.imageUrl,
                    e[Qe.ca] = this.updated,
                    e[Qe.Ub] = this.created,
                    e[Qe.Rb] = this.categories,
                    e[Qe.ba] = this.expiresAt,
                    e[Qe.URL] = this.url,
                    e[Qe.xa] = this.linkText,
                    e[Qe.ra] = this.aspectRatio,
                    e[Qe.ha] = this.extras,
                    e[Qe.ia] = this.pinned,
                    e[Qe.ua] = this.dismissible,
                    e[Qe.sa] = this.clicked,
                    e[Qe.X] = this.test,
                    e
                }
                ,
                V.Banner = tt,
                h(at, He),
                at.prototype.C = function() {
                    var e = {};
                    return e[Qe.TYPE] = Ze.Qb,
                    e[Qe.va] = this.id,
                    e[Qe.za] = this.viewed,
                    e[Qe.Ta] = this.title,
                    e[Qe.wa] = this.imageUrl,
                    e[Qe.Pa] = this.description,
                    e[Qe.ca] = this.updated,
                    e[Qe.Ub] = this.created,
                    e[Qe.Rb] = this.categories,
                    e[Qe.ba] = this.expiresAt,
                    e[Qe.URL] = this.url,
                    e[Qe.xa] = this.linkText,
                    e[Qe.ra] = this.aspectRatio,
                    e[Qe.ha] = this.extras,
                    e[Qe.ia] = this.pinned,
                    e[Qe.ua] = this.dismissible,
                    e[Qe.sa] = this.clicked,
                    e[Qe.X] = this.test,
                    e
                }
                ,
                V.CaptionedImage = at,
                h(nt, He),
                nt.prototype.C = function() {
                    var e = {};
                    return e[Qe.TYPE] = Ze.$b,
                    e[Qe.va] = this.id,
                    e[Qe.za] = this.viewed,
                    e[Qe.Ta] = this.title,
                    e[Qe.wa] = this.imageUrl,
                    e[Qe.Pa] = this.description,
                    e[Qe.ca] = this.updated,
                    e[Qe.Ub] = this.created,
                    e[Qe.Rb] = this.categories,
                    e[Qe.ba] = this.expiresAt,
                    e[Qe.URL] = this.url,
                    e[Qe.xa] = this.linkText,
                    e[Qe.ra] = this.aspectRatio,
                    e[Qe.ha] = this.extras,
                    e[Qe.ia] = this.pinned,
                    e[Qe.ua] = this.dismissible,
                    e[Qe.sa] = this.clicked,
                    e[Qe.X] = this.test,
                    e
                }
                ,
                V.ClassicCard = nt,
                h(it, He),
                it.prototype.C = function() {
                    var e = {};
                    return e[Qe.TYPE] = Ze.Fc,
                    e[Qe.va] = this.id,
                    e[Qe.za] = this.viewed,
                    e[Qe.ca] = this.updated,
                    e[Qe.ba] = this.expiresAt,
                    e[Qe.ha] = this.extras,
                    e[Qe.ia] = this.pinned,
                    e[Qe.X] = this.test,
                    e
                }
                ,
                V.ControlCard = it,
                (e = st.prototype).cb = function() {
                    return !0
                }
                ,
                e.Ze = function() {
                    return this.cb()
                }
                ,
                e.Mb = function(e) {
                    return De(this.Y, e)
                }
                ,
                e.Id = function(e) {
                    return De(this.ec, e)
                }
                ,
                e.P = function(e) {
                    this.Y.P(e),
                    this.ec.P(e)
                }
                ,
                e.N = function() {
                    this.Y.N(),
                    this.ec.N()
                }
                ,
                e.Ad = function() {
                    return !this.ke && (this.ke = !0)
                }
                ,
                e.gb = function() {
                    return !this.Ua && (this.Ua = !0,
                    Te(this.Y),
                    !0)
                }
                ,
                e.zd = function() {
                    return !this.je && (this.je = !0,
                    Te(this.ec),
                    !0)
                }
                ,
                e.Ce = function() {
                    dt(this, this.jc)
                }
                ,
                e.$ = function(e, t, a, n) {
                    function i() {
                        -1 !== r.className.indexOf("ab-start-hidden") && (r.className = r.className.replace("ab-start-hidden", ""),
                        a(r))
                    }
                    var o = this
                      , r = document.createElement("div");
                    r.className = "ab-in-app-message ab-start-hidden ab-background",
                    this.cb() && (r.className += " ab-modal-interactions",
                    r.setAttribute("tabindex", "-1")),
                    ct(this) || (r.style.color = rt(this.textColor),
                    r.style.backgroundColor = rt(this.backgroundColor),
                    ot(this.backgroundColor) && (r.className += " ab-no-shadow")),
                    this.imageStyle === Dt && (r.className += " graphic"),
                    this.orientation === Ot && (r.className += " landscape"),
                    0 === this.buttons.length && (this.clickAction !== yt && (r.className += " ab-clickable"),
                    r.onclick = function(a) {
                        return dt(o, r, (function() {
                            e.zc(o),
                            o.clickAction === xt ? Ge.openUri(o.uri, a, n || o.openTarget === _t) : o.clickAction === wt && t()
                        }
                        )),
                        a.stopPropagation(),
                        !1
                    }
                    );
                    var s = je("Close Message", ct(this) ? void 0 : rt(this.closeButtonColor), (function() {
                        dt(o, r)
                    }
                    ));
                    r.appendChild(s),
                    (s = document.createElement("div")).className = "ab-message-text",
                    s.className += " " + (this.messageAlignment || this.constructor.DefaultTextAlignment).toLowerCase() + "-aligned";
                    var l = !1
                      , c = document.createElement("div");
                    if (c.className = "ab-image-area",
                    this.imageUrl) {
                        if (this.cropType === Pt) {
                            var b = document.createElement("span");
                            b.className = "ab-center-cropped-img",
                            b.style.backgroundImage = "url(" + this.imageUrl + ")",
                            c.appendChild(b)
                        } else
                            (b = document.createElement("img")).setAttribute("src", this.imageUrl),
                            l = !0,
                            b.onload = i,
                            setTimeout(i, 1e3),
                            c.appendChild(b);
                        r.appendChild(c),
                        s.className += " ab-with-image"
                    } else if (this.icon) {
                        c.className += " ab-icon-area",
                        (b = document.createElement("span")).className = "ab-icon",
                        ct(this) || (b.style.backgroundColor = rt(this.iconBackgroundColor),
                        b.style.color = rt(this.iconColor));
                        var p = document.createElement("i");
                        p.className = "fa",
                        p.appendChild(document.createTextNode(this.icon)),
                        b.appendChild(p),
                        c.appendChild(b),
                        r.appendChild(c),
                        s.className += " ab-with-icon"
                    }
                    return Ie(s, "touchstart", (function() {}
                    )),
                    this.header && 0 < this.header.length && ((c = document.createElement("h1")).className = "ab-message-header",
                    this.ad = g.bb(),
                    c.id = this.ad,
                    c.className += " " + (this.headerAlignment || Mt).toLowerCase() + "-aligned",
                    ct(this) || (c.style.color = rt(this.headerTextColor)),
                    c.appendChild(document.createTextNode(this.header)),
                    s.appendChild(c)),
                    s.appendChild(this.Be()),
                    r.appendChild(s),
                    l || i(),
                    this.jc = r
                }
                ,
                e.Be = function() {
                    return document.createTextNode(this.message)
                }
                ,
                e.Ac = function(e) {
                    this.cb() && null != e.parentNode && this.orientation !== Ot && (null != e.parentNode.classList && e.parentNode.classList.add(qt),
                    document.body.addEventListener("touchmove", ht, !!Oe() && {
                        passive: !1
                    })),
                    e.className += " " + Kt
                }
                ,
                e.na = function() {
                    var e = "";
                    return this.animateIn && (e += " ab-animate-in"),
                    this.animateOut && (e += " ab-animate-out"),
                    e
                }
                ;
                var ft = {
                    Nd: 4281545523,
                    Yc: 4294967295,
                    Ld: 4278219733,
                    vf: 4293914607,
                    wf: 4283782485,
                    Lf: 3224580915,
                    uf: 4288387995
                }
                  , gt = {
                    Pd: "hd",
                    bf: "ias",
                    Jf: "of",
                    xf: "do",
                    vb: "umt",
                    tb: "tf",
                    Qd: "te"
                }
                  , mt = "BOTTOM"
                  , vt = {
                    TOP: "TOP",
                    BOTTOM: mt
                }
                  , wt = "NEWS_FEED"
                  , xt = "URI"
                  , yt = "NONE"
                  , kt = {
                    NEWS_FEED: wt,
                    URI: xt,
                    NONE: yt
                }
                  , Et = "AUTO_DISMISS"
                  , At = {
                    AUTO_DISMISS: Et,
                    MANUAL: "SWIPE"
                }
                  , St = "NONE"
                  , _t = "BLANK"
                  , Ct = {
                    NONE: St,
                    BLANK: _t
                }
                  , Nt = "TOP"
                  , Dt = "GRAPHIC"
                  , Tt = {
                    TOP: Nt,
                    GRAPHIC: Dt
                }
                  , Ot = "LANDSCAPE"
                  , It = {
                    PORTRAIT: "PORTRAIT",
                    LANDSCAPE: Ot
                }
                  , Mt = "CENTER"
                  , zt = {
                    START: "START",
                    CENTER: Mt,
                    END: "END"
                }
                  , Pt = "CENTER_CROP"
                  , Rt = "FIT_CENTER"
                  , Ut = {
                    CENTER_CROP: Pt,
                    FIT_CENTER: Rt
                }
                  , Bt = "SLIDEUP"
                  , Lt = "MODAL"
                  , Ft = "MODAL_STYLED"
                  , jt = "FULL"
                  , Gt = "WEB_HTML"
                  , Ht = "HTML"
                  , Wt = 500
                  , Kt = "ab-show"
                  , Xt = "ab-hide"
                  , qt = "ab-pause-scrolling";
                function Yt(e, t, a, n, i, o, r) {
                    this.text = e || "",
                    this.backgroundColor = t || ft.Ld,
                    this.textColor = a || ft.Yc,
                    this.borderColor = n || this.backgroundColor,
                    this.clickAction = i || yt,
                    this.uri = o,
                    null == r && (r = Vt),
                    this.id = r,
                    this.Ua = !1,
                    this.Y = new Ne
                }
                V.InAppMessage = st,
                V.InAppMessage.SlideFrom = vt,
                V.InAppMessage.ClickAction = kt,
                V.InAppMessage.DismissType = At,
                V.InAppMessage.OpenTarget = Ct,
                V.InAppMessage.ImageStyle = Tt,
                V.InAppMessage.TextAlignment = zt,
                V.InAppMessage.Orientation = It,
                V.InAppMessage.CropType = Ut,
                V.InAppMessage.prototype.subscribeToClickedEvent = st.prototype.Mb,
                V.InAppMessage.prototype.subscribeToDismissedEvent = st.prototype.Id,
                V.InAppMessage.prototype.removeSubscription = st.prototype.P,
                V.InAppMessage.prototype.removeAllSubscriptions = st.prototype.N,
                V.InAppMessage.prototype.closeMessage = st.prototype.Ce,
                Yt.prototype.Mb = function(e) {
                    return De(this.Y, e)
                }
                ,
                Yt.prototype.P = function(e) {
                    this.Y.P(e)
                }
                ,
                Yt.prototype.N = function() {
                    this.Y.N()
                }
                ,
                Yt.prototype.gb = function() {
                    return !this.Ua && (this.Ua = !0,
                    Te(this.Y),
                    !0)
                }
                ;
                var Vt = -1;
                function Jt(e) {
                    this.triggerId = e
                }
                function Zt(e) {
                    var t = e.querySelectorAll(".ab-close-button, .ab-message-button");
                    if (0 < t.length) {
                        var a = t[0]
                          , n = t[t.length - 1];
                        e.addEventListener("keydown", (function(t) {
                            var i = document.activeElement;
                            9 === t.keyCode && (t.shiftKey || i !== n && i !== e ? !t.shiftKey || i !== a && i !== e || (t.preventDefault(),
                            n.focus()) : (t.preventDefault(),
                            a.focus()))
                        }
                        ))
                    }
                }
                function $t(e, t) {
                    t.setAttribute("role", "dialog"),
                    t.setAttribute("aria-modal", !0),
                    t.setAttribute("aria-label", "Modal Message"),
                    e && t.setAttribute("aria-labelledby", e)
                }
                function Qt(e, t, a, n, i) {
                    if (0 < e.buttons.length) {
                        var o = document.createElement("div");
                        o.className = "ab-message-buttons",
                        n.appendChild(o);
                        var r = n.getElementsByClassName("ab-message-text")[0];
                        null != r && (r.className += " ab-with-buttons"),
                        r = function(o) {
                            return function(r) {
                                return dt(e, n, (function() {
                                    t.yc(o, e),
                                    o.clickAction === xt ? Ge.openUri(o.uri, r, i || e.openTarget === _t) : o.clickAction === wt && a()
                                }
                                )),
                                r.stopPropagation(),
                                !1
                            }
                        }
                        ;
                        for (var s = 0; s < e.buttons.length; s++) {
                            var l = e.buttons[s]
                              , c = document.createElement("button");
                            c.className = "ab-message-button",
                            c.setAttribute("type", "button"),
                            Ie(c, "touchstart", (function() {}
                            ));
                            var b = l.text;
                            "" === l.text && (b = " "),
                            c.appendChild(document.createTextNode(b)),
                            ct(e) || (c.style.backgroundColor = rt(l.backgroundColor),
                            c.style.color = rt(l.textColor),
                            c.style.borderColor = rt(l.borderColor)),
                            c.onclick = r(l),
                            o.appendChild(c)
                        }
                    }
                }
                function ea(e, t, a, n, i, o, r, s, l, c, b, p, u, d, h, f, g, m, v, w, x, y, k, E, A, S, _, C, N, D) {
                    _ = _ || Pt,
                    st.call(this, e, t, null, a, n, i, o, r, s, l, c || "SWIPE", b, p, u, d, h, f, g, m, v, w, x, y, k, E, A, S, _, C || "PORTRAIT", N, D)
                }
                V.InAppMessage.Button = Yt,
                V.InAppMessage.Button.prototype.subscribeToClickedEvent = Yt.prototype.Mb,
                V.InAppMessage.Button.prototype.removeSubscription = Yt.prototype.P,
                V.InAppMessage.Button.prototype.removeAllSubscriptions = Yt.prototype.N,
                V.ControlMessage = Jt,
                h(ea, st),
                ea.prototype.$ = function(e, t, a, n, i) {
                    return this.kc = document.activeElement,
                    (t = st.prototype.$.call(this, e, a, n, i)).className += " ab-fullscreen ab-centered",
                    Qt(this, e, a, t, i),
                    Zt(t),
                    $t(this.ad, t),
                    t
                }
                ,
                ea.prototype.na = function() {
                    return st.prototype.na.call(this) + " ab-effect-fullscreen"
                }
                ,
                ea.DefaultTextAlignment = Mt,
                V.FullScreenMessage = ea;
                var ta, aa, na = new function() {
                    this.Ee = ".ab-pause-scrolling,body.ab-pause-scrolling,html.ab-pause-scrolling{overflow:hidden;touch-action:none}.ab-centering-div,.ab-iam-root.v3{position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:1050;-webkit-tap-highlight-color:transparent}.ab-centering-div:focus,.ab-iam-root.v3:focus{outline:0}.ab-centering-div.ab-effect-fullscreen,.ab-centering-div.ab-effect-html,.ab-centering-div.ab-effect-modal,.ab-iam-root.v3.ab-effect-fullscreen,.ab-iam-root.v3.ab-effect-html,.ab-iam-root.v3.ab-effect-modal{opacity:0}.ab-centering-div.ab-effect-fullscreen.ab-show,.ab-centering-div.ab-effect-html.ab-show,.ab-centering-div.ab-effect-modal.ab-show,.ab-iam-root.v3.ab-effect-fullscreen.ab-show,.ab-iam-root.v3.ab-effect-html.ab-show,.ab-iam-root.v3.ab-effect-modal.ab-show{opacity:1}.ab-centering-div.ab-effect-fullscreen.ab-show.ab-animate-in,.ab-centering-div.ab-effect-html.ab-show.ab-animate-in,.ab-centering-div.ab-effect-modal.ab-show.ab-animate-in,.ab-iam-root.v3.ab-effect-fullscreen.ab-show.ab-animate-in,.ab-iam-root.v3.ab-effect-html.ab-show.ab-animate-in,.ab-iam-root.v3.ab-effect-modal.ab-show.ab-animate-in{-webkit-transition:opacity .5s;-moz-transition:opacity .5s;-o-transition:opacity .5s;transition:opacity .5s}.ab-centering-div.ab-effect-fullscreen.ab-hide,.ab-centering-div.ab-effect-html.ab-hide,.ab-centering-div.ab-effect-modal.ab-hide,.ab-iam-root.v3.ab-effect-fullscreen.ab-hide,.ab-iam-root.v3.ab-effect-html.ab-hide,.ab-iam-root.v3.ab-effect-modal.ab-hide{opacity:0}.ab-centering-div.ab-effect-fullscreen.ab-hide.ab-animate-out,.ab-centering-div.ab-effect-html.ab-hide.ab-animate-out,.ab-centering-div.ab-effect-modal.ab-hide.ab-animate-out,.ab-iam-root.v3.ab-effect-fullscreen.ab-hide.ab-animate-out,.ab-iam-root.v3.ab-effect-html.ab-hide.ab-animate-out,.ab-iam-root.v3.ab-effect-modal.ab-hide.ab-animate-out{-webkit-transition:opacity .5s;-moz-transition:opacity .5s;-o-transition:opacity .5s;transition:opacity .5s}.ab-centering-div.ab-effect-slide .ab-in-app-message,.ab-iam-root.v3.ab-effect-slide .ab-in-app-message{-webkit-transform:translateX(535px);-moz-transform:translateX(535px);-ms-transform:translateX(535px);transform:translateX(535px)}.ab-centering-div.ab-effect-slide.ab-show .ab-in-app-message,.ab-iam-root.v3.ab-effect-slide.ab-show .ab-in-app-message{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.ab-centering-div.ab-effect-slide.ab-show.ab-animate-in .ab-in-app-message,.ab-iam-root.v3.ab-effect-slide.ab-show.ab-animate-in .ab-in-app-message{-webkit-transition:transform .5s ease-in-out;-moz-transition:transform .5s ease-in-out;-o-transition:transform .5s ease-in-out;transition:transform .5s ease-in-out}.ab-centering-div.ab-effect-slide.ab-hide .ab-in-app-message,.ab-iam-root.v3.ab-effect-slide.ab-hide .ab-in-app-message{-webkit-transform:translateX(535px);-moz-transform:translateX(535px);-ms-transform:translateX(535px);transform:translateX(535px)}.ab-centering-div.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-left,.ab-iam-root.v3.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-left{-webkit-transform:translateX(-535px);-moz-transform:translateX(-535px);-ms-transform:translateX(-535px);transform:translateX(-535px)}.ab-centering-div.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-up,.ab-iam-root.v3.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-up{-webkit-transform:translateY(-535px);-moz-transform:translateY(-535px);-ms-transform:translateY(-535px);transform:translateY(-535px)}.ab-centering-div.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-down,.ab-iam-root.v3.ab-effect-slide.ab-hide .ab-in-app-message.ab-swiped-down{-webkit-transform:translateY(535px);-moz-transform:translateY(535px);-ms-transform:translateY(535px);transform:translateY(535px)}.ab-centering-div.ab-effect-slide.ab-hide.ab-animate-out .ab-in-app-message,.ab-iam-root.v3.ab-effect-slide.ab-hide.ab-animate-out .ab-in-app-message{-webkit-transition:transform .5s ease-in-out;-moz-transition:transform .5s ease-in-out;-o-transition:transform .5s ease-in-out;transition:transform .5s ease-in-out}.ab-centering-div .ab-ios-scroll-wrapper,.ab-iam-root.v3 .ab-ios-scroll-wrapper{position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;pointer-events:all;touch-action:auto;-webkit-overflow-scrolling:touch}.ab-centering-div .ab-in-app-message,.ab-iam-root.v3 .ab-in-app-message{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:fixed;text-align:center;-webkit-box-shadow:0 0 4px rgba(0,0,0,.3);-moz-box-shadow:0 0 4px rgba(0,0,0,.3);box-shadow:0 0 4px rgba(0,0,0,.3);line-height:normal;letter-spacing:normal;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;z-index:1050;max-width:100%;overflow:hidden;display:inline-block;pointer-events:all;color:#333}.ab-centering-div .ab-in-app-message.ab-no-shadow,.ab-iam-root.v3 .ab-in-app-message.ab-no-shadow{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.ab-centering-div .ab-in-app-message :focus,.ab-centering-div .ab-in-app-message:focus,.ab-iam-root.v3 .ab-in-app-message :focus,.ab-iam-root.v3 .ab-in-app-message:focus{outline:0}.ab-centering-div .ab-in-app-message.ab-clickable,.ab-iam-root.v3 .ab-in-app-message.ab-clickable{cursor:pointer}.ab-centering-div .ab-in-app-message.ab-background,.ab-iam-root.v3 .ab-in-app-message.ab-background{background-color:#fff}.ab-centering-div .ab-in-app-message .ab-close-button,.ab-iam-root.v3 .ab-in-app-message .ab-close-button{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background-color:transparent;background-repeat:no-repeat;background-origin:content-box;background-size:15px;border:none;width:15px;height:15px;-webkit-border-radius:7.5px;-moz-border-radius:7.5px;border-radius:7.5px;cursor:pointer;display:block;font-size:15px;line-height:0;padding-top:15px;padding-right:15px;padding-left:10px;padding-bottom:10px;position:absolute;right:0;top:0;text-align:center;z-index:1060}.ab-centering-div .ab-in-app-message .ab-close-button svg,.ab-iam-root.v3 .ab-in-app-message .ab-close-button svg{-webkit-transition:.2s ease;-moz-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;fill:#9b9b9b}.ab-centering-div .ab-in-app-message .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message .ab-close-button svg.ab-chevron{display:none}.ab-centering-div .ab-in-app-message .ab-close-button:active,.ab-iam-root.v3 .ab-in-app-message .ab-close-button:active{background-color:transparent}.ab-centering-div .ab-in-app-message .ab-close-button:focus,.ab-iam-root.v3 .ab-in-app-message .ab-close-button:focus{background-color:transparent}.ab-centering-div .ab-in-app-message .ab-close-button:hover,.ab-iam-root.v3 .ab-in-app-message .ab-close-button:hover{background-color:transparent}.ab-centering-div .ab-in-app-message .ab-close-button:hover svg,.ab-iam-root.v3 .ab-in-app-message .ab-close-button:hover svg{fill-opacity:.8}.ab-centering-div .ab-in-app-message .ab-message-text,.ab-iam-root.v3 .ab-in-app-message .ab-message-text{line-height:1.5;margin:20px 25px;max-width:100%;overflow:hidden;overflow-y:auto;vertical-align:text-bottom;word-wrap:break-word;white-space:pre-wrap}.ab-centering-div .ab-in-app-message .ab-message-text.start-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-text.start-aligned{text-align:left;text-align:start}.ab-centering-div .ab-in-app-message .ab-message-text.end-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-text.end-aligned{text-align:right;text-align:end}.ab-centering-div .ab-in-app-message .ab-message-text.center-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-text.center-aligned{text-align:center}.ab-centering-div .ab-in-app-message .ab-message-text::-webkit-scrollbar,.ab-iam-root.v3 .ab-in-app-message .ab-message-text::-webkit-scrollbar{-webkit-appearance:none;width:14px}.ab-centering-div .ab-in-app-message .ab-message-text::-webkit-scrollbar-thumb,.ab-iam-root.v3 .ab-in-app-message .ab-message-text::-webkit-scrollbar-thumb{-webkit-appearance:none;border:4px solid transparent;background-clip:padding-box;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;background-color:rgba(0,0,0,.2)}.ab-centering-div .ab-in-app-message .ab-message-text::-webkit-scrollbar-button,.ab-iam-root.v3 .ab-in-app-message .ab-message-text::-webkit-scrollbar-button{width:0;height:0;display:none}.ab-centering-div .ab-in-app-message .ab-message-text::-webkit-scrollbar-corner,.ab-iam-root.v3 .ab-in-app-message .ab-message-text::-webkit-scrollbar-corner{background-color:transparent}.ab-centering-div .ab-in-app-message .ab-message-header,.ab-iam-root.v3 .ab-in-app-message .ab-message-header{letter-spacing:0;margin:0;font-weight:700;display:block;font-size:20px;margin-bottom:10px;line-height:1.3}.ab-centering-div .ab-in-app-message .ab-message-header.start-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-header.start-aligned{text-align:left;text-align:start}.ab-centering-div .ab-in-app-message .ab-message-header.end-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-header.end-aligned{text-align:right;text-align:end}.ab-centering-div .ab-in-app-message .ab-message-header.center-aligned,.ab-iam-root.v3 .ab-in-app-message .ab-message-header.center-aligned{text-align:center}.ab-centering-div .ab-in-app-message.ab-fullscreen,.ab-centering-div .ab-in-app-message.ab-modal,.ab-centering-div .ab-in-app-message.ab-slideup,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen,.ab-iam-root.v3 .ab-in-app-message.ab-modal,.ab-iam-root.v3 .ab-in-app-message.ab-slideup{-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.ab-centering-div .ab-in-app-message.ab-slideup,.ab-iam-root.v3 .ab-in-app-message.ab-slideup{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;cursor:pointer;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;font-size:14px;font-weight:700;margin:20px;margin-top:calc(constant(safe-area-inset-top,0) + 20px);margin-right:calc(constant(safe-area-inset-right,0) + 20px);margin-bottom:calc(constant(safe-area-inset-bottom,0) + 20px);margin-left:calc(constant(safe-area-inset-left,0) + 20px);margin-top:calc(env(safe-area-inset-top,0) + 20px);margin-right:calc(env(safe-area-inset-right,0) + 20px);margin-bottom:calc(env(safe-area-inset-bottom,0) + 20px);margin-left:calc(env(safe-area-inset-left,0) + 20px);max-height:150px;padding:10px;right:0;background-color:#efefef}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone{max-height:66px;margin:10px;margin-top:calc(constant(safe-area-inset-top,0) + 10px);margin-right:calc(constant(safe-area-inset-right,0) + 10px);margin-bottom:calc(constant(safe-area-inset-bottom,0) + 10px);margin-left:calc(constant(safe-area-inset-left,0) + 10px);margin-top:calc(env(safe-area-inset-top,0) + 10px);margin-right:calc(env(safe-area-inset-right,0) + 10px);margin-bottom:calc(env(safe-area-inset-bottom,0) + 10px);margin-left:calc(env(safe-area-inset-left,0) + 10px);max-width:90%;max-width:calc(100% - 40px);min-width:90%;min-width:calc(100% - 40px)}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-close-button,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-close-button{display:none}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-close-button svg:not(.ab-chevron),.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-close-button svg:not(.ab-chevron){display:none}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-close-button,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-close-button{display:block;height:20px;padding:0 20px 0 18px;pointer-events:none;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:12px}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-close-button svg.ab-chevron{display:inline}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone.ab-clickable .ab-message-text{border-right-width:40px}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text{max-width:100%;border-right-width:10px}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text span,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text span{max-height:66px}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text.ab-with-icon,.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-message-text.ab-with-image{max-width:80%;max-width:calc(100% - 50px - 5px - 10px - 25px)}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-image-area{width:50px}.ab-centering-div .ab-in-app-message.ab-slideup.simulate-phone .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.simulate-phone .ab-image-area img{max-width:50px;max-height:50px;width:auto}.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:active .ab-message-text,.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:focus .ab-message-text,.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:hover .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:active .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:focus .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:hover .ab-message-text{opacity:.8}.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:active .ab-close-button svg.ab-chevron,.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:focus .ab-close-button svg.ab-chevron,.ab-centering-div .ab-in-app-message.ab-slideup.ab-clickable:hover .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:active .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:focus .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable:hover .ab-close-button svg.ab-chevron{fill-opacity:.8}.ab-centering-div .ab-in-app-message.ab-slideup .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:table-cell;border-color:transparent;border-style:solid;border-width:5px 25px 5px 10px;max-width:430px;vertical-align:middle;margin:0}.ab-centering-div .ab-in-app-message.ab-slideup .ab-message-text span,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text span{display:block;max-height:150px;overflow:auto}.ab-centering-div .ab-in-app-message.ab-slideup .ab-message-text.ab-with-icon,.ab-centering-div .ab-in-app-message.ab-slideup .ab-message-text.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text.ab-with-image{max-width:365px;border-top:0;border-bottom:0}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background-color:transparent;background-repeat:no-repeat;background-origin:content-box;background-size:15px;border:none;width:15px;height:15px;-webkit-border-radius:7.5px;-moz-border-radius:7.5px;border-radius:7.5px;cursor:pointer;display:block;font-size:15px;line-height:0;padding-top:10px;padding-right:10px;padding-left:6.66666667px;padding-bottom:6.66666667px;position:absolute;right:0;top:0;text-align:center;z-index:1060}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button svg,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button svg{-webkit-transition:.2s ease;-moz-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;fill:#9b9b9b}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button svg.ab-chevron,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button svg.ab-chevron{display:none}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button:active,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button:active{background-color:transparent}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button:focus,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button:focus{background-color:transparent}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button:hover,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button:hover{background-color:transparent}.ab-centering-div .ab-in-app-message.ab-slideup .ab-close-button:hover svg,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button:hover svg{fill-opacity:.8}.ab-centering-div .ab-in-app-message.ab-slideup .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-image-area{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:table-cell;border-color:transparent;border-style:solid;border-width:5px 0 5px 5px;vertical-align:top;width:60px;margin:0}.ab-centering-div .ab-in-app-message.ab-slideup .ab-image-area.ab-icon-area,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-image-area.ab-icon-area{width:auto}.ab-centering-div .ab-in-app-message.ab-slideup .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-image-area img{width:100%}.ab-centering-div .ab-in-app-message.ab-fullscreen,.ab-centering-div .ab-in-app-message.ab-modal,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen,.ab-iam-root.v3 .ab-in-app-message.ab-modal{font-size:14px}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-image-area,.ab-centering-div .ab-in-app-message.ab-modal .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-image-area{position:relative;display:block;overflow:hidden}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-image-area .ab-center-cropped-img,.ab-centering-div .ab-in-app-message.ab-modal .ab-image-area .ab-center-cropped-img,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-image-area .ab-center-cropped-img,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-image-area .ab-center-cropped-img{background-size:cover;background-repeat:no-repeat;background-position:50% 50%;position:absolute;top:0;right:0;bottom:0;left:0}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-icon,.ab-centering-div .ab-in-app-message.ab-modal .ab-icon,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-icon,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-icon{margin-top:20px}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic,.ab-centering-div .ab-in-app-message.ab-modal.graphic,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic{padding:0}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic .ab-message-text,.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-message-text{display:none}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic .ab-message-buttons,.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-message-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic .ab-message-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-message-buttons{bottom:0;left:0}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic .ab-image-area,.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-image-area{height:auto;margin:0}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic .ab-image-area img,.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-image-area img{display:block;top:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none}.ab-centering-div .ab-in-app-message.ab-modal,.ab-iam-root.v3 .ab-in-app-message.ab-modal{padding-top:20px;width:450px;max-width:450px;max-height:720px}.ab-centering-div .ab-in-app-message.ab-modal.simulate-phone,.ab-iam-root.v3 .ab-in-app-message.ab-modal.simulate-phone{max-width:91%;max-width:calc(100% - 30px)}.ab-centering-div .ab-in-app-message.ab-modal.simulate-phone.graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal.simulate-phone.graphic .ab-image-area img{max-width:91vw;max-width:calc(100vw - 30px)}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text{max-height:660px}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text.ab-with-image{max-height:524.82758621px}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text.ab-with-icon{max-height:610px}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons{margin-bottom:93px;max-height:587px}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons.ab-with-image{max-height:451.82758621px}.ab-centering-div .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-message-text.ab-with-buttons.ab-with-icon{max-height:537px}.ab-centering-div .ab-in-app-message.ab-modal .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-image-area{margin-top:-20px;max-height:155.17241379px}.ab-centering-div .ab-in-app-message.ab-modal .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-image-area img{max-width:100%;max-height:155.17241379px}.ab-centering-div .ab-in-app-message.ab-modal .ab-image-area.ab-icon-area,.ab-iam-root.v3 .ab-in-app-message.ab-modal .ab-image-area.ab-icon-area{height:auto}.ab-centering-div .ab-in-app-message.ab-modal.graphic,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic{width:auto;overflow:hidden}.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-image-area{display:inline}.ab-centering-div .ab-in-app-message.ab-modal.graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal.graphic .ab-image-area img{max-height:720px;max-width:450px}.ab-centering-div .ab-in-app-message.ab-fullscreen,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen{width:450px;max-height:720px}.ab-centering-div .ab-in-app-message.ab-fullscreen.landscape,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape{width:720px;max-height:450px}.ab-centering-div .ab-in-app-message.ab-fullscreen.landscape .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape .ab-image-area{height:225px}.ab-centering-div .ab-in-app-message.ab-fullscreen.landscape.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape.graphic .ab-image-area{height:450px}.ab-centering-div .ab-in-app-message.ab-fullscreen.landscape .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape .ab-message-text{max-height:112px}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-message-text{max-height:247px}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-message-text.ab-with-buttons{margin-bottom:93px}.ab-centering-div .ab-in-app-message.ab-fullscreen .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-image-area{height:360px}.ab-centering-div .ab-in-app-message.ab-fullscreen.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.graphic .ab-image-area{height:720px}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone{-webkit-transition:top none;-moz-transition:top none;-o-transition:top none;transition:top none;top:0;right:0;bottom:0;left:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;height:auto!important}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-close-button,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-close-button{margin-right:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-right:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0));margin-left:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-left:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0))}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone .ab-image-area,.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-image-area{height:50%}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone .ab-message-text{max-height:48%;max-height:calc(50% - 20px - 20px)}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone .ab-message-text.ab-with-buttons{margin-bottom:20px;max-height:30%;max-height:calc(50% - 93px - 20px)}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.landscape .ab-message-text.ab-with-buttons{max-height:20%;max-height:calc(50% - 93px - 20px)}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone:not(.graphic),.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone:not(.graphic){padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom,0);padding-bottom:env(safe-area-inset-bottom,0)}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone:not(.graphic) .ab-message-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone:not(.graphic) .ab-message-buttons{padding-top:0;position:relative}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.graphic,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.graphic{display:block}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.graphic .ab-image-area{height:100%}.ab-centering-div .ab-in-app-message.ab-fullscreen.simulate-phone.graphic .ab-message-button,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.simulate-phone.graphic .ab-message-button{margin-bottom:0;margin-bottom:constant(safe-area-inset-bottom,0);margin-bottom:env(safe-area-inset-bottom,0)}.ab-centering-div .ab-in-app-message.ab-html-message,.ab-iam-root.v3 .ab-in-app-message.ab-html-message{background-color:transparent;border:none;height:100%;overflow:auto;position:relative;touch-action:auto;width:100%}.ab-centering-div .ab-in-app-message .ab-message-buttons,.ab-iam-root.v3 .ab-in-app-message .ab-message-buttons{position:absolute;bottom:0;width:100%;padding:17px 25px 30px 25px;z-index:inherit;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ab-centering-div .ab-in-app-message .ab-message-button,.ab-iam-root.v3 .ab-in-app-message .ab-message-button{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;cursor:pointer;display:inline-block;font-size:14px;font-weight:700;height:44px;line-height:normal;letter-spacing:normal;margin:0;max-width:100%;min-width:80px;padding:0 12px;position:relative;text-transform:none;width:48%;width:calc(50% - 5px);border:1px solid #1b78cf;-webkit-transition:.2s ease;-moz-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;word-wrap:normal;white-space:nowrap}.ab-centering-div .ab-in-app-message .ab-message-button:first-of-type,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:first-of-type{float:left;background-color:#fff;color:#1b78cf}.ab-centering-div .ab-in-app-message .ab-message-button:last-of-type,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:last-of-type{float:right;background-color:#1b78cf;color:#fff}.ab-centering-div .ab-in-app-message .ab-message-button:first-of-type:last-of-type,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:first-of-type:last-of-type{float:none;width:auto}.ab-centering-div .ab-in-app-message .ab-message-button:after,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent}.ab-centering-div .ab-in-app-message .ab-message-button:after,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:after{-webkit-transition:.2s ease;-moz-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease}.ab-centering-div .ab-in-app-message .ab-message-button:hover,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:hover{opacity:.8}.ab-centering-div .ab-in-app-message .ab-message-button:active:after,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:active:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.08)}.ab-centering-div .ab-in-app-message .ab-message-button:focus:after,.ab-iam-root.v3 .ab-in-app-message .ab-message-button:focus:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.15)}.ab-centering-div .ab-in-app-message .ab-message-button a,.ab-iam-root.v3 .ab-in-app-message .ab-message-button a{color:inherit;text-decoration:inherit}.ab-centering-div .ab-in-app-message img,.ab-iam-root.v3 .ab-in-app-message img{display:inline-block}.ab-centering-div .ab-in-app-message .ab-icon,.ab-iam-root.v3 .ab-in-app-message .ab-icon{display:inline-block;padding:10px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.ab-centering-div .ab-in-app-message .ab-icon .fa,.ab-iam-root.v3 .ab-in-app-message .ab-icon .fa{font-size:30px;width:30px}.ab-centering-div .ab-start-hidden,.ab-iam-root.v3 .ab-start-hidden{visibility:hidden}.ab-centering-div .ab-centered,.ab-centering-div.ab-centering-div .ab-modal,.ab-iam-root.v3 .ab-centered,.ab-iam-root.v3.ab-centering-div .ab-modal{margin:auto;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ab-email-capture,.ab-iam-root.v3{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-email-capture .ab-page-blocker,.ab-iam-root.v3 .ab-page-blocker{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1040;pointer-events:all;background-color:rgba(51,51,51,.75)}.ab-email-capture .ab-in-app-message.ab-modal .ab-email-capture-input{margin-bottom:30px}.ab-email-capture .ab-in-app-message.ab-modal .ab-message-buttons~.ab-message-text{max-height:541px;margin-bottom:160px}.ab-email-capture .ab-in-app-message.ab-modal .ab-message-buttons~.ab-message-text.with-explanatory-link{max-height:513px;margin-bottom:188px}.ab-email-capture .ab-in-app-message.ab-modal .ab-image-area~.ab-message-text{max-height:385.82758621px}.ab-email-capture .ab-in-app-message.ab-modal .ab-image-area~.ab-message-text.with-explanatory-link{max-height:357.82758621px}.ab-email-capture .ab-in-app-message.ab-modal .ab-email-validation-error{margin-top:62px}.ab-email-capture .ab-in-app-message.ab-modal .ab-explanatory-link{display:block}.ab-email-capture .ab-in-app-message.ab-modal .ab-background,.ab-email-capture .ab-in-app-message.ab-modal .ab-mask{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.ab-email-capture .ab-in-app-message.ab-modal .ab-close-button{line-height:normal}.ab-email-capture .ab-in-app-message.ab-modal .ab-html-close-button{right:3px;top:-1px;font-size:34px;padding-top:0}@media (max-width:600px){.ab-iam-root.v3 .ab-in-app-message.ab-slideup{max-height:66px;margin:10px;margin-top:calc(constant(safe-area-inset-top,0) + 10px);margin-right:calc(constant(safe-area-inset-right,0) + 10px);margin-bottom:calc(constant(safe-area-inset-bottom,0) + 10px);margin-left:calc(constant(safe-area-inset-left,0) + 10px);margin-top:calc(env(safe-area-inset-top,0) + 10px);margin-right:calc(env(safe-area-inset-right,0) + 10px);margin-bottom:calc(env(safe-area-inset-bottom,0) + 10px);margin-left:calc(env(safe-area-inset-left,0) + 10px);max-width:90%;max-width:calc(100% - 40px);min-width:90%;min-width:calc(100% - 40px)}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button{display:none}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-close-button svg:not(.ab-chevron){display:none}.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable .ab-close-button{display:block;height:20px;padding:0 20px 0 18px;pointer-events:none;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:12px}.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable .ab-close-button svg.ab-chevron{display:inline}.ab-iam-root.v3 .ab-in-app-message.ab-slideup.ab-clickable .ab-message-text{border-right-width:40px}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text{max-width:100%;border-right-width:10px}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text span{max-height:66px}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-message-text.ab-with-image{max-width:80%;max-width:calc(100% - 50px - 5px - 10px - 25px)}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-image-area{width:50px}.ab-iam-root.v3 .ab-in-app-message.ab-slideup .ab-image-area img{max-width:50px;max-height:50px;width:auto}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape{-webkit-transition:top none;-moz-transition:top none;-o-transition:top none;transition:top none;top:0;right:0;bottom:0;left:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;height:auto!important}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape .ab-close-button,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.landscape .ab-close-button{margin-right:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-right:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0));margin-left:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-left:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0))}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen .ab-image-area,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape .ab-image-area,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.landscape .ab-image-area{height:50%}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen .ab-message-text,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape .ab-message-text{max-height:48%;max-height:calc(50% - 20px - 20px)}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape .ab-message-text.ab-with-buttons{margin-bottom:20px;max-height:30%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.landscape .ab-message-text.ab-with-buttons{max-height:20%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape:not(.graphic),.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen:not(.graphic){padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom,0);padding-bottom:env(safe-area-inset-bottom,0)}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape:not(.graphic) .ab-message-buttons,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen:not(.graphic) .ab-message-buttons{padding-top:0;position:relative}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.graphic,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.graphic{display:block}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.graphic .ab-image-area,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.graphic .ab-image-area{height:100%}.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.graphic .ab-message-button,.ab-iam-root.v3 .ab-in-app-message:not(.force-desktop).ab-fullscreen.landscape.graphic .ab-message-button{margin-bottom:0;margin-bottom:constant(safe-area-inset-bottom,0);margin-bottom:env(safe-area-inset-bottom,0)}}@media (max-width:480px){.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop),.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop){max-width:91%;max-width:calc(100% - 30px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop).graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop).graphic .ab-image-area img{max-width:91vw;max-width:calc(100vw - 30px)}}@media (max-height:750px){.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop),.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop){max-height:91%;max-height:calc(100% - 30px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop).graphic .ab-image-area img,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop).graphic .ab-image-area img{max-height:91vh;max-height:calc(100vh - 30px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text{max-height:65vh;max-height:calc(100vh - 30px - 60px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-image{max-height:45vh;max-height:calc(100vh - 30px - 155.17241379310346px - 40px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-icon{max-height:45vh;max-height:calc(100vh - 30px - 70px - 40px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons{max-height:50vh;max-height:calc(100vh - 30px - 93px - 40px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons.ab-with-image,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons.ab-with-image{max-height:30vh;max-height:calc(100vh - 30px - 155.17241379310346px - 93px - 20px)}.ab-email-capture .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons.ab-with-icon,.ab-iam-root.v3 .ab-in-app-message.ab-modal:not(.force-desktop) .ab-message-text.ab-with-buttons.ab-with-icon{max-height:30vh;max-height:calc(100vh - 30px - 70px - 93px - 20px)}}@media (min-width:601px){.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen .ab-image-area img{max-height:100%;max-width:100%}}@media (max-height:750px) and (min-width:601px){.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop){-webkit-transition:top none;-moz-transition:top none;-o-transition:top none;transition:top none;top:0;right:0;bottom:0;left:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;height:auto!important;width:450px}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).landscape .ab-close-button{margin-right:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-right:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0));margin-left:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-left:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0))}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop) .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).landscape .ab-image-area{height:50%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop) .ab-message-text{max-height:48%;max-height:calc(50% - 20px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop) .ab-message-text.ab-with-buttons{margin-bottom:20px;max-height:30%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).landscape .ab-message-text.ab-with-buttons{max-height:20%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop):not(.graphic){padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom,0);padding-bottom:env(safe-area-inset-bottom,0)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop):not(.graphic) .ab-message-buttons{padding-top:0;position:relative}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).graphic{display:block}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).graphic .ab-image-area{height:100%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen:not(.landscape):not(.force-desktop).graphic .ab-message-button{margin-bottom:0;margin-bottom:constant(safe-area-inset-bottom,0);margin-bottom:env(safe-area-inset-bottom,0)}}@media (max-height:480px){.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop){-webkit-transition:top none;-moz-transition:top none;-o-transition:top none;transition:top none;top:0;right:0;bottom:0;left:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;height:auto!important}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-close-button{margin-right:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-right:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0));margin-left:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-left:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0))}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-image-area{height:50%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-message-text{max-height:48%;max-height:calc(50% - 20px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-message-text.ab-with-buttons{margin-bottom:20px;max-height:30%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-message-text.ab-with-buttons{max-height:20%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop):not(.graphic){padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom,0);padding-bottom:env(safe-area-inset-bottom,0)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop):not(.graphic) .ab-message-buttons{padding-top:0;position:relative}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic{display:block}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic .ab-image-area{height:100%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic .ab-message-button{margin-bottom:0;margin-bottom:constant(safe-area-inset-bottom,0);margin-bottom:env(safe-area-inset-bottom,0)}}@media (max-width:750px){.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop){-webkit-transition:top none;-moz-transition:top none;-o-transition:top none;transition:top none;top:0;right:0;bottom:0;left:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;height:auto!important}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-close-button{margin-right:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-right:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0));margin-left:calc(constant(safe-area-inset-bottom,0) + constant(safe-area-inset-top,0));margin-left:calc(env(safe-area-inset-bottom,0) + env(safe-area-inset-top,0))}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-image-area,.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-image-area{height:50%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-message-text{max-height:48%;max-height:calc(50% - 20px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop) .ab-message-text.ab-with-buttons{margin-bottom:20px;max-height:30%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).landscape .ab-message-text.ab-with-buttons{max-height:20%;max-height:calc(50% - 93px - 20px)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop):not(.graphic){padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom,0);padding-bottom:env(safe-area-inset-bottom,0)}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop):not(.graphic) .ab-message-buttons{padding-top:0;position:relative}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic{display:block}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic .ab-image-area{height:100%}.ab-iam-root.v3 .ab-in-app-message.ab-fullscreen.landscape:not(.force-desktop).graphic .ab-message-button{margin-bottom:0;margin-bottom:constant(safe-area-inset-bottom,0);margin-bottom:env(safe-area-inset-bottom,0)}}body>.ab-feed{position:fixed;top:0;right:0;bottom:0;width:421px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}body>.ab-feed .ab-feed-body{position:absolute;top:0;left:0;right:0;border:none;border-left:1px solid #d0d0d0;padding-top:58px;min-height:100%}body>.ab-feed .ab-no-cards-message{position:absolute;width:100%;margin-left:-20px;top:40%}.ab-feed{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 1px 7px 1px rgba(66,82,113,.15);-moz-box-shadow:0 1px 7px 1px rgba(66,82,113,.15);box-shadow:0 1px 7px 1px rgba(66,82,113,.15);width:402px;background-color:#eee;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;font-size:13px;line-height:130%;letter-spacing:normal;overflow-y:auto;overflow-x:visible;z-index:1050;-webkit-overflow-scrolling:touch}.ab-feed :focus,.ab-feed:focus{outline:0}.ab-feed .ab-feed-body{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid #d0d0d0;border-top:none;padding:20px 20px 0 20px}.ab-feed.ab-effect-slide{-webkit-transform:translateX(450px);-moz-transform:translateX(450px);-ms-transform:translateX(450px);transform:translateX(450px);-webkit-transition:transform .5s ease-in-out;-moz-transition:transform .5s ease-in-out;-o-transition:transform .5s ease-in-out;transition:transform .5s ease-in-out}.ab-feed.ab-effect-slide.ab-show{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.ab-feed.ab-effect-slide.ab-hide{-webkit-transform:translateX(450px);-moz-transform:translateX(450px);-ms-transform:translateX(450px);transform:translateX(450px)}.ab-feed .ab-card{position:relative;-webkit-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-moz-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;width:100%;border:1px solid #d0d0d0;margin-bottom:20px;overflow:hidden;background-color:#fff;-webkit-transition:height .4s ease-in-out,margin .4s ease-in-out;-moz-transition:height .4s ease-in-out,margin .4s ease-in-out;-o-transition:height .4s ease-in-out,margin .4s ease-in-out;transition:height .4s ease-in-out,margin .4s ease-in-out}.ab-feed .ab-card .ab-pinned-indicator{position:absolute;right:0;top:0;margin-right:-1px;width:0;height:0;border-style:solid;border-width:0 24px 24px 0;border-color:transparent #1676d0 transparent transparent}.ab-feed .ab-card .ab-pinned-indicator .fa-star{position:absolute;right:-21px;top:2px;font-size:9px;color:#fff}.ab-feed .ab-card.ab-effect-card.ab-hide{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.ab-feed .ab-card.ab-effect-card.ab-hide.ab-swiped-left{-webkit-transform:translateX(-450px);-moz-transform:translateX(-450px);-ms-transform:translateX(-450px);transform:translateX(-450px)}.ab-feed .ab-card.ab-effect-card.ab-hide.ab-swiped-right{-webkit-transform:translateX(450px);-moz-transform:translateX(450px);-ms-transform:translateX(450px);transform:translateX(450px)}.ab-feed .ab-card.ab-effect-card.ab-hide:not(.ab-swiped-left):not(.ab-swiped-right){opacity:0}.ab-feed .ab-card .ab-close-button{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;background-color:transparent;background-repeat:no-repeat;background-origin:content-box;background-size:15px;border:none;width:15px;height:15px;-webkit-border-radius:7.5px;-moz-border-radius:7.5px;border-radius:7.5px;cursor:pointer;display:block;font-size:15px;line-height:0;padding-top:15px;padding-right:15px;padding-left:10px;padding-bottom:10px;position:absolute;right:0;top:0;text-align:center;z-index:1060;opacity:0;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s;transition:.5s}.ab-feed .ab-card .ab-close-button svg{-webkit-transition:.2s ease;-moz-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;fill:#9b9b9b}.ab-feed .ab-card .ab-close-button svg.ab-chevron{display:none}.ab-feed .ab-card .ab-close-button:active{background-color:transparent}.ab-feed .ab-card .ab-close-button:focus{background-color:transparent}.ab-feed .ab-card .ab-close-button:hover{background-color:transparent}.ab-feed .ab-card .ab-close-button:hover svg{fill-opacity:.8}.ab-feed .ab-card .ab-close-button:hover{opacity:1}.ab-feed .ab-card .ab-close-button:focus{opacity:1}.ab-feed .ab-card a{color:inherit;text-decoration:none}.ab-feed .ab-card a:hover{text-decoration:underline}.ab-feed .ab-card .ab-image-area{display:inline-block;vertical-align:top;line-height:0;overflow:hidden;width:100%;-webkit-box-sizing:initial;-moz-box-sizing:initial;box-sizing:initial}.ab-feed .ab-card .ab-image-area img{height:auto;width:100%}.ab-feed .ab-card.ab-banner .ab-card-body{display:none}.ab-feed .ab-card .ab-card-body{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;width:100%;position:relative}.ab-feed .ab-card .ab-unread-indicator{position:absolute;bottom:0;margin-right:-1px;width:100%;height:5px;background-color:#1676d0}.ab-feed .ab-card .ab-unread-indicator.read{background-color:transparent}.ab-feed .ab-card .ab-title{letter-spacing:0;margin:0;font-weight:700;display:block;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;font-size:18px;line-height:130%;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;padding:20px 25px 0 25px}.ab-feed .ab-card .ab-description{color:#545454;padding:15px 25px 20px 25px;word-wrap:break-word;white-space:pre-wrap}.ab-feed .ab-card .ab-description.ab-no-title{padding-top:20px}.ab-feed .ab-card .ab-url-area{color:#1676d0;margin-top:12px;font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif}.ab-feed .ab-card.ab-classic-card .ab-card-body{min-height:40px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.ab-feed .ab-card.ab-classic-card.with-image .ab-card-body{min-height:100px;padding-left:72px}.ab-feed .ab-card.ab-classic-card.with-image .ab-image-area{width:60px;height:60px;padding:25px 0 25px 25px;position:absolute}.ab-feed .ab-card.ab-classic-card.with-image .ab-image-area img{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;width:60px;height:60px}.ab-feed .ab-card.ab-classic-card.with-image .ab-title{background-color:transparent;font-size:16px}.ab-feed .ab-card.ab-classic-card.with-image .ab-description{padding-top:10px}.ab-feed .ab-card.ab-control-card{height:0;width:0;margin:0;border:0}.ab-feed .ab-feed-buttons-wrapper{position:relative;background-color:#282828;height:38px;-webkit-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);-moz-box-shadow:0 2px 3px 0 rgba(178,178,178,.5);box-shadow:0 2px 3px 0 rgba(178,178,178,.5);z-index:1}.ab-feed .ab-feed-buttons-wrapper .ab-close-button,.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button{cursor:pointer;color:#fff;font-size:18px;margin:10px;-webkit-transition:.2s;-moz-transition:.2s;-o-transition:.2s;transition:.2s}.ab-feed .ab-feed-buttons-wrapper .ab-close-button:hover,.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button:hover{font-size:22px}.ab-feed .ab-feed-buttons-wrapper .ab-close-button{float:right;margin-top:9px}.ab-feed .ab-feed-buttons-wrapper .ab-close-button:hover{margin-top:6px;margin-right:9px}.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button{margin-left:12px}.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button:hover{margin-top:8px;margin-left:10px}.ab-feed .ab-no-cards-message{text-align:center;margin-bottom:20px}@media (max-width:600px){body>.ab-feed{width:100%}}"
                }
                ;
                function ia(e) {
                    null == e && (e = "");
                    var t = e.split("?").slice(1).join("?");
                    if (e = {},
                    null != t) {
                        t = t.split("&");
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a].split("=");
                            "" !== n[0] && (e[n[0]] = n[1])
                        }
                    }
                    return e
                }
                function oa(e) {
                    return !(!e || (e = e.toString().toLowerCase(),
                    0 !== e.lastIndexOf("javascript:", 0) && 0 !== e.lastIndexOf("data:", 0)))
                }
                function ra(e, t, a, n, i, o, r, s, l, c, b, p, u) {
                    null != e && 0 < e.length && 0 < e.indexOf('"ab-in-app-message ab-html-message ab-email-capture"') && 0 < e.indexOf('"ab-in-app-message ab-show ab-modal ab-effect-modal"') && (l = s = !0),
                    st.call(this, e, null, null, t, a, n, i, null, null, null, o || "SWIPE", r, null, null, null, null, null, null, null, null, s, l, null, null, null, c, void 0, void 0, void 0, b, p),
                    this.messageFields = u
                }
                function sa(e, t, a, n, i, o, r, s, l, c, b, p, u, d, h, f, g, m, v, w, x, y, k, E, A, S, _, C, N) {
                    _ = _ || Rt,
                    st.call(this, e, t, null, a, n, i, o, r, s, l, c || "SWIPE", b, p, u, d, h, f, g, m, v, w, x, y, k, E, A, S, _, void 0, C, N)
                }
                function la(e, t, a, n, i, o, r, s, l, c, b, p, u, d, h, f, g, m, v, w, x, y, k) {
                    m = m || ft.wf,
                    g = g || ft.vf,
                    st.call(this, e, t || "START", a, n, i, o, r, s, l, c, b, p, u, d, null, h, f, g, m, v, w, x, void 0, void 0, void 0, void 0, void 0, void 0, void 0, y, k)
                }
                function ca(e, t) {
                    if (ta = {
                        en: {
                            NO_CARDS_MESSAGE: "We have no updates for you at this time.<br/>Please check again later.",
                            FEED_TIMEOUT_MESSAGE: "Sorry, this refresh timed out.<br/>Please try again later."
                        },
                        ar: {
                            NO_CARDS_MESSAGE: "ليس لدينا أي تحديث. يرجى التحقق مرة أخرى لاحقاً",
                            FEED_TIMEOUT_MESSAGE: "يرجى تكرار المحاولة لاحقا"
                        },
                        cs: {
                            NO_CARDS_MESSAGE: "V tuto chvíli pro vás nemáme žádné aktualizace.<br/>Zkontrolujte prosím znovu později.",
                            FEED_TIMEOUT_MESSAGE: "Prosím zkuste to znovu později."
                        },
                        da: {
                            NO_CARDS_MESSAGE: "Vi har ingen updates.<br/>Prøv venligst senere.",
                            FEED_TIMEOUT_MESSAGE: "Prøv venligst senere."
                        },
                        de: {
                            NO_CARDS_MESSAGE: "Derzeit sind keine Updates verfügbar.<br/>Bitte später noch einmal versuchen.",
                            FEED_TIMEOUT_MESSAGE: "Bitte später noch einmal versuchen."
                        },
                        es: {
                            NO_CARDS_MESSAGE: "No tenemos actualizaciones.<br/>Por favor compruébelo más tarde.",
                            FEED_TIMEOUT_MESSAGE: "Por favor inténtelo más tarde."
                        },
                        "es-mx": {
                            NO_CARDS_MESSAGE: "No tenemos ninguna actualización.<br/>Vuelva a verificar más tarde.",
                            FEED_TIMEOUT_MESSAGE: "Por favor, vuelva a intentarlo más tarde."
                        },
                        et: {
                            NO_CARDS_MESSAGE: "Uuendusi pole praegu saadaval.<br/>Proovige hiljem uuesti.",
                            FEED_TIMEOUT_MESSAGE: "Palun proovige hiljem uuesti."
                        },
                        fi: {
                            NO_CARDS_MESSAGE: "Päivityksiä ei ole saatavilla.<br/>Tarkista myöhemmin uudelleen.",
                            FEED_TIMEOUT_MESSAGE: "Yritä myöhemmin uudelleen."
                        },
                        fr: {
                            NO_CARDS_MESSAGE: "Aucune mise à jour disponible.<br/>Veuillez vérifier ultérieurement.",
                            FEED_TIMEOUT_MESSAGE: "Veuillez réessayer ultérieurement."
                        },
                        he: {
                            NO_CARDS_MESSAGE: ".אין לנו עדכונים. בבקשה בדוק שוב בקרוב",
                            FEED_TIMEOUT_MESSAGE: ".בבקשה נסה שוב בקרוב"
                        },
                        hi: {
                            NO_CARDS_MESSAGE: "हमारे पास कोई अपडेट नहीं हैं। कृपया बाद में फिर से जाँच करें.।",
                            FEED_TIMEOUT_MESSAGE: "कृपया बाद में दोबारा प्रयास करें।."
                        },
                        id: {
                            NO_CARDS_MESSAGE: "Kami tidak memiliki pembaruan. Coba lagi nanti.",
                            FEED_TIMEOUT_MESSAGE: "Coba lagi nanti."
                        },
                        it: {
                            NO_CARDS_MESSAGE: "Non ci sono aggiornamenti.<br/>Ricontrollare più tardi.",
                            FEED_TIMEOUT_MESSAGE: "Riprovare più tardi."
                        },
                        ja: {
                            NO_CARDS_MESSAGE: "アップデートはありません。<br/>後でもう一度確認してください。",
                            FEED_TIMEOUT_MESSAGE: "後でもう一度試してください。"
                        },
                        ko: {
                            NO_CARDS_MESSAGE: "업데이트가 없습니다. 다음에 다시 확인해 주십시오.",
                            FEED_TIMEOUT_MESSAGE: "나중에 다시 시도해 주십시오."
                        },
                        ms: {
                            NO_CARDS_MESSAGE: "Tiada kemas kini. Sila periksa kemudian.",
                            FEED_TIMEOUT_MESSAGE: "Sila cuba kemudian."
                        },
                        nl: {
                            NO_CARDS_MESSAGE: "Er zijn geen updates.<br/>Probeer het later opnieuw.",
                            FEED_TIMEOUT_MESSAGE: "Probeer het later opnieuw."
                        },
                        no: {
                            NO_CARDS_MESSAGE: "Vi har ingen oppdateringer.<br/>Vennligst sjekk igjen senere.",
                            FEED_TIMEOUT_MESSAGE: "Vennligst prøv igjen senere."
                        },
                        pl: {
                            NO_CARDS_MESSAGE: "Brak aktualizacji.<br/>Proszę sprawdzić ponownie później.",
                            FEED_TIMEOUT_MESSAGE: "Proszę spróbować ponownie później."
                        },
                        pt: {
                            NO_CARDS_MESSAGE: "Não temos atualizações.<br/>Por favor, verifique mais tarde.",
                            FEED_TIMEOUT_MESSAGE: "Por favor, tente mais tarde."
                        },
                        "pt-br": {
                            NO_CARDS_MESSAGE: "Não temos nenhuma atualização.<br/>Verifique novamente mais tarde.",
                            FEED_TIMEOUT_MESSAGE: "Tente novamente mais tarde."
                        },
                        ru: {
                            NO_CARDS_MESSAGE: "Обновления недоступны.<br/>Пожалуйста, проверьте снова позже.",
                            FEED_TIMEOUT_MESSAGE: "Пожалуйста, повторите попытку позже."
                        },
                        sv: {
                            NO_CARDS_MESSAGE: "Det finns inga uppdateringar.<br/>Försök igen senare.",
                            FEED_TIMEOUT_MESSAGE: "Försök igen senare."
                        },
                        th: {
                            NO_CARDS_MESSAGE: "เราไม่มีการอัพเดต กรุณาตรวจสอบภายหลัง.",
                            FEED_TIMEOUT_MESSAGE: "กรุณาลองใหม่ภายหลัง."
                        },
                        uk: {
                            NO_CARDS_MESSAGE: "Оновлення недоступні.<br/>ласка, перевірте знову пізніше.",
                            FEED_TIMEOUT_MESSAGE: "Будь ласка, спробуйте ще раз пізніше."
                        },
                        vi: {
                            NO_CARDS_MESSAGE: "Chúng tôi không có cập nhật nào.<br/>Vui lòng kiểm tra lại sau.",
                            FEED_TIMEOUT_MESSAGE: "Vui lòng thử lại sau."
                        },
                        "zh-hk": {
                            NO_CARDS_MESSAGE: "暫時沒有更新.<br/>請稍候再試.",
                            FEED_TIMEOUT_MESSAGE: "請稍候再試."
                        },
                        "zh-hans": {
                            NO_CARDS_MESSAGE: "暂时没有更新.<br/>请稍后再试.",
                            FEED_TIMEOUT_MESSAGE: "请稍候再试."
                        },
                        "zh-hant": {
                            NO_CARDS_MESSAGE: "暫時沒有更新.<br/>請稍候再試.",
                            FEED_TIMEOUT_MESSAGE: "請稍候再試."
                        },
                        "zh-tw": {
                            NO_CARDS_MESSAGE: "暫時沒有更新.<br/>請稍候再試.",
                            FEED_TIMEOUT_MESSAGE: "請稍候再試."
                        },
                        zh: {
                            NO_CARDS_MESSAGE: "暂时没有更新.<br/>请稍后再试.",
                            FEED_TIMEOUT_MESSAGE: "请稍候再试."
                        }
                    },
                    null != e && (e = e.toLowerCase()),
                    null != e && null == ta[e]) {
                        var a = e.indexOf("-");
                        0 < a && (e = e.substring(0, a))
                    }
                    null == ta[e] && (e = "Braze does not yet have a localization for language " + e + ", defaulting to English. Please contact us if you are willing and able to help us translate our SDK into this language.",
                    t ? N.error(e) : N.info(e),
                    e = "en"),
                    aa = e
                }
                function ba(e, t) {
                    this.cards = e,
                    this.lastUpdated = t
                }
                function pa(e, t) {
                    t && (t.className = t.className.replace("ab-show", "ab-hide"),
                    setTimeout((function() {
                        t && t.parentNode && t.parentNode.removeChild(t)
                    }
                    ), ga));
                    var a = t.getAttribute(ma);
                    null != a && e.P(a)
                }
                function ua(e, t, a) {
                    var n = document.createElement("div");
                    if (n.className = "ab-feed-body",
                    null == e.lastUpdated) {
                        (a = document.createElement("div")).className = "ab-no-cards-message";
                        var i = document.createElement("i");
                        i.className = "fa fa-spinner fa-spin fa-4x ab-initial-spinner",
                        a.appendChild(i),
                        n.appendChild(a)
                    } else {
                        i = !1;
                        for (var o = function(a) {
                            e.Ja(t, a)
                        }, r = function(e) {
                            t.xc(e)
                        }, s = 0; s < e.cards.length; s++) {
                            var l = e.cards[s]instanceof it;
                            !l || e instanceof xa ? (n.appendChild(e.cards[s].$(o, r, a)),
                            i = i || !l) : N.error("Received a control card for a legacy news feed. Control cards are only supported with content cards.")
                        }
                        i || ((a = document.createElement("div")).className = "ab-no-cards-message",
                        a.innerHTML = ta[aa].NO_CARDS_MESSAGE,
                        n.appendChild(a))
                    }
                    return n
                }
                function da(e, t, a) {
                    if (null != a) {
                        var n = [];
                        a = a.querySelectorAll(".ab-card"),
                        e.Zc || (e.Zc = {});
                        for (var i = 0; i < a.length; i++) {
                            var o = a[i].getAttribute("data-ab-card-id");
                            if (!e.Zc[o]) {
                                var r = a[i];
                                r = null != r && !!r.getAttribute("data-ab-had-top-impression");
                                var s = a[i]
                                  , l = r
                                  , c = s = null != s && !!s.getAttribute("data-ab-had-bottom-impression")
                                  , b = Me(a[i], !0, !1, !1)
                                  , p = Me(a[i], !1, !0, !1);
                                if (!r && b) {
                                    r = !0;
                                    var u = a[i];
                                    null != u && u.setAttribute("data-ab-had-top-impression", !0)
                                }
                                if (!s && p && (s = !0,
                                null != (u = a[i]) && u.setAttribute("data-ab-had-bottom-impression", !0)),
                                r && s && (b || p || Ve(a[i]),
                                !l || !c))
                                    for (r = 0; r < e.cards.length; r++)
                                        if (e.cards[i].id === o) {
                                            e.Zc[e.cards[i].id] = !0,
                                            n.push(e.cards[i]);
                                            break
                                        }
                            }
                        }
                        0 < n.length && e.Ka(t, n)
                    }
                }
                function ha(e, t, a) {
                    a.setAttribute("aria-busy", "true");
                    var n = a.querySelectorAll(".ab-refresh-button")[0];
                    null != n && (n.className += " fa-spin");
                    var i = (new Date).valueOf().toString();
                    a.setAttribute(va, i),
                    setTimeout((function() {
                        if (a.getAttribute(va) === i) {
                            for (var e = a.querySelectorAll(".fa-spin"), t = 0; t < e.length; t++)
                                e[t].className = e[t].className.replace(/fa-spin/g, "");
                            null != (e = a.querySelectorAll(".ab-initial-spinner")[0]) && ((t = document.createElement("span")).innerHTML = ta[aa].FEED_TIMEOUT_MESSAGE,
                            e.parentNode.appendChild(t),
                            e.parentNode.removeChild(e)),
                            "true" === a.getAttribute("aria-busy") && a.setAttribute("aria-busy", "false")
                        }
                    }
                    ), wa),
                    e.we(t)
                }
                function fa(e, t, a, n, i, o) {
                    if (T(t)) {
                        for (var r = [], s = 0; s < t.length; s++)
                            t[s]instanceof He && r.push(t[s]);
                        e.cards = r,
                        e.lastUpdated = a,
                        null != n && (n.setAttribute("aria-busy", "false"),
                        null == e.lastUpdated ? pa(i, n) : null != (t = n.querySelectorAll(".ab-feed-body")[0]) && (o = ua(e, i, o),
                        t.parentNode.replaceChild(o, t),
                        da(e, i, o.parentNode)))
                    }
                }
                h(ra, st),
                ra.prototype.Ze = function() {
                    return !1
                }
                ,
                ra.prototype.gb = function(e) {
                    if (this.Re === Gt) {
                        if (this.Ua)
                            return !1;
                        this.Ua = !0
                    }
                    return Te(this.Y, e),
                    !0
                }
                ,
                ra.prototype.$ = function(e, t, a, n, i) {
                    function o(t) {
                        var a = t.getAttribute("href")
                          , n = t.onclick;
                        return function(o) {
                            if (null == n || "function" != typeof n || !1 !== n()) {
                                var l = ia(a).abButtonId;
                                if (null != l && "" !== l || (l = t.getAttribute("id")),
                                null != a && "" !== a && 0 !== a.indexOf("#")) {
                                    var c = "blank" === (t.getAttribute("target") || "").toLowerCase().replace("_", "")
                                      , b = i || r.openTarget === _t || c;
                                    c = function() {
                                        e.Gb(r, l, a),
                                        Ge.openUri(a, o, b)
                                    }
                                    ,
                                    b ? c() : dt(r, s, c)
                                } else
                                    e.Gb(r, l, a);
                                return o.stopPropagation(),
                                !1
                            }
                        }
                    }
                    var r = this;
                    this.kc = document.activeElement;
                    var s = document.createElement("iframe");
                    return s.setAttribute("title", "Modal Message"),
                    s.onload = function() {
                        function a(e) {
                            return function() {
                                var a = arguments;
                                dt(r, s, (function() {
                                    t.display[e].apply(t.display, Array.prototype.slice.call(a))
                                }
                                ))
                            }
                        }
                        function i(e) {
                            return function() {
                                var a = t.getUser();
                                a[e].apply(a, Array.prototype.slice.call(arguments))
                            }
                        }
                        function l(e) {
                            return function() {
                                t[e].apply(t, Array.prototype.slice.call(arguments))
                            }
                        }
                        var c = null
                          , b = e.pg();
                        if (null != b) {
                            (c = document.createElement("html")).innerHTML = r.message;
                            for (var p = c.getElementsByTagName("style"), u = 0; u < p.length; u++)
                                p[u].setAttribute("nonce", b);
                            for (p = c.getElementsByTagName("script"),
                            u = 0; u < p.length; u++)
                                p[u].setAttribute("nonce", b)
                        }
                        for (s.contentWindow.focus(),
                        s.contentWindow.document.write(c ? c.innerHTML : r.message),
                        null != (c = s.contentWindow.document.getElementsByTagName("head")[0]) && ((p = document.createElement("style")).innerHTML = na.Ee,
                        null != b && p.setAttribute("nonce", b),
                        c.appendChild(p),
                        ct(r) && ((p = document.createElement("style")).innerHTML = r.css,
                        p.id = bt(r),
                        null != b && p.setAttribute("nonce", b),
                        c.appendChild(p)),
                        (b = s.contentWindow.document.createElement("base")).setAttribute("target", "_parent"),
                        c.appendChild(b)),
                        0 < (b = s.contentWindow.document.getElementsByTagName("title")).length && s.setAttribute("title", b[0].textContent),
                        b = {
                            closeMessage: function() {
                                dt(r, s)
                            },
                            logClick: function() {
                                var e = [r];
                                0 < arguments.length && e.push(arguments[0]),
                                t.logInAppMessageHtmlClick.apply(t, e)
                            },
                            display: {},
                            web: {}
                        },
                        c = ["requestImmediateDataFlush", "logCustomEvent", "logPurchase", "unregisterAppboyPushMessages"],
                        p = 0; p < c.length; p++)
                            b[c[p]] = l(c[p]);
                        c = "setFirstName setLastName setEmail setGender setDateOfBirth setCountry setHomeCity setEmailNotificationSubscriptionType setLanguage addAlias setPushNotificationSubscriptionType setPhoneNumber setCustomUserAttribute addToCustomAttributeArray removeFromCustomAttributeArray incrementCustomUserAttribute setCustomLocationAttribute".split(" ");
                        var d = {};
                        for (p = 0; p < c.length; p++)
                            d[c[p]] = i(c[p]);
                        for (b.getUser = function() {
                            return d
                        }
                        ,
                        c = ["showFeed"],
                        p = 0; p < c.length; p++)
                            b.display[c[p]] = a(c[p]);
                        for (c = ["registerAppboyPushMessages", "trackLocation"],
                        p = 0; p < c.length; p++)
                            b.web[c[p]] = l(c[p]);
                        if (s.contentWindow.appboyBridge = b,
                        r.Re !== Ht) {
                            for (c = s.contentWindow.document.getElementsByTagName("a"),
                            p = 0; p < c.length; p++)
                                c[p].onclick = o(c[p]);
                            for (c = s.contentWindow.document.getElementsByTagName("button"),
                            p = 0; p < c.length; p++)
                                c[p].onclick = o(c[p])
                        }
                        null != (c = s.contentWindow.document.body) && (lt(r) && (c.id = r.htmlId),
                        (p = document.createElement("hidden")).onclick = b.closeMessage,
                        p.className = "ab-programmatic-close-button",
                        c.appendChild(p)),
                        s.contentWindow.dispatchEvent(new CustomEvent("ab.BridgeReady")),
                        -1 !== s.className.indexOf("ab-start-hidden") && (s.className = s.className.replace("ab-start-hidden", ""),
                        n(s)),
                        document.activeElement !== s && s.focus()
                    }
                    ,
                    s.className = "ab-in-app-message ab-start-hidden ab-html-message ab-modal-interactions",
                    "iOS" === ce.ya ? ((a = document.createElement("div")).className = "ab-ios-scroll-wrapper",
                    a.appendChild(s),
                    this.jc = a) : this.jc = s
                }
                ,
                ra.prototype.na = function() {
                    return st.prototype.na.call(this) + " ab-effect-html"
                }
                ,
                V.HtmlMessage = ra,
                h(sa, st),
                sa.prototype.$ = function(e, t, a, n, i) {
                    return this.kc = document.activeElement,
                    (t = st.prototype.$.call(this, e, a, n, i)).className += " ab-modal ab-centered",
                    Qt(this, e, a, t, i),
                    Zt(t),
                    $t(this.ad, t),
                    t
                }
                ,
                sa.prototype.na = function() {
                    return st.prototype.na.call(this) + " ab-effect-modal"
                }
                ,
                sa.DefaultTextAlignment = Mt,
                V.ModalMessage = sa,
                h(la, st),
                (e = la.prototype).cb = function() {
                    return !1
                }
                ,
                e.$ = function(e, t, a, n, i) {
                    var o = st.prototype.$.call(this, e, a, n, i);
                    o.className += " ab-slideup";
                    var r = o.getElementsByClassName("ab-close-button")[0];
                    if (null != r && ((e = Re("0 0 11.38 19.44", "M11.38 9.72l-9.33 9.72L0 17.3l7.27-7.58L0 2.14 2.05 0l9.33 9.72z", ct(this) ? void 0 : rt(this.closeButtonColor))).setAttribute("class", "ab-chevron"),
                    r.appendChild(e)),
                    Pe(o, Le, (function(e) {
                        o.className += " ab-swiped-left",
                        r.onclick(e)
                    }
                    )),
                    Pe(o, Fe, (function(e) {
                        o.className += " ab-swiped-right",
                        r.onclick(e)
                    }
                    )),
                    "TOP" === this.slideFrom) {
                        e = Ue;
                        var s = " ab-swiped-up"
                    } else
                        e = Be,
                        s = " ab-swiped-down";
                    return Pe(o, e, (function(e) {
                        o.className += s,
                        r.onclick(e)
                    }
                    )),
                    o
                }
                ,
                e.Be = function() {
                    var e = document.createElement("span");
                    return e.appendChild(document.createTextNode(this.message)),
                    e
                }
                ,
                e.Ac = function(e) {
                    var t = e.getElementsByClassName("ab-in-app-message")[0];
                    Me(t, !0, !0) || ("TOP" === this.slideFrom ? t.style.top = "0px" : t.style.bottom = "0px"),
                    st.prototype.Ac.call(this, e)
                }
                ,
                e.na = function() {
                    return st.prototype.na.call(this) + " ab-effect-slide"
                }
                ,
                la.DefaultTextAlignment = "START",
                V.SlideUpMessage = la,
                (e = ba.prototype).Ke = function() {
                    for (var e = 0, t = 0; t < this.cards.length; t++)
                        this.cards[t].viewed || e++;
                    return e
                }
                ,
                e.Ka = function(e, t) {
                    e.Ka(t)
                }
                ,
                e.Ja = function(e, t) {
                    e.Ja(t)
                }
                ,
                e.we = function(e) {
                    e.Dc()
                }
                ,
                e.$ = function(e, t) {
                    function a(t) {
                        ha(i, e, o),
                        t.stopPropagation()
                    }
                    function n(t) {
                        pa(e, o),
                        t.stopPropagation()
                    }
                    var i = this
                      , o = document.createElement("div");
                    o.className = "ab-feed ab-hide ab-effect-slide",
                    o.setAttribute("tabindex", "-1"),
                    o.setAttribute("aria-label", "Feed"),
                    o.setAttribute("role", "feed");
                    var r = document.createElement("div");
                    r.className = "ab-feed-buttons-wrapper",
                    o.appendChild(r);
                    var s = document.createElement("i");
                    s.className = "fa fa-times ab-close-button",
                    s.setAttribute("aria-label", "Close Feed"),
                    s.setAttribute("tabindex", "0"),
                    s.setAttribute("role", "button"),
                    s.addEventListener("keydown", (function(e) {
                        32 !== e.keyCode && 13 !== e.keyCode || n(e)
                    }
                    )),
                    s.onclick = n;
                    var l = document.createElement("i");
                    return l.className = "fa fa-refresh ab-refresh-button",
                    null == this.lastUpdated && (l.className += " fa-spin"),
                    l.setAttribute("aria-label", "Refresh Feed"),
                    l.setAttribute("tabindex", "0"),
                    l.setAttribute("role", "button"),
                    l.addEventListener("keydown", (function(e) {
                        32 !== e.keyCode && 13 !== e.keyCode || a(e)
                    }
                    )),
                    l.onclick = a,
                    r.appendChild(l),
                    r.appendChild(s),
                    o.appendChild(ua(this, e, t)),
                    o.onscroll = function() {
                        da(i, e, o)
                    }
                    ,
                    o
                }
                ;
                var ga = 500
                  , ma = "data-update-subscription-id"
                  , va = "data-last-requested-refresh"
                  , wa = 1e4;
                function xa(e, t) {
                    ba.call(this, e, t)
                }
                function ya() {
                    this.h = !1,
                    this.j = []
                }
                function ka(e) {
                    this.$a = e
                }
                function Ea(e, t, a, n) {
                    this.Pe = e,
                    this.Cc = t,
                    this.lb = a,
                    this.I = n,
                    this.Cc === Ra && this.lb !== Ca && this.lb !== Da && this.lb !== Ma && this.lb !== za && (this.I = U(this.I))
                }
                V.Feed = ba,
                V.Feed.prototype.getUnreadCardCount = ba.prototype.Ke,
                h(xa, ba),
                xa.prototype.qg = function() {
                    return ba.prototype.Ke.call(this)
                }
                ,
                xa.prototype.Ka = function(e, t) {
                    e.Ka(t, !0)
                }
                ,
                xa.prototype.Ja = function(e, t) {
                    e.Ja(t, !0)
                }
                ,
                xa.prototype.we = function(e) {
                    e.La()
                }
                ,
                V.ContentCards = xa,
                V.ContentCards.prototype.getUnviewedCardCount = xa.prototype.qg,
                ka.prototype.ea = function(e) {
                    return null == this.$a || this.$a === e[0]
                }
                ,
                ka.prototype.C = function() {
                    return this.$a
                }
                ,
                Ea.prototype.ea = function(e) {
                    var t = null;
                    switch (null != e && (t = e[this.Pe]),
                    this.lb) {
                    case Aa:
                        return null != t && t.valueOf() === this.I.valueOf();
                    case Sa:
                        return null == t || t.valueOf() !== this.I.valueOf();
                    case _a:
                        return typeof t == typeof this.I && t > this.I;
                    case Ca:
                        return this.Cc === Ra ? null != t && O(t) && ((new Date).valueOf() - t.valueOf()) / 1e3 <= this.I : typeof t == typeof this.I && t >= this.I;
                    case Na:
                        return typeof t == typeof this.I && t < this.I;
                    case Da:
                        return this.Cc === Ra ? null != t && O(t) && ((new Date).valueOf() - t.valueOf()) / 1e3 >= this.I : typeof t == typeof this.I && t <= this.I;
                    case Ta:
                        return null != t && "string" == typeof t && typeof t == typeof this.I && null != t.match(this.I);
                    case Oa:
                        return null != t;
                    case Ia:
                        return null == t;
                    case Ma:
                        return null != t && O(t) && (t.valueOf() - (new Date).valueOf()) / 1e3 < this.I;
                    case za:
                        return null != t && O(t) && (t.valueOf() - (new Date).valueOf()) / 1e3 > this.I;
                    case Pa:
                        return null == t || typeof t != typeof this.I || "string" != typeof t || null == t.match(this.I)
                    }
                    return !1
                }
                ,
                Ea.prototype.C = function() {
                    var e = this.I;
                    return O(this.I) && (e = R(e.valueOf())),
                    {
                        k: this.Pe,
                        t: this.Cc,
                        c: this.lb,
                        v: e
                    }
                }
                ;
                var Aa = 1
                  , Sa = 2
                  , _a = 3
                  , Ca = 4
                  , Na = 5
                  , Da = 6
                  , Ta = 10
                  , Oa = 11
                  , Ia = 12
                  , Ma = 15
                  , za = 16
                  , Pa = 17
                  , Ra = "date";
                function Ua(e) {
                    this.filters = e
                }
                function Ba(e) {
                    if (null == e || !T(e))
                        return null;
                    for (var t = [], a = 0; a < e.length; a++) {
                        for (var n = [], i = e[a], o = 0; o < i.length; o++) {
                            var r = i[o];
                            n.push(new Ea(r.property_key,r.property_type,r.comparator,r.property_value))
                        }
                        t.push(n)
                    }
                    return new Ua(t)
                }
                function La(e) {
                    for (var t = [], a = 0; a < e.length; a++) {
                        for (var n = [], i = e[a], o = 0; o < i.length; o++) {
                            var r = i[o];
                            n.push(new Ea(r.k,r.t,r.c,r.v))
                        }
                        t.push(n)
                    }
                    return new Ua(t)
                }
                function Fa(e, t) {
                    this.$a = e,
                    this.fb = t
                }
                function ja(e, t) {
                    this.Xa = e,
                    this.zb = t
                }
                function Ga(e) {
                    this.eb = e
                }
                function Ha(e, t) {
                    this.eb = e,
                    this.fb = t
                }
                function Wa(e) {
                    this.Xa = e
                }
                Ua.prototype.ea = function(e) {
                    for (var t = !0, a = 0; a < this.filters.length; a++) {
                        for (var n = this.filters[a], i = !1, o = 0; o < n.length; o++)
                            if (n[o].ea(e)) {
                                i = !0;
                                break
                            }
                        if (!i) {
                            t = !1;
                            break
                        }
                    }
                    return t
                }
                ,
                Ua.prototype.C = function() {
                    for (var e = [], t = 0; t < this.filters.length; t++) {
                        for (var a = this.filters[t], n = [], i = 0; i < a.length; i++)
                            n.push(a[i].C());
                        e.push(n)
                    }
                    return e
                }
                ,
                Fa.prototype.ea = function(e) {
                    if (null == this.$a || null == this.fb)
                        return !1;
                    var t = e[1];
                    return e[0] === this.$a && this.fb.ea(t)
                }
                ,
                Fa.prototype.C = function() {
                    return {
                        e: this.$a,
                        pf: this.fb.C()
                    }
                }
                ,
                ja.prototype.ea = function(e) {
                    if (null == this.Xa)
                        return !1;
                    var t = Ya(e[0], this.Xa);
                    if (!t)
                        return !1;
                    var a = null == this.zb || 0 === this.zb.length;
                    if (null != this.zb)
                        for (var n = 0; n < this.zb.length; n++)
                            if (this.zb[n] === e[1]) {
                                a = !0;
                                break
                            }
                    return t && a
                }
                ,
                ja.prototype.C = function() {
                    return this.Xa
                }
                ,
                Ga.prototype.ea = function(e) {
                    return null == this.eb || e[0] === this.eb
                }
                ,
                Ga.prototype.C = function() {
                    return this.eb
                }
                ,
                Ha.prototype.ea = function(e) {
                    if (null == this.eb || null == this.fb)
                        return !1;
                    var t = e[1];
                    return e[0] === this.eb && this.fb.ea(t)
                }
                ,
                Ha.prototype.C = function() {
                    return {
                        id: this.eb,
                        pf: this.fb.C()
                    }
                }
                ,
                Wa.prototype.ea = function(e) {
                    return null == this.Xa || Ya(e[0], this.Xa)
                }
                ,
                Wa.prototype.C = function() {
                    return this.Xa
                }
                ;
                var Ka = {
                    OPEN: "open",
                    Sc: "purchase",
                    Vd: "push_click",
                    Gc: "custom_event",
                    Wb: "iam_click",
                    X: "test"
                };
                function Xa(e, t) {
                    this.type = e,
                    this.data = t
                }
                function qa(e, t, a) {
                    return rn[e.type] === t && (null == e.data || e.data.ea(a))
                }
                function Ya(e, t) {
                    var a = null;
                    try {
                        a = window.atob(e)
                    } catch (t) {
                        return N.info("Failed to unencode analytics id " + e + ": " + t.message),
                        !1
                    }
                    return t === a.split("_")[0]
                }
                function Va(e) {
                    var t = e.type;
                    switch (t) {
                    case Za:
                        var a = null;
                        break;
                    case $a:
                        a = new Ga((e = e.data) ? e.product_id : null);
                        break;
                    case Qa:
                        a = new Ha((e = e.data) ? e.product_id : null,e ? Ba(e.property_filters) : null);
                        break;
                    case en:
                        a = new Wa((e = e.data) ? e.campaign_id : null);
                        break;
                    case tn:
                        a = new ka((e = e.data) ? e.event_name : null);
                        break;
                    case an:
                        a = new Fa((e = e.data) ? e.event_name : null,e ? Ba(e.property_filters) : null);
                        break;
                    case nn:
                        a = new ja((e = e.data) ? e.id : null,e ? e.buttons : null);
                        break;
                    case on:
                        a = null
                    }
                    return new Xa(t,a)
                }
                function Ja(e) {
                    switch (e.t) {
                    case Za:
                        var t = null;
                        break;
                    case $a:
                        t = new Ga(e.d);
                        break;
                    case Qa:
                        t = new Ha((t = e.d || {}).id,La(t.pf || []));
                        break;
                    case en:
                        t = new Wa(e.d);
                        break;
                    case tn:
                        t = new ka(e.d);
                        break;
                    case an:
                        t = new Fa((t = e.d || {}).e,La(t.pf || []));
                        break;
                    case nn:
                        t = new ja(e.d);
                        break;
                    case on:
                        t = null
                    }
                    return new Xa(e.t,t)
                }
                Xa.prototype.C = function() {
                    return {
                        t: this.type,
                        d: this.data ? this.data.C() : null
                    }
                }
                ;
                var Za = "open"
                  , $a = "purchase"
                  , Qa = "purchase_property"
                  , en = "push_click"
                  , tn = "custom_event"
                  , an = "custom_event_property"
                  , nn = "iam_click"
                  , on = "test"
                  , rn = {};
                function sn(e, t, a, n, i, o, r, s, l, c, b, p) {
                    this.id = e,
                    this.mb = t || [],
                    void 0 === a && (a = null),
                    this.startTime = a,
                    void 0 === n && (n = null),
                    this.endTime = n,
                    this.priority = i || 0,
                    this.type = o,
                    this.Za = s || 0,
                    null == c && (c = 1e3 * (this.Za + 30)),
                    this.Ma = c,
                    this.data = r,
                    null == l && (l = bn),
                    this.Ib = l,
                    this.Oe = b,
                    this.Ca = p || null
                }
                function ln(e, t) {
                    var a = (new Date).valueOf() - t;
                    return (t = null == t || isNaN(a) || null == e.Ma || a < e.Ma) || N.info("Trigger action " + e.type + " is no longer eligible for display - fired " + a + "ms ago and has a timeout of " + e.Ma + "ms"),
                    !t
                }
                function cn(e) {
                    for (var t = [], a = 0; a < e.c.length; a++)
                        t.push(Ja(e.c[a]));
                    return new sn(e.i,t,L(e.s),L(e.e),e.p,e.t,e.da,e.d,e.r,e.tm,e.ss,e.ld)
                }
                rn[Za] = Ka.OPEN,
                rn[$a] = Ka.Sc,
                rn[Qa] = Ka.Sc,
                rn[en] = Ka.Vd,
                rn[tn] = Ka.Gc,
                rn[an] = Ka.Gc,
                rn[nn] = Ka.Wb,
                rn[on] = Ka.X,
                sn.prototype.C = function() {
                    for (var e = [], t = 0; t < this.mb.length; t++)
                        e.push(this.mb[t].C());
                    return {
                        i: this.id,
                        c: e,
                        s: this.startTime,
                        e: this.endTime,
                        p: this.priority,
                        t: this.type,
                        da: this.data,
                        d: this.Za,
                        r: this.Ib,
                        tm: this.Ma,
                        ss: this.Oe,
                        ld: this.Ca
                    }
                }
                ;
                var bn = -1
                  , pn = {
                    Jc: "inapp",
                    ae: "templated_iam"
                };
                function un(e, t) {
                    return e = Math.ceil(e),
                    t = Math.floor(t),
                    Math.floor(Math.random() * (t - e + 1)) + e
                }
                function dn(e) {
                    var t, a = !1;
                    try {
                        if (window.XMLHttpRequest && (t = new XMLHttpRequest) && void 0 !== t.withCredentials || ("undefined" != typeof XDomainRequest ? (t = new XDomainRequest,
                        a = t.async = !0) : N.error("This browser does not have any supported ajax options!")),
                        null != t) {
                            var n = function() {
                                "function" == typeof e.error && e.error(t.status),
                                "function" == typeof e.pc && e.pc(!1)
                            };
                            t.onload = function() {
                                if (a)
                                    var i = !0;
                                else {
                                    if (4 !== t.readyState)
                                        return;
                                    i = 200 <= t.status && 300 > t.status || 304 === t.status
                                }
                                if (i) {
                                    if ("function" == typeof e.h) {
                                        try {
                                            var o = JSON.parse(t.responseText)
                                        } catch (a) {
                                            e.h({
                                                error: "" === t.responseText ? "empty_response" : "invalid_json_response",
                                                response: t.responseText
                                            })
                                        }
                                        o && e.h(o)
                                    }
                                    "function" == typeof e.pc && e.pc(!0)
                                } else
                                    n()
                            }
                            ,
                            t.onerror = function() {
                                n()
                            }
                            ,
                            t.ontimeout = function() {
                                n()
                            }
                            ;
                            var i = JSON.stringify(e.data);
                            if (a)
                                t.onprogress = function() {}
                                ,
                                t.open("post", e.url);
                            else {
                                t.open("POST", e.url, !0),
                                t.setRequestHeader("Content-type", "application/json"),
                                t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                                for (var o = e.headers || [], r = 0; r < o.length; r++)
                                    t.setRequestHeader(o[r][0], o[r][1])
                            }
                            t.send(i)
                        }
                    } catch (e) {
                        N.error("Network request error: " + e.message)
                    }
                }
                function hn(e, t, a, n, i, o, r, s, l, c, b) {
                    this.aa = e,
                    this.Wf = t,
                    this.se = a,
                    this.Rf = n,
                    this.wb = i,
                    this.jb = 0,
                    this.hc = c.T.Ie,
                    this.me = null,
                    this.F = o,
                    this.dc = r,
                    this.f = s,
                    this.K = l,
                    this.b = c,
                    this.Pf = b,
                    this.cd = new Ne,
                    this.Of = 1e3,
                    this.Nf = 6e4
                }
                function fn(e, t) {
                    var a = Rn(e.dc)
                      , n = a.qc();
                    return P(fe(e.b, ye.Hc), n) || (t.device = n),
                    t.api_key = e.aa,
                    t.time = R((new Date).valueOf(), !0),
                    t.sdk_version = e.Wf,
                    e.se && (t.sdk_flavor = e.se),
                    t.app_version = e.Rf,
                    t.device_id = a.id,
                    t
                }
                function gn(e, t, a) {
                    if (a.error) {
                        var n = a.error;
                        switch (n) {
                        case "empty_response":
                            return ue(e.b, [new F(e.f.B(),S.Kc,(new Date).valueOf(),e.F.qd,{
                                e: "Received successful response with empty body."
                            })]),
                            N.info("Received successful response with empty body."),
                            !1;
                        case "invalid_json_response":
                            return ue(e.b, [new F(e.f.B(),S.Kc,(new Date).valueOf(),e.F.qd,{
                                e: "Received successful response with invalid JSON: " + a.response
                            })]),
                            N.info("Received successful response with invalid JSON"),
                            !1;
                        case "invalid_api_key":
                            n = 'The API key "' + t.api_key + '" is invalid for the baseUrl ' + e.wb;
                            break;
                        case "blacklisted":
                            n = "Sorry, we are not currently accepting your requests. If you think this is in error, please contact us.";
                            break;
                        case "no_device_identifier":
                            n = "No device identifier. Please contact support@braze.com"
                        }
                        return N.error("Backend error: " + n),
                        !1
                    }
                    return !0
                }
                function mn(e, t, a, n, i, o, r) {
                    null == n && (n = !0),
                    n && Sn(e);
                    var s = de(e.b)
                      , l = we(e.b)
                      , c = ai(e.F);
                    if (0 < s.length)
                        for (var b = 0; b < s.length; b++)
                            s[b].type === S.$d && (c = !0);
                    var p = a || c;
                    if (!n || 0 !== s.length || 0 !== l.length || t || p) {
                        var u = xn(e, t, p);
                        if (0 < s.length) {
                            for (t = [],
                            a = 0; a < s.length; a++)
                                t.push(s[a].qc());
                            u.events = t
                        }
                        0 < l.length && (u.attributes = l),
                        u = fn(e, u);
                        var d = yn(e, u);
                        p && e.jb++;
                        var h = function() {
                            dn({
                                url: e.wb + "/data/",
                                data: u,
                                headers: d,
                                h: function(t) {
                                    if (p && (e.jb = Math.max(e.jb - 1, 0)),
                                    gn(e, u, t)) {
                                        var a = e.K;
                                        if (null != t && null != t.config) {
                                            var n = t.config;
                                            if (n.time > Jn(a).Fb) {
                                                var o = !1;
                                                null != (n = new Yn(n.time,n.events_blacklist,n.attributes_blacklist,n.purchases_blacklist,n.messaging_session_timeout,n.vapid_public_key,n.content_cards)).qa && Jn(a).qa !== n.qa && (o = !0);
                                                var r = !1;
                                                null != n.Ab.enabled && (Jn(a).Ab.enabled || !1) !== n.Ab.enabled && (r = !0),
                                                a.lc = n,
                                                he(a.b, ye.Zd, n.C()),
                                                o && Te(a.hd),
                                                r && Te(a.ce)
                                            }
                                        }
                                        null != u.respond_with && u.respond_with.user_id != e.f.B() || (null != u.device && he(e.b, ye.Hc, u.device),
                                        e.Pf(t),
                                        "function" == typeof i && i())
                                    }
                                },
                                error: function() {
                                    p && (e.jb = Math.max(e.jb - 1, 0)),
                                    ue(e.b, s);
                                    for (var t = 0; t < l.length; t++)
                                        me(e.b, l[t]);
                                    "function" == typeof o && o()
                                },
                                pc: function(t) {
                                    "function" == typeof r && r(t),
                                    n && (t ? An(e) : ((null == (t = e.me) || t < 1e3 * e.hc) && (t = 1e3 * e.hc),
                                    An(e, Math.min(3e5, un(1e3 * e.hc, 3 * t)))))
                                }
                            })
                        };
                        (t = u.device) && t.os_version instanceof Promise ? t.os_version.then((function(e) {
                            u.device.os_version = e,
                            h()
                        }
                        )) : h(),
                        c && (N.info("Invoking new session subscriptions"),
                        Te(e.cd))
                    } else
                        An(e),
                        "function" == typeof r && r(!0)
                }
                function vn(e, t) {
                    var a = "HTTP error ";
                    null != e && (a += e + " "),
                    N.error(a + t)
                }
                function wn(e, t, a, n, i) {
                    var o = xn(e, !1, !1);
                    (o = fn(e, o)).template = {
                        trigger_id: t.Na,
                        trigger_event_type: a
                    },
                    null != n && (o.template.data = n.qc());
                    var r = yn(e, o);
                    dn({
                        url: e.wb + "/template/",
                        data: o,
                        headers: r,
                        h: function(a) {
                            gn(e, o, a) ? null == a || null == a.templated_message ? e.M(t.Na, gt.tb) : (a = a.templated_message).type !== pn.Jc || null == (a = pt(a.data)) ? e.M(t.Na, gt.vb) : "function" == typeof t.af ? t.af(a) : e.M(t.Na, gt.tb) : (e.M(t.Na, gt.tb),
                            "function" == typeof t.$e && t.$e())
                        },
                        error: function(o) {
                            var r = "getting user personalization for message " + t.Na;
                            if ((new Date).valueOf() - t.tc > t.Ma)
                                e.M(t.Na, gt.tb);
                            else {
                                var s = Math.min(t.Ma, e.Nf)
                                  , l = e.Of;
                                null == i && (i = l);
                                var c = Math.min(s, un(l, 3 * i));
                                r += ". Retrying in " + c + "ms",
                                setTimeout((function() {
                                    wn(e, t, a, n, c)
                                }
                                ), c)
                            }
                            vn(o, r)
                        }
                    })
                }
                function xn(e, t, a) {
                    var n = {};
                    return t && (n.feed = !0),
                    a && (n.triggers = !0),
                    null != (t = e.f.B()) && (n.user_id = t),
                    n.config = {
                        config_time: Jn(e.K).Fb
                    },
                    {
                        respond_with: n
                    }
                }
                function yn(e, t) {
                    e = [["X-Braze-Api-Key", e.aa]];
                    var a = !1;
                    return null != t.respond_with && t.respond_with.triggers && (e.push(["X-Braze-TriggersRequest", "true"]),
                    a = !0),
                    null != t.respond_with && t.respond_with.feed && (e.push(["X-Braze-FeedRequest", "true"]),
                    a = !0),
                    a && e.push(["X-Braze-DataRequest", "true"]),
                    e
                }
                function kn(e) {
                    if (null == e.campaignId && null == e.cardId && null == e.triggerId)
                        return N.info("The in-app message has no analytics id. Not logging event to Braze servers."),
                        null;
                    var t = {};
                    return null != e.cardId && (t.card_ids = [e.cardId]),
                    null != e.campaignId && (t.campaign_ids = [e.campaignId]),
                    null != e.triggerId && (t.trigger_ids = [e.triggerId]),
                    t
                }
                function En(e) {
                    for (var t = null, a = 0; a < e.length; a++)
                        null != e[a].id && "" !== e[a].id && ((t = t || {}).ids = t.ids || [],
                        t.ids.push(e[a].id));
                    return t
                }
                function An(e, t) {
                    e.fe || (null == t && (t = 1e3 * e.hc),
                    Sn(e),
                    e.ic = setTimeout((function() {
                        if (document.hidden) {
                            var t = function() {
                                document.hidden || (document.removeEventListener("visibilitychange", t, !1),
                                mn(e))
                            };
                            document.addEventListener("visibilitychange", t, !1)
                        } else
                            mn(e)
                    }
                    ), t),
                    e.me = t)
                }
                function Sn(e) {
                    null != e.ic && (clearTimeout(e.ic),
                    e.ic = null)
                }
                function _n(e, t) {
                    De(e.cd, t)
                }
                function Cn(e, t, a) {
                    ni(e.F),
                    N.info("Requesting explicit trigger refresh."),
                    mn(e, null, !0, null, t, a)
                }
                function Nn(e, t, a, n) {
                    var i = new ya
                      , o = ni(e.F);
                    return Qn(e.K, a) ? (N.info('Custom Attribute "' + a + '" is blacklisted, ignoring.'),
                    i) : (i.j.push(new F(e.f.B(),t,(new Date).valueOf(),o,{
                        key: a,
                        value: n
                    })),
                    i.h = ue(e.b, i.j),
                    i)
                }
                function Dn(e, t) {
                    var a = new ya
                      , n = ni(e.F);
                    return a.j.push(new F(e.f.B(),S.Cf,(new Date).valueOf(),n,{
                        n: t
                    })),
                    a.h = ue(e.b, a.j),
                    a
                }
                function Tn(e, t, a) {
                    var n = ni(e.F);
                    return new F(e.f.B(),S.Kf,t,n,{
                        cid: a
                    })
                }
                function On(e) {
                    var t = C.Ra;
                    new m(t).setItem(t.O.tf, 1, {
                        baseUrl: e.wb,
                        data: {
                            api_key: e.aa,
                            device_id: Rn(e.dc).id
                        },
                        userId: e.f.B()
                    })
                }
                (e = hn.prototype).La = function(e, t, a) {
                    var n = this
                      , i = fn(this, {});
                    i.last_full_sync_at = e,
                    i.last_card_updated_at = t,
                    null != (e = this.f.B()) && (i.user_id = e),
                    dn({
                        url: this.wb + "/content_cards/sync",
                        data: i,
                        headers: [["X-Braze-Api-Key", this.aa], ["X-Braze-DataRequest", "true"], ["X-Braze-ContentCardsRequest", "true"]],
                        h: function(e) {
                            gn(n, i, e) && a(e)
                        },
                        error: function(e) {
                            vn(e, "retrieving content cards")
                        }
                    })
                }
                ,
                e.td = function() {
                    this.fe = !1,
                    An(this)
                }
                ,
                e.Cb = function() {
                    this.cd.N(),
                    Sn(this),
                    this.fe = !0,
                    mn(this, null, null, !1),
                    this.ic = null
                }
                ,
                e.Bc = function(e, t) {
                    var a = this
                      , n = this.F.qd();
                    if (n = n !== ni(this.F),
                    mn(this, null, !1, null, null, null, t),
                    On(this),
                    n && null != e && (e.Eb() || e.Ia())) {
                        var i = function() {
                            e.Tf ? N.info("Push token maintenance is disabled, not refreshing token for backend.") : e.subscribe()
                        };
                        y(new m(t = C.Ra), t.O.Tc, (function(e, t) {
                            t && i()
                        }
                        ), (function() {
                            var e = fe(a.b, ye.bc);
                            (null == e || e) && i()
                        }
                        ))
                    }
                }
                ,
                e.Ya = function(e, t, a, n) {
                    var i = this.f.B();
                    if (i !== e) {
                        var o = this.F
                          , r = W(o.b.la.R(xe.Sa));
                        if (null != r && (o.b.la.remove(xe.Sa),
                        null == (r = ti(o, (new Date).valueOf(), r)) || ue(o.b, [r])),
                        r = null == (o = this.f).B(),
                        pe(o.b, xe.Xc, new H(e)),
                        r) {
                            if (null != (r = (o = o.b).T.R(ye.Oa))) {
                                var s = ye.Kd
                                  , l = r[s];
                                null != l && (r[s] = void 0,
                                o.T.store(ye.Oa, r),
                                l.user_id = e,
                                me(o, l))
                            }
                            if (r = null,
                            null != (s = W(o.la.R(xe.Sa))) && (r = s.ga),
                            null != (s = de(o)))
                                for (l = 0; l < s.length; l++) {
                                    var c = s[l];
                                    null == c.Nb && c.sessionId == r && (c.Nb = e),
                                    null == c || ue(o, [c])
                                }
                        }
                        for (o = 0; o < t.length; o++)
                            t[o].Ya(null == i);
                        null != i && ge(this.b, ye.rb),
                        ge(this.b, ye.Hc),
                        this.Bc(n, a),
                        N.info('Changed user to "' + e + '".')
                    } else
                        "function" == typeof a ? (N.info('Current user is already "' + e + '". Executing networkCallCompleteCallback.'),
                        a()) : N.info('Current user is already "' + e + '". Doing nothing.')
                }
                ,
                e.pb = function() {
                    return new J(this.f,this)
                }
                ,
                e.Kb = function(e) {
                    Sn(this),
                    ni(this.F),
                    mn(this, null, null, null, null, null, e)
                }
                ,
                e.Dc = function() {
                    ni(this.F),
                    mn(this, !0)
                }
                ,
                e.vd = function(e, t) {
                    var a = new ya
                      , n = ni(this.F);
                    return -1 !== Jn(this.K).He.indexOf(e) ? (N.info('Custom Event "' + e + '" is blacklisted, ignoring.'),
                    a) : (a.j.push(new F(this.f.B(),S.CustomEvent,(new Date).valueOf(),n,{
                        n: e,
                        p: t
                    })),
                    a.h = ue(this.b, a.j),
                    a)
                }
                ,
                e.wd = function(e, t, a, n, i) {
                    var o = new ya
                      , r = ni(this.F);
                    return -1 !== Jn(this.K).Qe.indexOf(e) ? (N.info('Purchase "' + e + '" is blacklisted, ignoring.'),
                    o) : (o.j.push(new F(this.f.B(),S.Bf,(new Date).valueOf(),r,{
                        pid: e,
                        c: a,
                        p: t,
                        q: n,
                        pr: i
                    })),
                    o.h = ue(this.b, o.j),
                    o)
                }
                ,
                e.Ec = function(e, t, a, n, i, o) {
                    var r = new ya
                      , s = ni(this.F);
                    return t = {
                        latitude: t,
                        longitude: a
                    },
                    null != n && (t.altitude = n),
                    null != i && (t.ll_accuracy = i),
                    null != o && (t.alt_accuracy = o),
                    r.j.push(new F(e,S.If,(new Date).valueOf(),s,t)),
                    r.h = ue(this.b, r.j),
                    r
                }
                ,
                e.Hb = function(e) {
                    var t = new ya
                      , a = ni(this.F);
                    if (e instanceof Jt)
                        t.j.push(new F(this.f.B(),S.mf,(new Date).valueOf(),a,{
                            trigger_ids: [e.triggerId]
                        }));
                    else {
                        if (!e.Ad())
                            return N.info("This in-app message has already received an impression. Ignoring analytics event."),
                            t;
                        if (null == (e = kn(e)))
                            return t;
                        t.j.push(new F(this.f.B(),S.Af,(new Date).valueOf(),a,e))
                    }
                    return t.h = ue(this.b, t.j),
                    t
                }
                ,
                e.zc = function(e) {
                    var t = new ya
                      , a = ni(this.F);
                    return e.gb() ? (null == (e = kn(e)) || (t.j.push(new F(this.f.B(),S.Sd,(new Date).valueOf(),a,e)),
                    t.h = ue(this.b, t.j)),
                    t) : (N.info("This in-app message has already received a click. Ignoring analytics event."),
                    t)
                }
                ,
                e.yc = function(e, t) {
                    var a = new ya
                      , n = ni(this.F);
                    return e.gb() ? null == (t = kn(t)) ? a : e.id === Vt ? (N.info("This in-app message button does not have a tracking id. Not logging event to Braze servers."),
                    a) : (null != e.id && (t.bid = e.id),
                    a.j.push(new F(this.f.B(),S.Rd,(new Date).valueOf(),n,t)),
                    a.h = ue(this.b, a.j),
                    a) : (N.info("This in-app message button has already received a click. Ignoring analytics event."),
                    a)
                }
                ,
                e.Gb = function(e, t, a) {
                    var n = new ya
                      , i = ni(this.F);
                    return e.gb(a) ? (null == (e = kn(e)) || (a = S.Sd,
                    null != t && (e.bid = t,
                    a = S.Rd),
                    n.j.push(new F(this.f.B(),a,(new Date).valueOf(),i,e)),
                    n.h = ue(this.b, n.j)),
                    n) : (N.info("This in-app message has already received a click. Ignoring analytics event."),
                    n)
                }
                ,
                e.M = function(e, t) {
                    var a = new ya
                      , n = ni(this.F);
                    return e = {
                        trigger_ids: [e],
                        error_code: t
                    },
                    a.j.push(new F(this.f.B(),S.zf,(new Date).valueOf(),n,e)),
                    a.h = ue(this.b, a.j),
                    a
                }
                ,
                e.Ka = function(e, t) {
                    for (var a = new ya, n = ni(this.F), i = [], o = [], r = t ? fe(this.b, ye.ib) || {} : fe(this.b, ye.rb) || {}, s = 0; s < e.length; s++)
                        e[s].Ad(),
                        e[s]instanceof it ? o.push(e[s]) : i.push(e[s]),
                        r[e[s].id] = !0;
                    return e = En(i),
                    o = En(o),
                    null == e && null == o || (he(this.b, t ? ye.ib : ye.rb, r),
                    null != e && a.j.push(new F(this.f.B(),t ? S.jf : S.ff,(new Date).valueOf(),n,e)),
                    null != o && t && a.j.push(new F(this.f.B(),S.lf,(new Date).valueOf(),n,o)),
                    a.h = ue(this.b, a.j)),
                    a
                }
                ,
                e.Ja = function(e, t) {
                    var a = new ya
                      , n = ni(this.F);
                    if (e.gb(),
                    null == e.url || "" === e.url)
                        return N.info("Card " + e.id + " has no url. Not logging click to Braze servers."),
                        a;
                    if (t) {
                        var i = fe(this.b, ye.hb) || {};
                        i[e.id] = !0,
                        he(this.b, ye.hb, i)
                    }
                    return null == (e = En([e])) || (a.j.push(new F(this.f.B(),t ? S.gf : S.ef,(new Date).valueOf(),n,e)),
                    a.h = ue(this.b, a.j)),
                    a
                }
                ,
                e.xc = function(e) {
                    var t = new ya
                      , a = ni(this.F);
                    if (!e.zd())
                        return N.info("Card " + e.id + " refused this dismissal. Ignoring analytics event."),
                        t;
                    var n = fe(this.b, ye.ta) || {};
                    return n[e.id] = !0,
                    he(this.b, ye.ta, n),
                    null == (e = En([e])) || (t.j.push(new F(this.f.B(),S.hf,(new Date).valueOf(),a,e)),
                    t.h = ue(this.b, t.j)),
                    t
                }
                ;
                var In, Mn = {
                    BROWSER: "browser",
                    BROWSER_VERSION: "browserVersion",
                    OS: "os",
                    RESOLUTION: "resolution",
                    LANGUAGE: "language",
                    TIME_ZONE: "timeZone",
                    USER_AGENT: "userAgent"
                };
                function zn(e) {
                    this.id = e
                }
                function Pn(e, t) {
                    this.b = e,
                    null == t && (t = z(Mn)),
                    this.ge = t
                }
                function Rn(e) {
                    var t = W(e.b.la.R(xe.Od));
                    null == t && (t = new H(g.bb()),
                    pe(e.b, xe.Od, t)),
                    t = new zn(t.ga);
                    for (var a = 0; a < e.ge.length; a++) {
                        var n = e.ge[a];
                        switch (n) {
                        case "browser":
                            t[n] = ce.Wa;
                            break;
                        case "browserVersion":
                            t[n] = ce.version;
                            break;
                        case "os":
                            t[n] = ce.ob();
                            break;
                        case "resolution":
                            t[n] = screen.width + "x" + screen.height;
                            break;
                        case "language":
                            t[n] = ce.language;
                            break;
                        case "timeZone":
                            e: {
                                var i = new Date;
                                if ("undefined" != typeof Intl && "function" == typeof Intl.DateTimeFormat)
                                    try {
                                        if ("function" == typeof Intl.DateTimeFormat().resolvedOptions) {
                                            var o = Intl.DateTimeFormat().resolvedOptions().timeZone;
                                            if (null != o && "" !== o) {
                                                var r = o;
                                                break e
                                            }
                                        }
                                    } catch (e) {
                                        N.info("Intl.DateTimeFormat threw an error, probably https://bugs.chromium.org/p/chromium/issues/detail?id=811403, falling back to GTM offset: " + e.message)
                                    }
                                r = i.getTimezoneOffset(),
                                i = parseInt(r / 60);
                                var s = parseInt(r % 60)
                                  , l = "GMT";
                                0 !== r && (l = l + (0 > r ? "+" : "-") + ("00" + Math.abs(i)).slice(-2) + ":" + ("00" + Math.abs(s)).slice(-2)),
                                r = l
                            }
                            t[n] = r;
                            break;
                        case "userAgent":
                            t[n] = ce.userAgent
                        }
                    }
                    return t
                }
                function Un(e) {
                    this.Fa = e,
                    this.nc = null,
                    this.ve = "geolocation"in navigator
                }
                function Bn(e) {
                    e.ve ? null != e.nc && (navigator.geolocation.clearWatch(e.nc),
                    e.nc = null,
                    N.info("Stopped watching Geolocation")) : N.info(e.Qc)
                }
                function Ln(e, t, a, n, i) {
                    this.endpoint = e || null,
                    this.De = t || null,
                    this.publicKey = a || null,
                    this.Zg = n || null,
                    this.qa = i || null
                }
                function Fn(e, t, a, n, i, o, r, s, l, c) {
                    this.Fa = e,
                    this.aa = t,
                    this.dc = a,
                    this.Vf = n,
                    this.te = i || "/service-worker.js",
                    this.re = o,
                    this.K = r,
                    this.bd = l || !1,
                    this.Tf = s || !1,
                    this.b = c,
                    this.mc = "serviceWorker"in navigator && "undefined" != typeof ServiceWorkerRegistration && "showNotification"in ServiceWorkerRegistration.prototype && "PushManager"in window,
                    this.fd = "safari"in window && "pushNotification"in window.safari
                }
                function jn(e, t, a, n, i, o) {
                    t.unsubscribe().then((function(t) {
                        t ? Xn(e, a, n, i, o) : (N.error("Failed to unsubscribe device from push."),
                        "function" == typeof o && o(!1))
                    }
                    )).catch((function(e) {
                        N.error("Push unsubscription error: " + e),
                        "function" == typeof o && o(!1)
                    }
                    ))
                }
                function Gn(e, t, a, n) {
                    var i = function(e) {
                        if ("string" == typeof e)
                            return e;
                        if (0 !== e.endpoint.indexOf("https://android.googleapis.com/gcm/send"))
                            return e.endpoint;
                        var t = e.endpoint;
                        return e.subscriptionId && -1 === e.endpoint.indexOf(e.subscriptionId) && (t = e.endpoint + "/" + e.subscriptionId),
                        t
                    }(t)
                      , o = null
                      , r = null;
                    if (null != t.getKey)
                        try {
                            o = btoa(String.fromCharCode.apply(null, new Uint8Array(t.getKey("p256dh")))),
                            r = btoa(String.fromCharCode.apply(null, new Uint8Array(t.getKey("auth"))))
                        } catch (e) {
                            if ("invalid arguments" !== e.message)
                                throw e
                        }
                    t = function(e) {
                        var t;
                        return e.options && (t = e.options.applicationServerKey) && t.byteLength && 0 < t.byteLength ? btoa(String.fromCharCode.apply(null, new Uint8Array(t))).replace(/\+/g, "-").replace(/\//g, "_") : null
                    }(t),
                    e.Fa.Bd(i, n, o, r, t),
                    i && "function" == typeof a && a(i, o, r)
                }
                function Hn(e, t, a) {
                    e.Fa.Jb(!1),
                    N.info(t),
                    "function" == typeof a && a(!1)
                }
                function Wn(e, t, a, n, i) {
                    if ("default" === a.permission)
                        try {
                            window.safari.pushNotification.requestPermission(e.Vf, t, {
                                api_key: e.aa,
                                device_id: Rn(e.dc).id
                            }, (function(a) {
                                "granted" === a.permission && e.Fa.Gd("opted_in"),
                                Wn(e, t, a, n, i)
                            }
                            ))
                        } catch (t) {
                            Hn(e, "Could not request permission for push: " + t, i)
                        }
                    else
                        "denied" === a.permission ? Hn(e, "The user has blocked notifications from this site, or Safari push is not configured in the Braze dashboard.", i) : "granted" === a.permission && (N.info("Device successfully subscribed to push."),
                        Gn(e, a.deviceToken, n, new Date))
                }
                function Kn(e, t, a) {
                    function n(n) {
                        switch (n) {
                        case "granted":
                            "function" == typeof e && e();
                            break;
                        case "default":
                            "function" == typeof t && t();
                            break;
                        case "denied":
                            "function" == typeof a && a();
                            break;
                        default:
                            N.error("Received unexpected permission result " + n)
                        }
                    }
                    var i = !1
                      , o = window.Notification.requestPermission((function(e) {
                        i && n(e)
                    }
                    ));
                    o ? o.then((function(e) {
                        n(e)
                    }
                    )) : i = !0
                }
                function Xn(e, t, a, n, i) {
                    var o = {
                        userVisibleOnly: !0
                    };
                    null != a && (o.applicationServerKey = a),
                    t.pushManager.subscribe(o).then((function(t) {
                        N.info("Device successfully subscribed to push."),
                        Gn(e, t, n, new Date)
                    }
                    )).catch((function(t) {
                        e.Ia() ? (N.info("Permission for push notifications was denied."),
                        "function" == typeof i && i(!1)) : N.error("Push subscription failed: " + t)
                    }
                    ))
                }
                function qn(e) {
                    return e.bd ? navigator.serviceWorker.getRegistration() : navigator.serviceWorker.register(e.te).then((function() {
                        return navigator.serviceWorker.ready.then((function(e) {
                            return e && "function" == typeof e.update && e.update().catch((function(e) {
                                N.info("ServiceWorker update failed: " + e)
                            }
                            )),
                            e
                        }
                        ))
                    }
                    ))
                }
                function Yn(e, t, a, n, i, o, r) {
                    this.Fb = e || 0,
                    this.He = t || [],
                    this.ze = a || [],
                    this.Qe = n || [],
                    this.xd = i,
                    null != i && "" !== i || (this.xd = null),
                    this.qa = o || null,
                    this.Ab = r || {}
                }
                function Vn(e) {
                    this.b = e,
                    this.hd = new Ne,
                    this.ce = new Ne,
                    this.lc = null
                }
                function Jn(e) {
                    if (null == e.lc) {
                        var t = fe(e.b, ye.Zd);
                        if (null != t) {
                            var a = t.l;
                            "2.7.0" !== t.s && (a = 0),
                            t = new Yn(a,t.e,t.a,t.p,t.m,t.v,t.c)
                        } else
                            t = new Yn;
                        e.lc = t
                    }
                    return e.lc
                }
                function Zn(e, t) {
                    t = De(e.hd, t),
                    e.ee && e.hd.P(e.ee),
                    e.ee = t
                }
                function $n(e, t) {
                    De(e.ce, t)
                }
                function Qn(e, t) {
                    return -1 !== Jn(e).ze.indexOf(t)
                }
                function ei(e, t, a, n) {
                    this.b = e,
                    this.f = t,
                    this.K = a,
                    this.xb = 1e3,
                    n = parseFloat(n),
                    isNaN(n) && (n = 1800),
                    n < this.xb / 1e3 && (N.info("Specified session timeout of " + n + "s is too small, using the minimum session timeout of " + this.xb / 1e3 + "s instead."),
                    n = this.xb / 1e3),
                    this.Xf = n
                }
                function ti(e, t, a) {
                    return new F(e.f.B(),S.Mf,t,a.ga,{
                        d: R(t - a.Bb)
                    })
                }
                function ai(e) {
                    var t = (new Date).valueOf()
                      , a = Jn(e.K).xd;
                    if (null == a)
                        return !1;
                    var n = fe(e.b, ye.Yb);
                    return (a = null == n || t - n > 1e3 * a) && he(e.b, ye.Yb, t),
                    a
                }
                function ni(e) {
                    var t = (new Date).valueOf()
                      , a = t + 1e3 * e.Xf
                      , n = W(e.b.la.R(xe.Sa));
                    if (null == n || !(t - n.Bb < e.xb) && n.nd < t) {
                        var i = "Generating session start event with time " + t;
                        if (null != n) {
                            var o = n.wc;
                            o - n.Bb < e.xb && (o = n.Bb + e.eh),
                            null == (n = ti(e, o, n)) || ue(e.b, [n]),
                            i += " (old session ended " + o + ")"
                        }
                        return i += ". Will expire " + a.valueOf(),
                        N.info(i),
                        a = new H(g.bb(),a),
                        null == (i = new F(e.f.B(),S.$d,t,a.ga)) || ue(e.b, [i]),
                        pe(e.b, xe.Sa, a),
                        null == fe(e.b, ye.Yb) && he(e.b, ye.Yb, t),
                        a.ga
                    }
                    return n.wc = t,
                    n.nd = a,
                    pe(e.b, xe.Sa, n),
                    n.ga
                }
                function ii(e, t) {
                    var a = !1;
                    try {
                        if (localStorage && localStorage.getItem)
                            try {
                                localStorage.setItem(ye.Uc, !0),
                                localStorage.getItem(ye.Uc) && (localStorage.removeItem(ye.Uc),
                                a = !0)
                            } catch (e) {
                                if ("QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || !(0 < localStorage.length))
                                    throw e;
                                a = !0
                            }
                    } catch (e) {
                        N.info("Local Storage not supported!")
                    }
                    return new be(t = new Ce(e,(navigator.cookieEnabled || "cookie"in document && (0 < document.cookie.length || -1 < (document.cookie = "test").indexOf.call(document.cookie, "test"))) && !t,a),a ? new ke(e) : new _e)
                }
                function oi(e) {
                    for (var t = e.length, a = e.length - 1; 0 <= a; a--) {
                        var n = e.charCodeAt(a);
                        127 < n && 2047 >= n ? t++ : 2047 < n && 65535 >= n && (t += 2),
                        56320 <= n && 57343 >= n && a--
                    }
                    return t
                }
                function ri(e, t) {
                    this.K = e,
                    this.b = t
                }
                function si() {}
                function li(e, t, a, n, i) {
                    this.fa = e,
                    this.J = t,
                    this.b = a,
                    this.K = n,
                    this.Qf = i,
                    this.Aa = this.Da = 0,
                    this.Ga()
                }
                function ci(e, t) {
                    if (ui(e)) {
                        e.Ga();
                        var a = e.D.slice();
                        e.J.pb().B((function(n) {
                            for (var i = 0; i < t.length; i++)
                                if (n === t[i].userId || null == n && null == t[i].userId) {
                                    for (var o = t[i].card, r = null, s = 0; s < e.D.length; s++)
                                        if (o.id === e.D[s].id) {
                                            r = e.D[s];
                                            break
                                        }
                                    if (null == r)
                                        null != (o = qe(o)) && a.push(o);
                                    else if (!Xe(r, o))
                                        for (r = 0; r < a.length; r++)
                                            if (o.id === a[r].id) {
                                                a.splice(r, 1);
                                                break
                                            }
                                }
                            e.D = pi(e, bi(e, a, !1)),
                            e.oc(),
                            Te(e.fa, e.nb(!0))
                        }
                        ))
                    }
                }
                function bi(e, t, a) {
                    for (var n = fe(e.b, ye.hb) || {}, i = fe(e.b, ye.ib) || {}, o = fe(e.b, ye.ta) || {}, r = {}, s = {}, l = {}, c = 0; c < t.length; c++)
                        n[t[c].id] && (t[c].clicked = !0,
                        r[t[c].id] = !0),
                        i[t[c].id] && (t[c].viewed = !0,
                        s[t[c].id] = !0),
                        o[t[c].id] && (t[c].dismissed = !0,
                        l[t[c].id] = !0);
                    return a && (he(e.b, ye.hb, r),
                    he(e.b, ye.ib, s),
                    he(e.b, ye.ta, l)),
                    t
                }
                function pi(e, t) {
                    for (var a = [], n = new Date, i = fe(e.b, ye.ta) || {}, o = !1, r = 0; r < t.length; r++) {
                        var s = t[r].url;
                        !e.Qf && s && oa(s) ? N.error('Card with url "' + s + '" will not be displayed because Javascript URLs are disabled. Use the "allowUserSuppliedJavascript" option for appboy.initialize to enable this card.') : (null == t[r].expiresAt || t[r].expiresAt >= n) && !t[r].dismissed ? a.push(t[r]) : o = i[t[r].id] = !0
                    }
                    return o && he(e.b, ye.ta, i),
                    a
                }
                function ui(e) {
                    return !!Jn(e.K).Ab.enabled || (0 !== Jn(e.K).Fb && (Te(e.fa, new xa([],(new Date).valueOf())),
                    ge(e.b, ye.sb)),
                    !1)
                }
                function di(e, t) {
                    this.fa = e,
                    this.b = t,
                    this.Ga()
                }
                function hi(e, t, a, n, i) {
                    this.Na = e,
                    this.af = t,
                    this.$e = a,
                    this.tc = n,
                    this.Ma = i
                }
                function fi(e, t, a, n, i) {
                    return null == e || null == e.trigger_id ? null : new hi(e.trigger_id,t,a,n,i)
                }
                function gi(e, t, a, n) {
                    this.Uf = e,
                    this.fa = t,
                    this.b = a,
                    this.J = n,
                    this.fc = [],
                    this.ma = [],
                    this.Ba = null,
                    this.L = {},
                    this.Z = {},
                    vi(this),
                    wi(this)
                }
                function mi(e) {
                    e.Ba = fe(e.b, ye.Mc) || e.Ba,
                    e.L = fe(e.b, ye.ub) || e.L,
                    e.Z = fe(e.b, ye.Xb) || e.Z;
                    for (var t = 0; t < e.V.length; t++) {
                        var a = e.V[t];
                        null != e.Z[a.id] && (a.Ca = e.Z[a.id])
                    }
                }
                function vi(e) {
                    e.gd = fe(e.b, ye.Wc) || 0;
                    for (var t = fe(e.b, ye.Vc) || [], a = [], n = 0; n < t.length; n++)
                        a.push(cn(t[n]));
                    e.V = a,
                    mi(e)
                }
                function wi(e) {
                    function t(t, a, n, i, o) {
                        return function() {
                            xi(e, t, a, n, i, o)
                        }
                    }
                    for (var a = {}, n = 0; n < e.V.length; n++)
                        a[e.V[n].id] = e.V[n];
                    n = !1;
                    for (var i = 0; i < e.V.length; i++) {
                        var o = e.V[i];
                        if (null != e.L[o.id]) {
                            for (var r = e.L[o.id], s = [], l = 0; l < r.length; l++) {
                                var c = r[l]
                                  , b = Math.max(c.tc + 1e3 * o.Za - (new Date).valueOf(), 0);
                                if (0 < b) {
                                    s.push(c);
                                    var p = void 0
                                      , u = void 0;
                                    null != c.Ye && (p = c.Ye),
                                    null != c.jd && j(c.jd) && (u = G(c.jd));
                                    var d = [];
                                    if (T(c.od))
                                        for (var h = 0; h < c.od.length; h++) {
                                            var f = a[c.od[h]];
                                            null != f && d.push(f)
                                        }
                                    e.ma.push(setTimeout(t(o, c.tc, p, u, d), b))
                                }
                            }
                            e.L[o.id].length > s.length && (e.L[o.id] = s,
                            n = !0,
                            0 === e.L[o.id].length && delete e.L[o.id])
                        }
                    }
                    n && he(e.b, ye.ub, e.L)
                }
                function xi(e, t, a, n, i, o) {
                    function r() {
                        mi(e);
                        var t = o.pop();
                        if (null != t)
                            if (ki(e, t, a, n, i, o),
                            ln(t, a)) {
                                var s = "Server aborted in-app message display, but the timeout on fallback trigger " + t.id + "has already elapsed.";
                                0 < o.length && (s += " Continuing to fall back."),
                                N.info(s),
                                e.J.M(t.id, gt.Qd),
                                r()
                            } else
                                N.info("Server aborted in-app message display. Falling back to lower priority " + t.type + " trigger action " + t.id),
                                0 < (s = 1e3 * t.Za - ((new Date).valueOf() - a)) ? e.ma.push(setTimeout((function() {
                                    xi(e, t, a, n, i, o)
                                }
                                ), s)) : xi(e, t, a, n, i, o)
                    }
                    function s(i) {
                        mi(e);
                        var o = (new Date).valueOf();
                        ln(t, a) ? t.type === pn.ae ? e.J.M(t.id, gt.tb) : e.J.M(t.id, gt.Qd) : !1 === navigator.onLine && t.type === pn.Jc && i.imageUrl ? (N.info("Not showing " + t.type + " trigger action " + t.id + " due to offline state."),
                        e.J.M(t.id, gt.xf)) : (null == t.Ca || t.Ib !== bn && o - t.Ca >= 1e3 * t.Ib) && yi(e, t, o, n) ? (Te(e.fa, [i]),
                        mi(e),
                        t.Ca = o,
                        e.Ba = o,
                        he(e.b, ye.Mc, o),
                        e.Z[t.id] = o,
                        he(e.b, ye.Xb, e.Z)) : N.info("Not displaying trigger " + t.id + " because display time fell outside of the acceptable time window.")
                    }
                    switch (t.type) {
                    case pn.Jc:
                        var l = pt(t.data);
                        if (null == l) {
                            N.error("Could not parse trigger data for trigger " + t.id + ", ignoring."),
                            e.J.M(t.id, gt.vb);
                            break
                        }
                        s(l);
                        break;
                    case pn.ae:
                        if (null == (l = fi(t.data, s, r, a, t.Ma))) {
                            N.error("Could not parse trigger data for trigger " + t.id + ", ignoring."),
                            e.J.M(t.id, gt.vb);
                            break
                        }
                        wn(e.J, l, n, i);
                        break;
                    default:
                        N.error("Trigger " + t.id + " was of unexpected type " + t.type + ", ignoring."),
                        e.J.M(t.id, gt.vb)
                    }
                }
                function yi(e, t, a, n) {
                    return null == e.Ba || (n === Ka.X ? (N.info("Ignoring minimum interval between trigger because it is a test type."),
                    !0) : (null == (t = t.Oe) && (t = e.Uf),
                    a - e.Ba >= 1e3 * t))
                }
                function ki(e, t, a, n, i, o) {
                    mi(e),
                    e.L[t.id] = e.L[t.id] || [];
                    var r, s = {};
                    for (s.tc = a,
                    s.Ye = n,
                    null != i && (r = i.C()),
                    s.jd = r,
                    a = [],
                    n = 0; n < o.length; n++)
                        a.push(o[n].id);
                    s.od = a,
                    e.L[t.id].push(s),
                    he(e.b, ye.ub, e.L)
                }
                V.DeviceProperties = Mn,
                zn.prototype.qc = function() {
                    var e = {};
                    return null != this.browser && (e.browser = this.browser),
                    null != this.browserVersion && (e.browser_version = this.browserVersion),
                    null != this.os && (e.os_version = this.os),
                    null != this.resolution && (e.resolution = this.resolution),
                    null != this.language && (e.locale = this.language),
                    null != this.timeZone && (e.time_zone = this.timeZone),
                    null != this.userAgent && (e.user_agent = this.userAgent),
                    e
                }
                ,
                Un.prototype.Zf = function(e) {
                    var t = this;
                    if (document.hidden) {
                        Bn(this);
                        var a = function() {
                            document.hidden || (document.removeEventListener("visibilitychange", a, !1),
                            t.watchPosition())
                        };
                        document.addEventListener("visibilitychange", a, !1)
                    }
                    this.Fa.Ec(e.coords.latitude, e.coords.longitude, e.coords.accuracy, e.coords.altitude, e.coords.altitudeAccuracy)
                }
                ,
                Un.prototype.Yf = function(e) {
                    e.code === e.PERMISSION_DENIED ? N.info(e.message) : N.error("Could not detect user location: " + e.code + " - " + e.message)
                }
                ,
                Un.prototype.watchPosition = function() {
                    this.ve ? (Bn(this),
                    this.nc = navigator.geolocation.watchPosition(this.Zf.bind(this), this.Yf.bind(this)),
                    N.info("Requested Geolocation")) : N.info(this.Qc)
                }
                ,
                Ln.prototype.C = function() {
                    return {
                        e: this.endpoint,
                        c: this.De,
                        p: this.publicKey,
                        u: this.Zg,
                        v: this.qa
                    }
                }
                ,
                (e = Fn.prototype).pa = function() {
                    return this.mc || this.fd
                }
                ,
                e.Ia = function() {
                    var e = this.pa() && "Notification"in window && null != window.Notification && null != window.Notification.permission && "denied" === window.Notification.permission
                      , t = this.pa() && (!("Notification"in window) || null == window.Notification);
                    return e || t
                }
                ,
                e.Eb = function() {
                    return this.pa() && "Notification"in window && null != window.Notification && null != window.Notification.permission && "granted" === window.Notification.permission
                }
                ,
                e.ud = function(e, t, a) {
                    var n = this;
                    a = this.re || a,
                    this.pa() ? this.mc ? qn(this).then((function(a) {
                        n.Ia() || null == a ? t() : a.pushManager.getSubscription().then((function(a) {
                            a ? e() : t()
                        }
                        )).catch((function() {
                            t()
                        }
                        ))
                    }
                    )).catch((function() {
                        t()
                    }
                    )) : null == a || "" === a ? N.error("You must supply the safariWebsitePushId argument in order to use isPushGranted on Safari") : "granted" === window.safari.pushNotification.permission(a).permission ? e() : t() : t()
                }
                ,
                e.subscribe = function(e, t, a) {
                    var n = this;
                    if (e = this.re || e,
                    this.pa())
                        if (this.mc) {
                            if (!this.bd && null != window.location) {
                                var i = this.te;
                                if (-1 === i.indexOf(window.location.host) && (i = window.location.host + i),
                                -1 === i.indexOf(window.location.protocol) && (i = window.location.protocol + "//" + i),
                                0 !== window.location.href.indexOf(i.substr(0, i.lastIndexOf("/") + 1)))
                                    return void N.error("Cannot subscribe to push from a path higher than the service worker location (tried to subscribe from " + window.location.pathname + " but service worker is at " + i + ")")
                            }
                            if (this.Ia())
                                Hn(this, "Notifications from this site are blocked. This may be a temporary embargo or a permanent denial.", a);
                            else if (this.K && !Jn(this.K).qa && 0 === Jn(this.K).Fb)
                                N.info("Waiting for VAPID key from server config before subscribing to push."),
                                Zn(this.K, (function() {
                                    n.subscribe(e, t, a)
                                }
                                ));
                            else {
                                var o = this.Eb();
                                Kn((function() {
                                    o || n.Fa.Gd("opted_in"),
                                    qn(n).then((function(e) {
                                        null == e ? (N.error("No service worker registration. Set the `manageServiceWorkerExternally` initialization option to false or ensure that your service worker is registered before calling registerAppboyPushMessages."),
                                        "function" == typeof a && a()) : e.pushManager.getSubscription().then((function(i) {
                                            var o = null;
                                            if (n.K && null != Jn(n.K).qa && (o = f.Yg(Jn(n.K).qa)),
                                            i) {
                                                var r = null
                                                  , s = null
                                                  , l = fe(n.b, ye.bc);
                                                if (l && !T(l)) {
                                                    try {
                                                        var c = new Ln(l.e,L(l.c),l.p,l.u,l.v).De
                                                    } catch (e) {
                                                        c = null
                                                    }
                                                    null == c || isNaN(c.getTime()) || 0 === c.getTime() || (r = c,
                                                    (s = new Date(r)).setMonth(r.getMonth() + 6))
                                                }
                                                null != o && i.options && i.options.applicationServerKey && i.options.applicationServerKey.byteLength && 0 < i.options.applicationServerKey.byteLength && !P(o, new Uint8Array(i.options.applicationServerKey)) ? (12 < i.options.applicationServerKey.byteLength ? N.info("Device was already subscribed to push using a different VAPID provider, creating new subscription.") : N.info("Attempting to upgrade a gcm_sender_id-based push registration to VAPID - depending on the browser this may or may not result in the same gcm_sender_id-based subscription."),
                                                jn(n, i, e, o, t, a)) : i.expirationTime && new Date(i.expirationTime) <= (new Date).valueOf() ? (N.info("Push subscription is expired, creating new subscription."),
                                                jn(n, i, e, o, t, a)) : l && T(l) ? jn(n, i, e, o, t, a) : null == s ? (N.info("No push subscription creation date found, creating new subscription."),
                                                jn(n, i, e, o, t, a)) : s <= (new Date).valueOf() ? (N.info("Push subscription older than 6 months, creating new subscription."),
                                                jn(n, i, e, o, t, a)) : (N.info("Device already subscribed to push, sending existing subscription to backend."),
                                                Gn(n, i, t, r))
                                            } else
                                                Xn(n, e, o, t, a)
                                        }
                                        )).catch((function(e) {
                                            N.error("Error checking current push subscriptions: " + e)
                                        }
                                        ))
                                    }
                                    )).catch((function(e) {
                                        N.error("ServiceWorker registration failed: " + e)
                                    }
                                    ))
                                }
                                ), (function() {
                                    var e = "Permission for push notifications was ignored.";
                                    n.Ia() && (e += " The browser has automatically blocked further permission requests for a period (probably 1 week)."),
                                    N.info(e),
                                    "function" == typeof a && a(!0)
                                }
                                ), (function() {
                                    N.info("Permission for push notifications was denied."),
                                    "function" == typeof a && a(!1)
                                }
                                ))
                            }
                        } else
                            this.fd && (null == e || "" === e ? N.error("You must supply the safariWebsitePushId argument in order to use registerAppboyPushMessages on Safari") : (i = window.safari.pushNotification.permission(e),
                            Wn(this, e, i, t, a)));
                    else
                        N.info(this.Qc)
                }
                ,
                e.unsubscribe = function(e, t) {
                    var a = this;
                    this.pa() ? this.mc ? navigator.serviceWorker.getRegistration().then((function(n) {
                        n && n.pushManager.getSubscription().then((function(i) {
                            i && (a.Fa.Jb(!0),
                            i.unsubscribe().then((function(i) {
                                i ? (N.info("Device successfully unsubscribed from push."),
                                "function" == typeof e && e()) : (N.error("Failed to unsubscribe device from push."),
                                "function" == typeof t && t()),
                                a.bd || (n.unregister(),
                                N.info("Service worker successfully unregistered."))
                            }
                            )).catch((function(e) {
                                N.error("Push unsubscription error: " + e),
                                "function" == typeof t && t()
                            }
                            )))
                        }
                        )).catch((function(e) {
                            N.error("Error unsubscribing from push: " + e),
                            "function" == typeof t && t()
                        }
                        ))
                    }
                    )) : this.fd && (this.Fa.Jb(!0),
                    N.info("Device unsubscribed from push."),
                    "function" == typeof e && e()) : N.info(this.Qc)
                }
                ,
                Yn.prototype.C = function() {
                    return {
                        s: "2.7.0",
                        l: this.Fb,
                        e: this.He,
                        a: this.ze,
                        p: this.Qe,
                        m: this.xd,
                        v: this.qa,
                        c: this.Ab
                    }
                }
                ,
                ei.prototype.qd = function() {
                    var e = W(this.b.la.R(xe.Sa));
                    return null == e ? null : e.ga
                }
                ,
                (e = ri.prototype).B = function() {
                    var e = W(this.b.la.R(xe.Xc));
                    if (null == e)
                        return null;
                    var t = e.ga
                      , a = oi(t);
                    if (997 < a) {
                        for (; 997 < a; )
                            a = oi(t = t.slice(0, t.length - 1));
                        e.ga = t,
                        pe(this.b, xe.Xc, e)
                    }
                    return t
                }
                ,
                e.Ed = function(e, t) {
                    if (Qn(this.K, e))
                        return N.info('Custom Attribute "' + e + '" is blacklisted, ignoring.'),
                        !1;
                    var a = {};
                    return a[e] = t,
                    this.H("custom", a)
                }
                ,
                e.H = function(e, t) {
                    return ve(this.b, this.B(), e, t)
                }
                ,
                e.Bd = function(e, t, a, n, i) {
                    this.H("push_token", e),
                    this.H("custom_push_public_key", a),
                    this.H("custom_push_user_auth", n),
                    this.H("custom_push_vapid_public_key", i);
                    var o = C.Ra
                      , r = new m(o);
                    he(this.b, ye.bc, new Ln(e,t,a,n,i).C()),
                    r.setItem(o.O.Tc, o.cc, !0)
                }
                ,
                e.Jb = function(e) {
                    if (this.H("push_token", null),
                    this.H("custom_push_public_key", null),
                    this.H("custom_push_user_auth", null),
                    this.H("custom_push_vapid_public_key", null),
                    e) {
                        var t = new m(e = C.Ra);
                        he(this.b, ye.bc, !1),
                        t.setItem(e.O.Tc, e.cc, !1)
                    }
                }
                ,
                si.prototype.Db = function() {}
                ,
                si.prototype.Ya = function() {}
                ,
                si.prototype.clearData = function() {}
                ,
                h(li, si),
                (e = li.prototype).Ga = function() {
                    for (var e = fe(this.b, ye.sb) || [], t = [], a = 0; a < e.length; a++) {
                        var n = Ye(e[a]);
                        null != n && t.push(n)
                    }
                    this.D = pi(this, bi(this, t, !1)),
                    this.Da = fe(this.b, ye.Tb) || this.Da,
                    this.Aa = fe(this.b, ye.Sb) || this.Aa
                }
                ,
                e.Db = function(e) {
                    if (ui(this) && null != e && e.cards) {
                        var t = e.full_sync;
                        t || this.Ga();
                        var a = e.cards
                          , i = e.last_full_sync_at;
                        if (e = e.last_card_updated_at,
                        t)
                            for (var o = [], r = n(this.D), s = r.next(); !s.done; s = r.next())
                                (s = s.value).test && o.push(s);
                        else
                            o = this.D.slice();
                        for (r = 0; r < a.length; r++) {
                            s = a[r];
                            for (var l = null, c = 0; c < this.D.length; c++)
                                if (s.id === this.D[c].id) {
                                    l = this.D[c];
                                    break
                                }
                            if (t)
                                s = qe(s),
                                null != l && l.viewed && (s.viewed = !0),
                                null != s && o.push(s);
                            else if (null == l)
                                null != (s = qe(s)) && o.push(s);
                            else if (!Xe(l, s))
                                for (l = 0; l < o.length; l++)
                                    if (s.id === o[l].id) {
                                        o.splice(l, 1);
                                        break
                                    }
                        }
                        this.D = pi(this, bi(this, o, t)),
                        this.oc(),
                        this.Da = i || 0,
                        he(this.b, ye.Tb, this.Da),
                        this.Aa = e || 0,
                        he(this.b, ye.Sb, this.Aa),
                        Te(this.fa, this.nb(!0))
                    }
                }
                ,
                e.oc = function() {
                    for (var e = [], t = 0; t < this.D.length; t++)
                        e.push(this.D[t].C());
                    he(this.b, ye.sb, e)
                }
                ,
                e.La = function() {
                    if (ui(this))
                        return this.J.La(this.Da, this.Aa, this.Db.bind(this))
                }
                ,
                e.nb = function(e) {
                    e || this.Ga(),
                    (e = pi(this, this.D)).sort((function(e, t) {
                        return e.pinned && !t.pinned ? -1 : t.pinned && !e.pinned ? 1 : e.updated > t.updated ? -1 : t.updated > e.updated ? 1 : 0
                    }
                    ));
                    var t = Math.max(this.Aa || 0, this.Da || 0);
                    return 0 === t && (t = void 0),
                    new xa(e,U(t))
                }
                ,
                e.Ya = function(e) {
                    e || (this.D = [],
                    Te(this.fa, new xa(this.D.slice(),null)),
                    ge(this.b, ye.sb),
                    ge(this.b, ye.hb),
                    ge(this.b, ye.ib),
                    ge(this.b, ye.ta)),
                    this.Aa = this.Da = 0,
                    ge(this.b, ye.Tb),
                    ge(this.b, ye.Sb)
                }
                ,
                e.clearData = function(e) {
                    this.Aa = this.Da = 0,
                    this.D = [],
                    Te(this.fa, new xa(this.D.slice(),null)),
                    e && (ge(this.b, ye.sb),
                    ge(this.b, ye.hb),
                    ge(this.b, ye.ib),
                    ge(this.b, ye.ta),
                    ge(this.b, ye.Tb),
                    ge(this.b, ye.Sb))
                }
                ,
                h(di, si),
                (e = di.prototype).Ga = function() {
                    for (var e = fe(this.b, ye.Pc) || [], t = [], a = 0; a < e.length; a++) {
                        var n = Ye(e[a]);
                        null != n && t.push(n)
                    }
                    this.D = t,
                    this.kb = L(fe(this.b, ye.Nc))
                }
                ,
                e.oc = function() {
                    for (var e = [], t = 0; t < this.D.length; t++)
                        e.push(this.D[t].C());
                    he(this.b, ye.Pc, e)
                }
                ,
                e.Db = function(e) {
                    if (null != e && e.feed) {
                        this.Ga(),
                        e = e.feed;
                        for (var t, a = [], n = fe(this.b, ye.rb) || {}, i = {}, o = 0; o < e.length; o++) {
                            var r = (t = e[o]).id
                              , s = t.type
                              , l = t.viewed
                              , c = t.title
                              , b = t.image
                              , p = t.description
                              , u = U(t.created)
                              , d = U(t.updated)
                              , h = t.categories
                              , f = U(t.expires_at)
                              , g = t.url
                              , m = t.domain
                              , v = t.aspect_ratio;
                            t = t.extras,
                            null != (r = s === Ze.be || s === Ze.$b ? new nt(r,l,c,b,p,u,d,h,f,g,m,v,t,!1,!1) : s === Ze.Qb ? new at(r,l,c,b,p,u,d,h,f,g,m,v,t,!1,!1) : s === Ze.Pb ? new tt(r,l,b,u,d,h,f,g,m,v,t,!1,!1) : null) && (n[r.id] && (r.viewed = !0,
                            i[r.id] = !0),
                            a.push(r))
                        }
                        he(this.b, ye.rb, i),
                        this.D = a,
                        this.oc(),
                        this.kb = new Date,
                        he(this.b, ye.Nc, this.kb),
                        Te(this.fa, new ba(this.D.slice(),this.kb))
                    }
                }
                ,
                e.uc = function() {
                    this.Ga();
                    for (var e = [], t = new Date, a = 0; a < this.D.length; a++)
                        (null == this.D[a].expiresAt || this.D[a].expiresAt >= t) && e.push(this.D[a]);
                    return new ba(e,this.kb)
                }
                ,
                e.clearData = function(e) {
                    null == e && (e = !1),
                    this.D = [],
                    this.kb = null,
                    e && (ge(this.b, ye.Pc),
                    ge(this.b, ye.Nc)),
                    Te(this.fa, new ba(this.D.slice(),this.kb))
                }
                ,
                h(gi, si),
                gi.prototype.Db = function(e) {
                    var t = !1;
                    if (null != e && e.triggers) {
                        mi(this);
                        var a = {}
                          , n = {};
                        this.V = [];
                        for (var i = 0; i < e.triggers.length; i++) {
                            for (var o = e.triggers[i], r = o.id, s = [], l = 0; l < o.trigger_condition.length; l++)
                                s.push(Va(o.trigger_condition[l]));
                            l = U(o.start_time);
                            var c = U(o.end_time)
                              , b = o.priority
                              , p = o.type
                              , u = o.delay
                              , d = o.re_eligibility
                              , h = o.timeout
                              , f = o.data;
                            for (o = o.min_seconds_since_last_trigger,
                            r = D(pn, p, "Could not construct Trigger from server data", "Trigger.Types") ? new sn(r,s,l,c,b,p,f,u,d,h,o) : null,
                            null != this.Z[r.id] && (r.Ca = this.Z[r.id],
                            a[r.id] = this.Z[r.id]),
                            null != this.L[r.id] && (n[r.id] = this.L[r.id]),
                            s = 0; s < r.mb.length; s++)
                                if (qa(r.mb[s], Ka.X, null)) {
                                    t = !0;
                                    break
                                }
                            null != r && this.V.push(r)
                        }
                        for (P(this.Z, a) || (this.Z = a,
                        he(this.b, ye.Xb, this.Z)),
                        P(this.L, n) || (this.L = n,
                        he(this.b, ye.ub, this.L)),
                        e = [],
                        a = 0; a < this.V.length; a++)
                            e.push(this.V[a].C());
                        for (this.gd = (new Date).valueOf(),
                        he(this.b, ye.Vc, e),
                        he(this.b, ye.Wc, this.gd),
                        t && (N.info("Trigger with test condition found, firing test."),
                        this.oa(Ka.X)),
                        this.oa(Ka.OPEN),
                        t = this.fc,
                        this.fc = [],
                        e = 0; e < t.length; e++)
                            this.oa.apply(this, t[e])
                    }
                }
                ,
                gi.prototype.oa = function(e, t, a) {
                    var n = this;
                    if (D(Ka, e, "Cannot fire trigger action.", "TriggerEvents"))
                        if (0 < this.J.jb)
                            N.info("Trigger sync is currently in progress, awaiting sync completion before firing trigger event."),
                            this.fc.push(arguments);
                        else {
                            (fe(this.b, ye.Wc) || 0) > this.gd ? vi(this) : mi(this);
                            for (var i = (new Date).valueOf(), o = i - this.Ba, r = !0, s = !0, l = [], c = 0; c < this.V.length; c++) {
                                var b = this.V[c]
                                  , p = i + 1e3 * b.Za;
                                if ((null == b.Ca || b.Ib !== bn && p - b.Ca >= 1e3 * b.Ib) && (null == b.startTime || b.startTime <= i) && (null == b.endTime || b.endTime >= i)) {
                                    for (var u = !1, d = 0; d < b.mb.length; d++)
                                        if (qa(b.mb[d], e, t)) {
                                            u = !0;
                                            break
                                        }
                                    u && (r = !1,
                                    yi(this, b, p, e) && (s = !1,
                                    l.push(b)))
                                }
                            }
                            if (r)
                                N.info("Trigger event " + e + " did not match any trigger conditions.");
                            else if (s)
                                N.info("Ignoring " + e + " trigger event because a trigger was displayed " + o / 1e3 + "s ago.");
                            else {
                                l.sort((function(e, t) {
                                    return e.priority - t.priority
                                }
                                ));
                                var h = l.pop();
                                null != h && (N.info("Firing " + h.type + " trigger action " + h.id + " from trigger event " + e + "."),
                                ki(this, h, i, e, a, l),
                                0 === h.Za ? xi(this, h, i, e, a, l) : this.ma.push(setTimeout((function() {
                                    xi(n, h, i, e, a, l)
                                }
                                ), 1e3 * h.Za)))
                            }
                        }
                }
                ,
                gi.prototype.Ya = function(e) {
                    if (this.V = [],
                    ge(this.b, ye.Vc),
                    !e) {
                        for (this.fc = [],
                        this.Ba = null,
                        this.Z = {},
                        this.L = {},
                        e = 0; e < this.ma.length; e++)
                            clearTimeout(this.ma[e]);
                        this.ma = [],
                        ge(this.b, ye.Mc),
                        ge(this.b, ye.Xb),
                        ge(this.b, ye.ub),
                        ge(this.b, ye.Ef),
                        ge(this.b, ye.Df),
                        ge(this.b, ye.Ff)
                    }
                }
                ,
                gi.prototype.clearData = function() {
                    this.V = [],
                    this.Ba = null,
                    this.Z = {},
                    this.L = {};
                    for (var e = 0; e < this.ma.length; e++)
                        clearTimeout(this.ma[e]);
                    this.ma = []
                }
                ,
                "undefined" == typeof console && (window.console = {
                    log: function() {}
                });
                var Ei, Ai = window.Element.prototype;
                if ("function" != typeof Ai.matches && (Ai.matches = Ai.msMatchesSelector || Ai.mozMatchesSelector || Ai.webkitMatchesSelector || function(e) {
                    e = (this.document || this.ownerDocument).querySelectorAll(e);
                    for (var t = 0; e[t] && e[t] !== this; )
                        ++t;
                    return !!e[t]
                }
                ),
                Element.prototype.closest || (Element.prototype.closest = function(e) {
                    var t = this;
                    if (!document.documentElement.contains(t))
                        return null;
                    do {
                        if (t.matches(e))
                            return t;
                        t = t.parentElement || t.parentNode
                    } while (null !== t && 1 === t.nodeType);
                    return null
                }
                ),
                "function" != typeof window.CustomEvent) {
                    var Si = function(e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: null
                        };
                        var a = document.createEvent("CustomEvent");
                        return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                        a
                    };
                    Si.prototype = window.Event.prototype,
                    window.CustomEvent = Si
                }
                module.exports ? Ei = module.exports : (window.appboy || (window.appboy = {}),
                Ei = window.appboy);
                var _i, Ci = Ei, Ni = new function(e) {
                    function t(e) {
                        var t, a = {};
                        for (t in e) {
                            var n = e[t];
                            null == n ? delete e[t] : a[t] = O(n) ? B(n) : n
                        }
                        return a
                    }
                    function a(e, t, a, n, i) {
                        if (null == e && (e = {}),
                        "object" != typeof e || T(e))
                            return N.error(t + " requires that " + a + " be an object. Ignoring " + i + "."),
                            !1;
                        for (var o in e) {
                            if (!X(o, n, "the " + i + " property name"))
                                return !1;
                            if (a = null != (t = e[o])) {
                                a = typeof t;
                                var r = O(t);
                                (a = null != t && ("number" === a || "boolean" === a || r || "string" === a)) || N.error("Cannot " + n + " because the " + i + ' property "' + o + '" "' + t + '" is invalid.'),
                                a = !a
                            }
                            if (a)
                                return !1
                        }
                        return !0
                    }
                    function n() {
                        N.Cb(),
                        I && (Te(A),
                        A.N(),
                        u.clearData(!1),
                        u = null,
                        f.clearData(!1),
                        f = null,
                        p.N(),
                        p = null,
                        g.N(),
                        g = null,
                        d.N(),
                        d = null,
                        c.Cb(),
                        v = c = null,
                        Bn(w),
                        o = s = w = null,
                        S = [],
                        l = null),
                        z = I = !1
                    }
                    function i() {
                        if (z)
                            return !1;
                        if (!I)
                            throw Error("Appboy must be initialized before calling methods.");
                        return !0
                    }
                    null == e && (e = {
                        fg: function(e, t) {
                            return new Pn(e,t)
                        },
                        jg: function(e, t, a, n, i, o, r, s, l) {
                            null == i && (i = {});
                            var c = new ri(l,r)
                              , b = new ei(r,c,l,i.sessionTimeoutInSeconds);
                            return new hn(e,a,n,i.appVersion,t,b,s,c,l,r,o)
                        },
                        kd: function() {
                            return new Ne
                        },
                        gg: function(e, t) {
                            return new di(e,t)
                        },
                        eg: function(e, t, a, n) {
                            return new li(e,t,a,n)
                        },
                        kg: function(e, t, a, n) {
                            return new gi(e,t,a,n)
                        },
                        ig: function(e, t, a, n, i, o, r) {
                            return null == i && (i = {}),
                            new Fn(e,t,a,n + "/safari/" + t,i.serviceWorkerLocation,i.safariWebsitePushId,o,i.manageServiceWorkerExternally,i.disablePushTokenMaintenance,r)
                        },
                        hg: function(e) {
                            return new Un(e)
                        }
                    });
                    var o, r, s, l, c, b, p, u, d, h, f, g, v, w, x = new Ne, A = new Ne, S = [], I = !1, z = !1;
                    return In = {
                        Td: 100,
                        Zb: "inAppMessage must be an InAppMessage object",
                        Oc: "must be a Card object"
                    },
                    {
                        Rg: function(e) {
                            return De(x, e)
                        },
                        Qg: function(e) {
                            return De(A, e)
                        },
                        td: function(t, a) {
                            if (I)
                                return N.info("Braze has already been initialized with an API key."),
                                !0;
                            if (N.sd(null != a && a.enableLogging),
                            null == t || "" === t || "string" != typeof t)
                                return N.error("Braze requires a valid API key to be initialized."),
                                !1;
                            if (o = t,
                            s = a || {},
                            ce.sg && !s.allowCrawlerActivity)
                                return N.info("Ignoring activity from crawler bot " + navigator.userAgent),
                                z = !0,
                                !1;
                            if (r = a = ii(t, s.noCookies || !1),
                            new Ee(null,!0).R("ab.optOut"))
                                return N.info("Ignoring all activity due to previous opt out"),
                                z = !0,
                                !1;
                            var n = ["mparticle", "wordpress", "tealium"];
                            if (null != s.sdkFlavor) {
                                var i = s.sdkFlavor;
                                -1 !== n.indexOf(i) ? l = i : N.error("Invalid sdk flavor passed: " + i)
                            }
                            var m = [];
                            if (p = e.kd(),
                            S.push(p),
                            u = e.gg(p, a),
                            m.push(u),
                            g = e.kd(),
                            S.push(g),
                            0 !== (n = (n = null != s.baseUrl ? s.baseUrl : "https://sdk.iad-01.braze.com/api/v3").replace(/(\.[a-z]+)[^\.]*$/i, "$1/api/v3")).indexOf("http") && (n = "https://" + n),
                            null != (i = s.devicePropertyWhitelist))
                                if (T(i)) {
                                    for (var y = [], k = 0; k < i.length; k++)
                                        D(Mn, i[k], "devicePropertyWhitelist contained an invalid value.", "DeviceProperties") && y.push(i[k]);
                                    i = y
                                } else
                                    N.error("devicePropertyWhitelist must be an array. Defaulting to all properties."),
                                    i = null;
                            return b = e.fg(a, i),
                            i = new Vn(a),
                            c = e.jg(o, n, "2.7.0", l, s, (function(e) {
                                if (I)
                                    for (var t = 0; t < m.length; t++)
                                        m[t].Db(e)
                            }
                            ), a, b, i),
                            null == (y = s.minimumIntervalBetweenTriggerActionsInSeconds) && (y = 30),
                            f = e.kg(y, g, a, c),
                            m.push(f),
                            y = !0 === s.allowUserSuppliedJavascript || !0 === s.enableHtmlInAppMessages,
                            d = e.kd(),
                            S.push(d),
                            h = e.eg(d, c, a, i, y),
                            m.push(h),
                            $n(i, (function() {
                                h.La()
                            }
                            )),
                            _n(c, (function() {
                                h.La()
                            }
                            )),
                            c.td(),
                            v = e.ig(c.pb(), o, b, n, s, i, a),
                            w = e.hg(c.pb()),
                            a = "Initialized ",
                            s && s.baseUrl && (a += 'for the Braze backend at "' + s.baseUrl + '" '),
                            N.info(a + 'with API key "' + t + '".'),
                            t = ce.language,
                            a = !1,
                            s && (s.language && (t = s.language,
                            a = !0),
                            s.localization && (t = s.localization,
                            a = !0)),
                            ca(t, a),
                            Te(x, s),
                            I = !0
                        },
                        Cb: function() {
                            N.info("Destroying appboy instance"),
                            r = null,
                            n()
                        },
                        ng: function(e) {
                            i() && (null == e && N.error("getDeviceId must be supplied with a callback. e.g., appboy.getDeviceId(function(deviceId) {console.log('the device id is ' + deviceId)})"),
                            "function" == typeof e && e(Rn(b).id))
                        },
                        Jd: function() {
                            N.Jd()
                        },
                        Fd: function(e) {
                            N.Fd(e)
                        },
                        Bc: function(e) {
                            if (i()) {
                                c.Bc(v, e);
                                var t = C.Ra
                                  , a = new m(t);
                                y(a, t.O.Wd, (function(e, n) {
                                    function i() {
                                        f.oa(Ka.Vd, [r], s)
                                    }
                                    var o = n.lastClick
                                      , r = n.trackingString;
                                    N.info("Firing push click trigger from " + r + " push click at " + o);
                                    var s = Tn(c, o, r);
                                    Cn(c, i, i),
                                    k(a, t.O.Wd, e)
                                }
                                )),
                                E(a, t.O.df, (function(e) {
                                    ci(h, e)
                                }
                                ))
                            }
                        },
                        Ya: function(e, t) {
                            i() && (null == e || 0 === e.length || e != e ? (N.error("changeUser requires a non-empty userId."),
                            "function" == typeof t && (N.info("messagingReadyCallback provided with an empty userId. Firing immediately."),
                            t())) : 997 < oi(e) ? N.error('Rejected user id "' + e + '" because it is longer than 997 bytes.') : c.Ya(e.toString(), [u, h, f], t, v))
                        },
                        pb: function() {
                            if (i())
                                return c.pb()
                        },
                        pg: function() {
                            if (i())
                                return s.contentSecurityNonce
                        },
                        Kb: function(e) {
                            i() && c.Kb(e)
                        },
                        Dc: function() {
                            i() && c.Dc()
                        },
                        We: function(e) {
                            if (i())
                                return De(p, e)
                        },
                        uc: function() {
                            if (i())
                                return u.uc()
                        },
                        La: function() {
                            if (i())
                                return h.La()
                        },
                        Ve: function(e) {
                            if (i())
                                return De(d, e)
                        },
                        nb: function() {
                            if (i())
                                return h.nb(!1)
                        },
                        Sg: function(e) {
                            if (i())
                                return De(g, e)
                        },
                        Xe: function(e) {
                            if (i())
                                return "function" != typeof e ? null : De(g, (function(t) {
                                    return e(t[0]),
                                    t.slice(1)
                                }
                                ))
                        },
                        Hb: function(e) {
                            if (i())
                                return e instanceof st || e instanceof Jt ? c.Hb(e).h : (N.error(In.Zb),
                                !1)
                        },
                        zc: function(e) {
                            if (i()) {
                                if (!(e instanceof st))
                                    return N.error(In.Zb),
                                    !1;
                                var t = c.zc(e);
                                if (t.h)
                                    for (var a = 0; a < t.j.length; a++)
                                        f.oa(Ka.Wb, [e.triggerId], t.j[a]);
                                return t.h
                            }
                        },
                        yc: function(e, t) {
                            if (i()) {
                                if (!(e instanceof Yt))
                                    return N.error("button must be an ab.InAppMessage.Button object"),
                                    !1;
                                if (!(t instanceof st))
                                    return N.error(In.Zb),
                                    !1;
                                var a = c.yc(e, t);
                                if (a.h)
                                    for (var n = 0; n < a.j.length; n++)
                                        f.oa(Ka.Wb, [t.triggerId, e.id], a.j[n]);
                                return a.h
                            }
                        },
                        Gb: function(e, t, a) {
                            if (i()) {
                                if (!(e instanceof ra))
                                    return N.error("inAppMessage argument to logInAppMessageHtmlClick must be an HtmlMessage object."),
                                    !1;
                                if ((a = c.Gb(e, t, a)).h)
                                    for (var n = 0; n < a.j.length; n++)
                                        f.oa(Ka.Wb, [e.triggerId, t], a.j[n]);
                                return a.h
                            }
                        },
                        M: function(e, t) {
                            if (i())
                                return e instanceof st || e instanceof Jt ? !!D(gt, t, t + " is not a valid in-app message display failure", "InAppMessage.DisplayFailures") && c.M(e.triggerId, t).h : (N.error(In.Zb),
                                !1)
                        },
                        Ka: function(e, t) {
                            if (i()) {
                                if (!T(e))
                                    return N.error("cards must be an array"),
                                    !1;
                                for (var a = 0; a < e.length; a++)
                                    if (!(e[a]instanceof He))
                                        return N.error("Each card in cards " + In.Oc),
                                        !1;
                                return c.Ka(e, t).h
                            }
                        },
                        Ja: function(e, t) {
                            if (i())
                                return e instanceof He ? c.Ja(e, t).h : (N.error("card " + In.Oc),
                                !1)
                        },
                        xc: function(e) {
                            if (i())
                                return e instanceof He ? c.xc(e).h : (N.error("card " + In.Oc),
                                !1)
                        },
                        Ne: function() {
                            if (i())
                                return Dn(c, _.yf).h
                        },
                        Me: function() {
                            if (i())
                                return Dn(c, _.kf).h
                        },
                        P: function(e) {
                            if (i()) {
                                for (var t = 0; t < S.length; t++)
                                    S[t].P(e);
                                x.P(e),
                                A.P(e)
                            }
                        },
                        N: function() {
                            if (i())
                                for (var e = 0; e < S.length; e++)
                                    S[e].N()
                        },
                        vd: function(e, n) {
                            if (i()) {
                                if (null == e || 0 >= e.length)
                                    return N.error('logCustomEvent requires a non-empty eventName, got "' + e + '". Ignoring event.'),
                                    !1;
                                if (!X(e, "log custom event", "the event name") || !a(n, "logCustomEvent", "eventProperties", 'log custom event "' + e + '"', "event"))
                                    return !1;
                                var o = c.vd(e, t(n));
                                if (o.h) {
                                    N.info('Logged custom event "' + e + '".');
                                    for (var r = 0; r < o.j.length; r++)
                                        f.oa(Ka.Gc, [e, n], o.j[r])
                                }
                                return o.h
                            }
                        },
                        wd: function(e, n, o, r, s) {
                            if (i()) {
                                if (null == o && (o = "USD"),
                                null == r && (r = 1),
                                null == e || 0 >= e.length)
                                    return N.error('logPurchase requires a non-empty productId, got "' + e + '", ignoring.'),
                                    !1;
                                if (!X(e, "log purchase", "the purchase name"))
                                    return !1;
                                var l = parseFloat(n);
                                if (isNaN(l))
                                    return N.error("logPurchase requires a numeric price, got " + n + ", ignoring."),
                                    !1;
                                if (l = l.toFixed(2),
                                n = parseInt(r),
                                isNaN(n))
                                    return N.error("logPurchase requires an integer quantity, got " + r + ", ignoring."),
                                    !1;
                                if (1 > n || n > In.Td)
                                    return N.error("logPurchase requires a quantity >1 and <" + In.Td + ", got " + n + ", ignoring."),
                                    !1;
                                if (o = o.toUpperCase(),
                                -1 === "AED AFN ALL AMD ANG AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB BRL BSD BTC BTN BWP BYR BZD CAD CDF CHF CLF CLP CNY COP CRC CUC CUP CVE CZK DJF DKK DOP DZD EEK EGP ERN ETB EUR FJD FKP GBP GEL GGP GHS GIP GMD GNF GTQ GYD HKD HNL HRK HTG HUF IDR ILS IMP INR IQD IRR ISK JEP JMD JOD JPY KES KGS KHR KMF KPW KRW KWD KYD KZT LAK LBP LKR LRD LSL LTL LVL LYD MAD MDL MGA MKD MMK MNT MOP MRO MTL MUR MVR MWK MXN MYR MZN NAD NGN NIO NOK NPR NZD OMR PAB PEN PGK PHP PKR PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SEK SGD SHP SLL SOS SRD STD SVC SYP SZL THB TJS TMT TND TOP TRY TTD TWD TZS UAH UGX USD UYU UZS VEF VND VUV WST XAF XAG XAU XCD XDR XOF XPD XPF XPT YER ZAR ZMK ZMW ZWL".split(" ").indexOf(o))
                                    return N.error("logPurchase requires a valid currencyCode, got " + o + ", ignoring."),
                                    !1;
                                if (!a(s, "logPurchase", "purchaseProperties", 'log purchase "' + e + '"', "purchase"))
                                    return !1;
                                if ((r = c.wd(e, l, o, n, t(s))).h)
                                    for (N.info("Logged " + n + " purchase" + (1 < n ? "s" : "") + ' of "' + e + '" for ' + o + " " + l + "."),
                                    o = 0; o < r.j.length; o++)
                                        f.oa(Ka.Sc, [e, s], r.j[o]);
                                return r.h
                            }
                        },
                        pa: function() {
                            if (i())
                                return v.pa()
                        },
                        Ia: function() {
                            if (i())
                                return v.Ia()
                        },
                        ud: function(e, t, a) {
                            i() && v.ud(e, t, a)
                        },
                        Eb: function() {
                            if (i())
                                return v.Eb()
                        },
                        vg: function(e, t, a) {
                            if (i())
                                return v.subscribe(a, (function(t, a, n) {
                                    c.Kb(),
                                    "function" == typeof e && e(t, a, n)
                                }
                                ), t)
                        },
                        Xg: function(e, t) {
                            if (i())
                                return v.unsubscribe(e, t)
                        },
                        Vg: function() {
                            i() && w.watchPosition()
                        },
                        Pg: function() {
                            null != c && c.Kb();
                            var e = new Ee(null,!0);
                            e.store("ab.optOut", "This-cookie-will-expire-in-" + Ae(e)),
                            new m(e = C.Ra).setItem(e.O.Rc, e.cc, !0),
                            n(),
                            z = !0
                        },
                        zg: function() {
                            new Ee(null,!0).remove("ab.optOut");
                            var e = C.Ra;
                            k(new m(e), e.O.Rc, e.cc),
                            n()
                        },
                        $g: function() {
                            if (null == r)
                                throw Error("Appboy must be initialized before calling methods.");
                            r.clearData();
                            for (var e = M(C), t = 0; t < e.length; t++)
                                new m(C[e[t]]).clearData();
                            I && (u.clearData(!0),
                            f.clearData(!0))
                        }
                    }
                }
                , Di = {
                    ab: {}
                }, Ti = Di.ab;
                for (_i in V)
                    Ti[_i] = V[_i];
                for (var Oi in Di.initialize = Ni.td,
                Di.destroy = Ni.Cb,
                Di.getDeviceId = Ni.ng,
                Di.toggleAppboyLogging = Ni.Jd,
                Di.setLogger = Ni.Fd,
                Di.openSession = Ni.Bc,
                Di.changeUser = Ni.Ya,
                Di.getUser = Ni.pb,
                Di.requestImmediateDataFlush = Ni.Kb,
                Di.requestFeedRefresh = Ni.Dc,
                Di.getCachedFeed = Ni.uc,
                Di.subscribeToFeedUpdates = Ni.We,
                Di.requestContentCardsRefresh = Ni.La,
                Di.getCachedContentCards = Ni.nb,
                Di.subscribeToContentCardsUpdates = Ni.Ve,
                Di.logCardImpressions = Ni.Ka,
                Di.logCardClick = Ni.Ja,
                Di.logCardDismissal = Ni.xc,
                Di.logFeedDisplayed = Ni.Ne,
                Di.logContentCardsDisplayed = Ni.Me,
                Di.logInAppMessageImpression = Ni.Hb,
                Di.logInAppMessageClick = Ni.zc,
                Di.logInAppMessageButtonClick = Ni.yc,
                Di.logInAppMessageHtmlClick = Ni.Gb,
                Di.subscribeToNewInAppMessages = Ni.Sg,
                Di.subscribeToInAppMessage = Ni.Xe,
                Di.removeSubscription = Ni.P,
                Di.removeAllSubscriptions = Ni.N,
                Di.logCustomEvent = Ni.vd,
                Di.logPurchase = Ni.wd,
                Di.isPushSupported = Ni.pa,
                Di.isPushBlocked = Ni.Ia,
                Di.isPushGranted = Ni.ud,
                Di.isPushPermissionGranted = Ni.Eb,
                Di.registerAppboyPushMessages = Ni.vg,
                Di.unregisterAppboyPushMessages = Ni.Xg,
                Di.trackLocation = Ni.Vg,
                Di.stopWebTracking = Ni.Pg,
                Di.resumeWebTracking = Ni.zg,
                Di.wipeData = Ni.$g,
                Di)
                    "object" == typeof t ? t[Oi] = Di[Oi] : Ci[Oi] = Di[Oi];
                var Ii = "object" == typeof t ? t : Ci
                  , Mi = new function(e, t) {
                    var a = !1
                      , n = !1
                      , i = !1
                      , o = !1
                      , r = null
                      , s = null
                      , l = null;
                    return e.Rg((function(t) {
                        function s(e) {
                            if (27 === e.keyCode && !i && 0 < document.querySelectorAll(".ab-modal-interactions").length) {
                                e = document.getElementsByClassName("ab-html-message");
                                for (var t = !1, a = 0; a < e.length; a++) {
                                    var n = e[a].contentWindow.document.getElementsByClassName("ab-programmatic-close-button")[0];
                                    null != n && (ze(n),
                                    t = !0)
                                }
                                t || null != (e = document.querySelectorAll(".ab-modal-interactions > .ab-close-button")[0]) && ze(e)
                            }
                        }
                        if (a = t.openInAppMessagesInNewTab || !1,
                        n = t.openCardsInNewTab || t.openNewsFeedCardsInNewTab || !1,
                        i = t.requireExplicitInAppMessageDismissal || !1,
                        o = t.enableHtmlInAppMessages || !1,
                        !0 === t.allowUserSuppliedJavascript && (o = !0),
                        r = null,
                        l = t.contentSecurityNonce || null,
                        t.doNotLoadFontAwesome || null !== document.querySelector('link[rel=stylesheet][href="https://use.fontawesome.com/7f85a56ba4.css"]') || ((t = document.createElement("link")).setAttribute("rel", "stylesheet"),
                        t.setAttribute("href", "https://use.fontawesome.com/7f85a56ba4.css"),
                        document.getElementsByTagName("head")[0].appendChild(t)),
                        t = "ab-css-definitions-" + "2.7.0".replace(/\./g, "-"),
                        null == document.getElementById(t)) {
                            var c = document.createElement("style");
                            c.innerHTML = na.Ee,
                            c.id = t,
                            null != l && c.setAttribute("nonce", l),
                            document.getElementsByTagName("head")[0].appendChild(c)
                        }
                        i || (document.addEventListener("keydown", s, !1),
                        e.Qg((function() {
                            document.removeEventListener("keydown", s)
                        }
                        )))
                    }
                    )),
                    {
                        dg: function() {
                            return null == r && (r = e.Xe((function(t) {
                                e.display.Ue(t)
                            }
                            ))),
                            r
                        },
                        Ue: function(n, r, s) {
                            if (null == n)
                                return !1;
                            if (n instanceof Jt)
                                return N.info("User received control for a multivariate test, logging to Braze servers."),
                                e.Hb(n),
                                !0;
                            if (!(n instanceof st))
                                return !1;
                            var c = n instanceof ra;
                            if (c && !n.Wg && !o)
                                return N.error('HTML in-app messages are disabled. Use the "enableHtmlInAppMessages" option for appboy.initialize to enable these messages.'),
                                e.M(n, gt.Pd),
                                !1;
                            if (null == r && (r = document.body),
                            n.cb() && 0 < r.querySelectorAll(".ab-modal-interactions").length)
                                return N.info("Cannot show in-app message '" + n.message + "' because another message is being shown."),
                                e.M(n, gt.bf),
                                !1;
                            if (Ge.tg()) {
                                var b = Ge.og();
                                if (b === Ge.Qa.ac && n.orientation === Ot || b === Ge.Qa.Lc && "PORTRAIT" === n.orientation)
                                    return N.info("Not showing " + ("PORTRAIT" === n.orientation ? "portrait" : "landscape") + " in-app message '" + n.message + "' because the screen is currently " + (b === Ge.Qa.ac ? "portrait" : "landscape")),
                                    e.M(n, gt.Jf),
                                    !1
                            }
                            if (!o) {
                                if (b = !1,
                                n.buttons && 0 < n.buttons.length)
                                    for (var p = n.buttons, u = 0; u < p.length; u++)
                                        p[u].clickAction === xt && (b = oa(p[u].uri));
                                else
                                    n.clickAction === xt && (b = oa(n.uri));
                                if (b)
                                    return N.error('Javascript click actions are disabled. Use the "allowUserSuppliedJavascript" option for appboy.initialize to enable these actions.'),
                                    e.M(n, gt.Pd),
                                    !1
                            }
                            var d = document.createElement("div");
                            d.className = "ab-iam-root v3",
                            d.className += n.na(),
                            lt(n) && (d.id = n.htmlId),
                            r.appendChild(d),
                            ct(n) && ((r = document.createElement("style")).innerHTML = n.css,
                            r.id = bt(n),
                            null != l && r.setAttribute("nonce", l),
                            document.getElementsByTagName("head")[0].appendChild(r));
                            var h = n instanceof la;
                            return r = n.$(e, t, (function() {
                                e.display.Hd()
                            }
                            ), (function(t) {
                                if (n.cb() && n.Ze()) {
                                    var a = document.createElement("div");
                                    if (a.className = "ab-page-blocker",
                                    ct(n) || (a.style.backgroundColor = rt(n.frameColor)),
                                    d.appendChild(a),
                                    !i) {
                                        var o = (new Date).valueOf();
                                        a.onclick = function(e) {
                                            200 < (new Date).valueOf() - o && (dt(n, t),
                                            e.stopPropagation())
                                        }
                                    }
                                    d.appendChild(t),
                                    t.focus(),
                                    n.Ac(d)
                                } else if (h) {
                                    var r = document.querySelectorAll(".ab-slideup");
                                    a = null;
                                    for (var l = r.length - 1; 0 <= l; l--)
                                        if (r[l] !== t) {
                                            a = r[l];
                                            break
                                        }
                                    "TOP" === n.slideFrom ? (r = 0,
                                    null != a && (r = a.offsetTop + a.offsetHeight),
                                    t.style.top = Math.max(r, 0) + "px") : (r = 0,
                                    null != a && (r = (window.innerHeight || document.documentElement.clientHeight) - a.offsetTop),
                                    t.style.bottom = Math.max(r, 0) + "px")
                                } else
                                    c && !i && t.contentWindow.addEventListener("keydown", (function(e) {
                                        27 === e.keyCode && n.Ce()
                                    }
                                    ));
                                e.Hb(n),
                                n.dismissType === Et && setTimeout((function() {
                                    d.contains(t) && dt(n, t)
                                }
                                ), n.duration),
                                "function" == typeof s && s()
                            }
                            ), a),
                            (c || h) && (d.appendChild(r),
                            n.Ac(d)),
                            !0
                        },
                        Hd: function(t, a, i) {
                            function o(t) {
                                for (var a = t.querySelectorAll(".ab-feed"), n = null, i = 0; i < a.length; i++)
                                    a[i].parentNode === t && (n = a[i]);
                                null != n ? (pa(e, n),
                                n.parentNode.replaceChild(p, n)) : t.appendChild(p),
                                setTimeout((function() {
                                    p.className = p.className.replace("ab-hide", "ab-show")
                                }
                                ), 0),
                                s && p.focus(),
                                e.Ne(),
                                da(c, e, p)
                            }
                            function r(e, t) {
                                if (null == t)
                                    return e;
                                for (var a = [], n = 0; n < t.length; n++)
                                    a.push(t[n].toLowerCase());
                                for (t = [],
                                n = 0; n < e.length; n++) {
                                    for (var i = [], o = 0; o < e[n].categories.length; o++)
                                        i.push(e[n].categories[o].toLowerCase());
                                    0 < I(i, a).length && t.push(e[n])
                                }
                                return t
                            }
                            var s = !1;
                            null == t && (t = document.body,
                            s = !0);
                            var l = !1
                              , c = null;
                            null == a ? (fa(c = e.uc(), r(c.cards, i), c.lastUpdated, null, e, n),
                            l = !0) : c = new ba(r(a, i),new Date);
                            var b, p = c.$(e, n);
                            if (l) {
                                (null == c.lastUpdated || 6e4 < (new Date).valueOf() - c.lastUpdated.valueOf()) && (N.info("Cached feed was older than max TTL of 60000 ms, requesting an update from the server."),
                                ha(c, e, p));
                                var u = (new Date).valueOf();
                                a = e.We((function(t) {
                                    var a = p.querySelectorAll(".ab-refresh-button")[0];
                                    if (null != a) {
                                        var o = 500
                                          , s = parseInt(p.getAttribute(va));
                                        o = isNaN(s) ? o - ((new Date).valueOf() - u) : o - ((new Date).valueOf() - s),
                                        setTimeout((function() {
                                            a.className = a.className.replace(/fa-spin/g, "")
                                        }
                                        ), Math.max(o, 0))
                                    }
                                    fa(c, r(t.cards, i), t.lastUpdated, p, e, n)
                                }
                                )),
                                p.setAttribute(ma, a)
                            }
                            null != t ? o(t) : window.onload = (b = window.onload,
                            function() {
                                "function" == typeof b && b(),
                                o(document.body)
                            }
                            )
                        },
                        Fe: function() {
                            for (var t = document.querySelectorAll(".ab-feed"), a = 0; a < t.length; a++)
                                pa(e, t[a])
                        },
                        Ug: function(t, a, n) {
                            0 < document.querySelectorAll(".ab-feed").length ? e.display.Fe() : e.display.Hd(t, a, n)
                        },
                        Te: function(t, a) {
                            function i(t) {
                                for (var a = t.querySelectorAll(".ab-feed"), n = null, i = 0; i < a.length; i++)
                                    a[i].parentNode === t && (n = a[i]);
                                null != n ? (pa(e, n),
                                n.parentNode.replaceChild(l, n)) : t.appendChild(l),
                                setTimeout((function() {
                                    l.className = l.className.replace("ab-hide", "ab-show")
                                }
                                ), 0),
                                o && l.focus(),
                                e.Me(),
                                da(r, e, l)
                            }
                            var o = !1;
                            null == t && (t = document.body,
                            o = !0);
                            var r = null;
                            r = e.nb(),
                            "function" == typeof a && fa(r, a(r.cards.slice()), r.lastUpdated, null, e, n);
                            var l = r.$(e, n);
                            (null == r.lastUpdated || 6e4 < (new Date).valueOf() - r.lastUpdated.valueOf()) && (null == s || 6e4 < (new Date).valueOf() - s.valueOf()) && (N.info("Cached content cards were older than max TTL of 60000 ms, requesting a sync from the server."),
                            ha(r, e, l),
                            s = (new Date).valueOf());
                            var c, b = (new Date).valueOf(), p = e.Ve((function(t) {
                                var i = l.querySelectorAll(".ab-refresh-button")[0];
                                if (null != i) {
                                    var o = 500
                                      , s = parseInt(l.getAttribute(va));
                                    o = isNaN(s) ? o - ((new Date).valueOf() - b) : o - ((new Date).valueOf() - s),
                                    setTimeout((function() {
                                        i.className = i.className.replace(/fa-spin/g, "")
                                    }
                                    ), Math.max(o, 0))
                                }
                                o = t.cards,
                                "function" == typeof a && (o = a(o.slice())),
                                fa(r, o, t.lastUpdated, l, e, n)
                            }
                            ));
                            l.setAttribute(ma, p),
                            null != t ? i(t) : window.onload = (c = window.onload,
                            function() {
                                "function" == typeof c && c(),
                                i(document.body)
                            }
                            )
                        },
                        Le: function() {
                            for (var t = document.querySelectorAll(".ab-feed"), a = 0; a < t.length; a++)
                                pa(e, t[a])
                        },
                        Tg: function(t, a) {
                            0 < document.querySelectorAll(".ab-feed").length ? e.display.Le() : e.display.Te(t, a)
                        }
                    }
                }
                (Ni,Ii);
                return Ii.display = {},
                Ii.display.automaticallyShowNewInAppMessages = Mi.dg,
                Ii.display.showInAppMessage = Mi.Ue,
                Ii.display.showFeed = Mi.Hd,
                Ii.display.destroyFeed = Mi.Fe,
                Ii.display.toggleFeed = Mi.Ug,
                Ii.display.showContentCards = Mi.Te,
                Ii.display.hideContentCards = Mi.Le,
                Ii.display.toggleContentCards = Mi.Tg,
                Ni.display = Mi,
                t
            }
            ,
            void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            var a = window.appboyQueue || ("undefined" != typeof appboyQueue ? appboyQueue : null);
            if (void 0 !== a && a && a.length && 0 < a.length) {
                var b = a === window.appboyQueue;
                window.appboyQueue = appboyQueue = null;
                for (var c = 0; c < a.length; c++)
                    if (a[c].callee) {
                        var d = a[c].callee.name;
                        if (null != d && "" !== d || (d = /^function ([\w]*)\(/g.exec(a[c].callee.toString())[1]),
                        null != d && "" !== d) {
                            for (var e = d.split("_"), f = b ? window.appboy : appboy, g = this, h = "appboy", k = 0; k < e.length; k++) {
                                if ("prototype" === e[k]) {
                                    var l = eval({
                                        "appboy.ab.User": "appboy.getUser",
                                        "appboy.ab.Feed": "appboy.getCachedFeed",
                                        "appboy.ab.ContentCards": "appboy.getCachedContentCards"
                                    }[h]);
                                    g = f = null != l ? l.apply() : new f.constructor
                                } else
                                    f = f[e[k]];
                                h += "." + e[k]
                            }
                            null != f && "function" == typeof f && f.apply(g, a[c])
                        }
                    }
            }
        }
        ).call(window)
    }
}]);

