(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserInfoService'];
function SignUpController(UserInfoService) {
  var $ctrl = this;
  $ctrl.submit = function(user) {
    UserInfoService.setUserInfo(user);
    console.log("userInfo = ", UserInfoService.getUserInfo());
  }
  
}


})();
