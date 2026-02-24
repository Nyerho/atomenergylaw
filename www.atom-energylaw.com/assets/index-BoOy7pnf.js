(function() {
    const d = document.createElement("link").relList;
    if (d && d.supports && d.supports("modulepreload")) return;
    for (const A of document.querySelectorAll('link[rel="modulepreload"]')) o(A);
    new MutationObserver(A => {
        for (const M of A)
            if (M.type === "childList")
                for (const j of M.addedNodes) j.tagName === "LINK" && j.rel === "modulepreload" && o(j)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function p(A) {
        const M = {};
        return A.integrity && (M.integrity = A.integrity), A.referrerPolicy && (M.referrerPolicy = A.referrerPolicy), A.crossOrigin === "use-credentials" ? M.credentials = "include" : A.crossOrigin === "anonymous" ? M.credentials = "omit" : M.credentials = "same-origin", M
    }

    function o(A) {
        if (A.ep) return;
        A.ep = !0;
        const M = p(A);
        fetch(A.href, M)
    }
})();

function xy(c) {
    return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c
}
var ds = {
        exports: {}
    },
    Nn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pd;

function _y() {
    if (pd) return Nn;
    pd = 1;
    var c = Symbol.for("react.transitional.element"),
        d = Symbol.for("react.fragment");

    function p(o, A, M) {
        var j = null;
        if (M !== void 0 && (j = "" + M), A.key !== void 0 && (j = "" + A.key), "key" in A) {
            M = {};
            for (var C in A) C !== "key" && (M[C] = A[C])
        } else M = A;
        return A = M.ref, {
            $$typeof: c,
            type: o,
            key: j,
            ref: A !== void 0 ? A : null,
            props: M
        }
    }
    return Nn.Fragment = d, Nn.jsx = p, Nn.jsxs = p, Nn
}
var bd;

function Ty() {
    return bd || (bd = 1, ds.exports = _y()), ds.exports
}
var r = Ty(),
    ms = {
        exports: {}
    },
    I = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xd;

function Sy() {
    if (xd) return I;
    xd = 1;
    var c = Symbol.for("react.transitional.element"),
        d = Symbol.for("react.portal"),
        p = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        A = Symbol.for("react.profiler"),
        M = Symbol.for("react.consumer"),
        j = Symbol.for("react.context"),
        C = Symbol.for("react.forward_ref"),
        O = Symbol.for("react.suspense"),
        _ = Symbol.for("react.memo"),
        D = Symbol.for("react.lazy"),
        X = Symbol.iterator;

    function W(m) {
        return m === null || typeof m != "object" ? null : (m = X && m[X] || m["@@iterator"], typeof m == "function" ? m : null)
    }
    var st = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        dt = Object.assign,
        at = {};

    function F(m, z, H) {
        this.props = m, this.context = z, this.refs = at, this.updater = H || st
    }
    F.prototype.isReactComponent = {}, F.prototype.setState = function(m, z) {
        if (typeof m != "object" && typeof m != "function" && m != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, z, "setState")
    }, F.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate")
    };

    function lt() {}
    lt.prototype = F.prototype;

    function Y(m, z, H) {
        this.props = m, this.context = z, this.refs = at, this.updater = H || st
    }
    var q = Y.prototype = new lt;
    q.constructor = Y, dt(q, F.prototype), q.isPureReactComponent = !0;
    var k = Array.isArray,
        Q = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        vt = Object.prototype.hasOwnProperty;

    function J(m, z, H, U, w, ft) {
        return H = ft.ref, {
            $$typeof: c,
            type: m,
            key: z,
            ref: H !== void 0 ? H : null,
            props: ft
        }
    }

    function P(m, z) {
        return J(m.type, z, void 0, void 0, void 0, m.props)
    }

    function Mt(m) {
        return typeof m == "object" && m !== null && m.$$typeof === c
    }

    function Ft(m) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + m.replace(/[=:]/g, function(H) {
            return z[H]
        })
    }
    var Ct = /\/+/g;

    function At(m, z) {
        return typeof m == "object" && m !== null && m.key != null ? Ft("" + m.key) : z.toString(36)
    }

    function he() {}

    function He(m) {
        switch (m.status) {
            case "fulfilled":
                return m.value;
            case "rejected":
                throw m.reason;
            default:
                switch (typeof m.status == "string" ? m.then(he, he) : (m.status = "pending", m.then(function(z) {
                    m.status === "pending" && (m.status = "fulfilled", m.value = z)
                }, function(z) {
                    m.status === "pending" && (m.status = "rejected", m.reason = z)
                })), m.status) {
                    case "fulfilled":
                        return m.value;
                    case "rejected":
                        throw m.reason
                }
        }
        throw m
    }

    function Bt(m, z, H, U, w) {
        var ft = typeof m;
        (ft === "undefined" || ft === "boolean") && (m = null);
        var $ = !1;
        if (m === null) $ = !0;
        else switch (ft) {
            case "bigint":
            case "string":
            case "number":
                $ = !0;
                break;
            case "object":
                switch (m.$$typeof) {
                    case c:
                    case d:
                        $ = !0;
                        break;
                    case D:
                        return $ = m._init, Bt($(m._payload), z, H, U, w)
                }
        }
        if ($) return w = w(m), $ = U === "" ? "." + At(m, 0) : U, k(w) ? (H = "", $ != null && (H = $.replace(Ct, "$&/") + "/"), Bt(w, z, H, "", function(Fe) {
            return Fe
        })) : w != null && (Mt(w) && (w = P(w, H + (w.key == null || m && m.key === w.key ? "" : ("" + w.key).replace(Ct, "$&/") + "/") + $)), z.push(w)), 1;
        $ = 0;
        var ue = U === "" ? "." : U + ":";
        if (k(m))
            for (var Et = 0; Et < m.length; Et++) U = m[Et], ft = ue + At(U, Et), $ += Bt(U, z, H, ft, w);
        else if (Et = W(m), typeof Et == "function")
            for (m = Et.call(m), Et = 0; !(U = m.next()).done;) U = U.value, ft = ue + At(U, Et++), $ += Bt(U, z, H, ft, w);
        else if (ft === "object") {
            if (typeof m.then == "function") return Bt(He(m), z, H, U, w);
            throw z = String(m), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.")
        }
        return $
    }

    function T(m, z, H) {
        if (m == null) return m;
        var U = [],
            w = 0;
        return Bt(m, U, "", "", function(ft) {
            return z.call(H, ft, w++)
        }), U
    }

    function R(m) {
        if (m._status === -1) {
            var z = m._result;
            z = z(), z.then(function(H) {
                (m._status === 0 || m._status === -1) && (m._status = 1, m._result = H)
            }, function(H) {
                (m._status === 0 || m._status === -1) && (m._status = 2, m._result = H)
            }), m._status === -1 && (m._status = 0, m._result = z)
        }
        if (m._status === 1) return m._result.default;
        throw m._result
    }
    var L = typeof reportError == "function" ? reportError : function(m) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
                error: m
            });
            if (!window.dispatchEvent(z)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", m);
            return
        }
        console.error(m)
    };

    function xt() {}
    return I.Children = {
        map: T,
        forEach: function(m, z, H) {
            T(m, function() {
                z.apply(this, arguments)
            }, H)
        },
        count: function(m) {
            var z = 0;
            return T(m, function() {
                z++
            }), z
        },
        toArray: function(m) {
            return T(m, function(z) {
                return z
            }) || []
        },
        only: function(m) {
            if (!Mt(m)) throw Error("React.Children.only expected to receive a single React element child.");
            return m
        }
    }, I.Component = F, I.Fragment = p, I.Profiler = A, I.PureComponent = Y, I.StrictMode = o, I.Suspense = O, I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, I.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(m) {
            return Q.H.useMemoCache(m)
        }
    }, I.cache = function(m) {
        return function() {
            return m.apply(null, arguments)
        }
    }, I.cloneElement = function(m, z, H) {
        if (m == null) throw Error("The argument must be a React element, but you passed " + m + ".");
        var U = dt({}, m.props),
            w = m.key,
            ft = void 0;
        if (z != null)
            for ($ in z.ref !== void 0 && (ft = void 0), z.key !== void 0 && (w = "" + z.key), z) !vt.call(z, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && z.ref === void 0 || (U[$] = z[$]);
        var $ = arguments.length - 2;
        if ($ === 1) U.children = H;
        else if (1 < $) {
            for (var ue = Array($), Et = 0; Et < $; Et++) ue[Et] = arguments[Et + 2];
            U.children = ue
        }
        return J(m.type, w, void 0, void 0, ft, U)
    }, I.createContext = function(m) {
        return m = {
            $$typeof: j,
            _currentValue: m,
            _currentValue2: m,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, m.Provider = m, m.Consumer = {
            $$typeof: M,
            _context: m
        }, m
    }, I.createElement = function(m, z, H) {
        var U, w = {},
            ft = null;
        if (z != null)
            for (U in z.key !== void 0 && (ft = "" + z.key), z) vt.call(z, U) && U !== "key" && U !== "__self" && U !== "__source" && (w[U] = z[U]);
        var $ = arguments.length - 2;
        if ($ === 1) w.children = H;
        else if (1 < $) {
            for (var ue = Array($), Et = 0; Et < $; Et++) ue[Et] = arguments[Et + 2];
            w.children = ue
        }
        if (m && m.defaultProps)
            for (U in $ = m.defaultProps, $) w[U] === void 0 && (w[U] = $[U]);
        return J(m, ft, void 0, void 0, null, w)
    }, I.createRef = function() {
        return {
            current: null
        }
    }, I.forwardRef = function(m) {
        return {
            $$typeof: C,
            render: m
        }
    }, I.isValidElement = Mt, I.lazy = function(m) {
        return {
            $$typeof: D,
            _payload: {
                _status: -1,
                _result: m
            },
            _init: R
        }
    }, I.memo = function(m, z) {
        return {
            $$typeof: _,
            type: m,
            compare: z === void 0 ? null : z
        }
    }, I.startTransition = function(m) {
        var z = Q.T,
            H = {};
        Q.T = H;
        try {
            var U = m(),
                w = Q.S;
            w !== null && w(H, U), typeof U == "object" && U !== null && typeof U.then == "function" && U.then(xt, L)
        } catch (ft) {
            L(ft)
        } finally {
            Q.T = z
        }
    }, I.unstable_useCacheRefresh = function() {
        return Q.H.useCacheRefresh()
    }, I.use = function(m) {
        return Q.H.use(m)
    }, I.useActionState = function(m, z, H) {
        return Q.H.useActionState(m, z, H)
    }, I.useCallback = function(m, z) {
        return Q.H.useCallback(m, z)
    }, I.useContext = function(m) {
        return Q.H.useContext(m)
    }, I.useDebugValue = function() {}, I.useDeferredValue = function(m, z) {
        return Q.H.useDeferredValue(m, z)
    }, I.useEffect = function(m, z, H) {
        var U = Q.H;
        if (typeof H == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return U.useEffect(m, z)
    }, I.useId = function() {
        return Q.H.useId()
    }, I.useImperativeHandle = function(m, z, H) {
        return Q.H.useImperativeHandle(m, z, H)
    }, I.useInsertionEffect = function(m, z) {
        return Q.H.useInsertionEffect(m, z)
    }, I.useLayoutEffect = function(m, z) {
        return Q.H.useLayoutEffect(m, z)
    }, I.useMemo = function(m, z) {
        return Q.H.useMemo(m, z)
    }, I.useOptimistic = function(m, z) {
        return Q.H.useOptimistic(m, z)
    }, I.useReducer = function(m, z, H) {
        return Q.H.useReducer(m, z, H)
    }, I.useRef = function(m) {
        return Q.H.useRef(m)
    }, I.useState = function(m) {
        return Q.H.useState(m)
    }, I.useSyncExternalStore = function(m, z, H) {
        return Q.H.useSyncExternalStore(m, z, H)
    }, I.useTransition = function() {
        return Q.H.useTransition()
    }, I.version = "19.1.0", I
}
var _d;

function Ts() {
    return _d || (_d = 1, ms.exports = Sy()), ms.exports
}
var ct = Ts();
const St = xy(ct);
var ys = {
        exports: {}
    },
    zn = {},
    hs = {
        exports: {}
    },
    vs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;

function Ay() {
    return Td || (Td = 1, function(c) {
        function d(T, R) {
            var L = T.length;
            T.push(R);
            t: for (; 0 < L;) {
                var xt = L - 1 >>> 1,
                    m = T[xt];
                if (0 < A(m, R)) T[xt] = R, T[L] = m, L = xt;
                else break t
            }
        }

        function p(T) {
            return T.length === 0 ? null : T[0]
        }

        function o(T) {
            if (T.length === 0) return null;
            var R = T[0],
                L = T.pop();
            if (L !== R) {
                T[0] = L;
                t: for (var xt = 0, m = T.length, z = m >>> 1; xt < z;) {
                    var H = 2 * (xt + 1) - 1,
                        U = T[H],
                        w = H + 1,
                        ft = T[w];
                    if (0 > A(U, L)) w < m && 0 > A(ft, U) ? (T[xt] = ft, T[w] = L, xt = w) : (T[xt] = U, T[H] = L, xt = H);
                    else if (w < m && 0 > A(ft, L)) T[xt] = ft, T[w] = L, xt = w;
                    else break t
                }
            }
            return R
        }

        function A(T, R) {
            var L = T.sortIndex - R.sortIndex;
            return L !== 0 ? L : T.id - R.id
        }
        if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var M = performance;
            c.unstable_now = function() {
                return M.now()
            }
        } else {
            var j = Date,
                C = j.now();
            c.unstable_now = function() {
                return j.now() - C
            }
        }
        var O = [],
            _ = [],
            D = 1,
            X = null,
            W = 3,
            st = !1,
            dt = !1,
            at = !1,
            F = !1,
            lt = typeof setTimeout == "function" ? setTimeout : null,
            Y = typeof clearTimeout == "function" ? clearTimeout : null,
            q = typeof setImmediate < "u" ? setImmediate : null;

        function k(T) {
            for (var R = p(_); R !== null;) {
                if (R.callback === null) o(_);
                else if (R.startTime <= T) o(_), R.sortIndex = R.expirationTime, d(O, R);
                else break;
                R = p(_)
            }
        }

        function Q(T) {
            if (at = !1, k(T), !dt)
                if (p(O) !== null) dt = !0, vt || (vt = !0, At());
                else {
                    var R = p(_);
                    R !== null && Bt(Q, R.startTime - T)
                }
        }
        var vt = !1,
            J = -1,
            P = 5,
            Mt = -1;

        function Ft() {
            return F ? !0 : !(c.unstable_now() - Mt < P)
        }

        function Ct() {
            if (F = !1, vt) {
                var T = c.unstable_now();
                Mt = T;
                var R = !0;
                try {
                    t: {
                        dt = !1,
                        at && (at = !1, Y(J), J = -1),
                        st = !0;
                        var L = W;
                        try {
                            e: {
                                for (k(T), X = p(O); X !== null && !(X.expirationTime > T && Ft());) {
                                    var xt = X.callback;
                                    if (typeof xt == "function") {
                                        X.callback = null, W = X.priorityLevel;
                                        var m = xt(X.expirationTime <= T);
                                        if (T = c.unstable_now(), typeof m == "function") {
                                            X.callback = m, k(T), R = !0;
                                            break e
                                        }
                                        X === p(O) && o(O), k(T)
                                    } else o(O);
                                    X = p(O)
                                }
                                if (X !== null) R = !0;
                                else {
                                    var z = p(_);
                                    z !== null && Bt(Q, z.startTime - T), R = !1
                                }
                            }
                            break t
                        }
                        finally {
                            X = null, W = L, st = !1
                        }
                        R = void 0
                    }
                }
                finally {
                    R ? At() : vt = !1
                }
            }
        }
        var At;
        if (typeof q == "function") At = function() {
            q(Ct)
        };
        else if (typeof MessageChannel < "u") {
            var he = new MessageChannel,
                He = he.port2;
            he.port1.onmessage = Ct, At = function() {
                He.postMessage(null)
            }
        } else At = function() {
            lt(Ct, 0)
        };

        function Bt(T, R) {
            J = lt(function() {
                T(c.unstable_now())
            }, R)
        }
        c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(T) {
            T.callback = null
        }, c.unstable_forceFrameRate = function(T) {
            0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < T ? Math.floor(1e3 / T) : 5
        }, c.unstable_getCurrentPriorityLevel = function() {
            return W
        }, c.unstable_next = function(T) {
            switch (W) {
                case 1:
                case 2:
                case 3:
                    var R = 3;
                    break;
                default:
                    R = W
            }
            var L = W;
            W = R;
            try {
                return T()
            } finally {
                W = L
            }
        }, c.unstable_requestPaint = function() {
            F = !0
        }, c.unstable_runWithPriority = function(T, R) {
            switch (T) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    T = 3
            }
            var L = W;
            W = T;
            try {
                return R()
            } finally {
                W = L
            }
        }, c.unstable_scheduleCallback = function(T, R, L) {
            var xt = c.unstable_now();
            switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? xt + L : xt) : L = xt, T) {
                case 1:
                    var m = -1;
                    break;
                case 2:
                    m = 250;
                    break;
                case 5:
                    m = 1073741823;
                    break;
                case 4:
                    m = 1e4;
                    break;
                default:
                    m = 5e3
            }
            return m = L + m, T = {
                id: D++,
                callback: R,
                priorityLevel: T,
                startTime: L,
                expirationTime: m,
                sortIndex: -1
            }, L > xt ? (T.sortIndex = L, d(_, T), p(O) === null && T === p(_) && (at ? (Y(J), J = -1) : at = !0, Bt(Q, L - xt))) : (T.sortIndex = m, d(O, T), dt || st || (dt = !0, vt || (vt = !0, At()))), T
        }, c.unstable_shouldYield = Ft, c.unstable_wrapCallback = function(T) {
            var R = W;
            return function() {
                var L = W;
                W = R;
                try {
                    return T.apply(this, arguments)
                } finally {
                    W = L
                }
            }
        }
    }(vs)), vs
}
var Sd;

function Ey() {
    return Sd || (Sd = 1, hs.exports = Ay()), hs.exports
}
var gs = {
        exports: {}
    },
    Wt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad;

function Ny() {
    if (Ad) return Wt;
    Ad = 1;
    var c = Ts();

    function d(O) {
        var _ = "https://react.dev/errors/" + O;
        if (1 < arguments.length) {
            _ += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var D = 2; D < arguments.length; D++) _ += "&args[]=" + encodeURIComponent(arguments[D])
        }
        return "Minified React error #" + O + "; visit " + _ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function p() {}
    var o = {
            d: {
                f: p,
                r: function() {
                    throw Error(d(522))
                },
                D: p,
                C: p,
                L: p,
                m: p,
                X: p,
                S: p,
                M: p
            },
            p: 0,
            findDOMNode: null
        },
        A = Symbol.for("react.portal");

    function M(O, _, D) {
        var X = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: A,
            key: X == null ? null : "" + X,
            children: O,
            containerInfo: _,
            implementation: D
        }
    }
    var j = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function C(O, _) {
        if (O === "font") return "";
        if (typeof _ == "string") return _ === "use-credentials" ? _ : ""
    }
    return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Wt.createPortal = function(O, _) {
        var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!_ || _.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11) throw Error(d(299));
        return M(O, _, null, D)
    }, Wt.flushSync = function(O) {
        var _ = j.T,
            D = o.p;
        try {
            if (j.T = null, o.p = 2, O) return O()
        } finally {
            j.T = _, o.p = D, o.d.f()
        }
    }, Wt.preconnect = function(O, _) {
        typeof O == "string" && (_ ? (_ = _.crossOrigin, _ = typeof _ == "string" ? _ === "use-credentials" ? _ : "" : void 0) : _ = null, o.d.C(O, _))
    }, Wt.prefetchDNS = function(O) {
        typeof O == "string" && o.d.D(O)
    }, Wt.preinit = function(O, _) {
        if (typeof O == "string" && _ && typeof _.as == "string") {
            var D = _.as,
                X = C(D, _.crossOrigin),
                W = typeof _.integrity == "string" ? _.integrity : void 0,
                st = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
            D === "style" ? o.d.S(O, typeof _.precedence == "string" ? _.precedence : void 0, {
                crossOrigin: X,
                integrity: W,
                fetchPriority: st
            }) : D === "script" && o.d.X(O, {
                crossOrigin: X,
                integrity: W,
                fetchPriority: st,
                nonce: typeof _.nonce == "string" ? _.nonce : void 0
            })
        }
    }, Wt.preinitModule = function(O, _) {
        if (typeof O == "string")
            if (typeof _ == "object" && _ !== null) {
                if (_.as == null || _.as === "script") {
                    var D = C(_.as, _.crossOrigin);
                    o.d.M(O, {
                        crossOrigin: D,
                        integrity: typeof _.integrity == "string" ? _.integrity : void 0,
                        nonce: typeof _.nonce == "string" ? _.nonce : void 0
                    })
                }
            } else _ == null && o.d.M(O)
    }, Wt.preload = function(O, _) {
        if (typeof O == "string" && typeof _ == "object" && _ !== null && typeof _.as == "string") {
            var D = _.as,
                X = C(D, _.crossOrigin);
            o.d.L(O, D, {
                crossOrigin: X,
                integrity: typeof _.integrity == "string" ? _.integrity : void 0,
                nonce: typeof _.nonce == "string" ? _.nonce : void 0,
                type: typeof _.type == "string" ? _.type : void 0,
                fetchPriority: typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
                referrerPolicy: typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
                imageSrcSet: typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
                imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
                media: typeof _.media == "string" ? _.media : void 0
            })
        }
    }, Wt.preloadModule = function(O, _) {
        if (typeof O == "string")
            if (_) {
                var D = C(_.as, _.crossOrigin);
                o.d.m(O, {
                    as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
                    crossOrigin: D,
                    integrity: typeof _.integrity == "string" ? _.integrity : void 0
                })
            } else o.d.m(O)
    }, Wt.requestFormReset = function(O) {
        o.d.r(O)
    }, Wt.unstable_batchedUpdates = function(O, _) {
        return O(_)
    }, Wt.useFormState = function(O, _, D) {
        return j.H.useFormState(O, _, D)
    }, Wt.useFormStatus = function() {
        return j.H.useHostTransitionStatus()
    }, Wt.version = "19.1.0", Wt
}
var Ed;

function zy() {
    if (Ed) return gs.exports;
    Ed = 1;

    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
        } catch (d) {
            console.error(d)
        }
    }
    return c(), gs.exports = Ny(), gs.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd;

