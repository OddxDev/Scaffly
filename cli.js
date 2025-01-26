const fs = require('fs-extra');  //To managing File System
const path = require('path');  //To handle file and paths
const { command } = require('command');  //To handle CLI arguments

const program = new command;  //new command line program

program
    .command('Create <appname>')
    .option('--view <view>', 'view engine (default:ejs)', 'ejs')  //Default view engine is ejs
    .action(function (appname, options) { //Function to run when the command is executed        
        const appDir = path.join(process.cwd(), appname); // //Project Directory Path Define

        //Required Directories Add
        const dirs =
            [
                'bin',  //Server Startup Script
                'public/images',  //Image assets
                'public/javascript',  //JS files
                'public/stylesheets',  //CSS files
                'routes',  //Route Handling files
                'views',  //View Tamplates(EJS files)
            ];

        dirs.forEach((dir) => fs.ensureDirSync(path.join(appDir, dir)));  //Create all directories

        //Create package.json file 
        const packageJson = {
            name: appname,  //Project Name
            version: '1.0.0.0',  //Version
            main: 'app.js',  //Entry Point file
            dependecies: {
                express: '^4.17.1',  //Express is the Primary dependency
            }
        };

        //Writing package.json to the project folder
        fs.writeJSONSync(path.join(appDir, 'package.json'), packageJson);

        //Create app.js file for ExpressJs setup
        const appJs = `const express= require('express');
        const app= express();
        const path =require('path');
        const port= 3000;

        //Set the view engine to ejs
        app.set('view engine', 'ejs');

        //Serve the static files(CSS, JS, Images) from the "public" folder
        app.use(express.static(path.join(__dirname, 'public')));

        //Setup a basic route for the root URL
        app.get('/', function(req, res){
            res.render('index');  //Render the index from view
        });

        //Start the server on Port 3000
        app.listen(port, function(){
            console.log("Server started on https://localhost:3000");
        });`;

        //Write the app.js file to the project folder
        fs.writeFileSync(path.join(appDir, 'app.js'), appJs);

        //Creating routes for handling requests