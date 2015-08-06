describe('ToDo List', function () {

  var addTaskField      = element(by.model("listCtrl.taskDescription"));
  var addTaskButton     = element(by.id('submitTask'));
  var completeTaskCheck = element(by.css('.completeTaskCheckbox'));
  var editTaskField     =  element(by.model('$data'));
  var editTaskButton    = element(by.css('.editable-buttons button:first-child'));
  var tasks = element.all(by.repeater('task in listCtrl.taskList.tasks'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('can add a task to task list', function () {
    addTaskField.sendKeys('Do laundry');
    addTaskButton.click();
    expect(tasks.get(0).getText()).toContain('Do laundry');
  });

  it('tasks are not completed by default', function () {
    addTaskField.sendKeys('Buy milk');
    addTaskButton.click();
    expect(completeTaskCheck.isSelected()).toBe(false);
  });

  // it('can mark a task as completed', function () {
  //   addTaskField.sendKeys('Buy a dog');
  //   addTaskButton.click();
  //   completeTaskCheck.click();
  //   expect(completeTaskCheck.isSelected()).toBe(true);
  // });

  it('can edit the name of a task', function () {
    addTaskField.sendKeys('Feed the cat');
    addTaskButton.click();
    element(by.id('editTaskField')).click();
    editTaskField.clear();
    editTaskField.sendKeys('Feed the dog');
    editTaskButton.click();
    expect(tasks.get(0).getText()).toBe('Feed the dog');
  });

  describe('when displaying tasks', function () {

    it('defaults to showing all active tasks', function () {
      addTaskField.sendKeys('Feed the cat');
      addTaskButton.click();
      completeTaskCheck.click();
      expect(tasks.count()).toBe(0);
    });
  });
});