function My() {
    if (Nd) return zn;
    Nd = 1;
    var c = Ey(),
        d = Ts(),
        p = zy();

    function o(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++) e += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function A(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function M(t) {
        var e = t,
            a = t;
        if (t.alternate)
            for (; e.return;) e = e.return;
        else {
            t = e;
            do e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return; while (t)
        }
        return e.tag === 3 ? a : null
    }

    function j(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function C(t) {
        if (M(t) !== t) throw Error(o(188))
    }

    function O(t) {
        var e = t.alternate;
        if (!e) {
            if (e = M(t), e === null) throw Error(o(188));
            return e !== t ? null : t
        }
        for (var a = t, l = e;;) {
            var n = a.return;
            if (n === null) break;
            var u = n.alternate;
            if (u === null) {
                if (l = n.return, l !== null) {
                    a = l;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u;) {
                    if (u === a) return C(n), t;
                    if (u === l) return C(n), e;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (a.return !== l.return) a = n, l = u;
            else {
                for (var i = !1, s = n.child; s;) {
                    if (s === a) {
                        i = !0, a = n, l = u;
                        break
                    }
                    if (s === l) {
                        i = !0, l = n, a = u;
                        break
                    }
                    s = s.sibling
                }
                if (!i) {
                    for (s = u.child; s;) {
                        if (s === a) {
                            i = !0, a = u, l = n;
                            break
                        }
                        if (s === l) {
                            i = !0, l = u, a = n;
                            break
                        }
                        s = s.sibling
                    }
                    if (!i) throw Error(o(189))
                }
            }
            if (a.alternate !== l) throw Error(o(190))
        }
        if (a.tag !== 3) throw Error(o(188));
        return a.stateNode.current === a ? t : e
    }

    function _(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null;) {
            if (e = _(t), e !== null) return e;
            t = t.sibling
        }
        return null
    }
    var D = Object.assign,
        X = Symbol.for("react.element"),
        W = Symbol.for("react.transitional.element"),
        st = Symbol.for("react.portal"),
        dt = Symbol.for("react.fragment"),
        at = Symbol.for("react.strict_mode"),
        F = Symbol.for("react.profiler"),
        lt = Symbol.for("react.provider"),
        Y = Symbol.for("react.consumer"),
        q = Symbol.for("react.context"),
        k = Symbol.for("react.forward_ref"),
        Q = Symbol.for("react.suspense"),
        vt = Symbol.for("react.suspense_list"),
        J = Symbol.for("react.memo"),
        P = Symbol.for("react.lazy"),
        Mt = Symbol.for("react.activity"),
        Ft = Symbol.for("react.memo_cache_sentinel"),
        Ct = Symbol.iterator;

    function At(t) {
        return t === null || typeof t != "object" ? null : (t = Ct && t[Ct] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var he = Symbol.for("react.client.reference");

    function He(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === he ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case dt:
                return "Fragment";
            case F:
                return "Profiler";
            case at:
                return "StrictMode";
            case Q:
                return "Suspense";
            case vt:
                return "SuspenseList";
            case Mt:
                return "Activity"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case st:
                return "Portal";
            case q:
                return (t.displayName || "Context") + ".Provider";
            case Y:
                return (t._context.displayName || "Context") + ".Consumer";
            case k:
                var e = t.render;
                return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case J:
                return e = t.displayName || null, e !== null ? e : He(t.type) || "Memo";
            case P:
                e = t._payload, t = t._init;
                try {
                    return He(t(e))
                } catch {}
        }
        return null
    }
    var Bt = Array.isArray,
        T = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        R = p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        L = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        xt = [],
        m = -1;

    function z(t) {
        return {
            current: t
        }
    }

    function H(t) {
        0 > m || (t.current = xt[m], xt[m] = null, m--)
    }

    function U(t, e) {
        m++, xt[m] = t.current, t.current = e
    }
    var w = z(null),
        ft = z(null),
        $ = z(null),
        ue = z(null);

    function Et(t, e) {
        switch (U($, e), U(ft, t), U(w, null), e.nodeType) {
            case 9:
            case 11:
                t = (t = e.documentElement) && (t = t.namespaceURI) ? Kr(t) : 0;
                break;
            default:
                if (t = e.tagName, e = e.namespaceURI) e = Kr(e), t = kr(e, t);
                else switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        H(w), U(w, t)
    }

    function Fe() {
        H(w), H(ft), H($)
    }

    function Fu(t) {
        t.memoizedState !== null && U(ue, t);
        var e = w.current,
            a = kr(e, t.type);
        e !== a && (U(ft, t), U(w, a))
    }

    function Un(t) {
        ft.current === t && (H(w), H(ft)), ue.current === t && (H(ue), _n._currentValue = L)
    }
    var Iu = Object.prototype.hasOwnProperty,
        Pu = c.unstable_scheduleCallback,
        ti = c.unstable_cancelCallback,
        Id = c.unstable_shouldYield,
        Pd = c.unstable_requestPaint,
        Me = c.unstable_now,
        t0 = c.unstable_getCurrentPriorityLevel,
        As = c.unstable_ImmediatePriority,
        Es = c.unstable_UserBlockingPriority,
        Hn = c.unstable_NormalPriority,
        e0 = c.unstable_LowPriority,
        Ns = c.unstable_IdlePriority,
        a0 = c.log,
        l0 = c.unstable_setDisableYieldValue,
        Ml = null,
        ie = null;

    function Ie(t) {
        if (typeof a0 == "function" && l0(t), ie && typeof ie.setStrictMode == "function") try {
            ie.setStrictMode(Ml, t)
        } catch {}
    }
    var ce = Math.clz32 ? Math.clz32 : i0,
        n0 = Math.log,
        u0 = Math.LN2;

    function i0(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (n0(t) / u0 | 0) | 0
    }
    var Cn = 256,
        Bn = 4194304;

    function Ta(t) {
        var e = t & 42;
        if (e !== 0) return e;
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t
        }
    }

    function qn(t, e, a) {
        var l = t.pendingLanes;
        if (l === 0) return 0;
        var n = 0,
            u = t.suspendedLanes,
            i = t.pingedLanes;
        t = t.warmLanes;
        var s = l & 134217727;
        return s !== 0 ? (l = s & ~u, l !== 0 ? n = Ta(l) : (i &= s, i !== 0 ? n = Ta(i) : a || (a = s & ~t, a !== 0 && (n = Ta(a))))) : (s = l & ~u, s !== 0 ? n = Ta(s) : i !== 0 ? n = Ta(i) : a || (a = l & ~t, a !== 0 && (n = Ta(a)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, a = e & -e, u >= a || u === 32 && (a & 4194048) !== 0) ? e : n
    }

    function Ol(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }

    function c0(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return e + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function zs() {
        var t = Cn;
        return Cn <<= 1, (Cn & 4194048) === 0 && (Cn = 256), t
    }

    function Ms() {
        var t = Bn;
        return Bn <<= 1, (Bn & 62914560) === 0 && (Bn = 4194304), t
    }

    function ei(t) {
        for (var e = [], a = 0; 31 > a; a++) e.push(t);
        return e
    }

    function jl(t, e) {
        t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function s0(t, e, a, l, n, u) {
        var i = t.pendingLanes;
        t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
        var s = t.entanglements,
            f = t.expirationTimes,
            g = t.hiddenUpdates;
        for (a = i & ~a; 0 < a;) {
            var S = 31 - ce(a),
                N = 1 << S;
            s[S] = 0, f[S] = -1;
            var b = g[S];
            if (b !== null)
                for (g[S] = null, S = 0; S < b.length; S++) {
                    var x = b[S];
                    x !== null && (x.lane &= -536870913)
                }
            a &= ~N
        }
        l !== 0 && Os(t, l, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e))
    }

    function Os(t, e, a) {
        t.pendingLanes |= e, t.suspendedLanes &= ~e;
        var l = 31 - ce(e);
        t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 4194090
    }

    function js(t, e) {
        var a = t.entangledLanes |= e;
        for (t = t.entanglements; a;) {
            var l = 31 - ce(a),
                n = 1 << l;
            n & e | t[l] & e && (t[l] |= e), a &= ~n
        }
    }

    function ai(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0
        }
        return t
    }

    function li(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Ds() {
        var t = R.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : dd(t.type))
    }

    function f0(t, e) {
        var a = R.p;
        try {
            return R.p = t, e()
        } finally {
            R.p = a
        }
    }
    var Pe = Math.random().toString(36).slice(2),
        Jt = "__reactFiber$" + Pe,
        te = "__reactProps$" + Pe,
        wa = "__reactContainer$" + Pe,
        ni = "__reactEvents$" + Pe,
        o0 = "__reactListeners$" + Pe,
        r0 = "__reactHandles$" + Pe,
        Rs = "__reactResources$" + Pe,
        Dl = "__reactMarker$" + Pe;

    function ui(t) {
        delete t[Jt], delete t[te], delete t[ni], delete t[o0], delete t[r0]
    }

    function Za(t) {
        var e = t[Jt];
        if (e) return e;
        for (var a = t.parentNode; a;) {
            if (e = a[wa] || a[Jt]) {
                if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
                    for (t = Fr(t); t !== null;) {
                        if (a = t[Jt]) return a;
                        t = Fr(t)
                    }
                return e
            }
            t = a, a = t.parentNode
        }
        return null
    }

    function Va(t) {
        if (t = t[Jt] || t[wa]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t
        }
        return null
    }

    function Rl(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
        throw Error(o(33))
    }

    function Ka(t) {
        var e = t[Rs];
        return e || (e = t[Rs] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), e
    }

    function Gt(t) {
        t[Dl] = !0
    }
    var Us = new Set,
        Hs = {};

    function Sa(t, e) {
        ka(t, e), ka(t + "Capture", e)
    }

    function ka(t, e) {
        for (Hs[t] = e, t = 0; t < e.length; t++) Us.add(e[t])
    }
    var d0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Cs = {},
        Bs = {};

    function m0(t) {
        return Iu.call(Bs, t) ? !0 : Iu.call(Cs, t) ? !1 : d0.test(t) ? Bs[t] = !0 : (Cs[t] = !0, !1)
    }

    function Yn(t, e, a) {
        if (m0(e))
            if (a === null) t.removeAttribute(e);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(e);
                        return;
                    case "boolean":
                        var l = e.toLowerCase().slice(0, 5);
                        if (l !== "data-" && l !== "aria-") {
                            t.removeAttribute(e);
                            return
                        }
                }
                t.setAttribute(e, "" + a)
            }
    }

    function Gn(t, e, a) {
        if (a === null) t.removeAttribute(e);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(e);
                    return
            }
            t.setAttribute(e, "" + a)
        }
    }

    function Ce(t, e, a, l) {
        if (l === null) t.removeAttribute(a);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(a);
                    return
            }
            t.setAttributeNS(e, a, "" + l)
        }
    }
    var ii, qs;

    function Ja(t) {
        if (ii === void 0) try {
            throw Error()
        } catch (a) {
            var e = a.stack.trim().match(/\n( *(at )?)/);
            ii = e && e[1] || "", qs = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + ii + t + qs
    }
    var ci = !1;

    function si(t, e) {
        if (!t || ci) return "";
        ci = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var N = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(N.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(N, [])
                                } catch (x) {
                                    var b = x
                                }
                                Reflect.construct(t, [], N)
                            } else {
                                try {
                                    N.call()
                                } catch (x) {
                                    b = x
                                }
                                t.call(N.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (x) {
                                b = x
                            }(N = t()) && typeof N.catch == "function" && N.catch(function() {})
                        }
                    } catch (x) {
                        if (x && b && typeof x.stack == "string") return [x.stack, b.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = l.DetermineComponentFrameRoot(),
                i = u[0],
                s = u[1];
            if (i && s) {
                var f = i.split(`
`),
                    g = s.split(`
`);
                for (n = l = 0; l < f.length && !f[l].includes("DetermineComponentFrameRoot");) l++;
                for (; n < g.length && !g[n].includes("DetermineComponentFrameRoot");) n++;
                if (l === f.length || n === g.length)
                    for (l = f.length - 1, n = g.length - 1; 1 <= l && 0 <= n && f[l] !== g[n];) n--;
                for (; 1 <= l && 0 <= n; l--, n--)
                    if (f[l] !== g[n]) {
                        if (l !== 1 || n !== 1)
                            do
                                if (l--, n--, 0 > n || f[l] !== g[n]) {
                                    var S = `
` + f[l].replace(" at new ", " at ");
                                    return t.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", t.displayName)), S
                                }
                        while (1 <= l && 0 <= n);
                        break
                    }
            }
        } finally {
            ci = !1, Error.prepareStackTrace = a
        }
        return (a = t ? t.displayName || t.name : "") ? Ja(a) : ""
    }

    function y0(t) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return Ja(t.type);
            case 16:
                return Ja("Lazy");
            case 13:
                return Ja("Suspense");
            case 19:
                return Ja("SuspenseList");
            case 0:
            case 15:
                return si(t.type, !1);
            case 11:
                return si(t.type.render, !1);
            case 1:
                return si(t.type, !0);
            case 31:
                return Ja("Activity");
            default:
                return ""
        }
    }

    function Ys(t) {
        try {
            var e = "";
            do e += y0(t), t = t.return; while (t);
            return e
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }

    function ve(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function Gs(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }

    function h0(t) {
        var e = Gs(t) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
            l = "" + t[e];
        if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get,
                u = a.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(i) {
                    l = "" + i, u.call(this, i)
                }
            }), Object.defineProperty(t, e, {
                enumerable: a.enumerable
            }), {
                getValue: function() {
                    return l
                },
                setValue: function(i) {
                    l = "" + i
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[e]
                }
            }
        }
    }

    function Ln(t) {
        t._valueTracker || (t._valueTracker = h0(t))
    }

    function Ls(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var a = e.getValue(),
            l = "";
        return t && (l = Gs(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (e.setValue(t), !0) : !1
    }

    function Xn(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var v0 = /[\n"\\]/g;

    function ge(t) {
        return t.replace(v0, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }

    function fi(t, e, a, l, n, u, i, s) {
        t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ve(e)) : t.value !== "" + ve(e) && (t.value = "" + ve(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? oi(t, i, ve(e)) : a != null ? oi(t, i, ve(a)) : l != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + ve(s) : t.removeAttribute("name")
    }

    function Xs(t, e, a, l, n, u, i, s) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || a != null) {
            if (!(u !== "submit" && u !== "reset" || e != null)) return;
            a = a != null ? "" + ve(a) : "", e = e != null ? "" + ve(e) : a, s || e === t.value || (t.value = e), t.defaultValue = e
        }
        l = l ? ? n, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = s ? t.checked : !!l, t.defaultChecked = !!l, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i)
    }

    function oi(t, e, a) {
        e === "number" && Xn(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a)
    }

    function $a(t, e, a, l) {
        if (t = t.options, e) {
            e = {};
            for (var n = 0; n < a.length; n++) e["$" + a[n]] = !0;
            for (a = 0; a < t.length; a++) n = e.hasOwnProperty("$" + t[a].value), t[a].selected !== n && (t[a].selected = n), n && l && (t[a].defaultSelected = !0)
        } else {
            for (a = "" + ve(a), e = null, n = 0; n < t.length; n++) {
                if (t[n].value === a) {
                    t[n].selected = !0, l && (t[n].defaultSelected = !0);
                    return
                }
                e !== null || t[n].disabled || (e = t[n])
            }
            e !== null && (e.selected = !0)
        }
    }

    function Qs(t, e, a) {
        if (e != null && (e = "" + ve(e), e !== t.value && (t.value = e), a == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = a != null ? "" + ve(a) : ""
    }

    function ws(t, e, a, l) {
        if (e == null) {
            if (l != null) {
                if (a != null) throw Error(o(92));
                if (Bt(l)) {
                    if (1 < l.length) throw Error(o(93));
                    l = l[0]
                }
                a = l
            }
            a == null && (a = ""), e = a
        }
        a = ve(e), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l)
    }

    function Wa(t, e) {
        if (e) {
            var a = t.firstChild;
            if (a && a === t.lastChild && a.nodeType === 3) {
                a.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var g0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Zs(t, e, a) {
        var l = e.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || g0.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px"
    }

    function Vs(t, e, a) {
        if (e != null && typeof e != "object") throw Error(o(62));
        if (t = t.style, a != null) {
            for (var l in a) !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
            for (var n in e) l = e[n], e.hasOwnProperty(n) && a[n] !== l && Zs(t, n, l)
        } else
            for (var u in e) e.hasOwnProperty(u) && Zs(t, u, e[u])
    }

    function ri(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var p0 = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        b0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Qn(t) {
        return b0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var di = null;

    function mi(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var Fa = null,
        Ia = null;

    function Ks(t) {
        var e = Va(t);
        if (e && (t = e.stateNode)) {
            var a = t[te] || null;
            t: switch (t = e.stateNode, e.type) {
                case "input":
                    if (fi(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), e = a.name, a.type === "radio" && e != null) {
                        for (a = t; a.parentNode;) a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + ge("" + e) + '"][type="radio"]'), e = 0; e < a.length; e++) {
                            var l = a[e];
                            if (l !== t && l.form === t.form) {
                                var n = l[te] || null;
                                if (!n) throw Error(o(90));
                                fi(l, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                            }
                        }
                        for (e = 0; e < a.length; e++) l = a[e], l.form === t.form && Ls(l)
                    }
                    break t;
                case "textarea":
                    Qs(t, a.value, a.defaultValue);
                    break t;
                case "select":
                    e = a.value, e != null && $a(t, !!a.multiple, e, !1)
            }
        }
    }
    var yi = !1;

    function ks(t, e, a) {
        if (yi) return t(e, a);
        yi = !0;
        try {
            var l = t(e);
            return l
        } finally {
            if (yi = !1, (Fa !== null || Ia !== null) && (zu(), Fa && (e = Fa, t = Ia, Ia = Fa = null, Ks(e), t)))
                for (e = 0; e < t.length; e++) Ks(t[e])
        }
    }

    function Ul(t, e) {
        var a = t.stateNode;
        if (a === null) return null;
        var l = a[te] || null;
        if (l === null) return null;
        a = l[e];
        t: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (a && typeof a != "function") throw Error(o(231, e, typeof a));
        return a
    }
    var Be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        hi = !1;
    if (Be) try {
        var Hl = {};
        Object.defineProperty(Hl, "passive", {
            get: function() {
                hi = !0
            }
        }), window.addEventListener("test", Hl, Hl), window.removeEventListener("test", Hl, Hl)
    } catch {
        hi = !1
    }
    var ta = null,
        vi = null,
        wn = null;

    function Js() {
        if (wn) return wn;
        var t, e = vi,
            a = e.length,
            l, n = "value" in ta ? ta.value : ta.textContent,
            u = n.length;
        for (t = 0; t < a && e[t] === n[t]; t++);
        var i = a - t;
        for (l = 1; l <= i && e[a - l] === n[u - l]; l++);
        return wn = n.slice(t, 1 < l ? 1 - l : void 0)
    }

    function Zn(t) {
        var e = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function Vn() {
        return !0
    }

    function $s() {
        return !1
    }

    function ee(t) {
        function e(a, l, n, u, i) {
            this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = u, this.target = i, this.currentTarget = null;
            for (var s in t) t.hasOwnProperty(s) && (a = t[s], this[s] = a ? a(u) : u[s]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Vn : $s, this.isPropagationStopped = $s, this
        }
        return D(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Vn)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Vn)
            },
            persist: function() {},
            isPersistent: Vn
        }), e
    }
    var Aa = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Kn = ee(Aa),
        Cl = D({}, Aa, {
            view: 0,
            detail: 0
        }),
        x0 = ee(Cl),
        gi, pi, Bl, kn = D({}, Cl, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: xi,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== Bl && (Bl && t.type === "mousemove" ? (gi = t.screenX - Bl.screenX, pi = t.screenY - Bl.screenY) : pi = gi = 0, Bl = t), gi)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : pi
            }
        }),
        Ws = ee(kn),
        _0 = D({}, kn, {
            dataTransfer: 0
        }),
        T0 = ee(_0),
        S0 = D({}, Cl, {
            relatedTarget: 0
        }),
        bi = ee(S0),
        A0 = D({}, Aa, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        E0 = ee(A0),
        N0 = D({}, Aa, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        z0 = ee(N0),
        M0 = D({}, Aa, {
            data: 0
        }),
        Fs = ee(M0),
        O0 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        j0 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        D0 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function R0(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = D0[t]) ? !!e[t] : !1
    }

    function xi() {
        return R0
    }
    var U0 = D({}, Cl, {
            key: function(t) {
                if (t.key) {
                    var e = O0[t.key] || t.key;
                    if (e !== "Unidentified") return e
                }
                return t.type === "keypress" ? (t = Zn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? j0[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: xi,
            charCode: function(t) {
                return t.type === "keypress" ? Zn(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? Zn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        H0 = ee(U0),
        C0 = D({}, kn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Is = ee(C0),
        B0 = D({}, Cl, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: xi
        }),
        q0 = ee(B0),
        Y0 = D({}, Aa, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        G0 = ee(Y0),
        L0 = D({}, kn, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        X0 = ee(L0),
        Q0 = D({}, Aa, {
            newState: 0,
            oldState: 0
        }),
        w0 = ee(Q0),
        Z0 = [9, 13, 27, 32],
        _i = Be && "CompositionEvent" in window,
        ql = null;
    Be && "documentMode" in document && (ql = document.documentMode);
    var V0 = Be && "TextEvent" in window && !ql,
        Ps = Be && (!_i || ql && 8 < ql && 11 >= ql),
        tf = " ",
        ef = !1;

    function af(t, e) {
        switch (t) {
            case "keyup":
                return Z0.indexOf(e.keyCode) !== -1;
            case "keydown":
                return e.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function lf(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var Pa = !1;

    function K0(t, e) {
        switch (t) {
            case "compositionend":
                return lf(e);
            case "keypress":
                return e.which !== 32 ? null : (ef = !0, tf);
            case "textInput":
                return t = e.data, t === tf && ef ? null : t;
            default:
                return null
        }
    }

    function k0(t, e) {
        if (Pa) return t === "compositionend" || !_i && af(t, e) ? (t = Js(), wn = vi = ta = null, Pa = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null;
            case "compositionend":
                return Ps && e.locale !== "ko" ? null : e.data;
            default:
                return null
        }
    }
    var J0 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function nf(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!J0[t.type] : e === "textarea"
    }

    function uf(t, e, a, l) {
        Fa ? Ia ? Ia.push(l) : Ia = [l] : Fa = l, e = Uu(e, "onChange"), 0 < e.length && (a = new Kn("onChange", "change", null, a, l), t.push({
            event: a,
            listeners: e
        }))
    }
    var Yl = null,
        Gl = null;

    function $0(t) {
        Xr(t, 0)
    }

    function Jn(t) {
        var e = Rl(t);
        if (Ls(e)) return t
    }

    function cf(t, e) {
        if (t === "change") return e
    }
    var sf = !1;
    if (Be) {
        var Ti;
        if (Be) {
            var Si = "oninput" in document;
            if (!Si) {
                var ff = document.createElement("div");
                ff.setAttribute("oninput", "return;"), Si = typeof ff.oninput == "function"
            }
            Ti = Si
        } else Ti = !1;
        sf = Ti && (!document.documentMode || 9 < document.documentMode)
    }

    function of () {
        Yl && (Yl.detachEvent("onpropertychange", rf), Gl = Yl = null)
    }

    function rf(t) {
        if (t.propertyName === "value" && Jn(Gl)) {
            var e = [];
            uf(e, Gl, t, mi(t)), ks($0, e)
        }
    }

    function W0(t, e, a) {
        t === "focusin" ? ( of (), Yl = e, Gl = a, Yl.attachEvent("onpropertychange", rf)) : t === "focusout" && of ()
    }

    function F0(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return Jn(Gl)
    }

    function I0(t, e) {
        if (t === "click") return Jn(e)
    }

    function P0(t, e) {
        if (t === "input" || t === "change") return Jn(e)
    }

    function tm(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var se = typeof Object.is == "function" ? Object.is : tm;

    function Ll(t, e) {
        if (se(t, e)) return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
        var a = Object.keys(t),
            l = Object.keys(e);
        if (a.length !== l.length) return !1;
        for (l = 0; l < a.length; l++) {
            var n = a[l];
            if (!Iu.call(e, n) || !se(t[n], e[n])) return !1
        }
        return !0
    }

    function df(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function mf(t, e) {
        var a = df(t);
        t = 0;
        for (var l; a;) {
            if (a.nodeType === 3) {
                if (l = t + a.textContent.length, t <= e && l >= e) return {
                    node: a,
                    offset: e - t
                };
                t = l
            }
            t: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break t
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = df(a)
        }
    }

    function yf(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? yf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }

    function hf(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Xn(t.document); e instanceof t.HTMLIFrameElement;) {
            try {
                var a = typeof e.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a) t = e.contentWindow;
            else break;
            e = Xn(t.document)
        }
        return e
    }

    function Ai(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var em = Be && "documentMode" in document && 11 >= document.documentMode,
        tl = null,
        Ei = null,
        Xl = null,
        Ni = !1;

    function vf(t, e, a) {
        var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Ni || tl == null || tl !== Xn(l) || (l = tl, "selectionStart" in l && Ai(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), Xl && Ll(Xl, l) || (Xl = l, l = Uu(Ei, "onSelect"), 0 < l.length && (e = new Kn("onSelect", "select", null, e, a), t.push({
            event: e,
            listeners: l
        }), e.target = tl)))
    }

    function Ea(t, e) {
        var a = {};
        return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a
    }
    var el = {
            animationend: Ea("Animation", "AnimationEnd"),
            animationiteration: Ea("Animation", "AnimationIteration"),
            animationstart: Ea("Animation", "AnimationStart"),
            transitionrun: Ea("Transition", "TransitionRun"),
            transitionstart: Ea("Transition", "TransitionStart"),
            transitioncancel: Ea("Transition", "TransitionCancel"),
            transitionend: Ea("Transition", "TransitionEnd")
        },
        zi = {},
        gf = {};
    Be && (gf = document.createElement("div").style, "AnimationEvent" in window || (delete el.animationend.animation, delete el.animationiteration.animation, delete el.animationstart.animation), "TransitionEvent" in window || delete el.transitionend.transition);

    function Na(t) {
        if (zi[t]) return zi[t];
        if (!el[t]) return t;
        var e = el[t],
            a;
        for (a in e)
            if (e.hasOwnProperty(a) && a in gf) return zi[t] = e[a];
        return t
    }
    var pf = Na("animationend"),
        bf = Na("animationiteration"),
        xf = Na("animationstart"),
        am = Na("transitionrun"),
        lm = Na("transitionstart"),
        nm = Na("transitioncancel"),
        _f = Na("transitionend"),
        Tf = new Map,
        Mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Mi.push("scrollEnd");

    function Ee(t, e) {
        Tf.set(t, e), Sa(e, [t])
    }
    var Sf = new WeakMap;

    function pe(t, e) {
        if (typeof t == "object" && t !== null) {
            var a = Sf.get(t);
            return a !== void 0 ? a : (e = {
                value: t,
                source: e,
                stack: Ys(e)
            }, Sf.set(t, e), e)
        }
        return {
            value: t,
            source: e,
            stack: Ys(e)
        }
    }
    var be = [],
        al = 0,
        Oi = 0;

    function $n() {
        for (var t = al, e = Oi = al = 0; e < t;) {
            var a = be[e];
            be[e++] = null;
            var l = be[e];
            be[e++] = null;
            var n = be[e];
            be[e++] = null;
            var u = be[e];
            if (be[e++] = null, l !== null && n !== null) {
                var i = l.pending;
                i === null ? n.next = n : (n.next = i.next, i.next = n), l.pending = n
            }
            u !== 0 && Af(a, n, u)
        }
    }

    function Wn(t, e, a, l) {
        be[al++] = t, be[al++] = e, be[al++] = a, be[al++] = l, Oi |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l)
    }

    function ji(t, e, a, l) {
        return Wn(t, e, a, l), Fn(t)
    }

    function ll(t, e) {
        return Wn(t, null, null, e), Fn(t)
    }

    function Af(t, e, a) {
        t.lanes |= a;
        var l = t.alternate;
        l !== null && (l.lanes |= a);
        for (var n = !1, u = t.return; u !== null;) u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
        return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ce(a), t = u.hiddenUpdates, l = t[n], l === null ? t[n] = [e] : l.push(e), e.lane = a | 536870912), u) : null
    }

    function Fn(t) {
        if (50 < mn) throw mn = 0, Bc = null, Error(o(185));
        for (var e = t.return; e !== null;) t = e, e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var nl = {};

    function um(t, e, a, l) {
        this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function fe(t, e, a, l) {
        return new um(t, e, a, l)
    }

    function Di(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function qe(t, e) {
        var a = t.alternate;
        return a === null ? (a = fe(t.tag, e, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a
    }

    function Ef(t, e) {
        t.flags &= 65011714;
        var a = t.alternate;
        return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }), t
    }

    function In(t, e, a, l, n, u) {
        var i = 0;
        if (l = t, typeof t == "function") Di(t) && (i = 1);
        else if (typeof t == "string") i = cy(t, a, w.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else t: switch (t) {
            case Mt:
                return t = fe(31, a, e, n), t.elementType = Mt, t.lanes = u, t;
            case dt:
                return za(a.children, n, u, e);
            case at:
                i = 8, n |= 24;
                break;
            case F:
                return t = fe(12, a, e, n | 2), t.elementType = F, t.lanes = u, t;
            case Q:
                return t = fe(13, a, e, n), t.elementType = Q, t.lanes = u, t;
            case vt:
                return t = fe(19, a, e, n), t.elementType = vt, t.lanes = u, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case lt:
                    case q:
                        i = 10;
                        break t;
                    case Y:
                        i = 9;
                        break t;
                    case k:
                        i = 11;
                        break t;
                    case J:
                        i = 14;
                        break t;
                    case P:
                        i = 16, l = null;
                        break t
                }
                i = 29, a = Error(o(130, t === null ? "null" : typeof t, "")), l = null
        }
        return e = fe(i, a, e, n), e.elementType = t, e.type = l, e.lanes = u, e
    }

    function za(t, e, a, l) {
        return t = fe(7, t, l, e), t.lanes = a, t
    }

    function Ri(t, e, a) {
        return t = fe(6, t, null, e), t.lanes = a, t
    }

    function Ui(t, e, a) {
        return e = fe(4, t.children !== null ? t.children : [], t.key, e), e.lanes = a, e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, e
    }
    var ul = [],
        il = 0,
        Pn = null,
        tu = 0,
        xe = [],
        _e = 0,
        Ma = null,
        Ye = 1,
        Ge = "";

    function Oa(t, e) {
        ul[il++] = tu, ul[il++] = Pn, Pn = t, tu = e
    }

    function Nf(t, e, a) {
        xe[_e++] = Ye, xe[_e++] = Ge, xe[_e++] = Ma, Ma = t;
        var l = Ye;
        t = Ge;
        var n = 32 - ce(l) - 1;
        l &= ~(1 << n), a += 1;
        var u = 32 - ce(e) + n;
        if (30 < u) {
            var i = n - n % 5;
            u = (l & (1 << i) - 1).toString(32), l >>= i, n -= i, Ye = 1 << 32 - ce(e) + n | a << n | l, Ge = u + t
        } else Ye = 1 << u | a << n | l, Ge = t
    }

    function Hi(t) {
        t.return !== null && (Oa(t, 1), Nf(t, 1, 0))
    }

    function Ci(t) {
        for (; t === Pn;) Pn = ul[--il], ul[il] = null, tu = ul[--il], ul[il] = null;
        for (; t === Ma;) Ma = xe[--_e], xe[_e] = null, Ge = xe[--_e], xe[_e] = null, Ye = xe[--_e], xe[_e] = null
    }
    var It = null,
        Ot = null,
        rt = !1,
        ja = null,
        Oe = !1,
        Bi = Error(o(519));

    function Da(t) {
        var e = Error(o(418, ""));
        throw Zl(pe(e, t)), Bi
    }

    function zf(t) {
        var e = t.stateNode,
            a = t.type,
            l = t.memoizedProps;
        switch (e[Jt] = t, e[te] = l, a) {
            case "dialog":
                ut("cancel", e), ut("close", e);
                break;
            case "iframe":
            case "object":
            case "embed":
                ut("load", e);
                break;
            case "video":
            case "audio":
                for (a = 0; a < hn.length; a++) ut(hn[a], e);
                break;
            case "source":
                ut("error", e);
                break;
            case "img":
            case "image":
            case "link":
                ut("error", e), ut("load", e);
                break;
            case "details":
                ut("toggle", e);
                break;
            case "input":
                ut("invalid", e), Xs(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0), Ln(e);
                break;
            case "select":
                ut("invalid", e);
                break;
            case "textarea":
                ut("invalid", e), ws(e, l.value, l.defaultValue, l.children), Ln(e)
        }
        a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === !0 || Vr(e.textContent, a) ? (l.popover != null && (ut("beforetoggle", e), ut("toggle", e)), l.onScroll != null && ut("scroll", e), l.onScrollEnd != null && ut("scrollend", e), l.onClick != null && (e.onclick = Hu), e = !0) : e = !1, e || Da(t)
    }

    function Mf(t) {
        for (It = t.return; It;) switch (It.tag) {
            case 5:
            case 13:
                Oe = !1;
                return;
            case 27:
            case 3:
                Oe = !0;
                return;
            default:
                It = It.return
        }
    }

    function Ql(t) {
        if (t !== It) return !1;
        if (!rt) return Mf(t), rt = !0, !1;
        var e = t.tag,
            a;
        if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Ic(t.type, t.memoizedProps)), a = !a), a && Ot && Da(t), Mf(t), e === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
            t: {
                for (t = t.nextSibling, e = 0; t;) {
                    if (t.nodeType === 8)
                        if (a = t.data, a === "/$") {
                            if (e === 0) {
                                Ot = ze(t.nextSibling);
                                break t
                            }
                            e--
                        } else a !== "$" && a !== "$!" && a !== "$?" || e++;
                    t = t.nextSibling
                }
                Ot = null
            }
        } else e === 27 ? (e = Ot, va(t.type) ? (t = as, as = null, Ot = t) : Ot = e) : Ot = It ? ze(t.stateNode.nextSibling) : null;
        return !0
    }

    function wl() {
        Ot = It = null, rt = !1
    }

    function Of() {
        var t = ja;
        return t !== null && (ne === null ? ne = t : ne.push.apply(ne, t), ja = null), t
    }

    function Zl(t) {
        ja === null ? ja = [t] : ja.push(t)
    }
    var qi = z(null),
        Ra = null,
        Le = null;

    function ea(t, e, a) {
        U(qi, e._currentValue), e._currentValue = a
    }

    function Xe(t) {
        t._currentValue = qi.current, H(qi)
    }

    function Yi(t, e, a) {
        for (; t !== null;) {
            var l = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === a) break;
            t = t.return
        }
    }

    function Gi(t, e, a, l) {
        var n = t.child;
        for (n !== null && (n.return = t); n !== null;) {
            var u = n.dependencies;
            if (u !== null) {
                var i = n.child;
                u = u.firstContext;
                t: for (; u !== null;) {
                    var s = u;
                    u = n;
                    for (var f = 0; f < e.length; f++)
                        if (s.context === e[f]) {
                            u.lanes |= a, s = u.alternate, s !== null && (s.lanes |= a), Yi(u.return, a, t), l || (i = null);
                            break t
                        }
                    u = s.next
                }
            } else if (n.tag === 18) {
                if (i = n.return, i === null) throw Error(o(341));
                i.lanes |= a, u = i.alternate, u !== null && (u.lanes |= a), Yi(i, a, t), i = null
            } else i = n.child;
            if (i !== null) i.return = n;
            else
                for (i = n; i !== null;) {
                    if (i === t) {
                        i = null;
                        break
                    }
                    if (n = i.sibling, n !== null) {
                        n.return = i.return, i = n;
                        break
                    }
                    i = i.return
                }
            n = i
        }
    }

    function Vl(t, e, a, l) {
        t = null;
        for (var n = e, u = !1; n !== null;) {
            if (!u) {
                if ((n.flags & 524288) !== 0) u = !0;
                else if ((n.flags & 262144) !== 0) break
            }
            if (n.tag === 10) {
                var i = n.alternate;
                if (i === null) throw Error(o(387));
                if (i = i.memoizedProps, i !== null) {
                    var s = n.type;
                    se(n.pendingProps.value, i.value) || (t !== null ? t.push(s) : t = [s])
                }
            } else if (n === ue.current) {
                if (i = n.alternate, i === null) throw Error(o(387));
                i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(_n) : t = [_n])
            }
            n = n.return
        }
        t !== null && Gi(e, t, a, l), e.flags |= 262144
    }

    function eu(t) {
        for (t = t.firstContext; t !== null;) {
            if (!se(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function Ua(t) {
        Ra = t, Le = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function $t(t) {
        return jf(Ra, t)
    }

    function au(t, e) {
        return Ra === null && Ua(t), jf(t, e)
    }

    function jf(t, e) {
        var a = e._currentValue;
        if (e = {
                context: e,
                memoizedValue: a,
                next: null
            }, Le === null) {
            if (t === null) throw Error(o(308));
            Le = e, t.dependencies = {
                lanes: 0,
                firstContext: e
            }, t.flags |= 524288
        } else Le = Le.next = e;
        return a
    }
    var im = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                e = this.signal = {
                    aborted: !1,
                    addEventListener: function(a, l) {
                        t.push(l)
                    }
                };
            this.abort = function() {
                e.aborted = !0, t.forEach(function(a) {
                    return a()
                })
            }
        },
        cm = c.unstable_scheduleCallback,
        sm = c.unstable_NormalPriority,
        qt = {
            $$typeof: q,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function Li() {
        return {
            controller: new im,
            data: new Map,
            refCount: 0
        }
    }

    function Kl(t) {
        t.refCount--, t.refCount === 0 && cm(sm, function() {
            t.controller.abort()
        })
    }
    var kl = null,
        Xi = 0,
        cl = 0,
        sl = null;

    function fm(t, e) {
        if (kl === null) {
            var a = kl = [];
            Xi = 0, cl = wc(), sl = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    a.push(l)
                }
            }
        }
        return Xi++, e.then(Df, Df), e
    }

    function Df() {
        if (--Xi === 0 && kl !== null) {
            sl !== null && (sl.status = "fulfilled");
            var t = kl;
            kl = null, cl = 0, sl = null;
            for (var e = 0; e < t.length; e++)(0, t[e])()
        }
    }

    function om(t, e) {
        var a = [],
            l = {
                status: "pending",
                value: null,
                reason: null,
                then: function(n) {
                    a.push(n)
                }
            };
        return t.then(function() {
            l.status = "fulfilled", l.value = e;
            for (var n = 0; n < a.length; n++)(0, a[n])(e)
        }, function(n) {
            for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)(0, a[n])(void 0)
        }), l
    }
    var Rf = T.S;
    T.S = function(t, e) {
        typeof e == "object" && e !== null && typeof e.then == "function" && fm(t, e), Rf !== null && Rf(t, e)
    };
    var Ha = z(null);

    function Qi() {
        var t = Ha.current;
        return t !== null ? t : Tt.pooledCache
    }

    function lu(t, e) {
        e === null ? U(Ha, Ha.current) : U(Ha, e.pool)
    }

    function Uf() {
        var t = Qi();
        return t === null ? null : {
            parent: qt._currentValue,
            pool: t
        }
    }
    var Jl = Error(o(460)),
        Hf = Error(o(474)),
        nu = Error(o(542)),
        wi = {
            then: function() {}
        };

    function Cf(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function uu() {}

    function Bf(t, e, a) {
        switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(uu, uu), e = a), e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason, Yf(t), t;
            default:
                if (typeof e.status == "string") e.then(uu, uu);
                else {
                    if (t = Tt, t !== null && 100 < t.shellSuspendCounter) throw Error(o(482));
                    t = e, t.status = "pending", t.then(function(l) {
                        if (e.status === "pending") {
                            var n = e;
                            n.status = "fulfilled", n.value = l
                        }
                    }, function(l) {
                        if (e.status === "pending") {
                            var n = e;
                            n.status = "rejected", n.reason = l
                        }
                    })
                }
                switch (e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw t = e.reason, Yf(t), t
                }
                throw $l = e, Jl
        }
    }
    var $l = null;

    function qf() {
        if ($l === null) throw Error(o(459));
        var t = $l;
        return $l = null, t
    }

    function Yf(t) {
        if (t === Jl || t === nu) throw Error(o(483))
    }
    var aa = !1;

    function Zi(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function Vi(t, e) {
        t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }

    function la(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function na(t, e, a) {
        var l = t.updateQueue;
        if (l === null) return null;
        if (l = l.shared, (mt & 2) !== 0) {
            var n = l.pending;
            return n === null ? e.next = e : (e.next = n.next, n.next = e), l.pending = e, e = Fn(t), Af(t, null, a), e
        }
        return Wn(t, l, e, a), Fn(t)
    }

    function Wl(t, e, a) {
        if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
            var l = e.lanes;
            l &= t.pendingLanes, a |= l, e.lanes = a, js(t, a)
        }
    }

    function Ki(t, e) {
        var a = t.updateQueue,
            l = t.alternate;
        if (l !== null && (l = l.updateQueue, a === l)) {
            var n = null,
                u = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var i = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? n = u = i : u = u.next = i, a = a.next
                } while (a !== null);
                u === null ? n = u = e : u = u.next = e
            } else n = u = e;
            a = {
                baseState: l.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: l.shared,
                callbacks: l.callbacks
            }, t.updateQueue = a;
            return
        }
        t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e
    }
    var ki = !1;

    function Fl() {
        if (ki) {
            var t = sl;
            if (t !== null) throw t
        }
    }

    function Il(t, e, a, l) {
        ki = !1;
        var n = t.updateQueue;
        aa = !1;
        var u = n.firstBaseUpdate,
            i = n.lastBaseUpdate,
            s = n.shared.pending;
        if (s !== null) {
            n.shared.pending = null;
            var f = s,
                g = f.next;
            f.next = null, i === null ? u = g : i.next = g, i = f;
            var S = t.alternate;
            S !== null && (S = S.updateQueue, s = S.lastBaseUpdate, s !== i && (s === null ? S.firstBaseUpdate = g : s.next = g, S.lastBaseUpdate = f))
        }
        if (u !== null) {
            var N = n.baseState;
            i = 0, S = g = f = null, s = u;
            do {
                var b = s.lane & -536870913,
                    x = b !== s.lane;
                if (x ? (it & b) === b : (l & b) === b) {
                    b !== 0 && b === cl && (ki = !0), S !== null && (S = S.next = {
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var K = t,
                            Z = s;b = e;
                        var bt = a;
                        switch (Z.tag) {
                            case 1:
                                if (K = Z.payload, typeof K == "function") {
                                    N = K.call(bt, N, b);
                                    break t
                                }
                                N = K;
                                break t;
                            case 3:
                                K.flags = K.flags & -65537 | 128;
                            case 0:
                                if (K = Z.payload, b = typeof K == "function" ? K.call(bt, N, b) : K, b == null) break t;
                                N = D({}, N, b);
                                break t;
                            case 2:
                                aa = !0
                        }
                    }
                    b = s.callback, b !== null && (t.flags |= 64, x && (t.flags |= 8192), x = n.callbacks, x === null ? n.callbacks = [b] : x.push(b))
                } else x = {
                    lane: b,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, S === null ? (g = S = x, f = N) : S = S.next = x, i |= b;
                if (s = s.next, s === null) {
                    if (s = n.shared.pending, s === null) break;
                    x = s, s = x.next, x.next = null, n.lastBaseUpdate = x, n.shared.pending = null
                }
            } while (!0);
            S === null && (f = N), n.baseState = f, n.firstBaseUpdate = g, n.lastBaseUpdate = S, u === null && (n.shared.lanes = 0), da |= i, t.lanes = i, t.memoizedState = N
        }
    }

    function Gf(t, e) {
        if (typeof t != "function") throw Error(o(191, t));
        t.call(e)
    }

    function Lf(t, e) {
        var a = t.callbacks;
        if (a !== null)
            for (t.callbacks = null, t = 0; t < a.length; t++) Gf(a[t], e)
    }
    var fl = z(null),
        iu = z(0);

    function Xf(t, e) {
        t = Je, U(iu, t), U(fl, e), Je = t | e.baseLanes
    }

    function Ji() {
        U(iu, Je), U(fl, fl.current)
    }

    function $i() {
        Je = iu.current, H(fl), H(iu)
    }
    var ua = 0,
        tt = null,
        gt = null,
        Ut = null,
        cu = !1,
        ol = !1,
        Ca = !1,
        su = 0,
        Pl = 0,
        rl = null,
        rm = 0;

    function Dt() {
        throw Error(o(321))
    }

    function Wi(t, e) {
        if (e === null) return !1;
        for (var a = 0; a < e.length && a < t.length; a++)
            if (!se(t[a], e[a])) return !1;
        return !0
    }

    function Fi(t, e, a, l, n, u) {
        return ua = u, tt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, T.H = t === null || t.memoizedState === null ? Eo : No, Ca = !1, u = a(l, n), Ca = !1, ol && (u = wf(e, a, l, n)), Qf(t), u
    }

    function Qf(t) {
        T.H = yu;
        var e = gt !== null && gt.next !== null;
        if (ua = 0, Ut = gt = tt = null, cu = !1, Pl = 0, rl = null, e) throw Error(o(300));
        t === null || Lt || (t = t.dependencies, t !== null && eu(t) && (Lt = !0))
    }

    function wf(t, e, a, l) {
        tt = t;
        var n = 0;
        do {
            if (ol && (rl = null), Pl = 0, ol = !1, 25 <= n) throw Error(o(301));
            if (n += 1, Ut = gt = null, t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
            }
            T.H = pm, u = e(a, l)
        } while (ol);
        return u
    }

    function dm() {
        var t = T.H,
            e = t.useState()[0];
        return e = typeof e.then == "function" ? tn(e) : e, t = t.useState()[0], (gt !== null ? gt.memoizedState : null) !== t && (tt.flags |= 1024), e
    }

    function Ii() {
        var t = su !== 0;
        return su = 0, t
    }

    function Pi(t, e, a) {
        e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a
    }

    function tc(t) {
        if (cu) {
            for (t = t.memoizedState; t !== null;) {
                var e = t.queue;
                e !== null && (e.pending = null), t = t.next
            }
            cu = !1
        }
        ua = 0, Ut = gt = tt = null, ol = !1, Pl = su = 0, rl = null
    }

    function ae() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ut === null ? tt.memoizedState = Ut = t : Ut = Ut.next = t, Ut
    }

    function Ht() {
        if (gt === null) {
            var t = tt.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = gt.next;
        var e = Ut === null ? tt.memoizedState : Ut.next;
        if (e !== null) Ut = e, gt = t;
        else {
            if (t === null) throw tt.alternate === null ? Error(o(467)) : Error(o(310));
            gt = t, t = {
                memoizedState: gt.memoizedState,
                baseState: gt.baseState,
                baseQueue: gt.baseQueue,
                queue: gt.queue,
                next: null
            }, Ut === null ? tt.memoizedState = Ut = t : Ut = Ut.next = t
        }
        return Ut
    }

    function ec() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function tn(t) {
        var e = Pl;
        return Pl += 1, rl === null && (rl = []), t = Bf(rl, t, e), e = tt, (Ut === null ? e.memoizedState : Ut.next) === null && (e = e.alternate, T.H = e === null || e.memoizedState === null ? Eo : No), t
    }

    function fu(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return tn(t);
            if (t.$$typeof === q) return $t(t)
        }
        throw Error(o(438, String(t)))
    }

    function ac(t) {
        var e = null,
            a = tt.updateQueue;
        if (a !== null && (e = a.memoCache), e == null) {
            var l = tt.alternate;
            l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
                data: l.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
                data: [],
                index: 0
            }), a === null && (a = ec(), tt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
            for (a = e.data[e.index] = Array(t), l = 0; l < t; l++) a[l] = Ft;
        return e.index++, a
    }

    function Qe(t, e) {
        return typeof e == "function" ? e(t) : e
    }

    function ou(t) {
        var e = Ht();
        return lc(e, gt, t)
    }

    function lc(t, e, a) {
        var l = t.queue;
        if (l === null) throw Error(o(311));
        l.lastRenderedReducer = a;
        var n = t.baseQueue,
            u = l.pending;
        if (u !== null) {
            if (n !== null) {
                var i = n.next;
                n.next = u.next, u.next = i
            }
            e.baseQueue = n = u, l.pending = null
        }
        if (u = t.baseState, n === null) t.memoizedState = u;
        else {
            e = n.next;
            var s = i = null,
                f = null,
                g = e,
                S = !1;
            do {
                var N = g.lane & -536870913;
                if (N !== g.lane ? (it & N) === N : (ua & N) === N) {
                    var b = g.revertLane;
                    if (b === 0) f !== null && (f = f.next = {
                        lane: 0,
                        revertLane: 0,
                        action: g.action,
                        hasEagerState: g.hasEagerState,
                        eagerState: g.eagerState,
                        next: null
                    }), N === cl && (S = !0);
                    else if ((ua & b) === b) {
                        g = g.next, b === cl && (S = !0);
                        continue
                    } else N = {
                        lane: 0,
                        revertLane: g.revertLane,
                        action: g.action,
                        hasEagerState: g.hasEagerState,
                        eagerState: g.eagerState,
                        next: null
                    }, f === null ? (s = f = N, i = u) : f = f.next = N, tt.lanes |= b, da |= b;
                    N = g.action, Ca && a(u, N), u = g.hasEagerState ? g.eagerState : a(u, N)
                } else b = {
                    lane: N,
                    revertLane: g.revertLane,
                    action: g.action,
                    hasEagerState: g.hasEagerState,
                    eagerState: g.eagerState,
                    next: null
                }, f === null ? (s = f = b, i = u) : f = f.next = b, tt.lanes |= N, da |= N;
                g = g.next
            } while (g !== null && g !== e);
            if (f === null ? i = u : f.next = s, !se(u, t.memoizedState) && (Lt = !0, S && (a = sl, a !== null))) throw a;
            t.memoizedState = u, t.baseState = i, t.baseQueue = f, l.lastRenderedState = u
        }
        return n === null && (l.lanes = 0), [t.memoizedState, l.dispatch]
    }

    function nc(t) {
        var e = Ht(),
            a = e.queue;
        if (a === null) throw Error(o(311));
        a.lastRenderedReducer = t;
        var l = a.dispatch,
            n = a.pending,
            u = e.memoizedState;
        if (n !== null) {
            a.pending = null;
            var i = n = n.next;
            do u = t(u, i.action), i = i.next; while (i !== n);
            se(u, e.memoizedState) || (Lt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), a.lastRenderedState = u
        }
        return [u, l]
    }

    function Zf(t, e, a) {
        var l = tt,
            n = Ht(),
            u = rt;
        if (u) {
            if (a === void 0) throw Error(o(407));
            a = a()
        } else a = e();
        var i = !se((gt || n).memoizedState, a);
        i && (n.memoizedState = a, Lt = !0), n = n.queue;
        var s = kf.bind(null, l, n, t);
        if (en(2048, 8, s, [t]), n.getSnapshot !== e || i || Ut !== null && Ut.memoizedState.tag & 1) {
            if (l.flags |= 2048, dl(9, ru(), Kf.bind(null, l, n, a, e), null), Tt === null) throw Error(o(349));
            u || (ua & 124) !== 0 || Vf(l, e, a)
        }
        return a
    }

    function Vf(t, e, a) {
        t.flags |= 16384, t = {
            getSnapshot: e,
            value: a
        }, e = tt.updateQueue, e === null ? (e = ec(), tt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t))
    }

    function Kf(t, e, a, l) {
        e.value = a, e.getSnapshot = l, Jf(e) && $f(t)
    }

    function kf(t, e, a) {
        return a(function() {
            Jf(e) && $f(t)
        })
    }

    function Jf(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var a = e();
            return !se(t, a)
        } catch {
            return !0
        }
    }

    function $f(t) {
        var e = ll(t, 2);
        e !== null && ye(e, t, 2)
    }

    function uc(t) {
        var e = ae();
        if (typeof t == "function") {
            var a = t;
            if (t = a(), Ca) {
                Ie(!0);
                try {
                    a()
                } finally {
                    Ie(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t, e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Qe,
            lastRenderedState: t
        }, e
    }

    function Wf(t, e, a, l) {
        return t.baseState = a, lc(t, gt, typeof l == "function" ? l : Qe)
    }

    function mm(t, e, a, l, n) {
        if (mu(t)) throw Error(o(485));
        if (t = e.action, t !== null) {
            var u = {
                payload: n,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    u.listeners.push(i)
                }
            };
            T.T !== null ? a(!0) : u.isTransition = !1, l(u), a = e.pending, a === null ? (u.next = e.pending = u, Ff(e, u)) : (u.next = a.next, e.pending = a.next = u)
        }
    }

    function Ff(t, e) {
        var a = e.action,
            l = e.payload,
            n = t.state;
        if (e.isTransition) {
            var u = T.T,
                i = {};
            T.T = i;
            try {
                var s = a(n, l),
                    f = T.S;
                f !== null && f(i, s), If(t, e, s)
            } catch (g) {
                ic(t, e, g)
            } finally {
                T.T = u
            }
        } else try {
            u = a(n, l), If(t, e, u)
        } catch (g) {
            ic(t, e, g)
        }
    }

    function If(t, e, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
            Pf(t, e, l)
        }, function(l) {
            return ic(t, e, l)
        }) : Pf(t, e, a)
    }

    function Pf(t, e, a) {
        e.status = "fulfilled", e.value = a, to(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Ff(t, a)))
    }

    function ic(t, e, a) {
        var l = t.pending;
        if (t.pending = null, l !== null) {
            l = l.next;
            do e.status = "rejected", e.reason = a, to(e), e = e.next; while (e !== l)
        }
        t.action = null
    }

    function to(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)(0, t[e])()
    }

    function eo(t, e) {
        return e
    }

    function ao(t, e) {
        if (rt) {
            var a = Tt.formState;
            if (a !== null) {
                t: {
                    var l = tt;
                    if (rt) {
                        if (Ot) {
                            e: {
                                for (var n = Ot, u = Oe; n.nodeType !== 8;) {
                                    if (!u) {
                                        n = null;
                                        break e
                                    }
                                    if (n = ze(n.nextSibling), n === null) {
                                        n = null;
                                        break e
                                    }
                                }
                                u = n.data,
                                n = u === "F!" || u === "F" ? n : null
                            }
                            if (n) {
                                Ot = ze(n.nextSibling), l = n.data === "F!";
                                break t
                            }
                        }
                        Da(l)
                    }
                    l = !1
                }
                l && (e = a[0])
            }
        }
        return a = ae(), a.memoizedState = a.baseState = e, l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: eo,
            lastRenderedState: e
        }, a.queue = l, a = To.bind(null, tt, l), l.dispatch = a, l = uc(!1), u = rc.bind(null, tt, !1, l.queue), l = ae(), n = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        }, l.queue = n, a = mm.bind(null, tt, n, u, a), n.dispatch = a, l.memoizedState = t, [e, a, !1]
    }

    function lo(t) {
        var e = Ht();
        return no(e, gt, t)
    }

    function no(t, e, a) {
        if (e = lc(t, e, eo)[0], t = ou(Qe)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
            var l = tn(e)
        } catch (i) {
            throw i === Jl ? nu : i
        } else l = e;
        e = Ht();
        var n = e.queue,
            u = n.dispatch;
        return a !== e.memoizedState && (tt.flags |= 2048, dl(9, ru(), ym.bind(null, n, a), null)), [l, u, t]
    }

    function ym(t, e) {
        t.action = e
    }

    function uo(t) {
        var e = Ht(),
            a = gt;
        if (a !== null) return no(e, a, t);
        Ht(), e = e.memoizedState, a = Ht();
        var l = a.queue.dispatch;
        return a.memoizedState = t, [e, l, !1]
    }

    function dl(t, e, a, l) {
        return t = {
            tag: t,
            create: a,
            deps: l,
            inst: e,
            next: null
        }, e = tt.updateQueue, e === null && (e = ec(), tt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, e.lastEffect = t), t
    }

    function ru() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function io() {
        return Ht().memoizedState
    }

    function du(t, e, a, l) {
        var n = ae();
        l = l === void 0 ? null : l, tt.flags |= t, n.memoizedState = dl(1 | e, ru(), a, l)
    }

    function en(t, e, a, l) {
        var n = Ht();
        l = l === void 0 ? null : l;
        var u = n.memoizedState.inst;
        gt !== null && l !== null && Wi(l, gt.memoizedState.deps) ? n.memoizedState = dl(e, u, a, l) : (tt.flags |= t, n.memoizedState = dl(1 | e, u, a, l))
    }

    function co(t, e) {
        du(8390656, 8, t, e)
    }

    function so(t, e) {
        en(2048, 8, t, e)
    }

    function fo(t, e) {
        return en(4, 2, t, e)
    }

    function oo(t, e) {
        return en(4, 4, t, e)
    }

    function ro(t, e) {
        if (typeof e == "function") {
            t = t();
            var a = e(t);
            return function() {
                typeof a == "function" ? a() : e(null)
            }
        }
        if (e != null) return t = t(), e.current = t,
            function() {
                e.current = null
            }
    }

    function mo(t, e, a) {
        a = a != null ? a.concat([t]) : null, en(4, 4, ro.bind(null, e, t), a)
    }

    function cc() {}

    function yo(t, e) {
        var a = Ht();
        e = e === void 0 ? null : e;
        var l = a.memoizedState;
        return e !== null && Wi(e, l[1]) ? l[0] : (a.memoizedState = [t, e], t)
    }

    function ho(t, e) {
        var a = Ht();
        e = e === void 0 ? null : e;
        var l = a.memoizedState;
        if (e !== null && Wi(e, l[1])) return l[0];
        if (l = t(), Ca) {
            Ie(!0);
            try {
                t()
            } finally {
                Ie(!1)
            }
        }
        return a.memoizedState = [l, e], l
    }

    function sc(t, e, a) {
        return a === void 0 || (ua & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = a, t = pr(), tt.lanes |= t, da |= t, a)
    }

    function vo(t, e, a, l) {
        return se(a, e) ? a : fl.current !== null ? (t = sc(t, a, l), se(t, e) || (Lt = !0), t) : (ua & 42) === 0 ? (Lt = !0, t.memoizedState = a) : (t = pr(), tt.lanes |= t, da |= t, e)
    }

    function go(t, e, a, l, n) {
        var u = R.p;
        R.p = u !== 0 && 8 > u ? u : 8;
        var i = T.T,
            s = {};
        T.T = s, rc(t, !1, e, a);
        try {
            var f = n(),
                g = T.S;
            if (g !== null && g(s, f), f !== null && typeof f == "object" && typeof f.then == "function") {
                var S = om(f, l);
                an(t, e, S, me(t))
            } else an(t, e, l, me(t))
        } catch (N) {
            an(t, e, {
                then: function() {},
                status: "rejected",
                reason: N
            }, me())
        } finally {
            R.p = u, T.T = i
        }
    }

    function hm() {}

    function fc(t, e, a, l) {
        if (t.tag !== 5) throw Error(o(476));
        var n = po(t).queue;
        go(t, n, e, L, a === null ? hm : function() {
            return bo(t), a(l)
        })
    }

    function po(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: L,
            baseState: L,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qe,
                lastRenderedState: L
            },
            next: null
        };
        var a = {};
        return e.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qe,
                lastRenderedState: a
            },
            next: null
        }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
    }

    function bo(t) {
        var e = po(t).next.queue;
        an(t, e, {}, me())
    }

    function oc() {
        return $t(_n)
    }

    function xo() {
        return Ht().memoizedState
    }

    function _o() {
        return Ht().memoizedState
    }

    function vm(t) {
        for (var e = t.return; e !== null;) {
            switch (e.tag) {
                case 24:
                case 3:
                    var a = me();
                    t = la(a);
                    var l = na(e, t, a);
                    l !== null && (ye(l, e, a), Wl(l, e, a)), e = {
                        cache: Li()
                    }, t.payload = e;
                    return
            }
            e = e.return
        }
    }

    function gm(t, e, a) {
        var l = me();
        a = {
            lane: l,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, mu(t) ? So(e, a) : (a = ji(t, e, a, l), a !== null && (ye(a, t, l), Ao(a, e, l)))
    }

    function To(t, e, a) {
        var l = me();
        an(t, e, a, l)
    }

    function an(t, e, a, l) {
        var n = {
            lane: l,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (mu(t)) So(e, n);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
                var i = e.lastRenderedState,
                    s = u(i, a);
                if (n.hasEagerState = !0, n.eagerState = s, se(s, i)) return Wn(t, e, n, 0), Tt === null && $n(), !1
            } catch {} finally {}
            if (a = ji(t, e, n, l), a !== null) return ye(a, t, l), Ao(a, e, l), !0
        }
        return !1
    }

    function rc(t, e, a, l) {
        if (l = {
                lane: 2,
                revertLane: wc(),
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, mu(t)) {
            if (e) throw Error(o(479))
        } else e = ji(t, a, l, 2), e !== null && ye(e, t, 2)
    }

    function mu(t) {
        var e = t.alternate;
        return t === tt || e !== null && e === tt
    }

    function So(t, e) {
        ol = cu = !0;
        var a = t.pending;
        a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e
    }

    function Ao(t, e, a) {
        if ((a & 4194048) !== 0) {
            var l = e.lanes;
            l &= t.pendingLanes, a |= l, e.lanes = a, js(t, a)
        }
    }
    var yu = {
            readContext: $t,
            use: fu,
            useCallback: Dt,
            useContext: Dt,
            useEffect: Dt,
            useImperativeHandle: Dt,
            useLayoutEffect: Dt,
            useInsertionEffect: Dt,
            useMemo: Dt,
            useReducer: Dt,
            useRef: Dt,
            useState: Dt,
            useDebugValue: Dt,
            useDeferredValue: Dt,
            useTransition: Dt,
            useSyncExternalStore: Dt,
            useId: Dt,
            useHostTransitionStatus: Dt,
            useFormState: Dt,
            useActionState: Dt,
            useOptimistic: Dt,
            useMemoCache: Dt,
            useCacheRefresh: Dt
        },
        Eo = {
            readContext: $t,
            use: fu,
            useCallback: function(t, e) {
                return ae().memoizedState = [t, e === void 0 ? null : e], t
            },
            useContext: $t,
            useEffect: co,
            useImperativeHandle: function(t, e, a) {
                a = a != null ? a.concat([t]) : null, du(4194308, 4, ro.bind(null, e, t), a)
            },
            useLayoutEffect: function(t, e) {
                return du(4194308, 4, t, e)
            },
            useInsertionEffect: function(t, e) {
                du(4, 2, t, e)
            },
            useMemo: function(t, e) {
                var a = ae();
                e = e === void 0 ? null : e;
                var l = t();
                if (Ca) {
                    Ie(!0);
                    try {
                        t()
                    } finally {
                        Ie(!1)
                    }
                }
                return a.memoizedState = [l, e], l
            },
            useReducer: function(t, e, a) {
                var l = ae();
                if (a !== void 0) {
                    var n = a(e);
                    if (Ca) {
                        Ie(!0);
                        try {
                            a(e)
                        } finally {
                            Ie(!1)
                        }
                    }
                } else n = e;
                return l.memoizedState = l.baseState = n, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: n
                }, l.queue = t, t = t.dispatch = gm.bind(null, tt, t), [l.memoizedState, t]
            },
            useRef: function(t) {
                var e = ae();
                return t = {
                    current: t
                }, e.memoizedState = t
            },
            useState: function(t) {
                t = uc(t);
                var e = t.queue,
                    a = To.bind(null, tt, e);
                return e.dispatch = a, [t.memoizedState, a]
            },
            useDebugValue: cc,
            useDeferredValue: function(t, e) {
                var a = ae();
                return sc(a, t, e)
            },
            useTransition: function() {
                var t = uc(!1);
                return t = go.bind(null, tt, t.queue, !0, !1), ae().memoizedState = t, [!1, t]
            },
            useSyncExternalStore: function(t, e, a) {
                var l = tt,
                    n = ae();
                if (rt) {
                    if (a === void 0) throw Error(o(407));
                    a = a()
                } else {
                    if (a = e(), Tt === null) throw Error(o(349));
                    (it & 124) !== 0 || Vf(l, e, a)
                }
                n.memoizedState = a;
                var u = {
                    value: a,
                    getSnapshot: e
                };
                return n.queue = u, co(kf.bind(null, l, u, t), [t]), l.flags |= 2048, dl(9, ru(), Kf.bind(null, l, u, a, e), null), a
            },
            useId: function() {
                var t = ae(),
                    e = Tt.identifierPrefix;
                if (rt) {
                    var a = Ge,
                        l = Ye;
                    a = (l & ~(1 << 32 - ce(l) - 1)).toString(32) + a, e = "«" + e + "R" + a, a = su++, 0 < a && (e += "H" + a.toString(32)), e += "»"
                } else a = rm++, e = "«" + e + "r" + a.toString(32) + "»";
                return t.memoizedState = e
            },
            useHostTransitionStatus: oc,
            useFormState: ao,
            useActionState: ao,
            useOptimistic: function(t) {
                var e = ae();
                e.memoizedState = e.baseState = t;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return e.queue = a, e = rc.bind(null, tt, !0, a), a.dispatch = e, [t, e]
            },
            useMemoCache: ac,
            useCacheRefresh: function() {
                return ae().memoizedState = vm.bind(null, tt)
            }
        },
        No = {
            readContext: $t,
            use: fu,
            useCallback: yo,
            useContext: $t,
            useEffect: so,
            useImperativeHandle: mo,
            useInsertionEffect: fo,
            useLayoutEffect: oo,
            useMemo: ho,
            useReducer: ou,
            useRef: io,
            useState: function() {
                return ou(Qe)
            },
            useDebugValue: cc,
            useDeferredValue: function(t, e) {
                var a = Ht();
                return vo(a, gt.memoizedState, t, e)
            },
            useTransition: function() {
                var t = ou(Qe)[0],
                    e = Ht().memoizedState;
                return [typeof t == "boolean" ? t : tn(t), e]
            },
            useSyncExternalStore: Zf,
            useId: xo,
            useHostTransitionStatus: oc,
            useFormState: lo,
            useActionState: lo,
            useOptimistic: function(t, e) {
                var a = Ht();
                return Wf(a, gt, t, e)
            },
            useMemoCache: ac,
            useCacheRefresh: _o
        },
        pm = {
            readContext: $t,
            use: fu,
            useCallback: yo,
            useContext: $t,
            useEffect: so,
            useImperativeHandle: mo,
            useInsertionEffect: fo,
            useLayoutEffect: oo,
            useMemo: ho,
            useReducer: nc,
            useRef: io,
            useState: function() {
                return nc(Qe)
            },
            useDebugValue: cc,
            useDeferredValue: function(t, e) {
                var a = Ht();
                return gt === null ? sc(a, t, e) : vo(a, gt.memoizedState, t, e)
            },
            useTransition: function() {
                var t = nc(Qe)[0],
                    e = Ht().memoizedState;
                return [typeof t == "boolean" ? t : tn(t), e]
            },
            useSyncExternalStore: Zf,
            useId: xo,
            useHostTransitionStatus: oc,
            useFormState: uo,
            useActionState: uo,
            useOptimistic: function(t, e) {
                var a = Ht();
                return gt !== null ? Wf(a, gt, t, e) : (a.baseState = t, [t, a.queue.dispatch])
            },
            useMemoCache: ac,
            useCacheRefresh: _o
        },
        ml = null,
        ln = 0;

    function hu(t) {
        var e = ln;
        return ln += 1, ml === null && (ml = []), Bf(ml, t, e)
    }

    function nn(t, e) {
        e = e.props.ref, t.ref = e !== void 0 ? e : null
    }

    function vu(t, e) {
        throw e.$$typeof === X ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }

    function zo(t) {
        var e = t._init;
        return e(t._payload)
    }

    function Mo(t) {
        function e(h, y) {
            if (t) {
                var v = h.deletions;
                v === null ? (h.deletions = [y], h.flags |= 16) : v.push(y)
            }
        }

        function a(h, y) {
            if (!t) return null;
            for (; y !== null;) e(h, y), y = y.sibling;
            return null
        }

        function l(h) {
            for (var y = new Map; h !== null;) h.key !== null ? y.set(h.key, h) : y.set(h.index, h), h = h.sibling;
            return y
        }

        function n(h, y) {
            return h = qe(h, y), h.index = 0, h.sibling = null, h
        }

        function u(h, y, v) {
            return h.index = v, t ? (v = h.alternate, v !== null ? (v = v.index, v < y ? (h.flags |= 67108866, y) : v) : (h.flags |= 67108866, y)) : (h.flags |= 1048576, y)
        }

        function i(h) {
            return t && h.alternate === null && (h.flags |= 67108866), h
        }

        function s(h, y, v, E) {
            return y === null || y.tag !== 6 ? (y = Ri(v, h.mode, E), y.return = h, y) : (y = n(y, v), y.return = h, y)
        }

        function f(h, y, v, E) {
            var B = v.type;
            return B === dt ? S(h, y, v.props.children, E, v.key) : y !== null && (y.elementType === B || typeof B == "object" && B !== null && B.$$typeof === P && zo(B) === y.type) ? (y = n(y, v.props), nn(y, v), y.return = h, y) : (y = In(v.type, v.key, v.props, null, h.mode, E), nn(y, v), y.return = h, y)
        }

        function g(h, y, v, E) {
            return y === null || y.tag !== 4 || y.stateNode.containerInfo !== v.containerInfo || y.stateNode.implementation !== v.implementation ? (y = Ui(v, h.mode, E), y.return = h, y) : (y = n(y, v.children || []), y.return = h, y)
        }

        function S(h, y, v, E, B) {
            return y === null || y.tag !== 7 ? (y = za(v, h.mode, E, B), y.return = h, y) : (y = n(y, v), y.return = h, y)
        }

        function N(h, y, v) {
            if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return y = Ri("" + y, h.mode, v), y.return = h, y;
            if (typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                    case W:
                        return v = In(y.type, y.key, y.props, null, h.mode, v), nn(v, y), v.return = h, v;
                    case st:
                        return y = Ui(y, h.mode, v), y.return = h, y;
                    case P:
                        var E = y._init;
                        return y = E(y._payload), N(h, y, v)
                }
                if (Bt(y) || At(y)) return y = za(y, h.mode, v, null), y.return = h, y;
                if (typeof y.then == "function") return N(h, hu(y), v);
                if (y.$$typeof === q) return N(h, au(h, y), v);
                vu(h, y)
            }
            return null
        }

        function b(h, y, v, E) {
            var B = y !== null ? y.key : null;
            if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return B !== null ? null : s(h, y, "" + v, E);
            if (typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                    case W:
                        return v.key === B ? f(h, y, v, E) : null;
                    case st:
                        return v.key === B ? g(h, y, v, E) : null;
                    case P:
                        return B = v._init, v = B(v._payload), b(h, y, v, E)
                }
                if (Bt(v) || At(v)) return B !== null ? null : S(h, y, v, E, null);
                if (typeof v.then == "function") return b(h, y, hu(v), E);
                if (v.$$typeof === q) return b(h, y, au(h, v), E);
                vu(h, v)
            }
            return null
        }

        function x(h, y, v, E, B) {
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return h = h.get(v) || null, s(y, h, "" + E, B);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case W:
                        return h = h.get(E.key === null ? v : E.key) || null, f(y, h, E, B);
                    case st:
                        return h = h.get(E.key === null ? v : E.key) || null, g(y, h, E, B);
                    case P:
                        var et = E._init;
                        return E = et(E._payload), x(h, y, v, E, B)
                }
                if (Bt(E) || At(E)) return h = h.get(v) || null, S(y, h, E, B, null);
                if (typeof E.then == "function") return x(h, y, v, hu(E), B);
                if (E.$$typeof === q) return x(h, y, v, au(y, E), B);
                vu(y, E)
            }
            return null
        }

        function K(h, y, v, E) {
            for (var B = null, et = null, G = y, V = y = 0, Qt = null; G !== null && V < v.length; V++) {
                G.index > V ? (Qt = G, G = null) : Qt = G.sibling;
                var ot = b(h, G, v[V], E);
                if (ot === null) {
                    G === null && (G = Qt);
                    break
                }
                t && G && ot.alternate === null && e(h, G), y = u(ot, y, V), et === null ? B = ot : et.sibling = ot, et = ot, G = Qt
            }
            if (V === v.length) return a(h, G), rt && Oa(h, V), B;
            if (G === null) {
                for (; V < v.length; V++) G = N(h, v[V], E), G !== null && (y = u(G, y, V), et === null ? B = G : et.sibling = G, et = G);
                return rt && Oa(h, V), B
            }
            for (G = l(G); V < v.length; V++) Qt = x(G, h, V, v[V], E), Qt !== null && (t && Qt.alternate !== null && G.delete(Qt.key === null ? V : Qt.key), y = u(Qt, y, V), et === null ? B = Qt : et.sibling = Qt, et = Qt);
            return t && G.forEach(function(_a) {
                return e(h, _a)
            }), rt && Oa(h, V), B
        }

        function Z(h, y, v, E) {
            if (v == null) throw Error(o(151));
            for (var B = null, et = null, G = y, V = y = 0, Qt = null, ot = v.next(); G !== null && !ot.done; V++, ot = v.next()) {
                G.index > V ? (Qt = G, G = null) : Qt = G.sibling;
                var _a = b(h, G, ot.value, E);
                if (_a === null) {
                    G === null && (G = Qt);
                    break
                }
                t && G && _a.alternate === null && e(h, G), y = u(_a, y, V), et === null ? B = _a : et.sibling = _a, et = _a, G = Qt
            }
            if (ot.done) return a(h, G), rt && Oa(h, V), B;
            if (G === null) {
                for (; !ot.done; V++, ot = v.next()) ot = N(h, ot.value, E), ot !== null && (y = u(ot, y, V), et === null ? B = ot : et.sibling = ot, et = ot);
                return rt && Oa(h, V), B
            }
            for (G = l(G); !ot.done; V++, ot = v.next()) ot = x(G, h, V, ot.value, E), ot !== null && (t && ot.alternate !== null && G.delete(ot.key === null ? V : ot.key), y = u(ot, y, V), et === null ? B = ot : et.sibling = ot, et = ot);
            return t && G.forEach(function(by) {
                return e(h, by)
            }), rt && Oa(h, V), B
        }

        function bt(h, y, v, E) {
            if (typeof v == "object" && v !== null && v.type === dt && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                    case W:
                        t: {
                            for (var B = v.key; y !== null;) {
                                if (y.key === B) {
                                    if (B = v.type, B === dt) {
                                        if (y.tag === 7) {
                                            a(h, y.sibling), E = n(y, v.props.children), E.return = h, h = E;
                                            break t
                                        }
                                    } else if (y.elementType === B || typeof B == "object" && B !== null && B.$$typeof === P && zo(B) === y.type) {
                                        a(h, y.sibling), E = n(y, v.props), nn(E, v), E.return = h, h = E;
                                        break t
                                    }
                                    a(h, y);
                                    break
                                } else e(h, y);
                                y = y.sibling
                            }
                            v.type === dt ? (E = za(v.props.children, h.mode, E, v.key), E.return = h, h = E) : (E = In(v.type, v.key, v.props, null, h.mode, E), nn(E, v), E.return = h, h = E)
                        }
                        return i(h);
                    case st:
                        t: {
                            for (B = v.key; y !== null;) {
                                if (y.key === B)
                                    if (y.tag === 4 && y.stateNode.containerInfo === v.containerInfo && y.stateNode.implementation === v.implementation) {
                                        a(h, y.sibling), E = n(y, v.children || []), E.return = h, h = E;
                                        break t
                                    } else {
                                        a(h, y);
                                        break
                                    }
                                else e(h, y);
                                y = y.sibling
                            }
                            E = Ui(v, h.mode, E),
                            E.return = h,
                            h = E
                        }
                        return i(h);
                    case P:
                        return B = v._init, v = B(v._payload), bt(h, y, v, E)
                }
                if (Bt(v)) return K(h, y, v, E);
                if (At(v)) {
                    if (B = At(v), typeof B != "function") throw Error(o(150));
                    return v = B.call(v), Z(h, y, v, E)
                }
                if (typeof v.then == "function") return bt(h, y, hu(v), E);
                if (v.$$typeof === q) return bt(h, y, au(h, v), E);
                vu(h, v)
            }
            return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, y !== null && y.tag === 6 ? (a(h, y.sibling), E = n(y, v), E.return = h, h = E) : (a(h, y), E = Ri(v, h.mode, E), E.return = h, h = E), i(h)) : a(h, y)
        }
        return function(h, y, v, E) {
            try {
                ln = 0;
                var B = bt(h, y, v, E);
                return ml = null, B
            } catch (G) {
                if (G === Jl || G === nu) throw G;
                var et = fe(29, G, null, h.mode);
                return et.lanes = E, et.return = h, et
            } finally {}
        }
    }
    var yl = Mo(!0),
        Oo = Mo(!1),
        Te = z(null),
        je = null;

    function ia(t) {
        var e = t.alternate;
        U(Yt, Yt.current & 1), U(Te, t), je === null && (e === null || fl.current !== null || e.memoizedState !== null) && (je = t)
    }

    function jo(t) {
        if (t.tag === 22) {
            if (U(Yt, Yt.current), U(Te, t), je === null) {
                var e = t.alternate;
                e !== null && e.memoizedState !== null && (je = t)
            }
        } else ca()
    }

    function ca() {
        U(Yt, Yt.current), U(Te, Te.current)
    }

    function we(t) {
        H(Te), je === t && (je = null), H(Yt)
    }
    var Yt = z(0);

    function gu(t) {
        for (var e = t; e !== null;) {
            if (e.tag === 13) {
                var a = e.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || es(a))) return e
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if ((e.flags & 128) !== 0) return e
            } else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return null;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        return null
    }

    function dc(t, e, a, l) {
        e = t.memoizedState, a = a(l, e), a = a == null ? e : D({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a)
    }
    var mc = {
        enqueueSetState: function(t, e, a) {
            t = t._reactInternals;
            var l = me(),
                n = la(l);
            n.payload = e, a != null && (n.callback = a), e = na(t, n, l), e !== null && (ye(e, t, l), Wl(e, t, l))
        },
        enqueueReplaceState: function(t, e, a) {
            t = t._reactInternals;
            var l = me(),
                n = la(l);
            n.tag = 1, n.payload = e, a != null && (n.callback = a), e = na(t, n, l), e !== null && (ye(e, t, l), Wl(e, t, l))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var a = me(),
                l = la(a);
            l.tag = 2, e != null && (l.callback = e), e = na(t, l, a), e !== null && (ye(e, t, a), Wl(e, t, a))
        }
    };

    function Do(t, e, a, l, n, u, i) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, i) : e.prototype && e.prototype.isPureReactComponent ? !Ll(a, l) || !Ll(n, u) : !0
    }

    function Ro(t, e, a, l) {
        t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l), e.state !== t && mc.enqueueReplaceState(e, e.state, null)
    }

    function Ba(t, e) {
        var a = e;
        if ("ref" in e) {
            a = {};
            for (var l in e) l !== "ref" && (a[l] = e[l])
        }
        if (t = t.defaultProps) {
            a === e && (a = D({}, a));
            for (var n in t) a[n] === void 0 && (a[n] = t[n])
        }
        return a
    }
    var pu = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    };

    function Uo(t) {
        pu(t)
    }

    function Ho(t) {
        console.error(t)
    }

    function Co(t) {
        pu(t)
    }

    function bu(t, e) {
        try {
            var a = t.onUncaughtError;
            a(e.value, {
                componentStack: e.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }

    function Bo(t, e, a) {
        try {
            var l = t.onCaughtError;
            l(a.value, {
                componentStack: a.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }

    function yc(t, e, a) {
        return a = la(a), a.tag = 3, a.payload = {
            element: null
        }, a.callback = function() {
            bu(t, e)
        }, a
    }

    function qo(t) {
        return t = la(t), t.tag = 3, t
    }

    function Yo(t, e, a, l) {
        var n = a.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = l.value;
            t.payload = function() {
                return n(u)
            }, t.callback = function() {
                Bo(e, a, l)
            }
        }
        var i = a.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
            Bo(e, a, l), typeof n != "function" && (ma === null ? ma = new Set([this]) : ma.add(this));
            var s = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: s !== null ? s : ""
            })
        })
    }

    function bm(t, e, a, l, n) {
        if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            if (e = a.alternate, e !== null && Vl(e, a, n, !0), a = Te.current, a !== null) {
                switch (a.tag) {
                    case 13:
                        return je === null ? Yc() : a.alternate === null && jt === 0 && (jt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === wi ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = new Set([l]) : e.add(l), Lc(t, l, n)), !1;
                    case 22:
                        return a.flags |= 65536, l === wi ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([l])
                        }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = new Set([l]) : a.add(l)), Lc(t, l, n)), !1
                }
                throw Error(o(435, a.tag))
            }
            return Lc(t, l, n), Yc(), !1
        }
        if (rt) return e = Te.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, l !== Bi && (t = Error(o(422), {
            cause: l
        }), Zl(pe(t, a)))) : (l !== Bi && (e = Error(o(423), {
            cause: l
        }), Zl(pe(e, a))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, l = pe(l, a), n = yc(t.stateNode, l, n), Ki(t, n), jt !== 4 && (jt = 2)), !1;
        var u = Error(o(520), {
            cause: l
        });
        if (u = pe(u, a), dn === null ? dn = [u] : dn.push(u), jt !== 4 && (jt = 2), e === null) return !0;
        l = pe(l, a), a = e;
        do {
            switch (a.tag) {
                case 3:
                    return a.flags |= 65536, t = n & -n, a.lanes |= t, t = yc(a.stateNode, l, t), Ki(a, t), !1;
                case 1:
                    if (e = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ma === null || !ma.has(u)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = qo(n), Yo(n, t, a, l), Ki(a, n), !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var Go = Error(o(461)),
        Lt = !1;

    function wt(t, e, a, l) {
        e.child = t === null ? Oo(e, null, a, l) : yl(e, t.child, a, l)
    }

    function Lo(t, e, a, l, n) {
        a = a.render;
        var u = e.ref;
        if ("ref" in l) {
            var i = {};
            for (var s in l) s !== "ref" && (i[s] = l[s])
        } else i = l;
        return Ua(e), l = Fi(t, e, a, i, u, n), s = Ii(), t !== null && !Lt ? (Pi(t, e, n), Ze(t, e, n)) : (rt && s && Hi(e), e.flags |= 1, wt(t, e, l, n), e.child)
    }

    function Xo(t, e, a, l, n) {
        if (t === null) {
            var u = a.type;
            return typeof u == "function" && !Di(u) && u.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = u, Qo(t, e, u, l, n)) : (t = In(a.type, null, l, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t)
        }
        if (u = t.child, !Tc(t, n)) {
            var i = u.memoizedProps;
            if (a = a.compare, a = a !== null ? a : Ll, a(i, l) && t.ref === e.ref) return Ze(t, e, n)
        }
        return e.flags |= 1, t = qe(u, l), t.ref = e.ref, t.return = e, e.child = t
    }

    function Qo(t, e, a, l, n) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (Ll(u, l) && t.ref === e.ref)
                if (Lt = !1, e.pendingProps = l = u, Tc(t, n))(t.flags & 131072) !== 0 && (Lt = !0);
                else return e.lanes = t.lanes, Ze(t, e, n)
        }
        return hc(t, e, a, l, n)
    }

    function wo(t, e, a) {
        var l = e.pendingProps,
            n = l.children,
            u = t !== null ? t.memoizedState : null;
        if (l.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (l = u !== null ? u.baseLanes | a : a, t !== null) {
                    for (n = e.child = t.child, u = 0; n !== null;) u = u | n.lanes | n.childLanes, n = n.sibling;
                    e.childLanes = u & ~l
                } else e.childLanes = 0, e.child = null;
                return Zo(t, e, l, a)
            }
            if ((a & 536870912) !== 0) e.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && lu(e, u !== null ? u.cachePool : null), u !== null ? Xf(e, u) : Ji(), jo(e);
            else return e.lanes = e.childLanes = 536870912, Zo(t, e, u !== null ? u.baseLanes | a : a, a)
        } else u !== null ? (lu(e, u.cachePool), Xf(e, u), ca(), e.memoizedState = null) : (t !== null && lu(e, null), Ji(), ca());
        return wt(t, e, n, a), e.child
    }

    function Zo(t, e, a, l) {
        var n = Qi();
        return n = n === null ? null : {
            parent: qt._currentValue,
            pool: n
        }, e.memoizedState = {
            baseLanes: a,
            cachePool: n
        }, t !== null && lu(e, null), Ji(), jo(e), t !== null && Vl(t, e, l, !0), null
    }

    function xu(t, e) {
        var a = e.ref;
        if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object") throw Error(o(284));
            (t === null || t.ref !== a) && (e.flags |= 4194816)
        }
    }

    function hc(t, e, a, l, n) {
        return Ua(e), a = Fi(t, e, a, l, void 0, n), l = Ii(), t !== null && !Lt ? (Pi(t, e, n), Ze(t, e, n)) : (rt && l && Hi(e), e.flags |= 1, wt(t, e, a, n), e.child)
    }

    function Vo(t, e, a, l, n, u) {
        return Ua(e), e.updateQueue = null, a = wf(e, l, a, n), Qf(t), l = Ii(), t !== null && !Lt ? (Pi(t, e, u), Ze(t, e, u)) : (rt && l && Hi(e), e.flags |= 1, wt(t, e, a, u), e.child)
    }

    function Ko(t, e, a, l, n) {
        if (Ua(e), e.stateNode === null) {
            var u = nl,
                i = a.contextType;
            typeof i == "object" && i !== null && (u = $t(i)), u = new a(l, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = mc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = l, u.state = e.memoizedState, u.refs = {}, Zi(e), i = a.contextType, u.context = typeof i == "object" && i !== null ? $t(i) : nl, u.state = e.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (dc(e, a, i, l), u.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && mc.enqueueReplaceState(u, u.state, null), Il(e, l, u, n), Fl(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = !0
        } else if (t === null) {
            u = e.stateNode;
            var s = e.memoizedProps,
                f = Ba(a, s);
            u.props = f;
            var g = u.context,
                S = a.contextType;
            i = nl, typeof S == "object" && S !== null && (i = $t(S));
            var N = a.getDerivedStateFromProps;
            S = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, S || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || g !== i) && Ro(e, u, l, i), aa = !1;
            var b = e.memoizedState;
            u.state = b, Il(e, l, u, n), Fl(), g = e.memoizedState, s || b !== g || aa ? (typeof N == "function" && (dc(e, a, N, l), g = e.memoizedState), (f = aa || Do(e, a, f, l, b, g, i)) ? (S || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = g), u.props = l, u.state = g, u.context = i, l = f) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = !1)
        } else {
            u = e.stateNode, Vi(t, e), i = e.memoizedProps, S = Ba(a, i), u.props = S, N = e.pendingProps, b = u.context, g = a.contextType, f = nl, typeof g == "object" && g !== null && (f = $t(g)), s = a.getDerivedStateFromProps, (g = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== N || b !== f) && Ro(e, u, l, f), aa = !1, b = e.memoizedState, u.state = b, Il(e, l, u, n), Fl();
            var x = e.memoizedState;
            i !== N || b !== x || aa || t !== null && t.dependencies !== null && eu(t.dependencies) ? (typeof s == "function" && (dc(e, a, s, l), x = e.memoizedState), (S = aa || Do(e, a, S, l, b, x, f) || t !== null && t.dependencies !== null && eu(t.dependencies)) ? (g || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, x, f), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, x, f)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && b === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && b === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = x), u.props = l, u.state = x, u.context = f, l = S) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && b === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && b === t.memoizedState || (e.flags |= 1024), l = !1)
        }
        return u = l, xu(t, e), l = (e.flags & 128) !== 0, u || l ? (u = e.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && l ? (e.child = yl(e, t.child, null, n), e.child = yl(e, null, a, n)) : wt(t, e, a, n), e.memoizedState = u.state, t = e.child) : t = Ze(t, e, n), t
    }

    function ko(t, e, a, l) {
        return wl(), e.flags |= 256, wt(t, e, a, l), e.child
    }
    var vc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function gc(t) {
        return {
            baseLanes: t,
            cachePool: Uf()
        }
    }

    function pc(t, e, a) {
        return t = t !== null ? t.childLanes & ~a : 0, e && (t |= Se), t
    }

    function Jo(t, e, a) {
        var l = e.pendingProps,
            n = !1,
            u = (e.flags & 128) !== 0,
            i;
        if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
            if (rt) {
                if (n ? ia(e) : ca(), rt) {
                    var s = Ot,
                        f;
                    if (f = s) {
                        t: {
                            for (f = s, s = Oe; f.nodeType !== 8;) {
                                if (!s) {
                                    s = null;
                                    break t
                                }
                                if (f = ze(f.nextSibling), f === null) {
                                    s = null;
                                    break t
                                }
                            }
                            s = f
                        }
                        s !== null ? (e.memoizedState = {
                            dehydrated: s,
                            treeContext: Ma !== null ? {
                                id: Ye,
                                overflow: Ge
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, f = fe(18, null, null, 0), f.stateNode = s, f.return = e, e.child = f, It = e, Ot = null, f = !0) : f = !1
                    }
                    f || Da(e)
                }
                if (s = e.memoizedState, s !== null && (s = s.dehydrated, s !== null)) return es(s) ? e.lanes = 32 : e.lanes = 536870912, null;
                we(e)
            }
            return s = l.children, l = l.fallback, n ? (ca(), n = e.mode, s = _u({
                mode: "hidden",
                children: s
            }, n), l = za(l, n, a, null), s.return = e, l.return = e, s.sibling = l, e.child = s, n = e.child, n.memoizedState = gc(a), n.childLanes = pc(t, i, a), e.memoizedState = vc, l) : (ia(e), bc(e, s))
        }
        if (f = t.memoizedState, f !== null && (s = f.dehydrated, s !== null)) {
            if (u) e.flags & 256 ? (ia(e), e.flags &= -257, e = xc(t, e, a)) : e.memoizedState !== null ? (ca(), e.child = t.child, e.flags |= 128, e = null) : (ca(), n = l.fallback, s = e.mode, l = _u({
                mode: "visible",
                children: l.children
            }, s), n = za(n, s, a, null), n.flags |= 2, l.return = e, n.return = e, l.sibling = n, e.child = l, yl(e, t.child, null, a), l = e.child, l.memoizedState = gc(a), l.childLanes = pc(t, i, a), e.memoizedState = vc, e = n);
            else if (ia(e), es(s)) {
                if (i = s.nextSibling && s.nextSibling.dataset, i) var g = i.dgst;
                i = g, l = Error(o(419)), l.stack = "", l.digest = i, Zl({
                    value: l,
                    source: null,
                    stack: null
                }), e = xc(t, e, a)
            } else if (Lt || Vl(t, e, a, !1), i = (a & t.childLanes) !== 0, Lt || i) {
                if (i = Tt, i !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : ai(l), l = (l & (i.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== f.retryLane)) throw f.retryLane = l, ll(t, l), ye(i, t, l), Go;
                s.data === "$?" || Yc(), e = xc(t, e, a)
            } else s.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = f.treeContext, Ot = ze(s.nextSibling), It = e, rt = !0, ja = null, Oe = !1, t !== null && (xe[_e++] = Ye, xe[_e++] = Ge, xe[_e++] = Ma, Ye = t.id, Ge = t.overflow, Ma = e), e = bc(e, l.children), e.flags |= 4096);
            return e
        }
        return n ? (ca(), n = l.fallback, s = e.mode, f = t.child, g = f.sibling, l = qe(f, {
            mode: "hidden",
            children: l.children
        }), l.subtreeFlags = f.subtreeFlags & 65011712, g !== null ? n = qe(g, n) : (n = za(n, s, a, null), n.flags |= 2), n.return = e, l.return = e, l.sibling = n, e.child = l, l = n, n = e.child, s = t.child.memoizedState, s === null ? s = gc(a) : (f = s.cachePool, f !== null ? (g = qt._currentValue, f = f.parent !== g ? {
            parent: g,
            pool: g
        } : f) : f = Uf(), s = {
            baseLanes: s.baseLanes | a,
            cachePool: f
        }), n.memoizedState = s, n.childLanes = pc(t, i, a), e.memoizedState = vc, l) : (ia(e), a = t.child, t = a.sibling, a = qe(a, {
            mode: "visible",
            children: l.children
        }), a.return = e, a.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = a, e.memoizedState = null, a)
    }

    function bc(t, e) {
        return e = _u({
            mode: "visible",
            children: e
        }, t.mode), e.return = t, t.child = e
    }

    function _u(t, e) {
        return t = fe(22, t, null, e), t.lanes = 0, t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, t
    }

    function xc(t, e, a) {
        return yl(e, t.child, null, a), t = bc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
    }

    function $o(t, e, a) {
        t.lanes |= e;
        var l = t.alternate;
        l !== null && (l.lanes |= e), Yi(t.return, e, a)
    }

    function _c(t, e, a, l, n) {
        var u = t.memoizedState;
        u === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: a,
            tailMode: n
        } : (u.isBackwards = e, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = a, u.tailMode = n)
    }

    function Wo(t, e, a) {
        var l = e.pendingProps,
            n = l.revealOrder,
            u = l.tail;
        if (wt(t, e, l.children, a), l = Yt.current, (l & 2) !== 0) l = l & 1 | 2, e.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && $o(t, a, e);
                else if (t.tag === 19) $o(t, a, e);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === e) break t;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) break t;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            l &= 1
        }
        switch (U(Yt, l), n) {
            case "forwards":
                for (a = e.child, n = null; a !== null;) t = a.alternate, t !== null && gu(t) === null && (n = a), a = a.sibling;
                a = n, a === null ? (n = e.child, e.child = null) : (n = a.sibling, a.sibling = null), _c(e, !1, n, a, u);
                break;
            case "backwards":
                for (a = null, n = e.child, e.child = null; n !== null;) {
                    if (t = n.alternate, t !== null && gu(t) === null) {
                        e.child = n;
                        break
                    }
                    t = n.sibling, n.sibling = a, a = n, n = t
                }
                _c(e, !0, a, null, u);
                break;
            case "together":
                _c(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null
        }
        return e.child
    }

    function Ze(t, e, a) {
        if (t !== null && (e.dependencies = t.dependencies), da |= e.lanes, (a & e.childLanes) === 0)
            if (t !== null) {
                if (Vl(t, e, a, !1), (a & e.childLanes) === 0) return null
            } else return null;
        if (t !== null && e.child !== t.child) throw Error(o(153));
        if (e.child !== null) {
            for (t = e.child, a = qe(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null;) t = t.sibling, a = a.sibling = qe(t, t.pendingProps), a.return = e;
            a.sibling = null
        }
        return e.child
    }

    function Tc(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && eu(t)))
    }

    function xm(t, e, a) {
        switch (e.tag) {
            case 3:
                Et(e, e.stateNode.containerInfo), ea(e, qt, t.memoizedState.cache), wl();
                break;
            case 27:
            case 5:
                Fu(e);
                break;
            case 4:
                Et(e, e.stateNode.containerInfo);
                break;
            case 10:
                ea(e, e.type, e.memoizedProps.value);
                break;
            case 13:
                var l = e.memoizedState;
                if (l !== null) return l.dehydrated !== null ? (ia(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Jo(t, e, a) : (ia(e), t = Ze(t, e, a), t !== null ? t.sibling : null);
                ia(e);
                break;
            case 19:
                var n = (t.flags & 128) !== 0;
                if (l = (a & e.childLanes) !== 0, l || (Vl(t, e, a, !1), l = (a & e.childLanes) !== 0), n) {
                    if (l) return Wo(t, e, a);
                    e.flags |= 128
                }
                if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), U(Yt, Yt.current), l) break;
                return null;
            case 22:
            case 23:
                return e.lanes = 0, wo(t, e, a);
            case 24:
                ea(e, qt, t.memoizedState.cache)
        }
        return Ze(t, e, a)
    }

    function Fo(t, e, a) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps) Lt = !0;
            else {
                if (!Tc(t, a) && (e.flags & 128) === 0) return Lt = !1, xm(t, e, a);
                Lt = (t.flags & 131072) !== 0
            }
        else Lt = !1, rt && (e.flags & 1048576) !== 0 && Nf(e, tu, e.index);
        switch (e.lanes = 0, e.tag) {
            case 16:
                t: {
                    t = e.pendingProps;
                    var l = e.elementType,
                        n = l._init;
                    if (l = n(l._payload), e.type = l, typeof l == "function") Di(l) ? (t = Ba(l, t), e.tag = 1, e = Ko(null, e, l, t, a)) : (e.tag = 0, e = hc(null, e, l, t, a));
                    else {
                        if (l != null) {
                            if (n = l.$$typeof, n === k) {
                                e.tag = 11, e = Lo(null, e, l, t, a);
                                break t
                            } else if (n === J) {
                                e.tag = 14, e = Xo(null, e, l, t, a);
                                break t
                            }
                        }
                        throw e = He(l) || l, Error(o(306, e, ""))
                    }
                }
                return e;
            case 0:
                return hc(t, e, e.type, e.pendingProps, a);
            case 1:
                return l = e.type, n = Ba(l, e.pendingProps), Ko(t, e, l, n, a);
            case 3:
                t: {
                    if (Et(e, e.stateNode.containerInfo), t === null) throw Error(o(387));l = e.pendingProps;
                    var u = e.memoizedState;n = u.element,
                    Vi(t, e),
                    Il(e, l, null, a);
                    var i = e.memoizedState;
                    if (l = i.cache, ea(e, qt, l), l !== u.cache && Gi(e, [qt], a, !0), Fl(), l = i.element, u.isDehydrated)
                        if (u = {
                                element: l,
                                isDehydrated: !1,
                                cache: i.cache
                            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
                            e = ko(t, e, l, a);
                            break t
                        } else if (l !== n) {
                        n = pe(Error(o(424)), e), Zl(n), e = ko(t, e, l, a);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo, t.nodeType) {
                            case 9:
                                t = t.body;
                                break;
                            default:
                                t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Ot = ze(t.firstChild), It = e, rt = !0, ja = null, Oe = !0, a = Oo(e, null, l, a), e.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling
                    } else {
                        if (wl(), l === n) {
                            e = Ze(t, e, a);
                            break t
                        }
                        wt(t, e, l, a)
                    }
                    e = e.child
                }
                return e;
            case 26:
                return xu(t, e), t === null ? (a = ed(e.type, null, e.pendingProps, null)) ? e.memoizedState = a : rt || (a = e.type, t = e.pendingProps, l = Cu($.current).createElement(a), l[Jt] = e, l[te] = t, Vt(l, a, t), Gt(l), e.stateNode = l) : e.memoizedState = ed(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
            case 27:
                return Fu(e), t === null && rt && (l = e.stateNode = Ir(e.type, e.pendingProps, $.current), It = e, Oe = !0, n = Ot, va(e.type) ? (as = n, Ot = ze(l.firstChild)) : Ot = n), wt(t, e, e.pendingProps.children, a), xu(t, e), t === null && (e.flags |= 4194304), e.child;
            case 5:
                return t === null && rt && ((n = l = Ot) && (l = Jm(l, e.type, e.pendingProps, Oe), l !== null ? (e.stateNode = l, It = e, Ot = ze(l.firstChild), Oe = !1, n = !0) : n = !1), n || Da(e)), Fu(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, l = u.children, Ic(n, u) ? l = null : i !== null && Ic(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = Fi(t, e, dm, null, null, a), _n._currentValue = n), xu(t, e), wt(t, e, l, a), e.child;
            case 6:
                return t === null && rt && ((t = a = Ot) && (a = $m(a, e.pendingProps, Oe), a !== null ? (e.stateNode = a, It = e, Ot = null, t = !0) : t = !1), t || Da(e)), null;
            case 13:
                return Jo(t, e, a);
            case 4:
                return Et(e, e.stateNode.containerInfo), l = e.pendingProps, t === null ? e.child = yl(e, null, l, a) : wt(t, e, l, a), e.child;
            case 11:
                return Lo(t, e, e.type, e.pendingProps, a);
            case 7:
                return wt(t, e, e.pendingProps, a), e.child;
            case 8:
                return wt(t, e, e.pendingProps.children, a), e.child;
            case 12:
                return wt(t, e, e.pendingProps.children, a), e.child;
            case 10:
                return l = e.pendingProps, ea(e, e.type, l.value), wt(t, e, l.children, a), e.child;
            case 9:
                return n = e.type._context, l = e.pendingProps.children, Ua(e), n = $t(n), l = l(n), e.flags |= 1, wt(t, e, l, a), e.child;
            case 14:
                return Xo(t, e, e.type, e.pendingProps, a);
            case 15:
                return Qo(t, e, e.type, e.pendingProps, a);
            case 19:
                return Wo(t, e, a);
            case 31:
                return l = e.pendingProps, a = e.mode, l = {
                    mode: l.mode,
                    children: l.children
                }, t === null ? (a = _u(l, a), a.ref = e.ref, e.child = a, a.return = e, e = a) : (a = qe(t.child, l), a.ref = e.ref, e.child = a, a.return = e, e = a), e;
            case 22:
                return wo(t, e, a);
            case 24:
                return Ua(e), l = $t(qt), t === null ? (n = Qi(), n === null && (n = Tt, u = Li(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= a), n = u), e.memoizedState = {
                    parent: l,
                    cache: n
                }, Zi(e), ea(e, qt, n)) : ((t.lanes & a) !== 0 && (Vi(t, e), Il(e, null, null, a), Fl()), n = t.memoizedState, u = e.memoizedState, n.parent !== l ? (n = {
                    parent: l,
                    cache: l
                }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), ea(e, qt, l)) : (l = u.cache, ea(e, qt, l), l !== n.cache && Gi(e, [qt], a, !0))), wt(t, e, e.pendingProps.children, a), e.child;
            case 29:
                throw e.pendingProps
        }
        throw Error(o(156, e.tag))
    }

    function Ve(t) {
        t.flags |= 4
    }

    function Io(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !id(e)) {
            if (e = Te.current, e !== null && ((it & 4194048) === it ? je !== null : (it & 62914560) !== it && (it & 536870912) === 0 || e !== je)) throw $l = wi, Hf;
            t.flags |= 8192
        }
    }

    function Tu(t, e) {
        e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ms() : 536870912, t.lanes |= e, pl |= e)
    }

    function un(t, e) {
        if (!rt) switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var a = null; e !== null;) e.alternate !== null && (a = e), e = e.sibling;
                a === null ? t.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = t.tail;
                for (var l = null; a !== null;) a.alternate !== null && (l = a), a = a.sibling;
                l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
        }
    }

    function zt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            a = 0,
            l = 0;
        if (e)
            for (var n = t.child; n !== null;) a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = t, n = n.sibling;
        else
            for (n = t.child; n !== null;) a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = t, n = n.sibling;
        return t.subtreeFlags |= l, t.childLanes = a, e
    }

    function _m(t, e, a) {
        var l = e.pendingProps;
        switch (Ci(e), e.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return zt(e), null;
            case 1:
                return zt(e), null;
            case 3:
                return a = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Xe(qt), Fe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Ql(e) ? Ve(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Of())), zt(e), null;
            case 26:
                return a = e.memoizedState, t === null ? (Ve(e), a !== null ? (zt(e), Io(e, a)) : (zt(e), e.flags &= -16777217)) : a ? a !== t.memoizedState ? (Ve(e), zt(e), Io(e, a)) : (zt(e), e.flags &= -16777217) : (t.memoizedProps !== l && Ve(e), zt(e), e.flags &= -16777217), null;
            case 27:
                Un(e), a = $.current;
                var n = e.type;
                if (t !== null && e.stateNode != null) t.memoizedProps !== l && Ve(e);
                else {
                    if (!l) {
                        if (e.stateNode === null) throw Error(o(166));
                        return zt(e), null
                    }
                    t = w.current, Ql(e) ? zf(e) : (t = Ir(n, l, a), e.stateNode = t, Ve(e))
                }
                return zt(e), null;
            case 5:
                if (Un(e), a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && Ve(e);
                else {
                    if (!l) {
                        if (e.stateNode === null) throw Error(o(166));
                        return zt(e), null
                    }
                    if (t = w.current, Ql(e)) zf(e);
                    else {
                        switch (n = Cu($.current), t) {
                            case 1:
                                t = n.createElementNS("http://www.w3.org/2000/svg", a);
                                break;
                            case 2:
                                t = n.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                break;
                            default:
                                switch (a) {
                                    case "svg":
                                        t = n.createElementNS("http://www.w3.org/2000/svg", a);
                                        break;
                                    case "math":
                                        t = n.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                        break;
                                    case "script":
                                        t = n.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                                        break;
                                    case "select":
                                        t = typeof l.is == "string" ? n.createElement("select", {
                                            is: l.is
                                        }) : n.createElement("select"), l.multiple ? t.multiple = !0 : l.size && (t.size = l.size);
                                        break;
                                    default:
                                        t = typeof l.is == "string" ? n.createElement(a, {
                                            is: l.is
                                        }) : n.createElement(a)
                                }
                        }
                        t[Jt] = e, t[te] = l;
                        t: for (n = e.child; n !== null;) {
                            if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
                            else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                                n.child.return = n, n = n.child;
                                continue
                            }
                            if (n === e) break t;
                            for (; n.sibling === null;) {
                                if (n.return === null || n.return === e) break t;
                                n = n.return
                            }
                            n.sibling.return = n.return, n = n.sibling
                        }
                        e.stateNode = t;
                        t: switch (Vt(t, a, l), a) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                t = !!l.autoFocus;
                                break t;
                            case "img":
                                t = !0;
                                break t;
                            default:
                                t = !1
                        }
                        t && Ve(e)
                    }
                }
                return zt(e), e.flags &= -16777217, null;
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== l && Ve(e);
                else {
                    if (typeof l != "string" && e.stateNode === null) throw Error(o(166));
                    if (t = $.current, Ql(e)) {
                        if (t = e.stateNode, a = e.memoizedProps, l = null, n = It, n !== null) switch (n.tag) {
                            case 27:
                            case 5:
                                l = n.memoizedProps
                        }
                        t[Jt] = e, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Vr(t.nodeValue, a)), t || Da(e)
                    } else t = Cu(t).createTextNode(l), t[Jt] = e, e.stateNode = t
                }
                return zt(e), null;
            case 13:
                if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (n = Ql(e), l !== null && l.dehydrated !== null) {
                        if (t === null) {
                            if (!n) throw Error(o(318));
                            if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
                            n[Jt] = e
                        } else wl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        zt(e), n = !1
                    } else n = Of(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
                    if (!n) return e.flags & 256 ? (we(e), e) : (we(e), null)
                }
                if (we(e), (e.flags & 128) !== 0) return e.lanes = a, e;
                if (a = l !== null, t = t !== null && t.memoizedState !== null, a) {
                    l = e.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool);
                    var u = null;
                    l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== n && (l.flags |= 2048)
                }
                return a !== t && a && (e.child.flags |= 8192), Tu(e, e.updateQueue), zt(e), null;
            case 4:
                return Fe(), t === null && kc(e.stateNode.containerInfo), zt(e), null;
            case 10:
                return Xe(e.type), zt(e), null;
            case 19:
                if (H(Yt), n = e.memoizedState, n === null) return zt(e), null;
                if (l = (e.flags & 128) !== 0, u = n.rendering, u === null)
                    if (l) un(n, !1);
                    else {
                        if (jt !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = e.child; t !== null;) {
                                if (u = gu(t), u !== null) {
                                    for (e.flags |= 128, un(n, !1), t = u.updateQueue, e.updateQueue = t, Tu(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null;) Ef(a, t), a = a.sibling;
                                    return U(Yt, Yt.current & 1 | 2), e.child
                                }
                                t = t.sibling
                            }
                        n.tail !== null && Me() > Eu && (e.flags |= 128, l = !0, un(n, !1), e.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (t = gu(u), t !== null) {
                            if (e.flags |= 128, l = !0, t = t.updateQueue, e.updateQueue = t, Tu(e, t), un(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !rt) return zt(e), null
                        } else 2 * Me() - n.renderingStartTime > Eu && a !== 536870912 && (e.flags |= 128, l = !0, un(n, !1), e.lanes = 4194304);
                    n.isBackwards ? (u.sibling = e.child, e.child = u) : (t = n.last, t !== null ? t.sibling = u : e.child = u, n.last = u)
                }
                return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = Me(), e.sibling = null, t = Yt.current, U(Yt, l ? t & 1 | 2 : t & 1), e) : (zt(e), null);
            case 22:
            case 23:
                return we(e), $i(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : zt(e), a = e.updateQueue, a !== null && Tu(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== a && (e.flags |= 2048), t !== null && H(Ha), null;
            case 24:
                return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Xe(qt), zt(e), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(o(156, e.tag))
    }

    function Tm(t, e) {
        switch (Ci(e), e.tag) {
            case 1:
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 3:
                return Xe(qt), Fe(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
            case 26:
            case 27:
            case 5:
                return Un(e), null;
            case 13:
                if (we(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                    if (e.alternate === null) throw Error(o(340));
                    wl()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 19:
                return H(Yt), null;
            case 4:
                return Fe(), null;
            case 10:
                return Xe(e.type), null;
            case 22:
            case 23:
                return we(e), $i(), t !== null && H(Ha), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 24:
                return Xe(qt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Po(t, e) {
        switch (Ci(e), e.tag) {
            case 3:
                Xe(qt), Fe();
                break;
            case 26:
            case 27:
            case 5:
                Un(e);
                break;
            case 4:
                Fe();
                break;
            case 13:
                we(e);
                break;
            case 19:
                H(Yt);
                break;
            case 10:
                Xe(e.type);
                break;
            case 22:
            case 23:
                we(e), $i(), t !== null && H(Ha);
                break;
            case 24:
                Xe(qt)
        }
    }

    function cn(t, e) {
        try {
            var a = e.updateQueue,
                l = a !== null ? a.lastEffect : null;
            if (l !== null) {
                var n = l.next;
                a = n;
                do {
                    if ((a.tag & t) === t) {
                        l = void 0;
                        var u = a.create,
                            i = a.inst;
                        l = u(), i.destroy = l
                    }
                    a = a.next
                } while (a !== n)
            }
        } catch (s) {
            _t(e, e.return, s)
        }
    }

    function sa(t, e, a) {
        try {
            var l = e.updateQueue,
                n = l !== null ? l.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                l = u;
                do {
                    if ((l.tag & t) === t) {
                        var i = l.inst,
                            s = i.destroy;
                        if (s !== void 0) {
                            i.destroy = void 0, n = e;
                            var f = a,
                                g = s;
                            try {
                                g()
                            } catch (S) {
                                _t(n, f, S)
                            }
                        }
                    }
                    l = l.next
                } while (l !== u)
            }
        } catch (S) {
            _t(e, e.return, S)
        }
    }

    function tr(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var a = t.stateNode;
            try {
                Lf(e, a)
            } catch (l) {
                _t(t, t.return, l)
            }
        }
    }

    function er(t, e, a) {
        a.props = Ba(t.type, t.memoizedProps), a.state = t.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (l) {
            _t(t, e, l)
        }
    }

    function sn(t, e) {
        try {
            var a = t.ref;
            if (a !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = t.stateNode;
                        break;
                    case 30:
                        l = t.stateNode;
                        break;
                    default:
                        l = t.stateNode
                }
                typeof a == "function" ? t.refCleanup = a(l) : a.current = l
            }
        } catch (n) {
            _t(t, e, n)
        }
    }

    function De(t, e) {
        var a = t.ref,
            l = t.refCleanup;
        if (a !== null)
            if (typeof l == "function") try {
                l()
            } catch (n) {
                _t(t, e, n)
            } finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
            } else if (typeof a == "function") try {
                a(null)
            } catch (n) {
                _t(t, e, n)
            } else a.current = null
    }

    function ar(t) {
        var e = t.type,
            a = t.memoizedProps,
            l = t.stateNode;
        try {
            t: switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && l.focus();
                    break t;
                case "img":
                    a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet)
            }
        }
        catch (n) {
            _t(t, t.return, n)
        }
    }

    function Sc(t, e, a) {
        try {
            var l = t.stateNode;
            wm(l, t.type, a, e), l[te] = e
        } catch (n) {
            _t(t, t.return, n)
        }
    }

    function lr(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && va(t.type) || t.tag === 4
    }

    function Ac(t) {
        t: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || lr(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && va(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function Ec(t, e, a) {
        var l = t.tag;
        if (l === 5 || l === 6) t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = Hu));
        else if (l !== 4 && (l === 27 && va(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
            for (Ec(t, e, a), t = t.sibling; t !== null;) Ec(t, e, a), t = t.sibling
    }

    function Su(t, e, a) {
        var l = t.tag;
        if (l === 5 || l === 6) t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
        else if (l !== 4 && (l === 27 && va(t.type) && (a = t.stateNode), t = t.child, t !== null))
            for (Su(t, e, a), t = t.sibling; t !== null;) Su(t, e, a), t = t.sibling
    }

    function nr(t) {
        var e = t.stateNode,
            a = t.memoizedProps;
        try {
            for (var l = t.type, n = e.attributes; n.length;) e.removeAttributeNode(n[0]);
            Vt(e, l, a), e[Jt] = t, e[te] = a
        } catch (u) {
            _t(t, t.return, u)
        }
    }
    var Ke = !1,
        Rt = !1,
        Nc = !1,
        ur = typeof WeakSet == "function" ? WeakSet : Set,
        Xt = null;

    function Sm(t, e) {
        if (t = t.containerInfo, Wc = Xu, t = hf(t), Ai(t)) {
            if ("selectionStart" in t) var a = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else t: {
                a = (a = t.ownerDocument) && a.defaultView || window;
                var l = a.getSelection && a.getSelection();
                if (l && l.rangeCount !== 0) {
                    a = l.anchorNode;
                    var n = l.anchorOffset,
                        u = l.focusNode;
                    l = l.focusOffset;
                    try {
                        a.nodeType, u.nodeType
                    } catch {
                        a = null;
                        break t
                    }
                    var i = 0,
                        s = -1,
                        f = -1,
                        g = 0,
                        S = 0,
                        N = t,
                        b = null;
                    e: for (;;) {
                        for (var x; N !== a || n !== 0 && N.nodeType !== 3 || (s = i + n), N !== u || l !== 0 && N.nodeType !== 3 || (f = i + l), N.nodeType === 3 && (i += N.nodeValue.length), (x = N.firstChild) !== null;) b = N, N = x;
                        for (;;) {
                            if (N === t) break e;
                            if (b === a && ++g === n && (s = i), b === u && ++S === l && (f = i), (x = N.nextSibling) !== null) break;
                            N = b, b = N.parentNode
                        }
                        N = x
                    }
                    a = s === -1 || f === -1 ? null : {
                        start: s,
                        end: f
                    }
                } else a = null
            }
            a = a || {
                start: 0,
                end: 0
            }
        } else a = null;
        for (Fc = {
                focusedElem: t,
                selectionRange: a
            }, Xu = !1, Xt = e; Xt !== null;)
            if (e = Xt, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null) t.return = e, Xt = t;
            else
                for (; Xt !== null;) {
                    switch (e = Xt, u = e.alternate, t = e.flags, e.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && u !== null) {
                                t = void 0, a = e, n = u.memoizedProps, u = u.memoizedState, l = a.stateNode;
                                try {
                                    var K = Ba(a.type, n, a.elementType === a.type);
                                    t = l.getSnapshotBeforeUpdate(K, u), l.__reactInternalSnapshotBeforeUpdate = t
                                } catch (Z) {
                                    _t(a, a.return, Z)
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (t = e.stateNode.containerInfo, a = t.nodeType, a === 9) ts(t);
                                else if (a === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        ts(t);
                                        break;
                                    default:
                                        t.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(o(163))
                    }
                    if (t = e.sibling, t !== null) {
                        t.return = e.return, Xt = t;
                        break
                    }
                    Xt = e.return
                }
    }

    function ir(t, e, a) {
        var l = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                fa(t, a), l & 4 && cn(5, a);
                break;
            case 1:
                if (fa(t, a), l & 4)
                    if (t = a.stateNode, e === null) try {
                        t.componentDidMount()
                    } catch (i) {
                        _t(a, a.return, i)
                    } else {
                        var n = Ba(a.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate)
                        } catch (i) {
                            _t(a, a.return, i)
                        }
                    }
                l & 64 && tr(a), l & 512 && sn(a, a.return);
                break;
            case 3:
                if (fa(t, a), l & 64 && (t = a.updateQueue, t !== null)) {
                    if (e = null, a.child !== null) switch (a.child.tag) {
                        case 27:
                        case 5:
                            e = a.child.stateNode;
                            break;
                        case 1:
                            e = a.child.stateNode
                    }
                    try {
                        Lf(t, e)
                    } catch (i) {
                        _t(a, a.return, i)
                    }
                }
                break;
            case 27:
                e === null && l & 4 && nr(a);
            case 26:
            case 5:
                fa(t, a), e === null && l & 4 && ar(a), l & 512 && sn(a, a.return);
                break;
            case 12:
                fa(t, a);
                break;
            case 13:
                fa(t, a), l & 4 && fr(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = Rm.bind(null, a), Wm(t, a))));
                break;
            case 22:
                if (l = a.memoizedState !== null || Ke, !l) {
                    e = e !== null && e.memoizedState !== null || Rt, n = Ke;
                    var u = Rt;
                    Ke = l, (Rt = e) && !u ? oa(t, a, (a.subtreeFlags & 8772) !== 0) : fa(t, a), Ke = n, Rt = u
                }
                break;
            case 30:
                break;
            default:
                fa(t, a)
        }
    }

    function cr(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null, cr(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ui(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }
    var Nt = null,
        le = !1;

    function ke(t, e, a) {
        for (a = a.child; a !== null;) sr(t, e, a), a = a.sibling
    }

    function sr(t, e, a) {
        if (ie && typeof ie.onCommitFiberUnmount == "function") try {
            ie.onCommitFiberUnmount(Ml, a)
        } catch {}
        switch (a.tag) {
            case 26:
                Rt || De(a, e), ke(t, e, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                break;
            case 27:
                Rt || De(a, e);
                var l = Nt,
                    n = le;
                va(a.type) && (Nt = a.stateNode, le = !1), ke(t, e, a), gn(a.stateNode), Nt = l, le = n;
                break;
            case 5:
                Rt || De(a, e);
            case 6:
                if (l = Nt, n = le, Nt = null, ke(t, e, a), Nt = l, le = n, Nt !== null)
                    if (le) try {
                        (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(a.stateNode)
                    } catch (u) {
                        _t(a, e, u)
                    } else try {
                        Nt.removeChild(a.stateNode)
                    } catch (u) {
                        _t(a, e, u)
                    }
                break;
            case 18:
                Nt !== null && (le ? (t = Nt, Wr(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode), En(t)) : Wr(Nt, a.stateNode));
                break;
            case 4:
                l = Nt, n = le, Nt = a.stateNode.containerInfo, le = !0, ke(t, e, a), Nt = l, le = n;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Rt || sa(2, a, e), Rt || sa(4, a, e), ke(t, e, a);
                break;
            case 1:
                Rt || (De(a, e), l = a.stateNode, typeof l.componentWillUnmount == "function" && er(a, e, l)), ke(t, e, a);
                break;
            case 21:
                ke(t, e, a);
                break;
            case 22:
                Rt = (l = Rt) || a.memoizedState !== null, ke(t, e, a), Rt = l;
                break;
            default:
                ke(t, e, a)
        }
    }

    function fr(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            En(t)
        } catch (a) {
            _t(e, e.return, a)
        }
    }

    function Am(t) {
        switch (t.tag) {
            case 13:
            case 19:
                var e = t.stateNode;
                return e === null && (e = t.stateNode = new ur), e;
            case 22:
                return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new ur), e;
            default:
                throw Error(o(435, t.tag))
        }
    }

    function zc(t, e) {
        var a = Am(t);
        e.forEach(function(l) {
            var n = Um.bind(null, t, l);
            a.has(l) || (a.add(l), l.then(n, n))
        })
    }

    function oe(t, e) {
        var a = e.deletions;
        if (a !== null)
            for (var l = 0; l < a.length; l++) {
                var n = a[l],
                    u = t,
                    i = e,
                    s = i;
                t: for (; s !== null;) {
                    switch (s.tag) {
                        case 27:
                            if (va(s.type)) {
                                Nt = s.stateNode, le = !1;
                                break t
                            }
                            break;
                        case 5:
                            Nt = s.stateNode, le = !1;
                            break t;
                        case 3:
                        case 4:
                            Nt = s.stateNode.containerInfo, le = !0;
                            break t
                    }
                    s = s.return
                }
                if (Nt === null) throw Error(o(160));
                sr(u, i, n), Nt = null, le = !1, u = n.alternate, u !== null && (u.return = null), n.return = null
            }
        if (e.subtreeFlags & 13878)
            for (e = e.child; e !== null;) or(e, t), e = e.sibling
    }
    var Ne = null;

    function or(t, e) {
        var a = t.alternate,
            l = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                oe(e, t), re(t), l & 4 && (sa(3, t, t.return), cn(3, t), sa(5, t, t.return));
                break;
            case 1:
                oe(e, t), re(t), l & 512 && (Rt || a === null || De(a, a.return)), l & 64 && Ke && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
                break;
            case 26:
                var n = Ne;
                if (oe(e, t), re(t), l & 512 && (Rt || a === null || De(a, a.return)), l & 4) {
                    var u = a !== null ? a.memoizedState : null;
                    if (l = t.memoizedState, a === null)
                        if (l === null)
                            if (t.stateNode === null) {
                                t: {
                                    l = t.type,
                                    a = t.memoizedProps,
                                    n = n.ownerDocument || n;e: switch (l) {
                                        case "title":
                                            u = n.getElementsByTagName("title")[0], (!u || u[Dl] || u[Jt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(l), n.head.insertBefore(u, n.querySelector("head > title"))), Vt(u, l, a), u[Jt] = t, Gt(u), l = u;
                                            break t;
                                        case "link":
                                            var i = nd("link", "href", n).get(l + (a.href || ""));
                                            if (i) {
                                                for (var s = 0; s < i.length; s++)
                                                    if (u = i[s], u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                        i.splice(s, 1);
                                                        break e
                                                    }
                                            }
                                            u = n.createElement(l), Vt(u, l, a), n.head.appendChild(u);
                                            break;
                                        case "meta":
                                            if (i = nd("meta", "content", n).get(l + (a.content || ""))) {
                                                for (s = 0; s < i.length; s++)
                                                    if (u = i[s], u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                        i.splice(s, 1);
                                                        break e
                                                    }
                                            }
                                            u = n.createElement(l), Vt(u, l, a), n.head.appendChild(u);
                                            break;
                                        default:
                                            throw Error(o(468, l))
                                    }
                                    u[Jt] = t,
                                    Gt(u),
                                    l = u
                                }
                                t.stateNode = l
                            }
                    else ud(n, t.type, t.stateNode);
                    else t.stateNode = ld(n, l, t.memoizedProps);
                    else u !== l ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, l === null ? ud(n, t.type, t.stateNode) : ld(n, l, t.memoizedProps)) : l === null && t.stateNode !== null && Sc(t, t.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                oe(e, t), re(t), l & 512 && (Rt || a === null || De(a, a.return)), a !== null && l & 4 && Sc(t, t.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if (oe(e, t), re(t), l & 512 && (Rt || a === null || De(a, a.return)), t.flags & 32) {
                    n = t.stateNode;
                    try {
                        Wa(n, "")
                    } catch (x) {
                        _t(t, t.return, x)
                    }
                }
                l & 4 && t.stateNode != null && (n = t.memoizedProps, Sc(t, n, a !== null ? a.memoizedProps : n)), l & 1024 && (Nc = !0);
                break;
            case 6:
                if (oe(e, t), re(t), l & 4) {
                    if (t.stateNode === null) throw Error(o(162));
                    l = t.memoizedProps, a = t.stateNode;
                    try {
                        a.nodeValue = l
                    } catch (x) {
                        _t(t, t.return, x)
                    }
                }
                break;
            case 3:
                if (Yu = null, n = Ne, Ne = Bu(e.containerInfo), oe(e, t), Ne = n, re(t), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
                    En(e.containerInfo)
                } catch (x) {
                    _t(t, t.return, x)
                }
                Nc && (Nc = !1, rr(t));
                break;
            case 4:
                l = Ne, Ne = Bu(t.stateNode.containerInfo), oe(e, t), re(t), Ne = l;
                break;
            case 12:
                oe(e, t), re(t);
                break;
            case 13:
                oe(e, t), re(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Uc = Me()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, zc(t, l)));
                break;
            case 22:
                n = t.memoizedState !== null;
                var f = a !== null && a.memoizedState !== null,
                    g = Ke,
                    S = Rt;
                if (Ke = g || n, Rt = S || f, oe(e, t), Rt = S, Ke = g, re(t), l & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (a === null || f || Ke || Rt || qa(t)), a = null, e = t;;) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (a === null) {
                            f = a = e;
                            try {
                                if (u = f.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    s = f.stateNode;
                                    var N = f.memoizedProps.style,
                                        b = N != null && N.hasOwnProperty("display") ? N.display : null;
                                    s.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim()
                                }
                            } catch (x) {
                                _t(f, f.return, x)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (a === null) {
                            f = e;
                            try {
                                f.stateNode.nodeValue = n ? "" : f.memoizedProps
                            } catch (x) {
                                _t(f, f.return, x)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break t;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t) break t;
                        a === e && (a = null), e = e.return
                    }
                    a === e && (a = null), e.sibling.return = e.return, e = e.sibling
                }
                l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, zc(t, a))));
                break;
            case 19:
                oe(e, t), re(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, zc(t, l)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                oe(e, t), re(t)
        }
    }

    function re(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var a, l = t.return; l !== null;) {
                    if (lr(l)) {
                        a = l;
                        break
                    }
                    l = l.return
                }
                if (a == null) throw Error(o(160));
                switch (a.tag) {
                    case 27:
                        var n = a.stateNode,
                            u = Ac(t);
                        Su(t, u, n);
                        break;
                    case 5:
                        var i = a.stateNode;
                        a.flags & 32 && (Wa(i, ""), a.flags &= -33);
                        var s = Ac(t);
                        Su(t, s, i);
                        break;
                    case 3:
                    case 4:
                        var f = a.stateNode.containerInfo,
                            g = Ac(t);
                        Ec(t, g, f);
                        break;
                    default:
                        throw Error(o(161))
                }
            } catch (S) {
                _t(t, t.return, S)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }

    function rr(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var e = t;
                rr(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
            }
    }

    function fa(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null;) ir(t, e.alternate, e), e = e.sibling
    }

    function qa(t) {
        for (t = t.child; t !== null;) {
            var e = t;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    sa(4, e, e.return), qa(e);
                    break;
                case 1:
                    De(e, e.return);
                    var a = e.stateNode;
                    typeof a.componentWillUnmount == "function" && er(e, e.return, a), qa(e);
                    break;
                case 27:
                    gn(e.stateNode);
                case 26:
                case 5:
                    De(e, e.return), qa(e);
                    break;
                case 22:
                    e.memoizedState === null && qa(e);
                    break;
                case 30:
                    qa(e);
                    break;
                default:
                    qa(e)
            }
            t = t.sibling
        }
    }

    function oa(t, e, a) {
        for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
            var l = e.alternate,
                n = t,
                u = e,
                i = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    oa(n, u, a), cn(4, u);
                    break;
                case 1:
                    if (oa(n, u, a), l = u, n = l.stateNode, typeof n.componentDidMount == "function") try {
                        n.componentDidMount()
                    } catch (g) {
                        _t(l, l.return, g)
                    }
                    if (l = u, n = l.updateQueue, n !== null) {
                        var s = l.stateNode;
                        try {
                            var f = n.shared.hiddenCallbacks;
                            if (f !== null)
                                for (n.shared.hiddenCallbacks = null, n = 0; n < f.length; n++) Gf(f[n], s)
                        } catch (g) {
                            _t(l, l.return, g)
                        }
                    }
                    a && i & 64 && tr(u), sn(u, u.return);
                    break;
                case 27:
                    nr(u);
                case 26:
                case 5:
                    oa(n, u, a), a && l === null && i & 4 && ar(u), sn(u, u.return);
                    break;
                case 12:
                    oa(n, u, a);
                    break;
                case 13:
                    oa(n, u, a), a && i & 4 && fr(n, u);
                    break;
                case 22:
                    u.memoizedState === null && oa(n, u, a), sn(u, u.return);
                    break;
                case 30:
                    break;
                default:
                    oa(n, u, a)
            }
            e = e.sibling
        }
    }

    function Mc(t, e) {
        var a = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Kl(a))
    }

    function Oc(t, e) {
        t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Kl(t))
    }

    function Re(t, e, a, l) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) dr(t, e, a, l), e = e.sibling
    }

    function dr(t, e, a, l) {
        var n = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Re(t, e, a, l), n & 2048 && cn(9, e);
                break;
            case 1:
                Re(t, e, a, l);
                break;
            case 3:
                Re(t, e, a, l), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Kl(t)));
                break;
            case 12:
                if (n & 2048) {
                    Re(t, e, a, l), t = e.stateNode;
                    try {
                        var u = e.memoizedProps,
                            i = u.id,
                            s = u.onPostCommit;
                        typeof s == "function" && s(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (f) {
                        _t(e, e.return, f)
                    }
                } else Re(t, e, a, l);
                break;
            case 13:
                Re(t, e, a, l);
                break;
            case 23:
                break;
            case 22:
                u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Re(t, e, a, l) : fn(t, e) : u._visibility & 2 ? Re(t, e, a, l) : (u._visibility |= 2, hl(t, e, a, l, (e.subtreeFlags & 10256) !== 0)), n & 2048 && Mc(i, e);
                break;
            case 24:
                Re(t, e, a, l), n & 2048 && Oc(e.alternate, e);
                break;
            default:
                Re(t, e, a, l)
        }
    }

    function hl(t, e, a, l, n) {
        for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null;) {
            var u = t,
                i = e,
                s = a,
                f = l,
                g = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    hl(u, i, s, f, n), cn(8, i);
                    break;
                case 23:
                    break;
                case 22:
                    var S = i.stateNode;
                    i.memoizedState !== null ? S._visibility & 2 ? hl(u, i, s, f, n) : fn(u, i) : (S._visibility |= 2, hl(u, i, s, f, n)), n && g & 2048 && Mc(i.alternate, i);
                    break;
                case 24:
                    hl(u, i, s, f, n), n && g & 2048 && Oc(i.alternate, i);
                    break;
                default:
                    hl(u, i, s, f, n)
            }
            e = e.sibling
        }
    }

    function fn(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) {
                var a = t,
                    l = e,
                    n = l.flags;
                switch (l.tag) {
                    case 22:
                        fn(a, l), n & 2048 && Mc(l.alternate, l);
                        break;
                    case 24:
                        fn(a, l), n & 2048 && Oc(l.alternate, l);
                        break;
                    default:
                        fn(a, l)
                }
                e = e.sibling
            }
    }
    var on = 8192;

    function vl(t) {
        if (t.subtreeFlags & on)
            for (t = t.child; t !== null;) mr(t), t = t.sibling
    }

    function mr(t) {
        switch (t.tag) {
            case 26:
                vl(t), t.flags & on && t.memoizedState !== null && fy(Ne, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                vl(t);
                break;
            case 3:
            case 4:
                var e = Ne;
                Ne = Bu(t.stateNode.containerInfo), vl(t), Ne = e;
                break;
            case 22:
                t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = on, on = 16777216, vl(t), on = e) : vl(t));
                break;
            default:
                vl(t)
        }
    }

    function yr(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child, t !== null)) {
            e.child = null;
            do e = t.sibling, t.sibling = null, t = e; while (t !== null)
        }
    }

    function rn(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var l = e[a];
                    Xt = l, vr(l, t)
                }
            yr(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) hr(t), t = t.sibling
    }

    function hr(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                rn(t), t.flags & 2048 && sa(9, t, t.return);
                break;
            case 3:
                rn(t);
                break;
            case 12:
                rn(t);
                break;
            case 22:
                var e = t.stateNode;
                t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Au(t)) : rn(t);
                break;
            default:
                rn(t)
        }
    }

    function Au(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var l = e[a];
                    Xt = l, vr(l, t)
                }
            yr(t)
        }
        for (t = t.child; t !== null;) {
            switch (e = t, e.tag) {
                case 0:
                case 11:
                case 15:
                    sa(8, e, e.return), Au(e);
                    break;
                case 22:
                    a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, Au(e));
                    break;
                default:
                    Au(e)
            }
            t = t.sibling
        }
    }

    function vr(t, e) {
        for (; Xt !== null;) {
            var a = Xt;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    sa(8, a, e);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var l = a.memoizedState.cachePool.pool;
                        l != null && l.refCount++
                    }
                    break;
                case 24:
                    Kl(a.memoizedState.cache)
            }
            if (l = a.child, l !== null) l.return = a, Xt = l;
            else t: for (a = t; Xt !== null;) {
                l = Xt;
                var n = l.sibling,
                    u = l.return;
                if (cr(l), l === a) {
                    Xt = null;
                    break t
                }
                if (n !== null) {
                    n.return = u, Xt = n;
                    break t
                }
                Xt = u
            }
        }
    }
    var Em = {
            getCacheForType: function(t) {
                var e = $t(qt),
                    a = e.data.get(t);
                return a === void 0 && (a = t(), e.data.set(t, a)), a
            }
        },
        Nm = typeof WeakMap == "function" ? WeakMap : Map,
        mt = 0,
        Tt = null,
        nt = null,
        it = 0,
        yt = 0,
        de = null,
        ra = !1,
        gl = !1,
        jc = !1,
        Je = 0,
        jt = 0,
        da = 0,
        Ya = 0,
        Dc = 0,
        Se = 0,
        pl = 0,
        dn = null,
        ne = null,
        Rc = !1,
        Uc = 0,
        Eu = 1 / 0,
        Nu = null,
        ma = null,
        Zt = 0,
        ya = null,
        bl = null,
        xl = 0,
        Hc = 0,
        Cc = null,
        gr = null,
        mn = 0,
        Bc = null;

    function me() {
        if ((mt & 2) !== 0 && it !== 0) return it & -it;
        if (T.T !== null) {
            var t = cl;
            return t !== 0 ? t : wc()
        }
        return Ds()
    }

    function pr() {
        Se === 0 && (Se = (it & 536870912) === 0 || rt ? zs() : 536870912);
        var t = Te.current;
        return t !== null && (t.flags |= 32), Se
    }

    function ye(t, e, a) {
        (t === Tt && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null) && (_l(t, 0), ha(t, it, Se, !1)), jl(t, a), ((mt & 2) === 0 || t !== Tt) && (t === Tt && ((mt & 2) === 0 && (Ya |= a), jt === 4 && ha(t, it, Se, !1)), Ue(t))
    }

    function br(t, e, a) {
        if ((mt & 6) !== 0) throw Error(o(327));
        var l = !a && (e & 124) === 0 && (e & t.expiredLanes) === 0 || Ol(t, e),
            n = l ? Om(t, e) : Gc(t, e, !0),
            u = l;
        do {
            if (n === 0) {
                gl && !l && ha(t, e, 0, !1);
                break
            } else {
                if (a = t.current.alternate, u && !zm(a)) {
                    n = Gc(t, e, !1), u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0;
                    else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        e = i;
                        t: {
                            var s = t;n = dn;
                            var f = s.current.memoizedState.isDehydrated;
                            if (f && (_l(s, i).flags |= 256), i = Gc(s, i, !1), i !== 2) {
                                if (jc && !f) {
                                    s.errorRecoveryDisabledLanes |= u, Ya |= u, n = 4;
                                    break t
                                }
                                u = ne, ne = n, u !== null && (ne === null ? ne = u : ne.push.apply(ne, u))
                            }
                            n = i
                        }
                        if (u = !1, n !== 2) continue
                    }
                }
                if (n === 1) {
                    _l(t, 0), ha(t, e, 0, !0);
                    break
                }
                t: {
                    switch (l = t, u = n, u) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 4:
                            if ((e & 4194048) !== e) break;
                        case 6:
                            ha(l, e, Se, !ra);
                            break t;
                        case 2:
                            ne = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(o(329))
                    }
                    if ((e & 62914560) === e && (n = Uc + 300 - Me(), 10 < n)) {
                        if (ha(l, e, Se, !ra), qn(l, 0, !0) !== 0) break t;
                        l.timeoutHandle = Jr(xr.bind(null, l, a, ne, Nu, Rc, e, Se, Ya, pl, ra, u, 2, -0, 0), n);
                        break t
                    }
                    xr(l, a, ne, Nu, Rc, e, Se, Ya, pl, ra, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Ue(t)
    }

    function xr(t, e, a, l, n, u, i, s, f, g, S, N, b, x) {
        if (t.timeoutHandle = -1, N = e.subtreeFlags, (N & 8192 || (N & 16785408) === 16785408) && (xn = {
                stylesheets: null,
                count: 0,
                unsuspend: sy
            }, mr(e), N = oy(), N !== null)) {
            t.cancelPendingCommit = N(zr.bind(null, t, e, u, a, l, n, i, s, f, S, 1, b, x)), ha(t, u, i, !g);
            return
        }
        zr(t, e, u, a, l, n, i, s, f)
    }

    function zm(t) {
        for (var e = t;;) {
            var a = e.tag;
            if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
                for (var l = 0; l < a.length; l++) {
                    var n = a[l],
                        u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!se(u(), n)) return !1
                    } catch {
                        return !1
                    }
                }
            if (a = e.child, e.subtreeFlags & 16384 && a !== null) a.return = e, e = a;
            else {
                if (e === t) break;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return !0
    }

    function ha(t, e, a, l) {
        e &= ~Dc, e &= ~Ya, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
        for (var n = e; 0 < n;) {
            var u = 31 - ce(n),
                i = 1 << u;
            l[u] = -1, n &= ~i
        }
        a !== 0 && Os(t, a, e)
    }

    function zu() {
        return (mt & 6) === 0 ? (yn(0), !1) : !0
    }

    function qc() {
        if (nt !== null) {
            if (yt === 0) var t = nt.return;
            else t = nt, Le = Ra = null, tc(t), ml = null, ln = 0, t = nt;
            for (; t !== null;) Po(t.alternate, t), t = t.return;
            nt = null
        }
    }

    function _l(t, e) {
        var a = t.timeoutHandle;
        a !== -1 && (t.timeoutHandle = -1, Vm(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), qc(), Tt = t, nt = a = qe(t.current, null), it = e, yt = 0, de = null, ra = !1, gl = Ol(t, e), jc = !1, pl = Se = Dc = Ya = da = jt = 0, ne = dn = null, Rc = !1, (e & 8) !== 0 && (e |= e & 32);
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements, l &= e; 0 < l;) {
                var n = 31 - ce(l),
                    u = 1 << n;
                e |= t[n], l &= ~u
            }
        return Je = e, $n(), a
    }

    function _r(t, e) {
        tt = null, T.H = yu, e === Jl || e === nu ? (e = qf(), yt = 3) : e === Hf ? (e = qf(), yt = 4) : yt = e === Go ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, de = e, nt === null && (jt = 1, bu(t, pe(e, t.current)))
    }

    function Tr() {
        var t = T.H;
        return T.H = yu, t === null ? yu : t
    }

    function Sr() {
        var t = T.A;
        return T.A = Em, t
    }

    function Yc() {
        jt = 4, ra || (it & 4194048) !== it && Te.current !== null || (gl = !0), (da & 134217727) === 0 && (Ya & 134217727) === 0 || Tt === null || ha(Tt, it, Se, !1)
    }

    function Gc(t, e, a) {
        var l = mt;
        mt |= 2;
        var n = Tr(),
            u = Sr();
        (Tt !== t || it !== e) && (Nu = null, _l(t, e)), e = !1;
        var i = jt;
        t: do try {
                if (yt !== 0 && nt !== null) {
                    var s = nt,
                        f = de;
                    switch (yt) {
                        case 8:
                            qc(), i = 6;
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Te.current === null && (e = !0);
                            var g = yt;
                            if (yt = 0, de = null, Tl(t, s, f, g), a && gl) {
                                i = 0;
                                break t
                            }
                            break;
                        default:
                            g = yt, yt = 0, de = null, Tl(t, s, f, g)
                    }
                }
                Mm(), i = jt;
                break
            } catch (S) {
                _r(t, S)
            }
            while (!0);
            return e && t.shellSuspendCounter++, Le = Ra = null, mt = l, T.H = n, T.A = u, nt === null && (Tt = null, it = 0, $n()), i
    }

    function Mm() {
        for (; nt !== null;) Ar(nt)
    }

    function Om(t, e) {
        var a = mt;
        mt |= 2;
        var l = Tr(),
            n = Sr();
        Tt !== t || it !== e ? (Nu = null, Eu = Me() + 500, _l(t, e)) : gl = Ol(t, e);
        t: do try {
                if (yt !== 0 && nt !== null) {
                    e = nt;
                    var u = de;
                    e: switch (yt) {
                        case 1:
                            yt = 0, de = null, Tl(t, e, u, 1);
                            break;
                        case 2:
                        case 9:
                            if (Cf(u)) {
                                yt = 0, de = null, Er(e);
                                break
                            }
                            e = function() {
                                yt !== 2 && yt !== 9 || Tt !== t || (yt = 7), Ue(t)
                            }, u.then(e, e);
                            break t;
                        case 3:
                            yt = 7;
                            break t;
                        case 4:
                            yt = 5;
                            break t;
                        case 7:
                            Cf(u) ? (yt = 0, de = null, Er(e)) : (yt = 0, de = null, Tl(t, e, u, 7));
                            break;
                        case 5:
                            var i = null;
                            switch (nt.tag) {
                                case 26:
                                    i = nt.memoizedState;
                                case 5:
                                case 27:
                                    var s = nt;
                                    if (!i || id(i)) {
                                        yt = 0, de = null;
                                        var f = s.sibling;
                                        if (f !== null) nt = f;
                                        else {
                                            var g = s.return;
                                            g !== null ? (nt = g, Mu(g)) : nt = null
                                        }
                                        break e
                                    }
                            }
                            yt = 0, de = null, Tl(t, e, u, 5);
                            break;
                        case 6:
                            yt = 0, de = null, Tl(t, e, u, 6);
                            break;
                        case 8:
                            qc(), jt = 6;
                            break t;
                        default:
                            throw Error(o(462))
                    }
                }
                jm();
                break
            } catch (S) {
                _r(t, S)
            }
            while (!0);
            return Le = Ra = null, T.H = l, T.A = n, mt = a, nt !== null ? 0 : (Tt = null, it = 0, $n(), jt)
    }

    function jm() {
        for (; nt !== null && !Id();) Ar(nt)
    }

    function Ar(t) {
        var e = Fo(t.alternate, t, Je);
        t.memoizedProps = t.pendingProps, e === null ? Mu(t) : nt = e
    }

    function Er(t) {
        var e = t,
            a = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = Vo(a, e, e.pendingProps, e.type, void 0, it);
                break;
            case 11:
                e = Vo(a, e, e.pendingProps, e.type.render, e.ref, it);
                break;
            case 5:
                tc(e);
            default:
                Po(a, e), e = nt = Ef(e, Je), e = Fo(a, e, Je)
        }
        t.memoizedProps = t.pendingProps, e === null ? Mu(t) : nt = e
    }

    function Tl(t, e, a, l) {
        Le = Ra = null, tc(e), ml = null, ln = 0;
        var n = e.return;
        try {
            if (bm(t, n, e, a, it)) {
                jt = 1, bu(t, pe(a, t.current)), nt = null;
                return
            }
        } catch (u) {
            if (n !== null) throw nt = n, u;
            jt = 1, bu(t, pe(a, t.current)), nt = null;
            return
        }
        e.flags & 32768 ? (rt || l === 1 ? t = !0 : gl || (it & 536870912) !== 0 ? t = !1 : (ra = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Te.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Nr(e, t)) : Mu(e)
    }

    function Mu(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                Nr(e, ra);
                return
            }
            t = e.return;
            var a = _m(e.alternate, e, Je);
            if (a !== null) {
                nt = a;
                return
            }
            if (e = e.sibling, e !== null) {
                nt = e;
                return
            }
            nt = e = t
        } while (e !== null);
        jt === 0 && (jt = 5)
    }

    function Nr(t, e) {
        do {
            var a = Tm(t.alternate, t);
            if (a !== null) {
                a.flags &= 32767, nt = a;
                return
            }
            if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
                nt = t;
                return
            }
            nt = t = a
        } while (t !== null);
        jt = 6, nt = null
    }

    function zr(t, e, a, l, n, u, i, s, f) {
        t.cancelPendingCommit = null;
        do Ou(); while (Zt !== 0);
        if ((mt & 6) !== 0) throw Error(o(327));
        if (e !== null) {
            if (e === t.current) throw Error(o(177));
            if (u = e.lanes | e.childLanes, u |= Oi, s0(t, a, u, i, s, f), t === Tt && (nt = Tt = null, it = 0), bl = e, ya = t, xl = a, Hc = u, Cc = n, gr = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Hm(Hn, function() {
                    return Rr(), null
                })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
                l = T.T, T.T = null, n = R.p, R.p = 2, i = mt, mt |= 4;
                try {
                    Sm(t, e, a)
                } finally {
                    mt = i, R.p = n, T.T = l
                }
            }
            Zt = 1, Mr(), Or(), jr()
        }
    }

    function Mr() {
        if (Zt === 1) {
            Zt = 0;
            var t = ya,
                e = bl,
                a = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || a) {
                a = T.T, T.T = null;
                var l = R.p;
                R.p = 2;
                var n = mt;
                mt |= 4;
                try {
                    or(e, t);
                    var u = Fc,
                        i = hf(t.containerInfo),
                        s = u.focusedElem,
                        f = u.selectionRange;
                    if (i !== s && s && s.ownerDocument && yf(s.ownerDocument.documentElement, s)) {
                        if (f !== null && Ai(s)) {
                            var g = f.start,
                                S = f.end;
                            if (S === void 0 && (S = g), "selectionStart" in s) s.selectionStart = g, s.selectionEnd = Math.min(S, s.value.length);
                            else {
                                var N = s.ownerDocument || document,
                                    b = N && N.defaultView || window;
                                if (b.getSelection) {
                                    var x = b.getSelection(),
                                        K = s.textContent.length,
                                        Z = Math.min(f.start, K),
                                        bt = f.end === void 0 ? Z : Math.min(f.end, K);
                                    !x.extend && Z > bt && (i = bt, bt = Z, Z = i);
                                    var h = mf(s, Z),
                                        y = mf(s, bt);
                                    if (h && y && (x.rangeCount !== 1 || x.anchorNode !== h.node || x.anchorOffset !== h.offset || x.focusNode !== y.node || x.focusOffset !== y.offset)) {
                                        var v = N.createRange();
                                        v.setStart(h.node, h.offset), x.removeAllRanges(), Z > bt ? (x.addRange(v), x.extend(y.node, y.offset)) : (v.setEnd(y.node, y.offset), x.addRange(v))
                                    }
                                }
                            }
                        }
                        for (N = [], x = s; x = x.parentNode;) x.nodeType === 1 && N.push({
                            element: x,
                            left: x.scrollLeft,
                            top: x.scrollTop
                        });
                        for (typeof s.focus == "function" && s.focus(), s = 0; s < N.length; s++) {
                            var E = N[s];
                            E.element.scrollLeft = E.left, E.element.scrollTop = E.top
                        }
                    }
                    Xu = !!Wc, Fc = Wc = null
                } finally {
                    mt = n, R.p = l, T.T = a
                }
            }
            t.current = e, Zt = 2
        }
    }

    function Or() {
        if (Zt === 2) {
            Zt = 0;
            var t = ya,
                e = bl,
                a = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || a) {
                a = T.T, T.T = null;
                var l = R.p;
                R.p = 2;
                var n = mt;
                mt |= 4;
                try {
                    ir(t, e.alternate, e)
                } finally {
                    mt = n, R.p = l, T.T = a
                }
            }
            Zt = 3
        }
    }

    function jr() {
        if (Zt === 4 || Zt === 3) {
            Zt = 0, Pd();
            var t = ya,
                e = bl,
                a = xl,
                l = gr;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Zt = 5 : (Zt = 0, bl = ya = null, Dr(t, t.pendingLanes));
            var n = t.pendingLanes;
            if (n === 0 && (ma = null), li(a), e = e.stateNode, ie && typeof ie.onCommitFiberRoot == "function") try {
                ie.onCommitFiberRoot(Ml, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
            if (l !== null) {
                e = T.T, n = R.p, R.p = 2, T.T = null;
                try {
                    for (var u = t.onRecoverableError, i = 0; i < l.length; i++) {
                        var s = l[i];
                        u(s.value, {
                            componentStack: s.stack
                        })
                    }
                } finally {
                    T.T = e, R.p = n
                }
            }(xl & 3) !== 0 && Ou(), Ue(t), n = t.pendingLanes, (a & 4194090) !== 0 && (n & 42) !== 0 ? t === Bc ? mn++ : (mn = 0, Bc = t) : mn = 0, yn(0)
        }
    }

    function Dr(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Kl(e)))
    }

    function Ou(t) {
        return Mr(), Or(), jr(), Rr()
    }

    function Rr() {
        if (Zt !== 5) return !1;
        var t = ya,
            e = Hc;
        Hc = 0;
        var a = li(xl),
            l = T.T,
            n = R.p;
        try {
            R.p = 32 > a ? 32 : a, T.T = null, a = Cc, Cc = null;
            var u = ya,
                i = xl;
            if (Zt = 0, bl = ya = null, xl = 0, (mt & 6) !== 0) throw Error(o(331));
            var s = mt;
            if (mt |= 4, hr(u.current), dr(u, u.current, i, a), mt = s, yn(0, !1), ie && typeof ie.onPostCommitFiberRoot == "function") try {
                ie.onPostCommitFiberRoot(Ml, u)
            } catch {}
            return !0
        } finally {
            R.p = n, T.T = l, Dr(t, e)
        }
    }

    function Ur(t, e, a) {
        e = pe(a, e), e = yc(t.stateNode, e, 2), t = na(t, e, 2), t !== null && (jl(t, 2), Ue(t))
    }

    function _t(t, e, a) {
        if (t.tag === 3) Ur(t, t, a);
        else
            for (; e !== null;) {
                if (e.tag === 3) {
                    Ur(e, t, a);
                    break
                } else if (e.tag === 1) {
                    var l = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ma === null || !ma.has(l))) {
                        t = pe(a, t), a = qo(2), l = na(e, a, 2), l !== null && (Yo(a, l, e, t), jl(l, 2), Ue(l));
                        break
                    }
                }
                e = e.return
            }
    }

    function Lc(t, e, a) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new Nm;
            var n = new Set;
            l.set(e, n)
        } else n = l.get(e), n === void 0 && (n = new Set, l.set(e, n));
        n.has(a) || (jc = !0, n.add(a), t = Dm.bind(null, t, e, a), e.then(t, t))
    }

    function Dm(t, e, a) {
        var l = t.pingCache;
        l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Tt === t && (it & a) === a && (jt === 4 || jt === 3 && (it & 62914560) === it && 300 > Me() - Uc ? (mt & 2) === 0 && _l(t, 0) : Dc |= a, pl === it && (pl = 0)), Ue(t)
    }

    function Hr(t, e) {
        e === 0 && (e = Ms()), t = ll(t, e), t !== null && (jl(t, e), Ue(t))
    }

    function Rm(t) {
        var e = t.memoizedState,
            a = 0;
        e !== null && (a = e.retryLane), Hr(t, a)
    }

    function Um(t, e) {
        var a = 0;
        switch (t.tag) {
            case 13:
                var l = t.stateNode,
                    n = t.memoizedState;
                n !== null && (a = n.retryLane);
                break;
            case 19:
                l = t.stateNode;
                break;
            case 22:
                l = t.stateNode._retryCache;
                break;
            default:
                throw Error(o(314))
        }
        l !== null && l.delete(e), Hr(t, a)
    }

    function Hm(t, e) {
        return Pu(t, e)
    }
    var ju = null,
        Sl = null,
        Xc = !1,
        Du = !1,
        Qc = !1,
        Ga = 0;

    function Ue(t) {
        t !== Sl && t.next === null && (Sl === null ? ju = Sl = t : Sl = Sl.next = t), Du = !0, Xc || (Xc = !0, Bm())
    }

    function yn(t, e) {
        if (!Qc && Du) {
            Qc = !0;
            do
                for (var a = !1, l = ju; l !== null;) {
                    if (t !== 0) {
                        var n = l.pendingLanes;
                        if (n === 0) var u = 0;
                        else {
                            var i = l.suspendedLanes,
                                s = l.pingedLanes;
                            u = (1 << 31 - ce(42 | t) + 1) - 1, u &= n & ~(i & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (a = !0, Yr(l, u))
                    } else u = it, u = qn(l, l === Tt ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (u & 3) === 0 || Ol(l, u) || (a = !0, Yr(l, u));
                    l = l.next
                }
            while (a);
            Qc = !1
        }
    }

    function Cm() {
        Cr()
    }

    function Cr() {
        Du = Xc = !1;
        var t = 0;
        Ga !== 0 && (Zm() && (t = Ga), Ga = 0);
        for (var e = Me(), a = null, l = ju; l !== null;) {
            var n = l.next,
                u = Br(l, e);
            u === 0 ? (l.next = null, a === null ? ju = n : a.next = n, n === null && (Sl = a)) : (a = l, (t !== 0 || (u & 3) !== 0) && (Du = !0)), l = n
        }
        yn(t)
    }

    function Br(t, e) {
        for (var a = t.suspendedLanes, l = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;) {
            var i = 31 - ce(u),
                s = 1 << i,
                f = n[i];
            f === -1 ? ((s & a) === 0 || (s & l) !== 0) && (n[i] = c0(s, e)) : f <= e && (t.expiredLanes |= s), u &= ~s
        }
        if (e = Tt, a = it, a = qn(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l = t.callbackNode, a === 0 || t === e && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && ti(l), t.callbackNode = null, t.callbackPriority = 0;
        if ((a & 3) === 0 || Ol(t, a)) {
            if (e = a & -a, e === t.callbackPriority) return e;
            switch (l !== null && ti(l), li(a)) {
                case 2:
                case 8:
                    a = Es;
                    break;
                case 32:
                    a = Hn;
                    break;
                case 268435456:
                    a = Ns;
                    break;
                default:
                    a = Hn
            }
            return l = qr.bind(null, t), a = Pu(a, l), t.callbackPriority = e, t.callbackNode = a, e
        }
        return l !== null && l !== null && ti(l), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function qr(t, e) {
        if (Zt !== 0 && Zt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
        var a = t.callbackNode;
        if (Ou() && t.callbackNode !== a) return null;
        var l = it;
        return l = qn(t, t === Tt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l === 0 ? null : (br(t, l, e), Br(t, Me()), t.callbackNode != null && t.callbackNode === a ? qr.bind(null, t) : null)
    }

    function Yr(t, e) {
        if (Ou()) return null;
        br(t, e, !0)
    }

    function Bm() {
        Km(function() {
            (mt & 6) !== 0 ? Pu(As, Cm) : Cr()
        })
    }

    function wc() {
        return Ga === 0 && (Ga = zs()), Ga
    }

    function Gr(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Qn("" + t)
    }

    function Lr(t, e) {
        var a = e.ownerDocument.createElement("input");
        return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t
    }

    function qm(t, e, a, l, n) {
        if (e === "submit" && a && a.stateNode === n) {
            var u = Gr((n[te] || null).action),
                i = l.submitter;
            i && (e = (e = i[te] || null) ? Gr(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
            var s = new Kn("action", "action", null, l, n);
            t.push({
                event: s,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Ga !== 0) {
                                var f = i ? Lr(n, i) : new FormData(n);
                                fc(a, {
                                    pending: !0,
                                    data: f,
                                    method: n.method,
                                    action: u
                                }, null, f)
                            }
                        } else typeof u == "function" && (s.preventDefault(), f = i ? Lr(n, i) : new FormData(n), fc(a, {
                            pending: !0,
                            data: f,
                            method: n.method,
                            action: u
                        }, u, f))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var Zc = 0; Zc < Mi.length; Zc++) {
        var Vc = Mi[Zc],
            Ym = Vc.toLowerCase(),
            Gm = Vc[0].toUpperCase() + Vc.slice(1);
        Ee(Ym, "on" + Gm)
    }
    Ee(pf, "onAnimationEnd"), Ee(bf, "onAnimationIteration"), Ee(xf, "onAnimationStart"), Ee("dblclick", "onDoubleClick"), Ee("focusin", "onFocus"), Ee("focusout", "onBlur"), Ee(am, "onTransitionRun"), Ee(lm, "onTransitionStart"), Ee(nm, "onTransitionCancel"), Ee(_f, "onTransitionEnd"), ka("onMouseEnter", ["mouseout", "mouseover"]), ka("onMouseLeave", ["mouseout", "mouseover"]), ka("onPointerEnter", ["pointerout", "pointerover"]), ka("onPointerLeave", ["pointerout", "pointerover"]), Sa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Sa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Sa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Sa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Sa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Sa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Lm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hn));

    function Xr(t, e) {
        e = (e & 4) !== 0;
        for (var a = 0; a < t.length; a++) {
            var l = t[a],
                n = l.event;
            l = l.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var i = l.length - 1; 0 <= i; i--) {
                        var s = l[i],
                            f = s.instance,
                            g = s.currentTarget;
                        if (s = s.listener, f !== u && n.isPropagationStopped()) break t;
                        u = s, n.currentTarget = g;
                        try {
                            u(n)
                        } catch (S) {
                            pu(S)
                        }
                        n.currentTarget = null, u = f
                    } else
                        for (i = 0; i < l.length; i++) {
                            if (s = l[i], f = s.instance, g = s.currentTarget, s = s.listener, f !== u && n.isPropagationStopped()) break t;
                            u = s, n.currentTarget = g;
                            try {
                                u(n)
                            } catch (S) {
                                pu(S)
                            }
                            n.currentTarget = null, u = f
                        }
            }
        }
    }

    function ut(t, e) {
        var a = e[ni];
        a === void 0 && (a = e[ni] = new Set);
        var l = t + "__bubble";
        a.has(l) || (Qr(e, t, 2, !1), a.add(l))
    }

    function Kc(t, e, a) {
        var l = 0;
        e && (l |= 4), Qr(a, t, l, e)
    }
    var Ru = "_reactListening" + Math.random().toString(36).slice(2);

    function kc(t) {
        if (!t[Ru]) {
            t[Ru] = !0, Us.forEach(function(a) {
                a !== "selectionchange" && (Lm.has(a) || Kc(a, !1, t), Kc(a, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Ru] || (e[Ru] = !0, Kc("selectionchange", !1, e))
        }
    }

    function Qr(t, e, a, l) {
        switch (dd(e)) {
            case 2:
                var n = my;
                break;
            case 8:
                n = yy;
                break;
            default:
                n = cs
        }
        a = n.bind(null, e, a, t), n = void 0, !hi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), l ? n !== void 0 ? t.addEventListener(e, a, {
            capture: !0,
            passive: n
        }) : t.addEventListener(e, a, !0) : n !== void 0 ? t.addEventListener(e, a, {
            passive: n
        }) : t.addEventListener(e, a, !1)
    }

    function Jc(t, e, a, l, n) {
        var u = l;
        if ((e & 1) === 0 && (e & 2) === 0 && l !== null) t: for (;;) {
            if (l === null) return;
            var i = l.tag;
            if (i === 3 || i === 4) {
                var s = l.stateNode.containerInfo;
                if (s === n) break;
                if (i === 4)
                    for (i = l.return; i !== null;) {
                        var f = i.tag;
                        if ((f === 3 || f === 4) && i.stateNode.containerInfo === n) return;
                        i = i.return
                    }
                for (; s !== null;) {
                    if (i = Za(s), i === null) return;
                    if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
                        l = u = i;
                        continue t
                    }
                    s = s.parentNode
                }
            }
            l = l.return
        }
        ks(function() {
            var g = u,
                S = mi(a),
                N = [];
            t: {
                var b = Tf.get(t);
                if (b !== void 0) {
                    var x = Kn,
                        K = t;
                    switch (t) {
                        case "keypress":
                            if (Zn(a) === 0) break t;
                        case "keydown":
                        case "keyup":
                            x = H0;
                            break;
                        case "focusin":
                            K = "focus", x = bi;
                            break;
                        case "focusout":
                            K = "blur", x = bi;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            x = bi;
                            break;
                        case "click":
                            if (a.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            x = Ws;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            x = T0;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            x = q0;
                            break;
                        case pf:
                        case bf:
                        case xf:
                            x = E0;
                            break;
                        case _f:
                            x = G0;
                            break;
                        case "scroll":
                        case "scrollend":
                            x = x0;
                            break;
                        case "wheel":
                            x = X0;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            x = z0;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            x = Is;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            x = w0
                    }
                    var Z = (e & 4) !== 0,
                        bt = !Z && (t === "scroll" || t === "scrollend"),
                        h = Z ? b !== null ? b + "Capture" : null : b;
                    Z = [];
                    for (var y = g, v; y !== null;) {
                        var E = y;
                        if (v = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || v === null || h === null || (E = Ul(y, h), E != null && Z.push(vn(y, E, v))), bt) break;
                        y = y.return
                    }
                    0 < Z.length && (b = new x(b, K, null, a, S), N.push({
                        event: b,
                        listeners: Z
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (b = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout", b && a !== di && (K = a.relatedTarget || a.fromElement) && (Za(K) || K[wa])) break t;
                    if ((x || b) && (b = S.window === S ? S : (b = S.ownerDocument) ? b.defaultView || b.parentWindow : window, x ? (K = a.relatedTarget || a.toElement, x = g, K = K ? Za(K) : null, K !== null && (bt = M(K), Z = K.tag, K !== bt || Z !== 5 && Z !== 27 && Z !== 6) && (K = null)) : (x = null, K = g), x !== K)) {
                        if (Z = Ws, E = "onMouseLeave", h = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (Z = Is, E = "onPointerLeave", h = "onPointerEnter", y = "pointer"), bt = x == null ? b : Rl(x), v = K == null ? b : Rl(K), b = new Z(E, y + "leave", x, a, S), b.target = bt, b.relatedTarget = v, E = null, Za(S) === g && (Z = new Z(h, y + "enter", K, a, S), Z.target = v, Z.relatedTarget = bt, E = Z), bt = E, x && K) e: {
                            for (Z = x, h = K, y = 0, v = Z; v; v = Al(v)) y++;
                            for (v = 0, E = h; E; E = Al(E)) v++;
                            for (; 0 < y - v;) Z = Al(Z),
                            y--;
                            for (; 0 < v - y;) h = Al(h),
                            v--;
                            for (; y--;) {
                                if (Z === h || h !== null && Z === h.alternate) break e;
                                Z = Al(Z), h = Al(h)
                            }
                            Z = null
                        }
                        else Z = null;
                        x !== null && wr(N, b, x, Z, !1), K !== null && bt !== null && wr(N, bt, K, Z, !0)
                    }
                }
                t: {
                    if (b = g ? Rl(g) : window, x = b.nodeName && b.nodeName.toLowerCase(), x === "select" || x === "input" && b.type === "file") var B = cf;
                    else if (nf(b))
                        if (sf) B = P0;
                        else {
                            B = F0;
                            var et = W0
                        }
                    else x = b.nodeName,
                    !x || x.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? g && ri(g.elementType) && (B = cf) : B = I0;
                    if (B && (B = B(t, g))) {
                        uf(N, B, a, S);
                        break t
                    }
                    et && et(t, b, g),
                    t === "focusout" && g && b.type === "number" && g.memoizedProps.value != null && oi(b, "number", b.value)
                }
                switch (et = g ? Rl(g) : window, t) {
                    case "focusin":
                        (nf(et) || et.contentEditable === "true") && (tl = et, Ei = g, Xl = null);
                        break;
                    case "focusout":
                        Xl = Ei = tl = null;
                        break;
                    case "mousedown":
                        Ni = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Ni = !1, vf(N, a, S);
                        break;
                    case "selectionchange":
                        if (em) break;
                    case "keydown":
                    case "keyup":
                        vf(N, a, S)
                }
                var G;
                if (_i) t: {
                    switch (t) {
                        case "compositionstart":
                            var V = "onCompositionStart";
                            break t;
                        case "compositionend":
                            V = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            V = "onCompositionUpdate";
                            break t
                    }
                    V = void 0
                }
                else Pa ? af(t, a) && (V = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (V = "onCompositionStart");V && (Ps && a.locale !== "ko" && (Pa || V !== "onCompositionStart" ? V === "onCompositionEnd" && Pa && (G = Js()) : (ta = S, vi = "value" in ta ? ta.value : ta.textContent, Pa = !0)), et = Uu(g, V), 0 < et.length && (V = new Fs(V, t, null, a, S), N.push({
                    event: V,
                    listeners: et
                }), G ? V.data = G : (G = lf(a), G !== null && (V.data = G)))),
                (G = V0 ? K0(t, a) : k0(t, a)) && (V = Uu(g, "onBeforeInput"), 0 < V.length && (et = new Fs("onBeforeInput", "beforeinput", null, a, S), N.push({
                    event: et,
                    listeners: V
                }), et.data = G)),
                qm(N, t, g, a, S)
            }
            Xr(N, e)
        })
    }

    function vn(t, e, a) {
        return {
            instance: t,
            listener: e,
            currentTarget: a
        }
    }

    function Uu(t, e) {
        for (var a = e + "Capture", l = []; t !== null;) {
            var n = t,
                u = n.stateNode;
            if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ul(t, a), n != null && l.unshift(vn(t, n, u)), n = Ul(t, e), n != null && l.push(vn(t, n, u))), t.tag === 3) return l;
            t = t.return
        }
        return []
    }

    function Al(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function wr(t, e, a, l, n) {
        for (var u = e._reactName, i = []; a !== null && a !== l;) {
            var s = a,
                f = s.alternate,
                g = s.stateNode;
            if (s = s.tag, f !== null && f === l) break;
            s !== 5 && s !== 26 && s !== 27 || g === null || (f = g, n ? (g = Ul(a, u), g != null && i.unshift(vn(a, g, f))) : n || (g = Ul(a, u), g != null && i.push(vn(a, g, f)))), a = a.return
        }
        i.length !== 0 && t.push({
            event: e,
            listeners: i
        })
    }
    var Xm = /\r\n?/g,
        Qm = /\u0000|\uFFFD/g;

    function Zr(t) {
        return (typeof t == "string" ? t : "" + t).replace(Xm, `
`).replace(Qm, "")
    }

    function Vr(t, e) {
        return e = Zr(e), Zr(t) === e
    }

    function Hu() {}

    function pt(t, e, a, l, n, u) {
        switch (a) {
            case "children":
                typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Wa(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Wa(t, "" + l);
                break;
            case "className":
                Gn(t, "class", l);
                break;
            case "tabIndex":
                Gn(t, "tabindex", l);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Gn(t, a, l);
                break;
            case "style":
                Vs(t, l, u);
                break;
            case "data":
                if (e !== "object") {
                    Gn(t, "data", l);
                    break
                }
            case "src":
            case "href":
                if (l === "" && (e !== "a" || a !== "href")) {
                    t.removeAttribute(a);
                    break
                }
                if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                    t.removeAttribute(a);
                    break
                }
                l = Qn("" + l), t.setAttribute(a, l);
                break;
            case "action":
            case "formAction":
                if (typeof l == "function") {
                    t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof u == "function" && (a === "formAction" ? (e !== "input" && pt(t, e, "name", n.name, n, null), pt(t, e, "formEncType", n.formEncType, n, null), pt(t, e, "formMethod", n.formMethod, n, null), pt(t, e, "formTarget", n.formTarget, n, null)) : (pt(t, e, "encType", n.encType, n, null), pt(t, e, "method", n.method, n, null), pt(t, e, "target", n.target, n, null)));
                if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                    t.removeAttribute(a);
                    break
                }
                l = Qn("" + l), t.setAttribute(a, l);
                break;
            case "onClick":
                l != null && (t.onclick = Hu);
                break;
            case "onScroll":
                l != null && ut("scroll", t);
                break;
            case "onScrollEnd":
                l != null && ut("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
                    if (a = l.__html, a != null) {
                        if (n.children != null) throw Error(o(60));
                        t.innerHTML = a
                    }
                }
                break;
            case "multiple":
                t.multiple = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "muted":
                t.muted = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                a = Qn("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
                break;
            case "capture":
            case "download":
                l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
                break;
            case "popover":
                ut("beforetoggle", t), ut("toggle", t), Yn(t, "popover", l);
                break;
            case "xlinkActuate":
                Ce(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
                break;
            case "xlinkArcrole":
                Ce(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
                break;
            case "xlinkRole":
                Ce(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
                break;
            case "xlinkShow":
                Ce(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
                break;
            case "xlinkTitle":
                Ce(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
                break;
            case "xlinkType":
                Ce(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
                break;
            case "xmlBase":
                Ce(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
                break;
            case "xmlLang":
                Ce(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
                break;
            case "xmlSpace":
                Ce(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
                break;
            case "is":
                Yn(t, "is", l);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = p0.get(a) || a, Yn(t, a, l))
        }
    }

    function $c(t, e, a, l, n, u) {
        switch (a) {
            case "style":
                Vs(t, l, u);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
                    if (a = l.__html, a != null) {
                        if (n.children != null) throw Error(o(60));
                        t.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof l == "string" ? Wa(t, l) : (typeof l == "number" || typeof l == "bigint") && Wa(t, "" + l);
                break;
            case "onScroll":
                l != null && ut("scroll", t);
                break;
            case "onScrollEnd":
                l != null && ut("scrollend", t);
                break;
            case "onClick":
                l != null && (t.onclick = Hu);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Hs.hasOwnProperty(a)) t: {
                    if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), e = a.slice(2, n ? a.length - 7 : void 0), u = t[te] || null, u = u != null ? u[a] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof l == "function")) {
                        typeof u != "function" && u !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, l, n);
                        break t
                    }
                    a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : Yn(t, a, l)
                }
        }
    }

    function Vt(t, e, a) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                ut("error", t), ut("load", t);
                var l = !1,
                    n = !1,
                    u;
                for (u in a)
                    if (a.hasOwnProperty(u)) {
                        var i = a[u];
                        if (i != null) switch (u) {
                            case "src":
                                l = !0;
                                break;
                            case "srcSet":
                                n = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, e));
                            default:
                                pt(t, e, u, i, a, null)
                        }
                    }
                n && pt(t, e, "srcSet", a.srcSet, a, null), l && pt(t, e, "src", a.src, a, null);
                return;
            case "input":
                ut("invalid", t);
                var s = u = i = n = null,
                    f = null,
                    g = null;
                for (l in a)
                    if (a.hasOwnProperty(l)) {
                        var S = a[l];
                        if (S != null) switch (l) {
                            case "name":
                                n = S;
                                break;
                            case "type":
                                i = S;
                                break;
                            case "checked":
                                f = S;
                                break;
                            case "defaultChecked":
                                g = S;
                                break;
                            case "value":
                                u = S;
                                break;
                            case "defaultValue":
                                s = S;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (S != null) throw Error(o(137, e));
                                break;
                            default:
                                pt(t, e, l, S, a, null)
                        }
                    }
                Xs(t, u, s, f, g, i, n, !1), Ln(t);
                return;
            case "select":
                ut("invalid", t), l = i = u = null;
                for (n in a)
                    if (a.hasOwnProperty(n) && (s = a[n], s != null)) switch (n) {
                        case "value":
                            u = s;
                            break;
                        case "defaultValue":
                            i = s;
                            break;
                        case "multiple":
                            l = s;
                        default:
                            pt(t, e, n, s, a, null)
                    }
                e = u, a = i, t.multiple = !!l, e != null ? $a(t, !!l, e, !1) : a != null && $a(t, !!l, a, !0);
                return;
            case "textarea":
                ut("invalid", t), u = n = l = null;
                for (i in a)
                    if (a.hasOwnProperty(i) && (s = a[i], s != null)) switch (i) {
                        case "value":
                            l = s;
                            break;
                        case "defaultValue":
                            n = s;
                            break;
                        case "children":
                            u = s;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (s != null) throw Error(o(91));
                            break;
                        default:
                            pt(t, e, i, s, a, null)
                    }
                ws(t, l, n, u), Ln(t);
                return;
            case "option":
                for (f in a)
                    if (a.hasOwnProperty(f) && (l = a[f], l != null)) switch (f) {
                        case "selected":
                            t.selected = l && typeof l != "function" && typeof l != "symbol";
                            break;
                        default:
                            pt(t, e, f, l, a, null)
                    }
                return;
            case "dialog":
                ut("beforetoggle", t), ut("toggle", t), ut("cancel", t), ut("close", t);
                break;
            case "iframe":
            case "object":
                ut("load", t);
                break;
            case "video":
            case "audio":
                for (l = 0; l < hn.length; l++) ut(hn[l], t);
                break;
            case "image":
                ut("error", t), ut("load", t);
                break;
            case "details":
                ut("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                ut("error", t), ut("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (g in a)
                    if (a.hasOwnProperty(g) && (l = a[g], l != null)) switch (g) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, e));
                        default:
                            pt(t, e, g, l, a, null)
                    }
                return;
            default:
                if (ri(e)) {
                    for (S in a) a.hasOwnProperty(S) && (l = a[S], l !== void 0 && $c(t, e, S, l, a, void 0));
                    return
                }
        }
        for (s in a) a.hasOwnProperty(s) && (l = a[s], l != null && pt(t, e, s, l, a, null))
    }

    function wm(t, e, a, l) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var n = null,
                    u = null,
                    i = null,
                    s = null,
                    f = null,
                    g = null,
                    S = null;
                for (x in a) {
                    var N = a[x];
                    if (a.hasOwnProperty(x) && N != null) switch (x) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            f = N;
                        default:
                            l.hasOwnProperty(x) || pt(t, e, x, null, l, N)
                    }
                }
                for (var b in l) {
                    var x = l[b];
                    if (N = a[b], l.hasOwnProperty(b) && (x != null || N != null)) switch (b) {
                        case "type":
                            u = x;
                            break;
                        case "name":
                            n = x;
                            break;
                        case "checked":
                            g = x;
                            break;
                        case "defaultChecked":
                            S = x;
                            break;
                        case "value":
                            i = x;
                            break;
                        case "defaultValue":
                            s = x;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (x != null) throw Error(o(137, e));
                            break;
                        default:
                            x !== N && pt(t, e, b, x, l, N)
                    }
                }
                fi(t, i, s, f, g, S, u, n);
                return;
            case "select":
                x = i = s = b = null;
                for (u in a)
                    if (f = a[u], a.hasOwnProperty(u) && f != null) switch (u) {
                        case "value":
                            break;
                        case "multiple":
                            x = f;
                        default:
                            l.hasOwnProperty(u) || pt(t, e, u, null, l, f)
                    }
                for (n in l)
                    if (u = l[n], f = a[n], l.hasOwnProperty(n) && (u != null || f != null)) switch (n) {
                        case "value":
                            b = u;
                            break;
                        case "defaultValue":
                            s = u;
                            break;
                        case "multiple":
                            i = u;
                        default:
                            u !== f && pt(t, e, n, u, l, f)
                    }
                e = s, a = i, l = x, b != null ? $a(t, !!a, b, !1) : !!l != !!a && (e != null ? $a(t, !!a, e, !0) : $a(t, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                x = b = null;
                for (s in a)
                    if (n = a[s], a.hasOwnProperty(s) && n != null && !l.hasOwnProperty(s)) switch (s) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            pt(t, e, s, null, l, n)
                    }
                for (i in l)
                    if (n = l[i], u = a[i], l.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
                        case "value":
                            b = n;
                            break;
                        case "defaultValue":
                            x = n;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (n != null) throw Error(o(91));
                            break;
                        default:
                            n !== u && pt(t, e, i, n, l, u)
                    }
                Qs(t, b, x);
                return;
            case "option":
                for (var K in a)
                    if (b = a[K], a.hasOwnProperty(K) && b != null && !l.hasOwnProperty(K)) switch (K) {
                        case "selected":
                            t.selected = !1;
                            break;
                        default:
                            pt(t, e, K, null, l, b)
                    }
                for (f in l)
                    if (b = l[f], x = a[f], l.hasOwnProperty(f) && b !== x && (b != null || x != null)) switch (f) {
                        case "selected":
                            t.selected = b && typeof b != "function" && typeof b != "symbol";
                            break;
                        default:
                            pt(t, e, f, b, l, x)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var Z in a) b = a[Z], a.hasOwnProperty(Z) && b != null && !l.hasOwnProperty(Z) && pt(t, e, Z, null, l, b);
                for (g in l)
                    if (b = l[g], x = a[g], l.hasOwnProperty(g) && b !== x && (b != null || x != null)) switch (g) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (b != null) throw Error(o(137, e));
                            break;
                        default:
                            pt(t, e, g, b, l, x)
                    }
                return;
            default:
                if (ri(e)) {
                    for (var bt in a) b = a[bt], a.hasOwnProperty(bt) && b !== void 0 && !l.hasOwnProperty(bt) && $c(t, e, bt, void 0, l, b);
                    for (S in l) b = l[S], x = a[S], !l.hasOwnProperty(S) || b === x || b === void 0 && x === void 0 || $c(t, e, S, b, l, x);
                    return
                }
        }
        for (var h in a) b = a[h], a.hasOwnProperty(h) && b != null && !l.hasOwnProperty(h) && pt(t, e, h, null, l, b);
        for (N in l) b = l[N], x = a[N], !l.hasOwnProperty(N) || b === x || b == null && x == null || pt(t, e, N, b, l, x)
    }
    var Wc = null,
        Fc = null;

    function Cu(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function Kr(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function kr(t, e) {
        if (t === 0) switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return t === 1 && e === "foreignObject" ? 0 : t
    }

    function Ic(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Pc = null;

    function Zm() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Pc ? !1 : (Pc = t, !0) : (Pc = null, !1)
    }
    var Jr = typeof setTimeout == "function" ? setTimeout : void 0,
        Vm = typeof clearTimeout == "function" ? clearTimeout : void 0,
        $r = typeof Promise == "function" ? Promise : void 0,
        Km = typeof queueMicrotask == "function" ? queueMicrotask : typeof $r < "u" ? function(t) {
            return $r.resolve(null).then(t).catch(km)
        } : Jr;

    function km(t) {
        setTimeout(function() {
            throw t
        })
    }

    function va(t) {
        return t === "head"
    }

    function Wr(t, e) {
        var a = e,
            l = 0,
            n = 0;
        do {
            var u = a.nextSibling;
            if (t.removeChild(a), u && u.nodeType === 8)
                if (a = u.data, a === "/$") {
                    if (0 < l && 8 > l) {
                        a = l;
                        var i = t.ownerDocument;
                        if (a & 1 && gn(i.documentElement), a & 2 && gn(i.body), a & 4)
                            for (a = i.head, gn(a), i = a.firstChild; i;) {
                                var s = i.nextSibling,
                                    f = i.nodeName;
                                i[Dl] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = s
                            }
                    }
                    if (n === 0) {
                        t.removeChild(u), En(e);
                        return
                    }
                    n--
                } else a === "$" || a === "$?" || a === "$!" ? n++ : l = a.charCodeAt(0) - 48;
            else l = 0;
            a = u
        } while (a);
        En(e)
    }

    function ts(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
            var a = e;
            switch (e = e.nextSibling, a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    ts(a), ui(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(a)
        }
    }

    function Jm(t, e, a, l) {
        for (; t.nodeType === 1;) {
            var n = a;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (l) {
                if (!t[Dl]) switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title)) break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (e === "input" && t.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && t.getAttribute("name") === u) return t
            } else return t;
            if (t = ze(t.nextSibling), t === null) break
        }
        return null
    }

    function $m(t, e, a) {
        if (e === "") return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = ze(t.nextSibling), t === null)) return null;
        return t
    }

    function es(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }

    function Wm(t, e) {
        var a = t.ownerDocument;
        if (t.data !== "$?" || a.readyState === "complete") e();
        else {
            var l = function() {
                e(), a.removeEventListener("DOMContentLoaded", l)
            };
            a.addEventListener("DOMContentLoaded", l), t._reactRetry = l
        }
    }

    function ze(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F") break;
                if (e === "/$") return null
            }
        }
        return t
    }
    var as = null;

    function Fr(t) {
        t = t.previousSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (e === 0) return t;
                    e--
                } else a === "/$" && e++
            }
            t = t.previousSibling
        }
        return null
    }

    function Ir(t, e, a) {
        switch (e = Cu(a), t) {
            case "html":
                if (t = e.documentElement, !t) throw Error(o(452));
                return t;
            case "head":
                if (t = e.head, !t) throw Error(o(453));
                return t;
            case "body":
                if (t = e.body, !t) throw Error(o(454));
                return t;
            default:
                throw Error(o(451))
        }
    }

    function gn(t) {
        for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
        ui(t)
    }
    var Ae = new Map,
        Pr = new Set;

    function Bu(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var $e = R.d;
    R.d = {
        f: Fm,
        r: Im,
        D: Pm,
        C: ty,
        L: ey,
        m: ay,
        X: ny,
        S: ly,
        M: uy
    };

    function Fm() {
        var t = $e.f(),
            e = zu();
        return t || e
    }

    function Im(t) {
        var e = Va(t);
        e !== null && e.tag === 5 && e.type === "form" ? bo(e) : $e.r(t)
    }
    var El = typeof document > "u" ? null : document;

    function td(t, e, a) {
        var l = El;
        if (l && typeof e == "string" && e) {
            var n = ge(e);
            n = 'link[rel="' + t + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Pr.has(n) || (Pr.add(n), t = {
                rel: t,
                crossOrigin: a,
                href: e
            }, l.querySelector(n) === null && (e = l.createElement("link"), Vt(e, "link", t), Gt(e), l.head.appendChild(e)))
        }
    }

    function Pm(t) {
        $e.D(t), td("dns-prefetch", t, null)
    }

    function ty(t, e) {
        $e.C(t, e), td("preconnect", t, e)
    }

    function ey(t, e, a) {
        $e.L(t, e, a);
        var l = El;
        if (l && t && e) {
            var n = 'link[rel="preload"][as="' + ge(e) + '"]';
            e === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + ge(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + ge(a.imageSizes) + '"]')) : n += '[href="' + ge(t) + '"]';
            var u = n;
            switch (e) {
                case "style":
                    u = Nl(t);
                    break;
                case "script":
                    u = zl(t)
            }
            Ae.has(u) || (t = D({
                rel: "preload",
                href: e === "image" && a && a.imageSrcSet ? void 0 : t,
                as: e
            }, a), Ae.set(u, t), l.querySelector(n) !== null || e === "style" && l.querySelector(pn(u)) || e === "script" && l.querySelector(bn(u)) || (e = l.createElement("link"), Vt(e, "link", t), Gt(e), l.head.appendChild(e)))
        }
    }

    function ay(t, e) {
        $e.m(t, e);
        var a = El;
        if (a && t) {
            var l = e && typeof e.as == "string" ? e.as : "script",
                n = 'link[rel="modulepreload"][as="' + ge(l) + '"][href="' + ge(t) + '"]',
                u = n;
            switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    u = zl(t)
            }
            if (!Ae.has(u) && (t = D({
                    rel: "modulepreload",
                    href: t
                }, e), Ae.set(u, t), a.querySelector(n) === null)) {
                switch (l) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(bn(u))) return
                }
                l = a.createElement("link"), Vt(l, "link", t), Gt(l), a.head.appendChild(l)
            }
        }
    }

    function ly(t, e, a) {
        $e.S(t, e, a);
        var l = El;
        if (l && t) {
            var n = Ka(l).hoistableStyles,
                u = Nl(t);
            e = e || "default";
            var i = n.get(u);
            if (!i) {
                var s = {
                    loading: 0,
                    preload: null
                };
                if (i = l.querySelector(pn(u))) s.loading = 5;
                else {
                    t = D({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, a), (a = Ae.get(u)) && ls(t, a);
                    var f = i = l.createElement("link");
                    Gt(f), Vt(f, "link", t), f._p = new Promise(function(g, S) {
                        f.onload = g, f.onerror = S
                    }), f.addEventListener("load", function() {
                        s.loading |= 1
                    }), f.addEventListener("error", function() {
                        s.loading |= 2
                    }), s.loading |= 4, qu(i, e, l)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: s
                }, n.set(u, i)
            }
        }
    }

    function ny(t, e) {
        $e.X(t, e);
        var a = El;
        if (a && t) {
            var l = Ka(a).hoistableScripts,
                n = zl(t),
                u = l.get(n);
            u || (u = a.querySelector(bn(n)), u || (t = D({
                src: t,
                async: !0
            }, e), (e = Ae.get(n)) && ns(t, e), u = a.createElement("script"), Gt(u), Vt(u, "link", t), a.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, l.set(n, u))
        }
    }

    function uy(t, e) {
        $e.M(t, e);
        var a = El;
        if (a && t) {
            var l = Ka(a).hoistableScripts,
                n = zl(t),
                u = l.get(n);
            u || (u = a.querySelector(bn(n)), u || (t = D({
                src: t,
                async: !0,
                type: "module"
            }, e), (e = Ae.get(n)) && ns(t, e), u = a.createElement("script"), Gt(u), Vt(u, "link", t), a.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, l.set(n, u))
        }
    }

    function ed(t, e, a, l) {
        var n = (n = $.current) ? Bu(n) : null;
        if (!n) throw Error(o(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (e = Nl(a.href), a = Ka(n).hoistableStyles, l = a.get(e), l || (l = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(e, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    t = Nl(a.href);
                    var u = Ka(n).hoistableStyles,
                        i = u.get(t);
                    if (i || (n = n.ownerDocument || n, i = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, u.set(t, i), (u = n.querySelector(pn(t))) && !u._p && (i.instance = u, i.state.loading = 5), Ae.has(t) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        }, Ae.set(t, a), u || iy(n, t, a, i.state))), e && l === null) throw Error(o(528, ""));
                    return i
                }
                if (e && l !== null) throw Error(o(529, ""));
                return null;
            case "script":
                return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = zl(a), a = Ka(n).hoistableScripts, l = a.get(e), l || (l = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(e, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(o(444, t))
        }
    }

    function Nl(t) {
        return 'href="' + ge(t) + '"'
    }

    function pn(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function ad(t) {
        return D({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }

    function iy(t, e, a, l) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
            return l.loading |= 1
        }), e.addEventListener("error", function() {
            return l.loading |= 2
        }), Vt(e, "link", a), Gt(e), t.head.appendChild(e))
    }

    function zl(t) {
        return '[src="' + ge(t) + '"]'
    }

    function bn(t) {
        return "script[async]" + t
    }

    function ld(t, e, a) {
        if (e.count++, e.instance === null) switch (e.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + ge(a.href) + '"]');
                if (l) return e.instance = l, Gt(l), l;
                var n = D({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return l = (t.ownerDocument || t).createElement("style"), Gt(l), Vt(l, "style", n), qu(l, a.precedence, t), e.instance = l;
            case "stylesheet":
                n = Nl(a.href);
                var u = t.querySelector(pn(n));
                if (u) return e.state.loading |= 4, e.instance = u, Gt(u), u;
                l = ad(a), (n = Ae.get(n)) && ls(l, n), u = (t.ownerDocument || t).createElement("link"), Gt(u);
                var i = u;
                return i._p = new Promise(function(s, f) {
                    i.onload = s, i.onerror = f
                }), Vt(u, "link", l), e.state.loading |= 4, qu(u, a.precedence, t), e.instance = u;
            case "script":
                return u = zl(a.src), (n = t.querySelector(bn(u))) ? (e.instance = n, Gt(n), n) : (l = a, (n = Ae.get(u)) && (l = D({}, a), ns(l, n)), t = t.ownerDocument || t, n = t.createElement("script"), Gt(n), Vt(n, "link", l), t.head.appendChild(n), e.instance = n);
            case "void":
                return null;
            default:
                throw Error(o(443, e.type))
        } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, qu(l, a.precedence, t));
        return e.instance
    }

    function qu(t, e, a) {
        for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = l.length ? l[l.length - 1] : null, u = n, i = 0; i < l.length; i++) {
            var s = l[i];
            if (s.dataset.precedence === e) u = s;
            else if (u !== n) break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild))
    }

    function ls(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
    }

    function ns(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
    }
    var Yu = null;

    function nd(t, e, a) {
        if (Yu === null) {
            var l = new Map,
                n = Yu = new Map;
            n.set(a, l)
        } else n = Yu, l = n.get(a), l || (l = new Map, n.set(a, l));
        if (l.has(t)) return l;
        for (l.set(t, null), a = a.getElementsByTagName(t), n = 0; n < a.length; n++) {
            var u = a[n];
            if (!(u[Dl] || u[Jt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = u.getAttribute(e) || "";
                i = t + i;
                var s = l.get(i);
                s ? s.push(u) : l.set(i, [u])
            }
        }
        return l
    }

    function ud(t, e, a) {
        t = t.ownerDocument || t, t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null)
    }

    function cy(t, e, a) {
        if (a === 1 || e.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
                return !0;
            case "link":
                if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
                switch (e.rel) {
                    case "stylesheet":
                        return t = e.disabled, typeof e.precedence == "string" && t == null;
                    default:
                        return !0
                }
            case "script":
                if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
        }
        return !1
    }

    function id(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var xn = null;

    function sy() {}

    function fy(t, e, a) {
        if (xn === null) throw Error(o(475));
        var l = xn;
        if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var n = Nl(a.href),
                    u = t.querySelector(pn(n));
                if (u) {
                    t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Gu.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = u, Gt(u);
                    return
                }
                u = t.ownerDocument || t, a = ad(a), (n = Ae.get(n)) && ls(a, n), u = u.createElement("link"), Gt(u);
                var i = u;
                i._p = new Promise(function(s, f) {
                    i.onload = s, i.onerror = f
                }), Vt(u, "link", a), e.instance = u
            }
            l.stylesheets === null && (l.stylesheets = new Map), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Gu.bind(l), t.addEventListener("load", e), t.addEventListener("error", e))
        }
    }

    function oy() {
        if (xn === null) throw Error(o(475));
        var t = xn;
        return t.stylesheets && t.count === 0 && us(t, t.stylesheets), 0 < t.count ? function(e) {
            var a = setTimeout(function() {
                if (t.stylesheets && us(t, t.stylesheets), t.unsuspend) {
                    var l = t.unsuspend;
                    t.unsuspend = null, l()
                }
            }, 6e4);
            return t.unsuspend = e,
                function() {
                    t.unsuspend = null, clearTimeout(a)
                }
        } : null
    }

    function Gu() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) us(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }
    var Lu = null;

    function us(t, e) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, Lu = new Map, e.forEach(ry, t), Lu = null, Gu.call(t))
    }

    function ry(t, e) {
        if (!(e.state.loading & 4)) {
            var a = Lu.get(t);
            if (a) var l = a.get(null);
            else {
                a = new Map, Lu.set(t, a);
                for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var i = n[u];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), l = i)
                }
                l && a.set(null, l)
            }
            n = e.instance, i = n.getAttribute("data-precedence"), u = a.get(i) || l, u === l && a.set(null, n), a.set(i, n), this.count++, l = Gu.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4
        }
    }
    var _n = {
        $$typeof: q,
        Provider: null,
        Consumer: null,
        _currentValue: L,
        _currentValue2: L,
        _threadCount: 0
    };

    function dy(t, e, a, l, n, u, i, s) {
        this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ei(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ei(0), this.hiddenUpdates = ei(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = new Map
    }

    function cd(t, e, a, l, n, u, i, s, f, g, S, N) {
        return t = new dy(t, e, a, i, s, f, g, N), e = 1, u === !0 && (e |= 24), u = fe(3, null, null, e), t.current = u, u.stateNode = t, e = Li(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
            element: l,
            isDehydrated: a,
            cache: e
        }, Zi(u), t
    }

    function sd(t) {
        return t ? (t = nl, t) : nl
    }

    function fd(t, e, a, l, n, u) {
        n = sd(n), l.context === null ? l.context = n : l.pendingContext = n, l = la(e), l.payload = {
            element: a
        }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = na(t, l, e), a !== null && (ye(a, t, e), Wl(a, t, e))
    }

    function od(t, e) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var a = t.retryLane;
            t.retryLane = a !== 0 && a < e ? a : e
        }
    }

    function is(t, e) {
        od(t, e), (t = t.alternate) && od(t, e)
    }

    function rd(t) {
        if (t.tag === 13) {
            var e = ll(t, 67108864);
            e !== null && ye(e, t, 67108864), is(t, 67108864)
        }
    }
    var Xu = !0;

    function my(t, e, a, l) {
        var n = T.T;
        T.T = null;
        var u = R.p;
        try {
            R.p = 2, cs(t, e, a, l)
        } finally {
            R.p = u, T.T = n
        }
    }

    function yy(t, e, a, l) {
        var n = T.T;
        T.T = null;
        var u = R.p;
        try {
            R.p = 8, cs(t, e, a, l)
        } finally {
            R.p = u, T.T = n
        }
    }

    function cs(t, e, a, l) {
        if (Xu) {
            var n = ss(l);
            if (n === null) Jc(t, e, l, Qu, a), md(t, l);
            else if (vy(n, t, e, a, l)) l.stopPropagation();
            else if (md(t, l), e & 4 && -1 < hy.indexOf(t)) {
                for (; n !== null;) {
                    var u = Va(n);
                    if (u !== null) switch (u.tag) {
                        case 3:
                            if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                var i = Ta(u.pendingLanes);
                                if (i !== 0) {
                                    var s = u;
                                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i;) {
                                        var f = 1 << 31 - ce(i);
                                        s.entanglements[1] |= f, i &= ~f
                                    }
                                    Ue(u), (mt & 6) === 0 && (Eu = Me() + 500, yn(0))
                                }
                            }
                            break;
                        case 13:
                            s = ll(u, 2), s !== null && ye(s, u, 2), zu(), is(u, 2)
                    }
                    if (u = ss(l), u === null && Jc(t, e, l, Qu, a), u === n) break;
                    n = u
                }
                n !== null && l.stopPropagation()
            } else Jc(t, e, l, null, a)
        }
    }

    function ss(t) {
        return t = mi(t), fs(t)
    }
    var Qu = null;

    function fs(t) {
        if (Qu = null, t = Za(t), t !== null) {
            var e = M(t);
            if (e === null) t = null;
            else {
                var a = e.tag;
                if (a === 13) {
                    if (t = j(e), t !== null) return t;
                    t = null
                } else if (a === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else e !== t && (t = null)
            }
        }
        return Qu = t, null
    }

    function dd(t) {
        switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (t0()) {
                    case As:
                        return 2;
                    case Es:
                        return 8;
                    case Hn:
                    case e0:
                        return 32;
                    case Ns:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var os = !1,
        ga = null,
        pa = null,
        ba = null,
        Tn = new Map,
        Sn = new Map,
        xa = [],
        hy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function md(t, e) {
        switch (t) {
            case "focusin":
            case "focusout":
                ga = null;
                break;
            case "dragenter":
            case "dragleave":
                pa = null;
                break;
            case "mouseover":
            case "mouseout":
                ba = null;
                break;
            case "pointerover":
            case "pointerout":
                Tn.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Sn.delete(e.pointerId)
        }
    }

    function An(t, e, a, l, n, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: a,
            eventSystemFlags: l,
            nativeEvent: u,
            targetContainers: [n]
        }, e !== null && (e = Va(e), e !== null && rd(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t)
    }

    function vy(t, e, a, l, n) {
        switch (e) {
            case "focusin":
                return ga = An(ga, t, e, a, l, n), !0;
            case "dragenter":
                return pa = An(pa, t, e, a, l, n), !0;
            case "mouseover":
                return ba = An(ba, t, e, a, l, n), !0;
            case "pointerover":
                var u = n.pointerId;
                return Tn.set(u, An(Tn.get(u) || null, t, e, a, l, n)), !0;
            case "gotpointercapture":
                return u = n.pointerId, Sn.set(u, An(Sn.get(u) || null, t, e, a, l, n)), !0
        }
        return !1
    }

    function yd(t) {
        var e = Za(t.target);
        if (e !== null) {
            var a = M(e);
            if (a !== null) {
                if (e = a.tag, e === 13) {
                    if (e = j(a), e !== null) {
                        t.blockedOn = e, f0(t.priority, function() {
                            if (a.tag === 13) {
                                var l = me();
                                l = ai(l);
                                var n = ll(a, l);
                                n !== null && ye(n, a, l), is(a, l)
                            }
                        });
                        return
                    }
                } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function wu(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length;) {
            var a = ss(t.nativeEvent);
            if (a === null) {
                a = t.nativeEvent;
                var l = new a.constructor(a.type, a);
                di = l, a.target.dispatchEvent(l), di = null
            } else return e = Va(a), e !== null && rd(e), t.blockedOn = a, !1;
            e.shift()
        }
        return !0
    }

    function hd(t, e, a) {
        wu(t) && a.delete(e)
    }

    function gy() {
        os = !1, ga !== null && wu(ga) && (ga = null), pa !== null && wu(pa) && (pa = null), ba !== null && wu(ba) && (ba = null), Tn.forEach(hd), Sn.forEach(hd)
    }

    function Zu(t, e) {
        t.blockedOn === e && (t.blockedOn = null, os || (os = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, gy)))
    }
    var Vu = null;

    function vd(t) {
        Vu !== t && (Vu = t, c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
            Vu === t && (Vu = null);
            for (var e = 0; e < t.length; e += 3) {
                var a = t[e],
                    l = t[e + 1],
                    n = t[e + 2];
                if (typeof l != "function") {
                    if (fs(l || a) === null) continue;
                    break
                }
                var u = Va(a);
                u !== null && (t.splice(e, 3), e -= 3, fc(u, {
                    pending: !0,
                    data: n,
                    method: a.method,
                    action: l
                }, l, n))
            }
        }))
    }

    function En(t) {
        function e(f) {
            return Zu(f, t)
        }
        ga !== null && Zu(ga, t), pa !== null && Zu(pa, t), ba !== null && Zu(ba, t), Tn.forEach(e), Sn.forEach(e);
        for (var a = 0; a < xa.length; a++) {
            var l = xa[a];
            l.blockedOn === t && (l.blockedOn = null)
        }
        for (; 0 < xa.length && (a = xa[0], a.blockedOn === null);) yd(a), a.blockedOn === null && xa.shift();
        if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
            for (l = 0; l < a.length; l += 3) {
                var n = a[l],
                    u = a[l + 1],
                    i = n[te] || null;
                if (typeof u == "function") i || vd(a);
                else if (i) {
                    var s = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u, i = u[te] || null) s = i.formAction;
                        else if (fs(n) !== null) continue
                    } else s = i.action;
                    typeof s == "function" ? a[l + 1] = s : (a.splice(l, 3), l -= 3), vd(a)
                }
            }
    }

    function rs(t) {
        this._internalRoot = t
    }
    Ku.prototype.render = rs.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null) throw Error(o(409));
        var a = e.current,
            l = me();
        fd(a, l, t, e, null, null)
    }, Ku.prototype.unmount = rs.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            fd(t.current, 2, null, t, null, null), zu(), e[wa] = null
        }
    };

    function Ku(t) {
        this._internalRoot = t
    }
    Ku.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = Ds();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var a = 0; a < xa.length && e !== 0 && e < xa[a].priority; a++);
            xa.splice(a, 0, t), a === 0 && yd(t)
        }
    };
    var gd = d.version;
    if (gd !== "19.1.0") throw Error(o(527, gd, "19.1.0"));
    R.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
        return t = O(e), t = t !== null ? _(t) : null, t = t === null ? null : t.stateNode, t
    };
    var py = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: T,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ku.isDisabled && ku.supportsFiber) try {
            Ml = ku.inject(py), ie = ku
        } catch {}
    }
    return zn.createRoot = function(t, e) {
        if (!A(t)) throw Error(o(299));
        var a = !1,
            l = "",
            n = Uo,
            u = Ho,
            i = Co,
            s = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (s = e.unstable_transitionCallbacks)), e = cd(t, 1, !1, null, null, a, l, n, u, i, s, null), t[wa] = e.current, kc(t), new rs(e)
    }, zn.hydrateRoot = function(t, e, a) {
        if (!A(t)) throw Error(o(299));
        var l = !1,
            n = "",
            u = Uo,
            i = Ho,
            s = Co,
            f = null,
            g = null;
        return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (s = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (f = a.unstable_transitionCallbacks), a.formState !== void 0 && (g = a.formState)), e = cd(t, 1, !0, e, a ? ? null, l, n, u, i, s, f, g), e.context = sd(null), a = e.current, l = me(), l = ai(l), n = la(l), n.callback = null, na(a, n, l), a = l, e.current.lanes = a, jl(e, a), Ue(e), t[wa] = e.current, kc(t), new Ku(e)
    }, zn.version = "19.1.0", zn
}
var zd;

