const {app, BrowserWindow} = require('electron')
const {platform} = require("os");

function createWindow() {

    if (process.platform == 'darwin') {
        let mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            frame: false,
            titleBarStyle: 'customButtonsOnHover',
        })
        mainWindow.loadFile('../examples/simple.html')

    } else {
        let mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            frame: false,
            titleBarStyle: 'hidden',
            titleBarOverlay: {
                color: '#FFFFFF00',
                symbolColor: '#74b1be',
                height: 15
            }
        })
        mainWindow.loadFile('../html/index.html')

    }
}


app.whenReady().then(createWindow)
