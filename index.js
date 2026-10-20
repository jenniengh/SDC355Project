// project data
const PROJECTS = [
    {id: 1, name: 'Project 1', image: 'images/project1.jpg', link: 'https://github.com/jenniengh/LaunchDay'},
    {id: 2, name: 'Project 2', image: 'images/project2.jpg', link: 'https://github.com/jenniengh/Glassworks'},
    {id: 3, name: 'Project 3', image: 'images/project3.jpg', link: 'https://github.com/jenniengh/Trail'},
];

// skills data
const SKILLS = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "GitHub",
];

// prompt user to enter their name
let user = prompt("Please enter your name:", "Guest");

// check if user entered a name or clicked cancel
if (user !== null && user !== "") {
    document.getElementById("greetings").textContent = `Hello, ${user}!`;
}
else {
    document.getElementById("greetings").textContent = `Hello, stranger!`;
}

// use forEach() to display skills as a bulleted list in the About section.
const skillsList = document.getElementById("skills-list");
SKILLS.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// select all project divs and count them
const projectList = document.querySelectorAll(".project-grid div");
const projectCount = projectList.length;

// select featured content divs
const featuredResources = document.getElementById("featured-resources");
const featuredProjects = document.getElementById("featured-projects");

// if fewer than 3 projects, show both
if (projectCount < 3) {
    featuredResources.style.display = "block";
    featuredProjects.style.display = "block";
}

// otherwise, show personal projects and hide university resources
else {
    featuredResources.style.display = "none";
    featuredProjects.style.display = "block";
}

// populate projects
function populateProjects() {
    const projectGrid = document.getElementById("project-grid");
    PROJECTS.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <a href="${project.link}" target="_blank">
                <img src="${project.image}" alt="${project.name}">
            </a>
        `;
        projectGrid.appendChild(projectElement);
    });
}

populateProjects();

// toggle modes
const toggleSwitch = document.querySelector('#dark-mode-toggle');
const toggleLabel = document.querySelector('#toggle-label');

// Handle theme swapping states
function switchTheme(event) {
    if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleLabel.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'dark');
    } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleLabel.textContent = 'Light Mode';
    localStorage.setItem('theme', 'light');
    }    
}

// Monitor input modifications
toggleSwitch.addEventListener('change', switchTheme, false);

// Read stored profile properties on initialization
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (savedTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleLabel.textContent = 'Dark Mode';
    }
}

/* 
Add Interactivity to the Form Submit Button

Select the Submit button from your Contact form using querySelector() or getElementById().

Add an event listener using addEventListener("click", ...).

When the button is clicked:

Prevent the form from refreshing the page using event.preventDefault().

Display a confirmation message using alert(), such as "Thank you, [name], your message has been sent!", using the user's input from the form.
*/

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const nameInput = document.querySelector('#name');
    const name = nameInput.value;
    // only submit if all fields are filled
    if (!name || !document.querySelector('#email').value || !document.querySelector('#subject').value || !document.querySelector('#message').value) {
        alert('Please fill in all fields before submitting the form.');
        return;
    }
    else {
        alert(`Thank you, ${name}, your message has been sent!`);
        // clear the form after submission
        document.querySelector('#contact-form').reset();
    }
    
});