function Oy() {
    if (zd) return ys.exports;
    zd = 1;

    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
        } catch (d) {
            console.error(d)
        }
    }
    return c(), ys.exports = My(), ys.exports
}
var jy = Oy();
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = c => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Ry = c => c.replace(/^([A-Z])|[\s-_]+(\w)/g, (d, p, o) => o ? o.toUpperCase() : p.toLowerCase()),
    Md = c => {
        const d = Ry(c);
        return d.charAt(0).toUpperCase() + d.slice(1)
    },
    jd = (...c) => c.filter((d, p, o) => !!d && d.trim() !== "" && o.indexOf(d) === p).join(" ").trim(),
    Uy = c => {
        for (const d in c)
            if (d.startsWith("aria-") || d === "role" || d === "title") return !0
    };
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Hy = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = ct.forwardRef(({
    color: c = "currentColor",
    size: d = 24,
    strokeWidth: p = 2,
    absoluteStrokeWidth: o,
    className: A = "",
    children: M,
    iconNode: j,
    ...C
}, O) => ct.createElement("svg", {
    ref: O,
    ...Hy,
    width: d,
    height: d,
    stroke: c,
    strokeWidth: o ? Number(p) * 24 / Number(d) : p,
    className: jd("lucide", A),
    ...!M && !Uy(C) && {
        "aria-hidden": "true"
    },
    ...C
}, [...j.map(([_, D]) => ct.createElement(_, D)), ...Array.isArray(M) ? M : [M]]));
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = (c, d) => {
    const p = ct.forwardRef(({
        className: o,
        ...A
    }, M) => ct.createElement(Cy, {
        ref: M,
        iconNode: d,
        className: jd(`lucide-${Dy(Md(c))}`, `lucide-${c}`, o),
        ...A
    }));
    return p.displayName = Md(c), p
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const By = [
        ["path", {
            d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
            key: "jecpp"
        }],
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "6",
            rx: "2",
            key: "i6l2r4"
        }]
    ],
    qy = kt("briefcase", By);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = [
        ["path", {
            d: "M11 14h1v4",
            key: "fy54vd"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }],
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["rect", {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            key: "12vinp"
        }]
    ],
    Gy = kt("calendar-1", Yy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ly = [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }]
    ],
    Dd = kt("calendar", Ly);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = [
        ["path", {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }],
        ["path", {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }]
    ],
    La = kt("circle-check-big", Xy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = [
        ["line", {
            x1: "3",
            x2: "15",
            y1: "22",
            y2: "22",
            key: "xegly4"
        }],
        ["line", {
            x1: "4",
            x2: "14",
            y1: "9",
            y2: "9",
            key: "xcnuvu"
        }],
        ["path", {
            d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",
            key: "16j0yd"
        }],
        ["path", {
            d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
            key: "7cu91f"
        }]
    ],
    wy = kt("fuel", Qy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = [
        ["path", {
            d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",
            key: "15492f"
        }],
        ["path", {
            d: "m16 16 6-6",
            key: "vzrcl6"
        }],
        ["path", {
            d: "m8 8 6-6",
            key: "18bi4p"
        }],
        ["path", {
            d: "m9 7 8 8",
            key: "5jnvq1"
        }],
        ["path", {
            d: "m21 11-8-8",
            key: "z4y7zo"
        }]
    ],
    Vy = kt("gavel", Zy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = [
        ["path", {
            d: "m11 17 2 2a1 1 0 1 0 3-3",
            key: "efffak"
        }],
        ["path", {
            d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
            key: "9pr0kb"
        }],
        ["path", {
            d: "m21 3 1 11h-2",
            key: "1tisrp"
        }],
        ["path", {
            d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",
            key: "1uvwmv"
        }],
        ["path", {
            d: "M3 4h8",
            key: "1ep09j"
        }]
    ],
    ky = kt("handshake", Ky);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = [
        ["path", {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }],
        ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }]
    ],
    Rd = kt("mail", Jy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    Ud = kt("map-pin", $y);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wy = [
        ["path", {
            d: "M4 12h16",
            key: "1lakjw"
        }],
        ["path", {
            d: "M4 18h16",
            key: "19g7jn"
        }],
        ["path", {
            d: "M4 6h16",
            key: "1o0s65"
        }]
    ],
    Fy = kt("menu", Wy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iy = [
        ["path", {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }]
    ],
    Hd = kt("phone", Iy);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Py = [
        ["path", {
            d: "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",
            key: "we99rg"
        }],
        ["path", {
            d: "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",
            key: "1w6hck"
        }],
        ["path", {
            d: "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",
            key: "15hgfx"
        }],
        ["path", {
            d: "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",
            key: "452b4h"
        }]
    ],
    th = kt("pickaxe", Py);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eh = [
        ["path", {
            d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
            key: "7g6ntu"
        }],
        ["path", {
            d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
            key: "ijws7r"
        }],
        ["path", {
            d: "M7 21h10",
            key: "1b0cd5"
        }],
        ["path", {
            d: "M12 3v18",
            key: "108xh3"
        }],
        ["path", {
            d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
            key: "3gwbw2"
        }]
    ],
    ah = kt("scale", eh);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lh = [
        ["path", {
            d: "M15 12h-5",
            key: "r7krc0"
        }],
        ["path", {
            d: "M15 8h-5",
            key: "1khuty"
        }],
        ["path", {
            d: "M19 17V5a2 2 0 0 0-2-2H4",
            key: "zz82l3"
        }],
        ["path", {
            d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
            key: "1ph1d7"
        }]
    ],
    nh = kt("scroll-text", lh);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uh = [
        ["path", {
            d: "M12 10.189V14",
            key: "1p8cqu"
        }],
        ["path", {
            d: "M12 2v3",
            key: "qbqxhf"
        }],
        ["path", {
            d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",
            key: "qpkstq"
        }],
        ["path", {
            d: "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",
            key: "7tigtc"
        }],
        ["path", {
            d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
            key: "1924j5"
        }]
    ],
    ih = kt("ship", uh);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ch = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    sh = kt("x", ch);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fh = [
        ["path", {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }]
    ],
    oh = kt("zap", fh),
    rh = "/assets/gravel-C99H9Rhe.avif",
    dh = "/assets/Atom%20logo%20final-I7OGcKSj.png",
    mh = "/assets/slider-1-BQ4Nm1p7.jpg",
    yh = "/assets/slider-2-CQvBGt7B.jpeg",
    hh = "/assets/slider-3-Daz_ESCB.jpg",
    vh = "/assets/slider-4-8O9M_dkx.jpg",
    Cd = {
        placeholder: rh,
        logo: dh
    },
    gh = [{
        src: mh,
        alt: "image one"
    }, {
        src: yh,
        alt: "image two"
    }, {
        src: hh,
        alt: "image three"
    }, {
        src: vh,
        alt: "image four"
    }],
    ph = [{
        icon: ky,
        title: "Deal & Transaction Advisory",
        description: "Structuring, negotiation, and execution of complex deals—from joint ventures and production sharing agreements to asset acquisitions and EPC contracts."
    }, {
        icon: ah,
        title: "Regulatory Compliance",
        description: "End-to-end support in securing and maintaining licences, permits, and regulatory approvals. We help clients stay ahead of evolving rules and mitigate non-compliance risks."
    }, {
        icon: nh,
        title: "Policy & Legislative Advisory",
        description: "We support public and private sector clients in shaping, interpreting, and implementing laws, regulations, and policies impacting the energy ecosystem."
    }, {
        icon: Vy,
        title: "Dispute Resolution & Risk Management",
        description: "We help clients resolve disputes efficiently—through litigation, arbitration, or alternative dispute resolution—especially in high-stakes energy and infrastructure contexts."
    }, {
        icon: qy,
        title: "General Counsel Support",
        description: "Retainer services for energy companies without full in-house legal teams, offering embedded advisory tailored to your operations and regulatory landscape."
    }],
    bh = [{
        icon: wy,
        title: "Oil & Gas",
        description: "From licensing rounds and gas commercialisation to pipeline regulation and downstream compliance, we advise across upstream, midstream, and downstream oil and gas operations."
    }, {
        icon: oh,
        title: "Power",
        description: "We provide legal support across generation, transmission, and distribution—from embedded power projects to off-grid renewable energy solutions and energy transition frameworks."
    }, {
        icon: th,
        title: "Mining & Extractives",
        description: "Advising operators, investors, and regulators in solid minerals, quarrying, and critical minerals development, with a focus on sustainable resource governance."
    }, {
        icon: ih,
        title: "Maritime & Shipping",
        description: "Our maritime practice covers vessel registration, cabotage, port operations, logistics, and marine dispute resolution within the petroleum supply chain."
    }],
    Bd = () => r.jsx("div", {
        children: r.jsx("a", {
            href: "#home",
            children: r.jsx("img", {
                src: Cd.logo,
                alt: "atom logo",
                className: "w-20"
            })
        })
    }),
    xh = () => {
        const [c, d] = ct.useState(!1);
        return r.jsx("header", {
            className: "border-b border-gray-200 bg-white fixed top-0 z-50 w-full",
            children: r.jsxs("div", {
                className: "mx-auto px-6 py-4",
                children: [r.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [r.jsx(Bd, {}), r.jsxs("nav", {
                        className: "hidden md:flex items-center gap-5",
                        children: [r.jsx("a", {
                            href: "#home",
                            className: "text-gray-700 hover:text-primary-clr transition-colors",
                            children: "Home"
                        }), r.jsx("a", {
                            href: "#about",
                            className: "text-gray-700 hover:text-primary-clr transition-colors",
                            children: "About Us"
                        }), r.jsx("a", {
                            href: "#practice",
                            className: "text-gray-700 hover:text-primary-clr transition-colors",
                            children: "Practice Area"
                        }), r.jsx("a", {
                            href: "#sectors",
                            className: "text-gray-700 hover:text-primary-clr transition-colors",
                            children: "Our Sectors"
                        }), r.jsx("a", {
                            href: "#services",
                            className: "text-gray-700 hover:text-primary-clr transition-colors",
                            children: "Services"
                        }), r.jsx("a", {
                            href: "#insights",
                            className: "text-gray-700 hover:text-primary-clr transition-colors",
                            children: "Insights"
                        }), r.jsx("a", {
                            href: "#contact",
                            className: "text-gray-700 hover:text-primary-clr transition-colors",
                            children: "Contact"
                        }), r.jsxs("button", {
                            className: "flex items-center justify-center px-5 py-2 rounded-md bg-primary-clr hover:bg-primary-dull transition duration-300 text-white cursor-pointer",
                            children: [r.jsx(Dd, {
                                className: "w-4 h-4 mr-2"
                            }), "Consultation"]
                        })]
                    }), r.jsx("button", {
                        className: "md:hidden",
                        onClick: () => d(!c),
                        children: c ? r.jsx(sh, {
                            className: "h-6 w-6"
                        }) : r.jsx(Fy, {
                            className: "h-6 w-6"
                        })
                    })]
                }), c && r.jsx("div", {
                    className: "md:hidden mt-4 pb-4 border-t border-gray-200",
                    children: r.jsxs("nav", {
                        className: "flex flex-col space-y-4 pt-4",
                        children: [r.jsx("a", {
                            href: "#home",
                            className: "text-gray-700 hover:text-blue-900",
                            children: "Home"
                        }), r.jsx("a", {
                            href: "#about",
                            className: "text-gray-700 hover:text-blue-900",
                            children: "About Us"
                        }), r.jsx("a", {
                            href: "#practice",
                            className: "text-gray-700 hover:text-blue-900",
                            children: "Practice Area"
                        }), r.jsx("a", {
                            href: "#sectors",
                            className: "text-gray-700 hover:text-blue-900",
                            children: "Our Sectors"
                        }), r.jsx("a", {
                            href: "#services",
                            className: "text-gray-700 hover:text-blue-900",
                            children: "Services"
                        }), r.jsx("a", {
                            href: "#insights",
                            className: "text-gray-700 hover:text-blue-900",
                            children: "Insights"
                        }), r.jsx("a", {
                            href: "#contact",
                            className: "text-gray-700 hover:text-blue-900",
                            children: "Contact"
                        }), r.jsxs("button", {
                            className: "flex items-center justify-center py-2 rounded-md bg-primary-clr hover:bg-primary-dull transition duration-300 text-white w-full",
                            children: [r.jsx(Gy, {
                                className: "w-4 h-4 mr-2"
                            }), "Schedule Consultation"]
                        })]
                    })
                })]
            })
        })
    },
    _h = () => r.jsx("section", {
        id: "about",
        className: "py-20 md:py-32 bg-gray-50",
        children: r.jsx("div", {
            className: "container mx-auto px-6",
            children: r.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto",
                children: [r.jsx("div", {
                    className: "space-y-8",
                    children: r.jsxs("div", {
                        className: "space-y-6",
                        children: [r.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-gray-900",
                            children: "Committed to Excellence in Legal Representation"
                        }), r.jsx("p", {
                            className: "text-lg text-gray-600 leading-relaxed",
                            children: "We are a boutique energy law advisory firm offering exclusive tier 1 legal, and strategic advisory services to clients across the energy and natural resources value chain."
                        }), r.jsx("p", {
                            className: "text-lg text-gray-600 leading-relaxed",
                            children: "We work at the intersection of law, regulation, and commercial operations—supporting both government bodies, private sector entities, infrastructure investors, and project developers operating across the oil and gas, power, mining, and maritime sectors."
                        }), r.jsx("p", {
                            className: "text-lg text-gray-600 leading-relaxed",
                            children: "Our value lies in our sector-specific insight, transactional fluency, and policy awareness—allowing us to provide not just legal advice, but commercially sound guidance tailored to Nigeria’s evolving energy landscape."
                        })]
                    })
                }), r.jsx("div", {
                    className: "relative",
                    children: r.jsx("img", {
                        src: Cd.placeholder,
                        alt: "Law office",
                        className: "rounded-lg shadow-xl w-full"
                    })
                })]
            })
        })
    }),
    Mn = ({
        name: c,
        type: d,
        placeholder: p,
        label: o,
        value: A,
        onChange: M
    }) => r.jsxs("div", {
        children: [r.jsx("label", {
            htmlFor: c,
            className: "text-sm font-medium text-slate-700 mb-2 block",
            children: o
        }), r.jsx("input", {
            required: !0,
            type: d,
            name: c,
            id: c,
            value: A,
            onChange: M,
            placeholder: p,
            className: "text-gray-600 px-4 py-2 text-sm border border-gray-300 rounded-md w-full placeholder:text-gray-400 focus:border-2 focus:border-black focus:outline-offset-5 focus:outline-gray-400 focus:rounded-md"
        })]
    });
