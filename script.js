// ACTIVITY 1: Alert Box (Page 5)
alert("Hello world!");

// ACTIVITY 2: Selecting HTML Elements (Pages 19-22)
const paragraph1 = document.getElementById("para1");
const paragraph2 = document.getElementById("para2");
const paragraph3 = document.getElementById("para3");
const paragraph4 = document.getElementById("para4");

console.log("Selected Elements:");
console.log(paragraph1);
console.log(paragraph2);
console.log(paragraph3);
console.log(paragraph4);

// Optional: querySelector example
const firstParagraph = document.querySelector("#para1");
console.log("Using querySelector:", firstParagraph);

// Optional: querySelectorAll example
const allParagraphs = document.querySelectorAll("p");
console.log("All paragraphs using querySelectorAll:", allParagraphs);

// Your existing Activity 3 code (JSON courses)
let allCourses = [];
const courseList = document.getElementById("course-list");
const githubUrl = "https://Katoyax.github.io/courses.json";

function displayCourses(courses) {
    courseList.innerHTML = "";
    for(let i = 0; i < courses.length; i++) {
        const course = courses[i];
        const listItem = document.createElement("li");
        listItem.textContent = course.year_level + " Year - " + 
                              course.sem + " Sem: " + 
                              course.code + " - " + 
                              course.description + " (" + 
                              course.credit + " units)";
        courseList.appendChild(listItem);
    }
}

fetch(githubUrl)
    .then(response => response.json())
    .then(data => {
        allCourses = data.courses;
        displayCourses(allCourses);
    })
    .catch(error => {
        console.log("Error loading courses:", error);
    });