const express = require("express");
const cors = require("cors");

const todos = require("./routes/todos");

const connection = require("./db");

const app = express();
const port = process.env.PORT || 5000;

connection.dbconnect();

app.use(express.json());
app.use(cors());

app.use("/api/todos", todos);

app.listen(port, () => console.log(`Listening on port ${port}...`))

module.exports = app;