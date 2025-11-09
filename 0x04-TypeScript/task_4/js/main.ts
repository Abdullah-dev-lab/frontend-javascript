/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subjects.ts" />
/// <reference path="./subjects/Cpp.ts" />

export const cTeacher: Subjects.Teacher = {
     firstName: "John",
     lastName: "Doe",
    experienceTeachingC: 10
}

const cpp = new Cpp();
console.log("C++");

cpp.setTeacher(cTeacher);

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Java();
console.log("Java");

java.setTeacher(cTeacher);

console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

export const react = new React();
console.log("React");

react.setTeacher(cTeacher);

console.log(react.getRequirements());
console.log(react.getAvailableTeacher());


