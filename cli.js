const fs = require('fs-extra');  //To managing File System
const path = require('path');  //To handle file and paths
const {command}= require('command');  //To handle CLI arguments

const program =new command;  //new command line program

program
    .command('Create <appname>')
    .option('--view <view>', 'view engine (default:ejs)', 'ejs')  //Default view engine is ejs
    .action(function(appname, options)  //Function to run when the command is executed
        {
            const appdir= path.join(process.cwd(), appname);  //Project Directory Path Define
