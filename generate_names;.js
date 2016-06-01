var date = new Date();

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();

var firstName = month.toString() + day.toString() + 'name';
var secondName = hours.toString() + minutes.toString() + 'surname';
var emailName = year.toString() + month.toString() + day.toString() + hours.toString() + minutes.toString() + '@test.test';

variables.set("email", emailName);
variables.set("first_name", firstName);
variables.set("last_name", secondName);
log(variables.get("first_name"));
log(variables.get("last_name"));
log(variables.get("email"));