# voltis-portfolio-graphql

DEMO : https://portfolio-graphql-voltis.herokuapp.com/

graphQL layer on top of rest server api
restAPI: https://portfolio-voltis.herokuapp.com/

## Start App

Make sure you run:
`npm install`
`npm start`

graphQL: http://localhost:4000/

## graphQL query example

`{ getPortfolio { firstName, lastName, title, address, summary, resume social{ github, linkedIn } experience{ company, title, startDate, endDate, timeLine, present, description, address } education{ university, degree, startYear, endYear, timeLine, present, fieldOfStudy, address } certifications{ name, issuingOrganization, issueDate, expirationDate, credentialID, credentialUrl } skills, topSkills, languages } }`

## Publish to heroku

Prerequisites: Install Git and the Heroku CLI

- `heroku login`

- `heroku create graphQL`

- `git push heroku master`

need to add Config Vars
NODE_ENV to production

- `heroku open`
