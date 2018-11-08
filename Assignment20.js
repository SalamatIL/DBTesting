//Question 1.1.
var Mark = {
    fullName: "Mark Stiven",
    mass: 186, 
    height: 6.1
};
var John = {
    fullName: "John Smith",
    mass: 174,
    height: 5.7
};

//Question 1.2.
Mark.CalcBMI = function() {
    var BMI = this.mass/(this.height*this.height);
    return BMI;
}

John.CalcBMI = function() {
    var BMI = this.mass/(this.height*this.height);
    return BMI;
}

//Question 1.3.
if (Mark.CalcBMI()>John.CalcBMI()) {
    console.log(Mark.fullName+ " has the highest BMI. \n It is "+Mark.CalcBMI());
} else if (Mark.CalcBMI()<John.CalcBMI()) {
    console.log(John.fullName+ " has the highest BMI. \n It is "+John.CalcBMI());
} else {
    console.log("John and Mark have the same BMI. \n It is "+John.CalcBMI());
};

//Question 1.1. - 1.3. Using template

function persBMI (fullName, mass, height) {
    this.fullName = fullName;
    this.mass = mass;
    this.height = height;
    this.CalcBMI = function() {
        BMI_long = this.mass/(this.height*this.height);
        BMI = BMI_long.toFixed(3);
        return BMI;
    }
};
pers1 = new persBMI ("Mark Stiven", 186, 6.1);
pers2 = new persBMI ("John Smith", 174, 5.7);

console.log(pers1.fullName+"'s BMI is "+pers1.CalcBMI());
console.log(pers2.fullName+"'s BMI is "+pers2.CalcBMI());

if (pers1.CalcBMI()>pers2.CalcBMI()) {
    console.log(pers1.fullName+"'s BMI is higher. It is "+pers1.CalcBMI());
} else if (pers1.CalcBMI()<pers2.CalcBMI()) {
    console.log(pers2.fullName+"'s BMI is higher. It is "+pers2.CalcBMI());
} else {
    console.log(pers2.fullName+" and "+pers2.CalcBMI()+" have the same BMI of ");
}

//Question 2
function CybertekStudent(firstName, lastName, gender, age, StudyHours) {
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.gender = gender; 
    this.age = age; 
    this.calcAverage = function(){
        var total=0;
        for (var i=0; i<5; i++) {
            total = total + this.StudyHours[i];
        }
        return total/5;
    };
    this.calcSalary = function(baseSalary){
        var salary;
        if (this.calcAverage()<4) {
            console.log(this.firstName+", you are not eliible to go to market. Study more");
        } else if (this.calcAverage()<=6) {
            salary = baseSalary*1.1;
            console.log(this.firstName+", your salary is: "+salary);
        } else if (this.calcAverage()<=8) {
            salary = baseSalary*1.2;
            console.log(this.firstName+", your salary is: "+salary);
        } else if (this.calcAverage()<=10) {
            salary = baseSalary*1.5;
            console.log(this.firstName+", your salary is: "+salary);
        }
    };
    this.StudyHours=Array();
    for (var i=0; i<5; i++) {
        this.StudyHours[i]=(parseInt(prompt(firstName+", how many hours did you study in week "+(i+1)+"?"))); 
    }
}

var St1 = new CybertekStudent("Ann", "Cunt", "F", 28);
console.log(St1.firstName);
console.log(St1.StudyHours);
console.log(St1.calcAverage());
St1.calcSalary(120000);

var St2 = new CybertekStudent("Mark", "Path", "M", 35);
console.log(St2.firstName);
console.log(St2.StudyHours);
console.log(St2.calcAverage());
St2.calcSalary(11000);

