describe('ToDo List', function () {

  var addTaskField  = element(by.model("listCtrl.taskDescription"));
  var addTaskButton = element(by.id('submitTask'));
  var completeTaskCheck = element(by.model('task.completed'));
  var tasks = element.all(by.repeater('task in listCtrl.taskList.tasks'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('can add a task to task list', function () {
    addTaskField.sendKeys('challenge');
    addTaskButton.click();
    expect(tasks.get(0).getText()).toContain('challenge');
  });

  it('can mark a task as completed', function () {
    addTaskField.sendKeys('Complete challenge');
    addTaskButton.click();
    expect(completeTaskCheck.isSelected()).toBe(false);
  });
});
