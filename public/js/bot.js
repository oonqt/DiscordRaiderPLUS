const { ipcRenderer } = require("electron");

document.getElementById("dmAll").addEventListener("click", () => {
    ipcRenderer.send("command", "dmAll");
});

document.getElementById("spamEveryone").addEventListener("click", () => {
    ipcRenderer.send("command", "spamEveryone");    
});

document.getElementById("kickAll").addEventListener("click", () => {
    ipcRenderer.send("command", "kickAll");

});

document.getElementById("banAll").addEventListener("click", () => {
    ipcRenderer.send("command", "banAll");    
});

document.getElementById("status").addEventListener("submit", e => {
    e.preventDefault();

    let activityType = document.getElementById("activityType").value;
    let activityName = document.getElementById("activityName").value;

    ipcRenderer.send("setActivity", { activityType, activityName });
});