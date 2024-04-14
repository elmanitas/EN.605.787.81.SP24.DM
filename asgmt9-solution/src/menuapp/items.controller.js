(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    
    // MainShoppingListController.$inject = ['ShoppingListService'];
    // function MainShoppingListController(ShoppingListService) {
    ItemsController.$inject = ['$stateParams', 'categories', 'items'];
    function ItemsController($stateParams, categories, items) {
      var itemsList = this;
      var category = $stateParams.categoryShortName;
      //var items = categories[category];
      itemsList.items = items;
      //console.log($stateParams);
      console.log("in items controller");
      console.log(categories);
      console.log(category);
      console.log(items);
    // CategoriesController.$inject = ['categories', 'items'];
    // function CategoriesController(categories, items) {
    //   var categories = this;
    //   categories.categories = items;
      //console.log('in CategoriesController');
    
      // mainList.$onInit = function () {
      //   ShoppingListService.getItems()
      //   .then(function (result) {
      //     mainList.items = result;
      //   });
      // };
    }
    
})();