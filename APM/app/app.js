var app;
(function (app) {
    angular.module('productManagement', ['ngRoute',
        'common.services',
        'productResourceMock'])
        .config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/productList', {
            templateUrl: './app/products/productListView.html',
            controller: 'ProductListCtrl as vm'
        })
            .when('/proudctDetail/:productId', {
            templateUrl: './app/products/productDetailView.html',
            controller: 'ProductDetailCtrl as vm'
        })
            .otherwise('/productList');
    }
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sR0FBRyxDQXdCVDtBQXhCRCxXQUFPLEdBQUc7SUFDUixPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUNsQyxDQUFDLFNBQVM7UUFDUixpQkFBaUI7UUFDakIscUJBQXFCLENBQUMsQ0FFdkI7U0FDQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckIsV0FBVyxDQUFDLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDekMsU0FBUyxXQUFXLENBQUMsY0FBYztRQUNqQyxjQUFjO2FBQ1gsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNwQixXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFVBQVUsRUFBRSx1QkFBdUI7U0FDcEMsQ0FBQzthQUNELElBQUksQ0FBQywyQkFBMkIsRUFDakM7WUFDRSxXQUFXLEVBQUUsdUNBQXVDO1lBQ3BELFVBQVUsRUFBRSx5QkFBeUI7U0FDdEMsQ0FBQzthQUNELFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvQixDQUFDO0FBR0gsQ0FBQyxFQXhCTSxHQUFHLEtBQUgsR0FBRyxRQXdCVCJ9