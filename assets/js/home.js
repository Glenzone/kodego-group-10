setCompanyName = () => {
    details = JSON.parse(localStorage.companies);
    document.getElementById("projectName").innerHTML = jsonPath(details,"$.company-name");
};

loadData = new Promise((resolve,reject) => {
    firebase.retrieveData();
    setTimeout(() => {
        setProfile();
        setCompanyName();
        document.getElementById("spinner").setAttribute("style","display: none");
        document.getElementById("navbar").setAttribute("style","background-color: #b2c5fb");
        document.getElementById("navbar-container").removeAttribute("style");
        document.getElementById("projects").setAttribute("style", "display: block");
        // document.getElementById("newProject").setAttribute("style", "display: block");
        document.getElementById("projectName").setAttribute("style", "display: block");
        resolve();
    },3000)
});

loadData.then(() => {
    console.log("this was executed");
    details = JSON.parse(localStorage.projects);
    projectDetails = Object.values(details);
    
    project = document.getElementById("projectsContainer")
    str =""

    let i = 0;
    let max = projectDetails.length;

    while (i < max) {
        str += `
            <a class="col-sm-4" href="./project.html" company-id="${jsonPath(projectDetails[i],"$.project-id")}">
                <div class="card h-100">
                    <div class="card-body">
                    <h4 class="card-title proment-regular">${jsonPath(projectDetails[i],"$.project-name")}</h4>
                    <h6 class="card-subtitle mb-2 text-muted proment-regular">Project</h6>
                    <p class="card-text proment regular">${jsonPath(projectDetails[i],"$.description")}</p>
                    </div>
                </div>
            </a>`   
        project.innerHTML = str;
        i++;
    }
})



