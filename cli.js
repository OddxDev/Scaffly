const fs = require('fs-extra');  //To managing File System
const path = require('path');  //To handle file and paths
const {command}= require('command');  //To handle CLI arguments

const program =new command;  //new command line program

program
    .command('Create <appname>')
    .option('--view <view>', 'view engine (default:ejs)', 'ejs')  //Default view engine is ejs
    .action(function(appname, options) { //Function to run when the command is executed        
      const appDir = path.join(process.cwd(), appname); // //Project Directory Path Define

      //Required Directories Add
      const dirs=
      [
        'bin',  //Server Startup Script
        'public/images',  //Image assets
        'public/javascript',  //JS files
        'public/stylesheets',  //CSS files
        'routes',  //Route Handling files
        'views',  //View Tamplates(EJS files)
      ];