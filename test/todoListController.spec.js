describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with empty task list', function () {
    expect(ctrl.taskList).toEqual({ 'tasks': [] });
  });


});