class jn {
    constructor(d = 0, p = "Network Error") {
        this.status = d, this.text = p
    }
}
const Th = () => {
        if (!(typeof localStorage > "u")) return {
            get: c => Promise.resolve(localStorage.getItem(c)),
            set: (c, d) => Promise.resolve(localStorage.setItem(c, d)),
            remove: c => Promise.resolve(localStorage.removeItem(c))
        }
    },
    Kt = {
        origin: "https://api.emailjs.com",
        blockHeadless: !1,
        storageProvider: Th()
    },
    Ss = c => c ? typeof c == "string" ? {
        publicKey: c
    } : c.toString() === "[object Object]" ? c : {} : {},
    Sh = (c, d = "https://api.emailjs.com") => {
        if (!c) return;
        const p = Ss(c);
        Kt.publicKey = p.publicKey, Kt.blockHeadless = p.blockHeadless, Kt.storageProvider = p.storageProvider, Kt.blockList = p.blockList, Kt.limitRate = p.limitRate, Kt.origin = p.origin || d
    },
    qd = async (c, d, p = {}) => {
        const o = await fetch(Kt.origin + c, {
                method: "POST",
                headers: p,
                body: d
            }),
            A = await o.text(),
            M = new jn(o.status, A);
        if (o.ok) return M;
        throw M
    },
    Yd = (c, d, p) => {
        if (!c || typeof c != "string") throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
        if (!d || typeof d != "string") throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        if (!p || typeof p != "string") throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"
    },
    Ah = c => {
        if (c && c.toString() !== "[object Object]") throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"
    },
    Gd = c => c.webdriver || !c.languages || c.languages.length === 0,
    Ld = () => new jn(451, "Unavailable For Headless Browser"),
    Eh = (c, d) => {
        if (!Array.isArray(c)) throw "The BlockList list has to be an array";
        if (typeof d != "string") throw "The BlockList watchVariable has to be a string"
    },
    Nh = c => !c.list ? .length || !c.watchVariable,
    zh = (c, d) => c instanceof FormData ? c.get(d) : c[d],
    Xd = (c, d) => {
        if (Nh(c)) return !1;
        Eh(c.list, c.watchVariable);
        const p = zh(d, c.watchVariable);
        return typeof p != "string" ? !1 : c.list.includes(p)
    },
    Qd = () => new jn(403, "Forbidden"),
    Mh = (c, d) => {
        if (typeof c != "number" || c < 0) throw "The LimitRate throttle has to be a positive number";
        if (d && typeof d != "string") throw "The LimitRate ID has to be a non-empty string"
    },
    Oh = async (c, d, p) => {
        const o = Number(await p.get(c) || 0);
        return d - Date.now() + o
    },
    wd = async (c, d, p) => {
        if (!d.throttle || !p) return !1;
        Mh(d.throttle, d.id);
        const o = d.id || c;
        return await Oh(o, d.throttle, p) > 0 ? !0 : (await p.set(o, Date.now().toString()), !1)
    },
    Zd = () => new jn(429, "Too Many Requests"),
    jh = async (c, d, p, o) => {
        const A = Ss(o),
            M = A.publicKey || Kt.publicKey,
            j = A.blockHeadless || Kt.blockHeadless,
            C = A.storageProvider || Kt.storageProvider,
            O = { ...Kt.blockList,
                ...A.blockList
            },
            _ = { ...Kt.limitRate,
                ...A.limitRate
            };
        return j && Gd(navigator) ? Promise.reject(Ld()) : (Yd(M, c, d), Ah(p), p && Xd(O, p) ? Promise.reject(Qd()) : await wd(location.pathname, _, C) ? Promise.reject(Zd()) : qd("/api/v1.0/email/send", JSON.stringify({
            lib_version: "4.4.1",
            user_id: M,
            service_id: c,
            template_id: d,
            template_params: p
        }), {
            "Content-type": "application/json"
        }))
    },
    Dh = c => {
        if (!c || c.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form"
    },
    Rh = c => typeof c == "string" ? document.querySelector(c) : c,
    Uh = async (c, d, p, o) => {
        const A = Ss(o),
            M = A.publicKey || Kt.publicKey,
            j = A.blockHeadless || Kt.blockHeadless,
            C = Kt.storageProvider || A.storageProvider,
            O = { ...Kt.blockList,
                ...A.blockList
            },
            _ = { ...Kt.limitRate,
                ...A.limitRate
            };
        if (j && Gd(navigator)) return Promise.reject(Ld());
        const D = Rh(p);
        Yd(M, c, d), Dh(D);
        const X = new FormData(D);
        return Xd(O, X) ? Promise.reject(Qd()) : await wd(location.pathname, _, C) ? Promise.reject(Zd()) : (X.append("lib_version", "4.4.1"), X.append("service_id", c), X.append("template_id", d), X.append("user_id", M), qd("/api/v1.0/email/send-form", X))
    },
    Hh = {
        init: Sh,
        send: jh,
        sendForm: Uh,
        EmailJSResponseStatus: jn
    };

function Vd(c) {
    var d, p, o = "";
    if (typeof c == "string" || typeof c == "number") o += c;
    else if (typeof c == "object")
        if (Array.isArray(c)) {
            var A = c.length;
            for (d = 0; d < A; d++) c[d] && (p = Vd(c[d])) && (o && (o += " "), o += p)
        } else
            for (p in c) c[p] && (o && (o += " "), o += p);
    return o
}

function Xa() {
    for (var c, d, p = 0, o = "", A = arguments.length; p < A; p++)(c = arguments[p]) && (d = Vd(c)) && (o && (o += " "), o += d);
    return o
}

function Ch(c) {
    if (typeof document > "u") return;
    let d = document.head || document.getElementsByTagName("head")[0],
        p = document.createElement("style");
    p.type = "text/css", d.firstChild ? d.insertBefore(p, d.firstChild) : d.appendChild(p), p.styleSheet ? p.styleSheet.cssText = c : p.appendChild(document.createTextNode(c))
}
Ch(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var Dn = c => typeof c == "number" && !isNaN(c),
    Qa = c => typeof c == "string",
    We = c => typeof c == "function",
    Bh = c => Qa(c) || Dn(c),
    ps = c => Qa(c) || We(c) ? c : null,
    qh = (c, d) => c === !1 || Dn(c) && c > 0 ? c : d,
    bs = c => ct.isValidElement(c) || Qa(c) || We(c) || Dn(c);

function Yh(c, d, p = 300) {
    let {
        scrollHeight: o,
        style: A
    } = c;
    requestAnimationFrame(() => {
        A.minHeight = "initial", A.height = o + "px", A.transition = `all ${p}ms`, requestAnimationFrame(() => {
            A.height = "0", A.padding = "0", A.margin = "0", setTimeout(d, p)
        })
    })
}

function Gh({
    enter: c,
    exit: d,
    appendPosition: p = !1,
    collapse: o = !0,
    collapseDuration: A = 300
}) {
    return function({
        children: M,
        position: j,
        preventExitTransition: C,
        done: O,
        nodeRef: _,
        isIn: D,
        playToast: X
    }) {
        let W = p ? `${c}--${j}` : c,
            st = p ? `${d}--${j}` : d,
            dt = ct.useRef(0);
        return ct.useLayoutEffect(() => {
            let at = _.current,
                F = W.split(" "),
                lt = Y => {
                    Y.target === _.current && (X(), at.removeEventListener("animationend", lt), at.removeEventListener("animationcancel", lt), dt.current === 0 && Y.type !== "animationcancel" && at.classList.remove(...F))
                };
            at.classList.add(...F), at.addEventListener("animationend", lt), at.addEventListener("animationcancel", lt)
        }, []), ct.useEffect(() => {
            let at = _.current,
                F = () => {
                    at.removeEventListener("animationend", F), o ? Yh(at, O, A) : O()
                };
            D || (C ? F() : (dt.current = 1, at.className += ` ${st}`, at.addEventListener("animationend", F)))
        }, [D]), St.createElement(St.Fragment, null, M)
    }
}

function Od(c, d) {
    return {
        content: Kd(c.content, c.props),
        containerId: c.props.containerId,
        id: c.props.toastId,
        theme: c.props.theme,
        type: c.props.type,
        data: c.props.data || {},
        isLoading: c.props.isLoading,
        icon: c.props.icon,
        reason: c.removalReason,
        status: d
    }
}

function Kd(c, d, p = !1) {
    return ct.isValidElement(c) && !Qa(c.type) ? ct.cloneElement(c, {
        closeToast: d.closeToast,
        toastProps: d,
        data: d.data,
        isPaused: p
    }) : We(c) ? c({
        closeToast: d.closeToast,
        toastProps: d,
        data: d.data,
        isPaused: p
    }) : c
}

function Lh({
    closeToast: c,
    theme: d,
    ariaLabel: p = "close"
}) {
    return St.createElement("button", {
        className: `Toastify__close-button Toastify__close-button--${d}`,
        type: "button",
        onClick: o => {
            o.stopPropagation(), c(!0)
        },
        "aria-label": p
    }, St.createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16"
    }, St.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    })))
}

