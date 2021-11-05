This project was bootstrapped with Create React App.

### Deployed (Live!)

Link...

### Demo

![homepage - upper part](./src/assets/images/homepage-up.png)
![homepage - lower part](./src/assets/images/homepage-down.png)

---

### Stories & Description

- The user runs the app & the start point is a login page which makes use of a 6 digit code (numeral password) to enter the application.
- The user enters the correct password then automatically redirected to homepage.
- The user views in homepage a grid of clickable cards (school-teams). Each card has the school team name & its logo.
- The user views in homepage a search bar where s/he can enter a team name or part of it (English letters) & click search to get the teams that their names matching or include the input searched.
- The user views in homepage a pagination bar to distribute cards equally per page.
- The user clicks a card should route to a new screen (teamDetails) with the details of the clicked team.
- The user can see in (TeamDetails) the upcoming & previous games of the clicked team.
- The user can also see the game details of the previous games.

---

## How to run the application

**1. API**

- Get the _free_ `API key` that should be sent to your email from collegefootballdata.com

**2. Clone the repository**

- Create a new folder and open it with VSCode.
- In the VSCode editor, in the space of the root folder, click the right button of the mouse & select `Open in Integrated Terminal`.
- Run the command below in the terminal

```
$ git clone https://github.com/BassamHajar/college_football_mws_ta.git .
```

**3. Update API key**

- In constants.js file, fill the value of the variable `API_KEY` with the api-key you received in your email.
- `Example`: export const API_KEY = "paste your api key here between quotations";
- Make sure not to add extra spaces in the value of api key.

**4. Install dependencies**

- Run the commands below respectively in the terminal

```
$ cd frontend && npm i
```

```
$ cd ../backend && npm i
```

**5. Run the app**

- Make sure your path is still in the backend folder
- Run the command below in the terminal

```
$ npm run start
```

**6. Enter This Password**

- You can find it in the file `constants.js`

---

## What & how is used to build this app?

### Hight level architecture

#### Backend

_Create the backend is necessary to create a **middleware** helps the http requests to **prevent** the Cross-Origin Resource Sharing (**CORS**)_

- Read the API Docs, get the endpoints needed & how to use the recommended library (**cfb.js**) that supports JavaScript.
- Install the packages needed.
- Create folders & files for start point (index.js), routes (teamRoutes.js), controllers (teamControllers.js) and the middleware needed & fetch the data, propagate it & return it.

#### Frontend

- Scaffold a React app using npx create-react-app tool.
- Cleanup the react app files & update the title in the html header.
- Structure the folders in **src** folder as follows:

  - **assets**: contains media files like images.
  - **components**: contains reusable components.
  - **context**: contains the state management files.
  - **pages**: contains full pages files that are each is been displayed according to a specific route.
  - **util**: contains general hooks & functions that could be used all over the app.

### Technologies

- JavaScript (React)
- Node.js (Express)
- RESTful AIP HTTP request
- DB - per client only (local storage)

### Dependencies

- **Backend**

  - cfb.js: ^4.2.2
  - express: ^4.17.1
  - concurrently: ^6.3.0

- **Frontend**

  - react: ^17.0.2
  - react-dom: ^17.0.2
  - react-paginate: ^7.1.3
  - react-router-dom: ^5.3.0

  ***

  ## Thanks for reading...
