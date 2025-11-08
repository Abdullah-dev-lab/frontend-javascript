export function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

export function executeWork(employee: Director |  Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
