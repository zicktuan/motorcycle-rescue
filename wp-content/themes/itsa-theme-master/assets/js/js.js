/**
 * Created by VuDepTrai on 10/11/2016.
 */
function toggleElement(n) {
    $("#" + n).toggle("fast", function() {})
}

function formatMobile(n, t) {
    var i = t;
    try {
        i = i.replace(" ", "");
        n == "AU" ? i = t.substr(0, 4) + " " + t.substr(4, 3) + " " + t.substr(4, 3) : n == "NZ" && (i = t.substr(0, 4) + " " + t.substr(4, 3) + " " + t.substr(4, 3))
    } catch (r) {
        i = t
    }
    return i
}

function formatMobileAU(n) {
    var i, t;
    return (n == "" || n == undefined) && (n = "0400000000"), i = ("" + n).replace(/\D/g, ""), t = i.match(/^(\d{4})(\d{3})(\d{3})$/), t ? "" + t[1] + " " + t[2] + " " + t[3] : null
}

function formatMobileNZ(n) {
    var i, t;
    return (n == "" || n == undefined) && (n = "020000000"), i = ("" + n).replace(/\D/g, ""), t = i.match(/^(\d{4})(\d{3})(\d{3})$/), t ? "" + t[1] + " " + t[2] + " " + t[3] : null
}

function isValidMobile(n) {
    var t = !1;
    try {
        n = n.split(" ").join("");
        (n.substring(0, 2) == "04" || n.substring(0, 2) == "02") && (n.length == 9 || n.length == 10 || n.length == 11) && (t = !0)
    } catch (i) {}
    return t
}

function isValidMobileFirstFour(n, t) {
    var i = t.Value.split(" ").join("");
    t.IsValid = (i.substring(0, 2) == "04" || i.substring(0, 2) == "02") && (i.length == 9 || i.length == 10 || i.length == 11)
}

