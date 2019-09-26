# 1337 Library - Games Library

<p>Solo project submission for Week 8.</p>

## Index

[Brief](#brief) 

* [Solution](#solution) 

[Other Repositories and Sites](#or)

[Architecture](#architecture)

* [Entity Relationship Diagram](#erd) 

[Testing](#testing)

* [Report](#report) 

[Deployment](#deployment)

* [Technologies Used](#techused)

[Front End Design](#fedesign)

[Future Improvements](#improvements)

[Authors](#authors)

[Acknowledgements](#acknowledgements)

<a name="brief"></a>

## Brief

<p>Our brief was to create a piece of software that implemented CRUD functionality in 2 database tables using the technologies and techniques we had learned in our first 6-8 weeks at QAC.</p>

<a name="solution"></a>

## Solution

<p>My solution for this project was to create a games library that would allow the user to keep track of the games they own. The application will contain 2 tables, one for games, and one for the publishers who make games. There will be a front end website which will allow the user to create records in the tables, read the data from the tables, update the data in the tables, and delete records from the tables.</p>

<a name="or"></a>

## Other Repositories / Useful Sites

### API and Backend Testing Repository

[API](https://github.com/ChristopherBurns1996/projectAPI)

### Selenium Testing Repository

[Selenium-Testing](https://github.com/ChristopherBurns1996/projectSeleniumTests)

### Trello Board

[Trello Board](https://trello.com/b/Cew5BvdK/solo-project-1337library)

<a name="architecture"></a>

## Architecture

<a name="erd"></a>

### Entity Relationship Diagram

#### Intial ERD

![picture](README%20Images/initialERD.png)

<p>The ERD shown here was the initial plan which contained 4 tables. One for games, one for publishers, one for individual libraries, and one for the users of the system. In order to meet a MVP within the time frame, the user and library tables were removed, and the game and publisher tables were perserved to maintain the core functionality of the system.</p>

#### Final ERD

![picture](README%20Images/finalERD.png)

<p>The ERD shown here is the final plan for the site. It features 2 tables, and contains a 1 to many relationship between the publisher and games table, as one publisher could have made many games.</p>

<a name="testing"></a>

## Testing

<p>Testing my solution involved using Selenium in order to test the front end HTML and JavaScript files, Mockito and JUnit to test the API, and Codacy in order to check the overall quality of the code.</p>

### Mockito and JUnit

![picture](README%20Images/Mockito&JunitResults.png)

<p>Backend code coverage for the API was 100%, with 9 total JUnit tests which had a 100% pass rate.</p>

### Selenium

![picture](README%20Images/SeleniumResults.png)

<p>There were 22 total Selenium tests, which took roughly 2 and a half minutes to complete with a 100% pass rate.</p>

<a name="report"></a>

## Reports

### Codacy

<p>Below are the links to Codacy dashboards for each of the repositories used in the project.</p>

[1337Library](https://app.codacy.com/manual/ChristopherBurns1996/1337Library/dashboard)

[API](https://app.codacy.com/manual/ChristopherBurns1996/projectAPI/dashboard)

[Selenium-Testing](https://app.codacy.com/manual/ChristopherBurns1996/projectSeleniumTests/dashboard)

### Surefire Report

<p>Below is a link to the surefire report generated for the API of the project.</p>

[Surefire-Report-Page](http://34.89.59.112/surefire-report.html)

<a name="deployment"></a>

## Deployment

![picture](README%20Images/CIPipeline.png)

<p>Firstly Github was used as a VCS in order to keep track of the code I was creating. The backend was created using Java, Springboot, and the database created with MySQL. The front end web page was created using HTML5, JavaScript, and CSS. Trello was used to track the project, and codacy was used in order to review the code quality. Jenkins was used in order to automate the build process as much as possible, and ran automated testing which was created in a maven project using Selenium, Mockito, and JUnit. GCP was used in order to host Jenkins, as well as the backend and Apache which was used for the frontend. Postman was also used in order to test the API calls before they were implemented on the front end. Draw.io was used in order to create the project wireframes and ER diagrams.</p>

### Jenkins

![picture](README%20Images/Jenkins.png)

<p>Jenkins was set up to build with instructions located in a Jenkinsfile.</p>

<a name="techused"></a>

## Technologies Used

* Github - VCS
* Java, Springboot - API
* MySQL - Database
* HTML5, CSS, JavaScript - Front End
* Trello - Project Tracking
* Codacy - Code Review
* Jenkins - CI Server
* Maven - Testing Automation, API, Dependency Management
* Mockito, JUnit - Automated API Testing
* Selenium - Automated Front End Testing
* GCP - Live Environment
* Apache - Front End Deployment
* Postman - API Call Testing
* Draw.io - Diagram Design

<a name="fedesign"></a>

## Front End Design

### Wireframes

![picture](README%20Images/Wireframes/Main%20Menu.png)

![picture](README%20Images/Wireframes/Game%20Menu.png)

![picture](README%20Images/Wireframes/Add%20Game%20Page.png)

![picture](README%20Images/Wireframes/Display%20All%20Games.png)

![picture](README%20Images/Wireframes/Update%20Game%20Page.png)

![picture](README%20Images/Wireframes/Publisher%20Menu.png)

![picture](README%20Images/Wireframes/Add%20Publisher%20Page.png)

![picture](README%20Images/Wireframes/Display%20All%20Publishers.png)

![picture](README%20Images/Wireframes/Update%20Publisher%20Page.png)

### Final Design

![picture](README%20Images/FrontEndScreenShots/MainMenu.png)

![picture](README%20Images/FrontEndScreenShots/GamesMenu.png)

![picture](README%20Images/FrontEndScreenShots/AddGame.png)

![picture](README%20Images/FrontEndScreenShots/DisplayGames.png)

![picture](README%20Images/FrontEndScreenShots/UpdateGame.png)

![picture](README%20Images/FrontEndScreenShots/PublisherMenu.png)

![picture](README%20Images/FrontEndScreenShots/AddPublisher.png)

![picture](README%20Images/FrontEndScreenShots/DisplayPublishers.png)

![picture](README%20Images/FrontEndScreenShots/UpdatePublisher.png)

<a name="improvements"></a>

## Potential Future Improvements

* User login system
* Seperate libraries for each individual user
* Adding shortcuts to each game record to allow them to launch from 1337Library
* Execution Logs for when running tests
* Improve code quality based on Codacy recommendations

<a name="authors"></a>

## Authors

<p>Christopher Burns</p>

<a name="acknowledgements"></a>

## Acknowledgements

<p>QAC Trainers for training me in the technologies necessary to complete this project</p>