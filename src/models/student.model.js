"use strict";
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

  /**
   * To handle the POST request and create new entry of student
   * @param {Object} newStudent JSON object received from client
   * @param {function} result callback to handle the query results
   */
  static create(newStudent, result) {
    dbConn.query("INSERT INTO students set ?", newStudent, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  }

  /**
   * To GET one student by id
   * @param {number} id of the student to find
   * @param {function} result to handle the query results
   */

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

  /**
   * To handle the GET request
   * @param {function} result callback to handle the query result
   */

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

  /**
   * To handle the PUT request to update the students' info
   * @param {number} id of student to update/put the request
   * @param {Object} student object received from the client as JSON
   * @param {function} result callback to handle the query results
   */
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

  /**
   * To handle DELETE request
   * @param {number} id of student to delete
   * @param {function} result callback to handle the query results
   */

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
