// project data
const PROJECTS = [
    {id: 1, name: 'Project 1', image: 'images/project1.jpg', link: 'https://github.com/jenniengh/LaunchDay'},
    {id: 2, name: 'Project 2', image: 'images/project2.jpg', link: 'https://github.com/jenniengh/Glassworks'},
    {id: 3, name: 'Project 3', image: 'images/project3.jpg', link: 'https://github.com/jenniengh/Trail'},
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

// populate projects
function populateProjects() {
    const projectGrid = document.getElementById("project-grid");
    PROJECTS.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <img src="${project.image}" alt="${project.name}">
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectGrid.appendChild(projectElement);
    });
}

populateProjects();