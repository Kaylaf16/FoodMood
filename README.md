# FoodMood

FoodMood is a full stack node js application that allows users to enter their mood in and a list of restaurants is generated that suggests both healthy and unhealthy choices. The list differs depending on your mood!

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
insert the name of the database that contains the restaurant information in the index.js file
```
'mongodb://localhost:27017/restaurant_Database_Name'
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
