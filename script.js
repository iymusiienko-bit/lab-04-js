"use strict";

/*
  Лабораторна робота 4
  JavaScript: основи та логіка
  Автор: Мусієнко Іван
*/

const output = document.querySelector("#output");

const formatValue = (value) => {
  if (typeof value === "symbol") {
    return value.toString();
  }

  if (typeof value === "bigint") {
    return `${value}n`;
  }

  if (Number.isNaN(value)) {
    return "NaN";
  }

  if (value === undefined) {
    return "undefined";
  }

  if (value === null) {
    return "null";
  }

  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }

  return String(value);
};

const print = (title, value) => {
  console.log(title, value);

  output.textContent += `\n\n${title}\n${"-".repeat(title.length)}\n`;

  if (Array.isArray(value) || typeof value === "object") {
    output.textContent += `${formatValue(value)}\n`;
  } else {
    output.textContent += `${value}\n`;
  }
};

output.textContent = "";
console.clear();

console.log("Лабораторна робота 4 — JavaScript");

// =====================================================
// Завдання 1. Змінні та типи даних
// =====================================================

const stringValue = "JavaScript";
const numberValue = 42;
const booleanValue = true;
const nullValue = null;
let undefinedValue;
const symbolValue = Symbol("id");
const bigintValue = 12345678901234567890n;

const primitiveValues = [
  { name: "string", value: stringValue },
  { name: "number", value: numberValue },
  { name: "boolean", value: booleanValue },
  { name: "null", value: nullValue },
  { name: "undefined", value: undefinedValue },
  { name: "symbol", value: symbolValue },
  { name: "bigint", value: bigintValue },
];

const primitiveResult = primitiveValues
  .map(
    (item) =>
      `${item.name}: value = ${formatValue(item.value)}, typeof = ${typeof item.value}`,
  )
  .join("\n");

print("Завдання 1.1 — Примітивні типи даних", primitiveResult);

const explicitConversions = [
  `String(100) = ${String(100)}`,
  `String(true) = ${String(true)}`,
  `Number("123") = ${Number("123")}`,
  `Number("") = ${Number("")}`,
  `Number(true) = ${Number(true)}`,
  `Number(false) = ${Number(false)}`,
  `Number(null) = ${Number(null)}`,
  `Number(undefined) = ${Number(undefined)}`,
];

print("Завдання 1.2 — Явне перетворення типів", explicitConversions.join("\n"));

const falsyValues = [false, 0, "", null, undefined, NaN];
const truthyValues = ["0", [], {}, "false", 42, -1];

const booleanResults = [
  "Falsy значення:",
  ...falsyValues.map((value) => `${formatValue(value)} -> ${Boolean(value)}`),
  "",
  "Truthy значення:",
  ...truthyValues.map((value) => `${formatValue(value)} -> ${Boolean(value)}`),
];

print("Завдання 1.3 — Boolean(value), falsy та truthy", booleanResults.join("\n"));

const studentName = "Іван";
const age = 20;
const university = "ХАІ";

const templateLiteralResult = `Студент: ${studentName}, вік: ${age}, університет: ${university}`;

print("Завдання 1.4 — Template literals", templateLiteralResult);

const equalityExamples = [
  `5 == "5" -> ${5 == "5"}`,
  `5 === "5" -> ${5 === "5"}`,
  `0 == false -> ${0 == false}`,
  `0 === false -> ${0 === false}`,
  `null == undefined -> ${null == undefined}`,
  `null === undefined -> ${null === undefined}`,
];

print("Завдання 1.5 — Різниця між == та ===", equalityExamples.join("\n"));

// =====================================================
// Завдання 2. Умови та логіка
// =====================================================

function getGrade(score) {
  if (typeof score !== "number" || Number.isNaN(score) || score < 0 || score > 100) {
    return "невалідний бал";
  }

  if (score <= 59) {
    return "незадовільно";
  }

  if (score <= 74) {
    return "задовільно";
  }

  if (score <= 89) {
    return "добре";
  }

  return "відмінно";
}

