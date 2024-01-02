let globalId = 1;
function Addtodo() {
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const parent = document.getElementById("todo-lists")
    if (!(title.value.trim() == "" || description.value.trim() == "")){
        parent.appendChild(createChild(title.value, description.value, globalId++))
    }
    title.value = "";
    description.value = "";
}

function createChild(title, description, id) {
    const child = document.createElement("div");
    const grandChild1 = document.createElement("span");
    const grandChild2 = document.createElement("span");
    const grandChild3 = document.createElement("button");
    grandChild1.innerHTML = title;
    grandChild2.innerHTML = description;
    grandChild3.innerHTML = "Done";
    grandChild3.setAttribute("onclick", `markAsDone(${id})`);
    grandChild3.setAttribute("class", "done-btn");
    grandChild2.setAttribute("class", "description")
    child.append(grandChild1);
    child.append(grandChild2);
    child.append(grandChild3);
    child.setAttribute("id", id);
    child.setAttribute("class", "child");
    return child;
}

function markAsDone(id) {
    const element = document.getElementById(id);
    element.innerHTML = "";
    element.style.borderBottom = "none";
    element.style.padding = "0px";
}