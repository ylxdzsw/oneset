// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually
;(async () => {

function t() {
    var t, e = arguments, n = e[0], o = "https://stdlib.io/e/" + n + "?";
    for(t = 1; t < e.length; t++)o += "&arg[]=" + encodeURIComponent(e[t]);
    return o;
}
var t1 = "function" == typeof Object.defineProperty ? Object.defineProperty : null;
var r = Object.defineProperty, o = Object.prototype, l = o.toString, n = o.__defineGetter__, _ = o.__defineSetter__, c = o.__lookupGetter__, i = o.__lookupSetter__;
var p = function() {
    try {
        return t1({}, "x", {}), !0;
    } catch (e) {
        return !1;
    }
}() ? r : function(t1, r, p) {
    var a, f, u, j;
    if ("object" != typeof t1 || null === t1 || "[object Array]" === l.call(t1)) throw new TypeError(t("0jK3X", t1));
    if ("object" != typeof p || null === p || "[object Array]" === l.call(p)) throw new TypeError(t("0jKBk", p));
    if ((f = "value" in p) && (c.call(t1, r) || i.call(t1, r) ? (a = t1.__proto__, t1.__proto__ = o, delete t1[r], t1[r] = p.value, t1.__proto__ = a) : t1[r] = p.value), u = "get" in p, j = "set" in p, f && (u || j)) throw new Error(t("0jK1n"));
    return u && n && n.call(t1, r, p.get), j && _ && _.call(t1, r, p.set), t1;
};
function t2(t, i, r) {
    p(t, i, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: r
    });
}
var a = Math.floor;
function e(e) {
    return a(e) === e && e >= 0;
}
function t3(t) {
    return t != t;
}
function o1() {
    return "function" == typeof Symbol && "symbol" == typeof Symbol("foo");
}
var s = o1();
function o2() {
    return s && "symbol" == typeof Symbol.toStringTag;
}
var t4 = Object.prototype.hasOwnProperty;
function r1(r, e) {
    return null != r && t4.call(r, e);
}
var o3 = "function" == typeof Symbol ? Symbol : void 0;
var e1 = Object.prototype.toString;
var n1 = "function" == typeof o3 ? o3.toStringTag : "";
var o4 = o2() ? function(t) {
    var s, o, i;
    if (null == t) return e1.call(t);
    o = t[n1], s = r1(t, n1);
    try {
        t[n1] = void 0;
    } catch (r) {
        return e1.call(t);
    }
    return i = e1.call(t), s ? t[n1] = o : delete t[n1], i;
} : function(t) {
    return e1.call(t);
};
var n2 = "function" == typeof Uint32Array;
function r2(r) {
    return n2 && r instanceof Uint32Array || "[object Uint32Array]" === o4(r);
}
var a1 = 4294967295;
var r3 = "function" == typeof Uint32Array ? Uint32Array : null;
function s1() {
    var s, i;
    if ("function" != typeof r3) return !1;
    try {
        i = new r3(i = [
            1,
            3.14,
            -3.14,
            a1 + 1,
            a1 + 2
        ]), s = r2(i) && 1 === i[0] && 3 === i[1] && i[2] === a1 - 2 && 0 === i[3] && 1 === i[4];
    } catch (t) {
        s = !1;
    }
    return s;
}
function t5() {
    var t, e = arguments, n = e[0], o = "https://stdlib.io/e/" + n + "?";
    for(t = 1; t < e.length; t++)o += "&arg[]=" + encodeURIComponent(e[t]);
    return o;
}
var s2 = "function" == typeof Uint32Array ? Uint32Array : void 0;
var o5 = s1() ? s2 : function() {
    throw new Error(t5("02R00,Cw"));
};
var s3 = o1();
function o6() {
    return s3 && "symbol" == typeof Symbol.toStringTag;
}
var t6 = Object.prototype.hasOwnProperty;
function r4(r, e) {
    return null != r && t6.call(r, e);
}
var o7 = "function" == typeof Symbol ? Symbol : void 0;
var e2 = Object.prototype.toString;
var n3 = "function" == typeof o7 ? o7.toStringTag : "";
var o8 = o6() ? function(t) {
    var s, o, i;
    if (null == t) return e2.call(t);
    o = t[n3], s = r4(t, n3);
    try {
        t[n3] = void 0;
    } catch (r) {
        return e2.call(t);
    }
    return i = e2.call(t), s ? t[n3] = o : delete t[n3], i;
} : function(t) {
    return e2.call(t);
};
var r5 = "function" == typeof Float64Array;
function a2(a) {
    return r5 && a instanceof Float64Array || "[object Float64Array]" === o8(a);
}
var r6 = "function" == typeof Float64Array ? Float64Array : null;
function a3() {
    var a, n;
    if ("function" != typeof r6) return !1;
    try {
        n = new r6([
            1,
            3.14,
            -3.14,
            NaN
        ]), a = a2(n) && 1 === n[0] && 3.14 === n[1] && -3.14 === n[2] && n[3] != n[3];
    } catch (t) {
        a = !1;
    }
    return a;
}
var o9 = "function" == typeof Float64Array ? Float64Array : void 0;
var s4 = a3() ? o9 : function() {
    throw new Error(t5("00n00,Cw"));
};
function o10() {
    return "function" == typeof Symbol && "symbol" == typeof Symbol("foo");
}
var s5 = o10();
function o11() {
    return s5 && "symbol" == typeof Symbol.toStringTag;
}
var t7 = Object.prototype.hasOwnProperty;
function r7(r, e) {
    return null != r && t7.call(r, e);
}
var e3 = Object.prototype.toString;
var n4 = "function" == typeof o3 ? o3.toStringTag : "";
var o12 = o11() ? function(t) {
    var s, o, i;
    if (null == t) return e3.call(t);
    o = t[n4], s = r7(t, n4);
    try {
        t[n4] = void 0;
    } catch (r) {
        return e3.call(t);
    }
    return i = e3.call(t), s ? t[n4] = o : delete t[n4], i;
} : function(t) {
    return e3.call(t);
};
var n5 = "function" == typeof Uint8Array;
function r8(r) {
    return n5 && r instanceof Uint8Array || "[object Uint8Array]" === o12(r);
}
var a4 = 255;
var r9 = "function" == typeof Uint8Array ? Uint8Array : null;
function s6() {
    var s, i;
    if ("function" != typeof r9) return !1;
    try {
        i = new r9(i = [
            1,
            3.14,
            -3.14,
            a4 + 1,
            a4 + 2
        ]), s = r8(i) && 1 === i[0] && 3 === i[1] && i[2] === a4 - 2 && 0 === i[3] && 1 === i[4];
    } catch (t) {
        s = !1;
    }
    return s;
}
function t8() {
    var t, e = arguments, n = e[0], o = "https://stdlib.io/e/" + n + "?";
    for(t = 1; t < e.length; t++)o += "&arg[]=" + encodeURIComponent(e[t]);
    return o;
}
var s7 = "function" == typeof Uint8Array ? Uint8Array : void 0;
var o13 = s6() ? s7 : function() {
    throw new Error(t8("02T00,Cw"));
};
var n6 = "function" == typeof Uint16Array;
function r10(r) {
    return n6 && r instanceof Uint16Array || "[object Uint16Array]" === o12(r);
}
var a5 = 65535;
var r11 = "function" == typeof Uint16Array ? Uint16Array : null;
function s8() {
    var s, i;
    if ("function" != typeof r11) return !1;
    try {
        i = new r11(i = [
            1,
            3.14,
            -3.14,
            a5 + 1,
            a5 + 2
        ]), s = r10(i) && 1 === i[0] && 3 === i[1] && i[2] === a5 - 2 && 0 === i[3] && 1 === i[4];
    } catch (t) {
        s = !1;
    }
    return s;
}
var s9 = "function" == typeof Uint16Array ? Uint16Array : void 0;
var o14 = s8() ? s9 : function() {
    throw new Error(t8("02P00,Cw"));
};
var n7, r12 = {
    uint16: o14,
    uint8: o13
};
(n7 = new r12.uint16(1))[0] = 4660;
var e4 = 52 === new r12.uint8(n7.buffer)[0];
var r13 = !0 === e4 ? 1 : 0, i1 = new s4(1), n8 = new o5(i1.buffer);
function d(t) {
    return i1[0] = t, n8[r13];
}
var r14 = !0 === e4 ? 1 : 0, i2 = new s4(1), n9 = new o5(i2.buffer);
function d1(t, s) {
    return i2[0] = t, n9[r14] = s >>> 0, i2[0];
}
var r15, i3;
!0 === e4 ? (r15 = 1, i3 = 0) : (r15 = 0, i3 = 1);
var n10 = {
    HIGH: r15,
    LOW: i3
}, d2 = new s4(1), m = new o5(d2.buffer), a6 = n10.HIGH, l1 = n10.LOW;
function j(t, s) {
    return m[a6] = t, m[l1] = s, d2[0];
}
var I = Number.POSITIVE_INFINITY;
var a7 = Number;
var e5 = a7.NEGATIVE_INFINITY;
var a8 = 1023;
var a9 = .34657359027997264;
var o15 = .6931471803691238, f = 1.9082149292705877e-10;
function l2(l) {
    var a, j1, h, p, v, b, c, u, g, x, w, k, q;
    if (l === I || t3(l)) return l;
    if (l === e5) return -1;
    if (0 === l) return l;
    if (l < 0 ? (h = !0, u = -l) : (h = !1, u = l), u >= 38.816242111356935) {
        if (h) return -1;
        if (u >= 709.782712893384) return I;
    }
    if (b = 0 | d(u), u > a9) u < 1.0397207708399179 ? h ? (p = l + o15, v = -f, q = -1) : (p = l - o15, v = f, q = 1) : (q = h ? 1.4426950408889634 * l - .5 : 1.4426950408889634 * l + .5, p = l - (w = q |= 0) * o15, v = w * f), x = p - (l = p - v) - v;
    else {
        if (b < 1016070144) return l;
        q = 0;
    }
    return c = 1 + (g = l * (a = .5 * l)) * function(t) {
        return 0 === t ? -.03333333333333313 : t * (.0015873015872548146 + t * (t * (4008217827329362e-21 + -2.0109921818362437e-7 * t) - 793650757867488e-19)) - .03333333333333313;
    }(g), k = g * ((c - (w = 3 - c * a)) / (6 - l * w)), 0 === q ? l - (l * k - g) : (j1 = j(a8 + q << 20, 0), k = l * (k - x) - x, k -= g, -1 === q ? .5 * (l - k) - .5 : 1 === q ? l < -.25 ? -2 * (k - (l + .5)) : 1 + 2 * (l - k) : q <= -2 || q > 56 ? (u = 1 - (k - l), 1024 === q ? (p = d(u) + (q << 20) | 0, u = d1(u, p)) : u *= j1, u - 1) : (w = 1, q < 20 ? u = (w = d1(w, p = 1072693248 - (2097152 >> q) | 0)) - (k - l) : (u = l - (k + (w = d1(w, p = a8 - q << 20 | 0))), u += 1), u *= j1));
}
var a10 = Math.floor;
var d3 = .6931471803691238, m1 = 1.9082149292705877e-10;
function o16(o) {
    var f, a, j, l, h, p, v, b, u, c;
    if (o < -1 || t3(o)) return NaN;
    if (-1 === o) return e5;
    if (o === I) return o;
    if (0 === o) return o;
    if (c = 1, (j = o < 0 ? -o : o) < .41421356237309503) {
        if (j < 1.862645149230957e-9) return j < 5551115123125783e-32 ? o : o - o * o * .5;
        o > -.2928932188134525 && (c = 0, l = o, a = 1);
    }
    return 0 !== c && (j < 9007199254740992 ? (h = (c = ((a = d(u = 1 + o)) >> 20) - a8) > 0 ? 1 - (u - o) : o - (u - 1), h /= u) : (c = ((a = d(u = o)) >> 20) - a8, h = 0), (a &= 1048575) < 434334 ? u = d1(u, 1072693248 | a) : (c += 1, u = d1(u, 1071644672 | a), a = 1048576 - a >> 2), l = u - 1), f = .5 * l * l, 0 === a ? 0 === l ? c * d3 + (h += c * m1) : c * d3 - ((b = f * (1 - .6666666666666666 * l)) - (c * m1 + h) - l) : (b = (v = (p = l / (2 + l)) * p) * function(t) {
        return 0 === t ? .6666666666666735 : .6666666666666735 + t * (.3999999999940942 + t * (.2857142874366239 + t * (.22222198432149784 + t * (.1818357216161805 + t * (.15313837699209373 + .14798198605116586 * t)))));
    }(v), 0 === c ? l - (f - p * (f + b)) : c * d3 - (f - (p * (f + b) + (c * m1 + h)) - l));
}
var a11 = Math.sqrt;
var a12 = .7853981633974483;
function r16(r) {
    var n, i, a, m, d;
    if (t3(r)) return NaN;
    if (r > 0 ? a = r : (n = !0, a = -r), a > 1) return NaN;
    if (a > .625) m = (i = 1 - a) * function(t) {
        var s, e;
        return 0 === t ? .08333333333333809 : ((t < 0 ? -t : t) <= 1 ? (s = 28.536655482610616 + t * (t * (6.968710824104713 + t * (.002967721961301243 * t - .5634242780008963)) - 25.56901049652825), e = 342.43986579130785 + t * (t * (147.0656354026815 + t * (1 * t - 21.947795316429207)) - 383.8770957603691)) : (s = .002967721961301243 + (t = 1 / t) * (t * (6.968710824104713 + t * (28.536655482610616 * t - 25.56901049652825)) - .5634242780008963), e = 1 + t * (t * (147.0656354026815 + t * (342.43986579130785 * t - 383.8770957603691)) - 21.947795316429207)), s / e);
    }(i), i = a11(i + i), d = a12 - i, d -= i = i * m - 6123233995736766e-32, d += a12;
    else {
        if (a < 1e-8) return r;
        d = (i = a * a) * function(t) {
            var s, e;
            return 0 === t ? .16666666666666713 : ((t < 0 ? -t : t) <= 1 ? (s = t * (19.562619833175948 + t * (t * (5.444622390564711 + t * (.004253011369004428 * t - .6019598008014124)) - 16.262479672107002)) - 8.198089802484825, e = t * (139.51056146574857 + t * (t * (70.49610280856842 + t * (1 * t - 14.740913729888538)) - 147.1791292232726)) - 49.18853881490881) : (s = .004253011369004428 + (t = 1 / t) * (t * (5.444622390564711 + t * (t * (19.562619833175948 + -8.198089802484825 * t) - 16.262479672107002)) - .6019598008014124), e = 1 + t * (t * (70.49610280856842 + t * (t * (139.51056146574857 + -49.18853881490881 * t) - 147.1791292232726)) - 14.740913729888538)), s / e);
        }(i), d = a * d + a;
    }
    return n ? -d : d;
}
function t9(t) {
    return t != t;
}
var d4 = .6931471803691238, m2 = 1.9082149292705877e-10;
function o17(o) {
    var f, a, j, l, h, p, v, b, u, c;
    if (o < -1 || t3(o)) return NaN;
    if (-1 === o) return e5;
    if (o === I) return o;
    if (0 === o) return o;
    if (c = 1, (j = o < 0 ? -o : o) < .41421356237309503) {
        if (j < 1.862645149230957e-9) return j < 5551115123125783e-32 ? o : o - o * o * .5;
        o > -.2928932188134525 && (c = 0, l = o, a = 1);
    }
    return 0 !== c && (j < 9007199254740992 ? (h = (c = ((a = d(u = 1 + o)) >> 20) - a8) > 0 ? 1 - (u - o) : o - (u - 1), h /= u) : (c = ((a = d(u = o)) >> 20) - a8, h = 0), (a &= 1048575) < 434334 ? u = d1(u, 1072693248 | a) : (c += 1, u = d1(u, 1071644672 | a), a = 1048576 - a >> 2), l = u - 1), f = .5 * l * l, 0 === a ? 0 === l ? c * d4 + (h += c * m2) : c * d4 - ((b = f * (1 - .6666666666666666 * l)) - (c * m2 + h) - l) : (b = (v = (p = l / (2 + l)) * p) * function(t) {
        return 0 === t ? .6666666666666735 : .6666666666666735 + t * (.3999999999940942 + t * (.2857142874366239 + t * (.22222198432149784 + t * (.1818357216161805 + t * (.15313837699209373 + .14798198605116586 * t)))));
    }(v), 0 === c ? l - (f - p * (f + b)) : c * d4 - (f - (p * (f + b) + (c * m2 + h)) - l));
}
var a13 = Math.sqrt;
function t10(t) {
    return Math.abs(t);
}
var a14 = Math.ceil;
function t11(t) {
    return t < 0 ? a14(t) : a(t);
}
var a15 = Number;
var e6 = a15.NEGATIVE_INFINITY;
var I1 = Number.POSITIVE_INFINITY;
var a16 = 1023;
var a17 = 1023;
var a18 = -1023;
var a19 = -1074;
var a20 = Number;
var e7 = a20.NEGATIVE_INFINITY;
function n11(n) {
    return n === I1 || n === e7;
}
var a21 = 2147483648;
var a22 = 2147483647;
var n12 = "function" == typeof Uint32Array;
function r17(r) {
    return n12 && r instanceof Uint32Array || "[object Uint32Array]" === o12(r);
}
var r18 = "function" == typeof Uint32Array ? Uint32Array : null;
function s10() {
    var s, i;
    if ("function" != typeof r18) return !1;
    try {
        i = new r18(i = [
            1,
            3.14,
            -3.14,
            a1 + 1,
            a1 + 2
        ]), s = r17(i) && 1 === i[0] && 3 === i[1] && i[2] === a1 - 2 && 0 === i[3] && 1 === i[4];
    } catch (t) {
        s = !1;
    }
    return s;
}
var t12 = "function" == typeof Uint32Array ? Uint32Array : void 0;
var n13 = s10() ? t12 : function() {
    throw new Error("not implemented");
};
var r19 = "function" == typeof Float64Array;
function a23(a) {
    return r19 && a instanceof Float64Array || "[object Float64Array]" === o8(a);
}
var r20 = "function" == typeof Float64Array ? Float64Array : null;
function a24() {
    var a, n;
    if ("function" != typeof r20) return !1;
    try {
        n = new r20([
            1,
            3.14,
            -3.14,
            NaN
        ]), a = a23(n) && 1 === n[0] && 3.14 === n[1] && -3.14 === n[2] && n[3] != n[3];
    } catch (t) {
        a = !1;
    }
    return a;
}
var t13 = "function" == typeof Float64Array ? Float64Array : void 0;
var o18 = a24() ? t13 : function() {
    throw new Error("not implemented");
};
var n14 = "function" == typeof Uint8Array;
function r21(r) {
    return n14 && r instanceof Uint8Array || "[object Uint8Array]" === o4(r);
}
var r22 = "function" == typeof Uint8Array ? Uint8Array : null;
function s11() {
    var s, i;
    if ("function" != typeof r22) return !1;
    try {
        i = new r22(i = [
            1,
            3.14,
            -3.14,
            a4 + 1,
            a4 + 2
        ]), s = r21(i) && 1 === i[0] && 3 === i[1] && i[2] === a4 - 2 && 0 === i[3] && 1 === i[4];
    } catch (t) {
        s = !1;
    }
    return s;
}
var s12 = "function" == typeof Uint8Array ? Uint8Array : void 0;
var o19 = s11() ? s12 : function() {
    throw new Error(t5("02T00,Cw"));
};
var n15 = "function" == typeof Uint16Array;
function r23(r) {
    return n15 && r instanceof Uint16Array || "[object Uint16Array]" === o4(r);
}
var r24 = "function" == typeof Uint16Array ? Uint16Array : null;
function s13() {
    var s, i;
    if ("function" != typeof r24) return !1;
    try {
        i = new r24(i = [
            1,
            3.14,
            -3.14,
            a5 + 1,
            a5 + 2
        ]), s = r23(i) && 1 === i[0] && 3 === i[1] && i[2] === a5 - 2 && 0 === i[3] && 1 === i[4];
    } catch (t) {
        s = !1;
    }
    return s;
}
var s14 = "function" == typeof Uint16Array ? Uint16Array : void 0;
var o20 = s13() ? s14 : function() {
    throw new Error(t5("02P00,Cw"));
};
var n16, r25 = {
    uint16: o20,
    uint8: o19
};
(n16 = new r25.uint16(1))[0] = 4660;
var e8 = 52 === new r25.uint8(n16.buffer)[0];
var r26, i4;
!0 === e8 ? (r26 = 1, i4 = 0) : (r26 = 0, i4 = 1);
var d5 = {
    HIGH: r26,
    LOW: i4
}, m3 = new o18(1), a25 = new n13(m3.buffer), l3 = d5.HIGH, o21 = d5.LOW;
function j1(s, e, t, n) {
    return m3[0] = s, e[n] = a25[l3], e[n + t] = a25[o21], e;
}
function f1(s) {
    return j1(s, [
        0,
        0
    ], 1, 0);
}
t2(f1, "assign", j1);
var r27 = !0 === e8 ? 1 : 0, i5 = new o18(1), n17 = new n13(i5.buffer);
function d6(t) {
    return i5[0] = t, n17[r27];
}
var r28, i6;
!0 === e8 ? (r28 = 1, i6 = 0) : (r28 = 0, i6 = 1);
var n18 = {
    HIGH: r28,
    LOW: i6
}, d7 = new o18(1), m4 = new n13(d7.buffer), a26 = n18.HIGH, l4 = n18.LOW;
function j2(t, s) {
    return m4[a26] = t, m4[l4] = s, d7[0];
}
var d8 = [
    0,
    0
];
function i7(i, m) {
    var o, a;
    return f1.assign(i, d8, 1, 0), o = d8[0], o &= a22, a = d6(m), j2(o |= a &= a21, d8[1]);
}
function t14(t, i, r) {
    p(t, i, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: r
    });
}
var a27 = 22250738585072014e-324;
function r29(s, r, m, d) {
    return t9(s) || n11(s) ? (r[d] = s, r[d + m] = 0, r) : 0 !== s && t10(s) < a27 ? (r[d] = 4503599627370496 * s, r[d + m] = -52, r) : (r[d] = s, r[d + m] = 0, r);
}
function m5(s) {
    return r29(s, [
        0,
        0
    ], 1, 0);
}
t14(m5, "assign", r29);
var a28 = 2146435072;
function n19(n) {
    var o = d6(n);
    return (o = (o & a28) >>> 20) - a16 | 0;
}
var s15 = "function" == typeof Uint32Array ? Uint32Array : void 0;
var o22 = s10() ? s15 : function() {
    throw new Error(t8("02R00,Cw"));
};
var r30 = "function" == typeof Float64Array ? Float64Array : null;
function a29() {
    var a, n;
    if ("function" != typeof r30) return !1;
    try {
        n = new r30([
            1,
            3.14,
            -3.14,
            NaN
        ]), a = a2(n) && 1 === n[0] && 3.14 === n[1] && -3.14 === n[2] && n[3] != n[3];
    } catch (t) {
        a = !1;
    }
    return a;
}
var o23 = "function" == typeof Float64Array ? Float64Array : void 0;
var s16 = a29() ? o23 : function() {
    throw new Error(t8("00n00,Cw"));
};
var t15 = "function" == typeof Uint8Array ? Uint8Array : void 0;
var n20 = s6() ? t15 : function() {
    throw new Error("not implemented");
};
var t16 = "function" == typeof Uint16Array ? Uint16Array : void 0;
var n21 = s8() ? t16 : function() {
    throw new Error("not implemented");
};
var n22, r31 = {
    uint16: n21,
    uint8: n20
};
(n22 = new r31.uint16(1))[0] = 4660;
var e9 = 52 === new r31.uint8(n22.buffer)[0];
var r32, i8;
!0 === e9 ? (r32 = 1, i8 = 0) : (r32 = 0, i8 = 1);
var d9 = {
    HIGH: r32,
    LOW: i8
}, m6 = new s16(1), a30 = new o22(m6.buffer), l5 = d9.HIGH, o24 = d9.LOW;
function j3(s, e, t, n) {
    return m6[0] = s, e[n] = a30[l5], e[n + t] = a30[o24], e;
}
function f2(s) {
    return j3(s, [
        0,
        0
    ], 1, 0);
}
t14(f2, "assign", j3);
var r33, i9;
!0 === e9 ? (r33 = 1, i9 = 0) : (r33 = 0, i9 = 1);
var n23 = {
    HIGH: r33,
    LOW: i9
}, d10 = new s16(1), m7 = new o22(d10.buffer), a31 = n23.HIGH, l6 = n23.LOW;
function j4(t, s) {
    return m7[a31] = t, m7[l6] = s, d10[0];
}
var b = [
    0,
    0
], f3 = [
    0,
    0
];
function h(h, v) {
    var c, x;
    return 0 === v || 0 === h || t9(h) || n11(h) ? h : (r29(h, b, 1, 0), v += b[1], (v += n19(h = b[0])) < a19 ? i7(0, h) : v > a17 ? h < 0 ? e6 : I1 : (v <= a18 ? (v += 52, x = 2220446049250313e-31) : x = 1, f2.assign(h, f3, 1, 0), c = f3[0], c &= 2148532223, x * j4(c |= v + a16 << 20, f3[1])));
}
function r34(r) {
    var m;
    return t9(r) || r === I1 ? r : r === e6 ? 0 : r > 709.782712893384 ? I1 : r < -745.1332191019411 ? 0 : r > -3.725290298461914e-9 && r < 3.725290298461914e-9 ? 1 + r : function(s, t, e) {
        var n, r, m, d;
        return m = (n = s - t) - (r = n * n) * (0 === (d = r) ? .16666666666666602 : .16666666666666602 + d * (d * (6613756321437934e-20 + d * (4.1381367970572385e-8 * d - 16533902205465252e-22)) - .0027777777777015593)), h(1 - (t - n * m / (2 - m) - s), e);
    }(r - .6931471803691238 * (m = t11(r < 0 ? 1.4426950408889634 * r - .5 : 1.4426950408889634 * r + .5)), 1.9082149292705877e-10 * m, m);
}
function e10(e) {
    return a(e) === e;
}
function e11(e) {
    return e10(e / 2);
}
function s17(s) {
    return e11(s > 0 ? s - 1 : s + 1);
}
function e12(e) {
    return a(e) === e;
}
var r35 = !0 === e9 ? 0 : 1, i10 = new s16(1), n24 = new o22(i10.buffer);
function d11(t, s) {
    return i10[0] = t, n24[r35] = s >>> 0, i10[0];
}
function t17(t) {
    return 0 | t;
}
var a32 = 2147483647;
var r36 = !0 === e9 ? 1 : 0, i11 = new s16(1), n25 = new o22(i11.buffer);
function d12(t) {
    return i11[0] = t, n25[r36];
}
var r37 = !0 === e9 ? 1 : 0, i12 = new s16(1), n26 = new o22(i12.buffer);
function d13(t, s) {
    return i12[0] = t, n26[r37] = s >>> 0, i12[0];
}
var I2 = Number.POSITIVE_INFINITY;
var a33 = 1023;
var a34 = 1023;
function t18(t) {
    return t != t;
}
function n27(n) {
    return n === I || n === e5;
}
var a35 = 2147483648;
var a36 = 2147483647;
var r38, i13;
!0 === e4 ? (r38 = 1, i13 = 0) : (r38 = 0, i13 = 1);
var d14 = {
    HIGH: r38,
    LOW: i13
}, m8 = new s4(1), a37 = new o5(m8.buffer), l7 = d14.HIGH, o25 = d14.LOW;
function j5(s, e, t, n) {
    return m8[0] = s, e[n] = a37[l7], e[n + t] = a37[o25], e;
}
function f4(s) {
    return j5(s, [
        0,
        0
    ], 1, 0);
}
t2(f4, "assign", j5);
var d15 = [
    0,
    0
];
function i14(i, m) {
    var o, a;
    return f4.assign(i, d15, 1, 0), o = d15[0], o &= a36, a = d(m), j(o |= a &= a35, d15[1]);
}
var a38 = 22250738585072014e-324;
function t19(t) {
    return Math.abs(t);
}
function r39(s, r, m, d) {
    return t18(s) || n27(s) ? (r[d] = s, r[d + m] = 0, r) : 0 !== s && t19(s) < a38 ? (r[d] = 4503599627370496 * s, r[d + m] = -52, r) : (r[d] = s, r[d + m] = 0, r);
}
function m9(s) {
    return r39(s, [
        0,
        0
    ], 1, 0);
}
t14(m9, "assign", r39);
var a39 = 2146435072;
function n28(n) {
    var o = d(n);
    return (o = (o & a39) >>> 20) - a8 | 0;
}
var b1 = [
    0,
    0
], f5 = [
    0,
    0
];
function h1(h, c) {
    var v, x;
    return 0 === c || 0 === h || t18(h) || n27(h) ? h : (r39(h, b1, 1, 0), c += b1[1], (c += n28(h = b1[0])) < a19 ? i14(0, h) : c > a34 ? h < 0 ? e7 : I2 : (c <= a18 ? (c += 52, x = 2220446049250313e-31) : x = 1, f1.assign(h, f5, 1, 0), v = f5[0], v &= 2148532223, x * j2(v |= c + a33 << 20, f5[1])));
}
var a40 = .6931471805599453;
var a41 = 1048575;
var g = [
    1,
    1.5
], x = [
    0,
    .5849624872207642
], w = [
    0,
    1.350039202129749e-8
];
var k = 1e300, N = 1e-300, q = [
    0,
    0
], y = [
    0,
    0
];
function z(A, B) {
    var C, D, E, F, G, H, I, J, K, L, M, O, P, Q;
    if (t9(A) || t9(B)) return NaN;
    if (f2.assign(B, q, 1, 0), G = q[0], 0 === q[1]) {
        if (0 === B) return 1;
        if (1 === B) return A;
        if (-1 === B) return 1 / A;
        if (.5 === B) return a13(A);
        if (-.5 === B) return 1 / a13(A);
        if (2 === B) return A * A;
        if (3 === B) return A * A * A;
        if (4 === B) return (A *= A) * A;
        if (n11(B)) return function(t, s) {
            return -1 === t ? (t - t) / (t - t) : 1 === t ? 1 : t10(t) < 1 == (s === I1) ? 0 : I1;
        }(A, B);
    }
    if (f2.assign(A, q, 1, 0), F = q[0], 0 === q[1]) {
        if (0 === F) return function(t, e) {
            return e === e6 ? I1 : e === I1 ? 0 : e > 0 ? s17(e) ? t : 0 : s17(e) ? i7(I1, t) : I1;
        }(A, B);
        if (1 === A) return 1;
        if (-1 === A && s17(B)) return -1;
        if (n11(A)) return A === e6 ? z(-0, -B) : B < 0 ? 0 : I1;
    }
    if (A < 0 && !1 === e12(B)) return (A - A) / (A - A);
    if (E = t10(A), C = F & a32 | 0, D = G & a32 | 0, I = G >>> 31 | 0, H = (H = F >>> 31 | 0) && s17(B) ? -1 : 1, D > 1105199104) {
        if (D > 1139802112) return function(t, s) {
            return (d12(t) & a32) <= 1072693247 ? s < 0 ? 1 / 0 : 0 : s > 0 ? 1 / 0 : 0;
        }(A, B);
        if (C < 1072693247) return 1 === I ? H * k * k : H * N * N;
        if (C > 1072693248) return 0 === I ? H * k * k : H * N * N;
        M = function(t, s) {
            var e, r, i, n, m, o;
            return e = (m = 1.9259629911266175e-8 * (i = s - 1) - i * i * (0 === (o = i) ? .5 : .5 + o * (.25 * o - .3333333333333333)) * 1.4426950408889634) - ((r = d11(r = (n = 1.4426950216293335 * i) + m, 0)) - n), t[0] = r, t[1] = e, t;
        }(y, E);
    } else M = function(t, s, e) {
        var r, i, n, m, o, f, a, l, j, u, b, c, k, N, q, y, z, A, B, C, D;
        return A = 0, e < 1048576 && (A -= 53, e = d12(s *= 9007199254740992)), A += (e >> 20) - a16 | 0, e = 1072693248 | (B = 1048575 & e | 0), B <= 235662 ? C = 0 : B < 767610 ? C = 1 : (C = 0, A += 1, e -= 1048576), s = d13(s, e), m = d11(i = (y = s - (a = g[C])) * (z = 1 / (s + a)), 0), r = 524288 + (e >> 1 | 536870912), f = d13(0, r += C << 18), q = (n = i * i) * n * (0 === (D = n) ? .5999999999999946 : .5999999999999946 + D * (.4285714285785502 + D * (.33333332981837743 + D * (.272728123808534 + D * (.23066074577556175 + .20697501780033842 * D))))), f = d11(f = 3 + (n = m * m) + (q += (o = z * (y - m * f - m * (s - (f - a)))) * (m + i)), 0), k = (b = -7.028461650952758e-9 * (j = d11(j = (y = m * f) + (z = o * f + (q - (f - 3 - n)) * i), 0)) + .9617966939259756 * (z - (j - y)) + w[C]) - ((c = d11(c = (u = .9617967009544373 * j) + b + (l = x[C]) + (N = A), 0)) - N - l - u), t[0] = c, t[1] = k, t;
    }(y, E, C);
    if (O = (L = (B - (J = d11(B, 0))) * M[0] + B * M[1]) + (K = J * M[0]), f2.assign(O, q, 1, 0), P = t17(q[0]), Q = t17(q[1]), P >= 1083179008) {
        if (0 != (P - 1083179008 | Q)) return H * k * k;
        if (L + 8008566259537294e-32 > O - K) return H * k * k;
    } else if ((P & a32) >= 1083231232) {
        if (0 != (P - 3230714880 | Q)) return H * N * N;
        if (L <= O - K) return H * N * N;
    }
    return O = function(t, s, e) {
        var r, i, n, m, f, a, j, g, x, w;
        return x = ((g = t & a32 | 0) >> 20) - a16 | 0, j = 0, g > 1071644672 && (i = d13(0, ((j = t + (1048576 >> x + 1) >>> 0) & ~(a41 >> (x = ((j & a32) >> 20) - a16 | 0))) >>> 0), j = (j & a41 | 1048576) >> 20 - x >>> 0, t < 0 && (j = -j), s -= i), r = (a = (n = .6931471824645996 * (i = d11(i = e + s, 0))) + (m = (e - (i - s)) * a40 + -1.904654299957768e-9 * i)) - (i = a * a) * (0 === (w = i) ? .16666666666666602 : .16666666666666602 + w * (w * (6613756321437934e-20 + w * (4.1381367970572385e-8 * w - 16533902205465252e-22)) - .0027777777777015593)), t = d12(a = 1 - (a * r / (r - 2) - ((f = m - (a - n)) + a * f) - a)), t = t17(t), (t += j << 20 >>> 0) >> 20 <= 0 ? h1(a, j) : d13(a, t);
    }(P, K, L), H * O;
}
var a42 = 2.718281828459045;
var a43 = 2220446049250313e-31;
function a44(s) {
    var t, e;
    return 0 === s ? 1 / 0 : ((s < 0 ? -s : s) <= 1 ? (t = 709811.662581658 + s * (679979.8474157227 + s * (293136.7857211597 + s * (74887.54032914672 + s * (12555.290582413863 + s * (1443.4299244417066 + s * (115.24194596137347 + s * (6.309239205732627 + s * (.22668404630224365 + s * (.004826466289237662 + 4624429436045379e-20 * s))))))))), e = 0 + s * (362880 + s * (1026576 + s * (1172700 + s * (723680 + s * (269325 + s * (63273 + s * (9450 + s * (870 + s * (45 + 1 * s)))))))))) : (t = 4624429436045379e-20 + (s = 1 / s) * (.004826466289237662 + s * (.22668404630224365 + s * (6.309239205732627 + s * (115.24194596137347 + s * (1443.4299244417066 + s * (12555.290582413863 + s * (74887.54032914672 + s * (293136.7857211597 + s * (679979.8474157227 + 709811.662581658 * s))))))))), e = 1 + s * (45 + s * (870 + s * (9450 + s * (63273 + s * (269325 + s * (723680 + s * (1172700 + s * (1026576 + s * (362880 + 0 * s)))))))))), t / e);
}
var p1 = 10.900511;
function l8(l, o) {
    var j, h, v, c, b, f, x;
    return t9(l) || t9(o) || l < 0 || o < 0 ? NaN : 1 === o ? 1 / l : 1 === l ? 1 / o : (x = l + o) < a43 ? (b = x / l, b /= o) : x === l && o < a43 ? 1 / o : x === o && l < a43 ? 1 / l : (l < o && (f = o, o = l, l = f), h = l + p1 - .5, v = o + p1 - .5, c = x + p1 - .5, b = a44(l) * (a44(o) / a44(x)), t10(o * (j = l - .5 - o)) < 100 * c && l > 100 ? b *= r34(j * o17(-o / c)) : b *= z(h / c, j), b *= z(c > 1e10 ? h / c * (v / c) : h * v / (c * c), o), b *= a13(a42 / v));
}
function n29(n) {
    return 0 === n && 1 / n === I2;
}
function i15(i, n) {
    return t9(i) || t9(n) ? NaN : i === I1 || n === I1 ? I1 : i === n && 0 === i ? n29(i) ? i : n : i > n ? i : n;
}
function n30(n) {
    return 0 === n && 1 / n === e7;
}
function n31(n, i) {
    return t9(n) || t9(i) ? NaN : n === e6 || i === e6 ? e6 : n === i && 0 === n ? n30(n) ? n : i : n < i ? n : i;
}
var a45 = 17976931348623157e292;
var a46 = 22250738585072014e-324;
var a47 = 2147483647;
var a48 = 1.5707963267948966;
var a49 = 3.141592653589793;
function n32(n) {
    return 0 === n && 1 / n === e6;
}
function t20(t) {
    return Math.abs(t);
}
function e13(e, n) {
    var r, t, u, f;
    return u = (f = e * e) * f, t = f * function(e) {
        return 0 === e ? .0416666666666666 : .0416666666666666 + e * (2480158728947673e-20 * e - .001388888888887411);
    }(f), t += u * u * function(e) {
        return 0 === e ? -2.7557314351390663e-7 : e * (2.087572321298175e-9 + -11359647557788195e-27 * e) - 2.7557314351390663e-7;
    }(f), (u = 1 - (r = .5 * f)) + (1 - u - r + (f * t - e * n));
}
var e14 = -.16666666666666632;
function r40(r, a) {
    var t, n, u;
    return t = .00833333333332249 + (u = r * r) * (27557313707070068e-22 * u - .0001984126982985795) + u * (u * u) * (1.58969099521155e-10 * u - 2.5050760253406863e-8), n = u * r, 0 === a ? r + n * (e14 + u * t) : r - (u * (.5 * a - n * t) - a - n * e14);
}
var a50 = 1048575;
var r41 = !0 === e9 ? 0 : 1, i16 = new s16(1), n33 = new o5(i16.buffer);
function d16(t) {
    return i16[0] = t, n33[r41];
}
function r42(r, t) {
    var u, a;
    for(u = [], a = 0; a < t; a++)u.push(r);
    return u;
}
function t21(t) {
    return r42(0, t);
}
var a51 = Math.round;
var a52 = [
    10680707,
    7228996,
    1387004,
    2578385,
    16069853,
    12639074,
    9804092,
    4427841,
    16666979,
    11263675,
    12935607,
    2387514,
    4345298,
    14681673,
    3074569,
    13734428,
    16653803,
    1880361,
    10960616,
    8533493,
    3062596,
    8710556,
    7349940,
    6258241,
    3772886,
    3769171,
    3798172,
    8675211,
    12450088,
    3874808,
    9961438,
    366607,
    15675153,
    9132554,
    7151469,
    3571407,
    2607881,
    12013382,
    4155038,
    6285869,
    7677882,
    13102053,
    15825725,
    473591,
    9065106,
    15363067,
    6271263,
    9264392,
    5636912,
    4652155,
    7056368,
    13614112,
    10155062,
    1944035,
    9527646,
    15080200,
    6658437,
    6231200,
    6832269,
    16767104,
    5075751,
    3212806,
    1398474,
    7579849,
    6349435,
    12618859
], l9 = [
    1.570796251296997,
    7.549789415861596e-8,
    5390302529957765e-30,
    3282003415807913e-37,
    1270655753080676e-44,
    12293330898111133e-52,
    27337005381646456e-60,
    21674168387780482e-67
], h2 = 5.960464477539063e-8, j6 = t21(20), p2 = t21(20), v = t21(20), c1 = t21(20);
function b2(e, r, s, t, i, o, d, m, j) {
    var p, u, g, x, w, k, N, y, z;
    for(x = o, z = t[s], y = s, w = 0; y > 0; w++)u = h2 * z | 0, c1[w] = z - 16777216 * u | 0, z = t[y - 1] + u, y -= 1;
    if (z = h(z, i), z -= 8 * a10(.125 * z), z -= N = 0 | z, g = 0, i > 0 ? (N += w = c1[s - 1] >> 24 - i, c1[s - 1] -= w << 24 - i, g = c1[s - 1] >> 23 - i) : 0 === i ? g = c1[s - 1] >> 23 : z >= .5 && (g = 2), g > 0) {
        for(N += 1, p = 0, w = 0; w < s; w++)y = c1[w], 0 === p ? 0 !== y && (p = 1, c1[w] = 16777216 - y) : c1[w] = 16777215 - y;
        if (i > 0) switch(i){
            case 1:
                c1[s - 1] &= 8388607;
                break;
            case 2:
                c1[s - 1] &= 4194303;
        }
        2 === g && (z = 1 - z, 0 !== p && (z -= h(1, i)));
    }
    if (0 === z) {
        for(y = 0, w = s - 1; w >= o; w--)y |= c1[w];
        if (0 === y) {
            for(k = 1; 0 === c1[o - k]; k++);
            for(w = s + 1; w <= s + k; w++){
                for(j[m + w] = a52[d + w], u = 0, y = 0; y <= m; y++)u += e[y] * j[m + (w - y)];
                t[w] = u;
            }
            return b2(e, r, s += k, t, i, o, d, m, j);
        }
    }
    if (0 === z) for(s -= 1, i -= 24; 0 === c1[s];)s -= 1, i -= 24;
    else (z = h(z, -i)) >= 16777216 ? (u = h2 * z | 0, c1[s] = z - 16777216 * u | 0, i += 24, c1[s += 1] = u) : c1[s] = 0 | z;
    for(u = h(1, i), w = s; w >= 0; w--)t[w] = u * c1[w], u *= h2;
    for(w = s; w >= 0; w--){
        for(u = 0, k = 0; k <= x && k <= s - w; k++)u += l9[k] * t[w + k];
        v[s - w] = u;
    }
    for(u = 0, w = s; w >= 0; w--)u += v[w];
    for(r[0] = 0 === g ? u : -u, u = v[0] - u, w = 1; w <= s; w++)u += v[w];
    return r[1] = 0 === g ? u : -u, 7 & N;
}
function u(e, r, s, t) {
    var i, o, n, f, d, m, l;
    for((o = (s - 3) / 24 | 0) < 0 && (o = 0), f = s - 24 * (o + 1), m = o - (n = t - 1), l = n + 4, d = 0; d <= l; d++)j6[d] = m < 0 ? 0 : a52[m], m += 1;
    for(d = 0; d <= 4; d++){
        for(i = 0, m = 0; m <= n; m++)i += e[m] * j6[n + (d - m)];
        p2[d] = i;
    }
    return 4, b2(e, r, 4, p2, f, 4, o, n, j6);
}
function g1(e, r, s) {
    var i, o, n, f, d1;
    return n = e - 1.5707963267341256 * (i = a51(.6366197723675814 * e)), f = 6077100506506192e-26 * i, d1 = r >> 20 | 0, s[0] = n - f, d1 - (d(s[0]) >> 20 & 2047) > 16 && (f = 20222662487959506e-37 * i - ((o = n) - (n = o - (f = 6077100506303966e-26 * i)) - f), s[0] = n - f, d1 - (d(s[0]) >> 20 & 2047) > 49 && (f = 84784276603689e-45 * i - ((o = n) - (n = o - (f = 20222662487111665e-37 * i)) - f), s[0] = n - f)), s[1] = n - s[0] - f, i;
}
var x1 = 1.5707963267341256, w1 = 6077100506506192e-26, k1 = 2 * w1, N1 = 4 * w1, y1 = [
    0,
    0,
    0
], z1 = [
    0,
    0
];
function q1(n, f) {
    var d1, m, a, l, h, j1, p;
    if ((a = d(n) & a36 | 0) <= 1072243195) return f[0] = n, f[1] = 0, 0;
    if (a <= 1074752122) return 598523 == (a & a50) ? g1(n, a, f) : a <= 1073928572 ? n > 0 ? (p = n - x1, f[0] = p - w1, f[1] = p - f[0] - w1, 1) : (p = n + x1, f[0] = p + w1, f[1] = p - f[0] + w1, -1) : n > 0 ? (p = n - 2 * x1, f[0] = p - k1, f[1] = p - f[0] - k1, 2) : (p = n + 2 * x1, f[0] = p + k1, f[1] = p - f[0] + k1, -2);
    if (a <= 1075594811) return a <= 1075183036 ? 1074977148 === a ? g1(n, a, f) : n > 0 ? (p = n - 3 * x1, f[0] = p - 1.8231301519518578e-10, f[1] = p - f[0] - 1.8231301519518578e-10, 3) : (p = n + 3 * x1, f[0] = p + 1.8231301519518578e-10, f[1] = p - f[0] + 1.8231301519518578e-10, -3) : 1075388923 === a ? g1(n, a, f) : n > 0 ? (p = n - 4 * x1, f[0] = p - N1, f[1] = p - f[0] - N1, 4) : (p = n + 4 * x1, f[0] = p + N1, f[1] = p - f[0] + N1, -4);
    if (a < 1094263291) return g1(n, a, f);
    if (a >= a39) return f[0] = NaN, f[1] = NaN, 0;
    for(d1 = d16(n), p = j(a - ((m = (a >> 20) - 1046) << 20 | 0), d1), h = 0; h < 2; h++)y1[h] = 0 | p, p = 16777216 * (p - y1[h]);
    for(y1[2] = p, l = 3; 0 === y1[l - 1];)l -= 1;
    return j1 = u(y1, z1, m, l), n < 0 ? (f[0] = -z1[0], f[1] = -z1[1], -j1) : (f[0] = z1[0], f[1] = z1[1], j1);
}
var m10 = [
    0,
    0
];
function d17(d) {
    var a;
    if (a = d12(d), (a &= a32) <= 1072243195) return a < 1045430272 ? d : r40(d, 0);
    if (a >= a28) return NaN;
    switch(3 & q1(d, m10)){
        case 0:
            return r40(m10[0], m10[1]);
        case 1:
            return e13(m10[0], m10[1]);
        case 2:
            return -r40(m10[0], m10[1]);
        default:
            return -e13(m10[0], m10[1]);
    }
}
var a53 = 2.5066282746310007;
var a54 = .5772156649015329;
function p3(s) {
    var t, e, i;
    return t = 1 + (t = 1 / s) * function(s) {
        return 0 === s ? .08333333333334822 : .08333333333334822 + s * (.0034722222160545866 + s * (s * (.0007873113957930937 * s - .00022954996161337813) - .0026813261780578124));
    }(t), e = r34(s), e = s > 143.01608 ? (i = z(s, .5 * s - .25)) * (i / e) : z(s, s - .5) / e, a53 * e * t;
}
function h3(s, t) {
    return t / ((1 + a54 * s) * s);
}
function v1(a) {
    var j, l, f, v;
    if (e10(a) && a < 0 || a === e5 || t3(a)) return NaN;
    if (0 === a) return n32(a) ? e5 : I;
    if (a > 171.61447887182297) return I;
    if (a < -170.5674972726612) return 0;
    if ((l = t20(a)) > 33) return a >= 0 ? p3(a) : (j = 0 == (1 & (f = a10(l))) ? -1 : 1, (v = l - f) > .5 && (v = l - (f += 1)), v = l * d17(a49 * v), j * a49 / (t20(v) * p3(l)));
    for(v = 1; a >= 3;)v *= a -= 1;
    for(; a < 0;){
        if (a > -1e-9) return h3(a, v);
        v /= a, a += 1;
    }
    for(; a < 2;){
        if (a < 1e-9) return h3(a, v);
        v /= a, a += 1;
    }
    return 2 === a ? v : v * function(s) {
        var t, e;
        return 0 === s ? 1 : ((s < 0 ? -s : s) <= 1 ? (t = 1 + s * (.4942148268014971 + s * (.20744822764843598 + s * (.04763678004571372 + s * (.010421379756176158 + s * (.0011913514700658638 + s * (.00016011952247675185 + 0 * s)))))), e = 1 + s * (.0714304917030273 + s * (s * (.035823639860549865 + s * (.011813978522206043 + s * (s * (.0005396055804933034 + -23158187332412014e-21 * s) - .004456419138517973))) - .23459179571824335))) : (t = 0 + (s = 1 / s) * (.00016011952247675185 + s * (.0011913514700658638 + s * (.010421379756176158 + s * (.04763678004571372 + s * (.20744822764843598 + s * (.4942148268014971 + 1 * s)))))), e = s * (.0005396055804933034 + s * (s * (.011813978522206043 + s * (.035823639860549865 + s * (s * (.0714304917030273 + 1 * s) - .23459179571824335))) - .004456419138517973)) - 23158187332412014e-21), t / e);
    }(a -= 2);
}
var r43 = !0 === e9 ? 0 : 1, i17 = new s16(1), n34 = new o22(i17.buffer);
function d18(t) {
    return i17[0] = t, n34[r43];
}
function t22(t) {
    return r42(0, t);
}
var a55 = Math.round;
var a56 = [
    10680707,
    7228996,
    1387004,
    2578385,
    16069853,
    12639074,
    9804092,
    4427841,
    16666979,
    11263675,
    12935607,
    2387514,
    4345298,
    14681673,
    3074569,
    13734428,
    16653803,
    1880361,
    10960616,
    8533493,
    3062596,
    8710556,
    7349940,
    6258241,
    3772886,
    3769171,
    3798172,
    8675211,
    12450088,
    3874808,
    9961438,
    366607,
    15675153,
    9132554,
    7151469,
    3571407,
    2607881,
    12013382,
    4155038,
    6285869,
    7677882,
    13102053,
    15825725,
    473591,
    9065106,
    15363067,
    6271263,
    9264392,
    5636912,
    4652155,
    7056368,
    13614112,
    10155062,
    1944035,
    9527646,
    15080200,
    6658437,
    6231200,
    6832269,
    16767104,
    5075751,
    3212806,
    1398474,
    7579849,
    6349435,
    12618859
], l10 = [
    1.570796251296997,
    7.549789415861596e-8,
    5390302529957765e-30,
    3282003415807913e-37,
    1270655753080676e-44,
    12293330898111133e-52,
    27337005381646456e-60,
    21674168387780482e-67
], h4 = 5.960464477539063e-8, j7 = t22(20), p4 = t22(20), v2 = t22(20), c2 = t22(20);
function b3(e, r, s, t, i, o, d, m, j) {
    var p, u, g, x, w, k, N, y, z;
    for(x = o, z = t[s], y = s, w = 0; y > 0; w++)u = h4 * z | 0, c2[w] = z - 16777216 * u | 0, z = t[y - 1] + u, y -= 1;
    if (z = h(z, i), z -= 8 * a(.125 * z), z -= N = 0 | z, g = 0, i > 0 ? (N += w = c2[s - 1] >> 24 - i, c2[s - 1] -= w << 24 - i, g = c2[s - 1] >> 23 - i) : 0 === i ? g = c2[s - 1] >> 23 : z >= .5 && (g = 2), g > 0) {
        for(N += 1, p = 0, w = 0; w < s; w++)y = c2[w], 0 === p ? 0 !== y && (p = 1, c2[w] = 16777216 - y) : c2[w] = 16777215 - y;
        if (i > 0) switch(i){
            case 1:
                c2[s - 1] &= 8388607;
                break;
            case 2:
                c2[s - 1] &= 4194303;
        }
        2 === g && (z = 1 - z, 0 !== p && (z -= h(1, i)));
    }
    if (0 === z) {
        for(y = 0, w = s - 1; w >= o; w--)y |= c2[w];
        if (0 === y) {
            for(k = 1; 0 === c2[o - k]; k++);
            for(w = s + 1; w <= s + k; w++){
                for(j[m + w] = a56[d + w], u = 0, y = 0; y <= m; y++)u += e[y] * j[m + (w - y)];
                t[w] = u;
            }
            return b3(e, r, s += k, t, i, o, d, m, j);
        }
    }
    if (0 === z) for(s -= 1, i -= 24; 0 === c2[s];)s -= 1, i -= 24;
    else (z = h(z, -i)) >= 16777216 ? (u = h4 * z | 0, c2[s] = z - 16777216 * u | 0, i += 24, c2[s += 1] = u) : c2[s] = 0 | z;
    for(u = h(1, i), w = s; w >= 0; w--)t[w] = u * c2[w], u *= h4;
    for(w = s; w >= 0; w--){
        for(u = 0, k = 0; k <= x && k <= s - w; k++)u += l10[k] * t[w + k];
        v2[s - w] = u;
    }
    for(u = 0, w = s; w >= 0; w--)u += v2[w];
    for(r[0] = 0 === g ? u : -u, u = v2[0] - u, w = 1; w <= s; w++)u += v2[w];
    return r[1] = 0 === g ? u : -u, 7 & N;
}
function u1(e, r, s, t) {
    var i, o, n, f, d, m, l;
    for((o = (s - 3) / 24 | 0) < 0 && (o = 0), f = s - 24 * (o + 1), m = o - (n = t - 1), l = n + 4, d = 0; d <= l; d++)j7[d] = m < 0 ? 0 : a56[m], m += 1;
    for(d = 0; d <= 4; d++){
        for(i = 0, m = 0; m <= n; m++)i += e[m] * j7[n + (d - m)];
        p4[d] = i;
    }
    return 4, b3(e, r, 4, p4, f, 4, o, n, j7);
}
function g2(e, r, s) {
    var i, o, n, f, d;
    return n = e - 1.5707963267341256 * (i = a55(.6366197723675814 * e)), f = 6077100506506192e-26 * i, d = r >> 20 | 0, s[0] = n - f, d - (d12(s[0]) >> 20 & 2047) > 16 && (f = 20222662487959506e-37 * i - ((o = n) - (n = o - (f = 6077100506303966e-26 * i)) - f), s[0] = n - f, d - (d12(s[0]) >> 20 & 2047) > 49 && (f = 84784276603689e-45 * i - ((o = n) - (n = o - (f = 20222662487111665e-37 * i)) - f), s[0] = n - f)), s[1] = n - s[0] - f, i;
}
var x2 = 1.5707963267341256, w2 = 6077100506506192e-26, k2 = 2 * w2, N2 = 4 * w2, y2 = [
    0,
    0,
    0
], z2 = [
    0,
    0
];
function q2(n, f) {
    var d, m, a, l, h, j, p;
    if ((a = d12(n) & a32 | 0) <= 1072243195) return f[0] = n, f[1] = 0, 0;
    if (a <= 1074752122) return 598523 == (a & a41) ? g2(n, a, f) : a <= 1073928572 ? n > 0 ? (p = n - x2, f[0] = p - w2, f[1] = p - f[0] - w2, 1) : (p = n + x2, f[0] = p + w2, f[1] = p - f[0] + w2, -1) : n > 0 ? (p = n - 2 * x2, f[0] = p - k2, f[1] = p - f[0] - k2, 2) : (p = n + 2 * x2, f[0] = p + k2, f[1] = p - f[0] + k2, -2);
    if (a <= 1075594811) return a <= 1075183036 ? 1074977148 === a ? g2(n, a, f) : n > 0 ? (p = n - 3 * x2, f[0] = p - 1.8231301519518578e-10, f[1] = p - f[0] - 1.8231301519518578e-10, 3) : (p = n + 3 * x2, f[0] = p + 1.8231301519518578e-10, f[1] = p - f[0] + 1.8231301519518578e-10, -3) : 1075388923 === a ? g2(n, a, f) : n > 0 ? (p = n - 4 * x2, f[0] = p - N2, f[1] = p - f[0] - N2, 4) : (p = n + 4 * x2, f[0] = p + N2, f[1] = p - f[0] + N2, -4);
    if (a < 1094263291) return g2(n, a, f);
    if (a >= a28) return f[0] = NaN, f[1] = NaN, 0;
    for(d = d18(n), p = j4(a - ((m = (a >> 20) - 1046) << 20 | 0), d), h = 0; h < 2; h++)y2[h] = 0 | p, p = 16777216 * (p - y2[h]);
    for(y2[2] = p, l = 3; 0 === y2[l - 1];)l -= 1;
    return j = u1(y2, z2, m, l), n < 0 ? (f[0] = -z2[0], f[1] = -z2[1], -j) : (f[0] = z2[0], f[1] = z2[1], j);
}
var m11 = [
    0,
    0
];
function d19(d1) {
    var a;
    if (a = d(d1), (a &= a36) <= 1072243195) return a < 1045430272 ? d1 : r40(d1, 0);
    if (a >= a39) return NaN;
    switch(3 & q2(d1, m11)){
        case 0:
            return r40(m11[0], m11[1]);
        case 1:
            return e13(m11[0], m11[1]);
        case 2:
            return -r40(m11[0], m11[1]);
        default:
            return -e13(m11[0], m11[1]);
    }
}
var a57 = 3.141592653589793;
var a58 = 2.5066282746310007;
var a59 = .5772156649015329;
function p5(s) {
    var t, e, i;
    return t = 1 + (t = 1 / s) * function(s) {
        return 0 === s ? .08333333333334822 : .08333333333334822 + s * (.0034722222160545866 + s * (s * (.0007873113957930937 * s - .00022954996161337813) - .0026813261780578124));
    }(t), e = r34(s), e = s > 143.01608 ? (i = z(s, .5 * s - .25)) * (i / e) : z(s, s - .5) / e, a58 * e * t;
}
function h5(s, t) {
    return t / ((1 + a59 * s) * s);
}
function v3(a1) {
    var j, l, f, v;
    if (e12(a1) && a1 < 0 || a1 === e6 || t9(a1)) return NaN;
    if (0 === a1) return n30(a1) ? e6 : I1;
    if (a1 > 171.61447887182297) return I1;
    if (a1 < -170.5674972726612) return 0;
    if ((l = t10(a1)) > 33) return a1 >= 0 ? p5(a1) : (j = 0 == (1 & (f = a(l))) ? -1 : 1, (v = l - f) > .5 && (v = l - (f += 1)), v = l * d19(a57 * v), j * a57 / (t10(v) * p5(l)));
    for(v = 1; a1 >= 3;)v *= a1 -= 1;
    for(; a1 < 0;){
        if (a1 > -1e-9) return h5(a1, v);
        v /= a1, a1 += 1;
    }
    for(; a1 < 2;){
        if (a1 < 1e-9) return h5(a1, v);
        v /= a1, a1 += 1;
    }
    return 2 === a1 ? v : v * function(s) {
        var t, e;
        return 0 === s ? 1 : ((s < 0 ? -s : s) <= 1 ? (t = 1 + s * (.4942148268014971 + s * (.20744822764843598 + s * (.04763678004571372 + s * (.010421379756176158 + s * (.0011913514700658638 + s * (.00016011952247675185 + 0 * s)))))), e = 1 + s * (.0714304917030273 + s * (s * (.035823639860549865 + s * (.011813978522206043 + s * (s * (.0005396055804933034 + -23158187332412014e-21 * s) - .004456419138517973))) - .23459179571824335))) : (t = 0 + (s = 1 / s) * (.00016011952247675185 + s * (.0011913514700658638 + s * (.010421379756176158 + s * (.04763678004571372 + s * (.20744822764843598 + s * (.4942148268014971 + 1 * s)))))), e = s * (.0005396055804933034 + s * (s * (.011813978522206043 + s * (.035823639860549865 + s * (s * (.0714304917030273 + 1 * s) - .23459179571824335))) - .004456419138517973)) - 23158187332412014e-21), t / e);
    }(a1 -= 2);
}
var m12 = [
    1,
    1,
    2,
    6,
    24,
    120,
    720,
    5040,
    40320,
    362880,
    3628800,
    39916800,
    479001600,
    6227020800,
    87178291200,
    1307674368e3,
    20922789888e3,
    355687428096e3,
    6402373705728e3,
    0x1b02b9306890000,
    243290200817664e4,
    5109094217170944e4,
    11240007277776077e5,
    2585201673888498e7,
    6204484017332394e8,
    15511210043330986e9,
    40329146112660565e10,
    10888869450418352e12,
    30488834461171387e13,
    8.841761993739702e30,
    26525285981219107e16,
    8222838654177922e18,
    2631308369336935e20,
    8683317618811886e21,
    29523279903960416e22,
    1.0333147966386145e40,
    37199332678990125e25,
    13763753091226346e27,
    5230226174666011e29,
    20397882081197444e30,
    8159152832478977e32,
    3345252661316381e34,
    140500611775288e37,
    6041526306337383e37,
    2658271574788449e39,
    11962222086548019e40,
    5502622159812089e42,
    25862324151116818e43,
    12413915592536073e45,
    6082818640342675e47,
    30414093201713376e48,
    15511187532873822e50,
    8065817517094388e52,
    42748832840600255e53,
    2308436973392414e56,
    12696403353658276e57,
    7109985878048635e59,
    40526919504877214e60,
    23505613312828785e62,
    1.3868311854568984e80,
    832098711274139e67,
    5075802138772248e68,
    3146997326038794e70,
    198260831540444e73,
    12688693218588417e73,
    8.247650592082472e90,
    5443449390774431e77,
    3647111091818868e79,
    24800355424368305e80,
    1711224524281413e83,
    1.1978571669969892e100,
    8504785885678623e86,
    61234458376886085e87,
    44701154615126844e89,
    3307885441519386e92,
    248091408113954e95,
    18854947016660504e95,
    14518309202828587e97,
    11324281178206297e99,
    8946182130782976e101,
    7156945704626381e103,
    5.797126020747368e120,
    4753643337012842e107,
    3945523969720659e109,
    3314240134565353e111,
    281710411438055e114,
    2.4227095383672734e130,
    2107757298379528e117,
    18548264225739844e118,
    1650795516090846e121,
    14857159644817615e122,
    1.352001527678403e140,
    12438414054641308e126,
    11567725070816416e128,
    1087366156656743e131,
    1032997848823906e133,
    9916779348709496e134,
    9619275968248212e136,
    9426890448883248e138,
    9332621544394415e140,
    9332621544394415e142,
    942594775983836e145,
    9614466715035127e146,
    990290071648618e149,
    10299016745145628e150,
    1081396758240291e153,
    1.1462805637347084e170,
    1226520203196138e157,
    1324641819451829e159,
    14438595832024937e160,
    1588245541522743e163,
    1.7629525510902446e180,
    1974506857221074e167,
    22311927486598138e168,
    25435597334721877e170,
    2925093693493016e173,
    3.393108684451898e190,
    3969937160808721e177,
    4684525849754291e179,
    5574585761207606e181,
    6689502913449127e183,
    8.094298525273444e200,
    9875044200833601e187,
    1214630436702533e190,
    1506141741511141e192,
    1882677176888926e194,
    2372173242880047e196,
    30126600184576594e197,
    3856204823625804e200,
    4974504222477287e202,
    6466855489220474e204,
    847158069087882e207,
    11182486511960043e208,
    14872707060906857e210,
    19929427461615188e212,
    2.6904727073180504e230,
    3659042881952549e217,
    5012888748274992e219,
    6917786472619489e221,
    9615723196941089e223,
    13462012475717526e225,
    1898143759076171e228,
    2695364137888163e230,
    3854370717180073e232,
    55502938327393044e233,
    8047926057471992e236,
    11749972043909107e238,
    1727245890454639e241,
    25563239178728654e242,
    3.80892263763057e260,
    5713383956445855e247,
    862720977423324e250,
    13113358856834524e251,
    20063439050956823e253,
    30897696138473508e255,
    4789142901463394e258,
    7471062926282894e260,
    11729568794264145e262,
    1.853271869493735e280,
    29467022724950384e266,
    47147236359920616e268,
    7590705053947219e271,
    12296942187394494e273,
    20044015765453026e275,
    3287218585534296e278,
    5423910666131589e280,
    9003691705778438e282,
    1.503616514864999e300,
    25260757449731984e286,
    4269068009004705e289,
    7257415615307999e291
];
function n35(n) {
    return t3(n) ? NaN : e10(n) ? n < 0 ? NaN : n <= 170 ? m12[n] : I : v3(n + 1);
}
function r44(r) {
    var t, a;
    return 0 === r ? 1 / 0 : ((r < 0 ? -r : r) <= 1 ? (t = 38474670393.31777 + r * (36857665043.51951 + r * (15889202453.72942 + r * (4059208354.298835 + r * (680547661.1834733 + r * (78239755.00312005 + r * (6246580.776401795 + r * (341986.3488721347 + r * (12287.194511824551 + r * (261.61404416416684 + 2.5066282746310007 * r))))))))), a = 0 + r * (362880 + r * (1026576 + r * (1172700 + r * (723680 + r * (269325 + r * (63273 + r * (9450 + r * (870 + r * (45 + 1 * r)))))))))) : (t = 2.5066282746310007 + (r = 1 / r) * (261.61404416416684 + r * (12287.194511824551 + r * (341986.3488721347 + r * (6246580.776401795 + r * (78239755.00312005 + r * (680547661.1834733 + r * (4059208354.298835 + r * (15889202453.72942 + r * (36857665043.51951 + 38474670393.31777 * r))))))))), a = 1 + r * (45 + r * (870 + r * (9450 + r * (63273 + r * (269325 + r * (723680 + r * (1172700 + r * (1026576 + r * (362880 + 0 * r)))))))))), t / a);
}
var a60 = 10.900511;
function p6(t, i) {
    var j, h, c;
    return t < a43 ? i > 170 ? (h = p6(i, 170 - i), h *= t, 1 / (h *= 4269068009004705e289)) : 1 / (t * v1(t + i)) : (c = t + a60 - .5, t + i === t ? j = t10(i) < 10 ? r34((.5 - t) * o17(i / c)) : 1 : (j = t10(i) < 10 ? r34((.5 - t) * o17(i / c)) : z(c / (c + i), t - .5), j *= r44(t) / r44(t + i)), j *= z(a42 / (c + i), i));
}
function j8(m, r) {
    var n, a1, d;
    if (m <= 0 || m + r <= 0) return v1(m) / v1(m + r);
    if ((a1 = a(r)) === r) {
        if ((d = a(m)) === m && m <= 170 && m + r <= 170) return n35(d - 1) / n35(a1 + d - 1);
        if (t10(r) < 20) {
            if (0 === r) return 1;
            if (r < 0) {
                for(n = m -= 1, r += 1; 0 !== r;)n *= m -= 1, r += 1;
                return n;
            }
            for(n = 1 / m, r -= 1; 0 !== r;)n /= m += 1, r -= 1;
            return n;
        }
    }
    return p6(m, r);
}
var m13 = [
    1,
    1,
    2,
    6,
    24,
    120,
    720,
    5040,
    40320,
    362880,
    3628800,
    39916800,
    479001600,
    6227020800,
    87178291200,
    1307674368e3,
    20922789888e3,
    355687428096e3,
    6402373705728e3,
    0x1b02b9306890000,
    243290200817664e4,
    5109094217170944e4,
    11240007277776077e5,
    2585201673888498e7,
    6204484017332394e8,
    15511210043330986e9,
    40329146112660565e10,
    10888869450418352e12,
    30488834461171387e13,
    8.841761993739702e30,
    26525285981219107e16,
    8222838654177922e18,
    2631308369336935e20,
    8683317618811886e21,
    29523279903960416e22,
    1.0333147966386145e40,
    37199332678990125e25,
    13763753091226346e27,
    5230226174666011e29,
    20397882081197444e30,
    8159152832478977e32,
    3345252661316381e34,
    140500611775288e37,
    6041526306337383e37,
    2658271574788449e39,
    11962222086548019e40,
    5502622159812089e42,
    25862324151116818e43,
    12413915592536073e45,
    6082818640342675e47,
    30414093201713376e48,
    15511187532873822e50,
    8065817517094388e52,
    42748832840600255e53,
    2308436973392414e56,
    12696403353658276e57,
    7109985878048635e59,
    40526919504877214e60,
    23505613312828785e62,
    1.3868311854568984e80,
    832098711274139e67,
    5075802138772248e68,
    3146997326038794e70,
    198260831540444e73,
    12688693218588417e73,
    8.247650592082472e90,
    5443449390774431e77,
    3647111091818868e79,
    24800355424368305e80,
    1711224524281413e83,
    1.1978571669969892e100,
    8504785885678623e86,
    61234458376886085e87,
    44701154615126844e89,
    3307885441519386e92,
    248091408113954e95,
    18854947016660504e95,
    14518309202828587e97,
    11324281178206297e99,
    8946182130782976e101,
    7156945704626381e103,
    5.797126020747368e120,
    4753643337012842e107,
    3945523969720659e109,
    3314240134565353e111,
    281710411438055e114,
    2.4227095383672734e130,
    2107757298379528e117,
    18548264225739844e118,
    1650795516090846e121,
    14857159644817615e122,
    1.352001527678403e140,
    12438414054641308e126,
    11567725070816416e128,
    1087366156656743e131,
    1032997848823906e133,
    9916779348709496e134,
    9619275968248212e136,
    9426890448883248e138,
    9332621544394415e140,
    9332621544394415e142,
    942594775983836e145,
    9614466715035127e146,
    990290071648618e149,
    10299016745145628e150,
    1081396758240291e153,
    1.1462805637347084e170,
    1226520203196138e157,
    1324641819451829e159,
    14438595832024937e160,
    1588245541522743e163,
    1.7629525510902446e180,
    1974506857221074e167,
    22311927486598138e168,
    25435597334721877e170,
    2925093693493016e173,
    3.393108684451898e190,
    3969937160808721e177,
    4684525849754291e179,
    5574585761207606e181,
    6689502913449127e183,
    8.094298525273444e200,
    9875044200833601e187,
    1214630436702533e190,
    1506141741511141e192,
    1882677176888926e194,
    2372173242880047e196,
    30126600184576594e197,
    3856204823625804e200,
    4974504222477287e202,
    6466855489220474e204,
    847158069087882e207,
    11182486511960043e208,
    14872707060906857e210,
    19929427461615188e212,
    2.6904727073180504e230,
    3659042881952549e217,
    5012888748274992e219,
    6917786472619489e221,
    9615723196941089e223,
    13462012475717526e225,
    1898143759076171e228,
    2695364137888163e230,
    3854370717180073e232,
    55502938327393044e233,
    8047926057471992e236,
    11749972043909107e238,
    1727245890454639e241,
    25563239178728654e242,
    3.80892263763057e260,
    5713383956445855e247,
    862720977423324e250,
    13113358856834524e251,
    20063439050956823e253,
    30897696138473508e255,
    4789142901463394e258,
    7471062926282894e260,
    11729568794264145e262,
    1.853271869493735e280,
    29467022724950384e266,
    47147236359920616e268,
    7590705053947219e271,
    12296942187394494e273,
    20044015765453026e275,
    3287218585534296e278,
    5423910666131589e280,
    9003691705778438e282,
    1.503616514864999e300,
    25260757449731984e286,
    4269068009004705e289,
    7257415615307999e291
];
function n36(n) {
    return t9(n) ? NaN : e12(n) ? n < 0 ? NaN : n <= 170 ? m13[n] : I1 : v1(n + 1);
}
function n37(n) {
    return n === I1 || n === e6;
}
var i18 = .6931471803691238, d20 = 1.9082149292705877e-10;
function m14(m) {
    var o, a, h, j, l, f, p, v, b, c, u, g;
    return 0 === m ? e5 : t3(m) || m < 0 ? NaN : (l = 0, (a = d(m)) < 1048576 && (l -= 54, a = d(m *= 0x40000000000000)), a >= 2146435072 ? m + m : (l += (a >> 20) - a8 | 0, l += (v = (a &= 1048575) + 614244 & 1048576 | 0) >> 20 | 0, p = (m = d1(m, a | 1072693248 ^ v)) - 1, (1048575 & 2 + a) < 3 ? 0 === p ? 0 === l ? 0 : l * i18 + l * d20 : (f = p * p * (.5 - .3333333333333333 * p), 0 === l ? p - f : l * i18 - (f - l * d20 - p)) : (v = a - 398458 | 0, b = 440401 - a | 0, j = (u = (g = (c = p / (2 + p)) * c) * g) * function(t) {
        return 0 === t ? .3999999999940942 : .3999999999940942 + t * (.22222198432149784 + .15313837699209373 * t);
    }(u), h = g * function(t) {
        return 0 === t ? .6666666666666735 : .6666666666666735 + t * (.2857142874366239 + t * (.1818357216161805 + .14798198605116586 * t));
    }(u), f = h + j, (v |= b) > 0 ? (o = .5 * p * p, 0 === l ? p - (o - c * (o + f)) : l * i18 - (o - (c * (o + f) + l * d20) - p)) : 0 === l ? p - c * (p - f) : l * i18 - (c * (p - f) - l * d20 - p))));
}
var a61 = Math.ceil;
function t23(t) {
    return t < 0 ? a61(t) : a10(t);
}
var i19 = [
    0,
    0
];
function n38(n) {
    var m;
    if (m = d(n), (m &= 2147483647) <= 1072243195) return m < 1044381696 ? 1 : e13(n, 0);
    if (m >= 2146435072) return NaN;
    switch(3 & q2(n, i19)){
        case 0:
            return e13(i19[0], i19[1]);
        case 1:
            return -r40(i19[0], i19[1]);
        case 2:
            return -e13(i19[0], i19[1]);
        default:
            return r40(i19[0], i19[1]);
    }
}
var d21 = [
    0,
    0
];
function i20(i, m) {
    var o, a;
    return f2.assign(i, d21, 1, 0), o = d21[0], o &= a32, a = d12(m), j4(o |= a &= a21, d21[1]);
}
function r45(r) {
    var a, j;
    return t9(r) || n11(r) ? NaN : 0 === (a = t10(j = r % 2)) || 1 === a ? i20(0, j) : a < .25 ? d19(a57 * j) : a < .75 ? i20(n38(a57 * (a = .5 - a)), j) : a < 1.25 ? (j = i20(1, j) - j, d19(a57 * j)) : a < 1.75 ? -i20(n38(a57 * (a -= 1.5)), j) : (j -= i20(2, j), d19(a57 * j));
}
var c3 = 1.4616321449683622, d22 = 1.4616321449683622;
function f6(f) {
    var o, u, l, h, j, p, v, b, x, g, k, w, q;
    if (t3(f) || n37(f)) return f;
    if (0 === f) return I;
    if (f < 0 ? (o = !0, f = -f) : o = !1, f < 8470329472543003e-37) return -m14(f);
    if (o) {
        if (f >= 4503599627370496) return I;
        if (0 === (x = r45(f))) return I;
        u = m14(a49 / t20(x * f));
    }
    if (1 === f || 2 === f) return 0;
    if (f < 2) switch(f <= .9 ? (q = -m14(f), f >= c3 - 1 + .27 ? (k = 1 - f, l = 0) : f >= c3 - 1 - .27 ? (k = f - (d22 - 1), l = 1) : (k = f, l = 2)) : (q = 0, f >= c3 + .27 ? (k = 2 - f, l = 0) : f >= c3 - .27 ? (k = f - d22, l = 1) : (k = f - 1, l = 2)), l){
        case 0:
            p = .07721566490153287 + (w = k * k) * function(t) {
                return 0 === t ? .06735230105312927 : .06735230105312927 + t * (.007385550860814029 + t * (.0011927076318336207 + t * (.00022086279071390839 + 25214456545125733e-21 * t)));
            }(w), j = w * (.3224670334241136 + w * function(t) {
                return 0 === t ? .020580808432516733 : .020580808432516733 + t * (.0028905138367341563 + t * (.0005100697921535113 + t * (.00010801156724758394 + 44864094961891516e-21 * t)));
            }(w)), q += (v = k * p + j) - .5 * k;
            break;
        case 1:
            p = .48383612272381005 + (g = (w = k * k) * k) * function(t) {
                return 0 === t ? -.032788541075985965 : t * (.006100538702462913 + t * (.00031563207090362595 * t - .0014034646998923284)) - .032788541075985965;
            }(g), j = g * function(t) {
                return 0 === t ? .01797067508118204 : .01797067508118204 + t * (t * (.000881081882437654 + -.00031275416837512086 * t) - .0036845201678113826);
            }(g) - .1475877229945939, h = .06462494023913339 + g * function(t) {
                return 0 === t ? -.010314224129834144 : t * (.0022596478090061247 + t * (.0003355291926355191 * t - .0005385953053567405)) - .010314224129834144;
            }(g), q += -.12148629053584961 + (v = w * p - (-3638676997039505e-33 - g * (j + k * h)));
            break;
        case 2:
            p = k * (k * function(t) {
                return 0 === t ? .6328270640250934 : .6328270640250934 + t * (1.4549225013723477 + t * (.9777175279633727 + t * (.22896372806469245 + .013381091853678766 * t)));
            }(k) - .07721566490153287), j = 1 + k * function(t) {
                return 0 === t ? 2.4559779371304113 : 2.4559779371304113 + t * (2.128489763798934 + t * (.7692851504566728 + t * (.10422264559336913 + .003217092422824239 * t)));
            }(k), q += -.5 * k + p / j;
    }
    else if (f < 8) switch(v = (k = f - (l = t23(f))) * (k * function(t) {
        return 0 === t ? .21498241596060885 : .21498241596060885 + t * (.325778796408931 + t * (.14635047265246445 + t * (.02664227030336386 + t * (.0018402845140733772 + 3194753265841009e-20 * t))));
    }(k) - .07721566490153287), b = 1 + k * function(t) {
        return 0 === t ? 1.3920053346762105 : 1.3920053346762105 + t * (.7219355475671381 + t * (.17193386563280308 + t * (.01864591917156529 + t * (.0007779424963818936 + 7326684307446256e-21 * t))));
    }(k), q = .5 * k + v / b, w = 1, l){
        case 7:
            w *= k + 6;
        case 6:
            w *= k + 5;
        case 5:
            w *= k + 4;
        case 4:
            w *= k + 3;
        case 3:
            q += m14(w *= k + 2);
    }
    else f < 0x400000000000000 ? (x = m14(f), g = .4189385332046727 + (w = 1 / f) * function(t) {
        return 0 === t ? .08333333333333297 : .08333333333333297 + t * (t * (.0007936505586430196 + t * (t * (.0008363399189962821 + -.0016309293409657527 * t) - .00059518755745034)) - .0027777777772877554);
    }(k = w * w), q = (f - .5) * (x - 1) + g) : q = f * (m14(f) - 1);
    return o && (q = u - q), q;
}
var i21 = .6931471803691238, d23 = 1.9082149292705877e-10;
function m15(m) {
    var o, a, h, j, l, f, p, v, b, c, u, g;
    return 0 === m ? e5 : t3(m) || m < 0 ? NaN : (l = 0, (a = d(m)) < 1048576 && (l -= 54, a = d(m *= 0x40000000000000)), a >= 2146435072 ? m + m : (l += (a >> 20) - a8 | 0, l += (v = (a &= 1048575) + 614244 & 1048576 | 0) >> 20 | 0, p = (m = d1(m, a | 1072693248 ^ v)) - 1, (1048575 & 2 + a) < 3 ? 0 === p ? 0 === l ? 0 : l * i21 + l * d23 : (f = p * p * (.5 - .3333333333333333 * p), 0 === l ? p - f : l * i21 - (f - l * d23 - p)) : (v = a - 398458 | 0, b = 440401 - a | 0, j = (u = (g = (c = p / (2 + p)) * c) * g) * function(t) {
        return 0 === t ? .3999999999940942 : .3999999999940942 + t * (.22222198432149784 + .15313837699209373 * t);
    }(u), h = g * function(t) {
        return 0 === t ? .6666666666666735 : .6666666666666735 + t * (.2857142874366239 + t * (.1818357216161805 + .14798198605116586 * t));
    }(u), f = h + j, (v |= b) > 0 ? (o = .5 * p * p, 0 === l ? p - (o - c * (o + f)) : l * i21 - (o - (c * (o + f) + l * d23) - p)) : 0 === l ? p - c * (p - f) : l * i21 - (c * (p - f) - l * d23 - p))));
}
var a62 = 1.4901161193847656e-8;
var a63 = 17976931348623157e292;
var a64 = 709.782712893384;
var i22 = .8450629115104675;
function f7(f) {
    var u, o, m, d, a, c, l, j;
    if (t9(f)) return NaN;
    if (f === I1) return 0;
    if (f === e6) return 2;
    if (0 === f) return 1;
    if (f < 0 ? (u = !0, o = -f) : (u = !1, o = f), o < .84375) return o < 13877787807814457e-33 ? 1 - f : (d = .12837916709551256 + (m = f * f) * function(t) {
        return 0 === t ? -.3250421072470015 : t * (t * (-23763016656650163e-21 * t - .005770270296489442) - .02848174957559851) - .3250421072470015;
    }(m), a = 1 + m * function(t) {
        return 0 === t ? .39791722395915535 : .39791722395915535 + t * (.0650222499887673 + t * (.005081306281875766 + t * (.00013249473800432164 + -3960228278775368e-21 * t)));
    }(m), c = d / a, f < .25 ? 1 - (f + f * c) : (d = f * c, .5 - (d += f - .5)));
    if (o < 1.25) return l = (a = o - 1) * function(t) {
        return 0 === t ? .41485611868374833 : .41485611868374833 + t * (t * (.31834661990116175 + t * (t * (.035478304325618236 + -.002166375594868791 * t) - .11089469428239668)) - .3722078760357013);
    }(a) - .0023621185607526594, j = 1 + a * function(t) {
        return 0 === t ? .10642088040084423 : .10642088040084423 + t * (.540397917702171 + t * (.07182865441419627 + t * (.12617121980876164 + t * (.01363708391202905 + .011984499846799107 * t))));
    }(a), u ? 1 + i22 + l / j : 1 - i22 - l / j;
    if (o < 28) {
        if (a = 1 / (o * o), o < 2.857142857142857) d = a * function(t) {
            return 0 === t ? -.6938585727071818 : t * (t * (t * (t * (t * (-9.814329344169145 * t - 81.2874355063066) - 184.60509290671104) - 162.39666946257347) - 62.375332450326006) - 10.558626225323291) - .6938585727071818;
        }(a) - .009864944034847148, a = 1 + a * function(t) {
            return 0 === t ? 19.651271667439257 : 19.651271667439257 + t * (137.65775414351904 + t * (434.56587747522923 + t * (645.3872717332679 + t * (429.00814002756783 + t * (108.63500554177944 + t * (6.570249770319282 + -.0604244152148581 * t))))));
        }(a);
        else {
            if (f < -6) return 2;
            d = a * function(t) {
                return 0 === t ? -.799283237680523 : t * (t * (t * (t * (-483.5191916086514 * t - 1025.0951316110772) - 637.5664433683896) - 160.63638485582192) - 17.757954917754752) - .799283237680523;
            }(a) - .0098649429247001, a = 1 + a * function(t) {
                return 0 === t ? 30.33806074348246 : 30.33806074348246 + t * (325.7925129965739 + t * (1536.729586084437 + t * (3199.8582195085955 + t * (2553.0504064331644 + t * (474.52854120695537 + -22.44095244658582 * t)))));
            }(a);
        }
        return m = d11(o, 0), d = r34(-m * m - .5625) * r34((m - o) * (m + o) + d / a), u ? 2 - d / o : d / o;
    }
    return u ? 2 : 0;
}
var a65 = -708.3964185322641;
var a66 = Function;
function n39(r, e) {
    var n, t;
    if ((t = r.length) < 2 || 0 === e) return 0 === t ? 0 : r[0];
    for(n = r[t -= 1] * e + r[t - 1], t -= 2; t >= 0;)n = n * e + r[t], t -= 1;
    return n;
}
function t24(r) {
    var t, o, i, f;
    if (r.length > 500) return function(e) {
        return n39(r, e);
    };
    if (t = "return function evalpoly(x){", 0 === (o = r.length)) t += "return 0.0;";
    else if (1 === o) t += "return " + r[0] + ";";
    else {
        for(t += "if(x===0.0){return " + r[0] + ";}", t += "return " + r[0], i = o - 1, f = 1; f < o; f++)t += "+x*", f < i && (t += "("), t += r[f];
        for(f = 0; f < i - 1; f++)t += ")";
        t += ";";
    }
    return t += "}", new a66(t += "//# sourceURL=evalpoly.factory.js")();
}
t14(n39, "factory", t24);
var a67 = 2220446049250313e-31;
var a68 = eval;
function s18() {
    var s;
    try {
        a68('"use strict"; (function* () {})'), s = !0;
    } catch (t) {
        s = !1;
    }
    return s;
}
var n40 = s18() ? function(e, n) {
    var r, i, a, o, l;
    if (l = {}, arguments.length > 1 && (l = n), r = l.tolerance || a43, a = l.maxTerms || 1e6, o = l.initialValue || 0, !0 == ("function" == typeof e.next)) {
        for (i of e)if (t10(r * (o += i)) >= t10(i) || 0 == --a) break;
    } else do {
        o += i = e();
    }while (t10(r * o) < t10(i) && --a)
    return o;
} : function(e, n) {
    var r, i, a, o, l;
    l = {}, arguments.length > 1 && (l = n), r = l.tolerance || a43, a = l.maxTerms || 1e6, o = l.initialValue || 0;
    do {
        o += i = e();
    }while (t10(r * o) < t10(i) && --a)
    return o;
};
function n41(n) {
    var r, m;
    return n <= -1 ? NaN : (m = t20(n)) > .95 ? m14(1 + n) - n : m < a67 ? -n * n / 2 : (r = {
        initialValue: -n
    }, n40(function(s) {
        var t = -s, e = -1, i = 0;
        return function() {
            return (e *= t) / (i += 1);
        };
    }(n), r));
}
var a69 = 6.283185307179586;
function e15(e) {
    var r, t;
    return 0 === e ? 1 / 0 : ((e < 0 ? -e : e) <= 1 ? (r = 709811.662581658 + e * (679979.8474157227 + e * (293136.7857211597 + e * (74887.54032914672 + e * (12555.290582413863 + e * (1443.4299244417066 + e * (115.24194596137347 + e * (6.309239205732627 + e * (.22668404630224365 + e * (.004826466289237662 + 4624429436045379e-20 * e))))))))), t = 0 + e * (362880 + e * (1026576 + e * (1172700 + e * (723680 + e * (269325 + e * (63273 + e * (9450 + e * (870 + e * (45 + 1 * e)))))))))) : (r = 4624429436045379e-20 + (e = 1 / e) * (.004826466289237662 + e * (.22668404630224365 + e * (6.309239205732627 + e * (115.24194596137347 + e * (1443.4299244417066 + e * (12555.290582413863 + e * (74887.54032914672 + e * (293136.7857211597 + e * (679979.8474157227 + 709811.662581658 * e))))))))), t = 1 + e * (45 + e * (870 + e * (9450 + e * (63273 + e * (269325 + e * (723680 + e * (1172700 + e * (1026576 + e * (362880 + 0 * e)))))))))), r / t);
}
function n42(n) {
    return 0 === n && 1 / n === I;
}
function i23(i, n) {
    return t9(i) || t9(n) ? NaN : i === I2 || n === I2 ? I2 : i === n && 0 === i ? n42(i) ? i : n : i > n ? i : n;
}
function n43(n) {
    return 0 === n && 1 / n === e5;
}
function n44(n, i) {
    return t9(n) || t9(i) ? NaN : n === e7 || i === e7 ? e7 : n === i && 0 === n ? n43(n) ? n : i : n < i ? n : i;
}
function n45(n, a) {
    var d;
    if (t9(n) || t9(a)) return NaN;
    if (0 === a) return 0;
    if (0 === n) return -1;
    if (n < 0 && a % 2 == 0 && (n = -n), n > 0) {
        if ((t10(a * (n - 1)) < .5 || t10(a) < .2) && (d = m15(n) * a) < .5) return l2(d);
    } else if (t11(a) !== a) return NaN;
    return z(n, a) - 1;
}
function m16(e, s, t) {
    var i, m, a, d, l, o, p;
    if (e < a67) return -m14(e);
    if (0 === s || 0 === t) return 0;
    if (m = 0, e > 2) {
        if (e >= 3) {
            do {
                t -= 1, m += m14(e -= 1);
            }while (e >= 3)
            t = e - 2;
        }
        return m += .15896368026733398 * (a = t * (e + 1)) + a * (d = 0 === (l = t) ? -.01803556856784494 : ((l < 0 ? -l : l) <= 1 ? (o = l * (.02512664961998968 + l * (.049410315156753225 + l * (.0172491608709614 + l * (l * (l * (0 * l - 3245886498259485e-20) - .0005410098692152044) - .0002594535632054381)))) - .01803556856784494, p = 1 + l * (1.962029871977952 + l * (1.4801966942423133 + l * (.5413914320717209 + l * (.09885042511280101 + l * (.008213096746488934 + l * (.00022493629192211576 + -2.2335276320861708e-7 * l))))))) : (o = 0 + (l = 1 / l) * (l * (l * (l * (.0172491608709614 + l * (.049410315156753225 + l * (.02512664961998968 + -.01803556856784494 * l))) - .0002594535632054381) - .0005410098692152044) - 3245886498259485e-20), p = l * (.00022493629192211576 + l * (.008213096746488934 + l * (.09885042511280101 + l * (.5413914320717209 + l * (1.4801966942423133 + l * (1.962029871977952 + 1 * l)))))) - 2.2335276320861708e-7), o / p));
    }
    return e < 1 && (m += -m14(e), t = s, s = e, e += 1), e <= 1.5 ? (a = function(e) {
        var s, t;
        return 0 === e ? .04906224540690395 : ((e < 0 ? -e : e) <= 1 ? (s = .04906224540690395 + e * (e * (e * (e * (e * (-.0010034668769627955 * e - .024014982064857155) - .1584135863906922) - .4065671242119384) - .4149833583594954) - .09691175301595212), t = 1 + e * (3.0234982984646304 + e * (3.4873958536072385 + e * (1.9141558827442668 + e * (.5071377386143635 + e * (.05770397226904519 + .001957681026011072 * e)))))) : (s = (e = 1 / e) * (e * (e * (e * (e * (.04906224540690395 * e - .09691175301595212) - .4149833583594954) - .4065671242119384) - .1584135863906922) - .024014982064857155) - .0010034668769627955, t = .001957681026011072 + e * (.05770397226904519 + e * (.5071377386143635 + e * (1.9141558827442668 + e * (3.4873958536072385 + e * (3.0234982984646304 + 1 * e)))))), s / t);
    }(s), m += .5281534194946289 * (i = s * t) + i * a) : (a = t * s, d = function(e) {
        var s, t;
        return 0 === e ? -.029232972183027003 : ((e < 0 ? -e : e) <= 1 ? (s = e * (.14421626775719232 + e * (e * (.05428096940550536 + e * (e * (.0004311713426792973 + 0 * e) - .008505359768683364)) - .14244039073863127)) - .029232972183027003, t = 1 + e * (e * (.846973248876495 + e * (e * (.02558279715597587 + e * (-8.271935218912905e-7 * e - .0010066679553914337)) - .22009515181499575)) - 1.5016935605448505)) : (s = 0 + (e = 1 / e) * (.0004311713426792973 + e * (e * (.05428096940550536 + e * (e * (.14421626775719232 + -.029232972183027003 * e) - .14244039073863127)) - .008505359768683364)), t = e * (e * (.02558279715597587 + e * (e * (.846973248876495 + e * (1 * e - 1.5016935605448505)) - .22009515181499575)) - .0010066679553914337) - 8.271935218912905e-7), s / t);
    }(-t), m += .45201730728149414 * a + a * d);
}
function a70(n) {
    return t3(n) ? NaN : n < 0 ? n < -.5 ? v3(1 + n) - 1 : l2(-o16(n) + m16(n + 2, n + 1, n)) : n < 2 ? l2(m16(n + 1, n, n - 1)) : v3(1 + n) - 1;
}
var a71 = 11754943508222875e-54;
function s19(e, r, s) {
    var o, i, l, a, d, m, u;
    if (a = (u = (o = "function" == typeof e.next) ? e.next().value : e())[1], l = u[0], 0 === a && (a = a71), d = a, m = 0, !0 === o) do {
        (u = e.next().value) && (0 === (m = u[1] + u[0] * m) && (m = a71), 0 === (d = u[1] + u[0] / d) && (d = a71), a *= i = d * (m = 1 / m));
    }while (t10(i - 1) > r && --s)
    else do {
        (u = e()) && (0 === (m = u[1] + u[0] * m) && (m = a71), 0 === (d = u[1] + u[0] / d) && (d = a71), a *= i = d * (m = 1 / m));
    }while (u && t10(i - 1) > r && --s)
    return l / a;
}
function o26(e, r, s) {
    var o, i, l, a, d, m;
    if (0 === (l = (m = (o = "function" == typeof e.next) ? e.next().value : e())[1]) && (l = a71), a = l, d = 0, !0 === o) do {
        (m = e.next().value) && (0 === (d = m[1] + m[0] * d) && (d = a71), 0 === (a = m[1] + m[0] / a) && (a = a71), l *= i = a * (d = 1 / d));
    }while (m && t10(i - 1) > r && --s)
    else do {
        (m = e()) && (0 === (d = m[1] + m[0] * d) && (d = a71), 0 === (a = m[1] + m[0] / a) && (a = a71), l *= i = a * (d = 1 / d));
    }while (m && t10(i - 1) > r && --s)
    return l;
}
function i24(e, r, s) {
    var o, i, l, a, d, m;
    d = (m = e())[1], i = m[0], 0 === d && (d = a71), l = d, a = 0;
    do {
        (m = e()) && (0 === (a = m[1] + m[0] * a) && (a = a71), 0 === (l = m[1] + m[0] / l) && (l = a71), d *= o = l * (a = 1 / a));
    }while (m && t10(o - 1) > r && --s)
    return i / d;
}
function l11(e, r, s) {
    var o, i, l, a, d;
    0 === (a = (d = e())[1]) && (a = a71), i = a, l = 0;
    do {
        (d = e()) && (0 === (l = d[1] + d[0] * l) && (l = a71), 0 === (i = d[1] + d[0] / i) && (i = a71), a *= o = i * (l = 1 / l));
    }while (d && t10(o - 1) > r && --s)
    return a;
}
var a72 = s18() ? function(e, t) {
    var n, i, l;
    return i = {}, arguments.length > 1 && (i = t), n = i.maxIter || 1e6, l = i.tolerance || a43, i.keep ? o26(e, l, n) : s19(e, l, n);
} : function(e, t) {
    var n, s, o;
    return s = {}, arguments.length > 1 && (s = t), o = s.tolerance || a43, n = s.maxIter || 1e6, s.keep ? l11(e, o, n) : i24(e, o, n);
};
function B(t, s) {
    var e;
    return e = t * m15(s), s >= 1 ? e < a64 && -s > a65 ? z(s, t) * r34(-s) : t >= 1 ? z(s / r34(s / t), t) : r34(e - s) : e > a65 ? z(s, t) * r34(-s) : s / t < a64 ? z(s / r34(s / t), t) : r34(e - s);
}
var C = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
function D(t, s, e) {
    var n;
    return e = e || 0, n = function(t, s) {
        var e = 1, n = t, i = s;
        return function() {
            var t = e;
            return e *= i / (n += 1), t;
        };
    }(t, s), n40(n, {
        initialValue: e
    });
}
function E(s, a) {
    var o, d, c, p, h, v, u;
    return u = (a - s - a60 + .5) / (c = s + a60 - .5), s < 1 ? a <= a65 ? r34(s * m15(a) - a - f6(s)) : z(a, s) * r34(-a) / v1(s) : (t10(u * u * s) <= 100 && s > 150 ? (o = s * (o17(u) - u) + a * (.5 - a60) / c, o = r34(o)) : (p = s * m15(a / c), n44(p, h = s - a) <= a65 || i23(p, h) >= a64 ? (d = h / s, n44(p, h) / 2 > a65 && i23(p, h) / 2 < a64 ? o = (v = z(a / c, s / 2) * r34(h / 2)) * v : n44(p, h) / 4 > a65 && i23(p, h) / 4 < a64 && a > s ? (o = (v = z(a / c, s / 4) * r34(h / 4)) * v, o *= o) : o = d > a65 && d < a64 ? z(a * r34(d) / c, s) : r34(p + h)) : o = z(a / c, s) * r34(h)), o *= a13(c / a42) / e15(s));
}
function F(t, s) {
    var e = function(t, s) {
        var e = s - t + 1, n = t, i = 0;
        return function() {
            return [
                (i += 1) * (n - i),
                e += 2
            ];
        };
    }(t, s);
    return 1 / (s - t + 1 + a72(e));
}
function G(f, x, k, w) {
    var q, z1, N, A, H, I, J, K, L, M, O, P, Q;
    if (f < 0 || x <= 0) return NaN;
    if (z1 = void 0 === k || k, J = w, K = 0, x >= 170 && !z1) return J && 4 * x < f ? (K = x * m15(f) - f, K += m15(F(x, f))) : !J && x > 4 * f ? (K = x * m15(f) - f, K += m15(D(x, f, A = 0) / x)) : 0 === (K = G(x, f, !0, J)) ? J ? (K = m15(K = 1 + 1 / (12 * x) + 1 / (288 * x * x)) - x + (x - .5) * m15(x), K += m15(a58)) : (K = x * m15(f) - f, K += m15(D(x, f, A = 0) / x)) : K = m15(K) + f6(x), K > a64 ? I1 : r34(K);
    switch(x < 30 && x <= f + 1 && f < a64 ? H = !(L = (P = a(x)) === x) && .5 === t10(P - x) : L = H = !1, L && f > .6 ? (J = !J, N = 0) : H && f > .2 ? (J = !J, N = 1) : f < a62 && x > 1 ? N = 6 : f < .5 ? N = -.4 / m15(f) < x ? 2 : 3 : f < 1.1 ? N = .75 * f < x ? 2 : 3 : (I = !1, z1 && x > 20 && (M = t10((f - x) / x), x > 200 ? 20 / x > M * M && (I = !0) : M < .4 && (I = !0)), I ? N = 5 : f - 1 / (3 * f) < x ? N = 2 : (N = 4, J = !J)), N){
        case 0:
            K = function(t, s) {
                var e, n, r;
                if (0 !== (n = r34(-s))) for(e = n, r = 1; r < t; ++r)e /= r, n += e *= s;
                return n;
            }(x, f), !1 === z1 && (K *= v1(x));
            break;
        case 1:
            K = function(t, s) {
                var e, n, r, m;
                if (0 !== (r = f7(a13(s))) && t > 1) {
                    for(e = r34(-s) / a13(a57 * s), e *= s, n = e /= .5, m = 2; m < t; ++m)e /= m - .5, n += e *= s;
                    r += n;
                }
                return r;
            }(x, f), !1 === z1 && (K *= v1(x));
            break;
        case 2:
            0 !== (K = z1 ? E(x, f) : B(x, f)) && (A = 0, q = !1, J && (A = z1 ? 1 : v1(x), z1 || K >= 1 || a63 * K > A ? (A /= K, z1 || x < 1 || a63 / x > A ? (A *= -x, q = !0) : A = 0) : A = 0)), K *= D(x, f, A) / x, q && (J = !1, K = -K);
            break;
        case 3:
            O = function(t, s, e) {
                var n, i, r, m;
                return i = ((n = a70(t)) + 1) / t, n -= r = n45(s, t), n /= t, m = function(t, s) {
                    var e, n, i, r;
                    return e = -s, s = -s, n = t + 1, i = 1, function() {
                        return r = e / n, e *= s, e /= i += 1, n += 1, r;
                    };
                }(t, s), n = -(r += 1) * n40(m, {
                    initialValue: ((e ? i : 0) - n) / r
                }), e && (n = -n), [
                    n,
                    i
                ];
            }(x, f, J = !J), K = O[0], Q = O[1], J = !1, z1 && (K /= Q);
            break;
        case 4:
            0 !== (K = z1 ? E(x, f) : B(x, f)) && (K *= F(x, f));
            break;
        case 5:
            K = function(t, s) {
                var e, n, r, m;
                return r = t * (n = -n41((s - t) / t)), m = a13(2 * n), s < t && (m = -m), C[0] = function(t) {
                    return 0 === t ? -.3333333333333333 : t * (.08333333333333333 + t * (t * (.0011574074074074073 + t * (.0003527336860670194 + t * (t * (3919263178522438e-20 + t * (t * (t * (8.296711340953087e-7 + t * (t * (6.707853543401498e-9 + t * (1.0261809784240309e-8 + t * (9.14769958223679e-10 * t - 4.382036018453353e-9))) - 1.7665952736826078e-7)) - 185406221071516e-20) - 21854485106799924e-22)) - .0001787551440329218))) - .014814814814814815)) - .3333333333333333;
                }(m), C[1] = function(t) {
                    return 0 === t ? -.001851851851851852 : t * (t * (.0026455026455026454 + t * (t * (.00020576131687242798 + t * (t * (t * (764916091608111e-20 + t * (t * (4.647127802807434e-9 + t * (1.378633446915721e-7 + t * (1.1951628599778148e-8 * t - 5.752545603517705e-8))) - 16120900894563446e-22)) - 18098550334489977e-21) - 4.018775720164609e-7)) - .0009902263374485596)) - .003472222222222222) - .001851851851851852;
                }(m), C[2] = function(t) {
                    return 0 === t ? .004133597883597883 : .004133597883597883 + t * (t * (.0007716049382716049 + t * (20093878600823047e-22 + t * (t * (52923448829120125e-21 + t * (t * (3.423578734096138e-8 + t * (13721957309062932e-22 + t * (1.4280614206064242e-7 * t - 6.298992138380055e-7))) - 12760635188618728e-21)) - .00010736653226365161))) - .0026813271604938273);
                }(m), C[3] = function(t) {
                    return 0 === t ? .0006494341563786008 : .0006494341563786008 + t * (.00022947209362139917 + t * (t * (.00026772063206283885 + t * (t * (t * (11082654115347302e-21 + t * (14230900732435883e-22 * t - 56749528269915965e-22)) - 2.396505113867297e-7) - 7561801671883977e-20)) - .0004691894943952557));
                }(m), C[4] = function(t) {
                    return 0 === t ? -.0008618882909167117 : t * (.0007840392217200666 + t * (t * (t * (6641498215465122e-20 + t * (11375726970678419e-21 * t - 3968365047179435e-20)) - 14638452578843418e-22) - .0002990724803031902)) - .0008618882909167117;
                }(m), C[5] = function(t) {
                    return 0 === t ? -.00033679855336635813 : t * (t * (.0002772753244959392 + t * (t * (6797780477937208e-20 + t * (1.419062920643967e-7 + t * (t * (8018470256334202e-21 + -2291481176508095e-21 * t) - 13594048189768693e-21))) - .00019932570516188847)) - 6972813758365858e-20) - .00033679855336635813;
                }(m), C[6] = function(t) {
                    return 0 === t ? .0005313079364639922 : .0005313079364639922 + t * (t * (.0002708782096718045 + t * (7.902353232660328e-7 + t * (t * (561168275310625e-19 + -18329116582843375e-21 * t) - 8153969367561969e-20))) - .0005921664373536939);
                }(m), C[7] = function(t) {
                    return 0 === t ? .00034436760689237765 : .00034436760689237765 + t * (5171790908260592e-20 + t * (t * (.0002812695154763237 + -.00010976582244684731 * t) - .00033493161081142234));
                }(m), C[8] = function(t) {
                    return 0 === t ? -.0006526239185953094 : t * (.0008394987206720873 + -.000438297098541721 * t) - .0006526239185953094;
                }(m), C[9] = -.0005967612901927463, e = n39(C, 1 / t), e *= r34(-r) / a13(a69 * t), s < t && (e = -e), e + f7(a13(r)) / 2;
            }(x, f), f >= x && (J = !J);
            break;
        case 6:
            K = z1 ? z(f, x) / v1(x + 1) : z(f, x) / x, K *= 1 - x * f / (x + 1);
    }
    return z1 && K > 1 && (K = 1), J && (K = (z1 ? 1 : v1(x)) - K), K;
}
var a73 = 709.782712893384;
var a74 = -708.3964185322641;
var a75 = 10.900511;
var a76 = 2.718281828459045;
function e16(e, i) {
    return i23(t10(e), t10(i));
}
function e17(e, i) {
    return n44(t10(e), t10(i));
}
function e18(e) {
    return a10(e) === e;
}
function e19(e) {
    return e18(e / 2);
}
function s20(s) {
    return e19(s > 0 ? s - 1 : s + 1);
}
function i25(n, d) {
    var m, a;
    if (t9(n) || t9(d)) return NaN;
    if (!e18(n) || !e18(d)) return NaN;
    if (d < 0) return 0;
    if (n < 0) return m = i25(-n + d - 1, d), s20(d) && (m = -m), m;
    if (d > n) return 0;
    if (0 === d || d === n) return 1;
    if (1 === d || d === n - 1) return n;
    for(n - d < d && (d = n - d), m = n, a = 2; a <= d; a++)m *= (n - a + 1) / a;
    return e18(m) ? m : a55(m);
}
var a77 = 709.782712893384;
var a78 = -708.3964185322641;
var a79 = 10.900511;
var a80 = 2.718281828459045;
var M = new Array(30);
function O(s, t, e, i, r, m, f) {
    var h, c, v, V, B, C, D, E, F, G1, H, J, K, L, O, P, Q, R;
    if (J = function(s, t) {
        var e, i, r, m, f, p, h;
        return h = (t - s - a75 + .5) / (r = s + a75 - .5), s < 1 ? t <= a74 ? r34(s * m14(t) - t - f6(s)) : z(t, s) * r34(-t) / v1(s) : (t20(h * h * s) <= 100 && s > 150 ? (e = s * (o16(h) - h) + t * (.5 - a75) / r, e = r34(e)) : (m = s * m14(t / r), n31(m, f = s - t) <= a74 || i15(m, f) >= a73 ? (i = f / s, n31(m, f) / 2 > a74 && i15(m, f) / 2 < a73 ? e = (p = z(t / r, s / 2) * r34(f / 2)) * p : n31(m, f) / 4 > a74 && i15(m, f) / 4 < a73 && t > s ? (e = (p = z(t / r, s / 4) * r34(f / 4)) * p, e *= e) : e = i > a74 && i < a73 ? z(t * r34(i) / r, s) : r34(m + f)) : e = z(t / r, s) * r34(f)), e *= a11(r / a76) / e15(s));
    }(t, R = -(Q = s + (C = t - 1) / 2) * (G1 = i < .35 ? o16(-i) : m14(e))), J <= a46) return r;
    for(f ? (h = J / j8(s, t), h /= z(Q, t)) : h = function(s, t) {
        var e;
        return e = s * m14(t), t >= 1 ? e < a73 && -t > a74 ? z(t, s) * r34(-t) : s >= 1 ? z(t / r34(t / s), s) : r34(e - t) : e > a74 ? z(t, s) * r34(-t) : t / s < a73 ? z(t / r34(t / s), s) : r34(e - t);
    }(t, R) / z(Q, t), h *= m, M[0] = 1, K = G(R, t, !0, !0), V = r + h * (K /= J), v = 1, D = G1 / 2, D *= D, E = 1, H = 4 * Q * Q, B = t, O = 1; O < M.length; ++O){
        for(v += 2, M[O] = 0, F = t - O, c = 3, L = 1; L < O; ++L)F = L * t - O, M[O] += F * M[O - L] / n36(c), c += 2;
        if (M[O] /= O, M[O] += C / n36(v), K = (B * (B + 1) * K + (R + B + 1) * E) / H, E *= D, B += 2, V += P = h * M[O] * K, P > 1) {
            if (t20(P) < t20(a67 * V)) break;
        } else if (t20(P / a67) < t20(V)) break;
    }
    return V;
}
function P(s, t, e) {
    var i, n;
    if (0 === e) return 1;
    for(i = 1, n = 0; n < e; n++)i *= (s + n) / (t + n);
    return i;
}
function Q(s, t, i, r, m) {
    var o, f, p, h, c, v, b, g, x, k, q, A, C, D;
    if (!m) return z(i, s) * z(r, t);
    if (h = s + a75 - .5, c = t + a75 - .5, v = (C = s + t) + a75 - .5, o = e15(C), o /= e15(s) * e15(t), o *= a11(c / a76), o *= a11(h / v), e17(b = (i * t - r * h) / h, g = (r * s - i * c) / c) < .2) if (b * g > 0 || n31(s, t) < 1) t20(b) < .1 ? o *= r34(s * o16(b)) : o *= z(i * v / h, s), t20(g) < .1 ? o *= r34(t * o16(g)) : o *= z(r * v / c, t);
    else if (e16(b, g) < .5) p = t / s, (f = s < t) && p * g < .1 || !f && b / p > .1 ? (x = l2(p * o16(g)), x = s * o16(x = b + x + x * b), o *= r34(x)) : (x = l2(o16(b) / p), x = t * o16(x = g + x + x * g), o *= r34(x));
    else if (t20(b) < t20(g)) if ((D = s * o16(b) + t * m14(r * v / c)) <= a74 || D >= a73) {
        if ((D += m14(o)) >= a73) return NaN;
        o = r34(D);
    } else o *= r34(D);
    else if ((D = t * o16(g) + s * m14(i * v / h)) <= a74 || D >= a73) {
        if ((D += m14(o)) >= a73) return NaN;
        o = r34(D);
    } else o *= r34(D);
    else if (A = r * v / c, b = s * m14(q = i * v / h), g = t * m14(A), b >= a73 || b <= a74 || g >= a73 || g <= a74) if (s < t) if (k = z(A, t / s), (x = s * (m14(q) + m14(k))) < a73 && x > a74) o *= z(k * q, s);
    else {
        if ((g += b + m14(o)) >= a73) return NaN;
        o = r34(g);
    }
    else if (k = z(q, s / t), (x = (m14(k) + m14(A)) * t) < a73 && x > a74) o *= z(k * A, t);
    else {
        if ((g += b + m14(o)) >= a73) return NaN;
        o = r34(g);
    }
    else o *= z(q, s) * z(A, t);
    return o;
}
var R = {
    keep: !0,
    maxIter: 1e3
};
function S(s, t, e, i, n, r) {
    var m, a;
    return m = Q(s, t, e, i, n), r && (r[1] = m), 0 === m ? m : (a = function(s, t, e, i) {
        var n = 0;
        return function() {
            var r, m, a;
            return m = (s + n - 1) * (s + t + n - 1) * n * (t - n) * e * e, r = s + 2 * n - 1, a = n, a += n * (t - n) * e / (s + 2 * n - 1), a += (s + n) * (s * i - t * e + 1 + n * (2 - e)) / (s + 2 * n + 1), n += 1, [
                m /= r * r,
                a
            ];
        };
    }(s, t, e, i), m / a72(a, R));
}
function U(s, t, e, i, n, r, m) {
    var a, d, l, o;
    if (a = Q(s, t, e, i, r), m && (m[1] = a), 0 === (a /= s)) return a;
    for(l = 1, d = 1, o = 0; o < n - 1; ++o)l += d *= (s + t + o) * e / (s + o + 1);
    return a *= l;
}
var W = {
    maxTerms: 100
};
function X(s, t, e, i, r, m, o) {
    var j, f, p, h, c, v, b, g;
    return r ? (f = s + a79 - .5, p = t + a79 - .5, h = (b = s + t) + a79 - .5, j = e15(b) / (e15(s) * e15(t)), c = m15(h / p) * (t - .5), v = m15(e * h / f) * s, c > a78 && c < a77 && v > a78 && v < a77 ? (j *= s * t < 10 * p ? r34((t - .5) * o16(s / p)) : z(h / p, t - .5), j *= z(e * h / f, s), j *= a11(f / a80), m && (m[1] = j * z(o, t))) : (j = m15(j) + c + v + (m15(f) - 1) / 2, m && (m[1] = r34(j + t * m15(o))), j = r34(j))) : j = z(e, s), j < a38 ? i : (g = function(s, t, e, i) {
        var n = 1 - t, r = 1;
        return function() {
            var t = i / s;
            return s += 1, i *= n * e / r, r += 1, n += 1, t;
        };
    }(s, t, e, j), W.initialValue = i, n40(g, W));
}
var Y = 1 / a49;
function Z(s, b, g, x, u, N, k, y) {
    var z1, w, q, A, I, T, V, B, C, E, F;
    if (F = 1 - s, T = y, N[V = y + k] = -1, t3(s) || s < 0 || s > 1) return N[T] = NaN, N[V] = NaN, N;
    if (x) {
        if (b < 0 || g < 0) return N[T] = NaN, N[V] = NaN, N;
        if (0 === b) {
            if (0 === g) return N[T] = NaN, N[V] = NaN, N;
            if (g > 0) return N[T] = u ? 0 : 1, N;
        } else if (0 === g && b > 0) return N[T] = u ? 1 : 0, N;
    } else if (b <= 0 || g <= 0) return N[T] = NaN, N[V] = NaN, N;
    return 0 === s ? (N[V] = 1 === b ? 1 : b < 1 ? a45 / 2 : 2 * a46, u ? (N[T] = x ? 1 : l8(b, g), N) : (N[T] = 0, N)) : 1 === s ? (N[V] = 1 === g ? 1 : g < 1 ? a45 / 2 : 2 * a46, N[T] = u ? 0 : x ? 1 : l8(b, g), N) : .5 === b && .5 === g ? (N[V] = Y * a11(F * s), E = r16(a11(u ? F : s)), E /= a48, x || (E *= a49), N[T] = E, N) : (1 === b && (I = g, g = b, b = I, I = F, F = s, s = I, u = !u), 1 === g ? 1 === b ? (N[T] = u ? F : s, N[V] = 1, N) : (N[V] = b * z(s, b - 1), E = F < .5 ? u ? -l2(b * o16(-F)) : r34(b * o16(-F)) : u ? -(z(s, b) - 1) : z(s, b), x || (E /= b), N[T] = E, N) : (n31(b, g) <= 1 ? (s > .5 && (I = g, g = b, b = I, I = F, F = s, s = I, u = !u), i15(b, g) <= 1 ? b >= n31(.2, g) || z(s, b) <= .9 ? u ? (u = !1, w = -X(b, g, s, w = -(x ? 1 : l8(b, g)), x, N, F)) : w = X(b, g, s, 0, x, N, F) : (I = g, g = b, b = I, I = F, F = s, s = I, u = !u, F >= .3 ? u ? (u = !1, w = -X(b, g, s, w = -(x ? 1 : l8(b, g)), x, N, F)) : w = X(b, g, s, 0, x, N, F) : (z1 = x ? 1 : P(b + g, b, 20), w = U(b, g, s, F, 20, x, N), u ? (u = !1, w = -O(b + 20, g, s, F, w -= x ? 1 : l8(b, g), z1, x)) : w = O(b + 20, g, s, F, w, z1, x))) : g <= 1 || s < .1 && z(g * s, b) <= .7 ? u ? (u = !1, w = -X(b, g, s, w = -(x ? 1 : l8(b, g)), x, N, F)) : w = X(b, g, s, 0, x, N, F) : (I = g, g = b, b = I, I = F, F = s, s = I, u = !u, F >= .3 ? u ? (u = !1, w = -X(b, g, s, w = -(x ? 1 : l8(b, g)), x, N, F)) : w = X(b, g, s, 0, x, N, F) : b >= 15 ? u ? (u = !1, w = -O(b, g, s, F, w = -(x ? 1 : l8(b, g)), 1, x)) : w = O(b, g, s, F, 0, 1, x) : (z1 = x ? 1 : P(b + g, b, 20), w = U(b, g, s, F, 20, x, N), u ? (u = !1, w = -O(b + 20, g, s, F, w -= x ? 1 : l8(b, g), z1, x)) : w = O(b + 20, g, s, F, w, z1, x)))) : ((b < g ? b - (b + g) * s : (b + g) * F - g) < 0 && (I = g, g = b, b = I, I = F, F = s, s = I, u = !u), g < 40 ? a10(b) === b && a10(g) === g && b < a47 - 100 ? (w = function(s, t, e, n) {
        var r, m, a, d, o;
        if ((m = z(e, s)) > a46) for(d = m, o = a10(s - 1); o > t; o--)m += d *= (o + 1) * n / ((s - o) * e);
        else if ((a = a10(s * e)) <= t + 1 && (a = a10(t + 2)), m = z(e, a) * z(n, s - a), 0 == (m *= i25(a10(s), a10(a)))) for(o = a - 1; o > t; o--)m += z(e, o) * z(n, s - o), m *= i25(a10(s), a10(o));
        else {
            for(d = m, r = m, o = a - 1; o > t; o--)m += d *= (o + 1) * n / ((s - o) * e);
            for(d = r, o = a + 1; o <= s; o++)m += d *= (s - o + 1) * e / (o * n);
        }
        return m;
    }(C = g + (B = b - 1), B, s, F), x || (w *= l8(b, g))) : g * s <= .7 ? u ? (u = !1, w = -X(b, g, s, w = -(x ? 1 : l8(b, g)), x, N, F)) : w = X(b, g, s, 0, x, N, F) : b > 15 ? ((C = a10(g)) === g && (C -= 1), q = g - C, z1 = x ? 1 : P(b + q, q, C), w = O(b, q, s, F, w = U(q, b, F, s, C, x), 1, x), w /= z1) : x ? ((q = g - (C = a10(g))) <= 0 && (C -= 1, q += 1), w = U(q, b, F, s, C, x), w += U(b, q, s, F, 20, x), u && (w -= 1), w = O(b + 20, q, s, F, w, 1, x), u && (w = -w, u = !1)) : w = S(b, g, s, F, x, N) : w = S(b, g, s, F, x, N)), N[V] < 0 && (N[V] = Q(b, g, s, F, !0)), A = F * s, 0 !== N[V] && (a45 * A < N[V] ? N[V] = a45 / 2 : N[V] /= A), N[T] = u ? (x ? 1 : l8(b, g)) - w : w, N));
}
function $(s, t, e, i, n) {
    return Z(s, t, e, i, n, [
        0,
        0
    ], 1, 0);
}
t2($, "assign", Z);
function t25(t, s, n, r, a) {
    var i = [
        0,
        0
    ];
    return Z(t, s, n, r = !1 !== r, a = !0 === a, i, 1, 0), i[0];
}
function n46(n) {
    return function() {
        return n;
    };
}
function d24(t, m, d) {
    return t3(t) || t3(m) || t3(d) || d < 0 || d > 1 || !e(m) || m === I ? NaN : t < 0 ? 0 : t >= m ? 1 : (t = a10(t + 1e-7), t25(d, t + 1, m - t, !0, !0));
}
function o27(t, d) {
    return t3(t) || t3(d) || d < 0 || d > 1 || !e(t) || t === I ? n46(NaN) : function(s) {
        if (t3(s)) return NaN;
        if (s < 0) return 0;
        if (s >= t) return 1;
        return s = a10(s + 1e-7), t25(d, s + 1, t - s, !0, !0);
    };
}
t2(d24, "factory", o27);
window.cdf = d24;
// export { d24 as default, o27 as factory };
})()
