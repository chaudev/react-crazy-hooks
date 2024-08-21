"use strict";
/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-21 10:41
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var useURLParams = function () {
    function getParamsObjectFromURL() {
        var url = window.location.href || "";
        var queryString = url.substring(url.indexOf("?") + 1);
        var searchParams = new URLSearchParams(queryString);
        var paramsObject = {};
        searchParams.forEach(function (value, key) {
            // @ts-ignore
            paramsObject[key] = value;
        });
        return paramsObject;
    }
    return __assign({}, getParamsObjectFromURL());
};
exports.default = useURLParams;
