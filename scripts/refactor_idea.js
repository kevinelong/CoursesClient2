// const payload = {
//     dept: document.getElementById("dept").value,
//     courseNum: document.getElementById("courseNum").value,
//     courseName: document.getElementById("courseName").value,
//     instructor: document.getElementById("instructor").value,
//     numDays: document.getElementById("numDays").value,
//     startDate: document.getElementById("startDate").value
// };


// HOW CAN WE USE A LIST OF VALUES TO REPEAT IN BOTH SIDES OF AN EXPRESSION
const fields = ["dept", "courseNum", "courseName", "instructor", "numDays", "startDate"];
const payload = {};
fields.forEach(f=> payload[f] = document.getElementById(f).value);