function getSeasonUA(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "зима";

    case 3:
    case 4:
    case 5:
      return "весна";

    case 6:
    case 7:
    case 8:
      return "літо";

    case 9:
    case 10:
    case 11:
      return "осінь";

    default:
      return "невалідний місяць";
  }
}

const studentAge = 19;
const adultStatus = studentAge >= 18 ? "повнолітній" : "неповнолітній";

const conditionResults = [
  `getGrade(45) -> ${getGrade(45)}`,
  `getGrade(68) -> ${getGrade(68)}`,
  `getGrade(82) -> ${getGrade(82)}`,
  `getGrade(95) -> ${getGrade(95)}`,
  `getGrade(-5) -> ${getGrade(-5)}`,
  `getGrade("90") -> ${getGrade("90")}`,
  `getSeasonUA(1) -> ${getSeasonUA(1)}`,
  `getSeasonUA(4) -> ${getSeasonUA(4)}`,
  `getSeasonUA(7) -> ${getSeasonUA(7)}`,
  `getSeasonUA(10) -> ${getSeasonUA(10)}`,
  `getSeasonUA(15) -> ${getSeasonUA(15)}`,
  `Вік ${studentAge}: ${adultStatus}`,
];

print("Завдання 2 — Умови та логіка", conditionResults.join("\n"));

// =====================================================
// Завдання 3. Масиви
// =====================================================

const students = [
  {
    name: "Олена Коваленко",
    grade: 87,
    courses: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Андрій Шевченко",
    grade: 54,
    courses: ["HTML", "Git"],
  },
  {
    name: "Марія Бондар",
    grade: 92,
    courses: ["JavaScript", "React", "CSS"],
  },
  {
    name: "Іван Мусієнко",
    grade: 78,
    courses: ["JavaScript", "HTML", "Git"],
  },
  {
    name: "Дмитро Лисенко",
    grade: 66,
    courses: ["CSS", "HTML"],
  },
  {
    name: "Софія Мельник",
    grade: 98,
    courses: ["JavaScript", "Node.js", "HTML"],
  },
];

students.push({
  name: "Петро Савчук",
  grade: 73,
  courses: ["HTML", "CSS"],
});

const removedLastStudent = students.pop();

const removedMiddleStudent = students.splice(2, 1);

students.splice(2, 0, {
  name: "Катерина Іваненко",
  grade: 89,
  courses: ["JavaScript", "CSS"],
});

const firstExcellentStudent = students.find((student) => student.grade > 90);

const javascriptStudents = students.filter((student) =>
  student.courses.includes("JavaScript"),
);

const averageGrade =
  students.reduce((sum, student) => sum + student.grade, 0) / students.length;

print("Завдання 3.1 — Масив студентів після змін", students);
print("Завдання 3.2 — Видалений останній студент через pop()", removedLastStudent);
print("Завдання 3.3 — Видалений студент із середини через splice()", removedMiddleStudent);
print("Завдання 3.4 — Перший студент з оцінкою вище 90", firstExcellentStudent);
print("Завдання 3.5 — Студенти, які вивчають JavaScript", javascriptStudents);
print("Завдання 3.6 — Середня оцінка студентів", averageGrade.toFixed(2));

// =====================================================
// Завдання 4. Функції
// =====================================================

// Function Declaration
function calculateAreaDeclaration(width, height) {
  return width * height;
}

// Function Expression
const calculateAreaExpression = function (width, height) {
  return width * height;
};

// Arrow Function
const calculateAreaArrow = (width, height) => width * height;

function createCounter() {
  let value = 0;

  return {
    increment() {
      value += 1;
      return value;
    },

    decrement() {
      value -= 1;
      return value;
    },

    getValue() {
      return value;
    },
  };
}

function createUser(name, role = "student", isActive = true) {
  return {
    name,
    role,
    isActive,
  };
}

const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 0);

