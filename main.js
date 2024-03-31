//lower case
var personName1 = "isha";
console.log("lowercase", personName1.toLowerCase());
//upper case
var personName2 = "isha";
console.log("uppercase", personName2.toLocaleUpperCase());
//title case
var personName3 = "isha";
console.log("titlecase", personName3.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
