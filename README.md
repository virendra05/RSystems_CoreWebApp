
# Application Setup and Running Guide

## Prerequisites
3. **Node.js** - Install the 16.x version of Node.js which includes npm. This is required to run the Angular front-end.

4. **Angular CLI** - Install Angular CLI globally using npm:
   ```
   npm install -g @angular/cli@16
   ```

## Setup Instructions

3. **Clone** - Open Visual Studio 2022 > Click on "Clone a repository" > Add Repository Location as: "https://github.com/virendra05/RSystems_CoreWebApp.git" > Specify the folder path

3. **Open Frontend Project**:
   - Open Visual Studio Code > File > Open Folder > from the cloned repository location Open CoreWebApp Angular Project
   - Open the terminal in Visual Studio Code
   - Run the following command to install dependencies:
     ```
     npm install
     ```

## How to Run the Application

1. **Running the Angular Frontend**:
   - In Visual Studio Code, open the terminal.
   - Navigate to the Angular project directory (CoreWebApp).
   - Start the Angular application by running:
     ```
     npm start
     ```
   - Access the frontend by navigating to `http://localhost:4200` in a web browser.

COREWEBAPP
├── .angular
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets
│   │   └── .gitkeep
│   ├── employeeList
│   │   ├── employeeList.component.html
│   │   ├── employeeList.component.scss
│   │   └── employeeList.component.ts
│   ├── models
│   │   └── employee.model.ts
│   ├── services
│   │   └── employee.service.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

   ```
