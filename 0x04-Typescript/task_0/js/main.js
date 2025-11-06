// 1. Define student interface
// 2, Create two students ojects
var student1 = {
    firstName: "Abdullah",
    lastName: "Abdulmalik",
    age: 23,
    location: "Nigeria"
};
var student2 = {
    firstName: "Habeeb",
    lastName: "Bankole",
    age: 20,
    location: "Lagos"
};
// 3. An array of students
var studentsList = [student1, student2];
// 4. Render a table in DOM usinf Vanilla JS 
var table = document.createElement('table');
var headerRow = document.createElement('tr');
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.style.width = "50%";
var headerName = document.createElement("th");
headerName.textContent = "First Name";
var headerLocation = document.createElement("th");
headerLocation.textContent = "Location";
headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var cellName = document.createElement("td");
    cellName.textContent = student.firstName;
    var cellLocation = document.createElement("td");
    cellLocation.textContent = student.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    table.appendChild(row);
});
document.body.appendChild(table);
