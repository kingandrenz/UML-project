const Student = require('./Student');

class GradingSystem {
    constructor() {
        this.students = [];
    }

    addStudent(name, id) {
        const student = new Student(name, id);
        this.students.push(student);
        console.log(`Student ${name} added.`);
    }

    assignGrade(studentId, grade) {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            student.addGrade(grade);
            console.log(`Grade ${grade} assigned to ${student.name}.`);
        } else {
            console.log(`Student with ID ${studentId} not found.`);
        }
    }

    getClassAverage() {
        if (this.students.length === 0) return 0;
        const total = this.students.reduce((sum, student) => sum + student.calculateAverage(), 0);
        return total / this.students.length;
    }
}

// Example Usage
const system = new GradingSystem();
system.addStudent('Alice', 1);
system.addStudent('Bob', 2);

system.assignGrade(1, 85);
system.assignGrade(1, 90);
system.assignGrade(2, 78);

console.log(`Class Average: ${system.getClassAverage().toFixed(2)}`);

