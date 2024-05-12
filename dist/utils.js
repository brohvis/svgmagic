"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderIcon = exports.importAll = void 0;
// utils.ts
var importAll = function (requireContext) {
    return requireContext.keys().reduce(function (acc, next) {
        var key = next.replace(/^.*[\\/]/, '').replace(/\.\w+$/, '');
        acc[key] = requireContext(next).default;
        return acc;
    }, {});
};
exports.importAll = importAll;
var renderIcon = function (kind, iconFiles, config, href, size, className, setHrefs) {
    var IconComponent = iconFiles[kind];
    if (!IconComponent)
        return null;
    var iconName = kind.charAt(0).toUpperCase() + kind.slice(1);
    var finalClassName = "fill-current ".concat(className);
    var finalHref = href || (setHrefs && setHrefs[kind]) || config.defaultHrefs[kind];
    if (finalHref === false)
        return null; // Explicitly remove link if false
    return key = { kind: kind };
    className = { className: className } >
        {} > { iconName: iconName } < /span>
        < IconComponent;
    className = { finalClassName: finalClassName };
    alt = { iconName: iconName } /  >
        /a>;
};
exports.renderIcon = renderIcon;
className = { finalClassName: finalClassName };
alt = { iconName: iconName } /  >
;
/div>;
;
;
