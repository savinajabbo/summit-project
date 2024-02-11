
// let projects = [
//     {
//         "name": "Reva's Pretzel Factory",
//         "hclubber": "Reva",
//         "description": "",
//         "url": ""

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

// document.addEventListener('DOMContentLoaded', function () {
//     // Load projects from localStorage on page load
//     const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
// }
// //prints on the console any info
// console.log(projects) //prints all info from arrays

// //let branch = document.getElementById("branch")
// let parent = document.getElementById("title"); // combines javascript with html

//     // Display saved projects on the tree
//     savedProjects.forEach(function (projectData) {
//         displayProject(projectData);
//     });
// });

var numBranches = 1
var branches = []
function getDate(){
    var currentDate = new Date();
    return currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
}
class Branch {
    constructor(name, children = [], parent = null) {
      this.name = name;
      this.time = getDate();
      this.children = children; 
      this.parent = parent;
      this.changes = 1;
    }
    
    
    add_branch(child) {
      this.children.push(child);
      child.parent = this; 
      if(this.parent==null){
        this.changes++;
      }
    }
}

function showProjectPopup() {
    document.getElementById('projectPopup').style.display = 'block';
}

function addProject() {
    add_branch()
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
        { x: 300, y: 65 },
        { x: 400, y: 70 },
        { x: 700, y: 80 },
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

var br = document.createElement('br');
parent.appendChild(br);

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

/*const mainBranch = new Branch("Main Branch");
const childBranch1 = new Branch("Child Branch 1");
const childBranch2 = new Branch("Child Branch 2");

mainBranch.add_branch(childBranch1);
childBranch1.add_branch(childBranch2);
console.log(mainBranch)*/

for(let i = 0; i < projects.length; i++){
        var temp = document.createElement('branch');
        temp.innerText = projects[i]["name"]; //text to be displayed
        console.log(temp); //printing the variables
        temp.style.width = projects[i]["name"].length*40; //setting the width of the branch based on the length of the name variable
        temp.style.backgroundColor = "#7a522f";
        temp.style.height = 16;
        //temp.document.querySelector("#branch");

        var breaker = document.createElement('br');
        var breake = document.createElement('br');

        parent.appendChild(temp); //in conjunction with line 27
        parent.appendChild(breaker);
        parent.appendChild(breake);
        //temp.classList.add("branch");

        
    }
    function add_branch() {
        branches.push(new Branch(document.getElementById('projectName').value,"", document.getElementById("userName").value, document.getElementById("projectDescription").value ));
    
        console.log(branches);
        var branch_img = document.createElement('img');
        if (numBranches % 2 == 0){
            branch_img.src = './images/tree-branch-left.png';
        }
        else {
            branch_img.src = './images/tree-branch-right.png';
        }
        var src = document.getElementById("br");
        src.appendChild(branch_img)
    } 