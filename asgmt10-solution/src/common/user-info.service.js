(function () {
    'use strict';
    angular.module('common')
    .service('UserInfoService', UserInfoService);

    function UserInfoService() {
        var service = this;

        // user info
        var userInfo = {};

        service.getUserInfo = function() {
            return userInfo;
        };

        service.setUserInfo = function(user) {
            userInfo = {
                firstname: user.firstname
            };
        }

    }
})();