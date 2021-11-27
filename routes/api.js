const express = require("express");
const router = express.Router();
const JiraTask = require("../models/JiraTask");

// GET //////////////////////////////////////////////

// Get tasks
router.get("/tasks", (req, res) => {
    JiraTask.find({})
        .then(data => {
            console.log("Data found");
            res.json(data);
        })
        .catch(error => {
            console.log("error: ", error);
        });
});

// Get count of all tasks
router.get("/tasks/all-count", (req, res) => {
    JiraTask.find({}).count()
        .then(data => {
            console.log("Data found");
            res.json(data);
        })
        .catch(error => {
            console.log("error: ", error);
        });
});

// Get count of BACKEND tasks
router.get("/tasks/backend-count", (req, res) => {
    JiraTask.find({ type: "Backend" }).count()
        .then(data => {
            console.log("Data found");
            res.json(data);
        })
        .catch(error => {
            console.log("error: ", error);
        });
});

// Get count of FRONTEND tasks
router.get("/tasks/frontend-count", (req, res) => {
    JiraTask.find({ type: "Frontend" }).count()
        .then(data => {
            console.log("Data found");
            res.json(data);
        })
        .catch(error => {
            console.log("error: ", error);
        });
});

// POST //////////////////////////////////////////////

// Add task
router.post("/tasks/add", (req, res) => {
    const data = req.body;
    const newTask = new JiraTask(data);

    newTask.save((error) => {
        if (error) {
            res.status(500).json({ msg: "Sorry, internal server errors" });
        } else {
            res.json({
                msg: "Your data has been saved !"
            });
        }
    });
});

// Delete task
router.post("/tasks/delete", (req, res) => {
    const data = req.body;
    const queryToFind = Object.keys(data);

    JiraTask.findOneAndDelete({ _id: queryToFind })
        .then(result => {
            console.log("Session successfully deleted");
        })
        .catch(error => {
            console.log("error: ", error);
        });
});

module.exports = router;