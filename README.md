# AR-Dice
A simple page to show dice with AR.

## Starting point
- Install dependencies with `npm install`.
- Copy the `.env.example` file to a new `.env` file. Insert the correct information.
- Run the server with `npm start`. Port 3000 is the default.
- Allow camera access.
- Show the Kanji marker. The expectation is to see a 6-sided die animation.

![kanji](https://github.com/anacko/AR-Dice/tree/main/images/kanji.png)

## Tecnical details and Dependencies
This project uses Express server, and sets a cookie with the roll number.
Depending on the value of the cookie, a different model is rendered, showing the roll face up.
- Express.js (4.17.2)
- EJS (3.1.6)
- Cookie-parser (1.4.6)
- Dotenv (11.0.0)

## Source
The 3d model, and each if its views, is from MS 3D Library models (Die 6-Sided 16mm).
![faces](https://github.com/anacko/AR-Dice/tree/main/images/d6-roll_imgs.png)