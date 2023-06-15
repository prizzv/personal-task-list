var express = require("express");
var router = express.Router();

const { createTasks, deleteTasks, updateTasks } = require("../model/tasks");
const { connection } = require("../db");

//get all tasks
router.get("/", async (req, res, next) => {
    connection.query('SELECT * FROM tasks', (error, results, fields) => {

        if (error) {
            throw error;
        } else {
            data = JSON.parse(JSON.stringify(results))
            // console.log(data);
            res.json(data);
        }
    });
});

//get task by specific id
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    connection.query('SELECT * FROM tasks WHERE tasksId = ?', [id], (error, results, fields) => {

        if (error) {
            throw error;
        } else {
            data = JSON.parse(JSON.stringify(results))
            // console.log(data);
            res.json(data);
        }
    });
});

//create new task
router.post("/", (req, res, next) => {
    const { taskTitle, taskSubTitle } = req.body;

    createTasks(taskTitle, taskSubTitle);

    res.status(200).json({ message: 'Task inserted successfully.' });
})

//update task
router.put("/", (req, res, next) => {
    const { tasksId, taskTitle, taskSubTitle } = req.body;
    console.log(req.body);

    updateTasks(tasksId, taskTitle, taskSubTitle);

    res.status(200).json({ message: 'Task updated successfully.' });
});

//delete task
router.delete("/:id", (req, res, next) => {
    const { id } = req.params;

    deleteTasks(id);

    res.status(200).json({ message: 'Task deleted successfully.' });
});

module.exports = router;