
const url = "http://localhost:5500/api";


function getUsers() { // GET
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error));
}


function getUser(id) { //GET
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name;
        userCity.textContent = data.city;
        userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error))
}

function addUser(newUser) { // POST
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error));
}

function updatedUser(updateUser, id) { // PUT
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })


}

function deleteUser(id) { // DELETE
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

}

const newUser = {
    name: "Yan Robert",
    avatar:"https://avatars.githubusercontent.com/u/34972426?v=4",
    city: "Sobradinho"
}

const updateUser = { 
    name:"Lucas Robert",
    avatar:"https://avatars.githubusercontent.com/u/92767587?v=4",
    city:"Taquari"
}
//addUser(newUser);


updatedUser(updateUser)
getUser(2)
getUsers()
deleteUser(3)