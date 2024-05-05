(function () {
  "use strict";

  angular.module('common')
  .service('MenuService', MenuService);


  MenuService.$inject = ['$http', 'ApiPath'];
  function MenuService($http, ApiPath) {
    var service = this;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };

    service.getMenuItems = function (category) {
      return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
        return response.data;
      });
    };

    service.menuNumber = null;
    service.getMenuItem = function (number) {
      service.menuNumber = number;
      return service.getMenuItems(getLetters(number)).then((response) => {
        for(var item in response.menu_items){   
          if(response.menu_items[item].short_name === service.menuNumber){
            return response.menu_items[item];
          }
        }
        return null;
      });
    };

    service.getCategory = function(number){
      return getLetters(number);
    }

    // Function to extract letters
    function getLetters(string) {

      string = string.toUpperCase();
      let matches = string.match(/([A-Z]+)/);

      // Return output if number extracted
      if (matches) {
          return matches[0];
      }
      return null;
    }

  }
})();
