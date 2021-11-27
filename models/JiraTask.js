const mongoose = require("mongoose");
const { Schema } = mongoose;

const jiraTaskSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    difficulty: { type: String, required: true },
    date: { type: String, required: true }
});

const JiraTask = mongoose.model("jiraTasks", jiraTaskSchema);

module.exports = JiraTask;