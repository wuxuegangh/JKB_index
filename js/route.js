angular.module('app', [
        'ionic',
        'controller'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $stateProvider
            .state('index', {
                    url: '/index',
                    templateUrl: 'temp_index.html',
                    controller: 'indexController'
                }
            )
        ;
        $urlRouterProvider.otherwise('index');

    })

;
