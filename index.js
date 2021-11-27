const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const keys = require('./config/key');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan("tiny"));

// Routes
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send(`<h1>API Running on the port ${PORT}</h1>`);
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));