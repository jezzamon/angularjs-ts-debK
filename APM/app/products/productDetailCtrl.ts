

module app.productDetail {
  interface IProductDetailModel {
    title: string;
    product: app.domain.IProduct;

  }

  interface IProductParams {
    productId: number;
  }

  class ProductDetailCtrl implements IProductDetailModel {
    title: string;
    product: app.domain.IProduct;

    static $inject = ['dataAccessService', '$routeParams'];
    constructor(private dataAccessService,
                private $routeParams: IProductParams) {
      this.title = "Product Detail";

      let productResource = dataAccessService.getProductResource();
      productResource.get({productId: $routeParams.productId}, data => {
        this.product = data;
      })

    }

  }
  angular.module('productManagement').controller('ProductDetailCtrl', ProductDetailCtrl);
}