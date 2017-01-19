const express = require("express");
const route = express.Router();

module.exports = function(db) {
  // GET api/v1/timetable/
  route.get("/", get);
  route.post("/", post);

  function get(req, res, next) {

    db.find('timetable')
      .then((rows) => {
        res.json({data: rows})
      })
  }

  function post(req, res, next) {}

  return route;
};
