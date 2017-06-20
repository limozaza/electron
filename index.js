//Node supporte pas import from :(
const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain }  = electron;

let mainWindow;

app.on('ready',()=>{
  //creation d'une fenetre
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});


ipcMain.on('video:submit', (event, path) => {
  ffmpeg.ffprobe(path,(err, metadata) =>  {
      mainWindow.webContents.send(
        'video:metadata',
        metadata.format.duration
      );
  });

});
