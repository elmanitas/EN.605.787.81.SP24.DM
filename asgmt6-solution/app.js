(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.checkLunch = function () {
            // get number of items
            var count = getCount($scope.lunchItems);
            $scope.messageColor = "green-text";
            $scope.inputBorderColor = "green-border";
            if(count < 1) {
                $scope.message = "Please enter data first.";
                $scope.messageColor = "red-text";
                $scope.inputBorderColor = "red-border";
            } else if (count > 3) {
                $scope.message = "Too much!";
            } else {
                $scope.message = "Enjoy!";
            }
        };
        
        var getCount = function (menuItems) {
            if(menuItems == undefined) {
                return 0;
            } else {
                // remove all spaces from input string
                menuItems = menuItems.replace(/\s+/g, "").split(",");
                // remove all null and empty strings
                menuItems = menuItems.filter(function (items) {
                    if(items != null && items != "")
                        return items != null;
                });
                // update the lunchItems input with processed/accepted string
                $scope.lunchItems = menuItems;
                // get number of items
                return menuItems.length;
            }
        }
    };
})();