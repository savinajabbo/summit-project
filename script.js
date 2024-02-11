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
