# General Assembly Project 3:  CEST 

## Overview

CEST is a Full-Stack web application to rent flexible office spaces. Multiple locations option is available to search and rent in the UK and abroad.

## Timeframe

9 days

## Technologies Used

## Planning

* Trello

## Backend

* Node.js
* Express
* MongoDB
* Insomnia 
* Deployed through heroku

## Frontend

* JavaScript 
* React
* HTML
* CSS
* SASS
* Bootstrap


## Navigate and Play the deployed version

* https://cest-sei-project-3.herokuapp.com/

## Installation

* Navigate the deployed version online.
* Clone or download the repo, run the command yarn serve and inside the client folder yarn start.

## Application Overview

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629120649/Readme%20project%203/Screenshot_2021-08-16_at_12.15.31_knt9aw.jpg">

## Brief

* Group project to realise a MERN stack web application. It’s possible not only to browse the website and searching through the map or the search bar. We have also added multiple functionalities that allow users to register an account, and once logged in users can also create, read, update and delete comments and ratings for each space.

## Approach

We planned the work using the agile approach, assigning tasks to each member of the team and reviewing the progress based on the deadlines. We worked in different git branches and merged all of them in the main one before deploying.

<img src="http://res.cloudinary.com/dbc3fejob/image/upload/v1630579255/Readme%20project%203/Screenshot_2021-09-02_at_11.39.01_hv6zoc.png">

During the first part we coded the backend, that includes the Workspace and User models. We decided then to add another schema, the Comments, that are related with the Workspace and accessible only when the user is logged. 

Below the schema created for the Workspace schema:

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629129524/Readme%20project%203/Screenshot_2021-08-16_at_16.49.25_rfusci.jpg">

User schema:

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629129524/Readme%20project%203/Screenshot_2021-08-16_at_16.49.56_vod8rn.jpg">

Comment schema:

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629129524/Readme%20project%203/Screenshot_2021-08-16_at_16.49.41_uyi4be.jpg">

The second part was focused on the frontend. The React application has the following structure:

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629131766/Readme%20project%203/Screenshot_2021-08-16_at_17.35.24_wwhg44.jpg">

I wanted to have a minimalistic design using light colours and only one bright colour which is the same one I used to create the logo.

For CEST login and register, I used an Axios POST request to the API we built. 


<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629197726/Readme%20project%203/Screenshot_2021-08-17_at_11.54.42_wsrfb8.jpg">

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629197726/Readme%20project%203/Screenshot_2021-08-17_at_11.54.59_jahguh.jpg">

When the request is submitted it shows a Toast that I added importing ReactToastify. 

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629197726/Readme%20project%203/Screenshot_2021-08-17_at_11.54.28_p6m4rm.jpg">

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629197726/Readme%20project%203/Screenshot_2021-08-17_at_11.54.17_ihhys4.jpg">


## Challenges

Initially we had a few challenges using the branches on Git but reading the documentation helped us to not only get a better understanding of the tool, but also to realise the importance of working on multiple branches, which allowed us on many occasions to review, change and recover the project’s code. We also did not follow a proper styling so we incurred some overwriting and confusion. In order to solve that problem, we had to make some adjustments and rename some of the classes used.

## Wins

We spent the first day planning the project and set up an internal deadline to review the progress. This helped us to manage expectations and not stress out about the timeframe in order to complete the work. We worked in a team, learning from each other and getting used to reviewing and understanding other people's code. As I mentioned before, despite some initial challenges we had with styling, we have definitely achieved our goal of having a minimalist design and a responsive layout. 

## Key Learning/Takeaway

* **Working in the Git branches** - This was the first project I did, using the branches and besides some initial challenges we had merging the work, I feel that I got a strong understanding and I used it in all my next projects.
* **Bootstrap** - In the previous project I used Bulma so this time I wanted to learn another CSS framework. I totally love it as allows me to have an initial structure and gives me more time to focus on details and learning new things.
* **Deploy using heroku** - For this project I used a new tool to deploy, it was quite challenging as I had few parts to change but I feel more confident with the process and using the documentation.

## Future features

* Add a personalized user profile page.

## Team member:

* <a href="https://github.com/https://github.com/emilesherrott">Emile Sherrott</a>
* <a href="https://github.com/sarandis10">Sarantis Atonakas</a>
* <a href="https://github.com/TarasKiricenko">Taras Kiricenko</a>
* <a href="https://github.com/crigrande">Cristina Grande</a>
