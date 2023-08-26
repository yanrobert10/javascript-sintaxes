fetch("https://api.github.com/users/yanrobert10")
.then( response => response.json())
.then( data => fetch(data.repos_url))
.then( res => res.json())
.then( d => console.log(d))
.catch( erro => console.log(erro));