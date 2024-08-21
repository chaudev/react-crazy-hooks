"use strict";
/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-21 10:41
 */
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useModalState = function () {
    var _a = (0, react_1.useState)(false), visible = _a[0], setVisible = _a[1];
    var closeModal = function () { return setVisible(false); };
    var openModal = function () { return setVisible(true); };
    var toggle = function () { return setVisible(!visible); };
    return {
        visible: visible,
        closeModal: closeModal,
        openModal: openModal,
        toggle: toggle,
    };
};
exports.default = useModalState;
