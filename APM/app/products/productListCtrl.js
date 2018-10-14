var app;
(function (app) {
    var productList;
    (function (productList) {
        var ProductListCtrl = /** @class */ (function () {
            function ProductListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.toggleImage = function () {
                    console.log(_this);
                    _this.showImage = !_this.showImage;
                };
                this.title = "Product List",
                    this.showImage = false;
                this.products = [];
                var productResource = dataAccessService.getProductResource();
                productResource.query(function (data) {
                    _this.products = data;
                });
            } // end constructor
            ProductListCtrl.$inject = ['dataAccessService'];
            return ProductListCtrl;
        }());
        angular.module('productManagement').controller('ProductListCtrl', ProductListCtrl);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdExpc3RDdHJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdExpc3RDdHJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sR0FBRyxDQWtDVDtBQWxDRCxXQUFPLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0FrQ3JCO0lBbENVLFdBQUEsV0FBVztRQVFwQjtZQU1FLHlCQUFvQixpQkFBK0M7Z0JBQW5FLGlCQVVDO2dCQVZtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQThCO2dCQVluRSxnQkFBVyxHQUFHO29CQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNuQyxDQUFDLENBQUE7Z0JBZEMsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjO29CQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBRW5CLElBQUksZUFBZSxHQUFHLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzdELGVBQWUsQ0FBQyxLQUFLLENBQUUsVUFBQSxJQUFJO29CQUN6QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7WUFFTCxDQUFDLENBQUMsa0JBQWtCO1lBWGIsdUJBQU8sR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFpQnpDLHNCQUFDO1NBQUEsQUF0QkQsSUFzQkM7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRXJGLENBQUMsRUFsQ1UsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBa0NyQjtBQUFELENBQUMsRUFsQ00sR0FBRyxLQUFILEdBQUcsUUFrQ1QifQ==