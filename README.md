# NCNews Web App

A C.R.U.D. application for a social news aggregation, web content rating and discussion website.

**Deployed version:** [https://knc-news.netlify.app/]

This is the frontend portion of the NCNews Project. The backend is available here: [https://github.com/kdando/be-nc-news]

---

This is a single-page React app built to mobile-first design principles, styled with Bulma and some custom CSS. It serves articles from API calls which can be filtered by topic and sorted ascending or descending by several attributes. Articles can be voted up or down. Users can post or delete their own comments on articles. A default user is set when using the app.

---

### Requirements

Node.js 20.8.0

---

### Setup

To run this project locally...

Clone the repo:

`git clone https://github.com/kdando/nc-news`

The app makes its API calls to the NC News backend. To change this you will need to edit the functions in the /utils/utils.js file. If your preferred backend has the same endpoints and serves data in the same form as the NC News backend (see here: [https://github.com/kdando/be-nc-news/blob/main/endpoints.json]) then you can simply change the "baseURL" variable. Otherwise you will need to edit the util functions more substantially.

This project uses React, React Router and Axios for functionality, plus some Material Design Icons for visuals. All are installed as dependencies.

---

### Instructions

To get started, run:

`npm run dev`

This will run the application on a local port.
