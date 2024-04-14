(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'src/menuapp/templates/categories.template.html',
      controller: 'CategoriesController',
      bindings: {
        categories: '<'
      }
    });
    
})();