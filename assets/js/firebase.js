class Firebase {
    constructor() {
        this.postData = {};
        this.url = "https://proment-b935d-default-rtdb.asia-southeast1.firebasedatabase.app/";
        this.dataset = ["projects","users","company-details","tools-general","project-tools"];
        this.responseData = "";
    }

    retreiveData() {
        for (let item in this.dataset) {
            fetch(this.url + item + `.json`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                localStorage.setItem(item, JSON.stringify(data));
            })
        }
    }
    //to access data from localStorage, use JSON.parse()
    //then Object.values(data)[index]['key']

    register() {
        document.getElementById("reg-name")
    }
}

let firebase = new Firebase;
firebase.retreiveData;