"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "totalQuantite", {
        get: function () {
            return this.colors.reduce(function (sum, c) { return sum + c.quantite; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
