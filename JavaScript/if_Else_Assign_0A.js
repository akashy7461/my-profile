function validating(age) {
    if (age <= 0 || age > 120 || age==undefined) {
      console.log(`data Invalid ${age}`);
    } else if (age >= 18) {
      console.log(`You are eligible to vote ${age}`);
    } else {
      console.log(`You are not eligible to vote yet ${age}`);
    }
  }
validating(45);
validating(17);
validating(8);
validating(20);
validating(-10);
validating(200);
validating(0);
validating(undefined);
validating(null);
console.log("-----------------------------");


function gradeCalculation(marks) {
    if (typeof marks !== 'number' || marks <= 0 || marks >= 101) {
      console.log('Please provide valid marks');
    } else if (marks >= 90) {
      console.log(`Fantastic marks: ${marks}, Your grade is A+`);
    } else if (marks >= 75) {
      console.log(`Excellent marks ${marks}, your grade is A`);
    } else if (marks >= 50) {
      console.log(`Good marks ${marks}, your grade is B `);
    } else if (marks >= 35) {
      console.log(`Marks is ${marks}, your grade is C,Need improvement`);
    } else {
      console.log(`Marks is ${marks}, you have failed`);
    }
  }
  
  // invoke the function for various values
  gradeCalculation(98);
  gradeCalculation(80);
  gradeCalculation(90);
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation(35);
  gradeCalculation(29);
  gradeCalculation(64);
  gradeCalculation(49);
  gradeCalculation("91");
  gradeCalculation("Eighty");