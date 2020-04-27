"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var core_1 = require("@wap/core");
var WAPText = /** @class */ (function (_super) {
    tslib_1.__extends(WAPText, _super);
    function WAPText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WAPText.prototype._read = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, String.fromCharCode.apply(null, data)];
            });
        });
    };
    return WAPText;
}(core_1.WAPPlugin));
exports.WAPText = WAPText;
exports["default"] = WAPText;
//# sourceMappingURL=WAPText.js.map