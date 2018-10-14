module app.productList {
  interface IProductListModel {
    title: string;
    showImage: boolean;
    products: app.domain.IProduct[];
    toggleImage(): void;
  }
  
  class ProductListCtrl implements IProductListModel {
    title: string;
    showImage: boolean;
    products: app.domain.IProduct[];
    
    static $inject = ['dataAccessService'];
    constructor(private dataAccessService: app.common.DataAccessService) {
      this.title = "Product List",
      this.showImage = false;
      this.products = [];
    
      let productResource = dataAccessService.getProductResource();
      productResource.query( data => {
        this.products = data;
      });
  
    } // end constructor
  
    toggleImage = () => {
      console.log(this);
      this.showImage = !this.showImage;
    }
  }
  
  angular.module('productManagement').controller('ProductListCtrl', ProductListCtrl);
  
}

