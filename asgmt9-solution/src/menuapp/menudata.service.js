(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService);
    
    
    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
        var service = this;
        
        service.getAllCategories = function() {
            return $http({
                method: "GET",
                url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
            }).then(function (result) {
                var categories = [];

                // iterate over each category
                for(var index in result.data){
                    categories.push(result.data[index]);
                }
                // return processed items
                return categories;
            });
        };    
        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: "GET",
                url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
            }).then(function (result) {
                var items = []; 
                // iterate over each category
                for(var index in result.data['menu_items']){
                    items.push(result.data['menu_items'][index]);
                }
                // return processed items
                return items;
            });
        };    
    }
    
})();
    