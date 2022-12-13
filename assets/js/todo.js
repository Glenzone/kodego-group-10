class ToDo {
    constructor() {
        this.listOfDoneToDos = ["Site Survey","Pre-Engineering Studies","Conceptual Design"];
        this.listOfToDos = ["Approval of Design Concepts","Construction Project Estimate"];
    }

    markDone(nameOfTodo) {
        this.listOfToDos = this.listOfToDos.filter(e => e !== nameOfTodo);
        this.listOfDoneToDos.push(nameOfTodo);
        let str = nameOfTodo;
        str = str.replace(/\s/g, '');
        let remove = document.querySelector(`li[taskName='${str}']`);
        remove.parentElement.removeChild(remove);
        let add = document.getElementById("doneToDos");
        let newTask = `
                    <li class="list-group-item border-0 bg-proment pt-0 pb-0 ms-3" taskName="${str}">
                        <input type="checkbox" checked id="${str}" class="form-check-input me-1" onclick="toDo.monitorChangesOnTasks('${nameOfTodo}','${str}')">
                        <label class="form-check-label h5">${nameOfTodo}</label>
                    </li>
        `;
        let doneToDos = add.innerHTML;
        doneToDos += newTask;
        add.innerHTML = doneToDos;
        this.updateCounter();
    }

    unMarkDone(nameOfTodo) {
        this.listOfDoneToDos = this.listOfDoneToDos.filter(e => e !== nameOfTodo);
        this.listOfToDos.push(nameOfTodo);
        let str = nameOfTodo;
        str = str.replace(/\s/g, '');
        let remove = document.querySelector(`li[taskName='${str}']`);
        remove.parentElement.removeChild(remove);
        let add = document.getElementById("unfinishedToDos");
        let newTask = `
                    <li class="list-group-item border-0 bg-proment pt-0 pb-0 ms-3" taskName="${str}">
                        <input type="checkbox" checked id="${str}" class="form-check-input me-1" onclick="toDo.monitorChangesOnTasks('${nameOfTodo}','${str}')">
                        <label class="form-check-label h5">${nameOfTodo}</label>
                    </li>
        `;
        let unfinishedToDos = add.innerHTML;
        unfinishedToDos += newTask;
        add.innerHTML = unfinishedToDos;
        this.updateCounter();
    }

    initToDo() {
        let newToDo = document.getElementById("unfinishedToDos");
        let newTask = '';
        let i = 0;
        let max = this.listOfToDos.length;

        while (i < max) {
            let full = this.listOfToDos[i];
            let less = this.listOfToDos[i].replace(/\s/g, '');
            newTask += `
                    <li class="list-group-item border-0 bg-proment pt-0 pb-0 ms-3" taskName="${less}">
                        <input type="checkbox" id="${less}" class="form-check-input me-1" onclick="toDo.monitorChangesOnTasks('${full}','${less}')">
                        <label class="form-check-label h5">${full}</label>
                    </li>`   
            newToDo.innerHTML = newTask;
            i++;
        };
        this.updateCounter();
    }

    initDoneTodo() {
        let doneToDo = document.getElementById("doneToDos");
        let newTask = '';
        let i = 0;
        let max = this.listOfDoneToDos.length;

        while (i < max) {
            let full = this.listOfDoneToDos[i];
            let less = this.listOfDoneToDos[i].replace(/\s/g, '');
            newTask += `
                    <li class="list-group-item border-0 bg-proment pt-0 pb-0 ms-3" taskName="${less}">
                        <input type="checkbox" checked id="${less}" class="form-check-input me-1" onclick="toDo.monitorChangesOnTasks('${full}','${less}')">
                        <label class="form-check-label h5">${full}</label>
                    </li>`   
            doneToDo.innerHTML = newTask;
            i++;
        };
        this.updateCounter();
    }

    addTask() {
        let newTaskName = document.getElementById("toDoName").value
        this.listOfToDos.push(newTaskName);
        this.initToDo();
        newTaskName = '';
        hideToDoCreator();
        this.updateCounter();
    }

    monitorChangesOnTasks(full,less) {
        let checked = document.getElementById(less).checked;
        if(checked) {
            this.markDone(full);
        } else {
            this.unMarkDone(full);
            document.getElementById(less).removeAttribute("checked");
        }
    }

    updateCounter() {
        let done = this.listOfDoneToDos.length;
        let unfinished = this.listOfToDos.length;
        let counter = `${unfinished}/${done+unfinished}`;
        document.getElementById("progress").innerHTML = counter;
    }
}

let toDo = new ToDo;
toDo.initToDo();
toDo.initDoneTodo();

function unHideToDoCreator() {
    toDoCreator = document.getElementById("toDoCreator");
    toDoCreator.removeAttribute("style");
    showButton = document.getElementById("newTodo");
    showButton.setAttribute("style","display: none");
}

function hideToDoCreator() {
    showButton = document.getElementById("newTodo");
    showButton.removeAttribute("style");
    toDoCreator = document.getElementById("toDoCreator");
    toDoCreator.setAttribute("style","display: none");
}



