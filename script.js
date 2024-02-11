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

let projects = [
    {
        "name": "Reva's Pretzel Factory",
        "hclubber": "Reva",
        "description": "",
        "url": ""

    },
    {
        "name": "We can build it",
        "hclubber" : "Bri",
        "description": "",
        "url": ""
    },
    {
        "name": "Pickles",
        "hclubber" : "Bri",
        "description": "",
        "url": ""
    }

]
//prints on the console any info
console.log(projects) //prints all info from arrays

//let branch = document.getElementById("branch")
let parent = document.getElementById("title"); // combines javascript with html

//branch.style.width = projects.length * 16

var br = document.createElement('br');
parent.appendChild(br);



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



