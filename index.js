const app = "I don't do much.";

//d4d1108214c82522529348fc35fa0c3a2ded2fcf


const token = 'd4d1108214c82522529348fc35fa0c3a2ded2fcf'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