function printStudentInfo({ name, grade, courses }) {
  const info = `${name} має оцінку ${grade}. Курси: ${courses.join(", ")}`;
  console.log(info);
  return info;
}

const counter = createCounter();

const functionResults = [
  `Function Declaration: 5 * 4 = ${calculateAreaDeclaration(5, 4)}`,
  `Function Expression: 6 * 3 = ${calculateAreaExpression(6, 3)}`,
  `Arrow Function: 7 * 2 = ${calculateAreaArrow(7, 2)}`,
  `counter.increment() -> ${counter.increment()}`,
  `counter.increment() -> ${counter.increment()}`,
  `counter.decrement() -> ${counter.decrement()}`,
  `counter.getValue() -> ${counter.getValue()}`,
  `createUser("Іван") -> ${formatValue(createUser("Іван"))}`,
  `createUser("Олена", "admin", false) -> ${formatValue(
    createUser("Олена", "admin", false),
  )}`,
  `sum(1, 2, 3) -> ${sum(1, 2, 3)}`,
  `sum(10, 20) -> ${sum(10, 20)}`,
  `printStudentInfo(students[0]) -> ${printStudentInfo(students[0])}`,
];

print("Завдання 4 — Функції", functionResults.join("\n"));

// =====================================================
// Завдання 5. Об'єкти
// =====================================================

const studentProfile = {
  firstName: "Іван",
  lastName: "Мусієнко",
  age: 20,
  university: "ХАІ",
  grades: {
    math: 85,
    physics: 92,
    programming: 88,
    web: 95,
  },
  isActive: true,

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  getAverageGrade() {
    const grades = Object.values(this.grades);
    const total = grades.reduce((sum, grade) => sum + grade, 0);

    return total / grades.length;
  },
};

const dynamicKey = "university";

const objectAccessResults = [
  `Крапкова нотація studentProfile.firstName -> ${studentProfile.firstName}`,
  `Bracket notation studentProfile["lastName"] -> ${studentProfile["lastName"]}`,
  `Динамічний ключ studentProfile[dynamicKey] -> ${studentProfile[dynamicKey]}`,
  `getFullName() -> ${studentProfile.getFullName()}`,
  `getAverageGrade() -> ${studentProfile.getAverageGrade().toFixed(2)}`,
];

print("Завдання 5.1 — Доступ до властивостей об'єкта", objectAccessResults.join("\n"));

print("Завдання 5.2 — Object.keys()", Object.keys(studentProfile));
print("Завдання 5.3 — Object.values()", Object.values(studentProfile));
print("Завдання 5.4 — Object.entries()", Object.entries(studentProfile));

const copiedStudentProfile = {
  ...studentProfile,
  age: 21,
};

const labScore = studentProfile.grades?.lab;
const mentorName = studentProfile.mentor?.name ?? "Не призначено";

const spreadAndOptionalResults = [
  `Оригінальний age -> ${studentProfile.age}`,
  `Копія age -> ${copiedStudentProfile.age}`,
  `studentProfile.grades?.lab -> ${labScore}`,
  `studentProfile.mentor?.name ?? "Не призначено" -> ${mentorName}`,
];

print(
  "Завдання 5.5 — Spread-оператор та optional chaining",
  spreadAndOptionalResults.join("\n"),
);

// =====================================================
// Завдання 6. Ланцюжки методів масивів
// =====================================================

const products = [
  {
    name: "Ноутбук",
    price: 25000,
    category: "electronics",
    inStock: true,
    quantity: 5,
  },
  {
    name: "Смартфон",
    price: 18000,
    category: "electronics",
    inStock: true,
    quantity: 8,
  },
  {
    name: "Навушники",
    price: 2500,
    category: "electronics",
    inStock: false,
    quantity: 10,
  },
  {
    name: "Книга JavaScript",
    price: 700,
    category: "books",
    inStock: true,
    quantity: 12,
  },
  {
    name: "Рюкзак",
    price: 1600,
    category: "accessories",
    inStock: true,
    quantity: 4,
  },
  {
    name: "Клавіатура",
    price: 3200,
    category: "electronics",
    inStock: true,
    quantity: 6,
  },
  {
    name: "Миша",
    price: 1200,
    category: "electronics",
    inStock: false,
    quantity: 7,
  },
  {
    name: "Блокнот",
    price: 150,
    category: "stationery",
    inStock: true,
    quantity: 20,
  },
];

