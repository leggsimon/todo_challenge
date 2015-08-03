todoListManager.controller('ToDoListController', [function () {

  var self = this;

  self.taskList = {
    'tasks': []
  };

  self.addNewTask = function () {
    self.taskList.tasks.push({
      description: self.taskDescription,
      completed: false
    });
  };



}]);