function Xh({
    delay: c,
    isRunning: d,
    closeToast: p,
    type: o = "default",
    hide: A,
    className: M,
    controlledProgress: j,
    progress: C,
    rtl: O,
    isIn: _,
    theme: D
}) {
    let X = A || j && C === 0,
        W = {
            animationDuration: `${c}ms`,
            animationPlayState: d ? "running" : "paused"
        };
    j && (W.transform = `scaleX(${C})`);
    let st = Xa("Toastify__progress-bar", j ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${D}`, `Toastify__progress-bar--${o}`, {
            "Toastify__progress-bar--rtl": O
        }),
        dt = We(M) ? M({
            rtl: O,
            type: o,
            defaultClassName: st
        }) : Xa(st, M),
        at = {
            [j && C >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: j && C < 1 ? null : () => {
                _ && p()
            }
        };
    return St.createElement("div", {
        className: "Toastify__progress-bar--wrp",
        "data-hidden": X
    }, St.createElement("div", {
        className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${D} Toastify__progress-bar--${o}`
    }), St.createElement("div", {
        role: "progressbar",
        "aria-hidden": X ? "true" : "false",
        "aria-label": "notification timer",
        className: dt,
        style: W,
        ...at
    }))
}
var Qh = 1,
    kd = () => `${Qh++}`;

