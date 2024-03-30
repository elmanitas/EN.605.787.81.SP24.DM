(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('BaseUrl', 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json')
    .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            templateUrl: 'foundItems.html'
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var list = this;

        list.getItems = function(searchTerm) {
            console.log(searchTerm);
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

            promise.then(function (response) {
                list.found = response;
            }).catch(function (error){
                console.log("Something went wrong.")
            });
        }
        list.removeItem = function (index){
            list.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http', 'BaseUrl']
    function MenuSearchService($http, BaseUrl) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: BaseUrl
            }).then(function (result) {
                // process result and only keep items that match
                var foundItems = []; 
                // iterate over each category
                if(searchTerm !== ""){
                    for(var category in result.data){
                        // iterate over each menu item
                        for(var item in result.data[category].menu_items){
                            // get description that matches searchTerm
                            if(result.data[category].menu_items[item].description
                                .indexOf(searchTerm) !== -1){
                                foundItems.push(result.data[category].menu_items[item]);
                            }
                        }
                    }
                }
                console.log(foundItems);
                // return processed items
                return foundItems;
            });
            
        }
    }

})();