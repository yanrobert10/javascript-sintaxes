const axios = require("axios");

axios
.get("https://api.github.com/users/yanrobert10")
.then(response => axios.get(response.data.repos_url))
.then(repos => console.log(repos.data))
.catch(error => console.log(error));