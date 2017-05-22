'use strict';

const {app, BrowserWindow} = require('electron')
let mainWindow = null

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 400,
        width: 300,
        titleBarStyle: 'hidden-inset'
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});
