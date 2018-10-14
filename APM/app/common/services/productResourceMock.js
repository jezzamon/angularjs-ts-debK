var app;
(function (app) {
    var common;
    (function (common) {
        var mockResource = angular
            .module("productResourceMock", ["ngMockE2E"]);
        mockResource.run(mockRun);
        mockRun.$inject = ["$httpBackend"];
        function mockRun($httpBackend) {
            var products = [];
            var product;
            product = new app.domain.Product(1, "Leaf Rake", "GDN-0011", new Date(2009, 2, 19), 19.95, "Leaf rake with 48-inch wooden handle.", "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png");
            products.push(product);
            product = new app.domain.Product(2, "Garden Cart", "GDN-0023", new Date(2010, 2, 18), 26.95, "15 gallon capacity rolling garden cart", "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png");
            products.push(product);
            product = new app.domain.Product(3, "Saw", "TBX-002", new Date(2002, 3, 1), 16.95, "15-inch steel blade hand saw", "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png");
            products.push(product);
            product = new app.domain.Product(4, "Hammer", "TBX-0048", new Date(2013, 4, 21), 8.99, "Curved claw steel hammer", "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png");
            products.push(product);
            product = new app.domain.Product(5, "Video Game Controller", "GMG-0042", new Date(2012, 9, 25), 35.95, "Standard five-button video game controller", "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png");
            products.push(product);
            var productUrl = "/api/products";
            $httpBackend.whenGET(productUrl).respond(products);
            var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
            $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
                var product = { "productId": 0 };
                var parameters = url.split('/');
                var length = parameters.length;
                var id = +parameters[length - 1];
                if (id > 0) {
                    for (var i = 0; i < products.length; i++) {
                        if (products[i].productId == id) {
                            product = products[i];
                            break;
                        }
                    }
                }
                return [200, product, {}];
            });
            // Catch all for testing purposes
            $httpBackend.whenGET(/api/).respond(function (method, url, data) {
                return [200, products, {}];
            });
            // Pass through any requests for application files
            $httpBackend.whenGET(/app/).passThrough();
        }
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFJlc291cmNlTW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3RSZXNvdXJjZU1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBTyxHQUFHLENBc0VUO0FBdEVELFdBQU8sR0FBRztJQUFDLElBQUEsTUFBTSxDQXNFaEI7SUF0RVUsV0FBQSxNQUFNO1FBSWIsSUFBSSxZQUFZLEdBQUcsT0FBTzthQUNyQixNQUFNLENBQUMscUJBQXFCLEVBQ3pCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUV2QixZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNuQyxTQUFTLE9BQU8sQ0FBQyxZQUFpQjtZQUM5QixJQUFJLFFBQVEsR0FBMEIsRUFBRSxDQUFDO1lBQ3pDLElBQUksT0FBNEIsQ0FBQztZQUVqQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFDckYsdUNBQXVDLEVBQ3ZDLDZFQUE2RSxDQUFDLENBQUM7WUFDbkYsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV2QixPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFDdkYsd0NBQXdDLEVBQ3hDLHFFQUFxRSxDQUFDLENBQUM7WUFDM0UsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV2QixPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMs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