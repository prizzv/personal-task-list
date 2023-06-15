const { connection } = require("../db");

// console.log(connection);

// connection.query('SELECT * FROM tasks', (error, results, fields) => {
//     if(error){
//         throw error;
//     }

//     results.forEach(result => {
//         console.log(result);
//     });
// });

module.exports.createTasks = async function (taskTitle, taskSubTitle = null) {
    try {
        if (taskSubTitle) {
            connection.query('INSERT INTO tasks (taskTitle, taskSubTitle) VALUES (?, ?)', [taskTitle, taskSubTitle], (error, results, fields) => {
                if (error) {
                    throw error;
                }
                console.log(results);
            });
        } else {
            connection.query('INSERT INTO tasks (taskTitle) VALUES (?)', [taskTitle], (error, results, fields) => {
                if (error) {
                    throw error;
                };
                console.log(results);
            });
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports.updateTasks = async function (taskId, taskTitle = null, taskSubTitle = null) {
    try {

        if (taskTitle && taskSubTitle) {
            connection.query('UPDATE tasks SET taskTitle = ?, taskSubTitle = ? WHERE tasksId = ?', [taskTitle, taskSubTitle, taskId], (error, results, fields) => {
                if (error) {
                    throw error;
                }
                console.log(results);
            });
        } else if (taskTitle) {
            connection.query('UPDATE tasks SET taskTitle = ? WHERE tasksId = ?', [taskTitle, taskId], (error, results, fields) => {
                if (error) {
                    throw error;
                }
                console.log(results);
            });
        } else {
            connection.query('UPDATE tasks SET taskSubTitle = ? WHERE tasksId = ?', [taskSubTitle, taskId], (error, results, fields) => {
                if (error) {
                    throw error;
                }
                console.log(results);
            });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteTasks = async function (taskId) {
    try {
        connection.query('DELETE FROM tasks WHERE tasksId = ?', [taskId], (error, results, fields) => {
            if (error) {
                throw error;
            }
            console.log(results);
        });

    } catch (error) {
        console.log(error);
    }

}

module.exports.getAllTasks = async function () {

    connection.query('SELECT * FROM tasks', (error, results, fields) => {

        if (error) {
            throw error;
        } else {
            data = JSON.parse(JSON.stringify(results))
        }

    });
}

// createTasks("Test Task 4 no subtitle");
// updateTasks(5, null, "Test Subtitle 555555")
// deleteTasks(2);