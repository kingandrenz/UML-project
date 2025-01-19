class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.grades = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    calculateAverage() {
        if (this.grades.length === 0) return 0;
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }
}

module.exports = Student;

