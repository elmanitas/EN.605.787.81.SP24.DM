(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    ItemsController.$inject = ['$stateParams', 'categories', 'items'];
    function ItemsController($stateParams, categories, items) {
      var itemsList = this;
      var category = $stateParams.categoryShortName;
      itemsList.items = items;
    }
    
})();