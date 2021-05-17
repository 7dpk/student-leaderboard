const express = require("express");
const studentRoutes = require("./src/routes/student.routes");

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// define a root route
app.get("/", (req, res) => {
  res.send("Student api working!!!");
});

// using routes as middleware
app.use("/api/v1/students", studentRoutes);

const port = process.env.PORT || 5000;
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
