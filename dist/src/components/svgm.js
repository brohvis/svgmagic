"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var config_1 = __importDefault(require("../../config")); // Correct path to config
var utils_1 = require("../../utils"); // Correct path to utilities
var localConfig = config_1.default;
var iconFiles = (0, utils_1.importAll)(require.context('../svg/', false, /\.svg$/)); // Assuming SVG files are under src/svg/
var SVGM = function (_a) {
    var kind = _a.kind, setName = _a.setName, _b = _a.href, href = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? '' : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    if (setName) {
        var set = localConfig.iconSets[setName];
        var setHrefs_1 = localConfig.setHrefs[setName];
        if (!set)
            return null;
        return (<div>
        {set.map(function (iconKind) { return (0, utils_1.renderIcon)(iconKind, iconFiles, localConfig, href, size, className, setHrefs_1); })}
      </div>);
    }
    return (0, utils_1.renderIcon)(kind, iconFiles, localConfig, href, size, className);
};
exports.default = SVGM;
