! function (o) {
  var t = {};

  function n(e) {
    if (t[e]) return t[e].exports;
    var r = t[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return o[e].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = o, n.c = t, n.d = function (e, r, o) {
    n.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: o
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (r, e) {
    if (1 & e && (r = n(r)), 8 & e) return r;
    if (4 & e && "object" == typeof r && r && r.__esModule) return r;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: r
      }), 2 & e && "string" != typeof r)
      for (var t in r) n.d(o, t, function (e) {
        return r[e]
      }.bind(null, t));
    return o
  }, n.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(r, "a", r), r
  }, n.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r)
  }, n.p = "", n(n.s = 0)
}([function (e, r, o) {
  "use strict";
  o.r(r);
  o(1);
  $(document).on("ready", function () {
    $(".slider_thumb").slick({
      arrows: !1,
      asNavFor: ".thumb",
      autoplay: !0,
      speed: 0
    }), $(".thumb").slick({
      asNavFor: ".slider_thumb",
      focusOnSelect: !0,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: !1
    })
  }), $(".p-humburger__box").on("click", function () {
    $(".p-humburger__toggle").toggleClass("close"), $(".p-humburger").slideToggle(), $("body").toggleClass("no_scroll")
  }), $(".p-humburger__close").on("click", function () {
    $(".p-humburger__toggle").toggleClass("close"), $(".p-humburger").slideToggle()
  }), $(".p-humburger a[href]").on("click", function () {
    $(".p-humburger__toggle").toggleClass("close"), $(".p-humburger").slideToggle(), $("body").toggleClass("no_scroll")
  })
}, function (e, r, o) {}]);