function wh(c, d, p) {
    let o = 1,
        A = 0,
        M = [],
        j = [],
        C = d,
        O = new Map,
        _ = new Set,
        D = Y => (_.add(Y), () => _.delete(Y)),
        X = () => {
            j = Array.from(O.values()), _.forEach(Y => Y())
        },
        W = ({
            containerId: Y,
            toastId: q,
            updateId: k
        }) => {
            let Q = Y ? Y !== c : c !== 1,
                vt = O.has(q) && k == null;
            return Q || vt
        },
        st = (Y, q) => {
            O.forEach(k => {
                var Q;
                (q == null || q === k.props.toastId) && ((Q = k.toggle) == null || Q.call(k, Y))
            })
        },
        dt = Y => {
            var q, k;
            (k = (q = Y.props) == null ? void 0 : q.onClose) == null || k.call(q, Y.removalReason), Y.isActive = !1
        },
        at = Y => {
            if (Y == null) O.forEach(dt);
            else {
                let q = O.get(Y);
                q && dt(q)
            }
            X()
        },
        F = () => {
            A -= M.length, M = []
        },
        lt = Y => {
            var q, k;
            let {
                toastId: Q,
                updateId: vt
            } = Y.props, J = vt == null;
            Y.staleId && O.delete(Y.staleId), Y.isActive = !0, O.set(Q, Y), X(), p(Od(Y, J ? "added" : "updated")), J && ((k = (q = Y.props).onOpen) == null || k.call(q))
        };
    return {
        id: c,
        props: C,
        observe: D,
        toggle: st,
        removeToast: at,
        toasts: O,
        clearQueue: F,
        buildToast: (Y, q) => {
            if (W(q)) return;
            let {
                toastId: k,
                updateId: Q,
                data: vt,
                staleId: J,
                delay: P
            } = q, Mt = Q == null;
            Mt && A++;
            let Ft = { ...C,
                style: C.toastStyle,
                key: o++,
                ...Object.fromEntries(Object.entries(q).filter(([At, he]) => he != null)),
                toastId: k,
                updateId: Q,
                data: vt,
                isIn: !1,
                className: ps(q.className || C.toastClassName),
                progressClassName: ps(q.progressClassName || C.progressClassName),
                autoClose: q.isLoading ? !1 : qh(q.autoClose, C.autoClose),
                closeToast(At) {
                    O.get(k).removalReason = At, at(k)
                },
                deleteToast() {
                    let At = O.get(k);
                    if (At != null) {
                        if (p(Od(At, "removed")), O.delete(k), A--, A < 0 && (A = 0), M.length > 0) {
                            lt(M.shift());
                            return
                        }
                        X()
                    }
                }
            };
            Ft.closeButton = C.closeButton, q.closeButton === !1 || bs(q.closeButton) ? Ft.closeButton = q.closeButton : q.closeButton === !0 && (Ft.closeButton = bs(C.closeButton) ? C.closeButton : !0);
            let Ct = {
                content: Y,
                props: Ft,
                staleId: J
            };
            C.limit && C.limit > 0 && A > C.limit && Mt ? M.push(Ct) : Dn(P) ? setTimeout(() => {
                lt(Ct)
            }, P) : lt(Ct)
        },
        setProps(Y) {
            C = Y
        },
        setToggle: (Y, q) => {
            let k = O.get(Y);
            k && (k.toggle = q)
        },
        isToastActive: Y => {
            var q;
            return (q = O.get(Y)) == null ? void 0 : q.isActive
        },
        getSnapshot: () => j
    }
}
var Pt = new Map,
    On = [],
    xs = new Set,
    Zh = c => xs.forEach(d => d(c)),
    Jd = () => Pt.size > 0;

