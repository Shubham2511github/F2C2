const usersList = [
    {
        id: 1,
        name: "Shubham",
        age: 24,
        profession: "developer"
    },
    {
        id: 2,
        name: "Pankaj",
        age: 23,
        profession: "developer"
    },
    {
        id: 3,
        name: "Rohit",
        age: 34,
        profession: "admin"
    },
    {
        id: 4,
        name: "Virat",
        age: 30,
        profession: "admin"
    }
]
const filterButton = document.getElementById("filter");
const select = document.getElementsByTagName("select")[0];
const usersContainer = document.getElementById("users-container");
const form = document.getElementById("user-form");


function filterUsers() {
    const selectedvalue = select.value;
    if (!selectedvalue) {
        alert("Please select the Profession");
        return;
    }
    // fliter user and append them in container
    usersContainer.innerHTML = "";

    const result = usersList.filter((user) => {
        if (user.profession === selectedvalue) return true;
        return false;
    })

    /*
    <div class="user-card">
                <p>1.</p>
                <p>Name: john</p>
                <p>Profession: developer</p>
                <p>age</p>

            </div>
    */
    result.forEach((user, index) => {
        const divElement = document.createElement("div");
        divElement.className = "user-card";
        const p1 = document.createElement("p");
        p1.innerText = (index + 1) + ".";
        const p2 = document.createElement("p");
        p2.innerText = "Name: " + user.name;
        const p3 = document.createElement("p");
        p3.innerText = "Profession: " + user.profession;
        const p4 = document.createElement("p");
        p4.innerText = "Age: " + user.age;
        divElement.appendChild(p1);
        divElement.appendChild(p2);
        divElement.appendChild(p3);
        divElement.appendChild(p4);
        usersContainer.appendChild(divElement);
    })
}
function addNewUser(e) {
    e.preventDefault();
    const user = {
        name: e.target["name"].value,
        profession: e.target["profession"].value,
        age: e.target["age"].value
    }
    usersList.push(user);
    //filterUsers();
}
filterButton.addEventListener("click", filterUsers)
form.addEventListener("submit", addNewUser)