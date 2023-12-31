# Personal task list with auto save.

This is a simple project to create tasks and sub tasks, created using new functional React.js Tailwind CSS and Vite for better and faster frontend development.

In the backend I have used Node.js Express and MySQL as the server and database respectively. Proper error handling is being carried out in the creation of the backend and sufficient care is being taken to reduce the API calls.


## The tech stack used in this project is as follows

Frontend - HTML, CSS, JavaScript, React.js, Tailwind CSS.

Backend - MySQL, Node.js, Express.js.

## Running the backend server

### Create a db.js file in Backend folder and write the below code to make SQL connection

``` javascript
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'userName',
    password: 'yourPassword',
    database: 'databasename'
});
```


## Gallery


https://github.com/prizzv/personal-task-list/assets/84437216/b664fbed-1d6f-46c0-ba6e-4a2309d2a7ce

In the above video there is no save button since an auto save feature is implemented. The task and sub tasks save atuomatically only after the user stops typing, this helps in reducing the number of api callbacks while still using the auto save feature.

There are specific create new task and delete current task buttons present.

https://github.com/prizzv/personal-task-list/assets/84437216/4d250c56-be17-4f74-a46a-8b6b129c9efb

The UI is completely customizable and works exceptionally in all devices.