function Vh() {
    On.forEach(c => Wd(c.content, c.options)), On = []
}
var Kh = (c, {
    containerId: d
}) => {
    var p;
    return (p = Pt.get(d || 1)) == null ? void 0 : p.toasts.get(c)
};

function $d(c, d) {
    var p;
    if (d) return !!((p = Pt.get(d)) != null && p.isToastActive(c));
    let o = !1;
    return Pt.forEach(A => {
        A.isToastActive(c) && (o = !0)
    }), o
}

function kh(c) {
    if (!Jd()) {
        On = On.filter(d => c != null && d.options.toastId !== c);
        return
    }
    if (c == null || Bh(c)) Pt.forEach(d => {
        d.removeToast(c)
    });
    else if (c && ("containerId" in c || "id" in c)) {
        let d = Pt.get(c.containerId);
        d ? d.removeToast(c.id) : Pt.forEach(p => {
            p.removeToast(c.id)
        })
    }
}
var Jh = (c = {}) => {
    Pt.forEach(d => {
        d.props.limit && (!c.containerId || d.id === c.containerId) && d.clearQueue()
    })
};

function Wd(c, d) {
    bs(c) && (Jd() || On.push({
        content: c,
        options: d
    }), Pt.forEach(p => {
        p.buildToast(c, d)
    }))
}

