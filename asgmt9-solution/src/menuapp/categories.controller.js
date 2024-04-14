(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);
    
    
    // MainShoppingListController.$inject = ['ShoppingListService'];
    // function MainShoppingListController(ShoppingListService) {
    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
      var mainList = this;
      mainList.categories = categories;
      console.log("in categories controller");
      //console.log(categories);
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