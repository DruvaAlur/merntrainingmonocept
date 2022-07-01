class Student {
  constructor(
    firstName,
    lastName,
    fullName,
    DOB,
    age,
    semesterCGPA,
    finalCGPA,
    semesterGrade,
    finalGrade,
    yearOfEnrollment,
    yearOfPassing,
    numberOfYearsToGraduate
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = fullName;
    this.DOB = DOB;
    this.age = age;
    this.semesterCGPA = semesterCGPA;
    this.finalCGPA = finalCGPA;
    this.semesterGrade = semesterGrade;
    this.finalGrade = finalGrade;
    this.yearOfEnrollment = yearOfEnrollment;
    this.yearOfPassing = yearOfPassing;
    this.numberOfYearsToGraduate = numberOfYearsToGraduate;
  }

  static createStudent(
    firstName,
    lastName,
    DOB,
    semesterCGPA,
    yearOfEnrollment,
    yearOfPassing
  ) {
    const fullName = firstName + lastName;
    let age = new Date().getFullYear() - DOB.split("/")[2];
    const finalCGPA = Student.finalCGPACalculate(semesterCGPA);
    let semesterGrade = Student.findSemesterGrade(semesterCGPA);
    let finalGrade = Student.findFinalGrade(finalCGPA);
    let numberOfYearsToGraduate = yearOfPassing - yearOfEnrollment;

    let tempStudent = new Student(
      firstName,
      lastName,
      fullName,
      DOB,
      age,
      semesterCGPA,
      finalCGPA,
      semesterGrade,
      finalGrade,
      yearOfEnrollment,
      yearOfPassing,
      numberOfYearsToGraduate
    );
    return tempStudent;
  }
  static finalCGPACalculate(semesterCGPA) {
    let tempSemesterCGPA = 0;
    for (let i = 0; i < semesterCGPA.length; i++) {
      tempSemesterCGPA += semesterCGPA[i];
    }
    return tempSemesterCGPA / 8;
  }
  static findSemesterGrade(semesterCGPA) {
    console.log(semesterCGPA);
    let tempSemesterGrade = [];
    for (let i = 0; i < semesterCGPA.length; i++) {
      if (semesterCGPA[i] >= 9) {
        tempSemesterGrade[i] = "A";
      } else if (semesterCGPA[i] >= 8) {
        tempSemesterGrade[i] = "B";
      } else if (semesterCGPA[i] >= 7) {
        tempSemesterGrade[i] = "C";
      } else if (semesterCGPA[i] >= 4) {
        tempSemesterGrade[i] = "D";
      } else {
        tempSemesterGrade[i] = "F";
      }
    }
    return tempSemesterGrade;
  }
  static findFinalGrade(finalCGPA) {
    let tempFinalGrade = "";
    if (finalCGPA >= 9) {
      tempFinalGrade = "A";
    } else if (finalCGPA >= 8) {
      tempFinalGrade = "B";
    } else if (finalCGPA >= 7) {
      tempFinalGrade = "C";
    } else if (finalCGPA >= 4) {
      tempFinalGrade = "D";
    } else {
      tempFinalGrade = "F";
    }
    return tempFinalGrade;
  }
  updateFirstName(newFirstName) {
    this.firstName = newFirstName;
    this.fullName = this.firstName + this.lastName;
    console.log(`First name updated to ${this.firstName}`);
  }
  updateLastName(newLastName) {
    this.lastName = newLastName;
    this.fullName = this.firstName + this.lastName;
    console.log(`Last name updated to ${this.lastName}`);
  }
  updateFullName(newFullName) {
    this.fullName = newFullName;
    this.updateFirstName(newFullName.split(" ")[0]);
    this.updateLastName(newFullName.split(" ")[1]);
  }
  updateDOB(newDOB) {
    this.DOB = newDOB;
    this.updateage(newDOB);
    console.log(`DOB updated to ${this.DOB}`);
  }
  updateage(newDOB) {
    this.age = new Date().getFullYear() - newDOB.split("/")[2];
  }
  updateSemCGPAArray(newSemCGPAArray) {
    this.semesterCGPA = newSemCGPAArray;
    this.updatefinalCGPA(newSemCGPAArray);
    this.updatesemesterGrade(newSemCGPAArray);
    console.log(`Sem CGPA updated to ${this.semesterCGPA}`);
  }
  updatefinalCGPA(newSemCGPAArray) {
    this.finalCGPA = Student.finalCGPACalculate(newSemCGPAArray);
    this.updateFinalGrade(this.finalCGPA);
  }
  updatesemesterGrade(newSemCGPAArray) {
    this.semesterGrade = Student.findSemesterGrade(newSemCGPAArray);
  }
  updateFinalGrade(newFinalCGPA) {
    this.finalGrade = Student.findFinalGrade(newFinalCGPA);
  }
  updateYearOfEnrollment(newYearOfEnrollment) {
    this.yearOfEnrollment = newYearOfEnrollment;
    this.numberOfYearsToGraduate = this.yearOfPassing - this.yearOfEnrollment;
    console.log(`Year of Enrollment updated to ${this.yearOfEnrollment}`);
  }
  updateYearOfPassing(newYearOfPassing) {
    this.yearOfPassing = newYearOfPassing;
    this.numberOfYearsToGraduate = this.yearOfPassing - this.yearOfEnrollment;
    console.log(`Year of passing updated to ${this.yearOfPassing}`);
  }
  updatenumberOfYearsToGraduate(newNumberOfYear) {
    this.numberOfYearsToGraduate = newNumberOfYear;
  }
}
const s1 = Student.createStudent(
  "Druva",
  "Alur",
  "13/02/2001",
  [8, 7, 9, 8, 7, 2, 9, 8],
  2018,
  2022
);
console.log(s1);
// s1.updateSemCGPAArray([6, 6, 8, 9, 3, 2, 5, 6]);
// console.log(s1);
s1.updateFirstName("arjun");
console.log(s1);
// console.log(s1);
// // updateFirstName,
// //       lastName,
// //       fullName,
// //       DOB,
// //       age,
// //       semesterCGPA,
// //       finalCGPA,
// //       semesterGrade,
// //       finalGrade,
// //       yearOfEnrollment,
// //       yearOfPassing,
// //       numberOfYearsToGraduate
