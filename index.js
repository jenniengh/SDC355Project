// project data
const PROJECTS = [
  {
    id: 1,
    name: "Project 1",
    image: "images/project1.jpg",
    link: "https://github.com/jenniengh/LaunchDay",
  },
  {
    id: 2,
    name: "Project 2",
    image: "images/project2.jpg",
    link: "https://github.com/jenniengh/Glassworks",
  },
  {
    id: 3,
    name: "Project 3",
    image: "images/project3.jpg",
    link: "https://github.com/jenniengh/Trail",
  },
];

// skills data
const SKILLS = ["HTML", "CSS", "JavaScript", "React", "GitHub"];

// prompt user to enter their name
// let user = prompt("Please enter your name:", "Guest");

// check if user entered a name or clicked cancel
// if (user !== null && user !== "") {
//   document.getElementById("greetings").textContent = `Hello, ${user}!`;
// } else {
//   document.getElementById("greetings").textContent = `Hello, stranger!`;
// }

// 4.8: Style the modal to overlay the page with a slight transparency effect on the background
const modal = document.getElementById("welcome-modal");
const closeModalBtn = document.getElementById("close-modal-btn");

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// use forEach() to display skills as a bulleted list in the About section.
const skillsList = document.getElementById("skills-list");
SKILLS.forEach((skill) => {
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
  PROJECTS.forEach((project) => {
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

// 3.9: add new message to Projects section
function addMsg() {
  const projectGrid = document.getElementById("projects");
  const newMsg = document.createElement("p");
  newMsg.textContent = `This section will be updated as more projects are created.`;
  projectGrid.appendChild(newMsg);
}

addMsg();

// 3.9: modify existing elements with selectors
const greetings = document.getElementById("greetings");

if (greetings) {
  greetings.style.color = "var(--track-color)";
  greetings.style.fontWeight = "700";
  greetings.style.fontSize = "30px";
}

// 3.9: modify existing elements with selectors (cont.)
const about = document.getElementById("about");

if (about) {
  about.style.border = "2px solid var(--heading-color)";
}

// toggle modes
const toggleSwitch = document.querySelector("#dark-mode-toggle");
const toggleLabel = document.querySelector("#toggle-label");

// handle theme swapping states
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleLabel.textContent = "Dark Mode";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleLabel.textContent = "Light Mode";
    localStorage.setItem("theme", "light");
  }
}

// monitor input modifications
toggleSwitch.addEventListener("change", switchTheme, false);

// read stored profile properties on initialization
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (savedTheme === "dark") {
    toggleSwitch.checked = true;
    toggleLabel.textContent = "Dark Mode";
  }
}

// 3.9: add a timed confirmation for form submissions
const contactForm = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-button");
contactForm.addEventListener("submit", function (event) {
  // prevent default form submission
  event.preventDefault();

  // get form values
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const subject = document.querySelector("#subject").value.trim();
  const message = document.querySelector("#message").value.trim();

  // validate all fields are filled
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields before submitting the form.");
    return;
  }

  // create a status message dynamically
  let statusMessage = document.querySelector("#form-status");

  if (!statusMessage) {
    statusMessage = document.createElement("p");
    statusMessage.id = "form-status";
    contactForm.appendChild(statusMessage);
  }

  // show loading message
  statusMessage.textContent = "Sending message...";
  statusMessage.className = "loading-message";

  // disable submit button while processing
  submitButton.disabled = true;

  // display confirmation after 2 seconds
  setTimeout(function () {
    statusMessage.textContent = "Message sent successfully!";
    statusMessage.className = "success-message";

    contactForm.reset();
    submitButton.disabled = false;
  }, 3000);
});

// old code for submit button

// add interactivity to submit button
// const submitButton = document.querySelector('#submit-button');

// submitButton.addEventListener('click', function(event) {
//     event.preventDefault();

//     const nameInput = document.querySelector('#name');
//     const name = nameInput.value;
//     // only submit if all fields are filled
//     if (!name || !document.querySelector('#email').value || !document.querySelector('#subject').value || !document.querySelector('#message').value) {
//         alert('Please fill in all fields before submitting the form.');
//         return;
//     }
//     else {
//         alert(`Thank you, ${name}, your message has been sent!`);
//         // clear the form after submission
//         document.querySelector('#contact-form').reset();
//     }

// });
