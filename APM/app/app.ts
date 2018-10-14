module app {
  angular.module('productManagement', 
  ['ngRoute',
    'common.services', 
    'productResourceMock']
  
  )
  .config(routeConfig);
  routeConfig.$inject = ['$routeProvider'];
  function routeConfig($routeProvider): any {
    $routeProvider
      .when('/productList', {
        templateUrl: './app/products/productListView.html',
        controller: 'ProductListCtrl as vm'
      })
      .when('/proudctDetail/:productId', 
      {
        templateUrl: './app/products/productDetailView.html',
        controller: 'ProductDetailCtrl as vm'
      })
      .otherwise('/productList');
  }

  
}