function isValidEmail(n) {
    var t = "[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+",
        i = "\\x5c[\\x00-\\x7f]",
        f = "\\x5b([^\\x0d\\x5b-\\x5d\\x80-\\xff]|" + i + ")*\\x5d",
        e = "\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]|" + i + ")*\\x22",
        o = t,
        r = "(" + o + "|" + f + ")",
        u = "(" + t + "|" + e + ")",
        s = r + "(\\x2e" + r + ")*",
        h = u + "(\\x2e" + u + ")*",
        c = h + "\\x40" + s,
        l = "^" + c + "$",
        a = new RegExp(l);
    return a.test(n) ? !0 : !1
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function getBoolean(n) {
    switch (n.toLowerCase()) {
        case "true":
        case "yes":
        case "1":
            return !0;
        case "false":
        case "no":
        case "0":
        case null:
            return !1;
        default:
            return Boolean(n)
    }
}

function isValidPhoneNumberAU(n) {
    var t = /^\D*0(\D*\d){9}\D*$/;
    return (n = n.replace(/ /g, ""), n = n.trim(), n.match(t)) ? !0 : (t = /^([1][3])(\d{4,8}$)/, n.match(t)) ? !0 : (t = /^([1][8][0][0])(\d{6}$)/, n.match(t)) ? !0 : !1
}

function isValidPhoneNumberNZ(n) {
    var t = /(^\([0]\d{1}\))(\d{7}$)|(^\([0][2]\d{1}\))(\d{6,8}$)|([0][8][0][0])([\s])(\d{5,8}$)/;
    return (n = n.replace(/ /g, ""), n = n.trim(), n.match(t)) ? !0 : (t = /^([0][8][0][0])(\d{5,8}$)/, n.match(t)) ? !0 : !1
}

function showMessage(n, t) {
    try {
        t == undefined && (t = "Message");
        $("#dvMessageModalTitle").html(t);
        $("#dvMessageModalBody").html(n)
    } catch (i) {
        $("#dvMessageModalBody").html(i)
    }
    $("#dvMessageModal").modal("show")
}

function sleep(n) {
    for (var i = (new Date).getTime(), t = 0; t < 1e7; t++)
        if ((new Date).getTime() - i > n) break
}

function setWatermark(n, t) {
    $("#" + n).data("watermark", t);
    var i = "#" + n;
    ($(i).val() == undefined || $(i).val() == "") && $(i).val(t);
    $(i).focus(function() {
        watermarkfocus(n)
    });
    $(i).blur(function() {
        watermarkblur(n)
    })
}

function watermarkfocus(n) {
    var t = "#" + n,
        i = $(t).val(),
        r = $(t).data("watermark"),
        u = i === r;
    u && $(t).val("")
}

function watermarkblur(n) {
    $("#" + n).val() == "" && $("#" + n).val($("#" + n).data("watermark"))
}

function changePhoneNumber() {
    $(".rotate, #rotate").each(function() {
        $(this).children(".contactNumberYoui").css("display") == "none" ? ($(this).children(".contactNumber").fadeOut("fast"), $(this).children(".contactNumberYoui").fadeIn("slow")) : ($(this).children(".contactNumber").fadeIn("slow"), $(this).children(".contactNumberYoui").fadeOut("fast"))
    })
}

function containsInvalidCharacter(n) {
    return n ? (n = n.toLowerCase(), n.indexOf("<") >= 0 || n.indexOf(">") >= 0 || n.indexOf("script") >= 0 || n.indexOf("img") >= 0 || n.indexOf("alert") >= 0 || n.indexOf("iframe") >= 0 || n.indexOf("div") >= 0 || n.indexOf("span") >= 0) : !1
}

function clearCountryRedirectShowCookieAPI(n) {
    var t = getbaseurl() + "api/CountryRedirect/ClearCountryRedirectShowCookie";
    $.ajax({
        type: "POST",
        url: t,
        dataType: "json",
        success: function() {
            n()
        },
        statusCode: {},
        error: function() {}
    })
}

function createWebUserAPI(n, t, i, r) {
    var u = getbaseurl() + "api/WebUser?firstName=" + $.trim(n) + "&email=" + $.trim(t) + "&mobile=" + $.trim(i);
    $.ajax({
        type: "POST",
        url: u,
        dataType: "json",
        success: function(n) {
            r(n)
        },
        statusCode: {
            404: function() {
                r("error")
            },
            500: function() {
                r("error")
            }
        },
        error: function() {
            r("error")
        }
    })
}

function addFeedbackAPI(n, t, i, r, u, f) {
    var e = getbaseurl() + "api/Feedback?feedBack=" + encodeURIComponent(n) + "&subject=" + encodeURIComponent(t) + "&satisfaction=" + i + "&categories=" + r + "&pin=" + u;
    $.ajax({
        type: "POST",
        url: e,
        dataType: "json",
        cache: !1,
        success: function(n) {
            f(n)
        },
        statusCode: {},
        error: function() {
            f("failed")
        }
    })
}

function addCommentAPI(n, t, i, r, u, f, e) {
    var o = getbaseurl() + "api/Comment?feedBack=" + encodeURIComponent(n) + "&subject=" + encodeURIComponent(t) + "&satisfaction=" + i + "&pin=" + r + "&feedbackId=" + u + "&parentCommentId=" + f;
    $.ajax({
        type: "POST",
        url: o,
        dataType: "json",
        success: function(n) {
            e(n)
        },
        statusCode: {},
        error: function(n, t) {
            console.log(t)
        }
    })
}

function addFeedbackLikeAPI(n, t, i, r) {
    var u = getbaseurl() + "api/Like?likeType=feedback&id=" + n;
    $.ajax({
        type: "POST",
        url: u,
        dataType: "json",
        success: function() {
            r("success", t, i)
        },
        statusCode: {},
        error: function() {}
    })
}

function addCommentLikeAPI(n, t, i, r) {
    var u = getbaseurl() + "api/Like?likeType=comment&id=" + n;
    $.ajax({
        type: "POST",
        url: u,
        dataType: "json",
        success: function() {
            r("success", t, i)
        },
        statusCode: {},
        error: function() {}
    })
}

function policyLoginAPI(n, t, i) {
    var r = getbaseurl() + "api/PolicyLogin";
    $.ajax({
        type: "Post",
        url: r,
        contentType: "application/json",
        data: JSON.stringify({
            policynumber: n,
            password: t
        }),
        dataType: "json",
        success: function(n) {
            i(n)
        },
        statusCode: {},
        error: function() {}
    })
}

function youiLoginAPI(n, t, i) {
    var r = getbaseurl() + "api/YouiLogin";
    $.ajax({
        type: "Post",
        url: r,
        contentType: "application/json",
        data: JSON.stringify({
            username: n,
            password: t
        }),
        dataType: "json",
        success: function(n) {
            i(n)
        },
        statusCode: {},
        error: function() {}
    })
}

function getWebUserAPI(n) {
    var t = getbaseurl() + "api/WebUser";
    $.ajax({
        type: "Get",
        url: t,
        dataType: "json",
        success: function(t) {
            n(t)
        },
        statusCode: {},
        error: function() {}
    })
}

function getWebUserTypeAPI(n) {
    var t = getbaseurl() + "api/WebUserType";
    $.ajax({
        type: "Get",
        url: t,
        dataType: "json",
        success: function(t) {
            n(t)
        },
        statusCode: {},
        error: function() {}
    })
}

function hideWebMessageAPI(n, t) {
    var i = getbaseurl() + "api/hidewebmessage?hideWebMessage=" + n;
    $.ajax({
        type: "Post",
        url: i,
        dataType: "json",
        success: function() {
            t()
        },
        statusCode: {},
        error: function() {}
    })
}

function getSuburbListAPI(n, t, i) {
    var r = getbaseurl() + "api/Suburb?prefixtext=" + n + "&contextkey=" + t;
    console.log(r);
    $.ajax({
        type: "Get",
        url: r,
        dataType: "json",
        success: function(n) {
            i(n)
        },
        statusCode: {},
        error: function() {}
    })
}

function getStreetListAPI(n, t, i) {
    var r = getbaseurl() + "api/Street?prefixtext=" + n + "&contextkey=" + t;
    $.ajax({
        type: "Get",
        url: r,
        dataType: "json",
        success: function(n) {
            i(n)
        },
        statusCode: {},
        error: function() {}
    })
}

function clearCacheAPI() {
    var n = getbaseurl() + "api/clearcache";
    $.ajax({
        type: "POST",
        url: n,
        dataType: "json",
        success: function() {},
        statusCode: {},
        error: function() {}
    })
}

function checkIsInternalUserAPI(n) {
    var t = getbaseurl() + "api/internaluser";
    $.ajax({
        type: "GET",
        url: t,
        dataType: "json",
        success: function(t) {
            n(t)
        },
        statusCode: {},
        error: function() {}
    })
}

function addViewFeedbackAPI(n, t) {
    var i = getbaseurl() + "api/feedbackviewed?feedbackCode=" + n;
    $.ajax({
        type: "POST",
        url: i,
        dataType: "json",
        success: function(n) {
            t(n)
        },
        statusCode: {},
        error: function() {}
    })
}

function getFeedbackViewedAPI(n) {
    var t = getbaseurl() + "api/feedbackviewed";
    $.ajax({
        type: "GET",
        url: t,
        dataType: "json",
        success: function(t) {
            n(t)
        },
        statusCode: {},
        error: function() {}
    })
}

function addTestErrorLogApi(n) {
    var t = getbaseurl() + "api/testerrorlog?errorMessage=TEST ERROR MESSAGE";
    $.ajax({
        type: "POST",
        url: t,
        dataType: "json",
        success: function(t) {
            n(t)
        },
        statusCode: {},
        error: function() {}
    })
}
var True, False, timeout;
(function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
})(function(n) {
    function h(t, i) {
        var r, u, f, e = t.nodeName.toLowerCase();
        return "area" === e ? (r = t.parentNode, u = r.name, !t.href || !u || r.nodeName.toLowerCase() !== "map") ? !1 : (f = n("img[usemap='#" + u + "']")[0], !!f && c(f)) : (/input|select|textarea|button|object/.test(e) ? !t.disabled : "a" === e ? t.href || i : i) && c(t)
    }

    function c(t) {
        return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function() {
                return n.css(this, "visibility") === "hidden"
            }).length
    }

    function k(n) {
        for (var t, i; n.length && n[0] !== document;) {
            if (t = n.css("position"), (t === "absolute" || t === "relative" || t === "fixed") && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && i !== 0)) return i;
            n = n.parent()
        }
        return 0
    }

    function l() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._datepickerShowing = !1;
        // this._inDialog = !1;
        // this._mainDivId = "ui-datepicker-div";
        // this._inlineClass = "ui-datepicker-inline";
        // this._appendClass = "ui-datepicker-append";
        // this._triggerClass = "ui-datepicker-trigger";
        // this._dialogClass = "ui-datepicker-dialog";
        // this._disableClass = "ui-datepicker-disabled";
        // this._unselectableClass = "ui-datepicker-unselectable";
        // this._currentClass = "ui-datepicker-current-day";
        // this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        n.extend(this._defaults, this.regional[""]);
        this.regional.en = n.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = n.extend(!0, {}, this.regional.en);
        this.dpDiv = a(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
    }

    // function a(t) {
    //     var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    //     return t.delegate(i, "mouseout", function() {
    //         n(this).removeClass("ui-state-hover");
    //         this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).removeClass("ui-datepicker-prev-hover");
    //         this.className.indexOf("ui-datepicker-next") !== -1 && n(this).removeClass("ui-datepicker-next-hover")
    //     }).delegate(i, "mouseover", v)
    // }
    //
    // function v() {
    //     n.datepicker._isDisabledDatepicker(u.inline ? u.dpDiv.parent()[0] : u.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && n(this).addClass("ui-datepicker-next-hover"))
    // }

    function r(t, i) {
        n.extend(t, i);
        for (var r in i) i[r] == null && (t[r] = i[r]);
        return t
    }

    function t(n) {
        return function() {
            var t = this.element.val();
            n.apply(this, arguments);
            this._refresh();
            t !== this.element.val() && this._trigger("change")
        }
    }
    var y, f, d, i, g, nt, tt, it, rt, ut, u, ft, et, ot, st, ht, e, o, ct, lt, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, hi, ci, li, ai;
    n.ui = n.ui || {};
    n.extend(n.ui, {
        version: "1.11.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    n.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                u = i === "absolute",
                f = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                r = this.parents().filter(function() {
                    var t = n(this);
                    return u && t.css("position") === "static" ? !1 : f.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return i === "fixed" || !r.length ? n(this[0].ownerDocument || document) : r
        },
        uniqueId: function() {
            var n = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++n)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id")
            })
        }
    });
    n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
            return function(i) {
                return !!n.data(i, t)
            }
        }) : function(t, i, r) {
            return !!n.data(t, r[3])
        },
        focusable: function(t) {
            return h(t, !isNaN(n.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var i = n.attr(t, "tabindex"),
                r = isNaN(i);
            return (r || i >= 0) && h(t, !r)
        }
    });
    n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function(t, i) {
        function r(t, i, r, u) {
            return n.each(e, function() {
                i -= parseFloat(n.css(t, "padding" + this)) || 0;
                r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
                u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
            }), i
        }
        var e = i === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            u = i.toLowerCase(),
            f = {
                innerWidth: n.fn.innerWidth,
                innerHeight: n.fn.innerHeight,
                outerWidth: n.fn.outerWidth,
                outerHeight: n.fn.outerHeight
            };
        n.fn["inner" + i] = function(t) {
            return t === undefined ? f["inner" + i].call(this) : this.each(function() {
                n(this).css(u, r(this, t) + "px")
            })
        };
        n.fn["outer" + i] = function(t, e) {
            return typeof t != "number" ? f["outer" + i].call(this, t) : this.each(function() {
                n(this).css(u, r(this, t, !0, e) + "px")
            })
        }
    });
    n.fn.addBack || (n.fn.addBack = function(n) {
        return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
    });
    n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
        }
    }(n.fn.removeData));
    n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    n.fn.extend({
        focus: function(t) {
            return function(i, r) {
                return typeof i == "number" ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        n(t).focus();
                        r && r.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(n.fn.focus),
        disableSelection: function() {
            var n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(n + ".ui-disableSelection", function(n) {
                    n.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (t !== undefined) return this.css("zIndex", t);
            if (this.length)
                for (var i = n(this[0]), r, u; i.length && i[0] !== document;) {
                    if (r = i.css("position"), (r === "absolute" || r === "relative" || r === "fixed") && (u = parseInt(i.css("zIndex"), 10), !isNaN(u) && u !== 0)) return u;
                    i = i.parent()
                }
            return 0
        }
    });
    n.ui.plugin = {
        add: function(t, i, r) {
            var u, f = n.ui[t].prototype;
            for (u in r) f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]])
        },
        call: function(n, t, i, r) {
            var u, f = n.plugins[t];
            if (f && (r || n.element[0].parentNode && n.element[0].parentNode.nodeType !== 11))
                for (u = 0; u < f.length; u++) n.options[f[u][0]] && f[u][1].apply(n.element, i)
        }
    };
    y = 0;
    f = Array.prototype.slice;
    n.cleanData = function(t) {
        return function(i) {
            for (var r, u, f = 0;
                 (u = i[f]) != null; f++) try {
                r = n._data(u, "events");
                r && r.remove && n(u).triggerHandler("remove")
            } catch (e) {}
            t(i)
        }
    }(n.cleanData);
    n.widget = function(t, i, r) {
        var s, f, u, o, h = {},
            e = t.split(".")[0];
        return t = t.split(".")[1], s = e + "-" + t, r || (r = i, i = n.Widget), n.expr[":"][s.toLowerCase()] = function(t) {
            return !!n.data(t, s)
        }, n[e] = n[e] || {}, f = n[e][t], u = n[e][t] = function(n, t) {
            if (!this._createWidget) return new u(n, t);
            arguments.length && this._createWidget(n, t)
        }, n.extend(u, f, {
            version: r.version,
            _proto: n.extend({}, r),
            _childConstructors: []
        }), o = new i, o.options = n.widget.extend({}, o.options), n.each(r, function(t, r) {
            if (!n.isFunction(r)) {
                h[t] = r;
                return
            }
            h[t] = function() {
                var n = function() {
                        return i.prototype[t].apply(this, arguments)
                    },
                    u = function(n) {
                        return i.prototype[t].apply(this, n)
                    };
                return function() {
                    var i = this._super,
                        f = this._superApply,
                        t;
                    return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t
                }
            }()
        }), u.prototype = n.widget.extend(o, {
            widgetEventPrefix: f ? o.widgetEventPrefix || t : t
        }, h, {
            constructor: u,
            namespace: e,
            widgetName: t,
            widgetFullName: s
        }), f ? (n.each(f._childConstructors, function(t, i) {
            var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto)
        }), delete f._childConstructors) : i._childConstructors.push(u), n.widget.bridge(t, u), u
    };
    n.widget.extend = function(t) {
        for (var e = f.call(arguments, 1), u = 0, o = e.length, i, r; u < o; u++)
            for (i in e[u]) r = e[u][i], e[u].hasOwnProperty(i) && r !== undefined && (t[i] = n.isPlainObject(r) ? n.isPlainObject(t[i]) ? n.widget.extend({}, t[i], r) : n.widget.extend({}, r) : r);
        return t
    };
    n.widget.bridge = function(t, i) {
        var r = i.prototype.widgetFullName || t;
        n.fn[t] = function(u) {
            var s = typeof u == "string",
                o = f.call(arguments, 1),
                e = this;
            return u = !s && o.length ? n.widget.extend.apply(null, [u].concat(o)) : u, s ? this.each(function() {
                var i, f = n.data(this, r);
                return u === "instance" ? (e = f, !1) : f ? !n.isFunction(f[u]) || u.charAt(0) === "_" ? n.error("no such method '" + u + "' for " + t + " widget instance") : (i = f[u].apply(f, o), i !== f && i !== undefined ? (e = i && i.jquery ? e.pushStack(i.get()) : i, !1) : void 0) : n.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + u + "'")
            }) : this.each(function() {
                var t = n.data(this, r);
                t ? (t.option(u || {}), t._init && t._init()) : n.data(this, r, new i(u, this))
            }), e
        }
    };
    n.Widget = function() {};
    n.Widget._childConstructors = [];
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = n(i || this.defaultElement || this)[0];
            this.element = n(i);
            this.uuid = y++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = n();
            this.hoverable = n();
            this.focusable = n();
            i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(n) {
                    n.target === i && this.destroy()
                }
            }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: n.noop,
        _getCreateEventData: n.noop,
        _create: n.noop,
        _init: n.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: n.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var e = t,
                r, u, f;
            if (arguments.length === 0) return n.widget.extend({}, this.options);
            if (typeof t == "string")
                if (e = {}, r = t.split("."), t = r.shift(), r.length) {
                    for (u = e[t] = n.widget.extend({}, this.options[t]), f = 0; f < r.length - 1; f++) u[r[f]] = u[r[f]] || {}, u = u[r[f]];
                    if (t = r.pop(), arguments.length === 1) return u[t] === undefined ? null : u[t];
                    u[t] = i
                } else {
                    if (arguments.length === 1) return this.options[t] === undefined ? null : this.options[t];
                    e[t] = i
                }
            return this._setOptions(e), this
        },
        _setOptions: function(n) {
            for (var t in n) this._setOption(t, n[t]);
            return this
        },
        _setOption: function(n, t) {
            return this.options[n] = t, n === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, i, r) {
            var f, u = this;
            typeof t != "boolean" && (r = i, i = t, t = !1);
            r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
            n.each(r, function(r, e) {
                function o() {
                    if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return (typeof e == "string" ? u[e] : e).apply(u, arguments)
                }
                typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                var s = r.match(/^([\w:-]*)\s*(.*)$/),
                    h = s[1] + u.eventNamespace,
                    c = s[2];
                c ? f.delegate(c, h, o) : i.bind(h, o)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            t.unbind(i).undelegate(i);
            this.bindings = n(this.bindings.not(t).get());
            this.focusable = n(this.focusable.not(t).get());
            this.hoverable = n(this.hoverable.not(t).get())
        },
        _delay: function(n, t) {
            function r() {
                return (typeof n == "string" ? i[n] : n).apply(i, arguments)
            }
            var i = this;
            return setTimeout(r, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t);
            this._on(t, {
                mouseenter: function(t) {
                    n(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    n(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t);
            this._on(t, {
                focusin: function(t) {
                    n(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    n(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent, f)
                for (u in f) u in i || (i[u] = f[u]);
            return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
        }
    };
    n.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        n.Widget.prototype["_" + t] = function(r, u, f) {
            typeof u == "string" && (u = {
                effect: u
            });
            var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
            u = u || {};
            typeof u == "number" && (u = {
                duration: u
            });
            o = !n.isEmptyObject(u);
            u.complete = f;
            u.delay && r.delay(u.delay);
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                n(this)[t]();
                f && f.call(r[0]);
                i()
            })
        }
    });
    d = n.widget;
    i = !1;
    n(document).mouseup(function() {
        i = !1
    });
    g = n.widget("ui.mouse", {
        version: "1.11.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(n) {
                return t._mouseDown(n)
            }).bind("click." + this.widgetName, function(i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent")) return n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!i) {
                this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(t);
                this._mouseDownEvent = t;
                var r = this,
                    u = t.which === 1,
                    f = typeof this.options.cancel == "string" && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
                return !u || f || !this._mouseCapture(t) ? !0 : (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    r.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted)) ? (t.preventDefault(), !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(n) {
                    return r._mouseMove(n)
                }, this._mouseUpDelegate = function(n) {
                    return r._mouseUp(n)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), i = !0, !0)
            }
        },
        _mouseMove: function(t) {
            return this._mouseMoved && (n.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button || !t.which) ? this._mouseUp(t) : ((t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted) ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), i = !1, !1
        },
        _mouseDistanceMet: function(n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }),
        function() {
            function f(n, t, i) {
                return [parseFloat(n[0]) * (a.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (a.test(n[1]) ? i / 100 : 1)]
            }

            function i(t, i) {
                return parseInt(n.css(t, i), 10) || 0
            }

            function v(t) {
                var i = t[0];
                return i.nodeType === 9 ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : n.isWindow(i) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            n.ui = n.ui || {};
            var u, e, r = Math.max,
                t = Math.abs,
                o = Math.round,
                s = /left|center|right/,
                h = /top|center|bottom/,
                c = /[\+\-]\d+(\.[\d]+)?%?/,
                l = /^\w+/,
                a = /%$/,
                y = n.fn.position;
            n.position = {
                scrollbarWidth: function() {
                    if (u !== undefined) return u;
                    var r, i, t = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
                        f = t.children()[0];
                    return n("body").append(t), r = f.offsetWidth, t.css("overflow", "scroll"), i = f.offsetWidth, r === i && (i = t[0].clientWidth), t.remove(), u = r - i
                },
                getScrollInfo: function(t) {
                    var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        u = i === "scroll" || i === "auto" && t.width < t.element[0].scrollWidth,
                        f = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
                    return {
                        width: f ? n.position.scrollbarWidth() : 0,
                        height: u ? n.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var i = n(t || window),
                        r = n.isWindow(i[0]),
                        u = !!i[0] && i[0].nodeType === 9;
                    return {
                        element: i,
                        isWindow: r,
                        isDocument: u,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: r || u ? i.width() : i.outerWidth(),
                        height: r || u ? i.height() : i.outerHeight()
                    }
                }
            };
            n.fn.position = function(u) {
                if (!u || !u.of) return y.apply(this, arguments);
                u = n.extend({}, u);
                var k, a, p, b, w, g, nt = n(u.of),
                    it = n.position.getWithinInfo(u.within),
                    rt = n.position.getScrollInfo(it),
                    d = (u.collision || "flip").split(" "),
                    tt = {};
                return g = v(nt), nt[0].preventDefault && (u.at = "left top"), a = g.width, p = g.height, b = g.offset, w = n.extend({}, b), n.each(["my", "at"], function() {
                    var n = (u[this] || "").split(" "),
                        t, i;
                    n.length === 1 && (n = s.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
                    n[0] = s.test(n[0]) ? n[0] : "center";
                    n[1] = h.test(n[1]) ? n[1] : "center";
                    t = c.exec(n[0]);
                    i = c.exec(n[1]);
                    tt[this] = [t ? t[0] : 0, i ? i[0] : 0];
                    u[this] = [l.exec(n[0])[0], l.exec(n[1])[0]]
                }), d.length === 1 && (d[1] = d[0]), u.at[0] === "right" ? w.left += a : u.at[0] === "center" && (w.left += a / 2), u.at[1] === "bottom" ? w.top += p : u.at[1] === "center" && (w.top += p / 2), k = f(tt.at, a, p), w.left += k[0], w.top += k[1], this.each(function() {
                    var y, g, h = n(this),
                        c = h.outerWidth(),
                        l = h.outerHeight(),
                        ut = i(this, "marginLeft"),
                        ft = i(this, "marginTop"),
                        et = c + ut + i(this, "marginRight") + rt.width,
                        ot = l + ft + i(this, "marginBottom") + rt.height,
                        s = n.extend({}, w),
                        v = f(tt.my, h.outerWidth(), h.outerHeight());
                    u.my[0] === "right" ? s.left -= c : u.my[0] === "center" && (s.left -= c / 2);
                    u.my[1] === "bottom" ? s.top -= l : u.my[1] === "center" && (s.top -= l / 2);
                    s.left += v[0];
                    s.top += v[1];
                    e || (s.left = o(s.left), s.top = o(s.top));
                    y = {
                        marginLeft: ut,
                        marginTop: ft
                    };
                    n.each(["left", "top"], function(t, i) {
                        n.ui.position[d[t]] && n.ui.position[d[t]][i](s, {
                            targetWidth: a,
                            targetHeight: p,
                            elemWidth: c,
                            elemHeight: l,
                            collisionPosition: y,
                            collisionWidth: et,
                            collisionHeight: ot,
                            offset: [k[0] + v[0], k[1] + v[1]],
                            my: u.my,
                            at: u.at,
                            within: it,
                            elem: h
                        })
                    });
                    u.using && (g = function(n) {
                        var i = b.left - s.left,
                            o = i + a - c,
                            f = b.top - s.top,
                            v = f + p - l,
                            e = {
                                target: {
                                    element: nt,
                                    left: b.left,
                                    top: b.top,
                                    width: a,
                                    height: p
                                },
                                element: {
                                    element: h,
                                    left: s.left,
                                    top: s.top,
                                    width: c,
                                    height: l
                                },
                                horizontal: o < 0 ? "left" : i > 0 ? "right" : "center",
                                vertical: v < 0 ? "top" : f > 0 ? "bottom" : "middle"
                            };
                        a < c && t(i + o) < a && (e.horizontal = "center");
                        p < l && t(f + v) < p && (e.vertical = "middle");
                        e.important = r(t(i), t(o)) > r(t(f), t(v)) ? "horizontal" : "vertical";
                        u.using.call(this, n, e)
                    });
                    h.offset(n.extend(s, {
                        using: g
                    }))
                })
            };
            n.ui.position = {
                fit: {
                    left: function(n, t) {
                        var e = t.within,
                            u = e.isWindow ? e.scrollLeft : e.offset.left,
                            o = e.width,
                            s = n.left - t.collisionPosition.marginLeft,
                            i = u - s,
                            f = s + t.collisionWidth - o - u,
                            h;
                        t.collisionWidth > o ? i > 0 && f <= 0 ? (h = n.left + i + t.collisionWidth - o - u, n.left += i - h) : n.left = f > 0 && i <= 0 ? u : i > f ? u + o - t.collisionWidth : u : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = r(n.left - s, n.left)
                    },
                    top: function(n, t) {
                        var o = t.within,
                            u = o.isWindow ? o.scrollTop : o.offset.top,
                            e = t.within.height,
                            s = n.top - t.collisionPosition.marginTop,
                            i = u - s,
                            f = s + t.collisionHeight - e - u,
                            h;
                        t.collisionHeight > e ? i > 0 && f <= 0 ? (h = n.top + i + t.collisionHeight - e - u, n.top += i - h) : n.top = f > 0 && i <= 0 ? u : i > f ? u + e - t.collisionHeight : u : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = r(n.top - s, n.top)
                    }
                },
                flip: {
                    left: function(n, i) {
                        var r = i.within,
                            y = r.offset.left + r.scrollLeft,
                            c = r.width,
                            o = r.isWindow ? r.scrollLeft : r.offset.left,
                            l = n.left - i.collisionPosition.marginLeft,
                            a = l - o,
                            v = l + i.collisionWidth - c - o,
                            u = i.my[0] === "left" ? -i.elemWidth : i.my[0] === "right" ? i.elemWidth : 0,
                            f = i.at[0] === "left" ? i.targetWidth : i.at[0] === "right" ? -i.targetWidth : 0,
                            e = -2 * i.offset[0],
                            s, h;
                        a < 0 ? (s = n.left + u + f + e + i.collisionWidth - c - y, (s < 0 || s < t(a)) && (n.left += u + f + e)) : v > 0 && (h = n.left - i.collisionPosition.marginLeft + u + f + e - o, (h > 0 || t(h) < v) && (n.left += u + f + e))
                    },
                    top: function(n, i) {
                        var r = i.within,
                            y = r.offset.top + r.scrollTop,
                            a = r.height,
                            o = r.isWindow ? r.scrollTop : r.offset.top,
                            v = n.top - i.collisionPosition.marginTop,
                            s = v - o,
                            h = v + i.collisionHeight - a - o,
                            p = i.my[1] === "top",
                            u = p ? -i.elemHeight : i.my[1] === "bottom" ? i.elemHeight : 0,
                            f = i.at[1] === "top" ? i.targetHeight : i.at[1] === "bottom" ? -i.targetHeight : 0,
                            e = -2 * i.offset[1],
                            c, l;
                        s < 0 ? (l = n.top + u + f + e + i.collisionHeight - a - y, n.top + u + f + e > s && (l < 0 || l < t(s)) && (n.top += u + f + e)) : h > 0 && (c = n.top - i.collisionPosition.marginTop + u + f + e - o, n.top + u + f + e > h && (c > 0 || t(c) < h) && (n.top += u + f + e))
                    }
                },
                flipfit: {
                    left: function() {
                        n.ui.position.flip.left.apply(this, arguments);
                        n.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        n.ui.position.flip.top.apply(this, arguments);
                        n.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
                function() {
                    var t, i, r, u, f, o = document.getElementsByTagName("body")[0],
                        s = document.createElement("div");
                    t = document.createElement(o ? "div" : "body");
                    r = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    };
                    o && n.extend(r, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (f in r) t.style[f] = r[f];
                    t.appendChild(s);
                    i = o || document.documentElement;
                    i.insertBefore(t, i.firstChild);
                    s.style.cssText = "position: absolute; left: 10.7432222px;";
                    u = n(s).offset().left;
                    e = u > 10 && u < 11;
                    t.innerHTML = "";
                    i.removeChild(t)
                }()
        }();
    nt = n.ui.position;
    tt = n.widget("ui.accordion", {
        version: "1.11.2",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = n();
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
            t.collapsible || t.active !== !1 && t.active != null || (t.active = 0);
            this._processPanels();
            t.active < 0 && (t.active += this.headers.length);
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : n()
            }
        },
        _createIcons: function() {
            var t = this.options.icons;
            t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var n;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
            this._destroyIcons();
            n = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
            this.options.heightStyle !== "content" && n.css("height", "")
        },
        _setOption: function(n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            n === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t));
            this._super(n, t);
            n !== "collapsible" || t || this.options.active !== !1 || this._activate(0);
            n === "icons" && (this._destroyIcons(), t && this._createIcons());
            n === "disabled" && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t))
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = n.ui.keyCode,
                    u = this.headers.length,
                    f = this.headers.index(t.target),
                    r = !1;
                switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        r = this.headers[(f + 1) % u];
                        break;
                    case i.LEFT:
                    case i.UP:
                        r = this.headers[(f - 1 + u) % u];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t);
                        break;
                    case i.HOME:
                        r = this.headers[0];
                        break;
                    case i.END:
                        r = this.headers[u - 1]
                }
                r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), r.focus(), t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus()
        },
        refresh: function() {
            var t = this.options;
            this._processPanels();
            (t.active !== !1 || t.collapsible !== !0) && this.headers.length ? t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active) : (t.active = !1, this.active = n());
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function() {
            var t = this.headers,
                n = this.panels;
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
            this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
            n && (this._off(t.not(this.headers)), this._off(n.not(this.panels)))
        },
        _refresh: function() {
            var t, i = this.options,
                r = i.heightStyle,
                u = this.element.parent();
            this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
            this.active.next().addClass("ui-accordion-content-active").show();
            this.headers.attr("role", "tab").each(function() {
                var t = n(this),
                    r = t.uniqueId().attr("id"),
                    i = t.next(),
                    u = i.uniqueId().attr("id");
                t.attr("aria-controls", u);
                i.attr("aria-labelledby", r)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide();
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(i.event);
            r === "fill" ? (t = u.height(), this.element.siblings(":visible").each(function() {
                var i = n(this),
                    r = i.css("position");
                r !== "absolute" && r !== "fixed" && (t -= i.outerHeight(!0))
            }), this.headers.each(function() {
                t -= n(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : r === "auto" && (t = 0, this.headers.next().each(function() {
                t = Math.max(t, n(this).css("height", "").height())
            }).height(t))
        },
        _activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return typeof t == "number" ? this.headers.eq(t) : n()
        },
        _setupEvents: function(t) {
            var i = {
                keydown: "_keydown"
            };
            t && n.each(t.split(" "), function(n, t) {
                i[t] = "_eventHandler"
            });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, i);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var i = this.options,
                u = this.active,
                r = n(t.currentTarget),
                f = r[0] === u[0],
                e = f && i.collapsible,
                s = e ? n() : r.next(),
                h = u.next(),
                o = {
                    oldHeader: u,
                    oldPanel: h,
                    newHeader: e ? n() : r,
                    newPanel: s
                };
            (t.preventDefault(), (!f || i.collapsible) && this._trigger("beforeActivate", t, o) !== !1) && (i.active = e ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(o), u.removeClass("ui-accordion-header-active ui-state-active"), i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), r.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var r = t.newPanel,
                i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = r;
            this.prevHide = i;
            this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t));
            i.attr({
                "aria-hidden": "true"
            });
            i.prev().attr("aria-selected", "false");
            r.length && i.length ? i.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : r.length && this.headers.filter(function() {
                return n(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1);
            r.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                tabIndex: 0,
                "aria-expanded": "true"
            })
        },
        _animate: function(n, t, i) {
            var h, r, u, c = this,
                o = 0,
                l = n.length && (!t.length || n.index() < t.index()),
                e = this.options.animate || {},
                f = l && e.down || e,
                s = function() {
                    c._toggleComplete(i)
                };
            if (typeof f == "number" && (u = f), typeof f == "string" && (r = f), r = r || f.easing || e.easing, u = u || f.duration || e.duration, !t.length) return n.animate(this.showProps, u, r, s);
            if (!n.length) return t.animate(this.hideProps, u, r, s);
            h = n.show().outerHeight();
            t.animate(this.hideProps, {
                duration: u,
                easing: r,
                step: function(n, t) {
                    t.now = Math.round(n)
                }
            });
            n.hide().animate(this.showProps, {
                duration: u,
                easing: r,
                complete: s,
                step: function(n, i) {
                    i.now = Math.round(n);
                    i.prop !== "height" ? o += i.now : c.options.heightStyle !== "content" && (i.now = Math.round(h - t.outerHeight() - o), o = 0)
                }
            })
        },
        _toggleComplete: function(n) {
            var t = n.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
            t.length && (t.parent()[0].className = t.parent()[0].className);
            this._trigger("activate", null, n)
        }
    });
    it = n.widget("ui.menu", {
        version: "1.11.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            });
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
            this._on({
                "mousedown .ui-menu-item": function(n) {
                    n.preventDefault()
                },
                "click .ui-menu-item": function(t) {
                    var i = n(t.target);
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    if (!this.previousFilter) {
                        var i = n(t.currentTarget);
                        i.siblings(".ui-state-active").removeClass("ui-state-active");
                        this.focus(t, i)
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(n, t) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(n, i)
                },
                blur: function(t) {
                    this._delay(function() {
                        n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(n) {
                    this._closeOnDocumentClick(n) && this.collapseAll(n);
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = n(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(t) {
            var i, u, r, f, e = !0;
            switch (t.keyCode) {
                case n.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case n.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case n.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case n.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case n.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case n.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case n.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case n.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case n.ui.keyCode.ENTER:
                case n.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case n.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    e = !1;
                    u = this.previousFilter || "";
                    r = String.fromCharCode(t.keyCode);
                    f = !1;
                    clearTimeout(this.filterTimer);
                    r === u ? f = !0 : r = u + r;
                    i = this._filterMenuItems(r);
                    i = f && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i;
                    i.length || (r = String.fromCharCode(t.keyCode), i = this._filterMenuItems(r));
                    i.length ? (this.focus(t, i), this.previousFilter = r, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            e && t.preventDefault()
        },
        _activate: function(n) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(n) : this.select(n))
        },
        refresh: function() {
            var i, t, u = this,
                f = this.options.icons.submenu,
                r = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
            r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = n(this),
                    i = t.parent(),
                    r = n("<span>").addClass("ui-menu-icon ui-icon " + f).data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(r);
                t.attr("aria-labelledby", i.attr("id"))
            });
            i = r.add(this.element);
            t = i.find(this.options.items);
            t.not(".ui-menu-item").each(function() {
                var t = n(this);
                u._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
            });
            t.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            t.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(n, t) {
            n === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu);
            n === "disabled" && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t);
            this._super(n, t)
        },
        focus: function(n, t) {
            var i, r;
            this.blur(n, n && n.type === "focus");
            this._scrollIntoView(t);
            this.active = t.first();
            r = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
            this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
            n && n.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay);
            i = t.children(".ui-menu");
            i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
            this.activeMenu = t.parent();
            this._trigger("focus", n, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var e, o, i, r, u, f;
            this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.outerHeight(), i < 0 ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
        },
        blur: function(n, t) {
            (t || clearTimeout(this.timer), this.active) && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", n, {
                item: this.active
            }))
        },
        _startOpening: function(n) {
            (clearTimeout(this.timer), n.attr("aria-hidden") === "true") && (this.timer = this._delay(function() {
                this._close();
                this._open(n)
            }, this.delay))
        },
        _open: function(t) {
            var i = n.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element);
                this._close(r);
                this.blur(t);
                this.activeMenu = r
            }, this.delay)
        },
        _close: function(n) {
            n || (n = this.active ? this.active.parent() : this.element);
            n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(t) {
            return !n(t.target).closest(".ui-menu").length
        },
        _isDivider: function(n) {
            return !/[^\-\u2014\u2013\s]/.test(n.text())
        },
        collapse: function(n) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(n, t))
        },
        expand: function(n) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(n, t)
            }))
        },
        next: function(n) {
            this._move("next", "first", n)
        },
        previous: function(n) {
            this._move("prev", "last", n)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(n, t, i) {
            var r;
            this.active && (r = n === "first" || n === "last" ? this.active[n === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0));
            r && r.length && this.active || (r = this.activeMenu.find(this.options.items)[t]());
            this.focus(i, r)
        },
        nextPage: function(t) {
            var i, r, u;
            if (!this.active) {
                this.next(t);
                return
            }
            this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = n(this), i.offset().top - r - u < 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
        },
        previousPage: function(t) {
            var i, r, u;
            if (!this.active) {
                this.next(t);
                return
            }
            this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = n(this), i.offset().top - r + u > 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first()))
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || n(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0);
            this._trigger("select", t, i)
        },
        _filterMenuItems: function(t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                r = new RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return r.test(n.trim(n(this).text()))
            })
        }
    });
    n.widget("ui.autocomplete", {
        version: "1.11.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, i, r, u = this.element[0].nodeName.toLowerCase(),
                f = u === "textarea",
                e = u === "input";
            this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable");
            this.valueMethod = this.element[f || e ? "val" : "text"];
            this.isNewMenu = !0;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(u) {
                    if (this.element.prop("readOnly")) {
                        t = !0;
                        r = !0;
                        i = !0;
                        return
                    }
                    t = !1;
                    r = !1;
                    i = !1;
                    var f = n.ui.keyCode;
                    switch (u.keyCode) {
                        case f.PAGE_UP:
                            t = !0;
                            this._move("previousPage", u);
                            break;
                        case f.PAGE_DOWN:
                            t = !0;
                            this._move("nextPage", u);
                            break;
                        case f.UP:
                            t = !0;
                            this._keyEvent("previous", u);
                            break;
                        case f.DOWN:
                            t = !0;
                            this._keyEvent("next", u);
                            break;
                        case f.ENTER:
                            this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
                            break;
                        case f.TAB:
                            this.menu.active && this.menu.select(u);
                            break;
                        case f.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(u), u.preventDefault());
                            break;
                        default:
                            i = !0;
                            this._searchTimeout(u)
                    }
                },
                keypress: function(r) {
                    if (t) {
                        t = !1;
                        (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault();
                        return
                    }
                    if (!i) {
                        var u = n.ui.keyCode;
                        switch (r.keyCode) {
                            case u.PAGE_UP:
                                this._move("previousPage", r);
                                break;
                            case u.PAGE_DOWN:
                                this._move("nextPage", r);
                                break;
                            case u.UP:
                                this._keyEvent("previous", r);
                                break;
                            case u.DOWN:
                                this._keyEvent("next", r)
                        }
                    }
                },
                input: function(n) {
                    if (r) {
                        r = !1;
                        n.preventDefault();
                        return
                    }
                    this._searchTimeout(n)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(n) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching);
                    this.close(n);
                    this._change(n)
                }
            });
            this._initSource();
            this.menu = n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    n(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(r) {
                            r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close()
                        })
                    })
                },
                menufocus: function(t, i) {
                    var r, u;
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) {
                        this.menu.blur();
                        this.document.one("mousemove", function() {
                            n(t.target).trigger(t.originalEvent)
                        });
                        return
                    }
                    u = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: u
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(u.value);
                    r = i.item.attr("aria-label") || u.value;
                    r && n.trim(r).length && (this.liveRegion.children().hide(), n("<div>").text(r).appendTo(this.liveRegion))
                },
                menuselect: function(n, t) {
                    var i = t.item.data("ui-autocomplete-item"),
                        r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                        this.previous = r;
                        this.selectedItem = i
                    }));
                    !1 !== this._trigger("select", n, {
                        item: i
                    }) && this._value(i.value);
                    this.term = this._value();
                    this.close(n);
                    this.selectedItem = i
                }
            });
            this.liveRegion = n("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(n, t) {
            this._super(n, t);
            n === "source" && this._initSource();
            n === "appendTo" && this.menu.element.appendTo(this._appendTo());
            n === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var i, r, t = this;
            n.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, r) {
                r(n.ui.autocomplete.filter(i, t.term))
            }) : typeof this.options.source == "string" ? (r = this.options.source, this.source = function(i, u) {
                t.xhr && t.xhr.abort();
                t.xhr = n.ajax({
                    url: r,
                    data: i,
                    dataType: "json",
                    success: function(n) {
                        u(n)
                    },
                    error: function() {
                        u([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(n) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var t = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                t && (!t || i || r) || (this.selectedItem = null, this.search(null, n))
            }, this.options.delay)
        },
        search: function(n, t) {
            return (n = n != null ? n : this._value(), this.term = this._value(), n.length < this.options.minLength) ? this.close(t) : this._trigger("search", t) === !1 ? void 0 : this._search(n)
        },
        _search: function(n) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: n
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return n.proxy(function(n) {
                t === this.requestIndex && this.__response(n);
                this.pending--;
                this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(n) {
            n && (n = this._normalize(n));
            this._trigger("response", null, {
                content: n
            });
            !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close()
        },
        close: function(n) {
            this.cancelSearch = !0;
            this._close(n)
        },
        _close: function(n) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n))
        },
        _change: function(n) {
            this.previous !== this._value() && this._trigger("change", n, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : n.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t);
            this.isNewMenu = !0;
            this.menu.refresh();
            i.show();
            this._resizeMenu();
            i.position(n.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var n = this.menu.element;
            n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var r = this;
            n.each(i, function(n, i) {
                r._renderItemData(t, i)
            })
        },
        _renderItemData: function(n, t) {
            return this._renderItem(n, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return n("<li>").text(i.label).appendTo(t)
        },
        _move: function(n, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n)) {
                this.isMultiLine || this._value(this.term);
                this.menu.blur();
                return
            }
            this.menu[n](t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(n, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
        }
    });
    n.extend(n.ui.autocomplete, {
        escapeRegex: function(n) {
            return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var r = new RegExp(n.ui.autocomplete.escapeRegex(i), "i");
            return n.grep(t, function(n) {
                return r.test(n.label || n.value || n)
            })
        }
    });
    n.widget("ui.autocomplete", n.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(n) {
                    return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var i;
            (this._superApply(arguments), this.options.disabled || this.cancelSearch) || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), n("<div>").text(i).appendTo(this.liveRegion))
        }
    });
    rt = n.ui.autocomplete;
    var s, p = "ui-button ui-widget ui-state-default ui-corner-all",
        w = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        vi = function() {
            var t = n(this);
            setTimeout(function() {
                t.find(":ui-button").button("refresh")
            }, 1)
        },
        b = function(t) {
            var i = t.name,
                r = t.form,
                u = n([]);
            return i && (i = i.replace(/'/g, "\\'"), u = r ? n(r).find("[name='" + i + "'][type=radio]") : n("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function() {
                return !this.form
            })), u
        };
    n.widget("ui.button", {
        version: "1.11.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, vi);
            typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var i = this,
                t = this.options,
                r = this.type === "checkbox" || this.type === "radio",
                u = r ? "" : "ui-state-active";
            t.label === null && (t.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                t.disabled || this === s && n(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                t.disabled || n(this).removeClass(u)
            }).bind("click" + this.eventNamespace, function(n) {
                t.disabled && (n.preventDefault(), n.stopImmediatePropagation())
            });
            this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            });
            r && this.element.bind("change" + this.eventNamespace, function() {
                i.refresh()
            });
            this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (t.disabled) return !1
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (t.disabled) return !1;
                n(this).addClass("ui-state-active");
                i.buttonElement.attr("aria-pressed", "true");
                var r = i.element[0];
                b(r).not(r).map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                if (t.disabled) return !1;
                n(this).addClass("ui-state-active");
                s = this;
                i.document.one("mouseup", function() {
                    s = null
                })
            }).bind("mouseup" + this.eventNamespace, function() {
                if (t.disabled) return !1;
                n(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(i) {
                if (t.disabled) return !1;
                (i.keyCode === n.ui.keyCode.SPACE || i.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                n(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === n.ui.keyCode.SPACE && n(this).click()
            }));
            this._setOption("disabled", t.disabled);
            this._resetButton()
        },
        _determineButtonType: function() {
            var n, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
            this.type === "checkbox" || this.type === "radio" ? (n = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(p + " ui-state-active " + w).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(n, t) {
            if (this._super(n, t), n === "disabled") {
                this.widget().toggleClass("ui-state-disabled", !!t);
                this.element.prop("disabled", !!t);
                t && (this.type === "checkbox" || this.type === "radio" ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active"));
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t);
            this.type === "radio" ? b(this.element[0]).each(function() {
                n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var i = this.buttonElement.removeClass(w),
                f = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
                t = this.options.icons,
                u = t.primary && t.secondary,
                r = [];
            t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || i.attr("title", n.trim(f)))) : r.push("ui-button-text-only");
            i.addClass(r.join(" "))
        }
    });
    n.widget("ui.buttonset", {
        version: "1.11.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(n, t) {
            n === "disabled" && this.buttons.button("option", n, t);
            this._super(n, t)
        },
        refresh: function() {
            var i = this.element.css("direction") === "rtl",
                t = this.element.find(this.options.items),
                r = t.filter(":ui-button");
            t.not(":ui-button").button();
            r.button("refresh");
            this.buttons = t.map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(i ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(i ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    });
    ut = n.ui.button;
    // n.extend(n.ui, {
    //     datepicker: {
    //         version: "1.11.2"
    //     }
    // });
    // n.extend(l.prototype, {
    //     markerClassName: "hasDatepicker",
    //     maxRows: 4,
    //     _widgetDatepicker: function() {
    //         return this.dpDiv
    //     },
    //     setDefaults: function(n) {
    //         return r(this._defaults, n || {}), this
    //     },
    //     _attachDatepicker: function(t, i) {
    //         var r, f, u;
    //         r = t.nodeName.toLowerCase();
    //         f = r === "div" || r === "span";
    //         t.id || (this.uuid += 1, t.id = "dp" + this.uuid);
    //         u = this._newInst(n(t), f);
    //         u.settings = n.extend({}, i || {});
    //         r === "input" ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
    //     },
    //     _newInst: function(t, i) {
    //         var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
    //         return {
    //             id: r,
    //             input: t,
    //             selectedDay: 0,
    //             selectedMonth: 0,
    //             selectedYear: 0,
    //             drawMonth: 0,
    //             drawYear: 0,
    //             inline: i,
    //             dpDiv: i ? a(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
    //         }
    //     },
    //     _connectDatepicker: function(t, i) {
    //         var r = n(t);
    //         (i.append = n([]), i.trigger = n([]), r.hasClass(this.markerClassName)) || (this._attachments(r, i), r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), n.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
    //     },
    //     _attachments: function(t, i) {
    //         var u, r, f, e = this._get(i, "appendText"),
    //             o = this._get(i, "isRTL");
    //         i.append && i.append.remove();
    //         e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append));
    //         t.unbind("focus", this._showDatepicker);
    //         i.trigger && i.trigger.remove();
    //         u = this._get(i, "showOn");
    //         (u === "focus" || u === "both") && t.focus(this._showDatepicker);
    //         (u === "button" || u === "both") && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
    //             src: f,
    //             alt: r,
    //             title: r
    //         }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
    //             src: f,
    //             alt: r,
    //             title: r
    //         }) : r)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
    //             return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1
    //         }))
    //     },
    //     _autoSize: function(n) {
    //         if (this._get(n, "autoSize") && !n.inline) {
    //             var r, u, f, t, i = new Date(2009, 11, 20),
    //                 e = this._get(n, "dateFormat");
    //             e.match(/[DM]/) && (r = function(n) {
    //                 for (u = 0, f = 0, t = 0; t < n.length; t++) n[t].length > u && (u = n[t].length, f = t);
    //                 return f
    //             }, i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
    //             n.input.attr("size", this._formatDate(n, i).length)
    //         }
    //     },
    //     _inlineDatepicker: function(t, i) {
    //         var r = n(t);
    //         r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(i.dpDiv), n.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
    //     },
    //     _dialogDatepicker: function(t, i, u, f, e) {
    //         var s, h, c, l, a, o = this._dialogInst;
    //         return o || (this.uuid += 1, s = "dp" + this.uuid, this._dialogInput = n("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), o = this._dialogInst = this._newInst(this._dialogInput, !1), o.settings = {}, n.data(this._dialogInput[0], "datepicker", o)), r(o.settings, f || {}), i = i && i.constructor === Date ? this._formatDate(o, i) : i, this._dialogInput.val(i), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null, this._pos || (h = document.documentElement.clientWidth, c = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, a = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + l, c / 2 - 150 + a]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = u, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], "datepicker", o), this
    //     },
    //     _destroyDatepicker: function(t) {
    //         var i, r = n(t),
    //             u = n.data(t, "datepicker");
    //         r.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), n.removeData(t, "datepicker"), i === "input" ? (u.append.remove(), u.trigger.remove(), r.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (i === "div" || i === "span") && r.removeClass(this.markerClassName).empty())
    //     },
    //     _enableDatepicker: function(t) {
    //         var i, r, u = n(t),
    //             f = n.data(t, "datepicker");
    //         u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), i === "input" ? (t.disabled = !1, f.trigger.filter("button").each(function() {
    //             this.disabled = !1
    //         }).end().filter("img").css({
    //             opacity: "1.0",
    //             cursor: ""
    //         })) : (i === "div" || i === "span") && (r = u.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
    //             return n === t ? null : n
    //         }))
    //     },
    //     _disableDatepicker: function(t) {
    //         var i, r, u = n(t),
    //             f = n.data(t, "datepicker");
    //         u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), i === "input" ? (t.disabled = !0, f.trigger.filter("button").each(function() {
    //             this.disabled = !0
    //         }).end().filter("img").css({
    //             opacity: "0.5",
    //             cursor: "default"
    //         })) : (i === "div" || i === "span") && (r = u.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
    //             return n === t ? null : n
    //         }), this._disabledInputs[this._disabledInputs.length] = t)
    //     },
    //     _isDisabledDatepicker: function(n) {
    //         if (!n) return !1;
    //         for (var t = 0; t < this._disabledInputs.length; t++)
    //             if (this._disabledInputs[t] === n) return !0;
    //         return !1
    //     },
    //     _getInst: function(t) {
    //         try {
    //             return n.data(t, "datepicker")
    //         } catch (i) {
    //             throw "Missing instance data for this datepicker";
    //         }
    //     },
    //     _optionDatepicker: function(t, i, u) {
    //         var e, h, o, s, f = this._getInst(t);
    //         if (arguments.length === 2 && typeof i == "string") return i === "defaults" ? n.extend({}, n.datepicker._defaults) : f ? i === "all" ? n.extend({}, f.settings) : this._get(f, i) : null;
    //         e = i || {};
    //         typeof i == "string" && (e = {}, e[i] = u);
    //         f && (this._curInst === f && this._hideDatepicker(), h = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(f, "min"), s = this._getMinMaxDate(f, "max"), r(f.settings, e), o !== null && e.dateFormat !== undefined && e.minDate === undefined && (f.settings.minDate = this._formatDate(f, o)), s !== null && e.dateFormat !== undefined && e.maxDate === undefined && (f.settings.maxDate = this._formatDate(f, s)), "disabled" in e && (e.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(n(t), f), this._autoSize(f), this._setDate(f, h), this._updateAlternate(f), this._updateDatepicker(f))
    //     },
    //     _changeDatepicker: function(n, t, i) {
    //         this._optionDatepicker(n, t, i)
    //     },
    //     _refreshDatepicker: function(n) {
    //         var t = this._getInst(n);
    //         t && this._updateDatepicker(t)
    //     },
    //     _setDateDatepicker: function(n, t) {
    //         var i = this._getInst(n);
    //         i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
    //     },
    //     _getDateDatepicker: function(n, t) {
    //         var i = this._getInst(n);
    //         return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
    //     },
    //     _doKeyDown: function(t) {
    //         var u, e, f, i = n.datepicker._getInst(t.target),
    //             r = !0,
    //             o = i.dpDiv.is(".ui-datepicker-rtl");
    //         if (i._keyEvent = !0, n.datepicker._datepickerShowing) switch (t.keyCode) {
    //             case 9:
    //                 n.datepicker._hideDatepicker();
    //                 r = !1;
    //                 break;
    //             case 13:
    //                 return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]), u = n.datepicker._get(i, "onSelect"), u ? (e = n.datepicker._formatDate(i), u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(), !1;
    //             case 27:
    //                 n.datepicker._hideDatepicker();
    //                 break;
    //             case 33:
    //                 n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
    //                 break;
    //             case 34:
    //                 n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
    //                 break;
    //             case 35:
    //                 (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
    //                 r = t.ctrlKey || t.metaKey;
    //                 break;
    //             case 36:
    //                 (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
    //                 r = t.ctrlKey || t.metaKey;
    //                 break;
    //             case 37:
    //                 (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
    //                 r = t.ctrlKey || t.metaKey;
    //                 t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
    //                 break;
    //             case 38:
    //                 (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
    //                 r = t.ctrlKey || t.metaKey;
    //                 break;
    //             case 39:
    //                 (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
    //                 r = t.ctrlKey || t.metaKey;
    //                 t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
    //                 break;
    //             case 40:
    //                 (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
    //                 r = t.ctrlKey || t.metaKey;
    //                 break;
    //             default:
    //                 r = !1
    //         } else t.keyCode === 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
    //         r && (t.preventDefault(), t.stopPropagation())
    //     },
    //     _doKeyPress: function(t) {
    //         var i, r, u = n.datepicker._getInst(t.target);
    //         if (n.datepicker._get(u, "constrainInput")) return i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !i || i.indexOf(r) > -1
    //     },
    //     _doKeyUp: function(t) {
    //         var r, i = n.datepicker._getInst(t.target);
    //         if (i.input.val() !== i.lastVal) try {
    //             r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
    //             r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i))
    //         } catch (u) {}
    //         return !0
    //     },
    //     _showDatepicker: function(t) {
    //         if (t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
    //             var i, o, s, u, f, e, h;
    //             (i = n.datepicker._getInst(t), n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])), o = n.datepicker._get(i, "beforeShow"), s = o ? o.apply(t, [t, i]) : {}, s !== !1) && (r(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), u = !1, n(t).parents().each(function() {
    //                 return u |= n(this).css("position") === "fixed", !u
    //             }), f = {
    //                 left: n.datepicker._pos[0],
    //                 top: n.datepicker._pos[1]
    //             }, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
    //                 position: "absolute",
    //                 display: "block",
    //                 top: "-1000px"
    //             }), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, u), i.dpDiv.css({
    //                 position: n.datepicker._inDialog && n.blockUI ? "static" : u ? "fixed" : "absolute",
    //                 display: "none",
    //                 left: f.left + "px",
    //                 top: f.top + "px"
    //             }), i.inline || (e = n.datepicker._get(i, "showAnim"), h = n.datepicker._get(i, "duration"), i.dpDiv.css("z-index", k(n(t)) + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null), n.datepicker._shouldFocusInput(i) && i.input.focus(), n.datepicker._curInst = i))
    //         }
    //     },
    //     _updateDatepicker: function(t) {
    //         this.maxRows = 4;
    //         u = t;
    //         t.dpDiv.empty().append(this._generateHTML(t));
    //         this._attachHandlers(t);
    //         var i, r = this._getNumberOfMonths(t),
    //             f = r[1],
    //             e = t.dpDiv.find("." + this._dayOverClass + " a");
    //         e.length > 0 && v.apply(e.get(0));
    //         t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
    //         f > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", 17 * f + "em");
    //         t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
    //         t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
    //         t === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(t) && t.input.focus();
    //         t.yearshtml && (i = t.yearshtml, setTimeout(function() {
    //             i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
    //             i = t.yearshtml = null
    //         }, 0))
    //     },
    //     _shouldFocusInput: function(n) {
    //         return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus")
    //     },
    //     _checkOffset: function(t, i, r) {
    //         var u = t.dpDiv.outerWidth(),
    //             f = t.dpDiv.outerHeight(),
    //             h = t.input ? t.input.outerWidth() : 0,
    //             o = t.input ? t.input.outerHeight() : 0,
    //             e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
    //             s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
    //         return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i
    //     },
    //     _findPos: function(t) {
    //         for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && (t.type === "hidden" || t.nodeType !== 1 || n.expr.filters.hidden(t));) t = t[u ? "previousSibling" : "nextSibling"];
    //         return i = n(t).offset(), [i.left, i.top]
    //     },
    //     _hideDatepicker: function(t) {
    //         var r, f, u, e, i = this._curInst;
    //         i && (!t || i === n.data(t, "datepicker")) && this._datepickerShowing && (r = this._get(i, "showAnim"), f = this._get(i, "duration"), u = function() {
    //             n.datepicker._tidyDialog(i)
    //         }, n.effects && (n.effects.effect[r] || n.effects[r]) ? i.dpDiv.hide(r, n.datepicker._get(i, "showOptions"), f, u) : i.dpDiv[r === "slideDown" ? "slideUp" : r === "fadeIn" ? "fadeOut" : "hide"](r ? f : null, u), r || u(), this._datepickerShowing = !1, e = this._get(i, "onClose"), e && e.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : "", i]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
    //             position: "absolute",
    //             left: "0",
    //             top: "-100px"
    //         }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1)
    //     },
    //     _tidyDialog: function(n) {
    //         n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    //     },
    //     _checkExternalClick: function(t) {
    //         if (n.datepicker._curInst) {
    //             var i = n(t.target),
    //                 r = n.datepicker._getInst(i[0]);
    //             (i[0].id === n.datepicker._mainDivId || i.parents("#" + n.datepicker._mainDivId).length !== 0 || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
    //         }
    //     },
    //     _adjustDate: function(t, i, r) {
    //         var f = n(t),
    //             u = this._getInst(f[0]);
    //         this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + (r === "M" ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u))
    //     },
    //     _gotoToday: function(t) {
    //         var r, u = n(t),
    //             i = this._getInst(u[0]);
    //         this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear());
    //         this._notifyChange(i);
    //         this._adjustDate(u)
    //     },
    //     _selectMonthYear: function(t, i, r) {
    //         var f = n(t),
    //             u = this._getInst(f[0]);
    //         u["selected" + (r === "M" ? "Month" : "Year")] = u["draw" + (r === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
    //         this._notifyChange(u);
    //         this._adjustDate(f)
    //     },
    //     _selectDay: function(t, i, r, u) {
    //         var f, e = n(t);
    //         n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
    //     },
    //     _clearDate: function(t) {
    //         var i = n(t);
    //         this._selectDate(i, "")
    //     },
    //     _selectDate: function(t, i) {
    //         var u, f = n(t),
    //             r = this._getInst(f[0]);
    //         i = i != null ? i : this._formatDate(r);
    //         r.input && r.input.val(i);
    //         this._updateAlternate(r);
    //         u = this._get(r, "onSelect");
    //         u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
    //         r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
    //     },
    //     _updateAlternate: function(t) {
    //         var i, r, u, f = this._get(t, "altField");
    //         f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).each(function() {
    //             n(this).val(u)
    //         }))
    //     },
    //     noWeekends: function(n) {
    //         var t = n.getDay();
    //         return [t > 0 && t < 6, ""]
    //     },
    //     iso8601Week: function(n) {
    //         var i, t = new Date(n.getTime());
    //         return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
    //     },
    //     parseDate: function(t, i, r) {
    //         if (t == null || i == null) throw "Invalid arguments";
    //         if (i = typeof i == "object" ? i.toString() : i + "", i === "") return null;
    //         for (var a, v, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = typeof y != "string" ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, o = -1, s = -1, p = -1, w = !1, u, l = function(n) {
    //             var i = h + 1 < t.length && t.charAt(h + 1) === n;
    //             return i && h++, i
    //         }, c = function(n) {
    //             var u = l(n),
    //                 r = n === "@" ? 14 : n === "!" ? 20 : n === "y" && u ? 4 : n === "o" ? 3 : 2,
    //                 e = n === "y" ? r : 1,
    //                 o = new RegExp("^\\d{" + e + "," + r + "}"),
    //                 t = i.substring(f).match(o);
    //             if (!t) throw "Missing number at position " + f;
    //             return f += t[0].length, parseInt(t[0], 10)
    //         }, k = function(t, r, u) {
    //             var e = -1,
    //                 o = n.map(l(t) ? u : r, function(n, t) {
    //                     return [
    //                         [t, n]
    //                     ]
    //                 }).sort(function(n, t) {
    //                     return -(n[1].length - t[1].length)
    //                 });
    //             if (n.each(o, function(n, t) {
    //                     var r = t[1];
    //                     if (i.substr(f, r.length).toLowerCase() === r.toLowerCase()) return e = t[0], f += r.length, !1
    //                 }), e !== -1) return e + 1;
    //             throw "Unknown name at position " + f;
    //         }, b = function() {
    //             if (i.charAt(f) !== t.charAt(h)) throw "Unexpected literal at position " + f;
    //             f++
    //         }, h = 0; h < t.length; h++)
    //             if (w) t.charAt(h) !== "'" || l("'") ? b() : w = !1;
    //             else switch (t.charAt(h)) {
    //                 case "d":
    //                     s = c("d");
    //                     break;
    //                 case "D":
    //                     k("D", g, nt);
    //                     break;
    //                 case "o":
    //                     p = c("o");
    //                     break;
    //                 case "m":
    //                     o = c("m");
    //                     break;
    //                 case "M":
    //                     o = k("M", tt, it);
    //                     break;
    //                 case "y":
    //                     e = c("y");
    //                     break;
    //                 case "@":
    //                     u = new Date(c("@"));
    //                     e = u.getFullYear();
    //                     o = u.getMonth() + 1;
    //                     s = u.getDate();
    //                     break;
    //                 case "!":
    //                     u = new Date((c("!") - this._ticksTo1970) / 1e4);
    //                     e = u.getFullYear();
    //                     o = u.getMonth() + 1;
    //                     s = u.getDate();
    //                     break;
    //                 case "'":
    //                     l("'") ? b() : w = !0;
    //                     break;
    //                 default:
    //                     b()
    //             }
    //         if (f < i.length && (v = i.substr(f), !/^\s+/.test(v))) throw "Extra/unparsed characters found in date: " + v;
    //         if (e === -1 ? e = (new Date).getFullYear() : e < 100 && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (e <= d ? 0 : -100)), p > -1) {
    //             o = 1;
    //             s = p;
    //             do {
    //                 if (a = this._getDaysInMonth(e, o - 1), s <= a) break;
    //                 o++;
    //                 s -= a
    //             } while (1)
    //         }
    //         if (u = this._daylightSavingAdjust(new Date(e, o - 1, s)), u.getFullYear() !== e || u.getMonth() + 1 !== o || u.getDate() !== s) throw "Invalid date";
    //         return u
    //     },
    //     ATOM: "yy-mm-dd",
    //     COOKIE: "D, dd M yy",
    //     ISO_8601: "yy-mm-dd",
    //     RFC_822: "D, d M y",
    //     RFC_850: "DD, dd-M-y",
    //     RFC_1036: "D, d M y",
    //     RFC_1123: "D, d M yy",
    //     RFC_2822: "D, d M yy",
    //     RSS: "D, d M y",
    //     TICKS: "!",
    //     TIMESTAMP: "@",
    //     W3C: "yy-mm-dd",
    //     _ticksTo1970: (718685 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 864e9,
    //     formatDate: function(n, t, i) {
    //         if (!t) return "";
    //         var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
    //             c = (i ? i.dayNames : null) || this._defaults.dayNames,
    //             l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
    //             a = (i ? i.monthNames : null) || this._defaults.monthNames,
    //             f = function(t) {
    //                 var i = u + 1 < n.length && n.charAt(u + 1) === t;
    //                 return i && u++, i
    //             },
    //             e = function(n, t, i) {
    //                 var r = "" + t;
    //                 if (f(n))
    //                     while (r.length < i) r = "0" + r;
    //                 return r
    //             },
    //             s = function(n, t, i, r) {
    //                 return f(n) ? r[t] : i[t]
    //             },
    //             r = "",
    //             o = !1;
    //         if (t)
    //             for (u = 0; u < n.length; u++)
    //                 if (o) n.charAt(u) !== "'" || f("'") ? r += n.charAt(u) : o = !1;
    //                 else switch (n.charAt(u)) {
    //                     case "d":
    //                         r += e("d", t.getDate(), 2);
    //                         break;
    //                     case "D":
    //                         r += s("D", t.getDay(), h, c);
    //                         break;
    //                     case "o":
    //                         r += e("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
    //                         break;
    //                     case "m":
    //                         r += e("m", t.getMonth() + 1, 2);
    //                         break;
    //                     case "M":
    //                         r += s("M", t.getMonth(), l, a);
    //                         break;
    //                     case "y":
    //                         r += f("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
    //                         break;
    //                     case "@":
    //                         r += t.getTime();
    //                         break;
    //                     case "!":
    //                         r += t.getTime() * 1e4 + this._ticksTo1970;
    //                         break;
    //                     case "'":
    //                         f("'") ? r += "'" : o = !0;
    //                         break;
    //                     default:
    //                         r += n.charAt(u)
    //                 }
    //         return r
    //     },
    //     _possibleChars: function(n) {
    //         for (var i = "", r = !1, u = function(i) {
    //             var r = t + 1 < n.length && n.charAt(t + 1) === i;
    //             return r && t++, r
    //         }, t = 0; t < n.length; t++)
    //             if (r) n.charAt(t) !== "'" || u("'") ? i += n.charAt(t) : r = !1;
    //             else switch (n.charAt(t)) {
    //                 case "d":
    //                 case "m":
    //                 case "y":
    //                 case "@":
    //                     i += "0123456789";
    //                     break;
    //                 case "D":
    //                 case "M":
    //                     return null;
    //                 case "'":
    //                     u("'") ? i += "'" : r = !0;
    //                     break;
    //                 default:
    //                     i += n.charAt(t)
    //             }
    //         return i
    //     },
    //     _get: function(n, t) {
    //         return n.settings[t] !== undefined ? n.settings[t] : this._defaults[t]
    //     },
    //     _setDateFromField: function(n, t) {
    //         if (n.input.val() !== n.lastVal) {
    //             var f = this._get(n, "dateFormat"),
    //                 r = n.lastVal = n.input ? n.input.val() : null,
    //                 u = this._getDefaultDate(n),
    //                 i = u,
    //                 e = this._getFormatConfig(n);
    //             try {
    //                 i = this.parseDate(f, r, e) || u
    //             } catch (o) {
    //                 r = t ? "" : r
    //             }
    //             n.selectedDay = i.getDate();
    //             n.drawMonth = n.selectedMonth = i.getMonth();
    //             n.drawYear = n.selectedYear = i.getFullYear();
    //             n.currentDay = r ? i.getDate() : 0;
    //             n.currentMonth = r ? i.getMonth() : 0;
    //             n.currentYear = r ? i.getFullYear() : 0;
    //             this._adjustInstDate(n)
    //         }
    //     },
    //     _getDefaultDate: function(n) {
    //         return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
    //     },
    //     _determineDate: function(t, i, r) {
    //         var f = function(n) {
    //                 var t = new Date;
    //                 return t.setDate(t.getDate() + n), t
    //             },
    //             e = function(i) {
    //                 try {
    //                     return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
    //                 } catch (h) {}
    //                 for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
    //                     switch (u[2] || "d") {
    //                         case "d":
    //                         case "D":
    //                             r += parseInt(u[1], 10);
    //                             break;
    //                         case "w":
    //                         case "W":
    //                             r += parseInt(u[1], 10) * 7;
    //                             break;
    //                         case "m":
    //                         case "M":
    //                             e += parseInt(u[1], 10);
    //                             r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
    //                             break;
    //                         case "y":
    //                         case "Y":
    //                             f += parseInt(u[1], 10);
    //                             r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
    //                     }
    //                     u = s.exec(i)
    //                 }
    //                 return new Date(f, e, r)
    //             },
    //             u = i == null || i === "" ? r : typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r : f(i) : new Date(i.getTime());
    //         return u = u && u.toString() === "Invalid Date" ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u)
    //     },
    //     _daylightSavingAdjust: function(n) {
    //         return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null
    //     },
    //     _setDate: function(n, t, i) {
    //         var u = !t,
    //             f = n.selectedMonth,
    //             e = n.selectedYear,
    //             r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
    //         n.selectedDay = n.currentDay = r.getDate();
    //         n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
    //         n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
    //         f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
    //         this._adjustInstDate(n);
    //         n.input && n.input.val(u ? "" : this._formatDate(n))
    //     },
    //     _getDate: function(n) {
    //         return !n.currentYear || n.input && n.input.val() === "" ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
    //     },
    //     _attachHandlers: function(t) {
    //         var r = this._get(t, "stepMonths"),
    //             i = "#" + t.id.replace(/\\\\/g, "\\");
    //         t.dpDiv.find("[data-handler]").map(function() {
    //             var t = {
    //                 prev: function() {
    //                     n.datepicker._adjustDate(i, -r, "M")
    //                 },
    //                 next: function() {
    //                     n.datepicker._adjustDate(i, +r, "M")
    //                 },
    //                 hide: function() {
    //                     n.datepicker._hideDatepicker()
    //                 },
    //                 today: function() {
    //                     n.datepicker._gotoToday(i)
    //                 },
    //                 selectDay: function() {
    //                     return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
    //                 },
    //                 selectMonth: function() {
    //                     return n.datepicker._selectMonthYear(i, this, "M"), !1
    //                 },
    //                 selectYear: function() {
    //                     return n.datepicker._selectMonthYear(i, this, "Y"), !1
    //                 }
    //             };
    //             n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
    //         })
    //     },
    //     _generateHTML: function(n) {
    //         var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, f, y, ct, p, lt, l, u, at, vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date,
    //             gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())),
    //             e = this._get(n, "isRTL"),
    //             li = this._get(n, "showButtonPanel"),
    //             hi = this._get(n, "hideIfNoPrevNext"),
    //             ni = this._get(n, "navigationAsDateFormat"),
    //             o = this._getNumberOfMonths(n),
    //             ai = this._get(n, "showCurrentAtPos"),
    //             ci = this._get(n, "stepMonths"),
    //             ti = o[0] !== 1 || o[1] !== 1,
    //             ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)),
    //             w = this._getMinMaxDate(n, "min"),
    //             v = this._getMinMaxDate(n, "max"),
    //             t = n.drawMonth - ai,
    //             r = n.drawYear;
    //         if (t < 0 && (t += 12, r--), v)
    //             for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - o[0] * o[1] + 1, v.getDate())), b = w && b < w ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;) t--, t < 0 && (t = 11, r--);
    //         for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k, et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (e ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (e ? "" : et) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, ot = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), st = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), ht = this._getDefaultDate(n), nt = "", f, y = 0; y < o[0]; y++) {
    //             for (ct = "", this.maxRows = 4, p = 0; p < o[1]; p++) {
    //                 if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) {
    //                     if (u += "<div class='ui-datepicker-group", o[1] > 1) switch (p) {
    //                         case 0:
    //                             u += " ui-datepicker-group-first";
    //                             l = " ui-corner-" + (e ? "right" : "left");
    //                             break;
    //                         case o[1] - 1:
    //                             u += " ui-datepicker-group-last";
    //                             l = " ui-corner-" + (e ? "left" : "right");
    //                             break;
    //                         default:
    //                             u += " ui-datepicker-group-middle";
    //                             l = ""
    //                     }
    //                     u += "'>"
    //                 }
    //                 for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && y === 0 ? e ? ut : rt : "") + (/all|right/.test(l) && y === 0 ? e ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", f = 0; f < 7; f++) vt = (f + c) % 7, at += "<th scope='col'" + ((f + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
    //                 for (u += at + "<\/tr><\/thead><tbody>", yt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)), pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, tt = Math.ceil((pt + yt) / 7), wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)), bt = 0; bt < wt; bt++) {
    //                     for (u += "<tr>", kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", f = 0; f < 7; f++) d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, it = a && !si || !d[0] || w && i < w || v && i > v, kt += "<td class='" + ((f + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!a || g) && d[2] ? " title='" + d[2].replace(/'/g, "&#39;") + "'" : "") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
    //                     u += kt + "<\/tr>"
    //                 }
    //                 t++;
    //                 t > 11 && (t = 0, r++);
    //                 u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (o[0] > 0 && p === o[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
    //                 ct += u
    //             }
    //             nt += ct
    //         }
    //         return nt += ri, n._keyEvent = !1, nt
    //     },
    //     _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
    //         var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"),
    //             b = this._get(n, "changeYear"),
    //             g = this._get(n, "showMonthAfterYear"),
    //             c = "<div class='ui-datepicker-title'>",
    //             l = "";
    //         if (f || !w) l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
    //         else {
    //             for (k = r && r.getFullYear() === i, d = u && u.getFullYear() === i, l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; h < 12; h++)(!k || h >= r.getMonth()) && (!d || h <= u.getMonth()) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
    //             l += "<\/select>"
    //         }
    //         if (g || (c += l + (f || !(w && b) ? "&#xa0;" : "")), !n.yearshtml)
    //             if (n.yearshtml = "", f || !b) c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
    //             else {
    //                 for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function(n) {
    //                     var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
    //                     return isNaN(t) ? y : t
    //                 }, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; s <= a; s++) n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
    //                 n.yearshtml += "<\/select>";
    //                 c += n.yearshtml;
    //                 n.yearshtml = null
    //             }
    //         return c += this._get(n, "yearSuffix"), g && (c += (f || !(w && b) ? "&#xa0;" : "") + l), c + "<\/div>"
    //     },
    //     _adjustInstDate: function(n, t, i) {
    //         var u = n.drawYear + (i === "Y" ? t : 0),
    //             f = n.drawMonth + (i === "M" ? t : 0),
    //             e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i === "D" ? t : 0),
    //             r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
    //         n.selectedDay = r.getDate();
    //         n.drawMonth = n.selectedMonth = r.getMonth();
    //         n.drawYear = n.selectedYear = r.getFullYear();
    //         (i === "M" || i === "Y") && this._notifyChange(n)
    //     },
    //     _restrictMinMax: function(n, t) {
    //         var i = this._getMinMaxDate(n, "min"),
    //             r = this._getMinMaxDate(n, "max"),
    //             u = i && t < i ? i : t;
    //         return r && u > r ? r : u
    //     },
    //     _notifyChange: function(n) {
    //         var t = this._get(n, "onChangeMonthYear");
    //         t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
    //     },
    //     _getNumberOfMonths: function(n) {
    //         var t = this._get(n, "numberOfMonths");
    //         return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
    //     },
    //     _getMinMaxDate: function(n, t) {
    //         return this._determineDate(n, this._get(n, t + "Date"), null)
    //     },
    //     _getDaysInMonth: function(n, t) {
    //         return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
    //     },
    //     _getFirstDayOfMonth: function(n, t) {
    //         return new Date(n, t, 1).getDay()
    //     },
    //     _canAdjustMonth: function(n, t, i, r) {
    //         var f = this._getNumberOfMonths(n),
    //             u = this._daylightSavingAdjust(new Date(i, r + (t < 0 ? t : f[0] * f[1]), 1));
    //         return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u)
    //     },
    //     _isInRange: function(n, t) {
    //         var i, f, e = this._getMinMaxDate(n, "min"),
    //             o = this._getMinMaxDate(n, "max"),
    //             r = null,
    //             u = null,
    //             s = this._get(n, "yearRange");
    //         return s && (i = s.split(":"), f = (new Date).getFullYear(), r = parseInt(i[0], 10), u = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += f), i[1].match(/[+\-].*/) && (u += f)), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || t.getFullYear() <= u)
    //     },
    //     _getFormatConfig: function(n) {
    //         var t = this._get(n, "shortYearCutoff");
    //         return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
    //             shortYearCutoff: t,
    //             dayNamesShort: this._get(n, "dayNamesShort"),
    //             dayNames: this._get(n, "dayNames"),
    //             monthNamesShort: this._get(n, "monthNamesShort"),
    //             monthNames: this._get(n, "monthNames")
    //         }
    //     },
    //     _formatDate: function(n, t, i, r) {
    //         t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
    //         var u = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
    //         return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
    //     }
    // });
    // n.fn.datepicker = function(t) {
    //     if (!this.length) return this;
    //     n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick), n.datepicker.initialized = !0);
    //     n("#" + n.datepicker._mainDivId).length === 0 && n("body").append(n.datepicker.dpDiv);
    //     var i = Array.prototype.slice.call(arguments, 1);
    //     return typeof t == "string" && (t === "isDisabled" || t === "getDate" || t === "widget") ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
    //         typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
    //     })
    // };
    // n.datepicker = new l;
    // n.datepicker.initialized = !1;
    // n.datepicker.uuid = (new Date).getTime();
    // n.datepicker.version = "1.11.2";
    // ft = n.datepicker;
    n.widget("ui.draggable", n.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            this.options.helper === "original" && this._setPositionRelative();
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(n, t) {
            this._super(n, t);
            n === "handle" && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                this.destroyOnClear = !0;
                return
            }
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._removeHandleClassName();
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return (this._blurActiveElement(t), this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0) ? !1 : (this.handle = this._getHandle(t), !this.handle) ? !1 : (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0)
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = n(this);
                return n("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var i = this.document[0];
            if (this.handleElement.is(t.target)) try {
                i.activeElement && i.activeElement.nodeName.toLowerCase() !== "body" && n(i.activeElement).blur()
            } catch (r) {}
        },
        _mouseStart: function(t) {
            var i = this.options;
            return (this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return n(this).css("position") === "fixed"
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1) ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function(n) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: n.pageX - this.offset.left,
                top: n.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var r = this,
                i = !1;
            return n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), this.options.revert === "invalid" && !i || this.options.revert === "valid" && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                r._trigger("stop", t) !== !1 && r._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(t) {
            var r = this.options,
                u = n.isFunction(r.helper),
                i = u ? n(r.helper.apply(this.element[0], [t])) : r.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo(r.appendTo === "parent" ? this.element[0].parentNode : r.appendTo), u && i[0] === this.element[0] && this._setPositionRelative(), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left" in t && (this.offset.click.left = t.left + this.margins.left);
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top" in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(n) {
            return /(html|body)/i.test(n.tagName) || n === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset(),
                i = this.document[0];
            return this.cssPosition === "absolute" && this.scrollParent[0] !== i && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition !== "relative") return {
                top: 0,
                left: 0
            };
            var n = this.element.position(),
                t = this._isRootNode(this.scrollParent[0]);
            return {
                top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var f, t, i, r = this.options,
                u = this.document[0];
            if (this.relativeContainer = null, !r.containment) {
                this.containment = null;
                return
            }
            if (r.containment === "window") {
                this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment === "document") {
                this.containment = [0, 0, n(u).width() - this.helperProportions.width - this.margins.left, (n(u).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment.constructor === Array) {
                this.containment = r.containment;
                return
            }(r.containment === "parent" && (r.containment = this.helper[0].parentNode), t = n(r.containment), i = t[0], i) && (f = /(scroll|auto)/.test(t.css("overflow")), this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (f ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = t)
        },
        _convertPositionTo: function(n, t) {
            t || (t = this.position);
            var i = n === "absolute" ? 1 : -1,
                r = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - (this.cssPosition === "fixed" ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - (this.cssPosition === "fixed" ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(n, t) {
            var i, s, u, f, r = this.options,
                h = this._isRootNode(this.scrollParent[0]),
                e = n.pageX,
                o = n.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, n.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left), n.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top), n.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left), n.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, o = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, e = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f), r.axis === "y" && (e = this.originalPageX), r.axis === "x" && (o = this.originalPageY)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function() {
            this.options.axis !== "y" && this.helper.css("right") !== "auto" && (this.helper.width(this.helper.width()), this.helper.css("right", "auto"));
            this.options.axis !== "x" && this.helper.css("bottom") !== "auto" && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function(t, i, r) {
            return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), r.offset = this.positionAbs), n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i, r) {
            var u = n.extend({}, i, {
                item: r.element
            });
            r.sortables = [];
            n(r.options.connectToSortable).each(function() {
                var i = n(this).sortable("instance");
                i && !i.options.disabled && (r.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, u))
            })
        },
        stop: function(t, i, r) {
            var u = n.extend({}, i, {
                item: r.element
            });
            r.cancelHelperRemoval = !1;
            n.each(r.sortables, function() {
                var n = this;
                n.isOver ? (n.isOver = 0, r.cancelHelperRemoval = !0, n.cancelHelperRemoval = !1, n._storedCSS = {
                    position: n.placeholder.css("position"),
                    top: n.placeholder.css("top"),
                    left: n.placeholder.css("left")
                }, n._mouseStop(t), n.options.helper = n.options._helper) : (n.cancelHelperRemoval = !0, n._trigger("deactivate", t, u))
            })
        },
        drag: function(t, i, r) {
            n.each(r.sortables, function() {
                var f = !1,
                    u = this;
                u.positionAbs = r.positionAbs;
                u.helperProportions = r.helperProportions;
                u.offset.click = r.offset.click;
                u._intersectsWith(u.containerCache) && (f = !0, n.each(r.sortables, function() {
                    return this.positionAbs = r.positionAbs, this.helperProportions = r.helperProportions, this.offset.click = r.offset.click, this !== u && this._intersectsWith(this.containerCache) && n.contains(u.element[0], this.element[0]) && (f = !1), f
                }));
                f ? (u.isOver || (u.isOver = 1, u.currentItem = i.helper.appendTo(u.element).data("ui-sortable-item", !0), u.options._helper = u.options.helper, u.options.helper = function() {
                    return i.helper[0]
                }, t.target = u.currentItem[0], u._mouseCapture(t, !0), u._mouseStart(t, !0, !0), u.offset.click.top = r.offset.click.top, u.offset.click.left = r.offset.click.left, u.offset.parent.left -= r.offset.parent.left - u.offset.parent.left, u.offset.parent.top -= r.offset.parent.top - u.offset.parent.top, r._trigger("toSortable", t), r.dropped = u.element, n.each(r.sortables, function() {
                    this.refreshPositions()
                }), r.currentItem = r.element, u.fromOutside = r), u.currentItem && (u._mouseDrag(t), i.position = u.position)) : u.isOver && (u.isOver = 0, u.cancelHelperRemoval = !0, u.options._revert = u.options.revert, u.options.revert = !1, u._trigger("out", t, u._uiHash(u)), u._mouseStop(t, !0), u.options.revert = u.options._revert, u.options.helper = u.options._helper, u.placeholder && u.placeholder.remove(), r._refreshOffsets(t), i.position = r._generatePosition(t, !0), r._trigger("fromSortable", t), r.dropped = !1, n.each(r.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    });
    n.ui.plugin.add("draggable", "cursor", {
        start: function(t, i, r) {
            var u = n("body"),
                f = r.options;
            u.css("cursor") && (f._cursor = u.css("cursor"));
            u.css("cursor", f.cursor)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._cursor && n("body").css("cursor", u._cursor)
        }
    });
    n.ui.plugin.add("draggable", "opacity", {
        start: function(t, i, r) {
            var u = n(i.helper),
                f = r.options;
            u.css("opacity") && (f._opacity = u.css("opacity"));
            u.css("opacity", f.opacity)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._opacity && n(i.helper).css("opacity", u._opacity)
        }
    });
    n.ui.plugin.add("draggable", "scroll", {
        start: function(n, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1));
            i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML" && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(t, i, r) {
            var u = r.options,
                o = !1,
                e = r.scrollParentNotHidden[0],
                f = r.document[0];
            e !== f && e.tagName !== "HTML" ? (u.axis && u.axis === "x" || (r.overflowOffset.top + e.offsetHeight - t.pageY < u.scrollSensitivity ? e.scrollTop = o = e.scrollTop + u.scrollSpeed : t.pageY - r.overflowOffset.top < u.scrollSensitivity && (e.scrollTop = o = e.scrollTop - u.scrollSpeed)), u.axis && u.axis === "y" || (r.overflowOffset.left + e.offsetWidth - t.pageX < u.scrollSensitivity ? e.scrollLeft = o = e.scrollLeft + u.scrollSpeed : t.pageX - r.overflowOffset.left < u.scrollSensitivity && (e.scrollLeft = o = e.scrollLeft - u.scrollSpeed))) : (u.axis && u.axis === "x" || (t.pageY - n(f).scrollTop() < u.scrollSensitivity ? o = n(f).scrollTop(n(f).scrollTop() - u.scrollSpeed) : n(window).height() - (t.pageY - n(f).scrollTop()) < u.scrollSensitivity && (o = n(f).scrollTop(n(f).scrollTop() + u.scrollSpeed))), u.axis && u.axis === "y" || (t.pageX - n(f).scrollLeft() < u.scrollSensitivity ? o = n(f).scrollLeft(n(f).scrollLeft() - u.scrollSpeed) : n(window).width() - (t.pageX - n(f).scrollLeft()) < u.scrollSensitivity && (o = n(f).scrollLeft(n(f).scrollLeft() + u.scrollSpeed))));
            o !== !1 && n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
        }
    });
   
    n.ui.plugin.add("draggable", "stack", {
        start: function(t, i, r) {
            var f, e = r.options,
                u = n.makeArray(n(e.stack)).sort(function(t, i) {
                    return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
                });
            u.length && (f = parseInt(n(u[0]).css("zIndex"), 10) || 0, n(u).each(function(t) {
                n(this).css("zIndex", f + t)
            }), this.css("zIndex", f + u.length))
        }
    });
    n.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i, r) {
            var u = n(i.helper),
                f = r.options;
            u.css("zIndex") && (f._zIndex = u.css("zIndex"));
            u.css("zIndex", f.zIndex)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._zIndex && n(i.helper).css("zIndex", u._zIndex)
        }
    });
    et = n.ui.draggable;
    n.widget("ui.resizable", n.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(n) {
            return parseInt(n, 10) || 0
        },
        _isNumber: function(n) {
            return !isNaN(parseInt(n, 10))
        },
        _hasScroll: function(t, i) {
            if (n(t).css("overflow") === "hidden") return !1;
            var r = i && i === "left" ? "scrollLeft" : "scrollTop",
                u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
        },
        _create: function() {
            var e, f, r, i, o, u = this,
                t = this.options;
            if (this.element.addClass("ui-resizable"), n.extend(this, {
                    _aspectRatio: !!t.aspectRatio,
                    aspectRatio: t.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                for (this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, f = 0; f < e.length; f++) r = n.trim(e[f]), o = "ui-resizable-" + r, i = n("<div class='ui-resizable-handle " + o + "'><\/div>"), i.css({
                    zIndex: t.zIndex
                }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i);
            this._renderAxis = function(t) {
                var i, r, u, f;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element), f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(u, f), this._proportionallyResize()), !n(this.handles[i]).length
            };
            this._renderAxis(this.element);
            this._handles = n(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                u.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), u.axis = i && i[1] ? i[1] : "se")
            });
            t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                t.disabled || (n(this).removeClass("ui-resizable-autohide"), u._handles.show())
            }).mouseleave(function() {
                t.disabled || u.resizing || (n(this).addClass("ui-resizable-autohide"), u._handles.hide())
            }));
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(t) {
            var r, i, u = !1;
            for (r in this.handles) i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0);
            return !this.options.disabled && u
        },
        _mouseStart: function(t) {
            var u, f, e, r = this.options,
                i = this.element;
            return this.resizing = !0, this._renderProxy(), u = this._num(this.helper.css("left")), f = this._num(this.helper.css("top")), r.containment && (u += n(r.containment).scrollLeft() || 0, f += n(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: u,
                top: f
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: i.width(),
                height: i.height()
            }, this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            }, this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            }, this.originalPosition = {
                left: u,
                top: f
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", e === "auto" ? this.axis + "-resize" : e), i.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var i, r, u = this.originalMousePosition,
                e = this.axis,
                o = t.pageX - u.left || 0,
                s = t.pageY - u.top || 0,
                f = this._change[e];
            return (this._updatePrevProperties(), !f) ? !1 : (i = f.apply(this, [t, o, s]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), r = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var r, u, f, e, o, s, h, c = this.options,
                i = this;
            return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && this._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = {
                width: i.helper.width() - e,
                height: i.helper.height() - f
            }, s = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, {
                top: h,
                left: s
            })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var n = {};
            return this.position.top !== this.prevPosition.top && (n.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (n.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (n.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (n.height = this.size.height + "px"), this.helper.css(n), n
        },
        _updateVirtualBoundaries: function(n) {
            var r, u, f, e, t, i = this.options;
            t = {
                minWidth: this._isNumber(i.minWidth) ? i.minWidth : 0,
                maxWidth: this._isNumber(i.maxWidth) ? i.maxWidth : Infinity,
                minHeight: this._isNumber(i.minHeight) ? i.minHeight : 0,
                maxHeight: this._isNumber(i.maxHeight) ? i.maxHeight : Infinity
            };
            (this._aspectRatio || n) && (r = t.minHeight * this.aspectRatio, f = t.minWidth / this.aspectRatio, u = t.maxHeight * this.aspectRatio, e = t.maxWidth / this.aspectRatio, r > t.minWidth && (t.minWidth = r), f > t.minHeight && (t.minHeight = f), u < t.maxWidth && (t.maxWidth = u), e < t.maxHeight && (t.maxHeight = e));
            this._vBoundaries = t
        },
        _updateCache: function(n) {
            this.offset = this.helper.offset();
            this._isNumber(n.left) && (this.position.left = n.left);
            this._isNumber(n.top) && (this.position.top = n.top);
            this._isNumber(n.height) && (this.size.height = n.height);
            this._isNumber(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function(n) {
            var t = this.position,
                i = this.size,
                r = this.axis;
            return this._isNumber(n.height) ? n.width = n.height * this.aspectRatio : this._isNumber(n.width) && (n.height = n.width / this.aspectRatio), r === "sw" && (n.left = t.left + (i.width - n.width), n.top = null), r === "nw" && (n.top = t.top + (i.height - n.height), n.left = t.left + (i.width - n.width)), n
        },
        _respectSize: function(n) {
            var t = this._vBoundaries,
                i = this.axis,
                r = this._isNumber(n.width) && t.maxWidth && t.maxWidth < n.width,
                u = this._isNumber(n.height) && t.maxHeight && t.maxHeight < n.height,
                f = this._isNumber(n.width) && t.minWidth && t.minWidth > n.width,
                e = this._isNumber(n.height) && t.minHeight && t.minHeight > n.height,
                o = this.originalPosition.left + this.originalSize.width,
                s = this.position.top + this.size.height,
                h = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return f && (n.width = t.minWidth), e && (n.height = t.minHeight), r && (n.width = t.maxWidth), u && (n.height = t.maxHeight), f && h && (n.left = o - t.minWidth), r && h && (n.left = o - t.maxWidth), e && c && (n.top = s - t.minHeight), u && c && (n.top = s - t.maxHeight), n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null, n
        },
        _getPaddingPlusBorderDimensions: function(n) {
            for (var t = 0, i = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")]; t < 4; t++) i[t] = parseInt(r[t], 10) || 0, i[t] += parseInt(u[t], 10) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var n, t = 0, i = this.helper || this.element; t < this._proportionallyResizeElements.length; t++) n = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(n)), n.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var t = this.element,
                i = this.options;
            this.elementOffset = t.offset();
            this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(n, t) {
                var i = this.originalSize,
                    r = this.originalPosition;
                return {
                    left: r.left + t,
                    width: i.width - t
                }
            },
            n: function(n, t, i) {
                var r = this.originalSize,
                    u = this.originalPosition;
                return {
                    top: u.top + i,
                    height: r.height - i
                }
            },
            s: function(n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function(t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]);
            t !== "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    n.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = n(this).resizable("instance"),
                u = i.options,
                r = i._proportionallyResizeElements,
                f = r.length && /textarea/i.test(r[0].nodeName),
                s = f && i._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
                h = f ? 0 : i.sizeDiff.width,
                c = {
                    width: i.size.width - h,
                    height: i.size.height - s
                },
                e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, o && e ? {
                top: o,
                left: e
            } : {}), {
                duration: u.animateDuration,
                easing: u.animateEasing,
                step: function() {
                    var u = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    r && r.length && n(r[0]).css({
                        width: u.width,
                        height: u.height
                    });
                    i._updateCache(u);
                    i._propagate("resize", t)
                }
            })
        }
    });
    n.ui.plugin.add("resizable", "containment", {
        start: function() {
            var r, f, e, o, s, h, c, t = n(this).resizable("instance"),
                l = t.options,
                a = t.element,
                u = l.containment,
                i = u instanceof n ? u.get(0) : /parent/.test(u) ? a.parent().get(0) : u;
            i && (t.containerElement = n(i), /document/.test(u) || u === document ? (t.containerOffset = {
                left: 0,
                top: 0
            }, t.containerPosition = {
                left: 0,
                top: 0
            }, t.parentData = {
                element: n(document),
                left: 0,
                top: 0,
                width: n(document).width(),
                height: n(document).height() || document.body.parentNode.scrollHeight
            }) : (r = n(i), f = [], n(["Top", "Right", "Left", "Bottom"]).each(function(n, i) {
                f[n] = t._num(r.css("padding" + i))
            }), t.containerOffset = r.offset(), t.containerPosition = r.position(), t.containerSize = {
                height: r.innerHeight() - f[3],
                width: r.innerWidth() - f[1]
            }, e = t.containerOffset, o = t.containerSize.height, s = t.containerSize.width, h = t._hasScroll(i, "left") ? i.scrollWidth : s, c = t._hasScroll(i) ? i.scrollHeight : o, t.parentData = {
                element: i,
                left: e.left,
                top: e.top,
                width: h,
                height: c
            }))
        },
        resize: function(t) {
            var o, s, h, c, i = n(this).resizable("instance"),
                v = i.options,
                r = i.containerOffset,
                l = i.position,
                f = i._aspectRatio || t.shiftKey,
                e = {
                    top: 0,
                    left: 0
                },
                a = i.containerElement,
                u = !0;
            a[0] !== document && /static/.test(a.css("position")) && (e = r);
            l.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - e.left), f && (i.size.height = i.size.width / i.aspectRatio, u = !1), i.position.left = v.helper ? r.left : 0);
            l.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), f && (i.size.width = i.size.height * i.aspectRatio, u = !1), i.position.top = i._helper ? r.top : 0);
            h = i.containerElement.get(0) === i.element.parent().get(0);
            c = /relative|absolute/.test(i.containerElement.css("position"));
            h && c ? (i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top) : (i.offset.left = i.element.offset().left, i.offset.top = i.element.offset().top);
            o = Math.abs(i.sizeDiff.width + (i._helper ? i.offset.left - e.left : i.offset.left - r.left));
            s = Math.abs(i.sizeDiff.height + (i._helper ? i.offset.top - e.top : i.offset.top - r.top));
            o + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - o, f && (i.size.height = i.size.width / i.aspectRatio, u = !1));
            s + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - s, f && (i.size.width = i.size.height * i.aspectRatio, u = !1));
            u || (i.position.left = i.prevPosition.left, i.position.top = i.prevPosition.top, i.size.width = i.prevSize.width, i.size.height = i.prevSize.height)
        },
        stop: function() {
            var t = n(this).resizable("instance"),
                r = t.options,
                u = t.containerOffset,
                f = t.containerPosition,
                e = t.containerElement,
                i = n(t.helper),
                o = i.offset(),
                s = i.outerWidth() - t.sizeDiff.width,
                h = i.outerHeight() - t.sizeDiff.height;
            t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            });
            t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            })
        }
    });
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var r = n(this).resizable("instance"),
                t = r.options,
                i = function(t) {
                    n(t).each(function() {
                        var t = n(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            typeof t.alsoResize != "object" || t.alsoResize.parentNode ? i(t.alsoResize) : t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], i(t.alsoResize)) : n.each(t.alsoResize, function(n) {
                i(n)
            })
        },
        resize: function(t, i) {
            var r = n(this).resizable("instance"),
                u = r.options,
                f = r.originalSize,
                e = r.originalPosition,
                s = {
                    height: r.size.height - f.height || 0,
                    width: r.size.width - f.width || 0,
                    top: r.position.top - e.top || 0,
                    left: r.position.left - e.left || 0
                },
                o = function(t, r) {
                    n(t).each(function() {
                        var t = n(this),
                            f = n(this).data("ui-resizable-alsoresize"),
                            u = {},
                            e = r && r.length ? r : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        n.each(e, function(n, t) {
                            var i = (f[t] || 0) + (s[t] || 0);
                            i && i >= 0 && (u[t] = i || null)
                        });
                        t.css(u)
                    })
                };
            typeof u.alsoResize != "object" || u.alsoResize.nodeType ? o(u.alsoResize) : n.each(u.alsoResize, function(n, t) {
                o(n, t)
            })
        },
        stop: function() {
            n(this).removeData("resizable-alsoresize")
        }
    });
    n.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = n(this).resizable("instance"),
                i = t.options,
                r = t.size;
            t.ghost = t.originalElement.clone();
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : "");
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = n(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = n(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    });
    n.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var h, t = n(this).resizable("instance"),
                i = t.options,
                y = t.size,
                e = t.originalSize,
                o = t.originalPosition,
                c = t.axis,
                l = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid,
                s = l[0] || 1,
                f = l[1] || 1,
                a = Math.round((y.width - e.width) / s) * s,
                v = Math.round((y.height - e.height) / f) * f,
                r = e.width + a,
                u = e.height + v,
                p = i.maxWidth && i.maxWidth < r,
                w = i.maxHeight && i.maxHeight < u,
                b = i.minWidth && i.minWidth > r,
                k = i.minHeight && i.minHeight > u;
            i.grid = l;
            b && (r += s);
            k && (u += f);
            p && (r -= s);
            w && (u -= f);
            /^(se|s|e)$/.test(c) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.top = o.top - v) : /^(sw)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.left = o.left - a) : ((u - f <= 0 || r - s <= 0) && (h = t._getPaddingPlusBorderDimensions(this)), u - f > 0 ? (t.size.height = u, t.position.top = o.top - v) : (u = f - h.height, t.size.height = u, t.position.top = o.top + e.height - u), r - s > 0 ? (t.size.width = r, t.position.left = o.left - a) : (r = f - h.height, t.size.width = r, t.position.left = o.left + e.width - r))
        }
    });
    ot = n.ui.resizable;
    st = n.widget("ui.dialog", {
        version: "1.11.2",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = n(this).css(t).offset().top;
                    i < 0 && n(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && n.fn.draggable && this._makeDraggable();
            this.options.resizable && n.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var n, t = this.originalPosition;
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(!0, !0).remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            n = t.parent.children().eq(t.index);
            n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: n.noop,
        enable: n.noop,
        close: function(t) {
            var i, r = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                    i = this.document[0].activeElement;
                    i && i.nodeName.toLowerCase() !== "body" && n(i).blur()
                } catch (u) {}
                this._hide(this.uiDialog, this.options.hide, function() {
                    r._trigger("close", t)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, i) {
            var r = !1,
                f = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +n(this).css("z-index")
                }).get(),
                u = Math.max.apply(null, f);
            return u >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", u + 1), r = !0), r && !i && this._trigger("focus", t), r
        },
        open: function() {
            var t = this;
            if (this._isOpen) {
                this._moveToTop() && this._focusTabbable();
                return
            }
            this._isOpen = !0;
            this.opener = n(this.document[0].activeElement);
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, !0);
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
            this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable();
                t._trigger("focus")
            });
            this._makeFocusTarget();
            this._trigger("open")
        },
        _focusTabbable: function() {
            var n = this._focusedElement;
            n || (n = this.element.find("[autofocus]"));
            n.length || (n = this.element.find(":tabbable"));
            n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
            n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
            n.length || (n = this.uiDialog);
            n.eq(0).focus()
        },
        _keepFocus: function(t) {
            function i() {
                var t = this.document[0].activeElement,
                    i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault();
            i.call(this);
            this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) {
                        t.preventDefault();
                        this.close(t);
                        return
                    }
                    if (t.keyCode === n.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            r = i.filter(":first"),
                            u = i.filter(":last");
                        t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (this._delay(function() {
                            u.focus()
                        }), t.preventDefault()) : (this._delay(function() {
                            r.focus()
                        }), t.preventDefault())
                    }
                },
                mousedown: function(n) {
                    this._moveToTop(n) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            });
            this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {
                click: function(n) {
                    n.preventDefault();
                    this.close(n)
                }
            });
            t = n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(t);
            this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(n) {
            this.options.title || n.html("&#160;");
            n.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },
        _createButtons: function() {
            var i = this,
                t = this.options.buttons;
            if (this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(t) || n.isArray(t) && !t.length) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            n.each(t, function(t, r) {
                var u, f;
                r = n.isFunction(r) ? {
                    click: r,
                    text: t
                } : r;
                r = n.extend({
                    type: "button"
                }, r);
                u = r.click;
                r.click = function() {
                    u.apply(i.element[0], arguments)
                };
                f = {
                    icons: r.icons,
                    text: r.showText
                };
                delete r.icons;
                delete r.showText;
                n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet)
            });
            this.uiDialog.addClass("ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function() {
            function i(n) {
                return {
                    position: n.position,
                    offset: n.offset
                }
            }
            var t = this,
                r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(r, u) {
                    n(this).addClass("ui-dialog-dragging");
                    t._blockFrames();
                    t._trigger("dragStart", r, i(u))
                },
                drag: function(n, r) {
                    t._trigger("drag", n, i(r))
                },
                stop: function(u, f) {
                    var e = f.offset.left - t.document.scrollLeft(),
                        o = f.offset.top - t.document.scrollTop();
                    r.position = {
                        my: "left top",
                        at: "left" + (e >= 0 ? "+" : "") + e + " top" + (o >= 0 ? "+" : "") + o,
                        of: t.window
                    };
                    n(this).removeClass("ui-dialog-dragging");
                    t._unblockFrames();
                    t._trigger("dragStop", u, i(f))
                }
            })
        },
        _makeResizable: function() {
            function r(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }
            var t = this,
                i = this.options,
                u = i.resizable,
                f = this.uiDialog.css("position"),
                e = typeof u == "string" ? u : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: e,
                start: function(i, u) {
                    n(this).addClass("ui-dialog-resizing");
                    t._blockFrames();
                    t._trigger("resizeStart", i, r(u))
                },
                resize: function(n, i) {
                    t._trigger("resize", n, r(i))
                },
                stop: function(u, f) {
                    var e = t.uiDialog.offset(),
                        o = e.left - t.document.scrollLeft(),
                        s = e.top - t.document.scrollTop();
                    i.height = t.uiDialog.height();
                    i.width = t.uiDialog.width();
                    i.position = {
                        my: "left top",
                        at: "left" + (o >= 0 ? "+" : "") + o + " top" + (s >= 0 ? "+" : "") + s,
                        of: t.window
                    };
                    n(this).removeClass("ui-dialog-resizing");
                    t._unblockFrames();
                    t._trigger("resizeStop", u, r(f))
                }
            }).css("position", f)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget();
                    this._focusedElement = n(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances(),
                i = n.inArray(this, t);
            i !== -1 && t.splice(i, 1)
        },
        _trackingInstances: function() {
            var n = this.document.data("ui-dialog-instances");
            return n || (n = [], this.document.data("ui-dialog-instances", n)), n
        },
        _minHeight: function() {
            var n = this.options;
            return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
        },
        _position: function() {
            var n = this.uiDialog.is(":visible");
            n || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            n || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this,
                r = !1,
                u = {};
            n.each(t, function(n, t) {
                i._setOption(n, t);
                n in i.sizeRelatedOptions && (r = !0);
                n in i.resizableRelatedOptions && (u[n] = t)
            });
            r && (this._size(), this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", u)
        },
        _setOption: function(n, t) {
            var u, r, i = this.uiDialog;
            (n === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t), n !== "disabled") && (this._super(n, t), n === "appendTo" && this.uiDialog.appendTo(this._appendTo()), n === "buttons" && this._createButtons(), n === "closeText" && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), n === "draggable" && (u = i.is(":data(ui-draggable)"), u && !t && i.draggable("destroy"), !u && t && this._makeDraggable()), n === "position" && this._position(), n === "resizable" && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && typeof t == "string" && i.resizable("option", "handles", t), r || t === !1 || this._makeResizable()), n === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, i, r, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            n.minWidth > n.width && (n.width = n.minWidth);
            t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight();
            i = Math.max(0, n.minHeight - t);
            r = typeof n.maxHeight == "number" ? Math.max(0, n.maxHeight - t) : "none";
            n.height === "auto" ? this.element.css({
                minHeight: i,
                maxHeight: r,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = n(this);
                return n("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        // _allowInteraction: function(t) {
        //     return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
        // },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay(function() {
                    t = !1
                });
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(n) {
                        t || this._allowInteraction(n) || (n.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                });
                this.overlay = n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                });
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var n = this.document.data("ui-dialog-overlays") - 1;
                n ? this.document.data("ui-dialog-overlays", n) : this.document.unbind("focusin").removeData("ui-dialog-overlays");
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    n.widget("ui.droppable", {
        version: "1.11.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t, i = this.options,
                r = i.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = n.isFunction(r) ? r : function(n) {
                return n.is(r)
            };
            this.proportions = function() {
                if (arguments.length) t = arguments[0];
                else return t ? t : t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            };
            this._addToManager(i.scope);
            i.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function(t) {
            n.ui.ddmanager.droppables[t] = n.ui.ddmanager.droppables[t] || [];
            n.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function(n) {
            for (var t = 0; t < n.length; t++) n[t] === this && n.splice(t, 1)
        },
        _destroy: function() {
            var t = n.ui.ddmanager.droppables[this.options.scope];
            this._splice(t);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, i) {
            if (t === "accept") this.accept = n.isFunction(i) ? i : function(n) {
                return n.is(i)
            };
            else if (t === "scope") {
                var r = n.ui.ddmanager.droppables[this.options.scope];
                this._splice(r);
                this._addToManager(i)
            }
            this._super(t, i)
        },
        _activate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass);
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var r = i || n.ui.ddmanager.current,
                u = !1;
            return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = n(this).droppable("instance");
                if (i.options.greedy && !i.options.disabled && i.options.scope === r.options.scope && i.accept.call(i.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, t)) return u = !0, !1
            }), u) ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
        },
        ui: function(n) {
            return {
                draggable: n.currentItem || n.element,
                helper: n.helper,
                position: n.position,
                offset: n.positionAbs
            }
        }
    });
    n.ui.intersect = function() {
        function n(n, t, i) {
            return n >= t && n < t + i
        }
        return function(t, i, r, u) {
            if (!i.offset) return !1;
            var o = (t.positionAbs || t.position.absolute).left + t.margins.left,
                s = (t.positionAbs || t.position.absolute).top + t.margins.top,
                h = o + t.helperProportions.width,
                c = s + t.helperProportions.height,
                f = i.offset.left,
                e = i.offset.top,
                l = f + i.proportions().width,
                a = e + i.proportions().height;
            switch (r) {
                case "fit":
                    return f <= o && h <= l && e <= s && c <= a;
                case "intersect":
                    return f < o + t.helperProportions.width / 2 && h - t.helperProportions.width / 2 < l && e < s + t.helperProportions.height / 2 && c - t.helperProportions.height / 2 < a;
                case "pointer":
                    return n(u.pageY, e, i.proportions().height) && n(u.pageX, f, i.proportions().width);
                case "touch":
                    return (s >= e && s <= a || c >= e && c <= a || s < e && c > a) && (o >= f && o <= l || h >= f && h <= l || o < f && h > l);
                default:
                    return !1
            }
        }
    }();
    n.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [],
                o = i ? i.type : null,
                e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            n: for (r = 0; r < u.length; r++)
                if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                    for (f = 0; f < e.length; f++)
                        if (e[f] === u[r].element[0]) {
                            u[r].proportions().height = 0;
                            continue n
                        }(u[r].visible = u[r].element.css("display") !== "none", u[r].visible) && (o === "mousedown" && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions({
                        width: u[r].element[0].offsetWidth,
                        height: u[r].element[0].offsetHeight
                    }))
                }
        },
        drop: function(t, i) {
            var r = !1;
            return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance, i) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), r
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var r, e, f, o = n.ui.intersect(t, this, this.options.tolerance, i),
                        u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    u && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return n(this).droppable("instance").options.scope === e
                    }), f.length && (r = n(f[0]).droppable("instance"), r.greedyChild = u === "isover")), r && u === "isover" && (r.isover = !1, r.isout = !0, r._out.call(r, i)), this[u] = !0, this[u === "isout" ? "isover" : "isout"] = !1, this[u === "isover" ? "_over" : "_out"].call(this, i), r && u === "isout" && (r.isout = !1, r.isover = !0, r._over.call(r, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable");
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
        }
    };
    ht = n.ui.droppable;
    e = "ui-effects-";
    o = n;
    n.effects = {
        effect: {}
    },
        function(n, t) {
            function f(n, t, i) {
                var r = h[t.type] || {};
                return n == null ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n)) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : r.max < n ? r.max : n
            }

            function s(t) {
                var f = i(),
                    o = f._rgba = [];
                return (t = t.toLowerCase(), r(v, function(n, i) {
                    var r, s = i.re.exec(t),
                        h = s && i.parse(s),
                        e = i.space || "rgba";
                    if (h) return r = f[e](h), f[u[e].cache] = r[u[e].cache], o = f._rgba = r._rgba, !1
                }), o.length) ? (o.join() === "0,0,0,0" && n.extend(o, e.transparent), f) : e[t]
            }

            function o(n, t, i) {
                return (i = (i + 1) % 1, i * 6 < 1) ? n + (t - n) * i * 6 : i * 2 < 1 ? t : i * 3 < 2 ? n + (t - n) * (2 / 3 - i) * 6 : n
            }
            var a = /^([\-+])=\s*(\d+\.?\d*)/,
                v = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(n) {
                        return [n[1], n[2], n[3], n[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(n) {
                        return [n[1] * 2.55, n[2] * 2.55, n[3] * 2.55, n[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(n) {
                        return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(n) {
                        return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(n) {
                        return [n[1], n[2] / 100, n[3] / 100, n[4]]
                    }
                }],
                i = n.Color = function(t, i, r, u) {
                    return new n.Color.fn.parse(t, i, r, u)
                },
                u = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                h = {
                    byte: {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                c = i.support = {},
                l = n("<p>")[0],
                e, r = n.each;
            l.style.cssText = "background-color:rgba(1,1,1,.5)";
            c.rgba = l.style.backgroundColor.indexOf("rgba") > -1;
            r(u, function(n, t) {
                t.cache = "_" + n;
                t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            });
            i.fn = n.extend(i.prototype, {
                parse: function(o, h, c, l) {
                    if (o === t) return this._rgba = [null, null, null, null], this;
                    (o.jquery || o.nodeType) && (o = n(o).css(h), h = t);
                    var a = this,
                        v = n.type(o),
                        y = this._rgba = [];
                    return (h !== t && (o = [o, h, c, l], v = "array"), v === "string") ? this.parse(s(o) || e._default) : v === "array" ? (r(u.rgba.props, function(n, t) {
                        y[t.idx] = f(o[t.idx], t)
                    }), this) : v === "object" ? (o instanceof i ? r(u, function(n, t) {
                        o[t.cache] && (a[t.cache] = o[t.cache].slice())
                    }) : r(u, function(t, i) {
                        var u = i.cache;
                        r(i.props, function(n, t) {
                            if (!a[u] && i.to) {
                                if (n === "alpha" || o[n] == null) return;
                                a[u] = i.to(a._rgba)
                            }
                            a[u][t.idx] = f(o[n], t, !0)
                        });
                        a[u] && n.inArray(null, a[u].slice(0, 3)) < 0 && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u])))
                    }), this) : void 0
                },
                is: function(n) {
                    var e = i(n),
                        t = !0,
                        f = this;
                    return r(u, function(n, i) {
                        var o, u = e[i.cache];
                        return u && (o = f[i.cache] || i.to && i.to(f._rgba) || [], r(i.props, function(n, i) {
                            if (u[i.idx] != null) return t = u[i.idx] === o[i.idx]
                        })), t
                    }), t
                },
                _space: function() {
                    var n = [],
                        t = this;
                    return r(u, function(i, r) {
                        t[r.cache] && n.push(i)
                    }), n.pop()
                },
                transition: function(n, t) {
                    var e = i(n),
                        c = e._space(),
                        o = u[c],
                        l = this.alpha() === 0 ? i("transparent") : this,
                        a = l[o.cache] || o.to(l._rgba),
                        s = a.slice();
                    return e = e[o.cache], r(o.props, function(n, i) {
                        var c = i.idx,
                            r = a[c],
                            u = e[c],
                            o = h[i.type] || {};
                        u !== null && (r === null ? s[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), s[c] = f((u - r) * t + r, i)))
                    }), this[c](s)
                },
                blend: function(t) {
                    if (this._rgba[3] === 1) return this;
                    var r = this._rgba.slice(),
                        u = r.pop(),
                        f = i(t)._rgba;
                    return i(n.map(r, function(n, t) {
                        return (1 - u) * f[t] + u * n
                    }))
                },
                toRgbaString: function() {
                    var i = "rgba(",
                        t = n.map(this._rgba, function(n, t) {
                            return n == null ? t > 2 ? 1 : 0 : n
                        });
                    return t[3] === 1 && (t.pop(), i = "rgb("), i + t.join() + ")"
                },
                toHslaString: function() {
                    var i = "hsla(",
                        t = n.map(this.hsla(), function(n, t) {
                            return n == null && (n = t > 2 ? 1 : 0), t && t < 3 && (n = Math.round(n * 100) + "%"), n
                        });
                    return t[3] === 1 && (t.pop(), i = "hsl("), i + t.join() + ")"
                },
                toHexString: function(t) {
                    var i = this._rgba.slice(),
                        r = i.pop();
                    return t && i.push(~~(r * 255)), "#" + n.map(i, function(n) {
                        return n = (n || 0).toString(16), n.length === 1 ? "0" + n : n
                    }).join("")
                },
                toString: function() {
                    return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
                }
            });
            i.fn.parse.prototype = i.fn;
            u.hsla.to = function(n) {
                if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
                var i = n[0] / 255,
                    r = n[1] / 255,
                    f = n[2] / 255,
                    s = n[3],
                    u = Math.max(i, r, f),
                    e = Math.min(i, r, f),
                    t = u - e,
                    o = u + e,
                    h = o * .5,
                    c, l;
                return c = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, l = t === 0 ? 0 : h <= .5 ? t / o : t / (2 - o), [Math.round(c) % 360, l, h, s == null ? 1 : s]
            };
            u.hsla.from = function(n) {
                if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
                var r = n[0] / 360,
                    u = n[1],
                    t = n[2],
                    e = n[3],
                    i = t <= .5 ? t * (1 + u) : t + u - t * u,
                    f = 2 * t - i;
                return [Math.round(o(f, i, r + 1 / 3) * 255), Math.round(o(f, i, r) * 255), Math.round(o(f, i, r - 1 / 3) * 255), e]
            };
            r(u, function(u, e) {
                var s = e.props,
                    o = e.cache,
                    h = e.to,
                    c = e.from;
                i.fn[u] = function(u) {
                    if (h && !this[o] && (this[o] = h(this._rgba)), u === t) return this[o].slice();
                    var l, a = n.type(u),
                        v = a === "array" || a === "object" ? u : arguments,
                        e = this[o].slice();
                    return r(s, function(n, t) {
                        var i = v[a === "object" ? n : t.idx];
                        i == null && (i = e[t.idx]);
                        e[t.idx] = f(i, t)
                    }), c ? (l = i(c(e)), l[o] = e, l) : i(e)
                };
                r(s, function(t, r) {
                    i.fn[t] || (i.fn[t] = function(i) {
                        var f = n.type(i),
                            h = t === "alpha" ? this._hsla ? "hsla" : "rgba" : u,
                            o = this[h](),
                            s = o[r.idx],
                            e;
                        return f === "undefined" ? s : (f === "function" && (i = i.call(this, s), f = n.type(i)), i == null && r.empty) ? this : (f === "string" && (e = a.exec(i), e && (i = s + parseFloat(e[2]) * (e[1] === "+" ? 1 : -1))), o[r.idx] = i, this[h](o))
                    })
                })
            });
            i.hook = function(t) {
                var u = t.split(" ");
                r(u, function(t, r) {
                    n.cssHooks[r] = {
                        set: function(t, u) {
                            var o, f, e = "";
                            if (u !== "transparent" && (n.type(u) !== "string" || (o = s(u)))) {
                                if (u = i(o || u), !c.rgba && u._rgba[3] !== 1) {
                                    for (f = r === "backgroundColor" ? t.parentNode : t;
                                         (e === "" || e === "transparent") && f && f.style;) try {
                                        e = n.css(f, "backgroundColor");
                                        f = f.parentNode
                                    } catch (h) {}
                                    u = u.blend(e && e !== "transparent" ? e : "_default")
                                }
                                u = u.toRgbaString()
                            }
                            try {
                                t.style[r] = u
                            } catch (h) {}
                        }
                    };
                    n.fx.step[r] = function(t) {
                        t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0);
                        n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            };
            i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
            n.cssHooks.borderColor = {
                expand: function(n) {
                    var t = {};
                    return r(["Top", "Right", "Bottom", "Left"], function(i, r) {
                        t["border" + r + "Color"] = n
                    }), t
                }
            };
            e = n.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(o),
        function() {
            function t(t) {
                var r, u, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    f = {};
                if (i && i.length && i[0] && i[i[0]])
                    for (u = i.length; u--;) r = i[u], typeof i[r] == "string" && (f[n.camelCase(r)] = i[r]);
                else
                    for (r in i) typeof i[r] == "string" && (f[r] = i[r]);
                return f
            }

            function i(t, i) {
                var e = {},
                    r, f;
                for (r in i) f = i[r], t[r] !== f && (u[r] || (n.fx.step[r] || !isNaN(parseFloat(f))) && (e[r] = f));
                return e
            }
            var r = ["add", "remove", "toggle"],
                u = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                n.fx.step[i] = function(n) {
                    (n.end === "none" || n.setAttr) && (n.pos !== 1 || n.setAttr) || (o.style(n.elem, i, n.end), n.setAttr = !0)
                }
            });
            n.fn.addBack || (n.fn.addBack = function(n) {
                return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
            });
            n.effects.animateClass = function(u, f, e, o) {
                var s = n.speed(f, e, o);
                return this.queue(function() {
                    var e = n(this),
                        h = e.attr("class") || "",
                        o, f = s.children ? e.find("*").addBack() : e;
                    f = f.map(function() {
                        var i = n(this);
                        return {
                            el: i,
                            start: t(this)
                        }
                    });
                    o = function() {
                        n.each(r, function(n, t) {
                            u[t] && e[t + "Class"](u[t])
                        })
                    };
                    o();
                    f = f.map(function() {
                        return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                    });
                    e.attr("class", h);
                    f = f.map(function() {
                        var i = this,
                            t = n.Deferred(),
                            r = n.extend({}, s, {
                                queue: !1,
                                complete: function() {
                                    t.resolve(i)
                                }
                            });
                        return this.el.animate(this.diff, r), t.promise()
                    });
                    n.when.apply(n, f.get()).done(function() {
                        o();
                        n.each(arguments, function() {
                            var t = this.el;
                            n.each(this.diff, function(n) {
                                t.css(n, "")
                            })
                        });
                        s.complete.call(e[0])
                    })
                })
            };
            n.fn.extend({
                addClass: function(t) {
                    return function(i, r, u, f) {
                        return r ? n.effects.animateClass.call(this, {
                            add: i
                        }, r, u, f) : t.apply(this, arguments)
                    }
                }(n.fn.addClass),
                removeClass: function(t) {
                    return function(i, r, u, f) {
                        return arguments.length > 1 ? n.effects.animateClass.call(this, {
                            remove: i
                        }, r, u, f) : t.apply(this, arguments)
                    }
                }(n.fn.removeClass),
                toggleClass: function(t) {
                    return function(i, r, u, f, e) {
                        return typeof r == "boolean" || r === undefined ? u ? n.effects.animateClass.call(this, r ? {
                            add: i
                        } : {
                            remove: i
                        }, u, f, e) : t.apply(this, arguments) : n.effects.animateClass.call(this, {
                            toggle: i
                        }, r, u, f)
                    }
                }(n.fn.toggleClass),
                switchClass: function(t, i, r, u, f) {
                    return n.effects.animateClass.call(this, {
                        add: i,
                        remove: t
                    }, r, u, f)
                }
            })
        }(),
        function() {
            function t(t, i, r, u) {
                return n.isPlainObject(t) && (i = t, t = t.effect), t = {
                    effect: t
                }, i == null && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), (typeof i == "number" || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t
            }

            function i(t) {
                return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects.effect[t] ? !0 : n.isFunction(t) ? !0 : typeof t == "object" && !t.effect ? !0 : !1
            }
            n.extend(n.effects, {
                version: "1.11.2",
                save: function(n, t) {
                    for (var i = 0; i < t.length; i++) t[i] !== null && n.data(e + t[i], n[0].style[t[i]])
                },
                restore: function(n, t) {
                    for (var r, i = 0; i < t.length; i++) t[i] !== null && (r = n.data(e + t[i]), r === undefined && (r = ""), n.css(t[i], r))
                },
                setMode: function(n, t) {
                    return t === "toggle" && (t = n.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function(n, t) {
                    var i, r;
                    switch (n[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = n[0] / t.height
                    }
                    switch (n[1]) {
                        case "left":
                            r = 0;
                            break;
                        case "center":
                            r = .5;
                            break;
                        case "right":
                            r = 1;
                            break;
                        default:
                            r = n[1] / t.width
                    }
                    return {
                        x: r,
                        y: i
                    }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            float: t.css("float")
                        },
                        u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        f = {
                            width: t.width(),
                            height: t.height()
                        },
                        r = document.activeElement;
                    try {
                        r.id
                    } catch (e) {
                        r = document.body
                    }
                    return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).focus(), u = t.parent(), t.css("position") === "static" ? (u.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (n.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), n.each(["top", "left", "bottom", "right"], function(n, r) {
                        i[r] = t.css(r);
                        isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(f), u.css(i).show()
                },
                removeWrapper: function(t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus()), t
                },
                setTransition: function(t, i, r, u) {
                    return u = u || {}, n.each(i, function(n, i) {
                        var f = t.cssUnit(i);
                        f[0] > 0 && (u[i] = f[0] * r + f[1])
                    }), u
                }
            });
            n.fn.extend({
                effect: function() {
                    function r(t) {
                        function f() {
                            n.isFunction(o) && o.call(r[0]);
                            n.isFunction(t) && t()
                        }
                        var r = n(this),
                            o = i.complete,
                            u = i.mode;
                        (r.is(":hidden") ? u === "hide" : u === "show") ? (r[u](), f()) : e.call(r[0], i, f)
                    }
                    var i = t.apply(this, arguments),
                        u = i.mode,
                        f = i.queue,
                        e = n.effects.effect[i.effect];
                    return n.fx.off || !e ? u ? this[u](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : f === !1 ? this.each(r) : this.queue(f || "fx", r)
                },
                show: function(n) {
                    return function(r) {
                        if (i(r)) return n.apply(this, arguments);
                        var u = t.apply(this, arguments);
                        return u.mode = "show", this.effect.call(this, u)
                    }
                }(n.fn.show),
                hide: function(n) {
                    return function(r) {
                        if (i(r)) return n.apply(this, arguments);
                        var u = t.apply(this, arguments);
                        return u.mode = "hide", this.effect.call(this, u)
                    }
                }(n.fn.hide),
                toggle: function(n) {
                    return function(r) {
                        if (i(r) || typeof r == "boolean") return n.apply(this, arguments);
                        var u = t.apply(this, arguments);
                        return u.mode = "toggle", this.effect.call(this, u)
                    }
                }(n.fn.toggle),
                cssUnit: function(t) {
                    var i = this.css(t),
                        r = [];
                    return n.each(["em", "px", "%", "pt"], function(n, t) {
                        i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                    }), r
                }
            })
        }(),
        function() {
            var t = {};
            n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, i) {
                t[i] = function(t) {
                    return Math.pow(t, n + 2)
                }
            });
            n.extend(t, {
                Sine: function(n) {
                    return 1 - Math.cos(n * Math.PI / 2)
                },
                Circ: function(n) {
                    return 1 - Math.sqrt(1 - n * n)
                },
                Elastic: function(n) {
                    return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
                },
                Back: function(n) {
                    return n * n * (3 * n - 2)
                },
                Bounce: function(n) {
                    for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
                }
            });
            n.each(t, function(t, i) {
                n.easing["easeIn" + t] = i;
                n.easing["easeOut" + t] = function(n) {
                    return 1 - i(1 - n)
                };
                n.easing["easeInOut" + t] = function(n) {
                    return n < .5 ? i(n * 2) / 2 : 1 - i(n * -2 + 2) / 2
                }
            })
        }();
    ct = n.effects;
    lt = n.effects.effect.blind = function(t, i) {
        var r = n(this),
            s = ["position", "top", "bottom", "left", "right", "height", "width"],
            v = n.effects.setMode(r, t.mode || "hide"),
            y = t.direction || "up",
            f = /up|down|vertical/.test(y),
            h = f ? "height" : "width",
            c = f ? "top" : "left",
            p = /up|left|vertical|horizontal/.test(y),
            l = {},
            a = v === "show",
            u, e, o;
        r.parent().is(".ui-effects-wrapper") ? n.effects.save(r.parent(), s) : n.effects.save(r, s);
        r.show();
        u = n.effects.createWrapper(r).css({
            overflow: "hidden"
        });
        e = u[h]();
        o = parseFloat(u.css(c)) || 0;
        l[h] = a ? e : 0;
        p || (r.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({
            position: "absolute"
        }), l[c] = a ? o : e + o);
        a && (u.css(h, 0), p || u.css(c, o + e));
        u.animate(l, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function() {
                v === "hide" && r.hide();
                n.effects.restore(r, s);
                n.effects.removeWrapper(r);
                i()
            }
        })
    };
    at = n.effects.effect.bounce = function(t, i) {
        var r = n(this),
            v = ["position", "top", "bottom", "left", "right", "height", "width"],
            k = n.effects.setMode(r, t.mode || "effect"),
            f = k === "hide",
            y = k === "show",
            h = t.direction || "up",
            u = t.distance,
            p = t.times || 5,
            d = p * 2 + (y || f ? 1 : 0),
            c = t.duration / d,
            l = t.easing,
            e = h === "up" || h === "down" ? "top" : "left",
            w = h === "up" || h === "left",
            b, o, s, a = r.queue(),
            g = a.length;
        for ((y || f) && v.push("opacity"), n.effects.save(r, v), r.show(), n.effects.createWrapper(r), u || (u = r[e === "top" ? "outerHeight" : "outerWidth"]() / 3), y && (s = {
            opacity: 1
        }, s[e] = 0, r.css("opacity", 0).css(e, w ? -u * 2 : u * 2).animate(s, c, l)), f && (u = u / Math.pow(2, p - 1)), s = {}, s[e] = 0, b = 0; b < p; b++) o = {}, o[e] = (w ? "-=" : "+=") + u, r.animate(o, c, l).animate(s, c, l), u = f ? u * 2 : u / 2;
        f && (o = {
            opacity: 0
        }, o[e] = (w ? "-=" : "+=") + u, r.animate(o, c, l));
        r.queue(function() {
            f && r.hide();
            n.effects.restore(r, v);
            n.effects.removeWrapper(r);
            i()
        });
        g > 1 && a.splice.apply(a, [1, 0].concat(a.splice(g, d + 1)));
        r.dequeue()
    };
    vt = n.effects.effect.clip = function(t, i) {
        var r = n(this),
            h = ["position", "top", "bottom", "left", "right", "height", "width"],
            v = n.effects.setMode(r, t.mode || "hide"),
            f = v === "show",
            y = t.direction || "vertical",
            c = y === "vertical",
            o = c ? "height" : "width",
            l = c ? "top" : "left",
            s = {},
            a, u, e;
        n.effects.save(r, h);
        r.show();
        a = n.effects.createWrapper(r).css({
            overflow: "hidden"
        });
        u = r[0].tagName === "IMG" ? a : r;
        e = u[o]();
        f && (u.css(o, 0), u.css(l, e / 2));
        s[o] = f ? e : 0;
        s[l] = f ? 0 : e / 2;
        u.animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                f || r.hide();
                n.effects.restore(r, h);
                n.effects.removeWrapper(r);
                i()
            }
        })
    };
    yt = n.effects.effect.drop = function(t, i) {
        var r = n(this),
            h = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            c = n.effects.setMode(r, t.mode || "hide"),
            e = c === "show",
            u = t.direction || "left",
            o = u === "up" || u === "down" ? "top" : "left",
            s = u === "up" || u === "left" ? "pos" : "neg",
            l = {
                opacity: e ? 1 : 0
            },
            f;
        n.effects.save(r, h);
        r.show();
        n.effects.createWrapper(r);
        f = t.distance || r[o === "top" ? "outerHeight" : "outerWidth"](!0) / 2;
        e && r.css("opacity", 0).css(o, s === "pos" ? -f : f);
        l[o] = (e ? s === "pos" ? "+=" : "-=" : s === "pos" ? "-=" : "+=") + f;
        r.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                c === "hide" && r.hide();
                n.effects.restore(r, h);
                n.effects.removeWrapper(r);
                i()
            }
        })
    };
    pt = n.effects.effect.explode = function(t, i) {
        function b() {
            l.push(this);
            l.length === e * c && k()
        }

        function k() {
            r.css({
                visibility: "visible"
            });
            n(l).remove();
            u || r.hide();
            i()
        }
        for (var e = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = e, r = n(this), d = n.effects.setMode(r, t.mode || "hide"), u = d === "show", w = r.show().css("visibility", "hidden").offset(), o = Math.ceil(r.outerWidth() / c), s = Math.ceil(r.outerHeight() / e), l = [], f, a, v, y, p, h = 0; h < e; h++)
            for (v = w.top + h * s, p = h - (e - 1) / 2, f = 0; f < c; f++) a = w.left + f * o, y = f - (c - 1) / 2, r.clone().appendTo("body").wrap("<div><\/div>").css({
                position: "absolute",
                visibility: "visible",
                left: -f * o,
                top: -h * s
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: o,
                height: s,
                left: a + (u ? y * o : 0),
                top: v + (u ? p * s : 0),
                opacity: u ? 0 : 1
            }).animate({
                left: a + (u ? 0 : y * o),
                top: v + (u ? 0 : p * s),
                opacity: u ? 1 : 0
            }, t.duration || 500, t.easing, b)
    };
    wt = n.effects.effect.fade = function(t, i) {
        var r = n(this),
            u = n.effects.setMode(r, t.mode || "toggle");
        r.animate({
            opacity: u
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    };
    bt = n.effects.effect.fold = function(t, i) {
        var r = n(this),
            s = ["position", "top", "bottom", "left", "right", "height", "width"],
            h = n.effects.setMode(r, t.mode || "hide"),
            e = h === "show",
            c = h === "hide",
            f = t.size || 15,
            l = /([0-9]+)%/.exec(f),
            a = !!t.horizFirst,
            v = e !== a,
            y = v ? ["width", "height"] : ["height", "width"],
            p = t.duration / 2,
            u, o, w = {},
            b = {};
        n.effects.save(r, s);
        r.show();
        u = n.effects.createWrapper(r).css({
            overflow: "hidden"
        });
        o = v ? [u.width(), u.height()] : [u.height(), u.width()];
        l && (f = parseInt(l[1], 10) / 100 * o[c ? 0 : 1]);
        e && u.css(a ? {
            height: 0,
            width: f
        } : {
            height: f,
            width: 0
        });
        w[y[0]] = e ? o[0] : f;
        b[y[1]] = e ? o[1] : 0;
        u.animate(w, p, t.easing).animate(b, p, t.easing, function() {
            c && r.hide();
            n.effects.restore(r, s);
            n.effects.removeWrapper(r);
            i()
        })
    };
    kt = n.effects.effect.highlight = function(t, i) {
        var r = n(this),
            u = ["backgroundImage", "backgroundColor", "opacity"],
            f = n.effects.setMode(r, t.mode || "show"),
            e = {
                backgroundColor: r.css("backgroundColor")
            };
        f === "hide" && (e.opacity = 0);
        n.effects.save(r, u);
        r.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(e, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                f === "hide" && r.hide();
                n.effects.restore(r, u);
                i()
            }
        })
    };
    dt = n.effects.effect.size = function(t, i) {
        var f, l, u, r = n(this),
            w = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            a = ["width", "height", "overflow"],
            v = ["fontSize"],
            e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            h = n.effects.setMode(r, t.mode || "effect"),
            y = t.restore || h !== "effect",
            c = t.scale || "both",
            b = t.origin || ["middle", "center"],
            k = r.css("position"),
            s = y ? w : ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            p = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        h === "show" && r.show();
        f = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        };
        t.mode === "toggle" && h === "show" ? (r.from = t.to || p, r.to = t.from || f) : (r.from = t.from || (h === "show" ? p : f), r.to = t.to || (h === "hide" ? p : f));
        u = {
            from: {
                y: r.from.height / f.height,
                x: r.from.width / f.width
            },
            to: {
                y: r.to.height / f.height,
                x: r.to.width / f.width
            }
        };
        (c === "box" || c === "both") && (u.from.y !== u.to.y && (s = s.concat(e), r.from = n.effects.setTransition(r, e, u.from.y, r.from), r.to = n.effects.setTransition(r, e, u.to.y, r.to)), u.from.x !== u.to.x && (s = s.concat(o), r.from = n.effects.setTransition(r, o, u.from.x, r.from), r.to = n.effects.setTransition(r, o, u.to.x, r.to)));
        (c === "content" || c === "both") && u.from.y !== u.to.y && (s = s.concat(v).concat(a), r.from = n.effects.setTransition(r, v, u.from.y, r.from), r.to = n.effects.setTransition(r, v, u.to.y, r.to));
        n.effects.save(r, s);
        r.show();
        n.effects.createWrapper(r);
        r.css("overflow", "hidden").css(r.from);
        b && (l = n.effects.getBaseline(b, f), r.from.top = (f.outerHeight - r.outerHeight()) * l.y, r.from.left = (f.outerWidth - r.outerWidth()) * l.x, r.to.top = (f.outerHeight - r.to.outerHeight) * l.y, r.to.left = (f.outerWidth - r.to.outerWidth) * l.x);
        r.css(r.from);
        (c === "content" || c === "both") && (e = e.concat(["marginTop", "marginBottom"]).concat(v), o = o.concat(["marginLeft", "marginRight"]), a = w.concat(e).concat(o), r.find("*[width]").each(function() {
            var i = n(this),
                r = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            y && n.effects.save(i, a);
            i.from = {
                height: r.height * u.from.y,
                width: r.width * u.from.x,
                outerHeight: r.outerHeight * u.from.y,
                outerWidth: r.outerWidth * u.from.x
            };
            i.to = {
                height: r.height * u.to.y,
                width: r.width * u.to.x,
                outerHeight: r.height * u.to.y,
                outerWidth: r.width * u.to.x
            };
            u.from.y !== u.to.y && (i.from = n.effects.setTransition(i, e, u.from.y, i.from), i.to = n.effects.setTransition(i, e, u.to.y, i.to));
            u.from.x !== u.to.x && (i.from = n.effects.setTransition(i, o, u.from.x, i.from), i.to = n.effects.setTransition(i, o, u.to.x, i.to));
            i.css(i.from);
            i.animate(i.to, t.duration, t.easing, function() {
                y && n.effects.restore(i, a)
            })
        }));
        r.animate(r.to, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                r.to.opacity === 0 && r.css("opacity", r.from.opacity);
                h === "hide" && r.hide();
                n.effects.restore(r, s);
                y || (k === "static" ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : n.each(["top", "left"], function(n, t) {
                    r.css(t, function(t, i) {
                        var f = parseInt(i, 10),
                            u = n ? r.to.left : r.to.top;
                        return i === "auto" ? u + "px" : f + u + "px"
                    })
                }));
                n.effects.removeWrapper(r);
                i()
            }
        })
    };
    gt = n.effects.effect.scale = function(t, i) {
        var u = n(this),
            r = n.extend(!0, {}, t),
            f = n.effects.setMode(u, t.mode || "effect"),
            s = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : f === "hide" ? 0 : 100),
            h = t.direction || "both",
            c = t.origin,
            e = {
                height: u.height(),
                width: u.width(),
                outerHeight: u.outerHeight(),
                outerWidth: u.outerWidth()
            },
            o = {
                y: h !== "horizontal" ? s / 100 : 1,
                x: h !== "vertical" ? s / 100 : 1
            };
        r.effect = "size";
        r.queue = !1;
        r.complete = i;
        f !== "effect" && (r.origin = c || ["middle", "center"], r.restore = !0);
        r.from = t.from || (f === "show" ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : e);
        r.to = {
            height: e.height * o.y,
            width: e.width * o.x,
            outerHeight: e.outerHeight * o.y,
            outerWidth: e.outerWidth * o.x
        };
        r.fade && (f === "show" && (r.from.opacity = 0, r.to.opacity = 1), f === "hide" && (r.from.opacity = 1, r.to.opacity = 0));
        u.effect(r)
    };
    ni = n.effects.effect.puff = function(t, i) {
        var r = n(this),
            e = n.effects.setMode(r, t.mode || "hide"),
            o = e === "hide",
            s = parseInt(t.percent, 10) || 150,
            f = s / 100,
            u = {
                height: r.height(),
                width: r.width(),
                outerHeight: r.outerHeight(),
                outerWidth: r.outerWidth()
            };
        n.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: e,
            complete: i,
            percent: o ? s : 100,
            from: o ? u : {
                height: u.height * f,
                width: u.width * f,
                outerHeight: u.outerHeight * f,
                outerWidth: u.outerWidth * f
            }
        });
        r.effect(t)
    };
    ti = n.effects.effect.pulsate = function(t, i) {
        var r = n(this),
            e = n.effects.setMode(r, t.mode || "show"),
            h = e === "show",
            a = e === "hide",
            v = h || e === "hide",
            o = (t.times || 5) * 2 + (v ? 1 : 0),
            c = t.duration / o,
            u = 0,
            f = r.queue(),
            l = f.length,
            s;
        for ((h || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1), s = 1; s < o; s++) r.animate({
            opacity: u
        }, c, t.easing), u = 1 - u;
        r.animate({
            opacity: u
        }, c, t.easing);
        r.queue(function() {
            a && r.hide();
            i()
        });
        l > 1 && f.splice.apply(f, [1, 0].concat(f.splice(l, o + 1)));
        r.dequeue()
    };
    ii = n.effects.effect.shake = function(t, i) {
        var r = n(this),
            v = ["position", "top", "bottom", "left", "right", "height", "width"],
            k = n.effects.setMode(r, t.mode || "effect"),
            f = t.direction || "left",
            o = t.distance || 20,
            y = t.times || 3,
            p = y * 2 + 1,
            u = Math.round(t.duration / p),
            s = f === "up" || f === "down" ? "top" : "left",
            h = f === "up" || f === "left",
            c = {},
            l = {},
            w = {},
            a, e = r.queue(),
            b = e.length;
        for (n.effects.save(r, v), r.show(), n.effects.createWrapper(r), c[s] = (h ? "-=" : "+=") + o, l[s] = (h ? "+=" : "-=") + o * 2, w[s] = (h ? "-=" : "+=") + o * 2, r.animate(c, u, t.easing), a = 1; a < y; a++) r.animate(l, u, t.easing).animate(w, u, t.easing);
        r.animate(l, u, t.easing).animate(c, u / 2, t.easing).queue(function() {
            k === "hide" && r.hide();
            n.effects.restore(r, v);
            n.effects.removeWrapper(r);
            i()
        });
        b > 1 && e.splice.apply(e, [1, 0].concat(e.splice(b, p + 1)));
        r.dequeue()
    };
    ri = n.effects.effect.slide = function(t, i) {
        var r = n(this),
            s = ["position", "top", "bottom", "left", "right", "width", "height"],
            h = n.effects.setMode(r, t.mode || "show"),
            c = h === "show",
            f = t.direction || "left",
            e = f === "up" || f === "down" ? "top" : "left",
            o = f === "up" || f === "left",
            u, l = {};
        n.effects.save(r, s);
        r.show();
        u = t.distance || r[e === "top" ? "outerHeight" : "outerWidth"](!0);
        n.effects.createWrapper(r).css({
            overflow: "hidden"
        });
        c && r.css(e, o ? isNaN(u) ? "-" + u : -u : u);
        l[e] = (c ? o ? "+=" : "-=" : o ? "-=" : "+=") + u;
        r.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                h === "hide" && r.hide();
                n.effects.restore(r, s);
                n.effects.removeWrapper(r);
                i()
            }
        })
    };
    ui = n.effects.effect.transfer = function(t, i) {
        var u = n(this),
            r = n(t.to),
            f = r.css("position") === "fixed",
            e = n("body"),
            o = f ? e.scrollTop() : 0,
            s = f ? e.scrollLeft() : 0,
            h = r.offset(),
            l = {
                top: h.top - o,
                left: h.left - s,
                height: r.innerHeight(),
                width: r.innerWidth()
            },
            c = u.offset(),
            a = n("<div class='ui-effects-transfer'><\/div>").appendTo(document.body).addClass(t.className).css({
                top: c.top - o,
                left: c.left - s,
                height: u.innerHeight(),
                width: u.innerWidth(),
                position: f ? "fixed" : "absolute"
            }).animate(l, t.duration, t.easing, function() {
                a.remove();
                i()
            })
    };
    fi = n.widget("ui.progressbar", {
        version: "1.11.2",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(n) {
            if (n === undefined) return this.options.value;
            this.options.value = this._constrainedValue(n);
            this._refreshValue()
        },
        _constrainedValue: function(n) {
            return n === undefined && (n = this.options.value), this.indeterminate = n === !1, typeof n != "number" && (n = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
        },
        _setOptions: function(n) {
            var t = n.value;
            delete n.value;
            this._super(n);
            this.options.value = this._constrainedValue(t);
            this._refreshValue()
        },
        _setOption: function(n, t) {
            n === "max" && (t = Math.max(this.min, t));
            n === "disabled" && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t);
            this._super(n, t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%");
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = n("<div class='ui-progressbar-overlay'><\/div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
            this.oldValue !== t && (this.oldValue = t, this._trigger("change"));
            t === this.options.max && this._trigger("complete")
        }
    });
    ei = n.widget("ui.selectable", n.ui.mouse, {
        version: "1.11.2",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t, i = this;
            this.element.addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function() {
                t = n(i.options.filter, i.element[0]);
                t.addClass("ui-selectee");
                t.each(function() {
                    var t = n(this),
                        i = t.offset();
                    n.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this.selectees = t.addClass("ui-selectee");
            this._mouseInit();
            this.helper = n("<div class='ui-selectable-helper'><\/div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var i = this,
                r = this.options;
            (this.opos = [t.pageX, t.pageY], this.options.disabled) || (this.selectees = n(r.filter, this.element[0]), this._trigger("start", t), n(r.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var r = n.data(this, "selectable-item");
                r.startselected = !0;
                t.metaKey || t.ctrlKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, i._trigger("unselecting", t, {
                    unselecting: r.element
                }))
            }), n(t.target).parents().addBack().each(function() {
                var u, r = n.data(this, "selectable-item");
                if (r) return u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"), r.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"), r.unselecting = !u, r.selecting = u, r.selected = u, u ? i._trigger("selecting", t, {
                    selecting: r.element
                }) : i._trigger("unselecting", t, {
                    unselecting: r.element
                }), !1
            }))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0, !this.options.disabled) {
                var e, o = this,
                    s = this.options,
                    i = this.opos[0],
                    r = this.opos[1],
                    u = t.pageX,
                    f = t.pageY;
                return i > u && (e = u, u = i, i = e), r > f && (e = f, f = r, r = e), this.helper.css({
                    left: i,
                    top: r,
                    width: u - i,
                    height: f - r
                }), this.selectees.each(function() {
                    var e = n.data(this, "selectable-item"),
                        h = !1;
                    e && e.element !== o.element[0] && (s.tolerance === "touch" ? h = !(e.left > u || e.right < i || e.top > f || e.bottom < r) : s.tolerance === "fit" && (h = e.left > i && e.right < u && e.top > r && e.bottom < f), h ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, o._trigger("selecting", t, {
                        selecting: e.element
                    }))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), o._trigger("unselecting", t, {
                        unselecting: e.element
                    }))), e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, o._trigger("unselecting", t, {
                        unselecting: e.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1, n(".ui-unselecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting");
                r.unselecting = !1;
                r.startselected = !1;
                i._trigger("unselected", t, {
                    unselected: r.element
                })
            }), n(".ui-selecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected");
                r.selecting = !1;
                r.selected = !0;
                r.startselected = !0;
                i._trigger("selected", t, {
                    selected: r.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    });
    oi = n.widget("ui.selectmenu", {
        version: "1.11.2",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var n = this.element.uniqueId().attr("id");
            this.ids = {
                element: n,
                button: n + "-button",
                menu: n + "-menu"
            };
            this._drawButton();
            this._drawMenu();
            this.options.disabled && this.disable()
        },
        _drawButton: function() {
            var t = this,
                i = this.element.attr("tabindex");
            this.label = n("label[for='" + this.ids.element + "']").attr("for", this.ids.button);
            this._on(this.label, {
                click: function(n) {
                    this.button.focus();
                    n.preventDefault()
                }
            });
            this.element.hide();
            this.button = n("<span>", {
                "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: i || this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            }).insertAfter(this.element);
            n("<span>", {
                "class": "ui-icon " + this.options.icons.button
            }).prependTo(this.button);
            this.buttonText = n("<span>", {
                "class": "ui-selectmenu-text"
            }).appendTo(this.button);
            this._setText(this.buttonText, this.element.find("option:selected").text());
            this._resizeButton();
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() {
                t.menuItems || t._refreshMenu()
            });
            this._hoverable(this.button);
            this._focusable(this.button)
        },
        _drawMenu: function() {
            var t = this;
            this.menu = n("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = n("<div>", {
                "class": "ui-selectmenu-menu ui-front"
            }).append(this.menu).appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                role: "listbox",
                select: function(n, i) {
                    n.preventDefault();
                    t._setSelection();
                    t._select(i.item.data("ui-selectmenu-item"), n)
                },
                focus: function(n, i) {
                    var r = i.item.data("ui-selectmenu-item");
                    t.focusIndex != null && r.index !== t.focusIndex && (t._trigger("focus", n, {
                        item: r
                    }), t.isOpen || t._select(r, n));
                    t.focusIndex = r.index;
                    t.button.attr("aria-activedescendant", t.menuItems.eq(r.index).attr("id"))
                }
            }).menu("instance");
            this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() {
                return !1
            };
            this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu();
            this._setText(this.buttonText, this._getSelectedItem().text());
            this.options.width || this._resizeButton()
        },
        _refreshMenu: function() {
            this.menu.empty();
            var n, t = this.element.find("option");
            t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), n = this._getSelectedItem(), this.menuInstance.focus(null, n), this._setAria(n.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(n) {
            this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", n))
        },
        _position: function() {
            this.menuWrap.position(n.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(n) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", n))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderMenu: function(t, i) {
            var u = this,
                r = "";
            n.each(i, function(i, f) {
                f.optgroup !== r && (n("<li>", {
                    "class": "ui-selectmenu-optgroup ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                    text: f.optgroup
                }).appendTo(t), r = f.optgroup);
                u._renderItemData(t, f)
            })
        },
        _renderItemData: function(n, t) {
            return this._renderItem(n, t).data("ui-selectmenu-item", t)
        },
        _renderItem: function(t, i) {
            var r = n("<li>");
            return i.disabled && r.addClass("ui-state-disabled"), this._setText(r, i.label), r.appendTo(t)
        },
        _setText: function(n, t) {
            t ? n.text(t) : n.html("&#160;")
        },
        _move: function(n, t) {
            var i, r, u = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), u += ":not(.ui-state-disabled)");
            r = n === "first" || n === "last" ? i[n === "first" ? "prevAll" : "nextAll"](u).eq(-1) : i[n + "All"](u).eq(0);
            r.length && this.menuInstance.focus(t, r)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex)
        },
        _toggle: function(n) {
            this[this.isOpen ? "close" : "open"](n)
        },
        _setSelection: function() {
            var n;
            this.range && (window.getSelection ? (n = window.getSelection(), n.removeAllRanges(), n.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function(t) {
                this.isOpen && (n(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var n;
                window.getSelection ? (n = window.getSelection(), n.rangeCount && (this.range = n.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(n) {
                this._setSelection();
                this._toggle(n)
            },
            keydown: function(t) {
                var i = !0;
                switch (t.keyCode) {
                    case n.ui.keyCode.TAB:
                    case n.ui.keyCode.ESCAPE:
                        this.close(t);
                        i = !1;
                        break;
                    case n.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t);
                        break;
                    case n.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t);
                        break;
                    case n.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t);
                        break;
                    case n.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                        break;
                    case n.ui.keyCode.LEFT:
                        this._move("prev", t);
                        break;
                    case n.ui.keyCode.RIGHT:
                        this._move("next", t);
                        break;
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.PAGE_UP:
                        this._move("first", t);
                        break;
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_DOWN:
                        this._move("last", t);
                        break;
                    default:
                        this.menu.trigger(t);
                        i = !1
                }
                i && t.preventDefault()
            }
        },
        _selectFocusedItem: function(n) {
            var t = this.menuItems.eq(this.focusIndex);
            t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), n)
        },
        _select: function(n, t) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = n.index;
            this._setText(this.buttonText, n.label);
            this._setAria(n);
            this._trigger("select", t, {
                item: n
            });
            n.index !== i && this._trigger("change", t, {
                item: n
            });
            this.close(t)
        },
        _setAria: function(n) {
            var t = this.menuItems.eq(n.index).attr("id");
            this.button.attr({
                "aria-labelledby": t,
                "aria-activedescendant": t
            });
            this.menu.attr("aria-activedescendant", t)
        },
        _setOption: function(n, t) {
            n === "icons" && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button);
            this._super(n, t);
            n === "appendTo" && this.menuWrap.appendTo(this._appendTo());
            n === "disabled" && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0));
            n === "width" && this._resizeButton()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _toggleAttr: function() {
            this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen);
            this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var n = this.options.width;
            n || (n = this.element.show().outerWidth(), this.element.hide());
            this.button.outerWidth(n)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            return {
                disabled: this.element.prop("disabled")
            }
        },
        _parseOptions: function(t) {
            var i = [];
            t.each(function(t, r) {
                var u = n(r),
                    f = u.parent("optgroup");
                i.push({
                    element: u,
                    index: t,
                    value: u.attr("value"),
                    label: u.text(),
                    optgroup: f.attr("label") || "",
                    disabled: f.prop("disabled") || u.prop("disabled")
                })
            });
            this.items = i
        },
        _destroy: function() {
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.label.attr("for", this.ids.element)
        }
    });
    si = n.widget("ui.slider", n.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1;
            this._mouseSliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var r, i, u = this.options,
                t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                f = [];
            for (i = u.values && u.values.length || 1, t.length > i && (t.slice(i).remove(), t = t.slice(0, i)), r = t.length; r < i; r++) f.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'><\/span>");
            this.handles = t.add(n(f.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function(t) {
                n(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options,
                i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = n("<div><\/div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove();
            this.range && this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var s, f, r, i, u, h, e, c, o = this,
                l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), s = {
                x: t.pageX,
                y: t.pageY
            }, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var e = Math.abs(f - o.values(t));
                (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t)
            }), h = this._start(t, u), h === !1) ? !1 : (this._mouseSliding = !0, this._handleIndex = u, i.addClass("ui-state-active").focus(), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - e.left - i.width() / 2,
                top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0)
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(n) {
            var t = {
                    x: n.pageX,
                    y: n.pageY
                },
                i = this._normValueFromMouse(t);
            return this._slide(n, this._handleIndex, i), !1
        },
        _mouseStop: function(n) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(n) {
            var i, r, t, u, f;
            return this.orientation === "horizontal" ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), t < 0 && (t = 0), this.orientation === "vertical" && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f)
        },
        _start: function(n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", n, i)
        },
        _slide: function(n, t, i) {
            var r, f, u;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > r || t === 1 && i < r) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i,
                values: f
            }), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i))) : i !== this.value() && (u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i
            }), u !== !1 && this.value(i))
        },
        _stop: function(n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
            this._trigger("stop", n, i)
        },
        _change: function(n, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
                this._lastChangedValue = t;
                this._trigger("change", n, i)
            }
        },
        value: function(n) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(n);
                this._refreshValue();
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(t, i) {
            var u, f, r;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(i);
                this._refreshValue();
                this._change(null, t);
                return
            }
            if (arguments.length)
                if (n.isArray(arguments[0])) {
                    for (u = this.options.values, f = arguments[0], r = 0; r < u.length; r += 1) u[r] = this._trimAlignValue(f[r]), this._change(null, r);
                    this._refreshValue()
                } else return this.options.values && this.options.values.length ? this._values(t) : this.value();
            else return this._values()
        },
        _setOption: function(t, i) {
            var r, u = 0;
            t === "range" && this.options.range === !0 && (i === "min" ? (this.options.value = this._values(0), this.options.values = null) : i === "max" && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null));
            n.isArray(this.options.values) && (u = this.options.values.length);
            t === "disabled" && this.element.toggleClass("ui-state-disabled", !!i);
            this._super(t, i);
            switch (t) {
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    this.handles.css(i === "horizontal" ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), r = 0; r < u; r += 1) this._change(null, r);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0;
                    this._refresh();
                    this._animateOff = !1
            }
        },
        _value: function() {
            var n = this.options.value;
            return this._trimAlignValue(n)
        },
        _values: function(n) {
            var r, t, i;
            if (arguments.length) return r = this.options.values[n], this._trimAlignValue(r);
            if (this.options.values && this.options.values.length) {
                for (t = this.options.values.slice(), i = 0; i < t.length; i += 1) t[i] = this._trimAlignValue(t[i]);
                return t
            }
            return []
        },
        _trimAlignValue: function(n) {
            if (n <= this._valueMin()) return this._valueMin();
            if (n >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (n - this._valueMin()) % t,
                r = n - i;
            return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5))
        },
        _calculateNewMax: function() {
            var n = (this.options.max - this._valueMin()) % this.options.step;
            this.max = this.options.max - n
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshValue: function() {
            var s, t, c, f, h, e = this.options.range,
                i = this.options,
                r = this,
                u = this._animateOff ? !1 : i.animate,
                o = {};
            this.options.values && this.options.values.length ? this.handles.each(function(f) {
                t = (r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100;
                o[r.orientation === "horizontal" ? "left" : "bottom"] = t + "%";
                n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
                r.options.range === !0 && (r.orientation === "horizontal" ? (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: t + "%"
                }, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
                    width: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })) : (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: t + "%"
                }, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
                    height: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })));
                s = t
            }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? (c - f) / (h - f) * 100 : 0, o[this.orientation === "horizontal" ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: t + "%"
            }, i.animate), e === "max" && this.orientation === "horizontal" && this.range[u ? "animate" : "css"]({
                width: 100 - t + "%"
            }, {
                queue: !1,
                duration: i.animate
            }), e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: t + "%"
            }, i.animate), e === "max" && this.orientation === "vertical" && this.range[u ? "animate" : "css"]({
                height: 100 - t + "%"
            }, {
                queue: !1,
                duration: i.animate
            }))
        },
        _handleEvents: {
            keydown: function(t) {
                var e, r, i, u, f = n(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_UP:
                    case n.ui.keyCode.PAGE_DOWN:
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, n(t.target).addClass("ui-state-active"), e = this._start(t, f), e === !1)) return
                }
                u = this.options.step;
                r = i = this.options.values && this.options.values.length ? this.values(f) : this.value();
                switch (t.keyCode) {
                    case n.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;
                    case n.ui.keyCode.END:
                        i = this._valueMax();
                        break;
                    case n.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                        if (r === this._valueMax()) return;
                        i = this._trimAlignValue(r + u);
                        break;
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (r === this._valueMin()) return;
                        i = this._trimAlignValue(r - u)
                }
                this._slide(t, f, i)
            },
            keyup: function(t) {
                var i = n(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), n(t.target).removeClass("ui-state-active"))
            }
        }
    });
    hi = n.widget("ui.sortable", n.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(n, t, i) {
            return n >= t && n < t + i
        },
        _isFloating: function(n) {
            return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"))
        },
        _create: function() {
            var n = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? n.axis === "x" || this._isFloating(this.items[0].item) : !1;
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = !0
        },
        _setOption: function(n, t) {
            this._super(n, t);
            n === "handle" && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            n.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            this._mouseDestroy();
            for (var n = this.items.length - 1; n >= 0; n--) this.items[n].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(t, i) {
            var r = null,
                f = !1,
                u = this;
            return this.reverting ? !1 : this.options.disabled || this.options.type === "static" ? !1 : (this._refreshItems(t), n(t.target).parents().each(function() {
                if (n.data(this, u.widgetName + "-item") === u) return r = n(this), !1
            }), n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)), !r) ? !1 : this.options.handle && !i && (n(this.options.handle, r).find("*").addBack().each(function() {
                this === t.target && (f = !0)
            }), !f) ? !1 : (this.currentItem = r, this._removeCurrentsFromItems(), !0)
        },
        _mouseStart: function(t, i, r) {
            var f, e, u = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, n.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && u.cursor !== "auto" && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", u.cursor), this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)
                for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", t, this._uiHash(this));
            return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            var e, u, f, o, i = this.options,
                r = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)), t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)
                if ((u = this.items[e], f = u.item[0], o = this._intersectsWithPointer(u), o) && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[o === 1 ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !n.contains(this.element[0], f) : !0)) {
                    if (this.direction = o === 1 ? "down" : "up", this.options.tolerance === "pointer" || this._intersectsWithSides(u)) this._rearrange(t, u);
                    else break;
                    this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
                    var e = this,
                        f = this.placeholder.offset(),
                        r = this.options.axis,
                        u = {};
                    r && r !== "x" || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft));
                    r && r !== "y" || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function() {
                        e._clear(t)
                    })
                } else this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, n(r).each(function() {
                var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
            }), !i.length && t.key && i.push(t.key + "="), i.join("&")
        },
        toArray: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, r.each(function() {
                i.push(n(t.item || this).attr(t.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function(n) {
            var t = this.positionAbs.left,
                h = t + this.helperProportions.width,
                i = this.positionAbs.top,
                c = i + this.helperProportions.height,
                r = n.left,
                f = r + n.width,
                u = n.top,
                e = u + n.height,
                o = this.offset.click.top,
                s = this.offset.click.left,
                l = this.options.axis === "x" || i + o > u && i + o < e,
                a = this.options.axis === "y" || t + s > r && t + s < f,
                v = l && a;
            return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? v : r < t + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < f && u < i + this.helperProportions.height / 2 && c - this.helperProportions.height / 2 < e
        },
        _intersectsWithPointer: function(n) {
            var r = this.options.axis === "x" || this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top, n.height),
                u = this.options.axis === "y" || this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left, n.width),
                f = r && u,
                t = this._getDragVerticalDirection(),
                i = this._getDragHorizontalDirection();
            return f ? this.floating ? i && i === "right" || t === "down" ? 2 : 1 : t && (t === "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function(n) {
            var r = this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height),
                u = this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width),
                t = this._getDragVerticalDirection(),
                i = this._getDragHorizontalDirection();
            return this.floating && i ? i === "right" && u || i === "left" && !u : t && (t === "down" && r || t === "up" && !r)
        },
        _getDragVerticalDirection: function() {
            var n = this.positionAbs.top - this.lastPositionAbs.top;
            return n !== 0 && (n > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var n = this.positionAbs.left - this.lastPositionAbs.left;
            return n !== 0 && (n > 0 ? "right" : "left")
        },
        refresh: function(n) {
            return this._refreshItems(n), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var n = this.options;
            return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function h() {
                s.push(this)
            }
            var r, u, e, i, s = [],
                f = [],
                o = this._connectWith();
            if (o && t)
                for (r = o.length - 1; r >= 0; r--)
                    for (e = n(o[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
            for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = f.length - 1; r >= 0; r--) f[r][0].each(h);
            return n(s)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = n.grep(this.items, function(n) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] === n.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [];
            this.containers = [this];
            var r, u, e, i, o, s, h, l, a = this.items,
                f = [
                    [n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : n(this.options.items, this.element), this]
                ],
                c = this._connectWith();
            if (c && this.ready)
                for (r = c.length - 1; r >= 0; r--)
                    for (e = n(c[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                        item: this.currentItem
                    }) : n(i.options.items, i.element), i]), this.containers.push(i));
            for (r = f.length - 1; r >= 0; r--)
                for (o = f[r][1], s = f[r][0], u = 0, l = s.length; u < l; u++) h = n(s[u]), h.data(this.widgetName + "-item", o), a.push({
                    item: h,
                    instance: o,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var r, f, u, i = this.items.length - 1; i >= 0; i--)(r = this.items[i], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var r, i = t.options;
            i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder, i.placeholder = {
                element: function() {
                    var u = t.currentItem[0].nodeName.toLowerCase(),
                        i = n("<" + u + ">", t.document[0]).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return u === "tr" ? t.currentItem.children().each(function() {
                        n("<td>&#160;<\/td>", t.document[0]).attr("colspan", n(this).attr("colspan") || 1).appendTo(i)
                    }) : u === "img" && i.attr("src", t.currentItem.attr("src")), r || i.css("visibility", "hidden"), i
                },
                update: function(n, u) {
                    (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            });
            t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem));
            t.currentItem.after(t.placeholder);
            i.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(t) {
            for (var u, c, f, a, v, o, l, s, h, e = null, i = null, r = this.containers.length - 1; r >= 0; r--)
                if (!n.contains(this.currentItem[0], this.containers[r].element[0]))
                    if (this._intersectsWith(this.containers[r].containerCache)) {
                        if (e && n.contains(this.containers[r].element[0], e.element[0])) continue;
                        e = this.containers[r];
                        i = r
                    } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
            if (e)
                if (this.containers.length === 1) this.containers[i].containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1);
                else {
                    for (c = 1e4, f = null, s = e.floating || this._isFloating(this.currentItem), a = s ? "left" : "top", v = s ? "width" : "height", h = s ? "clientX" : "clientY", u = this.items.length - 1; u >= 0; u--) n.contains(this.containers[i].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (o = this.items[u].item.offset()[a], l = !1, t[h] - o > this.items[u][v] / 2 && (l = !0), Math.abs(t[h] - o) < c && (c = Math.abs(t[h] - o), f = this.items[u], this.direction = l ? "up" : "down"));
                    if (!f && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[i]) {
                        this.currentContainer.containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1);
                        return
                    }
                    f ? this._rearrange(t, f, null, !0) : this._rearrange(t, null, this.containers[i].element, !0);
                    this._trigger("change", t, this._uiHash());
                    this.containers[i]._trigger("change", t, this._uiHash(this));
                    this.currentContainer = this.containers[i];
                    this.options.placeholder.update(this.currentContainer, this.placeholder);
                    this.containers[i]._trigger("over", t, this._uiHash(this));
                    this.containers[i].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var r = this.options,
                i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper === "clone" ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || n(r.appendTo !== "parent" ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left" in t && (this.offset.click.left = t.left + this.margins.left);
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top" in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition === "absolute" && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var n = this.currentItem.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, r, u, i = this.options;
            i.containment === "parent" && (i.containment = this.helper[0].parentNode);
            (i.containment === "document" || i.containment === "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (n(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
            /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0], r = n(i.containment).offset(), u = n(t).css("overflow") !== "hidden", this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t === "absolute" ? 1 : -1,
                u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var r, u, i = this.options,
                f = t.pageX,
                e = t.pageY,
                o = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                s = /(html|body)/i.test(o[0].tagName);
            return this.cssPosition !== "relative" || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)), {
                top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(n, t, i, r) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var u = this.counter;
            this._delay(function() {
                u === this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function(n, t) {
            function u(n, t, i) {
                return function(r) {
                    i._trigger(n, r, t._uiHash(t))
                }
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)(this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && r.push(function(n) {
                this._trigger("receive", n, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !t && r.push(function(n) {
                this._trigger("update", n, this._uiHash())
            }), this !== this.currentContainer && (t || (r.push(function(n) {
                this._trigger("remove", n, this._uiHash())
            }), r.push(function(n) {
                return function(t) {
                    n._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), r.push(function(n) {
                return function(t) {
                    n._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || r.push(u("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(u("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", n, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                for (i = 0; i < r.length; i++) r[i].call(this, n);
                this._trigger("stop", n, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {
            n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || n([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    });
    ci = n.widget("ui.spinner", {
        version: "1.11.2",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            this.value() !== "" && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = {},
                i = this.element;
            return n.each(["min", "max", "step"], function(n, r) {
                var u = i.attr(r);
                u !== undefined && u.length && (t[r] = u)
            }), t
        },
        _events: {
            keydown: function(n) {
                this._start(n) && this._keydown(n) && n.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(n) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._stop();
                this._refresh();
                this.previous !== this.element.val() && this._trigger("change", n)
            },
            mousewheel: function(n, t) {
                if (t) {
                    if (!this.spinning && !this._start(n)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, n);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(n)
                    }, 100);
                    n.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function r() {
                    var n = this.element[0] === this.document[0].activeElement;
                    n || (this.element.focus(), this.previous = i, this._delay(function() {
                        this.previous = i
                    }))
                }
                var i;
                (i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur;
                    r.call(this)
                }), this._start(t) !== !1) && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                if (n(t.currentTarget).hasClass("ui-state-active")) {
                    if (this._start(t) === !1) return !1;
                    this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                }
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton");
            this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
            this.buttons.height() > Math.ceil(n.height() * .5) && n.height() > 0 && n.height(n.height());
            this.options.disabled && this.disable()
        },
        _keydown: function(t) {
            var r = this.options,
                i = n.ui.keyCode;
            switch (t.keyCode) {
                case i.UP:
                    return this._repeat(null, 1, t), !0;
                case i.DOWN:
                    return this._repeat(null, -1, t), !0;
                case i.PAGE_UP:
                    return this._repeat(null, r.page, t), !0;
                case i.PAGE_DOWN:
                    return this._repeat(null, -r.page, t), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;<\/span><\/a>"
        },
        _start: function(n) {
            return !this.spinning && this._trigger("start", n) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function(n, t, i) {
            n = n || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, t, i)
            }, n);
            this._spin(t * this.options.step, i)
        },
        _spin: function(n, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1);
            i = this._adjustValue(i + n * this._increment(this.counter));
            this.spinning && this._trigger("spin", t, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(t) {
            var i = this.options.incremental;
            return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var n = this._precisionOf(this.options.step);
            return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))), n
        },
        _precisionOf: function(n) {
            var t = n.toString(),
                i = t.indexOf(".");
            return i === -1 ? 0 : t.length - i - 1
        },
        _adjustValue: function(n) {
            var r, i, t = this.options;
            return (r = t.min !== null ? t.min : 0, i = n - r, i = Math.round(i / t.step) * t.step, n = r + i, n = parseFloat(n.toFixed(this._precision())), t.max !== null && n > t.max) ? t.max : t.min !== null && n < t.min ? t.min : n
        },
        _stop: function(n) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n))
        },
        _setOption: function(n, t) {
            if (n === "culture" || n === "numberFormat") {
                var i = this._parse(this.element.val());
                this.options[n] = t;
                this.element.val(this._format(i));
                return
            }(n === "max" || n === "min" || n === "step") && typeof t == "string" && (t = this._parse(t));
            n === "icons" && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down));
            this._super(n, t);
            n === "disabled" && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"))
        },
        _setOptions: t(function(n) {
            this._super(n)
        }),
        _parse: function(n) {
            return typeof n == "string" && n !== "" && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n), n === "" || isNaN(n) ? null : n
        },
        _format: function(n) {
            return n === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var n = this.value();
            return n === null ? !1 : n === this._adjustValue(n)
        },
        _value: function(n, t) {
            var i;
            n !== "" && (i = this._parse(n), i !== null && (t || (i = this._adjustValue(i)), n = this._format(i)));
            this.element.val(n);
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function(n) {
            this._stepUp(n)
        }),
        _stepUp: function(n) {
            this._start() && (this._spin((n || 1) * this.options.step), this._stop())
        },
        stepDown: t(function(n) {
            this._stepDown(n)
        }),
        _stepDown: function(n) {
            this._start() && (this._spin((n || 1) * -this.options.step), this._stop())
        },
        pageUp: t(function(n) {
            this._stepUp((n || 1) * this.options.page)
        }),
        pageDown: t(function(n) {
            this._stepDown((n || 1) * this.options.page)
        }),
        value: function(n) {
            if (!arguments.length) return this._parse(this.element.val());
            t(this._value).call(this, n)
        },
        widget: function() {
            return this.uiSpinner
        }
    });
    li = n.widget("ui.tabs", {
        version: "1.11.2",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var n = /#.*$/;
            return function(t) {
                var i, r;
                t = t.cloneNode(!1);
                i = t.href.replace(n, "");
                r = location.href.replace(n, "");
                try {
                    i = decodeURIComponent(i)
                } catch (u) {}
                try {
                    r = decodeURIComponent(r)
                } catch (u) {}
                return t.hash.length > 1 && i === r
            }
        }(),
        _create: function() {
            var i = this,
                t = this.options;
            this.running = !1;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible);
            this._processTabs();
            t.active = this._initialActive();
            n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function(n) {
                return i.tabs.index(n)
            }))).sort());
            this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n();
            this._refresh();
            this.active.length && this.load(t.active)
        },
        _initialActive: function() {
            var t = this.options.active,
                i = this.options.collapsible,
                r = location.hash.substring(1);
            return t === null && (r && this.tabs.each(function(i, u) {
                if (n(u).attr("aria-controls") === r) return t = i, !1
            }), t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (t === null || t === -1) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), t === -1 && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : n()
            }
        },
        _tabKeydown: function(t) {
            var r = n(this.document[0].activeElement).closest("li"),
                i = this.tabs.index(r),
                u = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                        i++;
                        break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.LEFT:
                        u = !1;
                        i--;
                        break;
                    case n.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;
                    case n.ui.keyCode.HOME:
                        i = 0;
                        break;
                    case n.ui.keyCode.SPACE:
                        t.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(i);
                        return;
                    case n.ui.keyCode.ENTER:
                        t.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(i === this.options.active ? !1 : i);
                        return;
                    default:
                        return
                }
                t.preventDefault();
                clearTimeout(this.activating);
                i = this._focusNextTab(i, u);
                t.ctrlKey || (r.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(t, i) {
            function u() {
                return t > r && (t = 0), t < 0 && (t = r), t
            }
            for (var r = this.tabs.length - 1; n.inArray(u(), this.options.disabled) !== -1;) t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(n, t) {
            return n = this._findNextTab(n, t), this.tabs.eq(n).focus(), n
        },
        _setOption: function(n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            if (n === "disabled") {
                this._setupDisabled(t);
                return
            }
            this._super(n, t);
            n === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0));
            n === "event" && this._setupEvents(t);
            n === "heightStyle" && this._setupHeightStyle(t)
        },
        _sanitizeSelector: function(n) {
            return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                i = this.tablist.children(":has(a[href])");
            t.disabled = n.map(i.filter(".ui-state-disabled"), function(n) {
                return i.index(n)
            });
            this._processTabs();
            t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = n());
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });
            this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this,
                i = this.tabs,
                r = this.anchors,
                u = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) {
                n(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                n(this).closest("li").is(".ui-state-disabled") && this.blur()
            });
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            });
            this.anchors = this.tabs.map(function() {
                return n("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            });
            this.panels = n();
            this.anchors.each(function(i, r) {
                var f, u, e, s = n(r).uniqueId().attr("id"),
                    o = n(r).closest("li"),
                    h = o.attr("aria-controls");
                t._isLocal(r) ? (f = r.hash, e = f.substring(1), u = t.element.find(t._sanitizeSelector(f))) : (e = o.attr("aria-controls") || n({}).uniqueId()[0].id, f = "#" + e, u = t.element.find(f), u.length || (u = t._createPanel(e), u.insertAfter(t.panels[i - 1] || t.tablist)), u.attr("aria-live", "polite"));
                u.length && (t.panels = t.panels.add(u));
                h && o.data("ui-tabs-aria-controls", h);
                o.attr({
                    "aria-controls": e,
                    "aria-labelledby": s
                });
                u.attr("aria-labelledby", s)
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
            i && (this._off(i.not(this.tabs)), this._off(r.not(this.anchors)), this._off(u.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return n("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var i = 0, r; r = this.tabs[i]; i++) t === !0 || n.inArray(i, t) !== -1 ? n(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : n(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var i = {};
            t && n.each(t.split(" "), function(n, t) {
                i[t] = "_eventHandler"
            });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(!0, this.anchors, {
                click: function(n) {
                    n.preventDefault()
                }
            });
            this._on(this.anchors, i);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, r = this.element.parent();
            t === "fill" ? (i = r.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = n(this),
                    r = t.css("position");
                r !== "absolute" && r !== "fixed" && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= n(this).outerHeight(!0)
            }), this.panels.each(function() {
                n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : t === "auto" && (i = 0, this.panels.each(function() {
                i = Math.max(i, n(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var u = this.options,
                r = this.active,
                c = n(t.currentTarget),
                i = c.closest("li"),
                f = i[0] === r[0],
                e = f && u.collapsible,
                o = e ? n() : this._getPanelForTab(i),
                s = r.length ? this._getPanelForTab(r) : n(),
                h = {
                    oldTab: r,
                    oldPanel: s,
                    newTab: e ? n() : i,
                    newPanel: o
                };
            (t.preventDefault(), i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1) || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h))
        },
        _toggle: function(t, i) {
            function e() {
                u.running = !1;
                u._trigger("activate", t, i)
            }

            function o() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                r.length && u.options.show ? u._show(r, u.options.show, e) : (r.show(), e())
            }
            var u = this,
                r = i.newPanel,
                f = i.oldPanel;
            this.running = !0;
            f.length && this.options.hide ? this._hide(f, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                o()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), f.hide(), o());
            f.attr("aria-hidden", "true");
            i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            r.length && f.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                return n(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1);
            r.attr("aria-hidden", "false");
            i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var r, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: r,
                currentTarget: r,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return t === !1 ? n() : this.tabs.eq(t)
        },
        _getIndex: function(n) {
            return typeof n == "string" && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))), n
        },
        _destroy: function() {
            this.xhr && this.xhr.abort();
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
            this.tablist.unbind(this.eventNamespace);
            this.tabs.add(this.panels).each(function() {
                n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            });
            this.tabs.each(function() {
                var t = n(this),
                    i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            });
            this.panels.show();
            this.options.heightStyle !== "content" && this.panels.css("height", "")
        },
        enable: function(t) {
            var i = this.options.disabled;
            i !== !1 && (t === undefined ? i = !1 : (t = this._getIndex(t), i = n.isArray(i) ? n.map(i, function(n) {
                return n !== t ? n : null
            }) : n.map(this.tabs, function(n, i) {
                return i !== t ? i : null
            })), this._setupDisabled(i))
        },
        disable: function(t) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (t === undefined) i = !0;
                else {
                    if (t = this._getIndex(t), n.inArray(t, i) !== -1) return;
                    i = n.isArray(i) ? n.merge([t], i).sort() : [t]
                }
                this._setupDisabled(i)
            }
        },
        load: function(t, i) {
            t = this._getIndex(t);
            var u = this,
                r = this.tabs.eq(t),
                e = r.find(".ui-tabs-anchor"),
                f = this._getPanelForTab(r),
                o = {
                    tab: r,
                    panel: f
                };
            this._isLocal(e[0]) || (this.xhr = n.ajax(this._ajaxSettings(e, i, o)), this.xhr && this.xhr.statusText !== "canceled" && (r.addClass("ui-tabs-loading"), f.attr("aria-busy", "true"), this.xhr.success(function(n) {
                setTimeout(function() {
                    f.html(n);
                    u._trigger("load", i, o)
                }, 1)
            }).complete(function(n, t) {
                setTimeout(function() {
                    t === "abort" && u.panels.stop(!1, !0);
                    r.removeClass("ui-tabs-loading");
                    f.removeAttr("aria-busy");
                    n === u.xhr && delete u.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, r) {
            var u = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, f) {
                    return u._trigger("beforeLoad", i, n.extend({
                        jqXHR: t,
                        ajaxSettings: f
                    }, r))
                }
            }
        },
        _getPanelForTab: function(t) {
            var i = n(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    });
    ai = n.widget("ui.tooltip", {
        version: "1.11.2",
        options: {
            content: function() {
                var t = n(this).attr("title") || "";
                return n("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(t, i) {
            var r = (t.attr("aria-describedby") || "").split(/\s+/);
            r.push(i);
            t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
        },
        _removeDescribedBy: function(t) {
            var u = t.data("ui-tooltip-id"),
                i = (t.attr("aria-describedby") || "").split(/\s+/),
                r = n.inArray(u, i);
            r !== -1 && i.splice(r, 1);
            t.removeData("ui-tooltip-id");
            i = n.trim(i.join(" "));
            i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.options.disabled && this._disable();
            this.liveRegion = n("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
        },
        _setOption: function(t, i) {
            var r = this;
            if (t === "disabled") {
                this[i ? "_disable" : "_enable"]();
                this.options[t] = i;
                return
            }
            this._super(t, i);
            t === "content" && n.each(this.tooltips, function(n, t) {
                r._updateContent(t.element)
            })
        },
        _disable: function() {
            var t = this;
            n.each(this.tooltips, function(i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r.element[0];
                t.close(u, !0)
            });
            this.element.find(this.options.items).addBack().each(function() {
                var t = n(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var t = n(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function(t) {
            var r = this,
                i = n(t ? t.target : this.element).closest(this.options.items);
            i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && t.type === "mouseover" && i.parents().each(function() {
                var t = n(this),
                    i;
                t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0));
                t.attr("title") && (t.uniqueId(), r.parents[this.id] = {
                    element: this,
                    title: t.attr("title")
                }, t.attr("title", ""))
            }), this._updateContent(i, t))
        },
        _updateContent: function(n, t) {
            var i, r = this.options.content,
                u = this,
                f = t ? t.type : null;
            if (typeof r == "string") return this._open(t, n, r);
            i = r.call(n[0], function(i) {
                n.data("ui-tooltip-open") && u._delay(function() {
                    t && (t.type = f);
                    this._open(t, n, i)
                })
            });
            i && this._open(t, n, i)
        },
        _open: function(t, i, r) {
            function s(n) {
                (h.of = n, u.is(":hidden")) || u.position(h)
            }
            var f, u, e, c, o, h = n.extend({}, this.options.position);
            if (r) {
                if (f = this._find(i), f) {
                    f.tooltip.find(".ui-tooltip-content").html(r);
                    return
                }
                i.is("[title]") && (t && t.type === "mouseover" ? i.attr("title", "") : i.removeAttr("title"));
                f = this._tooltip(i);
                u = f.tooltip;
                this._addDescribedBy(i, u.attr("id"));
                u.find(".ui-tooltip-content").html(r);
                this.liveRegion.children().hide();
                r.clone ? (o = r.clone(), o.removeAttr("id").find("[id]").removeAttr("id")) : o = r;
                n("<div>").html(o).appendTo(this.liveRegion);
                this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: s
                }), s(t)) : u.position(n.extend({
                    of: i
                }, this.options.position));
                u.hide();
                this._show(u, this.options.show);
                this.options.show && this.options.show.delay && (c = this.delayedShow = setInterval(function() {
                    u.is(":visible") && (s(h.of), clearInterval(c))
                }, n.fx.interval));
                this._trigger("open", t, {
                    tooltip: u
                });
                e = {
                    keyup: function(t) {
                        if (t.keyCode === n.ui.keyCode.ESCAPE) {
                            var r = n.Event(t);
                            r.currentTarget = i[0];
                            this.close(r, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (e.remove = function() {
                    this._removeTooltip(u)
                });
                t && t.type !== "mouseover" || (e.mouseleave = "close");
                t && t.type !== "focusin" || (e.focusout = "close");
                this._on(!0, i, e)
            }
        },
        close: function(t) {
            var u, f = this,
                i = n(t ? t.currentTarget : this.element),
                r = this._find(i);
            r && ((u = r.tooltip, r.closing) || (clearInterval(this.delayedShow), i.data("ui-tooltip-title") && !i.attr("title") && i.attr("title", i.data("ui-tooltip-title")), this._removeDescribedBy(i), r.hiding = !0, u.stop(!0), this._hide(u, this.options.hide, function() {
                f._removeTooltip(n(this))
            }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && n.each(this.parents, function(t, i) {
                n(i.element).attr("title", i.title);
                delete f.parents[t]
            }), r.closing = !0, this._trigger("close", t, {
                tooltip: u
            }), r.hiding || (r.closing = !1)))
        },
        _tooltip: function(t) {
            var i = n("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                r = i.uniqueId().attr("id");
            return n("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[r] = {
                element: t,
                tooltip: i
            }
        },
        _find: function(n) {
            var t = n.data("ui-tooltip-id");
            return t ? this.tooltips[t] : null
        },
        _removeTooltip: function(n) {
            n.remove();
            delete this.tooltips[n.attr("id")]
        },
        _destroy: function() {
            var t = this;
            n.each(this.tooltips, function(i, r) {
                var f = n.Event("blur"),
                    u = r.element;
                f.target = f.currentTarget = u[0];
                t.close(f, !0);
                n("#" + i).remove();
                u.data("ui-tooltip-title") && (u.attr("title") || u.attr("title", u.data("ui-tooltip-title")), u.removeData("ui-tooltip-title"))
            });
            this.liveRegion.remove()
        }
    })
});
True = !0;
False = !1;
$(document).ready(function() {
    var n, t, i;
    $("a.formToggle").on("click", function(n) {
        n.preventDefault();
        $(".FeedbackForm").toggleClass("open")
    });
    $(".Product-Car").length && $("#myStat").attr("data-fgcolor", "#c14b25");
    $(".Product-Home").length && $("#myStat").attr("data-fgcolor", "#af4c45");
    $(".Product-Motorcycle").length && $("#myStat").attr("data-fgcolor", "#9e795f");
    $(".Product-Watercraft").length && $("#myStat").attr("data-fgcolor", "#3089bf");
    $(".Product-Trailer").length && $("#myStat").attr("data-fgcolor", "#35a294");
    $(".Product-Business").length && $("#myStat").attr("data-fgcolor", "#d67e27");
    $(".cta-prompt p.schoolboy ").typed({
        strings: [" ^1500How much could you save?"],
        startDelay: 0,
        showCursor: !1,
        typeSpeed: 0,
        onStringTyped: function() {
            $(".buttonstrip .arrow-right-white").addClass("fade-in")
        }
    });
    n = new freewall(".category.InternetExplorer .flex-container, .category.IE .flex-container ");
    n.reset({
        selector: ".flex-item",
        animate: !0,
        cellW: 445,
        cellH: "auto",
        gutterX: 10,
        gutterY: 10,
        onResize: function() {
            n.fitWidth()
        }
    });
    t = new freewall("#freewall-container");
    t.reset({
        selector: ".fw-item",
        animate: !0,
        cellW: 330,
        cellH: "auto",
        gutterX: -1,
        gutterY: -1,
        onResize: function() {
            t.fitWidth()
        }
    });
    n.fitWidth();
    t.fitWidth();
    $(".qte").length && $(".qte").text(function(n, t) {
        if (t.length > 100) return t.substr(0, 100) + "..."
    });
    $(".covertypes").length && $(".covertypes .YCB_container").hover(function() {
        $(".covertypes .YCB_container").removeClass("selected");
        $(this).addClass("selected")
    });
    i = $("#nt-title").newsTicker({
        row_height: 80,
        max_rows: 1,
        duration: 4e3,
        pauseOnHover: 0
    });
    $(".video-container").fitVids();
    $("p:empty").remove();
    $("#btnAgreeContinue").click(function() {
        logFlashEvent("ctrlProductInsuranceModal_lnkAgree")
    })
});
$(document).ready(function() {
    function t() {
        n && (logFlashEvent("pageevent_loaded"), n = !1)
    }
    var n = !1;
    document.webkitVisibilityState != "prerender" ? logFlashEvent("pageevent_loaded") : (n = !0, logFlashEvent("pageevent_isPrerendering"), document.addEventListener("webkitvisibilitychange", t, !1))
});
$(document).ready(function() {
    $("body").hasClass("IE") && typeof document.documentElement.style.opacity != "undefined" && ($("body").removeClass("browserVersion-7-0"), $("body").removeClass("browserVersion-8-0"))
});
String.prototype.replaceAll = function(n, t) {
    return t === undefined ? this.toString() : this.split(n).join(t)
};
timeout = setInterval(function() {
    changePhoneNumber()
}, 3e3),
    function(n) {
        "use strict";

        function i(i, u) {
            this.element = i;
            this.$el = n(i);
            this.options = n.extend({}, r, u);
            this._defaults = r;
            this._name = t;
            this.moveInterval;
            this.state = 0;
            this.paused = 0;
            this.moving = 0;
            this.$el.is("ul") && this.init()
        }
        var t = "newsTicker",
            r = {
                row_height: 20,
                max_rows: 3,
                speed: 400,
                duration: 2500,
                direction: "up",
                autostart: 1,
                pauseOnHover: 1,
                nextButton: null,
                prevButton: null,
                startButton: null,
                stopButton: null,
                hasMoved: function() {},
                movingUp: function() {},
                movingDown: function() {},
                start: function() {},
                stop: function() {},
                pause: function() {},
                unpause: function() {}
            };
        i.prototype = {
            init: function() {
                this.$el.height(this.options.row_height * this.options.max_rows).css({
                    overflow: "hidden"
                });
                this.checkSpeed();
                this.options.nextButton && typeof this.options.nextButton[0] != "undefined" && this.options.nextButton.click(function() {
                    this.moveNext();
                    this.resetInterval()
                }.bind(this));
                this.options.prevButton && typeof this.options.prevButton[0] != "undefined" && this.options.prevButton.click(function() {
                    this.movePrev();
                    this.resetInterval()
                }.bind(this));
                this.options.stopButton && typeof this.options.stopButton[0] != "undefined" && this.options.stopButton.click(function() {
                    this.stop()
                }.bind(this));
                this.options.startButton && typeof this.options.startButton[0] != "undefined" && this.options.startButton.click(function() {
                    this.start()
                }.bind(this));
                this.options.pauseOnHover && this.$el.hover(function() {
                    this.state && this.pause()
                }.bind(this), function() {
                    this.state && this.unpause()
                }.bind(this));
                this.options.autostart && this.start()
            },
            start: function() {
                this.state || (this.state = 1, this.resetInterval(), this.options.start())
            },
            stop: function() {
                this.state && (clearInterval(this.moveInterval), this.state = 0, this.options.stop())
            },
            resetInterval: function() {
                this.state && (clearInterval(this.moveInterval), this.moveInterval = setInterval(function() {
                    this.move()
                }.bind(this), this.options.duration))
            },
            move: function() {
                this.paused || this.moveNext()
            },
            moveNext: function() {
                this.options.direction === "down" ? this.moveDown() : this.options.direction === "up" && this.moveUp()
            },
            movePrev: function() {
                this.options.direction === "down" ? this.moveUp() : this.options.direction === "up" && this.moveDown()
            },
            pause: function() {
                this.paused || (this.paused = 1);
                this.options.pause()
            },
            unpause: function() {
                this.paused && (this.paused = 0);
                this.options.unpause()
            },
            moveDown: function() {
                this.moving || (this.moving = 1, this.options.movingDown(), this.$el.children("li:last").detach().prependTo(this.$el).css("marginTop", "-" + this.options.row_height + "px").animate({
                    marginTop: "0px"
                }, this.options.speed, function() {
                    this.moving = 0;
                    this.options.hasMoved()
                }.bind(this)))
            },
            moveUp: function() {
                if (!this.moving) {
                    this.moving = 1;
                    this.options.movingUp();
                    var n = this.$el.children("li:first");
                    n.animate({
                        marginTop: "-" + this.options.row_height + "px"
                    }, this.options.speed, function() {
                        n.detach().css("marginTop", "0").appendTo(this.$el);
                        this.moving = 0;
                        this.options.hasMoved()
                    }.bind(this))
                }
            },
            updateOption: function(n, t) {
                typeof this.options[n] != "undefined" && (this.options[n] = t, (n == "duration" || n == "speed") && (this.checkSpeed(), this.resetInterval()))
            },
            getState: function() {
                return paused ? 2 : this.state
            },
            checkSpeed: function() {
                this.options.duration < this.options.speed + 25 && (this.options.speed = this.options.duration - 25)
            },
            destroy: function() {
                this._destroy()
            }
        };
        n.fn[t] = function(r) {
            var u = arguments;
            return this.each(function() {
                var e = n(this),
                    f = n.data(this, "plugin_" + t),
                    o = typeof r == "object" && r;
                f || e.data("plugin_" + t, f = new i(this, o));
                typeof r == "string" && f[r].apply(f, Array.prototype.slice.call(u, 1))
            })
        }
    }(jQuery, window, document);
! function() {
    var t, i;
    window.flexibility = {};
    Array.prototype.forEach || (Array.prototype.forEach = function(n) {
        if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
        if (!(n instanceof Function)) throw new TypeError(n + " is not a function");
        for (var t = Object(this), u = arguments[1], r = t instanceof String ? t.split("") : t, f = Math.max(Math.min(r.length, 9007199254740991), 0) || 0, i = -1; ++i < f;) i in r && n.call(u, r[i], i, t)
    }),
        function(n, t) {
            "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : n.computeLayout = t()
        }(flexibility, function() {
            var n = function() {
                function vt(n) {
                    if ((!n.layout || n.isDirty) && (n.layout = {
                            width: void 0,
                            height: void 0,
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }), n.style || (n.style = {}), n.children || (n.children = []), n.style.measure && n.children && n.children.length) throw new Error("Using custom measure function is supported only for leaf nodes.");
                    return n.children.forEach(vt), n
                }

                function c(n) {
                    return void 0 === n
                }

                function p(n) {
                    return n === k || n === nt
                }

                function ri(n) {
                    return n === t || n === ht
                }

                function w(n, t) {
                    if (void 0 !== n.style.marginStart && p(t)) return n.style.marginStart;
                    var i = null;
                    switch (t) {
                        case "row":
                            i = n.style.marginLeft;
                            break;
                        case "row-reverse":
                            i = n.style.marginRight;
                            break;
                        case "column":
                            i = n.style.marginTop;
                            break;
                        case "column-reverse":
                            i = n.style.marginBottom
                    }
                    return void 0 !== i ? i : void 0 !== n.style.margin ? n.style.margin : 0
                }

                function it(n, t) {
                    if (void 0 !== n.style.marginEnd && p(t)) return n.style.marginEnd;
                    var i = null;
                    switch (t) {
                        case "row":
                            i = n.style.marginRight;
                            break;
                        case "row-reverse":
                            i = n.style.marginLeft;
                            break;
                        case "column":
                            i = n.style.marginBottom;
                            break;
                        case "column-reverse":
                            i = n.style.marginTop
                    }
                    return null != i ? i : void 0 !== n.style.margin ? n.style.margin : 0
                }

                function ui(n, t) {
                    if (void 0 !== n.style.paddingStart && n.style.paddingStart >= 0 && p(t)) return n.style.paddingStart;
                    var i = null;
                    switch (t) {
                        case "row":
                            i = n.style.paddingLeft;
                            break;
                        case "row-reverse":
                            i = n.style.paddingRight;
                            break;
                        case "column":
                            i = n.style.paddingTop;
                            break;
                        case "column-reverse":
                            i = n.style.paddingBottom
                    }
                    return null != i && i >= 0 ? i : void 0 !== n.style.padding && n.style.padding >= 0 ? n.style.padding : 0
                }

                function fi(n, t) {
                    if (void 0 !== n.style.paddingEnd && n.style.paddingEnd >= 0 && p(t)) return n.style.paddingEnd;
                    var i = null;
                    switch (t) {
                        case "row":
                            i = n.style.paddingRight;
                            break;
                        case "row-reverse":
                            i = n.style.paddingLeft;
                            break;
                        case "column":
                            i = n.style.paddingBottom;
                            break;
                        case "column-reverse":
                            i = n.style.paddingTop
                    }
                    return null != i && i >= 0 ? i : void 0 !== n.style.padding && n.style.padding >= 0 ? n.style.padding : 0
                }

                function rt(n, t) {
                    if (void 0 !== n.style.borderStartWidth && n.style.borderStartWidth >= 0 && p(t)) return n.style.borderStartWidth;
                    var i = null;
                    switch (t) {
                        case "row":
                            i = n.style.borderLeftWidth;
                            break;
                        case "row-reverse":
                            i = n.style.borderRightWidth;
                            break;
                        case "column":
                            i = n.style.borderTopWidth;
                            break;
                        case "column-reverse":
                            i = n.style.borderBottomWidth
                    }
                    return null != i && i >= 0 ? i : void 0 !== n.style.borderWidth && n.style.borderWidth >= 0 ? n.style.borderWidth : 0
                }

                function yt(n, t) {
                    if (void 0 !== n.style.borderEndWidth && n.style.borderEndWidth >= 0 && p(t)) return n.style.borderEndWidth;
                    var i = null;
                    switch (t) {
                        case "row":
                            i = n.style.borderRightWidth;
                            break;
                        case "row-reverse":
                            i = n.style.borderLeftWidth;
                            break;
                        case "column":
                            i = n.style.borderBottomWidth;
                            break;
                        case "column-reverse":
                            i = n.style.borderTopWidth
                    }
                    return null != i && i >= 0 ? i : void 0 !== n.style.borderWidth && n.style.borderWidth >= 0 ? n.style.borderWidth : 0
                }

                function ft(n, t) {
                    return ui(n, t) + rt(n, t)
                }

                function pt(n, t) {
                    return fi(n, t) + yt(n, t)
                }

                function ei(n, t) {
                    return rt(n, t) + yt(n, t)
                }

                function f(n, t) {
                    return w(n, t) + it(n, t)
                }

                function i(n, t) {
                    return ft(n, t) + pt(n, t)
                }

                function oi(n) {
                    return n.style.justifyContent ? n.style.justifyContent : "flex-start"
                }

                function si(n) {
                    return n.style.alignContent ? n.style.alignContent : "flex-start"
                }

                function et(n, t) {
                    return t.style.alignSelf ? t.style.alignSelf : n.style.alignItems ? n.style.alignItems : "stretch"
                }

                function ot(n, t) {
                    if (t === yi) {
                        if (n === k) return nt;
                        if (n === nt) return k
                    }
                    return n
                }

                function hi(n, t) {
                    var i;
                    return i = n.style.direction ? n.style.direction : dt, i === dt && (i = void 0 === t ? gt : t), i
                }

                function ci(n) {
                    return n.style.flexDirection ? n.style.flexDirection : t
                }

                function li(n, i) {
                    return ri(n) ? ot(k, i) : t
                }

                function e(n) {
                    return n.style.position ? n.style.position : "relative"
                }

                function wt(n) {
                    return e(n) === v && n.style.flex > 0
                }

                function ai(n) {
                    return "wrap" === n.style.flexWrap
                }

                function d(t, i) {
                    return t.layout[n[i]] + f(t, i)
                }

                function o(t, i) {
                    return void 0 !== t.style[n[i]] && t.style[n[i]] >= 0
                }

                function y(n, t) {
                    return void 0 !== n.style[t]
                }

                function vi(n) {
                    return void 0 !== n.style.measure
                }

                function a(n, t) {
                    return void 0 !== n.style[t] ? n.style[t] : 0
                }

                function s(n, t, i) {
                    var u = {
                            row: n.style.minWidth,
                            "row-reverse": n.style.minWidth,
                            column: n.style.minHeight,
                            "column-reverse": n.style.minHeight
                        }[t],
                        f = {
                            row: n.style.maxWidth,
                            "row-reverse": n.style.maxWidth,
                            column: n.style.maxHeight,
                            "column-reverse": n.style.maxHeight
                        }[t],
                        r = i;
                    return void 0 !== f && f >= 0 && r > f && (r = f), void 0 !== u && u >= 0 && u > r && (r = u), r
                }

                function r(n, t) {
                    return n > t ? n : t
                }

                function bt(t, u) {
                    void 0 === t.layout[n[u]] && o(t, u) && (t.layout[n[u]] = r(s(t, u, t.style[n[u]]), i(t, u)))
                }

                function g(t, i, r) {
                    i.layout[l[r]] = t.layout[n[r]] - i.layout[n[r]] - i.layout[h[r]]
                }

                function ut(n, t) {
                    return void 0 !== n.style[u[t]] ? a(n, u[t]) : -a(n, l[t])
                }

                function kt(vt, yt, kt, dt) {
                    var lr = hi(vt, dt),
                        ui = ot(ci(vt), lr),
                        ri = li(ui, lr),
                        nr = ot(k, lr),
                        bu, fu, eu, ku, du, gu, ru, sf, hf, br, vu, cf, rr, lf, yu, yf, cr, uu, gf, pu, wu;
                    bt(vt, ui);
                    bt(vt, ri);
                    vt.layout.direction = lr;
                    vt.layout[u[ui]] += w(vt, ui) + ut(vt, ui);
                    vt.layout[l[ui]] += it(vt, ui) + ut(vt, ui);
                    vt.layout[u[ri]] += w(vt, ri) + ut(vt, ri);
                    vt.layout[l[ri]] += it(vt, ri) + ut(vt, ri);
                    var fr = vt.children.length,
                        ar = i(vt, nr),
                        kr = i(vt, t);
                    if (!vi(vt) || (bu = !c(vt.layout[n[nr]]), fu = b, fu = o(vt, nr) ? vt.style.width : bu ? vt.layout[n[nr]] : yt - f(vt, nr), fu -= ar, eu = b, eu = o(vt, t) ? vt.style.height : c(vt.layout[n[t]]) ? kt - f(vt, nr) : vt.layout[n[t]], eu -= i(vt, t), ku = !o(vt, nr) && !bu, du = !o(vt, t) && c(vt.layout[n[t]]), (ku || du) && (gu = vt.style.measure(fu, eu), ku && (vt.layout.width = gu.width + ar), du && (vt.layout.height = gu.height + kr)), 0 !== fr)) {
                        var yi, gi, gt, fi, ne = ai(vt),
                            er = oi(vt),
                            te = ft(vt, ui),
                            nf = ft(vt, ri),
                            pf = i(vt, ui),
                            ur = i(vt, ri),
                            ir = !c(vt.layout[n[ui]]),
                            vr = !c(vt.layout[n[ri]]),
                            tf = p(ui),
                            rf = null,
                            ki = null,
                            uf = b;
                        ir && (uf = vt.layout[n[ui]] - pf);
                        for (var ou = 0, dr = 0, ff = 0, yr = 0, ef = 0, gr = 0; fr > dr;) {
                            var or, sr, nu = 0,
                                tu = 0,
                                su = 0,
                                iu = 0,
                                hu = ir && er === ni || !ir && er !== ti,
                                wf = hu ? fr : ou,
                                of = !0,
                                bf = fr,
                                cu = null,
                                di = null,
                                pr = te,
                                wr = 0;
                            for (yi = ou; fr > yi; ++yi) {
                                if (gt = vt.children[yi], gt.lineIndex = gr, gt.nextAbsoluteChild = null, gt.nextFlexChild = null, rr = et(vt, gt), rr === tt && e(gt) === v && vr && !o(gt, ri)) gt.layout[n[ri]] = r(s(gt, ri, vt.layout[n[ri]] - ur - f(gt, ri)), i(gt, ri));
                                else if (e(gt) === at)
                                    for (null === rf && (rf = gt), null !== ki && (ki.nextAbsoluteChild = gt), ki = gt, gi = 0; 2 > gi; gi++) fi = 0 !== gi ? k : t, !c(vt.layout[n[fi]]) && !o(gt, fi) && y(gt, u[fi]) && y(gt, l[fi]) && (gt.layout[n[fi]] = r(s(gt, fi, vt.layout[n[fi]] - i(vt, fi) - f(gt, fi) - a(gt, u[fi]) - a(gt, l[fi])), i(gt, fi)));
                                if (ru = 0, ir && wt(gt) ? (tu++, su += gt.style.flex, null === cu && (cu = gt), null !== di && (di.nextFlexChild = gt), di = gt, ru = i(gt, ui) + f(gt, ui)) : (or = b, sr = b, tf ? sr = o(vt, t) ? vt.layout[n[t]] - kr : kt - f(vt, t) - kr : or = o(vt, nr) ? vt.layout[n[nr]] - ar : yt - f(vt, nr) - ar, 0 === ff && st(gt, or, sr, lr), e(gt) === v && (iu++, ru = d(gt, ui))), ne && ir && nu + ru > uf && yi !== ou) {
                                    iu--;
                                    ff = 1;
                                    break
                                }
                                hu && (e(gt) !== v || wt(gt)) && (hu = !1, wf = yi);
                                of && (e(gt) !== v || rr !== tt && rr !== ct || c(gt.layout[n[ri]])) && (of = !1, bf = yi);
                                hu && (gt.layout[h[ui]] += pr, ir && g(vt, gt, ui), pr += d(gt, ui), wr = r(wr, s(gt, ri, d(gt, ri))));
                                of && (gt.layout[h[ri]] += yr + nf, vr && g(vt, gt, ri));
                                ff = 0;
                                nu += ru;
                                dr = yi + 1
                            }
                            var lu = 0,
                                au = 0,
                                tr = 0;
                            if (tr = ir ? uf - nu : r(nu, 0) - nu, 0 !== tu) {
                                for (br = tr / su, di = cu; null !== di;) sf = br * di.style.flex + i(di, ui), hf = s(di, ui, sf), sf !== hf && (tr -= hf, su -= di.style.flex), di = di.nextFlexChild;
                                for (br = tr / su, 0 > br && (br = 0), di = cu; null !== di;) di.layout[n[ui]] = s(di, ui, br * di.style.flex + i(di, ui)), or = b, o(vt, nr) ? or = vt.layout[n[nr]] - ar : tf || (or = yt - f(vt, nr) - ar), sr = b, o(vt, t) ? sr = vt.layout[n[t]] - kr : tf && (sr = kt - f(vt, t) - kr), st(di, or, sr, lr), gt = di, di = di.nextFlexChild, gt.nextFlexChild = null
                            } else er !== ni && (er === ti ? lu = tr / 2 : er === pi ? lu = tr : er === wi ? (tr = r(tr, 0), au = tu + iu - 1 != 0 ? tr / (tu + iu - 1) : 0) : er === bi && (au = tr / (tu + iu), lu = au / 2));
                            for (pr += lu, yi = wf; dr > yi; ++yi) gt = vt.children[yi], e(gt) === at && y(gt, u[ui]) ? gt.layout[h[ui]] = a(gt, u[ui]) + rt(vt, ui) + w(gt, ui) : (gt.layout[h[ui]] += pr, ir && g(vt, gt, ui), e(gt) === v && (pr += au + d(gt, ui), wr = r(wr, s(gt, ri, d(gt, ri)))));
                            for (vu = vt.layout[n[ri]], vr || (vu = r(s(vt, ri, wr + ur), ur)), yi = bf; dr > yi; ++yi)(gt = vt.children[yi], e(gt) === at && y(gt, u[ri])) ? gt.layout[h[ri]] = a(gt, u[ri]) + rt(vt, ri) + w(gt, ri) : (cf = nf, e(gt) === v && (rr = et(vt, gt), rr === tt ? c(gt.layout[n[ri]]) && (gt.layout[n[ri]] = r(s(gt, ri, vu - ur - f(gt, ri)), i(gt, ri))) : rr !== ct && (lf = vu - ur - d(gt, ri), cf += rr === lt ? lf / 2 : lf)), gt.layout[h[ri]] += yr + cf, vr && g(vt, gt, ri));
                            yr += wr;
                            ef = r(ef, pr);
                            gr += 1;
                            ou = dr
                        }
                        if (gr > 1 && vr) {
                            var kf = vt.layout[n[ri]] - ur,
                                af = kf - yr,
                                df = 0,
                                hr = nf,
                                vf = si(vt);
                            for (vf === ii ? hr += af : vf === lt ? hr += af / 2 : vf === tt && kf > yr && (df = af / gr), yu = 0, yi = 0; gr > yi; ++yi) {
                                for (yf = yu, cr = 0, gi = yf; fr > gi; ++gi)
                                    if (gt = vt.children[gi], e(gt) === v) {
                                        if (gt.lineIndex !== yi) break;
                                        c(gt.layout[n[ri]]) || (cr = r(cr, gt.layout[n[ri]] + f(gt, ri)))
                                    }
                                for (yu = gi, cr += df, gi = yf; yu > gi; ++gi)(gt = vt.children[gi], e(gt) === v) && (uu = et(vt, gt), uu === ct ? gt.layout[h[ri]] = hr + w(gt, ri) : uu === ii ? gt.layout[h[ri]] = hr + cr - it(gt, ri) - gt.layout[n[ri]] : uu === lt ? (gf = gt.layout[n[ri]], gt.layout[h[ri]] = hr + (cr - gf) / 2) : uu === tt && (gt.layout[h[ri]] = hr + w(gt, ri)));
                                hr += cr
                            }
                        }
                        if (pu = !1, wu = !1, ir || (vt.layout[n[ui]] = r(s(vt, ui, ef + pt(vt, ui)), pf), (ui === nt || ui === ht) && (pu = !0)), vr || (vt.layout[n[ri]] = r(s(vt, ri, yr + ur), ur), (ri === nt || ri === ht) && (wu = !0)), pu || wu)
                            for (yi = 0; fr > yi; ++yi) gt = vt.children[yi], pu && g(vt, gt, ui), wu && g(vt, gt, ri);
                        for (ki = rf; null !== ki;) {
                            for (gi = 0; 2 > gi; gi++) fi = 0 !== gi ? k : t, !c(vt.layout[n[fi]]) && !o(ki, fi) && y(ki, u[fi]) && y(ki, l[fi]) && (ki.layout[n[fi]] = r(s(ki, fi, vt.layout[n[fi]] - ei(vt, fi) - f(ki, fi) - a(ki, u[fi]) - a(ki, l[fi])), i(ki, fi))), y(ki, l[fi]) && !y(ki, u[fi]) && (ki.layout[u[fi]] = vt.layout[n[fi]] - ki.layout[n[fi]] - a(ki, l[fi]));
                            gt = ki;
                            ki = ki.nextAbsoluteChild;
                            gt.nextAbsoluteChild = null
                        }
                    }
                }

                function st(n, t, i, r) {
                    n.shouldUpdate = !0;
                    var u = n.style.direction || gt,
                        f = !n.isDirty && n.lastLayout && n.lastLayout.requestedHeight === n.layout.height && n.lastLayout.requestedWidth === n.layout.width && n.lastLayout.parentMaxWidth === t && n.lastLayout.parentMaxHeight === i && n.lastLayout.direction === u;
                    f ? (n.layout.width = n.lastLayout.width, n.layout.height = n.lastLayout.height, n.layout.top = n.lastLayout.top, n.layout.left = n.lastLayout.left) : (n.lastLayout || (n.lastLayout = {}), n.lastLayout.requestedWidth = n.layout.width, n.lastLayout.requestedHeight = n.layout.height, n.lastLayout.parentMaxWidth = t, n.lastLayout.parentMaxHeight = i, n.lastLayout.direction = u, n.children.forEach(function(n) {
                        n.layout.width = void 0;
                        n.layout.height = void 0;
                        n.layout.top = 0;
                        n.layout.left = 0
                    }), kt(n, t, i, r), n.lastLayout.width = n.layout.width, n.lastLayout.height = n.layout.height, n.lastLayout.top = n.layout.top, n.lastLayout.left = n.layout.left)
                }
                var b, dt = "inherit",
                    gt = "ltr",
                    yi = "rtl",
                    k = "row",
                    nt = "row-reverse",
                    t = "column",
                    ht = "column-reverse",
                    ni = "flex-start",
                    ti = "center",
                    pi = "flex-end",
                    wi = "space-between",
                    bi = "space-around",
                    ct = "flex-start",
                    lt = "center",
                    ii = "flex-end",
                    tt = "stretch",
                    v = "relative",
                    at = "absolute",
                    u = {
                        row: "left",
                        "row-reverse": "right",
                        column: "top",
                        "column-reverse": "bottom"
                    },
                    l = {
                        row: "right",
                        "row-reverse": "left",
                        column: "bottom",
                        "column-reverse": "top"
                    },
                    h = {
                        row: "left",
                        "row-reverse": "right",
                        column: "top",
                        "column-reverse": "bottom"
                    },
                    n = {
                        row: "width",
                        "row-reverse": "width",
                        column: "height",
                        "column-reverse": "height"
                    };
                return {
                    layoutNodeImpl: kt,
                    computeLayout: st,
                    fillNodes: vt
                }
            }();
            return "object" == typeof exports && (module.exports = n),
                function(t) {
                    n.fillNodes(t);
                    n.computeLayout(t)
                }
        });
    !window.addEventListener && window.attachEvent && function() {
        Window.prototype.addEventListener = HTMLDocument.prototype.addEventListener = Element.prototype.addEventListener = function(n, t) {
            this.attachEvent("on" + n, t)
        };
        Window.prototype.removeEventListener = HTMLDocument.prototype.removeEventListener = Element.prototype.removeEventListener = function(n, t) {
            this.detachEvent("on" + n, t)
        }
    }();
    flexibility.detect = function() {
        var n = document.createElement("p");
        try {
            return n.style.display = "flex", "flex" === n.style.display
        } catch (t) {
            return !1
        }
    };
    !flexibility.detect() && document.attachEvent && document.documentElement.currentStyle && document.attachEvent("onreadystatechange", function() {
        flexibility.onresize({
            target: document.documentElement
        })
    });
    flexibility.init = function(n) {
        var t = n.onlayoutcomplete;
        return t || (t = n.onlayoutcomplete = {
            node: n,
            style: {},
            children: []
        }), t.style.display = n.currentStyle["-js-display"] || n.currentStyle.display, t
    };
    var r, o = 1e3,
        s = 15,
        n = document.documentElement,
        u = 0,
        f = 0;
    flexibility.onresize = function(t) {
        if (n.clientWidth !== u || n.clientHeight !== f) {
            u = n.clientWidth;
            f = n.clientHeight;
            clearTimeout(r);
            window.removeEventListener("resize", flexibility.onresize);
            var i = t.target && 1 === t.target.nodeType ? t.target : document.documentElement;
            flexibility.walk(i);
            r = setTimeout(function() {
                window.addEventListener("resize", flexibility.onresize)
            }, o / s)
        }
    };
    t = {
        alignContent: {
            initial: "stretch",
            valid: /^(flex-start|flex-end|center|space-between|space-around|stretch)/
        },
        alignItems: {
            initial: "stretch",
            valid: /^(flex-start|flex-end|center|baseline|stretch)$/
        },
        boxSizing: {
            initial: "content-box",
            valid: /^(border-box|content-box)$/
        },
        flexDirection: {
            initial: "row",
            valid: /^(row|row-reverse|column|column-reverse)$/
        },
        flexWrap: {
            initial: "nowrap",
            valid: /^(nowrap|wrap|wrap-reverse)$/
        },
        justifyContent: {
            initial: "flex-start",
            valid: /^(flex-start|flex-end|center|space-between|space-around)$/
        }
    };
    flexibility.updateFlexContainerCache = function(n) {
        var h = n.style,
            u = n.node.currentStyle,
            f = n.node.style,
            r = {},
            i;
        (u["flex-flow"] || f["flex-flow"] || "").replace(/^(row|row-reverse|column|column-reverse)\s+(nowrap|wrap|wrap-reverse)$/i, function(n, t, i) {
            r.flexDirection = t;
            r.flexWrap = i
        });
        for (i in t) {
            var e = i.replace(/[A-Z]/g, "-$&").toLowerCase(),
                o = t[i],
                s = u[e] || f[e];
            h[i] = o.valid.test(s) ? s : r[i] || o.initial
        }
    };
    i = {
        alignSelf: {
            initial: "auto",
            valid: /^(auto|flex-start|flex-end|center|baseline|stretch)$/
        },
        boxSizing: {
            initial: "content-box",
            valid: /^(border-box|content-box)$/
        },
        flexBasis: {
            initial: "auto",
            valid: /^((?:[-+]?0|[-+]?[0-9]*\.?[0-9]+(?:%|ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw))|auto|fill|max-content|min-content|fit-content|content)$/
        },
        flexGrow: {
            initial: 0,
            valid: /^\+?(0|[1-9][0-9]*)$/
        },
        flexShrink: {
            initial: 0,
            valid: /^\+?(0|[1-9][0-9]*)$/
        },
        order: {
            initial: 0,
            valid: /^([-+]?[0-9]+)$/
        }
    };
    flexibility.updateFlexItemCache = function(n) {
        var r = n.style,
            f = n.node.currentStyle,
            e = n.node.style,
            o = {},
            t;
        (f.flex || e.flex || "").replace(/^\+?(0|[1-9][0-9]*)/, function(n) {
            o.flexGrow = n
        });
        for (t in i) {
            var s = t.replace(/[A-Z]/g, "-$&").toLowerCase(),
                u = i[t],
                h = f[s] || e[s];
            r[t] = u.valid.test(h) ? h : o[t] || u.initial;
            "number" == typeof u.initial && (r[t] = parseFloat(r[t]))
        }
    };
    var h = "border:0 solid;clip:rect(0 0 0 0);display:inline-block;font:0/0 serif;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;overflow:hidden;padding:0;position:absolute;width:1em;",
        e = {
            medium: 4,
            none: 0,
            thick: 6,
            thin: 2
        },
        c = {
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            height: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            maxHeight: 0,
            maxWidth: 0,
            minHeight: 0,
            minWidth: 0,
            width: 0
        },
        l = /^([-+]?0|[-+]?[0-9]*\.?[0-9]+)/,
        a = 100;
    flexibility.updateLengthCache = function(n) {
        var v, y, p, u = n.node,
            t = n.style,
            s = u.parentNode,
            o = document.createElement("_"),
            w = o.runtimeStyle,
            f = u.currentStyle,
            i, r;
        w.cssText = h + "font-size:" + f.fontSize;
        s.insertBefore(o, u.nextSibling);
        t.fontSize = o.offsetWidth;
        w.fontSize = t.fontSize + "px";
        for (i in c) r = f[i], l.test(r) || "auto" === r && !/(width|height)/i.test(i) ? /%$/.test(r) ? (/^(bottom|height|top)$/.test(i) ? (y || (y = s.offsetHeight), p = y) : (v || (v = s.offsetWidth), p = v), t[i] = parseFloat(r) * p / a) : (w.width = r, t[i] = o.offsetWidth) : /^border/.test(i) && r in e ? t[i] = e[r] : delete t[i];
        s.removeChild(o);
        "none" === f.borderTopStyle && (t.borderTopWidth = 0);
        "none" === f.borderRightStyle && (t.borderRightWidth = 0);
        "none" === f.borderBottomStyle && (t.borderBottomWidth = 0);
        "none" === f.borderLeftStyle && (t.borderLeftWidth = 0);
        t.width || t.minWidth || (/flex/.test(t.display) ? t.width = u.offsetWidth : t.minWidth = u.offsetWidth);
        t.height || t.minHeight || /flex/.test(t.display) || (t.minHeight = u.offsetHeight)
    };
    flexibility.walk = function(n) {
        var i = flexibility.init(n),
            t = i.style,
            f = t.display,
            r, e, o;
        if ("none" === f) return {};
        if (r = f.match(/^(inline)?flex$/), r && (flexibility.updateFlexContainerCache(i), n.runtimeStyle.cssText = "display:" + (r[1] ? "inline-block" : "block"), i.children = []), Array.prototype.forEach.call(n.childNodes, function(n, u) {
                if (1 === n.nodeType) {
                    var f = flexibility.walk(n),
                        e = f.style;
                    f.index = u;
                    r && (flexibility.updateFlexItemCache(f), "auto" === e.alignSelf && (e.alignSelf = t.alignItems), e.flex = e.flexGrow, n.runtimeStyle.cssText = "display:inline-block", i.children.push(f))
                }
            }), r) {
            i.children.forEach(function(n) {
                flexibility.updateLengthCache(n)
            });
            i.children.sort(function(n, t) {
                return n.style.order - t.style.order || n.index - t.index
            });
            /-reverse$/.test(t.flexDirection) && (i.children.reverse(), t.flexDirection = t.flexDirection.replace(/-reverse$/, ""), "flex-start" === t.justifyContent ? t.justifyContent = "flex-end" : "flex-end" === t.justifyContent && (t.justifyContent = "flex-start"));
            flexibility.updateLengthCache(i);
            delete i.lastLayout;
            delete i.layout;
            e = t.borderTopWidth;
            o = t.borderBottomWidth;
            t.borderTopWidth = 0;
            t.borderBottomWidth = 0;
            t.borderLeftWidth = 0;
            "column" === t.flexDirection && (t.width -= t.borderRightWidth);
            flexibility.computeLayout(i);
            n.runtimeStyle.cssText = "box-sizing:border-box;display:block;position:relative;width:" + (i.layout.width + t.borderRightWidth) + "px;height:" + (i.layout.height + e + o) + "px";
            var u = [],
                s = 1,
                h = "column" === t.flexDirection ? "width" : "height";
            i.children.forEach(function(n) {
                u[n.lineIndex] = Math.max(u[n.lineIndex] || 0, n.layout[h]);
                s = Math.max(s, n.lineIndex + 1)
            });
            i.children.forEach(function(n) {
                var t = n.layout;
                "stretch" === n.style.alignSelf && (t[h] = u[n.lineIndex]);
                n.node.runtimeStyle.cssText = "box-sizing:border-box;display:block;position:absolute;margin:0;width:" + t.width + "px;height:" + t.height + "px;top:" + t.top + "px;left:" + t.left + "px"
            })
        }
        return i
    }
}(),
    function(n, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : n.Blazy = t()
    }(this, function() {
        function e(n) {
            setTimeout(function() {
                var r = n._util;
                r.elements = v(n.options.selector);
                r.count = r.elements.length;
                r.destroyed && (r.destroyed = !1, n.options.container && t(n.options.container, function(n) {
                    i(n, "scroll", r.validateT)
                }), i(window, "resize", r.saveViewportOffsetT), i(window, "resize", r.validateT), i(window, "scroll", r.validateT));
                o(n)
            }, 1)
        }

        function o(t) {
            for (var e, f, i = t._util, r = 0; r < i.count; r++) e = i.elements[r], f = e.getBoundingClientRect(), (f.right >= n.left && f.bottom >= n.top && f.left <= n.right && f.top <= n.bottom || u(e, t.options.successClass)) && (t.load(e), i.elements.splice(r, 1), i.count--, r--);
            0 === i.count && t.destroy()
        }

        function s(n, t, i) {
            if (!u(n, i.successClass) && (t || i.loadInvisible || 0 < n.offsetWidth && 0 < n.offsetHeight))
                if (t = n.getAttribute(f) || n.getAttribute(i.src)) {
                    t = t.split(i.separator);
                    var r = t[a && 1 < t.length ? 1 : 0],
                        e = "img" === n.nodeName.toLowerCase();
                    e || void 0 === n.src ? (t = new Image, t.onerror = function() {
                        i.error && i.error(n, "invalid");
                        n.className = n.className + " " + i.errorClass
                    }, t.onload = function() {
                        e ? n.src = r : n.style.backgroundImage = 'url("' + r + '")';
                        h(n, i)
                    }, t.src = r) : (n.src = r, h(n, i))
                } else i.error && i.error(n, "missing"), u(n, i.errorClass) || (n.className = n.className + " " + i.errorClass)
        }

        function h(n, i) {
            n.className = n.className + " " + i.successClass;
            i.success && i.success(n);
            t(i.breakpoints, function(t) {
                n.removeAttribute(t.src)
            });
            n.removeAttribute(i.src)
        }

        function u(n, t) {
            return -1 !== (" " + n.className + " ").indexOf(" " + t + " ")
        }

        function v(n) {
            var i = [],
                t;
            for (n = document.querySelectorAll(n), t = n.length; t--; i.unshift(n[t]));
            return i
        }

        function c(t) {
            n.bottom = (window.innerHeight || document.documentElement.clientHeight) + t;
            n.right = (window.innerWidth || document.documentElement.clientWidth) + t
        }

        function i(n, t, i) {
            n.attachEvent ? n.attachEvent && n.attachEvent("on" + t, i) : n.addEventListener(t, i, !1)
        }

        function r(n, t, i) {
            n.detachEvent ? n.detachEvent && n.detachEvent("on" + t, i) : n.removeEventListener(t, i, !1)
        }

        function t(n, t) {
            if (n && t)
                for (var r = n.length, i = 0; i < r && !1 !== t(n[i], i); i++);
        }

        function l(n, t, i) {
            var r = 0;
            return function() {
                var u = +new Date;
                u - r < t || (r = u, n.apply(i, arguments))
            }
        }
        var f, n, a;
        return function(i) {
            var v, u, h;
            document.querySelectorAll || (v = document.createStyleSheet(), document.querySelectorAll = function(n, t, i, r, u) {
                for (u = document.all, t = [], n = n.replace(/\[for\b/gi, "[htmlFor").split(","), i = n.length; i--;) {
                    for (v.addRule(n[i], "k:v"), r = u.length; r--;) u[r].currentStyle.k && t.push(u[r]);
                    v.removeRule(0)
                }
                return t
            });
            u = this;
            h = u._util = {};
            h.elements = [];
            h.destroyed = !0;
            u.options = i || {};
            u.options.error = u.options.error || !1;
            u.options.offset = u.options.offset || 100;
            u.options.success = u.options.success || !1;
            u.options.selector = u.options.selector || ".b-lazy";
            u.options.separator = u.options.separator || "|";
            u.options.container = u.options.container ? document.querySelectorAll(u.options.container) : !1;
            u.options.errorClass = u.options.errorClass || "b-error";
            u.options.breakpoints = u.options.breakpoints || !1;
            u.options.loadInvisible = u.options.loadInvisible || !1;
            u.options.successClass = u.options.successClass || "b-loaded";
            u.options.validateDelay = u.options.validateDelay || 25;
            u.options.saveViewportOffsetDelay = u.options.saveViewportOffsetDelay || 50;
            u.options.src = f = u.options.src || "data-src";
            a = 1 < window.devicePixelRatio;
            n = {};
            n.top = 0 - u.options.offset;
            n.left = 0 - u.options.offset;
            u.revalidate = function() {
                e(this)
            };
            u.load = function(n, i) {
                var r = this.options;
                void 0 === n.length ? s(n, i, r) : t(n, function(n) {
                    s(n, i, r)
                })
            };
            u.destroy = function() {
                var n = this._util;
                this.options.container && t(this.options.container, function(t) {
                    r(t, "scroll", n.validateT)
                });
                r(window, "scroll", n.validateT);
                r(window, "resize", n.validateT);
                r(window, "resize", n.saveViewportOffsetT);
                n.count = 0;
                n.elements.length = 0;
                n.destroyed = !0
            };
            h.validateT = l(function() {
                o(u)
            }, u.options.validateDelay, u);
            h.saveViewportOffsetT = l(function() {
                c(u.options.offset)
            }, u.options.saveViewportOffsetDelay, u);
            c(u.options.offset);
            t(u.options.breakpoints, function(n) {
                if (n.width >= window.screen.width) return f = n.src, !1
            });
            e(u)
        }
    }),
   (window.jQuery || window.Zepto);
! function(n) {
    "use strict";
    var t = function(t, i) {
        this.el = n(t);
        this.options = n.extend({}, n.fn.typed.defaults, i);
        this.isInput = this.el.is("input");
        this.attr = this.options.attr;
        this.showCursor = this.isInput ? !1 : this.options.showCursor;
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();
        this.contentType = this.options.contentType;
        this.typeSpeed = this.options.typeSpeed;
        this.startDelay = this.options.startDelay;
        this.backSpeed = this.options.backSpeed;
        this.backDelay = this.options.backDelay;
        this.strings = this.options.strings;
        this.strPos = 0;
        this.arrayPos = 0;
        this.stopNum = 0;
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;
        this.stop = !1;
        this.cursorChar = this.options.cursorChar;
        this.shuffle = this.options.shuffle;
        this.sequence = [];
        this.build()
    };
    t.prototype = {
        constructor: t,
        init: function() {
            var n = this;
            n.timeout = setTimeout(function() {
                for (var t = 0; t < n.strings.length; ++t) n.sequence[t] = t;
                n.shuffle && (n.sequence = n.shuffleArray(n.sequence));
                n.typewrite(n.strings[n.sequence[n.arrayPos]], n.strPos)
            }, n.startDelay)
        },
        build: function() {
            this.showCursor === !0 && (this.cursor = n('<span class="typed-cursor">' + this.cursorChar + "<\/span>"), this.el.after(this.cursor));
            this.init()
        },
        typewrite: function(n, t) {
            if (this.stop !== !0) {
                var r = Math.round(Math.random() * 70) + this.typeSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    var s = 0,
                        r = n.substr(t),
                        e, u, o, f;
                    if (r.charAt(0) === "^" && (e = 1, /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], e += r.length, s = parseInt(r)), n = n.substring(0, t) + n.substring(t + e)), i.contentType === "html" && (u = n.substr(t).charAt(0), u === "<" || u === "&")) {
                        for (o = "", f = "", f = u === "<" ? ">" : ";"; n.substr(t).charAt(0) !== f;) o += n.substr(t).charAt(0), t++;
                        t++;
                        o += f
                    }
                    i.timeout = setTimeout(function() {
                        if (t === n.length) {
                            i.options.onStringTyped(i.arrayPos);
                            if (i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
                            i.timeout = setTimeout(function() {
                                i.backspace(n, t)
                            }, i.backDelay)
                        } else {
                            t === 0 && i.options.preStringTyped(i.arrayPos);
                            var r = n.substr(0, t + 1);
                            i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : i.contentType === "html" ? i.el.html(r) : i.el.text(r);
                            t++;
                            i.typewrite(n, t)
                        }
                    }, s)
                }, r)
            }
        },
        backspace: function(n, t) {
            if (this.stop !== !0) {
                var r = Math.round(Math.random() * 70) + this.backSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    var u, r;
                    if (i.contentType === "html" && n.substr(t).charAt(0) === ">") {
                        for (u = ""; n.substr(t).charAt(0) !== "<";) u -= n.substr(t).charAt(0), t--;
                        t--;
                        u += "<"
                    }
                    r = n.substr(0, t);
                    i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : i.contentType === "html" ? i.el.html(r) : i.el.text(r);
                    t > i.stopNum ? (t--, i.backspace(n, t)) : t <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], t))
                }, r)
            }
        },
        shuffleArray: function(n) {
            var r, i, t = n.length;
            if (t)
                while (--t) i = Math.floor(Math.random() * (t + 1)), r = n[i], n[i] = n[t], n[t] = r;
            return n
        },
        reset: function() {
            var n = this,
                t;
            clearInterval(n.timeout);
            t = this.el.attr("id");
            this.el.after('<span id="' + t + '"/>');
            this.el.remove();
            typeof this.cursor != "undefined" && this.cursor.remove();
            n.options.resetCallback()
        }
    };
    n.fn.typed = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("typed"),
                f = typeof i == "object" && i;
            r || u.data("typed", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    };
    n.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }
}(window.jQuery);
! function() {
    "use strict";

    function n(r) {
        if (!r) throw new Error("No options passed to Waypoint constructor");
        if (!r.element) throw new Error("No element option passed to Waypoint constructor");
        if (!r.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + i;
        this.options = n.Adapter.extend({}, n.defaults, r);
        this.element = this.options.element;
        this.adapter = new n.Adapter(this.element);
        this.callback = r.handler;
        this.axis = this.options.horizontal ? "horizontal" : "vertical";
        this.enabled = this.options.enabled;
        this.triggerPoint = null;
        this.group = n.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        });
        this.context = n.Context.findOrCreateByElement(this.options.context);
        n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]);
        this.group.add(this);
        this.context.add(this);
        t[this.key] = this;
        i += 1
    }
    var i = 0,
        t = {};
    n.prototype.queueTrigger = function(n) {
        this.group.queueTrigger(this, n)
    };
    n.prototype.trigger = function(n) {
        this.enabled && this.callback && this.callback.apply(this, n)
    };
    n.prototype.destroy = function() {
        this.context.remove(this);
        this.group.remove(this);
        delete t[this.key]
    };
    n.prototype.disable = function() {
        return this.enabled = !1, this
    };
    n.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    };
    n.prototype.next = function() {
        return this.group.next(this)
    };
    n.prototype.previous = function() {
        return this.group.previous(this)
    };
    n.destroyAll = function() {
        var i = [],
            r, n, u;
        for (r in t) i.push(t[r]);
        for (n = 0, u = i.length; u > n; n++) i[n].destroy()
    };
    n.refreshAll = function() {
        n.Context.refreshAll()
    };
    n.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    };
    n.viewportWidth = function() {
        return document.documentElement.clientWidth
    };
    n.adapters = [];
    n.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    };
    n.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    };
    window.Waypoint = n
}(),
    function() {
        "use strict";

        function e(n) {
            window.setTimeout(n, 1e3 / 60)
        }

        function n(n) {
            this.element = n;
            this.Adapter = t.Adapter;
            this.adapter = new this.Adapter(n);
            this.key = "waypoint-context-" + r;
            this.didScroll = !1;
            this.didResize = !1;
            this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            };
            this.waypoints = {
                vertical: {},
                horizontal: {}
            };
            n.waypointContextKey = this.key;
            i[n.waypointContextKey] = this;
            r += 1;
            this.createThrottledScrollHandler();
            this.createThrottledResizeHandler()
        }
        var r = 0,
            i = {},
            t = window.Waypoint,
            u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e,
            f = window.onload;
        n.prototype.add = function(n) {
            var t = n.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][n.key] = n;
            this.refresh()
        };
        n.prototype.checkEmpty = function() {
            var n = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            n && t && (this.adapter.off(".waypoints"), delete i[this.key])
        };
        n.prototype.createThrottledResizeHandler = function() {
            function t() {
                n.handleResize();
                n.didResize = !1
            }
            var n = this;
            this.adapter.on("resize.waypoints", function() {
                n.didResize || (n.didResize = !0, u(t))
            })
        };
        n.prototype.createThrottledScrollHandler = function() {
            function i() {
                n.handleScroll();
                n.didScroll = !1
            }
            var n = this;
            this.adapter.on("scroll.waypoints", function() {
                (!n.didScroll || t.isTouch) && (n.didScroll = !0, u(i))
            })
        };
        n.prototype.handleResize = function() {
            t.Context.refreshAll()
        };
        n.prototype.handleScroll = function() {
            var u = {},
                i = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                },
                r, f, s;
            for (r in i) {
                var n = i[r],
                    h = n.newScroll > n.oldScroll,
                    c = h ? n.forward : n.backward;
                for (f in this.waypoints[r]) {
                    var t = this.waypoints[r][f],
                        e = n.oldScroll < t.triggerPoint,
                        o = n.newScroll >= t.triggerPoint,
                        l = e && o,
                        a = !e && !o;
                    (l || a) && (t.queueTrigger(c), u[t.group.id] = t.group)
                }
            }
            for (s in u) u[s].flushTriggers();
            this.oldScroll = {
                x: i.horizontal.newScroll,
                y: i.vertical.newScroll
            }
        };
        n.prototype.innerHeight = function() {
            return this.element === this.element.window ? t.viewportHeight() : this.adapter.innerHeight()
        };
        n.prototype.remove = function(n) {
            delete this.waypoints[n.axis][n.key];
            this.checkEmpty()
        };
        n.prototype.innerWidth = function() {
            return this.element === this.element.window ? t.viewportWidth() : this.adapter.innerWidth()
        };
        n.prototype.destroy = function() {
            var t = [],
                i, r, n, u;
            for (i in this.waypoints)
                for (r in this.waypoints[i]) t.push(this.waypoints[i][r]);
            for (n = 0, u = t.length; u > n; n++) t[n].destroy()
        };
        n.prototype.refresh = function() {
            var e, u = this.element === this.element.window,
                c = this.adapter.offset(),
                r = {},
                f, t, l, b;
            this.handleScroll();
            e = {
                horizontal: {
                    contextOffset: u ? 0 : c.left,
                    contextScroll: u ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: u ? 0 : c.top,
                    contextScroll: u ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (f in e) {
                t = e[f];
                for (l in this.waypoints[f]) {
                    var a, o, s, v, y, n = this.waypoints[f][l],
                        i = n.options.offset,
                        p = n.triggerPoint,
                        w = 0,
                        h = null == p;
                    n.element !== n.element.window && (w = n.adapter.offset()[t.offsetProp]);
                    "function" == typeof i ? i = i.apply(n) : "string" == typeof i && (i = parseFloat(i), n.options.offset.indexOf("%") > -1 && (i = Math.ceil(t.contextDimension * i / 100)));
                    a = t.contextScroll - t.contextOffset;
                    n.triggerPoint = w + a - i;
                    o = p < t.oldScroll;
                    s = n.triggerPoint >= t.oldScroll;
                    v = o && s;
                    y = !o && !s;
                    !h && v ? (n.queueTrigger(t.backward), r[n.group.id] = n.group) : !h && y ? (n.queueTrigger(t.forward), r[n.group.id] = n.group) : h && t.oldScroll >= n.triggerPoint && (n.queueTrigger(t.forward), r[n.group.id] = n.group)
                }
            }
            for (b in r) r[b].flushTriggers();
            return this
        };
        n.findOrCreateByElement = function(t) {
            return n.findByElement(t) || new n(t)
        };
        n.refreshAll = function() {
            for (var n in i) i[n].refresh()
        };
        n.findByElement = function(n) {
            return i[n.waypointContextKey]
        };
        window.onload = function() {
            f && f();
            n.refreshAll()
        };
        t.Context = n
    }(),
    function() {
        "use strict";

        function i(n, t) {
            return n.triggerPoint - t.triggerPoint
        }

        function u(n, t) {
            return t.triggerPoint - n.triggerPoint
        }

        function n(n) {
            this.name = n.name;
            this.axis = n.axis;
            this.id = this.name + "-" + this.axis;
            this.waypoints = [];
            this.clearTriggerQueues();
            r[this.axis][this.name] = this
        }
        var r = {
                vertical: {},
                horizontal: {}
            },
            t = window.Waypoint;
        n.prototype.add = function(n) {
            this.waypoints.push(n)
        };
        n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        };
        n.prototype.flushTriggers = function() {
            var n, t, e, r, o, f;
            for (n in this.triggerQueues)
                for (t = this.triggerQueues[n], e = "up" === n || "left" === n, t.sort(e ? u : i), r = 0, o = t.length; o > r; r += 1) f = t[r], (f.options.continuous || r === t.length - 1) && f.trigger([n]);
            this.clearTriggerQueues()
        };
        n.prototype.next = function(n) {
            this.waypoints.sort(i);
            var r = t.Adapter.inArray(n, this.waypoints),
                u = r === this.waypoints.length - 1;
            return u ? null : this.waypoints[r + 1]
        };
        n.prototype.previous = function(n) {
            this.waypoints.sort(i);
            var r = t.Adapter.inArray(n, this.waypoints);
            return r ? this.waypoints[r - 1] : null
        };
        n.prototype.queueTrigger = function(n, t) {
            this.triggerQueues[t].push(n)
        };
        n.prototype.remove = function(n) {
            var i = t.Adapter.inArray(n, this.waypoints);
            i > -1 && this.waypoints.splice(i, 1)
        };
        n.prototype.first = function() {
            return this.waypoints[0]
        };
        n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        };
        n.findOrCreate = function(t) {
            return r[t.axis][t.name] || new n(t)
        };
        t.Group = n
    }(),
    function() {
        "use strict";

        function n(n) {
            this.$element = t(n)
        }
        var t = window.jQuery,
            i = window.Waypoint;
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, i) {
            n.prototype[i] = function() {
                var n = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, n)
            }
        });
        t.each(["extend", "inArray", "isEmptyObject"], function(i, r) {
            n[r] = t[r]
        });
        i.adapters.push({
            name: "jquery",
            Adapter: n
        });
        i.Adapter = n
    }(),
    function() {
        "use strict";

        function n(n) {
            return function() {
                var r = [],
                    i = arguments[0];
                return n.isFunction(arguments[0]) && (i = n.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function() {
                    var u = n.extend({}, i, {
                        element: this
                    });
                    "string" == typeof u.context && (u.context = n(this).closest(u.context)[0]);
                    r.push(new t(u))
                }), r
            }
        }
        var t = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = n(window.jQuery));
        window.Zepto && (window.Zepto.fn.waypoint = n(window.Zepto))
    }(),
    function(n) {
        n.fn.circliful = function(t) {
            var i = n.extend({
                startdegree: 0,
                fgcolor: "#556b2f",
                bgcolor: "#eee",
                fill: !1,
                width: 15,
                dimension: 200,
                fontsize: 15,
                percent: 50,
                animationstep: 1,
                iconsize: "20px",
                iconcolor: "#999",
                border: "default",
                complete: null,
                bordersize: 10
            }, t);
            return this.each(function() {
                function d(t, i, u) {
                    n("<span><\/span>").appendTo(t).addClass(i).html(it).prepend(nt).css({
                        "line-height": u + "px",
                        "font-size": r.fontsize + "px"
                    })
                }

                function g(t, i) {
                    n("<span><\/span>").appendTo(t).addClass("circle-info-half").css("line-height", r.dimension * i + "px").text(rt)
                }

                function vt(t) {
                    n.each(ct, function(u, f) {
                        r[f] = t.data(f) != undefined ? t.data(f) : n(i).attr(f);
                        f == "fill" && t.data("fill") != undefined && (tt = !0)
                    })
                }

                function ht(i) {
                    u.clearRect(0, 0, h.width, h.height);
                    u.beginPath();
                    u.arc(ut, ft, et, b, w, !1);
                    u.lineWidth = r.width + 1;
                    u.strokeStyle = r.bgcolor;
                    u.stroke();
                    tt && (u.fillStyle = r.fill, u.fill());
                    u.beginPath();
                    u.arc(ut, ft, et, -v + st, k * i - v + st, !1);
                    r.border == "outline" ? u.lineWidth = r.width + r.bordersize : r.border == "inline" && (u.lineWidth = r.width - r.bordersize);
                    u.strokeStyle = r.fgcolor;
                    u.stroke();
                    a < s && (a += at, requestAnimationFrame(function() {
                        ht(Math.min(a, s) / 100)
                    }, f));
                    a == s && ot && typeof t != "undefined" && n.isFunction(t.complete) && (t.complete(), ot = !1)
                }
                var ct = ["fgcolor", "bgcolor", "fill", "width", "dimension", "fontsize", "animationstep", "endPercent", "icon", "iconcolor", "iconsize", "border", "startdegree", "bordersize"],
                    r = {},
                    nt = "",
                    y, s = 0,
                    f = n(this),
                    tt = !1,
                    it, rt, p, l;
                f.addClass("circliful");
                vt(f);
                f.data("text") != undefined && (it = f.data("text"), f.data("icon") != undefined && (nt = n("<i><\/i>").addClass("fa " + n(this).data("icon")).css({
                    color: r.iconcolor,
                    "font-size": r.iconsize
                })), f.data("type") != undefined ? (o = n(this).data("type"), o == "half" ? d(f, "circle-text-half", r.dimension / 1.45) : d(f, "circle-text", r.dimension)) : d(f, "circle-text", r.dimension));
                n(this).data("total") != undefined && n(this).data("part") != undefined ? (p = n(this).data("total") / 100, y = (n(this).data("part") / p / 100).toFixed(3), s = (n(this).data("part") / p).toFixed(3)) : n(this).data("percent") != undefined ? (y = n(this).data("percent") / 100, s = n(this).data("percent")) : y = i.percent / 100;
                n(this).data("info") != undefined && (rt = n(this).data("info"), n(this).data("type") != undefined ? (o = n(this).data("type"), o == "half" ? g(f, .9) : g(f, 1.25)) : g(f, 1.25));
                n(this).width(r.dimension + "px");
                var e = r.dimension,
                    h = n("<canvas><\/canvas>").attr({
                        width: e,
                        height: e
                    }).appendTo(n(this)).get(0),
                    u = h.getContext("2d"),
                    c = window.devicePixelRatio;
                c && (l = n(h), l.css("width", e), l.css("height", e), l.attr("width", e * c), l.attr("height", e * c), u.scale(c, c));
                var yt = n(h).parent(),
                    ut = e / 2,
                    ft = e / 2,
                    lt = r.percent * 360,
                    pt = lt * (Math.PI / 180),
                    et = e / 2.5,
                    w = 2.3 * Math.PI,
                    b = 0,
                    a = r.animationstep === 0 ? s : 0,
                    at = Math.max(r.animationstep, 0),
                    k = Math.PI * 2,
                    v = Math.PI / 2,
                    o = "",
                    ot = !0,
                    st = r.startdegree / 180 * Math.PI;
                n(this).data("type") != undefined && (o = n(this).data("type"), o == "half" && (w = 2 * Math.PI, b = 3.13, k = Math.PI, v = Math.PI / .996));
                n(this).data("type") != undefined && (o = n(this).data("type"), o == "angle" && (w = 2.25 * Math.PI, b = 2.4, k = 1.53 + Math.PI, v = .73 + Math.PI / .996));
                ht(a / 100)
            })
        }
    }(jQuery);
