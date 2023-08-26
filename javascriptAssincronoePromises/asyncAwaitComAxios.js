const axios = require("axios");

    async function fetchRepos() {
        try {
            const user = await axios.get("https://api.github.com/users/yanrobert10");
            const repos = await axios.get(user.data.repos_url)
            console.log(repos.data);
        } catch(e) {
            console.log(e)
        }
    }



fetchRepos();