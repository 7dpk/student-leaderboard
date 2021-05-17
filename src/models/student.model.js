"user strict";
var dbConn = require("./../../config/db.config");

//Student object create
class Student {
  constructor(student) {
    this.name = student.name;
    this.roll = student.roll;
    this.maths = student.maths;
    this.physics = student.physics;
    this.chemistry = student.chemistry;
    this.percentage = student.percentage;
    this.total = student.total;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
  static create(newEmp, result) {
    dbConn.query("INSERT INTO students set ?", newEmp, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  }
  static findById(id, result) {
    dbConn.query(
      "Select * from students where id = ? ",
      id,
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  }
  static findAll(result) {
    dbConn.query("Select * from students", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("students : ", res);
        result(null, res);
      }
    });
  }
  static update(id, student, result) {
    dbConn.query(
      "UPDATE students SET name=?,roll=?,maths=?,physics=?,chemistry=?,percentage=?,total=? WHERE id = ?",
      [
        student.name,
        student.roll,
        student.maths,
        student.physics,
        student.chemistry,
        student.percentage,
        student.total,
        id,
      ],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  }
  static delete(id, result) {
    dbConn.query(
      "DELETE FROM students WHERE id = ?",
      [id],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  }
}

module.exports = Student;