"function" != typeof Object.create && (Object.create = function(n) {
    function t() {}
    return t.prototype = n, new t
}),
    function(n, t, i) {
        var r = {
            init: function(t, i) {
                this.$elem = n(i);
                this.options = n.extend({}, n.fn.owlCarousel.options, this.$elem.data(), t);
                this.userOptions = t;
                this.loadContent()
            },
            loadContent: function() {
                function r(n) {
                    var i, r = "";
                    if ("function" == typeof t.options.jsonSuccess) t.options.jsonSuccess.apply(this, [n]);
                    else {
                        for (i in n.owl) n.owl.hasOwnProperty(i) && (r += n.owl[i].item);
                        t.$elem.html(r)
                    }
                    t.logIn()
                }
                var t = this,
                    i;
                "function" == typeof t.options.beforeInit && t.options.beforeInit.apply(this, [t.$elem]);
                "string" == typeof t.options.jsonPath ? (i = t.options.jsonPath, n.getJSON(i, r)) : t.logIn()
            },
            logIn: function() {
                this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
                this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
                this.$elem.css({
                    opacity: 0
                });
                this.orignalItems = this.options.items;
                this.checkBrowser();
                this.wrapperWidth = 0;
                this.checkVisible = null;
                this.setVars()
            },
            setVars: function() {
                if (0 === this.$elem.children().length) return !1;
                this.baseClass();
                this.eventTypes();
                this.$userItems = this.$elem.children();
                this.itemsAmount = this.$userItems.length;
                this.wrapItems();
                this.$owlItems = this.$elem.find(".owl-item");
                this.$owlWrapper = this.$elem.find(".owl-wrapper");
                this.playDirection = "next";
                this.prevItem = 0;
                this.prevArr = [0];
                this.currentItem = 0;
                this.customEvents();
                this.onStartup()
            },
            onStartup: function() {
                this.updateItems();
                this.calculateAll();
                this.buildControls();
                this.updateControls();
                this.response();
                this.moveEvents();
                this.stopOnHover();
                this.owlStatus();
                !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
                !0 === this.options.autoPlay && (this.options.autoPlay = 5e3);
                this.play();
                this.$elem.find(".owl-wrapper").css("display", "block");
                this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
                this.onstartup = !1;
                this.eachMoveUpdate();
                "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
            },
            eachMoveUpdate: function() {
                !0 === this.options.lazyLoad && this.lazyLoad();
                !0 === this.options.autoHeight && this.autoHeight();
                this.onVisibleItems();
                "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
            },
            updateVars: function() {
                "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
                this.watchVisibility();
                this.updateItems();
                this.calculateAll();
                this.updatePosition();
                this.updateControls();
                this.eachMoveUpdate();
                "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
            },
            reload: function() {
                var n = this;
                t.setTimeout(function() {
                    n.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var n = this;
                if (!1 === n.$elem.is(":visible")) n.$elem.css({
                    opacity: 0
                }), t.clearInterval(n.autoPlayInterval), t.clearInterval(n.checkVisible);
                else return !1;
                n.checkVisible = t.setInterval(function() {
                    n.$elem.is(":visible") && (n.reload(), n.$elem.animate({
                        opacity: 1
                    }, 200), t.clearInterval(n.checkVisible))
                }, 500)
            },
            wrapItems: function() {
                this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"><\/div>');
                this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
                this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
                this.$elem.css("display", "block")
            },
            baseClass: function() {
                var n = this.$elem.hasClass(this.options.baseClass),
                    t = this.$elem.hasClass(this.options.theme);
                n || this.$elem.addClass(this.options.baseClass);
                t || this.$elem.addClass(this.options.theme)
            },
            updateItems: function() {
                var t, i;
                if (!1 === this.options.responsive) return !1;
                if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
                if (t = n(this.options.responsiveBaseWidth).width(), t > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)
                    for (this.options.itemsCustom.sort(function(n, t) {
                        return n[0] - t[0]
                    }), i = 0; i < this.options.itemsCustom.length; i += 1) this.options.itemsCustom[i][0] <= t && (this.options.items = this.options.itemsCustom[i][1]);
                else t <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), t <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), t <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), t <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), t <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
                this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
            },
            response: function() {
                var i = this,
                    u, r;
                if (!0 !== i.options.responsive) return !1;
                r = n(t).width();
                i.resizer = function() {
                    n(t).width() !== r && (!1 !== i.options.autoPlay && t.clearInterval(i.autoPlayInterval), t.clearTimeout(u), u = t.setTimeout(function() {
                        r = n(t).width();
                        i.updateVars()
                    }, i.options.responsiveRefreshRate))
                };
                n(t).resize(i.resizer)
            },
            updatePosition: function() {
                this.jumpTo(this.currentItem);
                !1 !== this.options.autoPlay && this.checkAp()
            },
            appendItemsSizes: function() {
                var t = this,
                    i = 0,
                    r = t.itemsAmount - t.options.items;
                t.$owlItems.each(function(u) {
                    var f = n(this);
                    f.css({
                        width: t.itemWidth
                    }).data("owl-item", Number(u));
                    (0 == u % t.options.items || u === r) && (u > r || (i += 1));
                    f.data("owl-roundPages", i)
                })
            },
            appendWrapperSizes: function() {
                this.$owlWrapper.css({
                    width: this.$owlItems.length * this.itemWidth * 2,
                    left: 0
                });
                this.appendItemsSizes()
            },
            calculateAll: function() {
                this.calculateWidth();
                this.appendWrapperSizes();
                this.loops();
                this.max()
            },
            calculateWidth: function() {
                this.itemWidth = Math.round(this.$elem.width() / this.options.items)
            },
            max: function() {
                var n = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
                return this.options.items > this.itemsAmount ? this.maximumPixels = n = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = n), n
            },
            min: function() {
                return 0
            },
            loops: function() {
                var r = 0,
                    u = 0,
                    t, i;
                for (this.positionsInArray = [0], this.pagesInArray = [], t = 0; t < this.itemsAmount; t += 1) u += this.itemWidth, this.positionsInArray.push(-u), !0 === this.options.scrollPerPage && (i = n(this.$owlItems[t]), i = i.data("owl-roundPages"), i !== r && (this.pagesInArray[r] = this.positionsInArray[t], r = i))
            },
            buildControls: function() {
                (!0 === this.options.navigation || !0 === this.options.pagination) && (this.owlControls = n('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem));
                !0 === this.options.pagination && this.buildPagination();
                !0 === this.options.navigation && this.buildButtons()
            },
            buildButtons: function() {
                var t = this,
                    i = n('<div class="owl-buttons"/>');
                t.owlControls.append(i);
                t.buttonPrev = n("<div/>", {
                    "class": "owl-prev",
                    html: t.options.navigationText[0] || ""
                });
                t.buttonNext = n("<div/>", {
                    "class": "owl-next",
                    html: t.options.navigationText[1] || ""
                });
                i.append(t.buttonPrev).append(t.buttonNext);
                i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(n) {
                    n.preventDefault()
                });
                i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) {
                    i.preventDefault();
                    n(this).hasClass("owl-next") ? t.next() : t.prev()
                })
            },
            buildPagination: function() {
                var t = this;
                t.paginationWrapper = n('<div class="owl-pagination"/>');
                t.owlControls.append(t.paginationWrapper);
                t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) {
                    i.preventDefault();
                    Number(n(this).data("owl-page")) !== t.currentItem && t.goTo(Number(n(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var r, u, f, t, i, e;
                if (!1 === this.options.pagination) return !1;
                for (this.paginationWrapper.html(""), r = 0, u = this.itemsAmount - this.itemsAmount % this.options.items, t = 0; t < this.itemsAmount; t += 1) 0 == t % this.options.items && (r += 1, u === t && (f = this.itemsAmount - this.options.items), i = n("<div/>", {
                    "class": "owl-page"
                }), e = n("<span><\/span>", {
                    text: !0 === this.options.paginationNumbers ? r : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), i.append(e), i.data("owl-page", u === t ? f : t), i.data("owl-roundPages", r), this.paginationWrapper.append(i));
                this.checkPagination()
            },
            checkPagination: function() {
                var t = this;
                if (!1 === t.options.pagination) return !1;
                t.paginationWrapper.find(".owl-page").each(function() {
                    n(this).data("owl-roundPages") === n(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), n(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                if (!1 === this.options.navigation) return !1;
                !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
            },
            updateControls: function() {
                this.updatePagination();
                this.checkNavigation();
                this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
            },
            destroyControls: function() {
                this.owlControls && this.owlControls.remove()
            },
            next: function(n) {
                if (this.isTransition) return !1;
                if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                    if (!0 === this.options.rewindNav) this.currentItem = 0, n = "rewind";
                    else return this.currentItem = this.maximumItem, !1;
                this.goTo(this.currentItem, n)
            },
            prev: function(n) {
                if (this.isTransition) return !1;
                if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem)
                    if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, n = "rewind";
                    else return this.currentItem = 0, !1;
                this.goTo(this.currentItem, n)
            },
            goTo: function(n, i, r) {
                var u = this;
                if (u.isTransition) return !1;
                if ("function" == typeof u.options.beforeMove && u.options.beforeMove.apply(this, [u.$elem]), n >= u.maximumItem ? n = u.maximumItem : 0 >= n && (n = 0), u.currentItem = u.owl.currentItem = n, !1 !== u.options.transitionStyle && "drag" !== r && 1 === u.options.items && !0 === u.browser.support3d) return u.swapSpeed(0), !0 === u.browser.support3d ? u.transition3d(u.positionsInArray[n]) : u.css2slide(u.positionsInArray[n], 1), u.afterGo(), u.singleItemTransition(), !1;
                n = u.positionsInArray[n];
                !0 === u.browser.support3d ? (u.isCss3Finish = !1, !0 === i ? (u.swapSpeed("paginationSpeed"), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.paginationSpeed)) : "rewind" === i ? (u.swapSpeed(u.options.rewindSpeed), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.rewindSpeed)) : (u.swapSpeed("slideSpeed"), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.slideSpeed)), u.transition3d(n)) : !0 === i ? u.css2slide(n, u.options.paginationSpeed) : "rewind" === i ? u.css2slide(n, u.options.rewindSpeed) : u.css2slide(n, u.options.slideSpeed);
                u.afterGo()
            },
            jumpTo: function(n) {
                "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
                n >= this.maximumItem || -1 === n ? n = this.maximumItem : 0 >= n && (n = 0);
                this.swapSpeed(0);
                !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[n]) : this.css2slide(this.positionsInArray[n], 1);
                this.currentItem = this.owl.currentItem = n;
                this.afterGo()
            },
            afterGo: function() {
                this.prevArr.push(this.currentItem);
                this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
                this.prevArr.shift(0);
                this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
                "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
            },
            stop: function() {
                this.apStatus = "stop";
                t.clearInterval(this.autoPlayInterval)
            },
            checkAp: function() {
                "stop" !== this.apStatus && this.play()
            },
            play: function() {
                var n = this;
                if (n.apStatus = "play", !1 === n.options.autoPlay) return !1;
                t.clearInterval(n.autoPlayInterval);
                n.autoPlayInterval = t.setInterval(function() {
                    n.next(!0)
                }, n.options.autoPlay)
            },
            swapSpeed: function(n) {
                "slideSpeed" === n ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === n ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof n && this.$owlWrapper.css(this.addCssSpeed(n))
            },
            addCssSpeed: function(n) {
                return {
                    "-webkit-transition": "all " + n + "ms ease",
                    "-moz-transition": "all " + n + "ms ease",
                    "-o-transition": "all " + n + "ms ease",
                    transition: "all " + n + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(n) {
                return {
                    "-webkit-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + n + "px, 0px, 0px)",
                    transform: "translate3d(" + n + "px, 0px,0px)"
                }
            },
            transition3d: function(n) {
                this.$owlWrapper.css(this.doTranslate(n))
            },
            css2move: function(n) {
                this.$owlWrapper.css({
                    left: n
                })
            },
            css2slide: function(n, t) {
                var i = this;
                i.isCssFinish = !1;
                i.$owlWrapper.stop(!0, !0).animate({
                    left: n
                }, {
                    duration: t || i.options.slideSpeed,
                    complete: function() {
                        i.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var n = i.createElement("div");
                n.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
                n = n.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
                this.browser = {
                    support3d: null !== n && 1 === n.length,
                    isTouch: "ontouchstart" in t || t.navigator.msMaxTouchPoints
                }
            },
            moveEvents: function() {
                (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) && (this.gestures(), this.disabledEvents())
            },
            eventTypes: function() {
                var n = ["s", "e", "x"];
                this.ev_types = {};
                !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? n = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? n = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (n = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
                this.ev_types.start = n[0];
                this.ev_types.move = n[1];
                this.ev_types.end = n[2]
            },
            disabledEvents: function() {
                this.$elem.on("dragstart.owl", function(n) {
                    n.preventDefault()
                });
                this.$elem.on("mousedown.disableTextSelect", function(t) {
                    return n(t.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function f(n) {
                    if (void 0 !== n.touches) return {
                        x: n.touches[0].pageX,
                        y: n.touches[0].pageY
                    };
                    if (void 0 === n.touches) {
                        if (void 0 !== n.pageX) return {
                            x: n.pageX,
                            y: n.pageY
                        };
                        if (void 0 === n.pageX) return {
                            x: n.clientX,
                            y: n.clientY
                        }
                    }
                }

                function e(t) {
                    "on" === t ? (n(i).on(r.ev_types.move, o), n(i).on(r.ev_types.end, s)) : "off" === t && (n(i).off(r.ev_types.move), n(i).off(r.ev_types.end))
                }

                function o(e) {
                    e = e.originalEvent || e || t.event;
                    r.newPosX = f(e).x - u.offsetX;
                    r.newPosY = f(e).y - u.offsetY;
                    r.newRelativeX = r.newPosX - u.relativePos;
                    "function" == typeof r.options.startDragging && !0 !== u.dragging && 0 !== r.newRelativeX && (u.dragging = !0, r.options.startDragging.apply(r, [r.$elem]));
                    (8 < r.newRelativeX || -8 > r.newRelativeX) && !0 === r.browser.isTouch && (void 0 !== e.preventDefault ? e.preventDefault() : e.returnValue = !1, u.sliding = !0);
                    (10 < r.newPosY || -10 > r.newPosY) && !1 === u.sliding && n(i).off("touchmove.owl");
                    r.newPosX = Math.max(Math.min(r.newPosX, r.newRelativeX / 5), r.maximumPixels + r.newRelativeX / 5);
                    !0 === r.browser.support3d ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
                }

                function s(i) {
                    i = i.originalEvent || i || t.event;
                    var f;
                    i.target = i.target || i.srcElement;
                    u.dragging = !1;
                    !0 !== r.browser.isTouch && r.$owlWrapper.removeClass("grabbing");
                    r.dragDirection = r.owl.dragDirection = 0 > r.newRelativeX ? "left" : "right";
                    0 !== r.newRelativeX && (f = r.getNewPosition(), r.goTo(f, !1, "drag"), u.targetElement === i.target && !0 !== r.browser.isTouch && (n(i.target).on("click.disable", function(t) {
                        t.stopImmediatePropagation();
                        t.stopPropagation();
                        t.preventDefault();
                        n(t.target).off("click.disable")
                    }), i = n._data(i.target, "events").click, f = i.pop(), i.splice(0, 0, f)));
                    e("off")
                }
                var r = this,
                    u = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                r.isCssFinish = !0;
                r.$elem.on(r.ev_types.start, ".owl-wrapper", function(i) {
                    i = i.originalEvent || i || t.event;
                    var o;
                    if (3 === i.which) return !1;
                    if (!(r.itemsAmount <= r.options.items)) {
                        if (!1 === r.isCssFinish && !r.options.dragBeforeAnimFinish || !1 === r.isCss3Finish && !r.options.dragBeforeAnimFinish) return !1;
                        !1 !== r.options.autoPlay && t.clearInterval(r.autoPlayInterval);
                        !0 === r.browser.isTouch || r.$owlWrapper.hasClass("grabbing") || r.$owlWrapper.addClass("grabbing");
                        r.newPosX = 0;
                        r.newRelativeX = 0;
                        n(this).css(r.removeTransition());
                        o = n(this).position();
                        u.relativePos = o.left;
                        u.offsetX = f(i).x - o.left;
                        u.offsetY = f(i).y - o.top;
                        e("on");
                        u.sliding = !1;
                        u.targetElement = i.target || i.srcElement
                    }
                })
            },
            getNewPosition: function() {
                var n = this.closestItem();
                return n > this.maximumItem ? n = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = n = 0), n
            },
            closestItem: function() {
                var t = this,
                    i = !0 === t.options.scrollPerPage ? t.pagesInArray : t.positionsInArray,
                    u = t.newPosX,
                    r = null;
                return n.each(i, function(f, e) {
                    u - t.itemWidth / 20 > i[f + 1] && u - t.itemWidth / 20 < e && "left" === t.moveDirection() ? (r = e, t.currentItem = !0 === t.options.scrollPerPage ? n.inArray(r, t.positionsInArray) : f) : u + t.itemWidth / 20 < e && u + t.itemWidth / 20 > (i[f + 1] || i[f] - t.itemWidth) && "right" === t.moveDirection() && (!0 === t.options.scrollPerPage ? (r = i[f + 1] || i[i.length - 1], t.currentItem = n.inArray(r, t.positionsInArray)) : (r = i[f + 1], t.currentItem = f + 1))
                }), t.currentItem
            },
            moveDirection: function() {
                var n;
                return 0 > this.newRelativeX ? (n = "right", this.playDirection = "next") : (n = "left", this.playDirection = "prev"), n
            },
            customEvents: function() {
                var n = this;
                n.$elem.on("owl.next", function() {
                    n.next()
                });
                n.$elem.on("owl.prev", function() {
                    n.prev()
                });
                n.$elem.on("owl.play", function(t, i) {
                    n.options.autoPlay = i;
                    n.play();
                    n.hoverStatus = "play"
                });
                n.$elem.on("owl.stop", function() {
                    n.stop();
                    n.hoverStatus = "stop"
                });
                n.$elem.on("owl.goTo", function(t, i) {
                    n.goTo(i)
                });
                n.$elem.on("owl.jumpTo", function(t, i) {
                    n.jumpTo(i)
                })
            },
            stopOnHover: function() {
                var n = this;
                !0 === n.options.stopOnHover && !0 !== n.browser.isTouch && !1 !== n.options.autoPlay && (n.$elem.on("mouseover", function() {
                    n.stop()
                }), n.$elem.on("mouseout", function() {
                    "stop" !== n.hoverStatus && n.play()
                }))
            },
            lazyLoad: function() {
                var r, t, u, i, f;
                if (!1 === this.options.lazyLoad) return !1;
                for (r = 0; r < this.itemsAmount; r += 1) t = n(this.$owlItems[r]), "loaded" !== t.data("owl-loaded") && (u = t.data("owl-item"), i = t.find(".lazyOwl"), "string" != typeof i.data("src") ? t.data("owl-loaded", "loaded") : (void 0 === t.data("owl-loaded") && (i.hide(), t.addClass("loading").data("owl-loaded", "checked")), (f = !0 === this.options.lazyFollow ? u >= this.currentItem : !0) && u < this.currentItem + this.options.items && i.length && this.lazyPreload(t, i)))
            },
            lazyPreload: function(n, i) {
                function u() {
                    n.data("owl-loaded", "loaded").removeClass("loading");
                    i.removeAttr("data-src");
                    "fade" === r.options.lazyEffect ? i.fadeIn(400) : i.show();
                    "function" == typeof r.options.afterLazyLoad && r.options.afterLazyLoad.apply(this, [r.$elem])
                }

                function f() {
                    e += 1;
                    r.completeImg(i.get(0)) || !0 === o ? u() : 100 >= e ? t.setTimeout(f, 100) : u()
                }
                var r = this,
                    e = 0,
                    o;
                "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), o = !0) : i[0].src = i.data("src");
                f()
            },
            autoHeight: function() {
                function u() {
                    var r = n(i.$owlItems[i.currentItem]).height();
                    i.wrapperOuter.css("height", r + "px");
                    i.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function() {
                        i.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function f() {
                    r += 1;
                    i.completeImg(e.get(0)) ? u() : 100 >= r ? t.setTimeout(f, 100) : i.wrapperOuter.css("height", "")
                }
                var i = this,
                    e = n(i.$owlItems[i.currentItem]).find("img"),
                    r;
                void 0 !== e.get(0) ? (r = 0, f()) : u()
            },
            completeImg: function(n) {
                return !n.complete || "undefined" != typeof n.naturalWidth && 0 === n.naturalWidth ? !1 : !0
            },
            onVisibleItems: function() {
                var t;
                for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], t = this.currentItem; t < this.currentItem + this.options.items; t += 1) this.visibleItems.push(t), !0 === this.options.addClassActive && n(this.$owlItems[t]).addClass("active");
                this.owl.visibleItems = this.visibleItems
            },
            transitionTypes: function(n) {
                this.outClass = "owl-" + n + "-out";
                this.inClass = "owl-" + n + "-in"
            },
            singleItemTransition: function() {
                var n = this,
                    u = n.outClass,
                    f = n.inClass,
                    t = n.$owlItems.eq(n.currentItem),
                    i = n.$owlItems.eq(n.prevItem),
                    e = Math.abs(n.positionsInArray[n.currentItem]) + n.positionsInArray[n.prevItem],
                    r = Math.abs(n.positionsInArray[n.currentItem]) + n.itemWidth / 2;
                n.isTransition = !0;
                n.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": r + "px",
                    "-moz-perspective-origin": r + "px",
                    "perspective-origin": r + "px"
                });
                i.css({
                    position: "relative",
                    left: e + "px"
                }).addClass(u).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                    n.endPrev = !0;
                    i.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                    n.clearTransStyle(i, u)
                });
                t.addClass(f).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                    n.endCurrent = !0;
                    t.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                    n.clearTransStyle(t, f)
                })
            },
            clearTransStyle: function(n, t) {
                n.css({
                    position: "",
                    left: ""
                }).removeClass(t);
                this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
            },
            owlStatus: function() {
                this.owl = {
                    userOptions: this.userOptions,
                    baseElement: this.$elem,
                    userItems: this.$userItems,
                    owlItems: this.$owlItems,
                    currentItem: this.currentItem,
                    prevItem: this.prevItem,
                    visibleItems: this.visibleItems,
                    isTouch: this.browser.isTouch,
                    browser: this.browser,
                    dragDirection: this.dragDirection
                }
            },
            clearEvents: function() {
                this.$elem.off(".owl owl mousedown.disableTextSelect");
                n(i).off(".owl owl");
                n(t).off("resize", this.resizer)
            },
            unWrap: function() {
                0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
                this.clearEvents();
                this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                this.stop();
                t.clearInterval(this.checkVisible);
                this.unWrap();
                this.$elem.removeData()
            },
            reinit: function(t) {
                t = n.extend({}, this.userOptions, t);
                this.unWrap();
                this.init(t, this.$elem)
            },
            addItem: function(n, t) {
                var i;
                if (!n) return !1;
                if (0 === this.$elem.children().length) return this.$elem.append(n), this.setVars(), !1;
                this.unWrap();
                i = void 0 === t || -1 === t ? -1 : t;
                i >= this.$userItems.length || -1 === i ? this.$userItems.eq(-1).after(n) : this.$userItems.eq(i).before(n);
                this.setVars()
            },
            removeItem: function(n) {
                if (0 === this.$elem.children().length) return !1;
                n = void 0 === n || -1 === n ? -1 : n;
                this.unWrap();
                this.$userItems.eq(n).remove();
                this.setVars()
            }
        };
        n.fn.owlCarousel = function(t) {
            return this.each(function() {
                if (!0 === n(this).data("owl-init")) return !1;
                n(this).data("owl-init", !0);
                var i = Object.create(r);
                i.init(t, this);
                n.data(this, "owlCarousel", i)
            })
        };
        n.fn.owlCarouselMap = function(t) {
            return this.each(function() {
                if (!0 === n(this).data("owl-init")) return !1;
                n(this).data("owl-init", !0);
                var i = Object.create(r);
                i.init(t, this);
                n.data(this, "owlCarouselMap", i)
            })
        };
        n.fn.owlCarousel.options = {
            items: 4,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        };
        n.fn.owlCarouselMap.options = {
            items: 1,
            itemsCustom: !1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document)