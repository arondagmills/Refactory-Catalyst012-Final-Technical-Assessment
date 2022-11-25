const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/db");


const expressSession = require("express-session")({
	secret: "arondag",
	resave: false,
	saveUninitialized: false,
});


mongoose
	.connect(`${config.database}`, { useNewUrlParser: true })
	.then(() => console.log("Connected to DB"))
	.catch((err) => console.log(err));




app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use("/public/image", express.static(__dirname + "/public/image"));
app.use(expressSession);
app.use(express.json());


app.get("/", (req, res) => {
	res.render("form");
});

app.listen(1000, () => console.log("connected"));