(function (todoListView) {
    
    var database = require('./database'),
        TodoItem = require('../domain/TodoItem');

        todoListView.CreateTodoList = function (data, next) {
            database.getDb(function (err, db) {
                if (err) {
                    next(err);
                } else {
                    db.todoList.insert(new TodoItem(data.id, data.name, data.dueDate), function (err) {
                        
                        if (err) {
                            next(err);
                        } else {
                            next(null);
                        }
                    });
                }
            });
        };


})(module.exports);