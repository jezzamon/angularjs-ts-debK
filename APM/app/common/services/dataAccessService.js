var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = /** @class */ (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProductResource = function () {
                return this.$resource('/api/products/:productId');
            };
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular.module('common.services').service('dataAccessService', DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YUFjY2Vzc1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhQWNjZXNzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLEdBQUcsQ0FxQlQ7QUFyQkQsV0FBTyxHQUFHO0lBQUMsSUFBQSxNQUFNLENBcUJoQjtJQXJCVSxXQUFBLE1BQU07UUFVZjtZQUdFLDJCQUFvQixTQUF1QztnQkFBdkMsY0FBUyxHQUFULFNBQVMsQ0FBOEI7WUFBSSxDQUFDO1lBRWhFLDhDQUFrQixHQUFsQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBTE0seUJBQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBTWpDLHdCQUFDO1NBQUEsQUFSRCxJQVFDO1FBUlksd0JBQWlCLG9CQVE3QixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO0lBRW5GLENBQUMsRUFyQlUsTUFBTSxHQUFOLFVBQU0sS0FBTixVQUFNLFFBcUJoQjtBQUFELENBQUMsRUFyQk0sR0FBRyxLQUFILEdBQUcsUUFxQlQifQ==