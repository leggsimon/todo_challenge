var todoListManager = angular.module('ToDoList', ['ngResource', 'ngRoute', 'xeditable']);

todoListManager.config(function ($routeProvider) {

  $routeProvider.when('/active_tasks', {
    controller: 'toDoListController',
    templateUrl: 'views/active.html'
  });

  $routeProvider.otherwise( {
      redirectTo: '/'
    });
});
