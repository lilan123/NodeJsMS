(function (todoListController) {
    
    var uuid = require('node-uuid'),

        todoListFacade = require('../domain/fastFacade');
        todoListView= require('../infrastructure/fastRepository');
        TodoItemViewModel = require('../readModel/viewModels/TodoItemViewModel');
    
    todoListController.init = function (app) {       
        app.get("/api/v1/todolist", function (req, res) {
            var callback = function (error, results) {
                res.set("Content-Type", "application/json");
                if (error) {
                    console.log(error);
                    res.send([{ status: 'error getting data' }]);
                } else {
                    res.send(results);
                }
            };
            todoListFacade.getTodoLists(callback);
        });
        
        app.post("/api/v1/todolist", function (req, res) {
            var callback = function (isSuccessful) {
                res.set("Content-Type", "application/json");
                if (isSuccessful==null) {
                    res.send([{ status: 'created' }]);
                } else {
                    res.send([{ status: 'error creating resource1 ' + isSuccessful }]);
                }
            };
            todoListView.CreateTodoList( { id : uuid.v4(), name : req.body.name, dueDate: Date.now()}, callback);
           
        });
        
          
    };

})(module.exports);