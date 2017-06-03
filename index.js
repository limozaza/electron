//Node supporte pas import from :(
const electron = require('electron');

const { app, BrowserWindow }  = electron;

app.on('ready',()=>{
  //creation d'une fenetre
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
