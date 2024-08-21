"use strict";
/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-21 10:41
 */
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function getWindowDimensions() {
    var width = window.innerWidth, height = window.innerHeight;
    return {
        width: width,
        height: height,
    };
}
function useWindowDimensions() {
    var _a = (0, react_1.useState)(getWindowDimensions()), windowDimensions = _a[0], setWindowDimensions = _a[1];
    (0, react_1.useEffect)(function () {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    return windowDimensions;
}
exports.default = useWindowDimensions;
