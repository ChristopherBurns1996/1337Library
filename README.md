# 1337 Library - Games Library



<p>Solo project submission for week 8</p>



## Index

[Brief](#brief) 

* [Solution](#solution) 



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

<a name="architecture"></a>


## Architecture

<a name="erd"></a>


### Entity Relationship Diagram

#### Intial ERD

<p>put in link to intial er diagram</p>

<p>The ERD shown here was the initial plan which contained 4 tables. One for games, one for publishers, one for individual libraries, and one for the users of the system. In order to meet a MVP within the time frame, the user and library tables were removed, and the game and publisher tables were perserved to maintain the core functionality of the system.</p>

#### Final ERD

<p>put in link to final er diagram</p>

<p>The ERD shown here is the final plan for the site. It features 2 tables, and contains a 1 to many relationship between the publisher and games table, as one publisher could have made many games.</p>

<a name="testing"></a>


## Testing

<p>Testing my solution involved using Selenium in order to test the front end HTML and JavaScript files, Mockito and JUnit to test the API, and Codacy in order to check the overall quality of the code.</p>

## Mockito and JUnit

<p>Insert mockito code coverage here</p>

<p></p>

## Selenium

<p>Insert something to do with selenium here</p>

<p></p>

<a name="report"></a>


## Reports

### Codacy

<p>Below are the links to Codacy dashboards for each of the repositories used in the project.</p>

<p>codacy link 1</p>

<p>codacy link 2</p>

<p>codacy link 3</p>

<a name="deployment"></a>


## Deployment

<p>that ci diagram</p>

<p>Firstly Github was used as a VCS in order to keep track of the code I was creating. The backend was created using Java, Springboot, and the database created with MySQL. The front end web page was created using HTML5, JavaScript, and CSS. Trello was used to track the project, and codacy was used in order to review the code quality. Jenkins was used in order to automate the build process as much as possible, and ran automated testing which was created in a maven project using Selenium, Mockito, and JUnit. GCP was used in order to host Jenkins, as well as the backend and Apache which was used for the frontend.</p>

<a name="techused"></a>


## Technologies Used

<a name="fedesign"></a>


## Front End Design

<a name="improvements"></a>


## Potential Future Improvements

<a name="authors"></a>


## Authors

<p>Christopher Burns</p>

<a name="acknowledgements"></a>


## Acknowledgements