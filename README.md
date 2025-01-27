# Scaffly CLI Tool

**Scaffly** is a basic Express scaffolding tool that automates the setup process for Express.js backend projects. This tool generates all the essential folders, installs the necessary dependencies, and provides boilerplate code to get you started right away. Whether you're building a simple API or a full-fledged web application, **Scaffly** simplifies the setup process, so you can focus on the logic of your application.

With **Scaffly**, you can generate an Express project with a simple command, including all the required configurations, routes, views, and a basic Express server setup.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Create a New Project](#create-a-new-project)
  - [Project Structure](#project-structure)
  - [Sample Routes & Views](#sample-routes-views)
  - [Customizing the View Engine](#customizing-the-view-engine)
- [Contributing](#contributing)
- [License](#license)
- [FAQ](#faq)
- [Acknowledgments](#acknowledgments)

---

## Introduction

**Scaffly** was developed to provide a simple and quick way to set up an Express.js backend project. The tool automates the creation of folders, the installation of dependencies like **Express**, and the generation of essential files for a basic backend project. With **Scaffly**, you no longer need to manually set up the folder structure, install Express, or write boilerplate code. This tool takes care of all of that for you.

Whether you're starting a small Express app or experimenting with backend development, **Scaffly** helps you hit the ground running.

---

## Features

- **Express Installation**: Automatically installs the latest version of **Express** and sets it up in your project.
- **Pre-configured Folder Structure**: Automatically generates essential folders such as `bin`, `public`, `routes`, and `views`, which are standard in any Express app.
- **Boilerplate Code**: Provides simple, working boilerplate code for the Express server, routes, and views.
- **Easy Customization**: Supports the customization of the view engine during project setup (EJS by default).
- **Quick Setup**: Generates a fully functional Express app with just one command.

---

## Installation

### Prerequisites

Before using **Scaffly**, you need to have **Node.js** and **npm** installed on your machine.

To check if they are installed, run the following commands:

```bash
node -v
npm -v
```

If Node.js is not installed, download it from [here](https://nodejs.org/en).

### Installing Scaffly Globally

You can install Scaffly globally on your system using the following npm command:

```bash
npm install -g scaffly
```

This will make the `scaffly` command available from the command line.

---
## Usage

### Create a New Project

Once Scaffly is installed globally, you can easily create a new Express project by running the following command:

```bash
scaffly Create <appname> --view <viewEngine>
```

Where:

- `<appname>` is the name of the project you want to create.
  
- `--view <viewEngine>` is an optional flag to specify the view engine you want to use. By default, the tool uses EJS.

**Example:**

To create a new project called `myExpressApp`:

```bash
scaffly Create myExpressApp
```

This will generate a new project with the name myExpressApp, including all necessary folders and a basic Express setup.

**Example with Custom View Engine (e.g., Pug):**

To use Pug as the view engine instead of EJS, run:

```bash

scaffly Create myExpressApp --view pug
```

---

### Project Structure

When you run the `scaffly Create` command, the following folder structure is automatically generated:

```bash
myExpressApp/
  ├── bin/
  │   └── www            # Server startup script
  ├── public/
  │   ├── images/        # Image assets
  │   ├── javascript/    # JavaScript files
  │   └── stylesheets/   # CSS files
  ├── routes/
  │   ├── index.js       # Index route
  │   └── users.js       # Users route
  ├── views/
  │   └── index.ejs      # Basic EJS view
  ├── app.js             # Main Express server file
  ├── package.json       # Project dependencies and configurations
  └── package-lock.json  # Locked dependencies

```

This structure contains:

- **bin/www**: The server startup file, where the Express app is configured and started.
- **public/**: Folder containing static assets like images, CSS, and JS files.
- **routes/**: Folder for Express routes, including an example route (index.js) and another (users.js).
- **views/**: Contains views for rendering, with a default view index.ejs that you can modify.
- **app.js**: The main file that configures the Express server.
- **package.json**: The file containing project metadata, dependencies, and scripts.

---

### Sample Routes & Views
  
After running the `Scaffly` CLI tool, you will find the following default routes:

- **routes/index.js**: A route that renders the `index.ejs` view.
- **routes/users.js**: An additional route that can be used for user-related functionality.
  
You can easily modify these routes or add more as needed.

The default view `views/index.ejs` is a simple HTML file that can be edited to match the needs of your project.

---

### Customizing the View Engine

**Scaffly** uses **EJS** as the default view engine. However, if you prefer to use a different view engine, such as **Pug**, you can specify it during project creation with the `--view` flag. If you need to change the view engine after the project has been generated:

1. Install the required view engine. For example, to install **Pug**:

```bash
npm install pug

```

2. Change the view engine in **app.js**:

```bash
app.set('view engine', 'pug');
```

---

## Contributing

If you would like to contribute to **Scaffly**, feel free to fork the repository, make changes, and submit a pull request. We appreciate contributions such as bug fixes, feature enhancements, or improvements to documentation.

### Steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

---

## License

This project is licensed under the [MIT License](./MIT_License.md)

---

## FAQ

**Q: What does Scaffly do?**

A: Scaffly is a command-line tool that scaffolds a basic Express.js project structure. It installs Express, creates necessary directories like `routes`, `views`, and `public`, and provides simple boilerplate code to help you start building your Express backend project.

**Q: Can I change the generated project structure?**

A: The generated structure is designed to be a good starting point for most Express apps. However, you can modify it after the project has been created according to your needs.

**Q: How do I modify routes or views after scaffolding?**

A: Simply open the generated `routes/` and `views/` files, and modify them as needed. You can add more routes, views, or even middlewares depending on your project's requirements.

**Q: Does Scaffly support other backend frameworks?**

A: No, Scaffly is specifically designed for Express.js. However, you can manually modify the generated code if you need to use it with other frameworks.

---

## Acknowledgments

- **Express.js**: For being a powerful and flexible backend framework.
  
- **EJS**: For providing a simple and effective templating engine.
  
- **npm & Node.j**s: For making it easier to install dependencies and manage the project.
  
- **Open Source Community**: For all the contributions that make projects like **Scaffly** possible.
