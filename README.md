# NASA-APOD-API-project

main tools used: MongoDB, ExpressJS, ReactJS(vite), NodeJS, NASA'S APOD api.

When user sign-up or login to the website the website naviagtes user to the picture page where they can see the astronomy picture of the day.
By using RESTful api, I am making xmlhttprequests to NASA's one of the open apis called: APOD, which shows daily astronomy picture of the day. Therefore, when user revisits the next day, upon successful login/sign-up user can also see these updates in my website!

If sign up was successful user information gets stored in MongoDB database.

Notes:
  - currently the website doesn't have cookies so even though user is logged in, redirected to the picture page, when user clicks the back arrow button
  in the brower, it doesn't remember the log-in status.
  - styling of the website is set to minimal -- Website is responsive so it is mobile-friendly; however background color or the color theme of the website
  is very minimal.
  - It would be nice to add google OAuth feature.
