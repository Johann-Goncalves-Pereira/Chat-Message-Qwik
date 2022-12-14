/**
 * @license
 * @builder.io/qwik 0.10.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ const He = (e) => e && typeof e.nodeType == "number",
  fs = (e) => e && e.nodeType === 9,
  De = (e) => e.nodeType === 1,
  ve = (e) => He(e) && (e.nodeType === 1 || e.nodeType === 111),
  te = (e) => e.nodeType === 111,
  $s = (e) => e.nodeType === 3,
  lt = (e) => e.nodeType === 8,
  Qe = (e, ...t) => {
    const n = e instanceof Error ? e : new Error(e);
    return (
      typeof globalThis._handleError == "function" && e instanceof Error
        ? globalThis._handleError(e, t)
        : console.error("%cQWIK ERROR", "", n.message, ...Or(t), n.stack),
      n
    );
  },
  Vt = (e, ...t) => Qe(e, ...t),
  Or = (e) => e,
  P = (e, ...t) => {
    const n = ut(e);
    return Vt(n, ...t);
  },
  ut = (e) => `Code(${e})`,
  Yt = (e) => {
    const t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null;
  },
  V = (e) => e && typeof e == "object",
  O = (e) => Array.isArray(e),
  Be = (e) => typeof e == "string",
  W = (e) => typeof e == "function",
  fe = "q:slot",
  M = (e) => e instanceof Promise,
  Jt = (e, t, n) => {
    try {
      const s = e();
      return M(s) ? s.then(t, n) : t(s);
    } catch (s) {
      return n(s);
    }
  },
  E = (e, t) => (M(e) ? e.then(t) : t(e)),
  Le = (e) => (e.some(M) ? Promise.all(e) : e),
  Lt = (e) => e != null,
  Tr = (e) =>
    new Promise((t) => {
      setTimeout(t, e);
    });
let Te;
const Je = () => {
    if (!Te) {
      const e = typeof document < "u" && document && document.__q_context__;
      return e ? (O(e) ? (document.__q_context__ = ms(e)) : e) : void 0;
    }
    return Te;
  },
  hs = () => {
    const e = Je();
    if (!e) throw P(14);
    return e;
  },
  Zt = () => {
    const e = hs();
    if (e.$event$ !== "qRender") throw P(20);
    return e.$hostElement$, e.$waitOn$, e.$renderCtx$, e.$subscriber$, e;
  },
  ie = (e, t, ...n) => {
    const s = Te;
    let r;
    try {
      (Te = e), (r = t.apply(null, n));
    } finally {
      Te = s;
    }
    return r;
  },
  Rr = (e, t) => {
    const n = e.$waitOn$;
    if (n.length === 0) {
      const s = t();
      M(s) && n.push(s);
    } else n.push(Promise.all(n).then(t));
  },
  ms = (e) => {
    const t = e[0];
    return ne(void 0, t, e[1], e[2]);
  },
  ne = (e, t, n, s) => ({
    $seq$: 0,
    $hostElement$: e,
    $element$: t,
    $event$: n,
    $url$: s,
    $qrl$: void 0,
    $props$: void 0,
    $renderCtx$: void 0,
    $subscriber$: void 0,
    $waitOn$: void 0,
  }),
  ys = (e) => e.closest("[q\\:container]"),
  dt = (e) =>
    typeof document < "u" ? document : e.nodeType === 9 ? e : e.ownerDocument,
  Cr = (e) => V(e) && e[Symbol.toStringTag] === "Module";
let Gt = (() => {
  const e = new Map();
  return {
    isServer: !1,
    importSymbol(t, n, s) {
      const r = ((a, l, u) => {
          var $;
          const f = a.baseURI,
            d = new URL(($ = l.getAttribute("q:base")) != null ? $ : f, f);
          return new URL(u, d);
        })(t.ownerDocument, t, n).toString(),
        o = new URL(r);
      (o.hash = ""), (o.search = "");
      const i = o.href,
        c = e.get(i);
      return c
        ? c[s]
        : import(i).then((a) => {
            return (
              (l = a), (a = Object.values(l).find(Cr) || l), e.set(i, a), a[s]
            );
            var l;
          });
    },
    raf: (t) =>
      new Promise((n) => {
        requestAnimationFrame(() => {
          n(t());
        });
      }),
    nextTick: (t) =>
      new Promise((n) => {
        setTimeout(() => {
          n(t());
        });
      }),
    chunkForSymbol() {},
  };
})();
const Lr = (e) => (Gt = e),
  pt = () => Gt,
  We = () => Gt.isServer,
  ee = [],
  re = {},
  S = (e, t, n = ee) => wn(null, t, e, null, null, n, null),
  Xt = (e, t = {}) => {
    var l;
    let n = e.$symbol$,
      s = e.$chunk$;
    const r = (l = e.$refSymbol$) != null ? l : n,
      o = pt();
    if (o) {
      const u = o.chunkForSymbol(r);
      u && ((s = u[1]), e.$refSymbol$ || (n = u[0]));
    }
    if (!s) throw P(31, e);
    s.startsWith("./") && (s = s.slice(2));
    const i = [s, "#", n],
      c = e.$capture$,
      a = e.$captureRef$;
    if (a && a.length) {
      if (t.$getObjId$) {
        const u = a.map(t.$getObjId$);
        i.push(`[${u.join(" ")}]`);
      } else if (t.$addRefMap$) {
        const u = a.map(t.$addRefMap$);
        i.push(`[${u.join(" ")}]`);
      }
    } else c && c.length > 0 && i.push(`[${c.join(" ")}]`);
    return i.join("");
  },
  en = (e, t) => {
    t.$element$;
    const n = { $element$: t.$element$, $addRefMap$: (s) => Ar(t.$refMap$, s) };
    return e.map((s) => Xt(s, n)).join(`
`);
  },
  ft = (e, t) => {
    const n = e.length,
      s = On(e, 0, "#"),
      r = On(e, s, "["),
      o = Math.min(s, r),
      i = e.substring(0, o),
      c = s == n ? s : s + 1,
      a = r,
      l = c == a ? "default" : e.substring(c, a),
      u = r,
      f = n,
      d = u === f ? ee : e.substring(u + 1, f - 1).split(" "),
      $ = wn(i, l, null, null, d, null, null);
    return t && $.$setContainer$(t), $;
  },
  On = (e, t, n) => {
    const s = e.length,
      r = e.indexOf(n, t == s ? 0 : t);
    return r == -1 ? s : r;
  },
  Ar = (e, t) => {
    const n = e.indexOf(t);
    return n === -1 ? (e.push(t), e.length - 1) : n;
  },
  U = (e, t, n) => e.setAttribute(t, n),
  G = (e, t) => e.getAttribute(t),
  Pr = /^(on|window:|document:)/,
  tn = (e) => e.endsWith("$") && Pr.test(e),
  Fe = (e, t) => {
    for (const n of t) {
      const s = n[0],
        r = n[1].$hash$;
      let o = !1;
      for (let i = 0; i < e.length; i++) {
        const c = e[i];
        if (c[0] === s && c[1].$hash$ === r) {
          e.splice(i, 1, n), (o = !0);
          break;
        }
      }
      o || e.push(n);
    }
  },
  nn = (e) => {
    if (e.length === 0) return ee;
    if (e.length === 1) {
      const n = e[0];
      return [[n[0], [n[1]]]];
    }
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const s = e[n][0];
      t.includes(s) || t.push(s);
    }
    return t.map((n) => [n, e.filter((s) => s[0] === n).map((s) => s[1])]);
  },
  sn = (e, t, n, s) => {
    t.endsWith("$"), (t = Js(t.slice(0, -1)));
    const r = O(n) ? n.map((o) => [t, Tn(o, s)]) : [[t, Tn(n, s)]];
    return Fe(e, r), t;
  },
  Tn = (e, t) => (e.$setContainer$(t), e),
  Mr = (e, t) => {
    const n = e.$element$.attributes,
      s = [];
    for (let r = 0; r < n.length; r++) {
      const { name: o, value: i } = n.item(r);
      if (
        o.startsWith("on:") ||
        o.startsWith("on-window:") ||
        o.startsWith("on-document:")
      ) {
        const c = i.split(`
`);
        for (const a of c) {
          const l = ft(a, t);
          l.$capture$ && Zs(l, e), s.push([o, l]);
        }
      }
    }
    return s;
  },
  Ke = () => {
    const e = Zt(),
      t = e.$seq$,
      n = e.$hostElement$,
      s = A(n),
      r = s.$seq$ ? s.$seq$ : (s.$seq$ = []);
    return e.$seq$++, { get: r[t], set: (o) => (r[t] = o), i: t, ctx: e };
  },
  zr = (e, t) => gs(`on-${e}`, t),
  Rn = (e, t) => gs(`document:on-${e}`, t),
  gs = (e, t) => {
    const n = Zt(),
      s = A(n.$hostElement$);
    Fe(s.li, [[Js(e), t]]), (s.$needAttachListeners$ = !0);
  },
  w = (e, t, n) => {
    const s = n == null ? null : String(n);
    return new vs(e, t, s);
  };
class vs {
  constructor(t, n, s = null) {
    (this.type = t), (this.props = n), (this.key = s);
  }
}
const $t = (e) => e instanceof vs,
  we = (e) => e.children,
  rn = Symbol("skip render"),
  ws = () => null,
  Ve = (e) => e.children,
  bs = () => null,
  on = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(),
  ht = (e, t, n, s) => {
    e
      ? e.$operations$.push({ $operation$: Cn, $args$: [t, n, s] })
      : Cn(t, n, s);
  },
  Cn = (e, t, n) => {
    if (n == null || n === !1) e.removeAttribute(t);
    else {
      const s = n === !0 ? "" : String(n);
      U(e, t, s);
    }
  },
  de = (e, t, n, s) => {
    e
      ? e.$operations$.push({ $operation$: Ln, $args$: [t, n, s] })
      : Ln(t, n, s);
  },
  Ln = (e, t, n) => {
    try {
      e[t] = n;
    } catch (s) {
      Qe(ut(6), { node: e, key: t, value: n }, s);
    }
  },
  cn = (e, t, n) => (n ? e.createElementNS(Rs, t) : e.createElement(t)),
  he = (e, t, n, s) => (
    e.$operations$.push({ $operation$: gt, $args$: [t, n, s || null] }), n
  ),
  An = (e, t, n) => (
    e.$operations$.push({ $operation$: nt, $args$: [t, n] }), n
  ),
  Pn = (e, t, n) => {
    const s = e.classList;
    s.remove(...t), s.add(...n);
  },
  Ur = (e, t) => {
    const n = dt(e),
      s = n.documentElement === e,
      r = n.head,
      o = n.createElement("style");
    U(o, "q:style", t.styleId),
      (o.textContent = t.content),
      s && r ? nt(r, o) : gt(e, o, e.firstChild);
  },
  _s = (e, t) => {
    e.$operations$.push({ $operation$: Hr, $args$: [t, e] });
  },
  Hr = (e, t) => {
    const n = e.parentElement;
    if (n) {
      if (e.nodeType === 1 || e.nodeType === 111) {
        const s = t.$containerState$.$subsManager$;
        mn(e, t, s, !0);
      }
      yo(n, e);
    }
  },
  qs = (e, t) => {
    const n = cn(e, "q:template", !1);
    return U(n, fe, t), U(n, "hidden", ""), U(n, "aria-hidden", "true"), n;
  },
  Dr = (e) => {
    for (const t of e.$operations$) t.$operation$.apply(void 0, t.$args$);
    Qr(e);
  },
  At = (e) => G(e, "q:key"),
  Et = (e, t) => {
    t !== null && U(e, "q:key", t);
  },
  Qr = (e) => {
    const t = e.$containerState$.$subsManager$;
    e.$rmSlots$.forEach((n) => {
      const s = At(n),
        r = Ae(n, "root");
      if (r.length > 0) {
        const o = n.getAttribute("q:sref"),
          i = e.$roots$.find((c) => c.$id$ === o);
        if (i) {
          const c = qs(e.$doc$, s),
            a = i.$element$;
          for (const l of r) nt(c, l);
          gt(a, c, a.firstChild);
        } else mn(n, e, t, !1);
      }
    }),
      e.$addSlots$.forEach(([n, s]) => {
        const r = At(n),
          o = Array.from(s.childNodes).find(
            (i) => Ls(i) && i.getAttribute(fe) === r
          );
        o &&
          (Ae(o, "root").forEach((i) => {
            nt(n, i);
          }),
          o.remove());
      });
  };
class an {
  constructor(t, n) {
    (this.open = t),
      (this.close = n),
      (this._qc_ = null),
      (this.nodeType = 111),
      (this.localName = ":virtual"),
      (this.nodeName = ":virtual");
    const s = (this.ownerDocument = t.ownerDocument);
    (this.template = cn(s, "template", !1)),
      (this.attributes = ((r) => {
        if (!r) return new Map();
        const o = r.split(" ");
        return new Map(
          o.map((i) => {
            const c = i.indexOf("=");
            return c >= 0
              ? [i.slice(0, c), ((a = i.slice(c + 1)), a.replace(/\+/g, " "))]
              : [i, ""];
            var a;
          })
        );
      })(t.data.slice(3))),
      t.data.startsWith("qv "),
      (t.__virtual = this);
  }
  insertBefore(t, n) {
    const s = this.parentElement;
    if (s) {
      const r = n || this.close;
      s.insertBefore(t, r);
    } else this.template.insertBefore(t, n);
    return t;
  }
  remove() {
    const t = this.parentElement;
    if (t) {
      const n = Array.from(this.childNodes);
      this.template.childElementCount,
        t.removeChild(this.open),
        this.template.append(...n),
        t.removeChild(this.close);
    }
  }
  appendChild(t) {
    return this.insertBefore(t, null);
  }
  insertBeforeTo(t, n) {
    const s = Array.from(this.childNodes);
    t.insertBefore(this.open, n);
    for (const r of s) t.insertBefore(r, n);
    t.insertBefore(this.close, n), this.template.childElementCount;
  }
  appendTo(t) {
    this.insertBeforeTo(t, null);
  }
  removeChild(t) {
    this.parentElement
      ? this.parentElement.removeChild(t)
      : this.template.removeChild(t);
  }
  getAttribute(t) {
    var n;
    return (n = this.attributes.get(t)) != null ? n : null;
  }
  hasAttribute(t) {
    return this.attributes.has(t);
  }
  setAttribute(t, n) {
    this.attributes.set(t, n), (this.open.data = Mn(this.attributes));
  }
  removeAttribute(t) {
    this.attributes.delete(t), (this.open.data = Mn(this.attributes));
  }
  matches(t) {
    return !1;
  }
  compareDocumentPosition(t) {
    return this.open.compareDocumentPosition(t);
  }
  closest(t) {
    const n = this.parentElement;
    return n ? n.closest(t) : null;
  }
  querySelectorAll(t) {
    const n = [];
    return (
      Ae(this, "elements").forEach((s) => {
        ve(s) &&
          (s.matches(t) && n.push(s),
          n.concat(Array.from(s.querySelectorAll(t))));
      }),
      n
    );
  }
  querySelector(t) {
    for (const n of this.childNodes)
      if (De(n)) {
        if (n.matches(t)) return n;
        const s = n.querySelector(t);
        if (s !== null) return s;
      }
    return null;
  }
  get firstChild() {
    if (this.parentElement) {
      const t = this.open.nextSibling;
      return t === this.close ? null : t;
    }
    return this.template.firstChild;
  }
  get nextSibling() {
    return this.close.nextSibling;
  }
  get previousSibling() {
    return this.open.previousSibling;
  }
  get childNodes() {
    if (!this.parentElement) return this.template.childNodes;
    const t = [];
    let n = this.open;
    for (; (n = n.nextSibling) && n !== this.close; ) t.push(n);
    return t;
  }
  get isConnected() {
    return this.open.isConnected;
  }
  get parentElement() {
    return this.open.parentElement;
  }
}
const Mn = (e) =>
    `qv ${((t) => {
      const n = [];
      return (
        t.forEach((s, r) => {
          var o;
          s
            ? n.push(`${r}=${((o = s), o.replace(/ /g, "+"))}`)
            : n.push(`${r}`);
        }),
        n.join(" ")
      );
    })(e)}`,
  ln = (e) => {
    if (e == null) return null;
    if (lt(e)) {
      const t = Ze(e);
      if (t) return t;
    }
    return e;
  },
  Ze = (e) => {
    const t = e.__virtual;
    if (t) return t;
    if (e.data.startsWith("qv ")) {
      const n = ks(e);
      return new an(e, n);
    }
    return null;
  },
  ks = (e) => {
    let t = e.nextSibling,
      n = 1;
    for (; t; ) {
      if (lt(t)) {
        if (t.data.startsWith("qv ")) n++;
        else if (t.data === "/qv" && (n--, n === 0)) return t;
      }
      t = t.nextSibling;
    }
    throw new Error("close not found");
  },
  Ge = (e) => (e == null ? null : te(e) ? e.open : e),
  be = (e) => (/^[\w/.-]+$/.test(e), Object.freeze({ id: on(e) })),
  xe = (e, t) => {
    const { get: n, set: s, ctx: r } = Ke();
    if (n !== void 0) return;
    const o = r.$hostElement$,
      i = A(o);
    let c = i.$contexts$;
    c || (i.$contexts$ = c = new Map()), c.set(e.id, t), s(!0);
  },
  mt = (e, t) => {
    const { get: n, set: s, ctx: r } = Ke();
    if (n !== void 0) return n;
    const o = xs(e, r.$hostElement$, r.$renderCtx$);
    if (o !== void 0) return s(o);
    if (t !== void 0) return s(t);
    throw P(13, e.id);
  },
  xs = (e, t, n) => {
    const s = e.id;
    if (n) {
      const r = n.$localStack$;
      for (let o = r.length - 1; o >= 0; o--) {
        const i = r[o];
        if (((t = i.$element$), i.$contexts$)) {
          const c = i.$contexts$.get(s);
          if (c) return c;
        }
      }
    }
    if (t.closest) {
      const r = Br(t, s);
      if (r !== void 0) return r;
    }
  },
  Br = (e, t) => {
    var s;
    let n = e;
    for (; n; ) {
      let r = n,
        o;
      for (; r && (o = Wr(r)); ) {
        const i = (s = F(o)) == null ? void 0 : s.$contexts$;
        if (i && i.has(t)) return i.get(t);
        r = o;
      }
      n = n.parentElement;
    }
  },
  Wr = (e) => {
    let t = e,
      n = 1;
    for (; (t = t.previousSibling); )
      if (lt(t)) {
        if (t.data === "/qv") n++;
        else if (t.data.startsWith("qv ") && (n--, n === 0)) return Ze(t);
      }
    return null;
  },
  Fr = be("qk-error"),
  Ss = (e, t, n) => {
    if (We()) throw e;
    {
      const s = xs(Fr, t, n);
      if (s === void 0) throw e;
      s.error = e;
    }
  },
  Xe = (e, t) => {
    (t.$dirty$ = !1), (t.$mounted$ = !0), (t.$slots$ = []);
    const n = t.$element$,
      s = t.$componentQrl$,
      r = t.$props$,
      o = un(e, t),
      i = ne(n, void 0, "qRender"),
      c = (i.$waitOn$ = []);
    (o.$cmpCtx$ = t),
      (i.$subscriber$ = n),
      (i.$renderCtx$ = e),
      s.$setContainer$(e.$static$.$containerState$.$containerEl$);
    const a = s.getFn(i);
    return Jt(
      () => a(r),
      (l) =>
        c.length > 0
          ? Promise.all(c).then(() =>
              t.$dirty$ ? Xe(e, t) : { node: l, rCtx: o }
            )
          : t.$dirty$
          ? Xe(e, t)
          : { node: l, rCtx: o },
      (l) => (Ss(l, n, e), { node: rn, rCtx: o })
    );
  },
  Es = (e, t) => ({
    $static$: {
      $doc$: e,
      $containerState$: t,
      $hostElements$: new Set(),
      $operations$: [],
      $postOperations$: [],
      $roots$: [],
      $addSlots$: [],
      $rmSlots$: [],
    },
    $cmpCtx$: void 0,
    $localStack$: [],
  }),
  un = (e, t) => ({
    $static$: e.$static$,
    $cmpCtx$: e.$cmpCtx$,
    $localStack$: e.$localStack$.concat(t),
  }),
  Is = (e) => {
    if (Be(e)) return e;
    if (V(e)) {
      if (O(e)) return e.join(" ");
      {
        let t = "",
          n = !1;
        for (const s of Object.keys(e))
          e[s] && (n && (t += " "), (t += s), (n = !0));
        return t;
      }
    }
    return "";
  },
  Kr = /\s/,
  Pt = (e) => (e ? e.split(Kr) : ee),
  Ns = (e) => {
    if (e == null) return "";
    if (typeof e == "object") {
      if (O(e)) throw P(0, e, "style");
      {
        const t = [];
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            const s = e[n];
            s && t.push(on(n) + ":" + s);
          }
        return t.join(";");
      }
    }
    return String(e);
  },
  yt = (e) => it(e.$static$.$containerState$.$elementIndex$++),
  Mt = (e, t) => {
    const n = yt(e);
    (t.$id$ = n), t.$element$.setAttribute("q:id", n);
  },
  Vr = [fe, "children"],
  js = (e) => {
    const t = e.join(" ");
    if (t.length > 0) return t;
  },
  dn = (e, t, n) => {
    const s = !t.$mounted$,
      r = t.$element$,
      o = e.$static$.$containerState$;
    return (
      o.$hostsStaging$.delete(r),
      o.$subsManager$.$clearSub$(r),
      E(Xe(e, t), (i) => {
        const c = e.$static$,
          a = i.rCtx,
          l = ne(r);
        if (
          (c.$hostElements$.add(r),
          (l.$subscriber$ = r),
          (l.$renderCtx$ = a),
          s)
        ) {
          if (t.$appendStyles$)
            for (const $ of t.$appendStyles$)
              (f = $),
                (u = c).$containerState$.$styleIds$.add(f.styleId),
                u.$postOperations$.push({
                  $operation$: Ur,
                  $args$: [u.$containerState$.$containerEl$, f],
                });
          if (t.$scopeIds$) {
            const $ = js(t.$scopeIds$);
            $ && r.setAttribute("q:sstyle", $);
          }
        }
        var u, f;
        const d = je(i.node, l);
        return E(d, ($) => {
          const y = Yr(r, $),
            m = Os(t);
          return E(to(a, m, y, n), () => {
            t.$vdom$ = y;
          });
        });
      })
    );
  },
  Os = (e) => (e.$vdom$ || (e.$vdom$ = Pe(e.$element$)), e.$vdom$);
class X {
  constructor(t, n, s, r) {
    (this.$type$ = t),
      (this.$props$ = n),
      (this.$children$ = s),
      (this.$key$ = r),
      (this.$elm$ = null),
      (this.$text$ = ""),
      (this.$signal$ = null);
  }
}
const Yr = (e, t) => {
    const n = t === void 0 ? ee : O(t) ? t : [t],
      s = new X(":virtual", {}, n, null);
    return (s.$elm$ = e), s;
  },
  je = (e, t) => {
    if (e != null && typeof e != "boolean") {
      if (Jr(e)) {
        const n = new X("#text", re, ee, null);
        return (n.$text$ = String(e)), n;
      }
      if ($t(e))
        return ((n, s) => {
          const r = n.key != null ? String(n.key) : null,
            o = n.type,
            i = n.props,
            c = i.children;
          let a = "";
          if (Be(o)) a = o;
          else {
            if (o !== Ve) {
              if (W(o)) {
                const u = ie(s, o, i, n.key);
                return je(u, s);
              }
              throw P(25, o);
            }
            a = ":virtual";
          }
          let l = ee;
          return c != null
            ? E(
                je(c, s),
                (u) => (u !== void 0 && (l = O(u) ? u : [u]), new X(a, i, l, r))
              )
            : new X(a, i, l, r);
        })(e, t);
      if (K(e)) {
        const n = e.value,
          s = new X("#text", re, ee, null);
        return (s.$text$ = String(n)), (s.$signal$ = e), s;
      }
      if (O(e)) {
        const n = Le(e.flatMap((s) => je(s, t)));
        return E(n, (s) => s.flat(100).filter(Lt));
      }
      return M(e)
        ? e.then((n) => je(n, t))
        : e === rn
        ? new X(":skipRender", re, ee, null)
        : void 0;
    }
  },
  Jr = (e) => Be(e) || typeof e == "number",
  zn = Symbol("ContainerState"),
  et = (e) => {
    let t = e[zn];
    return t || (e[zn] = t = Ts(e)), t;
  },
  Ts = (e) => {
    const t = {
      $containerEl$: e,
      $proxyMap$: new WeakMap(),
      $subsManager$: null,
      $opsNext$: new Set(),
      $watchNext$: new Set(),
      $watchStaging$: new Set(),
      $hostsNext$: new Set(),
      $hostsStaging$: new Set(),
      $renderPromise$: void 0,
      $hostsRendering$: void 0,
      $envData$: {},
      $elementIndex$: 0,
      $styleIds$: new Set(),
    };
    return (t.$subsManager$ = Xr(t)), t;
  },
  Zr = (e, t) => {
    const n = e[0],
      s = t(e[1]);
    if (!s) return;
    let r = n + " " + s;
    if (e[0] === 0) e[2] && (r += " " + e[2]);
    else {
      const o = typeof e[3] == "string" ? e[3] : Un(t(e[3]));
      (r += ` ${Un(t(e[2]))} ${o} ${e[4]}`), e[5] && (r += ` ${e[5]}`);
    }
    return r;
  },
  Gr = (e, t) => {
    const n = e.split(" "),
      s = parseInt(n[0], 10);
    n.length;
    const r = [s, t(n[1])];
    return (
      s === 0
        ? (n.length, r.push(n[2]))
        : (n.length === 5 || n.length, r.push(t(n[2]), t(n[3]), n[4], n[5])),
      r
    );
  },
  Xr = (e) => {
    const t = new Map();
    return {
      $createManager$: (n) => new eo(t, e, n),
      $clearSub$: (n) => {
        const s = t.get(n);
        if (s) {
          for (const r of s) r.$unsubGroup$(n);
          t.delete(n), (s.length = 0);
        }
      },
    };
  };
class eo {
  constructor(t, n, s) {
    (this.$groupToManagers$ = t),
      (this.$containerState$ = n),
      (this.$subs$ = s || []);
    for (const r of this.$subs$) this.$addToGroup$(r[1], this);
  }
  $addToGroup$(t, n) {
    let s = this.$groupToManagers$.get(t);
    s || this.$groupToManagers$.set(t, (s = [])), s.includes(n) || s.push(n);
  }
  $unsubGroup$(t) {
    const n = this.$subs$;
    for (let s = 0; s < n.length; s++) n[s][1] === t && (n.splice(s, 1), s--);
  }
  $addSub$(t) {
    const n = this.$subs$,
      [s, r] = t,
      o = t[t.length - 1];
    (s === 0 && n.some(([i, c, a]) => i === s && c === r && a === o)) ||
      (n.push(t), this.$addToGroup$(r, this));
  }
  $notifySubs$(t) {
    const n = this.$subs$;
    for (const s of n) {
      const r = s[s.length - 1];
      (t && r && r !== t) || wo(s, this.$containerState$);
    }
  }
}
const pn = (e, t) => {
    if (W(e)) return e(t);
    if (V(e)) {
      if ("current" in e) return (e.current = t);
      if ("value" in e) return (e.value = t);
    }
    throw P(32, e);
  },
  Un = (e) => {
    if (e == null) throw Qe("must be non null", e);
    return e;
  },
  Rs = "http://www.w3.org/2000/svg",
  tt = [],
  to = (e, t, n, s) => fn(e, t, n, "root", s),
  fn = (e, t, n, s, r) => {
    t.$elm$;
    const o = n.$children$;
    if (o.length === 1 && o[0].$type$ === ":skipRender") return;
    const i = t.$elm$;
    t.$children$ === tt && i.nodeName === "HEAD" && ((s = "head"), (r |= 2));
    const c = no(t, s);
    return c.length > 0 && o.length > 0
      ? so(e, i, c, o, r)
      : o.length > 0
      ? As(e, i, null, o, 0, o.length - 1, r)
      : c.length > 0
      ? $n(e.$static$, c, 0, c.length - 1)
      : void 0;
  },
  no = (e, t) => {
    const n = e.$children$,
      s = e.$elm$;
    return n === tt ? (e.$children$ = Cs(s, t)) : n;
  },
  so = (e, t, n, s, r) => {
    let o = 0,
      i = 0,
      c = n.length - 1,
      a = n[0],
      l = n[c],
      u = s.length - 1,
      f = s[0],
      d = s[u],
      $,
      y,
      m;
    const b = [],
      p = e.$static$;
    for (; o <= c && i <= u; )
      if (a == null) a = n[++o];
      else if (l == null) l = n[--c];
      else if (f == null) f = s[++i];
      else if (d == null) d = s[--u];
      else if (Ye(a, f)) b.push(Se(e, a, f, r)), (a = n[++o]), (f = s[++i]);
      else if (Ye(l, d)) b.push(Se(e, l, d, r)), (l = n[--c]), (d = s[--u]);
      else if (Ye(a, d))
        a.$elm$,
          l.$elm$,
          b.push(Se(e, a, d, r)),
          he(p, t, a.$elm$, l.$elm$.nextSibling),
          (a = n[++o]),
          (d = s[--u]);
      else if (Ye(l, f))
        a.$elm$,
          l.$elm$,
          b.push(Se(e, l, f, r)),
          he(p, t, l.$elm$, a.$elm$),
          (l = n[--c]),
          (f = s[++i]);
      else {
        if (
          ($ === void 0 && ($ = go(n, o, c)), (y = $[f.$key$]), y === void 0)
        ) {
          const v = Me(e, f, r);
          b.push(
            E(v, (g) => {
              he(p, t, g, a == null ? void 0 : a.$elm$);
            })
          );
        } else if (((m = n[y]), vo(m, f.$type$)))
          b.push(Se(e, m, f, r)),
            (n[y] = void 0),
            m.$elm$,
            he(p, t, m.$elm$, a.$elm$);
        else {
          const v = Me(e, f, r);
          b.push(
            E(v, (g) => {
              he(p, t, g, a == null ? void 0 : a.$elm$);
            })
          );
        }
        f = s[++i];
      }
    if (i <= u) {
      const v = s[u + 1] == null ? null : s[u + 1].$elm$;
      b.push(As(e, t, v, s, i, u, r));
    }
    let h = Le(b);
    return (
      o <= c &&
        (h = E(h, () => {
          $n(p, n, o, c);
        })),
      h
    );
  },
  It = (e, t) => {
    const n = te(e) ? e.close : null,
      s = [];
    let r = e.firstChild;
    for (; (r = ln(r)) && (t(r) && s.push(r), (r = r.nextSibling), r !== n); );
    return s;
  },
  Ae = (e, t) => {
    switch (t) {
      case "root":
        return It(e, ao);
      case "head":
        return It(e, co);
      case "elements":
        return It(e, ve);
    }
  },
  Cs = (e, t) => Ae(e, t).map(ro),
  ro = (e) => {
    var t, n;
    return De(e) && (n = (t = F(e)) == null ? void 0 : t.$vdom$) != null
      ? n
      : Pe(e);
  },
  Pe = (e) => {
    if (ve(e)) {
      const t = te(e) ? re : oo(e),
        n = new X(e.localName, t, tt, At(e));
      return (n.$elm$ = e), n;
    }
    if ($s(e)) {
      const t = new X(e.nodeName, {}, tt, null);
      return (t.$text$ = e.data), (t.$elm$ = e), t;
    }
    throw new Error("invalid node");
  },
  oo = (e) => {
    const t = {},
      n = e.attributes,
      s = n.length;
    for (let r = 0; r < s; r++) {
      const o = n.item(r),
        i = o.name.toLowerCase();
      i.includes(":") || (t[i] = i === "class" ? io(o.value) : o.value);
    }
    return t;
  },
  io = (e) =>
    Pt(e)
      .filter((t) => !t.startsWith("\u2B50\uFE0F"))
      .join(" "),
  co = (e) => {
    const t = e.nodeType;
    return t === 1 ? e.hasAttribute("q:head") : t === 111;
  },
  Ls = (e) => e.nodeName === "Q:TEMPLATE",
  ao = (e) => {
    const t = e.nodeType;
    if (t === 3 || t === 111) return !0;
    if (t !== 1) return !1;
    const n = e.nodeName;
    return n !== "Q:TEMPLATE" && (n !== "HEAD" || e.hasAttribute("q:head"));
  },
  Se = (e, t, n, s) => {
    t.$type$, n.$type$;
    const r = t.$elm$,
      o = n.$type$,
      i = e.$static$,
      c = o === ":virtual",
      a = e.$cmpCtx$;
    if (((n.$elm$ = r), o === "#text")) {
      const m = n.$signal$;
      return (
        m && _e(2, a.$element$, m, r, "data"),
        void (t.$text$ !== n.$text$ && de(i, r, "data", n.$text$))
      );
    }
    let l = !!(1 & s);
    l || o !== "svg" || ((s |= 1), (l = !0));
    const u = n.$props$,
      f = c && "q:renderFn" in u,
      d = A(r);
    if ((i.$containerState$.$containerEl$, !f)) {
      const m = a.li,
        b = d.li;
      if (
        ((b.length = 0),
        (n.$props$ = po(i, d, a.$element$, t.$props$, u)),
        m.length > 0 && (Fe(b, m), (m.length = 0)),
        b.length > 0)
      ) {
        const p = nn(b);
        for (const h of p) ht(i, r, h[0], en(h[1], d));
      }
      return (
        l && n.$type$ === "foreignObject" && ((s &= -2), (l = !1)),
        c && "q:s" in u
          ? (a.$slots$, void a.$slots$.push(n))
          : u[Re] !== void 0 || (c && "qonce" in u)
          ? void 0
          : fn(e, t, n, "root", s)
      );
    }
    const $ = u.props;
    let y = Us(d, e, $);
    return (
      y ||
        d.$componentQrl$ ||
        d.$element$.hasAttribute("q:id") ||
        (Mt(e, d),
        (d.$componentQrl$ = $["q:renderFn"]),
        d.$componentQrl$,
        (y = !0)),
      y ? E(dn(e, d, s), () => Hn(e, d, n, s)) : Hn(e, d, n, s)
    );
  },
  Hn = (e, t, n, s) => {
    const r = n.$children$,
      o = e.$static$,
      i = ((l) => {
        var f;
        const u = {};
        for (const d of l) {
          const $ = Ms(d);
          ((f = u[$]) != null
            ? f
            : (u[$] = new X(":virtual", { "q:s": "" }, [], $))
          ).$children$.push(d);
        }
        return u;
      })(r),
      c = un(e, t),
      a = zs(t);
    for (const l of Object.keys(a.slots))
      if (!i[l]) {
        const u = a.slots[l],
          f = Cs(u, "root");
        if (f.length > 0) {
          const d = F(u);
          d && d.$vdom$ && (d.$vdom$.$children$ = []),
            $n(o, f, 0, f.length - 1);
        }
      }
    for (const l of Object.keys(a.templates)) {
      const u = a.templates[l];
      u && ((i[l] && !a.slots[l]) || (_s(o, u), (a.templates[l] = void 0)));
    }
    return Le(
      Object.keys(i).map((l) => {
        const u = i[l],
          f = Ps(o, a, t.$element$, l),
          d = A(f),
          $ = Os(d);
        return (d.$vdom$ = u), (u.$elm$ = f), fn(c, $, u, "root", s);
      })
    );
  },
  As = (e, t, n, s, r, o, i) => {
    const c = [];
    let a = !1;
    for (; r <= o; ++r) {
      const l = s[r],
        u = Me(e, l, i);
      c.push(u), M(u) && (a = !0);
    }
    if (a) return Promise.all(c).then((l) => Dn(e.$static$, t, l, n));
    Dn(e.$static$, t, c, n);
  },
  Dn = (e, t, n, s) => {
    for (const r of n) he(e, t, r, s);
  },
  $n = (e, t, n, s) => {
    for (; n <= s; ++n) {
      const r = t[n];
      r && (r.$elm$, _s(e, r.$elm$));
    }
  },
  Ps = (e, t, n, s) => {
    const r = t.slots[s];
    if (r) return r;
    const o = t.templates[s];
    if (o) return o;
    const i = qs(e.$doc$, s);
    return (
      ((c, a, l) => {
        c.$operations$.push({ $operation$: gt, $args$: [a, l, a.firstChild] });
      })(e, n, i),
      (t.templates[s] = i),
      i
    );
  },
  Ms = (e) => {
    var t;
    return (t = e.$props$[fe]) != null ? t : "";
  },
  Me = (e, t, n) => {
    const s = t.$type$,
      r = e.$static$.$doc$,
      o = e.$cmpCtx$;
    if (s === "#text") {
      const v = t.$signal$,
        g = ((q, x) => q.createTextNode(x))(r, t.$text$);
      return v && o && _e(2, o.$element$, v, g, "data"), (t.$elm$ = g);
    }
    let i,
      c = !!(2 & n),
      a = !!(1 & n);
    a || s !== "svg" || ((n |= 1), (a = !0));
    const l = s === ":virtual",
      u = t.$props$,
      f = "q:renderFn" in u,
      d = e.$static$;
    l
      ? (i = ((v) => {
          const g = v.createComment("qv "),
            q = v.createComment("/qv");
          return new an(g, q);
        })(r))
      : s === "head"
      ? ((i = r.head), (n |= 2), (c = !0))
      : ((i = cn(r, s, a)), (n &= -3)),
      (t.$elm$ = i),
      a && s === "foreignObject" && ((a = !1), (n &= -2));
    const $ = A(i);
    if (f) {
      Et(i, t.$key$);
      const v = u["q:renderFn"];
      return (
        Us($, e, u.props),
        Mt(e, $),
        ($.$componentQrl$ = v),
        E(dn(e, $, n), () => {
          let g = t.$children$;
          if (g.length === 0) return i;
          g.length === 1 &&
            g[0].$type$ === ":skipRender" &&
            (g = g[0].$children$);
          const q = un(e, $),
            x = zs($),
            _ = g.map((k) => Me(q, k, n));
          return E(Le(_), () => {
            for (const k of g) k.$elm$, An(d, Ps(d, x, i, Ms(k)), k.$elm$);
            return i;
          });
        })
      );
    }
    const y = l && "q:s" in u,
      m = !l && "ref" in u,
      b = $.li;
    if (
      ((t.$props$ = ho(d, $, o == null ? void 0 : o.$element$, u)), o && !l)
    ) {
      const v = o.$scopeIds$;
      v &&
        v.forEach((g) => {
          i.classList.add(g);
        }),
        o.$needAttachListeners$ &&
          (Fe(b, o.li), (o.$needAttachListeners$ = !1));
    }
    y
      ? (o.$slots$,
        Et(i, t.$key$),
        U(i, "q:sref", o.$id$),
        o.$slots$.push(t),
        d.$addSlots$.push([i, o.$element$]))
      : Et(i, t.$key$);
    {
      c && !l && U(i, "q:head", ""), (b.length > 0 || m) && Mt(e, $);
      const v = nn(b);
      for (const g of v) ht(d, i, g[0], en(g[1], $));
    }
    if (u[Re] !== void 0) return i;
    let p = t.$children$;
    if (p.length === 0) return i;
    p.length === 1 && p[0].$type$ === ":skipRender" && (p = p[0].$children$);
    const h = p.map((v) => Me(e, v, n));
    return E(Le(h), () => {
      for (const v of p) v.$elm$, An(e.$static$, i, v.$elm$);
      return i;
    });
  },
  zs = (e) => {
    var o, i;
    const t = ((c) =>
        c.$slots$ || (c.$element$.parentElement, (c.$slots$ = lo(c))))(e),
      n = {},
      s = {},
      r = Array.from(e.$element$.childNodes).filter(Ls);
    for (const c of t) c.$elm$, (n[(o = c.$key$) != null ? o : ""] = c.$elm$);
    for (const c of r) s[(i = G(c, fe)) != null ? i : ""] = c;
    return { slots: n, templates: s };
  },
  lo = (e) =>
    ((t, n, s) => {
      const r = ((c, a, l) =>
          c.ownerDocument.createTreeWalker(c, 128, {
            acceptNode(u) {
              const f = Ze(u);
              return f && G(f, "q:sref") === l ? 1 : 2;
            },
          }))(t, 0, s),
        o = [];
      let i = null;
      for (; (i = r.nextNode()); ) o.push(Ze(i));
      return o;
    })(e.$element$.parentElement, 0, e.$id$).map(Pe),
  Qn = (e, t, n, s) => (n in t && t[n] !== s && de(e, t, n, s), !0),
  Ee = (e, t, n, s) => (ht(e, t, n.toLowerCase(), s), !0),
  Re = "dangerouslySetInnerHTML",
  uo = {
    style: (e, t, n, s) => (de(e, t.style, "cssText", Ns(s)), !0),
    class: (e, t, n, s, r) => {
      const o = Pt(r),
        i = Pt(s);
      return (
        ((c, a, l, u) => {
          c
            ? c.$operations$.push({ $operation$: Pn, $args$: [a, l, u] })
            : Pn(a, l, u);
        })(
          e,
          t,
          o.filter((c) => c && !i.includes(c)),
          i.filter((c) => c && !o.includes(c))
        ),
        !0
      );
    },
    value: Qn,
    checked: Qn,
    href: Ee,
    list: Ee,
    form: Ee,
    tabIndex: Ee,
    download: Ee,
    [Re]: (e, t, n, s) => (
      Re in t ? de(e, t, Re, s) : "innerHTML" in t && de(e, t, "innerHTML", s),
      !0
    ),
    innerHTML: () => !0,
  },
  po = (e, t, n, s, r) => {
    var l;
    const o = fo(s, r),
      i = {};
    if (o.length === 0) return i;
    const c = (l = r[N]) != null ? l : re,
      a = t.$element$;
    for (let u of o) {
      if (u === "ref") {
        pn(r[u], a);
        continue;
      }
      let f = K(c[u]) ? c[u] : r[u];
      if (tn(u)) {
        sn(t.li, u, f, e.$containerState$.$containerEl$);
        continue;
      }
      u === "className" && (u = "class"),
        K(f) && (_e(1, n, f, a, u), (f = f.value)),
        u === "class" && (r.class = f = Is(f));
      const d = u.toLowerCase(),
        $ = s[d];
      (i[d] = f), $ !== f && hn(e, a, u, f, $);
    }
    return i;
  },
  hn = (e, t, n, s, r) => {
    const o = uo[n];
    (o && o(e, t, n, s, r)) || (n in t ? de(e, t, n, s) : ht(e, t, n, s));
  },
  fo = (e, t) => {
    const n = Object.keys(t),
      s = n.map((o) => o.toLowerCase()),
      r = Object.keys(e);
    return (
      n.push(...r.filter((o) => !s.includes(o))),
      n.filter((o) => o !== "children")
    );
  },
  $o = (e, t, n) => {
    try {
      window.qwikevents && window.qwikevents.push(Vs(n));
    } catch {}
  },
  ho = (e, t, n, s) => {
    var a;
    const r = t.$element$,
      o = Object.keys(s),
      i = {};
    if (o.length === 0) return i;
    const c = (a = s[N]) != null ? a : re;
    for (let l of o) {
      if (l === "children") continue;
      if (l === "ref") {
        pn(s[l], r);
        continue;
      }
      let u = K(c[l]) ? c[l] : s[l];
      tn(l)
        ? $o(0, 0, sn(t.li, l, u, e.$containerState$.$containerEl$))
        : (l === "className" && (l = "class"),
          n && K(u) && (_e(1, n, u, r, l), (u = u.value)),
          l === "class" && (u = Is(u)),
          (i[l.toLowerCase()] = u),
          hn(e, r, l, u, void 0));
    }
    return i;
  },
  Us = (e, t, n) => {
    const s = Object.keys(n);
    let r = e.$props$;
    r || (e.$props$ = r = wt({ [pe]: ct }, t.$static$.$containerState$));
    const o = ri(r);
    if (s.length === 0) return !1;
    for (const i of s) Vr.includes(i) || o.set(i, n[i]);
    return e.$dirty$;
  },
  mn = (e, t, n, s) => {
    if (s && e.hasAttribute("q:s")) return void t.$rmSlots$.push(e);
    mo(e, n);
    const r = Ae(e, "elements");
    for (const o of r) mn(o, t, n, s);
  },
  mo = (e, t) => {
    const n = F(e);
    n && ni(n, t);
  },
  nt = (e, t) => {
    te(t) ? t.appendTo(e) : e.appendChild(t);
  },
  yo = (e, t) => {
    te(t) ? t.remove() : e.removeChild(t);
  },
  gt = (e, t, n) => {
    te(t) ? t.insertBeforeTo(e, Ge(n)) : e.insertBefore(t, Ge(n));
  },
  go = (e, t, n) => {
    const s = {};
    for (let r = t; r <= n; ++r) {
      const o = e[r].$key$;
      o != null && (s[o] = r);
    }
    return s;
  },
  Ye = (e, t) => e.$type$ === t.$type$ && e.$key$ === t.$key$,
  vo = (e, t) => e.$type$ === t,
  Q = () => {
    const e = hs();
    let t = e.$qrl$;
    if (t) t.$captureRef$;
    else {
      const n = e.$element$,
        s = ys(n),
        r = A(n);
      (t = ft(decodeURIComponent(String(e.$url$)), s)), Ys(s), Zs(t, r);
    }
    return t.$captureRef$;
  },
  wo = (e, t) => {
    if (e[0] === 0) {
      const n = e[1];
      ve(n) ? bo(n, t) : Hs(n, t);
    } else _o(e, t);
  },
  bo = (e, t) => {
    const n = We();
    n || Ys(t.$containerEl$);
    const s = A(e);
    if ((s.$componentQrl$, !s.$dirty$))
      if (((s.$dirty$ = !0), t.$hostsRendering$ !== void 0))
        t.$renderPromise$, t.$hostsStaging$.add(e);
      else {
        if (n) return;
        t.$hostsNext$.add(e), vt(t);
      }
  },
  _o = (e, t) => {
    t.$hostsRendering$ !== void 0
      ? (t.$renderPromise$, t.$opsNext$.add(e))
      : (t.$opsNext$.add(e), vt(t));
  },
  Hs = (e, t) => {
    e.$flags$ & ze ||
      ((e.$flags$ |= ze),
      t.$hostsRendering$ !== void 0
        ? (t.$renderPromise$, t.$watchStaging$.add(e))
        : (t.$watchNext$.add(e), vt(t)));
  },
  vt = (e) => (
    e.$renderPromise$ === void 0 &&
      (e.$renderPromise$ = pt().nextTick(() => ko(e))),
    e.$renderPromise$
  ),
  qo = () => {
    const [e] = Q();
    Hs(e, et(ys(e.$el$)));
  },
  ko = async (e) => {
    const t = dt(e.$containerEl$);
    try {
      const n = Es(t, e),
        s = n.$static$,
        r = (e.$hostsRendering$ = new Set(e.$hostsNext$));
      e.$hostsNext$.clear(),
        await So(e),
        e.$hostsStaging$.forEach((i) => {
          r.add(i);
        }),
        e.$hostsStaging$.clear();
      const o = Array.from(r);
      Io(o);
      for (const i of o)
        if (!s.$hostElements$.has(i)) {
          const c = A(i);
          if (c.$componentQrl$) {
            i.isConnected, s.$roots$.push(c);
            try {
              await dn(n, c, xo(i.parentElement));
            } catch {}
          }
        }
      if (
        (e.$opsNext$.forEach((i) =>
          ((c, a) => {
            var f;
            const l = (f = a[5]) != null ? f : "value",
              u = a[2][l];
            switch (a[0]) {
              case 1: {
                const d = a[4],
                  $ = a[3],
                  y = F($);
                let m;
                if (y && y.$vdom$) {
                  const b = d.toLowerCase();
                  (m = y.$vdom$.$props$[b]), (y.$vdom$.$props$[b] = u);
                }
                return hn(c, $, d, u, m);
              }
              case 2:
                return de(c, a[3], "data", u);
            }
          })(s, i)
        ),
        e.$opsNext$.clear(),
        s.$operations$.push(...s.$postOperations$),
        s.$operations$.length === 0)
      )
        return void (await Bn(e, s));
      await pt().raf(
        () => (
          (({ $static$: i }) => {
            Dr(i);
          })(n),
          Bn(e, s)
        )
      );
    } catch (n) {
      Qe(n);
    }
  },
  xo = (e) => {
    let t = 0;
    return (
      e &&
        (e.namespaceURI === Rs && (t |= 1), e.tagName === "HEAD" && (t |= 2)),
      t
    );
  },
  Bn = async (e, t) => {
    await Eo(
      e,
      (n, s) => (n.$flags$ & No) != 0 && (!s || t.$hostElements$.has(n.$el$))
    ),
      e.$hostsStaging$.forEach((n) => {
        e.$hostsNext$.add(n);
      }),
      e.$hostsStaging$.clear(),
      (e.$hostsRendering$ = void 0),
      (e.$renderPromise$ = void 0),
      e.$hostsNext$.size + e.$watchNext$.size + e.$opsNext$.size > 0 && vt(e);
  },
  So = async (e) => {
    const t = e.$containerEl$,
      n = [],
      s = [],
      r = (i) => (i.$flags$ & Ds) != 0,
      o = (i) => (i.$flags$ & jo) != 0;
    e.$watchNext$.forEach((i) => {
      r(i) &&
        (s.push(E(i.$qrl$.$resolveLazy$(t), () => i)), e.$watchNext$.delete(i)),
        o(i) &&
          (n.push(E(i.$qrl$.$resolveLazy$(t), () => i)),
          e.$watchNext$.delete(i));
    });
    do
      if (
        (e.$watchStaging$.forEach((i) => {
          r(i)
            ? s.push(E(i.$qrl$.$resolveLazy$(t), () => i))
            : o(i)
            ? n.push(E(i.$qrl$.$resolveLazy$(t), () => i))
            : e.$watchNext$.add(i);
        }),
        e.$watchStaging$.clear(),
        s.length > 0)
      ) {
        const i = await Promise.all(s);
        zt(i), await Promise.all(i.map((c) => st(c, e))), (s.length = 0);
      }
    while (e.$watchStaging$.size > 0);
    if (n.length > 0) {
      const i = await Promise.all(n);
      zt(i), i.forEach((c) => st(c, e));
    }
  },
  Eo = async (e, t) => {
    const n = [],
      s = e.$containerEl$;
    e.$watchNext$.forEach((r) => {
      t(r, !1) &&
        (n.push(E(r.$qrl$.$resolveLazy$(s), () => r)), e.$watchNext$.delete(r));
    });
    do
      if (
        (e.$watchStaging$.forEach((r) => {
          t(r, !0)
            ? n.push(E(r.$qrl$.$resolveLazy$(s), () => r))
            : e.$watchNext$.add(r);
        }),
        e.$watchStaging$.clear(),
        n.length > 0)
      ) {
        const r = await Promise.all(n);
        zt(r), await Promise.all(r.map((o) => st(o, e))), (n.length = 0);
      }
    while (e.$watchStaging$.size > 0);
  },
  Io = (e) => {
    e.sort((t, n) => (2 & t.compareDocumentPosition(Ge(n)) ? 1 : -1));
  },
  zt = (e) => {
    e.sort((t, n) =>
      t.$el$ === n.$el$
        ? t.$index$ < n.$index$
          ? -1
          : 1
        : (2 & t.$el$.compareDocumentPosition(Ge(n.$el$))) != 0
        ? 1
        : -1
    );
  },
  No = 1,
  Ds = 2,
  ze = 4,
  Wn = 8,
  jo = 16,
  Oo = (e, t) => {
    const { get: n, set: s, ctx: r, i: o } = Ke();
    if (n) return;
    const i = r.$hostElement$,
      c = r.$renderCtx$.$static$.$containerState$,
      a = new Ut(ze | Ds, o, i, e, void 0),
      l = A(i);
    s(!0),
      e.$resolveLazy$(c.$containerEl$),
      l.$watches$ || (l.$watches$ = []),
      l.$watches$.push(a),
      Rr(r, () => st(a, c, r.$renderCtx$)),
      We() && Co(a, t == null ? void 0 : t.eagerness);
  },
  Qs = (e) => !!e.$resource$,
  st = async (e, t, n) => (e.$flags$, Qs(e) ? To(e, t) : Ro(e, t, n)),
  To = (e, t, n) => {
    (e.$flags$ &= ~ze), rt(e);
    const s = e.$el$,
      r = ne(s, void 0, "WatchEvent"),
      { $subsManager$: o } = t;
    e.$qrl$.$captureRef$;
    const i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      }),
      c = [],
      a = e.$resource$,
      l = _t(a),
      u = {
        track: (p, h) => {
          if (W(p)) {
            const g = ne();
            return (g.$subscriber$ = e), ie(g, p);
          }
          const v = se(p);
          return (
            v ? v.$addSub$([0, e, h]) : Vt(ut(26), p),
            h ? p[h] : K(p) ? p.value : p
          );
        },
        cleanup(p) {
          c.push(p);
        },
        previous: l.resolved,
      };
    let f,
      d,
      $ = !1;
    const y = (p, h) =>
      !$ &&
      (($ = !0),
      p
        ? (($ = !0),
          (a.state = "resolved"),
          (a.resolved = h),
          (a.error = void 0),
          f(h))
        : (($ = !0),
          (a.state = "rejected"),
          (a.resolved = void 0),
          (a.error = h),
          d(h)),
      !0);
    ie(r, () => {
      (a.state = "pending"),
        (a.resolved = void 0),
        (a.promise = new Promise((p, h) => {
          (f = p), (d = h);
        }));
    }),
      (e.$destroy$ = bt(() => {
        c.forEach((p) => p());
      }));
    const m = Jt(
        () => E(n, () => i(u)),
        (p) => {
          y(!0, p);
        },
        (p) => {
          y(!1, p);
        }
      ),
      b = l.timeout;
    return b
      ? Promise.race([
          m,
          Tr(b).then(() => {
            y(!1, "timeout") && rt(e);
          }),
        ])
      : m;
  },
  Ro = (e, t, n) => {
    (e.$flags$ &= ~ze), rt(e);
    const s = e.$el$,
      r = ne(s, void 0, "WatchEvent"),
      { $subsManager$: o } = t,
      i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      }),
      c = [];
    e.$destroy$ = bt(() => {
      c.forEach((l) => l());
    });
    const a = {
      track: (l, u) => {
        if (W(l)) {
          const d = ne();
          return (d.$subscriber$ = e), ie(d, l);
        }
        const f = se(l);
        return f ? f.$addSub$([0, e, u]) : Vt(ut(26), l), u ? l[u] : l;
      },
      cleanup(l) {
        c.push(l);
      },
    };
    return Jt(
      () => i(a),
      (l) => {
        W(l) && c.push(l);
      },
      (l) => {
        Ss(l, s, n);
      }
    );
  },
  rt = (e) => {
    const t = e.$destroy$;
    if (t) {
      e.$destroy$ = void 0;
      try {
        t();
      } catch (n) {
        Qe(n);
      }
    }
  },
  Bs = (e) => {
    e.$flags$ & Wn ? ((e.$flags$ &= ~Wn), (0, e.$qrl$)()) : rt(e);
  },
  Co = (e, t) => {
    t === "visible"
      ? zr("qvisible", Nt(e))
      : t === "load"
      ? Rn("qinit", Nt(e))
      : t === "idle" && Rn("qidle", Nt(e));
  },
  Nt = (e) => {
    const t = e.$qrl$;
    return wn(t.$chunk$, "_hW", qo, null, null, [e], t.$symbol$);
  };
class Ut {
  constructor(t, n, s, r, o) {
    (this.$flags$ = t),
      (this.$index$ = n),
      (this.$el$ = s),
      (this.$qrl$ = r),
      (this.$resource$ = o);
  }
}
const Lo = (e) => ({
    __brand: "resource",
    promise: void 0,
    resolved: void 0,
    error: void 0,
    state: "pending",
    timeout: e == null ? void 0 : e.timeout,
  }),
  Ao = {
    prefix: "",
    test: (e) => Gs(e),
    collect: (e, t, n) => {
      if (e.$captureRef$) for (const s of e.$captureRef$) I(s, t, n);
    },
    serialize: (e, t) => Xt(e, { $getObjId$: t }),
    prepare: (e, t) => ft(e, t.$containerEl$),
    fill: (e, t) => {
      e.$capture$ &&
        e.$capture$.length > 0 &&
        ((e.$captureRef$ = e.$capture$.map(t)), (e.$capture$ = null));
    },
  },
  Po = {
    prefix: "",
    test: (e) => {
      return V((t = e)) && t instanceof Ut;
      var t;
    },
    collect: (e, t, n) => {
      I(e.$qrl$, t, n), e.$resource$ && I(e.$resource$, t, n);
    },
    serialize: (e, t) =>
      ((n, s) => {
        let r = `${it(n.$flags$)} ${it(n.$index$)} ${s(n.$qrl$)} ${s(n.$el$)}`;
        return Qs(n) && (r += ` ${s(n.$resource$)}`), r;
      })(e, t),
    prepare: (e) =>
      ((t) => {
        const [n, s, r, o, i] = t.split(" ");
        return new Ut(me(n), me(s), o, r, i);
      })(e),
    fill: (e, t) => {
      (e.$el$ = t(e.$el$)),
        (e.$qrl$ = t(e.$qrl$)),
        e.$resource$ && (e.$resource$ = t(e.$resource$));
    },
  },
  Mo = {
    prefix: "",
    test: (e) => {
      return V((t = e)) && t.__brand === "resource";
      var t;
    },
    collect: (e, t, n) => {
      I(e.promise, t, n), I(e.resolved, t, n);
    },
    serialize: (e, t) =>
      ((n, s) => {
        const r = n.state;
        return r === "resolved"
          ? `0 ${s(n.resolved)}`
          : r === "pending"
          ? "1"
          : `2 ${s(n.error)}`;
      })(e, t),
    prepare: (e) =>
      ((t) => {
        const [n, s] = t.split(" "),
          r = Lo(void 0);
        return (
          (r.promise = Promise.resolve()),
          n === "0"
            ? ((r.state = "resolved"), (r.resolved = s))
            : n === "1"
            ? ((r.state = "pending"), (r.promise = new Promise(() => {})))
            : n === "2" && ((r.state = "rejected"), (r.error = s)),
          r
        );
      })(e),
    fill: (e, t) => {
      if (e.state === "resolved")
        (e.resolved = t(e.resolved)), (e.promise = Promise.resolve(e.resolved));
      else if (e.state === "rejected") {
        const n = Promise.reject(e.error);
        n.catch(() => null), (e.error = t(e.error)), (e.promise = n);
      }
    },
  },
  zo = {
    prefix: "",
    test: (e) => e instanceof URL,
    serialize: (e) => e.href,
    prepare: (e) => new URL(e),
    fill: void 0,
  },
  Uo = {
    prefix: "",
    test: (e) => e instanceof Date,
    serialize: (e) => e.toISOString(),
    prepare: (e) => new Date(e),
    fill: void 0,
  },
  Ho = {
    prefix: "\x07",
    test: (e) => e instanceof RegExp,
    serialize: (e) => `${e.flags} ${e.source}`,
    prepare: (e) => {
      const t = e.indexOf(" "),
        n = e.slice(t + 1),
        s = e.slice(0, t);
      return new RegExp(n, s);
    },
    fill: void 0,
  },
  Do = {
    prefix: "",
    test: (e) => e instanceof Error,
    serialize: (e) => e.message,
    prepare: (e) => {
      const t = new Error(e);
      return (t.stack = void 0), t;
    },
    fill: void 0,
  },
  Qo = {
    prefix: "",
    test: (e) => fs(e),
    serialize: void 0,
    prepare: (e, t, n) => n,
    fill: void 0,
  },
  ot = Symbol("serializable-data"),
  Bo = {
    prefix: "",
    test: (e) => $i(e),
    serialize: (e, t) => {
      const [n] = e[ot];
      return Xt(n, { $getObjId$: t });
    },
    prepare: (e, t) => {
      const n = e.indexOf("{"),
        s = n == -1 ? e : e.slice(0, n),
        r = ft(s, t.$containerEl$);
      return C(r);
    },
    fill: (e, t) => {
      const [n] = e[ot];
      n.$capture$ &&
        n.$capture$.length > 0 &&
        ((n.$captureRef$ = n.$capture$.map(t)), (n.$capture$ = null));
    },
  },
  yn = [
    Ao,
    {
      prefix: "",
      test: (e) => e instanceof Ue,
      collect: (e, t, n) => (I(e.untrackedValue, t, n), n && Ks(e[oe], t), e),
      serialize: (e, t) => t(e.untrackedValue),
      prepare: (e) => new Ue(e, null),
      subs: (e, t, n) => {
        e[oe] = n.$subsManager$.$createManager$(t);
      },
      fill: (e, t) => {
        e.untrackedValue = t(e.untrackedValue);
      },
    },
    {
      prefix: "",
      test: (e) => e instanceof ye,
      collect: (e, t, n) => (I(e.ref, t, n), e),
      serialize: (e, t) => `${t(e.ref)} ${e.prop}`,
      prepare: (e) => {
        const [t, n] = e.split(" ");
        return new ye(t, n);
      },
      fill: (e, t) => {
        e.ref = t(e.ref);
      },
    },
    Po,
    Mo,
    zo,
    Uo,
    Ho,
    Do,
    Qo,
    Bo,
    {
      prefix: "",
      test: (e) => typeof e == "function" && e.__qwik_serializable__ !== void 0,
      serialize: (e) => e.toString(),
      prepare: (e) => {
        const t = new Function("return " + e)();
        return (t.__qwik_serializable__ = !0), t;
      },
      fill: void 0,
    },
  ],
  Wo = yn.filter((e) => e.collect),
  Ws = async (e, t) => {
    const n = Jo(t),
      s = [];
    for (const p of e) if (p.$watches$) for (const h of p.$watches$) Bs(h);
    for (const p of e) {
      const h = p.$element$,
        v = p.li;
      for (const g of v) {
        const q = g[0],
          x = g[1],
          _ = x.$captureRef$;
        if (_) for (const k of _) I(k, n, !0);
        De(h) && s.push({ key: q, qrl: x, el: h, eventName: Vs(q) });
      }
    }
    if (s.length === 0)
      return {
        state: { ctx: {}, objs: [], subs: [] },
        objs: [],
        listeners: [],
        mode: "static",
      };
    let r;
    for (; (r = n.$promises$).length > 0; )
      (n.$promises$ = []), await Promise.allSettled(r);
    const o = n.$elements$.length > 0;
    if (o) {
      for (const p of n.$elements$) Fs(F(p), n);
      for (const p of e)
        if ((p.$props$ && Yo(p, n), p.$contexts$))
          for (const h of p.$contexts$.values()) I(h, n, !1);
    }
    for (; (r = n.$promises$).length > 0; )
      (n.$promises$ = []), await Promise.all(r);
    const i = new Map(),
      c = Array.from(n.$objSet$.keys()),
      a = new Map(),
      l = (p) => {
        let h = i.get(p);
        return (
          h === void 0 &&
            ((h = ((v) => {
              const g = F(v);
              return g ? g.$id$ : null;
            })(p)),
            h ? (h = "#" + h) : console.warn("Missing ID", p),
            i.set(p, h)),
          h
        );
      },
      u = (p) => {
        let h = "";
        if (M(p)) {
          const { value: g, resolved: q } = Xo(p);
          (p = g), (h += q ? "~" : "_");
        }
        if (V(p)) {
          const g = qe(p);
          if (g) (h += "!"), (p = g);
          else if (ve(p)) {
            const q = l(p);
            return q ? q + h : null;
          }
        }
        const v = a.get(p);
        return v ? v + h : null;
      },
      f = (p) => {
        const h = u(p);
        if (h === null) throw P(27, p);
        return h;
      },
      d = new Map();
    c.forEach((p) => {
      var q, x;
      const h = (q = Fo(p, t)) == null ? void 0 : q.$subs$;
      if (!h) return null;
      const v = (x = li(p)) != null ? x : 0,
        g = [];
      v > 0 && g.push(v);
      for (const _ of h) {
        const k = _[1];
        (_[0] === 0 && He(k) && te(k) && !n.$elements$.includes(k)) ||
          g.push(_);
      }
      g.length > 0 && d.set(p, g);
    }),
      c.sort((p, h) => (d.has(p) ? 0 : 1) - (d.has(h) ? 0 : 1));
    let $ = 0;
    for (const p of c) a.set(p, it($)), $++;
    if (n.$noSerialize$.length > 0) {
      const p = a.get(void 0);
      for (const h of n.$noSerialize$) a.set(h, p);
    }
    const y = [];
    for (const p of c) {
      const h = d.get(p);
      if (h == null) break;
      y.push(
        h.map((v) => (typeof v == "number" ? `_${v}` : Zr(v, u))).filter(Lt)
      );
    }
    y.length, d.size;
    const m = c.map((p) => {
        if (p === null) return null;
        const h = typeof p;
        switch (h) {
          case "undefined":
            return "";
          case "string":
          case "number":
          case "boolean":
            return p;
          default:
            const v = ((g, q, x) => {
              for (const _ of yn)
                if (_.test(g)) {
                  let k = _.prefix;
                  return _.serialize && (k += _.serialize(g, q, x)), k;
                }
            })(p, f, t);
            if (v !== void 0) return v;
            if (h === "object") {
              if (O(p)) return p.map(f);
              if (Yt(p)) {
                const g = {};
                for (const q of Object.keys(p)) g[q] = f(p[q]);
                return g;
              }
            }
        }
        throw P(3, p);
      }),
      b = {};
    return (
      e.forEach((p) => {
        const h = p.$element$,
          v = p.$refMap$,
          g = p.$props$,
          q = p.$contexts$,
          x = p.$watches$,
          _ = p.$componentQrl$,
          k = p.$seq$,
          T = {},
          H = te(h) && n.$elements$.includes(h);
        let R = !1;
        if (v.length > 0) {
          const j = v.map(f).join(" ");
          j && ((T.r = j), (R = !0));
        }
        if (o) {
          if (
            (H && g && ((T.h = f(g) + " " + f(_)), (R = !0)), x && x.length > 0)
          ) {
            const j = x.map(u).filter(Lt).join(" ");
            j && ((T.w = j), (R = !0));
          }
          if (H && k && k.length > 0) {
            const j = k.map(f).join(" ");
            (T.s = j), (R = !0);
          }
          if (q) {
            const j = [];
            q.forEach((Y, L) => {
              j.push(`${L}=${f(Y)}`);
            });
            const ce = j.join(" ");
            ce && ((T.c = ce), (R = !0));
          }
        }
        if (R) {
          const j = l(h);
          b[j] = T;
        }
      }),
      {
        state: { ctx: b, objs: m, subs: y },
        objs: c,
        listeners: s,
        mode: o ? "render" : "listeners",
      }
    );
  },
  Fo = (e, t) => {
    if (!V(e)) return;
    if (e instanceof Ue) return se(e);
    const n = t.$proxyMap$.get(e);
    return n ? se(n) : void 0;
  },
  Ko = (e, t, n) => {
    if (!n.fill(e) && e && typeof e == "object") {
      if (O(e)) for (let s = 0; s < e.length; s++) e[s] = t(e[s]);
      else if (Yt(e)) for (const s of Object.keys(e)) e[s] = t(e[s]);
    }
  },
  Vo = {
    "!": (e, t) => {
      var n;
      return (n = t.$proxyMap$.get(e)) != null ? n : gn(e, t);
    },
    "~": (e) => Promise.resolve(e),
    _: (e) => Promise.reject(e),
  },
  Yo = (e, t) => {
    var s;
    const n = e.$parent$;
    if (n && e.$props$ && t.$elements$.includes(n.$element$)) {
      const r = (s = se(e.$props$)) == null ? void 0 : s.$subs$,
        o = e.$element$;
      r && r.some((i) => i[0] === 0 && i[1] === o) && Go(o, t);
    }
  },
  Jo = (e) => ({
    $containerState$: e,
    $seen$: new Set(),
    $objSet$: new Set(),
    $noSerialize$: [],
    $elements$: [],
    $promises$: [],
  }),
  Zo = (e, t) => {
    t.$elements$.includes(e) || t.$elements$.push(e);
  },
  Go = (e, t) => {
    if (t.$elements$.includes(e)) return;
    const n = F(e);
    n && (t.$elements$.push(e), Fs(n, t));
  },
  Fs = (e, t) => {
    if (
      (e.$props$ && I(e.$props$, t, !1),
      e.$componentQrl$ && I(e.$componentQrl$, t, !1),
      e.$seq$)
    )
      for (const n of e.$seq$) I(n, t, !1);
    if (e.$watches$) for (const n of e.$watches$) I(n, t, !1);
    if (e.$contexts$) for (const n of e.$contexts$.values()) I(n, t, !1);
  },
  Ks = (e, t) => {
    if (t.$seen$.has(e)) return;
    t.$seen$.add(e);
    const n = e.$subs$;
    for (const s of n) {
      const r = s[1];
      He(r) && te(r) ? s[0] === 0 && Zo(r, t) : I(r, t, !0);
    }
  },
  Ht = Symbol(),
  Xo = (e) => e[Ht],
  I = (e, t, n) => {
    if (e !== null) {
      const r = typeof e;
      switch (r) {
        case "function":
        case "object": {
          const o = t.$seen$;
          if (o.has(e)) return;
          if ((o.add(e), !ai(e)))
            return t.$objSet$.add(void 0), void t.$noSerialize$.push(e);
          const i = e,
            c = qe(e);
          if (c) {
            if (((e = c), o.has(e))) return;
            o.add(e), n && Ks(se(i), t);
          }
          if (
            ((l, u, f) => {
              for (const d of Wo) if (d.test(l)) return d.collect(l, u, f), !0;
              return !1;
            })(e, t, n)
          )
            return void t.$objSet$.add(e);
          if (M(e))
            return void t.$promises$.push(
              ((s = e),
              s.then(
                (l) => {
                  const u = { resolved: !0, value: l };
                  return (s[Ht] = u), l;
                },
                (l) => {
                  const u = { resolved: !1, value: l };
                  return (s[Ht] = u), l;
                }
              )).then((l) => {
                I(l, t, n);
              })
            );
          if (r === "object") {
            if (He(e)) return;
            if (O(e)) for (let l = 0; l < e.length; l++) I(e[l], t, n);
            else if (Yt(e)) for (const l of Object.keys(e)) I(e[l], t, n);
          }
          break;
        }
      }
    }
    var s;
    t.$objSet$.add(e);
  },
  Dt = (e) => De(e) && e.hasAttribute("q:container"),
  ei = (e) => {
    const t = ln(e);
    return !!ve(t) && t.hasAttribute("q:id");
  },
  it = (e) => e.toString(36),
  me = (e) => parseInt(e, 36),
  Vs = (e) => {
    const t = e.indexOf(":");
    return e.slice(t + 1).replace(/-./g, (n) => n[1].toUpperCase());
  },
  Ys = (e) => {
    G(e, "q:container") === "paused" &&
      (((t) => {
        if (!Dt(t)) return;
        let n = 0;
        const s = dt(t),
          r = ((d) => {
            let $ = d.lastElementChild;
            for (; $; ) {
              if ($.tagName === "SCRIPT" && G($, "type") === "qwik/json")
                return $;
              $ = $.previousElementSibling;
            }
          })(t === s.documentElement ? s.body : t);
        if (!r) return;
        r.remove();
        const o = et(t);
        ((d, $) => {
          const y = d.ownerDocument.head;
          d.querySelectorAll("style[q\\:style]").forEach((m) => {
            $.$styleIds$.add(G(m, "q:style")), y.appendChild(m);
          });
        })(t, o);
        const i = JSON.parse(
            (r.textContent || "{}").replace(/\\x3C(\/?script)/g, "<$1")
          ),
          c = new Map(),
          a = (d) =>
            (($, y, m, b) => {
              if ((typeof $ == "string" && $.length, $.startsWith("#")))
                return y.has($), y.get($);
              const p = me($);
              m.length;
              let h = m[p];
              for (let v = $.length - 1; v >= 0; v--) {
                const g = $[v],
                  q = Vo[g];
                if (!q) break;
                h = q(h, b);
              }
              return h;
            })(d, c, i.objs, o),
          l = s.createTreeWalker(t, 129, {
            acceptNode(d) {
              if (lt(d)) {
                const $ = d.data;
                if ($.startsWith("qv ")) {
                  const y = ks(d),
                    m = new an(d, y),
                    b = G(m, "q:id");
                  b &&
                    ((A(m).$id$ = b),
                    c.set("#" + b, m),
                    (n = Math.max(n, me(b))));
                } else if ($.startsWith("t=")) {
                  const y = $.slice(2);
                  c.set(
                    "#" + $.slice(2),
                    ((m) => {
                      const b = m.nextSibling;
                      if ($s(b)) return b;
                      {
                        const p = m.ownerDocument.createTextNode("");
                        return m.parentElement.insertBefore(p, m), p;
                      }
                    })(d)
                  ),
                    (n = Math.max(n, me(y)));
                }
                return 3;
              }
              return Dt(d) ? 2 : d.hasAttribute("q:id") ? 1 : 3;
            },
          });
        let u = null;
        for (; (u = l.nextNode()); ) {
          const d = G(u, "q:id"),
            $ = A(u);
          ($.$id$ = d),
            ($.$vdom$ = Pe(u)),
            c.set("#" + d, u),
            (n = Math.max(n, me(d)));
        }
        o.$elementIndex$ = ++n;
        const f = ((d, $, y) => {
          const m = new Map(),
            b = new Map();
          return {
            prepare(p) {
              for (const h of yn) {
                const v = h.prefix;
                if (p.startsWith(v)) {
                  const g = h.prepare(p.slice(v.length), $, y);
                  return h.fill && m.set(g, h), h.subs && b.set(g, h), g;
                }
              }
              return p;
            },
            subs(p, h) {
              const v = b.get(p);
              return !!v && (v.subs(p, h, $), !0);
            },
            fill(p) {
              const h = m.get(p);
              return !!h && (h.fill(p, d, $), !0);
            },
          };
        })(a, o, s);
        ((d, $) => {
          for (let y = 0; y < d.length; y++) {
            const m = d[y];
            Be(m) && (d[y] = m === "" ? void 0 : $.prepare(m));
          }
        })(i.objs, f),
          ((d, $, y, m, b) => {
            for (let p = 0; p < $.length; p++) {
              const h = d[p],
                v = $[p];
              if (v) {
                const g = [];
                let q = 0;
                for (const x of v)
                  x.startsWith("_")
                    ? (q = parseInt(x.slice(1), 10))
                    : g.push(Gr(x, y));
                q > 0 && (h[pe] = q), b.subs(h, g) || wt(h, m, g);
              }
            }
          })(i.objs, i.subs, a, o, f);
        for (const d of i.objs) Ko(d, a, f);
        for (const d of Object.keys(i.ctx)) {
          d.startsWith("#");
          const $ = i.ctx[d],
            y = c.get(d),
            m = A(y),
            b = $.r,
            p = $.s,
            h = $.h,
            v = $.c,
            g = $.w;
          if (
            (b &&
              (De(y), (m.$refMap$ = b.split(" ").map(a)), (m.li = Mr(m, t))),
            p && (m.$seq$ = p.split(" ").map(a)),
            g && (m.$watches$ = g.split(" ").map(a)),
            v)
          ) {
            m.$contexts$ = new Map();
            for (const q of v.split(" ")) {
              const [x, _] = q.split("=");
              m.$contexts$.set(x, a(_));
            }
          }
          if (h) {
            const [q, x] = h.split(" "),
              _ = y.getAttribute("q:sstyle");
            (m.$scopeIds$ = _ ? _.split(" ") : null),
              (m.$mounted$ = !0),
              (m.$props$ = a(q)),
              (m.$componentQrl$ = a(x));
          }
        }
        U(t, "q:container", "resumed"),
          ((d, $, y, m) => {
            d &&
              typeof CustomEvent == "function" &&
              d.dispatchEvent(
                new CustomEvent("qresume", {
                  detail: void 0,
                  bubbles: !0,
                  composed: !0,
                })
              );
          })(t);
      })(e),
      ti(e));
  },
  ti = (e) => {
    e.qwik = {
      pause: () =>
        (async (t, n) => {
          const s = dt(t),
            r = s.documentElement,
            o = fs(t) ? r : t;
          if (G(o, "q:container") === "paused") throw P(21);
          const i = o === s.documentElement ? s.body : o,
            c = await (async (l) => {
              const u = et(l),
                f = ((d, $) => {
                  $(d);
                  const y = d.ownerDocument.createTreeWalker(d, 129, {
                      acceptNode: (p) => (Dt(p) ? 2 : $(p) ? 1 : 3),
                    }),
                    m = [];
                  let b = null;
                  for (; (b = y.nextNode()); ) m.push(ln(b));
                  return m;
                })(l, ei).map(F);
              return Ws(f, u);
            })(o),
            a = s.createElement("script");
          return (
            U(a, "type", "qwik/json"),
            (a.textContent = JSON.stringify(c.state, void 0, void 0).replace(
              /<(\/?script)/g,
              "\\x3C$1"
            )),
            i.appendChild(a),
            U(o, "q:container", "paused"),
            c
          );
        })(e),
      state: et(e),
    };
  },
  F = (e) => e._qc_,
  A = (e) => {
    let t = F(e);
    return (
      t ||
        (e._qc_ = t =
          {
            $dirty$: !1,
            $mounted$: !1,
            $needAttachListeners$: !1,
            $id$: "",
            $element$: e,
            $refMap$: [],
            li: [],
            $watches$: null,
            $seq$: null,
            $slots$: null,
            $scopeIds$: null,
            $appendStyles$: null,
            $props$: null,
            $vdom$: null,
            $componentQrl$: null,
            $contexts$: null,
            $parent$: null,
          }),
      t
    );
  },
  ni = (e, t) => {
    var s;
    const n = e.$element$;
    (s = e.$watches$) == null ||
      s.forEach((r) => {
        t.$clearSub$(r), Bs(r);
      }),
      e.$componentQrl$ && t.$clearSub$(n),
      (e.$componentQrl$ = null),
      (e.$seq$ = null),
      (e.$watches$ = null),
      (e.$dirty$ = !1),
      (n._qc_ = void 0);
  },
  Fn = ["on", "window:on", "document:on"],
  si = ["on", "on-window", "on-document"],
  Js = (e) => {
    let t = "on";
    for (let n = 0; n < Fn.length; n++) {
      const s = Fn[n];
      if (e.startsWith(s)) {
        (t = si[n]), (e = e.slice(s.length));
        break;
      }
    }
    return t + ":" + (e.startsWith("-") ? on(e.slice(1)) : e.toLowerCase());
  },
  ri = (e) => {
    const t = se(e),
      n = qe(e);
    return {
      set(s, r) {
        const o = n[s];
        (n[s] = r), o !== r && t.$notifySubs$(s);
      },
    };
  },
  Zs = (e, t) => (
    e.$capture$,
    (e.$captureRef$ = e.$capture$.map((n) => {
      const s = parseInt(n, 10),
        r = t.$refMap$[s];
      return t.$refMap$.length, r;
    }))
  ),
  ct = 2,
  Qt = Symbol("proxy target"),
  pe = Symbol("proxy flags"),
  oe = Symbol("proxy manager"),
  N = Symbol("IMMUTABLE"),
  gn = (e, t, n = 0) =>
    t.$proxyMap$.get(e) || (n !== 0 && (e[pe] = n), wt(e, t, void 0));
class Ue {
  constructor(t, n) {
    (this.untrackedValue = t), (this[oe] = n);
  }
  get value() {
    var n;
    const t = (n = Je()) == null ? void 0 : n.$subscriber$;
    return t && this[oe].$addSub$([0, t, void 0]), this.untrackedValue;
  }
  set value(t) {
    const n = this[oe],
      s = this.untrackedValue;
    n && s !== t && ((this.untrackedValue = t), n.$notifySubs$());
  }
}
const K = (e) => e instanceof Ue || e instanceof ye,
  _e = (e, t, n, s, r) => {
    const o =
      n instanceof ye
        ? [e, t, qe(n.ref), s, r, n.prop === "value" ? void 0 : n.prop]
        : [e, t, n, s, r, void 0];
    se(n).$addSub$(o);
  },
  wt = (e, t, n) => {
    _t(e), t.$proxyMap$.has(e);
    const s = t.$subsManager$.$createManager$(n),
      r = new Proxy(e, new oi(t, s));
    return t.$proxyMap$.set(e, r), r;
  };
class oi {
  constructor(t, n) {
    (this.$containerState$ = t), (this.$manager$ = n);
  }
  get(t, n) {
    var l, u;
    if (typeof n == "symbol")
      return n === Qt ? t : n === oe ? this.$manager$ : t[n];
    let s;
    const r = (l = t[pe]) != null ? l : 0,
      o = Je(),
      i = (1 & r) != 0,
      c = (r & ct) != 0;
    let a = t[n];
    if ((o && (s = o.$subscriber$), c)) {
      const f = t["$$" + n];
      (n in t && !f && !((u = t[N]) != null && u[n])) || (s = null),
        f && (a = f.value);
    }
    if (s) {
      const f = O(t);
      this.$manager$.$addSub$([0, s, f ? void 0 : n]);
    }
    return i ? ii(a, this.$containerState$) : a;
  }
  set(t, n, s) {
    var i;
    if (typeof n == "symbol") return (t[n] = s), !0;
    const r = (i = t[pe]) != null ? i : 0;
    if ((r & ct) != 0) throw P(17);
    const o = (1 & r) != 0 ? _t(s) : s;
    return O(t)
      ? ((t[n] = o), this.$manager$.$notifySubs$(), !0)
      : (t[n] !== o && ((t[n] = o), this.$manager$.$notifySubs$(n)), !0);
  }
  has(t, n) {
    if (n === Qt) return !0;
    const s = Object.prototype.hasOwnProperty;
    return !!s.call(t, n) || !(typeof n != "string" || !s.call(t, "$$" + n));
  }
  ownKeys(t) {
    let n = null;
    const s = Je();
    return (
      s && (n = s.$subscriber$),
      n && this.$manager$.$addSub$([0, n, void 0]),
      Object.getOwnPropertyNames(t).map((r) =>
        r.startsWith("$$") ? r.slice(2) : r
      )
    );
  }
}
const ii = (e, t) => {
    if (Gs(e)) return e;
    if (V(e)) {
      if (Object.isFrozen(e)) return e;
      const n = _t(e);
      return n !== e || He(n)
        ? e
        : ci(n)
        ? t.$proxyMap$.get(e) || gn(e, t, 1)
        : e;
    }
    return e;
  },
  vn = new WeakSet(),
  ci = (e) => (!V(e) && !W(e)) || !vn.has(e),
  ai = (e) => !vn.has(e),
  bt = (e) => (e != null && vn.add(e), e),
  _t = (e) => {
    var t;
    return V(e) && (t = qe(e)) != null ? t : e;
  },
  qe = (e) => e[Qt],
  se = (e) => e[oe],
  li = (e) => e[pe];
class ye {
  constructor(t, n) {
    (this.ref = t), (this.prop = n);
  }
  get [oe]() {
    return se(this.ref);
  }
  get value() {
    return this.ref[this.prop];
  }
  set value(t) {
    this.ref[this.prop] = t;
  }
}
const le = (e, t) => {
    if (e instanceof Ue || e instanceof ye) return e;
    const n = qe(e);
    if (n) {
      const s = n["$$" + t];
      return s || new ye(e, t);
    }
    return e[t];
  },
  Gs = (e) => typeof e == "function" && typeof e.getSymbol == "function",
  wn = (e, t, n, s, r, o, i) => {
    let c;
    const a = (h) => {
        c || (c = h);
      },
      l = async (h) => {
        if ((h && a(h), n !== null)) return n;
        if (s !== null) return (n = s().then((v) => (n = v[t])));
        {
          if (!e) throw P(31, t);
          if (!c) throw P(30, e, t);
          const v = pt().importSymbol(c, e, t);
          return (n = E(v, (g) => (n = g)));
        }
      },
      u = (h) => (n !== null ? n : l(h)),
      f =
        (h, v) =>
        (...g) => {
          const q = fi(),
            x = u();
          return E(x, (_) => {
            if (W(_)) {
              if (v && v() === !1) return;
              const k = { ...d(h), $qrl$: b };
              return di(t, k.$element$, q), ie(k, _, ...g);
            }
            throw P(10);
          });
        },
      d = (h) => (h == null ? ne() : O(h) ? ms(h) : h),
      $ = async function (...h) {
        return await f()(...h);
      },
      y = i != null ? i : t,
      m = ui(y),
      b = $;
    return Object.assign($, {
      getSymbol: () => y,
      getHash: () => m,
      resolve: l,
      $resolveLazy$: u,
      $setContainer$: a,
      $chunk$: e,
      $symbol$: t,
      $refSymbol$: i,
      $hash$: m,
      getFn: f,
      $capture$: r,
      $captureRef$: o,
      $dev$: null,
    });
  },
  ui = (e) => {
    const t = e.lastIndexOf("_");
    return t > -1 ? e.slice(t + 1) : e;
  },
  di = (e, t, n) => {
    pi("qsymbol", { detail: { symbol: e, element: t, reqTime: n } });
  },
  pi = (e, t) => {
    We() ||
      typeof document != "object" ||
      document.dispatchEvent(new CustomEvent(e, { bubbles: !1, detail: t }));
  },
  fi = () =>
    We() ? 0 : typeof performance == "object" ? performance.now() : 0,
  C = (e) => {
    function t(n, s) {
      const r = e.$hash$ + ":" + (s || "");
      return w(Ve, { "q:renderFn": e, children: n.children, props: n }, r);
    }
    return (t[ot] = [e]), t;
  },
  $i = (e) => typeof e == "function" && e[ot] !== void 0,
  ke = (e) => {
    var n;
    const t = (n = e.name) != null ? n : "";
    return w(Ve, { "q:s": "" }, t);
  },
  hi = async (e, t) => {
    var l;
    const n = t.containerTagName,
      s = Bt(1).$element$,
      r = Ts(s),
      o = Es({ nodeType: 9 }, r),
      i = (l = t.beforeContent) != null ? l : [],
      c = {
        rCtx: o,
        $contexts$: [],
        projectedChildren: void 0,
        projectedContext: void 0,
        hostCtx: null,
        invocationContext: void 0,
        headNodes: n === "html" ? i : [],
        $pendingListeners$: [],
      },
      a = {
        ...t.containerAttributes,
        "q:container": "paused",
        "q:version": "0.10.0",
        "q:render": "ssr",
        "q:base": t.base,
        children: n === "html" ? [e] : [i, e],
      };
    (r.$envData$ = { url: t.url, ...t.envData }),
      (e = w(n, a)),
      (r.$hostsRendering$ = new Set()),
      (r.$renderPromise$ = Promise.resolve().then(() =>
        mi(e, c, t.stream, r, t)
      )),
      await r.$renderPromise$;
  },
  mi = async (e, t, n, s, r) => {
    const o = r.beforeClose;
    return (
      await tr(
        e,
        t,
        n,
        0,
        o
          ? (i) => {
              const c = o(t.$contexts$, s);
              return B(c, t, i, 0, void 0);
            }
          : void 0
      ),
      t.rCtx.$static$
    );
  },
  Xs = (e, t, n, s, r, o, i) => {
    var $;
    const c = e.props,
      a = c["q:renderFn"];
    if (a) return (t.$componentQrl$ = a), gi(s, r, t, e, o, i);
    let l = "<!--qv" + yi(c);
    const u = "q:s" in c,
      f = e.key != null ? String(e.key) : null;
    if (
      (u &&
        (($ = s.hostCtx) == null || $.$id$, (l += " q:sref=" + s.hostCtx.$id$)),
      f != null && (l += " q:key=" + f),
      (l += "-->"),
      r.write(l),
      n)
    )
      for (const y of n) er(y.type, y.props, r);
    const d = nr(c.children, s, r, o);
    return E(d, () => {
      var m;
      if (!u && !i) return void r.write(Kn);
      let y;
      if (u) {
        const b = (m = s.projectedChildren) == null ? void 0 : m[f];
        b &&
          ((s.projectedChildren[f] = void 0),
          (y = B(b, s.projectedContext, r, o)));
      }
      return (
        i && (y = E(y, () => i(r))),
        E(y, () => {
          r.write(Kn);
        })
      );
    });
  },
  Kn = "<!--/qv-->",
  yi = (e) => {
    let t = "";
    for (const n of Object.keys(e)) {
      if (n === "children") continue;
      const s = e[n];
      s != null && (t += " " + (s === "" ? n : n + "=" + s));
    }
    return t;
  },
  er = (e, t, n) => {
    if (
      (n.write(
        "<" +
          e +
          ((r) => {
            let o = "";
            for (const i of Object.keys(r)) {
              if (i === "dangerouslySetInnerHTML") continue;
              const c = r[i];
              c != null && (o += " " + (c === "" ? i : i + '="' + c + '"'));
            }
            return o;
          })(t) +
          ">"
      ),
      !!or[e])
    )
      return;
    const s = t.dangerouslySetInnerHTML;
    s != null && n.write(s), n.write(`</${e}>`);
  },
  gi = (e, t, n, s, r, o) => {
    const i = s.props;
    return (
      bi(e.rCtx, n, i.props),
      E(Xe(e.rCtx, n), (c) => {
        const a = n.$element$,
          l = c.rCtx,
          u = ne(a, void 0);
        (u.$subscriber$ = a), (u.$renderCtx$ = l);
        const f = { ...e, rCtx: l },
          d = {
            ...e,
            projectedChildren: vi(i.children, e),
            projectedContext: f,
            rCtx: l,
            invocationContext: u,
          },
          $ = [];
        if (n.$appendStyles$) {
          const p = 4 & r ? e.headNodes : $;
          for (const h of n.$appendStyles$)
            p.push(
              w("style", {
                "q:style": h.styleId,
                dangerouslySetInnerHTML: h.content,
              })
            );
        }
        const y = yt(e.rCtx),
          m = n.$scopeIds$ ? js(n.$scopeIds$) : void 0,
          b = w(s.type, { "q:sstyle": m, "q:id": y, children: c.node }, s.key);
        return (
          (n.$id$ = y),
          e.$contexts$.push(n),
          (d.hostCtx = n),
          Xs(
            b,
            n,
            $,
            d,
            t,
            r,
            (p) => (
              n.$needAttachListeners$, o ? E(Vn(d, p), () => o(p)) : Vn(d, p)
            )
          )
        );
      })
    );
  },
  Vn = (e, t) => {
    const n = e.projectedChildren;
    if (n) {
      const s = Object.keys(n).map((r) => {
        const o = n[r];
        if (o)
          return w("q:template", {
            [fe]: r,
            hidden: "",
            "aria-hidden": "true",
            children: o,
          });
      });
      return B(s, e, t, 0, void 0);
    }
  },
  vi = (e, t) => {
    var r;
    const n = sr(e, t);
    if (n === null) return;
    const s = {};
    for (const o of n) {
      let i = "";
      $t(o) && (i = (r = o.props[fe]) != null ? r : "");
      let c = s[i];
      c || (s[i] = c = []), c.push(o);
    }
    return s;
  },
  Bt = (e) => A({ nodeType: e, _qc_: null }),
  tr = (e, t, n, s, r) => {
    var c, a;
    const o = e.type;
    if (typeof o == "string") {
      const l = e.key,
        u = e.props,
        f = (c = u[N]) != null ? c : re,
        d = Bt(1),
        $ = d.$element$,
        y = o === "head",
        m = t.hostCtx;
      let b = "<" + o,
        p = !1;
      for (const _ of Object.keys(u)) {
        if (
          _ === "children" ||
          _ === "key" ||
          _ === "class" ||
          _ === "className" ||
          _ === "dangerouslySetInnerHTML"
        )
          continue;
        if (_ === "ref") {
          pn(u[_], $);
          continue;
        }
        let k = K(f[_]) ? f[_] : u[_];
        if (tn(_)) {
          sn(d.li, _, k, void 0);
          continue;
        }
        const T = _i(_);
        if (K(k)) {
          if (m) {
            const R = m.$element$;
            _e(1, R, k, $, T), (p = !0);
          }
          k = k.value;
        }
        const H = qi(T, k);
        H != null && (b += " " + (k === "" ? T : T + '="' + Ei(H) + '"'));
      }
      const h = d.li,
        v = (a = u.class) != null ? a : u.className;
      let g = wi(v);
      if (
        (m &&
          (m.$scopeIds$ && (g = m.$scopeIds$.join(" ") + " " + g),
          m.$needAttachListeners$ &&
            (Fe(h, m.li), (m.$needAttachListeners$ = !1))),
        y && (s |= 1),
        ki[o] && (s |= 8),
        (g = g.trim()),
        g && (b += ' class="' + g + '"'),
        h.length > 0)
      ) {
        const _ = nn(h);
        for (const k of _) b += " " + k[0] + '="' + en(k[1], d) + '"';
      }
      if (
        (l != null && (b += ' q:key="' + l + '"'),
        "ref" in u || h.length > 0 || p)
      ) {
        const _ = yt(t.rCtx);
        (b += ' q:id="' + _ + '"'), (d.$id$ = _), t.$contexts$.push(d);
      }
      if ((1 & s && (b += " q:head"), (b += ">"), n.write(b), or[o])) return;
      const q = u.dangerouslySetInnerHTML;
      if (q != null) return n.write(String(q)), void n.write(`</${o}>`);
      y || (s &= -2), o === "html" ? (s |= 4) : (s &= -5);
      const x = B(u.children, t, n, s);
      return E(x, () => {
        if (y) {
          for (const _ of t.headNodes) er(_.type, _.props, n);
          t.headNodes.length = 0;
        }
        if (r)
          return E(r(n), () => {
            n.write(`</${o}>`);
          });
        n.write(`</${o}>`);
      });
    }
    if (o === Ve) {
      const l = Bt(111);
      return (l.$parent$ = t.hostCtx), Xs(e, l, void 0, t, n, s, r);
    }
    if (o === ws) return void n.write("<!--" + e.props.data + "-->");
    if (o === bs)
      return (async (l, u, f, d) => {
        f.write("<!--qkssr-f-->");
        const $ = l.props.children;
        let y;
        if (W($)) {
          const m = $({
            write(b) {
              f.write(b), f.write("<!--qkssr-f-->");
            },
          });
          if (M(m)) return m;
          y = m;
        } else y = $;
        for await (const m of y)
          await B(m, u, f, d, void 0), f.write("<!--qkssr-f-->");
      })(e, t, n, s);
    const i = ie(t.invocationContext, o, e.props, e.key);
    return B(i, t, n, s, r);
  },
  B = (e, t, n, s, r) => {
    var o;
    if (e != null && typeof e != "boolean")
      if (Be(e) || typeof e == "number") n.write(jt(String(e)));
      else {
        if ($t(e)) return tr(e, t, n, s, r);
        if (O(e)) return nr(e, t, n, s);
        if (K(e)) {
          const i = 8 & s,
            c = (o = t.hostCtx) == null ? void 0 : o.$element$;
          let a;
          if (c) {
            if (!i) {
              a = e.value;
              const l = yt(t.rCtx);
              return (
                _e(2, c, e, "#" + l, "data"),
                void n.write(`<!--t=${l}-->${jt(String(a))}<!---->`)
              );
            }
            a = ie(t.invocationContext, () => e.value);
          }
          return void n.write(jt(String(a)));
        }
        if (M(e))
          return n.write("<!--qkssr-f-->"), e.then((i) => B(i, t, n, s, r));
      }
  };
function nr(e, t, n, s) {
  if (e == null) return;
  if (!O(e)) return B(e, t, n, s);
  if (e.length === 1) return B(e[0], t, n, s);
  if (e.length === 0) return;
  let r = 0;
  const o = [];
  return e.reduce((i, c, a) => {
    const l = [];
    o.push(l);
    const u = B(
        c,
        t,
        i
          ? {
              write(d) {
                r === a ? n.write(d) : l.push(d);
              },
            }
          : n,
        s
      ),
      f = () => {
        r++, o.length > r && o[r].forEach((d) => n.write(d));
      };
    return M(u) && i
      ? Promise.all([u, i]).then(f)
      : M(u)
      ? u.then(f)
      : i
      ? i.then(f)
      : void r++;
  }, void 0);
}
const sr = (e, t) => {
    if (e == null) return null;
    const n = rr(e, t),
      s = O(n) ? n : [n];
    return s.length === 0 ? null : s;
  },
  wi = (e) => {
    if (!e) return "";
    if (typeof e == "string") return e;
    if (Array.isArray(e)) return e.join(" ");
    const t = [];
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && e[n] && t.push(n);
    return t.join(" ");
  },
  rr = (e, t) => {
    if (e == null) return null;
    if (O(e)) return e.flatMap((n) => rr(n, t));
    if ($t(e) && W(e.type) && e.type !== ws && e.type !== bs && e.type !== Ve) {
      const n = ie(t.invocationContext, e.type, e.props, e.key);
      return sr(n, t);
    }
    return e;
  },
  bi = (e, t, n) => {
    var i;
    const s = Object.keys(n),
      r = { [pe]: ct };
    if (((t.$props$ = wt(r, e.$static$.$containerState$)), s.length === 0))
      return;
    const o = (r[N] = (i = n[N]) != null ? i : re);
    for (const c of s)
      c !== "children" && (K(o[c]) ? (r["$$" + c] = o[c]) : (r[c] = n[c]));
  };
function _i(e) {
  return e === "htmlFor" ? "for" : e;
}
function qi(e, t) {
  return e === "style"
    ? Ns(t)
    : t === !1 || t == null
    ? null
    : t === !0
    ? ""
    : String(t);
}
const ki = { title: !0, style: !0, script: !0, noframes: !0, noscript: !0 },
  or = {
    area: !0,
    base: !0,
    basefont: !0,
    bgsound: !0,
    br: !0,
    col: !0,
    embed: !0,
    frame: !0,
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
  },
  xi = /[&<>]/g,
  Si = /[&"]/g,
  jt = (e) =>
    e.replace(xi, (t) => {
      switch (t) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        default:
          return "";
      }
    }),
  Ei = (e) =>
    e.replace(Si, (t) => {
      switch (t) {
        case "&":
          return "&amp;";
        case '"':
          return "&quot;";
        default:
          return "";
      }
    }),
  ue = (e, t) => {
    var i;
    const { get: n, set: s, ctx: r } = Ke();
    if (n != null) return n;
    const o = W(e) ? e() : e;
    if ((t == null ? void 0 : t.reactive) === !1) return s(o), o;
    {
      const c = r.$renderCtx$.$static$.$containerState$,
        a = gn(
          o,
          c,
          (i = t == null ? void 0 : t.recursive) != null && i ? 1 : 0
        );
      return s(a), a;
    }
  };
function ir(e, t) {
  var n;
  return (n = Zt().$renderCtx$.$static$.$containerState$.$envData$[e]) != null
    ? n
    : t;
}
const bn = (e) => {
    Ii(e, (t) => t, !1);
  },
  Ii = (e, t, n) => {
    const { get: s, set: r, ctx: o, i } = Ke();
    if (s) return s;
    const c = o.$renderCtx$,
      a =
        ((l = i),
        `${((y, m = 0) => {
          if (y.length === 0) return m;
          for (let b = 0; b < y.length; b++)
            (m = (m << 5) - m + y.charCodeAt(b)), (m |= 0);
          return Number(Math.abs(m)).toString(36);
        })(e.$hash$)}-${l}`);
    var l;
    const u = c.$static$.$containerState$,
      f = A(o.$hostElement$);
    if (
      (r(a),
      f.$appendStyles$ || (f.$appendStyles$ = []),
      f.$scopeIds$ || (f.$scopeIds$ = []),
      n && f.$scopeIds$.push(((y) => "\u2B50\uFE0F" + y)(a)),
      ((y, m) => y.$styleIds$.has(m))(u, a))
    )
      return a;
    u.$styleIds$.add(a);
    const d = e.$resolveLazy$(u.$containerEl$),
      $ = (y) => {
        f.$appendStyles$,
          f.$appendStyles$.push({ styleId: a, content: t(y, a) });
      };
    return M(d) ? o.$waitOn$.push(d.then($)) : $(d), a;
  },
  Ni = C(
    S(
      () => w("footer", { class: "", children: w("p", { children: "text" }) }),
      "s_yas3JiLch2U"
    )
  ),
  ji = C(
    S(({ className: e = "" }) => {
      const t = ue({ search: "" });
      return w("div", {
        class: `flex items-center rounded border border-solid border-surface-600 ${
          e || ""
        } `,
        children: [
          w("input", {
            type: "search",
            class: "flex-1 bg-transparent px-3 py-1 text-surface-200",
            onInput$: S(
              ({ target: n }) => {
                const [s] = Q();
                return (s.search = n.value);
              },
              "s_0RsjTgIxIZg",
              [t]
            ),
            get value() {
              return t.search;
            },
            [N]: { value: le(t, "search") },
          }),
          w(ke, {}),
          w("button", {
            class: "grid h-full place-items-center px-1",
            children: w("span", {
              class: "material-symbols-rounded scale-75 text-surface-400",
              children: "search",
            }),
          }),
        ],
      });
    }, "s_20grO2k4B4o")
  ),
  Oi = C(
    S(
      ({ className: e = "", onClick$: t, onMouseOver$: n, onMouseOut$: s }) =>
        w("button", {
          class: `rounded border border-solid border-surface-600 bg-surface-900 py-1 px-2 ${e}`,
          onClick$: S(
            async () => {
              const [r] = Q();
              return await r();
            },
            "s_x2MOiRZTzOQ",
            [t]
          ),
          onMouseOver$: S(
            async () => {
              const [r] = Q();
              return await r();
            },
            "s_cILeajGsfTY",
            [n]
          ),
          onMouseOut$: S(
            async () => {
              const [r] = Q();
              return await r();
            },
            "s_TWvkh8fQk0Y",
            [s]
          ),
          children: w(ke, {}),
        }),
      "s_u9eai0bcwkU"
    )
  ),
  cr = `[class*=top-arrow]:before{background-color:#17191c;border-left:1px solid #292d32;border-top:1px solid #292d32;content:"";height:.5rem;margin-left:auto;margin-right:1.25rem;transform:translate(50%,50%) rotate(45deg);transition:opacity;width:.5rem}.top-arrow--absolute:before{background-color:#1c1e22;border-color:#393f46;position:absolute;right:0;top:0;transform:translate(75%,-55%) rotate(45deg)}
`,
  Ti = C(
    S(
      ({ hasNotifications: e, name: t }) => (
        bn(S(cr, "s_gMeKULBNyJ0")),
        w(we, {
          children: [
            w("div", {
              class: `relative ml-auto mr-5 cursor-pointer
           hover:brightness-110 [&>p]:hover:opacity-100 [&>p]:hover:delay-700 ${
             e || "before-ball--notification"
           }`,
              "aria-labelledby": `current-user-first-name=${t}`,
              children: [
                w(ar, {
                  src: "https://picsum.photos/200/300",
                  name: "Johann",
                  [N]: { src: !0, name: !0 },
                }),
                w("p", {
                  class:
                    "top-arrow grd pointer-events-none absolute top-full right-0 opacity-0 delay-75",
                  id: `current-user-first-name=${t}`,
                  children: w("span", {
                    class:
                      "rounded-lg border border-solid border-surface-700 bg-surface-900 py-1 px-3 text-sm",
                    children: t,
                  }),
                }),
              ],
            }),
            w(Ri, {}),
          ],
        })
      ),
      "s_WdwZvKQuyD0"
    )
  ),
  Ri = C(
    S(() => {
      const e = ue({ changeStatus: !1, mouseOver: !1 });
      return w("section", {
        class:
          "top-arrow--absolute fixed right-5 top-14 grid gap-3 rounded-md border border-solid border-surface-600 bg-surface-800",
        children: [
          w("header", {
            class: "flex items-center gap-4 px-4 pt-4",
            "aria-labelledby": "user-options-title",
            children: [
              w(ar, {
                className: "row-span-2",
                src: "https://picsum.photos/200/300",
                name: "Johann",
                [N]: { className: !0, src: !0, name: !0 },
              }),
              w("div", {
                children: [
                  w("strong", { id: "user-options-title", children: "Johann" }),
                  w("p", {
                    class:
                      "before-ball--empty flex items-center gap-2 text-xs text-surface-300 ",
                    children: "Active",
                  }),
                ],
              }),
            ],
          }),
          w(Oi, {
            className:
              "mx-4 flex items-center gap-2 font-medium text-surface-400 hover:border-surface-400 hover:text-surface-300",
            onClick$: S(
              () => {
                const [t] = Q();
                return (t.changeStatus = !t.changeStatus);
              },
              "s_I90vQVoVkQY",
              [e]
            ),
            onMouseOver$: S(
              () => {
                const [t] = Q();
                return (t.mouseOver = !0);
              },
              "s_xWuhqbKdd58",
              [e]
            ),
            onMouseOut$: S(
              () => {
                const [t] = Q();
                return (t.mouseOver = !1);
              },
              "s_NHMQyYxu2Q8",
              [e]
            ),
            children: [
              w("i", {
                class: "",
                children: e.mouseOver ? "\u{1F601}" : "\u{1FAE5}",
              }),
              w("p", { class: "text-xs", children: "Update your status" }),
            ],
            [N]: {
              className: !0,
              onClick$: !0,
              onMouseOver$: !0,
              onMouseOut$: !0,
            },
          }),
          w("ul", {
            class: "grid",
            children: [
              w(Ie, { children: "Set yourself as away" }),
              w(Ie, {
                children: [
                  "Pulse notifications",
                  w("span", {
                    class: "material-symbols-out",
                    children: "navigate_next",
                  }),
                ],
              }),
              w(Ie, { children: "Profile" }),
              w(Ie, {
                separator: !0,
                children: "Preferences",
                [N]: { separator: !0 },
              }),
              w(Ie, { children: "Sing out of XXX" }),
            ],
          }),
        ],
      });
    }, "s_1lAtNhGv5tw")
  ),
  Ie = C(
    S(
      ({ separator: e = !1 }) => (
        bn(S(cr, "s_l5OCHAfCC54")),
        w("li", {
          class: `my-1 grid cursor-pointer py-1 px-4
        `,
          children: w(ke, {}),
        })
      ),
      "s_H0u5ihy1ShA"
    )
  ),
  ar = C(
    S(
      ({ size: e = 9, className: t = "", src: n, name: s }) =>
        w("img", {
          style: { width: `${e * 0.25}rem`, height: `${e * 0.25}rem` },
          class: `aspect-square rounded object-cover ${t || ""}`,
          src: n,
          alt: `User photo - ${s}`,
        }),
      "s_7h1gcCLTeCo"
    )
  ),
  Ci = C(
    S(
      () =>
        w("header", {
          class:
            "grid grid-cols-[1fr_2fr_1fr] items-center bg-surface-950 py-3",
          children: [
            w(ji, { className: "col-start-2", [N]: { className: !0 } }),
            w(Ti, { name: "Johann", [N]: { name: !0 } }),
          ],
        }),
      "s_EBJpulrYXEc"
    )
  ),
  Li = C(
    S(
      () => w(we, { children: [w(Ci, {}), w(ke, {}), w(Ni, {})] }),
      "s_VkLNXphUh5s"
    )
  ),
  Ai = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Li },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pi = C(
    S(
      () =>
        w(we, {
          children: w("main", {
            children: w("h3", {
              children: "This Is the Page content that will change",
            }),
          }),
        }),
      "s_xYL1qOwPyDI"
    )
  ),
  Mi = { title: "Welcome to Qwik" },
  zi = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Pi, head: Mi },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ui = () => Ai,
  lr = [
    [/^\/$/, [Ui, () => zi], void 0, "/", ["q-2f260a13.js", "q-70a8c513.js"]],
  ],
  ur = [],
  Wt = !1,
  dr = "/",
  pr = !0,
  fr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        routes: lr,
        menus: ur,
        trailingSlash: Wt,
        basePathname: dr,
        cacheModules: pr,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var z = Symbol("headers"),
  Yn,
  Hi = class {
    constructor() {
      this[Yn] = {};
    }
    [((Yn = z), Symbol.iterator)]() {
      return this.entries();
    }
    *keys() {
      for (const e of Object.keys(this[z])) yield e;
    }
    *values() {
      for (const e of Object.values(this[z])) yield e;
    }
    *entries() {
      for (const e of Object.keys(this[z])) yield [e, this.get(e)];
    }
    get(e) {
      return this[z][Ne(e)] || null;
    }
    set(e, t) {
      const n = Ne(e);
      this[z][n] = typeof t != "string" ? String(t) : t;
    }
    append(e, t) {
      const n = Ne(e),
        s = this.has(n) ? `${this.get(n)}, ${t}` : t;
      this.set(e, s);
    }
    delete(e) {
      if (!this.has(e)) return;
      const t = Ne(e);
      delete this[z][t];
    }
    all() {
      return this[z];
    }
    has(e) {
      return this[z].hasOwnProperty(Ne(e));
    }
    forEach(e, t) {
      for (const n in this[z])
        this[z].hasOwnProperty(n) && e.call(t, this[z][n], n, this);
    }
  },
  Di = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function Ne(e) {
  if ((typeof e != "string" && (e = String(e)), Di.test(e) || e.trim() === ""))
    throw new TypeError("Invalid character in header field name");
  return e.toLowerCase();
}
function qt() {
  return new (typeof Headers == "function" ? Headers : Hi)();
}
var Ce = class extends Error {
  constructor(e, t) {
    super(t), (this.status = e);
  }
};
function Qi(e) {
  return $r(e, new Ce(404, "Not Found"));
}
function Bi(e, t) {
  let s = "Server Error",
    r;
  t != null &&
    (typeof t == "object"
      ? (typeof t.message == "string" && (s = t.message),
        t.stack != null && (r = String(t.stack)))
      : (s = String(t)));
  const o = hr(500, s, r),
    i = qt();
  return (
    i.set("Content-Type", "text/html; charset=utf-8"),
    e.response(
      500,
      i,
      async (c) => {
        c.write(o);
      },
      t
    )
  );
}
function $r(e, t) {
  const n = hr(t.status, t.message, t.stack),
    s = qt();
  return (
    s.set("Content-Type", "text/html; charset=utf-8"),
    e.response(
      t.status,
      s,
      async (r) => {
        r.write(n);
      },
      t
    )
  );
}
function hr(e, t, n) {
  const s = typeof t == "string" ? "600px" : "300px",
    r = e >= 500 ? Fi : Wi;
  return (
    e < 500 && (n = ""),
    `<!DOCTYPE html>
<html data-qwik-city-status="${e}">
<head>
  <meta charset="utf-8">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${s}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
    pre { max-width: 580px; margin: 0 auto; }
  </style>
</head>
<body>
  <p>
    <strong>${e}</strong>
    <span>${t}</span>
  </p>
  ${n ? `<pre><code>${n}</code></pre>` : ""}
</body>
</html>
`
  );
}
var Wi = "#006ce9",
  Fi = "#713fc2",
  Jn = new WeakMap(),
  Ki = async (e, t, n, s) => {
    if (Array.isArray(e))
      for (const r of e) {
        const o = r[0].exec(s);
        if (o) {
          const i = r[1],
            c = Yi(r[2], o),
            a = r[4],
            l = new Array(i.length),
            u = [],
            f = Vi(t, s);
          let d;
          return (
            i.forEach(($, y) => {
              Zn($, u, (m) => (l[y] = m), n);
            }),
            Zn(f, u, ($) => (d = $ == null ? void 0 : $.default), n),
            u.length > 0 && (await Promise.all(u)),
            [c, l, d, a]
          );
        }
      }
    return null;
  },
  Zn = (e, t, n, s) => {
    if (typeof e == "function") {
      const r = Jn.get(e);
      if (r) n(r);
      else {
        const o = e();
        typeof o.then == "function"
          ? t.push(
              o.then((i) => {
                s !== !1 && Jn.set(e, i), n(i);
              })
            )
          : o && n(o);
      }
    }
  },
  Vi = (e, t) => {
    if (e) {
      const n = e.find(
        (s) => s[0] === t || t.startsWith(s[0] + (t.endsWith("/") ? "" : "/"))
      );
      if (n) return n[1];
    }
  },
  Yi = (e, t) => {
    const n = {};
    if (e) for (let s = 0; s < e.length; s++) n[e[s]] = t ? t[s + 1] : "";
    return n;
  },
  Oe = class {
    constructor(e, t, n) {
      (this.url = e),
        (this.location = e),
        (this.status = mr(t) ? t : 307),
        (this.headers = n || qt()),
        this.headers.set("Location", this.location),
        this.headers.delete("Cache-Control");
    }
  };
function Ji(e, t) {
  return e.response(t.status, t.headers, async () => {});
}
function mr(e) {
  return typeof e == "number" && e >= 301 && e <= 308;
}
async function Zi(e, t, n, s, r, o = "/") {
  if (n.length === 0) throw new Ce(404, "Not Found");
  const { request: i, url: c } = e,
    { pathname: a } = c,
    l = Gi(n),
    u = l && i.headers.get("Accept") === "application/json",
    f = u ? "pagedata" : l ? "pagehtml" : "endpoint",
    d = {
      type: f,
      url: c,
      params: t,
      status: 200,
      headers: qt(),
      resolvedBody: void 0,
      pendingBody: void 0,
      aborted: !1,
    };
  let $ = !1;
  if (l && a !== o) {
    if (r) {
      if (!a.endsWith("/")) throw new Oe(a + "/" + c.search, 307);
    } else if (a.endsWith("/"))
      throw new Oe(a.slice(0, a.length - 1) + c.search, 307);
  }
  let y = -1;
  const m = () => {
      y = Xn;
    },
    b = (v, g) => new Oe(v, g, d.headers),
    p = (v, g) => new Ce(v, g),
    h = async () => {
      for (y++; y < n.length; ) {
        const v = n[y];
        let g;
        switch (i.method) {
          case "GET": {
            g = v.onGet;
            break;
          }
          case "POST": {
            g = v.onPost;
            break;
          }
          case "PUT": {
            g = v.onPut;
            break;
          }
          case "PATCH": {
            g = v.onPatch;
            break;
          }
          case "OPTIONS": {
            g = v.onOptions;
            break;
          }
          case "HEAD": {
            g = v.onHead;
            break;
          }
          case "DELETE": {
            g = v.onDelete;
            break;
          }
        }
        if (((g = g || v.onRequest), typeof g == "function")) {
          $ = !0;
          const q = {
              get status() {
                return d.status;
              },
              set status(k) {
                d.status = k;
              },
              get headers() {
                return d.headers;
              },
              redirect: b,
              error: p,
            },
            x = {
              request: i,
              url: new URL(c),
              params: { ...t },
              response: q,
              platform: s,
              next: h,
              abort: m,
            },
            _ = g(x);
          if (typeof _ == "function") d.pendingBody = Gn(_);
          else if (
            _ !== null &&
            typeof _ == "object" &&
            typeof _.then == "function"
          ) {
            const k = await _;
            typeof k == "function"
              ? (d.pendingBody = Gn(k))
              : (d.resolvedBody = k);
          } else d.resolvedBody = _;
        }
        y++;
      }
    };
  if (
    (await h(),
    (d.aborted = y >= Xn),
    !u && mr(d.status) && d.headers.has("Location"))
  )
    throw new Oe(d.headers.get("Location"), d.status, d.headers);
  if (f === "endpoint" && !$) throw new Ce(405, "Method Not Allowed");
  return d;
}
function Gn(e) {
  return new Promise((t, n) => {
    try {
      const s = e();
      s !== null && typeof s == "object" && typeof s.then == "function"
        ? s.then(t, n)
        : t(s);
    } catch (s) {
      n(s);
    }
  });
}
function Gi(e) {
  const t = e[e.length - 1];
  return t && typeof t.default == "function";
}
function Xi(e, t) {
  let n = e.url.pathname;
  if (n.endsWith(yr)) {
    e.request.headers.set("Accept", "application/json");
    const s = n.length - ec + (t ? 1 : 0);
    (n = n.slice(0, s)), n === "" && (n = "/"), (e.url.pathname = n);
  }
}
var yr = "/q-data.json",
  ec = yr.length,
  Xn = 999999999;
function tc(e, t) {
  const { pendingBody: n, resolvedBody: s, status: r, headers: o } = t,
    { response: i } = e;
  if (n === void 0 && s === void 0) return i(r, o, nc);
  o.has("Content-Type") ||
    o.set("Content-Type", "application/json; charset=utf-8");
  const c = o.get("Content-Type").includes("json");
  return i(r, o, async ({ write: a }) => {
    const l = n !== void 0 ? await n : s;
    if (l !== void 0)
      if (c) a(JSON.stringify(l));
      else {
        const u = typeof l;
        a(
          u === "string" ? l : u === "number" || u === "boolean" ? String(l) : l
        );
      }
  });
}
var nc = async () => {};
function sc(e, t, n, s, r) {
  const { status: o, headers: i } = t,
    { response: c } = e,
    a = t.type === "pagedata";
  return (
    a
      ? i.set("Content-Type", "application/json; charset=utf-8")
      : i.has("Content-Type") ||
        i.set("Content-Type", "text/html; charset=utf-8"),
    c(a ? 200 : o, i, async (l) => {
      const u = await n({ stream: a ? ic : l, envData: oc(t), ...s });
      a
        ? l.write(JSON.stringify(await es(t, u, r)))
        : (typeof u).html === "string" && l.write(u.html),
        typeof l.clientData == "function" && l.clientData(await es(t, u, r));
    })
  );
}
async function es(e, t, n) {
  const s = rc(t, n);
  return {
    body: e.pendingBody ? await e.pendingBody : e.resolvedBody,
    status: e.status !== 200 ? e.status : void 0,
    redirect:
      (e.status >= 301 && e.status <= 308 && e.headers.get("location")) ||
      void 0,
    prefetch: s.length > 0 ? s : void 0,
  };
}
function rc(e, t) {
  const n = [],
    s = (c) => {
      c && !n.includes(c) && n.push(c);
    },
    r = (c) => {
      if (Array.isArray(c))
        for (const a of c) {
          const l = a.url.split("/").pop();
          l && !n.includes(l) && (s(l), r(a.imports));
        }
    };
  r(e.prefetchResources);
  const o = e.manifest || e._manifest,
    i = e._symbols;
  if (o && i)
    for (const c of i) {
      const a = o.symbols[c];
      a && a.ctxName === "component$" && s(o.mapping[c]);
    }
  if (t) for (const c of t) s(c);
  return n;
}
function oc(e) {
  const { url: t, params: n, pendingBody: s, resolvedBody: r, status: o } = e;
  return {
    url: t.href,
    qwikcity: { params: { ...n }, response: { body: s || r, status: o } },
  };
}
var ic = { write: () => {} };
async function ts(e, t, n, s) {
  try {
    Xi(e, Wt);
    const r = await Ki(lr, ur, pr, e.url.pathname);
    if (r) {
      const [o, i, c, a] = r,
        l = await Zi(e, o, i, n, Wt, dr);
      return l.aborted
        ? null
        : l.type === "endpoint"
        ? tc(e, l)
        : sc(e, l, t, s, a);
    }
  } catch (r) {
    return r instanceof Oe ? Ji(e, r) : r instanceof Ce ? $r(e, r) : Bi(e, r);
  }
  return null;
}
function cc(e, t) {
  async function n(s, { next: r }) {
    try {
      const o = {
          url: new URL(s.url),
          request: s,
          response: (a, l, u) =>
            new Promise((f) => {
              let d = !1;
              const { readable: $, writable: y } = new TransformStream(),
                m = y.getWriter(),
                b = new Response($, { status: a, headers: l });
              u({
                write: (p) => {
                  if ((d || ((d = !0), f(b)), typeof p == "string")) {
                    const h = new TextEncoder();
                    m.write(h.encode(p));
                  } else m.write(p);
                },
              }).finally(() => {
                d || ((d = !0), f(b)), m.close();
              });
            }),
        },
        i = await ts(o, e, {}, t);
      if (i) return i;
      const c = await r();
      if (c.status === 404) {
        const a = await ts(o, e, {}, t);
        return a || (await Qi(o));
      }
      return c;
    } catch (o) {
      return new Response(String(o || "Error"), {
        status: 500,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }
  }
  return n;
}
/**
 * @license
 * @builder.io/qwik/server 0.10.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ if (typeof global > "u") {
  const e =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof self < "u"
      ? self
      : {};
  e.global = e;
}
var ac = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
    ? new Proxy(e, { get: (t, n) => (typeof require < "u" ? require : t)[n] })
    : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
function Ot() {
  if (typeof performance > "u") return () => 0;
  const e = performance.now();
  return () => (performance.now() - e) / 1e6;
}
function gr(e) {
  let t = e.base;
  return typeof t == "string" ? (t.endsWith("/") || (t += "/"), t) : "/build/";
}
function lc(e, t) {
  const n = t == null ? void 0 : t.mapper,
    s = e.symbolMapper
      ? e.symbolMapper
      : (o) => {
          if (n) {
            const i = vr(o),
              c = n[i];
            return c || console.error("Cannot resolve symbol", o, "in", n), c;
          }
        };
  return {
    isServer: !0,
    async importSymbol(o, i, c) {
      let a = String(i);
      a.endsWith(".js") || (a += ".js");
      const l = ac(a);
      if (!(c in l))
        throw new Error(`Q-ERROR: missing symbol '${c}' in module '${a}'.`);
      return l[c];
    },
    raf: () => (console.error("server can not rerender"), Promise.resolve()),
    nextTick: (o) =>
      new Promise((i) => {
        setTimeout(() => {
          i(o());
        });
      }),
    chunkForSymbol(o) {
      return s(o, n);
    },
  };
}
async function uc(e, t) {
  const n = lc(e, t);
  Lr(n);
}
var vr = (e) => {
    const t = e.lastIndexOf("_");
    return t > -1 ? e.slice(t + 1) : e;
  },
  dc =
    '((e,t)=>{const n="__q_context__",o=window,a=new Set,i=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>c(o,e,t,n)))},s=(e,t)=>new CustomEvent(e,{detail:t}),l=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),c=async(t,o,a,i=a.type)=>{const r="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&a.preventDefault();const s=t._qc_,c=null==s?void 0:s.li.filter((e=>e[0]===r));if(c&&c.length>0){for(const e of c)await e[1].getFn([t,a],(()=>t.isConnected))(a,t);return}const u=t.getAttribute(r);if(u)for(const o of u.split("\\n")){const i=l(t,o),r=d(i),s=performance.now(),c=b(await import(i.href.split("#")[0]))[r],u=e[n];if(t.isConnected)try{e[n]=[t,a,i],f("qsymbol",{symbol:r,element:t,reqTime:s}),await c(a,t)}finally{e[n]=u}}},f=(t,n)=>{e.dispatchEvent(s(t,n))},b=e=>Object.values(e).find(u)||e,u=e=>"object"==typeof e&&e&&"Module"===e[Symbol.toStringTag],d=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",p=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),v=async e=>{let t=p(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await c(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,p(e.type))},y=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),a.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),c(n.target,"",s("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),g=t=>{for(const n of t)a.has(n)||(q(e,n,v,!0),q(o,n,w),a.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&g(t),o.qwikevents={push:(...e)=>g(e)},q(e,"readystatechange",y),y()}})(document);',
  pc = `(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const qrlResolver = (element, qrl) => {
            element = element.closest("[q\\\\:container]");
            return new URL(qrl, new URL(element.getAttribute("q:base"), doc.baseURI));
        };
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                for (const qrl of attrValue.split("\\n")) {
                    const url = qrlResolver(element, qrl);
                    const symbolName = getSymbolName(url);
                    const reqTime = performance.now();
                    const handler = findModule(await import(url.href.split("#")[0]))[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findModule = module => Object.values(module).find(isModule) || module;
        const isModule = module => "object" == typeof module && module && "Module" === module[Symbol.toStringTag];
        const getSymbolName = url => url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,
  fc =
    '((e,t)=>{const n="__q_context__",o=window,a=new Set,i=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>c(o,e,t,n)))},s=(e,t)=>new CustomEvent(e,{detail:t}),l=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),c=async(t,o,a,i=a.type)=>{const r="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&a.preventDefault();const s=t._qc_,c=null==s?void 0:s.li.filter((e=>e[0]===r));if(c&&c.length>0){for(const e of c)await e[1].getFn([t,a],(()=>t.isConnected))(a,t);return}const u=t.getAttribute(r);if(u)for(const o of u.split("\\n")){const i=l(t,o),r=d(i),s=performance.now(),c=b(await import(i.href.split("#")[0]))[r],u=e[n];if(t.isConnected)try{e[n]=[t,a,i],f("qsymbol",{symbol:r,element:t,reqTime:s}),await c(a,t)}finally{e[n]=u}}},f=(t,n)=>{e.dispatchEvent(s(t,n))},b=e=>Object.values(e).find(u)||e,u=e=>"object"==typeof e&&e&&"Module"===e[Symbol.toStringTag],d=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",p=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),v=async e=>{let t=p(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await c(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,p(e.type))},y=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),a.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),c(n.target,"",s("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),g=t=>{for(const n of t)a.has(n)||(q(e,n,v,!0),q(o,n,w),a.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&g(t),o.qwikevents={push:(...e)=>g(e)},q(e,"readystatechange",y),y()}})(document);',
  $c = `(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const qrlResolver = (element, qrl) => {
            element = element.closest("[q\\\\:container]");
            return new URL(qrl, new URL(element.getAttribute("q:base"), doc.baseURI));
        };
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                for (const qrl of attrValue.split("\\n")) {
                    const url = qrlResolver(element, qrl);
                    const symbolName = getSymbolName(url);
                    const reqTime = performance.now();
                    const handler = findModule(await import(url.href.split("#")[0]))[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findModule = module => Object.values(module).find(isModule) || module;
        const isModule = module => "object" == typeof module && module && "Module" === module[Symbol.toStringTag];
        const getSymbolName = url => url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;
function hc(e = {}) {
  return Array.isArray(e.events) && e.events.length > 0
    ? (e.debug ? $c : fc).replace("window.qEvents", JSON.stringify(e.events))
    : e.debug
    ? pc
    : dc;
}
function mc(e, t, n) {
  if (!n) return [];
  const s = t.prefetchStrategy,
    r = gr(t);
  if (s !== null) {
    if (!s || !s.symbolsToPrefetch || s.symbolsToPrefetch === "auto")
      return yc(e, n, r);
    if (typeof s.symbolsToPrefetch == "function")
      try {
        return s.symbolsToPrefetch({ manifest: n.manifest });
      } catch (o) {
        console.error("getPrefetchUrls, symbolsToPrefetch()", o);
      }
  }
  return [];
}
function yc(e, t, n) {
  const s = [],
    r = e == null ? void 0 : e.listeners,
    o = e == null ? void 0 : e.objs,
    { mapper: i, manifest: c } = t,
    a = new Set();
  if (Array.isArray(r))
    for (const l in i)
      r.some((f) => f.qrl.getHash() === l) && Ft(c, a, s, n, i[l][1]);
  if (Array.isArray(o)) {
    for (const l of o)
      if (gc(l)) {
        const u = l.getHash(),
          f = i[u];
        f && Ft(c, a, s, n, f[0]);
      }
  }
  return s;
}
function Ft(e, t, n, s, r) {
  const o = s + r;
  if (!t.has(o)) {
    t.add(o);
    const i = e.bundles[r];
    if (i) {
      const c = { url: o, imports: [] };
      if ((n.push(c), Array.isArray(i.imports)))
        for (const a of i.imports) Ft(e, t, c.imports, s, a);
    }
  }
}
var gc = (e) => typeof e == "function" && typeof e.getSymbol == "function",
  wr = globalThis.qDev === !0,
  vc = [],
  br = {};
wr && (Object.freeze(vc), Object.freeze(br), (Error.stackTraceLimit = 9999));
[
  "click",
  "dblclick",
  "contextmenu",
  "auxclick",
  "pointerdown",
  "pointerup",
  "pointermove",
  "pointerover",
  "pointerenter",
  "pointerleave",
  "pointerout",
  "pointercancel",
  "gotpointercapture",
  "lostpointercapture",
  "touchstart",
  "touchend",
  "touchmove",
  "touchcancel",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "wheel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "keydown",
  "keyup",
  "keypress",
  "input",
  "change",
  "search",
  "invalid",
  "beforeinput",
  "select",
  "focusin",
  "focusout",
  "focus",
  "blur",
  "submit",
  "reset",
  "scroll",
].map((e) => `on${e.toLowerCase()}$`);
[
  "useWatch$",
  "useClientEffect$",
  "useEffect$",
  "component$",
  "useStyles$",
  "useStylesScoped$",
].map((e) => e.toLowerCase());
function wc(e) {
  if (
    e != null &&
    e.mapping != null &&
    typeof e.mapping == "object" &&
    e.symbols != null &&
    typeof e.symbols == "object" &&
    e.bundles != null &&
    typeof e.bundles == "object"
  )
    return e;
}
function Kt() {
  let r = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;
  return (
    (r += "w.postMessage(u.map(u=>new URL(u,origin)+''));"),
    (r += "w.onmessage=()=>{w.terminate()};"),
    r
  );
}
function bc(e) {
  const t = { bundles: kt(e).map((n) => n.split("/").pop()) };
  return `document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(
    t
  )}}))`;
}
function kt(e) {
  const t = [],
    n = (s) => {
      if (Array.isArray(s))
        for (const r of s) t.includes(r.url) || (t.push(r.url), n(r.imports));
    };
  return n(e), t;
}
function _c(e, t) {
  const n = Ec(e == null ? void 0 : e.implementation),
    s = [];
  return (
    n.prefetchEvent === "always" && qc(s, t),
    n.linkInsert === "html-append" && kc(s, t, n),
    n.linkInsert === "js-append"
      ? xc(s, t, n)
      : n.workerFetchInsert === "always" && Sc(s, t),
    s.length > 0 ? w(we, { children: s }) : null
  );
}
function qc(e, t) {
  e.push(w("script", { type: "module", dangerouslySetInnerHTML: bc(t) }));
}
function kc(e, t, n) {
  const s = kt(t),
    r = n.linkRel || "prefetch";
  for (const o of s) {
    const i = {};
    (i.href = o),
      (i.rel = r),
      (r === "prefetch" || r === "preload") &&
        o.endsWith(".js") &&
        (i.as = "script"),
      e.push(w("link", i, void 0));
  }
}
function xc(e, t, n) {
  const s = n.linkRel || "prefetch";
  let r = "";
  n.workerFetchInsert === "no-link-support" &&
    (r += "let supportsLinkRel = true;"),
    (r += `const u=${JSON.stringify(kt(t))};`),
    (r += "u.map((u,i)=>{"),
    (r += "const l=document.createElement('link');"),
    (r += 'l.setAttribute("href",u);'),
    (r += `l.setAttribute("rel","${s}");`),
    n.workerFetchInsert === "no-link-support" &&
      ((r += "if(i===0){"),
      (r += "try{"),
      (r += `supportsLinkRel=l.relList.supports("${s}");`),
      (r += "}catch(e){}"),
      (r += "}")),
    (r += "document.body.appendChild(l);"),
    (r += "});"),
    n.workerFetchInsert === "no-link-support" &&
      ((r += "if(!supportsLinkRel){"), (r += Kt()), (r += "}")),
    n.workerFetchInsert === "always" && (r += Kt()),
    e.push(w("script", { type: "module", dangerouslySetInnerHTML: r }));
}
function Sc(e, t) {
  let n = `const u=${JSON.stringify(kt(t))};`;
  (n += Kt()),
    e.push(w("script", { type: "module", dangerouslySetInnerHTML: n }));
}
function Ec(e) {
  if (typeof e == "string") {
    switch (e) {
      case "link-prefetch-html":
        return (
          ae(e, "linkInsert"),
          {
            linkInsert: "html-append",
            linkRel: "prefetch",
            workerFetchInsert: null,
            prefetchEvent: null,
          }
        );
      case "link-prefetch":
        return (
          ae(e, "linkInsert"),
          {
            linkInsert: "js-append",
            linkRel: "prefetch",
            workerFetchInsert: "no-link-support",
            prefetchEvent: null,
          }
        );
      case "link-preload-html":
        return (
          ae(e, "linkInsert"),
          {
            linkInsert: "html-append",
            linkRel: "preload",
            workerFetchInsert: null,
            prefetchEvent: null,
          }
        );
      case "link-preload":
        return (
          ae(e, "linkInsert"),
          {
            linkInsert: "js-append",
            linkRel: "preload",
            workerFetchInsert: "no-link-support",
            prefetchEvent: null,
          }
        );
      case "link-modulepreload-html":
        return (
          ae(e, "linkInsert"),
          {
            linkInsert: "html-append",
            linkRel: "modulepreload",
            workerFetchInsert: null,
            prefetchEvent: null,
          }
        );
      case "link-modulepreload":
        return (
          ae(e, "linkInsert"),
          {
            linkInsert: "js-append",
            linkRel: "modulepreload",
            workerFetchInsert: "no-link-support",
            prefetchEvent: null,
          }
        );
    }
    return (
      ae(e, "workerFetchInsert"),
      {
        linkInsert: null,
        linkRel: null,
        workerFetchInsert: "always",
        prefetchEvent: null,
      }
    );
  }
  return e && typeof e == "object" ? e : Ic;
}
var Ic = {
  linkInsert: null,
  linkRel: null,
  workerFetchInsert: null,
  prefetchEvent: "always",
};
function ae(e, t) {
  console.warn(
    `The Prefetch Strategy Implementation "${e}" has been deprecated and will be removed in an upcoming release. Please update to use the "prefetchStrategy.implementation.${t}" interface.`
  );
}
var Nc = "<!DOCTYPE html>";
async function jc(e, t) {
  var T, H, R, j, ce, Y;
  let n = t.stream,
    s = 0,
    r = 0,
    o = 0,
    i = 0;
  const c =
      (H = (T = t.streaming) == null ? void 0 : T.inOrder) != null
        ? H
        : { strategy: "auto", maximunInitialChunk: 5e4, maximunChunk: 3e4 },
    a = (R = t.containerTagName) != null ? R : "html",
    l = (j = t.containerAttributes) != null ? j : {};
  let u = "";
  const f = n,
    d = Ot();
  function $() {
    u && (f.write(u), (u = ""), (s = 0), o++, o === 1 && (i = d()));
  }
  function y(L) {
    (s += L.length), (r += L.length), (u += L);
  }
  switch (c.strategy) {
    case "disabled":
      n = { write: y };
      break;
    case "direct":
      n = f;
      break;
    case "auto":
      let L = 0,
        J = !1;
      const xt = (ce = c.maximunChunk) != null ? ce : 0,
        St = (Y = c.maximunInitialChunk) != null ? Y : 0;
      n = {
        write(Z) {
          Z === "<!--qkssr-f-->"
            ? J || (J = !0)
            : Z === "<!--qkssr-pu-->"
            ? L++
            : Z === "<!--qkssr-po-->"
            ? L--
            : y(Z),
            L === 0 && (J || s >= (o === 0 ? St : xt)) && ((J = !1), $());
        },
      };
      break;
  }
  a === "html"
    ? n.write(Nc)
    : t.qwikLoader
    ? (t.qwikLoader.include === void 0 && (t.qwikLoader.include = "never"),
      t.qwikLoader.position === void 0 && (t.qwikLoader.position = "bottom"))
    : (t.qwikLoader = { include: "never" }),
    t.manifest ||
      console.warn(
        "Missing client manifest, loading symbols in the client might 404"
      );
  const m = gr(t),
    b = Oc(t.manifest);
  await uc(t, b);
  let p = null;
  const h = b == null ? void 0 : b.manifest.injections,
    v = h
      ? h.map((L) => {
          var J;
          return w(L.tag, (J = L.attributes) != null ? J : br);
        })
      : void 0,
    g = Ot(),
    q = [];
  let x = 0,
    _ = 0;
  return (
    await hi(e, {
      stream: n,
      containerTagName: a,
      containerAttributes: l,
      envData: t.envData,
      base: m,
      beforeContent: v,
      beforeClose: async (L, J) => {
        var En, In, Nn;
        x = g();
        const xt = Ot();
        p = await Ws(L, J);
        const St = JSON.stringify(p.state, void 0, wr ? "  " : void 0),
          Z = [
            w("script", { type: "qwik/json", dangerouslySetInnerHTML: Tc(St) }),
          ];
        if (t.prefetchStrategy !== null) {
          const D = mc(p, t, b);
          if (D.length > 0) {
            const jn = _c(t.prefetchStrategy, D);
            jn && Z.push(jn);
          }
        }
        const _n = !p || p.mode !== "static",
          qn =
            (In = (En = t.qwikLoader) == null ? void 0 : En.include) != null
              ? In
              : "auto",
          kn = qn === "always" || (qn === "auto" && _n);
        if (kn) {
          const D = hc({
            events: (Nn = t.qwikLoader) == null ? void 0 : Nn.events,
            debug: t.debug,
          });
          Z.push(w("script", { id: "qwikloader", dangerouslySetInnerHTML: D }));
        }
        const xn = new Set();
        p.listeners.forEach((D) => {
          xn.add(JSON.stringify(D.eventName));
        });
        const Sn = Array.from(xn);
        if (Sn.length > 0) {
          let D = `window.qwikevents.push(${Sn.join(", ")})`;
          kn || (D = `window.qwikevents||=[];${D}`),
            Z.push(w("script", { dangerouslySetInnerHTML: D }));
        }
        return Rc(q, L), (_ = xt()), w(we, { children: Z });
      },
    }),
    $(),
    {
      prefetchResources: void 0,
      snapshotResult: p,
      flushes: o,
      manifest: b == null ? void 0 : b.manifest,
      size: r,
      timing: { render: x, snapshot: _, firstFlush: i },
      _symbols: q,
    }
  );
}
function Oc(e) {
  if (!!e) {
    if ("mapper" in e) return e;
    if (((e = wc(e)), e)) {
      const t = {};
      return (
        Object.entries(e.mapping).forEach(([n, s]) => {
          t[vr(n)] = [n, s];
        }),
        { mapper: t, manifest: e }
      );
    }
  }
}
var Tc = (e) => e.replace(/<(\/?script)/g, "\\x3C$1");
function Rc(e, t) {
  var n;
  for (const s of t) {
    const r = (n = s.$componentQrl$) == null ? void 0 : n.getSymbol();
    r && !e.includes(r) && e.push(r);
  }
}
const Cc = {
    symbols: {
      s_I90vQVoVkQY: {
        origin: "components/User/UserHeader/UserHeader.tsx",
        displayName: "UserOptions_component_section_RowContainerButton_onClick",
        canonicalFilename: "s_i90vqvovkqy",
        hash: "I90vQVoVkQY",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !0,
        parent: "s_1lAtNhGv5tw",
      },
      s_hA9UPaY8sNQ: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "Link_component_a_onClick",
        canonicalFilename: "s_ha9upay8snq",
        hash: "hA9UPaY8sNQ",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !0,
        parent: "s_mYsiJcA4IBc",
      },
      s_x2MOiRZTzOQ: {
        origin: "components/Global/RowContainerButton/RowContainerButton.tsx",
        displayName: "RowContainerButton_component_button_onClick",
        canonicalFilename: "s_x2moirztzoq",
        hash: "x2MOiRZTzOQ",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !0,
        parent: "s_u9eai0bcwkU",
      },
      s_cILeajGsfTY: {
        origin: "components/Global/RowContainerButton/RowContainerButton.tsx",
        displayName: "RowContainerButton_component_button_onMouseOver",
        canonicalFilename: "s_cileajgsfty",
        hash: "cILeajGsfTY",
        ctxKind: "event",
        ctxName: "onMouseOver$",
        captures: !0,
        parent: "s_u9eai0bcwkU",
      },
      s_skxgNVWVOT8: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "Link_component_a_onMouseOver",
        canonicalFilename: "s_skxgnvwvot8",
        hash: "skxgNVWVOT8",
        ctxKind: "event",
        ctxName: "onMouseOver$",
        captures: !1,
        parent: "s_mYsiJcA4IBc",
      },
      s_xWuhqbKdd58: {
        origin: "components/User/UserHeader/UserHeader.tsx",
        displayName:
          "UserOptions_component_section_RowContainerButton_onMouseOver",
        canonicalFilename: "s_xwuhqbkdd58",
        hash: "xWuhqbKdd58",
        ctxKind: "event",
        ctxName: "onMouseOver$",
        captures: !0,
        parent: "s_1lAtNhGv5tw",
      },
      s_NHMQyYxu2Q8: {
        origin: "components/User/UserHeader/UserHeader.tsx",
        displayName:
          "UserOptions_component_section_RowContainerButton_onMouseOut",
        canonicalFilename: "s_nhmqyyxu2q8",
        hash: "NHMQyYxu2Q8",
        ctxKind: "event",
        ctxName: "onMouseOut$",
        captures: !0,
        parent: "s_1lAtNhGv5tw",
      },
      s_TWvkh8fQk0Y: {
        origin: "components/Global/RowContainerButton/RowContainerButton.tsx",
        displayName: "RowContainerButton_component_button_onMouseOut",
        canonicalFilename: "s_twvkh8fqk0y",
        hash: "TWvkh8fQk0Y",
        ctxKind: "event",
        ctxName: "onMouseOut$",
        captures: !0,
        parent: "s_u9eai0bcwkU",
      },
      s_0RsjTgIxIZg: {
        origin: "components/Header/SearchBar/SearchBar.tsx",
        displayName: "SearchBar_component_div_input_onInput",
        canonicalFilename: "s_0rsjtgixizg",
        hash: "0RsjTgIxIZg",
        ctxKind: "event",
        ctxName: "onInput$",
        captures: !0,
        parent: "s_20grO2k4B4o",
      },
      s_uVE5iM9H73c: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "Link_component_a_onQVisible",
        canonicalFilename: "s_uve5im9h73c",
        hash: "uVE5iM9H73c",
        ctxKind: "event",
        ctxName: "onQVisible$",
        captures: !1,
        parent: "s_mYsiJcA4IBc",
      },
      s_AaAlzKH0KlQ: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "QwikCity_component_useWatch",
        canonicalFilename: "s_aaalzkh0klq",
        hash: "AaAlzKH0KlQ",
        ctxKind: "function",
        ctxName: "useWatch$",
        captures: !0,
        parent: "s_z1nvHyEppoI",
      },
      s_1lAtNhGv5tw: {
        origin: "components/User/UserHeader/UserHeader.tsx",
        displayName: "UserOptions_component",
        canonicalFilename: "s_1latnhgv5tw",
        hash: "1lAtNhGv5tw",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_20grO2k4B4o: {
        origin: "components/Header/SearchBar/SearchBar.tsx",
        displayName: "SearchBar_component",
        canonicalFilename: "s_20gro2k4b4o",
        hash: "20grO2k4B4o",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_3sccYCDd1Z0: {
        origin: "root.tsx",
        displayName: "root_component",
        canonicalFilename: "s_3sccycdd1z0",
        hash: "3sccYCDd1Z0",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_7h1gcCLTeCo: {
        origin: "components/User/UserPhoto/UserPhoto.tsx",
        displayName: "UserPhoto_component",
        canonicalFilename: "s_7h1gcclteco",
        hash: "7h1gcCLTeCo",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_EBJpulrYXEc: {
        origin: "components/Header/Header.tsx",
        displayName: "Header_component",
        canonicalFilename: "s_ebjpulryxec",
        hash: "EBJpulrYXEc",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_H0u5ihy1ShA: {
        origin: "components/User/UserHeader/UserHeader.tsx",
        displayName: "UserOptionsItems_component",
        canonicalFilename: "s_h0u5ihy1sha",
        hash: "H0u5ihy1ShA",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_VkLNXphUh5s: {
        origin: "routes/layout.tsx",
        displayName: "layout_component",
        canonicalFilename: "s_vklnxphuh5s",
        hash: "VkLNXphUh5s",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_WdwZvKQuyD0: {
        origin: "components/User/UserHeader/UserHeader.tsx",
        displayName: "UserHeader_component",
        canonicalFilename: "s_wdwzvkquyd0",
        hash: "WdwZvKQuyD0",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_mYsiJcA4IBc: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "Link_component",
        canonicalFilename: "s_mysijca4ibc",
        hash: "mYsiJcA4IBc",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_nd8yk3KO22c: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "RouterOutlet_component",
        canonicalFilename: "s_nd8yk3ko22c",
        hash: "nd8yk3KO22c",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_u9eai0bcwkU: {
        origin: "components/Global/RowContainerButton/RowContainerButton.tsx",
        displayName: "RowContainerButton_component",
        canonicalFilename: "s_u9eai0bcwku",
        hash: "u9eai0bcwkU",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_xYL1qOwPyDI: {
        origin: "routes/index.tsx",
        displayName: "routes_component",
        canonicalFilename: "s_xyl1qowpydi",
        hash: "xYL1qOwPyDI",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_yas3JiLch2U: {
        origin: "components/Footer/Footer.tsx",
        displayName: "Footer_component",
        canonicalFilename: "s_yas3jilch2u",
        hash: "yas3JiLch2U",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_z1nvHyEppoI: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "QwikCity_component",
        canonicalFilename: "s_z1nvhyeppoi",
        hash: "z1nvHyEppoI",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_zrbrqoaqXSY: {
        origin: "components/router-head/router-head.tsx",
        displayName: "RouterHead_component",
        canonicalFilename: "s_zrbrqoaqxsy",
        hash: "zrbrqoaqXSY",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
      },
      s_gMeKULBNyJ0: {
        origin: "components/User/UserHeader/UserHeader.tsx",
        displayName: "UserHeader_component_useStyles",
        canonicalFilename: "s_gmekulbnyj0",
        hash: "gMeKULBNyJ0",
        ctxKind: "function",
        ctxName: "useStyles$",
        captures: !1,
        parent: "s_WdwZvKQuyD0",
      },
      s_hO3b5j0m2ZI: {
        origin: "root.tsx",
        displayName: "root_component_useStyles",
        canonicalFilename: "s_ho3b5j0m2zi",
        hash: "hO3b5j0m2ZI",
        ctxKind: "function",
        ctxName: "useStyles$",
        captures: !1,
        parent: "s_3sccYCDd1Z0",
      },
      s_l5OCHAfCC54: {
        origin: "components/User/UserHeader/UserHeader.tsx",
        displayName: "UserOptionsItems_component_useStyles",
        canonicalFilename: "s_l5ochafcc54",
        hash: "l5OCHAfCC54",
        ctxKind: "function",
        ctxName: "useStyles$",
        captures: !1,
        parent: "s_H0u5ihy1ShA",
      },
    },
    mapping: {
      s_I90vQVoVkQY: "q-a9c078f2.js",
      s_hA9UPaY8sNQ: "q-4a49c6b0.js",
      s_x2MOiRZTzOQ: "q-16969b5a.js",
      s_cILeajGsfTY: "q-16969b5a.js",
      s_skxgNVWVOT8: "q-4a49c6b0.js",
      s_xWuhqbKdd58: "q-a9c078f2.js",
      s_NHMQyYxu2Q8: "q-a9c078f2.js",
      s_TWvkh8fQk0Y: "q-16969b5a.js",
      s_0RsjTgIxIZg: "q-202fe52c.js",
      s_uVE5iM9H73c: "q-4a49c6b0.js",
      s_AaAlzKH0KlQ: "q-a5ad3ce4.js",
      s_1lAtNhGv5tw: "q-a9c078f2.js",
      s_20grO2k4B4o: "q-202fe52c.js",
      s_3sccYCDd1Z0: "q-fa42434a.js",
      s_7h1gcCLTeCo: "q-44f443da.js",
      s_EBJpulrYXEc: "q-b3932763.js",
      s_H0u5ihy1ShA: "q-66a3bc05.js",
      s_VkLNXphUh5s: "q-ca741582.js",
      s_WdwZvKQuyD0: "q-ecd63521.js",
      s_mYsiJcA4IBc: "q-4a49c6b0.js",
      s_nd8yk3KO22c: "q-c3caefa3.js",
      s_u9eai0bcwkU: "q-16969b5a.js",
      s_xYL1qOwPyDI: "q-c3798e24.js",
      s_yas3JiLch2U: "q-1f0957ca.js",
      s_z1nvHyEppoI: "q-a5ad3ce4.js",
      s_zrbrqoaqXSY: "q-839a78f7.js",
      s_gMeKULBNyJ0: "q-ecd63521.js",
      s_hO3b5j0m2ZI: "q-fa42434a.js",
      s_l5OCHAfCC54: "q-66a3bc05.js",
    },
    bundles: {
      "q-039c1220.js": {
        size: 37419,
        dynamicImports: ["q-fa42434a.js"],
        origins: [
          "\0vite/preload-helper",
          "node_modules/@builder.io/qwik/core.min.mjs",
          "src/root.js",
        ],
      },
      "q-10fa4114.js": {
        size: 2180,
        origins: [
          "node_modules/@builder.io/qwik-city/service-worker.mjs",
          "src/routes/service-worker.js",
        ],
      },
      "q-16969b5a.js": {
        size: 902,
        imports: ["q-039c1220.js"],
        origins: [
          "src/entry_RowContainerButton.js",
          "src/s_cileajgsfty.js",
          "src/s_twvkh8fqk0y.js",
          "src/s_u9eai0bcwku.js",
          "src/s_x2moirztzoq.js",
        ],
        symbols: [
          "s_cILeajGsfTY",
          "s_TWvkh8fQk0Y",
          "s_u9eai0bcwkU",
          "s_x2MOiRZTzOQ",
        ],
      },
      "q-1c2811a4.js": {
        size: 424,
        origins: ["src/components/User/UserHeader/styles.scss?used&inline"],
      },
      "q-1f0957ca.js": {
        size: 133,
        imports: ["q-039c1220.js"],
        origins: ["src/entry_Footer.js", "src/s_yas3jilch2u.js"],
        symbols: ["s_yas3JiLch2U"],
      },
      "q-202fe52c.js": {
        size: 872,
        imports: ["q-039c1220.js"],
        origins: [
          "src/entry_SearchBar.js",
          "src/s_0rsjtgixizg.js",
          "src/s_20gro2k4b4o.js",
        ],
        symbols: ["s_0RsjTgIxIZg", "s_20grO2k4B4o"],
      },
      "q-2f260a13.js": {
        size: 158,
        imports: ["q-039c1220.js"],
        dynamicImports: ["q-ca741582.js"],
        origins: ["src/routes/layout.js"],
      },
      "q-328eae85.js": {
        size: 152,
        imports: ["q-039c1220.js"],
        dynamicImports: ["q-44f443da.js"],
        origins: ["src/components/User/UserPhoto/UserPhoto.js"],
      },
      "q-44f443da.js": {
        size: 256,
        imports: ["q-039c1220.js"],
        origins: ["src/entry_UserPhoto.js", "src/s_7h1gcclteco.js"],
        symbols: ["s_7h1gcCLTeCo"],
      },
      "q-4a49c6b0.js": {
        size: 886,
        imports: ["q-039c1220.js", "q-fa42434a.js"],
        origins: [
          "src/entry_Link.js",
          "src/s_ha9upay8snq.js",
          "src/s_mysijca4ibc.js",
          "src/s_skxgnvwvot8.js",
          "src/s_uve5im9h73c.js",
        ],
        symbols: [
          "s_hA9UPaY8sNQ",
          "s_mYsiJcA4IBc",
          "s_skxgNVWVOT8",
          "s_uVE5iM9H73c",
        ],
      },
      "q-66a3bc05.js": {
        size: 467,
        imports: ["q-039c1220.js", "q-1c2811a4.js"],
        origins: [
          "src/entry_UserOptionsItems.js",
          "src/s_h0u5ihy1sha.js",
          "src/s_l5ochafcc54.js",
        ],
        symbols: ["s_H0u5ihy1ShA", "s_l5OCHAfCC54"],
      },
      "q-6870d48b.js": {
        size: 346,
        imports: ["q-039c1220.js"],
        dynamicImports: ["q-2f260a13.js", "q-70a8c513.js", "q-73509084.js"],
        origins: ["@qwik-city-plan"],
      },
      "q-70a8c513.js": {
        size: 196,
        imports: ["q-039c1220.js"],
        dynamicImports: ["q-c3798e24.js"],
        origins: ["src/routes/index.js"],
      },
      "q-73509084.js": {
        size: 128,
        imports: ["q-039c1220.js"],
        dynamicImports: ["q-10fa4114.js"],
        origins: ["@qwik-city-entries"],
      },
      "q-839a78f7.js": {
        size: 1313,
        imports: ["q-039c1220.js", "q-fa42434a.js"],
        origins: ["src/entry_RouterHead.js", "src/s_zrbrqoaqxsy.js"],
        symbols: ["s_zrbrqoaqXSY"],
      },
      "q-a5ad3ce4.js": {
        size: 1484,
        imports: ["q-039c1220.js", "q-fa42434a.js"],
        dynamicImports: ["q-6870d48b.js"],
        origins: [
          "@builder.io/qwik/build",
          "src/entry_QwikCity.js",
          "src/s_aaalzkh0klq.js",
          "src/s_z1nvhyeppoi.js",
        ],
        symbols: ["s_AaAlzKH0KlQ", "s_z1nvHyEppoI"],
      },
      "q-a9c078f2.js": {
        size: 2133,
        imports: ["q-039c1220.js", "q-328eae85.js", "q-b3932763.js"],
        dynamicImports: ["q-16969b5a.js"],
        origins: [
          "src/components/Global/RowContainerButton/RowContainerButton.js",
          "src/entry_UserOptions.js",
          "src/s_1latnhgv5tw.js",
          "src/s_i90vqvovkqy.js",
          "src/s_nhmqyyxu2q8.js",
          "src/s_xwuhqbkdd58.js",
        ],
        symbols: [
          "s_1lAtNhGv5tw",
          "s_I90vQVoVkQY",
          "s_NHMQyYxu2Q8",
          "s_xWuhqbKdd58",
        ],
      },
      "q-b3932763.js": {
        size: 715,
        imports: ["q-039c1220.js"],
        dynamicImports: [
          "q-202fe52c.js",
          "q-66a3bc05.js",
          "q-a9c078f2.js",
          "q-ecd63521.js",
        ],
        origins: [
          "src/components/Header/SearchBar/SearchBar.js",
          "src/components/User/UserHeader/UserHeader.js",
          "src/entry_Header.js",
          "src/s_ebjpulryxec.js",
        ],
        symbols: ["s_EBJpulrYXEc"],
      },
      "q-c3798e24.js": {
        size: 183,
        imports: ["q-039c1220.js"],
        origins: ["src/entry_routes.js", "src/s_xyl1qowpydi.js"],
        symbols: ["s_xYL1qOwPyDI"],
      },
      "q-c3caefa3.js": {
        size: 269,
        imports: ["q-039c1220.js", "q-fa42434a.js"],
        origins: ["src/entry_RouterOutlet.js", "src/s_nd8yk3ko22c.js"],
        symbols: ["s_nd8yk3KO22c"],
      },
      "q-ca741582.js": {
        size: 326,
        imports: ["q-039c1220.js"],
        dynamicImports: ["q-1f0957ca.js", "q-b3932763.js"],
        origins: [
          "src/components/Footer/Footer.js",
          "src/components/Header/Header.js",
          "src/entry_layout.js",
          "src/s_vklnxphuh5s.js",
        ],
        symbols: ["s_VkLNXphUh5s"],
      },
      "q-d04b7f2e.js": { size: 58, imports: ["q-039c1220.js"] },
      "q-ecd63521.js": {
        size: 1063,
        imports: [
          "q-039c1220.js",
          "q-1c2811a4.js",
          "q-328eae85.js",
          "q-b3932763.js",
        ],
        origins: [
          "src/entry_UserHeader.js",
          "src/s_gmekulbnyj0.js",
          "src/s_wdwzvkquyd0.js",
        ],
        symbols: ["s_gMeKULBNyJ0", "s_WdwZvKQuyD0"],
      },
      "q-fa42434a.js": {
        size: 12137,
        imports: ["q-039c1220.js"],
        dynamicImports: [
          "q-4a49c6b0.js",
          "q-6870d48b.js",
          "q-839a78f7.js",
          "q-a5ad3ce4.js",
          "q-c3caefa3.js",
        ],
        origins: [
          "node_modules/@builder.io/qwik-city/index.qwik.mjs",
          "src/components/router-head/router-head.js",
          "src/entry_root.js",
          "src/s_3sccycdd1z0.js",
          "src/s_ho3b5j0m2zi.js",
          "src/styles/_index.scss?used",
        ],
        symbols: ["s_3sccYCDd1Z0", "s_hO3b5j0m2ZI"],
      },
    },
    injections: [
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-cbc2dbb6.css" },
      },
    ],
    version: "1",
    options: {
      target: "client",
      buildMode: "production",
      forceFullBuild: !0,
      entryStrategy: { type: "smart" },
    },
    platform: {
      qwik: "0.10.0",
      vite: "",
      rollup: "2.78.1",
      env: "node",
      os: "linux",
      node: "16.17.1",
    },
  },
  Lc = !0,
  Ac = !1,
  Pc = be("qc-c"),
  _r = be("qc-ic"),
  qr = be("qc-h"),
  kr = be("qc-l"),
  xr = be("qc-n"),
  Mc = C(
    S(() => {
      const { contents: e } = mt(_r);
      if (e && e.length > 0) {
        const t = e.length;
        let n = null;
        for (let s = t - 1; s >= 0; s--) n = w(e[s].default, { children: n });
        return n;
      }
      return rn;
    }, "RouterOutlet_component_nd8yk3KO22c")
  ),
  ns = new WeakMap(),
  zc = async (e, t, n, s) => {
    if (Array.isArray(e))
      for (const r of e) {
        const o = r[0].exec(s);
        if (o) {
          const i = r[1],
            c = Hc(r[2], o),
            a = r[4],
            l = new Array(i.length),
            u = [],
            f = Uc(t, s);
          let d;
          return (
            i.forEach(($, y) => {
              ss($, u, (m) => (l[y] = m), n);
            }),
            ss(f, u, ($) => (d = $ == null ? void 0 : $.default), n),
            u.length > 0 && (await Promise.all(u)),
            [c, l, d, a]
          );
        }
      }
    return null;
  },
  ss = (e, t, n, s) => {
    if (typeof e == "function") {
      const r = ns.get(e);
      if (r) n(r);
      else {
        const o = e();
        typeof o.then == "function"
          ? t.push(
              o.then((i) => {
                s !== !1 && ns.set(e, i), n(i);
              })
            )
          : o && n(o);
      }
    }
  },
  Uc = (e, t) => {
    if (e) {
      const n = e.find(
        (s) => s[0] === t || t.startsWith(s[0] + (t.endsWith("/") ? "" : "/"))
      );
      if (n) return n[1];
    }
  },
  Hc = (e, t) => {
    const n = {};
    if (e) for (let s = 0; s < e.length; s++) n[e[s]] = t ? t[s + 1] : "";
    return n;
  },
  Dc = (e, t, n) => {
    const s = Sr(),
      r = { data: e ? e.body : null, head: s, ...t };
    for (let o = n.length - 1; o >= 0; o--) {
      const i = n[o] && n[o].head;
      i &&
        (typeof i == "function"
          ? rs(s, i(r))
          : typeof i == "object" && rs(s, i));
    }
    return r.head;
  },
  rs = (e, t) => {
    typeof t.title == "string" && (e.title = t.title),
      Tt(e.meta, t.meta),
      Tt(e.links, t.links),
      Tt(e.styles, t.styles);
  },
  Tt = (e, t) => {
    if (Array.isArray(t))
      for (const n of t) {
        if (typeof n.key == "string") {
          const s = e.findIndex((r) => r.key === n.key);
          if (s > -1) {
            e[s] = n;
            continue;
          }
        }
        e.push(n);
      }
  },
  Sr = () => ({ title: "", meta: [], links: [], styles: [] }),
  Qc = () => mt(qr),
  Er = () => mt(kr),
  Bc = () => mt(xr),
  Wc = () => bt(ir("qwikcity")),
  at = (e) => e.pathname + e.search + e.hash,
  ge = (e, t) => new URL(e, t.href),
  Ir = (e, t) => e.origin === t.origin,
  Nr = (e, t) => e.pathname + e.search === t.pathname + t.search,
  Fc = (e, t) => e.pathname === t.pathname,
  os = (e, t) => Ir(e, t) && !Nr(e, t),
  Kc = (e) => e + (e.endsWith("/") ? "" : "/") + "q-data.json",
  Vc = (e, t) => {
    const n = e.href;
    if (typeof n == "string" && n.trim() !== "" && typeof e.target != "string")
      try {
        const s = ge(n, t),
          r = ge("", t);
        if (Ir(s, r)) return at(s);
      } catch (s) {
        console.error(s);
      }
    return null;
  },
  Yc = (e, t, n) => {
    if (e.prefetch && t) {
      const s = ge(t, n);
      if (!Fc(s, ge("", n))) return s + "";
    }
    return null;
  },
  Jc = (e, t) => {
    const n = e.location,
      s = ge(t.path, n);
    os(n, s) && (is(e, n, s), e.history.pushState("", "", at(s))),
      e[ls] ||
        ((e[ls] = 1),
        e.addEventListener("popstate", () => {
          const r = e.location,
            o = ge(t.path, r);
          os(r, o) && (is(e, o, r), (t.path = at(r)));
        }));
  },
  is = async (e, t, n) => {
    const s = e.document,
      r = n.hash;
    if (Nr(t, n)) t.hash !== r && (await Rt(), r ? cs(s, r) : e.scrollTo(0, 0));
    else if (r) for (let o = 0; o < 24 && (await Rt(), !cs(s, r)); o++);
    else await Rt(), e.scrollTo(0, 0);
  },
  Rt = () => new Promise((e) => setTimeout(e, 12)),
  cs = (e, t) => {
    const n = t.slice(1),
      s = e.getElementById(n);
    return s && s.scrollIntoView(), s;
  },
  as = (e) => dispatchEvent(new CustomEvent("qprefetch", { detail: e })),
  ls = Symbol(),
  jr = async (e) => {
    const { cacheModules: t } = await Promise.resolve().then(() => fr),
      n = new URL(e).pathname,
      s = Kc(n),
      r = Date.now(),
      o = t ? 6e5 : 15e3,
      i = $e.findIndex((a) => a.u === s);
    let c = $e[i];
    if ((as({ links: [n] }), !c || c.t + o < r)) {
      c = {
        u: s,
        t: r,
        c: new Promise((a) => {
          fetch(s).then(
            (l) => {
              const u = l.headers.get("content-type") || "";
              l.ok && u.includes("json")
                ? l.json().then(
                    (f) => {
                      as({ bundles: f.prefetch, links: [n] }), a(f);
                    },
                    () => a(null)
                  )
                : a(null);
            },
            () => a(null)
          );
        }),
      };
      for (let a = $e.length - 1; a >= 0; a--)
        $e[a].t + o < r && $e.splice(a, 1);
      $e.push(c);
    }
    return c.c.catch((a) => console.error(a)), c.c;
  },
  $e = [],
  Zc = C(
    S(() => {
      const e = Wc();
      if (!(e != null && e.params))
        throw new Error("Missing Qwik City Env Data");
      const t = ir("url");
      if (!t) throw new Error("Missing Qwik URL Env Data");
      const n = new URL(t),
        s = ue({
          href: n.href,
          pathname: n.pathname,
          query: Object.fromEntries(n.searchParams.entries()),
          params: e.params,
        }),
        r = ue({ path: at(n) }),
        o = ue(Sr),
        i = ue({ headings: void 0, menu: void 0 }),
        c = ue({ contents: void 0 });
      return (
        xe(Pc, i),
        xe(_r, c),
        xe(qr, o),
        xe(kr, s),
        xe(xr, r),
        Oo(
          S(
            async ({ track: a }) => {
              const [l, u, f, d, $, y] = Q(),
                {
                  routes: m,
                  menus: b,
                  cacheModules: p,
                } = await Promise.resolve().then(() => fr),
                h = a(y, "path"),
                v = new URL(h, $.href),
                g = v.pathname,
                q = zc(m, b, p, g),
                x = Lc ? d.response : jr(v.href),
                _ = await q;
              if (_) {
                const [k, T, H] = _,
                  R = T,
                  j = R[R.length - 1];
                ($.href = v.href),
                  ($.pathname = g),
                  ($.params = { ...k }),
                  ($.query = Object.fromEntries(v.searchParams.entries())),
                  (l.headings = j.headings),
                  (l.menu = H),
                  (u.contents = bt(R));
                const ce = await x,
                  Y = Dc(ce, $, R);
                (f.links = Y.links),
                  (f.meta = Y.meta),
                  (f.styles = Y.styles),
                  (f.title = Y.title),
                  Ac && Jc(window, y);
              }
            },
            "QwikCity_component_useWatch_AaAlzKH0KlQ",
            [i, c, o, e, s, r]
          )
        ),
        w(ke, {})
      );
    }, "QwikCity_component_z1nvHyEppoI")
  );
S((e) => {
  const t = Bc(),
    n = Er(),
    s = e.href,
    r = { ...e },
    o = Vc(r, n),
    i = Yc(e, o, n);
  return (
    (r["preventdefault:click"] = !!o),
    (r.href = o || s),
    w("a", {
      ...r,
      onClick$: S(
        () => {
          const [c, a, l] = Q();
          c && (l.path = a.href);
        },
        "Link_component_a_onClick_hA9UPaY8sNQ",
        [o, r, t]
      ),
      "data-prefetch": i,
      onMouseOver$: S(
        (c, a) => us(a),
        "Link_component_a_onMouseOver_skxgNVWVOT8"
      ),
      onQVisible$: S(
        (c, a) => us(a, !0),
        "Link_component_a_onQVisible_uVE5iM9H73c"
      ),
      children: w(ke, {}),
    })
  );
}, "Link_component_mYsiJcA4IBc");
const us = (e, t) => {
  var s;
  const n = (s = e == null ? void 0 : e.dataset) == null ? void 0 : s.prefetch;
  n && (Ct || (Ct = window.innerWidth), (!t || (t && Ct < 520)) && jr(n));
};
let Ct = 0;
const Gc =
    '((s,a,r,i)=>{r=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{i=()=>{a=e,r({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&i()}):e.active&&i()}).catch(e=>console.error(e))})([])',
  Xc = () => w("script", { dangerouslySetInnerHTML: Gc }),
  ea = C(
    S(() => {
      const e = Qc(),
        t = Er();
      return w(we, {
        children: [
          w("title", { children: le(e, "title") }),
          w("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          w("link", {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          }),
          w("link", {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "",
          }),
          w("link", {
            rel: "canonical",
            get href() {
              return t.href;
            },
            [N]: { href: le(t, "href") },
          }),
          w("link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }),
          w("link", {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
          }),
          w("link", {
            href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
            rel: "stylesheet",
          }),
          w("meta", {
            property: "og:site_name",
            get content() {
              return e.title;
            },
            [N]: { content: le(e, "title") },
          }),
          w("meta", {
            name: "twitter:site",
            get content() {
              return e.title;
            },
            [N]: { content: le(e, "title") },
          }),
          w("meta", {
            name: "twitter:title",
            get content() {
              return e.title;
            },
            [N]: { content: le(e, "title") },
          }),
          e.meta.map((n) => w("meta", { ...n })),
          e.links.map((n) => w("link", { ...n })),
          e.styles.map((n) =>
            w("style", {
              ...n.props,
              get dangerouslySetInnerHTML() {
                return n.style;
              },
              [N]: { dangerouslySetInnerHTML: le(n, "style") },
            })
          ),
        ],
      });
    }, "s_zrbrqoaqXSY")
  ),
  ta = `*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.top-full{top:100%}.right-0{right:0}.right-5{right:1.25rem}.top-14{top:3.5rem}.col-start-2{grid-column-start:2}.row-span-2{grid-row:span 2/span 2}.mx-4{margin-left:1rem;margin-right:1rem}.my-1{margin-bottom:.25rem;margin-top:.25rem}.ml-auto{margin-left:auto}.mr-5{margin-right:1.25rem}.inline{display:inline}.flex{display:flex}.grid{display:grid}.aspect-square{aspect-ratio:1/1}.h-screen{height:100vh}.h-full{height:100%}.flex-1{flex:1 1 0%}.scale-75{--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.grid-cols-\\[1fr_2fr_1fr\\]{grid-template-columns:1fr 2fr 1fr}.grid-rows-\\[auto_1fr_auto\\]{grid-template-rows:auto 1fr auto}.place-items-center{align-items:center;justify-items:center;place-items:center}.items-center{align-items:center}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-2{gap:.5rem}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-solid{border-style:solid}.border-surface-600{--tw-border-opacity:1;border-color:hsla(215,10%,25%,var(--tw-border-opacity))}.border-surface-700{--tw-border-opacity:1;border-color:hsla(215,10%,18%,var(--tw-border-opacity))}.bg-surface-800{--tw-bg-opacity:1;background-color:hsla(215,10%,12%,var(--tw-bg-opacity))}.bg-surface-950{--tw-bg-opacity:1;background-color:hsla(215,10%,5%,var(--tw-bg-opacity))}.bg-surface-900{--tw-bg-opacity:1;background-color:hsla(215,10%,10%,var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.object-cover{-o-object-fit:cover;object-fit:cover}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.pt-4{padding-top:1rem}.font-roboto{font-family:Roboto,sans-serif}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-surface-100{--tw-text-opacity:1;color:hsla(215,10%,90%,var(--tw-text-opacity))}.text-surface-200{--tw-text-opacity:1;color:hsla(215,10%,80%,var(--tw-text-opacity))}.text-surface-400{--tw-text-opacity:1;color:hsla(215,10%,48%,var(--tw-text-opacity))}.text-surface-300{--tw-text-opacity:1;color:hsla(215,10%,63%,var(--tw-text-opacity))}.opacity-0{opacity:0}.delay-75{transition-delay:75ms}:where(*,:before,:after){box-sizing:border-box}:where(html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video){border:0;color:inherit;font:inherit;line-height:calc(4px + 2ex);margin:0;padding:0}:where(html){scroll-behavior:smooth}:where(body){text-rendering:optimizeSpeed;width:100%}:where(ol,ul){list-style:none}:where(blockquote,q){quotes:none}:where(blockquote,q):after,:where(blockquote,q):before{content:""}:where(table){border-collapse:collapse;border-spacing:0}a:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}:where(img,picture){display:block;max-width:100%}:where(.focus-visible){outline:2px dashed currentColor}:where(:focus-visible){outline:2px dashed currentColor}:where(:focus){outline:none}:where(::-moz-placeholder){color:inherit;opacity:.5}:where(::placeholder){color:inherit;opacity:.5}:where(button,input,textarea,select){border:0;color:inherit;font:inherit}:where(input)::-webkit-search-cancel-button{-webkit-appearance:none;display:none;opacity:0;pointer-events:none}:where(button){background-color:transparent;border:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}:where(a){color:inherit;text-decoration:none}:where(a,button){cursor:pointer}@media (--motionNotOK){html[focus-within]{scroll-behavior:auto}html:focus-within{scroll-behavior:auto}*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}[class*=before-ball]:before{background-color:#34d399;background-color:var(--bg-color_,#34d399);border-radius:9999px;content:"";height:.75rem;height:var(--size_,.75rem);outline:3px solid #111827;outline:var(--outline-width_,3px) solid var(--border-color_,#111827);outline-offset:-2px;width:.75rem;width:var(--size_,.75rem)}.before-ball--notification:before{left:100%;position:absolute;top:100%;transform:translate(-80%,-80%)}.before-ball--empty:before{--outline-width_:0;--size_:.5rem}.hover\\:border-surface-400:hover{--tw-border-opacity:1;border-color:hsla(215,10%,48%,var(--tw-border-opacity))}.hover\\:text-surface-300:hover{--tw-text-opacity:1;color:hsla(215,10%,63%,var(--tw-text-opacity))}.hover\\:brightness-110:hover{--tw-brightness:brightness(1.1);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.\\[\\&\\>p\\]\\:hover\\:opacity-100:hover>p{opacity:1}.\\[\\&\\>p\\]\\:hover\\:delay-700:hover>p{transition-delay:.7s}
`,
  na = C(
    S(
      () => (
        bn(S(ta, "s_hO3b5j0m2ZI")),
        w(Zc, {
          children: [
            w("head", {
              children: [w("meta", { charSet: "utf-8" }), w(ea, {})],
            }),
            w("body", {
              lang: "en",
              class:
                "grid h-screen grid-rows-[auto_1fr_auto] bg-surface-800 font-roboto text-surface-100",
              children: [w(Mc, {}), w(Xc, {})],
            }),
          ],
        })
      ),
      "s_3sccYCDd1Z0"
    )
  );
var sa = Object.defineProperty,
  ra = Object.defineProperties,
  oa = Object.getOwnPropertyDescriptors,
  ds = Object.getOwnPropertySymbols,
  ia = Object.prototype.hasOwnProperty,
  ca = Object.prototype.propertyIsEnumerable,
  ps = (e, t, n) =>
    t in e
      ? sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  aa = (e, t) => {
    for (var n in t || (t = {})) ia.call(t, n) && ps(e, n, t[n]);
    if (ds) for (var n of ds(t)) ca.call(t, n) && ps(e, n, t[n]);
    return e;
  },
  la = (e, t) => ra(e, oa(t));
function ua(e) {
  return jc(
    w(na, {}),
    la(aa({ manifest: Cc }, e), {
      prefetchStrategy: {
        implementation: {
          linkInsert: null,
          workerFetchInsert: null,
          prefetchEvent: "always",
        },
      },
    })
  );
}
const da = cc(ua);
export { da as default };
