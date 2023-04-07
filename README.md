# NASA-APOD-API-project

Created a simple website that user can log in and sign up and redners the picture of the day using MongoDB, ExpressJS, ReactJS, and NodeJS.
User information is stored in the MongoDB database if the sign-up was successful.

By using RESTful api, I am making requests with Axios to one of the NASA's open API called: 'Astronomy Picture Of the Day'. NASA's APOD api basically
updates the astronomy picture and its according infromation everyday so when user either sign up or login to my website, they can see this daily updates
as well.

Deployed here to vercel.com: https://nasa-apod-api-project.vercel.app/

Notes/Will be Nice to have:
* Currently the website doens't provide cookies so when the user is registered or logged in, re-routed to the picture page,
  and clicks the back arrow button the website doesn't remember that the user is logged in.
* Styling of the current website is set to minimal -- It is responsive so it is mobile friendly; however if I had more time it would have been fun to
  add more styling features.
