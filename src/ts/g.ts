/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

// Done!
function getLength(jumpings: number[]): number {
  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump
  );
}

/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */


// Done!
class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {
  if (student.name == "Sebastian") {
    student.passed = student.handedInOnTime ? true: false;
  }

  if (student.passed) {
    return "VG";
  } else {
    return "IG";
  }
}

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

// Done!
class Temp {
  constructor(public cityName: string, public when: Date, public valueTemp: number) {}
}

function averageWeeklyTemperature(temperatures: Temp[]) {
  let averageTemp = 0;
  const ONE_WEEK = 604800000;
  const WEEK_DAYS = 7;

  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i].cityName === "Stockholm") {
      if (temperatures[i].when.getTime() > Date.now() - ONE_WEEK ) {
        averageTemp += temperatures[i].valueTemp;
      }
    }
  }

  return averageTemp / WEEK_DAYS;
}

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */

function showProduct(
  name: string,
  price: number,
  image: string,
  parent: HTMLElement,
  amount?: number,
  description?: string
) {
    let container = document.createElement("div");
    let title = document.createElement("h4");
    let pris = document.createElement("strong");
    let imageTag = document.createElement("img");

    title.innerHTML = name;
    pris.innerHTML = price.toString();
    imageTag.src = image;

    container.appendChild(title);
    container.appendChild(imageTag);
    container.appendChild(pris);
    parent.appendChild(container);
  }

/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */

function presentStudents(students: Student[]) {
  //gör dom:en innnan looparna - klart
  //vad mer ???
  for (const student of students) {
    let container = document.createElement("div");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    if (student.handedInOnTime) {      
      checkbox.checked = true;
      container.appendChild(checkbox);
      let listOfStudents = document.querySelector("ul#passedstudents");
      listOfStudents?.appendChild(container);

    } else {
      checkbox.checked = false;
      container.appendChild(checkbox);
      let listOfStudents = document.querySelector("ul#failedstudents");
      listOfStudents?.appendChild(container);
    }
  }
}

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */

// Done!
function concatenateStrings() {
  let stringLists: string[] = ["Lorem", "ipsum", "dolor", "sit", "amet"];
 
  return stringLists.join(" ");
}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/

//Done!
class User {
  constructor(
    public name: string,
    public birthday: Date,
    public email: string,
    public password: string,
  ) {}

  calculateUserAge(): number {
    
    let ageDiff = Date.now() - this.birthday.getTime();
    let ageDate = new Date(ageDiff);
    let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    return userAge
  
  }
}

function createUser(newUser: User) {

  // Validation
  let newUserAge = newUser.calculateUserAge();

  if (newUserAge > 20) {
    // Logik för att skapa en användare
  } else {
    return "Du är under 20 år";
  }
}
