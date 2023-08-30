




const url = "http://localhost:5500/api";



function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error));
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => {
        console.log(response.data)
    })
    .catch(console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data;
        userName.textContent = data.name;
        userCity.textContent = data.city;
        userID.textContent = data.id;
        userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error));
}

function updateUser(id, updatedUser) {
    axios.put(`${url}/${id}`, updatedUser)
    .then()
    .catch(error => console.error(error)); 

}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error));
}


const updatedUser = {
    name: "Lucas Robert",
    avatar: "https://avatars.githubusercontent.com/u/92767587?v=4",
    city: "Taquari",
    
}

const newUser = {
    name: "Yan Robert",
    avatar: "https://avatars.githubusercontent.com/u/34972426?v=4",
    city: "Sobradinho",
    
}



//getUser(1);
//addNewUser(newUser);
getUsers();

getUser(2);
//updateUser(3, updatedUser);
deleteUser(4);