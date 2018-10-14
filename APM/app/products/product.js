var app;
(function (app) {
    var domain;
    (function (domain) {
        var Product = /** @class */ (function () {
            function Product(productId, productCode, productName, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productCode = productCode;
                this.productName = productName;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            Product.prototype.calculateDiscount = function (percent) {
                return this.price - (this.price * percent / 100);
            };
            return Product;
        }());
        domain.Product = Product;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxHQUFHLENBNkJUO0FBN0JELFdBQU8sR0FBRztJQUFDLElBQUEsTUFBTSxDQTZCaEI7SUE3QlUsV0FBQSxNQUFNO1FBWWY7WUFDRSxpQkFBbUIsU0FBaUIsRUFDakIsV0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsV0FBaUIsRUFDakIsS0FBYSxFQUNiLFdBQW1CLEVBQ25CLFFBQWdCO2dCQU5oQixjQUFTLEdBQVQsU0FBUyxDQUFRO2dCQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtnQkFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7Z0JBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFNO2dCQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFRO2dCQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFRO1lBR25DLENBQUM7WUFFRCxtQ0FBaUIsR0FBakIsVUFBa0IsT0FBZTtnQkFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUMsR0FBRyxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUNILGNBQUM7UUFBRCxDQUFDLEFBZkQsSUFlQztRQWZZLGNBQU8sVUFlbkIsQ0FBQTtJQUVILENBQUMsRUE3QlUsTUFBTSxHQUFOLFVBQU0sS0FBTixVQUFNLFFBNkJoQjtBQUFELENBQUMsRUE3Qk0sR0FBRyxLQUFILEdBQUcsUUE2QlQifQ==