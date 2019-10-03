const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const { Client } = require("discord.js");
const path = require("path");

let mainWindow;

const client = new Client();

function startApp() {
    mainWindow = new BrowserWindow({
        width: 550,
        height: 280,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile(path.join("public", "login.html"));
}

client.once("ready", async () => {
  await mainWindow.loadFile(path.join("public", "bot.html"));
  mainWindow.setSize(700, 450);
});

ipcMain.on("login", (_, token) => {
  client.login(token)
    .catch(() => dialog.showMessageBox(mainWindow, {
    type: "error",
    title: "DiscordRaiderPLUS",
    message: "Invalid token",
    detail: "Please try again"
  }))
});

//NjI4NzQ2MDA3NDY2ODY4NzQ2.XZU6gQ.fwrud4MuJxeP1mxablx-UQFIk4A

ipcMain.on("setActivity", (e, activity) => {
  client.user.setActivity(activity.activityName, { type: activity.activityType }).then(() => {
    dialog.showMessageBox(mainWindow, {
      type: "info",
      title: "DiscordRaiderPLUS",
      message: "Successfully changed status"
    });
  });
});

ipcMain.on("command", (e, command) => {
  switch(command) {
    case "dmAll":
      
      break;
    case "kickAll":

      break;
    case "banAll":

      break;
    case "mentionEveryone":

      break;
  }
});

app.on('ready', startApp);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});