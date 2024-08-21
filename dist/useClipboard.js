"use strict";
/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-21 10:41
 */
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useClipboard() {
    var _a = (0, react_1.useState)(false), copied = _a[0], setCopied = _a[1];
    var copyToClipboard = function (text) {
        navigator.clipboard
            .writeText(typeof text === "number" ? text + "" : text || "")
            .then(function () {
            setCopied(true);
            setTimeout(function () { return setCopied(false); }, 1500);
        })
            .catch(function (err) {
            console.error("Failed to copy: ", err);
        });
    };
    return { copied: copied, copyToClipboard: copyToClipboard };
}
exports.default = useClipboard;
