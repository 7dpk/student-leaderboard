"use strict";

const Student = require("../models/student.model");

/**
 * Applies to all the function exports below
 * @param {object} req
 * @param {object} res
 * @returns {object} back to the client
 */

exports.findAll = function (req, res) {
  Student.findAll(function (err, student) {
    console.log("controller");
    if (err) return res.send(err);
    console.log("res", student);
    res.status(200).send(student);
  });
};

exports.create = function (req, res) {
  const new_student = new Student(req.body);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Student.create(new_student, function (err, student) {
      if (err) return res.send(err);
      res.status(201).json({
        error: false,
        message: "Student added successfully!",
        data: student,
      });
    });
  }
};

exports.findById = function (req, res) {
  Student.findById(req.params.id, function (err, student) {
    if (err) return res.send(err);
    res.json(student);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Student.update(
      req.params.id,
      new Student(req.body),
      function (err, student) {
        if (err) return res.send(err);
        res.json({
          error: false,
          message: "Student successfully updated",
          data: student,
        });
      }
    );
  }
};

exports.delete = function (req, res) {
  Student.delete(req.params.id, function (err, student) {
    if (err) return res.send(err);
    res.json({ error: false, message: "Student successfully deleted" });
  });
};
