(function(h, g, c, j, d, l, k) {/* ! Jssor */
	new (function() {
	});
	var e = {
		ed : function(a) {
			return -c.cos(a * c.PI) / 2 + .5
		},
		dd : function(a) {
			return a
		},
		qg : function(a) {
			return a * a
		},
		cd : function(a) {
			return -a * (a - 2)
		},
		og : function(a) {
			return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
		},
		mg : function(a) {
			return a * a * a
		},
		lg : function(a) {
			return (a -= 1) * a * a + 1
		},
		gg : function(a) {
			return (a *= 2) < 1 ? 1 / 2 * a * a * a
					: 1 / 2 * ((a -= 2) * a * a + 2)
		},
		ag : function(a) {
			return a * a * a * a
		},
		tg : function(a) {
			return -((a -= 1) * a * a * a - 1)
		},
		jg : function(a) {
			return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2
					* ((a -= 2) * a * a * a - 2)
		},
		dg : function(a) {
			return a * a * a * a * a
		},
		eg : function(a) {
			return (a -= 1) * a * a * a * a + 1
		},
		ig : function(a) {
			return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2)
					* a * a * a * a + 2)
		},
		kg : function(a) {
			return 1 - c.cos(a * c.PI / 2)
		},
		sg : function(a) {
			return c.sin(a * c.PI / 2)
		},
		Xf : function(a) {
			return -1 / 2 * (c.cos(c.PI * a) - 1)
		},
		Bf : function(a) {
			return a == 0 ? 0 : c.pow(2, 10 * (a - 1))
		},
		Te : function(a) {
			return a == 1 ? 1 : -c.pow(2, -10 * a) + 1
		},
		Qe : function(a) {
			return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2,
					10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2)
		},
		Ne : function(a) {
			return -(c.sqrt(1 - a * a) - 1)
		},
		kf : function(a) {
			return c.sqrt(1 - (a -= 1) * a)
		},
		ef : function(a) {
			return (a *= 2) < 1 ? -1 / 2 * (c.sqrt(1 - a * a) - 1) : 1 / 2 * (c
					.sqrt(1 - (a -= 2) * a) + 1)
		},
		df : function(a) {
			if (!a || a == 1)
				return a;
			var b = .3, d = .075;
			return -(c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b))
		},
		Zf : function(a) {
			if (!a || a == 1)
				return a;
			var b = .3, d = .075;
			return c.pow(2, -10 * a) * c.sin((a - d) * 2 * c.PI / b) + 1
		},
		Af : function(a) {
			if (!a || a == 1)
				return a;
			var b = .45, d = .1125;
			return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1))
					* c.sin((a - d) * 2 * c.PI / b) : c.pow(2, -10 * (a -= 1))
					* c.sin((a - d) * 2 * c.PI / b) * .5 + 1
		},
		Ye : function(a) {
			var b = 1.70158;
			return a * a * ((b + 1) * a - b)
		},
		Ze : function(a) {
			var b = 1.70158;
			return (a -= 1) * a * ((b + 1) * a + b) + 1
		},
		af : function(a) {
			var b = 1.70158;
			return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b)
					: 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
		},
		Yc : function(a) {
			return 1 - e.gc(1 - a)
		},
		gc : function(a) {
			return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625
					* (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625
					* (a -= 2.25 / 2.75) * a + .9375 : 7.5625
					* (a -= 2.625 / 2.75) * a + .984375
		},
		bf : function(a) {
			return a < 1 / 2 ? e.Yc(a * 2) * .5 : e.gc(a * 2 - 1) * .5 + .5
		},
		cf : function() {
			return 1 - c.abs(1)
		},
		ff : function(a) {
			return 1 - c.cos(a * c.PI * 2)
		},
		gf : function(a) {
			return c.sin(a * c.PI * 2)
		},
		hf : function(a) {
			return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
		},
		jf : function(a) {
			return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
		}
	}, f = {
		mf : e.ed,
		zf : e.dd,
		nf : e.qg,
		of : e.cd,
		pf : e.og,
		qf : e.mg,
		rf : e.lg,
		sf : e.gg,
		tf : e.ag,
		uf : e.tg,
		vf : e.jg,
		wf : e.dg,
		Qc : e.eg,
		xf : e.ig,
		yf : e.kg,
		Xe : e.sg,
		We : e.Xf,
		Ve : e.Bf,
		Ue : e.Te,
		ve : e.Qe,
		we : e.Ne,
		xe : e.kf,
		ye : e.ef,
		ze : e.df,
		Ae : e.Zf,
		Be : e.Af,
		Ce : e.Ye,
		ue : e.Ze,
		Ee : e.af,
		Fe : e.Yc,
		Ge : e.gc,
		He : e.bf,
		Ie : e.cf,
		Je : e.ff,
		Ke : e.gf,
		Le : e.hf,
		Me : e.jf
	};
	var b = new function() {
		var f = this, Bb = /\S+/g, G = 1, db = 2, hb = 3, gb = 4, lb = 5, H, r = 0, i = 0, s = 0, W = 0, z = 0, J = navigator, pb = J.appName, o = J.userAgent, p = parseFloat;
		function zb() {
			if (!H) {
				H = {
					bg : "ontouchstart" in h || "createTouch" in g
				};
				var a;
				if (J.pointerEnabled || (a = J.msPointerEnabled))
					H.md = a ? "msTouchAction" : "touchAction"
			}
			return H
		}
		function v(j) {
			if (!r) {
				r = -1;
				if (pb == "Microsoft Internet Explorer" && !!h.attachEvent
						&& !!h.ActiveXObject) {
					var e = o.indexOf("MSIE");
					r = G;
					s = p(o.substring(e + 5, o.indexOf(";", e)));/*
																	 * @cc_on
																	 * W=@_jscript_version@
																	 */
					;
					i = g.documentMode || s
				} else if (pb == "Netscape" && !!h.addEventListener) {
					var d = o.indexOf("Firefox"), b = o.indexOf("Safari"), f = o
							.indexOf("Chrome"), c = o.indexOf("AppleWebKit");
					if (d >= 0) {
						r = db;
						i = p(o.substring(d + 8))
					} else if (b >= 0) {
						var k = o.substring(0, b).lastIndexOf("/");
						r = f >= 0 ? gb : hb;
						i = p(o.substring(k + 1, b))
					} else {
						var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
						if (a) {
							r = G;
							i = s = p(a[1])
						}
					}
					if (c >= 0)
						z = p(o.substring(c + 12))
				} else {
					var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
					if (a) {
						r = lb;
						i = p(a[2])
					}
				}
			}
			return j == r
		}
		function q() {
			return v(G)
		}
		function R() {
			return q() && (i < 6 || g.compatMode == "BackCompat")
		}
		function fb() {
			return v(hb)
		}
		function kb() {
			return v(lb)
		}
		function wb() {
			return fb() && z > 534 && z < 535
		}
		function K() {
			v();
			return z > 537 || i > 42 || r == G && i >= 11
		}
		function P() {
			return q() && i < 9
		}
		function xb(a) {
			var b, c;
			return function(f) {
				if (!b) {
					b = d;
					var e = a.substr(0, 1).toUpperCase() + a.substr(1);
					n([ a ].concat([ "WebKit", "ms", "Moz", "O", "webkit" ]),
							function(g, d) {
								var b = a;
								if (d)
									b = g + e;
								if (f.style[b] != k)
									return c = b
							})
				}
				return c
			}
		}
		function vb(b) {
			var a;
			return function(c) {
				a = a || xb(b)(c) || b;
				return a
			}
		}
		var L = vb("transform");
		function ob(a) {
			return {}.toString.call(a)
		}
		var F;
		function Hb() {
			if (!F) {
				F = {};
				n([ "Boolean", "Number", "String", "Function", "Array", "Date",
						"RegExp", "Object" ], function(a) {
					F["[object " + a + "]"] = a.toLowerCase()
				})
			}
			return F
		}
		function n(b, d) {
			var a, c;
			if (ob(b) == "[object Array]") {
				for (a = 0; a < b.length; a++)
					if (c = d(b[a], a, b))
						return c
			} else
				for (a in b)
					if (c = d(b[a], a, b))
						return c
		}
		function C(a) {
			return a == j ? String(a) : Hb()[ob(a)] || "object"
		}
		function mb(a) {
			for ( var b in a)
				return d
		}
		function A(a) {
			try {
				return C(a) == "object"
						&& !a.nodeType
						&& a != a.window
						&& (!a.constructor || {}.hasOwnProperty.call(
								a.constructor.prototype, "isPrototypeOf"))
			} catch (b) {
			}
		}
		function u(a, b) {
			return {
				x : a,
				y : b
			}
		}
		function sb(b, a) {
			setTimeout(b, a || 0)
		}
		function I(b, d, c) {
			var a = !b || b == "inherit" ? "" : b;
			n(d, function(c) {
				var b = c.exec(a);
				if (b) {
					var d = a.substr(0, b.index), e = a.substr(b.index
							+ b[0].length + 1, a.length - 1);
					a = d + e
				}
			});
			a = c + (!a.indexOf(" ") ? "" : " ") + a;
			return a
		}
		function ub(b, a) {
			if (i < 9)
				b.style.filter = a
		}
		f.cg = zb;
		f.sd = q;
		f.hg = fb;
		f.ng = K;
		f.Nc = P;
		xb("transform");
		f.uc = function() {
			return i
		};
		f.vc = sb;
		function Z(a) {
			a.constructor === Z.caller && a.Mc
					&& a.Mc.apply(a, Z.caller.arguments)
		}
		f.Mc = Z;
		f.pb = function(a) {
			if (f.Yf(a))
				a = g.getElementById(a);
			return a
		};
		function t(a) {
			return a || h.event
		}
		f.yc = t;
		f.Yb = function(b) {
			b = t(b);
			var a = b.target || b.srcElement || g;
			if (a.nodeType == 3)
				a = f.zc(a);
			return a
		};
		f.Bc = function(a) {
			a = t(a);
			return {
				x : a.pageX || a.clientX || 0,
				y : a.pageY || a.clientY || 0
			}
		};
		function D(c, d, a) {
			if (a !== k)
				c.style[d] = a == k ? "" : a;
			else {
				var b = c.currentStyle || c.style;
				a = b[d];
				if (a == "" && h.getComputedStyle) {
					b = c.ownerDocument.defaultView.getComputedStyle(c, j);
					b && (a = b.getPropertyValue(d) || b[d])
				}
				return a
			}
		}
		function bb(b, c, a, d) {
			if (a !== k) {
				if (a == j)
					a = "";
				else
					d && (a += "px");
				D(b, c, a)
			} else
				return p(D(b, c))
		}
		function m(c, a) {
			var d = a ? bb : D, b;
			if (a & 4)
				b = vb(c);
			return function(e, f) {
				return d(e, b ? b(e) : c, f, a & 2)
			}
		}
		function Eb(b) {
			if (q() && s < 9) {
				var a = /opacity=([^)]*)/.exec(b.style.filter || "");
				return a ? p(a[1]) / 100 : 1
			} else
				return p(b.style.opacity || "1")
		}
		function Gb(b, a, f) {
			if (q() && s < 9) {
				var h = b.style.filter || "", i = new RegExp(
						/[\s]*alpha\([^\)]*\)/g), e = c.round(100 * a), d = "";
				if (e < 100 || f)
					d = "alpha(opacity=" + e + ") ";
				var g = I(h, [ i ], d);
				ub(b, g)
			} else
				b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
		}
		var M = {
			ab : [ "rotate" ],
			L : [ "rotateX" ],
			N : [ "rotateY" ],
			Hb : [ "skewX" ],
			Bb : [ "skewY" ]
		};
		if (!K())
			M = B(M, {
				q : [ "scaleX", 2 ],
				p : [ "scaleY", 2 ],
				U : [ "translateZ", 1 ]
			});
		function N(d, a) {
			var c = "";
			if (a) {
				if (q() && i && i < 10) {
					delete a.L;
					delete a.N;
					delete a.U
				}
				b.g(a, function(d, b) {
					var a = M[b];
					if (a) {
						var e = a[1] || 0;
						if (O[b] != d)
							c += " " + a[0] + "(" + d
									+ ([ "deg", "px", "" ])[e] + ")"
					}
				});
				if (K()) {
					if (a.cb || a.bb || a.U)
						c += " translate3d(" + (a.cb || 0) + "px,"
								+ (a.bb || 0) + "px," + (a.U || 0) + "px)";
					if (a.q == k)
						a.q = 1;
					if (a.p == k)
						a.p = 1;
					if (a.q != 1 || a.p != 1)
						c += " scale3d(" + a.q + ", " + a.p + ", 1)"
				}
			}
			d.style[L(d)] = c
		}
		f.Cc = m("transformOrigin", 4);
		f.Df = m("backfaceVisibility", 4);
		f.Ef = m("transformStyle", 4);
		f.Ff = m("perspective", 6);
		f.Gf = m("perspectiveOrigin", 4);
		f.Hf = function(a, b) {
			if (q() && s < 9 || s < 10 && R())
				a.style.zoom = b == 1 ? "" : b;
			else {
				var c = L(a), f = "scale(" + b + ")", e = a.style[c], g = new RegExp(
						/[\s]*scale\(.*?\)/g), d = I(e, [ g ], f);
				a.style[c] = d
			}
		};
		f.dc = function(b, a) {
			return function(c) {
				c = t(c);
				var e = c.type, d = c.relatedTarget
						|| (e == "mouseout" ? c.toElement : c.fromElement);
				(!d || d !== a && !f.If(a, d)) && b(c)
			}
		};
		f.a = function(a, d, b, c) {
			a = f.pb(a);
			if (a.addEventListener) {
				d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
				a.addEventListener(d, b, c)
			} else if (a.attachEvent) {
				a.attachEvent("on" + d, b);
				c && a.setCapture && a.setCapture()
			}
		};
		f.H = function(a, c, d, b) {
			a = f.pb(a);
			if (a.removeEventListener) {
				c == "mousewheel"
						&& a.removeEventListener("DOMMouseScroll", d, b);
				a.removeEventListener(c, d, b)
			} else if (a.detachEvent) {
				a.detachEvent("on" + c, d);
				b && a.releaseCapture && a.releaseCapture()
			}
		};
		f.Gb = function(a) {
			a = t(a);
			a.preventDefault && a.preventDefault();
			a.cancel = d;
			a.returnValue = l
		};
		f.Jf = function(a) {
			a = t(a);
			a.stopPropagation && a.stopPropagation();
			a.cancelBubble = d
		};
		f.F = function(d, c) {
			var a = [].slice.call(arguments, 2), b = function() {
				var b = a.concat([].slice.call(arguments, 0));
				return c.apply(d, b)
			};
			return b
		};
		f.Kf = function(a, b) {
			if (b == k)
				return a.textContent || a.innerText;
			var c = g.createTextNode(b);
			f.bc(a);
			a.appendChild(c)
		};
		f.sb = function(d, c) {
			for (var b = [], a = d.firstChild; a; a = a.nextSibling)
				(c || a.nodeType == 1) && b.push(a);
			return b
		};
		function nb(a, c, e, b) {
			b = b || "u";
			for (a = a ? a.firstChild : j; a; a = a.nextSibling)
				if (a.nodeType == 1) {
					if (V(a, b) == c)
						return a;
					if (!e) {
						var d = nb(a, c, e, b);
						if (d)
							return d
					}
				}
		}
		f.C = nb;
		function T(a, d, f, b) {
			b = b || "u";
			var c = [];
			for (a = a ? a.firstChild : j; a; a = a.nextSibling)
				if (a.nodeType == 1) {
					V(a, b) == d && c.push(a);
					if (!f) {
						var e = T(a, d, f, b);
						if (e.length)
							c = c.concat(e)
					}
				}
			return c
		}
		function ib(a, c, d) {
			for (a = a ? a.firstChild : j; a; a = a.nextSibling)
				if (a.nodeType == 1) {
					if (a.tagName == c)
						return a;
					if (!d) {
						var b = ib(a, c, d);
						if (b)
							return b
					}
				}
		}
		f.Mf = ib;
		f.Of = function(b, a) {
			return b.getElementsByTagName(a)
		};
		function B() {
			var e = arguments, d, c, b, a, g = 1 & e[0], f = 1 + g;
			d = e[f - 1] || {};
			for (; f < e.length; f++)
				if (c = e[f])
					for (b in c) {
						a = c[b];
						if (a !== k) {
							a = c[b];
							var h = d[b];
							d[b] = g && (A(h) || A(a)) ? B(g, {}, h, a) : a
						}
					}
			return d
		}
		f.K = B;
		function ab(f, g) {
			var d = {}, c, a, b;
			for (c in f) {
				a = f[c];
				b = g[c];
				if (a !== b) {
					var e;
					if (A(a) && A(b)) {
						a = ab(a, b);
						e = !mb(a)
					}
					!e && (d[c] = a)
				}
			}
			return d
		}
		f.Fc = function(a) {
			return C(a) == "function"
		};
		f.Yf = function(a) {
			return C(a) == "string"
		};
		f.lc = function(a) {
			return !isNaN(p(a)) && isFinite(a)
		};
		f.g = n;
		f.Rf = A;
		function S(a) {
			return g.createElement(a)
		}
		f.Kb = function() {
			return S("DIV")
		};
		f.Sf = function() {
			return S("SPAN")
		};
		f.Jc = function() {
		};
		function X(b, c, a) {
			if (a == k)
				return b.getAttribute(c);
			b.setAttribute(c, a)
		}
		function V(a, b) {
			return X(a, b) || X(a, "data-" + b)
		}
		f.v = X;
		f.k = V;
		function x(b, a) {
			if (a == k)
				return b.className;
			b.className = a
		}
		f.Kc = x;
		function rb(b) {
			var a = {};
			n(b, function(b) {
				a[b] = b
			});
			return a
		}
		function tb(b, a) {
			return b.match(a || Bb)
		}
		function Q(b, a) {
			return rb(tb(b || "", a))
		}
		f.Vf = tb;
		function cb(b, c) {
			var a = "";
			n(c, function(c) {
				a && (a += b);
				a += c
			});
			return a
		}
		function E(a, c, b) {
			x(a, cb(" ", B(ab(Q(x(a)), Q(c)), Q(b))))
		}
		f.zc = function(a) {
			return a.parentNode
		};
		f.O = function(a) {
			f.T(a, "none")
		};
		f.P = function(a, b) {
			f.T(a, b ? "none" : "")
		};
		f.De = function(b, a) {
			b.removeAttribute(a)
		};
		f.Md = function() {
			return q() && i < 10
		};
		f.Ld = function(d, a) {
			if (a)
				d.style.clip = "rect(" + c.round(a.j) + "px " + c.round(a.z)
						+ "px " + c.round(a.B) + "px " + c.round(a.i) + "px)";
			else if (a !== k) {
				var g = d.style.cssText, f = [
						new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),
						new RegExp(/[\s]*cliptop: .*?[;]?/i),
						new RegExp(/[\s]*clipright: .*?[;]?/i),
						new RegExp(/[\s]*clipbottom: .*?[;]?/i),
						new RegExp(/[\s]*clipleft: .*?[;]?/i) ], e = I(g, f, "");
				b.Fb(d, e)
			}
		};
		f.M = function() {
			return +new Date
		};
		f.Q = function(b, a) {
			b.appendChild(a)
		};
		f.zb = function(b, a, c) {
			(c || a.parentNode).insertBefore(b, a)
		};
		f.Db = function(b, a) {
			a = a || b.parentNode;
			a && a.removeChild(b)
		};
		f.ne = function(a, b) {
			n(a, function(a) {
				f.Db(a, b)
			})
		};
		f.bc = function(a) {
			f.ne(f.sb(a, d), a)
		};
		f.ke = function(a, b) {
			var c = f.zc(a);
			b & 1 && f.A(a, (f.m(c) - f.m(a)) / 2);
			b & 2 && f.E(a, (f.n(c) - f.n(a)) / 2)
		};
		f.mc = function(b, a) {
			return parseInt(b, a || 10)
		};
		f.be = p;
		f.If = function(b, a) {
			var c = g.body;
			while (a && b !== a && c !== a)
				try {
					a = a.parentNode
				} catch (d) {
					return l
				}
			return b === a
		};
		function Y(d, c, b) {
			var a = d.cloneNode(!c);
			!b && f.De(a, "id");
			return a
		}
		f.ib = Y;
		f.nb = function(e, g) {
			var a = new Image;
			function b(e, d) {
				f.H(a, "load", b);
				f.H(a, "abort", c);
				f.H(a, "error", c);
				g && g(a, d)
			}
			function c(a) {
				b(a, d)
			}
			if (kb() && i < 11.6 || !e)
				b(!e);
			else {
				f.a(a, "load", b);
				f.a(a, "abort", c);
				f.a(a, "error", c);
				a.src = e
			}
		};
		f.Yd = function(d, a, e) {
			var c = d.length + 1;
			function b(b) {
				c--;
				if (a && b && b.src == a.src)
					a = b;
				!c && e && e(a)
			}
			n(d, function(a) {
				f.nb(a.src, b)
			});
			b()
		};
		f.fe = function(a, g, i, h) {
			if (h)
				a = Y(a);
			var c = T(a, g);
			if (!c.length)
				c = b.Of(a, g);
			for (var f = c.length - 1; f > -1; f--) {
				var d = c[f], e = Y(i);
				x(e, x(d));
				b.Fb(e, d.style.cssText);
				b.zb(e, d);
				b.Db(d)
			}
			return a
		};
		function Ib(a) {
			var l = this, p = "", r = [ "av", "pv", "ds", "dn" ], e = [], q, j = 0, h = 0, d = 0;
			function i() {
				E(a, q, e[d || j || h & 2 || h]);
				b.S(a, "pointer-events", d ? "none" : "")
			}
			function c() {
				j = 0;
				i();
				f.H(g, "mouseup", c);
				f.H(g, "touchend", c);
				f.H(g, "touchcancel", c)
			}
			function o(a) {
				if (d)
					f.Gb(a);
				else {
					j = 4;
					i();
					f.a(g, "mouseup", c);
					f.a(g, "touchend", c);
					f.a(g, "touchcancel", c)
				}
			}
			l.le = function(a) {
				if (a === k)
					return h;
				h = a & 2 || a & 1;
				i()
			};
			l.Ac = function(a) {
				if (a === k)
					return !d;
				d = a ? 0 : 3;
				i()
			};
			l.W = a = f.pb(a);
			var m = b.Vf(x(a));
			if (m)
				p = m.shift();
			n(r, function(a) {
				e.push(p + a)
			});
			q = cb(" ", e);
			e.unshift("");
			f.a(a, "mousedown", o);
			f.a(a, "touchstart", o)
		}
		f.Xb = function(a) {
			return new Ib(a)
		};
		f.S = D;
		f.Qb = m("overflow");
		f.E = m("top", 2);
		f.A = m("left", 2);
		f.m = m("width", 2);
		f.n = m("height", 2);
		f.ie = m("marginLeft", 2);
		f.te = m("marginTop", 2);
		f.D = m("position");
		f.T = m("display");
		f.s = m("zIndex", 1);
		f.Tb = function(b, a, c) {
			if (a != k)
				Gb(b, a, c);
			else
				return Eb(b)
		};
		f.Fb = function(a, b) {
			if (b != k)
				a.style.cssText = b;
			else
				return a.style.cssText
		};
		var U = {
			xb : f.Tb,
			j : f.E,
			i : f.A,
			rb : f.m,
			vb : f.n,
			ob : f.D,
			Bg : f.T,
			kb : f.s
		};
		function w(g, l) {
			var e = P(), b = K(), d = wb(), h = L(g);
			function i(b, d, a) {
				var e = b.Y(u(-d / 2, -a / 2)), f = b.Y(u(d / 2, -a / 2)), g = b
						.Y(u(d / 2, a / 2)), h = b.Y(u(-d / 2, a / 2));
				b.Y(u(300, 300));
				return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y,
						g.y, h.y)
						+ a / 2)
			}
			function a(d, a) {
				a = a || {};
				var g = a.U || 0, l = (a.L || 0) % 360, m = (a.N || 0) % 360, o = (a.ab || 0) % 360, p = a.Ag;
				if (e) {
					g = 0;
					l = 0;
					m = 0;
					p = 0
				}
				var c = new Db(a.cb, a.bb, g);
				c.L(l);
				c.N(m);
				c.Id(o);
				c.Hd(a.Hb, a.Bb);
				c.Vb(a.q, a.p, p);
				if (b) {
					c.lb(a.J, a.I);
					d.style[h] = c.he()
				} else if (!W || W < 9) {
					var j = "";
					if (o || a.q != k && a.q != 1 || a.p != k && a.p != 1) {
						var n = i(c, a.eb, a.gb);
						f.te(d, n.y);
						f.ie(d, n.x);
						j = c.ge()
					}
					var r = d.style.filter, s = new RegExp(
							/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), q = I(
							r, [ s ], j);
					ub(d, q)
				}
			}
			w = function(e, c) {
				c = c || {};
				var h = c.J, i = c.I, g;
				n(U, function(a, b) {
					g = c[b];
					g !== k && a(e, g)
				});
				f.Ld(e, c.f);
				if (!b) {
					h != k && f.A(e, c.td + h);
					i != k && f.E(e, c.ud + i)
				}
				if (c.ee)
					if (d)
						sb(f.F(j, N, e, c));
					else
						a(e, c)
			};
			f.Cb = N;
			if (d)
				f.Cb = w;
			if (e)
				f.Cb = a;
			else if (!b)
				a = N;
			f.R = w;
			w(g, l)
		}
		f.Cb = w;
		f.R = w;
		function Db(i, l, p) {
			var d = this, b = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, i || 0,
					l || 0, p || 0, 1 ], h = c.sin, g = c.cos, m = c.tan;
			function f(a) {
				return a * c.PI / 180
			}
			function o(a, b) {
				return {
					x : a,
					y : b
				}
			}
			function n(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i,
					n, p, q, s, v, x, y, B, D, F, d, h, j) {
				return [ c * a + e * p + l * x + m * F,
						c * g + e * q + l * y + m * d,
						c * i + e * s + l * B + m * h,
						c * n + e * v + l * D + m * j,
						o * a + r * p + t * x + u * F,
						o * g + r * q + t * y + u * d,
						o * i + r * s + t * B + u * h,
						o * n + r * v + t * D + u * j,
						w * a + z * p + A * x + C * F,
						w * g + z * q + A * y + C * d,
						w * i + z * s + A * B + C * h,
						w * n + z * v + A * D + C * j,
						E * a + b * p + f * x + k * F,
						E * g + b * q + f * y + k * d,
						E * i + b * s + f * B + k * h,
						E * n + b * v + f * D + k * j ]
			}
			function e(c, a) {
				return n.apply(j, (a || b).concat(c))
			}
			d.Vb = function(a, c, d) {
				if (a == k)
					a = 1;
				if (c == k)
					c = 1;
				if (d == k)
					d = 1;
				if (a != 1 || c != 1 || d != 1)
					b = e([ a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1 ])
			};
			d.lb = function(a, c, d) {
				b[12] += a || 0;
				b[13] += c || 0;
				b[14] += d || 0
			};
			d.L = function(c) {
				if (c) {
					a = f(c);
					var d = g(a), i = h(a);
					b = e([ 1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1 ])
				}
			};
			d.N = function(c) {
				if (c) {
					a = f(c);
					var d = g(a), i = h(a);
					b = e([ d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1 ])
				}
			};
			d.Id = function(c) {
				if (c) {
					a = f(c);
					var d = g(a), i = h(a);
					b = e([ d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ])
				}
			};
			d.Hd = function(a, c) {
				if (a || c) {
					i = f(a);
					l = f(c);
					b = e([ 1, m(l), 0, 0, m(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
							1 ])
				}
			};
			d.Y = function(c) {
				var a = e(b, [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0,
						1 ]);
				return o(a[12], a[13])
			};
			d.he = function() {
				return "matrix3d(" + b.join(",") + ")"
			};
			d.ge = function() {
				return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0]
						+ ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5]
						+ ", SizingMethod='auto expand')"
			}
		}
		new function() {
			var a = this;
			function b(d, g) {
				for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
					for (var k = f[c] = [], b = 0; b < h; b++) {
						for (var e = 0, a = 0; a < j; a++)
							e += d[c][a] * g[a][b];
						k[b] = e
					}
				return f
			}
			a.q = function(b, c) {
				return a.nd(b, c, 0)
			};
			a.p = function(b, c) {
				return a.nd(b, 0, c)
			};
			a.nd = function(a, c, d) {
				return b(a, [ [ c, 0 ], [ 0, d ] ])
			};
			a.Y = function(d, c) {
				var a = b(d, [ [ c.x ], [ c.y ] ]);
				return u(a[0][0], a[1][0])
			}
		};
		var O = {
			td : 0,
			ud : 0,
			J : 0,
			I : 0,
			db : 1,
			q : 1,
			p : 1,
			ab : 0,
			L : 0,
			N : 0,
			cb : 0,
			bb : 0,
			U : 0,
			Hb : 0,
			Bb : 0
		};
		f.kd = function(a) {
			var c = a || {};
			if (a)
				if (b.Fc(a))
					c = {
						nc : c
					};
				else if (b.Fc(a.f))
					c.f = {
						nc : a.f
					};
			return c
		};
		function qb(c, a) {
			var b = {};
			n(c, function(c, d) {
				var e = c;
				if (a[d] != k)
					if (f.lc(c))
						e = c + a[d];
					else
						e = qb(c, a[d]);
				b[d] = e
			});
			return b
		}
		f.xd = qb;
		f.Ud = function(l, m, w, n, y, z, o) {
			var a = m;
			if (l) {
				a = {};
				for ( var g in m) {
					var A = z[g] || 1, v = y[g] || [ 0, 1 ], f = (w - v[0])
							/ v[1];
					f = c.min(c.max(f, 0), 1);
					f = f * A;
					var u = c.floor(f);
					if (f != u)
						f -= u;
					var h = n.nc || e.ed, i, B = l[g], q = m[g];
					if (b.lc(q)) {
						h = n[g] || h;
						var x = h(f);
						i = B + q * x
					} else {
						i = b.K({
							Eb : {}
						}, l[g]);
						b.g(q.Eb || q, function(d, a) {
							if (n.f)
								h = n.f[a] || n.f.nc || h;
							var c = h(f), b = d * c;
							i.Eb[a] = b;
							i[a] += b
						})
					}
					a[g] = i
				}
				var t = b.g(m, function(b, a) {
					return O[a] != k
				});
				t && b.g(O, function(c, b) {
					if (a[b] == k && l[b] !== k)
						a[b] = l[b]
				});
				if (t) {
					if (a.db)
						a.q = a.p = a.db;
					a.eb = o.eb;
					a.gb = o.gb;
					a.ee = d
				}
			}
			if (m.f && o.lb) {
				var p = a.f.Eb, s = (p.j || 0) + (p.B || 0), r = (p.i || 0)
						+ (p.z || 0);
				a.i = (a.i || 0) + r;
				a.j = (a.j || 0) + s;
				a.f.i -= r;
				a.f.z -= r;
				a.f.j -= s;
				a.f.B -= s
			}
			if (a.f && b.Md() && !a.f.j && !a.f.i && a.f.z == o.eb
					&& a.f.B == o.gb)
				a.f = j;
			return a
		}
	};
	function n() {
		var a = this, d = [];
		function i(a, b) {
			d.push({
				cc : a,
				kc : b
			})
		}
		function g(a, c) {
			b.g(d, function(b, e) {
				b.cc == a && b.kc === c && d.splice(e, 1)
			})
		}
		a.hb = a.addEventListener = i;
		a.removeEventListener = g;
		a.l = function(a) {
			var c = [].slice.call(arguments, 1);
			b.g(d, function(b) {
				b.cc == a && b.kc.apply(h, c)
			})
		}
	}
	var m = function(z, C, i, J, M, L) {
		z = z || 0;
		var a = this, q, n, o, u, A = 0, G, H, F, B, y = 0, g = 0, m = 0, D, k, f, e, p, w = [], x;
		function O(a) {
			f += a;
			e += a;
			k += a;
			g += a;
			m += a;
			y += a
		}
		function t(o) {
			var h = o;
			if (p && (h >= e || h <= f))
				h = ((h - f) % p + p) % p + f;
			if (!D || u || g != h) {
				var j = c.min(h, e);
				j = c.max(j, f);
				if (!D || u || j != m) {
					if (L) {
						var l = (j - k) / (C || 1);
						if (i.ce)
							l = 1 - l;
						var n = b.Ud(M, L, l, G, F, H, i);
						if (x)
							b.g(n, function(b, a) {
								x[a] && x[a](J, b)
							});
						else
							b.R(J, n)
					}
					a.fc(m - k, j - k);
					m = j;
					b.g(w, function(b, c) {
						var a = o < g ? w[w.length - c - 1] : b;
						a.u(m - y)
					});
					var r = g, q = m;
					g = h;
					D = d;
					a.Mb(r, q)
				}
			}
		}
		function E(a, b, d) {
			b && a.Lb(e);
			if (!d) {
				f = c.min(f, a.ec() + y);
				e = c.max(e, a.Jb() + y)
			}
			w.push(a)
		}
		var r = h.requestAnimationFrame || h.webkitRequestAnimationFrame
				|| h.mozRequestAnimationFrame || h.msRequestAnimationFrame;
		if (b.hg() && b.uc() < 7)
			r = j;
		r = r || function(a) {
			b.vc(a, i.Rc)
		};
		function I() {
			if (q) {
				var d = b.M(), e = c.min(d - A, i.Sc), a = g + e * o;
				A = d;
				if (a * o >= n * o)
					a = n;
				t(a);
				if (!u && a * o >= n * o)
					K(B);
				else
					r(I)
			}
		}
		function s(h, i, j) {
			if (!q) {
				q = d;
				u = j;
				B = i;
				h = c.max(h, f);
				h = c.min(h, e);
				n = h;
				o = n < g ? -1 : 1;
				a.Tc();
				A = b.M();
				r(I)
			}
		}
		function K(b) {
			if (q) {
				u = q = B = l;
				a.Uc();
				b && b()
			}
		}
		a.Vc = function(a, b, c) {
			s(a ? g + a : e, b, c)
		};
		a.Wc = s;
		a.X = K;
		a.je = function(a) {
			s(a)
		};
		a.V = function() {
			return g
		};
		a.Xc = function() {
			return n
		};
		a.yb = function() {
			return m
		};
		a.u = t;
		a.lb = function(a) {
			t(g + a)
		};
		a.ad = function() {
			return q
		};
		a.pe = function(a) {
			p = a
		};
		a.Lb = O;
		a.ub = function(a, b) {
			E(a, 0, b)
		};
		a.jc = function(a) {
			E(a, 1)
		};
		a.qe = function(a) {
			e += a
		};
		a.ec = function() {
			return f
		};
		a.Jb = function() {
			return e
		};
		a.Mb = a.Tc = a.Uc = a.fc = b.Jc;
		a.oc = b.M();
		i = b.K({
			Rc : 16,
			Sc : 50
		}, i);
		p = i.bd;
		x = i.Td;
		f = k = z;
		e = z + C;
		H = i.Rd || {};
		F = i.Bd || {};
		G = b.kd(i.fb)
	};
	new (function() {
	});
	var i = function(p, fc) {
		var f = this;
		function Bc() {
			var a = this;
			m.call(a, -1e8, 2e8);
			a.zd = function() {
				var b = a.yb(), d = c.floor(b), f = t(d), e = b - c.floor(b);
				return {
					Z : f,
					wd : d,
					ob : e
				}
			};
			a.Mb = function(b, a) {
				var e = c.floor(a);
				if (e != a && a > b)
					e++;
				Ub(e, d);
				f.l(i.Cd, t(a), t(b), a, b)
			}
		}
		function Ac() {
			var a = this;
			m.call(a, 0, 0, {
				bd : r
			});
			b.g(C, function(b) {
				D & 1 && b.pe(r);
				a.jc(b);
				b.Lb(ib / bc)
			})
		}
		function zc() {
			var a = this, b = Tb.W;
			m.call(a, -1, 2, {
				fb : e.dd,
				Td : {
					ob : Zb
				},
				bd : r
			}, b, {
				ob : 1
			}, {
				ob : -2
			});
			a.sc = b
		}
		function nc(o, n) {
			var b = this, e, g, h, k, c;
			m.call(b, -1e8, 2e8, {
				Sc : 100
			});
			b.Tc = function() {
				M = d;
				R = j;
				f.l(i.Ad, t(w.V()), w.V())
			};
			b.Uc = function() {
				M = l;
				k = l;
				var a = w.zd();
				f.l(i.Sd, t(w.V()), w.V());
				!a.ob && Dc(a.wd, s)
			};
			b.Mb = function(i, f) {
				var b;
				if (k)
					b = c;
				else {
					b = g;
					if (h) {
						var d = f / h;
						b = a.jd(d) * (g - e) + e
					}
				}
				w.u(b)
			};
			b.Ib = function(a, d, c, f) {
				e = a;
				g = d;
				h = c;
				w.u(a);
				b.u(0);
				b.Wc(c, f)
			};
			b.oe = function(a) {
				k = d;
				c = a;
				b.Vc(a, j, d)
			};
			b.me = function(a) {
				c = a
			};
			w = new Bc;
			w.ub(o);
			w.ub(n)
		}
		function pc() {
			var c = this, a = Xb();
			b.s(a, 0);
			b.S(a, "pointerEvents", "none");
			c.W = a;
			c.Ab = function() {
				b.O(a);
				b.bc(a)
			}
		}
		function xc(o, g) {
			var e = this, q, L, v, k, y = [], x, B, W, G, Q, F, h, w, p;
			m.call(e, -u, u + 1, {});
			function E(a) {
				q && q.Pc();
				T(o, a, 0);
				F = d;
				q = new I.G(o, I, b.be(b.k(o, "idle")) || lc);
				q.u(0)
			}
			function Z() {
				q.oc < I.oc && E()
			}
			function M(p, r, o) {
				if (!G) {
					G = d;
					if (k && o) {
						var h = o.width, c = o.height, n = h, m = c;
						if (h && c && a.jb) {
							if (a.jb & 3 && (!(a.jb & 4) || h > K || c > J)) {
								var j = l, q = K / J * c / h;
								if (a.jb & 1)
									j = q > 1;
								else if (a.jb & 2)
									j = q < 1;
								n = j ? h * J / c : K;
								m = j ? J : c * K / h
							}
							b.m(k, n);
							b.n(k, m);
							b.E(k, (J - m) / 2);
							b.A(k, (K - n) / 2)
						}
						b.D(k, "absolute");
						f.l(i.ae, g)
					}
				}
				b.O(r);
				p && p(e)
			}
			function Y(b, c, d, f) {
				if (f == R && s == g && N)
					if (!Cc) {
						var a = t(b);
						A.Ed(a, g, c, e, d);
						c.Zd();
						U.Lb(a - U.ec() - 1);
						U.u(a);
						z.Ib(b, b, 0)
					}
			}
			function cb(b) {
				if (b == R && s == g) {
					if (!h) {
						var a = j;
						if (A)
							if (A.Z == g)
								a = A.Qd();
							else
								A.Ab();
						Z();
						h = new vc(o, g, a, q);
						h.Zc(p)
					}
					!h.ad() && h.ic()
				}
			}
			function S(d, f, l) {
				if (d == g) {
					if (d != f)
						C[f] && C[f].Wd();
					else
						!l && h && h.Vd();
					p && p.Ac();
					var m = R = b.M();
					e.nb(b.F(j, cb, m))
				} else {
					var k = c.min(g, d), i = c.max(g, d), o = c.min(i - k, k
							+ r - i), n = u + a.Xd - 1;
					(!Q || o <= n) && e.nb()
				}
			}
			function db() {
				if (s == g && h) {
					h.X();
					p && p.de();
					p && p.Jd();
					h.vd()
				}
			}
			function eb() {
				s == g && h && h.X()
			}
			function ab(a) {
				!P && f.l(i.Kd, g, a)
			}
			function O() {
				p = w.pInstance;
				h && h.Zc(p)
			}
			e.nb = function(c, a) {
				a = a || v;
				if (y.length && !G) {
					b.P(a);
					if (!W) {
						W = d;
						f.l(i.Od, g);
						b.g(y, function(a) {
							if (!b.v(a, "src")) {
								a.src = b.k(a, "src2");
								b.T(a, a["display-origin"])
							}
						})
					}
					b.Yd(y, k, b.F(j, M, c, a))
				} else
					M(c, a)
			};
			e.se = function() {
				var h = g;
				if (a.wc < 0)
					h -= r;
				var d = h + a.wc * tc;
				if (D & 2)
					d = t(d);
				if (!(D & 1))
					d = c.max(0, c.min(d, r - u));
				if (d != g) {
					if (A) {
						var e = A.Pd(r);
						if (e) {
							var i = R = b.M(), f = C[t(d)];
							return f.nb(b.F(j, Y, d, f, e, i), v)
						}
					}
					bb(d)
				}
			};
			e.pc = function() {
				S(g, g, d)
			};
			e.Wd = function() {
				p && p.de();
				p && p.Jd();
				e.Ec();
				h && h.re();
				h = j;
				E()
			};
			e.Zd = function() {
				b.O(o)
			};
			e.Ec = function() {
				b.P(o)
			};
			e.Nd = function() {
				p && p.Ac()
			};
			function T(a, c, e) {
				if (b.v(a, "jssor-slider"))
					return;
				if (!F) {
					if (a.tagName == "IMG") {
						y.push(a);
						if (!b.v(a, "src")) {
							Q = d;
							a["display-origin"] = b.T(a);
							b.O(a)
						}
					}
					b.Nc() && b.s(a, (b.s(a) || 0) + 1)
				}
				var f = b.sb(a);
				b.g(f, function(f) {
					var h = f.tagName, i = b.k(f, "u");
					if (i == "player" && !w) {
						w = f;
						if (w.pInstance)
							O();
						else
							b.a(w, "dataavailable", O)
					}
					if (i == "caption") {
						if (c) {
							b.Cc(f, b.k(f, "to"));
							b.Df(f, b.k(f, "bf"));
							b.k(f, "3d") && b.Ef(f, "preserve-3d")
						} else if (!b.sd()) {
							var g = b.ib(f, l, d);
							b.zb(g, f, a);
							b.Db(f, a);
							f = g;
							c = d
						}
					} else if (!F && !e && !k) {
						if (h == "A") {
							if (b.k(f, "u") == "image")
								k = b.Mf(f, "IMG");
							else
								k = b.C(f, "image", d);
							if (k) {
								x = f;
								b.T(x, "block");
								b.R(x, V);
								B = b.ib(x, d);
								b.D(x, "relative");
								b.Tb(B, 0);
								b.S(B, "backgroundColor", "#000")
							}
						} else if (h == "IMG" && b.k(f, "u") == "image")
							k = f;
						if (k) {
							k.border = 0;
							b.R(k, V)
						}
					}
					T(f, c, e + 1)
				})
			}
			e.fc = function(c, b) {
				var a = u - b;
				Zb(L, a)
			};
			e.Z = g;
			n.call(e);
			b.Ff(o, b.k(o, "p"));
			b.Gf(o, b.k(o, "po"));
			var H = b.C(o, "thumb", d);
			if (H) {
				b.ib(H);
				b.O(H)
			}
			b.P(o);
			v = b.ib(fb);
			b.s(v, 1e3);
			b.a(o, "click", ab);
			E(d);
			e.Fd = k;
			e.ld = B;
			e.sc = L = o;
			b.Q(L, v);
			f.hb(203, S);
			f.hb(28, eb);
			f.hb(24, db)
		}
		function vc(y, g, p, q) {
			var a = this, n = 0, u = 0, h, j, e, c, k, t, r, o = C[g];
			m.call(a, 0, 0);
			function v() {
				b.bc(L);
				cc && k && o.ld && b.Q(L, o.ld);
				b.P(L, !k && o.Fd)
			}
			function w() {
				a.ic()
			}
			function x(b) {
				r = b;
				a.X();
				a.ic()
			}
			a.ic = function() {
				var b = a.yb();
				if (!B && !M && !r && s == g) {
					if (!b) {
						if (h && !k) {
							k = d;
							a.vd(d);
							f.l(i.Wf, g, n, u, h, c)
						}
						v()
					}
					var l, p = i.Lc;
					if (b != c)
						if (b == e)
							l = c;
						else if (b == j)
							l = e;
						else if (!b)
							l = j;
						else
							l = a.Xc();
					f.l(p, g, b, n, j, e, c);
					var m = N && (!E || F);
					if (b == c)
						(e != c && !(E & 12) || m) && o.se();
					else
						(m || b != e) && a.Wc(l, w)
				}
			};
			a.Vd = function() {
				e == c && e == a.yb() && a.u(j)
			};
			a.re = function() {
				A && A.Z == g && A.Ab();
				var b = a.yb();
				b < c && f.l(i.Lc, g, -b - 1, n, j, e, c)
			};
			a.vd = function(a) {
				p && b.Qb(jb, a && p.Wb.wg ? "" : "hidden")
			};
			a.fc = function(b, a) {
				if (k && a >= h) {
					k = l;
					v();
					o.Ec();
					A.Ab();
					f.l(i.Uf, g, n, u, h, c)
				}
				f.l(i.Tf, g, a, n, j, e, c)
			};
			a.Zc = function(a) {
				if (a && !t) {
					t = a;
					a.hb($JssorPlayer$.yd, x)
				}
			};
			p && a.jc(p);
			h = a.Jb();
			a.jc(q);
			j = h + q.Ic;
			e = h + q.Hc;
			c = a.Jb()
		}
		function Kb(a, c, d) {
			b.A(a, c);
			b.E(a, d)
		}
		function Zb(c, b) {
			var a = x > 0 ? x : eb, d = zb * b * (a & 1), e = Ab * b
					* (a >> 1 & 1);
			Kb(c, d, e)
		}
		function Pb() {
			pb = M;
			Ib = z.Xc();
			G = w.V()
		}
		function gc() {
			Pb();
			if (B || !F && E & 12) {
				z.X();
				f.l(i.Qf)
			}
		}
		function ec(f) {
			if (!B && (F || !(E & 12)) && !z.ad()) {
				var d = w.V(), b = c.ceil(G);
				if (f && c.abs(H) >= a.Gc) {
					b = c.ceil(d);
					b += hb
				}
				if (!(D & 1))
					b = c.min(r - u, c.max(b, 0));
				var e = c.abs(b - d);
				e = 1 - c.pow(1 - e, 5);
				if (!P && pb)
					z.je(Ib);
				else if (d == b) {
					sb.Nd();
					sb.pc()
				} else
					z.Ib(d, b, e * Vb)
			}
		}
		function Hb(a) {
			!b.k(b.Yb(a), "nodrag") && b.Gb(a)
		}
		function rc(a) {
			Yb(a, 1)
		}
		function Yb(a, c) {
			a = b.yc(a);
			var k = b.Yb(a);
			if (!O && !b.k(k, "nodrag") && sc()
					&& (!c || a.touches.length == 1)) {
				B = d;
				yb = l;
				R = j;
				b.a(g, c ? "touchmove" : "mousemove", Bb);
				b.M();
				P = 0;
				gc();
				if (!pb)
					x = 0;
				if (c) {
					var h = a.touches[0];
					ub = h.clientX;
					vb = h.clientY
				} else {
					var e = b.Bc(a);
					ub = e.x;
					vb = e.y
				}
				H = 0;
				gb = 0;
				hb = 0;
				f.l(i.Pf, t(G), G, a)
			}
		}
		function Bb(e) {
			if (B) {
				e = b.yc(e);
				var f;
				if (e.type != "mousemove") {
					var l = e.touches[0];
					f = {
						x : l.clientX,
						y : l.clientY
					}
				} else
					f = b.Bc(e);
				if (f) {
					var j = f.x - ub, k = f.y - vb;
					if (c.floor(G) != G)
						x = x || eb & O;
					if ((j || k) && !x) {
						if (O == 3)
							if (c.abs(k) > c.abs(j))
								x = 2;
							else
								x = 1;
						else
							x = O;
						if (mb && x == 1 && c.abs(k) - c.abs(j) > 3)
							yb = d
					}
					if (x) {
						var a = k, i = Ab;
						if (x == 1) {
							a = j;
							i = zb
						}
						if (!(D & 1)) {
							if (a > 0) {
								var g = i * s, h = a - g;
								if (h > 0)
									a = g + c.sqrt(h) * 5
							}
							if (a < 0) {
								var g = i * (r - u - s), h = -a - g;
								if (h > 0)
									a = -g - c.sqrt(h) * 5
							}
						}
						if (H - gb < -2)
							hb = 0;
						else if (H - gb > 2)
							hb = -1;
						gb = H;
						H = a;
						rb = G - H / i / (Y || 1);
						if (H && x && !yb) {
							b.Gb(e);
							if (!M)
								z.oe(rb);
							else
								z.me(rb)
						}
					}
				}
			}
		}
		function ab() {
			qc();
			if (B) {
				B = l;
				b.M();
				b.H(g, "mousemove", Bb);
				b.H(g, "touchmove", Bb);
				P = H;
				z.X();
				var a = w.V();
				f.l(i.Nf, t(a), a, t(G), G);
				E & 12 && Pb();
				ec(d)
			}
		}
		function jc(c) {
			if (P) {
				b.Jf(c);
				var a = b.Yb(c);
				while (a && v !== a) {
					a.tagName == "A" && b.Gb(c);
					try {
						a = a.parentNode
					} catch (d) {
						break
					}
				}
			}
		}
		function Jb(a) {
			C[s];
			s = t(a);
			sb = C[s];
			Ub(a);
			return s
		}
		function Dc(a, b) {
			x = 0;
			Jb(a);
			f.l(i.Lf, t(a), b)
		}
		function Ub(a, c) {
			wb = a;
			b.g(S, function(b) {
				b.tc(t(a), a, c)
			})
		}
		function sc() {
			var b = i.xc || 0, a = X;
			if (mb)
				a & 1 && (a &= 1);
			i.xc |= a;
			return O = a & ~b
		}
		function qc() {
			if (O) {
				i.xc &= ~X;
				O = 0
			}
		}
		function Xb() {
			var a = b.Kb();
			b.R(a, V);
			b.D(a, "absolute");
			return a
		}
		function t(a) {
			return (a % r + r) % r
		}
		function kc(b, d) {
			if (d)
				if (!D) {
					b = c.min(c.max(b + wb, 0), r - u);
					d = l
				} else if (D & 2) {
					b = t(b + wb);
					d = l
				}
			bb(b, a.Pb, d)
		}
		function xb() {
			b.g(S, function(a) {
				a.hc(a.Ob.vg <= F)
			})
		}
		function hc() {
			if (!F) {
				F = 1;
				xb();
				if (!B) {
					E & 12 && ec();
					E & 3 && C[s].pc()
				}
			}
		}
		function Ec() {
			if (F) {
				F = 0;
				xb();
				B || !(E & 12) || gc()
			}
		}
		function ic() {
			V = {
				rb : K,
				vb : J,
				j : 0,
				i : 0
			};
			b.g(T, function(a) {
				b.R(a, V);
				b.D(a, "absolute");
				b.Qb(a, "hidden");
				b.O(a)
			});
			b.R(fb, V)
		}
		function ob(b, a) {
			bb(b, a, d)
		}
		function bb(g, f, j) {
			if (Rb && (!B && (F || !(E & 12)) || a.Dc)) {
				M = d;
				B = l;
				z.X();
				if (f == k)
					f = Vb;
				var e = Cb.yb(), b = g;
				if (j) {
					b = e + g;
					if (g > 0)
						b = c.ceil(b);
					else
						b = c.floor(b)
				}
				if (D & 2)
					b = t(b);
				if (!(D & 1))
					b = c.max(0, c.min(b, r - u));
				var i = (b - e) % r;
				b = e + i;
				var h = e == b ? 0 : f * c.abs(i);
				h = c.min(h, f * u * 1.5);
				z.Ib(e, b, h || 1)
			}
		}
		f.Vc = function() {
			if (!N) {
				N = d;
				C[s] && C[s].pc()
			}
		};
		function W() {
			return b.m(y || p)
		}
		function lb() {
			return b.n(y || p)
		}
		f.eb = W;
		f.gb = lb;
		function Eb(c, d) {
			if (c == k)
				return b.m(p);
			if (!y) {
				var a = b.Kb(g);
				b.Kc(a, b.Kc(p));
				b.Fb(a, b.Fb(p));
				b.T(a, "block");
				b.D(a, "relative");
				b.E(a, 0);
				b.A(a, 0);
				b.Qb(a, "visible");
				y = b.Kb(g);
				b.D(y, "absolute");
				b.E(y, 0);
				b.A(y, 0);
				b.m(y, b.m(p));
				b.n(y, b.n(p));
				b.Cc(y, "0 0");
				b.Q(y, a);
				var h = b.sb(p);
				b.Q(p, y);
				b.S(p, "backgroundImage", "");
				b.g(h, function(c) {
					b.Q(b.k(c, "noscale") ? p : a, c);
					b.k(c, "autocenter") && Mb.push(c)
				})
			}
			Y = c / (d ? b.n : b.m)(y);
			b.Hf(y, Y);
			var f = d ? Y * W() : c, e = d ? c : Y * lb();
			b.m(p, f);
			b.n(p, e);
			b.g(Mb, function(a) {
				var c = b.mc(b.k(a, "autocenter"));
				b.ke(a, c)
			})
		}
		f.fg = Eb;
		n.call(f);
		f.W = p = b.pb(p);
		var a = b.K({
			jb : 0,
			Xd : 1,
			Rb : 1,
			Sb : 0,
			Zb : l,
			Nb : 1,
			mb : d,
			Dc : d,
			wc : 1,
			Oc : 3e3,
			pd : 1,
			Pb : 500,
			jd : e.cd,
			Gc : 20,
			od : 0,
			qb : 1,
			qd : 0,
			pg : 1,
			Ub : 1,
			rd : 1
		}, fc);
		a.mb = a.mb && b.ng();
		if (a.rg != k)
			a.Oc = a.rg;
		if (a.Cf != k)
			a.qd = a.Cf;
		var eb = a.Ub & 3, tc = (a.Ub & 4) / -4 || 1, kb = a.ug, I = b.K({
			G : q,
			mb : a.mb
		}, a.lf);
		I.tb = I.tb || I.zg;
		var Fb = a.Se, Z = a.Re, db = a.yg, Q = !a.pg, y, v = b.C(p, "slides",
				Q), fb = b.C(p, "loading", Q) || b.Kb(g), Nb = b.C(p,
				"navigator", Q), dc = b.C(p, "arrowleft", Q), ac = b.C(p,
				"arrowright", Q), Lb = b.C(p, "thumbnavigator", Q), oc = b.m(v), mc = b
				.n(v), V, T = [], uc = b.sb(v);
		b.g(uc, function(a) {
			if (a.tagName == "DIV" && !b.k(a, "u"))
				T.push(a);
			else
				b.Nc() && b.s(a, (b.s(a) || 0) + 1)
		});
		var s = -1, wb, sb, r = T.length, K = a.Pe || oc, J = a.Oe || mc, Wb = a.od, zb = K
				+ Wb, Ab = J + Wb, bc = eb & 1 ? zb : Ab, u = c.min(a.qb, r), jb, x, O, yb, S = [], Qb, Sb, Ob, cc, Cc, N, E = a.pd, lc = a.Oc, Vb = a.Pb, qb, tb, ib, Rb = u < r, D = Rb ? a.Nb
				: 0, X, P, F = 1, M, B, R, ub = 0, vb = 0, H, gb, hb, Cb, w, U, z, Tb = new pc, Y, Mb = [];
		if (r) {
			if (a.mb)
				Kb = function(a, c, d) {
					b.Cb(a, {
						cb : c,
						bb : d
					})
				};
			N = a.Zb;
			f.Ob = fc;
			ic();
			b.v(p, "jssor-slider", d);
			b.s(v, b.s(v) || 0);
			b.D(v, "absolute");
			jb = b.ib(v, d);
			b.zb(jb, v);
			if (kb) {
				cc = kb.xg;
				qb = kb.G;
				tb = u == 1 && r > 1 && qb && (!b.sd() || b.uc() >= 8)
			}
			ib = tb || u >= r || !(D & 1) ? 0 : a.qd;
			X = (u > 1 || ib ? eb : -1) & a.rd;
			var Gb = v, C = [], A, L, Db = b.cg(), mb = Db.bg, G, pb, Ib, rb;
			Db.md && b.S(Gb, Db.md, ([ j, "pan-y", "pan-x", "none" ])[X] || "");
			U = new zc;
			if (tb)
				A = new qb(Tb, K, J, kb, mb);
			b.Q(jb, U.sc);
			b.Qb(v, "hidden");
			L = Xb();
			b.S(L, "backgroundColor", "#000");
			b.Tb(L, 0);
			b.zb(L, Gb.firstChild, Gb);
			for (var cb = 0; cb < T.length; cb++) {
				var wc = T[cb], yc = new xc(wc, cb);
				C.push(yc)
			}
			b.O(fb);
			Cb = new Ac;
			z = new nc(Cb, U);
			if (X) {
				b.a(v, "mousedown", Yb);
				b.a(v, "touchstart", rc);
				b.a(v, "dragstart", Hb);
				b.a(v, "selectstart", Hb);
				b.a(g, "mouseup", ab);
				b.a(g, "touchend", ab);
				b.a(g, "touchcancel", ab);
				b.a(h, "blur", ab)
			}
			E &= mb ? 10 : 5;
			if (Nb && Fb) {
				Qb = new Fb.G(Nb, Fb, W(), lb());
				S.push(Qb)
			}
			if (Z && dc && ac) {
				Z.Nb = D;
				Z.qb = u;
				Sb = new Z.G(dc, ac, Z, W(), lb());
				S.push(Sb)
			}
			if (Lb && db) {
				db.Sb = a.Sb;
				Ob = new db.G(Lb, db);
				S.push(Ob)
			}
			b.g(S, function(a) {
				a.rc(r, C, fb);
				a.hb(o.qc, kc)
			});
			b.S(p, "visibility", "visible");
			Eb(W());
			b.a(v, "click", jc, d);
			b.a(p, "mouseout", b.dc(hc, p));
			b.a(p, "mouseover", b.dc(Ec, p));
			xb();
			a.Rb && b.a(g, "keydown", function(b) {
				if (b.keyCode == 37)
					ob(-a.Rb);
				else
					b.keyCode == 39 && ob(a.Rb)
			});
			var nb = a.Sb;
			if (!(D & 1))
				nb = c.max(0, c.min(nb, r - u));
			z.Ib(nb, nb, 0)
		}
	};
	i.Kd = 21;
	i.Pf = 22;
	i.Nf = 23;
	i.Ad = 24;
	i.Sd = 25;
	i.Od = 26;
	i.ae = 27;
	i.Qf = 28;
	i.Cd = 202;
	i.Lf = 203;
	i.Wf = 206;
	i.Uf = 207;
	i.Tf = 208;
	i.Lc = 209;
	var o = {
		qc : 1
	}, r = function(e, C) {
		var f = this;
		n.call(f);
		e = b.pb(e);
		var s, A, z, r, k = 0, a, m, i, w, x, h, g, q, p, B = [], y = [];
		function v(a) {
			a != -1 && y[a].le(a == k)
		}
		function t(a) {
			f.l(o.qc, a * m)
		}
		f.W = e;
		f.tc = function(a) {
			if (a != r) {
				var d = k, b = c.floor(a / m);
				k = b;
				r = a;
				v(d);
				v(b)
			}
		};
		f.hc = function(a) {
			b.P(e, a)
		};
		var u;
		f.rc = function(D) {
			if (!u) {
				s = c.ceil(D / m);
				k = 0;
				var o = q + w, r = p + x, n = c.ceil(s / i) - 1;
				A = q + o * (!h ? n : i - 1);
				z = p + r * (h ? n : i - 1);
				b.m(e, A);
				b.n(e, z);
				for (var f = 0; f < s; f++) {
					var C = b.Sf();
					b.Kf(C, f + 1);
					var l = b.fe(g, "numbertemplate", C, d);
					b.D(l, "absolute");
					var v = f % (n + 1);
					b.A(l, !h ? o * v : f % i * o);
					b.E(l, h ? r * v : c.floor(f / (n + 1)) * r);
					b.Q(e, l);
					B[f] = l;
					a.ac & 1 && b.a(l, "click", b.F(j, t, f));
					a.ac & 2 && b.a(l, "mouseover", b.dc(b.F(j, t, f), l));
					y[f] = b.Xb(l)
				}
				u = d
			}
		};
		f.Ob = a = b.K({
			fd : 10,
			gd : 10,
			hd : 1,
			ac : 1
		}, C);
		g = b.C(e, "prototype");
		q = b.m(g);
		p = b.n(g);
		b.Db(g, e);
		m = a.id || 1;
		i = a.Dd || 1;
		w = a.fd;
		x = a.gd;
		h = a.hd - 1;
		a.Vb == l && b.v(e, "noscale", d);
		a.wb && b.v(e, "autocenter", a.wb)
	}, s = function(a, g, h) {
		var c = this;
		n.call(c);
		var r, q, e, f, i;
		b.m(a);
		b.n(a);
		function k(a) {
			c.l(o.qc, a, d)
		}
		function p(c) {
			b.P(a, c || !h.Nb && e == 0);
			b.P(g, c || !h.Nb && e >= q - h.qb);
			r = c
		}
		c.tc = function(b, a, c) {
			if (c)
				e = a;
			else {
				e = b;
				p(r)
			}
		};
		c.hc = p;
		var m;
		c.rc = function(c) {
			q = c;
			e = 0;
			if (!m) {
				b.a(a, "click", b.F(j, k, -i));
				b.a(g, "click", b.F(j, k, i));
				b.Xb(a);
				b.Xb(g);
				m = d
			}
		};
		c.Ob = f = b.K({
			id : 1
		}, h);
		i = f.id;
		if (f.Vb == l) {
			b.v(a, "noscale", d);
			b.v(g, "noscale", d)
		}
		if (f.wb) {
			b.v(a, "autocenter", f.wb);
			b.v(g, "autocenter", f.wb)
		}
	};
	function q(e, d, c) {
		var a = this;
		m.call(a, 0, c);
		a.Pc = b.Jc;
		a.Ic = 0;
		a.Hc = c
	}
	var t = function(n, g, l) {
		var a = this, o, h = {}, i = g.tb, c = new m(0, 0);
		m.call(a, 0, 0);
		function j(d, c) {
			var a = {};
			b.g(d, function(d, f) {
				var e = h[f];
				if (e) {
					if (b.Rf(d))
						d = j(d, c || f == "e");
					else if (c)
						if (b.lc(d))
							d = o[d];
					a[e] = d
				}
			});
			return a
		}
		function k(e, c) {
			var a = [], d = b.sb(e);
			b.g(d, function(d) {
				var h = b.k(d, "u") == "caption";
				if (h) {
					var e = b.k(d, "t"), g = i[b.mc(e)] || i[e], f = {
						W : d,
						Wb : g
					};
					a.push(f)
				}
				if (c < 5)
					a = a.concat(k(d, c + 1))
			});
			return a
		}
		function r(d, e, a) {
			b.g(e, function(g) {
				var e = j(g), f = b.kd(e.fb);
				if (e.i) {
					e.J = e.i;
					f.J = f.i;
					delete e.i
				}
				if (e.j) {
					e.I = e.j;
					f.I = f.j;
					delete e.j
				}
				var i = {
					fb : f,
					eb : a.rb,
					gb : a.vb
				}, h = new m(g.b, g.d, i, d, a, e);
				c.ub(h);
				a = b.xd(a, e)
			});
			return a
		}
		function q(a) {
			b.g(a, function(d) {
				var a = d.W, f = b.m(a), e = b.n(a), c = {
					i : b.A(a),
					j : b.E(a),
					J : 0,
					I : 0,
					xb : 1,
					kb : b.s(a) || 0,
					ab : 0,
					L : 0,
					N : 0,
					q : 1,
					p : 1,
					cb : 0,
					bb : 0,
					U : 0,
					Hb : 0,
					Bb : 0,
					rb : f,
					vb : e,
					f : {
						j : 0,
						z : f,
						B : e,
						i : 0
					}
				};
				c.td = c.i;
				c.ud = c.j;
				r(a, d.Wb, c)
			})
		}
		function t(g, f, h) {
			var e = g.b - f;
			if (e) {
				var b = new m(f, e);
				b.ub(c, d);
				b.Lb(h);
				a.ub(b)
			}
			a.qe(g.d);
			return e
		}
		function s(f) {
			var d = c.ec(), e = 0;
			b.g(f, function(c, f) {
				c = b.K({
					d : l
				}, c);
				t(c, d, e);
				d = c.b;
				e += c.d;
				if (!f || c.t == 2) {
					a.Ic = d;
					a.Hc = d + c.d
				}
			})
		}
		a.Pc = function() {
			a.u(-1, d)
		};
		o = [ f.mf, f.zf, f.nf, f.of, f.pf, f.qf, f.rf, f.sf, f.tf, f.uf, f.vf,
				f.wf, f.Qc, f.xf, f.yf, f.Xe, f.We, f.Ve, f.Ue, f.ve, f.we,
				f.xe, f.ye, f.ze, f.Ae, f.Be, f.Ce, f.ue, f.Ee, f.Fe, f.Ge,
				f.He, f.Ie, f.Je, f.Ke, f.Le, f.Me ];
		var u = {
			j : "y",
			i : "x",
			B : "m",
			z : "t",
			ab : "r",
			L : "rX",
			N : "rY",
			q : "sX",
			p : "sY",
			cb : "tX",
			bb : "tY",
			U : "tZ",
			Hb : "kX",
			Bb : "kY",
			xb : "o",
			fb : "e",
			kb : "i",
			f : "c"
		};
		b.g(u, function(b, a) {
			h[b] = a
		});
		q(k(n, 1));
		c.u(-1);
		var p = g.Cg || [], e = [].concat(p[b.mc(b.k(n, "b"))] || []);
		e.push({
			b : c.Jb(),
			d : e.length ? 0 : l
		});
		s(e);
		a.u(-1)
	};
	jssor_1_slider_init = function() {
		var g = [ [ {
			b : 5500,
			d : 3e3,
			o : -1,
			r : 240,
			e : {
				r : 2
			}
		} ], [ {
			b : -1,
			d : 1,
			o : -1,
			c : {
				x : 51,
				t : -51
			}
		}, {
			b : 0,
			d : 1e3,
			o : 1,
			c : {
				x : -51,
				t : 51
			},
			e : {
				o : 7,
				c : {
					x : 7,
					t : 7
				}
			}
		} ], [ {
			b : -1,
			d : 1,
			o : -1,
			sX : 9,
			sY : 9
		}, {
			b : 1e3,
			d : 1e3,
			o : 1,
			sX : -9,
			sY : -9,
			e : {
				sX : 2,
				sY : 2
			}
		} ], [ {
			b : -1,
			d : 1,
			o : -1,
			r : -180,
			sX : 9,
			sY : 9
		}, {
			b : 2e3,
			d : 1e3,
			o : 1,
			r : 180,
			sX : -9,
			sY : -9,
			e : {
				r : 2,
				sX : 2,
				sY : 2
			}
		} ], [ {
			b : -1,
			d : 1,
			o : -1
		}, {
			b : 3e3,
			d : 2e3,
			y : 180,
			o : 1,
			e : {
				y : 16
			}
		} ], [ {
			b : -1,
			d : 1,
			o : -1,
			r : -150
		}, {
			b : 7500,
			d : 1600,
			o : 1,
			r : 150,
			e : {
				r : 3
			}
		} ], [ {
			b : 1e4,
			d : 2e3,
			x : -379,
			e : {
				x : 7
			}
		} ], [ {
			b : 1e4,
			d : 2e3,
			x : -379,
			e : {
				x : 7
			}
		} ], [ {
			b : -1,
			d : 1,
			o : -1,
			r : 288,
			sX : 9,
			sY : 9
		}, {
			b : 9100,
			d : 900,
			x : -1400,
			y : -660,
			o : 1,
			r : -288,
			sX : -9,
			sY : -9,
			e : {
				r : 6
			}
		}, {
			b : 1e4,
			d : 1600,
			x : -200,
			o : -1,
			e : {
				x : 16
			}
		} ] ], j = {
			Zb : d,
			Pb : 800,
			jd : f.Qc,
			lf : {
				G : t,
				tb : g
			},
			Re : {
				G : s
			},
			Se : {
				G : r
			}
		}, e = new i("jssor_1", j);
		function a() {
			var b = e.W.parentNode.clientWidth;
			if (b) {
				b = c.min(b, 1920);
				e.fg(b)
			} else
				h.setTimeout(a, 30)
		}
		a();
		b.a(h, "load", a);
		b.a(h, "resize", a);
		b.a(h, "orientationchange", a)
	}
})(window, document, Math, null, true, false)