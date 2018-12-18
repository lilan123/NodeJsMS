(function(todoListFacade){

    var database = require('../infrastructure/database');

    todoListFacade.getTodoLists = function(next){
        database.getDb(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.todoList.find().toArray(function(err, results){
                    if(err){
                        next(err, null);
                    }else{
                        next(null, results);
                    }
                });
            }
        });
    }

})(module.exports);