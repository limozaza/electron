//Node supporte pas import from :(
const electron = require('electron');

const { app }  = electron;

app.on('ready',()=>{
  console.log('app is now ready');
});