require('./projectCtrl.js');
require('./taskCtrl.js');

const app = angular.module("crmApp", ['ui.bootstrap','ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/project');

    $stateProvider
        .state('project', {
            url: '/project',
            templateUrl: 'partials/project.html',
            controller: 'projectCtrl'
        })
        .state('task', {
            url: '/:foo?bar',
            templateUrl: 'partials/task.html',
            controller: 'taskCtrl'    
        });
});


