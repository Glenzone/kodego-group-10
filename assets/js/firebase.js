class Firebase {
    constructor() {
        this.postData = {};
        this.url = "https://proment-b935d-default-rtdb.asia-southeast1.firebasedatabase.app/";
        this.dataset = ["companies","project-tools","projects","tools-general","users"];
        this.responseData = "";
    }

    retrieveData() {
        for (let item in this.dataset) {
            fetch(this.url + this.dataset[item] + `.json`)
            .then((response) => {
                console.log(response);
                return response.json();
            }).then((data) => {
                localStorage.setItem(this.dataset[item], JSON.stringify(data));
            });
        };
    }
    //to access data from localStorage, use JSON.parse()
    //then Object.values(data)[index]['key']

    clearData() {
        localStorage.clear();
    }

    register() {
        document.getElementById("reg-name")
    }
}

const setProfile = () => {
    details = JSON.parse(sessionStorage.currentUser);
    document.getElementById("account-image").setAttribute("src",details.avatar);
}

let firebase = new Firebase;

//Other Data
let generatedIds = [
    22164,
    30406,
    56989,
    59175,
    60531,
    62425,
    64159,
    76417,
    88745,
    92426,
    46197,
    67448,
    38645,
    55668,
    59289,
    27351,
    64598,
    67834,
    58571,
    74854
]

//will be replaced if log in is already functional
let currentUser = {
    "user-id": "U88745",
    "name": "Rodolfo T. Villegas, Jr.",
    "company": "C46197",
    "role": "Project Owner",
    "email": "rtvillegas@yahoo.com",
    "password": "PASS",
    "contact-number": "+6397823645866",
    "avatar": "./assets/01-rtvillegas.jpg"
};

let currentProjects = [
    "P67448",
    "P38645",
    "P55668"
];

firebase.clearData();
setDefaultValues = () => {
    sessionStorage.setItem("generatedIds",JSON.stringify(generatedIds));
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
    sessionStorage.setItem("auth",true);
    sessionStorage.setItem("currentProjects",JSON.stringify(currentProjects));
};
setDefaultValues();