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

console.log(projects)

//let branch = document.getElementById("branch")
let parent = document.getElementById("title");

//branch.style.width = projects.length * 16



for(let i = 0; i < projects.length; i++){
        var temp = document.createElement('branch');
        temp.innerText = projects[i]["name"];
        console.log(temp);
        temp.style.width = projects[i]["name"].length*20;
        temp.style.backgroundColor = "#7a522f";
        temp.style.height = 16;
        temp.style.padding = 10;
        parent.appendChild(temp);

        //temp.classList.add("branch");
    }
