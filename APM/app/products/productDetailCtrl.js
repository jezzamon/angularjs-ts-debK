var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailCtrl = /** @class */ (function () {
            function ProductDetailCtrl(dataAccessService, $routeParams) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.$routeParams = $routeParams;
                this.title = "Product Detail";
                var productResource = dataAccessService.getProductResource();
                productResource.get({ productId: $routeParams.productId }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailCtrl.$inject = ['dataAccessService', '$routeParams'];
            return ProductDetailCtrl;
        }());
        angular.module('productManagement').controller('ProductDetailCtrl', ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbEN0cmwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0RGV0YWlsQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxJQUFPLEdBQUcsQ0E2QlQ7QUE3QkQsV0FBTyxHQUFHO0lBQUMsSUFBQSxhQUFhLENBNkJ2QjtJQTdCVSxXQUFBLGFBQWE7UUFXdEI7WUFLRSwyQkFBb0IsaUJBQWlCLEVBQ2pCLFlBQTRCO2dCQURoRCxpQkFTQztnQkFUbUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFBO2dCQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7Z0JBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7Z0JBRTlCLElBQUksZUFBZSxHQUFHLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzdELGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVMsRUFBQyxFQUFFLFVBQUEsSUFBSTtvQkFDM0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFBO1lBRUosQ0FBQztZQVZNLHlCQUFPLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLENBQUMsQ0FBQztZQVl6RCx3QkFBQztTQUFBLEFBaEJELElBZ0JDO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pGLENBQUMsRUE3QlUsYUFBYSxHQUFiLGlCQUFhLEtBQWIsaUJBQWEsUUE2QnZCO0FBQUQsQ0FBQyxFQTdCTSxHQUFHLEtBQUgsR0FBRyxRQTZCVCJ9