// 1. Define student interface

interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 2, Create two students ojects
const student1: student = {
    firstName: "Abdullah",
    lastName:  "Abdulmalik",
    age: 23,
    location: "Nigeria"
}
const student2: student = {
    firstName: "Habeeb",
    lastName: "Bankole",
    age: 20,
    location: "Lagos"
}

// 3. An array of students
const studentsList: student[] = [student1, student2];

// 4. Render a table in DOM usinf Vanilla JS 

const table = document.createElement('table');
const headerRow = document.createElement('tr');
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.style.width = "50%";

const headerName = document.createElement("th");
headerName.textContent = "First Name";

const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";

headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const cellName = document.createElement("td");
    cellName.textContent = student.firstName;

    const cellLocation = document.createElement("td");
    cellLocation.textContent = student.location;

    row.appendChild(cellName);
    row.appendChild(cellLocation);
    table.appendChild(row);
});

document.body.appendChild(table);