"use strict";


import {isNumber, isValidDate} from "./utils.js";


class Student {

    static MAX_MARKS = 10;
    static MAX_ATTENDANCE = 25;
    static PERFECT_SCORE = 90;
    static PERFECT_ATTENDANCE = 0.9;

    firstName = null;
    lastName = null;
    dateOfBirth = null;
    #marks = new Array(Student.MAX_MARKS).fill(null);
    #attendance = new Array(Student.MAX_ATTENDANCE).fill(null);


    constructor(firstName, lastName, dateOfBirth) {
        if (!firstName || !lastName || !dateOfBirth) {
            throw new Error("The student should have three required fields: firstName, lastName and dateOfBirth");
        }
        this.firstName = firstName;
        this.lastName = lastName;
        if (isValidDate(dateOfBirth)) {
            this.dateOfBirth = dateOfBirth;
        } else {
            console.error("Error: Invalid date format for " + firstName + ". Expected DD-MM-YYYY");
            this.dateOfBirth = null;
        }
    }

    present() {
        this.#updateAttendance(true);
    }

    absent() {
        this.#updateAttendance(false);
    }

    mark(mark) {
        const cleanMark = Number(mark);
        if (isNumber(mark)) {
            for (let i = 0; i < this.#marks.length; i++) {
                if (this.#marks[i] === null) {
                    this.#marks[i] = cleanMark;
                    return;
                }
            }
            console.warn("The marks log is full!");
        } else {
            console.error("Mark should be an integer from 0 to 100")
        }
    }

    getAge() {
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

    getAvgScore() {
        let count = 0;
        let sum = 0;
        for (const mark of this.#marks) {
            if (mark !== null) {
                sum += mark;
                count++;
            }
        }
        return count === 0 ? 0 : sum / count;
    }

    getAvgAttendance() {
        let count = 0;
        let sum = 0;
        for (const day of this.#attendance) {
            if (day !== null) {
                sum += Number(day);
                count++;
            }
        }
        return count === 0 ? 0 : sum / count;
    }

    summary() {

        const avgScore = this.getAvgScore();
        const avgAttendance = this.getAvgAttendance();

        console.log(`Average Score: ${avgScore}, Average Attendance: ${avgAttendance}`);

        if (avgScore > Student.PERFECT_SCORE && avgAttendance > Student.PERFECT_ATTENDANCE) {
            return "Outstanding!";
        } else if (avgScore <= Student.PERFECT_SCORE && avgAttendance <= Student.PERFECT_ATTENDANCE) {
            return "Radish!";
        } else {
            return "Good, but could be better.";
        }
    };

    #updateAttendance(value) {
        for (let i = 0; i < this.#attendance.length; i++) {
            if (this.#attendance[i] === null) {
                this.#attendance[i] = value;
                return;
            }
        }
        console.warn("The attendance log is full!");
    }


}

console.log("--- Student 1: The Star ---");
let student1 = new Student("John", "Doe", "23-01-1989")
for (let i = 0; i < 10; i++) {
    student1.present();
    student1.mark(91);
}

console.log(`Age: ${student1.getAge()}`);
console.log(`Summary: ${student1.summary()}`);

console.log("\n--- Student 2: The Slacker ---");
let student2 = new Student("Ron", "Weasley", "01-03-1980");
student2.absent();
student2.mark(30);
console.log(`Age: ${student2.getAge()}`);
console.log(`Summary: ${student2.summary()}`);


console.log("\n--- Student 3: Average Joe ---");
let student3 = new Student("Harry", "Potter", "31-07-1980");
for (let i = 0; i < 25; i++) student3.present();
for (let i = 0; i < 10; i++) student3.mark(70);

console.log(`Age: ${student3.getAge()}`);
console.log(`Summary: ${student3.summary()}`);


console.log("\n--- Validation Tests ---");
student3.mark(15);
student3.mark("text")