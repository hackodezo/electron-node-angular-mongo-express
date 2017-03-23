const {app, BrowserWindow} = require('electron');

fs = require('fs');
config = JSON.parse(fs.readFileSync('config.json'));
let win

function createWindow () {
  app.server = require("/Users/athulsanthosh/repos/ENEMA" + '/app/app.js')();
  win = new BrowserWindow();
  win.loadURL('http://localhost:'+config.server.port);
  win.focus();
  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})
