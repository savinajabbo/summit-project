// let projects = [
//     {
//         "name": "Reva's Pretzel Factory",
//         "hclubber": "Reva",
//         "description": "",
//         "url": ""
//     },
//     {
//         "name": "We can build it",
//         "hclubber": "Bri",
//         "description": "",
//         "url": ""
//     },
//     {
//         "name": "Pickles",
//         "hclubber": "Bri",
//         "description": "",
//         "url": ""
//     }
// ]

// console.log(projects)

// let parent = document.getElementById("tree");

// for (let i = 0; i < projects.length; i++) {
//     var temp = document.createElement('branch');
//     temp.innerText = projects[i]["name"];
//     console.log(temp);
//     temp.style.width = projects[i]["name"].length * 20;
//     temp.style.backgroundColor = "#7a522f";
//     temp.style.height = 16;
//     temp.style.padding = 10;
//     parent.appendChild(temp);
// }

document.addEventListener('DOMContentLoaded', function () {
    // Load projects from localStorage on page load
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];

    // Display saved projects on the tree
    savedProjects.forEach(function (projectData) {
        displayProject(projectData);
    });
});

function showProjectPopup() {
    document.getElementById('projectPopup').style.display = 'block';
}

function addProject() {
    const projectName = document.getElementById('projectName').value;
    const userName = document.getElementById('userName').value;
    const projectDescription = document.getElementById('projectDescription').value;

    const projectData = {
        projectName: projectName,
        userName: userName,
        projectDescription: projectDescription
    };

    saveProjectToLocalStorage(projectData);
    displayProject(projectData);

    document.getElementById('projectPopup').style.display = 'none';
}

function displayProject(projectData) {
    const tree = document.getElementById('tree');
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.title = `${projectData.projectName} by ${projectData.userName}\n${projectData.projectDescription}`;

    // Hardcoded positions for demonstration purposes
    const hardcodedPositions = [
        { x: 50, y: 50 },
        { x: 150, y: 100 },
        { x: 250, y: 150 },
    ];

    // Use the hardcoded positions
    const positionIndex = Math.floor(Math.random() * hardcodedPositions.length);
    const xPosition = hardcodedPositions[positionIndex].x;
    const yPosition = hardcodedPositions[positionIndex].y;

    circle.style.left = `${xPosition}px`;
    circle.style.top = `${yPosition}px`;

    // Add event listeners for hover events
    circle.addEventListener('mouseover', function () {
        // Scale up the circle on hover
        circle.style.transform = 'scale(4)';
    });

    circle.addEventListener('mouseout', function () {
        // Reset the scale on mouseout
        circle.style.transform = 'scale(1)';
    });

    tree.appendChild(circle);

    // Save the circle information to localStorage
    saveCircleToLocalStorage({
        x: xPosition,
        y: yPosition,
        title: circle.title
    });
}

function saveProjectToLocalStorage(projectData) {
    // Retrieve existing projects from localStorage
    const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];

    // Add the new project to the array
    existingProjects.push(projectData);

    // Save the updated projects array back to localStorage
    localStorage.setItem('projects', JSON.stringify(existingProjects));
}

function saveCircleToLocalStorage(circleData) {
    // Retrieve existing circles from localStorage
    const existingCircles = JSON.parse(localStorage.getItem('circles')) || [];

    // Add the new circle data to the array
    existingCircles.push(circleData);

    // Save the updated circles array back to localStorage
    localStorage.setItem('circles', JSON.stringify(existingCircles));
}


function resetTree() {
    // Clear both projects and circles from localStorage
    localStorage.removeItem('projects');
    localStorage.removeItem('circles');

    // Clear the tree element in the DOM
    const tree = document.getElementById('tree');
    tree.innerHTML = '';

    // Re-add the "Add Project" button
    const addProjectBtn = document.createElement('button');
    addProjectBtn.id = 'addProjectBtn';
    addProjectBtn.innerText = 'Add Project';
    addProjectBtn.onclick = showProjectPopup;
    parent.appendChild(addProjectBtn);
}
