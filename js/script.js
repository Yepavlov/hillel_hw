"use strict";


function Student(firstName, lastName, dateOfBirth) {

    this.firstName = firstName;
    this.lastName = lastName;
    if (Student.isValidDate(dateOfBirth)) {
        this.dateOfBirth = dateOfBirth;
    } else {
        console.error("Error: Invalid date format for " + firstName + ". Expected DD-MM-YYYY");
        this.dateOfBirth = null;
    }
    this._marks = new Array(10).fill(null);
    this._attendance = new Array(10).fill(null);

    Object.seal(this._marks);
    Object.seal(this._attendance);

}

Student.isNumber = function (mark) {
    if (mark === null || mark === "") return false;
    const numberMark = Number(mark);
    return !isNaN(numberMark) && numberMark >= 0 && numberMark <= 10;
}

Student.isValidDate = function (date) {
    if (typeof date !== "string" || date.trim() === "") return false;
    const parts = date.split("-");
    if (parts.length !== 3) return false;

    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const yearStr = parts[2];

    if (isNaN(day) || day < 1 || day > 31) return false;
    if (isNaN(month) || month < 1 || month > 12) return false;
    if (yearStr.length !== 4 || isNaN(Number(yearStr))) return false;

    return true;
}

Student.prototype._updateAttendance = function (value) {
    for (let i = 0; i < this._attendance.length; i++) {
        if (this._attendance[i] === null) {
            this._attendance[i] = value;
            return;
        }
    }
    console.warn("The attendance log is full!");
}

Student.prototype.present = function () {
    this._updateAttendance(true);
}

Student.prototype.absent = function () {
    this._updateAttendance(false);
}

Student.prototype.mark = function (mark) {
    const cleanMark = Number(mark);
    if (Student.isNumber(mark)) {
        for (let i = 0; i < this._marks.length; i++) {
            if (this._marks[i] === null) {
                this._marks[i] = cleanMark;
                return;
            }
        }
        console.warn("The marks log is full!");
    } else {
        console.error("Mark should be an integer from 0 to 10")
    }
}

Student.prototype.getAge = function () {
    if (!this.dateOfBirth) {
        console.log("Age unknown (date of birth not specified).");
        return null;
    }

    const parts = this.dateOfBirth.split("-");

    const day = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    const year = Number(parts[2]);

    const birthDate = new Date(year, month, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

Student.prototype.getAvgScore = function () {
    let count = 0;
    let sum = 0;
    for (const mark of this._marks) {
        if (mark !== null) {
            sum += mark;
            count++;
        }
    }
    return count === 0 ? 0 : sum / count;
}

Student.prototype.getAvgAttendance = function () {
    let count = 0;
    let sum = 0;
    for (const day of this._attendance) {
        if (day !== null) {
            sum += Number(day);
            count++;
        }
    }
    return count === 0 ? 0 : sum / count;
}

Student.prototype.summary = function () {

    const avgScore = this.getAvgScore();
    const avgAttendance = this.getAvgAttendance();

    console.log(`Average Score: ${avgScore}, Average Attendance: ${avgAttendance}`);

    if (avgScore > 9 && avgAttendance > 0.9) {
        return "Outstanding!";
    } else if (avgScore <= 9 && avgAttendance <= 0.9) {
        return "Radish!";
    } else {
        return "Good, but could be better.";
    }
};

console.log("--- Student 1: The Star ---");
let student1 = new Student("John", "Doe", "23-01-1989")
for (let i = 0; i < 10; i++) {
    student1.present();
    student1.mark(10);
}
console.log(`Age: ${student1.getAge()}`);
console.log(`Summary: ${student1.summary()}`);

console.log("\n--- Student 2: The Slacker ---");
let student2 = new Student("Ron", "Weasley", "01-03-1980");
student2.absent();
student2.mark(3);
console.log(`Age: ${student2.getAge()}`);
console.log(`Summary: ${student2.summary()}`);


console.log("\n--- Student 3: Average Joe ---");
let student3 = new Student("Harry", "Potter", "31-07-1980");
for (let i = 0; i < 10; i++) student3.present();
for (let i = 0; i < 10; i++) student3.mark(7);

console.log(`Age: ${student3.getAge()}`);
console.log(`Summary: ${student3.summary()}`);


console.log("\n--- Validation Tests ---");
student3.mark(15);
student3.mark("text")