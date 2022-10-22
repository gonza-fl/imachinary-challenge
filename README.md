# Imachinary Challenge v1

This is my first version in which I add the main features or requirements.

  ### The project is created using the following tools:

    - node@v16.17.1
    - npm@8.15.0
    - postgreSQL@14.5.0

  Note: If you have not this tools, you need install these technologies for run the project in this version.

  ### Get Started

  Clone the repository and add .env file to set the environments variables.

    $ git clone git@github.com:gonza-fl/imachinary-challenge.git

    $ cd imachinary-challenge

    $ touch .env // in linux
    $ type nul > .env // in windows

  
  In the .env file you need add the following variables:

    PORT=3001 //you can modify this parameter
    DB_PASSWORD=<YOUR_POSTGRESQL_PASSWORD>
    DB_NAME=<YOUR_DATABASE_NAME>
    DB_USER=<YOUR_POSTGRESQL_USER_NAME>
    DB_HOST=localhost
    PREFIX_VERSION=/v1
    DROP_TABLES=true // if you want drop tables when reset the server

  - **To create a database in postgres**: https://www.postgresql.org/docs/current/sql-createdatabase.html

  Now you need **install the dependencies** and execute the run script **for server up**

    $ npm install
    
  **and execute** 

    $ npm run dev //server up with nodemon.

  **or** 

    $ npm start //run "node ./src/index.js"

  
  ## Endpoints

  ```js
   GET {{base_url}}/person
    
    /**
    * To Get All people
    * and yours movies and roles
    */

   GET {{base_url}}/person/:id

   /**
    * Replace /:id to some number
    * between 1 and 5 to Get a person
    * by id and its movies and roles
    */

   GET {{base_url}}/movie

   /**
    * To Get All movies
    * and their films and roles
    */

   GET {{base_url}}/movie/:id

   /**
    * Replace /:id to some number
    * between 1 and 5 to Get a movie
    * by id and its cast
    */

  ```