function $h(c) {
    var d;
    (d = Pt.get(c.containerId || 1)) == null || d.setToggle(c.id, c.fn)
}

function Fd(c, d) {
    Pt.forEach(p => {
        (d == null || !(d != null && d.containerId) || d ? .containerId === p.id) && p.toggle(c, d ? .id)
    })
}

function Wh(c) {
    let d = c.containerId || 1;
    return {
        subscribe(p) {
            let o = wh(d, c, Zh);
            Pt.set(d, o);
            let A = o.observe(p);
            return Vh(), () => {
                A(), Pt.delete(d)
            }
        },
        setProps(p) {
            var o;
            (o = Pt.get(d)) == null || o.setProps(p)
        },
        getSnapshot() {
            var p;
            return (p = Pt.get(d)) == null ? void 0 : p.getSnapshot()
        }
    }
}

function Fh(c) {
    return xs.add(c), () => {
        xs.delete(c)
    }
}

function Ih(c) {
    return c && (Qa(c.toastId) || Dn(c.toastId)) ? c.toastId : kd()
}

function Rn(c, d) {
    return Wd(c, d), d.toastId
}

function Ju(c, d) {
    return { ...d,
        type: d && d.type || c,
        toastId: Ih(d)
    }
}

function $u(c) {
    return (d, p) => Rn(d, Ju(c, p))
}

function ht(c, d) {
    return Rn(c, Ju("default", d))
}
ht.loading = (c, d) => Rn(c, Ju("default", {
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1,
    ...d
}));

function Ph(c, {
    pending: d,
    error: p,
    success: o
}, A) {
    let M;
    d && (M = Qa(d) ? ht.loading(d, A) : ht.loading(d.render, { ...A,
        ...d
    }));
    let j = {
            isLoading: null,
            autoClose: null,
            closeOnClick: null,
            closeButton: null,
            draggable: null
        },
        C = (_, D, X) => {
            if (D == null) {
                ht.dismiss(M);
                return
            }
            let W = {
                    type: _,
                    ...j,
                    ...A,
                    data: X
                },
                st = Qa(D) ? {
                    render: D
                } : D;
            return M ? ht.update(M, { ...W,
                ...st
            }) : ht(st.render, { ...W,
                ...st
            }), X
        },
        O = We(c) ? c() : c;
    return O.then(_ => C("success", o, _)).catch(_ => C("error", p, _)), O
}
ht.promise = Ph;
ht.success = $u("success");
ht.info = $u("info");
ht.error = $u("error");
ht.warning = $u("warning");
ht.warn = ht.warning;
ht.dark = (c, d) => Rn(c, Ju("default", {
    theme: "dark",
    ...d
}));

function t1(c) {
    kh(c)
}
ht.dismiss = t1;
ht.clearWaitingQueue = Jh;
ht.isActive = $d;
ht.update = (c, d = {}) => {
    let p = Kh(c, d);
    if (p) {
        let {
            props: o,
            content: A
        } = p, M = {
            delay: 100,
            ...o,
            ...d,
            toastId: d.toastId || c,
            updateId: kd()
        };
        M.toastId !== c && (M.staleId = c);
        let j = M.render || A;
        delete M.render, Rn(j, M)
    }
};
ht.done = c => {
    ht.update(c, {
        progress: 1
    })
};
ht.onChange = Fh;
ht.play = c => Fd(!0, c);
ht.pause = c => Fd(!1, c);

function e1(c) {
    var d;
    let {
        subscribe: p,
        getSnapshot: o,
        setProps: A
    } = ct.useRef(Wh(c)).current;
    A(c);
    let M = (d = ct.useSyncExternalStore(p, o, o)) == null ? void 0 : d.slice();

    function j(C) {
        if (!M) return [];
        let O = new Map;
        return c.newestOnTop && M.reverse(), M.forEach(_ => {
            let {
                position: D
            } = _.props;
            O.has(D) || O.set(D, []), O.get(D).push(_)
        }), Array.from(O, _ => C(_[0], _[1]))
    }
    return {
        getToastToRender: j,
        isToastActive: $d,
        count: M ? .length
    }
}

function a1(c) {
    let [d, p] = ct.useState(!1), [o, A] = ct.useState(!1), M = ct.useRef(null), j = ct.useRef({
        start: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        didMove: !1
    }).current, {
        autoClose: C,
        pauseOnHover: O,
        closeToast: _,
        onClick: D,
        closeOnClick: X
    } = c;
    $h({
        id: c.toastId,
        containerId: c.containerId,
        fn: p
    }), ct.useEffect(() => {
        if (c.pauseOnFocusLoss) return W(), () => {
            st()
        }
    }, [c.pauseOnFocusLoss]);

    function W() {
        document.hasFocus() || lt(), window.addEventListener("focus", F), window.addEventListener("blur", lt)
    }

    function st() {
        window.removeEventListener("focus", F), window.removeEventListener("blur", lt)
    }

    function dt(J) {
        if (c.draggable === !0 || c.draggable === J.pointerType) {
            Y();
            let P = M.current;
            j.canCloseOnClick = !0, j.canDrag = !0, P.style.transition = "none", c.draggableDirection === "x" ? (j.start = J.clientX, j.removalDistance = P.offsetWidth * (c.draggablePercent / 100)) : (j.start = J.clientY, j.removalDistance = P.offsetHeight * (c.draggablePercent === 80 ? c.draggablePercent * 1.5 : c.draggablePercent) / 100)
        }
    }

    function at(J) {
        let {
            top: P,
            bottom: Mt,
            left: Ft,
            right: Ct
        } = M.current.getBoundingClientRect();
        J.nativeEvent.type !== "touchend" && c.pauseOnHover && J.clientX >= Ft && J.clientX <= Ct && J.clientY >= P && J.clientY <= Mt ? lt() : F()
    }

    function F() {
        p(!0)
    }

    function lt() {
        p(!1)
    }

    function Y() {
        j.didMove = !1, document.addEventListener("pointermove", k), document.addEventListener("pointerup", Q)
    }

    function q() {
        document.removeEventListener("pointermove", k), document.removeEventListener("pointerup", Q)
    }

    function k(J) {
        let P = M.current;
        if (j.canDrag && P) {
            j.didMove = !0, d && lt(), c.draggableDirection === "x" ? j.delta = J.clientX - j.start : j.delta = J.clientY - j.start, j.start !== J.clientX && (j.canCloseOnClick = !1);
            let Mt = c.draggableDirection === "x" ? `${j.delta}px, var(--y)` : `0, calc(${j.delta}px + var(--y))`;
            P.style.transform = `translate3d(${Mt},0)`, P.style.opacity = `${1-Math.abs(j.delta/j.removalDistance)}`
        }
    }

    function Q() {
        q();
        let J = M.current;
        if (j.canDrag && j.didMove && J) {
            if (j.canDrag = !1, Math.abs(j.delta) > j.removalDistance) {
                A(!0), c.closeToast(!0), c.collapseAll();
                return
            }
            J.style.transition = "transform 0.2s, opacity 0.2s", J.style.removeProperty("transform"), J.style.removeProperty("opacity")
        }
    }
    let vt = {
        onPointerDown: dt,
        onPointerUp: at
    };
    return C && O && (vt.onMouseEnter = lt, c.stacked || (vt.onMouseLeave = F)), X && (vt.onClick = J => {
        D && D(J), j.canCloseOnClick && _(!0)
    }), {
        playToast: F,
        pauseToast: lt,
        isRunning: d,
        preventExitTransition: o,
        toastRef: M,
        eventHandlers: vt
    }
}
var l1 = typeof window < "u" ? ct.useLayoutEffect : ct.useEffect,
    Wu = ({
        theme: c,
        type: d,
        isLoading: p,
        ...o
    }) => St.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: c === "colored" ? "currentColor" : `var(--toastify-icon-color-${d})`,
        ...o
    });

function n1(c) {
    return St.createElement(Wu, { ...c
    }, St.createElement("path", {
        d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
    }))
}

function u1(c) {
    return St.createElement(Wu, { ...c
    }, St.createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
    }))
}

function i1(c) {
    return St.createElement(Wu, { ...c
    }, St.createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
    }))
}

function c1(c) {
    return St.createElement(Wu, { ...c
    }, St.createElement("path", {
        d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
    }))
}

function s1() {
    return St.createElement("div", {
        className: "Toastify__spinner"
    })
}
var _s = {
        info: u1,
        warning: n1,
        success: i1,
        error: c1,
        spinner: s1
    },
    f1 = c => c in _s;

function o1({
    theme: c,
    type: d,
    isLoading: p,
    icon: o
}) {
    let A = null,
        M = {
            theme: c,
            type: d
        };
    return o === !1 || (We(o) ? A = o({ ...M,
        isLoading: p
    }) : ct.isValidElement(o) ? A = ct.cloneElement(o, M) : p ? A = _s.spinner() : f1(d) && (A = _s[d](M))), A
}
var r1 = c => {
        let {
            isRunning: d,
            preventExitTransition: p,
            toastRef: o,
            eventHandlers: A,
            playToast: M
        } = a1(c), {
            closeButton: j,
            children: C,
            autoClose: O,
            onClick: _,
            type: D,
            hideProgressBar: X,
            closeToast: W,
            transition: st,
            position: dt,
            className: at,
            style: F,
            progressClassName: lt,
            updateId: Y,
            role: q,
            progress: k,
            rtl: Q,
            toastId: vt,
            deleteToast: J,
            isIn: P,
            isLoading: Mt,
            closeOnClick: Ft,
            theme: Ct,
            ariaLabel: At
        } = c, he = Xa("Toastify__toast", `Toastify__toast-theme--${Ct}`, `Toastify__toast--${D}`, {
            "Toastify__toast--rtl": Q
        }, {
            "Toastify__toast--close-on-click": Ft
        }), He = We(at) ? at({
            rtl: Q,
            position: dt,
            type: D,
            defaultClassName: he
        }) : Xa(he, at), Bt = o1(c), T = !!k || !O, R = {
            closeToast: W,
            type: D,
            theme: Ct
        }, L = null;
        return j === !1 || (We(j) ? L = j(R) : ct.isValidElement(j) ? L = ct.cloneElement(j, R) : L = Lh(R)), St.createElement(st, {
            isIn: P,
            done: J,
            position: dt,
            preventExitTransition: p,
            nodeRef: o,
            playToast: M
        }, St.createElement("div", {
            id: vt,
            tabIndex: 0,
            onClick: _,
            "data-in": P,
            className: He,
            ...A,
            style: F,
            ref: o,
            ...P && {
                role: q,
                "aria-label": At
            }
        }, Bt != null && St.createElement("div", {
            className: Xa("Toastify__toast-icon", {
                "Toastify--animate-icon Toastify__zoom-enter": !Mt
            })
        }, Bt), Kd(C, c, !d), L, !c.customProgressBar && St.createElement(Xh, { ...Y && !T ? {
                key: `p-${Y}`
            } : {},
            rtl: Q,
            theme: Ct,
            delay: O,
            isRunning: d,
            isIn: P,
            closeToast: W,
            hide: X,
            type: D,
            className: lt,
            controlledProgress: T,
            progress: k || 0
        })))
    },
    d1 = (c, d = !1) => ({
        enter: `Toastify--animate Toastify__${c}-enter`,
        exit: `Toastify--animate Toastify__${c}-exit`,
        appendPosition: d
    }),
    m1 = Gh(d1("bounce", !0)),
    y1 = {
        position: "top-right",
        transition: m1,
        autoClose: 5e3,
        closeButton: !0,
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        draggable: "touch",
        draggablePercent: 80,
        draggableDirection: "x",
        role: "alert",
        theme: "light",
        "aria-label": "Notifications Alt+T",
        hotKeys: c => c.altKey && c.code === "KeyT"
    };

function h1(c) {
    let d = { ...y1,
            ...c
        },
        p = c.stacked,
        [o, A] = ct.useState(!0),
        M = ct.useRef(null),
        {
            getToastToRender: j,
            isToastActive: C,
            count: O
        } = e1(d),
        {
            className: _,
            style: D,
            rtl: X,
            containerId: W,
            hotKeys: st
        } = d;

    function dt(F) {
        let lt = Xa("Toastify__toast-container", `Toastify__toast-container--${F}`, {
            "Toastify__toast-container--rtl": X
        });
        return We(_) ? _({
            position: F,
            rtl: X,
            defaultClassName: lt
        }) : Xa(lt, ps(_))
    }

    function at() {
        p && (A(!0), ht.play())
    }
    return l1(() => {
        var F;
        if (p) {
            let lt = M.current.querySelectorAll('[data-in="true"]'),
                Y = 12,
                q = (F = d.position) == null ? void 0 : F.includes("top"),
                k = 0,
                Q = 0;
            Array.from(lt).reverse().forEach((vt, J) => {
                let P = vt;
                P.classList.add("Toastify__toast--stacked"), J > 0 && (P.dataset.collapsed = `${o}`), P.dataset.pos || (P.dataset.pos = q ? "top" : "bot");
                let Mt = k * (o ? .2 : 1) + (o ? 0 : Y * J);
                P.style.setProperty("--y", `${q?Mt:Mt*-1}px`), P.style.setProperty("--g", `${Y}`), P.style.setProperty("--s", `${1-(o?Q:0)}`), k += P.offsetHeight, Q += .025
            })
        }
    }, [o, O, p]), ct.useEffect(() => {
        function F(lt) {
            var Y;
            let q = M.current;
            st(lt) && ((Y = q.querySelector('[tabIndex="0"]')) == null || Y.focus(), A(!1), ht.pause()), lt.key === "Escape" && (document.activeElement === q || q != null && q.contains(document.activeElement)) && (A(!0), ht.play())
        }
        return document.addEventListener("keydown", F), () => {
            document.removeEventListener("keydown", F)
        }
    }, [st]), St.createElement("section", {
        ref: M,
        className: "Toastify",
        id: W,
        onMouseEnter: () => {
            p && (A(!1), ht.pause())
        },
        onMouseLeave: at,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": d["aria-label"]
    }, j((F, lt) => {
        let Y = lt.length ? { ...D
        } : { ...D,
            pointerEvents: "none"
        };
        return St.createElement("div", {
            tabIndex: -1,
            className: dt(F),
            "data-stacked": p,
            style: Y,
            key: `c-${F}`
        }, lt.map(({
            content: q,
            props: k
        }) => St.createElement(r1, { ...k,
            stacked: p,
            collapseAll: at,
            isIn: C(k.toastId, k.containerId),
            key: `t-${k.key}`
        }, q)))
    }))
}
const v1 = () => {
        const [c, d] = ct.useState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            legalMatter: "",
            message: ""
        }), [p, o] = ct.useState(!1), A = j => {
            d({ ...c,
                [j.target.name]: j.target.value
            })
        }, M = j => {
            o(!0), j.preventDefault();
            const C = "service_eaju41s",
                O = "template_ynxmyji",
                _ = "wvNwPwVjg22NbwRbb",
                D = {
                    first_name: c.firstName,
                    last_name: c.lastName,
                    email: c.email,
                    phone: c.phone,
                    legal_matter: c.legalMatter,
                    message: c.message
                };
            Hh.send(C, O, D, _).then(X => {
                o(!1), ht.success("Message sent successfully!"), d({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    legalMatter: "",
                    message: ""
                })
            }).catch(X => {
                o(!1), ht.error("Something went wrong. Please try again later.")
            })
        };
        return r.jsxs("section", {
            id: "contact",
            className: "py-20 md:py-32",
            children: [r.jsx(h1, {}), r.jsxs("div", {
                className: "container mx-auto px-6",
                children: [r.jsxs("div", {
                    className: "text-center space-y-4 mb-16",
                    children: [r.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold text-gray-900",
                        children: "Get Started Today"
                    }), r.jsx("p", {
                        className: "text-xl text-gray-600 max-w-3xl mx-auto",
                        children: "Let’s talk about how we can support your energy project or legal advisory needs."
                    })]
                }), r.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto",
                    children: [r.jsxs("div", {
                        className: "space-y-8",
                        children: [r.jsxs("div", {
                            className: "grid grid-cols-2 gap-6",
                            children: [r.jsx("div", {
                                className: "border border-gray-200 rounded-lg",
                                children: r.jsxs("div", {
                                    className: "p-6 text-center",
                                    children: [r.jsx(Hd, {
                                        className: "w-8 h-8 text-primary-clr mx-auto mb-3"
                                    }), r.jsx("div", {
                                        className: "font-semibold text-gray-900",
                                        children: "Call Us"
                                    }), r.jsx("div", {
                                        className: "text-gray-600",
                                        children: "+234 906 049 0067"
                                    })]
                                })
                            }), r.jsx("div", {
                                className: "border border-gray-200 rounded-lg",
                                children: r.jsxs("div", {
                                    className: "p-6 text-center",
                                    children: [r.jsx(Rd, {
                                        className: "w-8 h-8 text-primary-clr mx-auto mb-3"
                                    }), r.jsx("div", {
                                        className: "font-semibold text-gray-900",
                                        children: "Email Us"
                                    }), r.jsx("div", {
                                        className: "text-gray-600",
                                        children: "advisory@atom-energylaw.com"
                                    })]
                                })
                            })]
                        }), r.jsx("div", {
                            className: "border border-gray-200 rounded-lg",
                            children: r.jsx("div", {
                                className: "p-6",
                                children: r.jsxs("div", {
                                    className: "flex items-start space-x-4",
                                    children: [r.jsx(Ud, {
                                        className: "w-6 h-6 text-primary-clr mt-1"
                                    }), r.jsxs("div", {
                                        children: [r.jsx("div", {
                                            className: "font-semibold text-gray-900 mb-2",
                                            children: "Visit Our Office"
                                        }), r.jsx("div", {
                                            className: "text-gray-600",
                                            children: "No. 32 Obi Okosi, Gwarinpa-FCT"
                                        })]
                                    })]
                                })
                            })
                        })]
                    }), r.jsx("form", {
                        onSubmit: M,
                        children: r.jsxs("div", {
                            className: "bg-white p-5 border border-gray-200 rounded-lg",
                            children: [r.jsxs("div", {
                                className: "mb-8",
                                children: [r.jsx("div", {
                                    className: "text-slate-900 font-bold text-2xl mb-2",
                                    children: "Send Us a Message"
                                }), r.jsx("div", {
                                    className: "text-slate-500 text-sm",
                                    children: "Fill out the form below and we'll get back to you within 24 hours."
                                })]
                            }), r.jsxs("div", {
                                className: "space-y-4",
                                children: [r.jsxs("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [r.jsx(Mn, {
                                        label: "First Name",
                                        name: "firstName",
                                        type: "text",
                                        placeholder: "John",
                                        value: c.firstName,
                                        onChange: A
                                    }), r.jsx(Mn, {
                                        label: "Last Name",
                                        name: "lastName",
                                        type: "text",
                                        placeholder: "Doe",
                                        value: c.lastName,
                                        onChange: A
                                    })]
                                }), r.jsx(Mn, {
                                    label: "Email",
                                    name: "email",
                                    type: "email",
                                    placeholder: "john@example.com",
                                    value: c.email,
                                    onChange: A
                                }), r.jsx(Mn, {
                                    label: "Phone",
                                    name: "phone",
                                    type: "tel",
                                    placeholder: "(555) 123-4567",
                                    value: c.phone,
                                    onChange: A
                                }), r.jsx(Mn, {
                                    label: "Legal Matter",
                                    name: "legalMatter",
                                    type: "text",
                                    placeholder: "Brief description of your legal needs",
                                    value: c.legalMatter,
                                    onChange: A
                                }), r.jsxs("div", {
                                    children: [r.jsx("label", {
                                        className: "text-sm font-medium text-slate-700 mb-2 block",
                                        children: "How can we help you?"
                                    }), r.jsx("textarea", {
                                        name: "message",
                                        id: "message",
                                        rows: 4,
                                        required: !0,
                                        placeholder: "Please briefly describe your legal situation",
                                        className: "text-gray-600 px-4 py-2 text-sm border border-gray-300 rounded-md w-full placeholder:text-gray-400 focus:border-2 focus:border-black focus:outline-offset-5 focus:outline-gray-400 focus:rounded-md",
                                        value: c.message,
                                        onChange: A
                                    })]
                                }), r.jsxs("button", {
                                    type: "submit",
                                    className: "flex items-center justify-center gap-3 w-full bg-primary-clr hover:bg-primary-dull text-white font-semibold rounded-md py-2 cursor-pointer",
                                    children: [r.jsx(Dd, {
                                        className: "w-4 h-4"
                                    }), p ? "Sending message....." : "Send Message"]
                                }), r.jsx("p", {
                                    className: "text-xs text-gray-500 text-center",
                                    children: "All consultations are confidential. We'll never share your information"
                                })]
                            })]
                        })
                    })]
                })]
            })]
        })
    },
    g1 = () => r.jsx("footer", {
        className: "border-t border-gray-200 bg-gray-50",
        children: r.jsxs("div", {
            className: "container mx-auto px-6 py-12",
            children: [r.jsxs("div", {
                className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4",
                children: [r.jsxs("div", {
                    className: "space-y-4",
                    children: [r.jsx(Bd, {}), r.jsx("p", {
                        className: "text-gray-600 text-sm",
                        children: "Providing exceptional legal representation to our community"
                    })]
                }), r.jsxs("div", {
                    className: "space-y-4",
                    children: [r.jsx("h3", {
                        className: "font-semibold text-gray-900",
                        children: "Practice Areas"
                    }), r.jsxs("ul", {
                        className: "space-y-2 text-sm text-gray-600",
                        children: [r.jsx("li", {
                            children: r.jsx("a", {
                                href: "#",
                                className: "hover:text-blue-900 transition-colors",
                                children: "Regulatory Consulting & Compliance"
                            })
                        }), r.jsx("li", {
                            children: r.jsx("a", {
                                href: "#",
                                className: "hover:text-blue-900 transition-colors",
                                children: "Corporate & Commercial Advisory"
                            })
                        }), r.jsx("li", {
                            children: r.jsx("a", {
                                href: "#",
                                className: "hover:text-blue-900 transition-colors",
                                children: "Energy Disputes & Conflict Management"
                            })
                        }), r.jsx("li", {
                            children: r.jsx("a", {
                                href: "#",
                                className: "hover:text-blue-900 transition-colors",
                                children: "Public Sector & Government Relations"
                            })
                        })]
                    })]
                }), r.jsxs("div", {
                    className: "space-y-4",
                    children: [r.jsx("h3", {
                        className: "font-semibold text-gray-900",
                        children: "Contact Info"
                    }), r.jsxs("ul", {
                        className: "space-y-2 text-sm text-gray-600",
                        children: [r.jsxs("li", {
                            className: "flex items-center space-x-2",
                            children: [r.jsx(Hd, {
                                className: "h-4 w-4"
                            }), r.jsx("span", {
                                children: "+234 906 049 0067"
                            })]
                        }), r.jsxs("li", {
                            className: "flex items-center space-x-2",
                            children: [r.jsx(Rd, {
                                className: "h-4 w-4"
                            }), r.jsx("span", {
                                children: "advisory@atom-energylaw.com"
                            })]
                        }), r.jsxs("li", {
                            className: "flex md:items-center space-x-2",
                            children: [r.jsx(Ud, {
                                className: "h-4 w-4"
                            }), r.jsx("span", {
                                children: " No. 32 Obi Okosi Street, Gwarinpa-FCT"
                            })]
                        })]
                    })]
                })]
            }), r.jsxs("div", {
                className: "border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600",
                children: [r.jsxs("p", {
                    children: ["© ", new Date().getFullYear(), " Atom Energy Law Advisory. All rights reserved."]
                }), r.jsx("p", {
                    children: r.jsx("a", {
                        href: `
            https://www.linkedin.com/company/atom-energy-law-advisory/`,
                        target: "_black",
                        className: "hover:text-blue-500",
                        children: "Linkedin"
                    })
                }), r.jsx("p", {
                    children: "Terms of Use | Privacy Policy"
                })]
            })]
        })
    }),
    p1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc4AAAAYCAYAAABz9h02AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPOSURBVHgB7d1PchJNGMfx52l4X905B9BybhBuIDmB3kCv4S6ucgzLk4i6cIs3GG+AGy2LzDx29/xxZgIBwkQg+X6qSMEMQ2VB58fzdNMRAQAAa6UXH5P08mtaP1YBAABRCMjclhMdSSomZ6o29VGZVqczLfJzghMA8OCsCMiJqIb7yY0XqszGAgDAPRTCcVkUiXP5RJ2chVCsA9Jsmbj6iVr9sG1e1RKCEwBwcsK8ozx6nFzJVapi8eYD8blqqBhjOCYhHMeuddFOAbmaFfKJVi0A4CjUYRirRM19EPoK0cXW6fNYLbrQVo0BmWxsqQ7O/PymfMjevrggOAEAe2uvOg3Bp87fzBLRMuBiRRg4fVK2TKU8Z9Vx0VSOgdrC/36Zmc6dyjfRfCY/JcsuzhfNUwQYSHvg9NUDad359gDbpBmA26oGqgwkfuoFtmGyMH+T21B/XWE/ZGhbjIcm1NrCGJX+dZrKqeoHpOSZFDLP3p5nGy8VnIS6hdE+Fnr79f1VwRNbHIV13+h+DqD/2iuDYOUgidcfoEUCALfQCkf/N+2HSTEfjWQuuSy2Cci1Lyu4Ub+K6ldOgwaW9SspTQUAsIZl/seiDkbnNIuVo0rWb68O6V4FZx1yTX+9aul1gqwKsE4roh1YVFQAcEBlGIrpwsQHoMV2tb9fZCPnj4dQ3LNi3NdRB2fzHZx6dVUIwvbEchmMCWEHAIcWA68Wgy/M0zZzvFUA+qpwkRf5IoZgEc/F6w4ZhLs6WHCGObvlf/+nIRTjzg31cuPw5dQ4t6ap4MR0Bk5fOZDW0R0WUZh9lx3UA1UGMqoGOrBJLrdfSKbiUrkjoXq76Xwr1FoH/eO8e+yUwm5IdxqcTTiGXRuaL6duua0RuspJ7u4b2UI/vz6/IniqT3idQysGzLaDJPrtWyR3NG8AAKdgkODsBKSTM42fskLlqKmcuuuB1a2c9gms65VL5/FD/TQHAMds5+AMIXn1aDxxzgfj9Z3jD+tvyP2dWA5aQdYOsCa4etUVgQUAWGdjcMYd5GU5LSvJGJIT+VfqIPQtyXp1VVhu3EwsV6uraB8CAP6Va8EZgrJwy1d3Xk021aHOQ6sz7NwQA7GsAjOqPgDAMYrB+fTyy9S3Xl/6ivLV8EEZVlr6cCzs+1C7NgAAcCj67PLzG+fkveytF5AiM8IRAHDfjH2L9LXszMLef7O4MW6Rz/0c45w5RgDAQ7DdP7I2mZnZN+eKmfzylSQhCQB4oMZq+TvT0bRz1Aelmn0S8UFJNQkAQCMuDkovP6a5yDSuaCUoAQBY6w9r8v5oaUvbhQAAAABJRU5ErkJggg==";

function b1({
    images: c,
    interval: d = 5e3,
    className: p,
    ...o
}) {
    const [A, M] = ct.useState(0);
    return ct.useEffect(() => {
        if (c.length <= 1) return;
        const j = setInterval(() => {
            M(C => (C + 1) % c.length)
        }, d);
        return () => clearInterval(j)
    }, [c.length, d]), r.jsxs("div", {
        className: `relative h-screen w-full overflow-hidden, ${p}`,
        ...o,
        children: [c.map((j, C) => r.jsx("img", {
            src: j.src || "/placeholder.svg",
            alt: j.alt,
            sizes: "100vw",
            priority: C === 0,
            className: `absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out h-screen w-full
            ${C===A?"opacity-100":"opacity-0"} `
        }, j.src)), r.jsx("div", {
            className: "absolute inset-0 bg-black/50 z-10"
        }), r.jsx("div", {
            className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2",
            children: c.map((j, C) => r.jsx("button", {
                className: `
              h-2 w-2 rounded-full bg-white transition-all
              ${C===A?"w-6":"opacity-50"} `,
                "aria-label": `Go to slide ${C+1}`,
                onClick: () => M(C)
            }, C))
        })]
    })
}
const x1 = () => r.jsxs("section", {
        id: "home",
        className: "relative w-full",
        children: [r.jsx(b1, {
            images: gh
        }), r.jsx("div", {
            className: "container mx-auto px-6 mt-10 ",
            children: r.jsxs("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white z-20",
                children: [r.jsxs("div", {
                    className: "space-y-6",
                    children: [r.jsxs("h1", {
                        className: "text-4xl md:text-6xl font-bold text-white leading-tight",
                        children: ["Your Trusted Legal and Business Advisory Partner", r.jsx("br", {}), r.jsxs("div", {
                            className: "relative mb-10 w-full",
                            children: [r.jsx("span", {
                                children: " in the Energy Sector."
                            }), r.jsx("img", {
                                src: p1,
                                alt: "",
                                className: "absolute right-1/2 translate-x-[130px] -translate-y-[] w-52 md:translate-x-[250px] md:w-96 hidden md:block"
                            })]
                        })]
                    }), r.jsx("p", {
                        className: "text-xl text-white max-w-3xl mx-auto leading-relaxed",
                        children: "Boutique legal expertise for organisations navigating Nigeria’s dynamic oil & gas, power, mining, and maritime industries."
                    })]
                }), r.jsx("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center mt-5",
                    children: r.jsx("a", {
                        href: "",
                        children: r.jsx("button", {
                            className: "flex items-center rounded-md border border-gray-300 text-white font-semibold hover:bg-black/50 px-8 py-3 bg-primary-clr transition duration-300 cursor-pointer",
                            children: "Explore Our Services"
                        })
                    })
                })]
            })
        })]
    }),
    _1 = () => r.jsx("section", {
        id: "practice",
        className: "py-20 md:py-32",
        children: r.jsxs("div", {
            className: "container mx-auto px-6",
            children: [r.jsxs("div", {
                className: "text-center space-y-4 mb-16",
                children: [r.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold text-gray-900",
                    children: "Our Practice Areas"
                }), r.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "We offer a full suite of legal and strategic advisory services spanning the entire energy value chain:"
                })]
            }), r.jsx("div", {
                className: "border border-gray-200 bg-blue-50 rounded-lg",
                children: r.jsx("div", {
                    className: "p-6",
                    children: r.jsxs("ul", {
                        className: "space-y-2 text-xl text-gray-600",
                        children: [r.jsxs("li", {
                            className: "flex  items-center",
                            children: [r.jsx(La, {
                                className: "max-w-4 h-4 text-primary-clr mr-2"
                            }), "Regulatory Consulting & Compliance"]
                        }), r.jsxs("li", {
                            className: "flex items-center",
                            children: [r.jsx(La, {
                                className: "max-w-4 h-4 text-primary-clr mr-2"
                            }), "Corporate & Commercial Advisory"]
                        }), r.jsxs("li", {
                            className: "flex items-center",
                            children: [r.jsx(La, {
                                className: "max-w-4 h-4 text-primary-clr mr-2"
                            }), "Project Structuring & Transaction Support"]
                        }), r.jsxs("li", {
                            className: "flex items-center",
                            children: [r.jsx(La, {
                                className: "max-w-4 h-4 text-primary-clr mr-2"
                            }), "Policy & Legislative Advisory"]
                        }), r.jsxs("li", {
                            className: "flex items-center",
                            children: [r.jsx(La, {
                                className: "max-w-4 h-4 text-primary-clr mr-2"
                            }), "Energy Disputes & Conflict Management"]
                        }), r.jsxs("li", {
                            className: "flex items-center",
                            children: [r.jsx(La, {
                                className: "max-w-4 h-4 text-primary-clr mr-2"
                            }), "Public Sector & Government Relations"]
                        }), r.jsxs("li", {
                            className: "flex items-center",
                            children: [r.jsx(La, {
                                className: "max-w-4 h-4 text-primary-clr mr-2"
                            }), "Local Content Advisory"]
                        })]
                    })
                })
            })]
        })
    }),
    T1 = () => r.jsx("section", {
        id: "insights",
        className: "py-20 md:py-32",
        children: r.jsxs("div", {
            className: "container mx-auto px-6",
            children: [r.jsxs("div", {
                className: "text-center space-y-4 mb-16",
                children: [r.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold text-gray-900",
                    children: "Insights"
                }), r.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Stay updated with thought leadership, regulatory alerts, and energy sector briefings from our experts."
                })]
            }), r.jsx("div", {
                className: "text-center",
                children: "Coming Soon - Our Insights Hub"
            })]
        })
    }),
    S1 = () => r.jsx("section", {
        id: "services",
        className: "py-20 md:py-32",
        children: r.jsxs("div", {
            className: "container mx-auto px-6",
            children: [r.jsxs("div", {
                className: "text-center space-y-4 mb-16",
                children: [r.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold text-gray-900",
                    children: "Services"
                }), r.jsx("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "We support our clients across every stage of their project lifecycle:"
                })]
            }), r.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto",
                children: ph.map((c, d) => r.jsx("div", {
                    className: "border border-gray-200 rounded-lg hover:shadow-lg transition-shadow p-5",
                    children: r.jsxs("div", {
                        className: "text-center",
                        children: [r.jsx("div", {
                            className: "w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4",
                            children: r.jsx(c.icon, {
                                className: "h-8 w-8 text-primary-clr"
                            })
                        }), r.jsx("div", {
                            className: "text-gray-900 mb-2 font-semibold",
                            children: c.title
                        }), r.jsx("div", {
                            className: "text-gray-600",
                            children: c.description
                        })]
                    })
                }, d))
            })]
        })
    }),
    A1 = () => r.jsx("section", {
        className: "py-24 bg-gradient-subtle",
        children: r.jsxs("div", {
            className: "container mx-auto px-6",
            children: [r.jsxs("div", {
                className: "text-center mb-16",
                children: [r.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-primary mb-6",
                    children: "Our Sectors"
                }), r.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed",
                    children: "We focus exclusively on four key sectors where legal clarity meets operational complexity:"
                })]
            }), r.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: bh.map((c, d) => r.jsx("div", {
                    className: "group relative overflow-hidden bg-card hover:shadow-elegant transition-all duration-500 shadow-card hover:scale-105 animate-fade-in rounded-lg",
                    style: {
                        animationDelay: `${d*100}ms`
                    },
                    children: r.jsxs("div", {
                        className: "p-8",
                        children: [r.jsxs("div", {
                            className: "relative z-10",
                            children: [r.jsx("div", {
                                className: "flex items-center justify-center w-16 h-16 bg-blue-100  rounded-2xl mb-6 group-hover:animate-float transition-all duration-500",
                                children: r.jsx(c.icon, {
                                    className: "w-8 h-8 text-primary-clr"
                                })
                            }), r.jsx("h3", {
                                className: "font-semibold text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300",
                                children: c.title
                            }), r.jsx("p", {
                                className: "text-muted-foreground group-hover:text-foreground transition-colors duration-300",
                                children: c.description
                            })]
                        }), r.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-primary-clr shadow-2xl to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        }), r.jsx("div", {
                            className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        })]
                    })
                }, c.title))
            })]
        })
    }),
    E1 = () => r.jsxs("div", {
        children: [r.jsx(xh, {}), r.jsxs("main", {
            className: "flex-1",
            children: [r.jsx(x1, {}), r.jsx(_h, {}), r.jsx(_1, {}), r.jsx(A1, {}), r.jsx(S1, {}), r.jsx(T1, {}), r.jsx(v1, {})]
        }), r.jsx(g1, {})]
    });

function N1() {
    return r.jsx("div", {
        className: "flex flex-col min-h-screen bg-white overflow-hidden font-display",
        children: r.jsx(E1, {})
    })
}
jy.createRoot(document.getElementById("root")).render(r.jsx(ct.StrictMode, {
    children: r.jsx(N1, {})
}));