const totalInStockValue = products
  .filter((product) => product.inStock)
  .map((product) => product.price * product.quantity)
  .reduce((total, value) => total + value, 0);

const electronicsNamesByPrice = products
  .filter((product) => product.category === "electronics")
  .sort((a, b) => a.price - b.price)
  .map((product) => product.name);

const categoryCounts = products.reduce((result, product) => {
  result[product.category] = (result[product.category] ?? 0) + 1;
  return result;
}, {});

const studentsByGrade = [...students].sort((a, b) => b.grade - a.grade);

const studentsByName = [...students].sort((a, b) =>
  a.name.localeCompare(b.name, "uk"),
);

print("Завдання 6.1 — Масив товарів", products);
print(
  "Завдання 6.2 — Загальна вартість товарів у наявності",
  `${totalInStockValue} грн`,
);
print(
  "Завдання 6.3 — Electronics від дешевшого до дорожчого",
  electronicsNamesByPrice,
);
print("Завдання 6.4 — Кількість товарів за категоріями", categoryCounts);
print("Завдання 6.5 — Студенти за оцінкою", studentsByGrade);
print("Завдання 6.6 — Студенти за ім'ям", studentsByName);

// =====================================================
// Завдання 7. Рядки
// =====================================================

function capitalize(str) {
  if (str.length === 0) {
    return "";
  }

  const lowerCaseString = str.toLowerCase();

  return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
}

function countWords(str) {
  const trimmedString = str.trim();

  if (trimmedString.length === 0) {
    return 0;
  }

  return trimmedString.split(/\s+/).length;
}

function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  return `${str.slice(0, maxLength)}...`;
}

function isValidEmail(email) {
  if (!email.includes("@")) {
    return false;
  }

  const firstAtIndex = email.indexOf("@");
  const lastAtIndex = email.lastIndexOf("@");

  if (firstAtIndex !== lastAtIndex) {
    return false;
  }

  if (firstAtIndex === 0) {
    return false;
  }

  const dotAfterAtIndex = email.indexOf(".", firstAtIndex + 1);

  if (dotAfterAtIndex <= firstAtIndex + 1) {
    return false;
  }

  const lastDotIndex = email.lastIndexOf(".");
  const charactersAfterLastDot = email.length - lastDotIndex - 1;

  return charactersAfterLastDot >= 2;
}

const stringResults = [
  `capitalize("javaScript") -> ${capitalize("javaScript")}`,
  `capitalize("hello world") -> ${capitalize("hello world")}`,
  `capitalize("") -> ${capitalize("")}`,
  `countWords("JavaScript це круто") -> ${countWords("JavaScript це круто")}`,
  `countWords(" пробіли між словами ") -> ${countWords(" пробіли між словами ")}`,
  `countWords("") -> ${countWords("")}`,
  `truncate("Це довгий текст для прикладу", 15) -> ${truncate(
    "Це довгий текст для прикладу",
    15,
  )}`,
  `truncate("Короткий", 20) -> ${truncate("Короткий", 20)}`,
  `isValidEmail("user@example.com") -> ${isValidEmail("user@example.com")}`,
  `isValidEmail("invalid-email") -> ${isValidEmail("invalid-email")}`,
  `isValidEmail("@example.com") -> ${isValidEmail("@example.com")}`,
  `isValidEmail("user@.com") -> ${isValidEmail("user@.com")}`,
  `isValidEmail("user@example.c") -> ${isValidEmail("user@example.c")}`,
];

print("Завдання 7 — Рядки", stringResults.join("\n"));