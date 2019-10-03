const { ipcRenderer } = require("electron");

document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();

    let token = document.getElementById("token").value;
    
    ipcRenderer.send("login", token);
});