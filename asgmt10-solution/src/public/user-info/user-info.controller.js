(function () {
    "use strict";
  
    angular.module('public')
    .controller('UserInfoController', UserInfoController);
  
    UserInfoController.$inject = ['UserInfoService', 'MenuService'];
    function UserInfoController(UserInfoService, MenuService) {
      var $ctrl = this;

      $ctrl.userInfo = UserInfoService.getUserInfo();

      $ctrl.menuItem = (function () {
        if($ctrl.userInfo == null){
          return null;
        } else {
          return MenuService.getMenuItem($ctrl.userInfo.favorite).then((response) => {
            $ctrl.menuItem = response;  
          });
        }
      })();
      $ctrl.category = (function () {
        if($ctrl.userInfo == null){
          return null;
        } else {
          return MenuService.getCategory($ctrl.userInfo.favorite);
        }
      })();
    }
  })();