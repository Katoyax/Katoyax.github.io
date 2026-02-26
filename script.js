// ACTIVITY 1: Fetching and displaying JSON data (Page 29)
const courseList = document.getElementById("course-list");
const githubUrl = "https://Katoyax.github.io/courses.json";

fetch(githubUrl)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.courses.length; i++) {
            const course = data.courses[i];
            const listItem = document.createElement("li");
            listItem.textContent = course.year_level + " Year - " + 
                                  course.sem + " Sem: " + 
                                  course.code + " - " + 
                                  course.description + " (" + 
                                  course.credit + " units)";
            courseList.appendChild(listItem);
        }
    })
    .catch(error => {
        console.log("Error loading courses:", error);
        alert("Error loading courses. Make sure courses.json is uploaded!");
    });