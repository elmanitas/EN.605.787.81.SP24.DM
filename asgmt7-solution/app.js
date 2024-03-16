(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getToBuyList();

        toBuyList.moveItem = function(itemIndex) {
            ShoppingListCheckOffService.moveItem(itemIndex);
        }
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;
        
        boughtList.items = ShoppingListCheckOffService.getBoughtList();
    };

    function ShoppingListCheckOffService() {
        var service = this;

        // to buy list
        var toBuyList = [
            {
                name: "Whole Chicken", 
                quantity: 2,
                pricePerItem: 20
            },
            {
                name: "Lemon", 
                quantity: 3,
                pricePerItem: 2
            },
            {
                name: "Rosemary", 
                quantity: 5,
                pricePerItem: 3
            },
            {
                name: "Salt", 
                quantity: 1,
                pricePerItem: 5
            },
            {
                name: "Pepper", 
                quantity: 8,
                pricePerItem: 2
            }
        ];

        // bought list
        var boughtList = [];

        service.getToBuyList = function() {
            return toBuyList;
        };

        service.getBoughtList = function() {
            return boughtList;
            ;
        };

        service.moveItem = function(itemIndex) {
            var item = {
                name: toBuyList[itemIndex].name,
                quantity: toBuyList[itemIndex].quantity,
                pricePerItem: toBuyList[itemIndex].pricePerItem
            };
            console.log(item.name);
            boughtList.push(item);
            toBuyList.splice(itemIndex, 1);
        };
    }
})();