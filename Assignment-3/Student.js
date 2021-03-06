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
    const finalCGPA = Student.#finalCGPACalculate(semesterCGPA);
    let semesterGrade = Student.#findSemesterGrade(semesterCGPA);
    let finalGrade = Student.#findFinalGrade(finalCGPA);
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
  static #finalCGPACalculate(semesterCGPA) {
    let tempSemesterCGPA = 0;
    for (let i = 0; i < semesterCGPA.length; i++) {
      tempSemesterCGPA += semesterCGPA[i];
    }
    return tempSemesterCGPA / 8;
  }
  static #findSemesterGrade(semesterCGPA) {
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
  static #findFinalGrade(finalCGPA) {
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
    this.fullName = this.firstName + " " + this.lastName;
  }
  updateLastName(newLastName) {
    this.lastName = newLastName;
    this.fullName = this.firstName + " " + this.lastName;
  }
  updateFullName(newFullName) {
    this.fullName = newFullName;
    this.updateFirstName(newFullName.split(" ")[0]);
    this.updateLastName(newFullName.split(" ")[1]);
  }
  updateDOB(newDOB) {
    this.DOB = newDOB;
    this.updateage(newDOB);
  }
  updateage(newDOB) {
    this.age = new Date().getFullYear() - newDOB.split("/")[2];
  }
  updateSemCGPAArray(newSemCGPAArray) {
    this.semesterCGPA = newSemCGPAArray;
    this.updatefinalCGPA(newSemCGPAArray);
    this.updatesemesterGrade(newSemCGPAArray);
  }
  updatefinalCGPA(newSemCGPAArray) {
    this.finalCGPA = Student.#finalCGPACalculate(newSemCGPAArray);
    this.updateFinalGrade(this.finalCGPA);
  }
  updatesemesterGrade(newSemCGPAArray) {
    this.semesterGrade = Student.#findSemesterGrade(newSemCGPAArray);
  }
  updateFinalGrade(newFinalCGPA) {
    this.finalGrade = Student.#findFinalGrade(newFinalCGPA);
  }
  updateYearOfEnrollment(newYearOfEnrollment) {
    this.yearOfEnrollment = newYearOfEnrollment;
    this.numberOfYearsToGraduate = this.yearOfPassing - this.yearOfEnrollment;
  }
  updateYearOfPassing(newYearOfPassing) {
    this.yearOfPassing = newYearOfPassing;
    this.numberOfYearsToGraduate = this.yearOfPassing - this.yearOfEnrollment;
  }
  updatenumberOfYearsToGraduate(newNumberOfYear) {
    this.numberOfYearsToGraduate = newNumberOfYear;
  }
  update(PropertyToUpdate, value) {
    switch (PropertyToUpdate) {
      case "firstname":
        this.updateFirstName(value);
        console.log(`First name updated to ${this.firstName}`);
        console.log(`Full name updated to ${this.fullName}`);
        break;
      case "lastname":
        this.updateLastName(value);
        console.log(`Last name updated to ${this.lastName}`);
        console.log(`Full name updated to ${this.fullName}`);
        break;
      case "fullname":
        this.updateFullName(value);
        console.log(`Full name updated to ${this.fullName}`);
        console.log(`First name updated to ${this.firstName}`);
        console.log(`Last name updated to ${this.lastName}`);
        break;
      case "DOB":
        this.updateDOB(value);
        console.log(`DOB updated to ${this.DOB}`);
        console.log(`age updated to ${this.age}`);
        break;
      case "semestercgpa":
        this.updateSemCGPAArray(value);
        console.log(`Sem CGPA updated to ${this.semesterCGPA}`);
        console.log(`Semester Grade updated to ${this.semesterGrade}`);
        console.log(`Final CGPA updated to ${this.finalCGPA}`);
        console.log(`Final grade updated to ${this.finalGrade}`);
        break;
      case "yearofenrollment":
        this.updateYearOfEnrollment(value);
        console.log(`Year of Enrollment updated to ${this.yearOfEnrollment}`);
        console.log(
          `Number Of Years To Graduate updated to ${this.numberOfYearsToGraduate}`
        );
        break;
      case "yearofpassing":
        this.updateYearOfPassing(value);
        console.log(`Year of passing updated to ${this.yearOfPassing}`);
        console.log(
          `Number Of Years To Graduate updated to ${this.numberOfYearsToGraduate}`
        );
        break;
      default:
        console.log("wrong property");
        break;
    }
  }
  display(PropertyToDisplay) {
    switch (PropertyToDisplay) {
      case "firstname":
        console.log(this.firstName);
        break;
      case "lastname":
        console.log(this.lastName);
        break;
      case "fullname":
        console.log(this.fullName);
        break;
      case "DOB":
        console.log(this.DOB);
        break;
      case "semestercgpa":
        console.log(this.semesterCGPA);
        break;
      case "yearofenrollment":
        console.log(this.yearOfEnrollment);
        break;
      case "yearofpassing":
        console.log(this.yearOfPassing);
        break;
      default:
        console.log("wrong property");
        break;
    }
  }
  getproperty(PropertyToDisplay) {
    switch (PropertyToDisplay) {
      case "firstname":
        return this.firstName;
        break;
      case "lastname":
        return this.lastName;
        break;
      case "fullname":
        return this.fullName;
        break;
      case "DOB":
        return this.DOB;
        break;
      case "semestercgpa":
        return this.semesterCGPA;
        break;
      case "yearofenrollment":
        return this.yearOfEnrollment;
        break;
      case "yearofpassing":
        return this.yearOfPassing;
        break;
      default:
        return "wrong property";
        break;
    }
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

s1.update("firstname", "Arjun");
s1.update("lastname", "naik");
s1.update("fullname", "Druva Alur");
s1.update("DOB", "12/03/2000");
s1.update("semestercgpa", [9, 9, 8, 8, 7, 7, 6, 4]);
s1.update("yearofenrollment", 2020);
s1.update("yearofpassing", 2024);
s1.display("firstname");
console.log(s1.getproperty("firstname"));
