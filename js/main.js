const { app, BrowserWindow } = require('electron')
const { platform } = require("os");

function createWindow() {

    if (process.platform == 'darwin') {
        let mainWindow = new BrowserWindow({
            show: false,
            frame: false,
            titleBarStyle: 'customButtonsOnHover',
            webPreferences: { experimentalFeatures: true },
        })
        mainWindow.loadFile('../examples/simple.html')
        mainWindow.maximize()
        mainWindow.show()
    } else {
        let mainWindow = new BrowserWindow({
            show: false,
            frame: false,
            titleBarStyle: 'hidden',
            titleBarOverlay: {
                color: '#FFFFFF00',
                symbolColor: '#666666',
                height: 15
            },
            webPreferences: { experimentalFeatures: true },
        })
        mainWindow.loadFile('../examples/simple.html')
        mainWindow.maximize()
        mainWindow.show()
    }
}


app.whenReady().then(createWindow)
