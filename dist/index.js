"use strict";
/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-21 10:41
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnClickOutside = exports.usePrevious = exports.useDebounce = exports.useFetch = exports.useLocalStorage = exports.useURLParams = exports.useModalState = exports.useIpAddress = exports.useClipboard = exports.useWindowDimensions = void 0;
var useWindowDimensions_1 = __importDefault(require("./useWindowDimensions"));
exports.useWindowDimensions = useWindowDimensions_1.default;
var useClipboard_1 = __importDefault(require("./useClipboard"));
exports.useClipboard = useClipboard_1.default;
var useIpAddress_1 = __importDefault(require("./useIpAddress"));
exports.useIpAddress = useIpAddress_1.default;
var useModalState_1 = __importDefault(require("./useModalState"));
exports.useModalState = useModalState_1.default;
var useURLParams_1 = __importDefault(require("./useURLParams"));
exports.useURLParams = useURLParams_1.default;
var useLocalStorage_1 = __importDefault(require("./useLocalStorage"));
exports.useLocalStorage = useLocalStorage_1.default;
var useFetch_1 = __importDefault(require("./useFetch"));
exports.useFetch = useFetch_1.default;
var useDebounce_1 = __importDefault(require("./useDebounce"));
exports.useDebounce = useDebounce_1.default;
var usePrevious_1 = __importDefault(require("./usePrevious"));
exports.usePrevious = usePrevious_1.default;
var useOnClickOutside_1 = __importDefault(require("./useOnClickOutside"));
exports.useOnClickOutside = useOnClickOutside_1.default;
