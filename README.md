# FoodMood

FoodMood is a full stack application that allows users to enter their mood and a list of restaurants is generated that suggests both healthy and unhealthy choices. The list differs depending on your mood! The application uses IBM Watson natural language analytics to determine your mood. This application encourages healthy eating when people are feeling down!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
You will first need the latest version of node on your system.

The project also requires you to have your own IBM Watson Bluemix account since the application utilizes this.

Lastly you will need MONGODB up and running on your system with the restaurants database on it. You can find the json file to get this database here:
https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json
```

### Installing

A step by step series of examples that tell you have to get a development env running

install all package dependencies

```
npm install
```

insert your bluemix credentials in the foodquery.js file
```
      'username': 'Your_username',
      'password': 'Your_password',
```
insert the name of the database that contains the restaurant information into the index.js file (db.connect)
```
For local mongodb server
'mongodb://localhost:27017/restaurant_Database_Name'

For mlab
'mongodb://<dbuser>:<dbpassword>@<mlabconnectivity>/<databaseame>'
```
run webpack
```
npm run webpack
```
start the server
```
npm start
```

If you run this correctly you should see "Local Host running on port 8000" running on the terminal

## Deployment

https://foodmoodproject.herokuapp.com/

## Built With

* [IBM WATSON NATURAL LANGUAGE UNDERSTANDING](https://www.ibm.com/watson/developercloud/natural-language-understanding/api/v1/?node#introduction) - Natural Language Processing
* [MONGODB](https://www.mongodb.com/) - Database used
* [REACT](https://reactjs.org/) - Client side rendering framework used
* [EXPRESS](https://expressjs.com/) - Backend framework used
* [WEBPACK](https://webpack.js.org/) - Allowed me to run React in my application using babel


## Authors

* **Kayla Ford**

## Example
![Alt text](./public/example.png?raw=true "Title")
