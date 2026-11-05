function h(n) {
  return n === void 0 ? {
    MEL_PRIVATE_NESTED_SOME_NONE: 0
  } : n !== null && n.MEL_PRIVATE_NESTED_SOME_NONE !== void 0 ? {
    MEL_PRIVATE_NESTED_SOME_NONE: n.MEL_PRIVATE_NESTED_SOME_NONE + 1 | 0
  } : n;
}
function E(n) {
  if (n != null)
    return h(n);
}
function I(n) {
  if (n !== void 0)
    return h(n);
}
function g(n) {
  if (!(n !== null && n.MEL_PRIVATE_NESTED_SOME_NONE !== void 0))
    return n;
  const t = n.MEL_PRIVATE_NESTED_SOME_NONE;
  if (t !== 0)
    return {
      MEL_PRIVATE_NESTED_SOME_NONE: t - 1 | 0
    };
}
const B = {};
function on(n) {
  const t = B[n], e = t == null ? 1 : t + 1 | 0;
  return B[n] = e, e;
}
function un(n) {
  const t = on(n);
  return n + ("/" + t);
}
const x = function(t, e) {
  var r = e ?? { MEL_EXN_ID: t }, c = Error.call(this, t, { cause: r });
  return c.cause == null && Object.defineProperty(c, "cause", {
    configurable: !0,
    enumerable: !1,
    writable: !0,
    value: r
  }), Object.defineProperty(c, "name", {
    configurable: !0,
    enumerable: !1,
    writable: !0,
    value: "MelangeError"
  }), Object.assign(c, r), c;
};
x.prototype = Error.prototype;
function U(n, t, e) {
  const r = new Array(e);
  let c = 0, o = t;
  for (; c < e; )
    r[c] = n[o], c = c + 1 | 0, o = o + 1 | 0;
  return r;
}
function J(n, t) {
  const e = new Array(n);
  for (let r = 0; r < n; ++r)
    e[r] = t;
  return e;
}
function b(n, t) {
  for (; ; ) {
    const e = t, r = n, c = r.length, o = c === 0 ? 1 : c, u = e.length, s = o - u | 0;
    if (s === 0)
      return r.apply(null, e);
    if (s >= 0)
      return function(i) {
        return b(r, e.concat([i]));
      };
    t = U(e, o, -s | 0), n = r.apply(null, U(e, 0, o));
  }
}
function a(n, t) {
  const e = n.length;
  if (e === 1)
    return n(t);
  switch (e) {
    case 1:
      return n(t);
    case 2:
      return function(r) {
        return n(t, r);
      };
    case 3:
      return function(r, c) {
        return n(t, r, c);
      };
    case 4:
      return function(r, c, o) {
        return n(t, r, c, o);
      };
    case 5:
      return function(r, c, o, u) {
        return n(t, r, c, o, u);
      };
    case 6:
      return function(r, c, o, u, s) {
        return n(t, r, c, o, u, s);
      };
    case 7:
      return function(r, c, o, u, s, i) {
        return n(t, r, c, o, u, s, i);
      };
    default:
      return b(n, [t]);
  }
}
function Q(n, t, e) {
  const r = n.length;
  if (r === 2)
    return n(t, e);
  switch (r) {
    case 1:
      return b(n(t), [e]);
    case 2:
      return n(t, e);
    case 3:
      return function(c) {
        return n(t, e, c);
      };
    case 4:
      return function(c, o) {
        return n(t, e, c, o);
      };
    case 5:
      return function(c, o, u) {
        return n(t, e, c, o, u);
      };
    case 6:
      return function(c, o, u, s) {
        return n(t, e, c, o, u, s);
      };
    case 7:
      return function(c, o, u, s, i) {
        return n(t, e, c, o, u, s, i);
      };
    default:
      return b(n, [
        t,
        e
      ]);
  }
}
function X(n, t, e, r) {
  const c = n.length;
  if (c === 3)
    return n(t, e, r);
  switch (c) {
    case 1:
      return b(n(t), [
        e,
        r
      ]);
    case 2:
      return b(n(t, e), [r]);
    case 3:
      return n(t, e, r);
    case 4:
      return function(o) {
        return n(t, e, r, o);
      };
    case 5:
      return function(o, u) {
        return n(t, e, r, o, u);
      };
    case 6:
      return function(o, u, s) {
        return n(t, e, r, o, u, s);
      };
    case 7:
      return function(o, u, s, i) {
        return n(t, e, r, o, u, s, i);
      };
    default:
      return b(n, [
        t,
        e,
        r
      ]);
  }
}
const K = function(n, t) {
  for (var e in n)
    t(e);
};
function L(n, t) {
  if (n === t)
    return !0;
  const e = typeof n;
  if (e === "string" || e === "number" || e === "bigint" || e === "boolean" || e === "undefined" || n === null)
    return !1;
  const r = typeof t;
  if (e === "function" || r === "function")
    throw new x("Invalid_argument", {
      MEL_EXN_ID: "Invalid_argument",
      _1: "equal: functional value"
    });
  if (r === "number" || r === "bigint" || r === "undefined" || t === null)
    return !1;
  const c = n.TAG, o = t.TAG;
  if (c === 248)
    return n[1] === t[1];
  if (c === 251)
    throw new x("Invalid_argument", {
      MEL_EXN_ID: "Invalid_argument",
      _1: "equal: abstract value"
    });
  if (c !== o)
    return !1;
  const u = n.length | 0, s = t.length | 0;
  if (u === s)
    if (Array.isArray(n)) {
      let i = 0;
      for (; ; ) {
        const f = i;
        if (f === u)
          return !0;
        if (!L(n[f], t[f]))
          return !1;
        i = f + 1 | 0;
      }
    } else {
      if (n instanceof Date && t instanceof Date)
        return !(n > t || n < t);
      {
        const i = {
          contents: !0
        }, f = function(d) {
          if (!Object.prototype.hasOwnProperty.call(t, d)) {
            i.contents = !1;
            return;
          }
        }, l = function(d) {
          if (!Object.prototype.hasOwnProperty.call(n, d) || !L(t[d], n[d])) {
            i.contents = !1;
            return;
          }
        };
        return K(n, f), i.contents && K(t, l), i.contents;
      }
    }
  else
    return !1;
}
const D = function(n) {
  return typeof process < "u" && process.platform === "win32" ? "Win32" : "Unix";
};
function sn(n) {
  if (typeof process > "u")
    return "";
  const t = process.argv;
  return t == null ? "" : t[0];
}
function G(n) {
  return n[1] | 0;
}
sn();
D();
D();
D();
function Y(n, t) {
  return n !== void 0 ? g(n) : t;
}
function fn(n, t) {
  if (n !== void 0)
    return a(t, g(n));
}
function _(n, t) {
  if (t !== void 0)
    return a(n, g(t));
}
function an(n) {
  return {
    source: {
      TAG: (
        /* Markup */
        0
      ),
      markup: n,
      root: function(t) {
        return t.firstChild;
      }
    },
    paths: []
  };
}
function ln(n) {
  const t = n.source;
  if (t.TAG !== /* Markup */
  0)
    return t._0;
  const e = document.createElement("template");
  e.innerHTML = t.markup;
  const r = a(t.root, e.content), c = function(o) {
    _(c, E(o.firstChild));
    const u = o.nextSibling;
    o.nodeType !== 8 || _(function(i) {
      i.replaceChild(document.createTextNode(""), o);
    }, E(o.parentNode)), _(c, u == null ? void 0 : h(u));
  };
  return _(c, E(r.firstChild)), n.source = {
    TAG: (
      /* Parsed */
      1
    ),
    _0: r
  }, r;
}
function dn(n) {
  return ln(n).cloneNode(!0);
}
function _n(n) {
  return n !== void 0 ? g(n) : null;
}
function pn(n, t) {
  for (; ; ) {
    const e = t, r = n;
    if (!r)
      return e;
    t = {
      hd: r.hd,
      tl: e
    }, n = r.tl;
  }
}
function Z(n) {
  return pn(
    n,
    /* [] */
    0
  );
}
function $(n, t) {
  for (; ; ) {
    const e = t;
    if (!e)
      return;
    a(n, e.hd), t = e.tl;
  }
}
function hn(n, t) {
  for (; ; ) {
    const e = t;
    if (!e)
      return;
    const r = e.hd;
    if (L(r[0], n))
      return h(r[1]);
    t = e.tl;
  }
}
function mn(n, t) {
  for (; ; ) {
    const e = t;
    if (!e)
      return;
    const r = a(n, e.hd);
    if (r !== void 0)
      return r;
    t = e.tl;
  }
}
const k = {
  contents: (
    /* Discrete */
    0
  )
};
function F(n, t, e) {
  let r = 0;
  switch (n) {
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
      return a(t, e);
  }
  if (r === 1) {
    k.contents = /* Continuous */
    1;
    let c = 0, o;
    try {
      o = a(t, e), c = 2;
    } catch (u) {
      throw k.contents = /* Discrete */
      0, u;
    }
    if (c === 2) {
      k.contents = /* Discrete */
      0;
      return;
    }
  }
}
const A = {
  contents: (
    /* [] */
    0
  )
}, M = {
  contents: (
    /* [] */
    0
  )
};
function bn(n) {
  const t = mn(function(r) {
    if (r[0] === n)
      return r[1];
  }, A.contents);
  if (t !== void 0)
    return t;
  const e = "$$melhole:" + n;
  return A.contents = {
    hd: [
      n,
      e
    ],
    tl: A.contents
  }, e;
}
function yn(n, t) {
  const e = bn(t);
  let r, c = 0;
  switch (t) {
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
      c = 1;
      break;
    default:
      const o = function(u) {
        _(function(s) {
          F(t, s, u);
        }, I(n[e]));
      };
      n.addEventListener(t, o), r = {
        TAG: (
          /* Direct */
          0
        ),
        _0: function(u) {
          n.removeEventListener(t, o);
        }
      };
  }
  if (c === 1) {
    if (hn(t, M.contents) === void 0) {
      let u;
      switch (t) {
        case "click":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
          u = "Mouse";
          break;
        default:
          u = "Other";
      }
      const s = function(i) {
        const f = function(l) {
          if (_(function(d) {
            const w = l.nodeName;
            if (u === "Mouse") {
              let y = 0;
              switch (w) {
                case "BUTTON":
                case "INPUT":
                case "SELECT":
                case "TEXTAREA":
                  y = 2;
                  break;
              }
              if (y === 2 && l.disabled)
                return;
            }
            Object.defineProperty(i, "currentTarget", {
              configurable: !0,
              value: l
            }), F(t, d, i);
          }, I(l[e])), !i.cancelBubble)
            return _(f, E(l.parentNode));
        };
        _(f, E(i.target)), Reflect.deleteProperty(i, "currentTarget");
      };
      M.contents = {
        hd: [
          t,
          s
        ],
        tl: M.contents
      }, document.addEventListener(t, s);
    }
    r = /* Delegated */
    0;
  }
  return [
    e,
    r
  ];
}
function En(n, t, e) {
  n[t] = e;
}
G([
  1431655765,
  1431655765
]);
G([
  858993459,
  858993459
]);
G([
  252645135,
  252645135
]);
function gn(n) {
  return {
    Key: /* @__PURE__ */ un("Key")
  };
}
function wn(n) {
}
function Tn(n) {
  return n;
}
function Nn() {
}
const nn = {
  state: (
    /* Empty_state */
    0
  ),
  each: wn,
  front: Tn,
  release: Nn
};
function tn(n, t) {
  n.parent.insertBefore(t, n.before);
}
function kn(n, t) {
  const e = document.createTextNode(Y(t, ""));
  return tn(n, e), e;
}
function An(n, t) {
  return dn(t);
}
const Mn = tn;
function On(n) {
  return (
    /* Settled */
    0
  );
}
function vn(n, t, e, r) {
  if (n === 0)
    return [];
  const c = J(n, e(0, t));
  for (let o = 1; o < n; ++o)
    c[o] = e(o, t);
  return c;
}
function Sn(n) {
  return n();
}
const In = {
  adoption: (
    /* Fresh_nodes */
    0
  ),
  text: kn,
  root: An,
  placed: Mn,
  opened: On,
  built: vn,
  aside: Sn
}, en = {
  contents: In
};
function rn(n, t) {
  t.each(function(e) {
    n.parent.removeChild(e);
  }), t.release();
}
function xn(n, t) {
  const e = {
    contents: null
  };
  t.each(function(o) {
    e.contents = o;
  });
  const r = t.front(null) === n.parent.firstChild, c = e.contents === n.parent.lastChild;
  return r && c ? (
    /* Whole */
    0
  ) : (
    /* Part */
    1
  );
}
function Ln(n, t, e) {
  const r = e.patch(n, t);
  if (r !== void 0)
    return r;
  if (xn(n, t) === /* Whole */
  0)
    return n.parent.textContent = "", t.release(), e.build(n);
  const o = e.build(n);
  return rn(n, t), o;
}
function jn(n) {
  return nn;
}
function Pn(n, t) {
  const e = t.state;
  if (
    /* tag */
    typeof e != "object" && typeof e != "function"
  )
    return t;
}
const Cn = {
  build: jn,
  patch: Pn,
  shape: (
    /* Nothing */
    1
  )
};
function Dn(n, t, e) {
  en.contents.placed(n, t), e.placement = /* Placed */
  1, $(function(r) {
    r();
  }, Z(e.references));
}
function Gn(n) {
  const t = n.cleanups;
  if (t)
    return $(function(e) {
      e();
    }, Z(t));
}
function Rn(n, t, e, r) {
  return Dn(n, t, e), {
    state: r,
    each: function(c) {
      c(t);
    },
    front: function(c) {
      return t;
    },
    release: function() {
      return Gn(e);
    }
  };
}
const Vn = {
  contents: void 0
};
function qn(n) {
  return {
    deps: J(n, Vn),
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
function Bn(n, t) {
  return {
    markup: n,
    holes: t,
    lent: void 0,
    witness: gn(),
    adopt: (
      /* Not_hydratable */
      0
    )
  };
}
function Un(n, t, e) {
  return {
    build: function(r) {
      let c;
      {
        const s = en.contents.root(r, n.markup), i = qn(t), f = n.holes(i, s);
        e(i, f), c = [
          s,
          i,
          f
        ];
      }
      const o = c[2], u = c[1];
      return Rn(r, c[0], u, {
        TAG: (
          /* Compiled_state */
          7
        ),
        identity: n,
        scope: u,
        lend: function() {
          n.lent = h(o);
        }
      });
    },
    patch: function(r, c) {
      const o = c.state;
      if (
        /* tag */
        typeof o != "object" && typeof o != "function" || o.TAG !== /* Compiled_state */
        7
      )
        return;
      if (o.identity === n)
        return o.lend(), _(function(s) {
          n.lent = void 0, e(o.scope, s);
        }, n.lent), c;
    },
    shape: (
      /* Single */
      0
    )
  };
}
function W(n, t, e) {
  return n.deps[t] === e ? (
    /* Unchanged */
    1
  ) : (n.deps[t] = e, /* Changed */
  0);
}
function Xn(n, t, e, r) {
  if (n.deps[t] === r)
    return;
  const o = e.firstChild;
  o == null || o.nodeType !== 3 ? e.textContent = r : o.data = r, n.deps[t] = r;
}
function H(n, t, e, r, c) {
  if (n.deps[t] !== c) {
    c !== void 0 ? e.setAttribute(r, c) : e.removeAttribute(r), n.deps[t] = c;
    return;
  }
}
function O(n, t, e) {
  const r = yn(t, e), c = r[1];
  if (!/* tag */
  (typeof c != "object" && typeof c != "function")) {
    const o = c._0;
    n.cleanups = {
      hd: function() {
        return a(o, void 0);
      },
      tl: n.cleanups
    };
  }
  return r[0];
}
const v = {
  contents: 0
};
function R(n) {
  return v.contents = v.contents + 1 | 0, {
    body: n,
    data_key: "$$melhole:data" + String(v.contents),
    sent: void 0,
    handler: function(t) {
    }
  };
}
function S(n, t, e, r, c) {
  n[e.data_key] = c;
  const o = e.sent;
  let u = 0;
  o !== void 0 && g(o) === r || (u = 1), u === 1 && (e.sent = h(r), e.handler = function(s) {
    e.body(s.currentTarget[e.data_key], r, s);
  }), En(n, t, e.handler);
}
function Kn(n, t, e) {
  const r = _n(void 0), c = {
    parent: t,
    before: r
  };
  return {
    position: c,
    source: n,
    live: n.build(c)
  };
}
function Fn(n, t) {
  if (n.source !== t) {
    n.live = Ln(n.position, n.live, t), n.source = t;
    return;
  }
}
function Wn(n) {
  rn(n.position, n.live), n.live = nn, n.source = Cn;
}
function z(n, t) {
  return a(n, t);
}
function Hn(n, t) {
  return Kn(n, t);
}
const zn = {
  take: Hn,
  carry: (
    /* Initial */
    0
  )
}, j = "$$meltea:program";
function Jn(n, t, e) {
  if (n.carry !== /* Initial */
  0)
    return fn(I(e[j]), function(c) {
      const o = a(c.current, void 0);
      a(c.leave, void 0);
      const u = c.built, s = t.shape;
      if (
        /* tag */
        !(typeof u != "object" && typeof u != "function" || /* tag */
        typeof s != "object" && typeof s != "function" || u._0 !== s._0)
      )
        return h(o);
    });
}
function Qn(n, t, e, r, c, o) {
  const u = {
    contents: c
  }, s = {
    contents: (
      /* Idle */
      0
    )
  }, i = {
    contents: function(p) {
    }
  }, f = {
    contents: 0
  }, l = {
    contents: (
      /* Instant */
      0
    )
  }, d = function(p) {
    a(i.contents, p);
  }, w = Q(e.take, z(a(r, c), d), o), y = function(p) {
    const m = f.contents;
    if (m & t.reads && Fn(w, z(a(r, u.contents), d)), f.contents = 0, m & t.listens)
      return X(n.drawn, m, u.contents, d);
  }, T = function(p) {
    switch (s.contents) {
      case /* Idle */
      0:
        return;
    }
    s.contents = /* Idle */
    0;
    const N = l.contents, q = document.startViewTransition;
    if (N !== /* Instant */
    0)
      if (q !== void 0) {
        l.contents = /* Instant */
        0, document.startViewTransition(y);
        return;
      } else
        return l.contents = /* Instant */
        0, y();
    l.contents = /* Instant */
    0, y();
  };
  i.contents = function(p) {
    u.contents = X(n.step, p, u.contents, d), f.contents = f.contents | a(t.changes, p);
    const m = s.contents, N = k.contents;
    switch (m) {
      case /* Idle */
      0:
        if (N === /* Discrete */
        0) {
          s.contents = /* Queued */
          1, queueMicrotask(T);
          return;
        }
        s.contents = /* Framed */
        2, requestAnimationFrame(function(q) {
          T();
        });
        return;
      case /* Queued */
      1:
        return;
      case /* Framed */
      2:
        if (N !== /* Discrete */
        0)
          return;
        s.contents = /* Queued */
        1, queueMicrotask(T);
        return;
    }
  };
  const V = function(p) {
    i.contents = function(m) {
    }, s.contents = /* Idle */
    0, a(n.halted, d), Wn(w), o[j] = void 0;
  };
  return o[j] = {
    built: t.shape,
    current: function(p) {
      return u.contents;
    },
    leave: V
  }, {
    send: d,
    draw: T,
    halt: V
  };
}
function cn(n) {
  return -1;
}
const Yn = {
  changes: cn,
  reads: -1,
  shape: (
    /* Unshaped */
    0
  ),
  listens: -1
};
function Zn(n, t, e, r, c, o, u) {
  if (!/* tag */
  (typeof t != "object" && typeof t != "function") && !/* tag */
  (typeof r != "object" && typeof r != "function") && t.analysed === n && r.analysed === e) {
    let s;
    return s = /* tag */
    -1, {
      changes: t.fields,
      reads: r.fields,
      shape: c,
      listens: s
    };
  }
  return {
    changes: cn,
    reads: -1,
    shape: c,
    listens: -1
  };
}
function $n(n, t, e, r, c, o) {
  const u = n !== void 0 ? n : Yn, s = zn;
  return Qn({
    step: function(i, f, l) {
      return Q(r, i, f);
    },
    drawn: function(i, f, l) {
    },
    halted: function(i) {
    }
  }, u, s, c, Y(Jn(s, u, o), e), o);
}
function P(n, t) {
  switch (n) {
    case /* Increment */
    0:
      return t + 1 | 0;
    case /* Decrement */
    1:
      return t - 1 | 0;
    case /* Reset */
    2:
      return 0;
  }
}
function nt(n) {
  return -1;
}
const tt = {
  TAG: (
    /* Changes */
    0
  ),
  analysed: P,
  fields: nt
}, et = {
  TAG: (
    /* Shape */
    0
  ),
  _0: "d834660c9bedfaefb7ef861155a68df5"
}, rt = R(function(n, t, e) {
  a(
    t,
    /* Decrement */
    1
  );
}), ct = R(function(n, t, e) {
  a(
    t,
    /* Increment */
    0
  );
}), ot = R(function(n, t, e) {
  a(
    t,
    /* Reset */
    2
  );
}), ut = Bn(an('<div class="counter"><button>-</button><output></output><button>+</button><button>reset</button></div>'), function(n, t) {
  const e = t.firstChild, r = e.nextSibling, c = r.nextSibling, o = c.nextSibling;
  return [
    e,
    O(n, e, "click"),
    r,
    r,
    c,
    O(n, c, "click"),
    o,
    O(n, o, "click"),
    o
  ];
});
function C(n, t) {
  return Un(ut, 5, function(e, r) {
    const c = W(e, 0, t), o = W(e, 1, n);
    c === /* Changed */
    0 && S(r[0], r[1], rt, t, void 0), o === /* Changed */
    0 && H(e, 2, r[2], "class", n < 0 ? "negative" : ""), o === /* Changed */
    0 && Xn(e, 3, r[3], String(n)), c === /* Changed */
    0 && S(r[4], r[5], ct, t, void 0), c === /* Changed */
    0 && S(r[6], r[7], ot, t, void 0), o === /* Changed */
    0 && H(e, 4, r[8], "disabled", n === 0 ? "" : void 0);
  });
}
const st = {
  TAG: (
    /* Reads */
    0
  ),
  analysed: C,
  fields: -1
};
_(function(n) {
  $n(h(Zn(P, tt, C, st, et)), void 0, 0, P, C, n);
}, E(document.getElementById("root")));
export {
  tt as __melhole_changes_update,
  rt as __melhole_link_1,
  ct as __melhole_link_2,
  ot as __melhole_link_3,
  st as __melhole_reads_view,
  et as __melhole_shape_update,
  ut as __melhole_template_4,
  P as update,
  C as view
};
