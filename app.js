/*
 Authors:
 Your name and student #:
 Your Partner's Name and student #:
 (Make sure you also specify on the Google Doc)
*/
const express = require("express");

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
let movielist = [" "];



app.get("/", (req, res) => res.render("pages/index"));

app.get("/myForm", (req, res) => res.render("pages/myForm", {qs: req.query}));

app.post("/myForm", (req, res) => {
  // Add your implementation here
  let formData = req.body;
  let movie = formData.movieName;
  myMovies = movielist.append(movie.replace(/,/g, "\n" , movie[0].toUpperCase() + movie.toLowerCase()));
  //let movieList = replaceComma(movie);
 // function replaceComma(data) {
    //let dataToarray = data.split(",").map(item => item.trim());
   // return dataToarray.join("\n");
  //}
  //let movieList = string.replace(movie[0].toUpperCase() + formData.slice(1)
  
  console.log(movie.replace(/,/g, "\n" , movie[0].toUpperCase() + movie.toLowerCase()));
});

app.get("/myListQueryString", (req, res) => {
  // Add your implementation here
  let movieName = req.query.movieName;
  //res.send('<p>My Movie List ${movieName}</p>')
  let formData = req.body;
  console.log(formData);
  let movie = formData.movieName;
  if (databaseOfmovies.includes(movie)) {
      res.render("pages/result", { result: movieName.SUCCESS });
  } 
      res.render("pages/result", { result: movieName.FAILURE }); 
});



app.get("/search/:movieName", (req, res) => {
  // Add your implementation here
  let movie = req.query.movieName;
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});