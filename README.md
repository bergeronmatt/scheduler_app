# Getting Started

## Overview
**Cleanup feature has yet to be implemented**

This is a simple Scheduler Application for Mark Gray Enterprises. The sole purpose of this application is to replace a traditional
whiteboard with dry erase marker with a terminal or television screen. The client is tired of having their scheduled runs for their
drivers rubbed off as people move by, so they only require a scheduling system that shows runs. At this point in time, there is no 
need to need to save data, as they keep a record of their drives on their own, so data and space will automatically be cleaned up 
after a set period of time.

**Embedded Database File**

Due to the simplicity of the client's needs,t he production database client will be sqlite3: a simple, lightweight embedded sqlite 
database. This embedded file is located at <i>./api/data/data.db3</i> and is included in the gitignore files and dockerignore files.
See setting up your database.

This file will be embedded automatically at runtime via docker compose


## Cloning the Repository

1. To create your own branch, click the "Clone" button near the top right corner of the Repository page.
2. Copy and paste the generated line of code, and run it in the root file of your local directory.
3. You will need to cd into both the Client and Server directories and install the necessary packages
    - cd into ./client and run <i>npm i</i>
    - cd into ./server and run <i>npm i </i>

## Setting up your local database

Follow these steps to initialize a new database for your local environment.

1. Run the following command to generate your local environment's database:
    - <i>touch api/data/data.db3</i>
2. cd into the ./api folder
3. Run the following command to create your database tables
    - <i>npx knex migrate:latest</i>
4. Run the following command to seed your database with a seed appointment and default user
    - <i>npx knex seed:run</i>

In the event during development you should find an issue with your database file, you can either delete
the file, and follow the above steps again, or you can run simply run the following command to rollback
your database to a blank database
    - <i>npx knex migrate:rollback</i>

When you have corrected your issues, you can then simply repeat steps 3 and 4 from above to reinitialize
your database with the seed data.
## Creating a Branch

Once you have your local repository initialized from the main branch, you will need to set up a branch for your feature

1. Make sure you're in the root directory of the procject
2. Run the following command in your terminal <i>git checkout -b feature/<branch-name></i>
    - please refer to ComResource's branch and naming nomenclature for more detail on naming your branch
    - <a href="https://comresource.atlassian.net/wiki/spaces/CAD/pages/851869735/Source+Control+Branching">ComResource Source Control</a>
3. Once you've run the above command, your local repository will automatically be set to your branch
4. Add your current branch to be committed with <i>git add .</i>
5. Commit your initial branch <i>git commit -m "This is a comment section to explain your changes"</i>
6. Set your upstream with <i>git push --set-upstream origin main <branch> </i> where branch is your current feature from above 
    - a shortcut to this is to type in <i>git push</i> and an error message will pop up in your terminal with the full command line you will need
    - copy and paste it into your terminal and run
7. Your upstream will now be set, and you will only need to run <i>git push</i> after you add and commit your changes from steps 4 and 5

## Running your project locally

Once you have initialized your database and installed all the necessary packages in on the client and server sides, you can now run your
project locally

**For Development**

1. cd into ./api and then run the following in your terminal
    - <i>npm run dev</i>
2. in a separate terminal window, cd into ./client and run the following
    - <i> npm start </i>

**For Production**

Before deploying any updates to production, you must update the production build folder on the Client Side, otherwise
Docker will build using a previous production build. 

1. To update your production build, delete the build folder from the client directory, and run the following command
    - <i>npm run build</i>

This will update the client side of the app and your development changes will take effect on the next docker compose up.

2. To run the production build locally to check for any issues, use the following command
    - <i>npm run serve</i> 

In either of the above cases, these will be your local ports:

Your server and api should be running locally on http://localhost:8080
Your client will be running on http://localhost:3000

Be sure not to change the client's url to anyother port, as this will interfere with the cors policy set on the backend, and
http requests from the client side will not be allowed.

**Need to change where the front end is calling for when the api is running in production**

**Need to change cors policy for when front end is in production**

## Source Control
Please refer to ComResource's proceduure on source control through the above link

**Database and Data**

Due to the small scope of this project, persisting the database beyond the initial seed state isn't necessary nor time and
cost efficient at this point. Please see the Setting Up Your Local Database section for details on database management.

In the future, should the client's needs change, a more structured database, either through MySQL or PostgreSQL may be
implemented.

## Scheduler App

The scheduler application is from the following packages, <i>devextreme</i> and <i>devextreme-react</i>

For the source documentation <a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/React/Light/">see here.</a>

A brief overview of the features relevant to the project

1. The scheduler must receive the data from the database to render the appointments. This is fed into the Scheduler.datasource attribute

2. The views attritube is an array of strings that dictate the views available to the user, such as if you were to only have "Week" in the views array, the user would only be able to see the week view and not the Day or Month schedules.

3. The onAppointmentAdded, onAppointmentDeleted, and onAppointmentUpdated attributes hold the add, delete, and update methods, respectively. These will need to be set to their respective attributes in order to make changes on the front end persist into the next session.

4. To change the default view, change the defaultCurrentView to a string value of day, week, work week, month, etc.

##  API

**POST /api/auth**

The client will send their login information to the backend and receive an auth token. That token will be set into their localstorage for authentication to validate them to be able to access the calendar, as well as make calls to the database. This auth token will be needed to receive 

Schema:

{

    "email": "info@comresource.com",

    "password": "NewPass1234"

}

**GET /api/validate**

There are no parameters or schema for this api call. This call automatically checks to see if the client is signed in and has a valid Authorization Token set in the request headers. Should the request be invalid, then the client will be redirected to the login page until a valid login is sent, and a valid auth token is generated.

**GET /api/runs/list**

There are no parameters needed for this endpoint. This will return a list of all the appointments stored in the database. This call can only be made by an authorized request with an Authorization Header set with the token.

**POST /api/runs/add_run**

When an appointment is added, it will call this endpoint to add the appointment to the database list. The appointment will need a string for the title set within the text attribute, a string for the description attribute, a boolean value for allDay, and timestamps for the startDate and endDate attributes. The startDate and endDate attributes must be set to millisecond values, otherwise they will not render within the scheduler. 

{
  
    "text": "Insert Test",

    "startDate": 1651161600000,
  
    "endDate": 1651163400000,
  
    "description": "This is a test appointment to be inserted into the database",
  
    "allDay": false

}

**PUT /api/runs/update/:id**

When an appointment is updated, whether it is by editing the text, description, or other values, then the update api will be called. The attributes needed to update the appointment are the same as the appointment POST api schema. The update will also need the appointment id as a uri paramater to push the updates through.

{
  
    "text": "Insert Test",

    "startDate": 1651161600000,
  
    "endDate": 1651163400000,
  
    "description": "This is a test appointment to be inserted into the database",
  
    "allDay": false

}

**DELETE /api/runs/id**

There are no schemas or objects required for this call. The call to this endpoint requires an Authorization Header to take into effect, and the post id for the request parameters. This api endpoint will be called when the user selects the delete icon when selecting an appointment, but not moving or editing the appointment.