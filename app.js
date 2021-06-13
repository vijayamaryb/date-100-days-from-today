const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

module.exports = app.get("/", (request, response) => {
  let date = new Date();
  const newDate = addDays(date, 100);
  let days = newDate.getDays;
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let dateFormat = "${days}/${month}/${year}";
  response.send(dateFormat);
});
