const fs = require('fs-extra');  //To managing File System
const path = require('path');  //To handle file and paths
const { Command } = require('commander');  //To handle CLI arguments
const { PassThrough } = require('stream');

const program = new Command;  //new command line program

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
            dependencies: {
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
            console.log("Server started on http://localhost:3000");
        });`;

        //Write the app.js file to the project folder
        fs.writeFileSync(path.join(appDir, 'app.js'), appJs);

        //Creating routes for handling requests

        //Create routes for the Homepage (Index route)
        const routesIndex = `const express =require('express');
        const router=express.Router();
        
        //Handle GET requests to the rooot URL
        router.get('/', function(req, res){
          res.render('index');  //Render index.ejs view
         });
         
         module.exports=router;`

        //Create route for Users(Users route)
        const routesUsers = `const express =require('express');
         const router=express.Router();

         //Handle GET request to '/users'
         router.get('/', function(req, res){
         res.send('Users Route');  // User route simple response
         });

         module.exports=router;`

        //Writing the routes file to the route folder
        fs.writeFileSync(path.join(appDir, 'routes/index.js'), routesIndex);
        fs.writeFileSync(path.join(appDir, 'routes/users.js'), routesUsers);

        //Creating views folder with a basic index.ejs file with basic HTML boilerplate code
        const indexEJS = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
        </head>
        <body>
        <h1>Hello World</h1>
        </body>
        </html>`;

        //Write the index.ejs file to the views folder
        fs.writeFileSync(path.join(appDir, 'views/index.ejs'), indexEJS);

        //Create the stylesheets folder and a default css file with a universal selector(*)
        const styleCSS = `*{
        margin:0px;
        padding:0px;
        }`;

        //Write the CSS file to the public/stylesheets folder
        fs.writeFileSync(path.join(appDir, 'public/stylesheets/style.css'), styleCSS);

        //Create the bin floder and a basic www file for server starting
        const binFile = `#!/usr/bin/env node 

        const app = require('../app'); // Import app.js
        const http = require('http');
        const debug = require('debug')('app:server');

        // Normalize the port to be a number or false
        const port = normalizePort(process.env.PORT || '3000');
        app.set('port', port);

        // Create the HTTP server using Express app
        const server = http.createServer(app);

        // Start the server and log the URL
        server.listen(port, function () {
            console.log('Server started on http://localhost:' + port);
        });

        // Function to normalize the port
        function normalizePort(val) {
            const port = parseInt(val, 10);
            if (isNaN(port)) return val; // If not a number, return the value as-it-is
            if (port >= 0) return port; // If it is a valid port, return it
            return false; // If it is a invalid port, return false
        } `;

        //Write the www file to the bin folder to make it executed
        fs.writeFileSync(path.join(appDir, 'bin/www'), binFile);

        // Apply execution permission only on Unix-like systems (Linux/macOS)
        if (os.platform() !== 'win32') {
            fs.chmodSync(path.join(appDir, 'bin/www'), 0o755); // Give execution permission on Linux/macOS
        }

        //Success
        console.log(`Scaffolding for "${appname}" is done successfully.`);
        console.log('Next steps:');
        console.log(`cd ${appname}`);
        console.log('npm install');
        console.log('npm start');


    });

//Parsing the CLI arguments
program.parse(process.argv);