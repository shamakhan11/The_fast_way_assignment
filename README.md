# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
o develop a simple Adonis command for retrieving data from the Coingecko API and storing it in a database, follow the steps below:

Step 1: Set up a new Adonis project

Install Adonis CLI globally by running the command: npm install -g @adonisjs/cli.
Create a new Adonis project by running: adonis new <project-name>.
Change into the project directory: cd <project-name>.
Step 2: Create the Adonis command

Generate a new command using the Adonis CLI: adonis make:command FetchCoinData.
Open the newly created command file (app/Commands/FetchCoinData.js).
Replace the content of the file with the following code:

Step 3: Set up the database

Configure your database connection details in the .env file.
Create a migration file to define the coins table schema. Run the following command: adonis make:migration coins.
Open the newly created migration file (database/migrations/<timestamp>_coins_schema.js) and define the table schema. For example:

Run the migration to create the necessary table in the database: adonis migration:run.

or
model of coin
ChatGPT
To create the Coin model in your Adonis project, follow these steps:

Open a terminal and navigate to your Adonis project's root directory.
Run the following command to generate a new model file named Coin:
adonis make:model Coin


To connect the Adonis project with an SQLite3 database, follow these steps:

1,Open the .env file in the root of your Adonis project.
2,Locate the DB_CONNECTION variable and set its value to sqlite.
3,Uncomment the DB_DATABASE variable and set its value to the path where you want to store the SQLite database file. For example:
DB_CONNECTION=sqlite
DB_DATABASE=./database.sqlite

2.Save the .env file.
Next, you'll need to install the sqlite3 package as a dependency and configure the database provider in Adonis.

Open a terminal and navigate to your Adonis project's root directory.
Run the following command to install the sqlite3 package:
npm install sqlite3 --save

3.To open the SQLite database file created by Adonis in your project, you can use a SQLite database viewer or a SQLite client. Here's an example of how you can open the adonis.sqlite file:

Download and install a SQLite database viewer or client of your choice. Some popular options include:
SQLiteStudio: https://sqlitestudio.pl/
DB Browser for SQLite: https://sqlitebrowser.org/
DBeaver: https://dbeaver.io/
Launch the SQLite viewer or client.

In the viewer or client, look for an option to connect to a database or open a database file. Select that option.

Browse to the directory where your Adonis project is located.

Within the project directory, locate the adonis.sqlite file, which is the SQLite database file created by Adonis.

Select the adonis.sqlite file and open it using the SQLite viewer or client.

Once the SQLite database file is opened, you can explore its tables, run queries, and perform various operations on the database.

Please note that it's always recommended to back up your database file before making any modifications or directly accessing it through external tools.