// CODE here for your Lambda Classes
class Person {
    constructor(name, age, location, gender) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
    }

    speak() {
        return `{Hello my name is ${this.name}, I am from ${this.location}.}`;
    }
}

class Instructor {
    constructor(name, age, location, gender, specialty, favLanguage, catchPhrase) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return `{Today we are learning about ${this.subject}.}`;
    }
    grade(student, subject){
        return `{$student.name} receives a perfect score on {$subject}`;
    }
}

console.log(new Instructor())