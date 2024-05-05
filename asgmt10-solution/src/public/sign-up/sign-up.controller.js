(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserInfoService', 'MenuService'];
  function SignUpController(UserInfoService, MenuService) {
    var $ctrl = this;
    $ctrl.infoSubmitted = false;

    $ctrl.submit = function(user) {
      UserInfoService.setUserInfo(user);
      $ctrl.infoSubmitted = true;
    }

    $ctrl.validateMenuNumber = function(number) {
      console.log("validating number");
      $ctrl.isMenuNumberValid = false;
      $ctrl.isMenuNumberValidated = false;
      if(number){
        MenuService.getMenuItem(number).then((response) => {
          $ctrl.isMenuNumberValidated = true;
          if(response === null){
            $ctrl.isMenuNumberValid = false; 
          } else {
            $ctrl.isMenuNumberValid = true;
          }
        });
      }
    } 
  }
})();
