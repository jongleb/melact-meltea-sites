function v(t) {
  return t === void 0 ? {
    MEL_PRIVATE_NESTED_SOME_NONE: 0
  } : t !== null && t.MEL_PRIVATE_NESTED_SOME_NONE !== void 0 ? {
    MEL_PRIVATE_NESTED_SOME_NONE: t.MEL_PRIVATE_NESTED_SOME_NONE + 1 | 0
  } : t;
}
function w(t) {
  if (t != null)
    return v(t);
}
function Z(t) {
  if (t !== void 0)
    return v(t);
}
function _t(t) {
  if (t !== null)
    return v(t);
}
function T(t) {
  if (!(t !== null && t.MEL_PRIVATE_NESTED_SOME_NONE !== void 0))
    return t;
  const n = t.MEL_PRIVATE_NESTED_SOME_NONE;
  if (n !== 0)
    return {
      MEL_PRIVATE_NESTED_SOME_NONE: n - 1 | 0
    };
}
const tt = {};
function pt(t) {
  const n = tt[t], e = n == null ? 1 : n + 1 | 0;
  return tt[t] = e, e;
}
function F(t) {
  const n = pt(t);
  return t + ("/" + n);
}
const A = function(n, e) {
  var r = e ?? { MEL_EXN_ID: n }, o = Error.call(this, n, { cause: r });
  return o.cause == null && Object.defineProperty(o, "cause", {
    configurable: !0,
    enumerable: !1,
    writable: !0,
    value: r
  }), Object.defineProperty(o, "name", {
    configurable: !0,
    enumerable: !1,
    writable: !0,
    value: "MelangeError"
  }), Object.assign(o, r), o;
};
A.prototype = Error.prototype;
function nt(t, n, e) {
  const r = new Array(e);
  let o = 0, c = n;
  for (; o < e; )
    r[o] = t[c], o = o + 1 | 0, c = c + 1 | 0;
  return r;
}
function W(t, n) {
  const e = new Array(t);
  for (let r = 0; r < t; ++r)
    e[r] = n;
  return e;
}
function bt(t, n, e, r, o) {
  {
    for (let c = 0; c < o; ++c)
      e[c + r | 0] = t[c + n | 0];
    return;
  }
}
function j(t, n) {
  for (; ; ) {
    const e = n, r = t, o = r.length, c = o === 0 ? 1 : o, s = e.length, i = c - s | 0;
    if (i === 0)
      return r.apply(null, e);
    if (i >= 0)
      return function(u) {
        return j(r, e.concat([u]));
      };
    n = nt(e, c, -i | 0), t = r.apply(null, nt(e, 0, c));
  }
}
function g(t, n) {
  const e = t.length;
  if (e === 1)
    return t(n);
  switch (e) {
    case 1:
      return t(n);
    case 2:
      return function(r) {
        return t(n, r);
      };
    case 3:
      return function(r, o) {
        return t(n, r, o);
      };
    case 4:
      return function(r, o, c) {
        return t(n, r, o, c);
      };
    case 5:
      return function(r, o, c, s) {
        return t(n, r, o, c, s);
      };
    case 6:
      return function(r, o, c, s, i) {
        return t(n, r, o, c, s, i);
      };
    case 7:
      return function(r, o, c, s, i, u) {
        return t(n, r, o, c, s, i, u);
      };
    default:
      return j(t, [n]);
  }
}
function E(t, n, e) {
  const r = t.length;
  if (r === 2)
    return t(n, e);
  switch (r) {
    case 1:
      return j(t(n), [e]);
    case 2:
      return t(n, e);
    case 3:
      return function(o) {
        return t(n, e, o);
      };
    case 4:
      return function(o, c) {
        return t(n, e, o, c);
      };
    case 5:
      return function(o, c, s) {
        return t(n, e, o, c, s);
      };
    case 6:
      return function(o, c, s, i) {
        return t(n, e, o, c, s, i);
      };
    case 7:
      return function(o, c, s, i, u) {
        return t(n, e, o, c, s, i, u);
      };
    default:
      return j(t, [
        n,
        e
      ]);
  }
}
function gt(t, n) {
  return t < n ? -1 : t === n ? 0 : 1;
}
function Et(t, n) {
  return t > n ? t : n;
}
function C(t) {
  throw new Error(t);
}
const et = function(t, n) {
  for (var e in t)
    n(e);
}, yt = function(t, n) {
  var e;
  if (Array.isArray(n)) {
    for (e = 0; e < n.length; ++e)
      t[e] = n[e];
    n.TAG !== void 0 && (t.TAG = n.TAG);
  } else
    for (var e in n)
      t[e] = n[e];
};
function B(t, n) {
  if (t === n)
    return !0;
  const e = typeof t;
  if (e === "string" || e === "number" || e === "bigint" || e === "boolean" || e === "undefined" || t === null)
    return !1;
  const r = typeof n;
  if (e === "function" || r === "function")
    throw new A("Invalid_argument", {
      MEL_EXN_ID: "Invalid_argument",
      _1: "equal: functional value"
    });
  if (r === "number" || r === "bigint" || r === "undefined" || n === null)
    return !1;
  const o = t.TAG, c = n.TAG;
  if (o === 248)
    return t[1] === n[1];
  if (o === 251)
    throw new A("Invalid_argument", {
      MEL_EXN_ID: "Invalid_argument",
      _1: "equal: abstract value"
    });
  if (o !== c)
    return !1;
  const s = t.length | 0, i = n.length | 0;
  if (s === i)
    if (Array.isArray(t)) {
      let u = 0;
      for (; ; ) {
        const f = u;
        if (f === s)
          return !0;
        if (!B(t[f], n[f]))
          return !1;
        u = f + 1 | 0;
      }
    } else {
      if (t instanceof Date && n instanceof Date)
        return !(t > n || t < n);
      {
        const u = {
          contents: !0
        }, f = function(l) {
          if (!Object.prototype.hasOwnProperty.call(n, l)) {
            u.contents = !1;
            return;
          }
        }, a = function(l) {
          if (!Object.prototype.hasOwnProperty.call(t, l) || !B(n[l], t[l])) {
            u.contents = !1;
            return;
          }
        };
        return et(t, f), u.contents && et(n, a), u.contents;
      }
    }
  else
    return !1;
}
const H = function(t) {
  return typeof process < "u" && process.platform === "win32" ? "Win32" : "Unix";
};
function wt(t) {
  if (typeof process > "u")
    return "";
  const n = process.argv;
  return n == null ? "" : n[0];
}
function z(t) {
  return t[1] | 0;
}
wt();
H();
H();
H();
function Tt(t) {
  const n = typeof t != "number" && t.TAG !== 248 && (t.length | 0) >= 1 ? t[0] : t;
  let e;
  if (typeof n != "number" && n.TAG === 248)
    e = n[0];
  else
    throw new A("Invalid_argument", {
      MEL_EXN_ID: "Invalid_argument",
      _1: "Obj.extension_constructor"
    });
  if (e.TAG === 252)
    return n;
  throw new A("Invalid_argument", {
    MEL_EXN_ID: "Invalid_argument",
    _1: "Obj.extension_constructor"
  });
}
function vt(t) {
  return t[0];
}
function At(t) {
  return t[1];
}
const kt = {
  of_val: Tt,
  name: vt,
  id: At
};
function Nt(t, n, e, r, o) {
  if (o < 0 || n < 0 || n > (t.length - o | 0) || r < 0 || r > (e.length - o | 0))
    throw new A("Invalid_argument", {
      MEL_EXN_ID: "Invalid_argument",
      _1: "Array.blit"
    });
  bt(t, n, e, r, o);
}
function It(t) {
  return {
    Id: /* @__PURE__ */ F("Id")
  };
}
function Mt(t) {
  return kt.id(t.Id);
}
function Ot(t, n) {
  if (t.Id === n.Id)
    return (
      /* Equal */
      0
    );
}
const ct = {
  make: It,
  uid: Mt,
  provably_equal: Ot
};
function xt(t) {
  return ct.make();
}
function jt(t) {
  return {
    items: [],
    count: 0,
    cursor: 0
  };
}
function Gt(t) {
  t.cursor = 0;
}
function St(t, n, e) {
  const r = t.cursor;
  if (t.cursor = r + 1 | 0, r < t.count) {
    const s = t.items[r];
    return ct.provably_equal(s._0, n) !== void 0 ? s._1 : C("melhole: hooks were called in a different order than in the previous render");
  }
  const o = g(e, void 0), c = {
    TAG: (
      /* Slot */
      0
    ),
    _0: n,
    _1: o
  };
  if (r === t.items.length) {
    const s = W(Et(4, r << 1), c);
    Nt(t.items, 0, s, 0, r), t.items = s;
  }
  return t.items[r] = c, t.count = r + 1 | 0, o;
}
function ut(t) {
  return t !== void 0 ? T(t) : null;
}
function Lt(t) {
  let n = 0, e = t;
  for (; ; ) {
    const r = e, o = n;
    if (!r)
      return o;
    e = r.tl, n = o + 1 | 0;
  }
}
function N(t, n) {
  for (; ; ) {
    const e = n, r = t;
    if (!r)
      return e;
    n = {
      hd: r.hd,
      tl: e
    }, t = r.tl;
  }
}
function I(t) {
  return N(
    t,
    /* [] */
    0
  );
}
function k(t, n) {
  for (; ; ) {
    const e = n;
    if (!e)
      return;
    g(t, e.hd), n = e.tl;
  }
}
function Dt(t, n) {
  for (; ; ) {
    const e = n;
    if (!e)
      return;
    const r = e.hd;
    if (B(r[0], t))
      return v(r[1]);
    n = e.tl;
  }
}
function $t(t, n) {
  for (; ; ) {
    const e = n;
    if (!e)
      return;
    const r = g(t, e.hd);
    if (r !== void 0)
      return r;
    n = e.tl;
  }
}
function Ct(t, n) {
  const e = function(i, u, f) {
    for (; ; ) {
      const a = f, l = u, h = i;
      if (!h)
        return N(l, a);
      if (!l)
        return N(h, a);
      const m = l.hd, p = h.hd;
      if (E(t, p, m) <= 0) {
        f = {
          hd: p,
          tl: a
        }, i = h.tl;
        continue;
      }
      f = {
        hd: m,
        tl: a
      }, u = l.tl;
    }
  }, r = function(i, u, f) {
    for (; ; ) {
      const a = f, l = u, h = i;
      if (!h)
        return N(l, a);
      if (!l)
        return N(h, a);
      const m = l.hd, p = h.hd;
      if (E(t, p, m) > 0) {
        f = {
          hd: p,
          tl: a
        }, i = h.tl;
        continue;
      }
      f = {
        hd: m,
        tl: a
      }, u = l.tl;
    }
  }, o = function(i, u) {
    if (i !== 2) {
      if (i === 3 && u) {
        const m = u.tl;
        if (m) {
          const p = m.tl;
          if (p) {
            const d = p.hd, _ = m.hd, b = u.hd;
            return [
              E(t, b, _) <= 0 ? E(t, _, d) <= 0 ? {
                hd: b,
                tl: {
                  hd: _,
                  tl: {
                    hd: d,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              } : E(t, b, d) <= 0 ? {
                hd: b,
                tl: {
                  hd: d,
                  tl: {
                    hd: _,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              } : {
                hd: d,
                tl: {
                  hd: b,
                  tl: {
                    hd: _,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              } : E(t, b, d) <= 0 ? {
                hd: _,
                tl: {
                  hd: b,
                  tl: {
                    hd: d,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              } : E(t, _, d) <= 0 ? {
                hd: _,
                tl: {
                  hd: d,
                  tl: {
                    hd: b,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              } : {
                hd: d,
                tl: {
                  hd: _,
                  tl: {
                    hd: b,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              },
              p.tl
            ];
          }
        }
      }
    } else if (u) {
      const m = u.tl;
      if (m) {
        const p = m.hd, d = u.hd;
        return [
          E(t, d, p) <= 0 ? {
            hd: d,
            tl: {
              hd: p,
              tl: (
                /* [] */
                0
              )
            }
          } : {
            hd: p,
            tl: {
              hd: d,
              tl: (
                /* [] */
                0
              )
            }
          },
          m.tl
        ];
      }
    }
    const f = i >> 1, a = i - f | 0, l = c(f, u), h = c(a, l[1]);
    return [
      r(
        l[0],
        h[0],
        /* [] */
        0
      ),
      h[1]
    ];
  }, c = function(i, u) {
    if (i !== 2) {
      if (i === 3 && u) {
        const m = u.tl;
        if (m) {
          const p = m.tl;
          if (p) {
            const d = p.hd, _ = m.hd, b = u.hd;
            return [
              E(t, b, _) > 0 ? E(t, _, d) > 0 ? {
                hd: b,
                tl: {
                  hd: _,
                  tl: {
                    hd: d,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              } : E(t, b, d) > 0 ? {
                hd: b,
                tl: {
                  hd: d,
                  tl: {
                    hd: _,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              } : {
                hd: d,
                tl: {
                  hd: b,
                  tl: {
                    hd: _,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              } : E(t, b, d) > 0 ? {
                hd: _,
                tl: {
                  hd: b,
                  tl: {
                    hd: d,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              } : E(t, _, d) > 0 ? {
                hd: _,
                tl: {
                  hd: d,
                  tl: {
                    hd: b,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              } : {
                hd: d,
                tl: {
                  hd: _,
                  tl: {
                    hd: b,
                    tl: (
                      /* [] */
                      0
                    )
                  }
                }
              },
              p.tl
            ];
          }
        }
      }
    } else if (u) {
      const m = u.tl;
      if (m) {
        const p = m.hd, d = u.hd;
        return [
          E(t, d, p) > 0 ? {
            hd: d,
            tl: {
              hd: p,
              tl: (
                /* [] */
                0
              )
            }
          } : {
            hd: p,
            tl: {
              hd: d,
              tl: (
                /* [] */
                0
              )
            }
          },
          m.tl
        ];
      }
    }
    const f = i >> 1, a = i - f | 0, l = o(f, u), h = o(a, l[1]);
    return [
      e(
        l[0],
        h[0],
        /* [] */
        0
      ),
      h[1]
    ];
  }, s = Lt(n);
  return s < 2 ? n : o(s, n)[0];
}
function Pt(t, n) {
  return t !== void 0 ? T(t) : n;
}
function Rt(t, n) {
  if (t !== void 0)
    return g(n, T(t));
}
function Xt(t, n, e) {
  return e !== void 0 ? g(n, T(e)) : t;
}
function y(t, n) {
  if (n !== void 0)
    return g(t, T(n));
}
function rt(t, n, e) {
  let r = 0;
  switch (t) {
    case "drag":
    case "dragover":
    case "mousemove":
    case "pointermove":
    case "scroll":
    case "touchmove":
    case "wheel":
      r = 1;
      break;
    default:
      return g(n, e);
  }
  if (r === 1) {
    let o = 0, c;
    try {
      c = g(n, e), o = 2;
    } catch (s) {
      throw s;
    }
    if (o === 2)
      return;
  }
}
const P = {
  contents: (
    /* [] */
    0
  )
}, R = {
  contents: (
    /* [] */
    0
  )
};
function qt(t) {
  const n = $t(function(r) {
    if (r[0] === t)
      return r[1];
  }, P.contents);
  if (n !== void 0)
    return n;
  const e = "$$melhole:" + t;
  return P.contents = {
    hd: [
      t,
      e
    ],
    tl: P.contents
  }, e;
}
function Vt(t, n) {
  const e = qt(n);
  let r, o = 0;
  switch (n) {
    case "beforeinput":
    case "click":
    case "contextmenu":
    case "dblclick":
    case "focusin":
    case "focusout":
    case "input":
    case "keydown":
    case "keyup":
    case "mousedown":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "mouseup":
    case "pointerdown":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerup":
    case "touchend":
    case "touchmove":
    case "touchstart":
      o = 1;
      break;
    default:
      const c = function(s) {
        y(function(i) {
          rt(n, i, s);
        }, Z(t[e]));
      };
      t.addEventListener(n, c), r = {
        TAG: (
          /* Direct */
          0
        ),
        _0: function(s) {
          t.removeEventListener(n, c);
        }
      };
  }
  if (o === 1) {
    if (Dt(n, R.contents) === void 0) {
      let s;
      switch (n) {
        case "click":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
          s = "Mouse";
          break;
        default:
          s = "Other";
      }
      const i = function(u) {
        const f = function(a) {
          if (y(function(l) {
            const h = a.nodeName;
            if (s === "Mouse") {
              let m = 0;
              switch (h) {
                case "BUTTON":
                case "INPUT":
                case "SELECT":
                case "TEXTAREA":
                  m = 2;
                  break;
              }
              if (m === 2 && a.disabled)
                return;
            }
            Object.defineProperty(u, "currentTarget", {
              configurable: !0,
              value: a
            }), rt(n, l, u);
          }, Z(a[e])), !u.cancelBubble)
            return y(f, w(a.parentNode));
        };
        y(f, w(u.target)), Reflect.deleteProperty(u, "currentTarget");
      };
      R.contents = {
        hd: [
          n,
          i
        ],
        tl: R.contents
      }, document.addEventListener(n, i);
    }
    r = /* Delegated */
    0;
  }
  return [
    e,
    r
  ];
}
function X(t, n, e) {
  t[n] = e;
}
z([
  1431655765,
  1431655765
]);
z([
  858993459,
  858993459
]);
z([
  252645135,
  252645135
]);
function Bt(t) {
  return {
    source: {
      TAG: (
        /* Markup */
        0
      ),
      markup: t,
      root: function(n) {
        return n.firstChild;
      }
    },
    paths: []
  };
}
function Ut(t) {
  const n = t.source;
  if (n.TAG !== /* Markup */
  0)
    return n._0;
  const e = document.createElement("template");
  e.innerHTML = n.markup;
  const r = g(n.root, e.content), o = function(c) {
    y(o, w(c.firstChild));
    const s = c.nextSibling;
    c.nodeType !== 8 || y(function(u) {
      u.replaceChild(document.createTextNode(""), c);
    }, w(c.parentNode)), y(o, s == null ? void 0 : v(s));
  };
  return y(o, w(r.firstChild)), t.source = {
    TAG: (
      /* Parsed */
      1
    ),
    _0: r
  }, r;
}
function Kt(t) {
  return Ut(t).cloneNode(!0);
}
function Ft(t) {
  return {
    Key: /* @__PURE__ */ F("Key")
  };
}
function Wt(t) {
}
function Ht(t) {
  return t;
}
function zt() {
}
const Jt = {
  state: (
    /* Empty_state */
    0
  ),
  each: Wt,
  front: Ht,
  release: zt
};
function J(t, n) {
  t.parent.insertBefore(n, t.before);
}
function Qt(t, n) {
  const e = document.createTextNode(Pt(n, ""));
  return J(t, e), e;
}
function Yt(t, n) {
  return Kt(n);
}
const Zt = J;
function tn(t) {
  return (
    /* Settled */
    0
  );
}
function nn(t, n, e, r) {
  if (t === 0)
    return [];
  const o = W(t, e(0, n));
  for (let c = 1; c < t; ++c)
    o[c] = e(c, n);
  return o;
}
function en(t) {
  return t();
}
const rn = {
  adoption: (
    /* Fresh_nodes */
    0
  ),
  text: Qt,
  root: Yt,
  placed: Zt,
  opened: tn,
  built: nn,
  aside: en
}, it = {
  contents: rn
};
function on(t, n) {
  n.each(function(e) {
    t.parent.removeChild(e);
  }), n.release();
}
function cn(t, n) {
  const e = {
    contents: null
  };
  n.each(function(c) {
    e.contents = c;
  });
  const r = n.front(null) === t.parent.firstChild, o = e.contents === t.parent.lastChild;
  return r && o ? (
    /* Whole */
    0
  ) : (
    /* Part */
    1
  );
}
function st(t, n, e) {
  const r = e.patch(t, n);
  if (r !== void 0)
    return r;
  if (cn(t, n) === /* Whole */
  0)
    return t.parent.textContent = "", n.release(), e.build(t);
  const c = e.build(t);
  return on(t, n), c;
}
function un(t, n) {
  const e = t.length;
  if (e === n.length) {
    let r = 0;
    for (; ; ) {
      const o = r;
      if (o === e)
        return (
          /* Unchanged */
          1
        );
      const c = t[o], s = n[o];
      if (c !== s)
        return (
          /* Changed */
          0
        );
      r = o + 1 | 0;
    }
  } else
    return (
      /* Changed */
      0
    );
}
function sn(t, n, e) {
  it.contents.placed(t, n), e.placement = /* Placed */
  1, k(function(r) {
    r();
  }, I(e.references));
}
function fn(t) {
  const n = t.cleanups;
  if (n)
    return k(function(e) {
      e();
    }, I(n));
}
function ln(t, n, e, r) {
  return sn(t, n, e), {
    state: r,
    each: function(o) {
      o(n);
    },
    front: function(o) {
      return n;
    },
    release: function() {
      return fn(e);
    }
  };
}
const an = {
  contents: void 0
};
function dn(t) {
  return {
    deps: W(t, an),
    cleanups: (
      /* [] */
      0
    ),
    references: (
      /* [] */
      0
    ),
    placement: (
      /* Detached */
      0
    )
  };
}
function hn(t, n) {
  return {
    markup: t,
    holes: n,
    lent: void 0,
    witness: Ft(),
    adopt: (
      /* Not_hydratable */
      0
    )
  };
}
function mn(t, n, e) {
  return {
    build: function(r) {
      let o;
      {
        const i = it.contents.root(r, t.markup), u = dn(n), f = t.holes(u, i);
        e(u, f), o = [
          i,
          u,
          f
        ];
      }
      const c = o[2], s = o[1];
      return ln(r, o[0], s, {
        TAG: (
          /* Compiled_state */
          7
        ),
        identity: t,
        scope: s,
        lend: function() {
          t.lent = v(c);
        }
      });
    },
    patch: function(r, o) {
      const c = o.state;
      if (
        /* tag */
        typeof c != "object" && typeof c != "function" || c.TAG !== /* Compiled_state */
        7
      )
        return;
      if (c.identity === t)
        return c.lend(), y(function(i) {
          t.lent = void 0, e(c.scope, i);
        }, t.lent), o;
    },
    shape: (
      /* Single */
      0
    )
  };
}
function M(t, n, e) {
  return t.deps[n] === e ? (
    /* Unchanged */
    1
  ) : (t.deps[n] = e, /* Changed */
  0);
}
function _n(t, n, e, r) {
  if (t.deps[n] === r)
    return;
  const c = e.firstChild;
  c == null || c.nodeType !== 3 ? e.textContent = r : c.data = r, t.deps[n] = r;
}
function ot(t, n, e, r, o) {
  if (t.deps[n] !== o) {
    o !== void 0 ? e.setAttribute(r, o) : e.removeAttribute(r), t.deps[n] = o;
    return;
  }
}
function q(t, n, e) {
  const r = Vt(n, e), o = r[1];
  if (!/* tag */
  (typeof o != "object" && typeof o != "function")) {
    const c = o._0;
    t.cleanups = {
      hd: function() {
        return g(c, void 0);
      },
      tl: t.cleanups
    };
  }
  return r[0];
}
function pn(t, n, e) {
  const r = ut(void 0), o = {
    parent: n,
    before: r
  };
  return {
    position: o,
    source: t,
    live: t.build(o)
  };
}
function bn(t, n) {
  if (t.source !== n) {
    t.live = st(t.position, t.live, n), t.source = n;
    return;
  }
}
function gn(t, n) {
  return {
    build: t,
    patch: n,
    shape: (
      /* Single */
      0
    )
  };
}
function En(t, n) {
  return t.build(n);
}
function yn(t, n, e, r) {
  return {
    state: {
      TAG: (
        /* Hosted */
        10
      ),
      _0: t
    },
    each: n,
    front: e,
    release: r
  };
}
function wn(t) {
  const n = t.state;
  if (
    /* tag */
    !(typeof n != "object" && typeof n != "function" || n.TAG !== /* Hosted */
    10)
  )
    return v(n._0);
}
const ft = /* @__PURE__ */ F("Melact_runtime.Instance.Instance"), Q = {
  contents: void 0
}, O = {
  contents: void 0
}, G = {
  contents: (
    /* [] */
    0
  )
}, S = {
  contents: (
    /* [] */
    0
  )
}, L = {
  contents: (
    /* [] */
    0
  )
}, D = {
  contents: (
    /* [] */
    0
  )
}, $ = {
  contents: (
    /* [] */
    0
  )
}, V = {
  contents: (
    /* Idle */
    0
  )
}, U = {
  contents: (
    /* Idle */
    0
  )
};
function Y(t, n, e) {
  const r = t.contents;
  t.contents = n;
  let o;
  try {
    o = g(e, void 0);
  } catch (c) {
    throw t.contents = r, c;
  }
  return t.contents = r, o;
}
function Tn(t) {
  switch (t.status) {
    case /* Clean */
    0:
      t.status = /* Dirty */
      1, G.contents = {
        hd: t,
        tl: G.contents
      };
      return;
    case /* Dirty */
    1:
    case /* Unmounted */
    2:
      return;
  }
}
function K(t, n) {
  const e = function(c) {
    k(function(s) {
      const i = s[1];
      switch (s[0].status) {
        case /* Clean */
        0:
        case /* Dirty */
        1:
          return g(i, void 0);
        case /* Unmounted */
        2:
          return;
      }
    }, I(c));
  }, r = t.contents, o = n.contents;
  t.contents = /* [] */
  0, n.contents = /* [] */
  0, e(r), e(o);
}
function vn(t) {
  U.contents = /* Idle */
  0, K(D, $);
}
function x(t) {
  return yn({
    MEL_EXN_ID: ft,
    _1: t
  }, function(n) {
    t.output.each(n);
    const e = t.region;
    if (
      /* tag */
      !(typeof e != "object" && typeof e != "function")
    )
      return n(e._0);
  }, function(n) {
    const e = t.region;
    let r;
    return r = /* tag */
    typeof e != "object" && typeof e != "function" ? n : e._0, t.output.front(r);
  }, function() {
    return t.output.release(), t.status = /* Unmounted */
    2, k(function(n) {
      g(n, void 0);
    }, I(t.teardown));
  });
}
function lt(t) {
  t.status = /* Clean */
  0;
  const n = t.kind;
  return n.TAG !== /* Renders */
  0 ? n.children : (Gt(t.slots), Y(Q, t, n.render));
}
function at(t, n) {
  const e = n.output.front(null), r = n.region;
  if (e !== null)
    /* tag */
    typeof r != "object" && typeof r != "function" || (t.parent.removeChild(r._0), n.region = /* Nodes */
    0);
  else if (
    /* tag */
    typeof r != "object" && typeof r != "function"
  ) {
    const o = document.createTextNode("");
    J(t, o), n.region = {
      TAG: (
        /* Marker */
        0
      ),
      _0: o
    };
  }
  k(function(o) {
    const c = o[2], s = o[1];
    o[0] === /* Layout */
    0 ? s === /* Cleanup */
    0 ? S.contents = {
      hd: [
        n,
        c
      ],
      tl: S.contents
    } : L.contents = {
      hd: [
        n,
        c
      ],
      tl: L.contents
    } : s === /* Cleanup */
    0 ? D.contents = {
      hd: [
        n,
        c
      ],
      tl: D.contents
    } : $.contents = {
      hd: [
        n,
        c
      ],
      tl: $.contents
    };
  }, I(n.pending)), n.pending = /* [] */
  0;
}
function dt(t, n) {
  const e = lt(n), r = n.region;
  let o;
  o = /* tag */
  typeof r != "object" && typeof r != "function" ? t : {
    parent: t.parent,
    before: r._0
  }, n.output = Y(O, n, function(c) {
    return st(o, n.output, e);
  }), at(t, n);
}
function ht(t) {
  const n = function(i) {
    const u = x(i), f = {
      contents: void 0
    };
    u.each(function(h) {
      f.contents = v(h);
    });
    const a = Rt(_t(u.front(null)), function(h) {
      return w(h.parentNode);
    }), l = f.contents;
    return a !== void 0 && l !== void 0 ? {
      parent: T(a),
      before: ut(w(T(l).nextSibling))
    } : C("melact: a mounted component is not in the DOM");
  }, e = function(i) {
    for (; ; ) {
      const u = G.contents;
      if (!u)
        return;
      G.contents = /* [] */
      0, k(function(f) {
        switch (f.status) {
          case /* Dirty */
          1:
            return dt(n(f), f);
          case /* Clean */
          0:
          case /* Unmounted */
          2:
            return;
        }
      }, Ct(function(f, a) {
        const l = x(f).front(null), h = x(a).front(null);
        return l !== null && h !== null && l !== h ? l.compareDocumentPosition(h) & 4 ? -1 : 1 : gt(f.depth, a.depth);
      }, u)), K(S, L);
    }
  };
  K(S, L), e();
  const r = D.contents, o = $.contents, c = U.contents;
  let s = 0;
  if (r)
    c !== /* Idle */
    0 && (s = 2);
  else {
    if (!o)
      return;
    s = 2;
  }
  s === 2 && c !== /* Idle */
  0 || (U.contents = /* Queued */
  1, requestAnimationFrame(function(i) {
    setTimeout(vn, 0);
  }));
}
function An(t, n) {
  const e = {
    parent: O.contents,
    depth: Xt(0, function(o) {
      return o.depth + 1 | 0;
    }, O.contents),
    slots: jt(),
    kind: n,
    status: (
      /* Clean */
      0
    ),
    output: Jt,
    region: (
      /* Nodes */
      0
    ),
    pending: (
      /* [] */
      0
    ),
    teardown: (
      /* [] */
      0
    )
  }, r = lt(e);
  return e.output = Y(O, e, function(o) {
    return En(r, t);
  }), at(t, e), x(e);
}
function kn(t, n, e) {
  return gn(function(r) {
    return An(r, {
      TAG: (
        /* Renders */
        0
      ),
      component: t,
      inputs: n,
      render: e
    });
  }, function(r, o) {
    const c = wn(o);
    if (c === void 0)
      return;
    const s = T(c);
    if (s.MEL_EXN_ID !== ft)
      return;
    const i = s._1, u = i.kind;
    if (u.TAG !== /* Renders */
    0 || u.component !== t)
      return;
    const f = i.status, a = un(u.inputs, n);
    let l = 0;
    switch (f) {
      case /* Clean */
      0:
        a === /* Changed */
        0 && (l = 1);
        break;
      case /* Dirty */
      1:
      case /* Unmounted */
      2:
        l = 1;
        break;
    }
    return l === 1 && (u.inputs = n, u.render = e, dt(r, i)), o;
  });
}
function Nn(t) {
  const n = Q.contents;
  return n !== void 0 ? n : C("melact: hooks can only be called while a component renders");
}
function In(t, n, e) {
  return St(t.slots, n, e);
}
function Mn(t) {
  if (Q.contents !== void 0)
    return C("melact: a state setter was called while a component was rendering");
  Tn(t), V.contents === /* Idle */
  0 && (V.contents = /* Queued */
  1, queueMicrotask(function(r) {
    V.contents = /* Idle */
    0, ht();
  }));
}
function On(t, n, e) {
  const r = Nn(), o = In(r, t, function(c) {
    const s = g(e, void 0);
    let i = {};
    return yt(i, {
      value: s,
      reduce: n,
      dispatch: function(u) {
        const f = E(i.reduce, i.value, u);
        if (f !== i.value) {
          Mn(r), i.value = f;
          return;
        }
      }
    }), i;
  });
  return o.reduce = n, [
    o.value,
    o.dispatch
  ];
}
function xn(t, n) {
  return On(t, function(e, r) {
    return g(r, e);
  }, n);
}
const jn = {
  name: "Counter.make"
}, Gn = xt(), Sn = hn(Bt('<div class="counter"><button>-</button><output></output><button>+</button><button>reset</button></div>'), function(t, n) {
  const e = n.firstChild, r = e.nextSibling, o = r.nextSibling, c = o.nextSibling;
  return [
    e,
    q(t, e, "click"),
    r,
    r,
    o,
    q(t, o, "click"),
    c,
    q(t, c, "click"),
    c
  ];
});
function Ln(t, n) {
  return kn(jn, [t], function(e) {
    const r = xn(Gn, function(i) {
      return t;
    }), o = r[1], c = r[0], s = c < 0 ? "negative" : "";
    return mn(Sn, 7, function(i, u) {
      const f = M(i, 0, c), a = M(i, 1, t), l = M(i, 2, o), h = M(i, 3, s);
      l === /* Changed */
      0 && X(u[0], u[1], function(d) {
        g(o, function(_) {
          return _ - 1 | 0;
        });
      }), h === /* Changed */
      0 && ot(i, 4, u[2], "class", s), f === /* Changed */
      0 && _n(i, 5, u[3], String(c)), l === /* Changed */
      0 && X(u[4], u[5], function(d) {
        g(o, function(_) {
          return _ + 1 | 0;
        });
      });
      let m = 0;
      (a === /* Changed */
      0 || l === /* Changed */
      0) && (m = 1), m === 1 && X(u[6], u[7], function(d) {
        g(o, function(_) {
          return t;
        });
      });
      let p = 0;
      (f === /* Changed */
      0 || a === /* Changed */
      0) && (p = 1), p === 1 && ot(i, 6, u[8], "disabled", c === t ? "" : void 0);
    });
  });
}
function Dn(t) {
  return {
    container: t,
    content: (
      /* Nothing */
      0
    )
  };
}
function $n(t, n) {
  const e = t.content;
  /* tag */
  typeof e != "object" && typeof e != "function" ? t.content = {
    TAG: (
      /* Showing */
      0
    ),
    _0: pn(n, t.container)
  } : bn(e._0, n), ht();
}
y(function(t) {
  $n(Dn(t), Ln(0));
}, w(document.getElementById("root")));
