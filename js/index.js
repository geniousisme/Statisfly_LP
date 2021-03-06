var nav_height = 50;
$(function () {
  $(document).foundation();
  var a = detect_screen();
  a.mobile && create_mobile_nav(), a.small ? ($.scrollIt({
      easing: "easeInOutExpo",
      scrollTime: 700,
      topOffset: 0,
      onPageChange: function (a) {
        var e = "#" + $("[data-scroll-index=" + a + "]").attr("id");
        ga("send", "pageview", e)
      }
    }),
    $(".chart").easyPieChart({
      lineWidth: 15,
      size: 200,
      barColor: "#8bdaa2",
      trackColor: "#f2f2f2",
      animate: 1400,
      scaleColor: !1,
      lineCap: "square"
    }),
    $(".path-icon-list").find("li").addClass("animate")) : ($("nav").sticky({
    topSpacing: 0,
    wrapperClassName: "nav-wrapper"
  }), $.scrollIt({
    easing: "easeInOutExpo",
    scrollTime: 700,
    // topOffset: -nav_height,
    topOffset: 0,
    onPageChange: function (a) {
      var e = "#" + $("[data-scroll-index=" + a + "]").attr("id");
      ga("send", "pageview", e)
    }
  }), $(".parallax-wrapper").each(function () {
    var a = $(this),
      e = parseFloat(a.attr("data-bgspeed"));
    return -1 == e ? (a.css("background-attachment", "fixed"), void a.css("background-position", "center center")) : void $(window).scroll({
      section: a,
      speed: e
    }, parallax_calc)
  }), $(window).scroll({
    target: $(".chart")
  }, pie_chart), $(window).scroll({
    target: $(".path-icon-list")
  }, list_animation)), $(window).resize(function () {
    tasks()
  }), $("body").on("click", "[data-ga]", function () {
    ga("send", "event", "button", "click", $(this).data("ga"))
  })
});

var tasks = function () {
    var a = detect_screen();
    a.mobile ? create_mobile_nav() : delete_mobile_nav(), a.small ? ($(".nav-wrapper").length > 0 && $("nav").unstick(), $.scrollIt({
      easing: "easeInOutExpo",
      scrollTime: 700,
      topOffset: 0,
      onPageChange: function (a) {
        var e = "#" + $("[data-scroll-index=" + a + "]").attr("id");
        ga("send", "pageview", e)
      }
    }), $(window).off("scroll", parallax_calc), $(".parallax-wrapper").removeAttr("style"), $(".chart").easyPieChart({
      lineWidth: 15,
      size: 200,
      barColor: "#8bdaa2",
      trackColor: "#f2f2f2",
      animate: 1400,
      scaleColor: !1,
      lineCap: "square"
    }), $(".path-icon-list").find("li").addClass("animate")) : (0 === $(".nav-wrapper").length && $("nav").sticky({
      topSpacing: 0,
      wrapperClassName: "nav-wrapper"
    }), $.scrollIt({
      easing: "easeInOutExpo",
      scrollTime: 700,
      // topOffset: -nav_height,
      topOffset: 0,
      onPageChange: function (a) {
        var e = "#" + $("[data-scroll-index=" + a + "]").attr("id");
        ga("send", "pageview", e)
      }
    }), $(".parallax-wrapper").each(function () {
      var a = $(this),
        e = parseFloat(a.attr("data-bgspeed"));
      return -1 == e ? (a.css("background-attachment", "fixed"), void a.css("background-position", "center center")) : void $(window).scroll({
        section: a,
        speed: e
      }, parallax_calc)
    }), $(window).scroll({
      target: $(".chart")
    }, pie_chart), $(window).scroll({
      target: $(".path-icon-list")
    }, list_animation))
  },
  create_mobile_nav = function () {
    $(".small-menu").addClass("open"), $(".menu-icon").click(function (a) {
      a.preventDefault(), $(".sub-nav").toggleClass("open")
    }), $(".sub-nav").click(function () {
      $(".sub-nav").toggleClass("open")
    })
  },
  delete_mobile_nav = function () {
    $(".sub-nav").off("click"), $(".menu-icon").off("click"), $(".small-menu").removeClass("open")
  },
  detect_screen = function () {
    var a = !matchMedia(Foundation.media_queries.large).matches,
      e = matchMedia(Foundation.media_queries.small).matches;
    return {
      small: a,
      mobile: e
    }
  },
  parallax_calc = function (a) {
    var e = a.data.section,
      t = a.data.speed;
    if ($(window).scrollTop() + $(window).height() > e.offset().top && $(window).scrollTop() < e.offset().top + e.outerHeight()) {
      var n = 0;
      n = $(window).height() > e.offset().top ? $(window).scrollTop() : $(window).scrollTop() + $(window).height() - e.offset().top, e.css("background-position", "center " + -n * t + "px")
    }
  },
  pie_chart = function (a) {
    var e = a.data.target;
    $(window).scrollTop() + $(window).height() > e.offset().top + 100 && e.easyPieChart({
      lineWidth: 15,
      size: 200,
      barColor: "#8bdaa2",
      trackColor: "#f2f2f2",
      animate: 1400,
      scaleColor: !1,
      lineCap: "square"
    })
  },
  list_animation = function (a) {
    var e = a.data.target;
    if ($(window).scrollTop() + $(window).height() > e.offset().top + 250) {
      var t = e.find(">li");
      t.each(function (a) {
        var e = $(this);
        setTimeout(function () {
          e.addClass("animate")
        }, 600 * a)
      })
    }
  };



