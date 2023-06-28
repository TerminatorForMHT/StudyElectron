const { app, BrowserWindow } = require('electron')

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#FFFFFF00',
      symbolColor: '#74b1be',
      height: 10
    },
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('../html/index.html')
}

app.whenReady().then(createWindow)
