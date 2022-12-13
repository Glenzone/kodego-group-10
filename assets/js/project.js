setProfile();

loadData = new Promise((resolve,reject) => {
    firebase.clearData()
    firebase.retrieveData();
    setTimeout(() => {
        setProfile();
        resolve();
    },1000)
});

loadData.then(() => {
    console.log("this was executed");
    details = JSON.parse(localStorage['project-tools']);
    toolsDetails = Object.values(details);
    
    tools = document.getElementById("toolsContainer")
    str =""

    let i = 0;
    let max = toolsDetails.length;
    while (i < max) {
        str += `
            <a class="col-sm-4" href="${jsonPath(toolsDetails[i],'$.link')}">
                <div class="card h-100">
                    <div class="card-body">
                    <h4 class="card-title proment-regular">${jsonPath(toolsDetails[i],'$.name')}</h4>
                    <h6 class="card-subtitle mb-2 text-muted proment-regular">${jsonPath(toolsDetails[i],'$.type')}</h6>
                    <p class="card-text proment regular">${jsonPath(toolsDetails[i],'$.short-description')}</p>
                    </div>
                </div>
            </a>`
        tools.innerHTML = str;
        i++;
    }
})